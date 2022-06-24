import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from './redux/Features/AuthenticationSlice';
import { selectFormId } from './redux/Features/ResumeSlice';
export default function PreventedRoute({ children }) {
  const token =  useSelector(selectAuthToken) 
  const formId = useSelector(selectFormId) 
  return !token? children : <Navigate to={formId?'cv-builder':'/get-onboard'} />;
}
