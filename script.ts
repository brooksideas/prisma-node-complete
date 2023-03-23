import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ["query"] })

async function main() {
    await prisma.user.deleteMany()
    const user = await prisma.user.create({
        data: {
            name: "Ydi",
            email: "ydis@tdasest.com",
            age: 24,
            preferences: {},
            userPreference: {
                create: {
                    userPreference: true
                }
            }
        },
        // include:{
        //     userPreference: true
        // }
        select: {
            name: true,
            userPreference: {
                select: { id: true }
            }
        }
    })
    console.log(user);
}

main()
    .catch(error => {
        console.error(error.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })