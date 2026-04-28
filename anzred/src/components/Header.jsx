import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Courses from '../Courses';

function Header() {
    return (
        <header>
            <div className="left_part">
                <img src="./icons/logo.svg" alt="" className="logo" />
                <div className="links">
<<<<<<< HEAD
                    <Link to="/" >Главная</Link>
                    <Link to="/" >Услуги</Link>
                    <Link to="/Courses" >Курсы</Link>
                    <Link to="/Projects" >Проекты</Link>
                    <Link to="/" >Контакты</Link>
=======
                    <a href="/">Главная</a>
                    <a href="#">Услуги</a>
                    <a href="#">Курсы</a>
                    <a href="#">Проекты</a>
                    <a href="#">Контакты</a>
>>>>>>> 87c558a0e3ed984e7e75c95d0dd192483cbfdfd2
                </div>
            </div>
            <div className="right_part">
                <a href="#" className="login">Стоимость</a>
            </div>
        </header>
    )
}

export default Header;