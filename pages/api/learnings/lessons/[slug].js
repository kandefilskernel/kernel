import { Lesson, Course } from "@/database/models";
import generateContent from "../../../../utilis/ContentHelper";

export default async function handler(req, res) {
	const { slug } = req.query;
	console.log(slug);

	try {
		const course = await Course.findOne({ where: { slug: slug } });
		if (course) {
			const lessons = await Lesson.findAll({
				order: [["short_id", "ASC"]],
				where: { courseId: course.id },
			});

			const initalContent = generateContent(slug, lessons[0].title, lessons[0].short_id);

			res.status(200).json({
				course,
				lessons,
				initalContent,
			});
		} else {
			res.status(200).json({
				lessons: [],
			});
		}
	} catch (e) {
		res.status(400).json({
			error_code: "get_lessons",
			message: e.message,
		});
	}
}
