import React from 'react';
import ServiceSection from '../components/elements/ServiceSection';
import CTASection from '../components/elements/CTA';
import { SERVICES_LIST } from '../data/services';
import '../styles/service-section.css';

const Services = () => {
  const allServices = SERVICES_LIST;

  return (
    <>
      {/* Page Title */}
      <section className="page-title centred" style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}>
        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/banner-shap.png)" }}></div>
        <div className="auto-container">
          <div className="content-box">
            <h1>Our Services</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection 
        services={allServices}
        sectionClass="service-page-section centred"
        sectionTitle="Protect Your Family with Best Water <br />Filtering System Services"
        blockClass="service-block-two"
      />

      {/* Process Section */}
      <section className="process-section sec-pad bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="top-title">Our Process</span>
            <h2>How We Work</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 process-block">
              <div className="process-block-one">
                <div className="inner-box">
                  <div className="count-box">
                    <span>01</span>
                  </div>
                  <h4>Water Analysis</h4>
                  <p>We start with a comprehensive analysis of your water to identify contaminants and quality issues.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 process-block">
              <div className="process-block-one">
                <div className="inner-box">
                  <div className="count-box">
                    <span>02</span>
                  </div>
                  <h4>Custom Solution</h4>
                  <p>Based on the analysis, we design a customized water treatment solution for your specific needs.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 process-block">
              <div className="process-block-one">
                <div className="inner-box">
                  <div className="count-box">
                    <span>03</span>
                  </div>
                  <h4>Professional Installation</h4>
                  <p>Our certified technicians install your system with precision and ensure optimal performance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 process-block">
              <div className="process-block-one">
                <div className="inner-box">
                  <div className="count-box">
                    <span>04</span>
                  </div>
                  <h4>Ongoing Support</h4>
                  <p>We provide continuous maintenance and support to keep your system running efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Need a Custom Water Solution?"
        description="Every water challenge is unique. Let our experts design the perfect solution for your specific needs and budget."
        features={["Free Consultation", "Custom Design", "Professional Installation"]}
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;
