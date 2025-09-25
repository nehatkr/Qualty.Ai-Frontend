import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Menu, X, LogOut } from 'lucide-react';
import QualtyLogo from '../assets/QualtyLogo.png';

const Header = ({ user, onLogout }) => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleAuthClick = () => {
    navigate('/login');
  };

  const headerStyles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'transparent',
      backdropFilter: 'blur(10px)',
      padding: '1rem 0',
      transition: 'all 0.3s ease',
      fontFamily: 'Jost, sans-serif',
    },
    headerContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '70px',
      position: 'relative'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      height: '70px',
      flexShrink: 0,
      zIndex: 10
    },
    logoIcon: {
      width: '60px',
      height: '60px',
      background: 'none',
      backgroundColor: 'transparent',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '900',
      color: 'white',
      fontSize: '1.2rem',
      fontFamily: 'Jost, sans-serif',
      overflow: 'hidden',
      flexShrink: 0,
      border: 'none',
      boxShadow: 'none'
    },
    logoImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block',
      backgroundColor: 'transparent'
    },
    logoText: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'white',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: 'Jost, sans-serif',
      letterSpacing: '-0.02em',
      lineHeight: '1',
      display: 'flex',
      alignItems: 'center',
      margin: '0',
      whiteSpace: 'nowrap',
      flexShrink: 0
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      flexShrink: 0
    },
    navLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
      fontWeight: '700',
      position: 'relative',
      transition: 'all 0.3s ease',
      padding: '1rem 0.75rem',
      fontSize: '1.1rem',
      fontFamily:'Jost, sans-serif',
      whiteSpace: 'nowrap'
    },
    ctaButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '0.8rem 1.6rem',
      borderRadius: '20px',
      textDecoration: 'none',
      fontWeight: '700',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)',
      fontSize: '1rem',
      fontFamily:'Jost, sans-serif',
      marginLeft: '1rem',
      whiteSpace: 'nowrap',
      flexShrink: 0
    },
    logoutButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '0.8rem 1.4rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      fontSize: '1rem',
      fontFamily: 'Jost, sans-serif',
      whiteSpace: 'nowrap',
      flexShrink: 0
    },
    userWelcome: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontWeight: '600',
      marginRight: '1rem',
      fontSize: '1rem',
      fontFamily: 'Jost, sans-serif',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      maxWidth: '150px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    userContainer: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '1rem',
      flexShrink: 0
    },
    mobileMenuButton: {
      display: 'none',
      padding: '0.75rem',
      borderRadius: '8px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#FFFFFF',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      flexShrink: 0
    },
    mobileMenu: {
      display: 'none',
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '0 0 20px 20px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      zIndex: 999
    },
    mobileMenuContent: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    mobileNavLink: {
      color: '#FFFFFF',
      textDecoration: 'none',
      padding: '1rem 1.25rem',
      borderRadius: '12px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      fontSize: '1.1rem',
      fontFamily:'Jost, sans-serif'
    },
    mobileCTAButton: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      padding: '1rem 1.5rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      fontSize: '1.1rem',
      fontFamily: 'Jost, sans-serif',
      marginTop: '0.5rem'
    }
  };

  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      style={headerStyles.navLink}
      onMouseOver={(e) => {
        e.target.style.color = '#CCCCCC';
        e.target.style.transform = 'translateY(-1px)';
      }}
      onMouseOut={(e) => {
        e.target.style.color = '#FFFFFF';
        e.target.style.transform = 'translateY(0)';
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          bottom: '-5px',
          left: '0.75rem',
          right: '0.75rem',
          height: '2px',
          background: 'linear-gradient(135deg, #FFFFFF, #CCCCCC)',
          transform: 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.3s ease'
        }}
      />
    </a>
  );

  // Add responsive styles
  React.useEffect(() => {
    if (!document.querySelector('#header-responsive-styles')) {
      const styles = `
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family='Jost, sans-serif':wght@400;500;600;700;800;900&display=swap');
        
        @media (max-width: 1200px) {
          .header-nav {
            gap: 1rem !important;
          }
          .header-nav a {
            font-size: 0.9rem !important;
            padding: 0.75rem 0.25rem !important;
          }
        }
        
        @media (max-width: 1024px) {
          .header-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        
        @media (max-width: 768px) {
          .header-content {
            padding: 0 1rem !important;
          }
          .user-welcome {
            display: none !important;
          }
          .logo-text {
            font-size: 1.2rem !important;
          }
          .logo-icon {
            width: 45px !important;
            height: 45px !important;
          }
        }
        
        @media (max-width: 480px) {
          .header-content {
            padding: 0 0.75rem !important;
          }
          .logo-text {
            display: none !important;
          }
        }
        
        .mobile-menu.open {
          display: block !important;
        }
        
        .nav-link:hover span {
          transform: scaleX(1) !important;
        }
      `;
      const style = document.createElement('style');
      style.id = 'header-responsive-styles';
      style.textContent = styles;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.headerContent} className="header-content">
        <div style={headerStyles.logo} className="header-logo">
          <div style={headerStyles.logoIcon} className="logo-icon">
            <img src={QualtyLogo} alt="Qualty.AI Logo" style={headerStyles.logoImage} />
          </div>
          <span style={headerStyles.logoText} className="logo-text">Qualty.AI</span>
        </div>

        <nav style={headerStyles.nav} className="header-nav">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {user ? (
            <div style={headerStyles.userContainer}>
              <span style={headerStyles.userWelcome} className="user-welcome">
                Welcome, {user.name}
              </span>
              <button
                onClick={onLogout}
                style={headerStyles.logoutButton}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={handleAuthClick} 
              style={headerStyles.ctaButton}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Login/SignUp
            </button>
          )}
        </nav>

        <button
          style={headerStyles.mobileMenuButton}
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        style={{
          ...headerStyles.mobileMenu,
          display: isMenuOpen ? 'block' : 'none'
        }}
        className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
      >
        <div style={headerStyles.mobileMenuContent}>
          <a
            href="#home"
            style={headerStyles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#CCCCCC';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#FFFFFF';
            }}
          >
            Home
          </a>
          <a
            href="#services"
            style={headerStyles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#CCCCCC';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#FFFFFF';
            }}
          >
            Services
          </a>
          <a
            href="#about"
            style={headerStyles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#CCCCCC';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#FFFFFF';
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={headerStyles.mobileNavLink}
            onClick={() => setIsMenuOpen(false)}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = '#CCCCCC';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.color = '#FFFFFF';
            }}
          >
            Contact
          </a>
          
          {user ? (
            <button
              onClick={() => {
                onLogout();
                setIsMenuOpen(false);
              }}
              style={{
                ...headerStyles.logoutButton,
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <LogOut size={16} />
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                handleAuthClick(); 
                setIsMenuOpen(false);
              }}
              style={headerStyles.mobileCTAButton}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              Login/SignUp
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;