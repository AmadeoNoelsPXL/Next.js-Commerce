import NavBarTextComponents from "../TextComponents";
import Logo from "../LogoComponent";
import NavBarIconComponents from "../IconComponents";

export default function NavBar() {
  return (
    <div className="grid grid-cols-3 mx-36 navBar">
      <NavBarTextComponents />
      <Logo />
      <NavBarIconComponents />
    </div>
  );
}
