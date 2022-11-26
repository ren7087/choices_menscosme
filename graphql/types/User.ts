import { objectType, extendType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t: any) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("emailVerified");
    t.nonNull.string("image");
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t: any) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(parent: undefined, args: {}, ctx: any) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
