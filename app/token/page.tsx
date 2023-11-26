'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

function TokenPage() {

    const [formData, setFormData] = useState({});

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        console.log(e.target.name + " = " + e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        var data = JSON.stringify(formData);
        var parsedData = JSON.parse(data);

        var serverKey = localStorage.getItem('serverKey') || '';

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "key=" + serverKey);    

        var raw = JSON.stringify({
            "to": parsedData["token"],
            "notification" : {
                "title" : parsedData["title"],
                "body" : parsedData["body"]
            },
            "data": {
              "priority": "HIGH",
              "body": "PHP Push Notification Description",
              "title": "PHP Push Notification Title",
              "sound": "default",
              "notification_id": "1",
              "type": 1,
              "image": "https://arashaltafi.ir/arash.jpg"
            }
        });   

        e.preventDefault();
        fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect : 'follow'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            Swal.fire(
                'Success!',
                'Your notification has been sent successfully!',
                'success'
            );
        })
        .catch((error) => { 
            console.error('Error:', error);
            Swal.fire(
                'Error!',
                'Your request failed!',
                'error'
            );
        });
    };


    return (
        <section id='tabView2'>
            <h2>Send Notification to Token</h2>
            <form id='tokenForm' onSubmit={handleSubmit}>
                <label>
                Token:
                    <input type="text" name="token" placeholder='Enter Token' onChange={handleChange} required />
                </label>
                <label>
                Title:
                    <input type="text" name="title" placeholder='Enter Notification Title' onChange={handleChange} />
                </label>
                <label>
                Body:
                    <textarea name='body' placeholder='Notification Body...' onChange={handleChange}></textarea>
                </label>

                <button type='submit'>Send Notification</button>
            </form>
        </section>

    );
}

export default TokenPage;