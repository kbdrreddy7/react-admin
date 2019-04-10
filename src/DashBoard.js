import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import * as myConstant from "./constant";

export default () => (
  <Card>
    <CardHeader title={myConstant.DASHBOARD_MESSAGE} />
    <CardContent />
  </Card>
);
