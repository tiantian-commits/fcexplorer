;/*!node_modules/jquery/dist/jquery.js*/
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
        n = ot.type(e);
        return "function" === n || ot.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (ot.isFunction(t)) return ot.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return ot.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (gt.test(t)) return ot.filter(t, e, n);
            t = ot.filter(t, e)
        }
        return ot.grep(e,
        function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function o(e) {
        var t = {};
        return ot.each(e.match(wt) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        G.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        ot.ready()
    }
    function a() {
        this.expando = ot.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(jt, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null: +n + "" === n ? +n: St.test(n) ? ot.parseJSON(n) : n
            } catch(i) {}
            Nt.set(e, t, n)
        } else n = void 0;
        return n
    }
    function l(e, t, n, r) {
        var i, o = 1,
        s = 20,
        a = r ?
        function() {
            return r.cur()
        }: function() {
            return ot.css(e, t, "")
        },
        u = a(),
        l = n && n[3] || (ot.cssNumber[t] ? "": "px"),
        c = (ot.cssNumber[t] || "px" !== l && +u) && At.exec(ot.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3],
            n = n || [],
            c = +u || 1;
            do o = o || ".5",
            c /= o,
            ot.style(e, t, c + l);
            while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)),
        i
    }
    function c(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ot.nodeName(e, t) ? ot.merge([e], n) : n
    }
    function f(e, t) {
        for (var n = 0,
        r = e.length; r > n; n++) Et.set(e[n], "globalEval", !t || Et.get(t[n], "globalEval"))
    }
    function p(e, t, n, r, i) {
        for (var o, s, a, u, l, p, d = t.createDocumentFragment(), h = [], g = 0, m = e.length; m > g; g++) if (o = e[g], o || 0 === o) if ("object" === ot.type(o)) ot.merge(h, o.nodeType ? [o] : o);
        else if (Rt.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Ot.exec(o) || ["", ""])[1].toLowerCase(), u = Pt[a] || Pt._default, s.innerHTML = u[1] + ot.htmlPrefilter(o) + u[2], p = u[0]; p--;) s = s.lastChild;
            ot.merge(h, s.childNodes),
            s = d.firstChild,
            s.textContent = ""
        } else h.push(t.createTextNode(o));
        for (d.textContent = "", g = 0; o = h[g++];) if (r && ot.inArray(o, r) > -1) i && i.push(o);
        else if (l = ot.contains(o.ownerDocument, o), s = c(d.appendChild(o), "script"), l && f(s), n) for (p = 0; o = s[p++];) Ft.test(o.type || "") && n.push(o);
        return d
    }
    function d() {
        return ! 0
    }
    function h() {
        return ! 1
    }
    function g() {
        try {
            return G.activeElement
        } catch(e) {}
    }
    function m(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t) m(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
        else if (!i) return e;
        return 1 === o && (s = i, i = function(e) {
            return ot().off(e),
            s.apply(this, arguments)
        },
        i.guid = s.guid || (s.guid = ot.guid++)),
        e.each(function() {
            ot.event.add(this, t, i, r, n)
        })
    }
    function v(e, t) {
        return ot.nodeName(e, "table") && ot.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function x(e) {
        var t = Xt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function b(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (Et.hasData(e) && (o = Et.access(e), s = Et.set(t, o), l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l) for (n = 0, r = l[i].length; r > n; n++) ot.event.add(t, i, l[i][n])
            }
            Nt.hasData(e) && (a = Nt.access(e), u = ot.extend({},
            a), Nt.set(t, u))
        }
    }
    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ht.test(e.type) ? t.checked = e.checked: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, r) {
        t = J.apply([], t);
        var i, o, s, a, u, l, f = 0,
        d = e.length,
        h = d - 1,
        g = t[0],
        m = ot.isFunction(g);
        if (m || d > 1 && "string" == typeof g && !rt.checkClone && _t.test(g)) return e.each(function(i) {
            var o = e.eq(i);
            m && (t[0] = g.call(this, i, o.html())),
            T(o, t, n, r)
        });
        if (d && (i = p(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = ot.map(c(i, "script"), y), a = s.length; d > f; f++) u = i,
            f !== h && (u = ot.clone(u, !0, !0), a && ot.merge(s, c(u, "script"))),
            n.call(e[f], u, f);
            if (a) for (l = s[s.length - 1].ownerDocument, ot.map(s, x), f = 0; a > f; f++) u = s[f],
            Ft.test(u.type || "") && !Et.access(u, "globalEval") && ot.contains(l, u) && (u.src ? ot._evalUrl && ot._evalUrl(u.src) : ot.globalEval(u.textContent.replace(zt, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var r, i = t ? ot.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ot.cleanData(c(r)),
        r.parentNode && (n && ot.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function k(e, t) {
        var n = ot(t.createElement(e)).appendTo(t.body),
        r = ot.css(n[0], "display");
        return n.detach(),
        r
    }
    function E(e) {
        var t = G,
        n = Vt[e];
        return n || (n = k(e, t), "none" !== n && n || (Ut = (Ut || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ut[0].contentDocument, t.write(), t.close(), n = k(e, t), Ut.detach()), Vt[e] = n),
        n
    }
    function N(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Qt(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== s && void 0 !== s || ot.contains(e.ownerDocument, e) || (s = ot.style(e, t)),
        n && !rt.pixelMarginRight() && Gt.test(s) && Yt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o),
        void 0 !== s ? s + "": s
    }
    function S(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function j(e) {
        if (e in rn) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nn.length; n--;) if (e = nn[n] + t, e in rn) return e
    }
    function D(e, t, n) {
        var r = At.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function A(e, t, n, r, i) {
        for (var o = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ot.css(e, n + qt[o], !0, i)),
        r ? ("content" === n && (s -= ot.css(e, "padding" + qt[o], !0, i)), "margin" !== n && (s -= ot.css(e, "border" + qt[o] + "Width", !0, i))) : (s += ot.css(e, "padding" + qt[o], !0, i), "padding" !== n && (s += ot.css(e, "border" + qt[o] + "Width", !0, i)));
        return s
    }
    function q(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = Qt(e),
        s = "border-box" === ot.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = N(e, t, o), (0 > i || null == i) && (i = e.style[t]), Gt.test(i)) return i;
            r = s && (rt.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + A(e, t, n || (s ? "border": "content"), r, o) + "px"
    }
    function L(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s],
        r.style && (o[s] = Et.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = Et.access(r, "olddisplay", E(r.nodeName)))) : (i = Lt(r), "none" === n && i || Et.set(r, "olddisplay", i ? n: ot.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "": "none"));
        return e
    }
    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }
    function O() {
        return e.setTimeout(function() {
            on = void 0
        }),
        on = ot.now()
    }
    function F(e, t) {
        var n, r = 0,
        i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = qt[r],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function P(e, t, n) {
        for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; s > o; o++) if (r = i[o].call(n, t, e)) return r
    }
    function R(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this,
        p = {},
        d = e.style,
        h = e.nodeType && Lt(e),
        g = Et.get(e, "fxshow");
        n.queue || (a = ot._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
            a.unqueued || u()
        }), a.unqueued++, f.always(function() {
            f.always(function() {
                a.unqueued--,
                ot.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ot.css(e, "display"), c = "none" === l ? Et.get(e, "olddisplay") || E(e.nodeName) : l, "inline" === c && "none" === ot.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], an.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide": "show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                h = !0
            }
            p[r] = g && g[r] || ot.style(e, r)
        } else l = void 0;
        if (ot.isEmptyObject(p))"inline" === ("none" === l ? E(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = Et.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? ot(e).show() : f.done(function() {
                ot(e).hide()
            }),
            f.done(function() {
                var t;
                Et.remove(e, "fxshow");
                for (t in p) ot.style(e, t, p[t])
            });
            for (r in p) s = P(h ? g[r] : 0, r, f),
            r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, r, i, o, s;
        for (n in e) if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ot.cssHooks[r], s && "expand" in s) {
            o = s.expand(o),
            delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }
    function I(e, t, n) {
        var r, i, o = 0,
        s = I.prefilters.length,
        a = ot.Deferred().always(function() {
            delete u.elem
        }),
        u = function() {
            if (i) return ! 1;
            for (var t = on || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; u > s; s++) l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            1 > o && u ? n: (a.resolveWith(e, [l]), !1)
        },
        l = a.promise({
            elem: e,
            props: ot.extend({},
            t),
            opts: ot.extend(!0, {
                specialEasing: {},
                easing: ot.easing._default
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: on || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ot.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? l.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                this
            }
        }),
        c = l.props;
        for (M(c, l.opts.specialEasing); s > o; o++) if (r = I.prefilters[o].call(l, e, c, l.opts)) return ot.isFunction(r.stop) && (ot._queueHooks(l.elem, l.opts.queue).stop = ot.proxy(r.stop, r)),
        r;
        return ot.map(c, P, l),
        ot.isFunction(l.opts.start) && l.opts.start.call(e, l),
        ot.fx.timer(ot.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            o = t.toLowerCase().match(wt) || [];
            if (ot.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function B(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            ot.each(e[a] || [],
            function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }),
            u
        }
        var o = {},
        s = e === Sn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function _(e, t) {
        var n, r, i = ot.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
        return r && ot.extend(!0, e, r),
        e
    }
    function X(e, t, n) {
        for (var r, i, o, s, a = e.contents,
        u = e.dataTypes;
        "*" === u[0];) u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }
    function z(e, t, n, r) {
        var i, o, s, a, u, l = {},
        c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
            if (s = l[u + " " + o] || l["* " + o], !s) for (i in l) if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e.throws) t = s(t);
            else try {
                t = s(t)
            } catch(f) {
                return {
                    state: "parsererror",
                    error: s ? f: "No conversion from " + u + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function U(e, t, n, r) {
        var i;
        if (ot.isArray(t)) ot.each(t,
        function(t, i) {
            n || qn.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== ot.type(t)) r(e, t);
        else for (i in t) U(e + "[" + i + "]", t[i], n, r)
    }
    function V(e) {
        return ot.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    var Y = [],
    G = e.document,
    Q = Y.slice,
    J = Y.concat,
    K = Y.push,
    Z = Y.indexOf,
    et = {},
    tt = et.toString,
    nt = et.hasOwnProperty,
    rt = {},
    it = "2.2.4",
    ot = function(e, t) {
        return new ot.fn.init(e, t)
    },
    st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    ut = /-([\da-z])/gi,
    lt = function(e, t) {
        return t.toUpperCase()
    };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this)
        },
        pushStack: function(e) {
            var t = ot.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return ot.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ot.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: K,
        sort: Y.sort,
        splice: Y.splice
    },
    ot.extend = ot.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
        a = 1,
        u = arguments.length,
        l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {},
        a++), "object" == typeof s || ot.isFunction(s) || (s = {}), a === u && (s = this, a--); u > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t],
        r = e[t],
        s !== r && (l && r && (ot.isPlainObject(r) || (i = ot.isArray(r))) ? (i ? (i = !1, o = n && ot.isArray(n) ? n: []) : o = n && ot.isPlainObject(n) ? n: {},
        s[t] = ot.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    },
    ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ot.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return ! ot.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(e)) return ! 1;
            if (e.constructor && !nt.call(e, "constructor") && !nt.call(e.constructor.prototype || {},
            "isPrototypeOf")) return ! 1;
            for (t in e);
            return void 0 === t || nt.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? et[tt.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ot.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(at, "ms-").replace(ut, lt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e)) for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(st, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ot.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++) r = !t(e[o], o),
            r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, s = 0,
            a = [];
            if (n(e)) for (i = e.length; i > s; s++) o = t(e[s], s, r),
            null != o && a.push(o);
            else for (s in e) o = t(e[s], s, r),
            null != o && a.push(o);
            return J.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            ot.isFunction(e) ? (r = Q.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(Q.call(arguments)))
            },
            i.guid = e.guid = e.guid || ot.guid++, i) : void 0
        },
        now: Date.now,
        support: rt
    }),
    "function" == typeof Symbol && (ot.fn[Symbol.iterator] = Y[Symbol.iterator]),
    ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    });
    var ct = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h = t && t.ownerDocument,
            g = t ? t.nodeType: 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!r && ((t ? t.ownerDocument || t: W) !== L && q(t), t = t || L, O)) {
                if (11 !== g && (l = vt.exec(e))) if (i = l[1]) {
                    if (9 === g) {
                        if (! (s = t.getElementById(i))) return n;
                        if (s.id === i) return n.push(s),
                        n
                    } else if (h && (s = h.getElementById(i)) && M(t, s) && s.id === i) return n.push(s),
                    n
                } else {
                    if (l[2]) return K.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)),
                    n
                }
                if (! (!w.qsa || z[e + " "] || F && F.test(e))) {
                    if (1 !== g) h = t,
                    d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xt, "\\$&") : t.setAttribute("id", a = I), f = E(e), o = f.length, u = pt.test(a) ? "#" + a: "[id='" + a + "']"; o--;) f[o] = u + " " + p(f[o]);
                        d = f.join(","),
                        h = yt.test(e) && c(t.parentNode) || t
                    }
                    if (d) try {
                        return K.apply(n, h.querySelectorAll(d)),
                        n
                    } catch(m) {} finally {
                        a === I && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(at, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[I] = !0,
            e
        }
        function i(e) {
            var t = L.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            o = B++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
            }: function(t, n, s) {
                var a, u, l, c = [$, o];
                if (s) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, s)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (l = t[I] || (t[I] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (a = u[r]) && a[0] === $ && a[1] === o) return c[2] = a[2];
                    if (u[r] = c, c[2] = e(t, n, s)) return ! 0
                }
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, n, r) {
            for (var i = 0,
            o = n.length; o > i; i++) t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[I] && (i = v(i)),
            o && !o[I] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var l, c, f, p = [],
                d = [],
                h = s.length,
                v = r || g(t || "*", a.nodeType ? [a] : a, []),
                y = !e || !r && t ? v: m(v, p, e, a, u),
                x = n ? o || (r ? e: h || i) ? [] : s: y;
                if (n && n(y, x, a, u), i) for (l = m(x, d), i(l, [], a, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--;)(f = x[c]) && (l = o ? et(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else x = m(x === s ? x.splice(h, x.length) : x),
                o ? o(null, s, x, u) : K.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            },
            s, !0), l = d(function(e) {
                return et(t, e) > -1
            },
            s, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }]; i > a; a++) if (n = T.relative[e[a].type]) c = [d(h(c), n)];
            else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[I]) {
                    for (r = ++a; i > r && !T.relative[e[r].type]; r++);
                    return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*": ""
                    })).replace(at, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0,
            o = e.length > 0,
            s = function(r, s, a, u, l) {
                var c, f, p, d = 0,
                h = "0",
                g = r && [],
                v = [],
                y = j,
                x = r || o && T.find.TAG("*", l),
                b = $ += null == y ? 1 : Math.random() || .1,
                w = x.length;
                for (l && (j = s === L || s || l); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0, s || c.ownerDocument === L || (q(c), a = !O); p = e[f++];) if (p(c, s || L, a)) {
                            u.push(c);
                            break
                        }
                        l && ($ = b)
                    }
                    i && ((c = !p && c) && d--, r && g.push(c))
                }
                if (d += h, i && h !== d) {
                    for (f = 0; p = n[f++];) p(g, v, s, a);
                    if (r) {
                        if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && ($ = b, j = y),
                g
            };
            return i ? r(s) : s
        }
        var b, w, T, C, k, E, N, S, j, D, A, q, L, H, O, F, P, R, M, I = "sizzle" + 1 * new Date,
        W = e.document,
        $ = 0,
        B = 0,
        _ = n(),
        X = n(),
        z = n(),
        U = function(e, t) {
            return e === t && (A = !0),
            0
        },
        V = 1 << 31,
        Y = {}.hasOwnProperty,
        G = [],
        Q = G.pop,
        J = G.push,
        K = G.push,
        Z = G.slice,
        et = function(e, t) {
            for (var n = 0,
            r = e.length; r > n; n++) if (e[n] === t) return n;
            return - 1
        },
        tt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
        ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
        st = new RegExp(nt + "+", "g"),
        at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        ut = new RegExp("^" + nt + "*," + nt + "*"),
        lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        ft = new RegExp(ot),
        pt = new RegExp("^" + rt + "$"),
        dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + tt + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        ht = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        xt = /'|\\/g,
        bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        wt = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        Tt = function() {
            q()
        };
        try {
            K.apply(G = Z.call(W.childNodes), W.childNodes),
            G[W.childNodes.length].nodeType
        } catch(Ct) {
            K = {
                apply: G.length ?
                function(e, t) {
                    J.apply(e, Z.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        q = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e: W;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = L.documentElement, O = !k(L), (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), w.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")),
                !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = mt.test(L.getElementsByClassName), w.getById = i(function(e) {
                return H.appendChild(e).id = I,
                !L.getElementsByName || !L.getElementsByName(I).length
            }), w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            },
            T.filter.ID = function(e) {
                var t = e.replace(bt, wt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(bt, wt);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            },
            T.find.CLASS = w.getElementsByClassName &&
            function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
            },
            P = [], F = [], (w.qsa = mt.test(L.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + tt + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]")
            }), i(function(e) {
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })), (w.matchesSelector = mt.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                P.push("!=", ot)
            }), F = F.length && new RegExp(F.join("|")), P = P.length && new RegExp(P.join("|")), t = mt.test(H.compareDocumentPosition), M = t || mt.test(H.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            U = t ?
            function(e, t) {
                if (e === t) return A = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === W && M(W, e) ? -1 : t === L || t.ownerDocument === W && M(W, t) ? 1 : D ? et(D, e) - et(D, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return A = !0,
                0;
                var n, r = 0,
                i = e.parentNode,
                o = t.parentNode,
                a = [e],
                u = [t];
                if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : D ? et(D, e) - et(D, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] === W ? -1 : u[r] === W ? 1 : 0
            },
            L) : L
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== L && q(e), n = n.replace(ct, "='$1']"), !(!w.matchesSelector || !O || z[n + " "] || P && P.test(n) || F && F.test(n))) try {
                var r = R.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return t(n, L, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && q(e),
            M(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== L && q(e);
            var n = T.attrHandle[t.toLowerCase()],
            r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r: w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (A = !w.detectDuplicates, D = !w.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        },
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(bt, wt),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(bt, wt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return dt.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && ft.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(bt, wt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && _(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n: n ? (o += "", "=" === n ? o === r: "!=" === n ? o !== r: "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice( - r.length) === r: "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice( - 4),
                    a = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling": "previousSibling",
                        m = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !u && !a,
                        x = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === v: 1 === p.nodeType) return ! 1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [s ? m.firstChild: m.lastChild], s && y) {
                                for (p = m, f = p[I] || (p[I] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === $ && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                                    c[e] = [$, d, x];
                                    break
                                }
                            } else if (y && (p = t, f = p[I] || (p[I] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === $ && l[1], x = d), x === !1) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v: 1 !== p.nodeType) || !++x || (y && (f = p[I] || (p[I] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [$, x]), p !== t)););
                            return x -= i,
                            x === r || x % r === 0 && x / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[I] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = et(e, i[s]),
                        e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = N(e.replace(at, "$1"));
                    return i[I] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(bt, wt),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return pt.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(bt, wt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! T.pseudos.empty(e)
                },
                header: function(e) {
                    return gt.test(e.nodeName)
                },
                input: function(e) {
                    return ht.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        E = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = X[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, u = [], l = T.preFilter; a;) { (!r || (i = ut.exec(a))) && (i && (a = a.slice(i[0].length) || a), u.push(o = [])),
                r = !1,
                (i = lt.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(at, " ")
                }), a = a.slice(r.length));
                for (s in T.filter) ! (i = dt[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length: a ? t.error(e) : X(e, u).slice(0)
        },
        N = t.compile = function(e, t) {
            var n, r = [],
            i = [],
            o = z[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = y(t[n]),
                o[I] ? r.push(o) : i.push(o);
                o = z(e, x(i, r)),
                o.selector = e
            }
            return o
        },
        S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e,
            f = !r && E(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(bt, wt), t) || [])[0], !t) return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(e) ? 0 : o.length; i--&&(s = o[i], !T.relative[a = s.type]);) if ((u = T.find[a]) && (r = u(s.matches[0].replace(bt, wt), yt.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e) return K.apply(n, r),
                    n;
                    break
                }
            }
            return (l || N(e, f))(r, t, !O, n, !t || yt.test(e) && c(t.parentNode) || t),
            n
        },
        w.sortStable = I.split("").sort(U).join("") === I,
        w.detectDuplicates = !!A,
        q(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(tt,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        t
    } (e);
    ot.find = ct,
    ot.expr = ct.selectors,
    ot.expr[":"] = ot.expr.pseudos,
    ot.uniqueSort = ot.unique = ct.uniqueSort,
    ot.text = ct.getText,
    ot.isXMLDoc = ct.isXML,
    ot.contains = ct.contains;
    var ft = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && ot(e).is(n)) break;
            r.push(e)
        }
        return r
    },
    pt = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    },
    dt = ot.expr.match.needsContext,
    ht = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    gt = /^.[^:#\[\.,]*$/;
    ot.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [r] : [] : ot.find.matches(e, ot.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    ot.fn.extend({
        find: function(e) {
            var t, n = this.length,
            r = [],
            i = this;
            if ("string" != typeof e) return this.pushStack(ot(e).filter(function() {
                for (t = 0; n > t; t++) if (ot.contains(i[t], this)) return ! 0
            }));
            for (t = 0; n > t; t++) ot.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? ot.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e: e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !! r(this, "string" == typeof e && dt.test(e) ? ot(e) : e || [], !1).length
        }
    });
    var mt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    yt = ot.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || mt, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : vt.exec(e), !r || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ot ? t[0] : t, ot.merge(this, ot.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: G, !0)), ht.test(r[1]) && ot.isPlainObject(t)) for (r in t) ot.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = G.getElementById(r[2]),
            i && i.parentNode && (this.length = 1, this[0] = i),
            this.context = G,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ot.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ot) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ot.makeArray(e, this))
    };
    yt.prototype = ot.fn,
    mt = ot(G);
    var xt = /^(?:parents|prev(?:Until|All))/,
    bt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ot.fn.extend({
        has: function(e) {
            var t = ot(e, this),
            n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (ot.contains(this, t[e])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            o = [], s = dt.test(e) || "string" != typeof e ? ot(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(ot(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ot.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ft(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ft(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return ft(e, "nextSibling")
        },
        prevAll: function(e) {
            return ft(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ft(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ft(e, "previousSibling", n)
        },
        siblings: function(e) {
            return pt((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return pt(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ot.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ot.fn[e] = function(n, r) {
            var i = ot.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = ot.filter(r, i)),
            this.length > 1 && (bt[e] || ot.uniqueSort(i), xt.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var wt = /\S+/g;
    ot.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : ot.extend({},
        e);
        var t, n, r, i, s = [],
        a = [],
        u = -1,
        l = function() {
            for (i = e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < s.length;) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (s = n ? [] : "")
        },
        c = {
            add: function() {
                return s && (n && !t && (u = s.length - 1, a.push(n)),
                function r(t) {
                    ot.each(t,
                    function(t, n) {
                        ot.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ot.type(n) && r(n)
                    })
                } (arguments), n && !t && l()),
                this
            },
            remove: function() {
                return ot.each(arguments,
                function(e, t) {
                    for (var n; (n = ot.inArray(t, s, n)) > -1;) s.splice(n, 1),
                    u >= n && u--
                }),
                this
            },
            has: function(e) {
                return e ? ot.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return ! s
            },
            lock: function() {
                return i = a = [],
                n || (s = n = ""),
                this
            },
            locked: function() {
                return !! i
            },
            fireWith: function(e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return c
    },
    ot.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ot.Deferred(function(n) {
                        ot.each(t,
                        function(t, o) {
                            var s = ot.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && ot.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ot.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            ot.each(t,
            function(e, o) {
                var s = o[2],
                a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            o = Q.call(arguments),
            s = o.length,
            a = 1 !== s || e && ot.isFunction(e.promise) ? s: 0,
            u = 1 === a ? e: ot.Deferred(),
            l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? Q.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ot.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var Tt;
    ot.fn.ready = function(e) {
        return ot.ready.promise().done(e),
        this
    },
    ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ot.readyWait++:ot.ready(!0)
        },
        ready: function(e) { (e === !0 ? --ot.readyWait: ot.isReady) || (ot.isReady = !0, e !== !0 && --ot.readyWait > 0 || (Tt.resolveWith(G, [ot]), ot.fn.triggerHandler && (ot(G).triggerHandler("ready"), ot(G).off("ready"))))
        }
    }),
    ot.ready.promise = function(t) {
        return Tt || (Tt = ot.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(ot.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))),
        Tt.promise(t)
    },
    ot.ready.promise();
    var Ct = function(e, t, n, r, i, o, s) {
        var a = 0,
        u = e.length,
        l = null == n;
        if ("object" === ot.type(n)) {
            i = !0;
            for (a in n) Ct(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, ot.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
            return l.call(ot(e), n)
        })), t)) for (; u > a; a++) t(e[a], n, s ? r: r.call(e[a], a, t(e[a], n)));
        return i ? e: l ? t.call(e) : u ? t(e[0], n) : o
    },
    kt = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    a.uid = 1,
    a.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n: Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!kt(e)) return {};
            var t = e[this.expando];
            return t || (t = {},
            kt(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r: this.get(e, ot.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n: t)
        },
        remove: function(e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    ot.isArray(t) ? r = t.concat(t.map(ot.camelCase)) : (i = ot.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(wt) || [])),
                    n = r.length;
                    for (; n--;) delete o[r[n]]
                } (void 0 === t || ot.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ot.isEmptyObject(t)
        }
    };
    var Et = new a,
    Nt = new a,
    St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    jt = /[A-Z]/g;
    ot.extend({
        hasData: function(e) {
            return Nt.hasData(e) || Et.hasData(e)
        },
        data: function(e, t, n) {
            return Nt.access(e, t, n)
        },
        removeData: function(e, t) {
            Nt.remove(e, t)
        },
        _data: function(e, t, n) {
            return Et.access(e, t, n)
        },
        _removeData: function(e, t) {
            Et.remove(e, t)
        }
    }),
    ot.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
            s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Nt.get(o), 1 === o.nodeType && !Et.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = ot.camelCase(r.slice(5)), u(o, r, i[r])));
                    Et.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Nt.set(this, e)
            }) : Ct(this,
            function(t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = Nt.get(o, e) || Nt.get(o, e.replace(jt, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (r = ot.camelCase(e), n = Nt.get(o, r), void 0 !== n) return n;
                    if (n = u(o, r, void 0), void 0 !== n) return n
                } else r = ot.camelCase(e),
                this.each(function() {
                    var n = Nt.get(this, r);
                    Nt.set(this, r, t),
                    e.indexOf("-") > -1 && void 0 !== n && Nt.set(this, e, t)
                })
            },
            null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Nt.remove(this, e)
            })
        }
    }),
    ot.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Et.get(e, t), n && (!r || ot.isArray(n) ? r = Et.access(e, t, ot.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ot.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = ot._queueHooks(e, t),
            s = function() {
                ot.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Et.get(e, n) || Et.access(e, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    Et.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ot.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? ot.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = ot.queue(this, e, t);
                ot._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && ot.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ot.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = ot.Deferred(),
            o = this,
            s = this.length,
            a = function() {--r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Et.get(o[s], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    At = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
    qt = ["Top", "Right", "Bottom", "Left"],
    Lt = function(e, t) {
        return e = t || e,
        "none" === ot.css(e, "display") || !ot.contains(e.ownerDocument, e)
    },
    Ht = /^(?:checkbox|radio)$/i,
    Ot = /<([\w:-]+)/,
    Ft = /^$|\/(?:java|ecma)script/i,
    Pt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Pt.optgroup = Pt.option,
    Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead,
    Pt.th = Pt.td;
    var Rt = /<|&#?\w+;/; !
    function() {
        var e = G.createDocumentFragment(),
        t = e.appendChild(G.createElement("div")),
        n = G.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    } ();
    var Mt = /^key/,
    It = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Wt = /^([^.]*)(?:\.(.+)|)/;
    ot.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = Et.get(e);
            if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = ot.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                return "undefined" != typeof ot && ot.event.triggered !== t.type ? ot.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(wt) || [""], l = t.length; l--;) a = Wt.exec(t[l]) || [],
            d = g = a[1],
            h = (a[2] || "").split(".").sort(),
            d && (f = ot.event.special[d] || {},
            d = (i ? f.delegateType: f.bindType) || d, f = ot.event.special[d] || {},
            c = ot.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && ot.expr.match.needsContext.test(i),
                namespace: h.join(".")
            },
            o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ot.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = Et.hasData(e) && Et.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(wt) || [""], l = t.length; l--;) if (a = Wt.exec(t[l]) || [], d = g = a[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = ot.event.special[d] || {},
                    d = (r ? f.delegateType: f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o],
                    !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ot.removeEvent(e, d, m.handle), delete u[d])
                } else for (d in u) ot.event.remove(e, d + t[l], n, r, !0);
                ot.isEmptyObject(u) && Et.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ot.event.fix(e);
            var t, n, r, i, o, s = [],
            a = Q.call(arguments),
            u = (Et.get(this, "events") || {})[e.type] || [],
            l = ot.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = ot.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [],
            a = t.delegateCount,
            u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; a > n; n++) o = t[n],
                i = o.selector + " ",
                void 0 === r[i] && (r[i] = o.needsContext ? ot(i, this).index(u) > -1 : ot.find(i, this, null, [u]).length),
                r[i] && r.push(o);
                r.length && s.push({
                    elem: u,
                    handlers: r
                })
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[ot.expando]) return e;
            var t, n, r, i = e.type,
            o = e,
            s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = It.test(i) ? this.mouseHooks: Mt.test(i) ? this.keyHooks: {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ot.Event(o), t = r.length; t--;) n = r[t],
            e[n] = o[n];
            return e.target || (e.target = G),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ot.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ot.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    ot.Event = function(e, t) {
        return this instanceof ot.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? d: h) : this.type = e, t && ot.extend(this, t), this.timeStamp = e && e.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(e, t)
    },
    ot.Event.prototype = {
        constructor: ot.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = d,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = d,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = d,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        ot.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                o = e.handleObj;
                return (!i || i !== r && !ot.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ot.fn.extend({
        on: function(e, t, n, r) {
            return m(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return m(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            ot(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                ot.event.remove(this, e, n, t)
            })
        }
    });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Bt = /<script|<style|<link/i,
    _t = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Xt = /^true\/(.*)/,
    zt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ot.extend({
        htmlPrefilter: function(e) {
            return e.replace($t, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
            u = ot.contains(e.ownerDocument, e);
            if (! (rt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ot.isXMLDoc(e))) for (s = c(a), o = c(e), r = 0, i = o.length; i > r; r++) w(o[r], s[r]);
            if (t) if (n) for (o = o || c(e), s = s || c(a), r = 0, i = o.length; i > r; r++) b(o[r], s[r]);
            else b(e, a);
            return s = c(a, "script"),
            s.length > 0 && f(s, !u && c(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, r, i = ot.event.special,
            o = 0; void 0 !== (n = e[o]); o++) if (kt(n)) {
                if (t = n[Et.expando]) {
                    if (t.events) for (r in t.events) i[r] ? ot.event.remove(n, r) : ot.removeEvent(n, r, t.handle);
                    n[Et.expando] = void 0
                }
                n[Nt.expando] && (n[Nt.expando] = void 0)
            }
        }
    }),
    ot.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ct(this,
            function(e) {
                return void 0 === e ? ot.text(this) : this.empty().each(function() { (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return ot.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ct(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Bt.test(e) && !Pt[(Ot.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ot.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (ot.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments,
            function(t) {
                var n = this.parentNode;
                ot.inArray(this, e) < 0 && (ot.cleanData(c(this)), n && n.replaceChild(t, this))
            },
            e)
        }
    }),
    ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ot.fn[e] = function(e) {
            for (var n, r = [], i = ot(e), o = i.length - 1, s = 0; o >= s; s++) n = s === o ? this: this.clone(!0),
            ot(i[s])[t](n),
            K.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ut, Vt = {
        HTML: "block",
        BODY: "block"
    },
    Yt = /^margin/,
    Gt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
    Qt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    },
    Jt = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t) s[o] = e.style[o],
        e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = s[o];
        return i
    },
    Kt = G.documentElement; !
    function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Kt.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            o = "2px" === t.marginLeft,
            r = "4px" === t.width,
            a.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Kt.removeChild(s)
        }
        var n, r, i, o, s = G.createElement("div"),
        a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", rt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ot.extend(rt, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(G.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Kt.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Kt.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    } ();
    var Zt = /^(none|table(?!-c[ea]).+)/,
    en = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    tn = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    nn = ["Webkit", "O", "Moz", "ms"],
    rn = G.createElement("div").style;
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = ot.camelCase(t),
                u = e.style;
                return t = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
                s = ot.cssHooks[t] || ot.cssHooks[a],
                void 0 === n ? s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i: u[t] : (o = typeof n, "string" === o && (i = At.exec(n)) && i[1] && (n = l(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ot.cssNumber[a] ? "": "px")), rt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = ot.camelCase(t);
            return t = ot.cssProps[a] || (ot.cssProps[a] = j(a) || a),
            s = ot.cssHooks[t] || ot.cssHooks[a],
            s && "get" in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = N(e, t, r)),
            "normal" === i && t in tn && (i = tn[t]),
            "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }),
    ot.each(["height", "width"],
    function(e, t) {
        ot.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Zt.test(ot.css(e, "display")) && 0 === e.offsetWidth ? Jt(e, en,
                function() {
                    return q(e, t, r)
                }) : q(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, o = r && Qt(e),
                s = r && A(e, t, r, "border-box" === ot.css(e, "boxSizing", !1, o), o);
                return s && (i = At.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ot.css(e, t)),
                D(e, n, s)
            }
        }
    }),
    ot.cssHooks.marginLeft = S(rt.reliableMarginLeft,
    function(e, t) {
        return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Jt(e, {
            marginLeft: 0
        },
        function() {
            return e.getBoundingClientRect().left
        })) + "px": void 0
    }),
    ot.cssHooks.marginRight = S(rt.reliableMarginRight,
    function(e, t) {
        return t ? Jt(e, {
            display: "inline-block"
        },
        N, [e, "marginRight"]) : void 0
    }),
    ot.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ot.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + qt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Yt.test(e) || (ot.cssHooks[e + t].set = D)
    }),
    ot.fn.extend({
        css: function(e, t) {
            return Ct(this,
            function(e, t, n) {
                var r, i, o = {},
                s = 0;
                if (ot.isArray(t)) {
                    for (r = Qt(e), i = t.length; i > s; s++) o[t[s]] = ot.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? ot.style(e, t, n) : ot.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return L(this, !0)
        },
        hide: function() {
            return L(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Lt(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }),
    ot.Tween = H,
    H.prototype = {
        constructor: H,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ot.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ot.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ot.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ot.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
            },
            set: function(e) {
                ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ot.cssProps[e.prop]] && !ot.cssHooks[e.prop] ? e.elem[e.prop] = e.now: ot.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ot.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ot.fx = H.prototype.init,
    ot.fx.step = {};
    var on, sn, an = /^(?:toggle|show|hide)$/,
    un = /queueHooks$/;
    ot.Animation = ot.extend(I, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return l(n.elem, e, At.exec(t), n),
                n
            }]
        },
        tweener: function(e, t) {
            ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(wt);
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            I.tweeners[n] = I.tweeners[n] || [],
            I.tweeners[n].unshift(t)
        },
        prefilters: [R],
        prefilter: function(e, t) {
            t ? I.prefilters.unshift(e) : I.prefilters.push(e)
        }
    }),
    ot.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ot.extend({},
        e) : {
            complete: n || !n && t || ot.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ot.isFunction(t) && t
        };
        return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] : ot.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ot.isFunction(r.old) && r.old.call(this),
            r.queue && ot.dequeue(this, r.queue)
        },
        r
    },
    ot.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Lt).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ot.isEmptyObject(e),
            o = ot.speed(t, n, r),
            s = function() {
                var t = I(this, ot.extend({},
                e), o); (i || Et.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                o = ot.timers,
                s = Et.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && un.test(i) && r(s[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1)); (t || !n) && ot.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Et.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = ot.timers,
                s = r ? r.length: 0;
                for (n.finish = !0, ot.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ot.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ot.fn[t];
        ot.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }),
    ot.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ot.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ot.timers = [],
    ot.fx.tick = function() {
        var e, t = 0,
        n = ot.timers;
        for (on = ot.now(); t < n.length; t++) e = n[t],
        e() || n[t] !== e || n.splice(t--, 1);
        n.length || ot.fx.stop(),
        on = void 0
    },
    ot.fx.timer = function(e) {
        ot.timers.push(e),
        e() ? ot.fx.start() : ot.timers.pop()
    },
    ot.fx.interval = 13,
    ot.fx.start = function() {
        sn || (sn = e.setInterval(ot.fx.tick, ot.fx.interval))
    },
    ot.fx.stop = function() {
        e.clearInterval(sn),
        sn = null
    },
    ot.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ot.fn.delay = function(t, n) {
        return t = ot.fx ? ot.fx.speeds[t] || t: t,
        n = n || "fx",
        this.queue(n,
        function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));
        e.type = "checkbox",
        rt.checkOn = "" !== e.value,
        rt.optSelected = n.selected,
        t.disabled = !0,
        rt.optDisabled = !n.disabled,
        e = G.createElement("input"),
        e.value = "t",
        e.type = "radio",
        rt.radioValue = "t" === e.value
    } ();
    var ln, cn = ot.expr.attrHandle;
    ot.fn.extend({
        attr: function(e, t) {
            return Ct(this, ot.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ot.removeAttr(this, e)
            })
        }
    }),
    ot.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ot.prop(e, t, n) : (1 === o && ot.isXMLDoc(e) || (t = t.toLowerCase(), i = ot.attrHooks[t] || (ot.expr.match.bool.test(t) ? ln: void 0)), void 0 !== n ? null === n ? void ot.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = ot.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!rt.radioValue && "radio" === t && ot.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            o = t && t.match(wt);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = ot.propFix[n] || n,
            ot.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
        }
    }),
    ln = {
        set: function(e, t, n) {
            return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ot.each(ot.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = cn[t] || ot.find.attr;
        cn[t] = function(e, t, r) {
            var i, o;
            return r || (o = cn[t], cn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, cn[t] = o),
            i
        }
    });
    var fn = /^(?:input|select|textarea|button)$/i,
    pn = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(e, t) {
            return Ct(this, ot.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ot.propFix[e] || e]
            })
        }
    }),
    ot.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(e) || (t = ot.propFix[t] || t, i = ot.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ot.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : fn.test(e.nodeName) || pn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    rt.optSelected || (ot.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ot.propFix[this.toLowerCase()] = this
    });
    var dn = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(wt) || []; n = this[u++];) if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(dn, " ")) {
                for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                a = ot.trim(r),
                i !== a && n.setAttribute("class", a)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (ot.isFunction(e)) return this.each(function(t) {
                ot(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(wt) || []; n = this[u++];) if (i = W(n), r = 1 === n.nodeType && (" " + i + " ").replace(dn, " ")) {
                for (s = 0; o = t[s++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                a = ot.trim(r),
                i !== a && n.setAttribute("class", a)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ot.isFunction(e) ?
            function(n) {
                ot(this).toggleClass(e.call(this, n, W(this), t), t)
            }: function() {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = ot(this), o = e.match(wt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(void 0 === e || "boolean" === n) && (t = W(this), t && Et.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "": Et.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + W(n) + " ").replace(dn, " ").indexOf(t) > -1) return ! 0;
            return ! 1
        }
    });
    var hn = /\r/g,
    gn = /[\x20\t\r\n\f]+/g;
    ot.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = ot.isFunction(e),
                this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, ot(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": ot.isArray(i) && (i = ot.map(i,
                    function(e) {
                        return null == e ? "": e + ""
                    })), t = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return t = ot.valHooks[i.type] || ot.valHooks[i.nodeName.toLowerCase()],
                t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(hn, "") : null == n ? "": n)
            }
        }
    }),
    ot.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ot.find.attr(e, "value");
                    return null != t ? t: ot.trim(ot.text(e)).replace(gn, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    o = "select-one" === e.type || 0 > i,
                    s = o ? null: [], a = o ? i + 1 : r.length, u = 0 > i ? a: o ? i: 0; a > u; u++) if (n = r[u], !(!n.selected && u !== i || (rt.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ot(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    o = ot.makeArray(t), s = i.length; s--;) r = i[s],
                    (r.selected = ot.inArray(ot.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    ot.each(["radio", "checkbox"],
    function() {
        ot.valHooks[this] = {
            set: function(e, t) {
                return ot.isArray(t) ? e.checked = ot.inArray(ot(e).val(), t) > -1 : void 0
            }
        },
        rt.checkOn || (ot.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var mn = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || G],
            d = nt.call(t, "type") ? t.type: t,
            h = nt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !mn.test(d + ot.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[ot.expando] ? t: new ot.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ot.makeArray(n, [t]), f = ot.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !ot.isWindow(r)) {
                    for (u = f.delegateType || d, mn.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                    a = s;
                    a === (r.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u: f.bindType || d,
                c = (Et.get(s, "events") || {})[t.type] && Et.get(s, "handle"),
                c && c.apply(s, n),
                c = l && s[l],
                c && c.apply && kt(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !kt(r) || l && ot.isFunction(r[d]) && !ot.isWindow(r) && (a = r[l], a && (r[l] = null), ot.event.triggered = d, r[d](), ot.event.triggered = void 0, a && (r[l] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ot.extend(new ot.Event, n, {
                type: e,
                isSimulated: !0
            });
            ot.event.trigger(r, null, t)
        }
    }),
    ot.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ot.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ot.event.trigger(e, t, n, !0) : void 0
        }
    }),
    ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ot.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ot.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    rt.focusin = "onfocusin" in e,
    rt.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            ot.event.simulate(t, e.target, ot.event.fix(e))
        };
        ot.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = Et.access(r, t);
                i || r.addEventListener(e, n, !0),
                Et.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = Et.access(r, t) - 1;
                i ? Et.access(r, t, i) : (r.removeEventListener(e, n, !0), Et.remove(r, t))
            }
        }
    });
    var vn = e.location,
    yn = ot.now(),
    xn = /\?/;
    ot.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    ot.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch(r) {
            n = void 0
        }
        return (!n || n.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + t),
        n
    };
    var bn = /#.*$/,
    wn = /([?&])_=[^&]*/,
    Tn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    kn = /^(?:GET|HEAD)$/,
    En = /^\/\//,
    Nn = {},
    Sn = {},
    jn = "*/".concat("*"),
    Dn = G.createElement("a");
    Dn.href = vn.href,
    ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vn.href,
            type: "GET",
            isLocal: Cn.test(vn.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _(_(e, ot.ajaxSettings), t) : _(ot.ajaxSettings, e)
        },
        ajaxPrefilter: $(Nn),
        ajaxTransport: $(Sn),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var l, f, y, x, w, C = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (x = X(p, T, r)), x = z(p, x, T, l), l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ot.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (ot.etag[o] = w)), 204 === t || "HEAD" === p.type ? C = "nocontent": 304 === t ? C = "notmodified": (C = x.state, f = x.data, y = x.error, l = !y)) : (y = C, (t || !C) && (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]), T.statusCode(v), v = void 0, c && h.trigger(l ? "ajaxSuccess": "ajaxError", [T, p, l ? f: y]), m.fireWith(d, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0),
            n = n || {};
            var i, o, s, a, u, l, c, f, p = ot.ajaxSetup({},
            n),
            d = p.context || p,
            h = p.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
            g = ot.Deferred(),
            m = ot.Callbacks("once memory"),
            v = p.statusCode || {},
            y = {},
            x = {},
            b = 0,
            w = "canceled",
            T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!a) for (a = {}; t = Tn.exec(s);) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) v[t] = [v[t], e[t]];
                    else T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || vn.href) + "").replace(bn, "").replace(En, vn.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ot.trim(p.dataType || "*").toLowerCase().match(wt) || [""], null == p.crossDomain) {
                l = G.createElement("a");
                try {
                    l.href = p.url,
                    l.href = l.href,
                    p.crossDomain = Dn.protocol + "//" + Dn.host != l.protocol + "//" + l.host
                } catch(C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ot.param(p.data, p.traditional)), B(Nn, p, n, T), 2 === b) return T;
            c = ot.event && p.global,
            c && 0 === ot.active++&&ot.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !kn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (xn.test(o) ? "&": "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + yn++) : o + (xn.test(o) ? "&": "?") + "_=" + yn++)),
            p.ifModified && (ot.lastModified[o] && T.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && T.setRequestHeader("If-None-Match", ot.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
            T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jn + "; q=0.01": "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) T[f](p[f]);
            if (i = B(Sn, p, n, T)) {
                if (T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), 2 === b) return T;
                p.async && p.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout")
                },
                p.timeout));
                try {
                    b = 1,
                    i.send(y, r)
                } catch(C) {
                    if (! (2 > b)) throw C;
                    r( - 1, C)
                }
            } else r( - 1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ot.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ot.get(e, void 0, t, "script")
        }
    }),
    ot.each(["get", "post"],
    function(e, t) {
        ot[t] = function(e, n, r, i) {
            return ot.isFunction(n) && (i = i || r, r = n, n = void 0),
            ot.ajax(ot.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            },
            ot.isPlainObject(e) && e))
        }
    }),
    ot._evalUrl = function(e) {
        return ot.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    ot.fn.extend({
        wrapAll: function(e) {
            var t;
            return ot.isFunction(e) ? this.each(function(t) {
                ot(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ot(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(ot.isFunction(e) ?
            function(t) {
                ot(this).wrapInner(e.call(this, t))
            }: function() {
                var t = ot(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ot.isFunction(e);
            return this.each(function(n) {
                ot(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ot.expr.filters.hidden = function(e) {
        return ! ot.expr.filters.visible(e)
    },
    ot.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var An = /%20/g,
    qn = /\[\]$/,
    Ln = /\r?\n/g,
    Hn = /^(?:submit|button|image|reset|file)$/i,
    On = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = ot.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(An, "+")
    },
    ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ot.prop(this, "elements");
                return e ? ot.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ot(this).is(":disabled") && On.test(this.nodeName) && !Hn.test(e) && (this.checked || !Ht.test(e))
            }).map(function(e, t) {
                var n = ot(this).val();
                return null == n ? null: ot.isArray(n) ? ot.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ln, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ln, "\r\n")
                }
            }).get()
        }
    }),
    ot.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    };
    var Fn = {
        0 : 200,
        1223 : 204
    },
    Pn = ot.ajaxSettings.xhr();
    rt.cors = !!Pn && "withCredentials" in Pn,
    rt.ajax = Pn = !!Pn,
    ot.ajaxTransport(function(t) {
        var n, r;
        return rt.cors || Pn && !t.crossDomain ? {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Fn[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        }: {
                            text: a.responseText
                        },
                        a.getAllResponseHeaders()))
                    }
                },
                a.onload = n(),
                r = a.onerror = n("error"),
                void 0 !== a.onabort ? a.onabort = r: a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                },
                n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch(u) {
                    if (n) throw u
                }
            },
            abort: function() {
                n && n()
            }
        }: void 0
    }),
    ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ot.globalEval(e),
                e
            }
        }
    }),
    ot.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ot.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ot("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }),
                    G.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Rn = [],
    Mn = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rn.pop() || ot.expando + "_" + yn++;
            return this[e] = !0,
            e
        }
    }),
    ot.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Mn.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ot.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Mn, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || ot.error(i + " was not called"),
            s[0]
        },
        t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        },
        r.always(function() {
            void 0 === o ? ot(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback, Rn.push(i)),
            s && ot.isFunction(o) && o(s[0]),
            s = o = void 0
        }), "script") : void 0
    }),
    ot.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || G;
        var r = ht.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p([e], t, i), i && i.length && ot(i).remove(), ot.merge([], r.childNodes))
    };
    var In = ot.fn.load;
    ot.fn.load = function(e, t, n) {
        if ("string" != typeof e && In) return In.apply(this, arguments);
        var r, i, o, s = this,
        a = e.indexOf(" ");
        return a > -1 && (r = ot.trim(e.slice(a)), e = e.slice(0, a)),
        ot.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && ot.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? ot("<div>").append(ot.parseHTML(e)).find(r) : e)
        }).always(n &&
        function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }),
        this
    },
    ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ot.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ot.expr.filters.animated = function(e) {
        return ot.grep(ot.timers,
        function(t) {
            return e === t.elem
        }).length
    },
    ot.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = ot.css(e, "position"),
            f = ot(e),
            p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = ot.css(e, "top"),
            u = ot.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0),
            ot.isFunction(t) && (t = t.call(e, n, ot.extend({},
            a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
            "using" in t ? t.using.call(e, p) : f.css(p)
        }
    },
    ot.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                ot.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
            i = {
                top: 0,
                left: 0
            },
            o = r && r.ownerDocument;
            if (o) return t = o.documentElement,
            ot.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ot.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ot.nodeName(e[0], "html") || (r = e.offset()), r.top += ot.css(e[0], "borderTopWidth", !0), r.left += ot.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - ot.css(n, "marginTop", !0),
                    left: t.left - r.left - ot.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ot.css(e, "position");) e = e.offsetParent;
                return e || Kt
            })
        }
    }),
    ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = "pageYOffset" === t;
        ot.fn[e] = function(r) {
            return Ct(this,
            function(e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset: i, n ? i: o.pageYOffset) : e[r] = i)
            },
            e, r, arguments.length)
        }
    }),
    ot.each(["top", "left"],
    function(e, t) {
        ot.cssHooks[t] = S(rt.pixelPosition,
        function(e, n) {
            return n ? (n = N(e, t), Gt.test(n) ? ot(e).position()[t] + "px": n) : void 0
        })
    }),
    ot.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        ot.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            ot.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                s = n || (r === !0 || i === !0 ? "margin": "border");
                return Ct(this,
                function(t, n, r) {
                    var i;
                    return ot.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ot.css(t, n, s) : ot.style(t, n, r, s)
                },
                t, o ? r: void 0, o, null)
            }
        })
    }),
    ot.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    ot.fn.andSelf = ot.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ot
    });
    var Wn = e.jQuery,
    $n = e.$;
    return ot.noConflict = function(t) {
        return e.$ === ot && (e.$ = $n),
        t && e.jQuery === ot && (e.jQuery = Wn),
        ot
    },
    t || (e.jQuery = e.$ = ot),
    ot
});

;/*!node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js*/
!
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
} (function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    function a() {
        var t = new Date;
        return i(t.getFullYear(), t.getMonth(), t.getDate())
    }
    function s(t, e) {
        return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
    }
    function n(i, a) {
        return function() {
            return a !== e && t.fn.datepicker.deprecated(a),
            this[i].apply(this, arguments)
        }
    }
    function o(t) {
        return t && !isNaN(t.getTime())
    }
    function r(e, i) {
        function a(t, e) {
            return e.toLowerCase()
        }
        var s, n = t(e).data(),
        o = {},
        r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
        i = new RegExp("^" + i.toLowerCase());
        for (var h in n) i.test(h) && (s = h.replace(r, a), o[s] = n[h]);
        return o
    }
    function h(e) {
        var i = {};
        if (m[e] || (e = e.split("-")[0], m[e])) {
            var a = m[e];
            return t.each(g,
            function(t, e) {
                e in a && (i[e] = a[e])
            }),
            i
        }
    }
    var l = function() {
        var e = {
            get: function(t) {
                return this.slice(t)[0]
            },
            contains: function(t) {
                for (var e = t && t.valueOf(), i = 0, a = this.length; a > i; i++) if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5) return i;
                return - 1
            },
            remove: function(t) {
                this.splice(t, 1)
            },
            replace: function(e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var t = new l;
                return t.replace(this),
                t
            }
        };
        return function() {
            var i = [];
            return i.push.apply(i, arguments),
            t.extend(i, e),
            i
        }
    } (),
    d = function(e, i) {
        t.data(e, "datepicker", this),
        this._process_options(i),
        this.dates = new l,
        this.viewDate = this.o.defaultViewDate,
        this.focusDate = null,
        this.element = t(e),
        this.isInput = this.element.is("input"),
        this.inputField = this.isInput ? this.element: this.element.find("input"),
        this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1,
        this.component && 0 === this.component.length && (this.component = !1),
        this.isInline = !this.component && this.element.is("div"),
        this.picker = t(D.template),
        this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"),
        this.o.rtl && this.picker.addClass("datepicker-rtl"),
        this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",
        function(t, e) {
            return Number(e) + 1
        }),
        this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }),
        this._allow_update = !1,
        this.setViewMode(this.o.startView),
        this._allow_update = !0,
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show()
    };
    d.prototype = {
        constructor: d,
        _resolveViewName: function(e) {
            return t.each(D.viewModes,
            function(i, a) {
                return e === i || -1 !== t.inArray(e, a.names) ? (e = i, !1) : void 0
            }),
            e
        },
        _resolveDaysOfWeek: function(e) {
            return t.isArray(e) || (e = e.split(/[,\s]*/)),
            t.map(e, Number)
        },
        _check_template: function(i) {
            try {
                if (i === e || "" === i) return ! 1;
                if ((i.match(/[<>]/g) || []).length <= 0) return ! 0;
                var a = t(i);
                return a.length > 0
            } catch(s) {
                return ! 1
            }
        },
        _process_options: function(e) {
            this._o = t.extend({},
            this._o, e);
            var s = this.o = t.extend({},
            this._o),
            n = s.language;
            m[n] || (n = n.split("-")[0], m[n] || (n = f.language)),
            s.language = n,
            s.startView = this._resolveViewName(s.startView),
            s.minViewMode = this._resolveViewName(s.minViewMode),
            s.maxViewMode = this._resolveViewName(s.maxViewMode),
            s.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, s.startView)),
            s.multidate !== !0 && (s.multidate = Number(s.multidate) || !1, s.multidate !== !1 && (s.multidate = Math.max(0, s.multidate))),
            s.multidateSeparator = String(s.multidateSeparator),
            s.weekStart %= 7,
            s.weekEnd = (s.weekStart + 6) % 7;
            var o = D.parseFormat(s.format);
            s.startDate !== -1 / 0 && (s.startDate = s.startDate ? s.startDate instanceof Date ? this._local_to_utc(this._zero_time(s.startDate)) : D.parseDate(s.startDate, o, s.language, s.assumeNearbyYear) : -1 / 0),
            1 / 0 !== s.endDate && (s.endDate = s.endDate ? s.endDate instanceof Date ? this._local_to_utc(this._zero_time(s.endDate)) : D.parseDate(s.endDate, o, s.language, s.assumeNearbyYear) : 1 / 0),
            s.daysOfWeekDisabled = this._resolveDaysOfWeek(s.daysOfWeekDisabled || []),
            s.daysOfWeekHighlighted = this._resolveDaysOfWeek(s.daysOfWeekHighlighted || []),
            s.datesDisabled = s.datesDisabled || [],
            t.isArray(s.datesDisabled) || (s.datesDisabled = s.datesDisabled.split(",")),
            s.datesDisabled = t.map(s.datesDisabled,
            function(t) {
                return D.parseDate(t, o, s.language, s.assumeNearbyYear)
            });
            var r = String(s.orientation).toLowerCase().split(/\s+/g),
            h = s.orientation.toLowerCase();
            if (r = t.grep(r,
            function(t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), s.orientation = {
                x: "auto",
                y: "auto"
            },
            h && "auto" !== h) if (1 === r.length) switch (r[0]) {
            case "top":
            case "bottom":
                s.orientation.y = r[0];
                break;
            case "left":
            case "right":
                s.orientation.x = r[0]
            } else h = t.grep(r,
            function(t) {
                return /^left|right$/.test(t)
            }),
            s.orientation.x = h[0] || "auto",
            h = t.grep(r,
            function(t) {
                return /^top|bottom$/.test(t)
            }),
            s.orientation.y = h[0] || "auto";
            else;
            if (s.defaultViewDate instanceof Date || "string" == typeof s.defaultViewDate) s.defaultViewDate = D.parseDate(s.defaultViewDate, o, s.language, s.assumeNearbyYear);
            else if (s.defaultViewDate) {
                var l = s.defaultViewDate.year || (new Date).getFullYear(),
                d = s.defaultViewDate.month || 0,
                c = s.defaultViewDate.day || 1;
                s.defaultViewDate = i(l, d, c)
            } else s.defaultViewDate = a()
        },
        _events: [],
        _secondaryEvents: [],
        _applyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0],
            2 === t[n].length ? (a = e, s = t[n][1]) : 3 === t[n].length && (a = t[n][1], s = t[n][2]),
            i.on(s, a)
        },
        _unapplyEvents: function(t) {
            for (var i, a, s, n = 0; n < t.length; n++) i = t[n][0],
            2 === t[n].length ? (s = e, a = t[n][1]) : 3 === t[n].length && (s = t[n][1], a = t[n][2]),
            i.off(a, s)
        },
        _buildEvents: function() {
            var e = {
                keyup: t.proxy(function(e) { - 1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                },
                this),
                keydown: t.proxy(this.keydown, this),
                paste: t.proxy(this.paste, this)
            };
            this.o.showOnFocus === !0 && (e.focus = t.proxy(this.show, this)),
            this._events = this.isInput ? [[this.element, e]] : this.component && this.inputField.length ? [[this.inputField, e], [this.component, {
                click: t.proxy(this.show, this)
            }]] : [[this.element, {
                click: t.proxy(this.show, this),
                keydown: t.proxy(this.keydown, this)
            }]],
            this._events.push([this.element, "*", {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                },
                this)
            }], [this.element, {
                blur: t.proxy(function(t) {
                    this._focused_from = t.target
                },
                this)
            }]),
            this.o.immediateUpdates && this._events.push([this.element, {
                "changeYear changeMonth": t.proxy(function(t) {
                    this.update(t.date)
                },
                this)
            }]),
            this._secondaryEvents = [[this.picker, {
                click: t.proxy(this.click, this)
            }], [this.picker, ".prev, .next", {
                click: t.proxy(this.navArrowsClick, this)
            }], [this.picker, ".day:not(.disabled)", {
                click: t.proxy(this.dayCellClick, this)
            }], [t(window), {
                resize: t.proxy(this.place, this)
            }], [t(document), {
                "mousedown touchstart": t.proxy(function(t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                },
                this)
            }]]
        },
        _attachEvents: function() {
            this._detachEvents(),
            this._applyEvents(this._events)
        },
        _detachEvents: function() {
            this._unapplyEvents(this._events)
        },
        _attachSecondaryEvents: function() {
            this._detachSecondaryEvents(),
            this._applyEvents(this._secondaryEvents)
        },
        _detachSecondaryEvents: function() {
            this._unapplyEvents(this._secondaryEvents)
        },
        _trigger: function(e, i) {
            var a = i || this.dates.get( - 1),
            s = this._utc_to_local(a);
            this.element.trigger({
                type: e,
                date: s,
                viewMode: this.viewMode,
                dates: t.map(this.dates, this._utc_to_local),
                format: t.proxy(function(t, e) {
                    0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1),
                    e = e || this.o.format;
                    var i = this.dates.get(t);
                    return D.formatDate(i, e, this.o.language)
                },
                this)
            })
        },
        show: function() {
            return this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this)
        },
        hide: function() {
            return this.isInline || !this.picker.is(":visible") ? this: (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
        },
        destroy: function() {
            return this.hide(),
            this._detachEvents(),
            this._detachSecondaryEvents(),
            this.picker.remove(),
            delete this.element.data().datepicker,
            this.isInput || delete this.element.data().date,
            this
        },
        paste: function(e) {
            var i;
            if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) i = e.originalEvent.clipboardData.getData("text/plain");
            else {
                if (!window.clipboardData) return;
                i = window.clipboardData.getData("Text")
            }
            this.setDate(i),
            this.update(),
            e.preventDefault()
        },
        _utc_to_local: function(t) {
            if (!t) return t;
            var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
            return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())),
            e
        },
        _local_to_utc: function(t) {
            return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
        },
        _zero_time: function(t) {
            return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
        },
        _zero_utc_time: function(t) {
            return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
        },
        getDates: function() {
            return t.map(this.dates, this._utc_to_local)
        },
        getUTCDates: function() {
            return t.map(this.dates,
            function(t) {
                return new Date(t)
            })
        },
        getDate: function() {
            return this._utc_to_local(this.getUTCDate())
        },
        getUTCDate: function() {
            var t = this.dates.get( - 1);
            return t !== e ? new Date(t) : null
        },
        clearDates: function() {
            this.inputField.val(""),
            this.update(),
            this._trigger("changeDate"),
            this.o.autoclose && this.hide()
        },
        setDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.update.apply(this, e),
            this._trigger("changeDate"),
            this.setValue(),
            this
        },
        setUTCDates: function() {
            var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
            return this.setDates.apply(this, t.map(e, this._utc_to_local)),
            this
        },
        setDate: n("setDates"),
        setUTCDate: n("setUTCDates"),
        remove: n("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
        setValue: function() {
            var t = this.getFormattedDate();
            return this.inputField.val(t),
            this
        },
        getFormattedDate: function(i) {
            i === e && (i = this.o.format);
            var a = this.o.language;
            return t.map(this.dates,
            function(t) {
                return D.formatDate(t, i, a)
            }).join(this.o.multidateSeparator)
        },
        getStartDate: function() {
            return this.o.startDate
        },
        setStartDate: function(t) {
            return this._process_options({
                startDate: t
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        getEndDate: function() {
            return this.o.endDate
        },
        setEndDate: function(t) {
            return this._process_options({
                endDate: t
            }),
            this.update(),
            this.updateNavArrows(),
            this
        },
        setDaysOfWeekDisabled: function(t) {
            return this._process_options({
                daysOfWeekDisabled: t
            }),
            this.update(),
            this
        },
        setDaysOfWeekHighlighted: function(t) {
            return this._process_options({
                daysOfWeekHighlighted: t
            }),
            this.update(),
            this
        },
        setDatesDisabled: function(t) {
            return this._process_options({
                datesDisabled: t
            }),
            this.update(),
            this
        },
        place: function() {
            if (this.isInline) return this;
            var e = this.picker.outerWidth(),
            i = this.picker.outerHeight(),
            a = 10,
            s = t(this.o.container),
            n = s.width(),
            o = "body" === this.o.container ? t(document).scrollTop() : s.scrollTop(),
            r = s.offset(),
            h = [0];
            this.element.parents().each(function() {
                var e = t(this).css("z-index");
                "auto" !== e && 0 !== Number(e) && h.push(Number(e))
            });
            var l = Math.max.apply(Math, h) + this.o.zIndexOffset,
            d = this.component ? this.component.parent().offset() : this.element.offset(),
            c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
            u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
            p = d.left - r.left,
            f = d.top - r.top;
            "body" !== this.o.container && (f += o),
            this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),
            "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (p -= e - u)) : d.left < 0 ? (this.picker.addClass("datepicker-orient-left"), p -= d.left - a) : p + e > n ? (this.picker.addClass("datepicker-orient-right"), p += u - e) : this.picker.addClass(this.o.rtl ? "datepicker-orient-right": "datepicker-orient-left");
            var g, m = this.o.orientation.y;
            if ("auto" === m && (g = -o + f - i, m = 0 > g ? "bottom": "top"), this.picker.addClass("datepicker-orient-" + m), "top" === m ? f -= i + parseInt(this.picker.css("padding-top")) : f += c, this.o.rtl) {
                var D = n - (p + u);
                this.picker.css({
                    top: f,
                    right: D,
                    zIndex: l
                })
            } else this.picker.css({
                top: f,
                left: p,
                zIndex: l
            });
            return this
        },
        _allow_update: !0,
        update: function() {
            if (!this._allow_update) return this;
            var e = this.dates.copy(),
            i = [],
            a = !1;
            return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                e instanceof Date && (e = this._local_to_utc(e)),
                i.push(e)
            },
            this)), a = !0) : (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), i = i && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date),
            i = t.map(i, t.proxy(function(t) {
                return D.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
            },
            this)),
            i = t.grep(i, t.proxy(function(t) {
                return ! this.dateWithinRange(t) || !t
            },
            this), !0),
            this.dates.replace(i),
            this.o.updateViewDate && (this.viewDate = this.dates.length ? new Date(this.dates.get( - 1)) : this.viewDate < this.o.startDate ? new Date(this.o.startDate) : this.viewDate > this.o.endDate ? new Date(this.o.endDate) : this.o.defaultViewDate),
            a ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && a && (this._trigger("changeDate"), this.element.change()),
            !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()),
            this.fill(),
            this
        },
        fillDow: function() {
            if (this.o.showWeekDays) {
                var e = this.o.weekStart,
                i = "<tr>";
                for (this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow',
                -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (i += " disabled"),
                i += '">' + m[this.o.language].daysMin[e++%7] + "</th>";
                i += "</tr>",
                this.picker.find(".datepicker-days thead").append(i)
            }
        },
        fillMonths: function() {
            for (var t, e = this._utc_to_local(this.viewDate), i = "", a = 0; 12 > a; a++) t = e && e.getMonth() === a ? " focused": "",
            i += '<span class="month' + t + '">' + m[this.o.language].monthsShort[a] + "</span>";
            this.picker.find(".datepicker-months td").html(i)
        },
        setRange: function(e) {
            e && e.length ? this.range = t.map(e,
            function(t) {
                return t.valueOf()
            }) : delete this.range,
            this.fill()
        },
        getClassNames: function(e) {
            var i = [],
            n = this.viewDate.getUTCFullYear(),
            o = this.viewDate.getUTCMonth(),
            r = a();
            return e.getUTCFullYear() < n || e.getUTCFullYear() === n && e.getUTCMonth() < o ? i.push("old") : (e.getUTCFullYear() > n || e.getUTCFullYear() === n && e.getUTCMonth() > o) && i.push("new"),
            this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"),
            this.o.todayHighlight && s(e, r) && i.push("today"),
            -1 !== this.dates.contains(e) && i.push("active"),
            this.dateWithinRange(e) || i.push("disabled"),
            this.dateIsDisabled(e) && i.push("disabled", "disabled-date"),
            -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"),
            this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")),
            i
        },
        _fill_yearsView: function(i, a, s, n, o, r, h) {
            for (var l, d, c, u = "",
            p = s / 10,
            f = this.picker.find(i), g = Math.floor(n / s) * s, m = g + 9 * p, D = Math.floor(this.viewDate.getFullYear() / p) * p, y = t.map(this.dates,
            function(t) {
                return Math.floor(t.getUTCFullYear() / p) * p
            }), v = g - p; m + p >= v; v += p) l = [a],
            d = null,
            v === g - p ? l.push("old") : v === m + p && l.push("new"),
            -1 !== t.inArray(v, y) && l.push("active"),
            (o > v || v > r) && l.push("disabled"),
            v === D && l.push("focused"),
            h !== t.noop && (c = h(new Date(v, 0, 1)), c === e ? c = {}: "boolean" == typeof c ? c = {
                enabled: c
            }: "string" == typeof c && (c = {
                classes: c
            }), c.enabled === !1 && l.push("disabled"), c.classes && (l = l.concat(c.classes.split(/\s+/))), c.tooltip && (d = c.tooltip)),
            u += '<span class="' + l.join(" ") + '"' + (d ? ' title="' + d + '"': "") + ">" + v + "</span>";
            f.find(".datepicker-switch").text(g + "-" + m),
            f.find("td").html(u)
        },
        fill: function() {
            var a, s, n = new Date(this.viewDate),
            o = n.getUTCFullYear(),
            r = n.getUTCMonth(),
            h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
            l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
            d = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
            c = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
            u = m[this.o.language].today || m.en.today || "",
            p = m[this.o.language].clear || m.en.clear || "",
            f = m[this.o.language].titleFormat || m.en.titleFormat;
            if (!isNaN(o) && !isNaN(r)) {
                this.picker.find(".datepicker-days .datepicker-switch").text(D.formatDate(n, f, this.o.language)),
                this.picker.find("tfoot .today").text(u).css("display", this.o.todayBtn === !0 || "linked" === this.o.todayBtn ? "table-cell": "none"),
                this.picker.find("tfoot .clear").text(p).css("display", this.o.clearBtn === !0 ? "table-cell": "none"),
                this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell": "none"),
                this.updateNavArrows(),
                this.fillMonths();
                var g = i(o, r, 0),
                y = g.getUTCDate();
                g.setUTCDate(y - (g.getUTCDay() - this.o.weekStart + 7) % 7);
                var v = new Date(g);
                g.getUTCFullYear() < 100 && v.setUTCFullYear(g.getUTCFullYear()),
                v.setUTCDate(v.getUTCDate() + 42),
                v = v.valueOf();
                for (var w, k, b = []; g.valueOf() < v;) {
                    if (w = g.getUTCDay(), w === this.o.weekStart && (b.push("<tr>"), this.o.calendarWeeks)) {
                        var _ = new Date( + g + (this.o.weekStart - w - 7) % 7 * 864e5),
                        C = new Date(Number(_) + (11 - _.getUTCDay()) % 7 * 864e5),
                        T = new Date(Number(T = i(C.getUTCFullYear(), 0, 1)) + (11 - T.getUTCDay()) % 7 * 864e5),
                        M = (C - T) / 864e5 / 7 + 1;
                        b.push('<td class="cw">' + M + "</td>")
                    }
                    k = this.getClassNames(g),
                    k.push("day");
                    var U = g.getUTCDate();
                    this.o.beforeShowDay !== t.noop && (s = this.o.beforeShowDay(this._utc_to_local(g)), s === e ? s = {}: "boolean" == typeof s ? s = {
                        enabled: s
                    }: "string" == typeof s && (s = {
                        classes: s
                    }), s.enabled === !1 && k.push("disabled"), s.classes && (k = k.concat(s.classes.split(/\s+/))), s.tooltip && (a = s.tooltip), s.content && (U = s.content)),
                    k = t.isFunction(t.uniqueSort) ? t.uniqueSort(k) : t.unique(k),
                    b.push('<td class="' + k.join(" ") + '"' + (a ? ' title="' + a + '"': "") + ' data-date="' + g.getTime().toString() + '">' + U + "</td>"),
                    a = null,
                    w === this.o.weekEnd && b.push("</tr>"),
                    g.setUTCDate(g.getUTCDate() + 1)
                }
                this.picker.find(".datepicker-days tbody").html(b.join(""));
                var x = m[this.o.language].monthsTitle || m.en.monthsTitle || "Months",
                V = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? x: o).end().find("tbody span").removeClass("active");
                if (t.each(this.dates,
                function(t, e) {
                    e.getUTCFullYear() === o && V.eq(e.getUTCMonth()).addClass("active")
                }), (h > o || o > d) && V.addClass("disabled"), o === h && V.slice(0, l).addClass("disabled"), o === d && V.slice(c + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                    var S = this;
                    t.each(V,
                    function(i, a) {
                        var s = new Date(o, i, 1),
                        n = S.o.beforeShowMonth(s);
                        n === e ? n = {}: "boolean" == typeof n ? n = {
                            enabled: n
                        }: "string" == typeof n && (n = {
                            classes: n
                        }),
                        n.enabled !== !1 || t(a).hasClass("disabled") || t(a).addClass("disabled"),
                        n.classes && t(a).addClass(n.classes),
                        n.tooltip && t(a).prop("title", n.tooltip)
                    })
                }
                this._fill_yearsView(".datepicker-years", "year", 10, o, h, d, this.o.beforeShowYear),
                this._fill_yearsView(".datepicker-decades", "decade", 100, o, h, d, this.o.beforeShowDecade),
                this._fill_yearsView(".datepicker-centuries", "century", 1e3, o, h, d, this.o.beforeShowCentury)
            }
        },
        updateNavArrows: function() {
            if (this._allow_update) {
                var t, e, i = new Date(this.viewDate),
                a = i.getUTCFullYear(),
                s = i.getUTCMonth(),
                n = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                r = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCFullYear() : 1 / 0,
                h = 1 / 0 !== this.o.endDate ? this.o.endDate.getUTCMonth() : 1 / 0,
                l = 1;
                switch (this.viewMode) {
                case 4:
                    l *= 10;
                case 3:
                    l *= 10;
                case 2:
                    l *= 10;
                case 1:
                    t = Math.floor(a / l) * l < n,
                    e = Math.floor(a / l) * l + l > r;
                    break;
                case 0:
                    t = n >= a && o > s,
                    e = a >= r && s > h
                }
                this.picker.find(".prev").toggleClass("disabled", t),
                this.picker.find(".next").toggleClass("disabled", e)
            }
        },
        click: function(e) {
            e.preventDefault(),
            e.stopPropagation();
            var s, n, o, r;
            s = t(e.target),
            s.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1),
            s.hasClass("today") && !s.hasClass("day") && (this.setViewMode(0), this._setDate(a(), "linked" === this.o.todayBtn ? null: "view")),
            s.hasClass("clear") && this.clearDates(),
            s.hasClass("disabled") || (s.hasClass("month") || s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), n = 1, 1 === this.viewMode ? (r = s.parent().find("span").index(s), o = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(r)) : (r = 0, o = Number(s.text()), this.viewDate.setUTCFullYear(o)), this._trigger(D.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(i(o, r, n)) : (this.setViewMode(this.viewMode - 1), this.fill())),
            this.picker.is(":visible") && this._focused_from && this._focused_from.focus(),
            delete this._focused_from
        },
        dayCellClick: function(e) {
            var i = t(e.currentTarget),
            a = i.data("date"),
            s = new Date(a);
            this.o.updateViewDate && (s.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), s.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)),
            this._setDate(s)
        },
        navArrowsClick: function(e) {
            var i = t(e.currentTarget),
            a = i.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (a *= 12 * D.viewModes[this.viewMode].navStep),
            this.viewDate = this.moveMonth(this.viewDate, a),
            this._trigger(D.viewModes[this.viewMode].e, this.viewDate),
            this.fill()
        },
        _toggle_multidate: function(t) {
            var e = this.dates.contains(t);
            if (t || this.dates.clear(), -1 !== e ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate) for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
        },
        _setDate: function(t, e) {
            e && "date" !== e || this._toggle_multidate(t && new Date(t)),
            (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)),
            this.fill(),
            this.setValue(),
            e && "view" === e || this._trigger("changeDate"),
            this.inputField.trigger("change"),
            !this.o.autoclose || e && "date" !== e || this.hide()
        },
        moveDay: function(t, e) {
            var i = new Date(t);
            return i.setUTCDate(t.getUTCDate() + e),
            i
        },
        moveWeek: function(t, e) {
            return this.moveDay(t, 7 * e)
        },
        moveMonth: function(t, e) {
            if (!o(t)) return this.o.defaultViewDate;
            if (!e) return t;
            var i, a, s = new Date(t.valueOf()),
            n = s.getUTCDate(),
            r = s.getUTCMonth(),
            h = Math.abs(e);
            if (e = e > 0 ? 1 : -1, 1 === h) a = -1 === e ?
            function() {
                return s.getUTCMonth() === r
            }: function() {
                return s.getUTCMonth() !== i
            },
            i = r + e,
            s.setUTCMonth(i),
            i = (i + 12) % 12;
            else {
                for (var l = 0; h > l; l++) s = this.moveMonth(s, e);
                i = s.getUTCMonth(),
                s.setUTCDate(n),
                a = function() {
                    return i !== s.getUTCMonth()
                }
            }
            for (; a();) s.setUTCDate(--n),
            s.setUTCMonth(i);
            return s
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        moveAvailableDate: function(t, e, i) {
            do {
                if (t = this[i](t, e), !this.dateWithinRange(t)) return ! 1;
                i = "moveDay"
            } while ( this . dateIsDisabled ( t ));
            return t
        },
        weekOfDateIsDisabled: function(e) {
            return - 1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
        },
        dateIsDisabled: function(e) {
            return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled,
            function(t) {
                return s(e, t)
            }).length > 0
        },
        dateWithinRange: function(t) {
            return t >= this.o.startDate && t <= this.o.endDate
        },
        keydown: function(t) {
            if (!this.picker.is(":visible")) return void((40 === t.keyCode || 27 === t.keyCode) && (this.show(), t.stopPropagation()));
            var e, i, a = !1,
            s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
            case 27:
                this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get( - 1) || this.viewDate, this.fill()) : this.hide(),
                t.preventDefault(),
                t.stopPropagation();
                break;
            case 37:
            case 38:
            case 39:
            case 40:
                if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1,
                0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(s, e, "moveYear"), i && this._trigger("changeYear", this.viewDate)) : t.shiftKey ? (i = this.moveAvailableDate(s, e, "moveMonth"), i && this._trigger("changeMonth", this.viewDate)) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (i = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? ((38 === t.keyCode || 40 === t.keyCode) && (e = 4 * e), i = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && ((38 === t.keyCode || 40 === t.keyCode) && (e = 4 * e), i = this.moveAvailableDate(s, e, "moveYear")),
                i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                break;
            case 13:
                if (!this.o.forceParse) break;
                s = this.focusDate || this.dates.get( - 1) || this.viewDate,
                this.o.keyboardNavigation && (this._toggle_multidate(s), a = !0),
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.setValue(),
                this.fill(),
                this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                break;
            case 9:
                this.focusDate = null,
                this.viewDate = this.dates.get( - 1) || this.viewDate,
                this.fill(),
                this.hide()
            }
            a && (this._trigger(this.dates.length ? "changeDate": "clearDate"), this.inputField.trigger("change"))
        },
        setViewMode: function(t) {
            this.viewMode = t,
            this.picker.children("div").hide().filter(".datepicker-" + D.viewModes[this.viewMode].clsName).show(),
            this.updateNavArrows(),
            this._trigger("changeViewMode", new Date(this.viewDate))
        }
    };
    var c = function(e, i) {
        t.data(e, "datepicker", this),
        this.element = t(e),
        this.inputs = t.map(i.inputs,
        function(t) {
            return t.jquery ? t[0] : t
        }),
        delete i.inputs,
        this.keepEmptyValues = i.keepEmptyValues,
        delete i.keepEmptyValues,
        p.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)),
        this.pickers = t.map(this.inputs,
        function(e) {
            return t.data(e, "datepicker")
        }),
        this.updateDates()
    };
    c.prototype = {
        updateDates: function() {
            this.dates = t.map(this.pickers,
            function(t) {
                return t.getUTCDate()
            }),
            this.updateRanges()
        },
        updateRanges: function() {
            var e = t.map(this.dates,
            function(t) {
                return t.valueOf()
            });
            t.each(this.pickers,
            function(t, i) {
                i.setRange(e)
            })
        },
        clearDates: function() {
            t.each(this.pickers,
            function(t, e) {
                e.clearDates()
            })
        },
        dateUpdated: function(i) {
            if (!this.updating) {
                this.updating = !0;
                var a = t.data(i.target, "datepicker");
                if (a !== e) {
                    var s = a.getUTCDate(),
                    n = this.keepEmptyValues,
                    o = t.inArray(i.target, this.inputs),
                    r = o - 1,
                    h = o + 1,
                    l = this.inputs.length;
                    if ( - 1 !== o) {
                        if (t.each(this.pickers,
                        function(t, e) {
                            e.getUTCDate() || e !== a && n || e.setUTCDate(s)
                        }), s < this.dates[r]) for (; r >= 0 && s < this.dates[r];) this.pickers[r--].setUTCDate(s);
                        else if (s > this.dates[h]) for (; l > h && s > this.dates[h];) this.pickers[h++].setUTCDate(s);
                        this.updateDates(),
                        delete this.updating
                    }
                }
            }
        },
        destroy: function() {
            t.map(this.pickers,
            function(t) {
                t.destroy()
            }),
            t(this.inputs).off("changeDate", this.dateUpdated),
            delete this.element.data().datepicker
        },
        remove: n("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
    };
    var u = t.fn.datepicker,
    p = function(i) {
        var a = Array.apply(null, arguments);
        a.shift();
        var s;
        if (this.each(function() {
            var e = t(this),
            n = e.data("datepicker"),
            o = "object" == typeof i && i;
            if (!n) {
                var l = r(this, "date"),
                u = t.extend({},
                f, l, o),
                p = h(u.language),
                g = t.extend({},
                f, p, l, o);
                e.hasClass("input-daterange") || g.inputs ? (t.extend(g, {
                    inputs: g.inputs || e.find("input").toArray()
                }), n = new c(this, g)) : n = new d(this, g),
                e.data("datepicker", n)
            }
            "string" == typeof i && "function" == typeof n[i] && (s = n[i].apply(n, a))
        }), s === e || s instanceof d || s instanceof c) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
        return s
    };
    t.fn.datepicker = p;
    var f = t.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        beforeShowYear: t.noop,
        beforeShowDecade: t.noop,
        beforeShowCentury: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        },
        showWeekDays: !0
    },
    g = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    t.fn.datepicker.Constructor = d;
    var m = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    },
    D = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        },
        {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        },
        {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        },
        {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        },
        {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(t) {
            if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
            var e = t.replace(this.validParts, "\x00").split("\x00"),
            i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separators: e,
                parts: i
            }
        },
        parseDate: function(i, s, n, o) {
            function r(t, e) {
                return e === !0 && (e = 10),
                100 > t && (t += 2e3, t > (new Date).getFullYear() + e && (t -= 100)),
                t
            }
            function h() {
                var t = this.slice(0, l[p].length),
                e = l[p].slice(0, t.length);
                return t.toLowerCase() === e.toLowerCase()
            }
            if (!i) return e;
            if (i instanceof Date) return i;
            if ("string" == typeof s && (s = D.parseFormat(s)), s.toValue) return s.toValue(i, s, n);
            var l, c, u, p, f, g = {
                d: "moveDay",
                m: "moveMonth",
                w: "moveWeek",
                y: "moveYear"
            },
            y = {
                yesterday: "-1d",
                today: "+0d",
                tomorrow: "+1d"
            };
            if (i in y && (i = y[i]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i)) {
                for (l = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date, p = 0; p < l.length; p++) c = l[p].match(/([\-+]\d+)([dmwy])/i),
                u = Number(c[1]),
                f = g[c[2].toLowerCase()],
                i = d.prototype[f](i, u);
                return d.prototype._zero_utc_time(i)
            }
            l = i && i.match(this.nonpunctuation) || [];
            var v, w, k = {},
            b = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
            _ = {
                yyyy: function(t, e) {
                    return t.setUTCFullYear(o ? r(e, o) : e)
                },
                m: function(t, e) {
                    if (isNaN(t)) return t;
                    for (e -= 1; 0 > e;) e += 12;
                    for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                    return t
                },
                d: function(t, e) {
                    return t.setUTCDate(e)
                }
            };
            _.yy = _.yyyy,
            _.M = _.MM = _.mm = _.m,
            _.dd = _.d,
            i = a();
            var C = s.parts.slice();
            if (l.length !== C.length && (C = t(C).filter(function(e, i) {
                return - 1 !== t.inArray(i, b)
            }).toArray()), l.length === C.length) {
                var T;
                for (p = 0, T = C.length; T > p; p++) {
                    if (v = parseInt(l[p], 10), c = C[p], isNaN(v)) switch (c) {
                    case "MM":
                        w = t(m[n].months).filter(h),
                        v = t.inArray(w[0], m[n].months) + 1;
                        break;
                    case "M":
                        w = t(m[n].monthsShort).filter(h),
                        v = t.inArray(w[0], m[n].monthsShort) + 1
                    }
                    k[c] = v
                }
                var M, U;
                for (p = 0; p < b.length; p++) U = b[p],
                U in k && !isNaN(k[U]) && (M = new Date(i), _[U](M, k[U]), isNaN(M) || (i = M))
            }
            return i
        },
        formatDate: function(e, i, a) {
            if (!e) return "";
            if ("string" == typeof i && (i = D.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, a);
            var s = {
                d: e.getUTCDate(),
                D: m[a].daysShort[e.getUTCDay()],
                DD: m[a].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: m[a].monthsShort[e.getUTCMonth()],
                MM: m[a].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0": "") + s.d,
            s.mm = (s.m < 10 ? "0": "") + s.m,
            e = [];
            for (var n = t.extend([], i.separators), o = 0, r = i.parts.length; r >= o; o++) n.length && e.push(n.shift()),
            e.push(s[i.parts[o]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + f.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + f.templates.rightArrow + "</th></tr></thead>",
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
    D.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + D.headTemplate + "<tbody></tbody>" + D.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + D.headTemplate + D.contTemplate + D.footTemplate + "</table></div></div>",
    t.fn.datepicker.DPGlobal = D,
    t.fn.datepicker.noConflict = function() {
        return t.fn.datepicker = u,
        this
    },
    t.fn.datepicker.version = "1.8.0",
    t.fn.datepicker.deprecated = function(t) {
        var e = window.console;
        e && e.warn && e.warn("DEPRECATED: " + t)
    },
    t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]',
    function(e) {
        var i = t(this);
        i.data("datepicker") || (e.preventDefault(), p.call(i, "show"))
    }),
    t(function() {
        p.call(t('[data-provide="datepicker-inline"]'))
    })
});

;/*!node_modules/micro-template/lib/micro-template.js*/
function template(t, e) {
    var n = arguments.callee;
    return n.cache[t] || (n.cache[t] = function() {
        var e = t,
        a = /^[\w\-]+$/.test(t) ? n.get(t) : (e = "template(string)", t),
        r = 1,
        c = ("try { " + (n.variable ? "var " + n.variable + " = this.stash;": "with (this.stash) { ") + "this.ret += '" + a.replace(/<%/g, "").replace(/%>/g, "").replace(/'(?![^\x11\x13]+?\x13)/g, "\\x27").replace(/^\s*|\s*$/g, "").replace(/\n/g,
        function() {
            return "';\nthis.line = " + ++r + "; this.ret += '\\n"
        }).replace(/\x11=raw(.+?)\x13/g, "' + ($1) + '").replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") + "'; " + (n.variable ? "": "}") + "return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on " + e + "' + ' line ' + this.line + ')'; } //@ sourceURL=" + e + "\n").replace(/this\.ret \+= '';/g, ""),
        l = new Function(c),
        p = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#x22;",
            "'": "&#x27;"
        },
        s = function(t) {
            return ("" + t).replace(/[&<>\'\"]/g,
            function(t) {
                return p[t]
            })
        };
        return function(t) {
            return l.call(n.context = {
                escapeHTML: s,
                line: 1,
                ret: "",
                stash: t
            })
        }
    } ()),
    e ? n.cache[t](e) : n.cache[t]
}
function extended(t, e) {
    var n = function(e) {
        return e.include = function(t, e) {
            var n = {};
            for (var a in template.context.stash) template.context.stash.hasOwnProperty(a) && (n[a] = template.context.stash[a]);
            if (e) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a]);
            var r = template.context;
            r.ret += template(t, n),
            template.context = r
        },
        e.wrapper = function(t, e) {
            var n = template.context.ret;
            template.context.ret = "",
            e.apply(template.context);
            var a = template.context.ret,
            r = template.context.stash.content;
            template.context.stash.content = a,
            template.context.ret = n + template(t, template.context.stash),
            template.context.stash.content = r
        },
        template(t, e)
    };
    return e ? n(e) : n
}
template.cache = {},
template.get = function(t) {
    return document.getElementById(t).innerHTML
},
template.get = function(t) {
    var e = extended.get;
    return e ? e(t) : document.getElementById(t).innerHTML
},
this.template = template,
this.extended = extended;

;/*!node_modules/moment/moment.js*/
!
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
} (this,
function() {
    "use strict";
    function e() {
        return Ti.apply(null, arguments)
    }
    function t(e) {
        Ti = e
    }
    function n(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e) if (e.hasOwnProperty(t)) return ! 1;
        return ! 0
    }
    function r(e) {
        return void 0 === e
    }
    function a(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function u(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s
    }
    function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function d(e, t) {
        for (var n in t) l(t, n) && (e[n] = t[n]);
        return l(t, "toString") && (e.toString = t.toString),
        l(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function h(e, t, n, s) {
        return Yn(e, t, n, s, !0).utc()
    }
    function c() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }
    function f(e) {
        return null == e._pf && (e._pf = c()),
        e._pf
    }
    function m(e) {
        if (null == e._isValid) {
            var t = f(e),
            n = xi.call(t.parsedDateParts,
            function(e) {
                return null != e
            }),
            s = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.weekdayMismatch || t.nullInput || t.invalidFormat || t.userInvalidated || !(!t.meridiem || t.meridiem && n));
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s
        }
        return e._isValid
    }
    function _(e) {
        var t = h(0 / 0);
        return null != e ? d(f(t), e) : f(t).userInvalidated = !0,
        t
    }
    function y(e, t) {
        var n, s, i;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), bi.length > 0) for (n = 0; n < bi.length; n++) s = bi[n],
        i = t[s],
        r(i) || (e[s] = i);
        return e
    }
    function g(t) {
        y(this, t),
        this._d = new Date(null != t._d ? t._d.getTime() : 0 / 0),
        this.isValid() || (this._d = new Date(0 / 0)),
        Pi === !1 && (Pi = !0, e.updateOffset(this), Pi = !1)
    }
    function p(e) {
        return e instanceof g || null != e && null != e._isAMomentObject
    }
    function w(e) {
        return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function v(e) {
        var t = +e,
        n = 0;
        return 0 !== t && isFinite(t) && (n = w(t)),
        n
    }
    function M(e, t, n) {
        var s, i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;
        for (s = 0; i > s; s++)(n && e[s] !== t[s] || !n && v(e[s]) !== v(t[s])) && a++;
        return a + r
    }
    function S(t) {
        e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn
    }
    function k(t, n) {
        var s = !0;
        return d(function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, t), s) {
                for (var i, r = [], a = 0; a < arguments.length; a++) {
                    if (i = "", "object" == typeof arguments[a]) {
                        i += "\n[" + a + "] ";
                        for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", ";
                        i = i.slice(0, -2)
                    } else i = arguments[a];
                    r.push(i)
                }
                S(t + "\nArguments: " + Array.prototype.slice.call(r).join("") + "\n" + (new Error).stack),
                s = !1
            }
            return n.apply(this, arguments)
        },
        n)
    }
    function D(t, n) {
        null != e.deprecationHandler && e.deprecationHandler(t, n),
        Wi[t] || (S(n), Wi[t] = !0)
    }
    function Y(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function O(e) {
        var t, n;
        for (n in e) t = e[n],
        Y(t) ? this[n] = t: this["_" + n] = t;
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function T(e, t) {
        var n, i = d({},
        e);
        for (n in t) l(t, n) && (s(e[n]) && s(t[n]) ? (i[n] = {},
        d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e) l(e, n) && !l(t, n) && s(e[n]) && (i[n] = d({},
        i[n]));
        return i
    }
    function x(e) {
        null != e && this.set(e)
    }
    function b(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return Y(s) ? s.call(t, n) : s
    }
    function P(e) {
        var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t: (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g,
        function(e) {
            return e.slice(1)
        }), this._longDateFormat[e])
    }
    function W() {
        return this._invalidDate
    }
    function H(e) {
        return this._ordinal.replace("%d", e)
    }
    function R(e, t, n, s) {
        var i = this._relativeTime[n];
        return Y(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
    }
    function C(e, t) {
        var n = this._relativeTime[e > 0 ? "future": "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t)
    }
    function F(e, t) {
        var n = e.toLowerCase();
        Vi[n] = Vi[n + "s"] = Vi[t] = e
    }
    function L(e) {
        return "string" == typeof e ? Vi[e] || Vi[e.toLowerCase()] : void 0
    }
    function U(e) {
        var t, n, s = {};
        for (n in e) l(e, n) && (t = L(n), t && (s[t] = e[n]));
        return s
    }
    function G(e, t) {
        Ei[e] = t
    }
    function V(e) {
        var t = [];
        for (var n in e) t.push({
            unit: n,
            priority: Ei[n]
        });
        return t.sort(function(e, t) {
            return e.priority - t.priority
        }),
        t
    }
    function E(e, t, n) {
        var s = "" + Math.abs(e),
        i = t - s.length,
        r = e >= 0;
        return (r ? n ? "+": "": "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    function I(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]()
        }),
        e && (Ni[e] = i),
        t && (Ni[t[0]] = function() {
            return E(i.apply(this, arguments), t[1], t[2])
        }),
        n && (Ni[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        })
    }
    function A(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function j(e) {
        var t, n, s = e.match(Ii);
        for (t = 0, n = s.length; n > t; t++) s[t] = Ni[s[t]] ? Ni[s[t]] : A(s[t]);
        return function(t) {
            var i, r = "";
            for (i = 0; n > i; i++) r += Y(s[i]) ? s[i].call(t, e) : s[i];
            return r
        }
    }
    function N(e, t) {
        return e.isValid() ? (t = Z(t, e.localeData()), ji[t] = ji[t] || j(t), ji[t](e)) : e.localeData().invalidDate()
    }
    function Z(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var s = 5;
        for (Ai.lastIndex = 0; s >= 0 && Ai.test(e);) e = e.replace(Ai, n),
        Ai.lastIndex = 0,
        s -= 1;
        return e
    }
    function z(e, t, n) {
        ur[e] = Y(t) ? t: function(e) {
            return e && n ? n: t
        }
    }
    function $(e, t) {
        return l(ur, e) ? ur[e](t._strict, t._locale) : new RegExp(q(e))
    }
    function q(e) {
        return J(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(e, t, n, s, i) {
            return t || n || s || i
        }))
    }
    function J(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function B(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [e]), a(t) && (s = function(e, n) {
            n[t] = v(e)
        }), n = 0; n < e.length; n++) lr[e[n]] = s
    }
    function Q(e, t) {
        B(e,
        function(e, n, s, i) {
            s._w = s._w || {},
            t(e, s._w, s, i)
        })
    }
    function X(e, t, n) {
        null != t && l(lr, e) && lr[e](t, n._a, n, e)
    }
    function K(e) {
        return et(e) ? 366 : 365
    }
    function et(e) {
        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
    }
    function tt() {
        return et(this.year())
    }
    function nt(t, n) {
        return function(s) {
            return null != s ? (it(this, t, s), e.updateOffset(this, n), this) : st(this, t)
        }
    }
    function st(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC": "") + t]() : 0 / 0
    }
    function it(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && et(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC": "") + t](n, e.month(), ut(n, e.month())) : e._d["set" + (e._isUTC ? "UTC": "") + t](n))
    }
    function rt(e) {
        return e = L(e),
        Y(this[e]) ? this[e]() : this
    }
    function at(e, t) {
        if ("object" == typeof e) {
            e = U(e);
            for (var n = V(e), s = 0; s < n.length; s++) this[n[s].unit](e[n[s].unit])
        } else if (e = L(e), Y(this[e])) return this[e](t);
        return this
    }
    function ot(e, t) {
        return (e % t + t) % t
    }
    function ut(e, t) {
        if (isNaN(e) || isNaN(t)) return 0 / 0;
        var n = ot(t, 12);
        return e += (t - n) / 12,
        1 === n ? et(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    function lt(e, t) {
        return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Mr).test(t) ? "format": "standalone"][e.month()] : n(this._months) ? this._months: this._months.standalone
    }
    function dt(e, t) {
        return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Mr.test(t) ? "format": "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort: this._monthsShort.standalone
    }
    function ht(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; 12 > s; ++s) r = h([2e3, s]),
        this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === t ? (i = wr.call(this._shortMonthsParse, a), -1 !== i ? i: null) : (i = wr.call(this._longMonthsParse, a), -1 !== i ? i: null) : "MMM" === t ? (i = wr.call(this._shortMonthsParse, a), -1 !== i ? i: (i = wr.call(this._longMonthsParse, a), -1 !== i ? i: null)) : (i = wr.call(this._longMonthsParse, a), -1 !== i ? i: (i = wr.call(this._shortMonthsParse, a), -1 !== i ? i: null))
    }
    function ct(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return ht.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; 12 > s; s++) {
            if (i = h([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s
        }
    }
    function ft(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = v(t);
        else if (t = e.localeData().monthsParse(t), !a(t)) return e;
        return n = Math.min(e.date(), ut(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC": "") + "Month"](t, n),
        e
    }
    function mt(t) {
        return null != t ? (ft(this, t), e.updateOffset(this, !0), this) : st(this, "Month")
    }
    function _t() {
        return ut(this.year(), this.month())
    }
    function yt(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this), e ? this._monthsShortStrictRegex: this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Dr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex: this._monthsShortRegex)
    }
    function gt(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || pt.call(this), e ? this._monthsStrictRegex: this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Yr), this._monthsStrictRegex && e ? this._monthsStrictRegex: this._monthsRegex)
    }
    function pt() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [],
        i = [],
        r = [];
        for (t = 0; 12 > t; t++) n = h([2e3, t]),
        s.push(this.monthsShort(n, "")),
        i.push(this.months(n, "")),
        r.push(this.months(n, "")),
        r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; 12 > t; t++) s[t] = J(s[t]),
        i[t] = J(i[t]);
        for (t = 0; 24 > t; t++) r[t] = J(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"),
        this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
    }
    function wt(e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);
        return 100 > e && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e),
        o
    }
    function vt(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function Mt(e, t, n) {
        var s = 7 + t - n,
        i = (7 + vt(e, 0, s).getUTCDay() - t) % 7;
        return - i + s - 1
    }
    function St(e, t, n, s, i) {
        var r, a, o = (7 + n - s) % 7,
        u = Mt(e, s, i),
        l = 1 + 7 * (t - 1) + o + u;
        return 0 >= l ? (r = e - 1, a = K(r) + l) : l > K(e) ? (r = e + 1, a = l - K(e)) : (r = e, a = l),
        {
            year: r,
            dayOfYear: a
        }
    }
    function kt(e, t, n) {
        var s, i, r = Mt(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return 1 > a ? (i = e.year() - 1, s = a + Dt(i, t, n)) : a > Dt(e.year(), t, n) ? (s = a - Dt(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a),
        {
            week: s,
            year: i
        }
    }
    function Dt(e, t, n) {
        var s = Mt(e, t, n),
        i = Mt(e + 1, t, n);
        return (K(e) - s + i) / 7
    }
    function Yt(e) {
        return kt(e, this._week.dow, this._week.doy).week
    }
    function Ot() {
        return this._week.dow
    }
    function Tt() {
        return this._week.doy
    }
    function xt(e) {
        var t = this.localeData().week(this);
        return null == e ? t: this.add(7 * (e - t), "d")
    }
    function bt(e) {
        var t = kt(this, 1, 4).week;
        return null == e ? t: this.add(7 * (e - t), "d")
    }
    function Pt(e, t) {
        return "string" != typeof e ? e: isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e: null) : parseInt(e, 10)
    }
    function Wt(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null: e
    }
    function Ht(e, t) {
        return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format": "standalone"][e.day()] : n(this._weekdays) ? this._weekdays: this._weekdays.standalone
    }
    function Rt(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function Ct(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function Ft(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; 7 > s; ++s) r = h([2e3, 1]).day(s),
        this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
        this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === t ? (i = wr.call(this._weekdaysParse, a), -1 !== i ? i: null) : "ddd" === t ? (i = wr.call(this._shortWeekdaysParse, a), -1 !== i ? i: null) : (i = wr.call(this._minWeekdaysParse, a), -1 !== i ? i: null) : "dddd" === t ? (i = wr.call(this._weekdaysParse, a), -1 !== i ? i: (i = wr.call(this._shortWeekdaysParse, a), -1 !== i ? i: (i = wr.call(this._minWeekdaysParse, a), -1 !== i ? i: null))) : "ddd" === t ? (i = wr.call(this._shortWeekdaysParse, a), -1 !== i ? i: (i = wr.call(this._weekdaysParse, a), -1 !== i ? i: (i = wr.call(this._minWeekdaysParse, a), -1 !== i ? i: null))) : (i = wr.call(this._minWeekdaysParse, a), -1 !== i ? i: (i = wr.call(this._weekdaysParse, a), -1 !== i ? i: (i = wr.call(this._shortWeekdaysParse, a), -1 !== i ? i: null)))
    }
    function Lt(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return Ft.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; 7 > s; s++) {
            if (i = h([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s
        }
    }
    function Ut(e) {
        if (!this.isValid()) return null != e ? this: 0 / 0;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Pt(e, this.localeData()), this.add(e - t, "d")) : t
    }
    function Gt(e) {
        if (!this.isValid()) return null != e ? this: 0 / 0;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t: this.add(e - t, "d")
    }
    function Vt(e) {
        if (!this.isValid()) return null != e ? this: 0 / 0;
        if (null != e) {
            var t = Wt(e, this.localeData());
            return this.day(this.day() % 7 ? t: t - 7)
        }
        return this.day() || 7
    }
    function Et(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || jt.call(this), e ? this._weekdaysStrictRegex: this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Pr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex: this._weekdaysRegex)
    }
    function It(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || jt.call(this), e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Wr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex: this._weekdaysShortRegex)
    }
    function At(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || jt.call(this), e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Hr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex: this._weekdaysMinRegex)
    }
    function jt() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [],
        o = [],
        u = [],
        l = [];
        for (t = 0; 7 > t; t++) n = h([2e3, 1]).day(t),
        s = this.weekdaysMin(n, ""),
        i = this.weekdaysShort(n, ""),
        r = this.weekdays(n, ""),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; 7 > t; t++) o[t] = J(o[t]),
        u[t] = J(u[t]),
        l[t] = J(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }
    function Nt() {
        return this.hours() % 12 || 12
    }
    function Zt() {
        return this.hours() || 24
    }
    function zt(e, t) {
        I(e, 0, 0,
        function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function $t(e, t) {
        return t._meridiemParse
    }
    function qt(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    function Jt(e, t, n) {
        return e > 11 ? n ? "pm": "PM": n ? "am": "AM"
    }
    function Bt(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function Qt(e) {
        for (var t, n, s, i, r = 0; r < e.length;) {
            for (i = Bt(e[r]).split("-"), t = i.length, n = Bt(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
                if (s = Xt(i.slice(0, t).join("-"))) return s;
                if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
                t--
            }
            r++
        }
        return Rr
    }
    function Xt(e) {
        var t = null;
        if (!Ur[e] && "undefined" != typeof module && module && module.exports) try {
            t = Rr._abbr;
            var n = require;
            n("./locale/" + e),
            Kt(t)
        } catch(s) {}
        return Ur[e]
    }
    function Kt(e, t) {
        var n;
        return e && (n = r(t) ? nn(e) : en(e, t), n ? Rr = n: "undefined" != typeof console && console.warn),
        Rr._abbr
    }
    function en(e, t) {
        if (null !== t) {
            var n, s = Lr;
            if (t.abbr = e, null != Ur[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            s = Ur[e]._config;
            else if (null != t.parentLocale) if (null != Ur[t.parentLocale]) s = Ur[t.parentLocale]._config;
            else {
                if (n = Xt(t.parentLocale), null == n) return Gr[t.parentLocale] || (Gr[t.parentLocale] = []),
                Gr[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
                s = n._config
            }
            return Ur[e] = new x(T(s, t)),
            Gr[e] && Gr[e].forEach(function(e) {
                en(e.name, e.config)
            }),
            Kt(e),
            Ur[e]
        }
        return delete Ur[e],
        null
    }
    function tn(e, t) {
        if (null != t) {
            var n, s, i = Lr;
            s = Xt(e),
            null != s && (i = s._config),
            t = T(i, t),
            n = new x(t),
            n.parentLocale = Ur[e],
            Ur[e] = n,
            Kt(e)
        } else null != Ur[e] && (null != Ur[e].parentLocale ? Ur[e] = Ur[e].parentLocale: null != Ur[e] && delete Ur[e]);
        return Ur[e]
    }
    function nn(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Rr;
        if (!n(e)) {
            if (t = Xt(e)) return t;
            e = [e]
        }
        return Qt(e)
    }
    function sn() {
        return Hi(Ur)
    }
    function rn(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[hr] < 0 || n[hr] > 11 ? hr: n[cr] < 1 || n[cr] > ut(n[dr], n[hr]) ? cr: n[fr] < 0 || n[fr] > 24 || 24 === n[fr] && (0 !== n[mr] || 0 !== n[_r] || 0 !== n[yr]) ? fr: n[mr] < 0 || n[mr] > 59 ? mr: n[_r] < 0 || n[_r] > 59 ? _r: n[yr] < 0 || n[yr] > 999 ? yr: -1, f(e)._overflowDayOfYear && (dr > t || t > cr) && (t = cr), f(e)._overflowWeeks && -1 === t && (t = gr), f(e)._overflowWeekday && -1 === t && (t = pr), f(e).overflow = t),
        e
    }
    function an(e, t, n) {
        return null != e ? e: null != t ? t: n
    }
    function on(t) {
        var n = new Date(e.now());
        return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }
    function un(e) {
        var t, n, s, i, r, a = [];
        if (!e._d) {
            for (s = on(e), e._w && null == e._a[cr] && null == e._a[hr] && ln(e), null != e._dayOfYear && (r = an(e._a[dr], s[dr]), (e._dayOfYear > K(r) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), n = vt(r, 0, e._dayOfYear), e._a[hr] = n.getUTCMonth(), e._a[cr] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = a[t] = s[t];
            for (; 7 > t; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[fr] && 0 === e._a[mr] && 0 === e._a[_r] && 0 === e._a[yr] && (e._nextDay = !0, e._a[fr] = 0),
            e._d = (e._useUTC ? vt: wt).apply(null, a),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[fr] = 24),
            e._w && "undefined" != typeof e._w.d && e._w.d !== i && (f(e).weekdayMismatch = !0)
        }
    }
    function ln(e) {
        var t, n, s, i, r, a, o, u;
        if (t = e._w, null != t.GG || null != t.W || null != t.E) r = 1,
        a = 4,
        n = an(t.GG, e._a[dr], kt(On(), 1, 4).year),
        s = an(t.W, 1),
        i = an(t.E, 1),
        (1 > i || i > 7) && (u = !0);
        else {
            r = e._locale._week.dow,
            a = e._locale._week.doy;
            var l = kt(On(), r, a);
            n = an(t.gg, e._a[dr], l.year),
            s = an(t.w, l.week),
            null != t.d ? (i = t.d, (0 > i || i > 6) && (u = !0)) : null != t.e ? (i = t.e + r, (t.e < 0 || t.e > 6) && (u = !0)) : i = r
        }
        1 > s || s > Dt(n, r, a) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = St(n, s, i, r, a), e._a[dr] = o.year, e._dayOfYear = o.dayOfYear)
    }
    function dn(e) {
        var t, n, s, i, r, a, o = e._i,
        u = Vr.exec(o) || Er.exec(o);
        if (u) {
            for (f(e).iso = !0, t = 0, n = Ar.length; n > t; t++) if (Ar[t][1].exec(u[1])) {
                i = Ar[t][0],
                s = Ar[t][2] !== !1;
                break
            }
            if (null == i) return void(e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = jr.length; n > t; t++) if (jr[t][1].exec(u[3])) {
                    r = (u[2] || " ") + jr[t][0];
                    break
                }
                if (null == r) return void(e._isValid = !1)
            }
            if (!s && null != r) return void(e._isValid = !1);
            if (u[4]) {
                if (!Ir.exec(u[4])) return void(e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
            pn(e)
        } else e._isValid = !1
    }
    function hn(e, t, n, s, i, r) {
        var a = [cn(e), kr.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)),
        a
    }
    function cn(e) {
        var t = parseInt(e, 10);
        return 49 >= t ? 2e3 + t: 999 >= t ? 1900 + t: t
    }
    function fn(e) {
        return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function mn(e, t, n) {
        if (e) {
            var s = xr.indexOf(e),
            i = new Date(t[0], t[1], t[2]).getDay();
            if (s !== i) return f(n).weekdayMismatch = !0,
            n._isValid = !1,
            !1
        }
        return ! 0
    }
    function _n(e, t, n) {
        if (e) return zr[e];
        if (t) return 0;
        var s = parseInt(n, 10),
        i = s % 100,
        r = (s - i) / 100;
        return 60 * r + i
    }
    function yn(e) {
        var t = Zr.exec(fn(e._i));
        if (t) {
            var n = hn(t[4], t[3], t[2], t[5], t[6], t[7]);
            if (!mn(t[1], n, e)) return;
            e._a = n,
            e._tzm = _n(t[8], t[9], t[10]),
            e._d = vt.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            f(e).rfc2822 = !0
        } else e._isValid = !1
    }
    function gn(t) {
        var n = Nr.exec(t._i);
        return null !== n ? void(t._d = new Date( + n[1])) : (dn(t), void(t._isValid === !1 && (delete t._isValid, yn(t), t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t)))))
    }
    function pn(t) {
        if (t._f === e.ISO_8601) return void dn(t);
        if (t._f === e.RFC_2822) return void yn(t);
        t._a = [],
        f(t).empty = !0;
        var n, s, i, r, a, o = "" + t._i,
        u = o.length,
        l = 0;
        for (i = Z(t._f, t._locale).match(Ii) || [], n = 0; n < i.length; n++) r = i[n],
        s = (o.match($(r, t)) || [])[0],
        s && (a = o.substr(0, o.indexOf(s)), a.length > 0 && f(t).unusedInput.push(a), o = o.slice(o.indexOf(s) + s.length), l += s.length),
        Ni[r] ? (s ? f(t).empty = !1 : f(t).unusedTokens.push(r), X(r, s, t)) : t._strict && !s && f(t).unusedTokens.push(r);
        f(t).charsLeftOver = u - l,
        o.length > 0 && f(t).unusedInput.push(o),
        t._a[fr] <= 12 && f(t).bigHour === !0 && t._a[fr] > 0 && (f(t).bigHour = void 0),
        f(t).parsedDateParts = t._a.slice(0),
        f(t).meridiem = t._meridiem,
        t._a[fr] = wn(t._locale, t._a[fr], t._meridiem),
        un(t),
        rn(t)
    }
    function wn(e, t, n) {
        var s;
        return null == n ? t: null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (s = e.isPM(n), s && 12 > t && (t += 12), s || 12 !== t || (t = 0), t) : t
    }
    function vn(e) {
        var t, n, s, i, r;
        if (0 === e._f.length) return f(e).invalidFormat = !0,
        void(e._d = new Date(0 / 0));
        for (i = 0; i < e._f.length; i++) r = 0,
        t = y({},
        e),
        null != e._useUTC && (t._useUTC = e._useUTC),
        t._f = e._f[i],
        pn(t),
        m(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == s || s > r) && (s = r, n = t));
        d(e, n || t)
    }
    function Mn(e) {
        if (!e._d) {
            var t = U(e._i);
            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond],
            function(e) {
                return e && parseInt(e, 10)
            }),
            un(e)
        }
    }
    function Sn(e) {
        var t = new g(rn(kn(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0),
        t
    }
    function kn(e) {
        var t = e._i,
        s = e._f;
        return e._locale = e._locale || nn(e._l),
        null === t || void 0 === s && "" === t ? _({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new g(rn(t)) : (o(t) ? e._d = t: n(s) ? vn(e) : s ? pn(e) : Dn(e), m(e) || (e._d = null), e))
    }
    function Dn(t) {
        var i = t._i;
        r(i) ? t._d = new Date(e.now()) : o(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? gn(t) : n(i) ? (t._a = u(i.slice(0),
        function(e) {
            return parseInt(e, 10)
        }), un(t)) : s(i) ? Mn(t) : a(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
    }
    function Yn(e, t, r, a, o) {
        var u = {};
        return (r === !0 || r === !1) && (a = r, r = void 0),
        (s(e) && i(e) || n(e) && 0 === e.length) && (e = void 0),
        u._isAMomentObject = !0,
        u._useUTC = u._isUTC = o,
        u._l = r,
        u._i = e,
        u._f = t,
        u._strict = a,
        Sn(u)
    }
    function On(e, t, n, s) {
        return Yn(e, t, n, s, !1)
    }
    function Tn(e, t) {
        var s, i;
        if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return On();
        for (s = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][e](s)) && (s = t[i]);
        return s
    }
    function xn() {
        var e = [].slice.call(arguments, 0);
        return Tn("isBefore", e)
    }
    function bn() {
        var e = [].slice.call(arguments, 0);
        return Tn("isAfter", e)
    }
    function Pn(e) {
        for (var t in e) if ( - 1 === wr.call(Br, t) || null != e[t] && isNaN(e[t])) return ! 1;
        for (var n = !1,
        s = 0; s < Br.length; ++s) if (e[Br[s]]) {
            if (n) return ! 1;
            parseFloat(e[Br[s]]) !== v(e[Br[s]]) && (n = !0)
        }
        return ! 0
    }
    function Wn() {
        return this._isValid
    }
    function Hn() {
        return Qn(0 / 0)
    }
    function Rn(e) {
        var t = U(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        d = t.millisecond || 0;
        this._isValid = Pn(t),
        this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
        this._days = +a + 7 * r,
        this._months = +i + 3 * s + 12 * n,
        this._data = {},
        this._locale = nn(),
        this._bubble()
    }
    function Cn(e) {
        return e instanceof Rn
    }
    function Fn(e) {
        return 0 > e ? -1 * Math.round( - 1 * e) : Math.round(e)
    }
    function Ln(e, t) {
        I(e, 0, 0,
        function() {
            var e = this.utcOffset(),
            n = "+";
            return 0 > e && (e = -e, n = "-"),
            n + E(~~ (e / 60), 2) + t + E(~~e % 60, 2)
        })
    }
    function Un(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = n[n.length - 1] || [],
        i = (s + "").match(Qr) || ["-", 0, 0],
        r = +(60 * i[1]) + v(i[2]);
        return 0 === r ? 0 : "+" === i[0] ? r: -r
    }
    function Gn(t, n) {
        var s, i;
        return n._isUTC ? (s = n.clone(), i = (p(t) || o(t) ? t.valueOf() : On(t).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + i), e.updateOffset(s, !1), s) : On(t).local()
    }
    function Vn(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function En(t, n, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != t ? this: 0 / 0;
        if (null != t) {
            if ("string" == typeof t) {
                if (t = Un(rr, t), null === t) return this
            } else Math.abs(t) < 16 && !s && (t = 60 * t);
            return ! this._isUTC && n && (i = Vn(this)),
            this._offset = t,
            this._isUTC = !0,
            null != i && this.add(i, "m"),
            r !== t && (!n || this._changeInProgress ? ns(this, Qn(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)),
            this
        }
        return this._isUTC ? r: Vn(this)
    }
    function In(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }
    function An(e) {
        return this.utcOffset(0, e)
    }
    function jn(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vn(this), "m")),
        this
    }
    function Nn() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Un(ir, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function Zn(e) {
        return this.isValid() ? (e = e ? On(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
    }
    function zn() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function $n() {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (y(e, this), e = kn(e), e._a) {
            var t = e._isUTC ? h(e._a) : On(e._a);
            this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }
    function qn() {
        return this.isValid() ? !this._isUTC: !1
    }
    function Jn() {
        return this.isValid() ? this._isUTC: !1
    }
    function Bn() {
        return this.isValid() ? this._isUTC && 0 === this._offset: !1
    }
    function Qn(e, t) {
        var n, s, i, r = e,
        o = null;
        return Cn(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        }: a(e) ? (r = {},
        t ? r[t] = e: r.milliseconds = e) : (o = Xr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: 0,
            d: v(o[cr]) * n,
            h: v(o[fr]) * n,
            m: v(o[mr]) * n,
            s: v(o[_r]) * n,
            ms: v(Fn(1e3 * o[yr])) * n
        }) : (o = Kr.exec(e)) ? (n = "-" === o[1] ? -1 : 1, r = {
            y: Xn(o[2], n),
            M: Xn(o[3], n),
            w: Xn(o[4], n),
            d: Xn(o[5], n),
            h: Xn(o[6], n),
            m: Xn(o[7], n),
            s: Xn(o[8], n)
        }) : null == r ? r = {}: "object" == typeof r && ("from" in r || "to" in r) && (i = es(On(r.from), On(r.to)), r = {},
        r.ms = i.milliseconds, r.M = i.months),
        s = new Rn(r),
        Cn(e) && l(e, "_locale") && (s._locale = e._locale),
        s
    }
    function Xn(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function Kn(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function es(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Gn(t, e), e.isBefore(t) ? n = Kn(e, t) : (n = Kn(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function ts(e, t) {
        return function(n, s) {
            var i, r;
            return null === s || isNaN( + s) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = n, n = s, s = r),
            n = "string" == typeof n ? +n: n,
            i = Qn(n, s),
            ns(this, i, e),
            this
        }
    }
    function ns(t, n, s, i) {
        var r = n._milliseconds,
        a = Fn(n._days),
        o = Fn(n._months);
        t.isValid() && (i = null == i ? !0 : i, o && ft(t, st(t, "Month") + o * s), a && it(t, "Date", st(t, "Date") + a * s), r && t._d.setTime(t._d.valueOf() + r * s), i && e.updateOffset(t, a || o))
    }
    function ss(e, t) {
        var n = e.diff(t, "days", !0);
        return - 6 > n ? "sameElse": -1 > n ? "lastWeek": 0 > n ? "lastDay": 1 > n ? "sameDay": 2 > n ? "nextDay": 7 > n ? "nextWeek": "sameElse"
    }
    function is(t, n) {
        var s = t || On(),
        i = Gn(s, this).startOf("day"),
        r = e.calendarFormat(this, i) || "sameElse",
        a = n && (Y(n[r]) ? n[r].call(this, s) : n[r]);
        return this.format(a || this.localeData().calendar(r, this, On(s)))
    }
    function rs() {
        return new g(this)
    }
    function as(e, t) {
        var n = p(e) ? e: On(e);
        return this.isValid() && n.isValid() ? (t = L(t) || "millisecond", "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }
    function os(e, t) {
        var n = p(e) ? e: On(e);
        return this.isValid() && n.isValid() ? (t = L(t) || "millisecond", "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1
    }
    function us(e, t, n, s) {
        var i = p(e) ? e: On(e),
        r = p(t) ? t: On(t);
        return this.isValid() && i.isValid() && r.isValid() ? (s = s || "()", ("(" === s[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))) : !1
    }
    function ls(e, t) {
        var n, s = p(e) ? e: On(e);
        return this.isValid() && s.isValid() ? (t = L(t) || "millisecond", "millisecond" === t ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1
    }
    function ds(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    function hs(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    function cs(e, t, n) {
        var s, i, r;
        if (!this.isValid()) return 0 / 0;
        if (s = Gn(e, this), !s.isValid()) return 0 / 0;
        switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = L(t)) {
        case "year":
            r = fs(this, s) / 12;
            break;
        case "month":
            r = fs(this, s);
            break;
        case "quarter":
            r = fs(this, s) / 3;
            break;
        case "second":
            r = (this - s) / 1e3;
            break;
        case "minute":
            r = (this - s) / 6e4;
            break;
        case "hour":
            r = (this - s) / 36e5;
            break;
        case "day":
            r = (this - s - i) / 864e5;
            break;
        case "week":
            r = (this - s - i) / 6048e5;
            break;
        default:
            r = this - s
        }
        return n ? r: w(r)
    }
    function fs(e, t) {
        var n, s, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        r = e.clone().add(i, "months");
        return 0 > t - r ? (n = e.clone().add(i - 1, "months"), s = (t - r) / (r - n)) : (n = e.clone().add(i + 1, "months"), s = (t - r) / (n - r)),
        -(i + s) || 0
    }
    function ms() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function _s(e) {
        if (!this.isValid()) return null;
        var t = e !== !0,
        n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? N(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Y(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", N(n, "Z")) : N(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]": "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function ys() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment",
        t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc": "moment.parseZone", t = "Z");
        var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY": "YYYYYY",
        i = "-MM-DD[T]HH:mm:ss.SSS",
        r = t + '[")]';
        return this.format(n + s + i + r)
    }
    function gs(t) {
        t || (t = this.isUtc() ? e.defaultFormatUtc: e.defaultFormat);
        var n = N(this, t);
        return this.localeData().postformat(n)
    }
    function ps(e, t) {
        return this.isValid() && (p(e) && e.isValid() || On(e).isValid()) ? Qn({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function ws(e) {
        return this.from(On(), e)
    }
    function vs(e, t) {
        return this.isValid() && (p(e) && e.isValid() || On(e).isValid()) ? Qn({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function Ms(e) {
        return this.to(On(), e)
    }
    function Ss(e) {
        var t;
        return void 0 === e ? this._locale._abbr: (t = nn(e), null != t && (this._locale = t), this)
    }
    function ks() {
        return this._locale
    }
    function Ds(e) {
        switch (e = L(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    function Ys(e) {
        return e = L(e),
        void 0 === e || "millisecond" === e ? this: ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week": e).subtract(1, "ms"))
    }
    function Os() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function Ts() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function xs() {
        return new Date(this.valueOf())
    }
    function bs() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function Ps() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function Ws() {
        return this.isValid() ? this.toISOString() : null
    }
    function Hs() {
        return m(this)
    }
    function Rs() {
        return d({},
        f(this))
    }
    function Cs() {
        return f(this).overflow
    }
    function Fs() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function Ls(e, t) {
        I(0, [e, e.length], 0, t)
    }
    function Us(e) {
        return Is.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function Gs(e) {
        return Is.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function Vs() {
        return Dt(this.year(), 1, 4)
    }
    function Es() {
        var e = this.localeData()._week;
        return Dt(this.year(), e.dow, e.doy)
    }
    function Is(e, t, n, s, i) {
        var r;
        return null == e ? kt(this, s, i).year: (r = Dt(e, s, i), t > r && (t = r), As.call(this, e, t, n, s, i))
    }
    function As(e, t, n, s, i) {
        var r = St(e, t, n, s, i),
        a = vt(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()),
        this.month(a.getUTCMonth()),
        this.date(a.getUTCDate()),
        this
    }
    function js(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    function Ns(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t: this.add(e - t, "d")
    }
    function Zs(e, t) {
        t[yr] = v(1e3 * ("0." + e))
    }
    function zs() {
        return this._isUTC ? "UTC": ""
    }
    function $s() {
        return this._isUTC ? "Coordinated Universal Time": ""
    }
    function qs(e) {
        return On(1e3 * e)
    }
    function Js() {
        return On.apply(null, arguments).parseZone()
    }
    function Bs(e) {
        return e
    }
    function Qs(e, t, n, s) {
        var i = nn(),
        r = h().set(s, t);
        return i[n](r, e)
    }
    function Xs(e, t, n) {
        if (a(e) && (t = e, e = void 0), e = e || "", null != t) return Qs(e, t, n, "month");
        var s, i = [];
        for (s = 0; 12 > s; s++) i[s] = Qs(e, s, n, "month");
        return i
    }
    function Ks(e, t, n, s) {
        "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, a(t) && (n = t, t = void 0), t = t || "");
        var i = nn(),
        r = e ? i._week.dow: 0;
        if (null != n) return Qs(t, (n + r) % 7, s, "day");
        var o, u = [];
        for (o = 0; 7 > o; o++) u[o] = Qs(t, (o + r) % 7, s, "day");
        return u
    }
    function ei(e, t) {
        return Xs(e, t, "months")
    }
    function ti(e, t) {
        return Xs(e, t, "monthsShort")
    }
    function ni(e, t, n) {
        return Ks(e, t, n, "weekdays")
    }
    function si(e, t, n) {
        return Ks(e, t, n, "weekdaysShort")
    }
    function ii(e, t, n) {
        return Ks(e, t, n, "weekdaysMin")
    }
    function ri() {
        var e = this._data;
        return this._milliseconds = da(this._milliseconds),
        this._days = da(this._days),
        this._months = da(this._months),
        e.milliseconds = da(e.milliseconds),
        e.seconds = da(e.seconds),
        e.minutes = da(e.minutes),
        e.hours = da(e.hours),
        e.months = da(e.months),
        e.years = da(e.years),
        this
    }
    function ai(e, t, n, s) {
        var i = Qn(t, n);
        return e._milliseconds += s * i._milliseconds,
        e._days += s * i._days,
        e._months += s * i._months,
        e._bubble()
    }
    function oi(e, t) {
        return ai(this, e, t, 1)
    }
    function ui(e, t) {
        return ai(this, e, t, -1)
    }
    function li(e) {
        return 0 > e ? Math.floor(e) : Math.ceil(e)
    }
    function di() {
        var e, t, n, s, i, r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || 0 >= r && 0 >= a && 0 >= o || (r += 864e5 * li(ci(o) + a), a = 0, o = 0),
        u.milliseconds = r % 1e3,
        e = w(r / 1e3),
        u.seconds = e % 60,
        t = w(e / 60),
        u.minutes = t % 60,
        n = w(t / 60),
        u.hours = n % 24,
        a += w(n / 24),
        i = w(hi(a)),
        o += i,
        a -= li(ci(i)),
        s = w(o / 12),
        o %= 12,
        u.days = a,
        u.months = o,
        u.years = s,
        this
    }
    function hi(e) {
        return 4800 * e / 146097
    }
    function ci(e) {
        return 146097 * e / 4800
    }
    function fi(e) {
        if (!this.isValid()) return 0 / 0;
        var t, n, s = this._milliseconds;
        if (e = L(e), "month" === e || "year" === e) return t = this._days + s / 864e5,
        n = this._months + hi(t),
        "month" === e ? n: n / 12;
        switch (t = this._days + Math.round(ci(this._months)), e) {
        case "week":
            return t / 7 + s / 6048e5;
        case "day":
            return t + s / 864e5;
        case "hour":
            return 24 * t + s / 36e5;
        case "minute":
            return 1440 * t + s / 6e4;
        case "second":
            return 86400 * t + s / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + s;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    function mi() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : 0 / 0
    }
    function _i(e) {
        return function() {
            return this.as(e)
        }
    }
    function yi() {
        return Qn(this)
    }
    function gi(e) {
        return e = L(e),
        this.isValid() ? this[e + "s"]() : 0 / 0
    }
    function pi(e) {
        return function() {
            return this.isValid() ? this._data[e] : 0 / 0
        }
    }
    function wi() {
        return w(this.days() / 7)
    }
    function vi(e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s)
    }
    function Mi(e, t, n) {
        var s = Qn(e).abs(),
        i = Oa(s.as("s")),
        r = Oa(s.as("m")),
        a = Oa(s.as("h")),
        o = Oa(s.as("d")),
        u = Oa(s.as("M")),
        l = Oa(s.as("y")),
        d = i <= Ta.ss && ["s", i] || i < Ta.s && ["ss", i] || 1 >= r && ["m"] || r < Ta.m && ["mm", r] || 1 >= a && ["h"] || a < Ta.h && ["hh", a] || 1 >= o && ["d"] || o < Ta.d && ["dd", o] || 1 >= u && ["M"] || u < Ta.M && ["MM", u] || 1 >= l && ["y"] || ["yy", l];
        return d[2] = t,
        d[3] = +e > 0,
        d[4] = n,
        vi.apply(null, d)
    }
    function Si(e) {
        return void 0 === e ? Oa: "function" == typeof e ? (Oa = e, !0) : !1
    }
    function ki(e, t) {
        return void 0 === Ta[e] ? !1 : void 0 === t ? Ta[e] : (Ta[e] = t, "s" === e && (Ta.ss = t - 1), !0)
    }
    function Di(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(),
        n = Mi(this, !e, t);
        return e && (n = t.pastFuture( + this, n)),
        t.postformat(n)
    }
    function Yi(e) {
        return (e > 0) - (0 > e) || +e
    }
    function Oi() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n, s = xa(this._milliseconds) / 1e3,
        i = xa(this._days),
        r = xa(this._months);
        e = w(s / 60),
        t = w(e / 60),
        s %= 60,
        e %= 60,
        n = w(r / 12),
        r %= 12;
        var a = n,
        o = r,
        u = i,
        l = t,
        d = e,
        h = s ? s.toFixed(3).replace(/\.?0+$/, "") : "",
        c = this.asSeconds();
        if (!c) return "P0D";
        var f = 0 > c ? "-": "",
        m = Yi(this._months) !== Yi(c) ? "-": "",
        _ = Yi(this._days) !== Yi(c) ? "-": "",
        y = Yi(this._milliseconds) !== Yi(c) ? "-": "";
        return f + "P" + (a ? m + a + "Y": "") + (o ? m + o + "M": "") + (u ? _ + u + "D": "") + (l || d || h ? "T": "") + (l ? y + l + "H": "") + (d ? y + d + "M": "") + (h ? y + h + "S": "")
    }
    var Ti, xi;
    xi = Array.prototype.some ? Array.prototype.some: function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; n > s; s++) if (s in t && e.call(this, t[s], s, t)) return ! 0;
        return ! 1
    };
    var bi = e.momentProperties = [],
    Pi = !1,
    Wi = {};
    e.suppressDeprecationWarnings = !1,
    e.deprecationHandler = null;
    var Hi;
    Hi = Object.keys ? Object.keys: function(e) {
        var t, n = [];
        for (t in e) l(e, t) && n.push(t);
        return n
    };
    var Ri = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    },
    Ci = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    Fi = "Invalid date",
    Li = "%d",
    Ui = /\d{1,2}/,
    Gi = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    },
    Vi = {},
    Ei = {},
    Ii = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    ji = {},
    Ni = {},
    Zi = /\d/,
    zi = /\d\d/,
    $i = /\d{3}/,
    qi = /\d{4}/,
    Ji = /[+-]?\d{6}/,
    Bi = /\d\d?/,
    Qi = /\d\d\d\d?/,
    Xi = /\d\d\d\d\d\d?/,
    Ki = /\d{1,3}/,
    er = /\d{1,4}/,
    tr = /[+-]?\d{1,6}/,
    nr = /\d+/,
    sr = /[+-]?\d+/,
    ir = /Z|[+-]\d\d:?\d\d/gi,
    rr = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ar = /[+-]?\d+(\.\d{1,3})?/,
    or = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    ur = {},
    lr = {},
    dr = 0,
    hr = 1,
    cr = 2,
    fr = 3,
    mr = 4,
    _r = 5,
    yr = 6,
    gr = 7,
    pr = 8;
    I("Y", 0, 0,
    function() {
        var e = this.year();
        return 9999 >= e ? "" + e: "+" + e
    }),
    I(0, ["YY", 2], 0,
    function() {
        return this.year() % 100
    }),
    I(0, ["YYYY", 4], 0, "year"),
    I(0, ["YYYYY", 5], 0, "year"),
    I(0, ["YYYYYY", 6, !0], 0, "year"),
    F("year", "y"),
    G("year", 1),
    z("Y", sr),
    z("YY", Bi, zi),
    z("YYYY", er, qi),
    z("YYYYY", tr, Ji),
    z("YYYYYY", tr, Ji),
    B(["YYYYY", "YYYYYY"], dr),
    B("YYYY",
    function(t, n) {
        n[dr] = 2 === t.length ? e.parseTwoDigitYear(t) : v(t)
    }),
    B("YY",
    function(t, n) {
        n[dr] = e.parseTwoDigitYear(t)
    }),
    B("Y",
    function(e, t) {
        t[dr] = parseInt(e, 10)
    }),
    e.parseTwoDigitYear = function(e) {
        return v(e) + (v(e) > 68 ? 1900 : 2e3)
    };
    var wr, vr = nt("FullYear", !0);
    wr = Array.prototype.indexOf ? Array.prototype.indexOf: function(e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return - 1
    },
    I("M", ["MM", 2], "Mo",
    function() {
        return this.month() + 1
    }),
    I("MMM", 0, 0,
    function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    I("MMMM", 0, 0,
    function(e) {
        return this.localeData().months(this, e)
    }),
    F("month", "M"),
    G("month", 8),
    z("M", Bi),
    z("MM", Bi, zi),
    z("MMM",
    function(e, t) {
        return t.monthsShortRegex(e)
    }),
    z("MMMM",
    function(e, t) {
        return t.monthsRegex(e)
    }),
    B(["M", "MM"],
    function(e, t) {
        t[hr] = v(e) - 1
    }),
    B(["MMM", "MMMM"],
    function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[hr] = i: f(n).invalidMonth = e
    });
    var Mr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Sr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    kr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Dr = or,
    Yr = or;
    I("w", ["ww", 2], "wo", "week"),
    I("W", ["WW", 2], "Wo", "isoWeek"),
    F("week", "w"),
    F("isoWeek", "W"),
    G("week", 5),
    G("isoWeek", 5),
    z("w", Bi),
    z("ww", Bi, zi),
    z("W", Bi),
    z("WW", Bi, zi),
    Q(["w", "ww", "W", "WW"],
    function(e, t, n, s) {
        t[s.substr(0, 1)] = v(e)
    });
    var Or = {
        dow: 0,
        doy: 6
    };
    I("d", 0, "do", "day"),
    I("dd", 0, 0,
    function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    I("ddd", 0, 0,
    function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    I("dddd", 0, 0,
    function(e) {
        return this.localeData().weekdays(this, e)
    }),
    I("e", 0, 0, "weekday"),
    I("E", 0, 0, "isoWeekday"),
    F("day", "d"),
    F("weekday", "e"),
    F("isoWeekday", "E"),
    G("day", 11),
    G("weekday", 11),
    G("isoWeekday", 11),
    z("d", Bi),
    z("e", Bi),
    z("E", Bi),
    z("dd",
    function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    z("ddd",
    function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    z("dddd",
    function(e, t) {
        return t.weekdaysRegex(e)
    }),
    Q(["dd", "ddd", "dddd"],
    function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i: f(n).invalidWeekday = e
    }),
    Q(["d", "e", "E"],
    function(e, t, n, s) {
        t[s] = v(e)
    });
    var Tr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    xr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    br = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Pr = or,
    Wr = or,
    Hr = or;
    I("H", ["HH", 2], 0, "hour"),
    I("h", ["hh", 2], 0, Nt),
    I("k", ["kk", 2], 0, Zt),
    I("hmm", 0, 0,
    function() {
        return "" + Nt.apply(this) + E(this.minutes(), 2)
    }),
    I("hmmss", 0, 0,
    function() {
        return "" + Nt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
    }),
    I("Hmm", 0, 0,
    function() {
        return "" + this.hours() + E(this.minutes(), 2)
    }),
    I("Hmmss", 0, 0,
    function() {
        return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
    }),
    zt("a", !0),
    zt("A", !1),
    F("hour", "h"),
    G("hour", 13),
    z("a", $t),
    z("A", $t),
    z("H", Bi),
    z("h", Bi),
    z("k", Bi),
    z("HH", Bi, zi),
    z("hh", Bi, zi),
    z("kk", Bi, zi),
    z("hmm", Qi),
    z("hmmss", Xi),
    z("Hmm", Qi),
    z("Hmmss", Xi),
    B(["H", "HH"], fr),
    B(["k", "kk"],
    function(e, t) {
        var n = v(e);
        t[fr] = 24 === n ? 0 : n
    }),
    B(["a", "A"],
    function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    B(["h", "hh"],
    function(e, t, n) {
        t[fr] = v(e),
        f(n).bigHour = !0
    }),
    B("hmm",
    function(e, t, n) {
        var s = e.length - 2;
        t[fr] = v(e.substr(0, s)),
        t[mr] = v(e.substr(s)),
        f(n).bigHour = !0
    }),
    B("hmmss",
    function(e, t, n) {
        var s = e.length - 4,
        i = e.length - 2;
        t[fr] = v(e.substr(0, s)),
        t[mr] = v(e.substr(s, 2)),
        t[_r] = v(e.substr(i)),
        f(n).bigHour = !0
    }),
    B("Hmm",
    function(e, t) {
        var n = e.length - 2;
        t[fr] = v(e.substr(0, n)),
        t[mr] = v(e.substr(n))
    }),
    B("Hmmss",
    function(e, t) {
        var n = e.length - 4,
        s = e.length - 2;
        t[fr] = v(e.substr(0, n)),
        t[mr] = v(e.substr(n, 2)),
        t[_r] = v(e.substr(s))
    });
    var Rr, Cr = /[ap]\.?m?\.?/i,
    Fr = nt("Hours", !0),
    Lr = {
        calendar: Ri,
        longDateFormat: Ci,
        invalidDate: Fi,
        ordinal: Li,
        dayOfMonthOrdinalParse: Ui,
        relativeTime: Gi,
        months: Sr,
        monthsShort: kr,
        week: Or,
        weekdays: Tr,
        weekdaysMin: br,
        weekdaysShort: xr,
        meridiemParse: Cr
    },
    Ur = {},
    Gr = {},
    Vr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Er = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Ir = /Z|[+-]\d\d(?::?\d\d)?/,
    Ar = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
    jr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
    Nr = /^\/?Date\((\-?\d+)/i,
    Zr = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    zr = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    e.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC": ""))
    }),
    e.ISO_8601 = function() {},
    e.RFC_2822 = function() {};
    var $r = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
        var e = On.apply(null, arguments);
        return this.isValid() && e.isValid() ? this > e ? this: e: _()
    }),
    qr = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
        var e = On.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this: e: _()
    }),
    Jr = function() {
        return Date.now ? Date.now() : +new Date
    },
    Br = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Ln("Z", ":"),
    Ln("ZZ", ""),
    z("Z", rr),
    z("ZZ", rr),
    B(["Z", "ZZ"],
    function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Un(rr, e)
    });
    var Qr = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {};
    var Xr = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Kr = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    Qn.fn = Rn.prototype,
    Qn.invalid = Hn;
    var ea = ts(1, "add"),
    ta = ts( - 1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var na = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    I(0, ["gg", 2], 0,
    function() {
        return this.weekYear() % 100
    }),
    I(0, ["GG", 2], 0,
    function() {
        return this.isoWeekYear() % 100
    }),
    Ls("gggg", "weekYear"),
    Ls("ggggg", "weekYear"),
    Ls("GGGG", "isoWeekYear"),
    Ls("GGGGG", "isoWeekYear"),
    F("weekYear", "gg"),
    F("isoWeekYear", "GG"),
    G("weekYear", 1),
    G("isoWeekYear", 1),
    z("G", sr),
    z("g", sr),
    z("GG", Bi, zi),
    z("gg", Bi, zi),
    z("GGGG", er, qi),
    z("gggg", er, qi),
    z("GGGGG", tr, Ji),
    z("ggggg", tr, Ji),
    Q(["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, s) {
        t[s.substr(0, 2)] = v(e)
    }),
    Q(["gg", "GG"],
    function(t, n, s, i) {
        n[i] = e.parseTwoDigitYear(t)
    }),
    I("Q", 0, "Qo", "quarter"),
    F("quarter", "Q"),
    G("quarter", 7),
    z("Q", Zi),
    B("Q",
    function(e, t) {
        t[hr] = 3 * (v(e) - 1)
    }),
    I("D", ["DD", 2], "Do", "date"),
    F("date", "D"),
    G("date", 9),
    z("D", Bi),
    z("DD", Bi, zi),
    z("Do",
    function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse: t._dayOfMonthOrdinalParseLenient
    }),
    B(["D", "DD"], cr),
    B("Do",
    function(e, t) {
        t[cr] = v(e.match(Bi)[0])
    });
    var sa = nt("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    F("dayOfYear", "DDD"),
    G("dayOfYear", 4),
    z("DDD", Ki),
    z("DDDD", $i),
    B(["DDD", "DDDD"],
    function(e, t, n) {
        n._dayOfYear = v(e)
    }),
    I("m", ["mm", 2], 0, "minute"),
    F("minute", "m"),
    G("minute", 14),
    z("m", Bi),
    z("mm", Bi, zi),
    B(["m", "mm"], mr);
    var ia = nt("Minutes", !1);
    I("s", ["ss", 2], 0, "second"),
    F("second", "s"),
    G("second", 15),
    z("s", Bi),
    z("ss", Bi, zi),
    B(["s", "ss"], _r);
    var ra = nt("Seconds", !1);
    I("S", 0, 0,
    function() {
        return~~ (this.millisecond() / 100)
    }),
    I(0, ["SS", 2], 0,
    function() {
        return~~ (this.millisecond() / 10)
    }),
    I(0, ["SSS", 3], 0, "millisecond"),
    I(0, ["SSSS", 4], 0,
    function() {
        return 10 * this.millisecond()
    }),
    I(0, ["SSSSS", 5], 0,
    function() {
        return 100 * this.millisecond()
    }),
    I(0, ["SSSSSS", 6], 0,
    function() {
        return 1e3 * this.millisecond()
    }),
    I(0, ["SSSSSSS", 7], 0,
    function() {
        return 1e4 * this.millisecond()
    }),
    I(0, ["SSSSSSSS", 8], 0,
    function() {
        return 1e5 * this.millisecond()
    }),
    I(0, ["SSSSSSSSS", 9], 0,
    function() {
        return 1e6 * this.millisecond()
    }),
    F("millisecond", "ms"),
    G("millisecond", 16),
    z("S", Ki, Zi),
    z("SS", Ki, zi),
    z("SSS", Ki, $i);
    var aa;
    for (aa = "SSSS"; aa.length <= 9; aa += "S") z(aa, nr);
    for (aa = "S"; aa.length <= 9; aa += "S") B(aa, Zs);
    var oa = nt("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"),
    I("zz", 0, 0, "zoneName");
    var ua = g.prototype;
    ua.add = ea,
    ua.calendar = is,
    ua.clone = rs,
    ua.diff = cs,
    ua.endOf = Ys,
    ua.format = gs,
    ua.from = ps,
    ua.fromNow = ws,
    ua.to = vs,
    ua.toNow = Ms,
    ua.get = rt,
    ua.invalidAt = Cs,
    ua.isAfter = as,
    ua.isBefore = os,
    ua.isBetween = us,
    ua.isSame = ls,
    ua.isSameOrAfter = ds,
    ua.isSameOrBefore = hs,
    ua.isValid = Hs,
    ua.lang = na,
    ua.locale = Ss,
    ua.localeData = ks,
    ua.max = qr,
    ua.min = $r,
    ua.parsingFlags = Rs,
    ua.set = at,
    ua.startOf = Ds,
    ua.subtract = ta,
    ua.toArray = bs,
    ua.toObject = Ps,
    ua.toDate = xs,
    ua.toISOString = _s,
    ua.inspect = ys,
    ua.toJSON = Ws,
    ua.toString = ms,
    ua.unix = Ts,
    ua.valueOf = Os,
    ua.creationData = Fs,
    ua.year = vr,
    ua.isLeapYear = tt,
    ua.weekYear = Us,
    ua.isoWeekYear = Gs,
    ua.quarter = ua.quarters = js,
    ua.month = mt,
    ua.daysInMonth = _t,
    ua.week = ua.weeks = xt,
    ua.isoWeek = ua.isoWeeks = bt,
    ua.weeksInYear = Es,
    ua.isoWeeksInYear = Vs,
    ua.date = sa,
    ua.day = ua.days = Ut,
    ua.weekday = Gt,
    ua.isoWeekday = Vt,
    ua.dayOfYear = Ns,
    ua.hour = ua.hours = Fr,
    ua.minute = ua.minutes = ia,
    ua.second = ua.seconds = ra,
    ua.millisecond = ua.milliseconds = oa,
    ua.utcOffset = En,
    ua.utc = An,
    ua.local = jn,
    ua.parseZone = Nn,
    ua.hasAlignedHourOffset = Zn,
    ua.isDST = zn,
    ua.isLocal = qn,
    ua.isUtcOffset = Jn,
    ua.isUtc = Bn,
    ua.isUTC = Bn,
    ua.zoneAbbr = zs,
    ua.zoneName = $s,
    ua.dates = k("dates accessor is deprecated. Use date instead.", sa),
    ua.months = k("months accessor is deprecated. Use month instead", mt),
    ua.years = k("years accessor is deprecated. Use year instead", vr),
    ua.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", In),
    ua.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", $n);
    var la = x.prototype;
    la.calendar = b,
    la.longDateFormat = P,
    la.invalidDate = W,
    la.ordinal = H,
    la.preparse = Bs,
    la.postformat = Bs,
    la.relativeTime = R,
    la.pastFuture = C,
    la.set = O,
    la.months = lt,
    la.monthsShort = dt,
    la.monthsParse = ct,
    la.monthsRegex = gt,
    la.monthsShortRegex = yt,
    la.week = Yt,
    la.firstDayOfYear = Tt,
    la.firstDayOfWeek = Ot,
    la.weekdays = Ht,
    la.weekdaysMin = Ct,
    la.weekdaysShort = Rt,
    la.weekdaysParse = Lt,
    la.weekdaysRegex = Et,
    la.weekdaysShortRegex = It,
    la.weekdaysMinRegex = At,
    la.isPM = qt,
    la.meridiem = Jt,
    Kt("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10,
            n = 1 === v(e % 100 / 10) ? "th": 1 === t ? "st": 2 === t ? "nd": 3 === t ? "rd": "th";
            return e + n
        }
    }),
    e.lang = k("moment.lang is deprecated. Use moment.locale instead.", Kt),
    e.langData = k("moment.langData is deprecated. Use moment.localeData instead.", nn);
    var da = Math.abs,
    ha = _i("ms"),
    ca = _i("s"),
    fa = _i("m"),
    ma = _i("h"),
    _a = _i("d"),
    ya = _i("w"),
    ga = _i("M"),
    pa = _i("y"),
    wa = pi("milliseconds"),
    va = pi("seconds"),
    Ma = pi("minutes"),
    Sa = pi("hours"),
    ka = pi("days"),
    Da = pi("months"),
    Ya = pi("years"),
    Oa = Math.round,
    Ta = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    },
    xa = Math.abs,
    ba = Rn.prototype;
    return ba.isValid = Wn,
    ba.abs = ri,
    ba.add = oi,
    ba.subtract = ui,
    ba.as = fi,
    ba.asMilliseconds = ha,
    ba.asSeconds = ca,
    ba.asMinutes = fa,
    ba.asHours = ma,
    ba.asDays = _a,
    ba.asWeeks = ya,
    ba.asMonths = ga,
    ba.asYears = pa,
    ba.valueOf = mi,
    ba._bubble = di,
    ba.clone = yi,
    ba.get = gi,
    ba.milliseconds = wa,
    ba.seconds = va,
    ba.minutes = Ma,
    ba.hours = Sa,
    ba.days = ka,
    ba.weeks = wi,
    ba.months = Da,
    ba.years = Ya,
    ba.humanize = Di,
    ba.toISOString = Oi,
    ba.toString = Oi,
    ba.toJSON = Oi,
    ba.locale = Ss,
    ba.localeData = ks,
    ba.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Oi),
    ba.lang = na,
    I("X", 0, 0, "unix"),
    I("x", 0, 0, "valueOf"),
    z("x", sr),
    z("X", ar),
    B("X",
    function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    B("x",
    function(e, t, n) {
        n._d = new Date(v(e))
    }),
    e.version = "2.23.0",
    t(On),
    e.fn = ua,
    e.min = xn,
    e.max = bn,
    e.now = Jr,
    e.utc = h,
    e.unix = qs,
    e.months = ei,
    e.isDate = o,
    e.locale = Kt,
    e.invalid = _,
    e.duration = Qn,
    e.isMoment = p,
    e.weekdays = ni,
    e.parseZone = Js,
    e.localeData = nn,
    e.isDuration = Cn,
    e.monthsShort = ti,
    e.weekdaysMin = ii,
    e.defineLocale = en,
    e.updateLocale = tn,
    e.locales = sn,
    e.weekdaysShort = si,
    e.normalizeUnits = L,
    e.relativeTimeRounding = Si,
    e.relativeTimeThreshold = ki,
    e.calendarFormat = ss,
    e.prototype = ua,
    e.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    e
});