
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
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Checking from './Components/checking/Checking';
import Footer from './Components/Footer/Footer';
import PrivacyPolicy from './Components/Footer Links/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/Footer Links/TermAndConditions/TermsAndConditions';
import CVShare from './Components/CVShare/CVShare';
import CVcontainer from './Components/CV/CVcontainer';
import AboutUs from './Components/AboutUs/AboutUs';
import CVProfile from './Components/CVProfile/CVProfile';
import PricingPage from './Components/Pricing Page/PricingPage';
import DashboardCv from './Components/DashboardCv/DashboardCv';
import EditProfilePage from './Components/EditProfilePage/EditProfilePage';
function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  const auth = useSelector(selectAuthentication)
  const form_id = useSelector(selectFormId)
  const reload = useSelector(selectReload)
  const routeWithoutNav = ['/','/membership',"/MyProfile","/myprofile","/dashboard","/settings","/change_password",'/about-us','/cv-profile','/pricing','/dashboard/cv',"/dashboard/edit"]
  const routeWithouFooter = ['/membership',"/MyProfile","/myprofile","/dashboard","/settings","/change_password","/login",'/signup','/get-onboard','cv-builder','cv-share','/OTP-signup','/create-password','/cv-profile',"/dashboard/cv","/dashboard/edit"]
  useEffect(() => {
    if(auth.authToken&&reload){
      try {
        dispatch(resumeInfo({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
      }
    }
    if(auth.authToken&&reload){
      try {
        dispatch(graphDetails({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
      }
    }
  
    return () => {
      
    }
  }, [auth,form_id,reload,dispatch])
  
  useEffect(() => {

    if(auth.authToken&&!form_id){
      try {
        dispatch(resumeInfo({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
      }
    }
    if(auth.authToken&&!form_id){
      try {
        dispatch(graphDetails({user_id:auth.user_id,auth:auth.authToken})).unwrap()
      } catch (error) {
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
       <Route path="/about-us" element={<AboutUs />} />
       <Route path='/pricing' element={<PricingPage />} />
       <Route path='/cv-builder' element={<CVBuilder/>}/>
       <Route path='/get-onboard' element={<Onboarding/>}/>
       <Route path='/' element={<Home/>}/>
       
       <Route path='/cv-profile' element={<CVProfile />} />

       <Route path='/cv-share/:id' element={<CVShare />} />
       <Route path='/check' element={<Checking/>} />
       <Route path='/privacy-policy' element={<PrivacyPolicy />} />
       <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path='/membership' element={<Membership/>}/>
       <Route path="/settings" element={<Settings/>}/>
       <Route path='/MyProfile' element={<CVReview/>}/>
       <Route path='/dummy' element={<DummyForm/>}/>
       <Route path='/cs' element={<CognitiveSkills/>}/>
       <Route path="*" element={<NotFound/>}/>
       <Route path='/logout' element={<Logout/> }/>
       <Route path='/change_password' element={<ChangePassword/> }/>
       <Route path='/dashboard' element={<CVProfile />}>
          <Route path="cv" element={<DashboardCv />} />
          <Route path='edit' element={<EditProfilePage />} />
       </Route>
      </Routes>
      {!routeWithouFooter.includes(window.location.pathname) ? <Footer /> : null}
    </div>
  );
}

export default App;
