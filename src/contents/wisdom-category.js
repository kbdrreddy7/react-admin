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
  DateInput,
  SelectInput
} from "react-admin";

const state = [
  { id: "PENDING", name: "PENDING" },
  { id: "APPROVED", name: "APPROVED" },
  { id: "DECLINED", name: "DECLINED" }
];
export const WisdomCategoryList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="status" />
      <DateField source="created_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export const WisdomCategoryEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <SelectInput source="status" choices={state} />

      <DateInput source="created_at" />
    </SimpleForm>
  </Edit>
);

export const WisdomCategoryCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <SelectInput source="status" choices={state} />

      <DateInput source="created_at" />
    </SimpleForm>
  </Create>
);
