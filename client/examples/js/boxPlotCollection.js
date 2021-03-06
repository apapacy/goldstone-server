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

// define collection and link to model

var BoxPlotCollection = Backbone.Collection.extend({

    defaults: {},

    parse: function(data) {
        return this.dummyData;
    },

    model: GoldstoneBaseModel,

    initialize: function(options) {
        this.options = options || {};
        this.defaults = _.clone(this.defaults);
        this.url = "/glance/api_perf?start=111&end=112&interval=3600s&render=false";
        this.fetch();
    },

    dummyData:

    [{
        expt: 1,
        run: 1,
        speed: 850
    }, {
        expt: 1,
        run: 2,
        speed: 740
    }, {
        expt: 1,
        run: 3,
        speed: 900
    }, {
        expt: 1,
        run: 4,
        speed: 1070
    }, {
        expt: 1,
        run: 5,
        speed: 930
    }, {
        expt: 1,
        run: 6,
        speed: 850
    }, {
        expt: 1,
        run: 7,
        speed: 950
    }, {
        expt: 1,
        run: 8,
        speed: 980
    }, {
        expt: 1,
        run: 9,
        speed: 980
    }, {
        expt: 1,
        run: 10,
        speed: 880
    }, {
        expt: 1,
        run: 11,
        speed: 1000
    }, {
        expt: 1,
        run: 12,
        speed: 980
    }, {
        expt: 1,
        run: 13,
        speed: 930
    }, {
        expt: 1,
        run: 14,
        speed: 650
    }, {
        expt: 1,
        run: 15,
        speed: 760
    }, {
        expt: 1,
        run: 16,
        speed: 810
    }, {
        expt: 1,
        run: 17,
        speed: 1000
    }, {
        expt: 1,
        run: 18,
        speed: 1000
    }, {
        expt: 1,
        run: 19,
        speed: 960
    }, {
        expt: 1,
        run: 20,
        speed: 960
    }, {
        expt: 2,
        run: 1,
        speed: 960
    }, {
        expt: 2,
        run: 2,
        speed: 940
    }, {
        expt: 2,
        run: 3,
        speed: 960
    }, {
        expt: 2,
        run: 4,
        speed: 940
    }, {
        expt: 2,
        run: 5,
        speed: 880
    }, {
        expt: 2,
        run: 6,
        speed: 800
    }, {
        expt: 2,
        run: 7,
        speed: 850
    }, {
        expt: 2,
        run: 8,
        speed: 880
    }, {
        expt: 2,
        run: 9,
        speed: 900
    }, {
        expt: 2,
        run: 10,
        speed: 840
    }, {
        expt: 2,
        run: 11,
        speed: 830
    }, {
        expt: 2,
        run: 12,
        speed: 790
    }, {
        expt: 2,
        run: 13,
        speed: 810
    }, {
        expt: 2,
        run: 14,
        speed: 880
    }, {
        expt: 2,
        run: 15,
        speed: 880
    }, {
        expt: 2,
        run: 16,
        speed: 830
    }, {
        expt: 2,
        run: 17,
        speed: 800
    }, {
        expt: 2,
        run: 18,
        speed: 790
    }, {
        expt: 2,
        run: 19,
        speed: 760
    }, {
        expt: 2,
        run: 20,
        speed: 800
    }, {
        expt: 3,
        run: 1,
        speed: 880
    }, {
        expt: 3,
        run: 2,
        speed: 880
    }, {
        expt: 3,
        run: 3,
        speed: 880
    }, {
        expt: 3,
        run: 4,
        speed: 860
    }, {
        expt: 3,
        run: 5,
        speed: 720
    }, {
        expt: 3,
        run: 6,
        speed: 720
    }, {
        expt: 3,
        run: 7,
        speed: 620
    }, {
        expt: 3,
        run: 8,
        speed: 860
    }, {
        expt: 3,
        run: 9,
        speed: 970
    }, {
        expt: 3,
        run: 10,
        speed: 950
    }, {
        expt: 3,
        run: 11,
        speed: 880
    }, {
        expt: 3,
        run: 12,
        speed: 910
    }, {
        expt: 3,
        run: 13,
        speed: 850
    }, {
        expt: 3,
        run: 14,
        speed: 870
    }, {
        expt: 3,
        run: 15,
        speed: 840
    }, {
        expt: 3,
        run: 16,
        speed: 840
    }, {
        expt: 3,
        run: 17,
        speed: 850
    }, {
        expt: 3,
        run: 18,
        speed: 840
    }, {
        expt: 3,
        run: 19,
        speed: 840
    }, {
        expt: 3,
        run: 20,
        speed: 840
    }, {
        expt: 4,
        run: 1,
        speed: 890
    }, {
        expt: 4,
        run: 2,
        speed: 810
    }, {
        expt: 4,
        run: 3,
        speed: 810
    }, {
        expt: 4,
        run: 4,
        speed: 820
    }, {
        expt: 4,
        run: 5,
        speed: 800
    }, {
        expt: 4,
        run: 6,
        speed: 770
    }, {
        expt: 4,
        run: 7,
        speed: 760
    }, {
        expt: 4,
        run: 8,
        speed: 740
    }, {
        expt: 4,
        run: 9,
        speed: 750
    }, {
        expt: 4,
        run: 10,
        speed: 760
    }, {
        expt: 4,
        run: 11,
        speed: 910
    }, {
        expt: 4,
        run: 12,
        speed: 920
    }, {
        expt: 4,
        run: 13,
        speed: 890
    }, {
        expt: 4,
        run: 14,
        speed: 860
    }, {
        expt: 4,
        run: 15,
        speed: 880
    }, {
        expt: 4,
        run: 16,
        speed: 720
    }, {
        expt: 4,
        run: 17,
        speed: 840
    }, {
        expt: 4,
        run: 18,
        speed: 850
    }, {
        expt: 4,
        run: 19,
        speed: 850
    }, {
        expt: 4,
        run: 20,
        speed: 780
    }, {
        expt: 5,
        run: 1,
        speed: 890
    }, {
        expt: 5,
        run: 2,
        speed: 840
    }, {
        expt: 5,
        run: 3,
        speed: 780
    }, {
        expt: 5,
        run: 4,
        speed: 810
    }, {
        expt: 5,
        run: 5,
        speed: 760
    }, {
        expt: 5,
        run: 6,
        speed: 810
    }, {
        expt: 5,
        run: 7,
        speed: 790
    }, {
        expt: 5,
        run: 8,
        speed: 810
    }, {
        expt: 5,
        run: 9,
        speed: 820
    }, {
        expt: 5,
        run: 10,
        speed: 850
    }, {
        expt: 5,
        run: 11,
        speed: 870
    }, {
        expt: 5,
        run: 12,
        speed: 870
    }, {
        expt: 5,
        run: 13,
        speed: 810
    }, {
        expt: 5,
        run: 14,
        speed: 740
    }, {
        expt: 5,
        run: 15,
        speed: 810
    }, {
        expt: 5,
        run: 16,
        speed: 940
    }, {
        expt: 5,
        run: 17,
        speed: 950
    }, {
        expt: 5,
        run: 18,
        speed: 800
    }, {
        expt: 5,
        run: 19,
        speed: 810
    }, {
        expt: 5,
        run: 20,
        speed: 870
    }]
});
