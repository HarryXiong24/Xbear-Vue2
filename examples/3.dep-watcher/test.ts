/**
 * 发布-订阅模式
 */
import {Dep} from './dep'
import { Watcher } from './watcher';

let watch1 = new Watcher('watch1');
let watch2 = new Watcher('watch2');

let dep = new Dep();
dep.addSub(watch1);
dep.addSub(watch2);

dep.notify();
