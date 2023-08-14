import { Button, Container, Stack } from 'react-bootstrap';

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
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1rem',
          alignItems: 'flex-start'
        }
       }
       
       
       >

       </div>
    </Container>
  );
}

export default App;
