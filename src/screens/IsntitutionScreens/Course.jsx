import React from "react";

import SMSelect from "../../components/SMSelect";

function Courses() {
  const courseList = [
    {
      option: "Course1",
      value: "Course1",
    },
    {
      option: "Course3",
      value: "Course3",
    },
    {
      option: "Course3",
      value: "Course3",
    },
    {
      option: "Course4",
      value: "Course4",
    },
  ];
  return (
    <>
      <h1>Hello</h1>
      <SMSelect dropDownHeading="Select Course" dropDownOptions={courseList} />
      {/* <SMDatePicker /> */}
    </>
  );
}

export default Courses;
