import React from 'react';
import "./index.scss"

export const Questions = () => {
    return (
        <div className='questions'>
            <h2 className='questions_title'>Есть вопросы?</h2>
            <div className='questions_box'>
                <p className='questions_text'>*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                <button className='button btn_left'>Ваше имя</button>
                <button className='button btn_left'>Ваш телефон</button>
                <button className='button_accent btn_left'>Посмотреть район</button>
            </div>
        </div>
    );
};

