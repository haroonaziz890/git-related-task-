import React, { forwardRef } from "react";

const VideoPlayer = forwardRef((props, ref) => {
  return (
    <video ref={ref} width="600" controls>
      <source
        src="C:/Full Stack Web Development/Projects/bootstrap/haroon a/home/src/Project4/Sec2/Video_2025-03-18_023037 (5).mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
});

export default VideoPlayer;
