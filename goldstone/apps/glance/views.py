"""Glance views."""
# Copyright 2014 - 2015 Solinea, Inc.
#
# Licensed under the Solinea Software License Agreement (goldstone),
# Version 1.0 (the "License"); you may not use this file except in compliance
# with the License. You may obtain a copy of the License at:
#
#     http://www.solinea.com/goldstone/LICENSE.pdf
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either expressed or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
import logging

from goldstone.apps.core.utils import JsonReadOnlyViewSet
from goldstone.views import TopLevelView, ApiPerfView
from .models import GlanceApiPerfData, ImagesData


logger = logging.getLogger(__name__)


class ReportView(TopLevelView):
    template_name = 'glance_report.html'


class ImageApiPerfView(ApiPerfView):
    my_template_name = 'glance_api_perf.html'

    def _get_data(self, context):
        return GlanceApiPerfData().get(context['start_dt'],
                                       context['end_dt'],
                                       context['interval'])


class ImagesDataViewSet(JsonReadOnlyViewSet):
    model = ImagesData
    key = 'images'
