import star from "./images/icons8_star_26px.png";
import fullstar from "./images/fullstar.png";

export const determineGenresHandler = (gener_ids, genres) => {
  let temp = [];
  for (let i = 0; i < gener_ids.length; i++) {
    for (let index = 0; index < { genres }.genres.length; index++) {
      if (gener_ids[i] === { genres }.genres[index].id) {
        temp[i] = { genres }.genres[index];
      }
    }
  }
  return temp;
};

export const starsHandler = (rate) => {
  let newRate = Math.ceil(rate / 2);
  let starArray = [];
  for (let i = 0; i < 5; i++) {
    if (i < newRate) {
      starArray.push(<img src={fullstar} alt={`${fullstar}${i}`}></img>);
    } else {
      starArray.push(<img src={star} alt={`${fullstar}${i}`}></img>);
    }
  }
  return starArray;
};
export const fillYears = () => {
  let date = new Date().getFullYear();
  let option = [];
  for (let i = parseInt(date); i >= 1900; i--) {
    option.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return option;
};
