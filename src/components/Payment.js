'use client';
import Script from 'next/script';
import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';
import Label from './ui/Label';




export default function Payment({existingName, existingEmail, existingAmount}) {
    const [name, setName] = useState(existingName || '');
    const [email, setEmail] = useState(existingEmail || '');
    const [amount, setAmount] = useState(existingAmount || '');
    const [currency, setCurrency] = useState('INR');
    const [loading, setLoading] = useState(false);

    const createOrderId = async () => {
        try {
         const response = await fetch('/api/payment', {
          method: 'POST',
          headers: {
           'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           amount: parseFloat(amount) * 100,
           currency: currency,
          }),
         });
      
         if (!response.ok) {
          throw new Error('Network response was not ok');
         }
      
         const data = await response.json();
         return data.orderId;
        } catch (error) {
         console.error('There was a problem with your fetch operation:', error);
        }
       };

      const processPayment = async (e) => {
        e.preventDefault();
        try {
         const orderId = await createOrderId();
         const options = {
          key: "rzp_test_EeBvhQSCp2JzGQ",
          amount: parseFloat(amount) * 100,
          currency: currency,
          name: name,
          description: 'description',
          order_id: orderId,
          handler: async function (response) {
           const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
           };
      
           const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
           });
           const res = await result.json();
           if (res.isOk) alert("payment succeed");
           else {
            alert(res.message);
           }
          },
          prefill: {
           name: name,
           email: email,
          },
          theme: {
           color: '#3399cc',
          },
         };
         const paymentObject = new window.Razorpay(options);
         paymentObject.on('payment.failed', function (response) {
          alert(response.error.description);
         });
         paymentObject.open();
        } catch (error) {
         console.log(error);
        }
       };
      
       
       return (
        <>
         <Script
          id="razorpay-checkout-js"
          src="https://checkout.razorpay.com/v1/checkout.js"
         />
         <section className="flex flex-col gap-6 h-14 mx-5 items-center pt-12 ">
          <form
           className="flex flex-col gap-6 w-full sm:w-80"
           onSubmit={processPayment}
          >
           <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type='submit'>Pay Now</button>
          </form>
         </section>
        </>
       );
}

