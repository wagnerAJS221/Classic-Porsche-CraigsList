import header from './header.css'

function Header() {
  return (
    <header className="Header">
      <h1 className="heading-title">Classic Porsche.com</h1>
      <h2>Porsche Craiglist</h2>
      <span className="header-buttons">
        <button className="header-btn">Home</button>
        <button className="header-btn">Profile</button>
      </span>
    </header>
  )
}

export default Header
