import Image from 'next/image';

const FoodCard = function ({ Name, Description, Calories, Type } : { Name: string, Description: string, Calories: string, Type: string }) {
    return (
        <div className="card bg-base-100 shadow-xl max-w-min">
            <figure className="pt-8">
                <Image
                src="/file.svg"
                width={25}
                height={25}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="text-lg font-bold text-center">{Name}</h2>
                <p className="text-sm text-center">{Description}</p>
                <div className="card-actions justify-center">
                    <div className="badge badge-outline text-sm text-center text-nowrap">{Calories}</div>
                    <div className="badge badge-outline text- text-center">{Type}</div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;