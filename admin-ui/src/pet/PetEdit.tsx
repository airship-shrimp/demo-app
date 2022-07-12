import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="age" source="age" />
        <BooleanInput label="gender" source="gender" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
