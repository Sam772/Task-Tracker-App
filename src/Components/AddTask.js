import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Please add a task");
      return;
    }

    onAdd({ name, date, reminder });

    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-task" onSubmit={onSubmit}>
      <div className="task-control">
        <label>Task Name</label>
        <input
          type="name"
          placeholder="Task Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="task-control">
        <label>Date & Time</label>
        <input
          type="name"
          placeholder="Add Date & Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="task-control task-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
