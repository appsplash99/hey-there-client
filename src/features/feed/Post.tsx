// TODO: change later, currently not being used
import React, { useState } from 'react';
import { MoreVert } from '@material-ui/icons';
// import { Users } from '../../utils/dummyData';
// import { IPost } from '../../interfaces';

// TODO: CHange any
export const Post: React.FC<{ post: any }> = ({ post }) => {
  const [like, setLike] = useState(post.likes?.length);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    if (like) setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {/* <img
              className="postProfileImg"
              src={Users.filter((u) => String(u._id) === post?.userId)[0].profilePicture}
              alt=""
            /> */}
            <span className="postUsername">
              {/* {Users.filter((u) => String(u._id) === post?.userId)[0].username} */}
            </span>
            <span className="postDate">{'post.date'}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/*  eslint-disable  */}
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            {/*  eslint-disable  */}

            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{`post.comment`} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
