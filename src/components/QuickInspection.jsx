import React, { useState } from 'react';

const localLocations = [
  { name: 'Mumbai', locations: [
    { location: 'Andheri', rate: 500, imageUrl: '/api/placeholder/80/80' },
    { location: 'Bandra', rate: 600, imageUrl: '/api/placeholder/80/80' },
    { location: 'Powai', rate: 550, imageUrl: '/api/placeholder/80/80' },
    { location: 'Thane', rate: 450, imageUrl: '/api/placeholder/80/80' },
  ]},
  { name: 'Delhi', locations: [
    { location: 'Gurgaon', rate: 700, imageUrl: '/api/placeholder/80/80' },
    { location: 'Noida', rate: 650, imageUrl: '/api/placeholder/80/80' },
    { location: 'Dwarka', rate: 600, imageUrl: '/api/placeholder/80/80' },
    { location: 'Rohini', rate: 550, imageUrl: '/api/placeholder/80/80' },
  ]},
  { name: 'Bangalore', locations: [
    { location: 'Koramangala', rate: 600, imageUrl: '/api/placeholder/80/80' },
    { location: 'Whitefield', rate: 550, imageUrl: '/api/placeholder/80/80' },
    { location: 'HSR Layout', rate: 650, imageUrl: '/api/placeholder/80/80' },
    { location: 'Electronic City', rate: 500, imageUrl: '/api/placeholder/80/80' },
  ]}
];

const internationalLocations = [
  { country: 'China', rate: 300, imageUrl: '/api/placeholder/80/80' },
  { country: 'Dubai', rate: 407, imageUrl: '/api/placeholder/80/80' },
  { country: 'Qatar', rate: 407, imageUrl: '/api/placeholder/80/80' },
  { country: 'USA', rate: 1000, imageUrl: '/api/placeholder/80/80' },
  { country: 'Vietnam', rate: 300, imageUrl: '/api/placeholder/80/80' },
];

const QuickInspection = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setShowMore(false);
  };

  const handleBack = () => {
    setSelectedType(null);
    setShowMore(false);
  };

  const toggleViewMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="quick-inspection">
      <div className="container">
        <h1 className="main-title">Quick Inspection</h1>
        
        {!selectedType ? (
          <div className="type-selection">
            <div className="type-options">
              <div 
                className="type-option"
                onClick={() => handleTypeSelect('local')}
              >
                <div className="type-circle">
                  <span className="type-text">Local</span>
                </div>
                <p className="type-description">Domestic inspections</p>
              </div>
              
              <div 
                className="type-option"
                onClick={() => handleTypeSelect('international')}
              >
                <div className="type-circle">
                  <span className="type-text">International</span>
                </div>
                <p className="type-description">Global inspections</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="selected-view">
            <div className="header-section">
              <h2 className="section-title">
                {selectedType === 'local' ? 'Local Inspections' : 'International Inspections'}
              </h2>
            </div>

            {selectedType === 'local' ? (
              <div className="content">
                {localLocations.map((state, stateIndex) => (
                  <div 
                    key={state.name} 
                    className={`state-section ${showMore || stateIndex < 1 ? 'visible' : 'hidden'}`}
                  >
                    <h3 className="state-name">{state.name}</h3>
                    <div className="location-grid">
                      {state.locations.map((loc, index) => (
                        <div key={index} className="location-item">
                          <div className="location-circle">
                            <img
                              src={loc.imageUrl}
                              alt={loc.location}
                              className="location-image"
                            />
                          </div>
                          <div className="location-info">
                            <p className="location-name">{loc.location}</p>
                            <p className="location-rate">₹{loc.rate}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="content">
                <div className="location-grid">
                  {internationalLocations.map((loc, index) => (
                    <div 
                      key={index} 
                      className={`location-item ${showMore || index < 3 ? 'visible' : 'hidden'}`}
                    >
                      <div className="location-circle">
                        <img
                          src={loc.imageUrl}
                          alt={loc.country}
                          className="location-image"
                        />
                      </div>
                      <div className="location-info">
                        <p className="location-name">{loc.country}</p>
                        <p className="location-rate">${loc.rate} USD</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="button-group">
              <button className="back-btn" onClick={handleBack}>
                ← Back
              </button>
              
              {selectedType === 'local' ? (
                (!showMore && localLocations.length > 1) || showMore ? (
                  <button className="view-more-btn" onClick={toggleViewMore}>
                    {showMore ? 'Show Less' : 'View More'}
                  </button>
                ) : null
              ) : (
                (!showMore && internationalLocations.length > 3) || showMore ? (
                  <button className="view-more-btn" onClick={toggleViewMore}>
                    {showMore ? 'Show Less' : 'View More'}
                  </button>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap');

        .quick-inspection {
          min-height: 100vh;
          background: #000000;
          color: #FFFFFF;
          font-family: 'Jost', sans-serif;
          padding: 40px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem;
          background: rgba(66, 63, 63, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: xor;
          pointer-events: none;
        }

        .main-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          color: #FFFFFF;
          font-weight: 700;
          letter-spacing: -0.02em;
          position: relative;
        }

        .main-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
        }

        .type-selection {
          display: flex;
          justify-content: center;
          padding: 2rem 0;
        }

        .type-options {
          display: flex;
          gap: 4rem;
          justify-content: center;
        }

        .type-option {
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .type-option:hover {
          transform: translateY(-5px);
        }

        .type-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .type-circle::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: rotate(-45deg);
          transition: all 0.3s ease;
          opacity: 0;
        }

        .type-circle:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1);
        }

        .type-circle:hover::before {
          opacity: 1;
          animation: shine 0.5s ease;
        }

        .type-text {
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
        }

        .type-description {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 400;
          margin: 0;
        }

        .selected-view {
          animation: fadeIn 0.3s ease;
        }

        .header-section {
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 1.8rem;
          margin: 0;
          color: #FFFFFF;
          font-weight: 600;
          text-align: center;
        }

        .button-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          animation: slideInButtons 0.5s ease 0.2s both;
        }

        .back-btn, .view-more-btn {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Jost', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .back-btn::before, .view-more-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .back-btn:hover, .view-more-btn:hover {
          color: #FFFFFF;
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }

        .back-btn:hover::before, .view-more-btn:hover::before {
          left: 100%;
        }

        .back-btn:active, .view-more-btn:active {
          transform: translateY(0);
          transition: transform 0.1s ease;
        }

        .content {
          max-width: 100%;
        }

        .state-section {
          margin-bottom: 3rem;
        }

        .state-section.hidden {
          display: none;
        }

        .state-section.visible {
          animation: slideIn 0.5s ease;
        }

        .state-name {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          color: #FFFFFF;
          font-weight: 600;
          text-align: left;
        }

        .location-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .location-item {
          text-align: center;
          transition: all 0.3s ease;
        }

        .location-item.hidden {
          display: none;
        }

        .location-item.visible {
          animation: fadeInUp 0.5s ease;
        }

        .location-item:hover {
          transform: translateY(-3px);
        }

        .location-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .location-circle:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .location-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .location-info {
          color: #FFFFFF;
        }

        .location-name {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #FFFFFF;
        }

        .location-rate {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInButtons {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(-45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(-45deg);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1.5rem;
            margin: 1rem;
          }
          
          .main-title {
            font-size: 2rem;
          }
          
          .type-options {
            flex-direction: column;
            gap: 2rem;
            align-items: center;
          }
          
          .type-circle {
            width: 100px;
            height: 100px;
          }
          
          .location-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1.5rem;
          }
          
          .location-circle {
            width: 70px;
            height: 70px;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .button-group {
            flex-direction: column;
            gap: 1rem;
          }

          .back-btn, .view-more-btn {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuickInspection;