import { kv } from "@vercel/kv";

const OWNER_PASSWORD = process.env.OWNER_VIEW_PASSWORD || "260204";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "这里只能用来查看留言哦。"
    });
  }

  try {
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const password = String(searchParams.get("password") || "").trim();

    if (password !== OWNER_PASSWORD) {
      return res.status(401).json({
        error: "密码不对，暂时看不到留言。"
      });
    }

    let messages = await kv.get("messages:all");

    if (!Array.isArray(messages)) {
      messages = [];
    }

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({
      error: "现在暂时读不到留言，等一下再试试。",
      detail: String(error)
    });
  }
}
