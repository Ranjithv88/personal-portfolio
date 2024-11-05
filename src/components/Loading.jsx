import React from "react";
import "./style/Loading.scss";
import { motion } from "framer-motion";
import media from "../assets/media/BlackScreen-Loading.mp4";

function Loading() {
  return (
    <div className="LoadingOuter">
      <video className="media" autoPlay muted loop>
        <source src={media} type="video/mp4"></source>
      </video>
      <motion.div className="LoadingInner" initial={{ x: "-50%", y: "-50%" }} animate={{ rotate: 360 }} transition={{
        type: "spring", stiffness: 50, damping: 30, repeat: Infinity, repeatType: "loop"}} >
          <motion.div className="LoadingCenter" />
        </motion.div>
    </div>
  );
}
export default Loading;
