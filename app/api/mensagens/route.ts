import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../app/database/database';
import {NextRequest, NextResponse} from 'next/server';
import {AxiosResponse} from "axios";
let db = await connectToDatabase();
let collection = db.collection('mensagens');

interface NovaMensagem{
    de: string;
    mensagem: string
}
export async function GET(req: NextRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Teste a conexão com o banco de dados e retorne o resultado
            const db = await connectToDatabase();
            const collection = db.collection('mensagens')
            const result = await collection.find({}).toArray();
            return NextResponse.json({ mensagens: result });
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.error();
    }
}
export async function POST(req: NextRequest, body: AxiosResponse) {
    if (req.method === 'POST') {
        try {
            // Teste a conexão com o banco de dados e retorne o resultado
            const db = await connectToDatabase();
            const collection = db.collection('mensagens')

            const novaMensagem = {
                de: body.data.de,
                mensagem: body.data.mensagem
            };

            const result = await collection.insertOne({de: novaMensagem.de, mensagem: novaMensagem.mensagem});
            return NextResponse.json(novaMensagem);
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.error();
    }
}
