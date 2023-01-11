import React from 'react';

const onClickedBtn = () => {
    alert("ボタンがクリックされました");
}

export function AlertBtn() {
    return (
        <button onClick={onClickedBtn}>共通AlertBtn</button>
    );
}