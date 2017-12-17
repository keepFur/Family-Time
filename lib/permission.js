"use strict";
let permissionData = require("./permission_data");

class Permission {

    /**
     * 转换用户的角色
     * 
     * @param {any} userRole 
     * @memberof Permission
     */
    covertUserRole(userRole) {
        const roles = ['admin', 'parents', 'child', 'tourists'];
        if (userRole >= 0) {
            return roles[userRole];
        }
        return roles[3];
    }

    /**
     * 获取左侧菜单信息，如果用户没有登录系统的话，侧不显示左侧菜单栏
     * 
     * @param {any} userID 用户ID
     * @param {any} userRole 用户角色
     * @returns 用户角色相应的菜单权限
     * @memberof Roles
     */
    getMenus(userID, userRole) {
        let menus = [],
            modules = permissionData.modules,
            roles = permissionData.roles[this.covertUserRole(userRole)];
        roles.forEach(function (role) {
            menus.push(modules[role]);
        }, this);
        return {
            menus, roles
        };
    }
}

module.exports = Permission;

