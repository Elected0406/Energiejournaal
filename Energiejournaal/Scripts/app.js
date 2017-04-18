///<script type="text / javascript" src ="js / highcharts.js">
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
    function vwData(ID, Chart, ChartName, Line, LineName, LineType, LineTypeName, Period, PeriodName, Date, Value, Year, Month) {
        this.ID = ID;
        this.Chart = Chart;
        this.ChartName = ChartName;
        this.Line = Line;
        this.LineName = LineName;
        this.LineType = LineType;
        this.LineTypeName = LineTypeName;
        this.Period = Period;
        this.PeriodName = PeriodName;
        this.Date = Date;
        this.Value = Value;
        this.Year = Year;
        this.Month = Month;
    }
    return vwData;
}());
var ChartsList = (function () {
    function ChartsList() {
        this.charts = new Array();
    }
    ChartsList.prototype.UpdateChartList = function () {
        $.getJSON('http://localhost:4051/Home/GetCharts' + '?id=' + $('#Groups').val(), function (data) {
            var select = '<select class="form-control">';
            for (var i = 0; i < data.length; i++) {
                var selectRow = '<option label="' + data[i].Name +
                    '" value="' + data[i].ID + '">' + '</option>';
            }
            select += '<option disabled selected> Select Chart</option>';
            select += selectRow;
            select += '</select>';
            $("#Chart").html(select);
        });
    };
    return ChartsList;
}());
var DataList = (function () {
    function DataList() {
        this.ChartData = new Array();
    }
    DataList.prototype.UpdateChartData = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetData' + '?id=' + $('#Chart').val()
            + '&' + 'mindate=' + $('#mindate').val() + '&' + 'maxdate=' + $('#maxdate').val(), function (data) {
            var select = '<div class="row fpr fmt">' +
                '<div class="col-sm-6 btn-primary">' + 'ChartName' + '</div>' +
                '<div class="col-sm-1 btn-primary">' + 'Line' + '</div>' +
                '<div class="col-sm-2 btn-primary">' + 'LineName' + '</div>' +
                '<div class="col-sm-1 btn-primary">' + 'Value' + '</div>' +
                '<div class="col-sm-1 btn-primary">' + 'Year' + '</div>' +
                '<div class="col-sm-1 btn-primary">' + 'Month' + '</div>' +
                '</div>' + '<div class="row fpr">';
            for (var i = 0; i < data.length; i++) {
                _this.ChartData = data;
                var selectRow = '<div class="col-sm-6">' + _this.ChartData[i].ChartName + '</div>' +
                    '<div class="col-sm-1">' + _this.ChartData[i].Line + '</div>' +
                    '<div class="col-sm-2">' + _this.ChartData[i].LineName + '</div>' +
                    '<div class="col-sm-1">' + _this.ChartData[i].Value + '</div>' +
                    '<div class="col-sm-1">' + _this.ChartData[i].Year + '</div>' +
                    '<div class="col-sm-1">' + _this.ChartData[i].Month + '</div>';
                select += selectRow;
            }
            select += '</div>';
            $("#Data2").html(select);
        });
    };
    return DataList;
}());
var chartsList = new ChartsList();
$('#Groups').change(function () { chartsList.UpdateChartList(); });
var ChartData = new DataList();
$('#displayBtn').click(function () { ChartData.UpdateChartData(); });
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var Chartname = 'Chart 2';
var name = 'Power Belgium Spot EUR/MWh';
//# sourceMappingURL=app.js.map