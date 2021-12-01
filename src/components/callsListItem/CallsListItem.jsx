import React from "react";
import { Avatar } from "@material-ui/core";
import { IoCallOutline } from "react-icons/io5";
import { BsArchive } from "react-icons/bs";

import "./CallsListItem.scss";

function CallsListItem() {
  return (
    <div className="callsListItem">
      <Avatar />
      <div className="callsListItem__info">
          
      </div>
      <IoCallOutline />
      <BsArchive />
    </div>
  );
}

export default CallsListItem;
