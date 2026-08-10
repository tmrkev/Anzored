import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const TeamCarousel = () => {
 
  const teamMembers = [
    { id: 1, name: 'Анзор Умаров', role: 'Генеральный Директор', img: 'путь/к/фото1.jpg' },
    { id: 2, name: 'Анзор Умаров', role: 'Генеральный Директор', img: 'путь/к/фото2.jpg' },
    { id: 3, name: 'Иван Иванов', role: 'Менеджер проектов', img: 'путь/к/фото3.jpg' },
    { id: 4, name: 'Петр Петров', role: 'Технический Директор', img: 'путь/к/фото4.jpg' },
  ];

  return (

    <div style={{ backgroundColor: '#0d0d0d', padding: '40px 20px', color: '#fff' }}>
      
      <h2 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 'bold' }}>Команда</h2>

      <Swiper
        spaceBetween={20} 
        slidesPerView={2} 
        slidesPerGroup={2}
        grabCursor={true} 
        
      
        breakpoints={{
          320: {
            slidesPerView: 1.1, 
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
        }}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div style={{
              backgroundColor: '#141414', 
              borderRadius: '12px',
              border: '1px solid #222',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBottom: '20px'
            }}>
              <img 
                src={member.img} 
                alt={member.name} 
                style={{ 
                  width: '100%', 
                  height: '300px',
                  objectFit: 'cover', 
                  marginBottom: '20px' 
                }} 
              />
              <h3 style={{ fontSize: '18px', margin: '0 0 5px 0', fontWeight: '600' }}>
                {member.name}
              </h3>
              <p style={{ color: '#888', margin: 0, fontSize: '14px' }}>
                {member.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;