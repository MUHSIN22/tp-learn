import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from './redux/Features/AuthenticationSlice';
import { selectResumeInfo } from './redux/Features/ResumeSlice';
export default function PreventedRoute({ children }) {
  const token =  useSelector(selectAuthToken) 
  const resumeInfo = useSelector(selectResumeInfo) 
  console.log(resumeInfo)
  return !token? children : <Navigate to={resumeInfo?'cv-builder':'/get-onboard'} />;
}
