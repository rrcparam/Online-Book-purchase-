export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Open Library</h4>
          <p>Online Book Store Project</p>
          <p>Built using React & TypeScript</p>
        </div>

        <div className="footer-column">
          <h4>Navigation</h4>
          <a href="#">Home</a>
          
        </div>

        <div className="footer-column">
          <h4>Team Members</h4>
          <p>Paramdeep Singh</p>
          <p>Karamjeet Kaur</p>
          
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@bookstore.com</p>
          <p>Winnipeg, Canada</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Book Store App | Created by Team 3</p>
      </div>
    </footer>
  );
}