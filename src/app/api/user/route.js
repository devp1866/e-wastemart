import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import { NextResponse } from "next/server";


const userHandler = async (req) => {
    await mongooseConnect();
    
        const body = await req.json();
        body.role = "user";
        body.name = body.email.split("@")[0];
        
        console.log(body);
        const { name, email, password, role } = body;

        const user = await User.create({ name, email, password, role });

        return NextResponse.json(user);
    

}

export { userHandler as POST }