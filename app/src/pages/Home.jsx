import React from 'react';
import HeroSectionSwiper from '../components/elements/HeroSectionSwiper';
import FeatureSection from '../components/elements/FeatureSection';
import AboutSection from '../components/elements/AboutSection';
import ServiceSection from '../components/elements/ServiceSection';
import CTASection from '../components/elements/CTA';
import ShopSection from '../components/elements/ShopSection';
import TestimonialSection from '../components/elements/TestimonialSection';
import '../styles/hero-swiper.css';
import '../styles/shop-section.css';
import '../styles/testimonial-section.css';

const Home = () => {
  // Custom data for home page sections with background images
  const heroSlides = [
    {
      title: "Safe and Good Water for Healthy Life",
      description: "Excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit.",
      primaryButton: { text: "Our Services", link: "/services" },
      secondaryButton: { text: "Discover", link: "/about" },
      backgroundImage: "assets/images/banner/banner-1.png",
      vectorImage: "assets/images/banner/vector-3.png"
    },
    {
      title: "Pure Water Solutions for Your Family",
      description: "We provide the highest quality water filtration systems for residential and commercial use.",
      primaryButton: { text: "Get Quote", link: "/contact" },
      secondaryButton: { text: "View Products", link: "/shop" },
      backgroundImage: "assets/images/banner/banner-2.png",
      vectorImage: "assets/images/banner/vector-4.png"
    },
    {
      title: "Advanced Filtration Technology",
      description: "Experience the future of water purification with our cutting-edge filtration systems and innovative solutions.",
      primaryButton: { text: "Our Services", link: "/services" },
      secondaryButton: { text: "Learn More", link: "/about" },
      backgroundImage: "assets/images/banner/banner-3.png",
      vectorImage: "assets/images/banner/vector-5.png"
    }
  ];

  const aboutData = {
    title: "Safe and Healthy Water for Healthy Life.",
    description1: "Dolor sit amet consectur elit sed eiusmod tempor incid dunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex comodo consequat.duis aute irure dolor in reprehenderit.",
    description2: "Cepteur sint occaecat cupidatat non proident sunt in culpa qui officia dese runt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    buttonText: "Learn More",
    buttonLink: "/about",
    imageSrc: "assets/images/resource/about-1.png",
    imageAlt: "About Acuasafe"
  };

  const servicesData = [
    {
      icon: "flaticon-water-bottle-1",
      title: "Residential Waters",
      description: "Complete water filtration solutions for your home to ensure pure, clean drinking water.",
      link: "/service/residential-waters"
    },
    {
      icon: "flaticon-water",
      title: "Filtration Plants",
      description: "Industrial-grade water treatment plants for large-scale water purification needs.",
      link: "/service/filtration-plants"
    },
    {
      icon: "flaticon-water-bottle",
      title: "Commercial Waters",
      description: "Professional water solutions for offices, restaurants, and commercial establishments.",
      link: "/service/commercial-waters"
    },
    {
      icon: "flaticon-recycle",
      title: "Water Recycling",
      description: "Eco-friendly water recycling systems to reduce waste and conserve resources.",
      link: "/service/water-recycling"
    },
    {
      icon: "flaticon-glass",
      title: "Water Testing",
      description: "Comprehensive water quality testing to ensure your water meets safety standards.",
      link: "/service/water-testing"
    },
    {
      icon: "flaticon-water-drop",
      title: "Maintenance Service",
      description: "Regular maintenance and servicing of your water filtration systems.",
      link: "/service/maintenance"
    }
  ];

  const ctaData = {
    title: "Ready To Get Our Premium Water Delivery Service?",
    description: "We give our services to more than 10 countries. We give our delivery service using more than 50 couriers within 2hr anywhere in the city.",
    features: ["Free Delivery", "7 Days In A Week Service", "24/7 Customer Support"],
    buttonText: "Get Started",
    buttonLink: "/contact",
    imageSrc: "assets/images/resource/cta-1.png",
    imageAlt: "Water Delivery Service"
  };

  const shopData = [
    {
      id: 1,
      image: "assets/images/resource/shop/shop-1.jpg",
      category: "2L 3 Bottles",
      name: "Mineral Water Bottle",
      price: "$70.00",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid dolore.",
      link: "/shop/mineral-water-bottle-1",
      delay: "00ms"
    },
    {
      id: 2,
      image: "assets/images/resource/shop/shop-2.jpg",
      category: "3L 3 Bottles",
      name: "Mineral Water Bottle",
      price: "$60.00",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid dolore.",
      link: "/shop/mineral-water-bottle-2",
      delay: "300ms"
    },
    {
      id: 3,
      image: "assets/images/resource/shop/shop-3.jpg",
      category: "3L 2 Bottles",
      name: "Mineral Water Bottle",
      price: "$55.00",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte.mpor encid dolore.",
      link: "/shop/mineral-water-bottle-3",
      delay: "600ms"
    }
  ];

  const testimonialsData = [
    {
      id: 1,
      image: "assets/images/resource/testimonial-1.jpg",
      rating: 5,
      text: "Lorem ipsum dolor amet consectur adicing elit sed do usmod tempor incididunt enim ad minim veniam.",
      name: "Nicolas Lawson",
      designation: "Designer"
    },
    {
      id: 2,
      image: "assets/images/resource/testimonial-2.jpg",
      rating: 5,
      text: "Lorem ipsum dolor amet consectur adicing elit sed do usmod tempor incididunt enim ad minim veniam.",
      name: "Michael Bean",
      designation: "Manager"
    },
    {
      id: 3,
      image: "assets/images/resource/testimonial-3.jpg",
      rating: 5,
      text: "Lorem ipsum dolor amet consectur adicing elit sed do usmod tempor incididunt enim ad minim veniam.",
      name: "Sarah Johnson",
      designation: "CEO"
    },
    {
      id: 4,
      image: "assets/images/resource/testimonial-4.jpg",
      rating: 5,
      text: "Lorem ipsum dolor amet consectur adicing elit sed do usmod tempor incididunt enim ad minim veniam.",
      name: "David Wilson",
      designation: "Marketing Director"
    }
  ];

  return (
    <div>
      {/* Hero Section with Swiper */}
      <HeroSectionSwiper slides={heroSlides} />

      {/* Feature Section with Title */}
      <section className="feature-section alternat-2 centred">
        <div className="auto-container">
          <div className="inner-container wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
            <div className="title-text">
              <h2>A Trusted Name In <br />Bottled Water Industry</h2>
            </div>
            <FeatureSection />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection 
        title={aboutData.title}
        description1={aboutData.description1}
        description2={aboutData.description2}
        buttonText={aboutData.buttonText}
        buttonLink={aboutData.buttonLink}
        imageSrc={aboutData.imageSrc}
        imageAlt={aboutData.imageAlt}
        sectionClass="about-section sec-pad"
      />

      {/* Services Section */}
      <ServiceSection 
        services={servicesData}
        sectionClass="service-section sec-pad bg-color-1"
        sectionTitle="Our Premium Services"
        sectionSubtitle="What We Offer"
      />

      {/* CTA Section */}
      <CTASection 
        title={ctaData.title}
        description={ctaData.description}
        features={ctaData.features}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
        imageSrc={ctaData.imageSrc}
        imageAlt={ctaData.imageAlt}
      />

      {/* Shop Section */}
      <ShopSection 
        products={shopData}
        sectionTitle="We Deliver Best Quality <br />Bottle Packs."
        sectionClass="shop-section centred pt-145"
      />

      {/* Testimonial Section */}
      <TestimonialSection 
        testimonials={testimonialsData}
        sectionTitle="What Our Client are Saying <br />About Acuasafe"
        sectionClass="testimonial-section alternat-2 bg-color-1"
        autoPlay={true}
        autoPlayDelay={3000}
      />
    </div>
  );
};

export default Home;
