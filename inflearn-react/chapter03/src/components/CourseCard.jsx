import "./CourseCard.css";
import { string, arrayOf, number } from "prop-types";

function CourseCard({ img, tags, title, startPrice, types }) {
  return (
    <div className='course-card'>
      <div className='cover'>
        <img alt='' src={img} />
      </div>
      <div className='info'>
        <ul className='tags'>
          {tags.map((tag, idx) => (
            <li className='tag' key={idx}>
              {tag}
            </li>
          ))}
        </ul>
        <h4 className='name'>{title}</h4>
        <div className='prices'>
          <span className='start-price'>
            {startPrice.toLocaleString()}원부터
          </span>
        </div>
        <ul className='types'>
          {types.map((type, idx) => (
            <li className='type' key={idx}>
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  img: string.isRequired,
  tags: arrayOf(string),
  title: string.isRequired,
  startPrice: number.isRequired,
  types: arrayOf(string),
};

export default CourseCard;
