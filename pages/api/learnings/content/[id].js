import fs from "fs";
import matter from "gray-matter";

export default async function handler(req, res) {
	const { courseSlug, lessonTitle, lessonShortId } = req.query;
	// console.log("###", req.query);

	const fetchTextLesson = (slug, name, shortId) => {
		const folder = "markdowns/";
		const file = `${folder}${slug+"/"}${shortId+". "}${name}.md`;
		const content = fs.readFileSync(file, "utf8");
		const matterResult = matter(content);
		return matterResult;
	  };

	try {

		const lessonContent = fetchTextLesson(courseSlug, lessonTitle, lessonShortId );
		console.log("FETCHED LESSON TEXT===");
		console.log(lessonContent);

		res.status(200).json({
			lessonContent,

		});
	} catch (e) {
		res.status(400).json({
			error_code: "get_content",
			message: e.message,
		});
	}
}
