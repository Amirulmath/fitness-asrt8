import React from 'react';
import './Break.css';

const Break = (props) => {
    const {period} = props.breakTime;
    return (
        <div>
            <button className='btn-break'><p>{period}</p></button>
        </div>
    );
};

export default Break;