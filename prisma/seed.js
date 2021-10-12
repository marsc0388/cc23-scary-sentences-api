const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

async function main() {
    await prisma.story.create({
        data: {
            body: `There was a picture in my phone of me sleeping.
            I live alone.`,
            author: 'John'
        }
    });
    await prisma.story.create({
        data: {
            body: `You hear your mum calling you into the kitchen. 
            As you are heading down the stair you hear a whisper from the closet saying "Don't go down there honey, I heard it too."`,
            author: 'Sherry'
        }
    });
    await prisma.story.create({
        data: {
            body: `Growing up with cats and dogs, I got used to the sound of scratching at my door while I slept.
            Now that I live alone, it is much more unsettling`,
            author: 'Colin'
        }
    });
    await prisma.story.create({
        data: {
            body: `She asked why I was breathing so heavily.
            I wasn't.`,
            author: 'Kumiko'
        }
    });
    await prisma.story.create({
        data: {
            body: `The last person on Earth sat alone in a room.
            There was a knock at the door.`,
            author: 'John'
        }
    });
    await prisma.story.create({
        data: {
            body: `"I've always wondered, what's the scythe for, anyway?" I asked as Death escorted me to the underworld.
            "Protection," he answered nervously`,
            author: 'John'
        }
    });
    
}

main()
.catch((e) => {
    console.error(e);
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
})