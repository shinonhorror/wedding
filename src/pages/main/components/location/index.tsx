import * as S from './styled';
import location1 from '../../../../assets/images/location-1.png';
import location2 from '../../../../assets/images/location-2.png';
import location3 from '../../../../assets/images/location-3.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const LocationSection = () => {
  return (
    <S.Wrapper>
      <S.Title>Где тусить?</S.Title>
      <S.Description>
        Ресторан “Русская Рыбалка”, Приморское ш., д. 452А
      </S.Description>
      <S.Subtitle>Сбор гостей в 16:00</S.Subtitle>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      >
        <SwiperSlide>
          <img src={location1} alt="" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img src={location2} alt="" />
        </SwiperSlide>{' '}
        <SwiperSlide>
          <img src={location3} alt="" />
        </SwiperSlide>
      </Swiper>
      <S.Button
        onClick={() =>
          window.open('https://yandex.ru/maps/-/CHWeq-5c', '_blank')
        }
      >
        Посмотреть на карте
      </S.Button>
    </S.Wrapper>
  );
};

export default LocationSection;
