import React from "react";
import { secondsToHms } from "@/utils/helper";

const LessonText = ({
	id,
	title,
	short_id,
	onPlay,
	activeClass,
}) => {
	return (
		<li
			className={activeClass === id ? "active" : ""}
			onClick={() => onPlay(id)}
		>
			{short_id}. {title}
			<span className="d-block text-muted fs-13 mt-1">
				<i className="bx bx-play-circle"></i><i className="bx bx-task"></i>{" "}
				{}
			</span>
		</li>
	);
};

export default LessonText;
