import React from 'react';
import "./index.scss"
import play from "../../assets/svg/play-button.svg"

export const Clip = () => {
    return (
        <div className='clip'>
            <div className='clip_box'>
                <img src={play} alt={play} width={100} height={100}  className='clip_play'/>
            </div>

        </div>
    );
};

