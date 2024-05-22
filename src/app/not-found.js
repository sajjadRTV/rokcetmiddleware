

function NotFound() {
    return (
        <>
            <style>
                {
                    `
                        body {
                            display : flex;
                            justify-content: center;
                            align-items: center;
                            height : 100vh;
                            background-color : red;
                        }
                    `
                }
            </style>
            <div>
                <h1 className='text-white font-semibold'>
                    Not Found :)
                </h1>
            </div>
        </>
    );
}

export default NotFound;