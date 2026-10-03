import React, { useState } from 'react';
import './Contact.css';
import { getImage } from '../../lib/images';

const contactPhotos = {
  collection: '4K4A7149.webp',
};
const contactCollectionImage = getImage(contactPhotos.collection);

const collections = [
  {
    id: 1,
    label: 'LEGACY',
    title: 'Wedding Collection',
    subtitle: 'For couples celebrating a complete wedding experience.',
    quote: '"A cinematic study of union, preserved on heirloom paper and..."',
    includes: ['Haldi',  'Wedding Ceremony', 'Reception'],
    features: ['4K Cinematic Film', 'Leather Pad & Bag', '40 Sheet Album', 'Drone Coverage', 'Traditional Photography'],
    price: '90,000',
    popular: true,
  },
  {
    id: 2,
    label: 'INTIMACY',
    title: 'Pre-Wedding Narrative',
    subtitle: 'For couples wanting a cinematic story before the big day.',
    quote: '"Capturing the quiet electricity of the days before \'forever\' begins."',
    includes: [ 'Pre-Wedding Shoot', 'Candid Moments', 'Posing & Styling'],
    features: ['Cinematic Video', '40 Digital Proofs', 'Drone Coverage'],
    price: '49,999',
    popular: false,
  },
  {
    id: 3,
    label: 'GRACE',
    title: 'Maternity Study',
    subtitle: 'For a quiet, sculptural celebration of this season.',
    quote: '"A celebration of the sculptural beauty and quiet strength of..."',
    includes: ['Studio Session'],
    features: ['Minimalist Studio Session', '40 Digital Proofs'],
    price: '12,999',
    popular: false,
  },
  {
    id: 4,
    label: 'EDITORIAL',
    title: 'Model Portfolio',
    subtitle: 'For a high-fashion, editorial-grade portfolio shoot.',
    quote: '"High-fashion perspectives blended with authentic, raw fil..."',
    includes: ['Studio or Outdoor Session'],
    features: ['Digital & 35mm Film Hybrid', 'Professional Styling Consult', '20 Digital Proofs'],
    price: '10,999',
    popular: false,
  },
];

// Placeholder testimonials — swap in real client reviews when ready.
const reviews = [
  {
    id: 1,
    initials: 'S&B',
    quote: '"They captured little moments we didn\'t even notice happening. Watching the film back still gives us goosebumps."',
    name: 'Sanjana & Bharat',
    location: 'Bengaluru',
  },
  {
    id: 2,
    initials: 'N&S',
    quote: '"Our families are still talking about how gracefully every ritual was documented. Timeless and cinematic."',
    name: 'Nithin & Shrilaxmi',
    location: 'Mysuru',
  },
  {
    id: 3,
    initials: 'D&P',
    quote: '"From candid moments to the grand celebration, our story was told exactly as we lived it. Absolutely magical."',
    name: 'Dheeraj & Pooja',
    location: 'Hubli',
  },
  {
    id: 4,
    initials: 'D&K',
    quote: '"The cinematic quality left everyone speechless. It genuinely feels like watching a movie of our own love story."',
    name: 'Divya & Kiran',
    location: 'Bengaluru',
  },
  {
    id: 5,
    initials: 'S&S',
    quote: '"The team made us feel so at ease. The candid shots captured our genuine emotions perfectly, start to finish."',
    name: 'Shravan & Srinidhi',
    location: 'Belgavi',
  },
  {
    id: 6,
    initials: 'A&P',
    quote: '"We wanted a film that felt real and raw. ELYRA FILM\'S delivered exactly that, and so much more."',
    name: 'Arjun & Preethi',
    location: 'Belgavi',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    details: '',
  });

  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [availabilityForm, setAvailabilityForm] = useState({ serviceType: '', date: '' });
  const [availabilityStatus, setAvailabilityStatus] = useState('idle'); // idle | checking | available | unavailable

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const openAvailabilityModal = (presetService = '') => {
    setAvailabilityForm({ serviceType: presetService, date: '' });
    setAvailabilityStatus('idle');
    setIsAvailabilityOpen(true);
  };

  const closeAvailabilityModal = () => {
    setIsAvailabilityOpen(false);
  };

  const handleAvailabilityChange = (e) => {
    setAvailabilityForm({ ...availabilityForm, [e.target.name]: e.target.value });
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    if (!availabilityForm.date) return;

    setAvailabilityStatus('checking');

    // TODO: replace this with a real booking-API call, e.g.
    // fetch(`/api/availability?date=${availabilityForm.date}&service=${availabilityForm.serviceType}`)
    //   .then((res) => res.json())
    //   .then((data) => setAvailabilityStatus(data.available ? 'available' : 'unavailable'));
    setTimeout(() => {
      setAvailabilityStatus('available');
    }, 1200);
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <span className="contact-hero__eyebrow">CONNECT / STUDIO</span>
        <h1 className="contact-hero__title">
          Writing Your <span className="contact-hero__title--accent">Next Chapter</span>
        </h1>
        <p className="contact-hero__subtitle">
          Whether it is the quiet rustle of a gown or the cinematic expanse
          of an architectural landscape, we capture the nuances that others
          miss.
        </p>
      </section>

      {/* Inquiry Form + Office Info */}
      <section className="inquiry">
        <div className="inquiry__form-wrap">
          <span className="inquiry__label">Begin the Narrative</span>

          <form className="inquiry__form" onSubmit={handleSubmit}>
            <div className="inquiry__row">
              <div className="inquiry__field">
                <label className="inquiry__field-label">FULL NAME</label>
                <input
                  type="text"
                  name="fullName"
                  className="inquiry__input"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
              <div className="inquiry__field">
                <label className="inquiry__field-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  className="inquiry__input"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inquiry__row">
              <div className="inquiry__field">
                <label className="inquiry__field-label">SERVICE TYPE</label>
                <select
                  name="serviceType"
                  className="inquiry__input inquiry__select"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="">Service Type</option>
                  <option value="wedding">Wedding Collection</option>
                  <option value="pre-wedding">Pre-Wedding Narrative</option>
                  <option value="maternity">Maternity Study</option>
                  <option value="modeling">Model Portfolio</option>
                </select>
              </div>
              <div className="inquiry__field">
                <label className="inquiry__field-label">PREFERRED DATE</label>
                <input
                  type="date"
                  name="preferredDate"
                  className="inquiry__input"
                  value={formData.preferredDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="inquiry__field inquiry__field--full">
              <label className="inquiry__field-label">DETAILS &amp; VISION</label>
              <input
                type="text"
                name="details"
                className="inquiry__input"
                value={formData.details}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="inquiry__submit">
              SUBMIT INQUIRY
            </button>
          </form>
        </div>

        {/* <div className="inquiry__side">
          <div className="inquiry__side-block">
            <span className="inquiry__side-label">OFFICE</span>
            <p className="inquiry__side-text">
              BTM 2nd Stage<br />
              Bengaluru karnataka, India<br />
                560076
            </p>
          </div>

          <div className="inquiry__side-block">
            <span className="inquiry__side-label">REACH OUT</span>
            <p className="inquiry__side-text">
              pmweddingclickzs@gmail.com<br />
              +91 7975880157 <br/>
              +91 6362721271
            </p>
          </div>

          <div className="inquiry__side-image-wrap">
            <img
              src={contactSideImage}
              alt="Camera lens detail"
              className="inquiry__side-image"
            />
          </div>
        </div> */}
      </section>

      {/* Investment / Collection hero image */}
      <section className="investment">
        <div className="investment__image-wrap">
          <img
            src={contactCollectionImage}
            alt="Couple in a sunlit room"
            className="investment__image"
          />
          <h2 className="investment__title">
            Investment & <span className="investment__title--accent">Collections</span>
          </h2>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <div className="reviews__header">
          <h2 className="reviews__title">
            Loved by <span className="reviews__title--accent">ELYRA FILM'S</span> Clients
          </h2>
          <p className="reviews__subtitle">
            Heartfelt words from clients whose stories we've had the honour of capturing.
          </p>
          <span className="reviews__divider"></span>
        </div>

        <div className="reviews__grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-card__top">
                <span className="review-card__avatar">{review.initials}</span>
                <span className="review-card__stars">★★★★★</span>
              </div>
              <p className="review-card__quote">{review.quote}</p>
              <div className="review-card__footer">
                <span className="review-card__name">{review.name}</span>
                <span className="review-card__location">
                  <span className="review-card__pin">📍</span> {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Package Collections */}
      <section className="packages">
        <div className="packages__header">
          <h2 className="packages__title">Choose Your Collection</h2>
          <span className="packages__divider"></span>
        </div>

        <div className="packages__grid">
          {collections.map((item) => (
            <div
              className={`package-card ${item.popular ? 'package-card--popular' : ''}`}
              key={item.id}
            >
              {item.popular && (
                <span className="package-card__badge">MOST CHOSEN COLLECTION</span>
              )}

              <span className="package-card-label">{item.label}</span>
              <h3 className="package-card-title">{item.title}</h3>
              <p className="package-card-subtitle">{item.subtitle}</p>

              <span className="package-card-section-label">INCLUDES COVERAGE OF:</span>
              <div className="package-card-tags">
                {item.includes.map((tag, i) => (
                  <span className="package-card-tag" key={i}>{tag}</span>
                ))}
              </div>

              <span className="package-card-section-label">COVERAGE FOR EACH EVENT:</span>
              <ul className="package-card-checklist">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="package-card-footer">
                <div>
                  <span className="package-card-starts">STARTS AT</span>
                  <span className="package-card-price">₹{item.price}</span>
                </div>
                <button
                  type="button"
                  className="package-card-btn"
                  onClick={() => openAvailabilityModal(item.title)}
                >
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote / Scroll section */}
      <section className="closing">
        <span className="closing__icon">✦</span>
        <p className="closing__quote">
          We do not just document moments. We curate the atmosphere of your
          life.
        </p>
        <span className="closing__divider"></span>
        <a href="#top" className="closing__scroll">
          SCROLL TO BEGIN <span className="closing__scroll-arrow">↓</span>
        </a>
      </section>

      {/* Availability Check */}
      <section className="availability">
        <h2 className="availability__title">Limited Wedding Dates Available</h2>
        <p className="availability__subtitle">
          We accept only a limited number of weddings each month to maintain
          cinematic quality.
        </p>

        <div className="availability__features">
          <span className="availability__feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            Limited slots
          </span>
          <span className="availability__feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
            </svg>
            Premium wedding coverage
          </span>
          <span className="availability__feature">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
            Book early to secure your date
          </span>
        </div>

        <button
          type="button"
          className="availability__cta"
          onClick={() => openAvailabilityModal()}
        >
          Check Availability for Your Wedding
        </button>
      </section>

      {/* Availability Modal */}
      {isAvailabilityOpen && (
        <div className="availability-modal__overlay" onClick={closeAvailabilityModal}>
          <div className="availability-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="availability-modal__close"
              onClick={closeAvailabilityModal}
              aria-label="Close"
            >
              ×
            </button>

            <span className="inquiry__label">Check Availability</span>

            <form className="availability-modal__form" onSubmit={handleCheckAvailability}>
              <div className="inquiry__field">
                <label className="inquiry__field-label">SERVICE TYPE</label>
                <select
                  name="serviceType"
                  className="inquiry__input inquiry__select"
                  value={availabilityForm.serviceType}
                  onChange={handleAvailabilityChange}
                >
                  <option value="">Select a collection</option>
                  {collections.map((item) => (
                    <option value={item.title} key={item.id}>{item.title}</option>
                  ))}
                </select>
              </div>

              <div className="inquiry__field">
                <label className="inquiry__field-label">DATE</label>
                <input
                  type="date"
                  name="date"
                  className="inquiry__input"
                  value={availabilityForm.date}
                  onChange={handleAvailabilityChange}
                  required
                />
              </div>

              <button type="submit" className="inquiry__submit availability-modal__submit">
                {availabilityStatus === 'checking' ? 'CHECKING...' : 'CHECK AVAILABILITY'}
              </button>

              {availabilityStatus === 'available' && (
                <p className="availability-modal__result availability-modal__result--available">
                  Good news — this date looks open. We'll confirm by email once your inquiry is submitted.
                </p>
              )}
              {availabilityStatus === 'unavailable' && (
                <p className="availability-modal__result availability-modal__result--unavailable">
                  That date is already booked. Try another date or reach out directly.
                </p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="contact-footer">
        <div className="contact-footer__top">
          <div className="contact-footer__brand">
            <div className="contact-footer__logo">ELYRA FILM'S</div>
            <p className="contact-footer__tagline">
              Capturing the essence of luxury through a minimalist editorial
              lens.
            </p>
          </div>

          <div className="contact-footer__column">
            <span className="contact-footer__column-title">CONNECT</span>
            <a href="#instagram" className="contact-footer__column-link">Instagram</a>
            <a href="#vimeo" className="contact-footer__column-link">Youtube</a>
          </div>

          <div className="contact-footer__column">
            <span className="contact-footer__column-title">CONTACT</span>
            <a href="mailto:studio@elyrafilms.in" className="contact-footer__column-link">studio@elyrafilms.in</a>
          </div>
        </div>

        <div className="contact-footer__bottom">
          <span>© 2026 ELYRA FILM'S. ALL RIGHTS RESERVED.</span>
          <span>CRAFTED FOR THE MODERN AESTHETE.</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;