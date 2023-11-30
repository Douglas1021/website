import styled from 'styled-components'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import NoPage from './pages/NoPage';
import CreateAccount from './pages/CreateAccount';
import MakePassword from './pages/CreatePassword';



import TipJava from './pages/TipJava';





function App() {



  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/MakePassword" element={<MakePassword />} />
        

      


        <Route path="/tipJava" element={<TipJava />} />


        
      
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    
   
  );
}


/*
const Job = (props) =>
{
  return props.salary

}
*/

export default App;














