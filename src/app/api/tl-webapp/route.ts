import Bot from "@/lib/bot";
import validateInitData from "@/lib/validate-hash";

const bot = new Bot();

export const POST = async (req: Request) => {
  try {
    const { initDataHash, message } = await req.json();

    const initData = validateInitData(initDataHash);

    if (!initData) {
      return Response.json({ data: null, error: "invalid init data" });
    }

    await bot.replyDownloadMessage({ chatId: initData.user.id, message });

    return Response.json({ data: "ok", error: null });
  } catch (error) {
    return Response.json({ data: null, error: (error as Error).message });
  }
};
