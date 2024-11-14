import Image from 'next/image';

const Home = function () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800">
      <Image 
        src="/dino.svg" 
        width={150}
        height = {150}
        alt="real dinosaur"
        className = "animate-bounce"
      />
      
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">Welcome to BMI Calculator</h1>
        <p className="mt-4 text-lg md:text-xl text-primary-content">
          We're glad you're here. Feel free to explore!
        </p>
      </header>

      <button className= "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary   transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Home;