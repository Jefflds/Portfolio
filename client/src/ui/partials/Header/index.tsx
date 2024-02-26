import { ReactNode, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 top-0 z-20 flex w-full">
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a
              href="/#"
              className="block w-full py-5 text-2xl font-bold text-center"
            >
              JeffLDS DEV
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                type="button"
                title="toggle menu"
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700 dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-slate-700 dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <div className="block lg:flex">
                  <ListItem NavLink="/#">Início</ListItem>
                  <ListItem NavLink="/#">Sobre</ListItem>
                  <ListItem NavLink="/#">Serviços</ListItem>
                  <ListItem NavLink="/#">Projetos</ListItem>
                  <ListItem NavLink="/#">Profissional</ListItem>
                  <ListItem NavLink="/#">Depoimentos</ListItem>
                </div>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="rounded-lg bg-blue-500 px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Contate-nos
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

type ListItemProps = {
  children: ReactNode;
  NavLink: string;
};

const ListItem = ({ children, NavLink }: ListItemProps) => {
  return (
    <a
      href={NavLink}
      className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
    >
      {children}
    </a>
  );
};

type SingleImageProps = {
  href: string;
  imgSrc: string;
};

export const SingleImage = ({ href, imgSrc }: SingleImageProps) => {
  return (
    <a href={href} className="flex w-full items-center justify-center">
      <img src={imgSrc} alt="brand image" className="h-10 w-full" />
    </a>
  );
};
