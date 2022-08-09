import React, { useEffect, useState } from "react";
import "./Membership.css";
import Sidebar from '../Sidebar/Sidebar';
import { useDispatch, useSelector } from "react-redux";
import { selectResumeDetails, verifyPayment } from "../../redux/Features/ResumeSlice";
import { selectAuthToken, selectUser_id } from "../../redux/Features/AuthenticationSlice";
import moment from "moment";
import MobileHeader from "../MobileHeader/MobileHeader";
export default function Memberships() {
  const dispatch = useDispatch();
  const user_id = useSelector(selectUser_id);
  const token = useSelector(selectAuthToken)
  const userInfo = useSelector(selectResumeDetails)
  const [remainingDays, setRemainingDays] = useState(null)

  console.log(userInfo);
  const displayRazorpay = async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert("Aww Snap! you are offline, failed to load razorpay")
      return
    }

    console.log(res);

    const option = {
      key: "rzp_test_B4uZC1xOIWiQLV",
      currency: 'INR',
      amount: amount * 100,
      name: "Talent Place",
      description: "Thanks for Being a valuable member with us!",
      image: "https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      handler: function (response) {
        console.log(response);
        dispatch(verifyPayment({ auth: token, body: { razorpay_payment_id: response.razorpay_payment_id, user_id }, dispatch }))
      },
      "prefill": {
        "name": "Talent Price",
        "email": "talentplace@tp.com",
        "contact": "9999999999"
      },
      "notes": {
        "address": "Talent Place Corporate Office"
      },
      "theme": {
        "color": "#ff7752"
      }
    }

    const paymentObject = new window.Razorpay(option)
    paymentObject.open()
  }

  useEffect(() => {
    if (userInfo.subscription_status === 1) {
      let difference = moment.duration(moment(userInfo.subscription_end, "DD-MM-YYYY").diff(moment().startOf('day'))).asDays()
      setRemainingDays(difference)
    }
  }, [userInfo])

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src

      script.onload = () => {
        resolve(true)
      }

      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }



  return (
    <>
      <MobileHeader />
      <div className="container membershp">
        <div className="flex-row-start">
          <div className="col-fit sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="col-100 membership-wrapper" style={{ "padding": "6rem" }}>
            {/* <div className="flex-row-center g-2">
            <div className="col-20">
              <button type="button" className="btn-square orange" onClick={()=>console.log("clicked")}>
                Monthly
              </button>
            </div>
            <div className="col-20">
              <button type="button" className="btn-square add-border secondary">
                Yearly
              </button>
            </div>
          </div>
          <div className="flex-row-center">
            <div className="col-45 mt-2 px-1">
              <p className="head-2 my-0">
                More Power and Scale When You Need It
              </p>
              <p className="member-head-3">
                Our custom-built servers and 24/7 experts deliver breakthrough
                perfomance that grows with your business Our custom-built
                servers and 24/7 experts deliver breakthrough perfomance that
                grows with your business
              </p>
            </div>
          </div> */}

            <div className="flex-row-center membershipCardRow g-3">
              <div className="col-fit membershipCard">
                <h1 className="mb-1" style={{ "fontSize": "3rem", fontWeight: "600" }}>
                  {userInfo.subscription_status === 1 ? `You have ${remainingDays} days Premium access` : "3 Months Access"}
                </h1>
                <div className="g-2" style={{ paddingLeft: "2rem" }}>
                  <div className="flex-row-start">
                    {
                      userInfo.subscription_status !== 1 &&
                      <div className="mb-1">
                        <p className="m-0" style={{ "fontSize": "5rem", "color": "#e97453", fontWeight: "600" }}>&#x20b9;499/-</p>
                      </div>
                    }
                  </div>
                  <div className="flex-row-start">
                    <label className="control control-checkbox labelsCss">
                      Unlimited Printing
                      <div className="checked-circle"></div>
                    </label>
                  </div>
                  <div className="flex-row-start">
                    <label className="control control-checkbox labelsCss">
                      Downloading (PDF)
                      <div className="checked-circle"></div>
                    </label>
                  </div>
                  <div className="flex-row-start">
                    <label className="control control-checkbox labelsCss">
                      Sharing
                      <div className="checked-circle"></div>
                    </label>
                  </div>
                  <div className="flex-row-start">
                    <label className="control control-checkbox labelsCss">
                      Unlimited Edit Access
                      <div className="checked-circle"></div>
                    </label>
                  </div>
                </div>
                {
                  userInfo.subscription_status !== 1 &&
                  <button
                    type="button"
                    className="btn-square orange mt-3"
                    style={{ "boxShadow": "0px 14px 10px rgb(236 149 124 / 70%)", "border": "1px solid white" }}
                    onClick={() => displayRazorpay(499)}
                  >
                    Buy Now
                  </button>
                }
              </div>
              {/* <div className="col-20 membershipCard-2">
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                Manangah
              </span>
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                $79{" "}
                <span className="" style={{ "fontSize": "1rem" }}>
                  / month
                </span>
              </span>
              <span className="mb-1" style={{ "fontSize": "1.1rem" }}>
                Lorem Ipsum is simply dummy text of the printing
              </span>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  10Gb storage
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Unlimited bandwidth
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  chat support
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Single website
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Free domain 1 year
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Standered Feature
                  <div className="checked-circle"></div>
                </label>
              </div>
              <button
                type="button"
                className="btn-square orange mt-3"
                style={{
                  border: "1px solid white",
                  "boxShadow": "1px 0px 4px 0 white",
                }}
                onClick={()=> displayRazorpay(500)}
              >
                Monthly
              </button>
            </div>
            <div className="col-20 membershipCard">
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                Mewah
              </span>
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                $99{" "}
                <span className="" style={{ "fontSize": "1rem" }}>
                  / month
                </span>
              </span>
              <span className="mb-1" style={{ "fontSize": "1.1rem" }}>
                iLorem Ipsum is simply dummy text of the printing
              </span>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  100Gb storage
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Unlimited bandwidth
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  chat support
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Single website
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Free domain 1 year
                  <div className="checked-circle"></div>
                </label>
              </div>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  Standered Feature
                  <div className="checked-circle"></div>
                </label>
              </div>
              <button
                type="button"
                className="btn-square orange mt-3"
                style={{ "boxShadow": "0px 7px 12px 0 #ec957c" }}
                onClick={()=> displayRazorpay(900)}
              >
                Monthly
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
