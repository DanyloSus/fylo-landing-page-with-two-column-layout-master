const Header = () => {
  return (
    <header className="flex justify-between pt-16 items-end">
      <img src="./logo.svg" alt="logo" />
      <nav className="flex gap-10">
        <a href="#">Features</a>
        <a href="#">Team</a>
        <a href="#">Sign In</a>
      </nav>
    </header>
  );
};

export default Header;
