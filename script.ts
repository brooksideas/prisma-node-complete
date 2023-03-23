import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.findMany({
        where: {
            OR: [{
                name: { startsWith: "b" },

            }, { age: { lt: 25 } }
            ],
        },
        // include:{
        //     userPreference: true
        // },

        // orderBy: {
        //     age: "asc" //desc
        // },
        // take: 2,
        // skip: 0
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