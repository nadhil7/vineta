import Link from "next/link";

const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/help" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Terms and Conditions", href: "/terms" },
];

const shopCategories = [
    { label: "Hot Deals", href: "/shop/hot-deals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "Wedding Collections", href: "/shop/wedding" },
    { label: "Formals", href: "/shop/formals" },
    { label: "Casuals", href: "/shop/casuals" },
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                {/* Brand */}
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <img src="/vineta.png" alt="Vineta" style={{ height: '48px', width: 'auto' }} />
                    </Link>
                    <div className="footer-socials">
                        {/* Telegram */}
                        <a href="#" className="social-icon" aria-label="Telegram">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="18" height="18">
                                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701-.331 4.672c.46 0 .663-.211.921-.46l2.214-2.152 4.605 3.401c.849.468 1.459.227 1.67-.788l3.02-14.24c.309-1.239-.472-1.8-1.287-1.44z" />
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#" className="social-icon" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="18" height="18">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="social-icon" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="18" height="18">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Our Company */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Our Company</h4>
                    <ul className="footer-links">
                        {companyLinks.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="footer-link">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Shop Categories */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Shop categories</h4>
                    <ul className="footer-links">
                        {shopCategories.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href} className="footer-link">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <div className="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span>+1 (973) 435-3459</span>
                    </div>
                    <div className="footer-contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span>support@vineta.com</span>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Vineta © 2026. All Rights Reserved.</p>
                <p>Designed by pbx</p>
            </div>
        </footer>
    );
}
