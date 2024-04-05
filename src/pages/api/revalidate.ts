// https://<FRONTEND_URL>/api/revalidate?path={PATH}/&secret={SECRET}
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Unauthorized token." });
  }

  const data = req.query.data as string;
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
        message: "Invalid dataType in '?data={}' provided. Please check if dataType is in plural form.",
      });
  }
  return res.json({ revalidated: true });
}
