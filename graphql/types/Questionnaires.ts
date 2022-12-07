import {
  objectType,
  extendType,
  stringArg,
  booleanArg,
  intArg,
  nonNull,
  arg,
} from "nexus";
import { User } from "./User";

export const Questionnaires = objectType({
  name: "Questionnaires",
  definition(t: any) {
    t.nonNull.string("id");
    t.nonNull.string("userId");
    t.nonNull.int("agreement");
    t.nonNull.int("feeling");
    t.nonNull.string("date");
    t.nonNull.boolean("lip");
    t.nonNull.boolean("eye");
    t.nonNull.boolean("hair");
    t.nonNull.boolean("perfume");
    t.nonNull.boolean("skin");
  },
});

export const CreateQuestionnairesMutation = extendType({
  type: "Mutation",
  definition(t: any) {
    t.nonNull.field("createQuestionnaires", {
      type: "Questionnaires",
      args: {
        agreement: nonNull(intArg()),
        userId: nonNull(stringArg()),
        feeling: nonNull(intArg()),
        date: nonNull(stringArg()),
        lip: nonNull(booleanArg()),
        eye: nonNull(booleanArg()),
        hair: nonNull(booleanArg()),
        perfume: nonNull(booleanArg()),
        skin: nonNull(booleanArg()),
      },
      resolve(parent: undefined, args: any, ctx: any) {
        return ctx.prisma.questionnaires.create({
          data: {
            agreement: args.agreement,
            userId: args.userId,
            feeling: args.feeling,
            date: args.date,
            lip: args.lip,
            eye: args.eye,
            hair: args.hair,
            perfume: args.perfume,
            skin: args.skin,
          },
        });
      },
    });
  },
});
