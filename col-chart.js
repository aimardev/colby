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
        const element = this.element
        if (element) {
            const { elements, options } = element           

            if (elements && elements.length) {
                if (options.type == 'line') {
                    console.log('[elements]', elements, options)
                    if (options.yScaleID) {
                        for (const subEl of elements) {
                            subEl.y += moveY;
                            subEl.y2 += moveY;
                            subEl.centerY += moveY;
                            subEl.bY += moveY;
                        }
                    } else if (options.xScaleID) {
                        for (const subEl of elements) {
                            subEl.x += moveX;
                            subEl.x2 += moveX;
                            subEl.centerX += moveX;
                            subEl.bX += moveX;
                        }
                    }
                } else {
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
        console.log('[ColbyChart.instance.options]', ColbyChart.instance.getChart().options)
        const chart = ColbyChart.instance.getChart()
        if (!chart) return;
        const newAnnotations = [
            {                
                type: 'line',
                id: 'yLine',
                yMin: 60,
                yMax: 60,
                yScaleID: 'y',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                label: {
                    display: true,
                    content: ['Line annotation'],
                    textAlign: 'center',
                },
            },
            {
                type: 'box',
                backgroundColor: 'rgba(165, 214, 167, 0.2)',
                borderColor: 'rgb(165, 214, 167)',
                borderWidth: 2,
                label: {
                    display: true,
                    content: ['Box annotation', 'to drag'],
                    textAlign: 'center'
                },
                xMax: 'May',
                xMin: 'April',
                xScaleID: 'x',
                yMax: 75,
                yMin: 25,
                yScaleID: 'y'
            },
            {
                type: 'box',
                backgroundColor: 'rgba(165, 214, 167, 0.2)',
                borderColor: 'rgb(165, 214, 167)',
                borderWidth: 2,
                label: {
                    display: true,
                    content: ['Box annotation', 'to drag'],
                    textAlign: 'center'
                },
                xMax: 'May',
                xMin: 'April',
                xScaleID: 'x',
                yMax: 75,
                yMin: 25,
                yScaleID: 'y'
            },
            {
                type: 'point',
                backgroundColor: 'rgba(0, 255, 255, 0.4)',
                borderWidth: 2,
                borderColor: 'black',
                radius: 20,
                xValue: 'March',
                yValue: 50
            }
        ]
        chart.options.plugins.annotation.annotations = newAnnotations

        ColbyChart.instance.updateChart()
    }
}
function getInitialConfig() {
    const colbyChartInfo = window.colbyChartInfo
    let chartData = {
        labels: [],
        datasets: [],
    }
    const annotations = []
    if (colbyChartInfo) {
        const { createDatasets } = colbyChartInfo
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
        type: colbyChartInfo?.chartType ?? 'line',
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
                        if (ColbyChart?.instance) {
                            ColbyChart.instance.element = ctx.element;
                        }
                    },
                    leave() {
                        if (ColbyChart?.instance) {
                            ColbyChart.instance.element = undefined;
                            ColbyChart.instance.lastEvent = undefined;
                        }
                    },
                    annotations
                }
            }
        }
    }
}
export { initChart, updateChart }

