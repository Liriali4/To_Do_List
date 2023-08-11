/* // Options/EditTaskForm.js
import React from "react";
import { Form, Input, Button } from "your-ui-library";

export default function EditTaskForm({ task, onSave }) {
  const [editedTask, setEditedTask] = React.useState(task);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <Form>
      <Input name="name" value={editedTask.name} onChange={handleInputChange} />
      {/* Other input fields}
      <Button onClick={handleSave}>Save</Button>
    </Form>
  );
}
 */