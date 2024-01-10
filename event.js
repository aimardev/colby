
import { toggleVisibility } from './actions';
import { updateChart } from './col-chart'// windows event 
// import { openTab } from './actions';
import jQuery from "jquery";


function getChartConfigFormData() {
    const form = jQuery('#chart-config');
    const formData = form.serializeArray();
    const formDataObject = {}
    formData.forEach(function ({ name, value }) {
        formDataObject[name] = value;
    });
    return formDataObject
}
function getChartConfig() {
    const formData = getChartConfigFormData()
    console.log('[formData]', formData)
    /**
     * {
    "title": "Default Title",
    "xAxisDataset": "0",
    "stacked": "false",
    "switch": "false",
    "xMin": "",
    "xMax": "",
    "yMin": "",
    "yMax": "",
    "yTitle": "",
    "lineAxis": "y",
    "linePos": "11",
    "lineLabel": "Test",
    "lineStyle": "dashed",
    "lineColor": "#d3d3d3",
    "lineThickness": "1",
    "arrowXMin": "",
    "arrowXMax": "",
    "arrowYMin": "",
    "arrowYMax": "",
    "doubleArrow": "false",
    "arrowLabel": "",
    "arrowColor": "#d3d3d3",
    "titleFont": "Lora",
    "titleColor": "#008080",
    "titleSize": "18"
}
     */

    const selectedXAxis = +formData.xAxisDataset;
    var selectedDatasets = Array.from(
        document.querySelectorAll("#plotDatasetsCheckboxes input:checked")
    ).map((checkbox) => parseInt(checkbox.value));
    console.log("chartData", chartData);
    const datasets = createDatasets(chartData, [
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(231, 233, 237, 1)",
        "rgba(54, 162, 235, 1)",
    ]);


    // var lineAxis = form.lineAxis.value;
    // var linePos = form.linePos.value;
    // var lineLabel = form.lineLabel.value;
    // var lineStyle = form.lineStyle.value;
    // var lineColor = form.lineColor.value;
    // var lineThickness = form.lineThickness.value;
    // var arrowXMin = form.arrowXMin.value;
    // var arrowXMax = form.arrowXMax.value;
    // var arrowYMin = form.arrowYMin.value;
    // var arrowYMax = form.arrowYMax.value;
    // var doubleArrow = form.doubleArrow.value === "true";
    // var arrowLabel = form.arrowLabel.value;
    // var arrowColor = form.arrowColor.value;
    // var labelAnnotationsDiv = document.getElementById("labelAnnotations");
    // var boxAnnotationsDiv = document.getElementById("boxAnnotations");
    // var showLegend = form.legendCheck.checked;
    // var showLabel = form.labelCheck.checked;
    // console.log("boxAnnotationsDiv:", boxAnnotationsDiv);
    // var isSwitched = form.switch.value;

    // if (isSwitched === "true") {




    //     chartConfig.options.indexAxis = "y";
    // } else if (chartConfig.options.indexAxis == "y") {
    //     delete chartConfig.options.indexAxis;
    // }

    // chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;


    // chartConfig.options.scales.y.title.text =
    //     isSwitched === "true" ? datasets[selectedXAxis].label : form.yTitle.value;
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

    // chartConfig.options.plugins.title.text = form.title.value;
    // chartConfig.options.plugins.title.font = {
    //     family: form.titleFont.value,
    //     size: parseInt(form.titleSize.value),
    // };
    // chartConfig.options.plugins.title.color = form.titleColor.value;
    // chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;
    // chartConfig.options.scales.y.title.text = form.yTitle.value;
    // chartConfig.options.scales.x.stacked = form.stacked.value === "true";
    // chartConfig.options.scales.y.stacked = form.stacked.value === "true";

    // chartConfig.options.scales.y.suggestedMin = form.yMin.value
    //     ? parseFloat(form.yMin.value)
    //     : yMinValue;
    // chartConfig.options.scales.y.suggestedMax = form.yMax.value
    //     ? parseFloat(form.yMax.value)
    //     : yMaxValue;
    // chartConfig.options.scales.x.suggestedMin = form.xMin.value
    //     ? parseFloat(form.xMin.value)
    //     : xMinValue;
    // chartConfig.options.scales.x.suggestedMax = form.xMax.value
    //     ? parseFloat(form.xMax.value)
    //     : xMaxValue;



    // var annotationValue = { annotations: [] };
    // if (linePos) {
    //     var lineAnnotation = {
    //         type: "line",
    //         borderColor: "rgb(255, 99, 132)",
    //         borderWidth: 2,
    //     };

    //     if (lineStyle) {
    //         if (lineStyle == "dashed") {
    //             lineAnnotation.borderDash = [5, 5];
    //         } else if (lineStyle == "wave") {
    //             lineAnnotation.borderDash = [10, 5, 5];
    //         }
    //     }

    //     if (lineColor) {
    //         lineAnnotation.borderColor = lineColor;
    //     }

    //     if (lineThickness) {
    //         lineAnnotation.borderWidth = lineThickness;
    //     }

    //     if (lineLabel) {
    //         lineAnnotation.label = {
    //             content: lineLabel,
    //             enabled: true,
    //         };
    //     }


    //     lineAnnotation.draggable = true;
    //     lineAnnotation.onDrag = function (e, annotation) {
    //         console.log("drag", annotation);
    //     };
    //     annotationValue.annotations.push(lineAnnotation);
    // }

    // if (arrowXMin && arrowXMax) {
    //     var arrowDisplay = false;
    //     if (arrowLabel) {
    //         arrowDisplay = true;
    //     }
    //     var arrowAnnotation = {
    //         type: "line",
    //         borderColor: arrowColor,
    //         borderWidth: 2,
    //         curve: true,
    //         label: {
    //             display: arrowDisplay,
    //             backgroundColor: "rgb(211,211,211)",
    //             borderRadius: 0,
    //             color: "rgb(169,169,169)",
    //             content: arrowLabel,
    //         },
    //         arrowHeads: {
    //             start: {
    //                 display: doubleArrow,
    //                 borderColor: arrowColor,
    //             },
    //             end: {
    //                 display: true,
    //                 borderColor: arrowColor,
    //             },
    //         },
    //         xMin: parseFloat(arrowXMin),
    //         xMax: parseFloat(arrowXMax),
    //         yMin: parseFloat(arrowYMin),
    //         yMax: parseFloat(arrowYMax),
    //         xScaleID: "x",
    //         yScaleID: "y",
    //         draggable: true,
    //         onDragEnd: function (e, annotation) {
    //             console.log("arrow drag", annotation);
    //         },
    //     };
    //     annotationValue.annotations.arrow = arrowAnnotation;
    // }

    // for (var j = 0; j < boxAnnotationsDiv.children.length; j++) {
    //     var boxDiv = boxAnnotationsDiv.children[j];
    //     if (boxDiv && boxDiv.children.length >= 4) {
    //         console.log("checking box nodes");
    //         var boxXMin = boxDiv.children[0].children[0].value;
    //         var boxXMax = boxDiv.children[1].children[0].value;
    //         var boxYMin = boxDiv.children[2].children[0].value;
    //         var boxYMax = boxDiv.children[3].children[0].value;
    //         var boxLabel = boxDiv.children[4].children[0].value;

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
    //         var labelX = labelDiv.children[0].children[0].value;
    //         var labelY = labelDiv.children[1].children[0].value;
    //         var labelText = labelDiv.children[2].children[0].value;
    //         var labelColor = labelDiv.children[3].children[0].value;
    //         var labelFont = labelDiv.children[4].children[0].value;
    //         var labelSize = labelDiv.children[5].children[0].value;

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
    //             let isStacked = form.stacked.value === "true";
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
        const visibility = jQuery(this).data('visibility');
        toggleVisibility(visibility)
    });
    // colby-input Change
    jQuery('.colby-input').on('change', function () {
        // const visibility = jQuery(this).data('visibility');
        // toggleVisibility(visibility)
        console.log('[colby-input] change')
        getChartConfig()
    });
    // colby-select change
    jQuery('.colby-select').on('change', function () {
        // const visibility = jQuery(this).data('visibility');
        // toggleVisibility(visibility)
        console.log('[colby-select update] updateSelectOptions')
        getChartConfig()
    });
}



export { initEvent };