import {StarFill, StarHalf, Star} from "react-bootstrap-icons";

const Card = ({image,title , author, rating, price}) => {

  const fullstars = Math.floor(rating);
  const halfstars = rating-fullstars;
  const emptystars = Math.floor(5-rating);
  const starsarray = [];
  for(let i=0; i<fullstars;i++){
    starsarray.push(<StarFill/>)
  }
  for(let i=0; i<halfstars;i++){
    starsarray.push(<StarHalf/>)
  }
  for(let i=0; i<emptystars;i++){
    starsarray.push(<Star/>)
  }

  return (
    <div className="card">
      <img src={image} alt=""/>
      <p className="title">{title}</p>
      <p className="author">{author}</p>
      <div className="rating">
      {starsarray}
      </div>
      <p className="price">{"₹"+price}</p>
    </div>
  )
}

export default Card;
