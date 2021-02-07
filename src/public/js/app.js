import { initializeListeners } from './listeners/initialize';
import { initData } from './dataInit/dataInit';

const app = async () => {
  await initData();
  await initializeListeners();
}

app();