// import { useRoute } from 'vue-router';
import { getRouter } from '../modules/mod_loader';
import { unref } from 'vue';
function pushRoute(nome: string, payload?: any) {
  getRouter().push(creaRouteParams(nome, payload));
}

function replaceRoute(nome: string, payload?: any) {
  getRouter().replace(creaRouteParams(nome, payload));
}

function creaRouteParams(nome: string, payload?: any) {
  return {
    name: nome,
    params: {
      json: convertPayloadToJson(payload),
    },
  };
}

function convertPayloadToJson(payload?: any) {
  let jsonPayload = '{}';
  if (payload) {
    try {
      //Se è un reactive, converto in normale
      let pojo = unref(payload);
      jsonPayload = JSON.stringify(pojo);
    } catch (error) {
      console.log(`Parsing error for route payload : ${payload}`);
    }
  }
  return jsonPayload;
}

function parseRoutePayload(): any {
  // let route = useRoute();
  let route = getRouter().currentRoute.value;
  let payload = undefined;
  try {
    // @ts-ignore
    let json: string = route.params.json;
    payload = JSON.parse(json);
  } catch (error) {
    console.log(`JSON Parsing error for route payload : ${payload}`);
  }
  return payload;
}

export const MyRouter = {
  pushRoute,
  replaceRoute,
  parseRoutePayload,
};
