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
var fnChart = (function () {
    function fnChart(Id, Market_ID, Market_Date, Market_Value) {
        this.Id = Id;
        this.Market_ID = Market_ID;
        this.Market_Date = Market_Date;
        this.Market_Value = Market_Value;
    }
    return fnChart;
}());
var fnChart99 = (function () {
    function fnChart99() {
        this.fnChart99Data = new Array();
    }
    fnChart99.prototype.LoadfnChart99Data = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetChart99', function (data) {
            var select = '<div class="row fpr">';
            for (var i = 0; i < data.length; i++) {
                _this.fnChart99Data = data;
                var selectRow = '<div class="col-sm-7">' + _this.fnChart99Data[i].Market_Date + '</div>' +
                    '<div class="col-sm-4">' + _this.fnChart99Data[i].Market_Value + '</div>';
                select += selectRow;
            }
            select += '</div>';
            $("#datar1").html(select);
        });
    };
    return fnChart99;
}());
var fnChart101 = (function () {
    function fnChart101() {
        this.fnChart101Data = new Array();
    }
    fnChart101.prototype.LoadfnChart101Data = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetChart101', function (data) {
            var select = '<div class="row fpr">';
            for (var i = 0; i < data.length; i++) {
                _this.fnChart101Data = data;
                var selectRow = '<div class="col-sm-7">' + _this.fnChart101Data[i].Market_Date + '</div>' +
                    '<div class="col-sm-4">' + _this.fnChart101Data[i].Market_Value + '</div>';
                select += selectRow;
            }
            select += '</div>';
            $("#datar2").html(select);
        });
    };
    return fnChart101;
}());
var fnChart995 = (function () {
    function fnChart995() {
        this.fnChart995Data = new Array();
    }
    fnChart995.prototype.LoadfnChart995Data = function () {
        var _this = this;
        $.getJSON('http://localhost:4051/Home/GetChart995', function (data) {
            var select = '[';
            for (var i = 0; i < data.length; i++) {
                _this.fnChart995Data = data;
                var selectRow = _this.fnChart995Data[i].Market_Value + ',';
                select += selectRow;
            }
            select += '0]';
            return select;
        });
    };
    return fnChart995;
}());
var chartsList = new ChartsList();
$('#Groups').change(function () { chartsList.UpdateChartList(); });
var ChartData = new DataList();
$('#displayBtn').click(function () { ChartData.UpdateChartData(); });
var fnChart99Data = new fnChart99();
fnChart99Data.LoadfnChart99Data();
var fnChart101Data = new fnChart101();
fnChart101Data.LoadfnChart101Data();
var fnChart995Data = new fnChart995();
fnChart995Data.LoadfnChart995Data();
var temperatures = [7, 1.7, 1.3, 1.3, 1.2, 0.9, 0.6, 0.6, 0.6, 1.2, 3.3, 6.6, 8.7, 10.5];
var Chartname = 'Chart 2';
var name = 'Power Belgium Spot EUR/MWh';
var titletext = 'Chart 2';
var seriesname = '';
var seriesdata = '';
//# sourceMappingURL=app.js.map