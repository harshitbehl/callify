import React, { useEffect, useState } from "react";
import axios from "axios";
import CallsListItem from "../../components/callsListItem/CallsListItem";

import "./Calls.scss";

function Calls() {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getAllCalls = async () => {
      try {
        const res = await axios.get(
          "https://aircall-job.herokuapp.com/activities"
        );
        setCalls(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCalls();

    return () => {
      source.cancel("Previous Request Cancelled...");
    };
  }, [calls]);

  return (
    <div className="calls">
      {calls.map(
        (call) =>
          !call.is_archived && (
            <CallsListItem
              key={call.id}
              id={call.id}
              avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              type={call.call_type}
              direction={call.direction}
              from={call.from}
              to={call.to}
              date={new Date(call.created_at)}
            />
          )
      )}
    </div>
  );
}

export default Calls;
