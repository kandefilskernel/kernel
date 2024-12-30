import {Course_Progress, Lesson } from "@/database/models";
import generateContent  from "../../../../utilis/ContentHelper";

export default async function handler(req, res) {
	const { id, userId, courseId, courseSlug } = req.query;
	// console.log("###", req.query);

	try {

		const lesson = await Lesson.findOne({ where: { id: id } });
		const content =  generateContent(courseSlug, lesson.title, lesson.short_id);

		console.log("====CONTENT===");
		console.log("Content:",content);

		if (lesson) {
			const progress = await Course_Progress.findOne({
				where: { userId: userId, courseId: courseId, lessonId: id },
			});
			if (!progress) {
				await Course_Progress.create({
					finished: false,
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
