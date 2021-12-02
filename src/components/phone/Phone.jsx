import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { BsArchive } from "react-icons/bs";
import { BiMessageRoundedDetail, BiDialpad } from "react-icons/bi";
import { MdOutlineLoop } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom";
import Calls from "../../pages/calls/Calls";
import CallDetail from "../../pages/callDetail/CallDetail";
import Archive from "../../pages/archive/Archive";
import axios from "axios";

import "./Phone.scss";

function Phone() {
  const [phoneHeader, setPhoneHeader] = useState("Callify");
  const [pageToggleR, setPageToggleR] = useState(false);
  const [pageToggleL, setPageToggleL] = useState(true);

  const resetHandler = async () => {
    await axios.get("https://aircall-job.herokuapp.com/reset");
  };

  return (
    <div className="phone">
      <div className="phone__header">
        <h2 className="phone__header-text">{phoneHeader}</h2>
      </div>

      <div className="phone__toggle-container">
        <div className={`phone__toggle-left ${pageToggleL ? "active" : ""}`}>
          <Link
            to="/calls"
            onClick={() => {
              setPhoneHeader("Calls");
              setPageToggleL(true);
              setPageToggleR(false);
            }}
          >
            All
          </Link>
        </div>

        <div className={`phone__toggle-right ${pageToggleR ? "active" : ""}`}>
          <Link
            to="/archive"
            onClick={() => {
              setPhoneHeader("Archive");
              setPageToggleL(false);
              setPageToggleR(true);
            }}
          >
            Archive
          </Link>
        </div>
      </div>

      <div className="phone__pages-container">
        <Routes>
          <Route path="/" element={<Calls />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/call/:id" element={<CallDetail />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </div>

      <div className="phone__nav-container">
        <Link to="/calls">
          <IoCallOutline
            size="2.5rem"
            style={{ cursor: "pointer", color: "#03A9F4" }}
            onClick={() => setPhoneHeader("Calls")}
          />
        </Link>
        <BiMessageRoundedDetail
          size="2.5rem"
          style={{ cursor: "pointer", color: "#03A9F4" }}
        />
        <div className="phone__dialpad-icon">
          <BiDialpad size="2.8rem" style={{ color: "white" }} />
        </div>
        <MdOutlineLoop
          size="2.5rem"
          style={{ cursor: "pointer", color: "#03A9F4" }}
          onClick={resetHandler}
        />
        <Link to="/archive">
          <BsArchive
            size="2.5rem"
            style={{ cursor: "pointer", color: "#03A9F4" }}
            onClick={() => setPhoneHeader("Archive")}
          />
        </Link>
      </div>
    </div>
  );
}

export default Phone;
