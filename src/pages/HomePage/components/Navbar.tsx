import { Navbar, Button } from "flowbite-react";

const HomagePageNavbar = () => {
  return (
    <Navbar fluid rounded className="lg:px-20 md:px-10 px-3">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center text-cyan-800 font-league-spartan whitespace-nowrap text-2xl font-semibold">
          RoboAdvisor
        </span>
      </Navbar.Brand>
      <div className="flex gap-4 md:order-2">
        <Button color="light">Log In</Button>
        <Button className="lg:inline-block md:inline-block hidden">
          Get started
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">Cash</Navbar.Link>
        <Navbar.Link href="#">Bonds</Navbar.Link>
        <Navbar.Link href="#">Automated Investing</Navbar.Link>
        <Navbar.Link href="#">Stocks</Navbar.Link>
        <Navbar.Link href="#">Learn</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomagePageNavbar;
