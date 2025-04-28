import { NavLink } from 'react-router-dom';
import logo from '../logo/logo-dark-full.png';

function Navbar() {
  const menu = [
    { to: '/about', label: 'About Us' },
    { to: '/support', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];
  return (
    <nav className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-cyan-500 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="GoGetWell Logo" className="h-10 w-auto" />
        </NavLink>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="flex flex-wrap gap-4 md:gap-6 text-white font-semibold text-base">
            {menu.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `hover:text-cyan-200 focus:outline-none focus:text-cyan-100 px-2 py-1 rounded transition ${isActive ? 'bg-white text-cyan-700 font-bold' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/login" className="ml-4 text-white font-semibold hover:text-cyan-200 focus:outline-none focus:text-cyan-100 transition">Login</NavLink>
          <NavLink to="/demo" className="ml-2 bg-white text-cyan-700 font-bold px-5 py-2 rounded-full shadow hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition">Get Started</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 