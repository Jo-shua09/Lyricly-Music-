const MusicVideo = ({ title }) => {
  return (
    <div className="flex items-start flex-col gap-y-5 my-16">
      <h2 className="font-bold font-poppins text-4xl">
        {title} {""}
        <span className="text-pink-600">video</span>
      </h2>
      <p className="text-xl font-semibold normal-case">
        No music video available
      </p>
    </div>
  );
};

export default MusicVideo;
