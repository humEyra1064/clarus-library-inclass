import React from 'react'
import Header from '../../components/header/Header'
import { HomeContainer, HomeImg } from './Home.style'
import homeImg from "../../assets/books.jpg";

const Home = () => {
  return (
    <HomeContainer>
<Header/>
<HomeImg>
  <img src={homeImg} alt="" />
</HomeImg>


    </HomeContainer>
  )
}

export default Home