import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";
const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1671186260~exp=1671186860~hmac=6097b60663fae9f1792afbc55c8ea1f0c1e88349f5aaba017bc09fecf2c0545e",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1671186260~exp=1671186860~hmac=6097b60663fae9f1792afbc55c8ea1f0c1e88349f5aaba017bc09fecf2c0545e",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1671186260~exp=1671186860~hmac=6097b60663fae9f1792afbc55c8ea1f0c1e88349f5aaba017bc09fecf2c0545e",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=826&t=st=1671186260~exp=1671186860~hmac=6097b60663fae9f1792afbc55c8ea1f0c1e88349f5aaba017bc09fecf2c0545e",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
