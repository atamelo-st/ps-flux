import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { CourseList } from "../components/CourseList";
import { Link } from "react-router-dom";

function CoursesPage() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const _courses = await getCourses();
            setCourses(_courses);
        };

        fetchData();
    }, []);

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;