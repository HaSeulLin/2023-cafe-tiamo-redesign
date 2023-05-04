import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper";

export default function BrandScroll() {


  return (
    <div className='brand'>
        <div className='brand-scroll'>
            <Swiper
                direction={"horizontal"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='section-one'>
                        <div className='brand-img1 slide-img'></div>
                        <div className='brand-img2 slide-img'></div>
                        <div className='brand-text'>
                            <h2>당신의</h2>
                            <h2>사랑방</h2>
                            <p>
                                ‘띠아모’는 이탈리아어로 ‘너를 사랑해’라는 뜻으로,
                                카페 띠아모는 사랑하는 연인, 가족, 친구들이 모여 앉아 잊지 못할 시간을 보냈으면 하는 마음에서 출발했습니다.
                            </p>
                            <p>
                                ‘사랑방’은 예부터 귀한 손님을 대접하고 소중한 추억을 나누는 공간이었습니다.
                                이에 카페 띠아모도 사랑방 역할에 충실하기 위해 건강한 음식과 안락한 공간을 제공합니다.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section-two'>
                        <div className='brand-img1 slide-img'></div>
                        <div className='brand-text'>
                            <h2>젤라또라는 특별함</h2>
                            <p>
                                카페 띠아모는 이탈리아에서 유래된 100년 전통의 아이스크림 ‘젤라또’를 카페에 접목해 특별함을 더합니다.
                            </p>
                        </div>
                        <div className='brand-img2 slide-img'></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section-three'>
                        <div className='brand-text'>
                            <h2>띠아모가 특별한 이유</h2>
                        </div>
                        <div className='brand-imgs'>
                            <div>
                                <div className='brand-img1 slide-img' />
                                <p>Homemade</p>
                            </div>
                            <div>
                                <div className='brand-img2 slide-img' />
                                <p>Health</p>
                            </div>
                            <div>
                                <div className='brand-img3 slide-img' />
                                <p>Delicious</p>
                            </div>
                            <div>
                                <div className='brand-img4 slide-img' />
                                <p>Fresh</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='section-four'>
                        <div className='brand-text'>
                            <h2>늘 "처음처럼" 함께 하고 싶은</h2>
                        </div>
                        <div>
                            <div className='brand-imgs'>
                                <div className='brand-img1 slide-img'>
                                </div>
                                <p>최고의 품질을 추구하는 기업</p>
                            </div>
                            <div className='brand-imgs'>
                                <div className='brand-img2 slide-img'>
                                </div>
                                <p>최상의 서비스를 제공하려는 기업</p>
                            </div>
                            <div className='brand-imgs'>
                                <div className='brand-img3 slide-img'>
                                </div>
                                <p>고객만족을 우선으로 하는 기업</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    );
}
