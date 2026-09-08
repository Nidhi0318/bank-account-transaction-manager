import { useState } from "react";

import useTransactions from "../../../personal-finance-dashboard/frontend/src/hooks/useTransactions";

import SummaryCard from "../../../personal-finance-dashboard/frontend/src/components/SummaryCard";
import TransactionForm from "../../../personal-finance-dashboard/frontend/src/components/TransactionForm";
import TransactionList from "../../../personal-finance-dashboard/frontend/src/components/TransactionList";
import ExpenseChart from "../../../personal-finance-dashboard/frontend/src/components/ExpenseChart";

import "./App.css";

function App() {

    const {
        transactions,
        loading,
        addTransaction,
        deleteTransaction
    } = useTransactions();

    const [search, setSearch] = useState("");

    // Calculate income
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((total, t) => total + t.amount, 0);

    // Calculate expenses
    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((total, t) => total + t.amount, 0);

    // Calculate savings
    const savings = income - expenses;

    // Search transactions
    const filteredTransactions = transactions.filter(transaction =>
        transaction.title.toLowerCase().includes(search.toLowerCase()) ||
        transaction.category.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (

        <div className="container">

            <h1>Personal Finance Dashboard</h1>

            {/* Summary */}

            <div className="summary">

                <SummaryCard
                    title="Income"
                    amount={income}
                />

                <SummaryCard
                    title="Expenses"
                    amount={expenses}
                />

                <SummaryCard
                    title="Savings"
                    amount={savings}
                />

            </div>


            {/* Add Transaction */}

            <TransactionForm
                addTransaction={addTransaction}
            />


            {/* Search */}

            <input
                className="search"
                type="text"
                placeholder="Search transactions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />


            {/* Chart */}

            <ExpenseChart
                transactions={transactions}
            />


            {/* Transactions */}

            <TransactionList
                transactions={filteredTransactions}
                deleteTransaction={deleteTransaction}
            />

        </div>
    );
}

export default App;