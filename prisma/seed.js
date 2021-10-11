const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
    const testStory = await prisma.story.create({
        data: {
            body: 'test',
            author: 'tester'
        }
    })
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})