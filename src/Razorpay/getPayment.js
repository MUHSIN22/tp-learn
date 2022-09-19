import { downloadCV, verifyPayment } from "../redux/Features/ResumeSlice"
import shareResume from "./shareResume"

export default async (amount,media,dispatch,user_id,token) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert("Aww Snap! you are offline, failed to load razorpay")
      return
    }
    
    // rzp_test_B4uZC1xOIWiQLV         =  test key
    const option = {
      key: "rzp_live_QP1DKqGVP2iRRl",
      currency: 'INR',
      amount: amount * 100,
      name: "Talent Place",
      description: "Thanks for Being a valuable member with us!",
      image: "https://images.unsplash.com/photo-1616077167555-51f6bc516dfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      handler: async function (response) {
        let result = await dispatch(verifyPayment({ auth: token, body: { razorpay_payment_id: response.razorpay_payment_id, user_id },dispatch}))
        if(result.payload.data.message){
          if(media){
            shareResume(media,user_id)
          }else{
            let downloadTag = document.createElement('a')
            downloadTag.download = "resume.pdf"
            let CVData = await dispatch(downloadCV({ auth: token, body: { user_id } }))
            if (CVData) {
                downloadTag.href = CVData.payload.data.message;
            }
            downloadTag.dispatchEvent(new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
                view: window
            }))
          }
        }
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