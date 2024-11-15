"use client";

import FoodCard from "@/app/components/foodCard";
import { useState } from 'react';
import { foodContext, personContext } from '@/app/components/context';
import Person, { GetBMI, person } from "@/app/components/person";

const defaultPerson : person = {
  weight: 65,
  height: 175,
  bmi: GetBMI(65, 175)
}

const GetColor = function ( { bmi } : { bmi:number }) {
  if (bmi > 30) return "progress progress-error";
  if (bmi > 25) return "progress progress-warning";
  if (bmi > 21.5) return "progress progress-info";
  if (bmi > 18.5) return "progress progress-success";
  return "progress progress-secondary";
}

const GetTextColor = function ( { bmi } : { bmi:number }) {
  if (bmi > 30) return "text-error text-lg";
  if (bmi > 25) return "text-warning text-lg";
  if (bmi > 21.5) return "text-info text-lg";
  if (bmi > 18.5) return "text-success text-lg";
  return "text-secondary text-lg";
}

const Lab:React.FC = function () {
  const [food, setFood] = useState("");
  const [currentPerson, setCurrentPerson] = useState<person>(defaultPerson);
  let weightInput : number, heightInput : number;

  return (
    <foodContext.Provider value={{ food, setFood }}>
      <div className="flex bg-green-200">
        <div className="w-1/2 bg-neutral rounded-3xl m-4 px-6 py-6 border-2 border-neutral border-solid">
          <h2 className="text-white text-2xl text-center font-bold">FOOD CHOICES</h2>
          <p className="text-neutral-content text-center text-sm mt-4">
            Makan apa hari ini ?
          </p>
          <div className="grid lg:grid-rows-2 lg:grid-cols-4 md:grid-rows-4 md:grid-cols-2 gap-4 pt-6 grid-rows-8 grid-cols-1">
            <FoodCard Name="Chickin" Description="Kukuruyuk" Calories="239 cal" Type="Meat"/>
            <FoodCard Name="Beef" Description="Moooo" Calories="271 cal" Type="Meat"/>
            <FoodCard Name="Salad" Description="Yummy" Calories="114 cal" Type="Veggies"/>
            <FoodCard Name="Chilli" Description="Hot!" Calories="40 cal" Type="Veggies"/>
            <FoodCard Name="Chocolate" Description="Sweet" Calories="555 cal" Type="Store"/>
            <FoodCard Name="Fries" Description="Nice" Calories="311 cal" Type="Good"/>
            <FoodCard Name="Paper" Description="Why" Calories="0 cal" Type="Fotocopy"/>
            <FoodCard Name="Hammer" Description="DON&apos;T" Calories="-123 cal" Type="Construction"/>
          </div>
        </div>
  
        <div className="w-1/2 bg-neutral rounded-3xl m-4 px-2 py-6 border-2 border-neutral border-solid">
          <h2 className="text-white text-4xl font-bold text-center pt-4">YOU</h2>
          <div className="flex justify-center pt-5 flex-col items-center">
            <personContext.Provider value={{ currentPerson, setCurrentPerson }}>
              <Person/>
            </personContext.Provider>
            <div className="flex flex-col justify-center py-4 max-w-sm gap-4 sm:flex-row pt-max">
              <input type="text" placeholder="Weight in kg" onChange={(e) => weightInput = parseInt(e.target.value)} className="input input-bordered w-full max-w-xs text-center" />
              <input type="text" placeholder="Height in cm" onChange={(e) => heightInput = parseInt(e.target.value)} className="input input-bordered w-full max-w-xs text-center" />
              <button className="btn btn-square" onClick={() => {
                if (heightInput === undefined) heightInput = 175;
                if (weightInput === undefined) weightInput = 65;
                const newPerson:person = {
                  height: heightInput,
                  weight: weightInput,
                  bmi: GetBMI(weightInput, heightInput)
                }
                console.log({heightInput, weightInput});
                setCurrentPerson(newPerson);
              }}>Set</button>
            </div>
              <progress className={GetColor(currentPerson)} value={currentPerson.bmi - 12} max="20"></progress>
              <h2 className={GetTextColor(currentPerson)}>{currentPerson.bmi.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </foodContext.Provider>
  );
}

export default Lab;