import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data/services';
import '../styles/service-details.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const data = SERVICES[serviceId];

  if (!data) {
    return (
      <section className="service-details sec-pad centred">
        <div className="auto-container">
          <h2>Service Not Found</h2>
          <p>The service you are looking for does not exist.</p>
          <Link to="/services" className="theme-btn btn-one">Back to Services</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Title */}
      <section className="page-title centred" style={{ backgroundImage: 'url(assets/images/background/page-title.jpg)' }}>
        <div className="shape" style={{ backgroundImage: 'url(assets/images/shape/banner-shap.png)' }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{data.title}</h1>
            <ul className="bread-crumb clearfix">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li>{data.title}</li>
            </ul>
          </div>
        </div>
      </section>
    <section className="service-details sec-pad">
      <div className="auto-container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 col-sm-12 content-side">
            <div className="service-details-content">
              <div className="content-one">
                <div className="text">
                  <h2>{data.title}</h2>
                  <p>{data.short}</p>
                </div>
                <figure className="image-box"><img src={data.heroImage} alt={data.title} /></figure>
              </div>
              {data.sections.map((s, i) => (
                <div key={i} className={`content-${i === 0 ? 'two' : 'three'}`}>
                  <div className="text">
                    <h3>{s.heading}</h3>
                    <p>{s.text}</p>
                    {i === 1 && data.sections.length > 1 && (
                      <p>Our comprehensive approach ensures optimal performance, cost-effectiveness, and long-term reliability for all your water treatment needs.</p>
                    )}
                  </div>
                  {i === 0 && (
                    <div className="inner-box">
                      {data.features.map(f => (
                        <div key={f.title} className="single-item">
                          <div className="icon-box"><i className="flaticon-draw-check-mark"></i></div>
                          <h4>{f.title}</h4>
                          <p>{f.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {data.images && data.images.length > 0 && (
                <div className="content-three">
                  <div className="image-box">
                    <div className="row clearfix">
                      {data.images.map((img, idx) => (
                        <div key={idx} className="col-lg-6 col-md-6 col-sm-12 image-column">
                          <figure className="image"><img src={img} alt={`${data.title} ${idx + 1}`} /></figure>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text">
                    <h3>Professional Implementation</h3>
                    <p>Our expert team ensures seamless installation and ongoing support for your water treatment system. We provide comprehensive training and maintenance services to maximize system performance and longevity.</p>
                    <p>Every project includes detailed documentation, warranty coverage, and 24/7 technical support to ensure your complete satisfaction and system reliability.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
            <div className="service-sidebar">
              <div className="category-widget">
                <h3>Our Services</h3>
                <ul className="category-list clearfix">
                  {Object.values(SERVICES).map(s => (
                    <li key={s.id}>
                      <Link to={`/service/${s.id}`} className={s.id === data.id ? 'current' : ''}>
                        <i className="fas fa-caret-right"></i>{s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="support-box">
                <div className="inner-box">
                  <div className="icon-box"><i className="fas fa-phone"></i></div>
                  <h4>Need Help?</h4>
                  <p>Contact our support team for solution design and quotes.</p>
                  <div className="phone-number">
                    <a href="tel:+1234567890">+(123) 456-7890</a>
                  </div>
                  <Link to="/contact" className="theme-btn btn-one">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceDetails;
