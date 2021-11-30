import classes from './Header.module.css';
import logoImage from '../assets/logo.png';

const Header = () => {
  return (
    <div>
      <div className={classes['main-image']}>
        <img src={logoImage} alt="Logo" />
        <input type="date" name="factura-date" className={classes.date} />
      </div>
      <div>
        <h1>Factura</h1>
      </div>
    </div>
  );
};

export default Header;
