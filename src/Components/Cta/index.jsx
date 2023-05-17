import React from 'react';
import "./index.scss"

export const Cta = () => {
    return (
        <div className='cta'>
            <h2 className='cta_title'>Хотите посмотреть?</h2>
            <div className='cta_box'>
                
            <div className='cta_box_text'>
                <p className='cta_text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                образцов. </p>
            </div>
                <div >
                    <div className='cta_box_btn'>
                <button className='button'>Ваше имя</button>
                <button className='button btn_left'>Ваш телефон</button>
                    </div>
                    <div className='cta_box_text_small'>
                <p className='cta_text_small'>*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                <button className='button_accent btn_left'>Посмотреть район</button>
                    </div>
                    
                </div>
                </div>
        </div>
    );
};

