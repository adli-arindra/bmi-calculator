import Image from 'next/image';

const FoodCard = function () {
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
                <h2 className="card-title text-md">
                    Chicken
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p className="text-sm">kukuruyuk</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline text-sm">Cal +30</div>
                    <div className="badge badge-outline text-sm">Kegeprek</div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;