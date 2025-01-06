import React from 'react';
import post1 from "../../assets/posts1.webp";
import post2 from "../../assets/Post2.jpg";
import post3 from "../../assets/posts3.jpg";
const LatestPosts = () => {
  const posts = [
    {
      image: post1 ,
      author: 'Alice Johnson',
      date: 'Jan 5, 2025',
      description: 'Crushing our latest workout session with a focus on core strength and explosive power! 💪 See the full routine in our latest post dont miss out on the burn',

    },
    {
      image: post2 ,
      author: 'Bob Smith',
      date: 'Jan 6, 2025',
      description: 'Achieving your dream physique isn’t just about lifting weights—it’s about lifting yourself to new heights. Be your own hero!',
    },
    {
      image: post3 ,
      author: 'Charlie Brown',
      date: 'Jan 7, 2025',
      description: 'Shape your body, sharpen your mind, and redefine what fitness means to you. The journey starts now!.Curves, cuts, and confidence—shape your body the way you want!',
    },
  ];

  return (
    <div>
    <h2 className="text-4xl font-bold m-8 text-center text-text-primary">
      Gym Latest Posts
    </h2>
    <div className="w-screen max-w-[1400px] mx-auto py-14 bg-third px-6 lg:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={post.image}
              alt="Post"
              className="w-full h-48 object-cover rounded-t"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <button className="bg-default text-white py-1 px-3 rounded hover:bg-blue-600">
                  {post.author}
                </button>
                <button className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600">
                  {post.date}
                </button>
              </div>
              <p className="text-text-secondary text-md">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default LatestPosts;
