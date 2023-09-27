import { NextResponse } from "next/server";

interface ResponseType {
    de: string;
    mensagem: string;
}

export async function GET(req: Request) {
    const response = NextResponse.json({ de: 'JoaoIto', mensagem: "Ta funcionando!" });
    return response;
}
