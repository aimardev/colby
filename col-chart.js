import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import AnnotationPlugin from 'chartjs-plugin-annotation';

Chart.register(AnnotationPlugin);
Chart.register(ChartDataLabels);

// dragger
const dragger = {
    id: 'dragger',
    beforeEvent: (chart, args, options) => {
        if (ColbyChart?.instance?.handleDrag(args.event)) {
            args.changed = true;
            return;
        }
    }
};
export class ColbyChart {
    constructor(ctx, config) {
        if (!ColbyChart.instance) {

            const instance = this
            // Initialize the instance
            // Assign the instance to the ColbyChart class
            instance.element = null;
            instance.lastEvent = null;
            this.chart = new Chart(ctx, config);

            ColbyChart.instance = this;
        }
        // Return the instance
        return ColbyChart.instance;
    }

    getChart() {
        return this.chart;
    }

    drag(moveX, moveY) {
        this.element.x += moveX;
        this.element.y += moveY;
        this.element.x2 += moveX;
        this.element.y2 += moveY;
        this.element.centerX += moveX;
        this.element.centerY += moveY;
        const elements = this.element?.elements
        if (elements && elements.length) {
            for (const subEl of elements) {
                subEl.x += moveX;
                subEl.y += moveY;
                subEl.x2 += moveX;
                subEl.y2 += moveY;
                subEl.centerX += moveX;
                subEl.centerY += moveY;
                subEl.bX += moveX;
                subEl.bY += moveY;
            }
        }
    }
    handleElementDragging(event) {
        if (!this.lastEvent || !this.element) {
            return;
        }
        const moveX = event.x - this.lastEvent.x;
        const moveY = event.y - this.lastEvent.y;
        this.lastEvent = event;
        this.drag(moveX, moveY);
        return true;
    }
    handleDrag(event) {
        if (this.element) {
            switch (event.type) {
                case 'mousemove':
                    return this.handleElementDragging(event);
                case 'mouseout':
                case 'mouseup':
                    this.lastEvent = undefined;
                    break;
                case 'mousedown':
                    this.lastEvent = event;
                    break;
                default:
            }
        }
    }
    updateChart() {
        this.chart.update();
    }

}


const initChart = () => {
    const ctx = document.getElementById('myChart');
    const newConfig = getInitialConfig()
    new ColbyChart(ctx, newConfig)

}
const updateChart = () => {
    if (ColbyChart?.instance) {
        ColbyChart.instance.updateChart()
    }
}
function getInitialConfig() {
    const colbyChart = window.colbyChart
    let chartData = {
        labels: [],
        datasets: [],
    }
    const annotations = [
        // {
        //     type: 'box',
        //     backgroundColor: 'rgba(165, 214, 167, 0.2)',
        //     borderColor: 'rgb(165, 214, 167)',
        //     borderWidth: 2,
        //     label: {
        //         display: true,
        //         content: ['Box annotation', 'to drag'],
        //         textAlign: 'center'
        //     },
        //     xMax: 'May',
        //     xMin: 'April',
        //     xScaleID: 'x',
        //     yMax: 75,
        //     yMin: 25,
        //     yScaleID: 'y'
        // },
        // {
        //     type: 'point',
        //     backgroundColor: 'rgba(0, 255, 255, 0.4)',
        //     borderWidth: 2,
        //     borderColor: 'black',
        //     radius: 20,
        //     xValue: 'March',
        //     yValue: 50
        // }
    ]
    if (colbyChart) {
        const { createDatasets } = colbyChart
        const colorArray = [
            "rgba(255, 99, 132, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(231, 233, 237, 1)",
            "rgba(54, 162, 235, 1)",
        ];
        chartData = createDatasets(colorArray);
    }

    return {
        type: colbyChart?.chartType ?? 'line',
        plugins: [ChartDataLabels, dragger],
        data: chartData,
        options: {
            events: ['mousedown', 'mouseup', 'mousemove', 'mouseout'],
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            },
            plugins: {
                annotation: {
                    enter(ctx) {
                        instance.element = ctx.element;
                    },
                    leave() {
                        instance.element = undefined;
                        instance.lastEvent = undefined;
                    },
                    annotations
                }
            }
        }
    }
}
export { initChart, updateChart }

