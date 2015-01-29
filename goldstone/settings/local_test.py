# Copyright 2014 Solinea, Inc.
#
# Licensed under the Solinea Software License Agreement (goldstone),
# Version 1.0 (the "License"); you may not use this file except in compliance
# with the License. You may obtain a copy of the License at:
#
#     http://www.solinea.com/goldstone/LICENSE.pdf
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

__author__ = 'John Stanford'

#
# Use this file for settings that will not be overwritten by
# product upgrades.
#

from .test import *

#
# configure OpenStack access information
#
OS_USERNAME = 'admin'
OS_TENANT_NAME = 'admin'
OS_PASSWORD = '2caa6a4d9c9d49ce'
OS_AUTH_URL = 'http://10.10.20.10:5000/v2.0/'