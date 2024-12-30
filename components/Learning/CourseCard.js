import React from "react";
import Link from "next/link";

const CourseCard = ({ course: { user, image, title, slug, is_class } }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-courses-box style-2">
				<div className="courses-image">
					{is_class ? (
						<Link href={`/learning/course/class/${slug}`}>
							<a className="d-block image">
								<img src={image} alt={title} />
							</a>
						</Link>
					) : (
						<Link href={`/learning/course/${slug}`}>
							<a className="d-block image">
								<img src={image} alt={title} />
							</a>
						</Link>
					)}

					<div className="video_box">
						<div className="d-table">
							<div className="d-table-cell">
								{is_class ? (
									<Link
										href={`/learning/course/class/${slug}`}
									>
										<a>
											<i className="bx bx-play"></i>
										</a>
									</Link>
								) : (
									<Link href={`/learning/course/${slug}`}>
										<a>
											<i className="bx bx-play"></i>
										</a>
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="courses-content">
					<h3>
						<a>{title}</a>
					</h3>

					<div className="course-author d-flex justify-content-end">
						<a href={`/learning/course/${slug}`} class="btn btn-outline-primary btn-sm active" role="button" aria-pressed="true">Start Course</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
