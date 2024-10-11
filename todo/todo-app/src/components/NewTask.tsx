import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";

export interface Task {
  title: string;
  description: string;
  isDone: boolean;
  startDate: Date;
  deadline: Date | null;
}

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("2024-10-10");
  const [deadline, setDeadline] = useState("");

  const saveTask = () : void => {
    const newTask : Task = {
      title : title,
      description : description,
      isDone : false,
      startDate : new Date(startDate),
      deadline : new Date (deadline)
    };

    // TODO: write code to save
    console.log(newTask);
  };

  const setValue = (e: any) => {
    const element: any = e.target;
    switch (element.name) {
      case "title":
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
            <Form.Control type="text" placeholder="Enter a title" name="title" onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter a description" name="description" onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" name="startDate" onChange={setValue}/>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Deadline</Form.Label>
            <Form.Control type="date" name="deadline" onChange={setValue}/>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={saveTask}>
          Save
        </Button>
      </Container>
    </>
  );
}

export default NewTask;
