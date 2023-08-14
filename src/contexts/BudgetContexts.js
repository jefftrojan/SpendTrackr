import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BudgetContext = React.createContext()

export function useBudget() {
    return useContext(BudgetContext)

}

export const BudgetsProvider = ({children}) => {
    const [budgets, setBudgets] = useState([])
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    function addExpense(budgetId, name, amount) {
        expenses.push({ budgetId, name, amount })
    }

    function addBudget(name, max) {
        setBudgets(prevBudgets => { 
            if (prevBudgets.some(budget => budget.name === name)) {

                return prevBudgets
            }
            return [...prevBudgets, { id: uuidv4(), name, max }]
        })

    }

    function deleteBudget(budgetId) {
        const budgetIndex = budgets.findIndex(budget => budget.id === budgetId)
        budgets.splice(budgetIndex, 1)
    }

    function deleteExpense(expenseId) {
        const expenseIndex = expenses.findIndex(expense => expense.id === expenseId)
        expenses.splice(expenseIndex, 1)
    }

    return (
        <BudgetContext.Provider value={{

            budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense,
        }}> 
            {children}

        </BudgetContext.Provider>


    )
}

export const useExpenses = () => {}
