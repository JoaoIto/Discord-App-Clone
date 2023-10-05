import axios from "axios";
import {FormComponent} from "@/app/chat/form";

interface Mensagem {
    id: string;
    de: string;
    mensagem: string;
}

export async function getMensagens() {
    try {
        const response = await axios.get('http://localhost:3000/api/mensagens');

        if (!response.data.mensagens) {
            console.log("Deu pau no bagui aqui!");
            return [];
        }

        const mensagens: Mensagem[] = response.data.mensagens;
        console.log(mensagens);
        return mensagens;
    } catch (error) {
        console.error("Erro ao buscar na API!", error);
        return [];
    }
}

export async function postMensagem(mensagem: string) {
    try {
        const novaMensagem = {
            de: 'JoaoIto', // Substitua com o nome do remetente
            mensagem: mensagem,
        };

        const response = await axios.post('http://localhost:3000/api/mensagens', novaMensagem);
        console.log(response.data);
    } catch (error) {
        console.error("Erro ao enviar mensagem!", error);
    }
}

export default async function ChatPage() {
    const mensagens = await getMensagens();
    let mensagemInput: HTMLInputElement | null = null;
    
    const handleNovaMensagem = (e: React.FormEvent) => {
        e.preventDefault();
        if (mensagemInput) {
            postMensagem(mensagemInput.value);
            mensagemInput.value = ''; // Limpa o campo de entrada
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-primary bg-cover bg-blend-multiply text-neutrals-000">
            <div className="flex bg-slate-800 border border-solid border-2 rounded border-slate-200 flex-col flex-1 shadow-md rounded bg-neutrals-700 max-w-2xl max-h-95vh p-8">
                <div className="w-full mb-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold">Chat</h1>
                    <button className="text-neutral-300 hover:text-primary bg-red-600 p-4 rounded">
                        Logout
                    </button>
                </div>
                <div className="relative flex flex-col flex-1 bg-neutrals-600 rounded p-4">
                    <ul className="overflow-scroll flex flex-col-reverse flex-1 color-neutrals-000 mb-16">
                        {mensagens && mensagens.map((mensagem: Mensagem) => (
                            <li key={mensagem.id} className="rounded p-2 mb-4 hover:bg-neutrals-700">
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
                </div>
                <FormComponent/>
            </div>
        </div>
    );
}
