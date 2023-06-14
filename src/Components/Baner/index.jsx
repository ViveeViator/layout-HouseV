import React from 'react';
import "./index.scss"
import mouse from "../../assets/svg/mouse.svg"
import group from "../../assets/svg/group.svg"
import phone from "../../assets/svg/phone.svg"

export const Baner = () => {
    return (
        <div className='baner'>
        <div className='baner_box'>
            <h1 className='baner_title'>Жилой комплекс в историческом центре</h1>
            
            <img src={mouse} alt={mouse} width={40} className='baner_icon_mouse' />
            <ul className='baner_list'>
                <li className='baner_item'>
                    
                    <a href="http://localhost:3000/" className='baner_maps'><img src={group} alt={group} width={21} className='baner_maps_img'/>
                        Наб. реки Фонтанки 10-15</a>
                </li>
            
                <li className='baner_item'>
                    
                    <a href="tel:+8 (812) 123-45-67" className='baner_tel'><img src={phone} alt={phone} width={21} height={21} className='baner_tel_img'/> 8 (812) 123-45-67</a>
                </li>
            </ul>
        </div>
        </div>
    );
};

