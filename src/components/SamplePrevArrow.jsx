import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const SamplePrevArrow = ({ onClick }) => {
    return <>
        <div className="left button" onClick={onClick}>
            <MdKeyboardArrowLeft className='icon' />
        </div>
    </>
}

export default SamplePrevArrow