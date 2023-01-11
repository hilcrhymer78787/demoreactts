
import React from 'react';

export function Home() {
    return (
        <div className="goal">
            <h2>はじめよう</h2>
            <div className='wrap'>
                git clone https://github.com/hilcrhymer78787/react-ts-template.git<br />
                <br />
                cd react-template<br />
                <br />
                rm -rf .git<br />
                <br />
                git init<br />
                <br />
                yarn install<br />
                <br />
                yarn start<br />
            </div>
        </div>
    );
}