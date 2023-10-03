//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Delete2 from './components/Delete2';
// import  { IntegerProvider }  from '.components/loginStatus';
// import { IntegerProvider } from loginStatus;
// import  { loginStatus, IntegerProvider }   from './components/loginStatus';
import ConcertEntry from './components/ConcertEntry';
import ShowAndBook from './components/ShowAndBook';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Concert from './components/Concert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Edit2 from './components/Edit2';
import DeleteConfirm from './components/DeleteConfirm';
import Login from './components/Login';
// import 'bootstrap/dist/cssbootstrap.min.css'
import Signup from './components/Signup';
import Created from './components/Created';
import ShowAndId from './components/ShowAndId';
import ShowAndDelete from './components/ShowAndDelete';
import Ticket from './components/Ticket';
import CreateTicket from './components/CreateTicket';
import Booked from './components/Booked';
import DelTicket from './components/DelTicket'
import TicketDeleted from './components/TicketDeleted'
document.body.style.backgroundColor='white'

function App() {
  
  const [mode, setmode] = useState('light')
 
  const toggleMode=()=>{
   
    if(mode==='light' || mode==="grey"|| mode==="black"){
      setmode('blue')
      document.body.style.backgroundColor='blue'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  const toggleModeGrey=()=>{
    
    if(mode==='light' || mode==="blue"|| mode==="black"){
      setmode('grey')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  const toggleModeBlack=()=>{
    
    if(mode==='light'|| mode==="blue"|| mode==="grey"){
      setmode('black')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
 <>
 {/* <IntegerProvider>
      <Login />
      <ConcertEntry />
    </IntegerProvider> */}
 <Router>

 <h2 className='container my-3 text-center nav-link' style={{font:"font-family:arial",color:"red"}} >Concert Management System</h2>
  <b><Navbar navbar_item1="Ticket Booking System" navbar_item2="Concert Management System" navbar_item3="Log in" about="About" mode={mode} toggleMode={toggleMode} toggleModeGrey={toggleModeGrey} toggleModeBlack={toggleModeBlack}/></b>
   
   
   <Alert alert={alert}/>
   <div className="container my-3"  >
    <Routes>
      
      <Route exact path="/About" element={<About />}/>
      <Route exact path="/" element={<Textform mode={mode}showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter, Remove extra spaces"  />}/>
      {/* <Textform mode={mode}showAlert={showAlert} heading="Enter your text below to analyze"  /> */}
<Route exact path="/Concert" element={<Concert/>}/>
<Route exact path="/Create" element={<Create/>}/>
<Route exact path="/Edit" element={<Edit/>}/>
<Route exact path="/Delete" element={<Delete/>}/>
<Route exact path="/Edit2" element={<Edit2/>}/>
<Route exact path='/TicketDeleted' element={<TicketDeleted/>}/>
<Route exact path="/Delete_confirm" element={<DeleteConfirm/>}/>
<Route exact path='/ConcertEntry' element={<ConcertEntry/>}/>
{/* <Route exact path="/Login" element={<Login/>}/> */}
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Login" element={<Login/>}/>
<Route path="/Created" element={<Created/>}/>
<Route path='/ShowAndId' element={<ShowAndId/>}/>
<Route path='/ShowAndDelete' element={<ShowAndDelete/>}/>
<Route path='/Delete2' element={<Delete2/>}/>
<Route exact path='/DelTicket' element={<DelTicket/>}/>
<Route path='/Ticket' element={<Ticket/>}/>

<Route path='/CreateTicket' element={<CreateTicket/>}/>

<Route path='/ShowAndBook' element={<ShowAndBook/>}/>

<Route path='/Booked' element={<Booked/>}/>

    </Routes>
    
  

   </div>
  </Router>

   </>
  );
}

export default App;
