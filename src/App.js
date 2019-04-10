import React from "react";
import CategoryIcon from "@material-ui/icons/Group";
import Users from "@material-ui/icons/Group";

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import dataProvider from "./dataProviders";
import Dashboard from "./DashBoard";
import { ContentList, ContentEdit, ContentCreate } from "./contents/content";
import {
  WisdomCategoryList,
  WisdomCategoryEdit,
  WisdomCategoryCreate
} from "./contents/wisdom-category";

import { TagList, TagEdit, TagCreate } from "./contents/tag";

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="contents"
      list={ContentList}
      edit={ContentEdit}
      create={ContentCreate}
    />
    <Resource
      name="content_creators"
      list={ListGuesser}
      edit={EditGuesser}
      icon={Users}
    />
    <Resource name="tags" list={TagList} edit={TagEdit} create={TagCreate} />
    <Resource
      name="wisdom_categories"
      list={WisdomCategoryList}
      edit={WisdomCategoryEdit}
      create={WisdomCategoryCreate}
      options={{ label: "Wisdoms" }}
      icon={CategoryIcon}
    />
  </Admin>
);

export default App;
