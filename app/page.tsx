'use client';
import Footer from '@/components/Footer'
import HomePage from './home/page'
import Link from 'next/link'
import { useState } from 'react';
import TopicPage from './topic/page';
import SettingsPage from './settings/page';
import TokenPage from './token/page';

export default function Home() {

  const [activeTab, setActiveTab] = useState(0);

  const handleMenuClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <header>
          <h1>PushMan</h1>
          <Link href={'https://github.com/muhammedelsami'} id='go-to'><i className="fa-brands fa-github fa-xl"></i> </Link>
          <nav>
              <Link className={activeTab === 0 ? 'navTab active' : 'navTab'} onClick={() => handleMenuClick(0)} href={''}><i className="fa-solid fa-home"></i>Home</Link>
              <Link className={activeTab === 1 ? 'navTab active' : 'navTab'} onClick={() => handleMenuClick(1)} href={''}><i className="fa-solid fa-paper-plane"></i>To Topic</Link>
              <Link className={activeTab === 2 ? 'navTab active' : 'navTab'} onClick={() => handleMenuClick(2)} href={''}><i className="fa-solid fa-share"></i>To Token</Link>
              <Link className={activeTab === 3 ? 'navTab active' : 'navTab'} onClick={() => handleMenuClick(3)} href={''}><i className="fa-solid fa-gear"></i>Settings</Link>
          </nav>
      </header>
      <>
        {activeTab === 0 && <HomePage />}
        {activeTab === 1 && <TopicPage />}
        {activeTab === 2 && <TokenPage />}
        {activeTab === 3 && <SettingsPage />}
      </>

      <Footer />
    </>
  )
}