/// <reference path="typings/jquery/jquery.d.ts" />
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
var ChartsList = (function () {
    function ChartsList() {
        this.charts = new Array();
        this.chartdata = new Array();
    }
    ChartsList.prototype.UpdateChart = function () {
        $("#Groups").change(function () {
            var _this = this;
            var id = $(this).val();
            $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + id, function (data) {
                _this.charts = data;
                var select = '<select class="form-control">';
                for (var i = 0; i < _this.charts.length; i++) {
                    var selectRow = '<option>' + _this.charts[i].Name + '</option>';
                }
                select += '<option disabled selected> Select Chart</option>';
                select += selectRow;
                select += '</select>';
                $("#Chart").replaceWith(select);
            });
        });
    };
    return ChartsList;
}());
var vwChart = (function () {
    function vwChart() {
    }
    return vwChart;
}());
var vwData = (function () {
    function vwData() {
    }
    return vwData;
}());
window.onload = function () {
    var chartsList = new ChartsList();
    chartsList.UpdateChart();
};
