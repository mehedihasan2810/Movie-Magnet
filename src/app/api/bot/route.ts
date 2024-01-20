import Bot from "@/lib/bot";

const bot = new Bot();

export const POST = async (req: Request) => {
  try {
    const data = await req.json();

    bot.processIncomingMsg(data);

    return Response.json({ data: "ok", error: null });
  } catch (error) {
    return Response.json({ data: "error", error: "Something went wrong" });
  }
};
