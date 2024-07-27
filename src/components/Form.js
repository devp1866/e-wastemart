"use client";
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Button from './ui/Button';

const Form = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        address: "",
        device_type: "",
        descrption: "",
        amount: ""
    });
    console.log(form);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post('/api/recycler', form);
        setForm({
            name: "",
            phone: "",
            address: "",
            device_type: "",
            descrption: "",
            amount: ""
        });
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>

            <div className='flex flex-col'>
                <label htmlFor="name">Full Name</label>
                <input onChange={(e) => { setForm({ ...form, name: e.target.value }) }} value={form.name} type="text" id='name' name='name' className='w-[400px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phone">Phone No.</label>
                <input onChange={(e) => { setForm({ ...form, phone: e.target.value }) }} value={form.phone} type="number" id='phone' name='phone' className='w-[400px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="address">Address</label>
                <input onChange={(e) => { setForm({ ...form, address: e.target.value }) }} value={form.address} type="text" id='address' name='address' className='w-[400px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="education" >Type of Devices</label>
                <select onChange={(e) => { setForm({ ...form, device_type: e.target.value }) }} value={form.device_type} className='flex flex-col'>
                    <option value="option1">Select</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                    <option value="camera"> Camera</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="crimes">Desscription</label>
                <textarea onChange={(e) => { setForm({ ...form, descrption: e.target.value }) }} value={form.descrption} id='crimes' name='crimes' className='w-[400px] h-[125px]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="article">Amount of Purchase</label>
                <input onChange={(e) => { setForm({ ...form, amount: e.target.value }) }} value={form.amount} type="number" id='amount' name='amount' className='w-[400px]' />
            </div>
            <Button type='submit' title='Submit' />
        </form>
    )
}

export default Form