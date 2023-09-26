"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [listaDeMensagens, setListaDeMensagens] = useState<Array<{ de: string; texto: string }>>([]);
    const [de, setDe] = useState('JoaoIto');

    useEffect(() => {
        // Função para buscar as mensagens da API
        const getMensagens = async () => {
            try {
                const response = await axios.get('/api/chat/mensagens');
                setListaDeMensagens(response.data);
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

        try {
            // Enviar a nova mensagem para a API
            await axios.post('/api/chat/mensagens', { de, texto: mensagem });

            // Atualizar a lista de mensagens
            setListaDeMensagens([
                ...listaDeMensagens,
                { de, texto: mensagem },
            ]);

            // Limpar a caixa de mensagem
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
                            {mensagem.de}: {mensagem.texto}
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
