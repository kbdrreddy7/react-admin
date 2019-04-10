import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateInput
} from "react-admin";

export const TagList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField source="created_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export const TagEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Edit>
);

export const TagCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Create>
);
