import React, { useEffect, useState } from 'react';
import logo from '../../Logo.png';
import photo from '../../photo.png';
import Break from '../Break/Break';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Practice.css';

const Practice = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() =>{
        fetch('exercises.json')
        .then(res=> res.json())
        .then(data => setExercises(data))
    }, []);

    const breakTimes = [
        {serial: 1, period: 10},
        {serial: 2, period: 20},
        {serial: 3, period: 30},
        {serial: 4, period: 40},
        {serial: 5, period: 50}
    ]

    return (
        <div className='practice-container'>
            <div>
                <div className="header">
                    <img src={logo} alt="" />
                    <h1>Body Fitness Club</h1>
                </div>
                <div>
                    <div className='select-list'>
                        <h3>Select today’s exercise</h3>
                    </div>
                    <div className="exercise-container">
                        {
                            exercises.map(exercise => <Exercise 
                                key = {exercise.id}
                                exercise = {exercise}
                                ></Exercise>)
                        }
                    </div>
                </div>
            </div>
            <div className='cart-container'>
                <div className="profile">
                    <img src={photo} alt="" />
                    <div>
                        <h3>Amirul Islam</h3>
                        <p>Dinajpur, Bangladesh</p>
                    </div>
                </div>
                <div className='personal-info'>
                    <div>
                        <p><b>60</b> Kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>6.5"</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <p><b>36</b> yrs</p>
                        <p>Age</p>
                    </div>
                </div>
                <div className="add-break">
                <h3>Add A Break</h3>
                </div>
                <div className='break-time'>
                    {
                        breakTimes.map(breakTime => <Break 
                            keys = {breakTime.serial}
                            breakTime = {breakTime}
                        ></Break>)
                    }
                </div>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Practice;