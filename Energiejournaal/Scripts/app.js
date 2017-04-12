/// <reference path="typings/jquery/jquery.d.ts" />
var vwChart = (function () {
    function vwChart(Id, Name, Group, Period, PeriodName) {
        this.Id = Id;
        this.Name = Name;
        this.Group = Group;
        this.Period = Period;
        this.PeriodName = PeriodName;
    }
    return vwChart;
}());
var vwData = (function () {
    function vwData(Chart, ChartName, Value) {
        this.Chart = Chart;
        this.ChartName = ChartName;
        this.Value = Value;
    }
    return vwData;
}());
var ChartsList = (function () {
    function ChartsList() {
        this.charts = new Array();
        this.chartdata = new Array();
    }
    ChartsList.prototype.UpdateChart = function () {
        $(document).on('change', '#Groups', function () {
            var _this = this;
            var id = $('#Groups').val();
            $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + id, function (data) {
                _this.data = data;
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
var chartsList = new ChartsList();
chartsList.UpdateChart();
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var name = 'Power Belgium Spot EUR/MWh';
