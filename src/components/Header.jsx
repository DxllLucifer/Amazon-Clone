import React, { useEffect, useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import amazon__logo from '../Assets/amazon__logo.png'
import {Link} from 'react-router-dom'
import { UseStateValue } from '../Store/StateProvider';
export default function Header() {


  const [{user , basket}, dispatch ] =  UseStateValue()
  const [isLogIn, setIsLogIn] = useState(false)
  const handleSignOut = ()=>{
    localStorage.removeItem('user')
  }
  useEffect(() => {
    debugger
    if (localStorage.length > 0) {
      const data = localStorage.getItem('user')
      const parsedata = JSON.parse(data)
      dispatch({
        type:'SET_USER',
        user: parsedata.user
      })
      setIsLogIn(true)
    }
    else{
      dispatch({
        type:'SET_USER',
        user:null
      })
      setIsLogIn(false)
    }
  },[])
  
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
       {!isLogIn &&  <Link to='/Login'>
          <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>}
        {isLogIn && <div className="header__option" onClick={handleSignOut}>
            <span className="header__optionLineOne">{user.username}</span>
            <span className="header__optionLineTwo">Sign out</span>
        </div>}
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
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
