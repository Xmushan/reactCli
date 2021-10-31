#!/usr/bin/env node
'use strict';

var program = require('commander');
const utils = require('../utils/index')
var inquirer = require('../src/inquirer')
var create = require('../src/create')
// 整一些花里胡哨的颜色
const { green, yellow, blue } = utils
program.version('0.0.1')



program
    .command('create')
    .description('create a project ')
    .action(function () {
        green('😊😊😊'+'欢迎您使用react-cli,轻松构建react ts项目～🎉🎉🎉')
        inquirer().then(answer=>{
            create(answer)
        })
    })


program
    .command('start')
    .description('start a project')
    .action(function () {
        green('--------运行项目-------')
    })


program
    .command('build')
    .description('build a project')
    .action(function () {
        green('--------构建项目-------')
    })

// 通过program.parse(arguments)方法处理参数 如果没有 命令将无效
program.parse(process.argv)