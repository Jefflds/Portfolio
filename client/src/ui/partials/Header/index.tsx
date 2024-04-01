import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";
import { HeaderContainer } from "../../styles/Header/Header.style";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer className={`fixed left-0 top-0 z-20 flex w-full ${scrolling ? 'bg-white shadow-lg' : 'bg-transparent' }`}>
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <Logo />
          <div className="flex w-full items-center justify-between px-4">
            <Navbar />
            <div className="hidden lg:block">
              <Button ButtonText="Contate-nos" />
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;