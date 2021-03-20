import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import customer from "../images/customer.png";
const Cast = ({ cast, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {cast.length != 0 && (
        <StyledCast>
          <h2>Cast</h2>
          <StyledSlide {...settings}>
            {cast &&
              cast.map((person) => (
                <CastCard>
                  <div className="content">
                    {person.profile_path ? (
                      <img
                        src={`${images.base_url}original/${person.profile_path}`}
                        alt=""
                      />
                    ) : (
                      <img src={customer} alt="" />
                    )}
                    <Info>
                      <span style={{ color: "gray" }}>{person.name}</span>As
                      <span>{person.character}</span>
                    </Info>
                  </div>
                </CastCard>
              ))}
          </StyledSlide>
        </StyledCast>
      )}
    </>
  );
};
const StyledCast = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  h2 {
    font-size: 3rem;
    width: 100%;
    text-align: center;
    position: absolute;
  }
`;
const StyledSlide = styled(Slider)`
  padding: 8rem;
  @media (max-width: 950px) {
    padding: 5rem;
  }
`;
const CastCard = styled(Slider)`
  height: 100%;
  width: 100%;
  .content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      display: block;
      height: 50vh;
      width: 90%;
      border-radius: 1rem;
    }

    span {
      position: relative;
      width: 100%;
      font-size: 1.3rem;
      text-align: center;
    }
  }
`;
const Info = styled.div`
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default Cast;
