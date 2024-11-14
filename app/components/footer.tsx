

const Footer = function () {
     return (
      <footer className="bg-neutral text-gray-300 py-6 fixed bottom-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between"> 
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-semibold">Virtual Lab</h2>
              <p className="text-sm">Muhammad Adli Arindra - 18222089</p>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-neutral-content hover:text-white">Github Repo</a>
              <a href="#" className="text-neutral-content hover:text-white">Documentation</a>
            </div>
          </div>
        </div>
      </footer>
    );

}
  
export default Footer;