import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const LessonTextPlayer = ({ textSrc }) => {
	const [src, setSrc] = useState(textSrc);
	
		useEffect(() => {
			setSrc(textSrc);
		}, [textSrc]);
		
		console.log("====LESSON CONTENT 1 ===");
		console.log(" Lesson Content:",src);

		console.log("====LESSON CONTENT 2===");
		console.log(" Lesson Content:",textSrc);

		return (
			<div className="video-content-box">
				<div className="my-12 text-center">
					{src.data && (<h1 className="text-2xl text-slate-600 ">{src.data.title}</h1>)}
					{src.data && (<p className="text-slate-400 mt-2">{src.data.date}</p>)}
				</div>
				{src && (<Markdown>{src.content}</Markdown>)}
				
			</div>
		);
};

export default LessonTextPlayer;
