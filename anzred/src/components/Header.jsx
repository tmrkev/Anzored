import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Courses from '../Courses';




function Header() {
    return (
        <header>
            <div className="HeaderPcVersion">
                <div className="left_part">
                    <Link to="/"><img src="./icons/logo.svg" alt="" className="logo" /></Link>
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
            </div>
            <div className="HeaderMobileVersion">
                <Link to="/"><img src="./icons/logo.svg" alt="" className="logoMobile" /></Link>
                <div className="burgerMobile">
                    <img src="./icons/burgerIcon.svg" alt="" />
                </div>
            </div>
        </header>
    )
}

export default Header;