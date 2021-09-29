import { HomeIcon, AnnotationIcon, ChartBarIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
function NavigationLinks() {
  return (
    <nav className="flex justify-evenly ml-6 md:flex-col  md:m-auto">
      <NavLink to="/" aria-label="navigates to home dashboard">
        <HomeIcon
          className="w-9 h-9 text-gray-300 mx-6 sm:mx-12 md:my-5 md:mx-0 nav-link"
          alt="home dashboard"
        />
      </NavLink>
      <NavLink to="/reviews" aria-label="navigates to reviews dashboard">
        <AnnotationIcon
          className="w-9 h-9 text-gray-300  mx-6 sm:mx-12 md:my-5 md:mx-0 nav-link"
          alt="reviews dashboard"
        />
      </NavLink>
      <NavLink
        to="/sales"
        activeClassName="text-fuchsia-9 "
        aria-label="navigates to sales dashboard"
      >
        <ChartBarIcon
          className="w-9 h-9 text-gray-300  mx-6 sm:mx-12 md:my-5 md:mx-0 nav-link"
          alt="sales dashboard"
        />
      </NavLink>
    </nav>
  );
}

export default NavigationLinks;
