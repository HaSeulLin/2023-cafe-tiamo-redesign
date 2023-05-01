import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/home.css'
import EventSlider from '../components/EventSlider';
import MenuSlider from '../components/MenuSlider';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

export default function Home() {

/** 스크롤 애니메이션 설정 */
const [scrollPosition, setScrollPosition] = useState(0);
const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
}
useEffect(()=>{
    window.addEventListener('scroll',updateScroll);
});

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

return (
    <div className='home'>
        <ScrollContainer>
        {/**    메인 배너 (1 scroll)     */}
        <div className='main-back'>
            <ScrollPage>
                <Animator animation={batch(Fade(), Sticky(10,20), MoveOut(0, -100))}>
                    <div className='back-img-wrap-m2'>
                        <img src={`${process.env.PUBLIC_URL}/img/back-gelato-inverse.png`} width={1600} alt="" />
                    </div>
                    <div className='main-banner'>
                        <div className='main-banner-text'>
                            <div className='text-bookmark-wrap-l'>
                                <div className='text-title-l'>
                                    <h2>CAFE TIAMO</h2>
                                    <h2 className='title-2'>CAFE TIAMO</h2>
                                    <h2 className='title-3'>CAFE TIAMO</h2>
                                </div>
                            </div>
                            <div className='text-bookmark-wrap-m'>
                                <div className='text-title-m'>
                                    <h3>Coffee & Gelato</h3>
                                    <h3 className='title-2'>Coffee & Gelato</h3>
                                </div>
                            </div>
                            <div className='text-bookmark-wrap-r'>
                                <div className='text-title-r'>
                                    <h2>Today's Gelato</h2>
                                    <h2 className='title-2'>Today's Gelato</h2>
                                    <h2 className='title-3'>Today's Gelato</h2>
                                    <h3>Strawberry</h3>
                                    <h3 className='title-4'>Strawberry</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>
            <div className='main-banner-img-wrap'>
                <img src={`${process.env.PUBLIC_URL}/img/toDayJelato2.png`} alt="오늘의 젤라또 딸기" />
            </div>
            <div className='main-banner-text-pop'>
                <img src={`${process.env.PUBLIC_URL}/img/smooth-bomb1.png`} alt="카페 띠아모" width={200} height={200}/>
                <p>More Flavor</p>
            </div>
        </div>


        {/**    이벤트/SNS 배너 (2 scroll)     */}
        <div className='event-sns-banner'>
            <div className='event-slide-wrap'>
                <div className='event-slide'>
                    <EventSlider />
                </div>
            </div>
            <div>
                <div className='event-sns-banner-text'>
                    <div className='fruits1-deco'>
                        <img src={`${process.env.PUBLIC_URL}/img/strawberry.png`} alt=""/>
                    </div>
                    <div className='fruits2-deco'>
                        <img src={`${process.env.PUBLIC_URL}/img/strawberry_cul.png`} alt="" width={300}/>
                    </div>
                    <div className='event-title'>
                        <div>
                            <h2>SO</h2>
                            <h2>SWEET</h2>
                            <h2>DELICIOUS</h2>
                        </div>
                        <div>
                            <h2>SO</h2>
                            <h2>SWEET</h2>
                            <h2>DELICIOUS</h2>
                        </div>
                    </div>
                    
                    <div className='sns-icon'>
                        <div>
                            <a href="">
                                <img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="insta" />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="/img/blog.png" alt="blog" />
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <img src="/img/youtube.png" alt="youtube" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='sns-img'>
                    <div className='insta-img1'>
                        <img src="/img/jelatosns1.jpg" alt="instagram-img" />
                        <img src="/img/jelatosns2.jpg" alt="instagram-img" />
                    </div>
                    <div className='insta-img2'>
                        <img src="/img/jelatosns3.jpg" alt="instagram-img" />
                        <img src="/img/jelatosns4.jpg" alt="instagram-img" />
                    </div>
                </div>
            </div>
        </div>
        
        {/**    텍스트 애니메이션     */}
        <div className='text-animated'>
            <div className='track'>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT 
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco1.png`} width={50} height={50} alt="" />
                </p>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco1.png`} width={50} height={50} alt="" />
                </p>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco1.png`} width={50} height={50} alt="" />
                </p>
            </div>
        </div>

        {/**    메뉴 소개 (3 scroll)     */}
        <div className='menu'>
            <h2>MENU</h2>
            <p style={{fontWeight:'bold'}}>매장에서 직접 만드는 고급 수제 아이스크림</p>
            <p style={{fontWeight:'bold'}}>국내 디저트카페 장수브랜드 카페띠아모</p>
            <div className='menu-img-boxs'>
                <MenuSlider />
            </div>
        </div>

        {/**    띠아모 브랜드 소개     */}
        <div>

        </div>

        {/**    가맹점 안내 더보기     */}
        <div className='franchise-contact'>
            <div className='franchise-img-wrap-l'>
                <img src={`${process.env.PUBLIC_URL}/img/franchiseForte_left.png`} width={300} alt="" />
            </div>
            <div className='franchise-img-wrap-r'>
                <img src={`${process.env.PUBLIC_URL}/img/franchiseForte_right.png`} width={400} alt="" />
            </div>
            <div className='back-img-wrap-m'>
                <img src={`${process.env.PUBLIC_URL}/img/back-gelato.png`} width={1200} alt="" />
            </div>
            <div className='franchise-text'>
                <h2>CONTACT</h2>
                <p style={{fontWeight:'bold'}}>카페띠아모와 함께 걸어가실 가맹 점주님을 모십니다.</p>
                <a href="./page/Franchise">MORE+</a>
            </div>
        </div>

        {/**    공지 사항 / 뉴스     */}
        <div className='nn-section'>
            <div className='notice-news'>
                <div className='notice'>
                    <h2>NOTICE</h2>
                    <div>
                        <div>
                            <p style={{fontWeight:'bold', margin:"0"}}>띠아모 영양성분 및 알레르기 유발 식품 안내</p>
                            <span>2023.04.02</span>
                        </div>
                        <div><a href="./page/Community"> MORE ➡ </a></div>
                    </div>
                    <div>
                        <div>
                            <a href="./page/Community" style={{fontWeight:'bold'}}>무인카페 론칭 '스마트띠아모'</a>
                            <br /><span>2023.01.09</span>
                        </div>
                        <div><a href="./page/Community"> MORE ➡ </a></div>
                    </div>
                    <div>
                        <div>
                            <a href="./page/Community" style={{fontWeight:'bold'}}>제주공항1호점(국제선), 제주공항2호점 (국내선) 입점 확정</a>
                            <br /><span>2022.11.29</span>
                        </div>
                        <div><a href="./page/Community"> MORE ➡ </a></div>
                    </div>
                </div>
                <div className='news'>
                    <h2>NEWS</h2>
                    <div className='news-list'>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/gelato-news1.jpg`} width="250px" height="180px" alt="" />
                            <p style={{fontWeight:'bold'}}>'작은매장에 배달 더한다' 바뀌는 소비자 니즈에 외식업계 변화</p>
                            <span>2019-03-17</span>
                            <button className='news-more'>
                                <Link to="/news">MORE ⬇</Link>
                            </button>
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/gelato-news1.jpg`} width="250px" height="180px" alt="" />
                            <p style={{fontWeight:'bold'}}>'편리성+프리미엄' 2020년 외식시장 키워드 부상</p>
                            <span>2020.01.23</span>
                            <button className='news-more'>
                                <Link to="/news">MORE ⬇</Link>
                            </button>
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/gelato-news1.jpg`} width="250px" height="180px" alt="" />
                            <p style={{fontWeight:'bold'}}>[대박창업] 불황창업 ‘창업자 선택·의지가 성공 열쇠’</p>
                            <span>2020.10.26</span>
                            <button className='news-more'>
                                <Link to="/news">MORE ⬇</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </ScrollContainer>
    </div>
);}
