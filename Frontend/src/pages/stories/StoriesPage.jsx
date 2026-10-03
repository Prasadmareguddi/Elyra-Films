import React from 'react';
import './StoriesPage.css';
import { Link } from '../../lib/router';
import { getImage } from '../../lib/images';

const modernMuseImage = getImage('modern mouse.webp');
const goldenHourPoster = getImage('golden hour bg.webp');
const featuredStoryImage = getImage('poetry of light.webp');
const goldenHourVideo = new URL('../../assets/Video/Reel 2.mp4', import.meta.url).href;
const serviceImage1 = getImage('service1.webp');
const serviceImage2 = getImage('4K4A5099.webp');
const serviceImage3 = getImage('service3.webp');

const pastChapterImages = {
  1: getImage('pastChapterImage1.webp'),
  2: getImage('pastChapterImage2.webp'),
  3: getImage('pastChapterImage3.webp'),
  4: getImage('pastChapterImage4.webp'),
  5: getImage('pastChapterImage5.webp'),
  6: getImage('pastChapterImage6.webp'),
  7: getImage('pastChapterImage7.webp'),
  8: getImage('pastChapterImage8.webp'),
  9: getImage('pastChapterImage9.webp'),
  10: getImage('pastChapterImage10.webp'),
  11: getImage('pastChapterImage11.webp'),
  12: getImage('pastChapterImage12.webp'),
  13: getImage('pastChapterImage13.webp'),
  14: getImage('1000409350.webp'),
  15: getImage('4K4A5099.webp'),
};

const pastChapters = [
  { id: 1, title: 'The Mist of Wessend', description: 'A mystic journey through the morning fog.', ratio: 'portrait' },
  { id: 2, title: 'Rainy Day Promise', description: 'Two silhouettes under one umbrella.', ratio: 'tall' },
  { id: 3, title: 'Neon Vows', description: 'Love framed in violet blossoms and city light.', ratio: 'square' },
  { id: 4, title: 'The Fort Walk', description: 'Ancient walls, timeless companionship.', ratio: 'tall' },
  { id: 5, title: 'Golden Threshold', description: 'A quiet moment before forever begins.', ratio: 'portrait' },
  { id: 6, title: 'Leap of Faith', description: 'Joy caught mid-air on a monsoon morning.', ratio: 'tall' },
  { id: 7, title: 'Grand Entrance', description: 'Dancing through the colours of the market.', ratio: 'square' },
  { id: 8, title: 'Painted in Colour', description: 'Holi hues and unfiltered laughter.', ratio: 'portrait' },
  { id: 9, title: 'Evening Hush', description: 'Two hearts, one hallway, soft light.', ratio: 'wide' },
  { id: 10, title: "Wanderer's Path", description: 'A trail through green quietude.', ratio: 'portrait' },
  { id: 11, title: 'Lantern Glow', description: 'Warm light against carved shadows.', ratio: 'tall' },
  { id: 12, title: 'Winter Branches', description: 'Stillness framed by bare trees.', ratio: 'square' },
  { id: 13, title: 'Forest Vows', description: 'Traditions kept beneath the canopy.', ratio: 'portrait' },
  { id: 14, title: 'City Steps', description: 'Everyday love, extraordinary light.', ratio: 'wide' },
  { id: 15, title: 'The Quiet Hour', description: 'A pause between two chapters.', ratio: 'tall' },
];

const serviceNarratives = [
  {
    id: 1,
    title: 'The Eternal Union',
    description: 'Capturing the quiet elegance of modern ceremonies with architectural framing.',
    image: serviceImage1,
  },
  {
    id: 2,
    title: 'Prelude to Forever',
    description: 'A champagne study of anticipation and intimacy in the golden hour.',
    image: serviceImage2,
  },
  {
    id: 3,
    title: 'The Smallest Details',
    description: 'Finding the soul of the celebration in the textures and sight of quiet moments.',
    image: serviceImage3,
  },
];

const StoriesPage = () => {
  return (
    <div className="stories">
      {/* Header rendered globally */}

      {/* Hero */}
      <section className="stories-hero">
        <div className="stories-hero__left">
          <span className="stories-hero__eyebrow">NARRATIVES</span>
          <h1 className="stories-hero__title">
            Visual <span className="stories-hero__title--accent">Narratives</span>
          </h1>
        </div>
        <p className="stories-hero__description">
          A collection of long-form visual essays exploring the art of
          capturing modern love and intimate human connections through a
          minimalist lens.
        </p>
      </section>

      {/* Featured article + Modern Muse */}
      <section className="stories-featured">
        <div className="stories-featured__article">
          <div className="stories-featured__image-wrap">
            <img
              src={featuredStoryImage}
              alt="The Poetry of Light"
              className="stories-featured__image"
            />
          </div>

          <div className="stories-featured__content">
            <span className="stories-featured__label">VOLUME 01 / EDITORIAL</span>
            <h2 className="stories-featured__title">The Poetry of Light</h2>
            <p className="stories-featured__text">
              Explore the quiet elegance of modern ceremonies that captured
              the delicate balance between light and shadow.
            </p>
            <a href="#read" className="stories-featured__link">
              READ STORY <span className="stories-featured__arrow">→</span>
            </a>
          </div>
        </div>

        <div className="stories-muse">
          <div className="stories-muse__image-wrap">
            <img
              src={modernMuseImage}
              alt="The Modern Muse"
              className="stories-muse__image"
            />
            <span className="stories-muse__caption">PORTRAITS / MORVEN CO</span>
          </div>

          <div className="stories-muse__content">
            <span className="stories-muse__label">VOLUME 4 / PORTRAITS</span>
            <h2 className="stories-muse__title">
              The Modern <span className="stories-muse__title--accent">Muse</span>
            </h2>
            <p className="stories-muse__text">
              A moment study of individual grace, we document the fleeting
              moments of preparation and the quiet strength of the modern
              bride.
            </p>
            <a href="#read" className="stories-muse__link">
              READ STORY <span className="stories-muse__arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Golden Hour Echoes — dark banner */}
      <section className="golden-hour">
        <span className="golden-hour__eyebrow">CHAPTER 02 / OUR MEMOIRS</span>
        <h2 className="golden-hour__title">Golden Hour Echoes</h2>

        <div className="golden-hour__image-wrap">
          <video
            controls
            playsInline
            preload="metadata"
            poster={goldenHourPoster}
            className="golden-hour__image"
          >
            <source src={goldenHourVideo} type="video/mp4" />
            Your browser does not support the video element.
          </video>
        </div>

        <p className="golden-hour__quote">
          "When the sun meets the earth, and two stories become one. A study
          of light and landscape in the pursuit of forever."
        </p>

        <button className="golden-hour__button">EXPERIENCE THE FILM</button>
      </section>

      {/* Past Chapters — photo collage */}
      <section className="past-chapters">
        <div className="past-chapters__header">
          <h2 className="past-chapters__title">Past Chapters</h2>
          <a href="#archive" className="past-chapters__archive-link">ARCHIVE 2020—2024</a>
        </div>

        <div className="past-chapters__grid">
          {pastChapters.map((chapter) => (
            <div
              className={`past-chapters__item past-chapters__item--${chapter.ratio}`}
              key={chapter.id}
            >
              <div className="past-chapters__image-wrap">
                <img
                  src={pastChapterImages[chapter.id]}
                  alt={chapter.title}
                  className="past-chapters__image"
                />
                <div className="past-chapters__overlay">
                  <h3 className="past-chapters__item-title">{chapter.title}</h3>
                  <p className="past-chapters__item-description">{chapter.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Narratives */}
      <section className="service-narratives">
        <div className="service-narratives__header">
          <h2 className="service-narratives__title">Service Narratives</h2>
          <a href="#photography" className="service-narratives__link">BEHIND PHOTOGRAPHY</a>
        </div>

        <div className="service-narratives__grid">
          {serviceNarratives.map((item) => (
            <div className="service-narratives__item" key={item.id}>
              <div className="service-narratives__image-wrap">
                <img
                  src={item.image}
                  alt={item.title}
                  className="service-narratives__image"
                />
              </div>
              <h3 className="service-narratives__item-title">{item.title}</h3>
              <p className="service-narratives__item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="newsletter">
        <h2 className="newsletter__title">
          Stay within the <em>frame.</em>
        </h2>
        <p className="newsletter__text">
          Receive a quarterly curation of visual stories and exclusive
          photography access directly to your inbox.
        </p>

        <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="YOUR EMAIL ADDRESS"
            className="newsletter__input"
            required
          />
          <button type="submit" className="newsletter__button">
            SUBSCRIBE →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="stories-footer">
        <div className="stories-footer__top">
          <div className="stories-footer__brand">
            <div className="stories-footer__logo">ELYRA FILMS</div>
            <p className="stories-footer__tagline">
              Capturing the essence of luxury through a minimalist lens.
            </p>
          </div>

          <div className="stories-footer__column">
            <span className="stories-footer__column-title">COMPANY</span>
            <Link to="/contact" className="stories-footer__column-link">Contact</Link>
          </div>

          <div className="stories-footer__column">
            <span className="stories-footer__column-title">CONNECT</span>
            <a href="#instagram" className="stories-footer__column-link">Instagram</a>
            <a href="#vimeo" className="stories-footer__column-link">Vimeo</a>
          </div>
        </div>

        <div className="stories-footer__bottom">
          <span>© 2026 ELYRA FILMS. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED WITH INTENTION.</span>
        </div>
      </footer>
    </div>
  );
};

export default StoriesPage;