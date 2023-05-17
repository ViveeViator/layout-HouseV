import React from 'react';
import "./index.scss"

export const Header = () => {
    return (
        <header className='header container'>
            <div className='header_box'>

            
            <a href="http://localhost:3000/" className='header_logo'>HouseVOP</a>
            <p className='header_text'>
                ЖИЛОЙ КОМПЛЕКС
                </p>
                </div>
            <ul className='header_list'>
                <li className='header_item'>
                    <a href="http://localhost:3000/" >О комплексе</a></li>
                <li className='header_item'>
                    <a href="http://localhost:3000/" >Район</a> </li>
                <li className='header_item'>
                    <a href="http://localhost:3000/" >Каталог квартир</a></li>
                <li className='header_item'>
                    <a href="http://localhost:3000/" >Ипотека</a></li>
                <li className='header_item'>
                    <a href="http://localhost:3000/" >Контакты</a></li>
            </ul>
        </header>
    );
};

