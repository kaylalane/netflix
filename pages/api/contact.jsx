export default function handler(req, res) {
  //save to DB!
  if (res.method === "POST") {
    res.json({ message: "ok" });
  }
}
