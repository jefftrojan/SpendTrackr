import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useBudgets } from '../contexts/BudgetsContext';
function ChartPage() {
  const { budgets, getBudgetExpenses } = useBudgets();

  const chartData = {
    labels: budgets.map(budget => budget.name),
    datasets: [
      {
        data: budgets.map(budget =>
          getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
        ),
        backgroundColor: budgets.map(() => getRandomColor()),
      },
    ],
  };

  return (
    <div className="chart-container">
      <Doughnut data={chartData} />
    </div>
  );
}

function getRandomColor() {
  // ... generate random color ...
}

export default ChartPage;
