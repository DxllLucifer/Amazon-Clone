import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import amazon__logo from '../Assets/amazon__logo.png'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <Link to='/' >
        <img className='header__logo' src={amazon__logo} alt="img" /> 
      </Link>
      <div className="header__search">
        <input className='header__searchInput' type="text" />
        <SearchIcon className='header__searchIcon'/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello User</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
              <ShoppingBasketIcon className='.header__cart' />
            <span className='header__optionLineTwo header__basketCount'>0</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
