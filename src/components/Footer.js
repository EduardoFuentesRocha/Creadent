import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Síguenos{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@creadentmx</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Todos los derechos reservador. 
        </span>
      </div>
    </footer>
  </div>
)
