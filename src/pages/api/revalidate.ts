/**
 *    PATH: https://<FRONTEND_URL>/api/revalidate
 *    METHOD: POST
 *    INFO: Revalidates the cache of the specified page.
 *    PAYLOAD: { data: string, secret: string } as json
 */
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const jsonBody = req.body;
    if (!jsonBody.data || !jsonBody.secret) {
      return res.status(422).json({ message: "Missing required fields." });
    }
    const { data, secret } = jsonBody;
    if (secret !== process.env.REVALIDATION_SECRET) {
      return res.status(401).json({ message: "Unauthorized secret token." });
    }

    switch (data) {
      case "events":
        await res
          .revalidate("/events")
          .then(async () => {
            await res.revalidate("/events/[id]").catch((err) => {
              res.status(500).json({ message: err.message });
            });
          })
          .catch((err) => {
            res.status(500).json({ message: err.message });
          });
        break;
      case "faqs":
        await res.revalidate("/").catch((err) => {
          res.status(500).json({ message: err.message });
        });
        break;
      case "officers":
        await res.revalidate("/about").catch((err) => {
          res.status(500).json({ message: err.message });
        });
        break;
      case "alumni":
        await res.revalidate("about").catch((err) => {
          res.status(500).json({ message: err.message });
        });
        break;
      default:
        return res.status(422).json({
          message: "Invalid dataType provided in 'data' field.",
        });
    }
    return res.json({ revalidated: true });
  } else if (req.method == "GET") {
    return res.status(405).json({ message: "GET Method not allowed." });
  } else {
    return res.status(405).json({ message: "GET Method not allowed." });
  }
}
