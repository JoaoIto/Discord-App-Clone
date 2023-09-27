import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../../app/database/database';
import { NextResponse } from 'next/server';

// Função de teste para conexão do banco de dados:
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Teste a conexão com o banco de dados e retorne o resultado
            const result = await connectToDatabase();
            return NextResponse.json({ message: result });
        } catch (error: any) {
            return NextResponse.json({ error: error.message });
        }
    } else {
        return NextResponse.error();
    }
}