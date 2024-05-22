

function numberEpizod({params}) {
    console.log(params);
    return (
        <>
            <h2>{params.epizodId} epizod page</h2>
            <h2>{params.courseSlide} course slide</h2>
        </>
    );
}

export default numberEpizod;