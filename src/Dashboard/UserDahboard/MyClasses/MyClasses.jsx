import useContents from "../../../Hooks/useContents";

const MyClasses = () => {
  const { courseVideos, videoLoading } = useContents();

  if (videoLoading) {
    return <div className=" text-center">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Classes</h2>
      <div>
        {courseVideos.map((video) => (
          <div key={video._id} className="border-b py-4">
            <h3 className="text-lg font-semibold">{video.videoTitle}</h3>
            <iframe
              title={video.title}
              src={video.videoURL}
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              className="mt-2"
            ></iframe>
          </div>
        ))}
        {courseVideos.length === 0 && (
          <p className="text-gray-600">No class videos available.</p>
        )}
      </div>
    </div>
  );
};

export default MyClasses;
