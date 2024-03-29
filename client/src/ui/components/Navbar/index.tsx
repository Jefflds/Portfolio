import { useState } from "react";
import ListItem from "../ListItem";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
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
  );
};

export default Navbar;
