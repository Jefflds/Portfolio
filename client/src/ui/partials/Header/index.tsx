import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";

const Header = () => {
  
  return (
    <header className="absolute left-0 top-0 z-20 flex w-full">
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-between px-4">
            <Navbar />
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;