import React from 'react';
import './Item.css';

const Item = (props) => {
    const {id, name, picture, time, days} = props.item;
    const {btn} = props;
    return (
        <div className='item'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>days of week : {days}</p>
            <p>Time : {time}s</p>
            <button onClick={()=>btn(props.item.time)}>Add to List</button>
        </div>
    );
};

export default Item;