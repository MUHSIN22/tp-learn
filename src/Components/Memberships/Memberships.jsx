import React from "react";
import "./Membership.css";
import Sidebar from '../Sidebar/Sidebar';
export default function Memberships() {

  const displayRazorpay =async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("Aww Snap! you are offline, failed to load razorpay")
      return
    }

    const option = {
      key:"rzp_test_2Ox0LKQowZvZPD",
      currency:'INR',
      amount: amount * 100,
      name: "Talent Place",
      description: "Thanks for Being a valuable member with us!",
      image:"https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      handler: function(response){
        alert(response.razorpay_payment_id)
        alert("Payment Successfull")
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
    <div className="container membershp">
      <div className="flex-row-center">
        <div className="col-fit">
          <Sidebar/>
        </div>
        <div className="col" style={{"paddingTop":"6rem"}}>
          <div className="flex-row-center g-2">
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
          </div>

          <div className="flex-row-center membershipCardRow g-3 mt-3">
            <div className="col-20 membershipCard">
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                Sederhana
              </span>
              <span className="mb-1" style={{ "fontSize": "1.5rem" }}>
                $49{" "}
                <span className="" style={{ "fontSize": "1rem" }}>
                  / month
                </span>
              </span>
              <span className="mb-1" style={{ "fontSize": "1.1rem" }}>
                Lorem Ipsum is simply dummy text of the printing
              </span>
              <div className="flex-row-start">
                <label className="control control-checkbox">
                  2Gb storage
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
                onClick={()=> displayRazorpay(200)}
              >
                Monthly
              </button>
            </div>
            <div className="col-20 membershipCard-2">
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
            </div>
          </div>
        </div>
      </div>

      {/* <h3>More Power and Scale When You Need It</h3>
      <div className="flex-row-start">
      <div className="align-center col-30 text-left">
        <div className="col-90 membershipCard">
          <div className="col-100 g-1">
            <h3>Self-declaration</h3>
            <p>
              In the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue.
            </p>
            <div className="flex-row-start">
              <label className="control control-checkbox">
                I agree terms and condition
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
            </div>
          </div>
          <div className="form-row">
            <div className="col-100">
              <button className="btn primary">
                  Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="align-center col-30 text-left">
        <div className="col-90">
          <h3>Self-declaration</h3>
          <div className="col-100 g-1">
            <p>
              In the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue.
            </p>
            <div className="flex-row-start">
              <label className="control control-checkbox">
                I agree terms and condition
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="align-center col-30 text-left">
        <div className="col-90">
          <h3>Self-declaration</h3>
          <div className="col-100 g-1">
            <p>
              In the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue.
            </p>
            <div className="flex-row-start">
              <label className="control control-checkbox">
                I agree terms and condition
                <input type="checkbox" />
                <div className="control_indicator"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      </div> */}
    </div>
  );
}
