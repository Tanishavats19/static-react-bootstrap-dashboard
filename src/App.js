
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CardGroup from './components/CardGroup';
import Stats from './components/Stats';
import TableCard from './components/TableCard';

function App() {
  return (
    <>
    
      <div className="d-flex gap-3" style={{ height: '100vh' }}>
        <div className='sidebar' >
          <Sidebar/>
        </div>
        <div className='body flex-fill' >
          <div className='header mx-2'>
            <Header/>
          </div>
          <div className='mx-2'>
            <CardGroup />
          </div>
          <div className='mx-2'>
            <Stats />
          </div>
          <div className='mx-2'>
            <TableCard />
          </div>
          
        </div>
      </div>
    
      
    </>
  );
}

export default App;
