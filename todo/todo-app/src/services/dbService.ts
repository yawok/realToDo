import { Task } from "../components/NewTask"

const tasks: Task[] = [
	{
		title: "Complete React Project",
		description: "Finish the final module of the React project for the client.",
		isDone: false,
		startDate: new Date("2024-10-01"),
		deadline: new Date("2024-10-15")
	},
	{
		title: "Team Meeting",
		description: "Discuss the next sprint's goals and tasks with the team.",
		isDone: true,
		startDate: new Date("2024-09-25"),
		deadline: new Date("2024-09-25")
	},
	{
		title: "Write Blog Post",
		description: "Draft a blog post about recent changes in the JavaScript ecosystem.",
		isDone: false,
		startDate: new Date("2024-10-05"),
		deadline: new Date("2024-10-10")
	},
	{
		title: "Design Review",
		description: "Review the new design mockups with the design team.",
		isDone: true,
		startDate: new Date("2024-09-15"),
		deadline: new Date("2024-09-18")
	},
	{
		title: "Update Documentation",
		description: "Update the technical documentation for the API changes.",
		isDone: false,
		startDate: new Date("2024-10-08"),
		deadline: null
	},
	{
		title: "Code Refactoring",
		description: "Refactor the codebase for better performance and readability.",
		isDone: false,
		startDate: new Date("2024-10-07"),
		deadline: new Date("2024-10-20")
	},
	{
		title: "Client Presentation",
		description: "Present the final project results to the client.",
		isDone: false,
		startDate: new Date("2024-10-15"),
		deadline: new Date("2024-10-18")
	},
	{
		title: "Database Migration",
		description: "Migrate the database to the new server.",
		isDone: true,
		startDate: new Date("2024-09-05"),
		deadline: new Date("2024-09-10")
	},
	{
		title: "Create Test Cases",
		description: "Write unit tests for the new API endpoints.",
		isDone: false,
		startDate: new Date("2024-10-09"),
		deadline: new Date("2024-10-12")
	},
	{
		title: "SEO Optimization",
		description: "Optimize the website for better search engine ranking.",
		isDone: false,
		startDate: new Date("2024-10-01"),
		deadline: new Date("2024-10-05")
	},
	{
		title: "Set Up CI/CD Pipeline",
		description: "Configure the CI/CD pipeline for automated deployments.",
		isDone: false,
		startDate: new Date("2024-09-20"),
		deadline: new Date("2024-09-25")
	},
	{
		title: "Backend API Integration",
		description: "Integrate the backend API with the frontend app.",
		isDone: false,
		startDate: new Date("2024-10-03"),
		deadline: new Date("2024-10-10")
	},
	{
		title: "Conduct User Interviews",
		description: "Interview users to get feedback on the new features.",
		isDone: true,
		startDate: new Date("2024-09-22"),
		deadline: new Date("2024-09-23")
	},
	{
		title: "Bug Fixing",
		description: "Fix critical bugs reported by users.",
		isDone: true,
		startDate: new Date("2024-09-12"),
		deadline: new Date("2024-09-15")
	},
	{
		title: "Update Privacy Policy",
		description: "Revise the privacy policy to comply with new regulations.",
		isDone: false,
		startDate: new Date("2024-10-01"),
		deadline: new Date("2024-10-10")
	},
	{
		title: "Launch Marketing Campaign",
		description: "Run the online marketing campaign for the new product launch.",
		isDone: false,
		startDate: new Date("2024-10-05"),
		deadline: new Date("2024-10-20")
	},
	{
		title: "Performance Tuning",
		description: "Optimize the application for better performance.",
		isDone: false,
		startDate: new Date("2024-09-15"),
		deadline: new Date("2024-09-30")
	},
	{
		title: "Security Audit",
		description: "Conduct a security audit of the application.",
		isDone: true,
		startDate: new Date("2024-08-25"),
		deadline: new Date("2024-08-30")
	},
	{
		title: "Develop Mobile App",
		description: "Start developing the mobile app version of the platform.",
		isDone: false,
		startDate: new Date("2024-09-01"),
		deadline: new Date("2024-12-01")
	},
	{
		title: "Customer Support Training",
		description: "Train the customer support team on the new features.",
		isDone: true,
		startDate: new Date("2024-09-10"),
		deadline: new Date("2024-09-15")
	},
	{
		title: "Prepare Presentation",
		description: "Prepare the presentation slides for the investor meeting.",
		isDone: false,
		startDate: new Date("2024-10-10"),
		deadline: new Date("2024-10-12")
	},
	{
		title: "Server Maintenance",
		description: "Perform scheduled maintenance on the servers.",
		isDone: true,
		startDate: new Date("2024-09-05"),
		deadline: new Date("2024-09-05")
	},
	{
		title: "Accessibility Improvements",
		description: "Improve the accessibility of the website for disabled users.",
		isDone: false,
		startDate: new Date("2024-10-01"),
		deadline: new Date("2024-10-15")
	},
	{
		title: "Create Landing Page",
		description: "Design and develop a new landing page for the product.",
		isDone: false,
		startDate: new Date("2024-10-04"),
		deadline: new Date("2024-10-12")
	},
	{
		title: "Onboard New Developers",
		description: "Onboard and train the new developers joining the team.",
		isDone: true,
		startDate: new Date("2024-09-12"),
		deadline: new Date("2024-09-15")
	}
];

export const getTaskDueToday = (): Task[] => {
	const now = new Date(Date.now());
	const tasksDueToday = tasks.filter(task => {
		if (task.deadline) {
			const dueDate = task.deadline;
			const dayBeforeDueDate = new Date(dueDate.getTime() - (24 * 60 * 60 * 1000));
			if ((dayBeforeDueDate < now) && (now <= dueDate)) {
				return task;
			}
		}
	})
	return tasksDueToday;
}

export const getLiveTasks = () : Task[] => {
	const now = Date.now();
	const liveTasks: Task[] = tasks.filter(task => {
		if (task.deadline && (task.deadline.getTime() > now)) {
			return task;
		}
	});
	return liveTasks;
}

export const getAllTasks = () : Task[] => {
	const sortedTasks = tasks.sort((a: Task, b: Task) => {
		if(a.deadline && b.deadline) {
			if(a.deadline?.getTime() >= b.deadline?.getTime()){
				return 1;
			} else {
				return -1;
			}
		} else {
			return -1
		}
	});

	return sortedTasks;
}