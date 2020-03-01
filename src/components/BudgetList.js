import React from 'react'
import BudgetItem from './BudgetItem'
import {MdDelete} from 'react-icons/md'

const BudgetList = ({ expenses, clearList, handleEditItem,handelDeleteItem}) => {
    return (
        <React.Fragment>
            <ul className="list">
                {
                    expenses.map((expense) => (
                        <BudgetItem key={expense.id} expense={expense} editItem={handleEditItem} deleteItem={handelDeleteItem} />
                    ))
                }
            </ul>
            {expenses.length > 0 &&
                <button className="btn" onClick={clearList}>
                 clear expenses 
               <MdDelete className="btn-icon"/>
               </button>
            }
       </React.Fragment>
    )
}
export default BudgetList
