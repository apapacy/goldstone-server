/**
 * Copyright 2014 Solinea, Inc.
 *
 * Licensed under the Solinea Software License Agreement (goldstone),
 * Version 1.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *     http://www.solinea.com/goldstone/LICENSE.pdf
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Author: Alex Jacobs
 */

var NovaReportView = ApiPerfReportView.extend({

    triggerChange: function() {
        this.renderCharts();
    },

    renderCharts: function() {
        var nsReport = goldstone.nova.report;
        var nsApiPerf = goldstone.nova.apiPerf;
        var gnspawns = goldstone.nova.spawns;
        var gncpu = goldstone.nova.cpu;
        var gnmem = goldstone.nova.mem;
        var gndisk = goldstone.nova.disk;
        var gnapi = goldstone.nova.apiPerf;
        nsReport.start = (+new Date()) - (this.defaults.globalLookback * 1000 * 60);
        nsReport.end = new Date();
        nsReport.interval = '' + Math.round(0.357 * this.defaults.globalLookback) + "s";

        gnspawns.loadUrl(nsReport.start, nsReport.end, nsReport.interval, '#nova-report-r1-c2', true);
        gncpu.loadUrl(nsReport.start, nsReport.end, nsReport.interval, '#nova-report-r2-c1', true);
        gnmem.loadUrl(nsReport.start, nsReport.end, nsReport.interval, '#nova-report-r2-c2', true);
        gndisk.loadUrl(nsReport.start, nsReport.end, nsReport.interval, '#nova-report-r3-c1', true);
        nsApiPerf.bivariate = goldstone.charts.bivariateWithAverage._getInstance(nsApiPerf);
        nsApiPerf.bivariate.loadUrl(nsReport.start, nsReport.end, nsReport.interval,
            true, '#nova-report-r1-c1');
    },

    template: _.template('' +
        '<div id="nova-report-r1" class="row">' +
        '<div id="nova-report-r1-c1" class="col-md-6"></div>' +
        '<div id="nova-report-r1-c2" class="col-md-6"></div>' +
        '</div>' +
        '<div id="nova-report-r2" class="row">' +
        '<div id="nova-report-r2-c1" class="col-md-6"></div>' +
        '<div id="nova-report-r2-c2" class="col-md-6"></div>' +
        '</div>' +
        '<div id="nova-report-r3" class="row">' +
        '<div id="nova-report-r3-c1" class="col-md-6"></div>' +
        '<div id="nova-report-r3-c2" class="col-md-6"></div>' +
        '</div>'
    )

});
