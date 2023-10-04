import {NextApiRequest, NextApiResponse} from 'next';
import connectToDatabase from '../../../app/database/database';
import {NextRequest, NextResponse} from 'next/server';
import {AxiosResponse} from "axios";

interface NovaMensagem {
    de: string;
    mensagem: string
}
let db = await connectToDatabase();
let collection = db.collection('mensagens');
export async function GET(req: Request) {
    try {
        const result = await collection.find({}).toArray();
        return NextResponse.json({mensagens: result});
    } catch (error: any) {
        return NextResponse.json({error: error.message});
    }
}

export async function POST(req: Request, body: AxiosResponse) {
    try {
        const novaMensagem = {
            de: body.data.de,
            mensagem: body.data.mensagem
        };

        const result = await collection.insertOne({de: novaMensagem.de, mensagem: novaMensagem.mensagem});
        return NextResponse.json(novaMensagem);
    } catch (error: any) {
        return NextResponse.json({error: error.message});
    }
}
