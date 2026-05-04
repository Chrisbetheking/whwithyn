import { kv } from "@vercel/kv";

const SUBMIT_PASSWORD = process.env.SECRET_SUBMIT_PASSWORD || "260204";
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY || "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "这里只能用来发送悄悄话哦。"
    });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const name = "杨念";
    const message = String(body.message || "").trim();
    const password = String(body.password || "").trim();
    const category = String(body.category || "悄悄话").trim();
    const mood = String(body.mood || "未选择").trim();

    if (!message || !password) {
      return res.status(400).json({
        error: "密码和想说的话都要写一下哦。"
      });
    }

    if (password !== SUBMIT_PASSWORD) {
      return res.status(401).json({
        error: "密码不对哦。提示：我们在一起的那一天，六位数字。"
      });
    }

    let existing = await kv.get("messages:all");

    if (!Array.isArray(existing)) {
      existing = [];
    }

    const content = {
      id: `YN-${Date.now()}`,
      name,
      category,
      mood,
      message,
      time: new Date().toLocaleString("zh-CN", { hour12: false })
    };

    existing.push(content);

    await kv.set("messages:all", existing);

    let emailSent = false;
    let emailError = "";

    if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
      try {
        const payload = {
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            user_name: name,
            name,
            category,
            mood,
            message,
            love_message: message,
            content: `类型：${category}\n心情：${mood}\n内容：${message}`,
            time: content.time,
            message_id: content.id,
            to_name: "王鸿",
            couple: "WH & YN"
          }
        };

        if (EMAILJS_PRIVATE_KEY) {
          payload.accessToken = EMAILJS_PRIVATE_KEY;
        }

        const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const emailText = await emailRes.text();

        if (!emailRes.ok) {
          throw new Error(emailText || "EmailJS 发送失败");
        }

        emailSent = true;
      } catch (error) {
        emailSent = false;
        emailError = String(error);
      }
    }

    return res.status(200).json({
      success: true,
      id: content.id,
      emailSent,
      emailError,
      message: emailSent ? "发送成功啦，王鸿会看到的。" : "留言已经保存啦。"
    });
  } catch (error) {
    return res.status(500).json({
      error: "现在好像暂时发不出去，等一下再试试。",
      detail: String(error)
    });
  }
}
