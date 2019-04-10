import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  DELETE_MANY,
  fetchUtils,
  showNotification
} from "react-admin";
import { stringify } from "query-string";

const API_URL = "http://localhost:8000";

const convertDataProviderRequestToHTTP = (type, resource, params) => {
  console.log(
    "convertDataProviderRequestToHTTP  type ",
    type,
    " resource ",
    resource,
    " params ",
    params
  );

  switch (type) {
    case GET_LIST: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter)
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_ONE:
      return { url: `${API_URL}/${resource}/${params.id}` };
    case GET_MANY: {
      const query = {
        filter: JSON.stringify({ id: params.ids })
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case GET_MANY_REFERENCE: {
      const { page, perPage } = params.pagination;
      const { field, order } = params.sort;
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify({
          ...params.filter,
          [params.target]: params.id
        })
      };
      return { url: `${API_URL}/${resource}?${stringify(query)}` };
    }
    case UPDATE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: "PUT", body: JSON.stringify(params.data) }
      };
    case CREATE:
      return {
        url: `${API_URL}/${resource}`,
        options: { method: "POST", body: JSON.stringify(params.data) }
      };
    case DELETE:
      return {
        url: `${API_URL}/${resource}/${params.id}`,
        options: { method: "DELETE" }
      };

    case DELETE_MANY:
      return {
        url: `${API_URL}/${resource}?${stringify(params)}`,
        options: { method: "DELETE" }
      };

    default:
      throw new Error(`Unsupported fetch action type ${type}`);
  }
};

const convertHTTPResponseToDataProvider = (
  response,
  type,
  resource,
  params
) => {
  const { headers, json } = response;

  console.log(" type ", type);
  console.log(" json ", json);
  if (response.status === 200) {
    switch (type) {
      case GET_MANY:
        return {
          data: json.map(x => x),
          total: json.length
        };
      case GET_LIST:
        return {
          data: json,
          total: json.length
        };

      case CREATE:
        return { data: { ...params.data, id: json.id } };
      case UPDATE:
        return { data: { ...params.data, id: json.id } };
      case GET_MANY_REFERENCE:
        return {
          data: json,
          total: json.length
        };

      case DELETE_MANY:
        return {
          data: json || []
        };
      case DELETE:
        return {
          data: { id: params.id }
        };

      default:
        return { data: json };
    }
  } else if (response.status < 200 || response.status >= 300) {
    showNotification("Please contact Black lotus developer team");
  }
};

export default (type, resource, params) => {
  console.log(`type ${type} resource ${resource} params ${params}`);
  const { fetchJson } = fetchUtils;
  const { url, options } = convertDataProviderRequestToHTTP(
    type,
    resource,
    params
  );
  console.log(`url ${url} options ${options}`);
  return fetchJson(url, options).then(response => {
    var data = convertHTTPResponseToDataProvider(
      response,
      type,
      resource,
      params
    );
    console.log(" data ", data);
    return data;
  });
};
