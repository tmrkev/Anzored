function Header() {
    return (
        <header>
            <div className="left_part">
                <img src="./icons/logo.svg" alt="" className="logo" />
                <div className="links">
                    <a href="/">Главная</a>
                    <a href="#">Услуги</a>
                    <a href="#">Курсы</a>
                    <a href="#">Проекты</a>
                    <a href="#">Контакты</a>
                </div>
            </div>
            <div className="right_part">
                <a href="#" className="login">Стоимость</a>
            </div>
        </header>
    )
}

export default Header;