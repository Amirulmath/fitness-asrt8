import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const {title, benefits, age, time, image}=props.exercise;
    return (
        <div className='exercise-info'>
            <img src={image} alt="" />
            <div className='information'>
                <h4>{title}</h4>
                <p><small>{benefits}</small></p>
                <p>For Age: {age}</p>
                <p>Time: {time} sec</p>
                <button className='btn-cart'>
                    <b>Add to list</b>
                </button>
            </div>
        </div>
    );
};

export default Exercise;