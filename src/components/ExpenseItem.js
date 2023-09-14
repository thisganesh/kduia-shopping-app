import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED10',
            payload: item,
        });
    };


    const handleAddItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'ADD10',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{Location}{props.budget}</td>
        {/* <td><FaTimesCircle size='2.2em' color="green" onClick={handleDeleteItem}></FaTimesCircle></td> */}
        <td><FaPlusCircle size={32} color="green" onClick={handleAddItem}/> </td>
        <td><FaMinusCircle size={32} color="red" onClick={handleDeleteItem}/></td>
        </tr>
    );
};

export default ExpenseItem;