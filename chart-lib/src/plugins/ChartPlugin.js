// import {Chart} from 'chart.js';
import { Chart } from "chart.js";
export default {
  install: (app) => {
    /*     * 모든 컴포넌트에서 this.$_Chart 로 접근할 수 있도록 만듦     * */
    app.config.globalProperties.$_Chart = Chart;
  },
};
// export default {
//   install(Vue) {
//     Vue.prototype.$_Chart = Chart;
//     return Chart;
//   },
// };
