import { useState } from "react";
import { ICONS } from "../utils/icons/icons";
import { useAuth0 } from "@auth0/auth0-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogin = () =>
    loginWithRedirect({
      appState: { returnTo: "/" },
      authorizationParams: {
        audience: import.meta.env.VITE_API_AUTH0_AUDIENCE,
        scope: "openid profile email read:messages",
      },
    });

  return (
    <>
      <nav className="flex flex-row text-white ">
        <button
          onClick={toggleMenu}
          className={`h-6 w-6 ml-4 mt-2 transition-transform duration-200 ${
            isMenuOpen ? "-rotate-90" : ""
          }`}
        >
          <img src={ICONS.MENU} alt="Menu" className="h-6 w-6" />
        </button>

        <ul
          className={`flex items-center flex-row space-x-5 ml-4 
          ${
            isMenuOpen
              ? "opacity-100 visible translate-x-1"
              : "opacity-0 invisible -translate-x-1"
          } 
          transition-all duration-200 ease-in-out`}
        >
          <li className="px-2 py-2 text-sm">Home</li>
          <li className="px-2 py-2 text-sm">History</li>
          <li className="px-2 py-2 text-sm">About</li>
        </ul>

        <div className="ml-auto flex items-center space-x-2.5 mr-2">
          <button onClick={handleLogin} className="px-2 py-2 text-sm">
            Login
          </button>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="px-2 py-2 text-sm"
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
