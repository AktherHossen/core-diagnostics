
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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-700">Health Hub Diagnostics</div>
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
                    ? "bg-blue-100 text-blue-700 shadow"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
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
