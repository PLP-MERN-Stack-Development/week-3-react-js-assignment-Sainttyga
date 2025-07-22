import type React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";

// Navbar component for the application
const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Define the navigation items and their corresponding paths
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Tasks", path: "/tasks" },
        { name: "API Demo", path: "/api" },
    ];

    // Function to check if the current path matches the nav item path
    const isActive = (path: string) => location.pathname === path;

    // Render the Navbar component with the defined content
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-foreground">
                            TaskApp
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle and Mobile Menu Button */}
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleTheme}
                            className="h-9 w-9 p-0"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.path)
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground hover:bg-accent hover:text-accent-foreground"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

// Export the Navbar component for use in other parts of the application
export default Navbar;
