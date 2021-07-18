import React from 'react';
// import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import { PermMedia } from '@material-ui/icons';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';

export const Share = () => {
  return (
    <div className="w-full h-3/12">
      <div className="p-2 divide-y divide-gray-500 flex flex-col gap-2">
        <div className="flex items-start gap-2 pb-2">
          <img
            className="w-14 h-14 rounded-full object-cover mr-3"
            src="https://material-ui.com/static/images/avatar/2.jpg"
            alt=""
          />
          <textarea
            placeholder="Wanna Share something"
            className="w-4/5 p-2 focus:outline-none focus:ring focus:border-blue-300 h-20"
          />
        </div>
        <div className="flex items-center justify-between gap-2 pt-4">
          <div className="flex gap-2">
            <div className="flex items-center cursor-pointer">
              <PermMedia htmlColor="tomato" className="text-lg mr-2" />
              <span className="font-medium text-sm">Photo or Video</span>
            </div>
            {/* <div className="flex items-center cursor-pointer">
              <Label htmlColor="blue" className="text-lg mr-2" />
              <span className="font-medium text-sm">Tag</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <Room htmlColor="green" className="text-lg mr-2" />
              <span className="font-medium text-sm">Location</span>
            </div>
            <div className="flex items-center cursor-pointer">
              <EmojiEmotions htmlColor="goldenrod" className="text-lg mr-2" />
              <span className="font-medium text-sm">Feelings</span>
            </div> */}
          </div>
          <Button
            variant="contained"
            color="primary"
            className=""
            endIcon={<ShareIcon />}>
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};
