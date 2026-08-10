import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Импортируем только базовые стили
import 'swiper/css';

const TeamCarousel = () => {
  // Твои данные. Добавь сюда остальных членов команды
  const teamMembers = [
    { id: 1, name: 'Анзор Умаров', role: 'Генеральный Директор', img: 'путь/к/фото1.jpg' },
    { id: 2, name: 'Анзор Умаров', role: 'Генеральный Директор', img: 'путь/к/фото2.jpg' },
    { id: 3, name: 'Иван Иванов', role: 'Менеджер проектов', img: 'путь/к/фото3.jpg' },
    { id: 4, name: 'Петр Петров', role: 'Технический Директор', img: 'путь/к/фото4.jpg' },
  ];

  return (
    // Обертка с темным фоном (цвет подберешь под свой дизайн)
    <div style={{ backgroundColor: '#0d0d0d', padding: '40px 20px', color: '#fff' }}>
      
      <h2 style={{ fontSize: '32px', marginBottom: '30px', fontWeight: 'bold' }}>Команда</h2>

      <Swiper
        spaceBetween={20} // Расстояние между карточками (20px)
        slidesPerView={2} // Показывать 2 карточки
        slidesPerGroup={2} // Листать сразу по 2 карточки
        grabCursor={true} // Показывает курсор-"руку" на ПК, намекая на свайп
        
        // Адаптивность для телефонов
        breakpoints={{
          // На очень маленьких экранах (мобилки) лучше показывать по 1 карточке
          320: {
            slidesPerView: 1.1, // 1 целая карточка и краешек следующей, чтобы было понятно, что можно листать
            slidesPerGroup: 1,
            spaceBetween: 15,
          },
          // На экранах побольше (планшеты и ПК) возвращаем по 2 карточки
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
        }}
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            {/* Сама карточка (стилизуй под свой макет) */}
            <div style={{
              backgroundColor: '#141414', // Темно-серый фон карточки
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
                  height: '300px', // Высота картинки
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