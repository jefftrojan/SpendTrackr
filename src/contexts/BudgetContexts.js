import React, { useContext } from 'react';

const BudgetContext = React.createContext()

export function useBudget() {
    return useContext(BudgetContext)

}

export const BudgetsProvider = ({children}) => {
    const budgets = []
    const expenses = []

    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }

    function addExpense(budgetId, name, amount) {
        expenses.push({ budgetId, name, amount })
    }

    function addBudget(name, amount) {
        budgets.push({ name, amount })
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
