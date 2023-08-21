import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

function App() {
  const course = "Half Stack application development";
  const courseContent = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content courseContent={courseContent} />
      <Total courseContent={courseContent} />
    </div>
  );
}

export default App;
