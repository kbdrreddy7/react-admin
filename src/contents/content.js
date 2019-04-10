import React from "react";

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ReferenceField,
  BooleanField,
  ChipField,
  ReferenceManyField,
  ReferenceArrayField,
  SingleFieldList,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  NumberInput,
  BooleanInput,
  Filter,
  SelectInput,
  ListButton,
  CardActions
} from "react-admin";

const TagsFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Tags" source="tags" reference="tags" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
const EditActions = ({ basePath, data, resource }) => (
  <CardActions>
    <ListButton basePath={basePath} />
  </CardActions>
);

export const ContentList = props => (
  <List {...props} filters={<TagsFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="content_creator_id" reference="content_creators">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="content_type" />
      <TextField source="name" />
      <TextField source="summary" />
      <TextField source="image_name" />
      <TextField source="source_url" />
      <NumberField source="duration_in_seconds" />
      <BooleanField source="premium" />
      <ReferenceArrayField label="Tags" reference="tags" source="tags">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <ReferenceArrayField
        label="Wisdoms"
        reference="wisdom_categories"
        source="wisdom_categories"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>

      <DateField source="created_at" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ContentEdit = props => (
  <Edit title="Edit content" actions={<EditActions />} {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="content_creator_id" reference="content_creators">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="content_type" />
      <TextInput source="name" />
      <TextInput source="summary" />
      <TextInput source="image_name" />
      <TextInput source="source_url" />
      <NumberInput source="duration_in_seconds" />
      <BooleanInput source="premium" />
      <ReferenceManyField label="Tags" reference="tags" target="tags">
        <Datagrid>
          <DateField source="created_at" />
          <TextField source="name" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>

      <ReferenceManyField
        label="Wisdoms"
        reference="wisdom_categories"
        target="wisdom_categories"
      >
        <Datagrid>
          <DateField source="created_at" />
          <TextField source="name" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>

      <DateInput source="created_at" />
    </SimpleForm>
  </Edit>
);

export const ContentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="content_creator_id" reference="content_creators">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="content_type" />
      <TextInput source="name" />
      <TextInput source="summary" />
      <TextInput source="image_name" />
      <TextInput source="source_url" />
      <NumberInput source="duration_in_seconds" />
      <BooleanInput source="premium" />

      <ReferenceInput label="Tags" reference="tags" source="tags">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceManyField
        label="Wisdoms"
        reference="wisdom_categories"
        target="wisdom_categories"
      >
        <Datagrid>
          <DateField source="created_at" />
          <TextField source="name" />
          <EditButton />
        </Datagrid>
      </ReferenceManyField>

      <DateInput source="created_at" />
    </SimpleForm>
  </Create>
);
