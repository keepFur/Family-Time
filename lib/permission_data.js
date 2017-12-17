"use strict";
//模块集
let modules = {
    home: {
        url: "home.html",
        pageName: "首页",
        code: "#home",
        icons: "icon-home",
        hasTag: false,
        isMenu: true
    },
    smart_assistant: {
        url: "smart_assistant.html",
        pageName: "智能助理",
        code: "#smart_assistant",
        icons: "icon-smart-assistant",
        hasTag: false,
        isMenu: true
    },
    photos: {
        url: "photos.html",
        pageName: "照片",
        code: "#photos",
        icons: "icon-photos",
        hasTag: false,
        isMenu: true
    },
    album: {
        url: "Album.html",
        pageName: "相册",
        code: "#album",
        icons: "icon-album",
        hasTag: false,
        isMenu: true
    },
    timeline: {
        url: "timeline.html",
        pageName: "时光轴",
        code: "#timeline",
        icons: "icon-album",
        hasTag: false,
        isMenu: true
    },
    memoir: {
        url: "memoir.html",
        pageName: "回忆录",
        code: "#memoir",
        icons: "icon-memoir",
        hasTag: false,
        isMenu: true
    },
    share: {
        url: "share.html",
        pageName: "分享",
        code: "#share",
        icons: "icon-album",
        hasTag: false,
        isMenu: true
    },
    archive: {
        url: "archive.html",
        pageName: "归档",
        code: "#archive",
        icons: "icon-archive",
        hasTag: false,
        isMenu: true
    },
    recycle_bin: {
        url: "recycle_bin.html",
        pageName: "回收站",
        code: "#recycle_bin",
        icons: "icon-recycle-bin",
        hasTag: true,
        isMenu: true
    },
    add_family_account: {
        url: "add_family_account.html",
        pageName: "添加家长账号",
        code: "#add_family_account",
        icons: "icon-add-family-account",
        hasTag: true,
        isMenu: true
    },
    setting: {
        url: "setting.html",
        pageName: "设置",
        code: "#setting",
        icons: "icon-setting",
        hasTag: false,
        isMenu: true
    },
    feedback: {
        url: "feedback.html",
        pageName: "反馈意见",
        code: "#feedback",
        icons: "icon-feedback",
        hasTag: false,
        isMenu: true
    },
    helper: {
        url: "helper.html",
        pageName: "帮助",
        code: "#helper",
        icons: "icon-helper",
        hasTag: false,
        isMenu: true
    },
    helper_doc_manage: {
        url: "helper_doc_manage.html",
        pageName: "帮助文档管理",
        code: "#helper_doc_manage",
        icons: "icon-helper",
        hasTag: false,
        isMenu: true
    },
    app_download: {
        url: "app_dowload.html",
        pageName: "应用下载",
        code: "#app_dowload",
        icons: "icon-app-dowload",
        hasTag: false,
        isMenu: true
    },
    app_download_manage: {
        url: 'app_download_manage.html',
        pageName: "应用管理",
        code: "#app_download_manage",
        icons: "icon-app-dowload",
        hasTag: false,
        isMenu: true
    },
    small_tools: {
        url: "small_tools.html",
        pageName: "小工具",
        code: "#small_tools",
        icons: "icon-helper",
        hasTag: false,
        isMenu: true
    },
    small_tools_manage: {
        url: "small_tools_manage.html",
        pageName: "小工具管理",
        code: "#small_tools_manage",
        icons: "icon-helper",
        hasTag: false,
        isMenu: true
    },
    materia_management: {
        url: "materia_management.html",
        pageName: "素材管理",
        code: "#materia_management",
        icons: "icon-materia-management",
        hasTag: false,
        isMenu: true
    },
    user_manage: {
        url: "user_manage.html",
        pageName: "用户管理",
        code: "#user_manage",
        icons: "icon-user-manage",
        hasTag: false,
        isMenu: true
    },
    memoir_manage: {
        url: "memoir_manage.html",
        pageName: "回忆录管理",
        code: "#memoir_manage",
        icons: "icon-memoir-manage",
        hasTag: false,
        isMenu: true
    }
},
    // 用户角色集
    roles = {
        // 超管
        admin: ["home", "memoir_manage", "user_manage", "materia_management", "app_download", "helper_doc_manage", "app_download_manage", "small_tools", "small_tools_manage"],
        // 家长
        parents: ["home", "smart_assistant", "photos", "album", "timeline", "memoir", "share", "archive", "recycle_bin", "add_family_account", "setting", "feedback", "helper", "materia_management", "app_download", "small_tools"],
        // 孩子
        child: ["home", "smart_assistant", "photos", "album", "timeline", "memoir", "share", "archive", "recycle_bin", "setting", "feedback", "helper", "materia_management", "app_download", "small_tools"],
        // 未登录用户
        tourists: ["home", "setting", "feedback", "helper", "app_dowload"]
    };

exports.roles = roles;
exports.modules = modules;