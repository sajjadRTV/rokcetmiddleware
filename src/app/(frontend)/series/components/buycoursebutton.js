
'use client';

import { useRouter } from "next/navigation";

function BuyCourseButton() {

    const router = useRouter();

    const buycoursehandler = () =>{
        router.push('/');
    }

    return (
        <>
            <button onClick={buycoursehandler} className='bg-yellow-400 p-2 m-2'>buy the course</button>
        </>
    );
}

export default BuyCourseButton;