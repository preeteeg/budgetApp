import React from "react"
import { MdSend } from 'react-icons/md'



const IncomeForm = ({ income, handleIncome, handleSubmit }) =>
{
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="income">Income</label>
                    <input type="number"
                        className="form-control"
                        id="income"
                        name="income"
                        placeholder="e.g. salary"
                        value={income}
                        onChange={handleIncome}
                    />
                </div>
            </div>

            <button type="submit" className="btn" >
                Add Income
                <MdSend className="btn-icon" />
            </button>
        </form>
    )

}

export default IncomeForm



