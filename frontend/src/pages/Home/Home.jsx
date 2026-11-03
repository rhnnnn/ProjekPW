import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

    const [categories, setCategories] = useState("All") ;
  return (
    <div>
        <Header />
        <ExploreMenu category={categories} setCategory={setCategories} />
        <FoodDisplay category={categories} />
        <AppDownload />
    </div>
  )
}

export default Home