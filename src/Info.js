import React from 'react';
import avatar from './avatar.jpg';

export default function Info() {
    return (
        <div className="info-div">
            <img src={avatar}/>
            <h1>Andriy Snitko</h1>
            <p className='position'>Frontend developer</p>
            <p className='email'>witfoq@gmail.com</p>
            <div className='button-div'>
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
        </div>
    )
}