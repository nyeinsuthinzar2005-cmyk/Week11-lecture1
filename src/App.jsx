import Header from "./components/Header";
import StudentCard from "./components/studentCard";
import Footer from "./components/Footer";
const students = [
{ id: 1, name: "Ana", major: "IT", score: 82 },
{ id: 2, name: "Boon", major: "CS", score: 58 },
{ id: 3, name: "Chai", major: "IT", score: 74 },
{ id: 4, name: "Dara", major: "CS", score: 91 },
{ id: 5, name: "Eve", major: "IT", score: 55 }
];
function App() {
return (
<>
<Header />
<main className="page">
<div className="student-grid">
{students.map((student) => (
    <StudentCard
key={student.id}
name={student.name}
major={student.major}
score={student.score}
/>
))}
</div>
</main>
<Footer count={students.length} />
</>
);
}
export default App;