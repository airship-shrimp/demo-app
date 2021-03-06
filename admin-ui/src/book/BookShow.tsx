import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const BookShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="xxx" source="xxx" />
        <TextField label="xxxxx" source="xxxxx" />
      </SimpleShowLayout>
    </Show>
  );
};
