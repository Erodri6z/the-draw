import './nav.css'
const Nav = () => {
  return (
    <>
    <nav>
      <ul className="nav-items">
        <li className='list-items'>
          <a href="/">
            The Draw
          </a>
        </li>
        <li className="list-items">
          <a href="/about">
            About
          </a>
        </li>
        <li className="list-items">
          <a href="/login">
            Login
          </a>
        </li>
        <li className="list-items">
          <a href="/signup">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Nav