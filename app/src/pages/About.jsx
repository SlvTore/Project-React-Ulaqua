import React from 'react';
import AboutSection from '../components/elements/AboutSection';
import TeamSection from '../components/elements/TeamSection';
import ChooseUsSection from '../components/elements/ChooseUsSection';
import CTASection from '../components/elements/CTA';
import '../styles/team-section.css';
import '../styles/chooseus-section.css';

const About = () => {
  return (
    <>
      {/* Page Title */}
      <section className="page-title centred" style={{ backgroundImage: "url(assets/images/background/page-title.jpg)" }}>
        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/banner-shap.png)" }}></div>
        <div className="auto-container">
          <div className="content-box" style={{ marginTop: '100px' }}>
            <h1 style={{ color: '#103d67' }}>About Us</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="/" style={{ color: '#103d67'}}>Home</a></li>
              <li style={{ color: '#47e7f6' }}>About Us</li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection 
        title="Leading Water Solutions Provider Since 2025"
        description1=" Ulul Albab Hidro Prima adalah perusahaan yang bergerak di bidang Air Mineral Dalam Kemasan (AMDK) dengan merek dagang UlaQua."
        description2="Berdiri sejak tahun 2025, kami hadir untuk memberikan solusi air minum yang berkualitas, aman, dan terpercaya bagi masyarakat Indonesia. Selain menyediakan produk terbaik, kami juga berkomitmen aktif dalam mendukung program kesehatan dan pendidikan anak-anak Indonesia."
        buttonText="Our Services"
        buttonLink="/services"
        imageSrc="assets/images/resource/about-1.png"
        imageAlt="About Acuasafe Water Solutions"
        sectionClass="about-section sec-pad"
      />

      {/* Team Section */}
      <TeamSection 
        title="Meet Our Water Experts"
        subtitle="Our Professional Team"
        teamMembers={[
          {
            id: 1,
            name: "Dai Wiralikrama S.",
            designation: "Direktur Utama",
            image: "assets/images/team/team-1.jpg",
            socialLinks: [
              { platform: "facebook", url: "/", icon: "fab fa-facebook-f" },
              { platform: "twitter", url: "/", icon: "fab fa-twitter" },
              { platform: "linkedin", url: "/", icon: "fab fa-linkedin-in" }
            ],
            profileUrl: "/"
          },
          {
            id: 2,
            name: "Adityo S. H.",
            designation: "Direktur",
            image: "assets/images/team/team-2.jpg",
            socialLinks: [
              { platform: "facebook", url: "/", icon: "fab fa-facebook-f" },
              { platform: "twitter", url: "/", icon: "fab fa-twitter" },
              { platform: "linkedin", url: "/", icon: "fab fa-linkedin-in" }
            ],
            profileUrl: "/"
          },
          {
            id: 3,
            name: "Tintin Wartiningsih",
            designation: "Wakil Direktur",
            image: "assets/images/team/team-3.jpg",
            socialLinks: [
              { platform: "facebook", url: "/", icon: "fab fa-facebook-f" },
              { platform: "twitter", url: "/", icon: "fab fa-twitter" },
              { platform: "linkedin", url: "/", icon: "fab fa-linkedin-in" }
            ],
            profileUrl: "/"
          },
          {
            id: 4,
            name: "Ade Muharam",
            designation: "Komanditer",
            image: "assets/images/team/team-1.jpg",
            socialLinks: [
              { platform: "facebook", url: "/", icon: "fab fa-facebook-f" },
              { platform: "twitter", url: "/", icon: "fab fa-twitter" },
              { platform: "linkedin", url: "/", icon: "fab fa-linkedin-in" }
            ],
            profileUrl: "/"
          },
          {
            id: 5,
            name: "Eka Suryaningsih",
            designation: "Komanditer",
            image: "assets/images/team/team-4.jpg",
            socialLinks: [
              { platform: "facebook", url: "/", icon: "fab fa-facebook-f" },
              { platform: "twitter", url: "/", icon: "fab fa-twitter" },
              { platform: "linkedin", url: "/", icon: "fab fa-linkedin-in" }
            ],
            profileUrl: "/"
          }
        ]}
        sectionClass="team-section sec-pad bg-color-1"
      />

      {/* Choose Us Section */}
      <ChooseUsSection 
        title="Why Choose Our Water Solutions?"
        features={[
          {
            id: 1,
            title: "Advanced Filtration Technology",
            description: "State-of-the-art multi-stage filtration systems that remove 99.9% of contaminants, bacteria, and chemicals for the purest water quality.",
            icon: "flaticon-draw-check-mark"
          },
          {
            id: 2,
            title: "24/7 Expert Support",
            description: "Round-the-clock technical support and maintenance services with certified technicians available whenever you need assistance.",
            icon: "flaticon-draw-check-mark"
          }
        ]}
        image="assets/images/resource/chooseus-1.jpg"
        imageAlt="Advanced Water Filtration Technology"
        sectionClass="chooseus-section sec-pad-2"
        showBackground={true}
      />

      {/* Mission Section */}
      <AboutSection 
        title="Our Mission: Pure Water for Every Home"
        description1=" UlaQua bertujuan menjadi bagian dari solusi peningkatan kesehatan dan kesejahteraan pendidikan anak-anak Indonesia melalui produk air minum berkualitas dan dan terpercaya. "
        description2=" Kami juga berkomitmen untuk mendukung program-program kesehatan dan pendidikan anak-anak Indonesia melalui kegiatan CSR dan donasi"
        buttonText="Contact Us"
        buttonLink="/contact"
        imageSrc="assets/images/resource/about-2.png"
        imageAlt="Our Mission"
        reverse={true}
        sectionClass="about-section"
      />

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Water Quality?"
        description="Join thousands of satisfied customers who trust Acuasafe for their water purification needs. Contact us today for a free consultation."
        features={["Free Water Testing", "Professional Installation", "Lifetime Support"]}
        buttonText="Get Started"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
