import { app } from "./firebase";
import { getDatabase, ref, set, push, get } from 'firebase/database';
import { Task } from '../components/NewTask';

export async function saveTask(task: Task) {
	const db = getDatabase(app);
	const reference = push(ref(db, "tasks/"));

	set(reference, task)
		.then((value) => {
			console.log(`Saved!`);
		})
		.catch((err) => {
			console.log(`Failed to save.`);
		});
}

export const getLiveTasks = async () => {
	const tasks = await getTasksFromFirebase();
	const now = Date.now();

	const liveTasks: Task[] = tasks.filter(task => {
		if (task.deadline > now) {
			return task;
		}
	});

	const sortedLiveTasks: Task[] = liveTasks.sort(taskSortFunction);

	return sortedLiveTasks;
}

export const getAllTasks = async () => {
	const tasks = await getTasksFromFirebase();
	const sortedTasks = tasks.sort(taskSortFunction);

	return sortedTasks;
}

export async function updateTask(task: Task) {
	const db = getDatabase(app);
	const reference = ref(db, `tasks/${task.taskId}`);
	const taskWithoutId : Task = {
		title: task.title,
		description: task.description,
		isDone: task.isDone,
		startDate: task.startDate,
		deadline: task.deadline
	}
	
	set(reference, taskWithoutId)
		.then(() => console.log("Task updated"))
		.catch(() => console.log("Update failed"));
}


function taskSortFunction(a: Task, b: Task) {
	if (a.deadline >= b.deadline) {
		return 1;
	} else {
		return -1;
	}
}

async function getTasksFromFirebase() {
	let tasks: Task[] = [];
	const db = getDatabase(app);
	const reference = ref(db, "tasks/");
	const snapshot = await get(reference);

	if (snapshot.exists()) {
		const temp = snapshot.val();
		tasks = Object.keys(temp).map(taskId => {
			return {
				...temp[taskId],
				taskId: taskId
			}
		}); // Get tasks with ids
	}

	return tasks;
}