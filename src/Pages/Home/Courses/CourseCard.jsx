import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {

    const {id, title, instructor,  image_url,syllabus, duration } = course;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image_url} className=' h-[220px] w-96 rounded-tl-xl rounded-tr-xl' alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{syllabus.map(item => `${item}, `)}</p>
          <p>Duration: {duration}</p>
          <p>Instructor: {instructor}</p>
           <Link to={`/courseDetails/${id}`}>
           <button className=' w-full bg-blue-600 text-white rounded-xl py-2'>Details</button>
           </Link>
         </div>
      </div>
    );
};
CourseCard.propTypes = {
    course: PropTypes.object
}
export default CourseCard;