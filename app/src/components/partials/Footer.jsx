import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="pattern-layer">
        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
      </div>
      <div className="auto-container">
        <div className="footer-top clearfix">
          <div className="line-shape" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
          <div className="text pull-left">
            <h2>Please <span>Call Us</span> to Take an Extraordinary Service</h2>
          </div>
          <div className="support-box pull-right">
            <a href="tel:7732253523"><i className="fas fa-phone"></i>(773) 225-3523</a>
          </div>
        </div>
        <div className="widget-section">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo">
                  <Link to="/">
                    <img src="assets/images/logo-2.png" alt="Acuasafe" />
                  </Link>
                </figure>
                <div className="text">
                  <p>Nostrud exertation ullamco labor nisi aliquip commodo duis.</p>
                </div>
                <div className="schedule-box">
                  <h6>Open Hours:</h6>
                  <ul className="list clearfix">
                    <li>Mon - Sat: 9AM - 6PM.</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget ml-70">
                <div className="widget-title">
                  <h4>Address</h4>
                </div>
                <div className="widget-content">
                  <ul className="info-list clearfix">
                    <li><i className="fal fa-map-marker-alt"></i>Kp. Leles RT/RW 003/011 Ds. Mekarsari Kec. Ciparay Kab. Bandung</li>
                    <li><i className="fal fa-phone"></i>Call Us: <a href="tel:082119425191">0821-194-25191</a></li>
                    <li><i className="fal fa-envelope-open-text"></i><a href="mailto:cvululalbabhidroprima@gmail.com">cvululalbabhidroprima@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget ml-70">
                <div className="widget-title">
                  <h4>Useful Links</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li><Link to="/about">About Company</Link></li>
                    <li><Link to="/services">Our Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">Our Team</Link></li>
                    <li><Link to="/">Testimonials</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget subscribe-widget">
                <div className="widget-title">
                  <h4>Newsletter</h4>
                </div>
                <div className="widget-content">
                  <div className="text">
                    <p>Subscribe to our newsletter to get latest updates and news</p>
                  </div>
                  <form action="#" method="post" className="subscribe-form">
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Your email address" required />
                      <button type="submit" className="theme-btn subscribe-btn">Subscribe</button>
                    </div>
                  </form>
                  <div className="social-links">
                    <h6>Follow Us:</h6>
                    <ul className="clearfix">
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <div className="auto-container">
            <div className="copyright">
              <p>&copy; 2024 Acuasafe. All rights reserved. Developed by Your Company</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
