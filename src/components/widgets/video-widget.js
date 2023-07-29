import { memo, useCallback, useContext, useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWidget = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {typeof window !== "undefined" && (
        <ModalVideo
          channel="custom"
          autoplay
          isOpen={isOpen}
          videoId="7"
          url={props.fullVideoUrl}
          onClose={() => setOpen(false)}
        />
      )}
      <a
        className="vid"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <video
          style={{ width: "100%" }}
          className="responsive-img"
          alt="Project"
          autoPlay
          muted
          loop
        >
          <source src={props.placeHolderVideoUrl} type="video/mp4"></source>
          <source src={props.placeHolderVideoUrl} type="video/ogg"></source>
          Your browser does not support the video tag.
        </video>
        <div className="valign-wrapper">
          <span className="font-weight-700 uppercase">Click to Play</span>
        </div>
      </a>
    </>
  );
};
export default memo(VideoWidget);
