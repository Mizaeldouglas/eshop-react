import "./styles.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';


export default function Header(){
	return(
		<div>
			<div className='header__logo'>
		<StorefrontIcon  className='header__logoImage' fontSize="large"/>
		<h2 className="header__logoTitle">eShop</h2>
	  </div>
	  <div className="header__search">
		<input type="text" className='header__seachInput' />
		<SearchIcon className='header__searchIcon' />
	  </div>
	  <div className="header__nav">
		<div className="nav__item">
			<span className="nav__itemLineOne">Hello Guest</span>
			<span className="nav__itemLineTwo">Sing In</span>
		</div>
		<div className="nav__item">
		<span className="nav__itemLineOne">Your</span>
			<span className="nav__itemLineTwo">Shop</span>
		</div>
		<div className="nav__item">
		<ShoppingBasketIcon fontSize="large" />
			<span className="nav__itemLineTwo">0</span>
		</div>
	  </div>
		</div>		
	)
}