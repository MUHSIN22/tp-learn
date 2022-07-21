
import './App.css';
import Login from './Components/Login/Login';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
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
import Membership from './Components/Memberships/Memberships';
import CVReview from './Components/CVEditor/CVReview'
import DummyForm from './Components/EditForms/ProfilePicture'
import CognitiveSkills from './Components/Form/CognitiveSkills';
import Resume from './Components/ResumeTemplate/Resume';
import NotFound from './Components/Not_Found/Notfound';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import Settings from './Components/Setings/Settings';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PdfGenerator from './Components/Resume2/PdfGenerator';
function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const auth = useSelector(selectAuthentication)
  const form_id = useSelector(selectFormId)
  const reload = useSelector(selectReload)
  const routeWithoutNav = ['/','/membership',"/MyProfile","/myprofile","/dashboard","/settings"]
  useEffect(() => {
    if(auth.authToken&&reload){
      console.log('Reload Resume Update')
      try {
        dispatch(resumeInfo({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
          console.log(error)
      }
    }
    if(auth.authToken&&reload){
      console.log('Reload Graph Update')
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

    if(auth.authToken&&!form_id){
      console.log('Auth Resume Reload')
      try {
        dispatch(resumeInfo({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
          console.log(error)
      }
    }
    if(auth.authToken&&!form_id){
      console.log('Auth Graph Reload')
      try {
        dispatch(graphDetails({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
          console.log(error)
      }
    }
  
  
    return () => {
    }
  }, [auth,form_id])
  
  useEffect(() => {
      dispatch(resetError())
    
    return () => {
      
    }
  }, [location,dispatch])
  
  return (
    <div className="App">
      {window.location.pathname ==='/' ? <Header/> : ""}
      {!routeWithoutNav.includes(window.location.pathname) ? <Navbar/> : ""}
      <Routes>
       <Route path='/login' element={<PreventedRoute><Login/></PreventedRoute> }/>
       <Route path='/OTP-login' element={<PreventedRoute><OTPLogin/></PreventedRoute>}/>
       <Route path='/signup' element={<PreventedRoute><Signup/></PreventedRoute>}/>
       <Route path='/OTP-signup' element={<PreventedRoute><OTPSignup/></PreventedRoute>}/>
       <Route path='/create-password' element={<PreventedRoute><CreatePassword/></PreventedRoute>}/>
       <Route path='/cv-builder' element={<CVBuilder/>}/>
       <Route path='/get-onboard' element={<Onboarding/>}/>
       <Route path='/' element={<Home/>}/>

       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path='/membership' element={<Membership/>}/>
       <Route path="/settings" element={<Settings/>}/>
       <Route path='/MyProfile' element={<CVReview/>}/>
       <Route path='/dummy' element={<DummyForm/>}/>
       <Route path='/cs' element={<CognitiveSkills/>}/>
       <Route path="*" element={<NotFound/>}/>
       <Route path='/logout' element={<Logout/> }/>
      </Routes>
    </div>
  );
}

export default App;
