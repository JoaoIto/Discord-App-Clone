import axios from "axios";

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

export default async function ChatPage() {
    const mensagens = await getMensagens();

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
                    <form
                        className="flex items-center"
                        // onSubmit={(e) => {
                        //     e.preventDefault();
                        //     handleNovaMensagem();
                        // }}
                    >
                        {/*<textarea*/}
                        {/*    value={mensagem}*/}
                        {/*    onChange={(e) => setMensagem(e.target.value)}*/}
                        {/*    onKeyPress={(e) => {*/}
                        {/*        if (e.key === 'Enter') {*/}
                        {/*            e.preventDefault();*/}
                        {/*            handleNovaMensagem();*/}
                        {/*        }*/}
                        {/*    }}*/}
                        {/*    placeholder="Insira sua mensagem aqui..."*/}
                        {/*    className="w-full flex bg-slate-500 border border-solid border-2 rounded border-slate-200 resize-none rounded p-2 bg-neutrals-800 mr-4 text-neutral-200"*/}
                        {/*/>*/}
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
