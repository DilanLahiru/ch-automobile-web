import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfessionalButton from "./ProfessionalButton";
import {
  Menu,
  X,
  Wrench,
  LogOut,
  Calendar,
  ChevronDown,
  Settings,
  User,
} from "lucide-react";
import { selectAuth, logoutUser } from "../features/authSlice";
import { toast } from "../hooks/use-toast";
import Logo from "../assets/Logo.png";
import NotificationBell from "./NotificationBell";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(selectAuth);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
      });
      navigate("/");
      setIsMenuOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout.",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-xl border-b border-cyan-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Animated background line */}
      {/* <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Animation */}
          <a
            href="#home"
            className="flex items-center gap-3 group opacity-0 animate-fade-in"
          >
            <div className="relative flex items-center justify-center">
              <img
                src={Logo}
                alt="CH Automobile Logo"
                className="w-60 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              {/* Animated glow effect on hover */}
              <div className="absolute inset-0 rounded-lg" />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 font-semibold text-sm transition-all duration-300 group opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Animated underline */}
                <span className="relative inline-block">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-cyan-800 group-hover:w-full transition-all duration-300" />
                </span>
              </a>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div
            className="hidden md:flex items-center gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() =>
                    setIsProfileDropdownOpen(!isProfileDropdownOpen)
                  }
                  className="flex items-center gap-2 px-5 py-2.5 bg-white hover:from-cyan-700 hover:to-cyan-800 text-cyan-900 rounded-xl font-semibold transition-all duration-300 text-sm border border-cyan-500 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <div className="p-1 bg-white/20 rounded-lg">
                    <User className="w-4 h-4" />
                  </div>
                  <span>Profile</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isProfileDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 overflow-hidden animate-fade-in-down backdrop-blur-sm">
                    {/* Dropdown Header */}
                    <div className="px-5 py-4 bg-white border-b border-gray-200 flex items-center justify-between">
                      <p className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Account
                      </p>
                    </div>

                    {/* Settings Option */}
                    <a
                      href="/settings"
                      className="flex items-center gap-3 px-5 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-all duration-250 font-semibold text-sm group"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    >
                      <div className="p-2 bg-cyan-100 group-hover:bg-cyan-200 rounded-lg transition-all duration-200 transform group-hover:scale-110">
                        <Settings className="w-4 h-4 text-cyan-700" />
                      </div>
                      <div>
                        <p className="font-medium text-xs text-gray-600">
                          Settings
                        </p>
                        <p className="text-xs text-gray-500">
                          Manage your account
                        </p>
                      </div>
                    </a>

                    {/* Divider */}
                    <div className="mx-3 border-t border-gray-200" />
                    <a
                      href="/settings"
                      className="flex items-center gap-3 px-5 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-all duration-250 font-semibold text-sm group"
                      onClick={() => {
                        handleLogout();
                        setIsProfileDropdownOpen(false);
                      }}
                    >
                      <div className="p-2 bg-red-100 group-hover:bg-red-200 rounded-lg transition-all duration-200 transform group-hover:scale-110">
                        <LogOut className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-xs text-gray-800">
                          Sign Out
                        </p>
                        <p className="text-xs text-gray-500">
                          Log out of your account
                        </p>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <ProfessionalButton variant="outline" size="md" href="/auth">
                Login / Sign Up
              </ProfessionalButton>
            )}
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            className="md:hidden text-cyan-900 p-2 rounded-lg hover:bg-cyan-100/50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-cyan-200/50 bg-gradient-to-b from-white/50 to-cyan-50/30 backdrop-blur-md animate-fade-in-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-gray-700 hover:text-cyan-700 transition-all duration-300 font-semibold text-sm rounded-lg hover:bg-cyan-100/50 active:bg-cyan-200/50 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {isAuthenticated ? (
                <>
                  <ProfessionalButton
                    variant="secondary"
                    size="md"
                    Icon={Settings}
                    href="/settings"
                    fullWidth
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.27s" }}
                  >
                    Settings
                  </ProfessionalButton>

                  <ProfessionalButton
                    variant="danger"
                    size="md"
                    Icon={LogOut}
                    fullWidth
                    onClick={handleLogout}
                    className="opacity-0 animate-fade-in"
                    style={{ animationDelay: "0.3s" }}
                  >
                    Logout
                  </ProfessionalButton>
                </>
              ) : (
                <ProfessionalButton
                  variant="outline"
                  size="md"
                  href="/auth"
                  fullWidth
                  className="mt-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: "0.25s" }}
                >
                  Login / Sign Up
                </ProfessionalButton>
              )}
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        .animate-fade-in {
          animation: animate-fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: animate-fade-in-down 0.5s ease-out forwards;
        }

        .animate-bounce-slow {
          animation: animate-bounce-slow 1.5s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
