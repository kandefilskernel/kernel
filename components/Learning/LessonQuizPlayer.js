import React, { useEffect, useState } from "react";

const LessonQuizPlayer = ({ quizSrc }) => {
	const [src, setSrc] = useState(quizSrc);

	useEffect(() => {
		setSrc(quizSrc);
	}, [quizSrc]);
	return (
		<div className="video-content-box">
			
		</div>
	);
};

export default LessonQuizPlayer;
