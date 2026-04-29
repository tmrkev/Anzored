import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Courses from '../Courses';

function Header() {
    return (
        <header>
            <div className="left_part">
                <img src="./icons/logo.svg" alt="" className="logo" to="/" />
                <div className="links">
                    <Link to="/" >Главная</Link>
                    <Link to="/" >Услуги</Link>
                    <Link to="/Courses" >Курсы</Link>
                    <Link to="/Projects" >Проекты</Link>
                    <Link to="/" >Контакты</Link>
                </div>
            </div>
            <div className="right_part">
                <a href="#" className="login">Стоимость</a>
            </div>
        </header>
    )
}

export default Header;