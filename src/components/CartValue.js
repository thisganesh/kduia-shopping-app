import React, { useContext,useState } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const [budgetInput, setBudgetInput] = useState(2000);
    
    
    const spent_so_far = expenses.reduce((total, item) => {
         let prev = total
        total += item.budget;
        let exceed = 0;
        if(total>budgetInput){
            window.alert(`The value cannot exceed remaining funds: ${Location}${budgetInput - prev}`);
            exceed = 1
        }
       
        if(exceed===1) total= prev
        return (total );
    }, 0);

    if(budgetInput>spent_so_far){
        window.alert("you cannot reduce budget value less than your spending")
    }

    
    const increaseBudget = () => {
        if (budgetInput + 10 <= 20000) {
            setBudgetInput(budgetInput + 10);
        }
    };

    const decreaseBudget = () => {
        if (budgetInput - 10 >= spent_so_far) {
            setBudgetInput(budgetInput - 10);
        }
    };


   

    return (
        <>
        <div style={{display:'flex',padding:'1rem'}}>
             <div className='alert alert-secondary' style={{ marginRight: '1rem' ,width:'20rem'}}>
                    <span>
                        Budget: {Location}
                        <input
                            type="number"
                            value={budgetInput}
                            onChange={(e) => setBudgetInput(parseInt(e.target.value))}
                            
                            max={20000}
                            style = {{width:'5rem'}}
                        />
                        <button onClick={increaseBudget} style={{color:'green'}}>+10</button>
                        <button onClick={decreaseBudget} style={{color:'red'}}>-10</button>
                    </span>
             </div>

            <div className='alert alert-success' style={{ marginRight: '1rem' }}>
                <span>Remaining: {Location}{budgetInput-spent_so_far}</span>
            </div>

            <div className='alert alert-primary'>
                <span>Spent so far: {Location}{spent_so_far}</span>
            </div>
        </div>
        </>
    );
};

export default CartValue;
