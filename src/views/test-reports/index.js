import { RouterBuilder } from 'classi/RouteBuilder';

const ROOT_PATH = '/reports';
const FOLDER = 'test-reports';

export const config = {
  label: 'Test reports',
};

const builder = new RouterBuilder(ROOT_PATH, FOLDER);

builder.addRoute('', 'HomeView');
builder.addRoute('new', 'AddView');
builder.addRoute('edit', 'EditView');
builder.addRoute('detail', 'DetailView');

export const router = builder.build();
