const NavLinkHeader = ({ text }) => {
  return (
    <a className="group relative py-8" href="#">
      <span className="group-hover:text-orange-primary">{text}</span>
      <span className="duration-300 absolute bottom-0 left-0 block w-full h-1 scale-x-0 transition-all group-hover:scale-x-100 group-hover:bg-orange-primary"></span>
    </a>
  );
};

export default NavLinkHeader;
