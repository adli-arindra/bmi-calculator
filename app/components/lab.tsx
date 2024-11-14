import FoodCard from "@/app/components/foodCard";

const Lab:React.FC = function () {
    return (
        <div className="min-h-screen flex bg-green-200">
          {/* Left Container */}
          <div className="w-1/2 bg-blue-500 rounded-3xl m-4 px-6 py-6">
            <h2 className="text-white text-2xl text-center">Food Choices</h2>
            <p className="text-white text-center text-sm">
              This is the left container. You can add any content you like here.
            </p>
            <div className="flex gap-4 flex-column flex-wrap pt-8 justify-around">
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
              <FoodCard/>
            </div>
          </div>
    
          {/* Right Container */}
          <div className="w-1/2 bg-green-500 rounded-3xl m-4 px-2 py-6">
            <h2 className="text-white text-2xl text-center">Right Container</h2>
            <p className="text-white text-center text-sm">
              This is the right container. You can add more content here as well.
            </p>
          </div>
        </div>
      );
}

export default Lab;