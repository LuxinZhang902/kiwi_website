const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold">NaviKiwi</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  