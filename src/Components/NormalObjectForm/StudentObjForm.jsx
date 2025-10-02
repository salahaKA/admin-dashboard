import React, { useEffect, useRef, useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const StudentObjForm = () => {
  const nameInputRef = useRef();

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    gender: "",
  });

  const courseList = ["MCA", "Btech", "BCA", "Mtech"];
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    if (student) {
      localStorage.setItem("studentData", JSON.stringify(student));
    }
  }, [student]);

  useEffect(() => {
    nameInputRef.current.focus(); // 👈 Automatically focus on load
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCourseChange = (value) => {
    setStudent((prev) => ({
      ...prev,
      course: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(student);
    console.log("Form submitted successfully!", student);
  };

  const handleReset = () => {
    setStudent({ name: "", age: "", course: "", gender: "" });
    nameInputRef.current.focus(); // 👈 Focus again after reset
  };

  return (
    <div>
      <h2>StudentObjForm</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          ref={nameInputRef}
        />
        <br />
        <label>Age:</label>
        <br />
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
        />
        <br />
        <label>Course:</label>
        <br />
        <Select
          value={student.course}
          onChange={handleCourseChange}
          placeholder="Choose a course"
          style={{ width: 200 }}
        >
          {courseList.map((course) => (
            <Option key={course} value={course}>
              {course}
            </Option>
          ))}
        </Select>
        <br />
        <label>Gender:</label>
        <br />
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={student.gender === "Male"}
          onChange={handleChange}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={student.gender === "Female"}
          onChange={handleChange}
        />{" "}
        Female
        <br />
        <button type="submit">SUBMIT</button>
        <button onClick={handleReset}>RESET</button>
      </form>

      {/* Show submitted data */}
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Age:</strong> {submitted.age}
          </p>
          <p>
            <strong>Course:</strong> {submitted.course}
          </p>
          <p>
            <strong>Gender:</strong> {submitted.gender}
          </p>
        </div>
      )}
    </div>
  );
};

export default StudentObjForm;
