"use strict";
class Util {

    /**
     * 判断一个参数是否是字符串类型
     * 
     * @param {any} str 
     * @returns 
     * @memberof Util
     */
    isString(str) {
        return typeof str === 'string';
    }

    /**
     * 获取一个日期对象的年月日时分秒
     * 
     * @param {any} date 
     * @returns 
     * @memberof Util
     */
    getDate(date) {
        date = this.isString(date) ? new Date(date) : (date || new Date());
        return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        }
    }

    /**
     * 对小于10的数字前面用0填充
     * 
     * @param {any} time 
     * @returns 
     * @memberof Util
     */
    fullTime(time) {
        return time >= 10 ? time : ("0" + time);
    }

    /**
     * 格式化日期
     * 
     * @param {any} format 
     * @param {any} date 
     * @returns 
     * @memberof Util
     */
    formatDate(format, date) {
        if (typeof format !== "string") {
            format = "yyyy-mm-dd hh:MM:ss";
        }
        date = this.getDate(date);
        return format
            .replace(/yyyy/gi, date.year)
            .replace(/mm/, this.fullTime(date.month))
            .replace(/dd/gi, this.fullTime(date.day))
            .replace(/hh/gi, this.fullTime(date.hours))
            .replace(/MM/, this.fullTime(date.minutes))
            .replace(/ss/gi, this.fullTime(date.seconds));
    }

    /**
     * 打印操作日志
     * 
     * @param {any} type 
     * @param {any} msg 
     * @memberof Util
     */
    log(type, msg) {
        if (typeof console) {
            var args = Array.prototype.slice.call(arguments);
            if (args.length === 1) {
                msg = type;
                console.log(this.formatDate(new Date()) + ":" + msg);
            } else if (args.length > 1) {
                console[type](this.formatDate(new Date()) + ":" + msg);
            }
        }
    }
}
module.exports = new Util();