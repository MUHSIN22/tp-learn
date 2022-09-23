import React, { useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from "react-router-dom"
import MobileHeader from "../MobileHeader/MobileHeader";
import './Settings.css'

function Settings() {
  const navigate = useNavigate();
  useEffect(() => {
  }, []);
  return (
    <div className="settings-container">
      <MobileHeader />
      <div className="flex-row-start settings-wrapper">
        <div className="col-100 align-center justify-center" style={{ "height": '100vh', "backgroundColor": "#80808012" }}>
          <div class="containersetting justify-between">
            <button className="btn primary btn_reset" style={{ "fontWeight": "400", "color": "black" }} onClick={() => navigate('/dashboard/edit')}>
              Edit Resume
            </button>
            <button className="btn btn-primary btn_reset" style={{ "fontWeight": "400", "color": "black" }} onClick={() => navigate('/dashboard/change_password')}>
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
