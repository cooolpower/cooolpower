"use client";

import Image from 'next/image';
import Link from 'next/link';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper.css';
import style from './banner.module.css';
import { useState } from 'react';

const banner = [
  {
    id: 1,
    image: "https://file1.jobkorea.co.kr/OnePickSpaceBanner/202403/36_3_PC_LBWGAGb.png",
    alt: "대한민국 대표 교육기업 메가스터디교육",
    link: "/Recruit/GI_Read/44201334",
  },
  {
    id: 2,
    image: "https://file1.jobkorea.co.kr/OnePickSpaceBanner/202403/40_3_PC_gq8lPUR.png",
    alt: "전기전자솔루션 일류기업 한솔테크닉스(주)",
    link: "/Recruit/Co_Read/Recruit/C/199699?ChkDispType=1",
  },
  {
    id: 3,
    image: "https://file1.jobkorea.co.kr/OnePickSpaceBanner/202403/38_3_PC_6mp2N4d.png",
    alt: "세계일류상품 인증기업 제4기한국",
    link: "/Recruit/GI_Read/44201334",
  },
]


export default function Banner() {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev();
  }
  const handleNext = () => {
    swiper?.slideNext();
  }
  console.log(swiper);
  return (
    <div className={style.headBannerWrap}>
      <Swiper
        onSwiper={(swiper) => {setSwiper(swiper)}}
        className="head-banner-swiper"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={0}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log('slide change')}
      > 
        {banner.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link href={slide.link} target="_blank">
              <Image src={slide.image} alt={slide.alt} width={1240} height={200} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type='button' className={style.swiperButtonPrev} onClick={handlePrev}></button>
      <button type='button' className={style.swiperButtonNext} onClick={handleNext}></button>
    </div>
  )
}
