import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const PetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="age" source="age" />
        <BooleanField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
