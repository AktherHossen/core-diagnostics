
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Heart, Contact, Home, User, Newspaper } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Health Package", path: "/health-package", icon: Heart },
  { name: "Blog", path: "/blog", icon: Newspaper },
  { name: "Doctor", path: "/doctor", icon: User },
  { name: "Contact", path: "/contact", icon: Contact },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl flex gap-2 items-center text-brand-gray">
          {/* Optionally: you can swap the placeholder.svg to your real logo here */}
          <span
            className="w-10 h-10 rounded-full bg-brand-default flex items-center justify-center"
            style={{ background: "#18b497" }}
          >
            {/* Brand logo color circle */}
            <span className="sr-only">Brand logo</span>
          </span>
          <span className="text-brand-default">core</span>
          <span className="text-brand-blue font-light">DIAGNOSTIC LTD</span>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm font-medium",
                  isActive
                    ? "bg-brand-default/10 text-brand-default shadow"
                    : "text-brand-gray hover:bg-brand-blue/10 hover:text-brand-blue"
                )}
                end
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
