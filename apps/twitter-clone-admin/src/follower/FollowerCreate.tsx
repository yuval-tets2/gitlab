import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FollowerTitle } from "./FollowerTitle";

export const FollowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" source="comment" />
        <ReferenceInput
          source="follower.id"
          reference="Follower"
          label="follower"
        >
          <SelectInput optionText={FollowerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="followers"
          reference="Follower"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FollowerTitle} />
        </ReferenceArrayInput>
        <TextInput label="following" source="following" />
      </SimpleForm>
    </Create>
  );
};
