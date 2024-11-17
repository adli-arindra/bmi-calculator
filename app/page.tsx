import Image from 'next/image';
import Lab from './components/lab';
import Link from 'next/link';

const Home = function () {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-gray-800 relative z-0 
      bg-gradient-to-b from-white to-green-200 from-50% to-75%">
        <Image 
          src="/dino.svg" 
          width={150}
          height = {150}
          alt="real dinosaur"
          priority= {true}
          className = "animate-bounce"
        />
        
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black">Welcome to BMI Calculator</h1>
          <p className="mt-4 text-lg md:text-xl text-primary-content">
            We&apos;re glad you&apos;re here. Feel free to explore!
          </p>
        </header>
        <Link href="#lab" className= "btn btn-primary text-white mx-1 rounded-full hover:btn-secondary hover:text-white  transition duration-300">
          Get Started
        </Link>
      </div>
      <div id="lab">
        <Lab/>
      </div>
    </>
  );
}

export default Home;