import './nav.css'
const Nav = ({ user, handleLogout }) => {
  return (
    <>
    {user?
    <nav>
      <ul className="nav-items">
        <li className='list-items'>
          <a href="/">
          <img src="/theDrawEdit.png" alt="The Draw" className='logo'/>
          </a>
        </li>
        <li className="list-items">
          <a href="/about">
            About
          </a>
        </li>
        <li className='list-items'>
          <button onClick={() => handleLogout()}>
            Log Out
          </button>
        </li>
      </ul>
    </nav>
    :
    <nav>
      <ul className="nav-items">
        <li className='list-items'>
          <a href="/">
          <img src="/theDrawEdit.png" alt="The Draw"  className='logo'/>
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
    }
    </>
  )
}

export default Nav