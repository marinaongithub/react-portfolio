import React from 'react';

function Footer() {
  return (
    <div className="footer">
        <footer>
            <ul id="contact">
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/marinaongithub"><i className="fa-brands fa-github fa-xl"></i></a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marina-t-927622256/"><i className="fa-brands fa-linkedin fa-xl"></i></a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:marina.theotiste@gmail.com"><i className="fa-solid fa-envelope fa-xl"></i></a>
                </li>
            </ul>
            <p>© Marina 2023</p>
        </footer>
    </div>
  )
}

export default Footer;