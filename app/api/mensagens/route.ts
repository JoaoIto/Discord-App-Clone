import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../app/database/database';
import {NextRequest, NextResponse} from 'next/server';
let db = await connectToDatabase();
let collection = db.collection('mensagens');

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
export async function POST(req: NextRequest, body: {de: string, mensagem: string}) {
    if (req.method === 'POST') {
        try {
            // Teste a conexão com o banco de dados e retorne o resultado
            const db = await connectToDatabase();
            const collection = db.collection('mensagens')

            const novaMensagem = {
                de: body.de,
                mensagem: body.mensagem
            }

            const result = await collection.insertOne({novaMensagem});
            return NextResponse.json({"message": "mensagem inserida!", novaMensagem});
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.error();
    }
}
