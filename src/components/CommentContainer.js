import React from "react";

const commentData = [
  {
    name: "Urvish Shiroya",
    text: "lorem lorem this is a comment ",
    replies: [],
  },
  {
    name: "Urvish Shiroya",
    text: "lorem lorem this is a comment ",
    replies: [
      {
        name: "Urvish Shiroya",
        text: "lorem lorem this is a comment ",
        replies: [],
      },
      {
        name: "Urvish Shiroya",
        text: "lorem lorem this is a comment ",
        replies: [
          {
            name: "Urvish Shiroya",
            text: "lorem lorem this is a comment ",
            replies: [],
          },
          {
            name: "Urvish Shiroya",
            text: "lorem lorem this is a comment ",
            replies: [
              {
                name: "Urvish Shiroya",
                text: "lorem lorem this is a comment ",
                replies: [
                  {
                    name: "Urvish Shiroya",
                    text: "lorem lorem this is a comment ",
                    replies: [
                      {
                        name: "Urvish Shiroya",
                        text: "lorem lorem this is a comment ",
                        replies: [
                          {
                            name: "Urvish Shiroya",
                            text: "lorem lorem this is a comment ",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Urvish Shiroya",
    text: "lorem lorem this is a comment ",
    replies: [],
  },
  {
    name: "Urvish Shiroya",
    text: "lorem lorem this is a comment ",
    replies: [],
  },
  {
    name: "Urvish Shiroya",
    text: "lorem lorem this is a comment ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-10 rounded-full"
        alt="user"
        src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  //dont use index as key this is just for refrence here..
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-5 m-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
