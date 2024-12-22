import { Lesson, Course } from "@/database/models";

export default async function handler(req, res) {
	const { slug } = req.query;
	console.log(slug);
	try {
		const course = await Course.findOne({ where: { slug: slug } });
		//console.log("===COURSE===");
		//console.log(course);
		if (course) {
			const lessons = await Lesson.findAll({
				order: [["short_id", "ASC"]],
				where: { courseId: course.id },
			});

			console.log("===lessons===");
			console.log(lessons);

			res.status(200).json({
				course,
				lessons,
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
