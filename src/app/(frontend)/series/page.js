

import Link from "next/link";

function seriesPage() {
    return (
        <>
            <Link href="/" className='bg-red-600 p-2 rounded-md inline-block'>back</Link>
            <ul>
                <li>
                    <Link className='p-2 m-2 block bg-green-300 rounded-md' href="/series/reactjs-course">React js course</Link>
                </li>
                <li>
                    <Link className='p-2 m-2 block bg-green-300 rounded-md' href="/series/laravel-course">laravel course</Link>
                </li>
            </ul>
        </>
    );
}

export default seriesPage;