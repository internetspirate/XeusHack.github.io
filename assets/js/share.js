var socialWarfarePlugin = socialWarfarePlugin || {};
    ! function(a, b) {
        var c, d = a.socialWarfarePlugin;
        d.throttle = c = function(a, c, e, f) {
            function g() {
                function d() {
                    i = +new Date, e.apply(j, l)
                }

                function g() {
                    h = b
                }
                var j = this,
                    k = +new Date - i,
                    l = arguments;
                f && !h && d(), h && clearTimeout(h), f === b && k > a ? d() : c !== !0 && (h = setTimeout(f ? g : d, f === b ? a - k : a))
            }
            var h, i = 0;
            return "boolean" != typeof c && (f = e, e = c, c = b), d.guid && (g.guid = e.guid = e.guid || d.guid++), g
        }, d.debounce = function(a, d, e) {
            return e === b ? c(a, d, !1) : c(a, e, d !== !1)
        }
    }(this),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return parseInt(a, 10)
        }

        function e(c) {
            var d = b.Event(c);
            b(a).trigger(d)
        }

        function f() {
            b(".nc_socialPanel:not(.nc_socialPanelSide) .nc_tweetContainer:not(.swp_nohover) .iconFiller").removeAttr("style"), b(".nc_socialPanel:not(.nc_socialPanelSide) .nc_tweetContainer:not(.swp_nohover)").removeAttr("style")
        }

        function g() {
            b(".nc_wrapper").length && b(".nc_wrapper").remove();
            var a = b(".nc_socialPanel").not('[data-float="float_ignore"]').first(),
                c = (b(".nc_socialPanel").index(a), a.attr("data-float")),
                d = a.attr("data-align");
            if (c) {
                var e = b(".nc_socialPanel").attr("data-floatColor");
                b('<div class="nc_wrapper" style="background-color:' + e + '"></div>').appendTo("body");
                var f = a.attr("data-float");
                a.clone().appendTo(".nc_wrapper"), b(".nc_wrapper").hide().addClass("floatLeft" == f ? "floatBottom" : f);
                var g = a.outerWidth(!0),
                    h = a.offset();
                b(".nc_socialPanel").last().addClass("nc_floater").css({
                    width: g,
                    left: "center" == d ? 0 : h.left
                }), b(".nc_socialPanel .swp_count").css({
                    transition: "padding .1s linear"
                }), b(".nc_socialPanel").eq(0).addClass("swp_one"), b(".nc_socialPanel").eq(2).addClass("swp_two"), b(".nc_socialPanel").eq(1).addClass("swp_three")
            }
        }

        function h() {
            var c = b(".nc_socialPanel"),
                d = c.not('[data-float="float_ignore"]').eq(0).attr("data-float"),
                f = b(a),
                g = f.height(),
                h = b(".nc_wrapper"),
                i = b(".nc_socialPanelSide").filter(":not(.mobile)"),
                j = (b(".nc_socialPanel").attr("data-position"), i.attr("data-screen-width")),
                k = c.eq(0).offset(),
                l = f.scrollTop();
            b(a).scrollTop();
            "undefined" == typeof a.swpOffsets && (a.swpOffsets = {});
            var m = !1;
            if ("floatLeft" == d) {
                var n = b(".nc_socialPanelSide").attr("data-mobileFloat");
                b(".nc_socialPanel").not(".nc_socialPanelSide").length ? (b(".nc_socialPanel").not(".nc_socialPanelSide, .nc_floater").each(function() {
                    var a = b(this).offset(),
                        c = b(this).height();
                    a.top + c > l && a.top < l + g && (m = !0)
                }), k.left < 100 || b(a).width() < j ? (m = !0, "bottom" == n && (d = "floatBottom")) : m || (m = !1)) : b(a).width() > j ? m = !1 : (m = !0, "bottom" == n && (d = "floatBottom"));
                var o = i.attr("data-transition");
                "slide" == o ? 1 == m ? i.css({
                    left: "-100px"
                }, 200) : i.css({
                    left: "5px"
                }) : "fade" == o && (1 == m ? i.fadeOut(200) : i.fadeIn(200))
            }
            if ("floatBottom" == d || "floatTop" == d)
                if (m = !1, b(".nc_socialPanel").not(".nc_socialPanelSide, .nc_floater").each(function() {
                        var a = b(this).offset(),
                            c = b(this).height();
                        a.top + c > l && a.top < l + g && (m = !0)
                    }), m) h.hide(), "floatBottom" == d ? b("body").animate({
                    "padding-bottom": a.bodyPaddingBottom + "px"
                }, 0) : "floatTop" == d && b("body").animate({
                    "padding-top": a.bodyPaddingTop + "px"
                }, 0);
                else {
                    var p, q;
                    h.show(), e("floating_bar_revealed"), "floatBottom" == d ? (p = a.bodyPaddingBottom + 50, b("body").animate({
                        "padding-bottom": p + "px"
                    }, 0)) : "floatTop" == d && (q = b(".nc_socialPanel").not(".nc_socialPanelSide, .nc_wrapper .nc_socialPanel").first().offset(), q.top > l + g && (p = a.bodyPaddingTop + 50, b("body").animate({
                        "padding-top": p + "px"
                    }, 0)))
                }
        }

        function i() {
            0 !== b(".nc_socialPanel").length && (g(), l.activateHoverStates(), k(), b(a).scrollTop(), b(a).scroll(l.throttle(50, function() {
                h()
            })), b(a).trigger("scroll"), b(".nc_socialPanel").css({
                opacity: 1
            }))
        }

        function j() {
            var c = {
                    wrap: '<div class="sw-pinit" />',
                    pageURL: document.URL
                },
                d = b.extend(c, d);
            b(".swp-content-locator").parent().find("img").each(function() {
                var c = b(this);
                if (!(c.outerHeight() < swpPinIt.minHeight || c.outerWidth() < swpPinIt.minWidth)) {
                    var e = !1;
                    if (c.data("media") ? e = c.data("media") : c[0].src && (e = c[0].src), e) {
                        var f = "";
                        c.attr("title") ? f = c.attr("title") : c.attr("alt") && (f = c.attr("alt"));
                        var g = "http://pinterest.com/pin/create/bookmarklet/?media=" + encodeURI(e) + "&url=" + encodeURI(d.pageURL) + "&is_video=false&description=" + f,
                            h = c.attr("class"),
                            i = c.attr("style");
                        c.removeClass().attr("style", "").wrap(d.wrap), c.after('<a href="' + g + '" class="sw-pinit-button sw-pinit-' + swpPinIt.vLocation + " sw-pinit-" + swpPinIt.hLocation + '">Save</a>'), c.parent(".sw-pinit").addClass(h).attr("style", i), b(".sw-pinit .sw-pinit-button").on("click", function() {
                            return a.open(b(this).attr("href"), "Pinterest", "width=632,height=253,status=0,toolbar=0,menubar=0,location=1,scrollbars=1"), !1
                        })
                    }
                }
            })
        }

        function k() {
            b(".nc_tweet, a.swp_CTT").off("click"), b(".nc_tweet, a.swp_CTT").on("click", function(c) {
                if (b(this).hasClass("noPop")) return !1;
                if (console.log(b(this)), b(this).attr("data-link")) {
                    c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                    var d = b(this).attr("data-link");
                    console.log(d);
                    var e, f, g;
                    if (d = d.replace("’", "'"), b(this).hasClass("pinterest") || b(this).hasClass("buffer_link") || b(this).hasClass("flipboard") ? (e = 550, f = 775) : (e = 270, f = 500), g = a.open(d, "_blank", "height=" + e + ",width=" + f), "function" == typeof ga && !0 === swpClickTracking) {
                        var h = b(this).parents(".nc_tweetContainer").attr("data-network");
                        console.log(h + " Button Clicked"), ga("send", "event", "social_media", "swp_" + h + "_share")
                    }
                    return !1
                }
            })
        }
        var l = a.socialWarfarePlugin,
            m = {};
        socialWarfarePlugin.fetchShares = function() {
            b.when(b.get("https://graph.facebook.com/?id=" + swp_post_url), b.get("https://graph.facebook.com/?id=" + swp_post_url + "&fields=og_object{likes.summary(true),comments.summary(true)}"), swp_post_recovery_url ? b.get("https://graph.facebook.com/?id=" + swp_post_recovery_url) : "", swp_post_recovery_url ? b.get("https://graph.facebook.com/?id=" + swp_post_recovery_url + "&fields=og_object{likes.summary(true),comments.summary(true)}") : "").then(function(a, c, e, f) {
                if ("undefined" != typeof a[0].share && "undefined" != typeof c[0].og_object) {
                    var g = d(a[0].share.share_count),
                        h = d(c[0].og_object.likes.summary.total_count),
                        i = d(c[0].og_object.comments.summary.total_count),
                        j = g + h + i;
                    if (swp_post_recovery_url) {
                        if ("undefined" != typeof e[0].share) var k = d(e[0].share.share_count);
                        else var k = 0;
                        if ("undefined" != typeof f[0].og_object) var l = d(f[0].og_object.likes.summary.total_count),
                            n = d(f[0].og_object.comments.summary.total_count);
                        else var l = 0,
                            n = 0;
                        var o = k + l + n;
                        j !== o && (j += o)
                    }
                    m = {
                        action: "swp_facebook_shares_update",
                        post_id: swp_post_id,
                        activity: j
                    }, b.post(swp_admin_ajax, m, function(a) {
                        console.log("Facebook Shares Response: " + a)
                    })
                }
            })
        }, l.activateHoverStates = function() {
            e("pre_activate_buttons"), b(".nc_socialPanel:not(.nc_socialPanelSide) .nc_tweetContainer:not(.swp_nohover)").on("mouseenter", function() {
                f();
                var a = b(this).find(".swp_share").outerWidth(),
                    c = b(this).find("i.sw").outerWidth(),
                    d = b(this).width(),
                    e = 1 + (a + 35) / d;
                b(this).find(".iconFiller").width(a + c + 25 + "px"), b(this).css({
                    flex: e + " 1 0%"
                })
            }), b(".nc_socialPanel:not(.nc_socialPanelSide)").on("mouseleave", function() {
                f()
            })
        }, b(a).on("load", function() {
            "undefined" != typeof swpPinIt && swpPinIt.enabled && j()
        }), b(document).ready(function() {
            k(), i(), a.bodyPaddingTop = d(b("body").css("padding-top").replace("px", "")), a.bodyPaddingBottom = d(b("body").css("padding-bottom").replace("px", ""));
            var c = !1;
            if (b(".nc_socialPanel").hover(function() {
                    c = !0
                }, function() {
                    c = !1
                }), b(a).resize(l.debounce(250, function() {
                    b(".nc_socialPanel").length && !1 !== c || (a.swpAdjust = 1, i())
                })), b(document.body).on("post-load", function() {
                    i()
                }), 0 !== b(".nc_socialPanelSide").length) {
                var e = b(".nc_socialPanelSide").height(),
                    f = b(a).height(),
                    g = d(f / 2 - e / 2);
                setTimeout(function() {
                    b(".nc_socialPanelSide").animate({
                        top: g
                    }, 0)
                }, 105)
            }
            isMobile.phone && b(".swp_whatsapp").addClass("mobile"), 1 === b(".swp-content-locator").parent().children().length && b(".swp-content-locator").parent().hide()
        })
    }(this, jQuery),
    function(a) {
        var b = /iPhone/i,
            c = /iPod/i,
            d = /iPad/i,
            e = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
            f = /Android/i,
            g = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
            h = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
            i = /Windows Phone/i,
            j = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
            k = /BlackBerry/i,
            l = /BB10/i,
            m = /Opera Mini/i,
            n = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
            o = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
            p = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
            q = function(a, b) {
                return a.test(b)
            },
            r = function(a) {
                var r = a || navigator.userAgent,
                    s = r.split("[FBAN");
                if ("undefined" != typeof s[1] && (r = s[0]), s = r.split("Twitter"), "undefined" != typeof s[1] && (r = s[0]), this.apple = {
                        phone: q(b, r),
                        ipod: q(c, r),
                        tablet: !q(b, r) && q(d, r),
                        device: q(b, r) || q(c, r) || q(d, r)
                    }, this.amazon = {
                        phone: q(g, r),
                        tablet: !q(g, r) && q(h, r),
                        device: q(g, r) || q(h, r)
                    }, this.android = {
                        phone: q(g, r) || q(e, r),
                        tablet: !q(g, r) && !q(e, r) && (q(h, r) || q(f, r)),
                        device: q(g, r) || q(h, r) || q(e, r) || q(f, r)
                    }, this.windows = {
                        phone: q(i, r),
                        tablet: q(j, r),
                        device: q(i, r) || q(j, r)
                    }, this.other = {
                        blackberry: q(k, r),
                        blackberry10: q(l, r),
                        opera: q(m, r),
                        firefox: q(o, r),
                        chrome: q(n, r),
                        device: q(k, r) || q(l, r) || q(m, r) || q(o, r) || q(n, r)
                    }, this.seven_inch = q(p, r), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, "undefined" == typeof window) return this
            },
            s = function() {
                var a = new r;
                return a.Class = r, a
            };
        "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = r : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = s() : "function" == typeof define && define.amd ? define("isMobile", [], a.isMobile = s()) : a.isMobile = s()
    }(this);