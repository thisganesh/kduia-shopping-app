import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const Budget =2000;
    
    const spent_so_far = expenses.reduce((total, item) => {
         let prev = total
        total += item.budget;
        let exceed = 0;
        if(total>Budget){
            window.alert(`The value cannot exceed remaining funds: ${Location}${Budget - prev}`);
            exceed = 1
        }
        if(exceed===1) total= prev
        return (total );
    }, 0);

   

    return (
        <>
        <div style={{display:'flex',padding:'1rem'}}>
            <div className='alert alert-secondary' style={{ marginRight: '1rem' }}>
                <span>Budget: {Location}{Budget}</span>
            </div>

            <div className='alert alert-success' style={{ marginRight: '1rem' }}>
                <span>Remaining: {Location}{Budget-spent_so_far}</span>
            </div>

            <div className='alert alert-primary'>
                <span>Spent so far: {Location}{spent_so_far}</span>
            </div>
        </div>
        </>
    );
};

export default CartValue;
