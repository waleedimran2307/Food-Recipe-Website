import React from "react";
import ViewDetails from "./ViewDetails";
import { useSelector } from "react-redux";
import MessageViewDetails from "./MessageViewDetails";

const Explore = () => {
  const details = useSelector((store) => store.viewdetails);
  return <>{details.length == 0 ? <MessageViewDetails /> : <ViewDetails />}</>;
};

export default Explore;
