import Searchbar from "./Searchbar";

const Header = () => (
  <header className="sticky top-0 shadow-xl p-8 flex flex-col md:flex-row md:justify-around justify-between items-center bg-white">
    <h1 className="text-5xl font-bold">Find Devs</h1>
    <Searchbar />
  </header>
);

export default Header;
