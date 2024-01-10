import { initChart, updateChart } from './col-chart'
import './actions';

import './style.scss'

initChart()

document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready");
    setTimeout(updateChart, 4000);
});