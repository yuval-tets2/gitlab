import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FOLLOWER_TITLE_FIELD } from "./FollowerTitle";

export const FollowerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="follower"
          source="follower.id"
          reference="Follower"
        >
          <TextField source={FOLLOWER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="following" source="following" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Follower"
          target="followerId"
          label="Followers"
        >
          <Datagrid rowClick="show">
            <TextField label="comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="follower"
              source="follower.id"
              reference="Follower"
            >
              <TextField source={FOLLOWER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="following" source="following" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
