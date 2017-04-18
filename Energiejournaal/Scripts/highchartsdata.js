$(function () {
    $('#datetimepicker1').datetimepicker(
        { format: "DD.MM.YYYY" });
    $('#datetimepicker2').datetimepicker({
        format: "DD.MM.YYYY"
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
            text: 'Chart 2'
        },
        tooltip: {
            crosshairs: true,
            shared: true,
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                },
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
            data: [[Date.UTC(1950 , 01 , 01), 0],
                    [Date.UTC(1965 , 01 , 01), 0.28],
                    [Date.UTC(1980 , 01 , 01), 0.25],
                    [Date.UTC(1983 , 01 , 01), 0.2],
                    [Date.UTC(1991 , 01 , 01), 0.28],
                    [Date.UTC(1992 , 01 , 01), 0.28],
                    [Date.UTC(1994 , 01 , 01), 0.47],
                    [Date.UTC(1995 , 01 , 01), 0.79],
                    [Date.UTC(1996 , 01 , 01), 0.72],
                    [Date.UTC(1997 , 01 , 01), 1.02],
                    [Date.UTC(1998 , 01 , 01), 1.12],
                    [Date.UTC(1999 , 01 , 01), 1.2],
                    [Date.UTC(2000 , 01 , 01), 1.18],
                    [Date.UTC(2001 , 01 , 01), 1.19],
                    [Date.UTC(2002 , 01 , 01), 1.85],
                    [Date.UTC(2003 , 01 , 01), 2.22],
                    [Date.UTC(2004 , 01 , 01), 1.15],
                    [Date.UTC(2005 , 01 , 01), 0],
                    [Date.UTC(2006 , 01 , 01), 0.28],
                    [Date.UTC(2007 , 01 , 01), 0.25],
                    [Date.UTC(2008 , 01 , 01), 0.2],
                    [Date.UTC(2009 , 01 , 01), 0.28],
                    [Date.UTC(2010 , 01 , 01), 0.28],
                    [Date.UTC(2011 , 01 , 01), 0.47],
                    [Date.UTC(2012 , 01 , 01), 0.79],
                    [Date.UTC(2013 , 01 , 01), 0.72],
                    [Date.UTC(2014 , 01 , 01), 1.02],
                    [Date.UTC(2015 , 01 , 01), 1.12],
                    [Date.UTC(2016 , 01 , 01), 1.2]]
        }, {
            name: 'Gasturbine met warmte terugwinning',
            data: [
                [Date.UTC(1950,01,01), 0],
                [Date.UTC(1965,01,01), 0.4],
                [Date.UTC(1980,01,01), 0.25],
                [Date.UTC(1983,01,01), 1.66],
                [Date.UTC(1991,01,01), 1.8],
                [Date.UTC(1992,01,01), 1.76],
                [Date.UTC(1994,01,01), 2.62],
                [Date.UTC(1995,01,01), 2.41],
                [Date.UTC(1996,01,01), 2.05],
                [Date.UTC(1997,01,01), 1.7],
                [Date.UTC(1998,01,01), 1.1],
                [Date.UTC(1999,01,01), 0],
                [Date.UTC(2000,01,01), 0],
                [Date.UTC(2001,01,01), 0.4],
                [Date.UTC(2002,01,01), 0.25],
                [Date.UTC(2003,01,01), 1.66],
                [Date.UTC(2004,01,01), 1.8],
                [Date.UTC(2005,01,01), 1.76],
                [Date.UTC(2006,01,01), 2.62],
                [Date.UTC(2007,01,01), 2.41],
                [Date.UTC(2008,01,01), 2.05],
                [Date.UTC(2009,01,01), 1.7],
                [Date.UTC(2010,01,01), 1.1],
                [Date.UTC(2011,01,01), 0],
                [Date.UTC(2012,01,01), 0],
                [Date.UTC(2013,01,01), 0.25],
                [Date.UTC(2014,01,01), 1.41],
                [Date.UTC(2015,01,01), 1.64],
            ]
        }]
    });
});