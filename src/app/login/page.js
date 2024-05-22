'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function Login() {

    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const router = useRouter();

    const dataFormHandler = (e) => {
        if(e.target.id ==='username') {
            setUserName(e.target.value);
        }else if(e.target.id === 'password') {
            setPassword(e.target.value);
        }
    }

    const signUpHandler = (e) => {
        e.preventDefault();
        if(userName === 'sajjad' && password === '09039093774') {
            Cookies.set('sajjadLogin' , 'sajjadislog' , {expires : 30000});
            router.push('/dashboard');
        }
    }

    return (
        <>
            <form action="" className='max-w-[500px] mx-auto mt-5 rounded-md bg-blue-300 p-5'>
                <input id="username" onChange={dataFormHandler} type="text" placeholder="enetr user name" className='w-full outline-none p-2 my-2 rounded-md'/>
                <input id="password" onChange={dataFormHandler} type="password" placeholder="enter password" className='w-full outline-none p-2 my-2 rounded-md'/>
                <button type="submit" onClick={signUpHandler} className='p-2 bg-yellow-400 rounded-md text-white font-semibold m-1'>sign up</button>
            </form>
        </>
    );
}

export default Login;