import React from 'react'
import '../css/footer.css'


export default function Footer() {
  return (
    <div className='footer'>
        <div className='foot-box'>
        <div className='sns-list'>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/instagram.png`} alt="insta" />
                <span>INSTAGRAM</span>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/blog.png`} alt="blog" />
                <span>BLOG</span>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/img/youtube.png`} alt="youtube" />
                <span>YOUTUBE</span>
            </div>
        </div>
        <div className='web-info'>
            <div>
                <ul className='footer-contact'>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/img/info_num.png`} alt="tel - 02-334-8901" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/img/info_fax.png`} alt="fax - 02-463-8398" />
                    </li>
                    <li>
                        <img src={`${process.env.PUBLIC_URL}/img/info_email.png`} alt="mail - master@ti-amo.co.kr" />
                    </li>
                </ul>
                <ul className='footer-gnb'>
                    <li><a href="">회사소개</a></li>
                    <li><a href="">가맹상담</a></li>
                    <li><a href="">개인정보처리방침</a></li>
                    <li><a href="">이메일무단수집거부</a></li>
                </ul>
                <div className='copyright'>
                    서울특별시 송파구 백제고분로 50길 44 2층 (주)베모스 대표이사 : 김성동   사업자등록번호 : 206-86-10982
                    <br />
                    copyright(c) 2016 TIAMO KOREA ALL RIGHTS RESERVED.
                </div>
            </div>
        </div>
        <div className='footer-logo'>
            <a href="">
                <img src={`${process.env.PUBLIC_URL}/img/logo_new.png`} alt="" />
            </a>
        </div>
        </div>
    </div>
  )
}
