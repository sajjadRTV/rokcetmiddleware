
"use client"

import { useEffect } from "react";

function Error({error , reset}) {

    useEffect(() => {
        console.log(error);
    } , []);

    return (
        <>
            <div>
                <h2>Something went wrong!</h2>
                <button onClick={() => reset()}>    
                    Try ahain
                </button>
            </div>
        </>
    );
}

export default Error;