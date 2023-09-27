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
    const [de] = useState('JoaoIto');

    useEffect(() => {
        const getMensagens = async () => {
            try {
                const response = await axios.get('/api/mensagens');
                setListaDeMensagens(response.data.mensagens);
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

        const novaMensagem = {
            de,
            mensagem: mensagem,
        };

        try {
            await axios.post('/api/mensagens', novaMensagem);
            setListaDeMensagens([...listaDeMensagens, novaMensagem]);
            setMensagem('');
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-primary bg-cover bg-blend-multiply text-neutrals-000">
            <div className="flex bg-slate-800 border border-solid border-2 rounded border-slate-200 flex-col flex-1 shadow-md rounded bg-neutrals-700 max-w-2xl max-h-95vh p-8">
                <div className="w-full mb-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold">Chat</h1>
                    <button className="text-neutral-300 hover:text-primary" onClick={() => window.location.href = '/'}>
                        Logout
                    </button>
                </div>
                <div className="relative flex flex-col flex-1 bg-neutrals-600 rounded p-4">
                    <ul className="overflow-scroll flex flex-col-reverse flex-1 color-neutrals-000 mb-16">
                        {listaDeMensagens.map((mensagem, index) => (
                            <li key={index} className="rounded p-2 mb-4 hover:bg-neutrals-700">
                                <div className="flex items-center mb-2">
                                    <img
                                        src={`https://github.com/${mensagem.de}.png`}
                                        alt={`${mensagem.de}'s avatar`}
                                        className="w-10 h-10 rounded-full inline-block mr-2"
                                    />
                                    <strong>{mensagem.de}</strong>
                                    <span className="text-neutral-300 text-xs ml-2">
                    {new Date().toLocaleDateString()}
                  </span>
                                </div>
                                {mensagem.mensagem}
                            </li>
                        ))}
                    </ul>
                    <form
                        className="flex items-center"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleNovaMensagem();
                        }}
                    >
            <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        handleNovaMensagem();
                    }
                }}
                placeholder="Insira sua mensagem aqui..."
                className="w-full flex bg-slate-500 border border-solid border-2 rounded border-slate-200 resize-none rounded p-2 bg-neutrals-800 mr-4 text-neutral-200"
            />
                        <button
                            type="submit"
                            className="bg-blue-700 text-neutrals-000 px-4 py-2 rounded"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
