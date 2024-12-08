import React from 'react';
import Image from "next/image";
import first from "./Assets/1.jpg";
import second from "./Assets/2.jpg";
import third from "./Assets/3.jpg";
import fourth from "./Assets/4.jpg";
import fifth from "./Assets/5.jpg";

export default function page() {
  return (
    <div>
    <h1 className='shadow-2xl  text-center text-xl font-bold bg-blue-900 text-white w-full  border-b-2   fixed'>Assignment 9 Governor Sindh Website Cards</h1>
    <br /><br />
    <div className='grid gap-5'>
      
      <div className='rounded-xl flex col-span-2 justify-around'>
        
      <Image
      src = {fourth}
      alt = "Governor Sindh"
      width = {600}
      height = {400}
      className="object-cover rounded-xl shadow-2xl shadow-gray-600"
      />

        <Image
      src = {fifth}
      alt = "Governor Sindh"
      width = {600}
      height = {400}
      className="object-cover rounded-xl shadow-2xl shadow-gray-700"
      
      />
      </div>

      <div className='flex justify-between items-center text-center ml-7 place-content-center'>
        <Image
        src = {third}
        alt='Pic three'
        width = {400}
        height = {200}
        className="object-cover rounded-xl shadow-2xl shadow-gray-700"
        />
        <Image
        src = {first}
        alt='Pic four'
        width = {400}
        height = {200}
        className="object-cover rounded-xl shadow-2xl shadow-gray-700"
        />
        <Image
        src = {second}
        alt='Pic five'
        width = {400}
        height = {250}
        className="object-cover rounded-xl shadow-2xl shadow-gray-700"
        />
      </div>
    </div>
    </div>
  )
}