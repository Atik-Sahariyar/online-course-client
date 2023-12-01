import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddCourse = () => {
    const axiosSecure = useAxiosSecure();

    // course creation function
    const handleAddCourse = event => {
        event.preventDefault();
        const form = event.target;
        const courseTitle = form.title.value;
        const instructor = form.instructor.value;
        const enrollmentStartDate = form.enrollmentStartDate.value;
        const enrollmentLastDate = form.enrollmentLastDate.value;
        const syllabus = form.syllabus.value;
        const description = form.description.value;
        const duration = form.duration.value;
        
        const price = form.price.value;
        const imageURL = form.imageURL.value;

        const courseInfo = {
            courseTitle,
            instructor,
            enrollmentStartDate,
            enrollmentLastDate,
            syllabus,
            description,
            duration,
            price,
            imageURL
        }
        console.log( "Course Info: ", courseInfo); 
       try{  
        axiosSecure.post('/courses',courseInfo)
        .then(res => {
            console.log(res.data);
        })

       }catch(error){
        console.log(error);
       }
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Add a new course</h2>
        <form onSubmit={handleAddCourse}>
            {/* form name and quantity row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Course title</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="Course Title" className="input input-bordered w-full"  required/>
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="instructor" placeholder="Instructor Name" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            {/* form supplier row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Enrollment start date</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="enrollmentStartDate" placeholder="Enrollment start date" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Enrollment last date</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="enrollmentLastDate" placeholder="Enrollment last date" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Syllabus</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="syllabus" placeholder="syllabus" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            {/* form  url row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Course duration</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="duration" placeholder="Course duration" className="input input-bordered w-full" required />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
              {/* form Photo url row */}
              <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
            <input type="submit" value="Add Course" className="btn btn-block" />
        
        </form>
        </div>
    );
};

export default AddCourse;
