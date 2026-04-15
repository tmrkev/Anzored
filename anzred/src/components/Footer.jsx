function Footer () {
    return ( 
        <section className="Footer">
            <hr className="line_up" />
            <div className="container">
                <div className="content">
                    <div className="footer_content">
                        <div className="logo_side">
                            <img src="./icons/logo.svg" alt="" />
                        </div>
                        <div className="contacts">
                            <h3 className="title_inner_footer">Контакты</h3>
                            <p className="rest_of_text_footer">Anzored@gmail.com </p>
                            <p className="rest_of_text_footer"> +7 (938) 000-08-90</p>
                        </div>
                        <div className="where_find">
                            <h3 className="title_inner_footer">Офис</h3>
                            <p className="rest_of_text_footer">ул. Назарбаева 11 </p>
                            <p className="rest_of_text_footer">г. Грозный</p>
                        </div>
                        <div className="social_media">
                            <h3 className="title_inner_footer">Подпишись</h3>
                            <div className="social_media_inner">
                                <img className="socials" src="./icons/Instagram.svg" alt="" />
                                <img className="socials" src="./icons/Telegram.svg" alt="" />
                                <img className="socials" src="./icons/Linkedin.svg" alt="" />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;