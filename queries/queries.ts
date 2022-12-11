import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export const CreateQuestionnairesMutation = gql`
  mutation createQuestionnaires(
    $agreement: Int!
    $userId: String!
    $feeling: Int!
    $date: String!
    $lip: Boolean!
    $eye: Boolean!
    $hair: Boolean!
    $perfume: Boolean!
    $skin: Boolean!
  ) {
    createQuestionnaires(
      agreement: $agreement
      userId: $userId
      feeling: $feeling
      date: $date
      lip: $lip
      eye: $eye
      hair: $hair
      perfume: $perfume
      skin: $skin
    ) {
      id
      agreement
      userId
      feeling
      date
      lip
      eye
      hair
      perfume
      skin
    }
  }
`;

export const QuestionnairesQuery = gql`
  query findQuestionnaires($userId: String!) {
    findQuestionnaires(userId: $userId) {
      id
      agreement
      userId
      feeling
      date
      lip
      eye
      hair
      perfume
      skin
    }
  }
`;

export const QuestionnairesQueryAll = gql`
  query findQuestionnairesAll {
    questionnairesFindAll {
      date
    }
  }
`;
