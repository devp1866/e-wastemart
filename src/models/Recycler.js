import mongoose, { Schema, model, models } from "mongoose";

const RecyclerSchema = new Schema({
    name: { type: String, required: true, },
    phone: { type: String, required: true, },
    address: { type: String, required: true, },
    device_type: { type: String, required: true, },
    descrption: {type: String, required: true, },
    amount: { type: Number, required: true, },
    
}, {
    timestamps: true,
})

RecyclerSchema.index({name: 'text', section: 'text', crime: 'text'});

export const Recycler = models.Recycler || model('Recycler', RecyclerSchema);