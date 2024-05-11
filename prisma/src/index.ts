import { Prisma, PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    let incloudePost: boolean = false;
    let user: Prisma.UserCreateInput;

    if (incloudePost) {
        user = {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
            posts: {
                create: {
                    title: 'Include this post',
                }
            }
        }
    } else {
        user = {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
        }
    }
    const createUser = await prisma.user.create({ data: user })

    // const createMany = await prisma.user.createMany({
    //     data: [
    //       { name: 'Bob', email: 'bob@prisma.io' },
    //       { name: 'Yewande', email: 'yewande@prisma.io' },
    //       { name: 'Angelique', email: 'angelique@prisma.io' },
    //     ],
    //     skipDuplicates: false,
    // });

    // const users = await prisma.user.findMany();
    // console.log(users);

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: 'bob@prisma.io',
    //     }
    // });

    // const user = await prisma.user.update({
    //     where: {
    //         email: 'bob@prisma.io'
    //     },
    //     data: {
    //         name: 'BoBo'
    //     }
    // });

    // const user = await prisma.user.delete({
    //     where: {
    //         email: 'bob@prisma.io'
    //     }
    // })

    // console.log(user);
}

main()
    .then( async () => {
        await prisma.$disconnect();
    })
    .catch( async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
