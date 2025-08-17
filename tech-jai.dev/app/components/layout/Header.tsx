import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
// import { ThemeToggle } from "./ThemeToggle"; // adjust path
// import { useAuth } from "../contexts/auth-context"; // adjust path

const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Videos", href: "#videos" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [logoUrl, setLogoUrl] = useState<string>("");
    //   const { user } = useAuth();
    const user = true
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleNavClick = (href: string) => {
        setIsMenuOpen(false);
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate(href);
        }
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-lg border-b shadow-sm"
                : "bg-white/80 backdrop-blur-md"
                }`}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center hover:opacity-80 transition-opacity"
                    >
                        {logoUrl ? (
                            <img
                                src={logoUrl}
                                alt="Logo"
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                        ) : (
                            <span className="text-2xl font-bold text-primary">JD</span>
                        )}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => handleNavClick(item.href)}
                                className="text-gray-700 hover:text-black transition-colors font-medium"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Theme Toggle & Mobile Menu */}
                    <div className="flex items-center space-x-4">
                        {/* <ThemeToggle /> */}

                        {/* Admin Link */}
                        <Link
                            to={user ? "/admin" : "/admin/login"}
                            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            {user ? "Admin Dashboard" : "Admin Login"}
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-white/95 backdrop-blur-lg">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item.href)}
                                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    {item.name}
                                </button>
                            ))}
                            <Link
                                to={user ? "/admin" : "/admin/login"}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {user ? "Admin Dashboard" : "Admin Login"}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
