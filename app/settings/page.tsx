'use client';
import React, { useState } from 'react';

function SettingsPage() {

    const [showServerKeyPopup, setShowServerKeyPopup] = useState(false);
    const [showAboutAppPopup, setShowAboutAppPopup] = useState(false);
    const [serverKey, setServerKey] = useState(
        typeof window !== 'undefined' ? localStorage.getItem('serverKey') || '' : ''
    );
    
    const handleServerKeyButtonClick = () => {
        setShowServerKeyPopup(true);
    };

    const handleAboutAppButtonClick = () => {
        setShowAboutAppPopup(true);
    };

    const handlePopupClose = () => {
        setShowServerKeyPopup(false);
        setShowAboutAppPopup(false);
    };

    const handleServerKeyChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setServerKey(e.target.value);
    };

    const handleServerKeySave = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('serverKey', serverKey);
        }
        setShowServerKeyPopup(false);
    };


    return (
        <section id="tabView4">
            <div id="contain">
                <h2>Settings</h2>
                <button className='setting-btn' onClick={handleServerKeyButtonClick}>Set Server Key</button>
                <button className='setting-btn' onClick={handleAboutAppButtonClick}>About App</button>
                <button className='setting-btn' onClick={() => window.open('https://github.com/muhammedelsami', '_blank')}>My GitHub</button>
                <button className='setting-btn' onClick={() => window.open('https://play.google.com/store/apps/dev?id=8688012411486464999', '_blank')}>My Google Play account</button>
                
                {showServerKeyPopup && (
                    <div id='settingsPopup' className='popup'>
                        <div className="popup-content">
                            <span className="close" onClick={handlePopupClose}>&times;</span>
                            <h2>Settings</h2>
                            <label htmlFor="serverKey">Server Key:</label>
                            <textarea id="serverKey" name="serverKey" value={serverKey} onChange={handleServerKeyChange}></textarea>
                            <button onClick={handleServerKeySave}>Save</button>
                        </div>
                    </div>
                )}

                {showAboutAppPopup && (
                    <div id='about-app' className='popup'>
                        <h3>PushMan App</h3>
                        <p>The Firebase Server Key is a tool that provides developers with the capability to send notifications to their applications. This key enables sending real-time notifications to the desired application using the Firebase Cloud Messaging (FCM) service. By using the Firebase Server Key, you can add customized, targeted, and interactive notifications to your application. This allows you to convey important updates to your users, enhance user engagement through interaction, and improve the overall user experience. Thanks to Firebase&apos;s reliable infrastructure, your application notifications reach the target audience quickly and reliably, providing users with a better communication experience.</p>
                        <button onClick={handlePopupClose}>Close</button>
                    </div>
                )}
            </div>
    
        </section>
    )
}

export default SettingsPage;