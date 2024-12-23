import {Course_Progress, Lesson } from "@/database/models";
import fs from "fs";
import matter from "gray-matter";

export default async function handler(req, res) {
	const { id, userId, courseId, courseSlug } = req.query;
	// console.log("###", req.query);

const fetchLessonContent = (slug, name, shortId) => {
		const path = "C:/fileserver/markdowns/";

		const file = `${path}${slug+"/"}${shortId+". "}${name}.md`;
		//const lessonSlug = "1_from_assessment_to_action_Agile_leadership";
		//const file = `${path}${slug+"/"}${lessonSlug}.md`;
		const content = fs.readFileSync(file, "utf8");
		const matterResult = matter(content);
		return matterResult;
	  };

	try {

		const lesson = await Lesson.findOne({ where: { id: id } });
		const content =  fetchLessonContent(courseSlug, lesson.title, lesson.short_id);

		console.log("====CONTENT===");
		console.log("Content:",content);

		if (lesson) {
			const progress = await Course_Progress.findOne({
				where: { userId: userId, courseId: courseId, lessonId: id },
			});
			if (!progress) {
				await Course_Progress.create({
					finished: true,
					userId,
					courseId,
					lessonId: id,
				});
			}
		}


		res.status(200).json({
			lesson,
			content,
		});
	} catch (e) {
		res.status(400).json({
			error_code: "get_lesson",
			message: e.message,
		});
	}
}
