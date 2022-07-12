import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <BooleanInput label="gender" source="gender" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
