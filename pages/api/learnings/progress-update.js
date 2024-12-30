import { Course_Progress } from "@/database/models";

export default async function handler(req, res) {
	const { id, courseId, userId } = req.body;

	console.log("=== BODY===");
	console.log(req.body);

	console.log("====SELECTED USERID ===");
	console.log(userId);

	console.log("====SELECTED LESSONID ===");
	console.log(id);

	try {

		const updateProgressResult = await Course_Progress.update(
			{ finished: 1},
			{ where: { userId: userId, courseId: courseId, lessonId: id }}
		);

		


		console.log("====Updated value PROGRESS ===");
		console.log(updateProgressResult);

		if (updateProgressResult) {
			const updatedProgress = await Course_Progress.findOne({
				where: {userId: userId, courseId: courseId, lessonId: id },
			});

			console.log("====UPDATED PROGRESS ===");
		console.log(updatedProgress);


		res.status(200).json({
			updatedProgress,
		});
		}
		else{
			res.status(200).json("No found");
		}
		

		
	} catch (e) {
		res.status(400).json({
			error_code: "update_progress",
			message: e.message,
		});
	}
}



