import type React from "react";
import { Link } from "react-router-dom";

// Footer component for the application
const Footer: React.FC = () => {

    // Get the current year for the footer copyright
    const currentYear = new Date().getFullYear();

    // Define the footer links and social media icons
    const footerLinks = [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Contact", href: "#" },
        { name: "About", href: "#" },
    ];

    // Define the social media links with icons
    const socialLinks = [
        { name: "GitHub", href: "#", icon: "📱" },
        { name: "Twitter", href: "#", icon: "🐦" },
        { name: "LinkedIn", href: "#", icon: "💼" },
    ];

    // Render the footer component with the defined content
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">TaskApp</h3>
                        <p className="text-sm text-muted-foreground">
                            A modern task management application built with React and Tailwind
                            CSS. Manage your tasks efficiently with our intuitive interface.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div className="space-y-4">
                        <h4 className="text-md font-medium text-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Section */}
                    <div className="space-y-4">
                        <h4 className="text-md font-medium text-foreground">Connect</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-muted-foreground hover:text-foreground transition-colors"
                                    title={social.name}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} TaskApp. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 md:mt-0">
                            Zwane Lindokuhle
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Export the Footer component for use in other parts of the application
export default Footer;
