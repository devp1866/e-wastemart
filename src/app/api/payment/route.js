import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: "rzp_test_EeBvhQSCp2JzGQ",
    key_secret: "mKCX1d1MWdgjfUZfoL27Mvn0"
   });

const paymentHandler = async (req) => {
    const body = await req.json();
    console.log(req.headers);
    console.log(body);

      
       var options = {
        amount: body.amount,
        currency: body.currency,
        receipt: 'rcp1',
       };
       const order = await razorpay.orders.create(options);
       console.log(order);
       return NextResponse.json({ orderId: order.id }, { status: 200 });


}

export { paymentHandler as POST }