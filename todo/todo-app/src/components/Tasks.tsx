import React from "react";
import { Card, Container, Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Task } from './NewTask';

interface Props {
  pageTitle: string;
}

function Tasks( { pageTitle } : Props ) {
  const tasks: Task[] = useLoaderData() as Task[];
	
  return (
    <Container className="m-auto mt-3">
			<h1 className="mb-3">{pageTitle}</h1>
      {tasks.length ? tasks.map((task) => {
        return (
          <Card key={task.title} className="mb-3">
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
							<Card.Body>
								<em><p>Deadline: {task.deadline?.toDateString()}</p></em>
								<Form.Check type="switch" label="Mark as completed" />
							</Card.Body>
            </Card.Body>
          </Card>
        );
      }) : <h3>There are no tasks now.</h3>
		}
    </Container>
  );
}

export default Tasks;
