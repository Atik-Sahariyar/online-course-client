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
 console.log(courseIds);
  // const isEnrolled = courseIds?.find(id === id)
  // console.log(isEnrolled);

  const {
    _id,
    title,
    instructor,
    image_url,
    syllabus,
    duration,
    price,
    description,
  } = course;

  return (
    <div className="card grid md:grid-cols-2 w-11/12 md:w-9/12 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src={image_url}
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
        <p>Price: {price}</p>
        <Link to={`/courseEnrollment/${_id}`}>
          <button className=" w-full bg-blue-600 text-white rounded-xl py-2">
            Enroll now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
