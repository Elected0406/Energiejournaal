$(function () {
    $('#datetimepicker1').datetimepicker(
        { format: "MM.DD.YYYY" });
    $('#datetimepicker2').datetimepicker({
        format: "MM.DD.YYYY"
    });
    $("#datetimepicker1").on("dp.change", function (e) {
        $("#datetimepicker2").data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker2").on("dp.change", function (e) {
        $("#datetimepicker1").data("DateTimePicker").maxDate(e.date);
    });
});
$(function () {
    $('#container1').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: titletext
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 24 * 36e5
            },
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                enabled: false
            },
        },
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        },
        series: [{
            name: 'Aftap condensatie stoomturbine',
            data: [[Date.UTC(1950, 1, 1), 0],
                [Date.UTC(1965, 1, 1), 0.28],
                [Date.UTC(1980, 1, 1), 0.25],
                [Date.UTC(1983, 1, 1), 0.2],
                [Date.UTC(1991, 1, 1), 0.28],
                [Date.UTC(1992, 1, 1), 0.28],
                [Date.UTC(1994, 1, 1), 0.47],
                [Date.UTC(1995, 1, 1), 0.79],
                [Date.UTC(1996, 1, 1), 0.72],
                [Date.UTC(1997, 1, 1), 1.02],
                [Date.UTC(1998, 1, 1), 1.12],
                [Date.UTC(1999, 1, 1), 1.2],
                [Date.UTC(2000, 1, 1), 1.18],
                [Date.UTC(2001, 1, 1), 1.19],
                [Date.UTC(2002, 1, 1), 1.85],
                [Date.UTC(2003, 1, 1), 2.22],
                [Date.UTC(2004, 1, 1), 1.15],
                [Date.UTC(2005, 1, 1), 0],
                [Date.UTC(2006, 1, 1), 0.28],
                [Date.UTC(2007, 1, 1), 0.25],
                [Date.UTC(2008, 1, 1), 0.2],
                [Date.UTC(2009, 1, 1), 0.28],
                [Date.UTC(2010, 1, 1), 0.28],
                [Date.UTC(2011, 1, 1), 0.47],
                [Date.UTC(2012, 1, 1), 0.79],
                [Date.UTC(2013, 1, 1), 0.72],
                [Date.UTC(2014, 1, 1), 1.02],
                [Date.UTC(2015, 1, 1), 1.12],
                [Date.UTC(2016, 1, 1), 1.2]]
        }, {
            name: 'Gasturbine met warmte terugwinning',
            data: [
                [Date.UTC(1950, 1, 1), 0],
                [Date.UTC(1965, 1, 1), 0.4],
                [Date.UTC(1980, 1, 1), 0.25],
                [Date.UTC(1983, 1, 1), 1.66],
                [Date.UTC(1991, 1, 1), 1.8],
                [Date.UTC(1992, 1, 1), 1.76],
                [Date.UTC(1994, 1, 1), 2.62],
                [Date.UTC(1995, 1, 1), 2.41],
                [Date.UTC(1996, 1, 1), 2.05],
                [Date.UTC(1997, 1, 1), 1.7],
                [Date.UTC(1998, 1, 1), 1.1],
                [Date.UTC(1999, 1, 1), 0],
                [Date.UTC(2000, 1, 1), 0],
                [Date.UTC(2001, 1, 1), 0.4],
                [Date.UTC(2002, 1, 1), 0.25],
                [Date.UTC(2003, 1, 1), 1.66],
                [Date.UTC(2004, 1, 1), 1.8],
                [Date.UTC(2005, 1, 1), 1.76],
                [Date.UTC(2006, 1, 1), 2.62],
                [Date.UTC(2007, 1, 1), 2.41],
                [Date.UTC(2008, 1, 1), 2.05],
                [Date.UTC(2009, 1, 1), 1.7],
                [Date.UTC(2010, 1, 1), 1.1],
                [Date.UTC(2011, 1, 1), 0],
                [Date.UTC(2012, 1, 1), 0],
                [Date.UTC(2013, 1, 1), 0.25],
                [Date.UTC(2014, 1, 1), 1.41],
                [Date.UTC(2015, 1, 1), 1.64],
            ]
        }]
    });
});
$(function () {
    $('#datar2').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Chart 3'
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                },
            },
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                enabled: false
            },
        },
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        },
        series: [{
            name: 'Chart 3',
            data: fnChart995Data
        },]
    });
});