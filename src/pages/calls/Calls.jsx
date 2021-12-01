import React from "react";
import CallsListItem from "../../components/callsListItem/CallsListItem";

import "./Calls.scss";

function Calls() {
  return (
    <div className="calls">
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
    </div>
  );
}

export default Calls;
