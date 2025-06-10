import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Chennai Highway,Rajampet Road,Nandalur</p>
          <p>Email: quckservice@gmail.com</p>
          <p>Phone: +91 9014916621</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/cart">Cart</a>
          <a href="/order">Order</a>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-text-links">
            <a href="https://facebook.com" target="" rel="">Facebook</a>
            <a href="https://twitter.com" target="" rel="">Twitter</a>
            <a href="https://instagram.com" target="" rel="">Instagram</a>
            <a href="https://linkedin.com" target="" rel="">LinkedIn</a>
          </div>
        </div>
      </div>
      <p className="footer-copy">&copy; Quick Service. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
