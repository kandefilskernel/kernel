import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";

const LessonTextPlayer = ({ textSrc, lesson, student }) => {
	const [src, setSrc] = useState(textSrc);
	const [selectedLesson, setSelectedLesson] = useState(lesson);
	const [currentStudent, setCurrentStudent] = useState(student);

	useEffect(() => {
		setSrc(textSrc);
		setSelectedLesson(lesson);
		setCurrentStudent(student);
	}, [textSrc]);

	console.log("====LESSON CONTENT 1 ===");
	console.log(" Lesson Content:", src);
	console.log("====LESSON CONTENT LESSON ===");
	console.log(" Lesson Content:", selectedLesson);
	console.log("====CURRENT USER ===");
	console.log( currentStudent);

	const updateProgrss = async () => {
		const payload = { id:selectedLesson.id, courseId:selectedLesson.courseId, userId:currentStudent.id };
		const url = `${baseUrl}/api/learnings/progress-update`;
		const response = await axios.put(url, payload);

		console.log("====UPDATED PROGRESS CLIENT ===");
		console.log(response.data);
		//setPro(response.data.courseProgress.length);
	};

	const onComplete = () => { updateProgrss();};

	return (
		<div>
			<div className="video-content-box">
				<div className="my-12 text-center">
					{src.data && (<h1 className="text-2xl text-slate-600 ">{src.data.title}</h1>)}
					{src.data && (<p className="text-slate-400 mt-2">{src.data.date}</p>)}
				</div>
				{src && (<Markdown>{src.content}</Markdown>)}

				<hr class="my-4"></hr>
			</div>
			
			<div class="d-flex justify-content-end">
					<button
						onClick={() => onComplete()}
						type="button"
						className="btn btn-primary btn-sm fs-12"
					>
						Mark as complete 
					</button>
			</div>
		</div>
	);
};

export default LessonTextPlayer;
