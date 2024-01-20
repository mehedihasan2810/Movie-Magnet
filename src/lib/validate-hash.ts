import crypto from "crypto";

export default function validateInitData(initData: any) {
  const data: any = {};
  const raw: any = {};
  let hash;
  for (let line of initData.split("&")) {
    const pair = line.split("=");
    if (pair.length == 2) {
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1]);
      if (key == "hash") {
        hash = value;
      } else {
        raw[key] = value;
        data[key] = key == "user" ? JSON.parse(value) : value;
      }
    }
  }
  const keys = Object.keys(data);
  keys.sort();

  const list = [];
  for (let key of keys) {
    list.push(`${key}=${raw[key]}`);
  }
  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(process.env.TG_BOT_TOKEN as string)
    .digest();
  const correctHash = crypto
    .createHmac("sha256", secretKey)
    .update(list.join("\n"))
    .digest("hex");

  if (correctHash != hash) {
    return null;
  }
  return data;
}
