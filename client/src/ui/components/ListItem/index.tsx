import { ReactNode } from "react";

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

export default ListItem;
