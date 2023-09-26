"use client"

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function PaginaInicial() {
    const [username, setUsername] = useState<string>('');
    const router = useRouter();

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Submit');
        router.push('/components/chat');
    };

    const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    return (
        <>
            <Head>
                <title>Discord App</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-primary bg-cover bg-blend-multiply bg-fixed">
                <div className="flex items-center justify-between flex-col sm:flex-row w-full max-w-screen-lg rounded p-8 m-4 shadow-md bg-green-700">
                    <form onSubmit={handleFormSubmit} className="flex flex-col items-center justify-center w-full sm:w-1/2 mb-4 sm:mb-0">
                        <h2 className="text-2xl font-semibold text-white mb-4">Boas vindas de volta!</h2>
                        <input
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-60 h-14 p-4 rounded text-white font-medium bg-gray-900 border-primary-500"
                        />
                        <button
                            value="Entrar"
                            type="submit"
                            className="text-white bg-primary-500"
                        />
                    </form>
                    <div className="flex border border-solid border-2 border-slate-300 flex-col items-center w-full sm:w-1/2 max-w-xs p-4 bg-gray-800 border border-gray-900 rounded flex-1 min-h-40">
                        <img className="rounded-full mb-4" src={`https://github.com/${username}.png`} />
                        <h2 className="text-gray-200 bg-gray-900 p-1.5 px-5 rounded-full">
                            {username}
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
