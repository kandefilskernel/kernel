import React, { useEffect, useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import StickyBox from "react-sticky-box";
import LessonTextPlayer from "@/components/Learning/LessonTextPlayer";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import LessonList from "@/components/Learning/LessonText";
import ProgressManager from "@/components/Learning/ProgressManager";
import CourseOverview from "@/components/Learning/CourseOverview";
import Link from "next/link";
import CourseAsset from "@/components/Learning/CourseAsset";
import CourseDiscussion from "@/components/Learning/CourseDiscussion";
import CourseRating from "@/components/Learning/CourseRating";
import CourseFeedback from "@/components/Learning/CourseFeedback";


  
const Index = ({ user }) => {
	const [lessons, setLessons] = useState([]);
	const [course, setCourse] = useState({});
	const [selectedLesson, setSelectedLesson] = useState("");
	const [selectedContent, setSelectedContent] = useState({});
	const [active, setActive] = useState("");
	const [tab, setTab] = useState("overview");
	const {
		query: { slug },
	} = useRouter();

	const fetchLessons = async () => {
		const url = `${baseUrl}/api/learnings/lessons/${slug}`;
		const response = await axios.get(url);

		setLessons(response.data.lessons);
		setSelectedLesson(response.data.lessons[0]);
		setActive(response.data.lessons[0].id);
		setSelectedContent(response.data.initalContent);
		setCourse(response.data.course);
	};

	useEffect(() => {
		fetchLessons();
	}, [slug]);

	const selectLesson = async (lessonId) => {
		try {
			const payload = {
				params: { userId: user.id, courseId: course.id, courseSlug:slug },
			};
			const url = `${baseUrl}/api/learnings/lesson/${lessonId}`; //Getting the lessson, and retriving the markup text
			const response = await axios.get(url, payload);

			const {
				data: { lesson, content},
			} = response;

			setSelectedLesson(lesson);
			setActive(lesson.id);
			setSelectedContent(content);

		} catch (err) {
			console.log(err.response);
		}
	};

	return (
		<>
			<Navbar user={user} />

			<div className="mt-5 pb-5 video-area">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-9 col-md-8">
							<div className="video-content">
								{selectedContent && (
									<LessonTextPlayer textSrc={selectedContent} />
								)}

								<br />
								<ul className="nav-style1">
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("overview");
												}}
												className={
													tab == "overview"
														? "active"
														: ""
												}
											>
												Overview
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("asset");
												}}
												className={
													tab == "asset"
														? "active"
														: ""
												}
											>
												Assets
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("discussion");
												}}
												className={
													tab == "discussion"
														? "active"
														: ""
												}
											>
												Discussion
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("rating");
												}}
												className={
													tab == "rating"
														? "active"
														: ""
												}
											>
												Leave a rating
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("feedback");
												}}
												className={
													tab == "feedback"
														? "active"
														: ""
												}
											>
												Leave a feedback
											</a>
										</Link>
									</li>
								</ul>

								{course && tab == "asset" ? (
									<CourseAsset {...course} />
								) : tab == "discussion" ? (
									<CourseDiscussion {...course} />
								) : tab == "rating" ? (
									<CourseRating {...course} />
								) : tab == "feedback" ? (
									<CourseFeedback {...course} />
								) : (
									<CourseOverview {...course} />
								)}
							</div>
						</div>

						<div className="col-lg-3 col-md-4">
							<StickyBox offsetTop={20} offsetBottom={20}>
								<div className="video-sidebar">
									<ProgressManager
										lessons_count={lessons.length}
										userId={user.id}
										courseId={course.id}
										selectedLesson={selectedLesson}
									/>

									<div className="course-video-list">
										<h4 className="title mb-3">
											{course && course.title}
										</h4>
										<ul>
											{lessons.length > 0 &&
												lessons.map((lesson) => (
													<LessonList
														key={lesson.id}
														{...lesson}
														onPlay={() =>
															selectLesson(
																lesson.id
															)
														}
														activeClass={active}
													/>
												))}
										</ul>
									</div>
								</div>
							</StickyBox>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Index;
