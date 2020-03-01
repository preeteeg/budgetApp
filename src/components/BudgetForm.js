import React from "react"
import { MdSend } from 'react-icons/md'



const BudgetForm = ({ amount, charge ,handleAmount, handleCharge, handleSubmit,isEditMode}) =>
{
    return(
        <form onSubmit={handleSubmit}>
           
            <div className="form-center">
         
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                        value={charge}
                        onChange={handleCharge}
                    
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="Amount">Amount</label>
                    <input type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 100"
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button type="submit" className="btn" >
                {
                    isEditMode? "Edit Item" : "Add Item"
                }
              <MdSend className="btn-icon"/>
            </button>
        </form>
    )
    
}

export default BudgetForm



    