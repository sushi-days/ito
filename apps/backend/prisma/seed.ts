import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const todo1 = await prisma.todo.create({
		data: {
			text: "Hello World",
		},
	});
	const todo2 = await prisma.todo.create({
		data: {
			text: "Hello World 2",
			completed: true,
		},
	});
	console.log({ todo1, todo2 });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
