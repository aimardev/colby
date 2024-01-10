
import { updateChart as updateColChart, ColbyChart } from './col-chart'// windows event 
// import { openTab } from './actions';
import jQuery from "jquery";

function updateChart() {
    updateChartConfig()
    updateAnnoation()
    updateColChart();
}
function getChartConfigFormData(ref) {
    const form = jQuery(ref);
    const formData = form.serializeArray();
    const formDataObject = {}
    formData.forEach(function ({ name, value }) {
        formDataObject[name] = value;
    });
    return formDataObject
}
function updateAnnoation() {
    const formData = getChartConfigFormData('#chart-config')
    console.log('[formData]', formData)
    const annotationValue = { annotations: [] }

    const {
        selectedXAxis,
        lineAxis,
        linePos,
        lineLabel,
        lineStyle,
        lineColor,
        lineThickness,
        arrowXMin,
        arrowXMax,
        arrowYMin,
        arrowYMax,
        doubleArrow,
        arrowLabel,
        arrowColor,
        showLegend,
        isSwitched,
        showLabel } = formData


    if (linePos) {
        const lineAnnotation = {
            type: "line",
            id: "line1",
            borderColor: "rgb(255, 99, 132)",
            borderWidth: 2,

        };


        if (lineStyle) {
            if (lineStyle == "dashed") {
                lineAnnotation.borderDash = [5, 5];
            } else if (lineStyle == "wave") {
                lineAnnotation.borderDash = [10, 5, 5];
            }
        }

        if (lineColor) {
            lineAnnotation.borderColor = lineColor;
        }

        if (lineThickness) {
            lineAnnotation.borderWidth = lineThickness;
        }

        if (lineLabel) {
            lineAnnotation.label = {
                content: [lineLabel],
                display: true,
                textAlign: 'center',
            };
        }
        if (lineAxis == "y") {
            lineAnnotation.yScaleID = "y"
            lineAnnotation.yMin = linePos
            lineAnnotation.yMax = linePos
        } else if (lineAxis == "x") {
            lineAnnotation.xScaleID = "x"
            lineAnnotation.xMin = linePos
            lineAnnotation.xMax = linePos
        }
        annotationValue.annotations.line = lineAnnotation;
    }
    // arrow annotation
    if (arrowXMin && arrowXMax) {
        var arrowDisplay = false;
        if (arrowLabel) {
            arrowDisplay = true;
        }
        var arrowAnnotation = {
            type: "line",
            borderColor: arrowColor,
            borderWidth: 2,
            curve: true,
            label: {
                display: arrowDisplay,
                backgroundColor: "rgb(211,211,211)",
                borderRadius: 0,
                color: "rgb(169,169,169)",
                content: arrowLabel,
            },
            arrowHeads: {
                start: {
                    display: doubleArrow,
                    borderColor: arrowColor,
                },
                end: {
                    display: true,
                    borderColor: arrowColor,
                },
            },
            xMin: parseFloat(arrowXMin),
            xMax: parseFloat(arrowXMax),
            yMin: parseFloat(arrowYMin),
            yMax: parseFloat(arrowYMax),
            xScaleID: "x",
            yScaleID: "y",
            draggable: true,
            onDragEnd: function (e, annotation) {
                console.log("arrow drag", annotation);
            },
        };
        annotationValue.annotations.arrow = arrowAnnotation;
    }

    window.colbyChartInfo.annotation = annotationValue
}
function updateChartConfig() {
    const formData = getChartConfigFormData('#chart-config')
    console.log('[formData]', formData)
    const chartConfig = window.colbyChartInfo
    if (!ColbyChart.instance) return

    const { selectedXAxis, isSwitched, showLabel } = formData
    const chart = ColbyChart.instance.getChart()
    chartConfig.options = ColbyChart.instance.getChart().options


    /**
     * Line Annoation
     */




    const labelAnnotationsDiv = $("#labelAnnotations");
    const boxAnnotationsDiv = $("#boxAnnotations");


    // if (isSwitched === "true") {
    //     chartConfig.options.indexAxis = "y";
    // } else if (chartConfig.options.indexAxis == "y") {
    //     delete chartConfig.options.indexAxis;
    // }

    // chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;

    // chartConfig.options.scales.y.title.text =
    //     isSwitched === "true" ? datasets[selectedXAxis].label : form.yTitle;
    // chartConfig.data.labels = datasets[selectedXAxis].data;
    // chartConfig.data.datasets = selectedDatasets.map(
    //     (datasetIndex) => datasets[datasetIndex]
    // );
    // var xMinValue = Math.max(...datasets[selectedXAxis].data);
    // var xMaxValue = Math.min(...datasets[selectedXAxis].data);
    // var yMinValue = Math.min(
    //     ...selectedDatasets.map((datasetIndex) =>
    //         Math.min(...datasets[datasetIndex].data)
    //     )
    // );
    // var yMaxValue = Math.max(
    //     ...selectedDatasets.map((datasetIndex) =>
    //         Math.max(...datasets[datasetIndex].data)
    //     )
    // );

    // chartConfig.options.plugins.title.text = form.title;
    // chartConfig.options.plugins.title.font = {
    //     family: form.titleFont,
    //     size: parseInt(form.titleSize),
    // };
    // chartConfig.options.plugins.title.color = form.titleColor;
    // chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;
    // chartConfig.options.scales.y.title.text = form.yTitle;
    // chartConfig.options.scales.x.stacked = form.stacked === "true";
    // chartConfig.options.scales.y.stacked = form.stacked === "true";

    // chartConfig.options.scales.y.suggestedMin = form.yMin
    //     ? parseFloat(form.yMin)
    //     : yMinValue;
    // chartConfig.options.scales.y.suggestedMax = form.yMax
    //     ? parseFloat(form.yMax)
    //     : yMaxValue;
    // chartConfig.options.scales.x.suggestedMin = form.xMin
    //     ? parseFloat(form.xMin)
    //     : xMinValue;
    // chartConfig.options.scales.x.suggestedMax = form.xMax
    //     ? parseFloat(form.xMax)
    //     : xMaxValue;







    // for (var j = 0; j < boxAnnotationsDiv.children.length; j++) {
    //     var boxDiv = boxAnnotationsDiv.children[j];
    //     if (boxDiv && boxDiv.children.length >= 4) {
    //         console.log("checking box nodes");
    //         var boxXMin = boxDiv.children[0].children[0];
    //         var boxXMax = boxDiv.children[1].children[0];
    //         var boxYMin = boxDiv.children[2].children[0];
    //         var boxYMax = boxDiv.children[3].children[0];
    //         var boxLabel = boxDiv.children[4].children[0];

    //         if (boxXMin && boxXMax && boxYMin && boxYMax) {
    //             annotationValue.annotations["box" + (j + 1)] = {
    //                 type: "box",
    //                 backgroundColor: "rgba(255, 99, 132, 0.25)",
    //                 xMin: parseFloat(boxXMin),
    //                 xMax: parseFloat(boxXMax),
    //                 yMin: parseFloat(boxYMin),
    //                 yMax: parseFloat(boxYMax),

    //                 draggable: true,
    //                 onDrag: function (event) {
    //                     console.log("Annotation Dragging...");
    //                 },
    //                 onDragEnd: function (e, annotation) {
    //                     console.log("box drag", annotation);
    //                 },
    //             };
    //         }
    //     } else {
    //         console.log(
    //             "Child not found or not enough children for box",
    //             j,
    //             boxDiv
    //         );
    //     }
    // }

    // for (var i = 0; i < labelAnnotationsDiv.children.length; i++) {
    //     var labelDiv = labelAnnotationsDiv.children[i];
    //     if (labelDiv && labelDiv.children.length >= 7) {
    //         var labelAnchor = labelDiv.children[6].children[0].checked;
    //         var labelX = labelDiv.children[0].children[0];
    //         var labelY = labelDiv.children[1].children[0];
    //         var labelText = labelDiv.children[2].children[0];
    //         var labelColor = labelDiv.children[3].children[0];
    //         var labelFont = labelDiv.children[4].children[0];
    //         var labelSize = labelDiv.children[5].children[0];

    //         var adjustValueX = 0;
    //         var adjustValueY = 0;
    //         if (labelAnchor == true) {
    //             if (parseFloat(labelX) == 0) {
    //                 adjustValueX = 50;
    //                 adjustValueY = -30;
    //             }
    //             if (
    //                 parseFloat(labelY) >=
    //                 0.9 * chartConfig.options.scales.y.suggestedMax
    //             ) {
    //                 console.log("Y label close to the top:", labelY);
    //                 console.log("Y max:", chartConfig.options.scales.y.suggestedMax);
    //                 adjustValueX = 0;
    //                 adjustValueY = 20;
    //             } else {
    //                 adjustValueX = -30;
    //                 adjustValueY = -30;
    //             }
    //         }

    //         if (labelX && labelY) {
    //             let isStacked = form.stacked === "true";
    //             let correspondingYValue = findYValueForX(
    //                 chartData,
    //                 parseInt(labelX),
    //                 labelY,
    //                 isStacked
    //             );

    //             console.log("labelColor", labelColor);
    //             annotationValue.annotations["label" + (i + 1)] = {
    //                 type: "label",
    //                 xValue: parseFloat(labelX),
    //                 yValue: correspondingYValue ? correspondingYValue : labelY,
    //                 backgroundColor: labelColor,
    //                 borderRadius: 6,
    //                 borderWidth: 1,
    //                 content: [labelText],
    //                 callout: {
    //                     display: true,
    //                     position: "bottom",
    //                     margin: 0,
    //                 },
    //                 font: {
    //                     family: labelFont,
    //                     size: parseFloat(labelSize),
    //                 },
    //                 xAdjust: adjustValueX,
    //                 yAdjust: adjustValueY,
    //             };
    //         }
    //     } else {
    //         console.log("Child not found or not enough children", i, labelDiv);
    //     }
    // }

    // console.log("annotationValue", annotationValue);



    // chartConfig.options.plugins.annotation = {
    //     drawTime: 'afterDatasetsDraw',
    //     events: ["click"],
    //     annotations: testAnnotations
    // }


    // chartConfig.options.plugins.legend.display = showLegend;
    // chartConfig.options.plugins.datalabels.display = showLabel;

    // renderChart();
}
/**
 * Tab Button Click
 */
function onOpenTabClick(buttonTabId, tabId) {
    // init
    jQuery('.tab-content').hide()
    jQuery('.tab-button').removeClass('active')

    jQuery(`#${tabId}`).css('display', 'block')
    jQuery(`#${buttonTabId}`).addClass('active')
}

export function onToggleVisibility(ele) {
    const ref = ele.data('ref');
    const visibility = ele.data('visibility');
    console.log('[visibility]', ref, visibility)

    if (visibility == "true") {
        ele.data('visibility', 'false')
    } else {
        ele.data('visibility', 'true')
    }
    if (jQuery(ref)) {
        if (ele.data('visibility') == 'true') {
            jQuery(ref).show()
        } else {
            jQuery(ref).hide()

        }
    }



    switch (ref) {
        case "#lineAnnotation": {
        }
        case "#labelAnnotations": {
        }
        case "#boxAnnotations": {
        }
    }
}

const initEvent = () => {
    // register
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document is ready");
        setTimeout(updateChart, 4000);
    });
    // tab button
    jQuery('.tab-button').on('click', function () {
        const buttonTabId = jQuery(this).attr('id');
        const tabId = jQuery(this).data('tab');
        console.log('[tab data]:', buttonTabId, tabId);
        onOpenTabClick(buttonTabId, tabId)
    })
    // toggle-visibility click
    jQuery('.toggle-visibility').on('click', function () {
        const element = jQuery(this)
        onToggleVisibility(element)

    });

    // colby-input Change
    jQuery('.colby-input').on('change', function () {
        console.log('[colby-input] change')
        updateChart()
    });

    // colby-select change
    jQuery('.colby-select').on('change', function () {
        console.log('[colby-select update] updateSelectOptions')
        updateChart()
    });
}



export { initEvent };