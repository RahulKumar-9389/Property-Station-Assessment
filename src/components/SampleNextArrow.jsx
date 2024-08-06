import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const SampleNextArrow = ({ onClick }) => {
    return <>
        <div className="right button" onClick={onClick}>
            <MdKeyboardArrowRight className="icon" />
        </div>
    </>
}

export default SampleNextArrow;