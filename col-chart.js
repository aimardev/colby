import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

let element;
let lastEvent;

export const drag = function (moveX, moveY) {
    element.x += moveX;
    element.y += moveY;
    element.x2 += moveX;
    element.y2 += moveY;
    element.centerX += moveX;
    element.centerY += moveY;
    if (element.elements && element.elements.length) {
        for (const subEl of element.elements) {
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
};

export const handleElementDragging = function (event) {
    if (!lastEvent || !element) {
        return;
    }
    const moveX = event.x - lastEvent.x;
    const moveY = event.y - lastEvent.y;
    drag(moveX, moveY);
    lastEvent = event;
    return true;
};

export const handleDrag = function (event) {
    if (element) {
        switch (event.type) {
            case 'mousemove':
                return handleElementDragging(event);
            case 'mouseout':
            case 'mouseup':
                lastEvent = undefined;
                break;
            case 'mousedown':
                lastEvent = event;
                break;
            default:
        }
    }
};
const dragger = {
    id: 'dragger',
    beforeEvent(chart, args, options) {

        if (handleDrag(args.event)) {
            args.changed = true;
            return;
        }
    }
};



let chartInstance = null;

const initChart = () => {
    const annotations = [
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

    const ctx = document.getElementById('myChart');
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [3, 1, 4, 2, 5, 9, 4],
                backgroundColor: 'rgba(0, 119, 290, 0.2)',
                borderColor: 'rgba(0, 119, 290, 0.6)'
            }
        ]
    };
    const config = {
        type: 'line',
        plugins: [dragger],
        data,
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
                        element = ctx.element;
                    },
                    leave() {
                        element = undefined;
                        lastEvent = undefined;
                    },
                    annotations
                }
            }
        }
    }

    chartInstance = new Chart(ctx, config);
}

const updateChart = (data) => {
    chartInstance.update();
}
export { chartInstance, initChart, updateChart }

