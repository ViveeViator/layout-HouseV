import React from 'react';
import "./index.scss"
import youtube from "../../assets/svg/youtube.svg"
import instagram from "../../assets/svg/instagram.svg"
import facebook from "../../assets/svg/facebook-logo.svg"

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_box'>
                <div className='footer_left'>
                    <a href="http://localhost:3000/" className='footer_logo'>HouseVOP</a>
                    <p className='footer_top'>ЖИЛОЙ КОМПЛЕКС</p>
                </div>
                <div className='footer_left'>
                    <ul>
                        <li className='footer_box_text'><p className='footer_text'>О комплексе</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Район</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Каталог квартир</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Ипотека</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Контакты</p></li>
                    </ul>
                </div>
                <div className='footer_left'>
                    <ul>
                        <li className='footer_box_text'><p className='footer_text'>О комплексе</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Район</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Каталог квартир</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Ипотека</p></li>
                        <li className='footer_box_text'><p className='footer_text'>Контакты</p></li>
                    </ul>
                </div>
                
                <div className='footer_box_svg footer_left'> 
                    <ul>
                        <li className='footer_item_link'><a href="http://localhost:3000/">Адрес: Наб. реки Фонтанки 10-15</a></li>
                        <li className='footer_item_link'><a href="http://localhost:3000/">Телефон: 8 (812) 123-45-67</a></li>
                        <li className='footer_item_link'><a href="http://localhost:3000/">Отдел продаж: 10:00 - 20:00</a></li>
                        <li className='footer_item_link'><a href="http://localhost:3000/">E-mail: <span className='footer_span'>vip@housevip.ru</span> </a></li>
                    </ul>
                    <div>
                        <ul className='footer_list_svg'>
                        <li  className='footer_svg'><a href="http://localhost:3000/"><img src={youtube} alt={youtube} width={28} /></a></li>
                        <li  className='footer_svg'><a href="http://localhost:3000/"><img src={youtube} alt={youtube} width={28} /></a></li>
                        <li  className='footer_svg'><a href="http://localhost:3000/"><img src={instagram} alt={instagram} width={20} /></a></li>
                        <li  className='footer_svg'><a href="http://localhost:3000/"><img src={facebook} alt={facebook} width={20} /></a></li>
                    </ul>
                    </div></div>
            </div>
        </footer>
    );
};

