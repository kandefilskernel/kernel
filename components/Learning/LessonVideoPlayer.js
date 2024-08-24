import React, { useEffect, useState } from "react";

const LessonVideoPlayer = ({ videoSrc }) => {
	const [src, setSrc] = useState(videoSrc);

	useEffect(() => {
		setSrc(videoSrc);
	}, [videoSrc]);
	return (
		<div className="video-content-box">
			<video key={src} width="100%" height="100%" controls>
				<source src={src && src} type="video/mp4" />
			</video>
		</div>
	);
};

export default LessonVideoPlayer;
