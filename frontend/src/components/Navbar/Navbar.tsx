import NavbarIn from "./NavbarIn";
import NavbarOut from "./NavbarOut";

const Navbar = () => {
  // const params = useParams();
  const path = window.location.pathname;
  let routes = [];
  let login = false;
  for (let i = 0; i < path.length; i++) {
    let char = path.charAt(i);
    if (char === "/") {
      let route = path.substring(i + 1);
      routes.push(route);
    }
  }
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  for (let i = 0; i < 10; i++) {
    let lastRoute = routes[routes.length - 1];
    if (lastRoute[0] === numbers[i]) {
      login = true;
      break;
    } else {
      login = false;
    }
  }

  function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;

    if (!isLoggedIn) {
      return <NavbarOut />;
    } else {
      return <NavbarIn />;
    }
  }

  return <Greeting isLoggedIn={login} />;
};

export default Navbar;
