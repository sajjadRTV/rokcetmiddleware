
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request : NextRequest) {

    if(request.url === 'http://localhost:3000/login') { 
        if(request.cookies.has('sajjadLogin')) {
            return NextResponse.redirect(new URL('/dashboard' , request.url));
        }else{
            NextResponse.redirect(new URL('/login' , request.url));
            NextResponse.next();
        }
    }

}

export const config = {
    matcher : [
        '/articles',
        '/series/:courseSlide*',
        '/login'
    ],
}