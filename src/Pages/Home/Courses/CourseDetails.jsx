import { Link, useParams } from "react-router-dom";
import useCourse from "../../../Hooks/useCourse";
import useUser from "../../../Hooks/useUser";

const CourseDetails = () => {
  const { id } = useParams();
  const { course, courseLoading } = useCourse(id);
  const { courseIds , userLoading } = useUser();

  if (courseLoading || userLoading) {
    return <duv className="text-center">Loading...</duv>;
  }

  const isEnrolled = courseIds?.find(courseId => courseId === id) || null;

  const {
    _id,
    title,
    instructor,
    imageURL,
    syllabus,
    duration,
    price,
    enrollmentLastDate,
    enrollmentStartDate,
    description,
  } = course;

  return (
    <div className="card grid md:grid-cols-2 w-11/12 md:w-9/12 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src={imageURL}
          className=" w-full rounded-tl-xl rounded-tr-xl"
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{syllabus.map((item) => `${item}, `)}</p>
        <p>Duration: {duration}</p>
        <p>Instructor: {instructor}</p>
        <p>Description: {description}</p>
        <p>Enroll Start: {enrollmentStartDate}</p>
        <p>Last date: {enrollmentLastDate}</p>
        <p>Price: {price}</p>
        {
          !isEnrolled ?     <Link to={`/courseEnrollment/${_id}`}>
          <button className=" w-full bg-blue-600 text-white rounded-xl py-2">
            Enroll now
          </button>
        </Link>
        :
        <Link to={`/myClass/${_id}`}>
        <button className=" w-full bg-blue-600 text-white rounded-xl py-2">
           My Class
        </button>
      </Link>
        }
    
      </div>
    </div>
  );
};

export default CourseDetails;
