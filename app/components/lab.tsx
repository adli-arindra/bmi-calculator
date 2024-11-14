import Save from '@/app/components/save';

const Lab:React.FC = function () {
    return (
        <div className="min-h-screen flex">
          {/* Left Container */}
          <div className="w-1/2 bg-blue-500 p-8">
            <h2 className="text-white text-2xl">Left Container</h2>
            <p className="text-white">
              This is the left container. You can add any content you like here.
            </p>
          </div>
    
          {/* Right Container */}
          <div className="w-1/2 bg-green-500 p-8">
            <h2 className="text-white text-2xl">Right Container</h2>
            <p className="text-white">
              This is the right container. You can add more content here as well.
            </p>
          </div>
        </div>
      );
}

export default Lab;