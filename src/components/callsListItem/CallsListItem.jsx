import React from "react";
import { Avatar } from "@material-ui/core";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import { MdCallMade, MdCallReceived } from "react-icons/md";
import moment from "moment";

import "./CallsListItem.scss";

function CallsListItem({ avatar, type, from, to, direction, date }) {
  return (
    <div className="callsListItem">
      <div className="callsListItem__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="callsListItem__info-container">
        <div className={`callsListItem__name ${type}`}>
          {direction === "outbound" ? from : to}
        </div>
        <div className="callsListItem__info">
          {direction === "outbound" ? <MdCallMade /> : <MdCallReceived />}
          <p className="callsListItem__info-date">
            {moment(date).format("MMM D YYYY, h:mmA")}
          </p>
        </div>
      </div>
      <div className="callsListItem__icons">
        <AiOutlineInfoCircle style={{ cursor: "pointer" }} size="2rem" />
        <BsArchive style={{ cursor: "pointer" }} size="2rem" />
      </div>
    </div>
  );
}

export default CallsListItem;
