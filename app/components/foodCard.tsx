import Image from 'next/image';
import { useContext } from 'react';
import { foodContext } from '@/app/components/context';

const FoodCard = function ({ Name, Description, Calories, Type } : { Name: string, Description: string, Calories: string, Type: string }) {
    const state = useContext(foodContext);
    const selected = state.food === Name;
    const isTrue = "flex flex-col items-center justify-center gap-1 p-5 rounded-2xl bg-accent"
    const isFalse = "flex flex-col items-center justify-center gap-1 p-5 rounded-2xl bg-neutral"
    const Path = "/food/" + Name + ".png";
    console.log(Path);
    
    return (
        <button className={selected ? isTrue : isFalse}
        onClick= {() => {
            state.setFood(Name);
            }} >
            <Image  
                src={Path}
                width={50}
                height={50}
                alt="Shoes" 
                />
            <h2 className="text-lg font-bold text-center">{Name}</h2>
            <p className="text-sm text-center">{Description}</p>
            <div className="badge badge-outline text-xs text-center">{Calories}</div>
            <div className="badge badge-outline text-xs text-center">{Type}</div>
        </button>
    );
}

export default FoodCard;