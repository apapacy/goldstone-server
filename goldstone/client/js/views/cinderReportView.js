/**
 * Copyright 2015 Solinea, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CinderReportView = GoldstoneBasePageView.extend({

    triggerChange: function(change) {
        if (change === 'lookbackSelectorChanged' || change === 'lookbackIntervalReached') {
            this.cinderApiPerfChartView.trigger('lookbackSelectorChanged');
        }
    },

    renderCharts: function() {
        this.cinderApiPerfChart = new ApiPerfCollection({
            componentParam: 'cinder',
        });

        this.cinderApiPerfChartView = new ApiPerfView({
            chartTitle: "Cinder API Performance",
            collection: this.cinderApiPerfChart,
            height: 300,
            infoCustom: [{
                key: "API Call",
                value: "All"
            }],
            el: '#cinder-report-r1-c1',
            width: $('#cinder-report-r1-c1').width()
        });
    },

    template: _.template('' +
        '<div id="cinder-report-r1" class="row">' +
        '<div id="cinder-report-r1-c1" class="col-md-6"></div>' +
        '</div>'
    )
});
