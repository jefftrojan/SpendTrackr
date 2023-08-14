import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <Container class='my-4'>
      <Stack  direction='horizontal' gap='2' className='mb-4'>
        <h1 className='me-auto'> Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='secondary'>Add Expense</Button>

      </Stack>
       <div 
       style={
        {
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1rem',
          alignItems: 'flex-start',
        }
       }
       
       
       >

        <BudgetCard name='Food' amount={2800} max={2000} />
        <BudgetCard name='Rent' amount={500} max={2000} />
        <BudgetCard name='Fun' amount={1000} max={2000} />


       
       </div>
    </Container>
  );
}

export default App;
