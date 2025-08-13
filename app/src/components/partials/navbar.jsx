import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // Removed isSearchOpen state since it's no longer needed
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Removed toggleSearch function since it's no longer needed

    const isActive = (path) => {
        return location.pathname === path ? 'current' : '';
    };

    // Navigation items to reuse
    const navigationItems = (
        <ul className="navigation clearfix">
            <li className={isActive('/')}>
                <Link to="/">Home</Link>
            </li>
            <li className={isActive('/about')}>
                <Link to="/about">About</Link>
            </li>
            <li className={`dropdown ${location.pathname.startsWith('/service') || isActive('/services') ? 'current' : ''}`}>
                <Link to="/services">Services</Link>
                <ul>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/service/project-planning">Project Planning</Link></li>
                    <li><Link to="/service/residential-waters">Residential Waters</Link></li>
                    <li><Link to="/service/commercial-waters">Commercial Waters</Link></li>
                    <li><Link to="/service/filtration-plants">Filtration Plants</Link></li>
                    <li><Link to="/service/water-softening">Water Softening</Link></li>
                    <li><Link to="/service/market-research">Market Research</Link></li>
                </ul>
            </li>
            <li className={isActive('/contact')}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );

    return (
        <>
            {/* Main Header */}
            <header className="main-header">
                {/* Header Lower */}
                <div className="header-lower">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo">
                                <Link to="/">
                                    <img src="assets/images/logo.png" alt="Acuasafe" />
                                </Link>
                            </figure>
                        </div>
                        <div className="menu-area clearfix">
                            {/* Mobile Navigation Toggler */}
                            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    {navigationItems}
                                </div>
                            </nav>
                        </div>
                        <ul className="nav-right">
                            <li className="btn-box">
                                <Link to="/contact" className="theme-btn btn-one">Request A Quote</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Sticky Header */}
                {isSticky && (
                    <div className="sticky-header">
                        <div className="outer-box">
                            <div className="logo-box">
                                <figure className="logo">
                                    <Link to="/">
                                        <img src="assets/images/logo-2.png" alt="Acuasafe" />
                                    </Link>
                                </figure>
                            </div>
                            <div className="menu-area clearfix">
                                <nav className="main-menu clearfix">
                                    {navigationItems}
                                </nav>
                            </div>
                            <ul className="nav-right">
                                {/* Removed search-box-outer and cart-box items */}
                                <li className="btn-box">
                                    <Link to="/contact" className="theme-btn btn-one">Request A Quote</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </header>
            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-visible' : ''}`}>
                <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
                <div className="close-btn" onClick={toggleMobileMenu}>
                    <i className="fas fa-times"></i>
                </div>
                
                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="assets/images/logo-2.png" alt="" title="" />
                        </Link>
                    </div>
                    <div className="menu-outer">
                        <ul className="navigation clearfix">
                            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
                            <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
                            <li className="dropdown">
                                <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
                                <ul>
                                    <li><Link to="/services" onClick={toggleMobileMenu}>Our Services</Link></li>
                                    <li><Link to="/service/project-planning" onClick={toggleMobileMenu}>Project Planning</Link></li>
                                    <li><Link to="/service/residential-waters" onClick={toggleMobileMenu}>Residential Waters</Link></li>
                                    <li><Link to="/service/commercial-waters" onClick={toggleMobileMenu}>Commercial Waters</Link></li>
                                    <li><Link to="/service/filtration-plants" onClick={toggleMobileMenu}>Filtration Plants</Link></li>
                                    <li><Link to="/service/water-softening" onClick={toggleMobileMenu}>Water Softening</Link></li>
                                    <li><Link to="/service/market-research" onClick={toggleMobileMenu}>Market Research</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/shop" onClick={toggleMobileMenu}>Shop</Link></li>
                            <li><Link to="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
                            <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melbourne City, USA</li>
                            <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                            <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                            <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
