import React from 'react';
import data from './data';

const List = () => {
const map =data.map((props)=>{
    return ( <><img src={props.image} alt={props.name} />
    <h2>{props.name}</h2>
    <h3>{props.age}</h3></>)
})

    return (
        <div>
            {map}
        </div>
    );
};

export default List;