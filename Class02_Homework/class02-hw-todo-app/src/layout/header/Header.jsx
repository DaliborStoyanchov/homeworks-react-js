import "./Header.css";

function Header(props) {
  return (
    <header className="Header">
      <h1>{props.appTitle}</h1>
    </header>
  );
}

export default Header;
