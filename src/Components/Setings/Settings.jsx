import React, { useEffect } from "react";
import Sidebar from '../Sidebar/Sidebar';
import {useNavigate} from "react-router-dom"

function Settings() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("hello");
  }, []);
  return (
    <>
      <div className="container membershp">
        <div className="flex-row-start">
          <div className="col-fit">
            <Sidebar />
          </div>
          <div className="col-100 ml-5">
            <div class="containersetting">
              <div class="content">
                <button className="btn-square btn_edit " onClick={()=>navigate('/dashboard')}>
                  Edit Resume
                </button>
                <button className="btn-square btn_reset mt-3" onClick={()=>navigate('/change_password')}>
                  Change Password
                </button>
              </div>
              <div class="flap"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
