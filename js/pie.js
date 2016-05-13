/**
 * Created by nex on 5/7/16.
 */
var charts = [];

function runPie(){
    charts.push(pieChart({
        fillPercent: 77,
        backgroundStrokeColor: "#88D7F4",
        foregroundStrokeColor: "#F4F4F4",
        animationRate: 322,
        radius: 66,
        stroke: 26,
        container: document.getElementById("piechart")
    }));
}

runPie();

function redrawPiechart(options){
    for(var i = 0; i < charts.length; ++i) {
        charts[i].destroyChart();
    }
    charts = [];
    charts.push(pieChart({
        fillPercent: options,
        backgroundStrokeColor: "#88D7F4",
        foregroundStrokeColor: "#F4F4F4",
        animationRate: 1,
        radius: 66,
        stroke: 26,
        container: document.getElementById("piechart")
    }));
}