import "../Assets/CSS/TrendingQuiz.css"
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import { responsive } from "../Assets/Carousel_Settings/Trending_Carousel";
import { responsiveList } from "../Assets/Carousel_Settings/Trending_Carousel_List";
import "react-multi-carousel/lib/styles.css";
import TrendingQuizCard from "./TrendingQuizCard";





const TrendingQuiz = ({category,setCategory}) => {
    const [imageUrl, setImageUrl] = useState("30");
    const [activeCategory, setActiveCategory] = useState("30");

    const handleClick = (value) => {
        setCategory(value);
        setImageUrl(value);
        setActiveCategory(value);
      };
      

  return (
    <>
    <div className='Trending_Body'>

        <div className='Trending_Head'>
            <p>Trending Quizz</p>
        </div>

        <div className='Trending_List'>
        <Carousel responsive={responsiveList} arrows={false}>
        <div style={{minWidthwidth:"400px"}} className={activeCategory === "30" ? "Active" : ""} onClick={() => handleClick("30")}>
                        <div>Science</div>
                    </div>
        <div className={activeCategory === "23" ? "Active" : ""} onClick={() => handleClick("23")}>
                        History
                </div>
        <div className={activeCategory === "22" ? "Active" : ""} onClick={() => handleClick("22")}>
                        Geography
                    </div>

        <div className={activeCategory === "21" ? "Active" : ""} onClick={() => handleClick("21")}>
                        Sports
                    </div>
            <div className={activeCategory === "26" ? "Active" : ""} onClick={() => handleClick("26")}>
                        Celebrities
                    </div>
            <div className={activeCategory === "20" ? "Active" : ""} onClick={() => handleClick("20")}>
                        Mythology
                    </div>
            <div className={activeCategory === "11" ? "Active" : ""} onClick={() => handleClick("11")}>
                        Need More??
                    </div>
        </Carousel>
        </div>
        <div className="Trending_Carousel">
        `   <Carousel responsive={responsive}>
                <TrendingQuizCard
                    category={category}
                    Level = "Easy"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="MCQ"
                    Points="20"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Easy"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="True/False"
                    Points="20"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Medium"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="MCQ"
                    Points="40"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Medium"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="True/False"
                    Points="40"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Hard"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="MCQ"
                    Points="60"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Hard"
                    Number_of_Questions = "20"
                    imageUrl={imageUrl}
                    Type="True/False"
                    Points="60"
                    />
                <TrendingQuizCard
                    category={category}
                    Level = "Ninja"
                    Number_of_Questions = "30"
                    imageUrl={imageUrl}
                    Type="MCQ"
                    Points="80"
                    />
               
       
            </Carousel>
        </div>
                  
    </div>
    </>
  )
}

export default TrendingQuiz
