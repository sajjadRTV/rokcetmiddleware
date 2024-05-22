
'use client'

import { notFound } from "next/navigation";
import BuyCourseButton from "../components/buycoursebutton";


function CourseSlide({params}) {


    if(!['laravel-course' , 'reactjs-course'].includes(params.courseSlide)) {
        return notFound();
    }


    return (
        <>
            <h1>course slide page</h1>
            <p>{params.courseSlide} course</p>
            <BuyCourseButton />
        </>
    );
}

export default CourseSlide;