(function (e) {
    function t(t) {
        for (var i, r, s = t[0], c = t[1], l = t[2], g = 0, p = []; g < s.length; g++) r = s[g], Object.prototype.hasOwnProperty.call(a, r) && a[r] && p.push(a[r][0]), a[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        u && u(t);
        while (p.length) p.shift()();
        return o.push.apply(o, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== a[c] && (i = !1)
            }
            i && (o.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var i = {},
        a = {
            index: 0
        },
        o = [];

    function r(e) {
        return s.p + "static/js/" + ({
            "pages-health-index": "pages-health-index",
            "pages-health-invest": "pages-health-invest",
            "pages-health-investlist": "pages-health-investlist",
            "pages-index-index": "pages-index-index",
            "pages-index-login": "pages-index-login",
            "pages-index-register": "pages-index-register",
            "pages-mining-dayflow": "pages-mining-dayflow",
            "pages-mining-machine": "pages-mining-machine",
            "pages-mining-maclist": "pages-mining-maclist",
            "pages-prod-detail": "pages-prod-detail",
            "pages-prod-orderlist": "pages-prod-orderlist",
            "pages-service-detail": "pages-service-detail",
            "pages-service-help": "pages-service-help",
            "pages-service-news": "pages-service-news",
            "pages-service-tutorial": "pages-service-tutorial",
            "pages-vip-bank": "pages-vip-bank",
            "pages-vip-card": "pages-vip-card",
            "pages-vip-flow": "pages-vip-flow",
            "pages-vip-index": "pages-vip-index",
            "pages-vip-myinfo": "pages-vip-myinfo",
            "pages-vip-password": "pages-vip-password",
            "pages-vip-paypwd": "pages-vip-paypwd",
            "pages-vip-recharge": "pages-vip-recharge",
            "pages-vip-rechargelist": "pages-vip-rechargelist",
            "pages-vip-recruit": "pages-vip-recruit",
            "pages-vip-team": "pages-vip-team",
            "pages-vip-tickcard": "pages-vip-tickcard",
            "pages-vip-withdraw": "pages-vip-withdraw",
            "pages-vip-withdrawlist": "pages-vip-withdrawlist"
        } [e] || e) + "." + {
            "pages-health-index": "242a2054",
            "pages-health-invest": "f932d1f6",
            "pages-health-investlist": "659f49af",
            "pages-index-index": "220f2b5e",
            "pages-index-login": "52488c5f",
            "pages-index-register": "11eb675a",
            "pages-mining-dayflow": "b2ff71a6",
            "pages-mining-machine": "22c88cd2",
            "pages-mining-maclist": "f8674c02",
            "pages-prod-detail": "924ff5f4",
            "pages-prod-orderlist": "f2a1bbe4",
            "pages-service-detail": "bd1438fd",
            "pages-service-help": "ee4ab82d",
            "pages-service-news": "a4757571",
            "pages-service-tutorial": "1afae7eb",
            "pages-vip-bank": "d44b68b8",
            "pages-vip-card": "0d073e7d",
            "pages-vip-flow": "c281b454",
            "pages-vip-index": "c2ffacf8",
            "pages-vip-myinfo": "a1c124c7",
            "pages-vip-password": "a3a27a65",
            "pages-vip-paypwd": "ddb1e99e",
            "pages-vip-recharge": "d9760556",
            "pages-vip-rechargelist": "56dfad62",
            "pages-vip-recruit": "caa5ad3f",
            "pages-vip-team": "015b481d",
            "pages-vip-tickcard": "3398cd47",
            "pages-vip-withdraw": "6bb5e8d5",
            "pages-vip-withdrawlist": "171862ee"
        } [e] + ".js"
    }

    function s(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.e = function (e) {
        var t = [],
            n = a[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var i = new Promise((function (t, i) {
                    n = a[e] = [t, i]
                }));
                t.push(n[2] = i);
                var o, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = r(e);
                var l = new Error;
                o = function (t) {
                    c.onerror = c.onload = null, clearTimeout(g);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")", l.name = "ChunkLoadError", l.type = i, l.request = o, n[1](l)
                        }
                        a[e] = void 0
                    }
                };
                var g = setTimeout((function () {
                    o({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = o, document.head.appendChild(c)
            } return Promise.all(t)
    }, s.m = e, s.c = i, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) s.d(n, i, function (t) {
                return e[t]
            }.bind(null, i));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function (e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var g = 0; g < c.length; g++) t(c[g]);
    var u = l;
    o.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("9490")
    },
    "09f1": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("565e"),
            a = n("44c3");
        for (var o in a) "default" !== o && function (e) {
            n.d(t, e, (function () {
                return a[e]
            }))
        }(o);
        n("237c");
        var r, s = n("f0c5"),
            c = Object(s["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
        t["default"] = c.exports
    },
    "237c": function (e, t, n) {
        "use strict";
        var i = n("dc8d"),
            a = n.n(i);
        a.a
    },
    3093: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            globalData: {
                currsign: "",
                usertoken: "",
                userinfo: {},
                currlang: "zh_en",
                isapp: !1,
                siteroot: "https://api.ola.cm/",
                webroot: "https://api.ola.cm/api/",
                apiroot: "https://api.ola.cm/api/"
            },
            computed: {
                i18n: function () {
                    return this.$t("message")
                }
            },
            onLaunch: function () {
                this.$i18n.locale = uni.getStorageSync("currlang") || "zh_en", this.globalData.isapp
            },
            onShow: function () {},
            onHide: function () {},
            methods: {
                doUpData: function (e) {
                    var t = this;
                    uni.showLoading({
                        title: t.i18n.text133
                    }), uni.downloadFile({
                        url: e,
                        success: function (e) {
                            uni.hideLoading(), 200 == e.statusCode ? uni.showModal({
                                title: "",
                                content: t.i18n.text134,
                                confirmText: t.i18n.ok,
                                cancelText: t.i18n.text135,
                                success: function (n) {
                                    1 == n.confirm && plus.runtime.install(e.tempFilePath, {
                                        force: !0
                                    }, (function (e) {
                                        utils.showToast(t.i18n.text136), plus.runtime.restart()
                                    }))
                                }
                            }) : uni.showModal({
                                title: "",
                                content: t.i18n.text137,
                                showCancel: !1,
                                confirmText: t.i18n.ok
                            })
                        },
                        fail: function () {
                            uni.hideLoading(), uni.showModal({
                                title: "",
                                content: t.i18n.text138,
                                showCancel: !1,
                                confirmText: t.i18n.ok
                            })
                        }
                    })
                }
            }
        };
        t.default = i
    },
    "357d": function (e, t, n) {
        "use strict";
        (function (e) {
            var t = n("4ea4");
            n("13d5"), n("d3b7"), n("ac1f"), n("5319"), n("ddb0");
            var i = t(n("e143")),
                a = {
                    keys: function () {
                        return []
                    }
                };
            e["____A5111E3____"] = !0, delete e["____A5111E3____"], e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "white",
                    navigationBarTitleText: "OLA",
                    navigationBarBackgroundColor: "#5673d6",
                    backgroundColor: "#FFFFFF"
                },
                tabBar: {
                    borderStyle: "black",
                    backgroundColor: "#04709e",
                    color: "#FFFFFF",
                    selectedColor: "#41eae3",
                    list: [{
                        pagePath: "pages/index/index",
                        iconPath: "static/img/home.png",
                        selectedIconPath: "static/img/home_selected.png",
                        text: "Home",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/mining/maclist",
                        iconPath: "static/img/market.png",
                        selectedIconPath: "static/img/market_selected.png",
                        text: "Equipment",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/vip/team",
                        iconPath: "static/img/team.png",
                        selectedIconPath: "static/img/team_selected.png",
                        text: "Team",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/vip/index",
                        iconPath: "static/img/account.png",
                        selectedIconPath: "static/img/account_selected.png",
                        text: "My",
                        redDot: !1,
                        badge: ""
                    }]
                }
            }, e.__uniConfig.compilerVersion = "3.2.16", e.__uniConfig.router = {
                mode: "hash",
                base: "/"
            }, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0, e.__uniConfig.locales = a.keys().reduce((function (e, t) {
                var n = t.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
                    i = a(t);
                return Object.assign(e[n] || (e[n] = {}), i.common || i), e
            }), {}), e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, e.__uniConfig.__webpack_chunk_load__ = n.e, i.default.component("pages-index-index", (function (e) {
                var t = {
                    component: n.e("pages-index-index").then(function () {
                        return e(n("9c6f"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-index-login", (function (e) {
                var t = {
                    component: n.e("pages-index-login").then(function () {
                        return e(n("d37f"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-index-register", (function (e) {
                var t = {
                    component: n.e("pages-index-register").then(function () {
                        return e(n("8c32"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-index", (function (e) {
                var t = {
                    component: n.e("pages-vip-index").then(function () {
                        return e(n("055b"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-team", (function (e) {
                var t = {
                    component: n.e("pages-vip-team").then(function () {
                        return e(n("3ac1"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-flow", (function (e) {
                var t = {
                    component: n.e("pages-vip-flow").then(function () {
                        return e(n("1e84"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-recruit", (function (e) {
                var t = {
                    component: n.e("pages-vip-recruit").then(function () {
                        return e(n("e9ae"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-service-tutorial", (function (e) {
                var t = {
                    component: n.e("pages-service-tutorial").then(function () {
                        return e(n("f9b7"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-service-help", (function (e) {
                var t = {
                    component: n.e("pages-service-help").then(function () {
                        return e(n("4d50"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-service-news", (function (e) {
                var t = {
                    component: n.e("pages-service-news").then(function () {
                        return e(n("4e02"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-mining-machine", (function (e) {
                var t = {
                    component: n.e("pages-mining-machine").then(function () {
                        return e(n("ba56"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-myinfo", (function (e) {
                var t = {
                    component: n.e("pages-vip-myinfo").then(function () {
                        return e(n("0e0c"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-card", (function (e) {
                var t = {
                    component: n.e("pages-vip-card").then(function () {
                        return e(n("9a62"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-password", (function (e) {
                var t = {
                    component: n.e("pages-vip-password").then(function () {
                        return e(n("7192"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-paypwd", (function (e) {
                var t = {
                    component: n.e("pages-vip-paypwd").then(function () {
                        return e(n("ca67"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-rechargelist", (function (e) {
                var t = {
                    component: n.e("pages-vip-rechargelist").then(function () {
                        return e(n("d8c4"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-recharge", (function (e) {
                var t = {
                    component: n.e("pages-vip-recharge").then(function () {
                        return e(n("5720"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-withdrawlist", (function (e) {
                var t = {
                    component: n.e("pages-vip-withdrawlist").then(function () {
                        return e(n("2fe4"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-withdraw", (function (e) {
                var t = {
                    component: n.e("pages-vip-withdraw").then(function () {
                        return e(n("35c7"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-withdrawlist", (function (e) {
                var t = {
                    component: n.e("pages-vip-withdrawlist").then(function () {
                        return e(n("2fe4"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-health-index", (function (e) {
                var t = {
                    component: n.e("pages-health-index").then(function () {
                        return e(n("546a"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-health-invest", (function (e) {
                var t = {
                    component: n.e("pages-health-invest").then(function () {
                        return e(n("0fa9"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-health-investlist", (function (e) {
                var t = {
                    component: n.e("pages-health-investlist").then(function () {
                        return e(n("001c"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-mining-maclist", (function (e) {
                var t = {
                    component: n.e("pages-mining-maclist").then(function () {
                        return e(n("248e"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-service-detail", (function (e) {
                var t = {
                    component: n.e("pages-service-detail").then(function () {
                        return e(n("d9e5"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-mining-dayflow", (function (e) {
                var t = {
                    component: n.e("pages-mining-dayflow").then(function () {
                        return e(n("c0af"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-tickcard", (function (e) {
                var t = {
                    component: n.e("pages-vip-tickcard").then(function () {
                        return e(n("93f5"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-prod-detail", (function (e) {
                var t = {
                    component: n.e("pages-prod-detail").then(function () {
                        return e(n("ac84"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-bank", (function (e) {
                var t = {
                    component: n.e("pages-vip-bank").then(function () {
                        return e(n("7b61"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-vip-index", (function (e) {
                var t = {
                    component: n.e("pages-vip-index").then(function () {
                        return e(n("055b"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), i.default.component("pages-prod-orderlist", (function (e) {
                var t = {
                    component: n.e("pages-prod-orderlist").then(function () {
                        return e(n("7a46"))
                    }.bind(null, n)).catch(n.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (t.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (t.error = {
                    name: "SystemAsyncError",
                    render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), t
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "Ola Smart Parking",
                                titleNView: !1
                            })
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/index/login",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1,
                                titleNView: !1
                            })
                        }, [e("pages-index-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-index-login",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/index/login",
                    windowTop: 0
                }
            }, {
                path: "/pages/index/register",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1,
                                titleNView: !1
                            })
                        }, [e("pages-index-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-index-register",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/index/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/vip/index",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 3
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-vip-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 3,
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/team",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-team", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-vip-team",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/team",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/flow",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-flow", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-flow",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/flow",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/recruit",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-recruit", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-recruit",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/recruit",
                    windowTop: 44
                }
            }, {
                path: "/pages/service/tutorial",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-service-tutorial", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-service-tutorial",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/service/tutorial",
                    windowTop: 44
                }
            }, {
                path: "/pages/service/help",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-service-help", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-service-help",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/service/help",
                    windowTop: 44
                }
            }, {
                path: "/pages/service/news",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-service-news", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-service-news",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/service/news",
                    windowTop: 44
                }
            }, {
                path: "/pages/mining/machine",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-mining-machine", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mining-machine",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mining/machine",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/myinfo",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-myinfo", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-myinfo",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/myinfo",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/card",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-card", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-card",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/card",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/password",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-password", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-password",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/password",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/paypwd",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-paypwd", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-paypwd",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/paypwd",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/rechargelist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-rechargelist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-rechargelist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/rechargelist",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/recharge",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-recharge", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-recharge",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/recharge",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/withdrawlist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-withdrawlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-withdrawlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/withdrawlist",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/withdraw",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/withdraw",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/withdrawlist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-withdrawlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-withdrawlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/withdrawlist",
                    windowTop: 44
                }
            }, {
                path: "/pages/health/index",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-health-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-health-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/health/index",
                    windowTop: 44
                }
            }, {
                path: "/pages/health/invest",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-health-invest", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-health-invest",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/health/invest",
                    windowTop: 44
                }
            }, {
                path: "/pages/health/investlist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-health-investlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-health-investlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/health/investlist",
                    windowTop: 44
                }
            }, {
                path: "/pages/mining/maclist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-mining-maclist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 4,
                    name: "pages-mining-maclist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mining/maclist",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 44
                }
            }, {
                path: "/pages/service/detail",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-service-detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-service-detail",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/service/detail",
                    windowTop: 44
                }
            }, {
                path: "/pages/mining/dayflow",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-mining-dayflow", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mining-dayflow",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mining/dayflow",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/tickcard",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                navigationBarBackgroundColor: "#2a1a9d",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-tickcard", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-tickcard",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/tickcard",
                    windowTop: 44
                }
            }, {
                path: "/pages/prod/detail",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-prod-detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-prod-detail",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/prod/detail",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/bank",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-bank", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-vip-bank",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/bank",
                    windowTop: 44
                }
            }, {
                path: "/pages/vip/index",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 3
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-vip-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 5,
                    name: "pages-vip-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/vip/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 3,
                    windowTop: 44
                }
            }, {
                path: "/pages/prod/orderlist",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-prod-orderlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-prod-orderlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/prod/orderlist",
                    windowTop: 44
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }], e.UniApp && new e.UniApp
        }).call(this, n("c8ba"))
    },
    "3e3e": function (e, t, n) {
        var i = n("24fb");
        t = i(!1), t.push([e.i, 'uni-page-body{background:#fff!important}.container{height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:%?0?% %?0?%;box-sizing:border-box}.container.vcenter{align-items:center}.container:after{content:" ";width:100%;height:%?20?%;display:no}.emptybar{height:%?20?%;width:100%}.weui-cells{width:100%;background-color:#fff;line-height:1.47058824;font-size:%?30?%;overflow:hidden;position:relative}.weui-cells.lr30{margin-left:%?15?%;margin-right:%?15?%}.weui-cells:before{content:" ";position:absolute;left:0;top:0;right:0;height:1px;border-top:1px solid #ededed;color:#ededed;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:2}.weui-cells:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #ededed;color:#ededed;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5);z-index:2}.weui-cells.notbefore:before,.weui-cells.notafter:after{display:none}.weui-cell{width:100%;box-sizing:border-box;padding:%?20?% %?30?%;min-height:%?100?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.weui-cell:before{content:" ";position:absolute;top:0;right:%?15?%;height:1px;border-top:1px solid #ededed;color:#ededed;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:%?15?%;z-index:2}.weui-cell:after{content:" ";position:absolute;bottom:0;right:%?15?%;height:1px;border-top:1px solid #ededed;color:#ededed;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scaleY(.5);transform:scaleY(.5);left:%?15?%;z-index:2}.weui-cell.before0:before{left:%?0?%}.weui-cell.after0:after{left:%?0?%;right:%?0?%}.weui-cell.notbefore:before,.weui-cell.notafter:after{display:none}.weui-cell_primary{-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.weui-cell__bd{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333;font-size:14px}.weui-cell__ft{text-align:right;color:#999;font-size:%?24?%}.emptypage{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;position:relative}.emptypage .econtent{width:calc(100% - %?20?%);background:#fff;border-radius:%?20?%;box-sizing:border-box;position:relative}.emptypage .imgfull{width:100%}.emptypage .text{color:#666;font-size:14px;text-align:center;display:flex;align-items:center;justify-content:center;position:absolute;bottom:%?40?%;background:#fff;box-sizing:border-box;width:100%}.mask{left:0;top:0;position:fixed;background:rgba(0,0,0,.5);width:100vw;height:100vh;z-index:10000}.popbottom{position:absolute;z-index:100001;width:100%;bottom:0;height:40vh;background:#f9f9f9}.popbottom .titlebar{background:#fff;width:100%;height:%?90?%;font-size:15px;display:flex;justify-content:center;align-items:center;color:#446ffa;position:relative}.popbottom .titlebar .cancel{color:rgba(250,90,40,.7)}.popbottom .pickview{width:100%;position:absolute;height:100%}.popbottom .pickline{height:%?80?%;line-height:%?120?%;border-top:1px solid transparent;border-bottom:1px solid transparent;border-image:linear-gradient(90deg,#fff,red,#fff) 1 10}.popbottom .picktext{text-align:center;display:flex;justify-content:center;align-items:center}.tabtop{width:100%;height:%?100?%;background:#fff;display:flex;justify-content:space-between;flex-direction:row;align-items:center}.tabtop.fix{position:fixed;z-index:100000}.tabtop .tabitem{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:%?26?%;color:#666;position:relative}.tabtop .tabitem.active{color:#446ffa}.tabtop .tabitem .tabtext{display:flex;position:relative;justify-content:center;align-items:center;height:%?100?%;padding:0 %?0?%;box-sizing:border-box}.tabtop .tabitem .tabtext.rows{display:flex;position:relative;justify-content:center;flex-direction:column;align-items:center;height:%?100?%;box-sizing:border-box}.tabtop .tabitem .tabtext.rows .num{margin-top:%?10?%}.tabtop .tabitem.active .tabtext:after{content:" ";position:absolute;bottom:%?0?%;left:%?0?%;width:100%;height:%?6?%;background:#446ffa}.flexgrip{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;justify-content:flex-start;flex-direction:row;align-items:center;flex-wrap:wrap}.flexgrip .flexitem{padding-top:%?20?%;padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;flex-direction:column;justify-items:center;align-items:center}.flexgrip .flexitem .imgview{position:relative}.flexgrip.col4 .flexitem{width:25%}.flexgrip.col5 .flexitem{width:20%}.flexgrip.col5 .flexitem{padding-top:%?20?%;padding-bottom:%?40?%}.flexgrip .flexitem .img60{height:%?60?%;width:%?60?%}.flexgrip .flexitem .img40{width:%?40?%;height:%?40?%}.flexgrip .flexitem .img56{width:%?56?%;height:%?56?%}.flexgrip .flexitem .label{font-size:%?28?%;margin-top:%?15?%;line-height:%?30?%;color:#333;font-weight:400}.loadpart{width:100%;height:%?80?%;display:flex;justify-content:center;align-items:center}.loadpart .img{width:%?40?%;height:%?40?%}.currsign{padding-left:%?10?%;padding-right:%?10?%}.img_entersign{width:%?48?%;height:%?48?%}.topvipnick{color:#64563f}.topusericon{width:%?100?%;margin-right:%?20?%;height:%?100?%;border-radius:%?100?%;border:1px solid #d7d7d7}.topmsgicon{width:%?67?%;height:%?49?%}.topshareicon{width:%?60?%;height:%?60?%}.ft_r30{margin-right:%?30?%}.ftxt{width:100%;padding:0 %?15?%;font-size:26px;font-size:%?28?%;height:%?60?%;color:#333}.title250{width:%?250?%;color:#666;font-size:14px}.fholder{font-size:%?28?%;color:#999}.btnlist{width:100%;display:flex;justify-content:space-around;box-sizing:border-box;padding:0 %?20?%;padding-bottom:%?20?%}.btn{width:100%;height:%?100?%;font-size:%?24?%;line-height:%?90?%;color:#fff;text-align:center;background:#3563ff!important;background-size:100% 100%!important;border:0;box-sizing:border-box;border-radius:%?40?%;font-size:15px}.btn:after{display:none}.btn.orange{background:#fbb730!important}.btn.gray{background:#dde4fe!important;color:#666;border:0;border-radius:%?60?%}.btn.orange2{background:#fbb730!important;width:%?172?%;height:%?75?%;line-height:%?64?%;background-size:cover!important;border:0}.btn.blue2{width:%?172?%;height:%?75?%;line-height:%?64?%;background-size:100% 100%!important;border:0}.btn60{height:%?60?%;line-height:%?60?%}.btn:last-child{margin-right:%?0?%}.btn.active{background:linear-gradient(90deg,#40d4ff,#1c97f9)}.leftreturn{width:%?38?%;height:%?61?%;position:absolute;left:%?15?%;top:%?10?%}body.?%PAGE?%{background:#fff!important}', ""]), e.exports = t
    },
    "44c3": function (e, t, n) {
        "use strict";
        n.r(t);
        var i = n("3093"),
            a = n.n(i);
        for (var o in i) "default" !== o && function (e) {
            n.d(t, e, (function () {
                return i[e]
            }))
        }(o);
        t["default"] = a.a
    },
    "565e": function (e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", (function () {
            return a
        })), n.d(t, "c", (function () {
            return o
        })), n.d(t, "a", (function () {
            return i
        }));
        var a = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("App", {
                    attrs: {
                        keepAliveInclude: e.keepAliveInclude
                    }
                })
            },
            o = []
    },
    "8cfc": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            message: {
                tabtext0: "é¦–é¡µ",
                tabtext1: "è®¾å¤‡",
                tabtext2: "å›¢é˜Ÿ",
                tabtext3: "æˆ‘çš„",
                text1: "æŠ•èµ„æ€»é¢",
                text2: "æŠ•èµ„åˆ†çº¢",
                text3: "å¯æçŽ°é‡‘é¢",
                buy: "è´­ä¹°",
                text5: "å¥åº·åŸºé‡‘",
                text6: "åŸºé‡‘äº§å“",
                text7: "æŠ•èµ„å‘¨æœŸ",
                text8: "æ”¶ç›ŠçŽ‡",
                text9: "æŠ•èµ„é‡‘é¢",
                text10: "å¯æŠ•èµ„é‡‘é¢",
                text11: "è¯·è¾“å…¥æŠ•èµ„é‡‘é¢",
                text12: "å…¨éƒ¨",
                text13: "åˆ°æœŸæ”¶ç›Š",
                text14: "è¯·è¾“å…¥äº¤æ˜“å¯†ç ",
                ok: "ç¡®å®š",
                cancel: "å–æ¶ˆ",
                text17: "æŠ•èµ„å¥åº·åŸºé‡‘",
                text18: "å¥åº·åŸºé‡‘ä¸å­˜åœ¨",
                notrecord: "æš‚æ— è®°å½•",
                text20: "åˆ°æœŸæ—¥æœŸ",
                text21: "ä½¿ç”¨æ•™ç¨‹",
                text22: "è´­ä¹°ä»‹ç»",
                text23: "ä¿¡æ¯å…¬å‘Š",
                text24: "é‚€è¯·å¥½å‹",
                text25: "æŒ–çŸ¿æ”¶ç›Š",
                text26: "æ€»æ”¶ç›Š",
                text27: "æŒ–çŸ¿æ€»æ”¶ç›Š",
                text28: "å¾…æ”¶é›†æ”¶ç›Š",
                text29: "å…¶ä»–æ”¶ç›Š",
                text30: "å¼€å§‹æ”¶é›†",
                text31: "ç”¨æˆ·",
                text32: "è´¦æˆ·æ€»é¢",
                tip: "æç¤º",
                text34: "ç¡®å®šè¦å¼€å§‹æ”¶é›†æŒ–çŸ¿æ”¶ç›Šå—",
                text35: "æ”¶é›†å®Œæˆ",
                text36: "ç™»å½•",
                text37: "æ²¡æœ‰è´¦å·ï¼Œè¯·å…ˆæ³¨å†Œ",
                text38: "ä¸‹è½½APP",
                text39: "è¯·è¾“å…¥æ‰‹æœºå·ç ",
                text40: "è¯·è¾“å…¥å¯†ç ",
                text41: "è¯·è¾“å…¥ç¡®è®¤å¯†ç ",
                text42: "è¯·è¾“å…¥é‚€è¯·ç ",
                text43: "éªŒè¯ç ",
                text44: "æ³¨å†Œ",
                text45: "å·²æœ‰è´¦å·ï¼Œè¯·ç™»å½•",
                text46: "ç¡®è®¤å¯†ç ä¸ä¸€è‡´",
                text47: "è¯·è¾“å…¥éªŒè¯ç ",
                text48: "ç¡®å®šæ²¡æœ‰é‚€è¯·ç å—",
                text49: "æœ‰é‚€è¯·ç ",
                text50: "æ³¨å†Œå®Œæˆ",
                text51: "æ¯æ—¥åˆ†çº¢",
                text52: "é™è´­",
                unit: "units",
                text53: "åˆåŒå‘¨æœŸ",
                day: "å¤©",
                month: "æœˆ",
                year: "å¹´",
                hour: "å°æ—¶",
                text57: "ä¸é™æ—¥æœŸ",
                text58: "ç®—åŠ›",
                free: "å…è´¹",
                text60: "åŠŸè€—",
                text61: "è´­ä¹°å¯æå‡æ”¶ç›Š",
                text62: "å·²è´­äº§å“",
                status: "çŠ¶æ€",
                name: "åç§°",
                text65: "åˆ†çº¢å‘¨æœŸ",
                text66: "ä¸é™",
                price: "å•ä»·",
                text69: "å¯ç”¨ä½™é¢",
                text70: "è´­ä¹°æ•°é‡",
                text71: "åº”ä»˜é‡‘é¢",
                text72: "è´­ä¹°äº§å“",
                text73: "è¯¥äº§å“ä¸å­˜åœ¨",
                text74: "è¯·è¾“å…¥è´­ä¹°æ•°é‡",
                text76: "æ”¯ä»˜æ€»é¢",
                text77: "æ¯æ—¥æ”¶ç›Š",
                text78: "äº§å“åˆ—è¡¨",
                text79: "è¯¦æƒ…",
                text80: "è´¦æˆ·ä¿¡æ¯",
                text81: "ç”¨æˆ·å",
                text82: "è´¦æˆ·ä½™é¢",
                text83: "äº§å“æ•°é‡",
                text84: "æ€»èµ„äº§",
                text85: "å……å€¼",
                text86: "æçŽ°",
                text87: "ç”¨æˆ·ä¿¡æ¯",
                text88: "èµ„é‡‘æ˜Žç»†",
                text89: "æˆ‘çš„æŽ¨è",
                text90: "å……å€¼è®°å½•",
                text91: "æçŽ°è®°å½•",
                logout: "é€€å‡º",
                text93: "ç™»å½•å¯†ç ",
                text94: "äº¤æ˜“å¯†ç ",
                text95: "ä¿®æ”¹ç™»å½•å¯†ç ",
                text96: "è¯·è¾“å…¥åŽŸå¯†ç ",
                text97: "è¯·è¾“å…¥æ–°å¯†ç ",
                text98: "è¯·ç¡®è®¤æ–°å¯†ç ",
                text99: "ç¡®è®¤æ–°å¯†ç ä¸ä¸€è‡´",
                text100: "ä¿®æ”¹å¯†ç å®Œæˆ",
                text101: "è¯·è®¾ç½®äº¤æ˜“å¯†ç ",
                text102: "è¯·è¾“å…¥ç™»å½•å¯†ç ",
                text104: "è¯·ç¡®è®¤äº¤æ˜“å¯†ç ",
                text105: "ç¡®è®¤äº¤æ˜“å¯†ç ä¸ä¸€è‡´",
                text106: "è®¾ç½®äº¤æ˜“å¯†ç å®Œæˆ",
                text107: "è¯·é€‰æ‹©å……å€¼é‡‘é¢",
                text108: "ç¡®è®¤å……å€¼é‡‘é¢",
                text109: "è¯·é€‰æ‹©å……å€¼æ–¹å¼",
                text110: "æˆ‘è¦å……å€¼",
                text111: "è¯·è¾“å…¥æ­£ç¡®çš„å……å€¼é‡‘é¢",
                text112: "å……å€¼å•å·",
                text113: "å……å€¼é‡‘é¢",
                text114: "é‚€è¯·ç ",
                text115: "å¤åˆ¶é“¾æŽ¥",
                text116: "å¤åˆ¶é“¾æŽ¥å®Œæˆ",
                text117: "å¤åˆ¶é“¾æŽ¥å¤±è´¥",
                text118: "å›¢é˜Ÿåˆ†çº¢",
                text119: "å›¢é˜Ÿæˆå‘˜",
                text120: "ç¬¬1çº§",
                text121: "ç¬¬2çº§",
                text122: "ç¬¬3çº§",
                text123: "æˆ‘çš„å›¢é˜Ÿ",
                text124: "èŽ·å–æˆ‘çš„å›¢é˜Ÿå¤±è´¥",
                text125: "è¯·è¾“å…¥æçŽ°é‡‘é¢",
                text126: "æ‚¨çš„TRXåœ°å€",
                text127: "æˆ‘è¦æçŽ°",
                text128: "ç”³è¯·é‡‘é¢",
                text129: "é“¶è¡Œå¡å·",
                text130: "å®¡æ ¸æ—¶é—´",
                text131: "æ–°ç‰ˆæœ¬æç¤º",
                text132: "æœ‰æ–°ç‰ˆæœ¬ï¼Œè¦å‡çº§å—",
                text133: "èŽ·å–æ–°ç‰ˆæœ¬",
                text134: "æœ‰æ–°ç‰ˆæœ¬ï¼Œè¦ä¸‹è½½æ–°ç‰ˆå—",
                text135: "æš‚ä¸å‡çº§",
                text136: "å‡çº§å®Œæˆï¼Œå°†é‡å¯APP",
                text137: "å‡çº§å¤±è´¥",
                text138: "ä¸‹è½½å¤±è´¥",
                text139: "å¤åˆ¶åœ°å€",
                text140: "å¤åˆ¶åœ°å€å®Œæˆ",
                text141: "å¤åˆ¶åœ°å€å¤±è´¥",
                text142: "åœ°å€",
                text143: "å……å€¼å®Œæˆ",
                text144: "è¯·è¾“å…¥æ‚¨çš„TRXåœ°å€",
                text145: "è¯·å…ˆä¸Šä¼ è½¬è´¦æˆªå›¾",
                text146: "æäº¤å……å€¼æˆªå›¾å¤±è´¥",
                text147: "è´­ä¹°å¯æé«˜æ”¶ç›Š",
                text148: "è¯·è®¾å®šæ‚¨çš„TRXåœ°å€",
                text149: "è®¾å®šTRXåœ°å€",
                text150: "è®¾å®šå®Œæˆ",
                text151: "æ£€æŸ¥æ›´æ–°",
                text152: "å·²ç»æ˜¯æœ€æ–°ç‰ˆæœ¬",
                text153: "ç­¾åˆ°",
                text154: "ä»Šæ—¥å·²ç­¾åˆ°",
                text155: "ä»Šæ—¥è¿˜æœªç­¾åˆ°",
                text156: "ç­¾åˆ°å®Œæˆ",
                text157: "ç­¾åˆ°å¤±è´¥",
                text158: "å·²ç»è¿žç»­ç­¾åˆ°",
                text159: "å¼€å§‹ç­¾åˆ°",
                text160: "æ€»æ”¶å…¥",
                text161: "æ¯å°æ—¶æ”¶å…¥",
                text162: "è¯·ç»‘å®šæ­£ç¡®çš„é“¶è¡Œå¡",
                text163: "é“¶è¡Œå¡å·",
                text164: "é“¶è¡Œæˆ·å",
                text165: "æ‰‹æœºå·ç ",
                text166: "ç»‘å®šé“¶è¡Œå¡å·",
                text167: "è¯·è¾“å…¥é“¶è¡Œå¡å·",
                text168: "è¯·è¾“å…¥é“¶è¡Œæˆ·å",
                text169: "è¯·è¾“å…¥IFSC",
                text170: "è¯·è¾“å…¥é¢„ç•™æ‰‹æœºå·ç ",
                text171: "ç»‘å®šé“¶è¡Œå¡å®Œæˆ",
                text172: "å›¢é˜Ÿæ”¶å…¥",
                text173: "é¡¹ç›®æ”¶å…¥",
                text174: "æ‰‹ç»­è´¹",
                text175: "å®žé™…åˆ°è´¦é‡‘é¢",
                text176: "è®¾å¤‡æ•°é‡",
                text177: "å¾…é¢†å–æ”¶å…¥",
                text178: "ä¸ª"
            }
        };
        t.default = i
    },
    9490: function (e, t, n) {
        "use strict";
        var i = n("4ea4"),
            a = i(n("5530"));
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("357d"), n("1c31");
        var o = i(n("09f1")),
            r = i(n("e143")),
            s = i(n("fe7e")),
            c = i(n("a925")),
            l = i(n("8cfc")),
            g = i(n("cb95"));
        r.default.use(s.default), r.default.use(c.default);
        var u = new c.default({
            locale: "zh_en",
            messages: {
                zh_cn: l.default,
                zh_en: g.default
            }
        });
        r.default.prototype._i18n = u, r.default.prototype.$i18nMsg = function () {
            return u.messages[u.locale]
        }, r.default.config.productionTip = !1, o.default.mpType = "app";
        var p = new r.default((0, a.default)({}, o.default));
        r.default.use(s.default), r.default.prototype.checkLogin = function (e) {
            var t = uni.getStorageSync("usertoken") || "",
                n = uni.getStorageSync("userinfo") || {};
            return 0 == t.length ? (uni.redirectTo({
                url: "/pages/index/login"
            }), !1) : (n.gth || (n = {
                pict: "/static/img/userpict.png",
                phone: "********",
                gname: "LV0",
                gth: 1,
                nickname: "****"
            }), !n || n.pict && 0 != n.pict.length || (n.pict = "/static/img/userpict.png"), e.$data.usertoken = t, e.$data.userinfo = n, !0)
        }, p.$mount()
    },
    cb95: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = {
            message: {
                tabtext0: "Home",
                tabtext1: "Equipment",
                tabtext2: "Team",
                tabtext3: "My",
                text1: "Total investment",
                text2: "Investment dividend",
                text3: "Available cash amount",
                buy: "Buy",
                text5: "Health Fund",
                text6: "Fund product",
                text7: "Investment cycle",
                text8: "Income rate",
                text9: "Investment amount",
                text10: "Investable amount",
                text11: "Please enter the investment amount",
                text12: "All",
                text13: "Income maturity date",
                text14: "Enter the transaction password",
                ok: "OK",
                cancel: "cancel",
                text17: "Health fund investment",
                text18: "There is no Health Fund",
                notrecord: "No records",
                text20: "Due date",
                text21: "Tutorial",
                text22: "How to",
                text23: "News",
                text24: "Invite",
                text25: "Product revenue",
                text26: "Total revenue",
                text27: "Total Product revenue",
                text28: "Income to be collected",
                text29: "Other income",
                text30: "Start collecting",
                text31: "User",
                text32: "Total account",
                tip: "Tips",
                text34: "Are you sure you want to start collecting Product revenue?",
                text35: "Collection completed",
                text36: "Login",
                text37: "No account, please register first",
                text38: "Download APP",
                text39: "Please enter mobile number",
                text40: "Please enter password",
                text41: "Please enter password confirmation",
                text42: "Please enter the invitation code",
                text43: "verification code",
                text44: "Register",
                text45: "Already have an account, please login",
                text46: "Confirm passwords are inconsistent",
                text47: "please enter the verification code",
                text48: "Are you sure there is no invitation code?",
                text49: "Have",
                text50: "Registration complete",
                text51: "Daily dividend",
                text52: "Limited purchase of",
                unit: "units",
                text53: "Dividend cycle",
                day: "Day",
                month: "Month",
                year: "Year",
                hour: "Hour",
                text57: "Unlimited date",
                text58: "Computational power",
                free: "Free",
                text60: "Power consumption",
                text61: "Purchases can increase income",
                text62: "Purchased Product machine",
                status: "Status",
                name: "Name",
                text65: "Dividend cycle",
                text66: "Unlimited",
                price: "Unit price",
                text69: "Available Balance",
                text70: "purchase quantity",
                text71: "Amount payable",
                text72: "Buy Product machine",
                text73: "Product machine does not exist",
                text74: "Please enter the purchase quantity",
                text76: "Total payment",
                text77: "Daily income",
                text78: "Product machine list",
                text79: "Details",
                text80: "Account Information",
                text81: "username",
                text82: "Account balance",
                text83: "Number of Product machines",
                text84: "Total assets",
                text85: "Recharge",
                text86: "Withdraw",
                text87: "User Info",
                text88: "Funding details",
                text89: "My recommendation",
                text90: "Recharge record",
                text91: "Withdrawal record",
                logout: "Log out",
                text93: "login password",
                text94: "transaction password",
                text95: "Change login password",
                text96: "Please enter the original password",
                text97: "Please enter a new password",
                text98: "Please confirm the new password",
                text99: "Confirm new passwords are inconsistent",
                text100: "Modify password completed",
                text101: "Please set the transaction password",
                text102: "Please enter login password",
                text104: "Please confirm the transaction password",
                text105: "Confirm transaction passwords are inconsistent",
                text106: "Transaction password setup is complete",
                text107: "Please select the recharge amount",
                text108: "Confirm the recharge amount",
                text109: "Please select a recharge method",
                text110: "I want to recharge",
                text111: "Please enter the correct recharge amount",
                text112: "Recharge order no.",
                text113: "Recharge amount",
                text114: "Invitation code",
                text115: "Copy link",
                text116: "Copy link completed",
                text117: "Copy link failed",
                text118: "Team dividend",
                text119: "Team member",
                text120: "Level 1",
                text121: "Level 2",
                text122: "Level 3",
                text123: "my team",
                text124: "Failed to get my team",
                text125: "Please enter the amount",
                text126: "Your TRX address",
                text127: "I want to withdraw",
                text128: "Application amount",
                text129: "Bank Account",
                text130: "Review time",
                text131: "New version prompt",
                text132: "There is a new version, do you want to upgrade",
                text133: "Get the new version",
                text134: "do you want to download the new version?",
                text135: "No",
                text136: "the APP will be restarted",
                text137: "Upgrade failed",
                text138: "download failed",
                text139: "Copy address",
                text140: "Copy address completed",
                text141: "Failed to copy address",
                text142: "address",
                text143: "Recharge completed",
                text144: "Enter your TRX address",
                text145: "Please upload a screenshot of the transfer first",
                text146: "Failed to submit recharge screenshot",
                text147: "Inviting to buy can increase revenue",
                text148: "Please set your TRX address",
                text149: "Set TRX address",
                text150: "Set up",
                text151: "Check for updates",
                text152: "Already the latest version",
                text153: "Clock in",
                text154: "Punched in today",
                text155: "Haven't checked in today",
                text156: "Success to check in",
                text157: "Failed to check in",
                text158: "Has been punched continuously",
                text159: "Start clocking",
                text160: "Total Profit",
                text161: "Hour Profit",
                text162: "Please bind the bank card",
                text163: "Bank card number",
                text164: "Bank account name",
                text165: "mobile phone",
                text166: "Bind bank card number",
                text167: "Please enter the bank card number",
                text168: "Please enter your bank account name",
                text169: "Please enter the IFSC",
                text170: "Please enter the reserved mobile phone number",
                text171: "Bank card binding is complete",
                text172: "Team income",
                text173: "Project income",
                text174: "Fee",
                text175: "Actual amount received",
                text176: "Equipment Quantity",
                text177: "Unclaimed income",
                text178: "Users"
            }
        };
        t.default = i
    },
    dc8d: function (e, t, n) {
        var i = n("3e3e");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var a = n("4f06").default;
        a("0b913b59", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    }
});