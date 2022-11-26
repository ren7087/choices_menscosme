import { PrismaClient } from "@prisma/client";

interface Context {
  prisma: PrismaClient;
}

export const resolvers = {
  Query: {
    hello: () => "Hello World",
    users: async (parent: undefined, args: {}, context: Context) => {
      return await context.prisma.user.findMany();
    },
  },
};
