import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { MdCallReceived, MdCallMade } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineFieldTime } from "react-icons/ai";

import "./CallDetail.scss";

function CallDetail() {
  const params = useParams();
  const [callDetail, setCallDetail] = useState({});

  useEffect(() => {
    const getCallDetails = async () => {
      try {
        const res = await axios.get(
          `https://aircall-job.herokuapp.com/activities/${params.id}`
        );
        setCallDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCallDetails();
  }, [params.id]);
  console.log(callDetail);

  return (
    <div className="callDetail">
      <div className="callDetail__header">
        <Avatar
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          style={{ height: "8rem", width: "8rem" }}
        />
      </div>

      <div className="callDetail__list">
        <div className="callDetail__content">
          <div className="callDetail__list-title">From</div>
          <div className="callDetail__list-body">
            {callDetail.direction === "outbound"
              ? callDetail.from
              : callDetail.to}
          </div>
        </div>
        <IoCallOutline />
      </div>
      <div className="callDetail__list">
        <div className="callDetail__content">
          <div className="callDetail__list-title">Via</div>
          <div className="callDetail__list-body">{callDetail.via}</div>
        </div>
        <BsHouseDoor />
      </div>
      <div className="callDetail__list">
        <div className="callDetail__content">
          <div className="callDetail__list-title">Type</div>
          <div className="callDetail__list-body">
            {callDetail.direction === "inbound" ? "Incoming" : "Outgoing"}
          </div>
        </div>
        {callDetail.direction === "inbound" ? (
          <MdCallReceived />
        ) : (
          <MdCallMade />
        )}
      </div>
      <div className="callDetail__list">
        <div className="callDetail__content">
          <div className="callDetail__list-title">Call Type</div>
          <div className="callDetail__list-body">{callDetail.call_type}</div>
        </div>
        <IoCallOutline />
      </div>
      <div className="callDetail__list">
        <div className="callDetail__content">
          <div className="callDetail__list-title">Duration</div>
          <div className="callDetail__list-body">{callDetail.duration}s</div>
        </div>
        <AiOutlineFieldTime />
      </div>
    </div>
  );
}

export default CallDetail;
