import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";

function Tugas11() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({
    name: "",
    subject: "",
    grade: "",
    gradeIndex: "",
  });

  // Function to add a new student
  const addStudent = () => {
    if (
      newStudent.name &&
      newStudent.subject &&
      newStudent.grade &&
      newStudent.gradeIndex
    ) {
      setStudents([...students, newStudent]);
      setNewStudent({
        name: "",
        subject: "",
        grade: "",
        gradeIndex: "",
      });
    }
  };

  // Function to delete a student
  const deleteStudent = (index) => {
    const updatedStudents = students.filter((student, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <>
      {/* Table */}
      <Card className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Mata Kuliah
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nilai
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Index Nilai{" "}
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.grade}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.gradeIndex}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <Button
                      color="failure"
                      onClick={() => deleteStudent(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      {/* Form */}
      <Card className="mt-5">
        <form className="flex  flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Nama" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <div className="mb-2 block">
              <Label value="Mata kuliah" />
            </div>
            <TextInput
              id="base"
              type="text"
              sizing="md"
              htmlFor="base"
              value={newStudent.subject}
              onChange={(e) =>
                setNewStudent({ ...newStudent, subject: e.target.value })
              }
            />
            <div className="mb-2 block">
              <Label value="Nilai" />
            </div>

            <TextInput
              id="base"
              type="text"
              sizing="md"
              htmlFor="base"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
            />
            <div className="mb-2 block">
              <Label htmlFor="base" value="Nilai Index" />
            </div>

            <TextInput
              id="base"
              type="text"
              sizing="md"
              value={newStudent.gradeIndex}
              onChange={(e) =>
                setNewStudent({ ...newStudent, gradeIndex: e.target.value })
              }
            />
          </div>

          <Button type="submit" onClick={addStudent}>
            Submit
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Tugas11;
