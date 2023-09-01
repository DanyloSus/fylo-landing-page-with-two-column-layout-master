const Header = () => {
  return (
    <header className="flex justify-between pt-16 items-end lg:pt-6">
      <img src="./logo.svg" alt="logo" className="lg:w-20" />
      <nav className="flex gap-10 lg:text-xs lg:gap-5">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
