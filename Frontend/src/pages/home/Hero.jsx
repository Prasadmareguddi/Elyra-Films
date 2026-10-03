import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from '../../lib/router';
import { getImage } from '../../lib/images';

const homePhotos = {
  wedding: 'Wedding.webp',
  preWedding: 'Prewedding.webp',
  maternity: 'Metarnity.webp',
  modeling: 'Modeling.webp',
  heroBackgrounds: ['backgroung1.webp', 'background2.webp', 'background3.webp'],
  philosophy: 'Elyra.webp',
};

const works = [
  {
    id: 1,
    title: 'Wedding',
    category: 'WEDDING',
    image: getImage(homePhotos.wedding),
    size: 'tall',
    focus: 'center', // change to e.g. 'center 20%' or 'top' if the subject gets cropped
  },
  {
    id: 2,
    title: 'Pre-Wedding',
    category: 'Pre-Wedding',
    image: getImage(homePhotos.preWedding),
    size: 'tall',
    focus: 'center',
  },
  {
    id: 3,
    title: 'Metarnity',
    category: 'Baby Shower',
    image: getImage(homePhotos.maternity),
    size: 'tall',
    focus: 'center',
  },
  {
    id: 4,
    title: 'Modeling',
    category: 'Modeling',
    image: getImage(homePhotos.modeling),
    size: 'tall',
    focus: 'center',
  },
];

// ---- Hero background slideshow ----
const heroBackgroundImages = homePhotos.heroBackgrounds.map(getImage);

const HERO_SLIDE_INTERVAL_MS = 3500; // 3.5 seconds between transitions

const WEB3FORMS_ACCESS_KEY = '5bba48a8-6789-41dd-b596-a1e2d6bb8417';

const packages = [
  {
    id: 'wedding',
    label: 'LEGACY',
    title: 'Wedding Collection',
    quote: 'A cinematic study of union, preserved on heirloom paper.',
    features: ['4K Cinematic Film', 'Leather Pad & Bag', '40 Sheet Album', 'Drone', 'Traditional Photography'],
    price: '₹85,000',
  },
  {
    id: 'pre-wedding',
    label: 'INTIMACY',
    title: 'Pre-Wedding Narrative',
    quote: "Capturing the quiet electricity of the days before 'forever' begins.",
    features: ['Golden Hour Location Scouting', 'Cinematic Video', '40 Digital Proofs', 'Drone'],
    price: '₹45,000',
  },
  {
    id: 'maternity',
    label: 'GRACE',
    title: 'Maternity Study',
    quote: 'A celebration of the sculptural beauty and quiet strength.',
    features: ['Minimalist Studio Session', '40 Digital Proofs'],
    price: '₹9,999',
  },
  {
    id: 'modeling',
    label: 'EDITORIAL',
    title: 'Model Portfolio',
    quote: 'High-fashion perspectives blended with authentic, raw film.',
    features: ['Digital & 35mm Film Hybrid', 'Professional Styling Consult', '20 Digital Proofs'],
    price: '₹15,999',
  },
];

// ---- New: Our Wedding Services (icon cards, no large photos) ----
const services = [
  {
    id: 'candid',
    icon: 'camera',
    title: 'Candid Wedding Photography',
    description: 'Natural, unposed moments that capture real emotions.',
  },
  {
    id: 'cinematic',
    icon: 'film',
    title: 'Cinematic Wedding Films',
    description: 'Story-driven films that preserve your celebration forever.',
  },
  {
    id: 'traditional',
    icon: 'image',
    title: 'Traditional Photography & Videography',
    description: 'Classic coverage of all rituals and ceremonies.',
  },
  {
    id: 'pre-wedding',
    icon: 'heart',
    title: 'Pre-Wedding Shoots',
    description: 'Romantic couple sessions before your big day.',
  },
  {
    id: 'coverage',
    icon: 'star',
    title: 'Complete Wedding Coverage',
    description: 'Full multi-day event documentation.',
  },
];

// ---- New: Why Couples Choose Us ----
const reasons = [
  { icon: 'film', text: 'Cinematic storytelling approach' },
  { icon: 'people', text: 'Experienced wedding teams' },
  { icon: 'heart', text: 'Natural posing guidance' },
  { icon: 'star', text: 'Premium editing & films' },
  { icon: 'camera', text: 'Seamless wedding-day coordination' },
  { icon: 'badge', text: 'Trusted by modern couples' },
];

// ---- Shared line-icon set for Services / Why Choose Us ----
const sectionIcons = {
  camera: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.3" />
    </svg>
  ),
  film: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="1.2" />
      <path d="M8 4.5v15M16 4.5v15M3 9h5M16 9h5M3 15h5M16 15h5" />
    </svg>
  ),
  image: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="M4 17l5-5 3 3 3-4 5 6" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7.5-4.6-10-9.4C.5 7 2 3.5 5.6 3c2-.3 3.8.7 6.4 3.3C14.6 3.7 16.4 2.7 18.4 3 22 3.5 23.5 7 22 10.6 19.5 15.4 12 20 12 20z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.8l2.7 5.9 6.3.7-4.7 4.4 1.3 6.4L12 16.9l-5.6 3.3 1.3-6.4-4.7-4.4 6.3-.7L12 2.8z" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="8" r="2.8" />
      <path d="M2.5 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="17" cy="8.5" r="2.2" />
      <path d="M16 13.3c2.6.3 4.5 2.3 4.5 5.2" />
    </svg>
  ),
  badge: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="5.2" />
      <path d="M9 13.5L7 21l5-2.5 5 2.5-2-7.5" />
    </svg>
  ),
};

const Hero = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    details: '',
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  // ---- Hero slideshow state ----
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroBackgroundImages.length <= 1) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroBackgroundImages.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => {
    setIsInquiryOpen(false);
    setStatus({ state: 'idle', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedPackage = packages.find((p) => p.id === formData.serviceType);

  const buildQuotationSummary = () => {
    if (!selectedPackage) return 'No package selected.';
    return (
      `Package: ${selectedPackage.title} (${selectedPackage.label})\n` +
      `Starts at: ${selectedPackage.price}\n` +
      `Includes: ${selectedPackage.features.join(', ')}`
    );
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: '' });

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append(
      'subject',
      `New Inquiry — ${selectedPackage ? selectedPackage.title : 'General'} — ${formData.fullName}`
    );
    payload.append('from_name', "PM FILM's Website");
    payload.append('name', formData.fullName);
    payload.append('email', formData.email);
    payload.append('phone', formData.phone);
    payload.append('service_type', selectedPackage ? selectedPackage.title : 'Not specified');
    payload.append('preferred_date', formData.preferredDate);
    payload.append('details', formData.details);
    payload.append('quotation_summary', buildQuotationSummary());
    payload.append(
      'message',
      `New inquiry received from the website.\n\n` +
        `Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Preferred Date: ${formData.preferredDate || 'Not specified'}\n\n` +
        `--- Selected Package ---\n${buildQuotationSummary()}\n\n` +
        `--- Client's Vision / Details ---\n${formData.details || 'None provided'}`
    );

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      });
      const result = await response.json();

      if (result.success) {
        setStatus({ state: 'success', message: 'Your inquiry has been sent. We will reach out shortly.' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          preferredDate: '',
          details: '',
        });
      } else {
        setStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ state: 'error', message: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="aesthete">
      {/* Header rendered globally */}

      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          {heroBackgroundImages.map((img, i) => (
            <div
              key={img + i}
              className={`hero__bg-slide${i === activeSlide ? ' hero__bg-slide--active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="hero__bg-overlay" />
        </div>

        <div className="hero__content">
          <h1 className="hero__title">
            The Art of <span className="hero__title--accent">Vision</span>
          </h1>

          <p className="hero__subtitle">
            Capturing the invisible architecture of emotion through light and
            silence. A curation of high-end visual narratives for the modern
            aesthete.
          </p>

          {/* <a href="#archive" className="hero__cta">
            EXPLORE ARCHIVE <span className="hero__cta-arrow">→</span>
          </a> */}

          {/* <div className="hero__scroll">
            <span className="hero__scroll-label">SCROLL</span>
            <span className="hero__scroll-line"></span>
          </div> */}
        </div>
      </section>

      {/* Featured Works */}
      <section className="works" id="gallery">
        <div className="works__header">
          <div>
            {/* <span className="works__eyebrow">PORTFOLIO</span> */}
            <h2 className="works__title">Featured Works</h2>
          </div>
          {/* <p className="works__note">
            Selected projects from 2023—2024 focusing on luxury fashion and
            architectural geometry.
          </p> */}
        </div>

        {/* <div className="works__grid">
          {works.map((work) => (
            <div className={`works__item works__item--${work.size}`} key={work.id}>
              <div className="works__image-wrap">
                <img
                  src={work.image}
                  alt={work.title}
                  className="works__image"
                  style={{ objectPosition: work.focus || 'center' }}
                />
              </div>
              <h3 className="works__item-title">{work.title}</h3>
              <span className="works__item-category">{work.category}</span>
            </div>
          ))}
        </div> */}
      </section>

      {/* Our Wedding Services */}
      <section className="services" id="services">
        <h2 className="services__title">Our Wedding Services</h2>

        <div className="services__grid">
          {services.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__icon">{sectionIcons[service.icon]}</div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection collage — reuses the same photos from Featured Works,
          hover reveals the collection name (Wedding, Pre-Wedding, etc.) */}
      <section className="collections" id="collections">
        <h2 className="collections__title">Explore by Collection</h2>

        <div className="collections__grid">
          {works.map((work) => (
            <div className="collections__tile" key={work.id}>
              <img
                src={work.image}
                alt={work.title}
                className="collections__image"
                style={{ objectPosition: work.focus || 'center' }}
              />
              <div className="collections__overlay">
                <span className="collections__label">{work.category}</span>
                <h3 className="collections__name">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Couples Choose Us */}
      <section className="why-us">
        <h2 className="why-us__title">Why Couples Choose ELYRA FILM's</h2>

        <div className="why-us__grid">
          {reasons.map((reason, index) => (
            <div className="why-us__item" key={index}>
              <span className="why-us__icon">{sectionIcons[reason.icon]}</span>
              <span className="why-us__text">{reason.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy">
        <div className="philosophy__image-wrap">
          <img
            src={getImage(homePhotos.philosophy)}
            alt="Photographer at work"
            className="philosophy__image"
          />
        </div>

        <div className="philosophy__content">
          <span className="philosophy__eyebrow">THE PHILOSOPHY</span>
          <h2 className="philosophy__title">
            Capturing the Essence of Stillness
          </h2>

          <p className="philosophy__text">
            I believe that photography is not about the subject, but about
            the space between. In the silence of a frame, we find the truth
            of a moment. My work is a continuous exploration of high-contrast
            narratives and minimalist perfection.
          </p>

          <div className="philosophy__stats">
            <div className="philosophy__stat">
              <span className="philosophy__stat-number">8+</span>
              <span className="philosophy__stat-label">YEARS EXPERIENCE</span>
            </div>
            <div className="philosophy__stat">
              <span className="philosophy__stat-number">500+</span>
              <span className="philosophy__stat-label">CLIENTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2 className="cta-banner__title">
          Let's create something <em>timeless together.</em>
        </h2>
        <button type="button" className="cta-banner__button" onClick={openInquiry}>
          START A PROJECT
        </button>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <div className="site-footer__logo">ELYRA FILM's</div>
            <p className="site-footer__tagline">Wedding Photography &amp; Films</p>
            <p className="site-footer__desc">Cinematic wedding stories across India &amp; destinations.</p>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Contact</h4>
            <a href="tel:+91 7975880157" className="site-footer__line">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.6 21 3 14.4 3 6a2 2 0 0 1 1-2z" />
              </svg>
              +91 7975880157
            </a>
            <a href="#contact" className="site-footer__line site-footer__line--accent">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.8 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.2" />
              </svg>
              India &amp; Destination Weddings
            </a>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Quick Links</h4>
            <a href="#gallery" className="site-footer__link">Home</a>
            <a href="#gallery" className="site-footer__link">Portfolio</a>
            <a href="#collections" className="site-footer__link site-footer__link--accent">Collections</a>
            <button type="button" className="site-footer__link site-footer__link--accent site-footer__link--button" onClick={openInquiry}>
              Contact
            </button>
            <button type="button" className="site-footer__link site-footer__link--button" onClick={openInquiry}>
              Check Availability
            </button>
          </div>

          <div className="site-footer__col">
            <h4 className="site-footer__heading">Follow Us</h4>
            <a href="#" className="site-footer__line" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.88 5.88 0 0 0-2.13 1.39A5.88 5.88 0 0 0 .62 4.15C.32 4.9.12 5.77.06 7.05.01 8.33 0 8.74 0 12s.01 3.67.06 4.95c.06 1.28.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.06c1.28-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.39 5.88 5.88 0 0 0 1.39-2.13c.3-.76.5-1.63.56-2.91.05-1.28.06-1.69.06-4.95s-.01-3.67-.06-4.95c-.06-1.28-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.39-2.13A5.88 5.88 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0z"/>
                <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zM18.4 4.6a1.44 1.44 0 1 0 1.44 1.44A1.44 1.44 0 0 0 18.4 4.6z"/>
              </svg>
              Instagram
            </a>
            <a href="#" className="site-footer__line" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.06-.98-.11-2.5.02-3.58.12-.97.79-6.24.79-6.24s-.2-.4-.2-1c0-.93.54-1.63 1.21-1.63.57 0 .85.43.85.94 0 .57-.37 1.43-.55 2.22-.16.67.33 1.21 1 1.21 1.19 0 2.11-1.26 2.11-3.07 0-1.6-1.15-2.73-2.8-2.73-1.9 0-3.02 1.43-3.02 2.9 0 .58.22 1.2.5 1.53a.2.2 0 0 1 .05.19l-.19.79c-.03.13-.1.16-.24.1-.9-.42-1.46-1.73-1.46-2.79 0-2.28 1.65-4.37 4.77-4.37 2.5 0 4.45 1.78 4.45 4.17 0 2.49-1.57 4.49-3.75 4.49-.73 0-1.42-.38-1.65-.83l-.45 1.72c-.16.63-.6 1.42-.9 1.9A12 12 0 1 0 12 0z"/>
              </svg>
              Pinterest
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© 2026 ELYRA FILM's. All rights reserved.</p>
        </div>
      </footer>

      {/* Inquiry Modal */}
      {isInquiryOpen && (
        <div className="inquiry-modal__overlay" onClick={closeInquiry}>
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button className="inquiry-modal__close" onClick={closeInquiry} aria-label="Close">
              ×
            </button>

            <span className="inquiry-modal__eyebrow">BEGIN THE NARRATIVE</span>
            <h2 className="inquiry-modal__title">Send an Inquiry</h2>
            <p className="inquiry-modal__subtitle">
              Tell us about your story, and we'll get back to you with a tailored quotation.
            </p>

            {status.state === 'success' ? (
              <div className="inquiry-modal__success">
                <p>{status.message}</p>
                <button className="inquiry-modal__submit" onClick={closeInquiry}>
                  CLOSE
                </button>
              </div>
            ) : (
              <form className="inquiry-modal__form" onSubmit={handleInquirySubmit}>
                <div className="inquiry-modal__row">
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">FULL NAME</label>
                    <input
                      type="text"
                      name="fullName"
                      className="inquiry-modal__input"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      name="email"
                      className="inquiry-modal__input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="inquiry-modal__row">
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">PHONE NUMBER</label>
                    <input
                      type="tel"
                      name="phone"
                      className="inquiry-modal__input"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">PREFERRED DATE</label>
                    <input
                      type="date"
                      name="preferredDate"
                      className="inquiry-modal__input"
                      value={formData.preferredDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="inquiry-modal__field">
                  <label className="inquiry-modal__label">SERVICE TYPE</label>
                  <select
                    name="serviceType"
                    className="inquiry-modal__input inquiry-modal__select"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a package</option>
                    {packages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.title} — {pkg.price}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedPackage && (
                  <div className="inquiry-modal__preview">
                    <span className="inquiry-modal__preview-label">{selectedPackage.label}</span>
                    <p className="inquiry-modal__preview-quote">"{selectedPackage.quote}"</p>
                    <ul className="inquiry-modal__preview-list">
                      {selectedPackage.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                    <span className="inquiry-modal__preview-price">STARTS AT {selectedPackage.price}</span>
                  </div>
                )}

                <div className="inquiry-modal__field">
                  <label className="inquiry-modal__label">DETAILS &amp; VISION</label>
                  <textarea
                    name="details"
                    className="inquiry-modal__input inquiry-modal__textarea"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>

                {status.state === 'error' && (
                  <p className="inquiry-modal__error">{status.message}</p>
                )}

                <button
                  type="submit"
                  className="inquiry-modal__submit"
                  disabled={status.state === 'loading'}
                >
                  {status.state === 'loading' ? 'SENDING...' : 'SUBMIT INQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;