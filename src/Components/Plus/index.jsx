import React from 'react';
import "./index.scss"
import bench from "../../assets/svg/bench.svg"
import building from "../../assets/svg/building.svg"
import fountain from "../../assets/svg/fountain.svg"
import bicycle from "../../assets/svg/bicycle.svg"

export const Plus = () => {
    return (
        <div className='plus'>
            <ul className='plus_list'>
                <li className='plus_item'>
                    <img src={bench} alt={bench} width={80} />
                    <p className='plus_text'>Рядом исторические парки и скверы</p>
                </li>
                <li className='plus_item'>
                    <img src={building} alt={building} width={80} />
                    <p className='plus_text'>Полностью обустроенный</p>
                </li>
                <li className='plus_item'>
                    <img src={fountain} alt={fountain} width={80} />
                    <p className='plus_text'>10 фонтанов на территории</p>
                </li>
                <li className='plus_item'>
                    <img src={bicycle} alt={bicycle} width={80} />
                    <p className='plus_text'>6 км велодорожек</p>
                </li>
            </ul>
        </div>
    );
};

