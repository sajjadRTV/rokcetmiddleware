
'use client';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
function dashboard() {

    const router = useRouter();

    const logout = () => {
        Cookies.remove('sajjadLogin');
        router.push('/login');
    }

    return (
        <>
            <h1>dashboard page</h1>
            <button onClick={logout}>log out</button>
        </>
    );
}

export default dashboard;