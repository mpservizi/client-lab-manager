import HomeView from './HomeView.vue';
import AddView from './AddView.vue';
import EditView from './EditView.vue';
import DetailView from './DetailView.vue';

const ROOT_PATH = '/norme';

export const router = [
  { path: `${ROOT_PATH}`, component: HomeView },
  { path: `${ROOT_PATH}/new`, component: AddView },
  { path: `${ROOT_PATH}/edit`, component: EditView },
  { path: `${ROOT_PATH}/detail`, component: DetailView }
];
