import './App.css';
import Navbar from './components/Navbar';
import TaskAdd from './components/taskadd';
import Tasklist from './components/tasklist';
import Modal from './components/update';
import Usersign from './components/users/usersign';
import Userlogin from './components/users/userlogin';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className='container1 h-full'>
      <div>
        
     <Navbar/>
     <div class="grid grid-cols-2 overflow-y-full ">
         <TaskAdd/>
     <Modal/>
     </div>
     <BrowserRouter>
      <Routes>
        <Route path="signin" element={ <Usersign/> }/>
        <Route path="login" element={ <Userlogin/> }/>
      </Routes>
     </BrowserRouter>
     </div>
     </div>
    </>
    
  );
}

export default App;
