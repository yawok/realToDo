import { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { saveTask } from "../services/dbService";

export interface Task {
  taskId?: string;
  title: string;
  description: string;
  isDone: boolean;
  startDate: number;
  deadline: number;
}

function NewTask() {
  const today = new Date().toISOString();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(today.slice(0, 10));
  const [deadline, setDeadline] = useState("");

  const saveNewTask = () : void => {
    const newTask : Task = {
      title : title,
      description : description,
      isDone : false,
      startDate : new Date(startDate).getTime(),
      deadline : new Date (deadline).getTime()
    };

    saveTask(newTask).then(
      () => {
        setTitle("");
        setDescription("");
        setStartDate(today.slice(0, 10));
        setDeadline("");
      }
    );
  };

  const setValue = (e: any) => {
    const element: any = e.target;
    switch (element.name) {
      case "title":
        console.log(title);
        setTitle(element.value);
        break;
      case "description":
        setDescription(element.value);
        break;
      case "startDate":
        setStartDate(element.value);
        break;
      case "deadline":
        setDeadline(element.value);
        break;
      default:
        console.error("Unknown element or missing element name.");
    }
  }

  return (
    <>
      <Container>
        <h1>Add a new task</h1>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter a title" name="title" value={title} onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter a description" name="description" value={description} onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name="startDate" value={startDate} onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" name="deadline" value={deadline} onChange={setValue}/>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={saveNewTask}>
          Save
        </Button>
      </Container>
    </>
  );
}

export default NewTask;