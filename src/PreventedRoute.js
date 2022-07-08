import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthToken } from './redux/Features/AuthenticationSlice';
export default function PreventedRoute({ children }) {
  const token =  useSelector(selectAuthToken) 
  return !token? children : <Navigate to={'/get-onboard'} />;
}
