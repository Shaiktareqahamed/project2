import './Header.css';

const Header = () => {
  return (
    <section className="intro-section">
      <div className="overlay" />
      <div className="intro-content">
        <h1>Welcome to Quick Service</h1>
        <p>
          For over 20 years, we’ve been dedicated to providing expert bike services with excellence and care. Whether it’s routine maintenance, repairs, or custom upgrades, our skilled technicians ensure your ride stays smooth and safe. Experience trusted service, quality parts, and a passion for motorcycles that sets us apart.
        </p>
        <p className="tagline">Your journey, our commitment.</p>
      </div>
    </section>
  );
};

export default Header;

