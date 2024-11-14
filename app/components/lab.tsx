import FoodCard from "@/app/components/foodCard";

const Lab:React.FC = function () {
    return (
        <div className="flex bg-green-200">
          <div className="w-1/2 bg-blue-500 rounded-3xl m-4 px-6 py-6">
            <h2 className="text-white text-2xl text-center">Food Choices</h2>
            <p className="text-white text-center text-sm mt-4">
              Makan apa yaw
            </p>
            <div className="flex gap-4 flex-column flex-wrap pt-8 justify-around">
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
    
          <div className="w-1/2 bg-green-500 rounded-3xl m-4 px-2 py-6">
            <h2 className="text-white text-2xl text-center">You</h2>
            
          </div>
        </div>
      );
}

export default Lab;