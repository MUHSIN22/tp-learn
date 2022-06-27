
import './App.css';
import Login from './Components/Login/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Onboarding from './Components/Onboarding/Onboarding';
import Signup from './Components/Signup/Signup';
import CVBuilder from './Components/CVBuilder/CVBuilder';
import OTPLogin from './Components/Login/OTPLogin';
import OTPSignup from './Components/Signup/OTPSignup';
import CreatePassword from './Components/Signup/CreatePassword';
import PreventedRoute from './PreventedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { resumeInfo, selectFormId, selectReload } from './redux/Features/ResumeSlice';
import { resetError, selectAuthentication } from './redux/Features/AuthenticationSlice';
import { useEffect } from 'react';
import { graphDetails } from './redux/Features/GraphSlice';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import Membership from './Components/Memberships/Memberships';
function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const auth = useSelector(selectAuthentication)
  const form_id = useSelector(selectFormId)
  const reload = useSelector(selectReload)
  useEffect(() => {
    if(auth.authToken&&reload){
      console.log('app.js resume info called')
      try {
        dispatch(resumeInfo({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
          console.log(error)
      }
    }
    if(auth.authToken&&reload){
      console.log('app.js resume info called')
      try {
        dispatch(graphDetails({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
          console.log(error)
      }
    }
  
    return () => {
      
    }
  }, [auth,form_id,reload,dispatch])
  
  useEffect(() => {
      dispatch(resetError())
    
    return () => {
      
    }
  }, [location,dispatch])
  
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Routes>
       <Route path='/' element={<PreventedRoute><Login/></PreventedRoute> }/>
       <Route path='/OTP-login' element={<PreventedRoute><OTPLogin/></PreventedRoute>}/>
       <Route path='/signup' element={<PreventedRoute><Signup/></PreventedRoute>}/>
       <Route path='/OTP-signup' element={<PreventedRoute><OTPSignup/></PreventedRoute>}/>
       <Route path='/create-password' element={<PreventedRoute><CreatePassword/></PreventedRoute>}/>
       <Route path='/cv-builder' element={<CVBuilder/>}/>
       <Route path='/get-onboard' element={<Onboarding/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path='/get-membership' element={<Membership/>}/>
      </Routes>
    </div>
  );
}

export default App;
