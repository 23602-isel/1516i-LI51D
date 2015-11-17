/// <reference path="../typings/node/node.d.ts" />

"use strict";

var taskMapper = require('../task-mapper')

taskMapper.get(3, (err, t) => console.log(t))