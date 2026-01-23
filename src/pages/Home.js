import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    
    return (
        <>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/image1.jpg" class="d-block w-100" alt="Slide 1"/>
                    </div>

                    <div class="carousel-item">
                        <img src="/image2.jpg" class="d-block w-100" alt="Slide 2"/>
                    </div>
                </div>


                <button class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>


                <button class="carousel-control-next" type="button"
                    data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
              
            </div>
              
        </>
    )
}
export default Home;