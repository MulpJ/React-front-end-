// import Swiper core and required modules
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.css'
import rick from "./image/rick.jpg"
import inter from "./image/inter.jpg"
import hobbit from "./image/hobbit.jpg"
import mad from "./image/mad.jpg"
import { Link } from "react-router-dom";
import logo from "../tela de login/image/logo.png"
import it from './image/it.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function HomePage() {

  const [imgs ,Setimgs] = useState([])

  useEffect(() => {
    for (let i; i > 4; i++) {
      Setimgs('https://picsum.photos/1920/1080')
    }
  },[])

  return (
    <Swiper
    className='ma'
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{delay: 5000}}
     
    >
        <header className="header">
            <Link className="lon"to="/login">Entrar</Link>
             <img className="logo" src={logo}></img><p className="nome">MulpJ</p>
             <h1>Melhor Plataforma de Filmes e series</h1>
                <Link className="se" to="/cadastro" >Cadastre-se Agora</Link>
                <p className="desc">Filmes e series gratuitos!</p>   
        </header>
      <SwiperSlide>
          <img className='background' src={rick}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background'src={hobbit}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background'src={inter}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background' src={mad}/>
      </SwiperSlide>
      <SwiperSlide>
          <img className='background' src={it}/>
      </SwiperSlide>
    </Swiper>
  );
};