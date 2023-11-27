import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function HomePage() {
    return (
        <>
        <section id="tabView1" className="tab active-tab">
            {/* <Player
                autoplay
                loop
                src="https://lottie.host/b4d2c9f3-6bac-4682-8cf2-7704287fd2e5/9XaHId2Lry.json"
                style={{ height: '100%', width: '40vh' }}
                direction={1}
                speed={1}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
            </Player> */}
            <div>
                <p id="about-app-txt">
                    The Firebase Server Key is a tool that provides developers with the capability to send notifications to their applications. This key enables sending real-time notifications to the desired application using the Firebase Cloud Messaging (FCM) service. By using the Firebase Server Key, you can add customized, targeted, and interactive notifications to your application. This allows you to convey important updates to your users, enhance user engagement through interaction, and improve the overall user experience. Thanks to Firebase&apos;s reliable infrastructure, your application notifications reach the target audience quickly and reliably, providing users with a better communication experience.
                </p>
            </div>
        </section>
        <section id='android-app'>
            <div>
                <img src="screenShots.png" alt="App Screenshot" />
            </div>
            <div>
                <img id='qrcode-img' src="qrcode.png" alt="App QR Code" />
            </div>
        </section>
        </>
    );
}

export default HomePage;