import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Nofication from './components/Notification';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import uuid from 'uuid/v4'
import IncomeForm from './components/IncomeForm';



const initialList = localStorage.getItem("expenses") ?
  JSON.parse(localStorage.getItem("expenses")) : []

const initialIncome = localStorage.getItem("income") ? JSON.parse(localStorage.getItem("income")) : 0
const initialSaving= localStorage.getItem("saving") ? JSON.parse(localStorage.getItem("saving")) : 0

function App()
{
 
  const [expenses, setExpenses] = useState(initialList)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [income, setIncome] = useState(initialIncome)
  const [saving, setSaving] = useState(0)
  const [notification, setNotification] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [id,setId]=useState(0)
 
  let totalExpenses = expenses.reduce((acc, curr) =>
  {
    return acc += parseInt(curr.amount)
  }, 0)
  
  function handleNotifcation()
  {
    setTimeout(() =>
    {
      setNotification({ show: false })
    }, 3000)
  }
  function handleIncome(e)
  {
    return setIncome(e.target.value)
  }


  function handleSaving(e)
  {
    e.preventDefault()
    if (income< 0 || income=="")
    {
      setNotification({ show: true, type: "danger", text: "Income cannot be less than zero" })
      handleNotifcation()
     
    }
    else
    {
      if (expenses.length > 0 )
      {
      
        return setSaving(income - totalExpenses)
      }
      else
      {
        return setSaving(income)
      }
    }
 
  }
  function handleAmount(e)
  {
   
    return setAmount(e.target.value)
  }
  
  function handleCharge(e)
  {
      return setCharge(e.target.value)
  
  }

  function handleSubmit(e)
  {
    e.preventDefault()
   
    if (charge != "" && amount > 0)
    {
      if (edit)
      {
        let tempList = expenses.map(item =>
        {
          return item.id == id ? { ...item, charge, amount }:item
        })
        setExpenses(tempList)
      
        setEdit(false)



      }
      else
      {
        setExpenses([...expenses, { id: uuid(), charge, amount }])
       
        setNotification({ show: true, type: "success", text: "Expense was added" })
        handleNotifcation()
      }
    
      setCharge("")
      setAmount("")
      setSaving(income - amount)
    }
    else
    {
      setNotification({ show: true, type: "danger", text: "Please add expense item" })
      handleNotifcation()
    }
  }

  function handleClearList(e)
  {
    setExpenses([])
    setNotification({ show: true, type: "success", text: "Items deleted" })
    handleNotifcation()
    setEdit(false)
  }

  function handelDeleteItem(id){
    let tempList = expenses.filter(item => item.id != id)
    setExpenses(tempList)
  }
   
  function handleEditItem(id)
  {
    let tempList = expenses.find(item => item.id === id)
    const { amount, charge } = tempList
    setEdit(true)
    setCharge(charge)
    setAmount(amount)
    setId(id);
   console.log(tempList)
  }
   
  useEffect(() =>
  {
    localStorage.setItem("expenses", JSON.stringify(expenses)) 
    localStorage.setItem("income", JSON.stringify(income))
    localStorage.setItem("saving", JSON.stringify(saving))
  }, [expenses,income,saving])

  return (
    <>
      {notification.show && <Nofication type={notification.type} text={notification.text} />}
      <Nofication/>
      <h1>
      Budget App
      <img
          src={logo}
          style={{ height: 53, width: 36, verticalAlign:"bottom"}}
          alt="website logo"
        />  
      </h1>
      
      <main className="App">
        <IncomeForm
          income={income}
          handleIncome={handleIncome}
          handleSubmit={handleSaving}
        />
        <BudgetForm
          amount={amount}
          charge={charge}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          isEditMode={edit}
           />
        <BudgetList expenses={expenses} clearList={handleClearList} handleEditItem={handleEditItem} handelDeleteItem={handelDeleteItem} />
      </main>
      <div className="textHolder">
        
          
        <span className="total">
          Total spending :{" "}
            ${totalExpenses}
        </span>
        <span className="total">Total Saving :{" "}${income> 0 ? income-totalExpenses: 0}  </span>
       
      </div>
   
    </>
  );
}

export default App;
