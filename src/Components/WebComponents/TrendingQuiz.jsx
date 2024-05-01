import "../../Assets/CSS/TrendingQuiz.css"
import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import { responsive } from "../../Assets/Carousel_Settings/Trending_Carousel";
import { responsiveList } from "../../Assets/Carousel_Settings/Trending_Carousel_List";
import "react-multi-carousel/lib/styles.css";
import TrendingQuizCard from "./TrendingQuizCard";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";





const TrendingQuiz = ({ category, setCategory, userStatus }) => {
    const [imageUrl, setImageUrl] = useState("19");
    const [activeCategory, setActiveCategory] = useState("19");
    const navigate = useNavigate();

    const homeCategories = [
        { id: "19", name: "Science" },
        { id: "23", name: "History" },
        { id: "22", name: "Geography" },
        { id: "21", name: "Sports" },
        { id: "26", name: "Celebrities" },
        { id: "20", name: "Mythology" },
    ];


    const handleClick = (value) => {
        setCategory(value);
        setImageUrl(value);
        setActiveCategory(value);
    };




    return (
        <>
            <div>
                <Navigation userStatus={userStatus} />
                <div className='Trending_Body'>

                    <div className='Trending_Head'>
                        <p>Trending Quizz</p>
                    </div>

                    <div className='Trending_List'>
                        <Carousel responsive={responsiveList} arrows={false} className="List_Headings">
                            {homeCategories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className={`carousel-item ${activeCategory === cat.id ? "Active" : ""}`}
                                    onClick={() => handleClick(cat.id)}
                                    style={{ Width: `200px`, textAlign: "center" }}
                                >
                                    {cat.name}
                                </div>
                            ))}
                            <div className={`carousel-item ${activeCategory === "11" ? "Active" : ""}`} onClick={() => { navigate("/cus") }}>
                                Need More??
                            </div>
                        </Carousel>
                    </div>
                    <div className="Trending_Carousel">
                        `   <Carousel responsive={responsive}>
                            <TrendingQuizCard
                                category={category}
                                Level="easy"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_1`}
                                Type="multiple"
                                Points="10"
                            />
                            <TrendingQuizCard
                                category={category}
                                Level="medium"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_3`}
                                Type="multiple"
                                Points="20"
                            />
                            <TrendingQuizCard
                                category={category}
                                Level="hard"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_5`}
                                Type="multiple"
                                Points="30"
                            />
                            <TrendingQuizCard
                                category={category}
                                Level="easy"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_2`}
                                Type="boolean"
                                Points="10"
                            />
                            <TrendingQuizCard
                                category={category}
                                Level="medium"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_4`}
                                Type="boolean"
                                Points="20"
                            />
                            <TrendingQuizCard
                                category={category}
                                Level="hard"
                                Number_of_Questions="10"
                                imageUrl={`${imageUrl}_6`}
                                Type="boolean"
                                Points="30"
                            />


                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingQuiz
