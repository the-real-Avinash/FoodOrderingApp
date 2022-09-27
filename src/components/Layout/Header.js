import React from 'react'
import mealImage from '../../assets/italian.jpg'
import classes from '../Layout/Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
    </header>
    <div>
        <img src={mealImage} alt="A table with full of meal" className={classes['main-image']}/>
    </div>
    </>
  )
}

export default Header