import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Intro from './Pages/Intro';
import Projects from './Pages/Projects';
import { Stack } from '@mui/system';
import Work from './Pages/Work';
import Leadership from './Pages/Leadership';
import Outro from './Pages/Outro';
import Upcoming from './Pages/Upcoming';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App0() {
  return (
    <div style={{margin:"50px"}}>
      <Stack spacing={5}>
        <Intro/>
        <Projects/>
        <Work/>
        <Leadership/>
        <Outro/>
      </Stack>
      
    </div>
  )
}

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App0/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
