
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

    if(request.url === 'http://localhost:3000/dashboard') {
        if(request.cookies.has('sajjadLogin')) {
            NextResponse.redirect(new URL('/dashboard' , request.url));
            NextResponse.next();
        }else {
            return NextResponse.redirect(new URL('/login' , request.url));
        }
    }

}

export const config = {
    matcher : [
        // '/articles',
        // '/series/:courseSlide*',
        '/login',
        '/dashboard'
    ],
}