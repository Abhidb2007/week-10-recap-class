const VIDEOS = [
  {
    title: "how to learn in coding | code with me",
    author: "Abhay",
    views: "12m",
    image: "photo.jpg",
    timestamp: "2 days to go",
  },
  {
    title: "how to swimm in coding | code with me",
    author: "Abhay",
    views: "12m",
    image: "photo.jpg",
    timestamp: "2 days to go",
  },
  {
    title: "how to jumping in coding | code with me",
    author: "Abhay",
    views: "12m",
    image: "photo.jpg",
    timestamp: "2 days to go",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {VIDEOS.map((video, index) => (
        <div key={index}>
          <VideoCard
            title={video.title}
            author={video.author}
            image={video.image}   {/* ✅ fixed */}
            views={video.views}
            timestamp={video.timestamp}
          />
        </div>
      ))}
    </div>
  );
};
