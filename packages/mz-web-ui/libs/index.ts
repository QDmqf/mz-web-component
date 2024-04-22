import { App } from "vue";
import demoCom from "./demoCom.vue";

export { demoCom };

export default {
  install(app: App) {
    app.component(demoCom.name, demoCom);
  },
};
