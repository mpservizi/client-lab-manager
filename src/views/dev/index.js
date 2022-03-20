import { RouterBuilder } from 'classi/RouteBuilder';

const ROOT_PATH = '/debug';
const FOLDER = 'dev';

const builder = new RouterBuilder(ROOT_PATH, FOLDER);

builder.addRoute('', 'Debug');

export const router = builder.build();
