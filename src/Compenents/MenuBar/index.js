import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RoomIcon from '@mui/icons-material/Room';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css';

const MenuMobile = () => {
 const [value, setValue] = React.useState(0);

 return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="contMenubar"
    >
      <Link to="/" className="link">
        <BottomNavigationAction label="Inicio" className="iconbar" icon={<RoomIcon />} />
      </Link>

      <Link to="/Ranked" className="link">
        <BottomNavigationAction label="Rank" className="iconbar" icon={<SportsBasketballIcon />} />
      </Link>

      <Link to="/Events" className="link">
        <BottomNavigationAction label="Eventos" className="iconbar" icon={<EventAvailableIcon />} />
      </Link>

      <Link to="/Account" className="link">
        <BottomNavigationAction label="Conta" className="iconbar" icon={<AccountCircleIcon />} />
      </Link>
    </BottomNavigation>
 );
}

export default MenuMobile;
