import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { CourseList } from "../components/CourseList";

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
            <CourseList courses={courses} />
        </>
    );
}

export default CoursesPage;