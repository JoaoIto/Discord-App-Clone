"use client"
import {useState} from "react";
import axios from "axios";

export async function postMensagem(mensagem: string) {
    try {
        const novaMensagem = {
            de: 'JoaoIto', // Substitua com o nome do remetente
            mensagem: mensagem,
        };

        const response = await axios.post('http://localhost:3000/api/mensagens', novaMensagem);
        const data = await response.data
        console.log(data);
    } catch (error) {
        console.error("Erro ao enviar mensagem!", error);
    }
}
export function FormComponent() {
    const [mensagem, setMensagem] = useState('');

    const handleNovaMensagem = (e: React.FormEvent) => {
        e.preventDefault();
        if (mensagem.trim() !== '') {
            postMensagem(mensagem);
            setMensagem(''); // Limpa o campo de entrada
        }
    };

    return (
        <form onSubmit={handleNovaMensagem} className="w-full flex flex-col items-end">
      <textarea
          name="mensagem-input"
          id="mensagem-input"
          placeholder="Insira sua mensagem aqui..."
          className="w-full flex bg-slate-500 border border-solid border-2 rounded border-slate-200 resize-none rounded p-2 bg-neutrals-800 mr-4 text-neutral-200"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
      />
            <button type="submit" className="mx-4 my-2 self-end bg-blue-700 text-neutrals-000 px-4 py-2 rounded">
                Enviar
            </button>
        </form>
    );
}