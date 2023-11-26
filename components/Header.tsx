'use client';
import { SetStateAction, useState } from 'react';
import Link from "next/link";

function Header() {
    const [activeLink, setActiveLink] = useState('/');

    const handleClick = (path: SetStateAction<string>) => {
        setActiveLink(path);
    };

    return(
        <header>
            <h1>PushMan</h1>
            <nav>
                <Link className={activeLink === '/' ? 'navTab active' : 'navTab'} onClick={() => handleClick('/')} href="/"><i className="fa-solid fa-home"></i>  Home</Link>
                <Link className={activeLink === '/topic' ? 'navTab active' : 'navTab'} onClick={() => handleClick('/topic')} href="/topic"><i className="fa-solid fa-paper-plane"></i>  To Topic</Link>
                <Link className={activeLink === '/token' ? 'navTab active' : 'navTab'} onClick={() => handleClick('/token')} href="/token"><i className="fa-solid fa-share"></i>  To Token</Link>
                <Link className={activeLink === '/settings' ? 'navTab active' : 'navTab'} onClick={() => handleClick('/settings')} href="/settings"><i className="fa-solid fa-gear"></i>  Settings</Link>
            </nav>
        </header>
    )
}

export default Header;