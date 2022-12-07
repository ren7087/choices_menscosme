import { PrismaClient } from "@prisma/client";

interface Context {
  prisma: PrismaClient;
}

export const resolvers = {
  Query: {
    users: async (parent: undefined, args: {}, ctx: Context) => {
      return await ctx.prisma.user.findMany();
    },
    questionnaires: async (parent: undefined, args: any, ctx: Context) => {
      return await ctx.prisma.questionnaires.create(args);
    },
  },
};
