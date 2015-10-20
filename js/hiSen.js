/**
 * Created by Administrator on 2015/9/5 0005.
 */
(function (w) {
    var hiSen = function (str) {
        //这里的意思是如果传递的是函数，则执行onload函数
        //双管齐下 -- 妙哉  神奇 法则
        if (typeof str == 'function') {
            window.onload = str;
        } else {
            return new hiSen.init(str);
        };
    };
    hiSen.init ={};
    hiSen.animate = {};
    var css = {};
    css.getstyle = function (obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        else {
            return getComputedStyle(obj, null)[attr];
        }
    };
    //给某个元素的某个属性赋值
    css.setstyle = function (obj, attr, value) {
        //处理透明度模块
        if (attr == 'opacity') {
            //console.log(111);
            if ('opacity' in obj.style)// 如果里面支持这种写法 正常浏览器
            {
                obj.style.opacity = value;
            }
            else {
                obj.style.filter = 'alpha(opacity=' + value + ')';
                //其他浏览器
            }
        }
        if (attr == 'background') {
            obj.style.opacity = value;
        }
        else {
            obj.style[attr] = Math.round(value) + 'px';
            //正常的属性更改
        }
        ;
    };
    //选择器开头
    hiSen.init = function (context) {
        var result = [], groupArr = [];
        var that = this;
        that.length = 0;
        //完美法则
        if(!context){
            return that;
        };
        //只有输入的是字符串才有意义
        if(typeof context=="string"){
            var group = context.split(",");
            for (var i = 0; i < group.length; i++) {
                var select = group[i].replace(/^\s*|\s*$/g, '');
                groupArr = [];
                groupArr = duoceng(select)
                for (var k = 0; k < groupArr.length; k++) {
                    that[that.length]=groupArr[k];
                    that.length++
                };
            };
        };
        return that;//此处不能直接返回数组，只有对象才有原型链，以便做链式编程。

        //多层选择器
        function duoceng(context) {
            var contextArr;//定义一个数组，存放每个组
            var eleArr;//定义数组，存放选中的元素
            var parentArr = [];//定义数组，存放父级
            contextArr = context.split(" ");//以空格分割字符串
            var thisEle;//定义变量，存放当前元素
            var contextArrLength = contextArr.length;//获取分割后数组的长度
            for (var i = 0; i < contextArrLength; i++) {
                parentArr = [];//每次都要清空，更新父级；
                var firstString = contextArr[i].slice(0, 1);//获取第一个字符
                switch (firstString) {
                    case "#":
                        thisEle = [$id(contextArr[i].slice(1))];//获取当前元素
                        break;
                    case ".":
                        if (parentArr.length > 0) {
                            for (var j = 0; j < parentArr.length; j++) {
                                thisEle = $class(contextArr[i].slice(1), parentArr[j]);//获取当前元素
                            }
                            ;
                        } else {
                            thisEle = $class(contextArr[i].slice(1));//获取当前元素
                        }
                        ;
                        break;
                    default :
                        if (firstString) {
                            if (parentArr.length > 0) {
                                for (var j = 0; j < parentArr.length; j++) {
                                    thisEle = $tag(contextArr[i], parentArr[j]);//获取当前元素
                                }
                                ;
                            } else {
                                thisEle = $tag(contextArr[i]);//获取当前元素
                            }
                            ;
                        }
                        ;
                }
                ;
                if (thisEle) {
                    for (var k = 0; k < thisEle.length; k++) {
                        parentArr.push(thisEle[k]);//当前元素就是下级元素的父级
                    }
                    ;
                }
                ;
            }
            ;
            eleArr = parentArr;
            return eleArr;
        }
        //ID选择器
        function $id(id) {
            return document.getElementById(id);
        };

        //tag选择器    根据传入的参数选择对应的元素
        function $tag(tag, context) {
            //隔离法则 --- 代码分为两个部分，第一部分专门为第二部分服务。
            //判断cantext是否为string类型。
            if (context) {
                return context.getElementsByTagName(tag);
            } else {
                return document.getElementsByTagName(tag);
            }
            ;
        };

        //class选择器
        function $class(className, parentNode) {
            //判断是否有父级
            if (!parentNode) {
                parentNode = document.body;
            }
            ;
            //功能检测，检测浏览器是否兼容getElementsByClassName，如果兼容，则直接返回class集合。
            if (parentNode.getElementsByClassName) {
                return parentNode.getElementsByClassName(className)
            }
            ;
            //获取区域内的所有元素
            var ele = parentNode.getElementsByTagName("*");
            //遍历获取到的元素，判断元素中是否存在className;
            var classArr = [];
            for (var i = 0; i < ele.length; i++) {
                //判断遍历到的元素当中的className是否含有传入的字符片段
                if (ele[i].className.indexOf(className) >= 0) {
                    //把className拆分为数组
                    var thisClass = ele[i].className.split(" ");
                    //遍历thisClass数组
                    for (var j = 0; j < thisClass.length; j++) {
                        if (thisClass[j] == className) {
                            classArr.push(ele[i]);
                            break
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;
            return classArr;
            //如果该元素有className，则push进数组里面
        };
    };
    hiSen.init.prototype = {
        on: function (type, fn) {
            for (var i = 0; i < this.length; i++) {
                if (this[i].addEventListener) {
                    this[i].addEventListener(type, fn, false);
                } else if (dom.attachEvent) {//如果支持--IE
                    this[i].attachEvent('on' + type, fn);
                }
                ;
            }
            ;
        },
        css:function(json){
            for(var i=0;i<this.length;i++){
                for(var k in json){
                    this[i].style[k] = json[k]
                };
            };
        },
        hide:function(){
            for(var i=0;i<this.length;i++){
                this[i].style.display = "none"
            };
        },
        show:function(){
            for(var i=0;i<this.length;i++){
                this[i].style.display = "none"
            };
        },
        getstyle:function(attr){
            for(var i=0;i<this.length;i++){
                if (this[i].currentStyle) {
                    return this[i].currentStyle[attr];
                }
                else {
                    return getComputedStyle(this[i], null)[attr];
                }
            }
        },
        eq:function(index){
            for(var i=0;i<this.length;i++){
                if(index>this.length-1||index<0){
                    return
                }else{
                    return this[index];
                }
            }
        }
    };
    function Animate() {
        this.FPS = 10;
        //
        //创建一个数组，保存多个对象的属性
        this.queen = [];
    };
    Animate.prototype = {
        //添加方法
        add: function () {

            var args = arguments;//获取用户传入的参数
            var obj = {};//定义一个对象，用来存放传进来的参数
            obj = this._arguments(obj, args);//判断参数类型
            //定义_obj,用来保存适配过的参数
            this._obj = this._apaper(obj);
            this.queen.push(this._obj);
            this.run();

        },
        //参数部
        _arguments: function (obj, args) {
            var argumentLength = args.length;//获取参数长度
//如果没传参，则立即返回
            if (argumentLength == 0) {
                return;
            } else if (argumentLength == 1 && toString.call(args[0]) == "[object Object]") {
                //如果传入的参数只有一个，并且是object Object 类型的，则把里面的属性值通过适配器进行适配
                obj = args[0];
            } else if (argumentLength > 1) {
                //如果参数长度大于1
                if (typeof args[0] == "object") {
                    obj.ele = args[0];//第一个参数为要做动画的元素
                }
                ;
                if (toString.call(args[1]) == "[object Object]") {
                    obj.attr = args[1];//第二个参数为要做动画的属性，值
                }
                ;
                //遍历剩下的参数
                for (var i = 2; i < args.length; i++) {
                    //如果为number类型，则是时间
                    if (typeof args[i] == "number") {
                        obj.duration = args[i];
                    } else if (typeof args[i] == "string") {
                        //string类型，
                        switch (args[i]) {
                            case "slow"://输入的是slow，则为慢速
                                obj.duration = 2000;
                                break;
                            case "normal"://输入normal，则为中速
                                obj.duration = 1000;
                                break;
                            case "fast"://输入normal，则为快速
                                obj.duration = 500;
                                break;
                            default ://否则为贝塞尔曲线
                                obj.type = args[i];
                                break
                        }
                    } else if (typeof args[i] == "function") {
                        //如果是function类型，则认为是回调函数。
                        obj.callback = args[i]
                    }
                    ;
                }
                ;
            }
            ;
            return obj;//发回obj
        },
        //动画默认属性方法
        _apaper: function (obj) {
            var _default = {};//定义一个对象，存放动画的默认属性，值。
            _default.timer = null;//定时器
            _default.startTime = +new Date();//获取动画开始时的时间
            _default.nowTime = +new Date();//获取当前时间
            _default.passTime = 0;//已经经过的时间
            _default.duration = 800;//默认动画持续时间为500毫秒
            _default.tween = 0;//动画时间进程
            _default.type = "linear";//默认运动方式
            _default.main = function () {
            };//动画运动过程中的main函数
            _default.callback = function () {
            };//动画结束后的回调函数
            _default.styleArr = [];//保存要改变的属性值
            //把外面传进来的参数添加到_default中，或者替换_default中的默认属性
            this.extend(obj, _default);
            for (var k in obj.attr) {
                _default.styleArr[k] = [];//转变为二维数组
                _default.styleArr[k][0] = parseFloat(css.getstyle(obj.ele, k));//获取要改变的元素属性的当前值
                _default.styleArr[k][1] = parseFloat(obj.attr[k] - obj.styleArr[k][0]);//目标位置 - 当前位置
            }
            ;
            if (typeof obj.duration != "number" && obj.duration >= 0) {
                obj.duration = 800
            }
            if (typeof obj.type != "string" || !this.easing.hasOwnProperty(obj.type)) {
                obj.type = "linear";
            }
            return obj;
        },
        //适配器，把外面传进来的参数跟默认参数进行适配。
        //用外面传进来的参数替换默认属性，没有传参的属性则继续用默认属性
        extend: function (tar, source) {

            for (var k in source) {
                if (typeof(tar[k]) === 'undefined') {
                    tar[k] = source[k]
                }
                ;
            }
            return tar;
        },
        //运行部，运行动画的方法
        run: function () {
            var that = this;
            var thatTimer = {}
            for (var i = 0; i < this.queen.length; i++) {
                thatTimer = this.queen[i]
            }
            thatTimer.timer = setInterval(function () {
                that._loop();
                console.log(2)
            }, that.FPS)
        },
        //执行部
        _loop: function () {
            var thisObj = {};//定义一个对象，用来保存当前的queen
            for (var i = 0; i < this.queen.length; i++) {
                //给thisObj赋值
                thisObj = this.queen[i];
                //重新获取当前时间，计算动画时间进程
                thisObj.nowTime = +new Date();
                thisObj.passTime = thisObj.nowTime - thisObj.startTime;
                //当动画经过的时间大于动画延迟时间的时候，清除内存，定时器
                if (thisObj.passTime >= thisObj.duration) {
                    this._clear(thisObj);//清除定时器
                    this._assignment(thisObj);//最后赋值，防止误差
                    this._recycle(thisObj);//清除缓存

                } else {
                    this._changetween(thisObj);
                }
                ;
            }
        },
        _changetween: function (thisObj) {
            thisObj.tween = this.easing[thisObj.type](thisObj.passTime, 0, 1, thisObj.duration);
            this._assignment(thisObj);
        },
        //赋值部
        _assignment: function (thisobj) {
            for (var k in thisobj.styleArr) {
                css.setstyle(thisobj.ele, k, thisobj.styleArr[k][0] + thisobj.styleArr[k][1] * thisobj.tween)
            }
            this._execute(thisobj);//回调main方法
        },
        //运动中的回调函数
        _execute: function (thisobj) {
            thisobj.main();
        },
        //清除部
        _clear: function (thisobj) {
            thisobj.tween = 1;//时间动画进程为1
            var cleraNum = this._getIndex(thisobj);
            clearInterval(this.queen[cleraNum].timer);//清除定时器
        },
        //回收内存
        _recycle: function (thisobj) {
            thisobj.callback();//动画完成后的回调函数
            //内存优化
            //1 释放队列  -- 数组实现的  -- 就是删除数组
            this.queen.splice(this._getIndex(thisobj), 1)//
            //2 释放对象的属性和方法
            for (var i in thisobj) {
                delete thisobj[i];
            }
            //3 释放对象所占用的内存
            thisobj = null;

        },
        //获取昨晚动画的对象在队列中的索引值
        _getIndex: function (thisobj) {
            for (var i = 0; i < this.queen.length; i++) {
                if (this.queen[i] == thisobj) {
                    return i;
                }
            }
        },
        //贝塞尔曲线
        easing: {
            linear: function (t, b, c, d) {
                return (c - b) * (t / d);
            },
            easeOutBounce: function (t, b, c, d) {
                if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                }
            }
        }
    };

    hiSen.animate = new Animate;
    w.hiSen = w._$ = hiSen;
})(window)



