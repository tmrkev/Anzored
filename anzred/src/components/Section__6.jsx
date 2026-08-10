import React, { useState, useEffect } from 'react';
import CardMember from "./Card_member";
import Member_image from '../img/Member_image.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardsData = [
  { id: 1, image: Member_image, personne: 'Анзор Умаров', position: 'Генеральный директор' },
  { id: 2, image: Member_image, personne: 'Ваха Осмаев', position: 'Главный оператор' },
  { id: 3, image: Member_image, personne: 'Умар Байсагуров', position: 'Менеджер студии "Anzored"' },
  { id: 4, image: Member_image, personne: 'Ислам Нанаев', position: 'Режиссер монтажа' }
];

function Section6() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <section className="Section_6">
        <div className="container">
          <div className="content">
            <div className="top_text_section6_content">
              <h2 className="top_text_section6">Команда</h2>
            </div>
            
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              slidesPerGroup={2}
              breakpoints={{
                320: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
              }}
            >
              {CardsData.map((memberData) => (
                <SwiperSlide key={memberData.id}>
                  <CardMember CardMemberData={memberData} />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="Section_6">
      <div className="container">
        <div className="content">
          <div className="top_text_section6_content">
            <h2 className="top_text_section6">Команда</h2>
          <div className="arrows_container_section6">
            <img src="/icons/left.svg" alt="" className="arrow-left" />
            <img src="/icons/right.svg" alt="" className="arrow-right" />
          </div>
          </div>
          <div className="Members_section">
            <div className="Members_list">
              {CardsData.map((memberData) => (
                <CardMember key={memberData.id} CardMemberData={memberData} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Section6;