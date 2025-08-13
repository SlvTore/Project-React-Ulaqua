import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: 'assets/images/icons/map-marker.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -36]
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const branches = [
    { id: 1, name: 'Pondok Pesantren Ulul Albab', position: [-6.927832, 107.618177], address: 'Bandung, West Java, Indonesia' }
  ];

  return (
    <>
      {/* Page Title */}
      <section className="page-title centred" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}>
        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/banner-shap.png)' }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Contact Us</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Style Two Section */}
      <section className="contact-style-two sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 info-column">
              <div className="info-inner">
                <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/shape-42.png)' }}></div>
                <h3>Contact Information</h3>
                <ul className="info-list clearfix">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <h5>Office Location</h5>
                    <p>629 12th St, Modesto, CA <br />95354, United States</p>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    <h5>Email Drop Us</h5>
                    <p><a href="mailto:info@example.com">info@example.com</a><br /><a href="mailto:information@gmail.com">information@gmail.com</a></p>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <h5>Call for Help</h5>
                    <p><a href="tel:11165458856">+(111) 65_458_856</a><br /><a href="tel:11165458857">+(111) 65_458_857</a></p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <h3>Leave a Comment</h3>
                <form onSubmit={handleSubmit} className="default-form"> 
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                      <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                      <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea name="message" placeholder="Leave A Comment" rows="6" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                      <button type="submit" className="theme-btn btn-one">Submit Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="google-map-section">
        <div className="auto-container">
          <div className="map-inner">
            <MapContainer center={[-6.927832, 107.618177]} zoom={12} style={{ height: '450px', width: '100%', borderRadius: '12px', overflow: 'hidden' }} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
              {branches.map(b => (
                <Marker key={b.id} position={b.position} icon={markerIcon}>
                  <Popup>
                    <strong>{b.name}</strong><br />{b.address}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
