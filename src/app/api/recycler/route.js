import { mongooseConnect } from "@/lib/mongoose";
import { Recycler } from "@/models/Recycler";
import { NextResponse } from "next/server";

const RecyclerHandler = async (req) => {
    await mongooseConnect();
    let method = req.method;
    
    if(method === "GET"){
        const {searchParams} = new URL(req.url);
        const id = searchParams.get('id');
        if(id){
            return NextResponse.json(await Recycler.findOne({_id: id}))
        }
        return NextResponse.json(await Recycler.find());
    }
    
    if(method === "DELETE"){
        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')
        if(id){
            await Recycler.deleteOne({_id: id})
            return NextResponse.json({message: "Recycler Successfully Deleted"})
        }
    }

    let body = await req.json();
    
    if(method === 'POST' && body.name ){
        const RecyclerDoc = await Recycler.create({...body});
        return NextResponse.json({"success": "Successfull", ...RecyclerDoc});
    }

    if(method === 'PUT' && body.name ){
        const RecyclerDoc = await Recycler.updateOne({_id: body._id},{...body});

        return NextResponse.json({"success": "Updated", ...RecyclerDoc});
    }

}

export {RecyclerHandler as POST, RecyclerHandler as GET, RecyclerHandler as PUT, RecyclerHandler as DELETE}