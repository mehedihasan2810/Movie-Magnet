import validateInitData from "@/lib/validate-hash";

export const POST = async (req: Request) => {
  const data = await req.json();

  const initData = validateInitData(data.initData);

  if (!initData) {
    return Response.json({ initData: null, error: "invalid initData" });
  }

  return Response.json({ initData, error: null });
};
