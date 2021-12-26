import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Placement Interview",
      date: "8th January 1pm",
      reminder: true,
    },
    {
      id: 2,
      description: "Exam",
      date: "12th January 9:30am",
      reminder: true,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
