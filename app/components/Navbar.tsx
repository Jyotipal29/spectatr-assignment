const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex  justify-center md:justify-between items-center">
        <div className="   text-white text-2xl font-bold">User List App</div>
        <div className="hidden md:block">
          <a href="#" className="text-white mx-2 text-xl  font-bold">
            Home
          </a>
          <a href="#" className="text-white mx-2  text-xl  font-bold">
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
