import { useEffect, useState } from "react";
import ActiveInspectionRequests from "./ActiveInspectionRequests";
import { BASE_URL } from "../../../utils/constants";


const inspectionData = [
  {
    title: "Electronics & Electrical Quality Assessment",
    location: "Bangalore, India",
    priority: "High",
    budget: 300,
    bids: 3,
    lowestBid: 100,
    timeLeft: "Expired",
  },
  {
    title: "Food & Beverage Quality Assessment",
    location: "Mumbai, India",
    priority: "Medium",
    budget: 1000,
    bids: 0,
    timeLeft: "Today",
  },
  {
    title: "Food & Beverage Quality Assessment",
    location: "Mumbai, India",
    priority: "Medium",
    budget: 1000,
    bids: 0,
    timeLeft: "Today",
  },
  {
    title: "Food & Beverage Quality Assessment",
    location: "Mumbai, India",
    priority: "Medium",
    budget: 1000,
    bids: 0,
    timeLeft: "Today",
  },
  {
    title: "Food & Beverage Quality Assessment",
    location: "Mumbai, India",
    priority: "Medium",
    budget: 1000,
    bids: 0,
    timeLeft: "Today",
  },
];

const BiddingRoom = () => {
  const [enquiryData,setEnquiryData]=useState("")
console.log(enquiryData)
  useEffect(()=>{
      getMyQueries()
  },[])
  
  const getMyQueries=async()=>{
      const response=await fetch(`${BASE_URL}/customer/my-enquiries`,{
          method:"GET",   
          credentials:"include",
      })
      const data=await response.json()
      setEnquiryData(data.enquiries)
      
  }

  return <div className="p-6 min-h-screen">
    <ActiveInspectionRequests requests={enquiryData} />
  </div>;
}
export default BiddingRoom;