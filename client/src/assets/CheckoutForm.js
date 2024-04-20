import React, { useEffect, useState } from "react";
//import { loadStripe } from '@stripe/stripe-js';
import { useStripe, CardElement, useElements} from "@stripe/react-stripe-js";
import axios from 'axios'
import './PaymentPage.css'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}




const CheckoutForm = () => {

  const[success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
 

  const handleSubmit = async(e) =>{
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)

    })
  

  if(!error){
    try {
      const {id} = paymentMethod
      const response = await axios.post("https://aftab-xr9h.onrender.com/payment", {
        amount: 1000,
        id
      })


      if(response.data.success){
        console.log("Payment successful")
        setSuccess(true)
      }

    } catch (error) {
      console.log("error", error)
    }
  } else{
    console.log(error.message)
  }
}

  return (
    <>
    {!success?
    <form onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />

        </div>

      </fieldset>
      <button>Pay</button>

    </form>:
    <div>
      <h2>Congratulations! You have paid your towing fee and your car is ready for retrieval</h2>
    </div>
    
  } 
    
    
    </>

  )
};

export default CheckoutForm;
