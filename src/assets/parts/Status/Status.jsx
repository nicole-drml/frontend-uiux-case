import "./Status.scss";

import { BiSignal4 } from "react-icons/bi";
import { IoIosWifi } from "react-icons/io";
import { BsBatteryFull } from "react-icons/bs";
import { useEffect, useState } from "react";

const Status = () => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    
    function updateMilitaryTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString();
      const militaryTime = `${hours}:${minutes}`;
    
      setCurrentTime(militaryTime);
    }
    updateMilitaryTime();

    const interval = setInterval(updateMilitaryTime, 60000);
    
    return() => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div id="status-container">
      <span id="status-time">{currentTime}</span>
      <div id="status-symbols-container">
        <BiSignal4 className="icon"/>
        <IoIosWifi className="icon" id="wifi-icon" />
        <BsBatteryFull className="icon"/>
        {/* <div id="cellular">
                    <div className="cellular-bars"></div>
                    <div className="cellular-bars"></div>
                    <div className="cellular-bars"></div>
                    <div className="cellular-bars"></div>
                </div>
                <div id="wifi">
                    <div className="wifi-bars"></div>
                    <div className="wifi-bars"></div>
                    <div className="wifi-bars"></div>
                </div>
                <div id="battery">
                    <div id="battery-fill"></div>
                    <div id="battery-border"></div>

                    <div id="battery-positive-charge"></div>
                </div> */}
        {/*                 
                <div id="settings-data" className="settings-icon"></div>
                <div id="settings-wifi" className="settings-icon"></div>
                <div id="settings-battery" className="settings-icon"></div> */}
      </div>
    </div>
  );
};

export default Status;
