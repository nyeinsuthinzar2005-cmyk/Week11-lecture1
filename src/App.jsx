import { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/studentCard";
import AddStudentForm from "./components/AddStudentForm";

const initialStudents = [
  { id: 1, name: "Ana", major: "IT", score: 82 },
  { id: 2, name: "Boon", major: "CS", score: 58 },
  { id: 3, name: "Chai", major: "IT", score: 74 },
  { id: 4, name: "Dara", major: "CS", score: 91 },
  { id: 5, name: "Eve", major: "IT", score: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [showPassedOnly, setShowPassedOnly] = useState(false);

  function handleAddStudent(newStudent) {
    setStudents((currentStudents) => [...currentStudents, newStudent]);
  }

  function handleDeleteStudent(id) {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id)
    );
  }

  const visibleStudents = showPassedOnly
    ? students.filter((student) => student.score >= 60)
    : students;

  return (
    <div className="page">
      <Header />

      <AddStudentForm onAdd={handleAddStudent} />

      <section className="summary">
        <p>
          Current number of students: <strong>{students.length}</strong>
        </p>
        <button
          className="filter-button"
          onClick={() => setShowPassedOnly((showingPassed) => !showingPassed)}
        >
          {showPassedOnly ? "Show All Students" : "Show Passed Only"}
        </button>
      </section>

      <main>
        {visibleStudents.length === 0 ? (
          <p>No students to display.</p>
        ) : (
          <section className="student-grid">
            {visibleStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              major={student.major}
              score={student.score}
              onDelete={handleDeleteStudent}
            />
          ))}
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
