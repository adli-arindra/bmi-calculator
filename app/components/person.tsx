import Image from 'next/image';
import { useContext } from 'react';
import { foodContext, personContext } from '@/app/components/context';

export interface person  {
    weight: number,
    height: number,
    bmi: number
}

export function GetBMI(weight: number, height: number): number{
  return weight/((height/100) * (height/100));
}

const GetPath = function ( { bmi } : { bmi:number }) {
    if (bmi > 30) return "/body/300.png";
    if (bmi > 25) return "/body/250.png";
    if (bmi > 21.5) return "/body/230.png";
    if (bmi > 18.5) return "/body/185.png";
    return "/body/0.png";
}

const Person = function () {
    const {currentPerson, setCurrentPerson} = useContext(personContext);
    const {food, setFood} = useContext(foodContext);

    return (
        <>
            <Image
                src={GetPath(currentPerson)}
                width={100}
                height={100}
                alt="topiq"
                style={{ height: '300px', width: 'auto' }}
                onClick = { () => {
                    let v = 0;
                    if (food === "Chickin") v = 1;
                    else if (food === "Beef") v = 2;
                    else if (food === "Salad") v = -1;
                    else if (food === "Chilli") v = -2;
                    else if (food === "Chocolate") v = 10;
                    else if (food === "Fries") v = 5;
                    else if (food === "Paper") v = -5;
                    else if (food === "Hammer") v = -10;

                    let newPerson : person = {
                        weight: currentPerson.weight + v,
                        height: currentPerson.height,
                        bmi: GetBMI(currentPerson.weight + v, currentPerson.height)
                    }
                    setCurrentPerson(newPerson);
                    setFood("");
                }}
            />
        </>
    );
}

export default Person;