import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
        SenLiang Deng
      </div>

      <p className="footer-copy">
        © 2026 · Built with React
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/sdeng4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/senliang-deng-8161512a8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer