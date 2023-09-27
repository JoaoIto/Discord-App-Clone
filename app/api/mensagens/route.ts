import { Request, Response } from 'express';
import {NextApiRequest, NextApiResponse} from "next";
import {NextResponse} from "next/server";
interface MessageResponse {
    de: string;
    mensagem: string;
}

export async function GET(req: NextApiRequest){
    const response = NextResponse.json({ de: 'JoaoIto', mensagem: "Ta funcionando!" });
    return response;
}