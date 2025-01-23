
import { useState } from "react";
import Button from "./Button";


const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Features',
    href: '#features',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
const NavItems = () => {    
    return ( <ul className="nav-ul">
        {navLinks.map(({id, href, name}) => (
           <li key={id} className="nav-li" onClick={() =>{}}>
                <a href={href} className="nav-li_a">{name}</a>
            </li>
        )) }
  </ul>)
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
      };

  return (
    <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
     <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center py-5 mx-auto c-space">
        <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors ">Outside Eden</a>
        
        <nav className="sm:flex hidden">
            <NavItems />
        </nav>
        
        <div className="flex space-x-1">
        <Button name="Start Now"
        containerClass="sm:h-10 h-6 text-neutral-400 hover:text-white" href="#contact"/>
        <button onClick={toggleMenu} className="text-neutral-400  hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle menu">

          <img src={isOpen ? "img/close.svg" : "img/menu.svg"} alt="toggle" className="w-6 h-6"/>
        </button>

        </div>
       
        
       
      </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
            <NavItems />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
