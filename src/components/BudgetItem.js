import React from 'react'
import { MdDelete,MdEdit } from 'react-icons/md'

const BudgetItem = ({ expense, editItem, deleteItem}) =>
{
    const {id,charge,amount}= expense
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div>
                <button className="edit-btn" arial-label="edit button" onClick={() => editItem(id)}>
                  <MdEdit/>
                </button>
                <button className="clear-btn" arial-label="delete button" onClick={()=>deleteItem(id)}>
                  <MdDelete/>
                </button>
            </div>
        </li>
    )
}

export default BudgetItem