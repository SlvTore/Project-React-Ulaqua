import React from 'react';

const FeatureBlock = ({ 
  icon, 
  title, 
  description, 
  hasShape = true,
  blockClass = "feature-block-one"
}) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
      <div className={blockClass}>
        <div className="inner-box">
          {hasShape && (
            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
          )}
          <div className="icon-box">
            <i className={icon}></i>
          </div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = ({ features, sectionClass = "feature-section centred sec-pad-2" }) => {
  const defaultFeatures = [
    {
      icon: "flaticon-water-drop",
      title: "Maximum Purity",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte."
    },
    {
      icon: "flaticon-water-drop-1",
      title: "Chlorine Free",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte."
    },
    {
      icon: "flaticon-recycle",
      title: "5 Steps Filtration",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte."
    },
    {
      icon: "flaticon-glass",
      title: "Healthy Water",
      description: "Lorem ipsum dolor sit amet adipelit sed eiusmte.",
      hasShape: false
    }
  ];

  const featuresData = features || defaultFeatures;

  return (
    <section className={sectionClass}>
      <div className="auto-container">
        <div className="row clearfix">
          {featuresData.map((feature, index) => (
            <FeatureBlock
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              hasShape={feature.hasShape}
              blockClass={feature.blockClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
