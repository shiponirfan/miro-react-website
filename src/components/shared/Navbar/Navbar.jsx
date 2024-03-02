import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { navbarData } from "../../../data/navbarData";
import { TbWorld } from "react-icons/tb";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="px-4 xl:px-8 py-5 flex items-center justify-between relative">
      <div className="flex items-center gap-4 xl:gap-[26px]">
        <Link to="/">
          <img src={logo} alt="Miro Logo" />
        </Link>
        <nav>
          <ul className="list-none hidden lg:flex gap-4 xl:gap-[26px] p-0 ">
            {navbarData?.map((navbar) => (
              <li key={navbar._id}>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-primary-bg font-bold no-underline"
                      : "text-primary-text no-underline hover:text-primary-bg duration-300"
                  }
                  to={navbar.url}
                >
                  {navbar.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex gap-4 xl:gap-[26px] items-center">
        <Link
          className="text-primary-text no-underline hidden md:flex gap-1 items-center"
          to="/"
        >
          <TbWorld /> EN
        </Link>

        <Link className="text-primary-text hidden md:block no-underline" to="/">
          Contact Sales
        </Link>
        <Link
          className="text-primary-text hidden md:block no-underline"
          to="/login"
        >
          Login
        </Link>

        <button className="py-4 px-4 md:px-6 bg-primary-bg hover:bg-secondary-bg duration-300 cursor-pointer border-0 text-white rounded-3xl">
          <Link className="text-white no-underline" to="/register">
            Sign up free →
          </Link>
        </button>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <button
            onClick={handleMobileMenu}
            className="text-2xl rounded bg-primary-bg text-white border-0 p-2 h-[40px] hover:bg-secondary-bg duration-300"
          >
            <FaBars />
          </button>
          <div
            className={`${
              mobileMenu ? "block top-[100%]" : "hidden top-0"
            } bg-secondary-bg duration-500 absolute left-0 w-full p-5`}
          >
            <nav>
              <ul className="list-none p-0 space-y-3">
                {navbarData?.map((navbar) => (
                  <li key={navbar._id}>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-primary-bg font-bold no-underline"
                          : "text-white no-underline hover:text-primary-bg duration-300"
                      }
                      to={navbar.url}
                    >
                      {navbar.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
