import { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { Task } from "./NewTask";
import { updateTask } from "../services/dbService";

interface Props {
  pageTitle: string;
  getFunction: () => Promise<Task[]>;
}

function Tasks({ pageTitle, getFunction }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Task[] = await getFunction();
      setTasks(data);
    };

    fetchData();
  }, []);

  const updateTaskStatus = (task: Task) => {
    task.isDone = !task.isDone;
    updateTask(task);
    getFunction().then(
      data => setTasks(data)
    );
  };

  return (
    <Container className="m-auto mt-3">
      <h1 className="mb-3">{pageTitle}</h1>
      {tasks.length ? (
        tasks.map((task) => {
          return (
            <Card key={task.title} className="mb-3">
              <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Body>
                  <em>
                    <p>Deadline: {new Date(task.deadline).toDateString()}</p>
                  </em>
                  <Form.Check
                    type="switch"
                    label="Mark as completed"
                    onChange={() => updateTaskStatus(task)}
                    checked={task.isDone}
                  />
                </Card.Body>
              </Card.Body>
            </Card>
          );
        })
      ) : (
        <h3>There are no tasks yet.</h3>
      )}
    </Container>
  );
}

export default Tasks;