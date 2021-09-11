import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {

    state = {
        courses: []
    };

    async componentDidMount() {

        const courses = await getCourses();
        this.setState({ courses: courses });
    }

    render() {

        return (
            <>
                <h2>Courses</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author ID</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.courses.map(course =>
                            <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </>
        );
    }
}

export default CoursesPage;