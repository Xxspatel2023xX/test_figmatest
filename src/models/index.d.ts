import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type QuestionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TestMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Question {
  readonly id: string;
  readonly Question?: string | null;
  readonly Category?: string | null;
  readonly Points?: number | null;
  readonly Answer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class Test {
  readonly id: string;
  readonly address?: string | null;
  readonly price?: number | null;
  readonly image_url?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Test, TestMetaData>);
  static copyOf(source: Test, mutator: (draft: MutableModel<Test, TestMetaData>) => MutableModel<Test, TestMetaData> | void): Test;
}