/**
 *    PATH: https://<FRONTEND_URL>/api/revalidate
 *    METHOD: POST
 *    INFO: Revalidates the cache of the specified page.
 *    PAYLOAD: { data: string, secret: string } as json
 */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }
  const { data, secret } = await JSON.parse(req.body);
  if (!data || !secret) {
    return res.status(422).json({ message: "Missing required fields." });
  }

  if (secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Unauthorized secret token." });
  }
  try {
    switch (data) {
      case "events":
        await res.revalidate("/events").then(async () => {
          await res.revalidate("/");
        });
        break;
      case "faqs":
        await res.revalidate("/");
        break;
      case "alumni":
        await res.revalidate("/about");
        break;
      case "officers":
        await res.revalidate("/about");
        break;
      default:
        return res.status(422).json({
          message: "Invalid dataType provided in 'data' field.",
        });
    }
    return res.json({ revalidated: true, message: "Cache Revalidated Successfully" });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : "An unknown error occurred.",
    });
  }
}
