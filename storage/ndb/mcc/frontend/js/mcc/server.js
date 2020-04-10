/*
Copyright (c) 2012, 2019, Oracle and/or its affiliates. All rights reserved.

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2.0,
as published by the Free Software Foundation.

This program is also distributed with certain software (including
but not limited to OpenSSL) that is licensed under separate terms,
as designated in a particular file or component or in included license
documentation.  The authors of MySQL hereby grant you an additional
permission to link the program and your derivative works with the
separately licensed software that they have included with MySQL.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License, version 2.0, for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA
*/

/******************************************************************************
 ***                                                                        ***
 ***          External interface wrapper for server communication           ***
 ***                                                                        ***
 ******************************************************************************/
dojo.provide('mcc.server');

/***************************** Server protocol ********************************/
dojo.require('mcc.server.api');

mcc.server.hostInfoReq = mcc.server.api.hostInfoReq;
mcc.server.checkFileReq = mcc.server.api.checkFileReq;
mcc.server.createFileReq = mcc.server.api.createFileReq;
mcc.server.appendFileReq = mcc.server.api.appendFileReq;
mcc.server.getLogsReq = mcc.server.api.getLogsReq;
mcc.server.runMgmdCommandReq = mcc.server.api.runMgmdCommandReq;
mcc.server.runcopyKeyReq = mcc.server.api.runcopyKeyReq;
mcc.server.hostDockerReq = mcc.server.api.hostDockerReq;
mcc.server.doReq = mcc.server.api.doReq;
mcc.server.runcopyKeyReq = mcc.server.api.runcopyKeyReq;
mcc.server.dropStuffReq = mcc.server.api.dropStuffReq;
mcc.server.getHead = mcc.server.api.getHead;
mcc.server.runSSHCleanupReq = mcc.server.api.runSSHCleanupReq;
mcc.server.listRemoteHostsReq = mcc.server.api.listRemoteHostsReq;
mcc.server.pingRemoteHostsReq = mcc.server.api.pingRemoteHostsReq;

/******************************** Initialize **********************************/
dojo.ready(function () {
    console.info('[INF]Server module initialized');
});
