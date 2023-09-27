"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Mensagem {
    de: string;
    mensagem: string;
}

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagens, setListaDeMensagens] = useState<Mensagem[]>([]);
    const [de, setDe] = useState('JoaoIto');

    useEffect(() => {
        const getMensagens = async () => {
            try {
                const response = await axios.get('/api/mensagens');
                if (Array.isArray(response.data.mensagens)) {
                    setListaDeMensagens(response.data.mensagens);
                }
            } catch (error) {
                console.error('Erro ao buscar mensagens:', error);
            }
        };

        getMensagens();
    }, []);

    const handleNovaMensagem = async () => {
        if (!mensagem) {
            return;
        }

        const novaMensagem: Mensagem = {
            de,
            mensagem: mensagem, // Use o nome de chave "mensagem" em vez de "texto" para corresponder à estrutura dos dados
        };

        console.log('Nova Mensagem:', novaMensagem);
        try {
            await axios.post('/api/mensagens', novaMensagem);

            setListaDeMensagens([...listaDeMensagens, novaMensagem]);
            setMensagem('');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <div>
                <ul>
                    {listaDeMensagens.map((mensagem, index) => (
                        <li key={index}>
                            {mensagem.de}: {mensagem.mensagem} {/* Use a chave "mensagem" para exibir a mensagem */}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    type="text"
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Digite sua mensagem..."
                />
                <button onClick={handleNovaMensagem}>Enviar</button>
            </div>
        </div>
    );
}
