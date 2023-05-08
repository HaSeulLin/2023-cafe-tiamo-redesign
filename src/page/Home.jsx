import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../css/home.css'
import '../css/homebrand.css'
import EventSlider from '../components/EventSlider';
import MenuSlider from '../components/MenuSlider';

import { Pc, Mobile } from '../components/MobilePc'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import BrandScroll from '../components/BrandScroll';

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

const [ bannerImg, setBannerImg ] = useState('berry-gelato-main.png');
const [ bannerImgM, setBannerImgM ] = useState('berry-gelato-main-m.png');
const [ bannerPop, setBannerPop ] = useState('bomb-choco.png');
const [ backColor, setBackColor ] = useState('rgb(255, 190, 190)');
const [ flavorColor, setFlavorColor ] = useState('rgb(185, 233, 225)');
const [ gelatoFlavor, setGelatoFlavor ] = useState('Strawberry');

const bannerToggle = () => {
    if (bannerImg=='berry-gelato-main.png') {
        setBannerImg('choco-gelato-main.png');
        setBannerImgM('choco-gelato-main-m.png');
        setBannerPop('bomb-berry.png');
        setBackColor('rgb(255, 228, 181)');
        setFlavorColor('rgb(255, 190, 190)');
        setGelatoFlavor('Chocolate');
    }
    else if (bannerImg=='choco-gelato-main.png') {
        setBannerImg('berry-gelato-main.png');
        setBannerImgM('berry-gelato-main-m.png');
        setBannerPop('bomb-choco.png');
        setBackColor('rgb(255, 192, 188)');
        setFlavorColor('rgb(185, 233, 225)');
        setGelatoFlavor('Strawberry');
    }
};

return (
    <div className='home'>
        {/**    메인 배너 (1 scroll)     */}
        <Pc>
            <div className='main-banner' style={{marginTop:"200px"}}>
                <div className='main-back' style={{backgroundColor:`${backColor}`, transition:"all 0.3s"}}>
                    <div className='main-banner-text'>
                        <div className='text-title'>
                            <h2>Today's Gelato?</h2>
                        </div>
                        <div className='text-exp'>
                            <h3 style={{color:`${flavorColor}`, transition:"all 0.3s"}}>{gelatoFlavor}</h3>
                        </div>
                    </div>
                    <div className='main-banner-img-wrap'>
                        <img src={`${process.env.PUBLIC_URL}/img/${bannerImg}`} alt="오늘의 젤라또 딸기"/>
                    </div>
                    <div className='main-banner-text-pop'
                        onClick={()=>{bannerToggle()}}
                    >
                        <img src={`${process.env.PUBLIC_URL}/img/${bannerPop}`} alt="카페 띠아모" width={200} height={200}/>
                        <p>More Flavor</p>
                    </div>
                </div>
            </div>
        </Pc>
        <Mobile>
            <div className='main-banner' style={{marginTop:"80px"}}>
                    <div className='main-back-m' style={{backgroundColor:`${backColor}`, transition:"all 0.3s"}}>
                        <div className='text-title'>
                            <h2>Today's Gelato</h2>
                            <h3>{gelatoFlavor}</h3>
                        </div>
                        <div className='main-banner-img-wrap-m' style={{transition:"all 0.3s"}}>
                            <img src={`${process.env.PUBLIC_URL}/img/${bannerImgM}`} alt="오늘의 젤라또 딸기" />
                        </div>
                        <div className='main-banner-text-pop-m'
                            onClick={()=>{bannerToggle()}}
                        >
                            <img src={`${process.env.PUBLIC_URL}/img/${bannerPop}`} alt="카페 띠아모" width={200} height={200}/>
                            <p>More Flavor</p>
                        </div>
                    </div>
                </div>            
        </Mobile>

        {/**    이벤트/SNS 배너 (2 scroll)     */}
        <Pc>
            <div className='event-sns-banner'>
                <div className='event-slide-wrap'>
                    <div className='event-slide'>
                        <EventSlider />
                    </div>
                </div>
                <div>
                    <div className='event-sns-banner-text'>
                        <div className='fruits1-deco'>
                            <img src={`${process.env.PUBLIC_URL}/img/strawberry1.png`} alt=""/>
                            <img src={`${process.env.PUBLIC_URL}/img/strawberry2.png`} alt=""/>
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
        </Pc>
        <Mobile>
            <div className='event-sns-banner-m'>
                <div>
                    <div className='event-sns-banner-text-m'>
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
                        <div className='fruits2-deco'>
                            <img src={`${process.env.PUBLIC_URL}/img/strawberry_cul.png`} alt="" width={300}/>
                        </div>
                    </div>
                    <div className='event-slide-wrap-m'>
                        <div className='event-slide'>
                            <EventSlider />
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
        </Mobile>

        {/**    텍스트 애니메이션     */}
        <div className='text-animated'>
            <div className='track'>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT 
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco3.png`} width={50} height={50} alt="" />
                </p>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco3.png`} width={50} height={50} alt="" />
                </p>
                <p>GELATO. COFFEE. LATTE. TEA. BEVERAGE. DESSERT
                    <img src={`${process.env.PUBLIC_URL}/img/star_deco3.png`} width={50} height={50} alt="" />
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
        <BrandScroll />

        {/**    가맹점 안내 더보기     */}
        <div className='franchise-contact'>
            <div className='franchise-img-wrap-l'>
                <img src={`${process.env.PUBLIC_URL}/img/franchiseForte_left.png`} width={300} alt="" />
            </div>
            <div className='franchise-img-wrap-r'>
                <img src={`${process.env.PUBLIC_URL}/img/franchiseForte_right.png`} width={400} alt="" />
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
                            <img src={`${process.env.PUBLIC_URL}/img/gelato-news2.jpg`} width="250px" height="180px" alt="" />
                            <p style={{fontWeight:'bold'}}>'편리성+프리미엄' 2020년 외식시장 키워드 부상</p>
                            <span>2020.01.23</span>
                            <button className='news-more'>
                                <Link to="/news">MORE ⬇</Link>
                            </button>
                        </div>
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/gelato-news3.jpg`} width="250px" height="180px" alt="" />
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
        
    </div>
);}
