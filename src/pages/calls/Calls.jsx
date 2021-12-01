import React from "react";
import CallsListItem from "../../components/callsListItem/CallsListItem";

import "./Calls.scss";

function Calls() {
  return (
    <div className="calls">
      <CallsListItem
        avatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        type="voicemail"
        direction="outbound"
        from="Harshit Behl"
        to="dfdf"
        date={new Date("2018-04-18T16:59:48.000Z")}
      />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
      <CallsListItem />
    </div>
  );
}

export default Calls;
