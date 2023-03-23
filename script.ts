import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.findMany({
    // where: {
    //    writtenPosts: {
    //     some:{ 
    //         title: {
    //             startsWith: "Ca"
    //         }
    //     }
    //    }
    // },
    // include:{
    //    userPreference: true
    // },

    // orderBy: {
    //     age: "asc" //desc
    // },
    // take: 2,
    // skip: 0
    // })

    // const post = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is:{ 
    //                 age: { gt: 20}
    //             }
    //         }
    //         // AND: [{ author: { name: { startsWith: "Y" } } }, { rating: { gt: 2 } }]
    //     },
    //     select:{
    //         author: { select: { name: true , email: true}},
    //         favoritedBy: true,

    //     }
    // })
    // .create({
    // data: {
    //     authorId: "fc67ad2d-1c13-4a79-9a5e-74fa19bffa05",
    //     title: "IT",
    //     rating: 7.8,
    //     favoritedById: "3dc0691c-47a9-4e00-bc84-9abd3f46932a"
    // }
    // })

    // const user = await prisma.userPreference.create({
    //     data: {
    //         userPreference: true,
            
    //     }
    // })


    // const user = await prisma.user.update({
    //     where: {
    //         id: "fc67ad2d-1c13-4a79-9a5e-74fa19bffa05"
    //     },
    //     data:{
    //          age: {

    //             decrement: 1
    //          }, 
    //          userPreference:{
    //             connect: {
    //                 id: "ebeb01d6-afd1-4151-89ec-376732558ff8"
    //             }
    //          }
    //     },
    //     select: {
    //         userPreference: true,
    //          writtenPosts: { 
    //             select: {
    //                 title: true,
    //                 rating: true
    //             }
    //          }
    //     }
    // })


    // DELETE
    // const user = await prisma.user.create({
    //     data: {
    //         name: "zeta",
    //         email: "zeta@ret.com",
    //         age: 5,
    //         preferences: {}
    //     }
    // })
    // const user = await prisma.user.delete({
    //     where:{
    //         email: "zeta@ret.com"
    //     },
    //     include: {
    //          userPreference: true
    //     }
    // })
    // console.log(user);
}

main()
    .catch(error => {
        console.error(error.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })