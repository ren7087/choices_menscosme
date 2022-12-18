import { objectType, extendType, stringArg, nonNull } from "nexus";

export const YourLip = objectType({
  name: "YourLip",
  definition(t: any) {
    t.nonNull.string("id");
    t.nonNull.string("userId");
    t.nonNull.string("title");
    t.nonNull.string("jas");
    t.nonNull.string("url");
    t.nonNull.string("memo");
  },
});

export const CreateYourLipMutation = extendType({
  type: "Mutation",
  definition(t: any) {
    t.nonNull.field("createYourLip", {
      type: "YourLip",
      args: {
        userId: nonNull(stringArg()),
        title: nonNull(stringArg()),
        jas: nonNull(stringArg()),
        memo: nonNull(stringArg()),
        url: nonNull(stringArg()),
      },
      resolve(parent: undefined, args: any, ctx: any) {
        return ctx.prisma.yourLip.create({
          data: {
            userId: args.userId,
            title: args.title,
            jas: args.jas,
            memo: args.memo,
            url: args.url,
          },
        });
      },
    });
  },
});

export const YourLipQuery = extendType({
  type: "Query",
  definition(t: any) {
    t.nonNull.list.field("yourLips", {
      type: "YourLip",
      resolve(parent: undefined, args: {}, ctx: any) {
        return ctx.prisma.yourLip.findMany();
      },
    });
  },
});
