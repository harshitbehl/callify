import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./CallDetail.scss";

function CallDetail() {
  const [callDetail, setCallDetail] = useState();

  const params = useParams();

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

  return (
    <div className="callDetail">
      <p>Call Detail</p>
    </div>
  );
}

export default CallDetail;
