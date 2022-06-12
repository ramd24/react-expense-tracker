import './App.css'
import Header from './compenents/Header'
import Balance from './compenents/Balance'
import IncomeExpenses from './compenents/IncomeExpenses'
import TransactionList from './compenents/TransactionList'
import AddTransaction from './compenents/AddTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
