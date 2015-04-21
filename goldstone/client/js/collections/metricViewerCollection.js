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

var MetricViewerCollection = Backbone.Collection.extend({

    defaults: {},

    parse: function(data) {
        return data.per_name;
    },

    model: GoldstoneBaseModel,

    // will impose an order based on 'timestamp' for
    // the models as they are put into the collection
    // comparator: '@timestamp',

    initialize: function(options) {
        this.options = options || {};
        this.defaults = _.clone(this.defaults);
        this.retrieveData();
    },

    retrieveData: function() {
        var self = this;

        this.url = "/core/metric_names";

        this.fetch();
    }
});
