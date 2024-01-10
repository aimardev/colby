import { ColbyChart } from "./col-chart";

export function addLabelFields() {
    var labelAnnotationsDiv = document.getElementById("labelAnnotations");
    var numLabels = labelAnnotationsDiv.children.length;

    var newLabelDiv = document.createElement("div");
    newLabelDiv.id = "label" + (numLabels + 1);

    var xLabel = document.createElement("label");
    xLabel.textContent = "X Index (0 = 1st dimension):";
    var xInput = document.createElement("input");
    xInput.type = "number";
    xInput.name = "labelX" + (numLabels + 1);
    xInput.onchange = updateChart;
    xLabel.appendChild(xInput);
    newLabelDiv.appendChild(xLabel);

    var yLabel = document.createElement("label");
    yLabel.textContent = "Y (series name):";
    var yInput = document.createElement("input");
    yInput.type = "string";
    yInput.name = "labelY" + (numLabels + 1);
    yInput.onchange = updateChart;
    yLabel.appendChild(yInput);
    newLabelDiv.appendChild(yLabel);

    var textLabel = document.createElement("label");
    textLabel.textContent = "Text:";
    var textInput = document.createElement("input");
    textInput.type = "text";
    textInput.name = "labelText" + (numLabels + 1);
    textInput.placeholder = "Enter text";
    textInput.onchange = updateChart;
    textLabel.appendChild(textInput);
    newLabelDiv.appendChild(textLabel);

    var colorLabel = document.createElement("label");
    colorLabel.textContent = "Background Color:";
    var colorInput = document.createElement("input");
    colorInput.type = "color";
    colorInput.name = "labelColor" + (numLabels + 1);
    colorInput.value = "#000"; //Default Value
    colorInput.onchange = updateChart;
    colorLabel.appendChild(colorInput);
    newLabelDiv.appendChild(colorLabel);

    var fontLabel = document.createElement("label");
    fontLabel.textContent = "Font Style:";
    var fontInput = document.createElement("input");
    fontInput.type = "text";
    fontInput.name = "labelFont" + (numLabels + 1);
    fontInput.value = "Arial"; //Default Value
    fontInput.placeholder = "Enter font style (e.g., Arial)";
    fontInput.onchange = updateChart;
    fontLabel.appendChild(fontInput);
    newLabelDiv.appendChild(fontLabel);

    var sizeLabel = document.createElement("label");
    sizeLabel.textContent = "Font Size:";
    var sizeInput = document.createElement("input");
    sizeInput.type = "number";
    sizeInput.name = "labelSize" + (numLabels + 1);
    sizeInput.value = "12";
    sizeInput.placeholder = "Enter font size (e.g., 12)";
    sizeInput.onchange = updateChart;
    sizeLabel.appendChild(sizeInput);
    newLabelDiv.appendChild(sizeLabel);

    // add Data Point Anchor field
    var anchorLabel = document.createElement("label");
    anchorLabel.textContent = "Anchor label to data point:";
    var anchorInput = document.createElement("input");
    anchorInput.type = "checkbox";
    anchorInput.name = "labelAnchor" + (numLabels + 1);
    anchorInput.checked = true; // default to checked
    anchorInput.onchange = updateChart;
    anchorLabel.appendChild(anchorInput);
    newLabelDiv.appendChild(anchorLabel);

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.onclick = function () {
        removeLabelFields(newLabelDiv.id);
    };
    removeButton.textContent = "Remove Label";
    newLabelDiv.appendChild(removeButton);

    labelAnnotationsDiv.appendChild(newLabelDiv);

    /* Add the addLabel button here
    var addLabelButton = document.createElement('button');
    addLabelButton.type = 'button';
    addLabelButton.onclick = addLabelFields;
    addLabelButton.textContent = 'Add Label';
    labelAnnotationsDiv.appendChild(addLabelButton);
    */
}

export function removeLabelFields(id) {
    var labelDiv = document.getElementById(id);
    labelDiv.parentNode.removeChild(labelDiv);
    updateChart();
}

export function addBoxFields() {
    var boxAnnotationsDiv = document.getElementById("boxAnnotations");
    var numBoxes = boxAnnotationsDiv.children.length;

    var newBoxDiv = document.createElement("div");
    newBoxDiv.id = "box" + (numBoxes + 1);

    var boxXMin = document.createElement("label");
    boxXMin.textContent = "X Min:";
    var boxXMinInput = document.createElement("input");
    boxXMinInput.type = "number";
    boxXMinInput.name = "boxXMin" + (numBoxes + 1);
    boxXMinInput.onchange = updateChart;
    boxXMin.appendChild(boxXMinInput);
    newBoxDiv.appendChild(boxXMin);

    var boxXMax = document.createElement("label");
    boxXMax.textContent = "X Max:";
    var boxXMaxInput = document.createElement("input");
    boxXMaxInput.type = "number";
    boxXMaxInput.name = "boxXMax" + (numBoxes + 1);
    boxXMaxInput.onchange = updateChart;
    boxXMax.appendChild(boxXMaxInput);
    newBoxDiv.appendChild(boxXMax);

    var boxYMin = document.createElement("label");
    boxYMin.textContent = "Y Min:";
    var boxYMinInput = document.createElement("input");
    boxYMinInput.type = "number";
    boxYMinInput.name = "boxYMin" + (numBoxes + 1);
    boxYMinInput.onchange = updateChart;
    boxYMin.appendChild(boxYMinInput);
    newBoxDiv.appendChild(boxYMin);

    var boxYMax = document.createElement("label");
    boxYMax.textContent = "Y Max:";
    var boxYMaxInput = document.createElement("input");
    boxYMaxInput.type = "number";
    boxYMaxInput.name = "boxYMax" + (numBoxes + 1);
    boxYMaxInput.onchange = updateChart;
    boxYMax.appendChild(boxYMaxInput);
    newBoxDiv.appendChild(boxYMax);

    var boxLabel = document.createElement("label");
    boxLabel.textContent = "Label:";
    var boxLabelInput = document.createElement("input");
    boxLabelInput.type = "text";
    boxLabelInput.name = "boxLabel" + (numBoxes + 1);
    boxLabelInput.onchange = updateChart;
    boxLabel.appendChild(boxLabelInput);
    newBoxDiv.appendChild(boxLabel);

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.onclick = function () {
        removeLabelFields(newBoxDiv.id);
    };
    removeButton.textContent = "Remove Label";
    newBoxDiv.appendChild(removeButton);

    boxAnnotationsDiv.appendChild(newBoxDiv);

    /* Add the addBoxbutton here
    var addBoxButton = document.createElement('button');
    addBoxButton.type = 'button';
    addBoxButton.onclick = addBoxFields;
    addBoxButton.textContent = 'Add Box';
    boxAnnotationsDiv.appendChild(addBoxButton);
    */
}

export function removeBoxFields(id) {
    var boxDiv = document.getElementById(id);
    boxDiv.parentNode.removeChild(boxDiv);
    updateChart();
}



export function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";


        if (id === "labelAnnotations") {
            var labelAnnotationsDiv = document.getElementById("labelAnnotations");


            if (labelAnnotationsDiv.children.length <= 1) {

                addLabelFields();
            }
        }

        if (id === "boxAnnotations") {
            var boxAnnotationsDiv = document.getElementById("boxAnnotations");


            if (boxAnnotationsDiv.children.length <= 1) {
                addBoxFields();
            }
        }
    } else {
        element.style.display = "none";
    }
}
export function renderChartIfNeeded() {
    if (chartData && defaultValues) {
        var form = document.forms.chartConfig;


        Object.keys(defaultValues).forEach(function (key) {
            if (
                key !== "labelAnnotations" &&
                key !== "boxAnnotations" &&
                form[key]
            ) {
                form[key].value = defaultValues[key];
            }
        });


        console.log("starting annotations");
        var labelAnnotationsDiv = document.getElementById("labelAnnotations");
        console.log("labelAnnotationsDiv:", labelAnnotationsDiv);
        if (labelAnnotationsDiv) {
            labelAnnotationsDiv.innerHTML = "";
            defaultValues.labelAnnotations.forEach(function (annotation, index) {
                addLabelFields();
                var labelDiv = document.getElementById("label" + (index + 1));
                labelDiv.children[1].checked = annotation.labelAnchor || true;
                labelDiv.children[3].value = annotation.labelX || 1;
                labelDiv.children[5].value = annotation.labelY || 1;
                labelDiv.children[7].value = annotation.labelText;
                labelDiv.children[9].value = annotation.labelColor || "#FFFFFF";
                labelDiv.children[11].value = annotation.labelFont || "Arial";
                labelDiv.children[13].value = annotation.labelSize || "8";
            });
        } else {
            console.log("labelAnnotationsDiv is null or undefined!");
        }

        var boxAnnotationsDiv = document.getElementById("boxAnnotations");
        boxAnnotationsDiv.innerHTML = "";
        defaultValues.boxAnnotations.forEach(function (annotation, index) {
            addBoxFields();
            var boxDiv = document.getElementById("box" + (index + 1));
            boxDiv.children[0].children[0].value = annotation.boxXMin;
            boxDiv.children[1].children[0].value = annotation.boxXMax;
            boxDiv.children[2].children[0].value = annotation.boxYMin;
            boxDiv.children[3].children[0].value = annotation.boxYMax;
            boxDiv.children[4].children[0].value = annotation.boxLabel;
        });


        chartConfig = getInitialConfig(chartData);
        renderChart();
    }
}
export function populateSelectOptions(data) {
    var xAxisSelect = document.getElementById("xAxisSelect");
    var plotDatasetsCheckboxes = document.getElementById(
        "plotDatasetsCheckboxes"
    );
    data[0].forEach((label, index) => {
        var option = document.createElement("option");
        option.text = label;
        option.value = index;
        xAxisSelect.add(option);

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "dataset" + index;
        checkbox.value = index;
        checkbox.checked = true;
        checkbox.onchange = updateChart;
        var labelElem = document.createElement("label");
        labelElem.htmlFor = "dataset" + index;
        labelElem.appendChild(document.createTextNode(label));

        plotDatasetsCheckboxes.appendChild(checkbox);
        plotDatasetsCheckboxes.appendChild(labelElem);
    });
    xAxisSelect.selectedIndex = 0;
    updateSelectOptions();
}
export function updateSelectOptions() {
    var xAxisSelect = document.getElementById("xAxisSelect");
    var selectedXAxis = parseInt(xAxisSelect.value);
    var checkboxes = document.querySelectorAll(
        '#plotDatasetsCheckboxes input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
        checkbox.style.display = checkbox.value == selectedXAxis ? "none" : "";
        checkbox.nextSibling.style.display =
            checkbox.value == selectedXAxis ? "none" : "";
        if (checkbox.value == selectedXAxis) checkbox.checked = false;
    });
}

export function isDate(value) {
    const date = new Date(value);
    return !isNaN(date.getTime());
}
export function getInitialConfig(data) {
    console.log("initial data set - ", data);
    var colorArray = [
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(231, 233, 237, 1)",
        "rgba(54, 162, 235, 1)",
    ];
    var datasets = createDatasets(data, colorArray);

    var minValue = Math.min(
        ...datasets.map((dataset) => Math.min(...dataset.data))
    );
    var maxValue = Math.max(
        ...datasets.map((dataset) => Math.max(...dataset.data))
    );


    if (chartType === "scatter") {
    }

    return {
        plugins: [ChartDataLabels, dragger],
        type: chartType,
        data: {
            labels: datasets[0].data,
            datasets: datasets.slice(1),
        },
        options: {
            responsive: true,
            events: ["mousedown", "mouseup", "mousemove", "mouseout"],
            aspectRatio: 1,
            plugins: {
                title: {
                    display: true,
                    text: "Default Title",
                },

                datalabels: {
                    display: false,
                    align: "end",
                    anchor: "end",
                    formatter: (value, context) => value,
                },
                legend: {
                    display: false,
                },









            },
            scales: {
                x: {


                    stacked: true,
                    title: {
                        display: true,
                        text: "Default X-Axis Label",
                    },
                },
                y: {

                    stacked: true,
                    title: {
                        display: true,
                        text: "Default Y-Axis Label",
                    },


                },
            },
        },
    };
}


export function renderChart() {
    if (chart) {
        chart.destroy();
    }
    Chart.register(ChartDataLabels);
    console.log("ctx", ctx, chartConfig);
    chart = new Chart(ctx, chartConfig);

}
export function updateMinMaxInputs() {
    var form = document.forms.chartConfig;
    form.yMin.value = chartConfig.options.scales.y.suggestedMin;
    form.yMax.value = chartConfig.options.scales.y.suggestedMax;
    form.xMin.value = chartConfig.options.scales.x.suggestedMin;
    form.xMax.value = chartConfig.options.scales.x.suggestedMax;
}



export function findYValueForX(data, xIndex, datasetIdentifier, isStacked) {

    if (xIndex < 0 || xIndex >= data.length - 1) {
        console.log("xIndex out of range:", xIndex);
        return null;
    }


    let datasetIndex;
    if (typeof datasetIdentifier === "string") {
        datasetIndex = data[0].indexOf(datasetIdentifier);
        if (datasetIndex === -1) {
            console.log("Column header not found:", datasetIdentifier);
            return null;
        }
    } else {
        datasetIndex = datasetIdentifier;
    }


    if (datasetIndex < 0 || datasetIndex >= data[0].length) {
        console.log("datasetIndex out of range:", datasetIndex);
        return null;
    }

    if (isStacked) {

        let sum = 0;
        for (let i = 1; i <= datasetIndex; i++) {
            sum += data[xIndex + 1][i];
        }
        return sum;
    }


    return data[xIndex + 1][datasetIndex];
}
export function updateChart() {
    var form = document.forms.chartConfig;
    console.log("form:", form);
    var selectedXAxis = parseInt(form.xAxisDataset.value);
    var selectedDatasets = Array.from(
        document.querySelectorAll("#plotDatasetsCheckboxes input:checked")
    ).map((checkbox) => parseInt(checkbox.value));
    console.log("chartData", chartData);
    var datasets = createDatasets(chartData, [
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(231, 233, 237, 1)",
        "rgba(54, 162, 235, 1)",
    ]);


    var lineAxis = form.lineAxis.value;
    var linePos = form.linePos.value;
    var lineLabel = form.lineLabel.value;
    var lineStyle = form.lineStyle.value;
    var lineColor = form.lineColor.value;
    var lineThickness = form.lineThickness.value;
    var arrowXMin = form.arrowXMin.value;
    var arrowXMax = form.arrowXMax.value;
    var arrowYMin = form.arrowYMin.value;
    var arrowYMax = form.arrowYMax.value;
    var doubleArrow = form.doubleArrow.value === "true";
    var arrowLabel = form.arrowLabel.value;
    var arrowColor = form.arrowColor.value;
    var labelAnnotationsDiv = document.getElementById("labelAnnotations");
    var boxAnnotationsDiv = document.getElementById("boxAnnotations");
    var showLegend = form.legendCheck.checked;
    var showLabel = form.labelCheck.checked;
    console.log("boxAnnotationsDiv:", boxAnnotationsDiv);
    var isSwitched = form.switch.value;

    if (isSwitched === "true") {




        chartConfig.options.indexAxis = "y";
    } else if (chartConfig.options.indexAxis == "y") {
        delete chartConfig.options.indexAxis;
    }

    chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;


    chartConfig.options.scales.y.title.text =
        isSwitched === "true" ? datasets[selectedXAxis].label : form.yTitle.value;
    chartConfig.data.labels = datasets[selectedXAxis].data;
    chartConfig.data.datasets = selectedDatasets.map(
        (datasetIndex) => datasets[datasetIndex]
    );
    var xMinValue = Math.max(...datasets[selectedXAxis].data);
    var xMaxValue = Math.min(...datasets[selectedXAxis].data);
    var yMinValue = Math.min(
        ...selectedDatasets.map((datasetIndex) =>
            Math.min(...datasets[datasetIndex].data)
        )
    );
    var yMaxValue = Math.max(
        ...selectedDatasets.map((datasetIndex) =>
            Math.max(...datasets[datasetIndex].data)
        )
    );

    chartConfig.options.plugins.title.text = form.title.value;
    chartConfig.options.plugins.title.font = {
        family: form.titleFont.value,
        size: parseInt(form.titleSize.value),
    };
    chartConfig.options.plugins.title.color = form.titleColor.value;
    chartConfig.options.scales.x.title.text = datasets[selectedXAxis].label;
    chartConfig.options.scales.y.title.text = form.yTitle.value;
    chartConfig.options.scales.x.stacked = form.stacked.value === "true";
    chartConfig.options.scales.y.stacked = form.stacked.value === "true";

    chartConfig.options.scales.y.suggestedMin = form.yMin.value
        ? parseFloat(form.yMin.value)
        : yMinValue;
    chartConfig.options.scales.y.suggestedMax = form.yMax.value
        ? parseFloat(form.yMax.value)
        : yMaxValue;
    chartConfig.options.scales.x.suggestedMin = form.xMin.value
        ? parseFloat(form.xMin.value)
        : xMinValue;
    chartConfig.options.scales.x.suggestedMax = form.xMax.value
        ? parseFloat(form.xMax.value)
        : xMaxValue;



    var annotationValue = { annotations: [] };
    if (linePos) {
        var lineAnnotation = {
            type: "line",
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
                content: lineLabel,
                enabled: true,
            };
        }


        lineAnnotation.draggable = true;
        lineAnnotation.onDrag = function (e, annotation) {
            console.log("drag", annotation);
        };
        annotationValue.annotations.push(lineAnnotation);
    }

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

    for (var j = 0; j < boxAnnotationsDiv.children.length; j++) {
        var boxDiv = boxAnnotationsDiv.children[j];
        if (boxDiv && boxDiv.children.length >= 4) {
            console.log("checking box nodes");
            var boxXMin = boxDiv.children[0].children[0].value;
            var boxXMax = boxDiv.children[1].children[0].value;
            var boxYMin = boxDiv.children[2].children[0].value;
            var boxYMax = boxDiv.children[3].children[0].value;
            var boxLabel = boxDiv.children[4].children[0].value;

            if (boxXMin && boxXMax && boxYMin && boxYMax) {
                annotationValue.annotations["box" + (j + 1)] = {
                    type: "box",
                    backgroundColor: "rgba(255, 99, 132, 0.25)",
                    xMin: parseFloat(boxXMin),
                    xMax: parseFloat(boxXMax),
                    yMin: parseFloat(boxYMin),
                    yMax: parseFloat(boxYMax),

                    draggable: true,
                    onDrag: function (event) {
                        console.log("Annotation Dragging...");
                    },
                    onDragEnd: function (e, annotation) {
                        console.log("box drag", annotation);
                    },
                };
            }
        } else {
            console.log(
                "Child not found or not enough children for box",
                j,
                boxDiv
            );
        }
    }

    for (var i = 0; i < labelAnnotationsDiv.children.length; i++) {
        var labelDiv = labelAnnotationsDiv.children[i];
        if (labelDiv && labelDiv.children.length >= 7) {
            var labelAnchor = labelDiv.children[6].children[0].checked;
            var labelX = labelDiv.children[0].children[0].value;
            var labelY = labelDiv.children[1].children[0].value;
            var labelText = labelDiv.children[2].children[0].value;
            var labelColor = labelDiv.children[3].children[0].value;
            var labelFont = labelDiv.children[4].children[0].value;
            var labelSize = labelDiv.children[5].children[0].value;

            var adjustValueX = 0;
            var adjustValueY = 0;
            if (labelAnchor == true) {
                if (parseFloat(labelX) == 0) {
                    adjustValueX = 50;
                    adjustValueY = -30;
                }
                if (
                    parseFloat(labelY) >=
                    0.9 * chartConfig.options.scales.y.suggestedMax
                ) {
                    console.log("Y label close to the top:", labelY);
                    console.log("Y max:", chartConfig.options.scales.y.suggestedMax);
                    adjustValueX = 0;
                    adjustValueY = 20;
                } else {
                    adjustValueX = -30;
                    adjustValueY = -30;
                }
            }

            if (labelX && labelY) {
                let isStacked = form.stacked.value === "true";
                let correspondingYValue = findYValueForX(
                    chartData,
                    parseInt(labelX),
                    labelY,
                    isStacked
                );

                console.log("labelColor", labelColor);
                annotationValue.annotations["label" + (i + 1)] = {
                    type: "label",
                    xValue: parseFloat(labelX),
                    yValue: correspondingYValue ? correspondingYValue : labelY,
                    backgroundColor: labelColor,
                    borderRadius: 6,
                    borderWidth: 1,
                    content: [labelText],
                    callout: {
                        display: true,
                        position: "bottom",
                        margin: 0,
                    },
                    font: {
                        family: labelFont,
                        size: parseFloat(labelSize),
                    },
                    xAdjust: adjustValueX,
                    yAdjust: adjustValueY,
                };
            }
        } else {
            console.log("Child not found or not enough children", i, labelDiv);
        }
    }

    console.log("annotationValue", annotationValue);



    chartConfig.options.plugins.annotation = {
        drawTime: 'afterDatasetsDraw',
        events: ["click"],
        annotations: testAnnotations
    }


    chartConfig.options.plugins.legend.display = showLegend;
    chartConfig.options.plugins.datalabels.display = showLabel;

    renderChart();
}

export function downloadChart() {
    var link = document.createElement("a");
    link.download = "chart.jpeg";
    link.href = chart.toBase64Image();
    link.click();
}
export function average(ctx) {
    const values = ctx.chart.data.datasets[0].data;
    return values.reduce((a, b) => a + b, 0) / values.length;
}
export function standardDeviation(ctx) {
    const values = ctx.chart.data.datasets[0].data;
    const n = values.length;
    const mean = average(ctx);
    return Math.sqrt(
        values.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
}
export function middleValue(ctx, index, perc) {
    const chart = ctx.chart;
    const dataset = chart.data.datasets[0];
    return dataset.data[index] * perc;
}
export function minValue(ctx) {
    const dataset = ctx.chart.data.datasets[0];
    const min = dataset.data.reduce(
        (max, point) => Math.min(point, max),
        Infinity
    );
    return isFinite(min) ? min : 0;
}
export function maxValue(ctx) {
    const datasets = ctx.chart.data.datasets;
    const count = datasets[0].data.length;
    let max = 0;
    for (let i = 0; i < count; i++) {
        let sum = 0;
        for (const dataset of datasets) {
            sum += dataset.data[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}


