import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from '../lib/router';

const WEB3FORMS_ACCESS_KEY = '5bba48a8-6789-41dd-b596-a1e2d6bb8417';

const packages = [
  {
    id: 'wedding',
    label: 'LEGACY',
    title: 'Wedding Collection',
    quote: 'A cinematic study of union, preserved on heirloom paper.',
    features: ['4K Cinematic Film', 'Leather Pad & Bag', '40 Sheet Album', 'Drone', 'Traditional Photography'],
    price: '₹90,000',
  },
  {
    id: 'pre-wedding',
    label: 'INTIMACY',
    title: 'Pre-Wedding Narrative',
    quote: "Capturing the quiet electricity of the days before 'forever' begins.",
    features: [, 'Cinematic Video', '40 Digital Proofs', 'Drone'],
    price: '₹49,999',
  },
  {
    id: 'maternity',
    label: 'GRACE',
    title: 'Maternity Study',
    quote: 'A celebration of the sculptural beauty and quiet strength.',
    features: ['Minimalist Studio Session', '40 Digital Proofs'],
    price: '₹12,999',
  },
  {
    id: 'modeling',
    label: 'EDITORIAL',
    title: 'Model Portfolio',
    quote: 'High-fashion perspectives blended with authentic, raw film.',
    features: ['Digital & 35mm Film Hybrid', 'Professional Styling Consult', '20 Digital Proofs'],
    price: '₹12,999',
  },
];

const Header = () => {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
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

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > previousScrollY;

      setIsHeaderHidden(scrollingDown && currentScrollY > 120);
      previousScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
    payload.append('from_name', "ELYRA FILM's Website");
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
    <>
      <nav className={`header${isHeaderHidden ? ' header--hidden' : ''}`}>
        <div className="header__logo">
          <img src="/Elyra%20Films.png" alt="" className="header__logo-image" />
          <span>ELYRA FILM's</span>
        </div>

        <ul className="header__links">
          <li>
            <Link
              to="/"
              className="header__link"
              activeClassName="header__link--active"
            >
              GALLERY
            </Link>
          </li>
          <li><Link to="/stories" className="header__link" activeClassName="header__link--active">STORIES</Link></li>
          <li><Link to="/contact" className="header__link" activeClassName="header__link--active">CONTACT</Link></li>
        </ul>

        <button type="button" className="header__cta" onClick={openInquiry}>INQUIRE</button>
      </nav>

      {/* Floating social media strip */}
      <div className="social-strip">
        <a
          href="https://www.instagram.com/elyrafilms.in?stkn=Z2s0anRoajQ0djkz&utm_source=qr"
          className="social-strip__icon"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.5.98.46.45.74.9.98 1.5.17.46.36 1.26.4 2.44.07 1.24.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.24.61-.52 1.05-.98 1.5-.45.46-.9.74-1.5.98-.46.17-1.26.36-2.44.4-1.24.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.1 4.1 0 0 1-1.5-.98 4.1 4.1 0 0 1-.98-1.5c-.17-.46-.36-1.26-.4-2.44-.07-1.24-.07-1.65-.07-4.85s0-3.6.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.5.45-.46.9-.74 1.5-.98.46-.17 1.26-.36 2.44-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.52 0-4.75.07-1 .04-1.55.21-1.9.35-.48.19-.82.41-1.18.77-.36.36-.58.7-.77 1.18-.14.36-.31.9-.35 1.9-.07 1.23-.07 1.61-.07 4.75s0 3.52.07 4.75c.04 1 .21 1.55.35 1.9.19.48.41.82.77 1.18.36.36.7.58 1.18.77.36.14.9.31 1.9.35 1.23.07 1.61.07 4.75.07s3.52 0 4.75-.07c1-.04 1.55-.21 1.9-.35.48-.19.82-.41 1.18-.77.36-.36.58-.7.77-1.18.14-.36.31-.9.35-1.9.07-1.23.07-1.61.07-4.75s0-3.52-.07-4.75c-.04-1-.21-1.55-.35-1.9a3.17 3.17 0 0 0-.77-1.18 3.17 3.17 0 0 0-1.18-.77c-.36-.14-.9-.31-1.9-.35-1.23-.07-1.61-.07-4.75-.07zm0 3.15a4.85 4.85 0 1 1 0 9.7 4.85 4.85 0 0 1 0-9.7zm0 8a3.15 3.15 0 1 0 0-6.3 3.15 3.15 0 0 0 0 6.3zm6.17-8.2a1.13 1.13 0 1 1-2.27 0 1.13 1.13 0 0 1 2.27 0z" />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@pmweddingclickzs7484"
          className="social-strip__icon"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M22 12s0-3.15-.4-4.66a2.5 2.5 0 0 0-1.76-1.77C18.34 5.2 12 5.2 12 5.2s-6.34 0-7.84.37a2.5 2.5 0 0 0-1.76 1.77C2 8.85 2 12 2 12s0 3.15.4 4.66c.22.85.9 1.53 1.76 1.77 1.5.37 7.84.37 7.84.37s6.34 0 7.84-.37a2.5 2.5 0 0 0 1.76-1.77c.4-1.51.4-4.66.4-4.66zM9.9 15.02V8.98L15.5 12l-5.6 3.02z" />
          </svg>
        </a>
        <a
          href="https://wa.me/917975880157"
          className="social-strip__icon"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M12.04 2.4c-5.3 0-9.6 4.3-9.6 9.6 0 1.7.44 3.32 1.28 4.76L2.4 21.6l4.98-1.3a9.55 9.55 0 0 0 4.66 1.2h.01c5.3 0 9.6-4.3 9.6-9.6s-4.3-9.5-9.61-9.5zm0 17.55h-.01a7.93 7.93 0 0 1-4.05-1.11l-.29-.17-3 .78.8-2.92-.19-.3a7.9 7.9 0 0 1-1.22-4.24c0-4.37 3.56-7.93 7.94-7.93 2.12 0 4.11.83 5.61 2.33a7.87 7.87 0 0 1 2.32 5.6c0 4.38-3.56 7.94-7.9 7.94zm4.34-5.95c-.24-.12-1.4-.7-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.6.77-.74.93-.14.16-.27.18-.5.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.31-1.64-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.29-.73-1.76-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28z" />
          </svg>
        </a>
      </div>

      {isInquiryOpen && (
        <div className="inquiry-modal__overlay" onClick={closeInquiry}>
          <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="inquiry-modal__close" onClick={closeInquiry} aria-label="Close inquiry form">
              ×
            </button>

            <span className="inquiry-modal__eyebrow">BEGIN THE NARRATIVE</span>
            <h2 className="inquiry-modal__title">Start Your Inquiry</h2>
            <p className="inquiry-modal__subtitle">
              Share your idea and we’ll craft a tailored proposal for your next visual story.
            </p>

            {status.state === 'success' ? (
              <div className="inquiry-modal__success">
                <p>{status.message}</p>
                <button type="button" className="inquiry-modal__submit" onClick={closeInquiry}>CLOSE</button>
              </div>
            ) : (
              <form className="inquiry-modal__form" onSubmit={handleInquirySubmit}>
                <div className="inquiry-modal__row">
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">FULL NAME</label>
                    <input className="inquiry-modal__input" name="fullName" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">EMAIL</label>
                    <input className="inquiry-modal__input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="inquiry-modal__row">
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">PHONE</label>
                    <input className="inquiry-modal__input" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">SERVICE TYPE</label>
                    <select className="inquiry-modal__input inquiry-modal__select" name="serviceType" value={formData.serviceType} onChange={handleChange} required>
                      <option value="">Select a package</option>
                      {packages.map((pkg) => (
                        <option value={pkg.id} key={pkg.id}>{pkg.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="inquiry-modal__row">
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">PREFERRED DATE</label>
                    <input className="inquiry-modal__input" type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} />
                  </div>
                  <div className="inquiry-modal__field">
                    <label className="inquiry-modal__label">DETAILS</label>
                    <input className="inquiry-modal__input" name="details" value={formData.details} onChange={handleChange} />
                  </div>
                </div>

                {selectedPackage && (
                  <div className="inquiry-modal__preview">
                    <span className="inquiry-modal__preview-label">SELECTED PACKAGE</span>
                    <p className="inquiry-modal__preview-quote">{selectedPackage.quote}</p>
                    <ul className="inquiry-modal__preview-list">
                      {selectedPackage.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <div className="inquiry-modal__preview-price">{selectedPackage.price}</div>
                  </div>
                )}

                {status.state === 'error' && <p className="inquiry-modal__error">{status.message}</p>}

                <button type="submit" className="inquiry-modal__submit" disabled={status.state === 'loading'}>
                  {status.state === 'loading' ? 'SENDING...' : 'SEND INQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;