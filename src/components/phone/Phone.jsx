import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsArchive } from "react-icons/bs";
import {
  BiMessageRoundedDetail,
  BiDialpad,
  BiUserCircle,
} from "react-icons/bi";
import { Routes, Route, Link } from "react-router-dom";
import Calls from "../../pages/calls/Calls";
import CallDetail from "../../pages/callDetail/CallDetail";
import Archive from "../../pages/archive/Archive";

import "./Phone.scss";

function Phone() {
  const [phoneHeader, setPhoneHeader] = useState("Callify");

  return (
    <div className="phone">
      <div className="phone__header">
        <h2 className="phone__header-text">{phoneHeader}</h2>
      </div>

      <div className="phone__toggle-container">
        <div className="phone__toggle-left">
          <Link to="/calls" onClick={() => setPhoneHeader("Calls")}>
            All
          </Link>
        </div>

        <div className="phone__toggle-right">
          <Link to="/archive" onClick={() => setPhoneHeader("Archive")}>
            Archive
          </Link>
        </div>
      </div>

      <div className="phone__pages-container">
        <Routes>
          <Route path="/calls" element={<Calls />} />
          <Route path="/call/:id" element={<CallDetail />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>

      <div className="phone__nav-container">
        <Link to="/calls">
          <IoCallOutline size="2.5rem" style={{ cursor: "pointer" }} />
        </Link>
        <BiMessageRoundedDetail size="2.5rem" style={{ cursor: "pointer" }} />
        <div className="phone__dialpad-icon">
          <BiDialpad size="2.8rem" />
        </div>
        <BiUserCircle size="2.5rem" style={{ cursor: "pointer" }} />
        <Link to="/archive">
          <BsArchive size="2.5rem" style={{ cursor: "pointer" }} />
        </Link>
      </div>
    </div>
  );
}

export default Phone;
