import React from 'react';
import "./index.scss"
import room1 from "../../assets/art/rectangle-1.png"
import room2 from "../../assets/art/rectangle-2.png"
import room3 from "../../assets/art/rectangle-3.png"
import room4 from "../../assets/art/rectangle-4.png"

export const Room = () => {
    return (
        <div className='room'>
            <h2 className='room_title'>Наши квартиры</h2>
            <ul className='room_list'>
                <li className='room_art'>
                <img src={room1} alt={room1}  width={535} height={320} />
                <p className='room_text'>Лофт — 3 этажа</p>
            </li>
            <li className='room_art'>
                <img src={room2} alt={room2}  width={535} height={320} />
                <p className='room_text'>Лофт — 2 этажа</p>
                </li>
            </ul>
            <ul className='room_list'>
            <li className='room_art'>
                <img src={room3} alt={room3}  width={535} height={320} />
                <p className='room_text'>Лофт — 3 этажа</p>
            </li>
            <li className='room_art'>
                <img src={room4} alt={room4}  width={535} height={320} />
                <p className='room_text'>Лофт — 2 этажа</p>
            </li></ul>
        </div>
    );
};

