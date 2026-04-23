'use client'
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";


const Navbar = () => {
    const {data,isPending} =useSession();
    if(isPending){
        return <div>loading...</div>
    }
    // console.log(data);
    const user = data?.user;
    // console.log(user);
    
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                    <div>
                        {user ? <>Welcome {user.name} <Button onClick={() => signOut()}>SignOut</Button></> :<Link href='/signin'>Signin</Link>}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;