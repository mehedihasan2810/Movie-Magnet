import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){

    return Response.json({data: "foooooo"})
}