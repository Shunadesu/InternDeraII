/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function r() {
    return Ce || ("undefined" != typeof window && (Ce = window.gsap) && Ce.registerPlugin && Ce);
  }
  function z(e, t) {
    return ~Le.indexOf(e) && Le[Le.indexOf(e) + 1][t];
  }
  function A(e) {
    return !!~t.indexOf(e);
  }
  function B(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !1 !== n, capture: !!o });
  }
  function C(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function F() {
    return (De && De.isPressed) || Ie.cache++;
  }
  function G(r, n) {
    function dd(e) {
      if (e || 0 === e) {
        o && (Se.history.scrollRestoration = "manual");
        var t = De && De.isPressed;
        (e = dd.v = Math.round(e) || (De && De.iOS ? 1 : 0)), r(e), (dd.cacheID = Ie.cache), t && i("ss", e);
      } else (n || Ie.cache !== dd.cacheID || i("ref")) && ((dd.cacheID = Ie.cache), (dd.v = r()));
      return dd.v + dd.offset;
    }
    return (dd.offset = 0), r && dd;
  }
  function J(e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || Ce.utils.toArray)(e)[0] ||
      ("string" == typeof e && !1 !== Ce.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    );
  }
  function K(t, e) {
    var r = e.s,
      n = e.sc;
    A(t) && (t = ke.scrollingElement || Pe);
    var o = Ie.indexOf(t),
      i = n === Fe.sc ? 1 : 2;
    ~o || (o = Ie.push(t) - 1), Ie[o + i] || B(t, "scroll", F);
    var a = Ie[o + i],
      s =
        a ||
        (Ie[o + i] =
          G(z(t, r), !0) ||
          (A(t)
            ? n
            : G(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (s.target = t), a || (s.smooth = "smooth" === Ce.getProperty(t, "scrollBehavior")), s;
  }
  function L(e, t, o) {
    function Cd(e, t) {
      var r = ze();
      t || n < r - s ? ((a = i), (i = e), (l = s), (s = r)) : o ? (i += e) : (i = a + ((e - a) / (r - l)) * (s - l));
    }
    var i = e,
      a = e,
      s = ze(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: Cd,
      reset: function reset() {
        (a = i = o ? 0 : i), (l = s = 0);
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = ze();
        return (
          (!e && 0 !== e) || e === i || Cd(e), s === l || c < n - l ? 0 : ((i + (o ? r : -r)) / ((o ? n : s) - t)) * 1e3
        );
      },
    };
  }
  function M(e, t) {
    return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function N(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function O() {
    (Ae = Ce.core.globals().ScrollTrigger) &&
      Ae.core &&
      (function _integrate() {
        var e = Ae.core,
          r = e.bridge || {},
          t = e._scrollers,
          n = e._proxies;
        t.push.apply(t, Ie),
          n.push.apply(n, Le),
          (Ie = t),
          (Le = n),
          (i = function _bridge(e, t) {
            return r[e](t);
          });
      })();
  }
  function P(e) {
    return (
      (Ce = e || r()),
      !Te &&
        Ce &&
        "undefined" != typeof document &&
        document.body &&
        ((Se = window),
        (Pe = (ke = document).documentElement),
        (Me = ke.body),
        (t = [Se, ke, Pe, Me]),
        Ce.utils.clamp,
        (Be = Ce.core.context || function () {}),
        (Oe = "onpointerenter" in Me ? "pointer" : "mouse"),
        (Ee = k.isTouch =
          Se.matchMedia && Se.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Se || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints
            ? 2
            : 0),
        (Re = k.eventTypes =
          (
            "ontouchstart" in Pe
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Pe
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (o = 0);
        }, 500),
        O(),
        (Te = 1)),
      Te
    );
  }
  var Ce,
    Te,
    Se,
    ke,
    Pe,
    Me,
    Ee,
    Oe,
    Ae,
    t,
    De,
    Re,
    Be,
    o = 1,
    qe = [],
    Ie = [],
    Le = [],
    ze = Date.now,
    i = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    a = "scrollTop",
    Ye = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: G(function (e) {
        return arguments.length ? Se.scrollTo(e, Fe.sc()) : Se.pageXOffset || ke[n] || Pe[n] || Me[n] || 0;
      }),
    },
    Fe = {
      s: a,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ye,
      sc: G(function (e) {
        return arguments.length ? Se.scrollTo(Ye.sc(), e) : Se.pageYOffset || ke[a] || Pe[a] || Me[a] || 0;
      }),
    };
  (Ye.op = Fe), (Ie.cache = 0);
  var k =
    ((Observer.prototype.init = function init(e) {
      Te || P(Ce) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || O();
      var o = e.tolerance,
        a = e.dragMinimum,
        t = e.type,
        i = e.target,
        r = e.lineHeight,
        n = e.debounce,
        s = e.preventDefault,
        l = e.onStop,
        c = e.onStopDelay,
        u = e.ignore,
        f = e.wheelSpeed,
        d = e.event,
        p = e.onDragStart,
        g = e.onDragEnd,
        h = e.onDrag,
        v = e.onPress,
        b = e.onRelease,
        m = e.onRight,
        y = e.onLeft,
        x = e.onUp,
        w = e.onDown,
        _ = e.onChangeX,
        T = e.onChangeY,
        S = e.onChange,
        k = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        R = e.onHoverEnd,
        q = e.onMove,
        I = e.ignoreCheck,
        z = e.isNormalizer,
        Y = e.onGestureStart,
        H = e.onGestureEnd,
        X = e.onWheel,
        W = e.onEnable,
        V = e.onDisable,
        U = e.onClick,
        j = e.scrollSpeed,
        G = e.capture,
        Q = e.allowClicks,
        Z = e.lockAxis,
        $ = e.onLockAxis;
      function cf() {
        return (xe = ze());
      }
      function df(e, t) {
        return (
          ((se.event = e) && u && ~u.indexOf(e.target)) || (t && he && "touch" !== e.pointerType) || (I && I(e, t))
        );
      }
      function ff() {
        var e = (se.deltaX = N(me)),
          t = (se.deltaY = N(ye)),
          r = Math.abs(e) >= o,
          n = Math.abs(t) >= o;
        S && (r || n) && S(se, e, t, me, ye),
          r &&
            (m && 0 < se.deltaX && m(se),
            y && se.deltaX < 0 && y(se),
            _ && _(se),
            k && se.deltaX < 0 != le < 0 && k(se),
            (le = se.deltaX),
            (me[0] = me[1] = me[2] = 0)),
          n &&
            (w && 0 < se.deltaY && w(se),
            x && se.deltaY < 0 && x(se),
            T && T(se),
            E && se.deltaY < 0 != ce < 0 && E(se),
            (ce = se.deltaY),
            (ye[0] = ye[1] = ye[2] = 0)),
          (ne || re) && (q && q(se), re && (h(se), (re = !1)), (ne = !1)),
          ie && !(ie = !1) && $ && $(se),
          oe && (X(se), (oe = !1)),
          (ee = 0);
      }
      function gf(e, t, r) {
        (me[r] += e),
          (ye[r] += t),
          se._vx.update(e),
          se._vy.update(t),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function hf(e, t) {
        Z && !ae && ((se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y"), (ie = !0)),
          "y" !== ae && ((me[2] += e), se._vx.update(e, !0)),
          "x" !== ae && ((ye[2] += t), se._vy.update(t, !0)),
          n ? (ee = ee || requestAnimationFrame(ff)) : ff();
      }
      function jf(e) {
        if (!df(e, 1)) {
          var t = (e = M(e, s)).clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y,
            i = se.isDragging;
          (se.x = t),
            (se.y = r),
            (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) &&
              (h && (re = !0), i || (se.isDragging = !0), hf(n, o), i || (p && p(se)));
        }
      }
      function mf(e) {
        return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && Y(e, se.isDragging);
      }
      function nf() {
        return (se.isGesturing = !1) || H(se);
      }
      function of(e) {
        if (!df(e)) {
          var t = fe(),
            r = de();
          gf((t - pe) * j, (r - ge) * j, 1), (pe = t), (ge = r), l && te.restart(!0);
        }
      }
      function pf(e) {
        if (!df(e)) {
          (e = M(e, s)), X && (oe = !0);
          var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Se.innerHeight : 1) * f;
          gf(e.deltaX * t, e.deltaY * t, 0), l && !z && te.restart(!0);
        }
      }
      function qf(e) {
        if (!df(e)) {
          var t = e.clientX,
            r = e.clientY,
            n = t - se.x,
            o = r - se.y;
          (se.x = t), (se.y = r), (ne = !0), l && te.restart(!0), (n || o) && hf(n, o);
        }
      }
      function rf(e) {
        (se.event = e), D(se);
      }
      function sf(e) {
        (se.event = e), R(se);
      }
      function tf(e) {
        return df(e) || (M(e, s) && U(se));
      }
      (this.target = i = J(i) || Pe),
        (this.vars = e),
        (u = u && Ce.utils.toArray(u)),
        (o = o || 1e-9),
        (a = a || 0),
        (f = f || 1),
        (j = j || 1),
        (t = t || "wheel,touch,pointer"),
        (n = !1 !== n),
        (r = r || parseFloat(Se.getComputedStyle(Me).lineHeight) || 22);
      var ee,
        te,
        re,
        ne,
        oe,
        ie,
        ae,
        se = this,
        le = 0,
        ce = 0,
        ue = e.passive || !s,
        fe = K(i, Ye),
        de = K(i, Fe),
        pe = fe(),
        ge = de(),
        he = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Re[0],
        ve = A(i),
        be = i.ownerDocument || ke,
        me = [0, 0, 0],
        ye = [0, 0, 0],
        xe = 0,
        we = (se.onPress = function (e) {
          df(e, 1) ||
            (e && e.button) ||
            ((se.axis = ae = null),
            te.pause(),
            (se.isPressed = !0),
            (e = M(e)),
            (le = ce = 0),
            (se.startX = se.x = e.clientX),
            (se.startY = se.y = e.clientY),
            se._vx.reset(),
            se._vy.reset(),
            B(z ? i : be, Re[1], jf, ue, !0),
            (se.deltaX = se.deltaY = 0),
            v && v(se));
        }),
        _e = (se.onRelease = function (t) {
          if (!df(t, 1)) {
            C(z ? i : be, Re[1], jf, !0);
            var e = !isNaN(se.y - se.startY),
              r = se.isDragging,
              n = r && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
              o = M(t);
            !n &&
              e &&
              (se._vx.reset(),
              se._vy.reset(),
              s &&
                Q &&
                Ce.delayedCall(0.08, function () {
                  if (300 < ze() - xe && !t.defaultPrevented)
                    if (t.target.click) t.target.click();
                    else if (be.createEvent) {
                      var e = be.createEvent("MouseEvents");
                      e.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Se,
                        1,
                        o.screenX,
                        o.screenY,
                        o.clientX,
                        o.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        t.target.dispatchEvent(e);
                    }
                })),
              (se.isDragging = se.isGesturing = se.isPressed = !1),
              l && r && !z && te.restart(!0),
              g && r && g(se),
              b && b(se, n);
          }
        });
      (te = se._dc =
        Ce.delayedCall(c || 0.25, function onStopFunc() {
          se._vx.reset(), se._vy.reset(), te.pause(), l && l(se);
        }).pause()),
        (se.deltaX = se.deltaY = 0),
        (se._vx = L(0, 50, !0)),
        (se._vy = L(0, 50, !0)),
        (se.scrollX = fe),
        (se.scrollY = de),
        (se.isDragging = se.isGesturing = se.isPressed = !1),
        Be(this),
        (se.enable = function (e) {
          return (
            se.isEnabled ||
              (B(ve ? be : i, "scroll", F),
              0 <= t.indexOf("scroll") && B(ve ? be : i, "scroll", of, ue, G),
              0 <= t.indexOf("wheel") && B(i, "wheel", pf, ue, G),
              ((0 <= t.indexOf("touch") && Ee) || 0 <= t.indexOf("pointer")) &&
                (B(i, Re[0], we, ue, G),
                B(be, Re[2], _e),
                B(be, Re[3], _e),
                Q && B(i, "click", cf, !0, !0),
                U && B(i, "click", tf),
                Y && B(be, "gesturestart", mf),
                H && B(be, "gestureend", nf),
                D && B(i, Oe + "enter", rf),
                R && B(i, Oe + "leave", sf),
                q && B(i, Oe + "move", qf)),
              (se.isEnabled = !0),
              e && e.type && we(e),
              W && W(se)),
            se
          );
        }),
        (se.disable = function () {
          se.isEnabled &&
            (qe.filter(function (e) {
              return e !== se && A(e.target);
            }).length || C(ve ? be : i, "scroll", F),
            se.isPressed && (se._vx.reset(), se._vy.reset(), C(z ? i : be, Re[1], jf, !0)),
            C(ve ? be : i, "scroll", of, G),
            C(i, "wheel", pf, G),
            C(i, Re[0], we, G),
            C(be, Re[2], _e),
            C(be, Re[3], _e),
            C(i, "click", cf, !0),
            C(i, "click", tf),
            C(be, "gesturestart", mf),
            C(be, "gestureend", nf),
            C(i, Oe + "enter", rf),
            C(i, Oe + "leave", sf),
            C(i, Oe + "move", qf),
            (se.isEnabled = se.isPressed = se.isDragging = !1),
            V && V(se));
        }),
        (se.kill = se.revert =
          function () {
            se.disable();
            var e = qe.indexOf(se);
            0 <= e && qe.splice(e, 1), De === se && (De = 0);
          }),
        qe.push(se),
        z && A(i) && (De = se),
        se.enable(d);
    }),
    (function _createClass(e, t, r) {
      return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
    })(Observer, [
      {
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        },
      },
    ]),
    Observer);
  function Observer(e) {
    this.init(e);
  }
  (k.version = "3.12.5"),
    (k.create = function (e) {
      return new k(e);
    }),
    (k.register = P),
    (k.getAll = function () {
      return qe.slice();
    }),
    (k.getById = function (t) {
      return qe.filter(function (e) {
        return e.vars.id === t;
      })[0];
    }),
    r() && Ce.registerPlugin(k);
  function Ca(e, t, r) {
    var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
    return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e;
  }
  function Da(e, t) {
    return !t || (ct(e) && "clamp(" === e.substr(0, 6)) ? e : "clamp(" + e + ")";
  }
  function Fa() {
    return (Ge = 1);
  }
  function Ga() {
    return (Ge = 0);
  }
  function Ha(e) {
    return e;
  }
  function Ia(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function Ja() {
    return "undefined" != typeof window;
  }
  function Ka() {
    return He || (Ja() && (He = window.gsap) && He.registerPlugin && He);
  }
  function La(e) {
    return !!~l.indexOf(e);
  }
  function Ma(e) {
    return ("Height" === e ? T : Ne["inner" + e]) || Je["client" + e] || We["client" + e];
  }
  function Na(e) {
    return (
      z(e, "getBoundingClientRect") ||
      (La(e)
        ? function () {
            return (Ot.width = Ne.innerWidth), (Ot.height = T), Ot;
          }
        : function () {
            return wt(e);
          })
    );
  }
  function Qa(e, t) {
    var r = t.s,
      n = t.d2,
      o = t.d,
      i = t.a;
    return Math.max(
      0,
      (r = "scroll" + n) && (i = z(e, r)) ? i() - Na(e)()[o] : La(e) ? (Je[r] || We[r]) - Ma(n) : e[r] - e["offset" + n]
    );
  }
  function Ra(e, t) {
    for (var r = 0; r < g.length; r += 3) (t && !~t.indexOf(g[r + 1])) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ta(e) {
    return "function" == typeof e;
  }
  function Ua(e) {
    return "number" == typeof e;
  }
  function Va(e) {
    return "object" == typeof e;
  }
  function Wa(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function Xa(e, t) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e);
          })
        : t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function mb(e) {
    return Ne.getComputedStyle(e);
  }
  function ob(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function qb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function rb(e) {
    var t,
      r = [],
      n = e.labels,
      o = e.duration();
    for (t in n) r.push(n[t] / o);
    return r;
  }
  function tb(o) {
    var i = He.utils.snap(o),
      a =
        Array.isArray(o) &&
        o.slice(0).sort(function (e, t) {
          return e - t;
        });
    return a
      ? function (e, t, r) {
          var n;
          if ((void 0 === r && (r = 0.001), !t)) return i(e);
          if (0 < t) {
            for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
            return a[n - 1];
          }
          for (n = a.length, e += r; n--; ) if (a[n] <= e) return a[n];
          return a[0];
        }
      : function (e, t, r) {
          void 0 === r && (r = 0.001);
          var n = i(e);
          return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o);
        };
  }
  function vb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function wb(e, t, r, n, o) {
    return e.addEventListener(t, r, { passive: !n, capture: !!o });
  }
  function xb(e, t, r, n) {
    return e.removeEventListener(t, r, !!n);
  }
  function yb(e, t, r) {
    (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
  }
  function Cb(e, t) {
    if (ct(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e = n + (e in H ? H[e] * t : ~e.indexOf("%") ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
    }
    return e;
  }
  function Db(e, t, r, n, o, i, a, s) {
    var l = o.startColor,
      c = o.endColor,
      u = o.fontSize,
      f = o.indent,
      d = o.fontWeight,
      p = Xe.createElement("div"),
      g = La(r) || "fixed" === z(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      v = g ? We : r,
      b = -1 !== e.indexOf("start"),
      m = b ? l : c,
      y =
        "border-color:" +
        m +
        ";font-size:" +
        u +
        ";color:" +
        m +
        ";font-weight:" +
        d +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (y += "position:" + ((h || s) && g ? "fixed;" : "absolute;")),
      (!h && !s && g) || (y += (n === Fe ? q : I) + ":" + (i + parseFloat(f)) + "px;"),
      a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
      (p._isStart = b),
      p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
      (p.style.cssText = y),
      (p.innerText = t || 0 === t ? e + "-" + t : e),
      v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p),
      (p._offset = p["offset" + n.op.d2]),
      X(p, 0, n, b),
      p
    );
  }
  function Ib() {
    return 34 < at() - st && (D = D || requestAnimationFrame(Z));
  }
  function Jb() {
    (v && v.isPressed && !(v.startX > We.clientWidth)) ||
      (Ie.cache++, v ? (D = D || requestAnimationFrame(Z)) : Z(), st || U("scrollStart"), (st = at()));
  }
  function Kb() {
    (y = Ne.innerWidth), (m = Ne.innerHeight);
  }
  function Lb() {
    Ie.cache++,
      je ||
        h ||
        Xe.fullscreenElement ||
        Xe.webkitFullscreenElement ||
        (b && y === Ne.innerWidth && !(Math.abs(Ne.innerHeight - m) > 0.25 * Ne.innerHeight)) ||
        c.restart(!0);
  }
  function Ob() {
    return xb(ne, "scrollEnd", Ob) || Pt(!0);
  }
  function Rb(e) {
    for (var t = 0; t < j.length; t += 5)
      (!e || (j[t + 4] && j[t + 4].query === e)) &&
        ((j[t].style.cssText = j[t + 1]),
        j[t].getBBox && j[t].setAttribute("transform", j[t + 2] || ""),
        (j[t + 3].uncache = 1));
  }
  function Sb(e, t) {
    var r;
    for (Qe = 0; Qe < Tt.length; Qe++) !(r = Tt[Qe]) || (t && r._ctx !== t) || (e ? r.kill(1) : r.revert(!0, !0));
    (S = !0), t && Rb(t), t || U("revert");
  }
  function Tb(e, t) {
    Ie.cache++,
      (!t && rt) ||
        Ie.forEach(function (e) {
          return Ta(e) && e.cacheID++ && (e.rec = 0);
        }),
      ct(e) && (Ne.history.scrollRestoration = w = e);
  }
  function Yb() {
    We.appendChild(_), (T = (!v && _.offsetHeight) || Ne.innerHeight), We.removeChild(_);
  }
  function Zb(t) {
    return Ve(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(
      function (e) {
        return (e.style.display = t ? "none" : "block");
      }
    );
  }
  function gc(e, t, r, n) {
    if (!e._gsap.swappedIn) {
      for (var o, i = $.length, a = t.style, s = e.style; i--; ) a[(o = $[i])] = r[o];
      (a.position = "absolute" === r.position ? "absolute" : "relative"),
        "inline" === r.display && (a.display = "inline-block"),
        (s[I] = s[q] = "auto"),
        (a.flexBasis = r.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[ft] = qb(e, Ye) + xt),
        (a[dt] = qb(e, Fe) + xt),
        (a[bt] = s[mt] = s.top = s.left = "0"),
        Et(n),
        (s[ft] = s.maxWidth = r[ft]),
        (s[dt] = s.maxHeight = r[dt]),
        (s[bt] = r[bt]),
        e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  }
  function jc(e) {
    for (var t = ee.length, r = e.style, n = [], o = 0; o < t; o++) n.push(ee[o], r[ee[o]]);
    return (n.t = e), n;
  }
  function mc(e, t, r, n, o, i, a, s, l, c, u, f, d, p) {
    Ta(e) && (e = e(s)),
      ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Cb("0" + e.substr(3), r) : 0));
    var g,
      h,
      v,
      b = d ? d.time() : 0;
    if ((d && d.seek(0), isNaN(e) || (e = +e), Ua(e)))
      d && (e = He.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
    else {
      Ta(t) && (t = t(s));
      var m,
        y,
        x,
        w,
        _ = (e || "0").split(" ");
      (v = J(t, s) || We),
        ((m = wt(v) || {}) && (m.left || m.top)) ||
          "none" !== mb(v).display ||
          ((w = v.style.display),
          (v.style.display = "block"),
          (m = wt(v)),
          w ? (v.style.display = w) : v.style.removeProperty("display")),
        (y = Cb(_[0], m[n.d])),
        (x = Cb(_[1] || "0", r)),
        (e = m[n.p] - l[n.p] - c + y + o - x),
        a && X(a, x, n, r - x < 20 || (a._isStart && 20 < x)),
        (r -= r - x);
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), i)) {
      var C = e + r,
        T = i._isStart;
      (g = "scroll" + n.d2),
        X(i, C, n, (T && 20 < C) || (!T && (u ? Math.max(We[g], Je[g]) : i.parentNode[g]) <= C + 1)),
        u && ((l = wt(a)), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + xt));
    }
    return (
      d &&
        v &&
        ((g = wt(v)), d.seek(f), (h = wt(v)), (d._caScrollDist = g[n.p] - h[n.p]), (e = (e / d._caScrollDist) * f)),
      d && d.seek(b),
      d ? e : Math.round(e)
    );
  }
  function oc(e, t, r, n) {
    if (e.parentNode !== t) {
      var o,
        i,
        a = e.style;
      if (t === We) {
        for (o in ((e._stOrig = a.cssText), (i = mb(e))))
          +o || re.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
        (a.top = r), (a.left = n);
      } else a.cssText = e._stOrig;
      (He.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  }
  function pc(r, e, n) {
    var o = e,
      i = o;
    return function (e) {
      var t = Math.round(r());
      return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && ((e = t), n && n()), (i = o), (o = e);
    };
  }
  function qc(e, t, r) {
    var n = {};
    (n[t.p] = "+=" + r), He.set(e, n);
  }
  function rc(c, e) {
    function Ck(e, t, r, n, o) {
      var i = Ck.tween,
        a = t.onComplete,
        s = {};
      r = r || u();
      var l = pc(u, r, function () {
        i.kill(), (Ck.tween = 0);
      });
      return (
        (o = (n && o) || 0),
        (n = n || e - r),
        i && i.kill(),
        (t[f] = e),
        (t.inherit = !1),
        ((t.modifiers = s)[f] = function () {
          return l(r + n * i.ratio + o * i.ratio * i.ratio);
        }),
        (t.onUpdate = function () {
          Ie.cache++, Ck.tween && Z();
        }),
        (t.onComplete = function () {
          (Ck.tween = 0), a && a.call(i);
        }),
        (i = Ck.tween = He.to(c, t))
      );
    }
    var u = K(c, e),
      f = "_scroll" + e.p2;
    return (
      ((c[f] = u).wheelHandler = function () {
        return Ck.tween && Ck.tween.kill() && (Ck.tween = 0);
      }),
      wb(c, "wheel", u.wheelHandler),
      ne.isTouch && wb(c, "touchmove", u.wheelHandler),
      Ck
    );
  }
  var He,
    s,
    Ne,
    Xe,
    Je,
    We,
    l,
    c,
    Ve,
    Ue,
    Ke,
    u,
    je,
    Ge,
    f,
    Qe,
    d,
    p,
    g,
    Ze,
    $e,
    h,
    v,
    b,
    m,
    y,
    E,
    x,
    w,
    _,
    T,
    S,
    et,
    tt,
    D,
    rt,
    nt,
    ot,
    it = 1,
    at = Date.now,
    R = at(),
    st = 0,
    lt = 0,
    ct = function _isString(e) {
      return "string" == typeof e;
    },
    ut = Math.abs,
    q = "right",
    I = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    vt = "Bottom",
    bt = "padding",
    mt = "margin",
    yt = "Width",
    Y = "Height",
    xt = "px",
    wt = function _getBounds(e, t) {
      var r =
          t &&
          "matrix(1, 0, 0, 1, 0, 0)" !== mb(e)[f] &&
          He.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    _t = { startColor: "green", endColor: "red", indent: 0, fontSize: "16px", fontWeight: "normal" },
    Ct = { toggleActions: "play", anticipatePin: 0 },
    H = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    X = function _positionMarker(e, t, r, n) {
      var o = { display: "block" },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      (e._isFlipped = n),
        (o[r.a + "Percent"] = n ? -100 : 0),
        (o[r.a] = n ? "1px" : 0),
        (o["border" + i + yt] = 1),
        (o["border" + a + yt] = 0),
        (o[r.p] = t + "px"),
        He.set(e, o);
    },
    Tt = [],
    St = {},
    W = {},
    V = [],
    U = function _dispatch(e) {
      return (
        (W[e] &&
          W[e].map(function (e) {
            return e();
          })) ||
        V
      );
    },
    j = [],
    kt = 0,
    Pt = function _refreshAll(e, t) {
      if (!st || e || S) {
        Yb(),
          (rt = ne.isRefreshing = !0),
          Ie.forEach(function (e) {
            return Ta(e) && ++e.cacheID && (e.rec = e());
          });
        var r = U("refreshInit");
        Ze && ne.sort(),
          t || Sb(),
          Ie.forEach(function (e) {
            Ta(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
          }),
          Tt.slice(0).forEach(function (e) {
            return e.refresh();
          }),
          (S = !1),
          Tt.forEach(function (e) {
            if (e._subPinOffset && e.pin) {
              var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
            }
          }),
          (et = 1),
          Zb(!0),
          Tt.forEach(function (e) {
            var t = Qa(e.scroller, e._dir),
              r = "max" === e.vars.end || (e._endClamp && e.end > t),
              n = e._startClamp && e.start >= t;
            (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0);
          }),
          Zb(!1),
          (et = 0),
          r.forEach(function (e) {
            return e && e.render && e.render(-1);
          }),
          Ie.forEach(function (e) {
            Ta(e) &&
              (e.smooth &&
                requestAnimationFrame(function () {
                  return (e.target.style.scrollBehavior = "smooth");
                }),
              e.rec && e(e.rec));
          }),
          Tb(w, 1),
          c.pause(),
          kt++,
          Z((rt = 2)),
          Tt.forEach(function (e) {
            return Ta(e.vars.onRefresh) && e.vars.onRefresh(e);
          }),
          (rt = ne.isRefreshing = !1),
          U("refresh");
      } else wb(ne, "scrollEnd", Ob);
    },
    Q = 0,
    Mt = 1,
    Z = function _updateAll(e) {
      if (2 === e || (!rt && !S)) {
        (ne.isUpdating = !0), ot && ot.update(0);
        var t = Tt.length,
          r = at(),
          n = 50 <= r - R,
          o = t && Tt[0].scroll();
        if (
          ((Mt = o < Q ? -1 : 1),
          rt || (Q = o),
          n && (st && !Ge && 200 < r - st && ((st = 0), U("scrollEnd")), (Ke = R), (R = r)),
          Mt < 0)
        ) {
          for (Qe = t; 0 < Qe--; ) Tt[Qe] && Tt[Qe].update(0, n);
          Mt = 1;
        } else for (Qe = 0; Qe < t; Qe++) Tt[Qe] && Tt[Qe].update(0, n);
        ne.isUpdating = !1;
      }
      D = 0;
    },
    $ = [
      "left",
      "top",
      I,
      q,
      mt + vt,
      mt + pt,
      mt + ht,
      mt + gt,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    ee = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + Y, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
    te = /([A-Z])/g,
    Et = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          o = e.length,
          i = 0;
        for ((e.t._gsap || He.core.getCache(e.t)).uncache = 1; i < o; i += 2)
          (r = e[i + 1]), (t = e[i]), r ? (n[t] = r) : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase());
      }
    },
    Ot = { left: 0, top: 0 },
    re = /(webkit|moz|length|cssText|inset)/i,
    ne =
      ((ScrollTrigger.prototype.init = function init(E, O) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), lt)) {
          var A,
            n,
            p,
            D,
            R,
            B,
            q,
            I,
            L,
            Y,
            F,
            e,
            H,
            N,
            X,
            W,
            V,
            U,
            t,
            j,
            b,
            G,
            Q,
            m,
            Z,
            y,
            $,
            x,
            r,
            w,
            _,
            ee,
            o,
            g,
            te,
            re,
            ne,
            C,
            i,
            T = (E = ob(ct(E) || Ua(E) || E.nodeType ? { trigger: E } : E, Ct)).onUpdate,
            S = E.toggleClass,
            a = E.id,
            k = E.onToggle,
            oe = E.onRefresh,
            P = E.scrub,
            ie = E.trigger,
            ae = E.pin,
            se = E.pinSpacing,
            le = E.invalidateOnRefresh,
            M = E.anticipatePin,
            s = E.onScrubComplete,
            h = E.onSnapComplete,
            ce = E.once,
            ue = E.snap,
            fe = E.pinReparent,
            l = E.pinSpacer,
            de = E.containerAnimation,
            pe = E.fastScrollEnd,
            ge = E.preventOverlaps,
            he = E.horizontal || (E.containerAnimation && !1 !== E.horizontal) ? Ye : Fe,
            ve = !P && 0 !== P,
            be = J(E.scroller || Ne),
            c = He.core.getCache(be),
            me = La(be),
            ye = "fixed" === ("pinType" in E ? E.pinType : z(be, "pinType") || (me && "fixed")),
            xe = [E.onEnter, E.onLeave, E.onEnterBack, E.onLeaveBack],
            we = ve && E.toggleActions.split(" "),
            _e = "markers" in E ? E.markers : Ct.markers,
            Ce = me ? 0 : parseFloat(mb(be)["border" + he.p2 + yt]) || 0,
            Te = this,
            Se =
              E.onRefreshInit &&
              function () {
                return E.onRefreshInit(Te);
              },
            ke = (function _getSizeFunc(e, t, r) {
              var n = r.d,
                o = r.d2,
                i = r.a;
              return (i = z(e, "getBoundingClientRect"))
                ? function () {
                    return i()[n];
                  }
                : function () {
                    return (t ? Ma(o) : e["client" + o]) || 0;
                  };
            })(be, me, he),
            Pe = (function _getOffsetsFunc(e, t) {
              return !t || ~Le.indexOf(e)
                ? Na(e)
                : function () {
                    return Ot;
                  };
            })(be, me),
            Me = 0,
            Ee = 0,
            Oe = 0,
            Ae = K(be, he);
          if (
            ((Te._startClamp = Te._endClamp = !1),
            (Te._dir = he),
            (M *= 45),
            (Te.scroller = be),
            (Te.scroll = de ? de.time.bind(de) : Ae),
            (D = Ae()),
            (Te.vars = E),
            (O = O || E.animation),
            "refreshPriority" in E && ((Ze = 1), -9999 === E.refreshPriority && (ot = Te)),
            (c.tweenScroll = c.tweenScroll || { top: rc(be, Fe), left: rc(be, Ye) }),
            (Te.tweenTo = A = c.tweenScroll[he.p]),
            (Te.scrubDuration = function (e) {
              (o = Ua(e) && e)
                ? ee
                  ? ee.duration(e)
                  : (ee = He.to(O, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: o,
                      paused: !0,
                      onComplete: function onComplete() {
                        return s && s(Te);
                      },
                    }))
                : (ee && ee.progress(1).kill(), (ee = 0));
            }),
            O &&
              ((O.vars.lazy = !1),
              (O._initted && !Te.isReverted) ||
                (!1 !== O.vars.immediateRender && !1 !== E.immediateRender && O.duration() && O.render(0, !0, !0)),
              (Te.animation = O.pause()),
              (O.scrollTrigger = Te).scrubDuration(P),
              (w = 0),
              (a = a || O.vars.id)),
            ue &&
              ((Va(ue) && !ue.push) || (ue = { snapTo: ue }),
              "scrollBehavior" in We.style && He.set(me ? [We, Je] : be, { scrollBehavior: "auto" }),
              Ie.forEach(function (e) {
                return Ta(e) && e.target === (me ? Xe.scrollingElement || Je : be) && (e.smooth = !1);
              }),
              (p = Ta(ue.snapTo)
                ? ue.snapTo
                : "labels" === ue.snapTo
                ? (function _getClosestLabel(t) {
                    return function (e) {
                      return He.utils.snap(rb(t), e);
                    };
                  })(O)
                : "labelsDirectional" === ue.snapTo
                ? (function _getLabelAtDirection(r) {
                    return function (e, t) {
                      return tb(rb(r))(e, t.direction);
                    };
                  })(O)
                : !1 !== ue.directional
                ? function (e, t) {
                    return tb(ue.snapTo)(e, at() - Ee < 500 ? 0 : t.direction);
                  }
                : He.utils.snap(ue.snapTo)),
              (g = ue.duration || { min: 0.1, max: 2 }),
              (g = Va(g) ? Ue(g.min, g.max) : Ue(g, g)),
              (te = He.delayedCall(ue.delay || o / 2 || 0.1, function () {
                var e = Ae(),
                  t = at() - Ee < 500,
                  r = A.tween;
                if (!(t || Math.abs(Te.getVelocity()) < 10) || r || Ge || Me === e)
                  Te.isActive && Me !== e && te.restart(!0);
                else {
                  var n,
                    o,
                    i = (e - B) / N,
                    a = O && !ve ? O.totalProgress() : i,
                    s = t ? 0 : ((a - _) / (at() - Ke)) * 1e3 || 0,
                    l = He.utils.clamp(-i, 1 - i, (ut(s / 2) * s) / 0.185),
                    c = i + (!1 === ue.inertia ? 0 : l),
                    u = ue.onStart,
                    f = ue.onInterrupt,
                    d = ue.onComplete;
                  if (((n = p(c, Te)), Ua(n) || (n = c), (o = Math.round(B + n * N)), e <= q && B <= e && o !== e)) {
                    if (r && !r._initted && r.data <= ut(o - e)) return;
                    !1 === ue.inertia && (l = n - i),
                      A(
                        o,
                        {
                          duration: g(ut((0.185 * Math.max(ut(c - a), ut(n - a))) / s / 0.05 || 0)),
                          ease: ue.ease || "power3",
                          data: ut(o - e),
                          onInterrupt: function onInterrupt() {
                            return te.restart(!0) && f && f(Te);
                          },
                          onComplete: function onComplete() {
                            Te.update(),
                              (Me = Ae()),
                              O && (ee ? ee.resetTo("totalProgress", n, O._tTime / O._tDur) : O.progress(n)),
                              (w = _ = O && !ve ? O.totalProgress() : Te.progress),
                              h && h(Te),
                              d && d(Te);
                          },
                        },
                        e,
                        l * N,
                        o - e - l * N
                      ),
                      u && u(Te, A.tween);
                  }
                }
              }).pause())),
            a && (St[a] = Te),
            (i = (i = (ie = Te.trigger = J(ie || (!0 !== ae && ae))) && ie._gsap && ie._gsap.stRevert) && i(Te)),
            (ae = !0 === ae ? ie : J(ae)),
            ct(S) && (S = { targets: ie, className: S }),
            ae &&
              (!1 === se ||
                se === mt ||
                (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === mb(ae.parentNode).display) && bt),
              (Te.pin = ae),
              (n = He.core.getCache(ae)).spacer
                ? (X = n.pinState)
                : (l &&
                    ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement),
                    (n.spacerIsNative = !!l),
                    l && (n.spacerState = jc(l))),
                  (n.spacer = U = l || Xe.createElement("div")),
                  U.classList.add("pin-spacer"),
                  a && U.classList.add("pin-spacer-" + a),
                  (n.pinState = X = jc(ae))),
              !1 !== E.force3D && He.set(ae, { force3D: !0 }),
              (Te.spacer = U = n.spacer),
              (r = mb(ae)),
              (m = r[se + he.os2]),
              (j = He.getProperty(ae)),
              (b = He.quickSetter(ae, he.a, xt)),
              gc(ae, U, r),
              (V = jc(ae))),
            _e)
          ) {
            (e = Va(_e) ? ob(_e, _t) : _t),
              (Y = Db("scroller-start", a, be, he, e, 0)),
              (F = Db("scroller-end", a, be, he, e, 0, Y)),
              (t = Y["offset" + he.op.d2]);
            var u = J(z(be, "content") || be);
            (I = this.markerStart = Db("start", a, u, he, e, t, 0, de)),
              (L = this.markerEnd = Db("end", a, u, he, e, t, 0, de)),
              de && (C = He.quickSetter([I, L], he.a, xt)),
              ye ||
                (Le.length && !0 === z(be, "fixedMarkers")) ||
                ((function _makePositionable(e) {
                  var t = mb(e).position;
                  e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
                })(me ? We : be),
                He.set([Y, F], { force3D: !0 }),
                (y = He.quickSetter(Y, he.a, xt)),
                (x = He.quickSetter(F, he.a, xt)));
          }
          if (de) {
            var f = de.vars.onUpdate,
              d = de.vars.onUpdateParams;
            de.eventCallback("onUpdate", function () {
              Te.update(0, 0, 1), f && f.apply(de, d || []);
            });
          }
          if (
            ((Te.previous = function () {
              return Tt[Tt.indexOf(Te) - 1];
            }),
            (Te.next = function () {
              return Tt[Tt.indexOf(Te) + 1];
            }),
            (Te.revert = function (e, t) {
              if (!t) return Te.kill(!0);
              var r = !1 !== e || !Te.enabled,
                n = je;
              r !== Te.isReverted &&
                (r && ((re = Math.max(Ae(), Te.scroll.rec || 0)), (Oe = Te.progress), (ne = O && O.progress())),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return (e.style.display = r ? "none" : "block");
                  }),
                r && (je = Te).update(r),
                !ae ||
                  (fe && Te.isActive) ||
                  (r
                    ? (function _swapPinOut(e, t, r) {
                        Et(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Et(n.spacerState);
                        else if (e._gsap.swappedIn) {
                          var o = t.parentNode;
                          o && (o.insertBefore(e, t), o.removeChild(t));
                        }
                        e._gsap.swappedIn = !1;
                      })(ae, U, X)
                    : gc(ae, U, mb(ae), Z)),
                r || Te.update(r),
                (je = n),
                (Te.isReverted = r));
            }),
            (Te.refresh = function (e, t, r, n) {
              if ((!je && Te.enabled) || t)
                if (ae && e && st) wb(ScrollTrigger, "scrollEnd", Ob);
                else {
                  !rt && Se && Se(Te),
                    (je = Te),
                    A.tween && !r && (A.tween.kill(), (A.tween = 0)),
                    ee && ee.pause(),
                    le && O && O.revert({ kill: !1 }).invalidate(),
                    Te.isReverted || Te.revert(!0, !0),
                    (Te._subPinOffset = !1);
                  var o,
                    i,
                    a,
                    s,
                    l,
                    c,
                    u,
                    f,
                    d,
                    p,
                    g,
                    h,
                    v,
                    b = ke(),
                    m = Pe(),
                    y = de ? de.duration() : Qa(be, he),
                    x = N <= 0.01,
                    w = 0,
                    _ = n || 0,
                    C = Va(r) ? r.end : E.end,
                    T = E.endTrigger || ie,
                    S = Va(r) ? r.start : E.start || (0 !== E.start && ie ? (ae ? "0 0" : "0 100%") : 0),
                    k = (Te.pinnedContainer = E.pinnedContainer && J(E.pinnedContainer, Te)),
                    P = (ie && Math.max(0, Tt.indexOf(Te))) || 0,
                    M = P;
                  for (_e && Va(r) && ((h = He.getProperty(Y, he.p)), (v = He.getProperty(F, he.p))); M--; )
                    (c = Tt[M]).end || c.refresh(0, 1) || (je = Te),
                      !(u = c.pin) ||
                        (u !== ie && u !== ae && u !== k) ||
                        c.isReverted ||
                        ((p = p || []).unshift(c), c.revert(!0, !0)),
                      c !== Tt[M] && (P--, M--);
                  for (
                    Ta(S) && (S = S(Te)),
                      S = Ca(S, "start", Te),
                      B =
                        mc(S, ie, b, he, Ae(), I, Y, Te, m, Ce, ye, y, de, Te._startClamp && "_startClamp") ||
                        (ae ? -0.001 : 0),
                      Ta(C) && (C = C(Te)),
                      ct(C) &&
                        !C.indexOf("+=") &&
                        (~C.indexOf(" ")
                          ? (C = (ct(S) ? S.split(" ")[0] : "") + C)
                          : ((w = Cb(C.substr(2), b)),
                            (C = ct(S)
                              ? S
                              : (de
                                  ? He.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, B)
                                  : B) + w),
                            (T = ie))),
                      C = Ca(C, "end", Te),
                      q =
                        Math.max(
                          B,
                          mc(
                            C || (T ? "100% 0" : y),
                            T,
                            b,
                            he,
                            Ae() + w,
                            L,
                            F,
                            Te,
                            m,
                            Ce,
                            ye,
                            y,
                            de,
                            Te._endClamp && "_endClamp"
                          )
                        ) || -0.001,
                      w = 0,
                      M = P;
                    M--;

                  )
                    (u = (c = Tt[M]).pin) &&
                      c.start - c._pinPush <= B &&
                      !de &&
                      0 < c.end &&
                      ((o = c.end - (Te._startClamp ? Math.max(0, c.start) : c.start)),
                      ((u === ie && c.start - c._pinPush < B) || u === k) && isNaN(S) && (w += o * (1 - c.progress)),
                      u === ae && (_ += o));
                  if (
                    ((B += w),
                    (q += w),
                    Te._startClamp && (Te._startClamp += w),
                    Te._endClamp && !rt && ((Te._endClamp = q || -0.001), (q = Math.min(q, Qa(be, he)))),
                    (N = q - B || ((B -= 0.01) && 0.001)),
                    x && (Oe = He.utils.clamp(0, 1, He.utils.normalize(B, q, re))),
                    (Te._pinPush = _),
                    I && w && (((o = {})[he.a] = "+=" + w), k && (o[he.p] = "-=" + Ae()), He.set([I, L], o)),
                    !ae || (et && Te.end >= Qa(be, he)))
                  ) {
                    if (ie && Ae() && !de)
                      for (i = ie.parentNode; i && i !== We; )
                        i._pinOffset && ((B -= i._pinOffset), (q -= i._pinOffset)), (i = i.parentNode);
                  } else
                    (o = mb(ae)),
                      (s = he === Fe),
                      (a = Ae()),
                      (G = parseFloat(j(he.a)) + _),
                      !y &&
                        1 < q &&
                        ((g = {
                          style: (g = (me ? Xe.scrollingElement || Je : be).style),
                          value: g["overflow" + he.a.toUpperCase()],
                        }),
                        me &&
                          "scroll" !== mb(We)["overflow" + he.a.toUpperCase()] &&
                          (g.style["overflow" + he.a.toUpperCase()] = "scroll")),
                      gc(ae, U, o),
                      (V = jc(ae)),
                      (i = wt(ae, !0)),
                      (f = ye && K(be, s ? Ye : Fe)()),
                      se
                        ? (((Z = [se + he.os2, N + _ + xt]).t = U),
                          (M = se === bt ? qb(ae, he) + N + _ : 0) &&
                            (Z.push(he.d, M + xt), "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt)),
                          Et(Z),
                          k &&
                            Tt.forEach(function (e) {
                              e.pin === k && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                            }),
                          ye && Ae(re))
                        : (M = qb(ae, he)) && "auto" !== U.style.flexBasis && (U.style.flexBasis = M + xt),
                      ye &&
                        (((l = {
                          top: i.top + (s ? a - B : f) + xt,
                          left: i.left + (s ? f : a - B) + xt,
                          boxSizing: "border-box",
                          position: "fixed",
                        })[ft] = l.maxWidth =
                          Math.ceil(i.width) + xt),
                        (l[dt] = l.maxHeight = Math.ceil(i.height) + xt),
                        (l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0"),
                        (l[bt] = o[bt]),
                        (l[bt + ht] = o[bt + ht]),
                        (l[bt + pt] = o[bt + pt]),
                        (l[bt + vt] = o[bt + vt]),
                        (l[bt + gt] = o[bt + gt]),
                        (W = (function _copyState(e, t, r) {
                          for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2)
                            (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1]);
                          return (o.t = e.t), o;
                        })(X, l, fe)),
                        rt && Ae(0)),
                      O
                        ? ((d = O._initted),
                          $e(1),
                          O.render(O.duration(), !0, !0),
                          (Q = j(he.a) - G + N + _),
                          ($ = 1 < Math.abs(N - Q)),
                          ye && $ && W.splice(W.length - 2, 2),
                          O.render(0, !0, !0),
                          d || O.invalidate(!0),
                          O.parent || O.totalTime(O.totalTime()),
                          $e(0))
                        : (Q = N),
                      g &&
                        (g.value
                          ? (g.style["overflow" + he.a.toUpperCase()] = g.value)
                          : g.style.removeProperty("overflow-" + he.a));
                  p &&
                    p.forEach(function (e) {
                      return e.revert(!1, !0);
                    }),
                    (Te.start = B),
                    (Te.end = q),
                    (D = R = rt ? re : Ae()),
                    de || rt || (D < re && Ae(re), (Te.scroll.rec = 0)),
                    Te.revert(!1, !0),
                    (Ee = at()),
                    te && ((Me = -1), te.restart(!0)),
                    (je = 0),
                    O &&
                      ve &&
                      (O._initted || ne) &&
                      O.progress() !== ne &&
                      O.progress(ne || 0, !0).render(O.time(), !0, !0),
                    (x || Oe !== Te.progress || de || le) &&
                      (O && !ve && O.totalProgress(de && B < -0.001 && !Oe ? He.utils.normalize(B, q, 0) : Oe, !0),
                      (Te.progress = x || (D - B) / N === Oe ? 0 : Oe)),
                    ae && se && (U._pinOffset = Math.round(Te.progress * Q)),
                    ee && ee.invalidate(),
                    isNaN(h) ||
                      ((h -= He.getProperty(Y, he.p)),
                      (v -= He.getProperty(F, he.p)),
                      qc(Y, he, h),
                      qc(I, he, h - (n || 0)),
                      qc(F, he, v),
                      qc(L, he, v - (n || 0))),
                    x && !rt && Te.update(),
                    !oe || rt || H || ((H = !0), oe(Te), (H = !1));
                }
            }),
            (Te.getVelocity = function () {
              return ((Ae() - R) / (at() - Ke)) * 1e3 || 0;
            }),
            (Te.endAnimation = function () {
              Wa(Te.callbackAnimation),
                O && (ee ? ee.progress(1) : O.paused() ? ve || Wa(O, Te.direction < 0, 1) : Wa(O, O.reversed()));
            }),
            (Te.labelToScroll = function (e) {
              return (O && O.labels && (B || Te.refresh() || B) + (O.labels[e] / O.duration()) * N) || 0;
            }),
            (Te.getTrailing = function (t) {
              var e = Tt.indexOf(Te),
                r = 0 < Te.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
              return (
                ct(t)
                  ? r.filter(function (e) {
                      return e.vars.preventOverlaps === t;
                    })
                  : r
              ).filter(function (e) {
                return 0 < Te.direction ? e.end <= B : e.start >= q;
              });
            }),
            (Te.update = function (e, t, r) {
              if (!de || r || e) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  u = !0 === rt ? re : Te.scroll(),
                  f = e ? 0 : (u - B) / N,
                  d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                  p = Te.progress;
                if (
                  (t && ((R = D), (D = de ? Ae() : u), ue && ((_ = w), (w = O && !ve ? O.totalProgress() : d))),
                  M &&
                    ae &&
                    !je &&
                    !it &&
                    st &&
                    (!d && B < u + ((u - R) / (at() - Ke)) * M
                      ? (d = 1e-4)
                      : 1 === d && q > u + ((u - R) / (at() - Ke)) * M && (d = 0.9999)),
                  d !== p && Te.enabled)
                ) {
                  if (
                    ((a = (s = (n = Te.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p),
                    (Te.direction = p < d ? 1 : -1),
                    (Te.progress = d),
                    a &&
                      !je &&
                      ((o = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3),
                      ve &&
                        ((i = (!s && "none" !== we[o + 1] && we[o + 1]) || we[o]),
                        (c = O && ("complete" === i || "reset" === i || i in O)))),
                    ge &&
                      (s || c) &&
                      (c || P || !O) &&
                      (Ta(ge)
                        ? ge(Te)
                        : Te.getTrailing(ge).forEach(function (e) {
                            return e.endAnimation();
                          })),
                    ve ||
                      (!ee || je || it
                        ? O && O.totalProgress(d, !(!je || (!Ee && !e)))
                        : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start),
                          ee.resetTo
                            ? ee.resetTo("totalProgress", d, O._tTime / O._tDur)
                            : ((ee.vars.totalProgress = d), ee.invalidate().restart()))),
                    ae)
                  )
                    if ((e && se && (U.style[se + he.os2] = m), ye)) {
                      if (a) {
                        if (((l = !e && p < d && u < q + 1 && u + 1 >= Qa(be, he)), fe))
                          if (e || (!n && !l)) oc(ae, U);
                          else {
                            var g = wt(ae, !0),
                              h = u - B;
                            oc(ae, We, g.top + (he === Fe ? h : 0) + xt, g.left + (he === Fe ? 0 : h) + xt);
                          }
                        Et(n || l ? W : V), ($ && d < 1 && n) || b(G + (1 !== d || l ? 0 : Q));
                      }
                    } else b(Ia(G + Q * d));
                  !ue || A.tween || je || it || te.restart(!0),
                    S &&
                      (s || (ce && d && (d < 1 || !tt))) &&
                      Ve(S.targets).forEach(function (e) {
                        return e.classList[n || ce ? "add" : "remove"](S.className);
                      }),
                    !T || ve || e || T(Te),
                    a && !je
                      ? (ve &&
                          (c &&
                            ("complete" === i
                              ? O.pause().totalProgress(1)
                              : "reset" === i
                              ? O.restart(!0).pause()
                              : "restart" === i
                              ? O.restart(!0)
                              : O[i]()),
                          T && T(Te)),
                        (!s && tt) ||
                          (k && s && Xa(Te, k),
                          xe[o] && Xa(Te, xe[o]),
                          ce && (1 === d ? Te.kill(!1, 1) : (xe[o] = 0)),
                          s || (xe[(o = 1 === d ? 1 : 3)] && Xa(Te, xe[o]))),
                        pe &&
                          !n &&
                          Math.abs(Te.getVelocity()) > (Ua(pe) ? pe : 2500) &&
                          (Wa(Te.callbackAnimation), ee ? ee.progress(1) : Wa(O, "reverse" === i ? 1 : !d, 1)))
                      : ve && T && !je && T(Te);
                }
                if (x) {
                  var v = de ? (u / de.duration()) * (de._caScrollDist || 0) : u;
                  y(v + (Y._isFlipped ? 1 : 0)), x(v);
                }
                C && C((-u / de.duration()) * (de._caScrollDist || 0));
              }
            }),
            (Te.enable = function (e, t) {
              Te.enabled ||
                ((Te.enabled = !0),
                wb(be, "resize", Lb),
                me || wb(be, "scroll", Jb),
                Se && wb(ScrollTrigger, "refreshInit", Se),
                !1 !== e && ((Te.progress = Oe = 0), (D = R = Me = Ae())),
                !1 !== t && Te.refresh());
            }),
            (Te.getTween = function (e) {
              return e && A ? A.tween : ee;
            }),
            (Te.setPositions = function (e, t, r, n) {
              if (de) {
                var o = de.scrollTrigger,
                  i = de.duration(),
                  a = o.end - o.start;
                (e = o.start + (a * e) / i), (t = o.start + (a * t) / i);
              }
              Te.refresh(!1, !1, { start: Da(e, r && !!Te._startClamp), end: Da(t, r && !!Te._endClamp) }, n),
                Te.update();
            }),
            (Te.adjustPinSpacing = function (e) {
              if (Z && e) {
                var t = Z.indexOf(he.d) + 1;
                (Z[t] = parseFloat(Z[t]) + e + xt), (Z[1] = parseFloat(Z[1]) + e + xt), Et(Z);
              }
            }),
            (Te.disable = function (e, t) {
              if (
                Te.enabled &&
                (!1 !== e && Te.revert(!0, !0),
                (Te.enabled = Te.isActive = !1),
                t || (ee && ee.pause()),
                (re = 0),
                n && (n.uncache = 1),
                Se && xb(ScrollTrigger, "refreshInit", Se),
                te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)),
                !me)
              ) {
                for (var r = Tt.length; r--; ) if (Tt[r].scroller === be && Tt[r] !== Te) return;
                xb(be, "resize", Lb), me || xb(be, "scroll", Jb);
              }
            }),
            (Te.kill = function (e, t) {
              Te.disable(e, t), ee && !t && ee.kill(), a && delete St[a];
              var r = Tt.indexOf(Te);
              0 <= r && Tt.splice(r, 1),
                r === Qe && 0 < Mt && Qe--,
                (r = 0),
                Tt.forEach(function (e) {
                  return e.scroller === Te.scroller && (r = 1);
                }),
                r || rt || (Te.scroll.rec = 0),
                O && ((O.scrollTrigger = null), e && O.revert({ kill: !1 }), t || O.kill()),
                I &&
                  [I, L, Y, F].forEach(function (e) {
                    return e.parentNode && e.parentNode.removeChild(e);
                  }),
                ot === Te && (ot = 0),
                ae &&
                  (n && (n.uncache = 1),
                  (r = 0),
                  Tt.forEach(function (e) {
                    return e.pin === ae && r++;
                  }),
                  r || (n.spacer = 0)),
                E.onKill && E.onKill(Te);
            }),
            Tt.push(Te),
            Te.enable(!1, !1),
            i && i(Te),
            O && O.add && !N)
          ) {
            var v = Te.update;
            (Te.update = function () {
              (Te.update = v), B || q || Te.refresh();
            }),
              He.delayedCall(0.01, Te.update),
              (N = 0.01),
              (B = q = 0);
          } else Te.refresh();
          ae &&
            (function _queueRefreshAll() {
              if (nt !== kt) {
                var e = (nt = kt);
                requestAnimationFrame(function () {
                  return e === kt && Pt(!0);
                });
              }
            })();
        } else this.update = this.refresh = this.kill = Ha;
      }),
      (ScrollTrigger.register = function register(e) {
        return s || ((He = e || Ka()), Ja() && window.document && ScrollTrigger.enable(), (s = lt)), s;
      }),
      (ScrollTrigger.defaults = function defaults(e) {
        if (e) for (var t in e) Ct[t] = e[t];
        return Ct;
      }),
      (ScrollTrigger.disable = function disable(t, r) {
        (lt = 0),
          Tt.forEach(function (e) {
            return e[r ? "kill" : "disable"](t);
          }),
          xb(Ne, "wheel", Jb),
          xb(Xe, "scroll", Jb),
          clearInterval(u),
          xb(Xe, "touchcancel", Ha),
          xb(We, "touchstart", Ha),
          vb(xb, Xe, "pointerdown,touchstart,mousedown", Fa),
          vb(xb, Xe, "pointerup,touchend,mouseup", Ga),
          c.kill(),
          Ra(xb);
        for (var e = 0; e < Ie.length; e += 3) yb(xb, Ie[e], Ie[e + 1]), yb(xb, Ie[e], Ie[e + 2]);
      }),
      (ScrollTrigger.enable = function enable() {
        if (
          ((Ne = window),
          (Xe = document),
          (Je = Xe.documentElement),
          (We = Xe.body),
          He &&
            ((Ve = He.utils.toArray),
            (Ue = He.utils.clamp),
            (x = He.core.context || Ha),
            ($e = He.core.suppressOverwrites || Ha),
            (w = Ne.history.scrollRestoration || "auto"),
            (Q = Ne.pageYOffset),
            He.core.globals("ScrollTrigger", ScrollTrigger),
            We))
        ) {
          (lt = 1),
            ((_ = document.createElement("div")).style.height = "100vh"),
            (_.style.position = "absolute"),
            Yb(),
            (function _rafBugFix() {
              return lt && requestAnimationFrame(_rafBugFix);
            })(),
            k.register(He),
            (ScrollTrigger.isTouch = k.isTouch),
            (E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (b = 1 === k.isTouch),
            wb(Ne, "wheel", Jb),
            (l = [Ne, Xe, Je, We]),
            He.matchMedia
              ? ((ScrollTrigger.matchMedia = function (e) {
                  var t,
                    r = He.matchMedia();
                  for (t in e) r.add(t, e[t]);
                  return r;
                }),
                He.addEventListener("matchMediaInit", function () {
                  return Sb();
                }),
                He.addEventListener("matchMediaRevert", function () {
                  return Rb();
                }),
                He.addEventListener("matchMedia", function () {
                  Pt(0, 1), U("matchMedia");
                }),
                He.matchMedia("(orientation: portrait)", function () {
                  return Kb(), Kb;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Kb(),
            wb(Xe, "scroll", Jb);
          var e,
            t,
            r = We.style,
            n = r.borderTopStyle,
            o = He.core.Animation.prototype;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function value() {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              e = wt(We),
              Fe.m = Math.round(e.top + Fe.sc()) || 0,
              Ye.m = Math.round(e.left + Ye.sc()) || 0,
              n ? (r.borderTopStyle = n) : r.removeProperty("border-top-style"),
              u = setInterval(Ib, 250),
              He.delayedCall(0.5, function () {
                return (it = 0);
              }),
              wb(Xe, "touchcancel", Ha),
              wb(We, "touchstart", Ha),
              vb(wb, Xe, "pointerdown,touchstart,mousedown", Fa),
              vb(wb, Xe, "pointerup,touchend,mouseup", Ga),
              f = He.utils.checkPrefix("transform"),
              ee.push(f),
              s = at(),
              c = He.delayedCall(0.2, Pt).pause(),
              g = [
                Xe,
                "visibilitychange",
                function () {
                  var e = Ne.innerWidth,
                    t = Ne.innerHeight;
                  Xe.hidden ? ((d = e), (p = t)) : (d === e && p === t) || Lb();
                },
                Xe,
                "DOMContentLoaded",
                Pt,
                Ne,
                "load",
                Pt,
                Ne,
                "resize",
                Lb,
              ],
              Ra(wb),
              Tt.forEach(function (e) {
                return e.enable(0, 1);
              }),
              t = 0;
            t < Ie.length;
            t += 3
          )
            yb(xb, Ie[t], Ie[t + 1]), yb(xb, Ie[t], Ie[t + 2]);
        }
      }),
      (ScrollTrigger.config = function config(e) {
        "limitCallbacks" in e && (tt = !!e.limitCallbacks);
        var t = e.syncInterval;
        (t && clearInterval(u)) || ((u = t) && setInterval(Ib, t)),
          "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize),
          "autoRefreshEvents" in e &&
            (Ra(xb) || Ra(wb, e.autoRefreshEvents || "none"),
            (h = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
      }),
      (ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = J(e),
          n = Ie.indexOf(r),
          o = La(r);
        ~n && Ie.splice(n, o ? 6 : 2), t && (o ? Le.unshift(Ne, t, We, t, Je, t) : Le.unshift(r, t));
      }),
      (ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
        Tt.forEach(function (e) {
          return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
        });
      }),
      (ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
          o = n[r ? ft : dt] * t || 0;
        return r ? 0 < n.right - o && n.left + o < Ne.innerWidth : 0 < n.bottom - o && n.top + o < Ne.innerHeight;
      }),
      (ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        ct(e) && (e = J(e));
        var n = e.getBoundingClientRect(),
          o = n[r ? ft : dt],
          i = null == t ? o / 2 : t in H ? H[t] * o : ~t.indexOf("%") ? (parseFloat(t) * o) / 100 : parseFloat(t) || 0;
        return r ? (n.left + i) / Ne.innerWidth : (n.top + i) / Ne.innerHeight;
      }),
      (ScrollTrigger.killAll = function killAll(e) {
        if (
          (Tt.slice(0).forEach(function (e) {
            return "ScrollSmoother" !== e.vars.id && e.kill();
          }),
          !0 !== e)
        ) {
          var t = W.killAll || [];
          (W = {}),
            t.forEach(function (e) {
              return e();
            });
        }
      }),
      ScrollTrigger);
  function ScrollTrigger(e, t) {
    s || ScrollTrigger.register(He) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
      x(this),
      this.init(e, t);
  }
  (ne.version = "3.12.5"),
    (ne.saveStyles = function (e) {
      return e
        ? Ve(e).forEach(function (e) {
            if (e && e.style) {
              var t = j.indexOf(e);
              0 <= t && j.splice(t, 5),
                j.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), He.core.getCache(e), x());
            }
          })
        : j;
    }),
    (ne.revert = function (e, t) {
      return Sb(!e, t);
    }),
    (ne.create = function (e, t) {
      return new ne(e, t);
    }),
    (ne.refresh = function (e) {
      return e ? Lb() : (s || ne.register()) && Pt(!0);
    }),
    (ne.update = function (e) {
      return ++Ie.cache && Z(!0 === e ? 2 : 0);
    }),
    (ne.clearScrollMemory = Tb),
    (ne.maxScroll = function (e, t) {
      return Qa(e, t ? Ye : Fe);
    }),
    (ne.getScrollFunc = function (e, t) {
      return K(J(e), t ? Ye : Fe);
    }),
    (ne.getById = function (e) {
      return St[e];
    }),
    (ne.getAll = function () {
      return Tt.filter(function (e) {
        return "ScrollSmoother" !== e.vars.id;
      });
    }),
    (ne.isScrolling = function () {
      return !!st;
    }),
    (ne.snapDirectional = tb),
    (ne.addEventListener = function (e, t) {
      var r = W[e] || (W[e] = []);
      ~r.indexOf(t) || r.push(t);
    }),
    (ne.removeEventListener = function (e, t) {
      var r = W[e],
        n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }),
    (ne.batch = function (e, t) {
      function Cp(e, t) {
        var r = [],
          n = [],
          o = He.delayedCall(i, function () {
            t(r, n), (r = []), (n = []);
          }).pause();
        return function (e) {
          r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
        };
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9;
      for (r in t) o[r] = "on" === r.substr(0, 2) && Ta(t[r]) && "onRefreshInit" !== r ? Cp(0, t[r]) : t[r];
      return (
        Ta(a) &&
          ((a = a()),
          wb(ne, "refresh", function () {
            return (a = t.batchMax());
          })),
        Ve(e).forEach(function (e) {
          var t = {};
          for (r in o) t[r] = o[r];
          (t.trigger = e), n.push(ne.create(t));
        }),
        n
      );
    });
  function tc(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }
  function uc(e, t) {
    !0 === t
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none"),
      e === Je && uc(We, t);
  }
  function wc(e) {
    var t,
      r = e.event,
      n = e.target,
      o = e.axis,
      i = (r.changedTouches ? r.changedTouches[0] : r).target,
      a = i._gsap || He.core.getCache(i),
      s = at();
    if (!a._isScrollT || 2e3 < s - a._isScrollT) {
      for (
        ;
        i &&
        i !== We &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          (!ie[(t = mb(i)).overflowY] && !ie[t.overflowX]));

      )
        i = i.parentNode;
      (a._isScroll = i && i !== n && !La(i) && (ie[(t = mb(i)).overflowY] || ie[t.overflowX])), (a._isScrollT = s);
    }
    (!a._isScroll && "x" !== o) || (r.stopPropagation(), (r._gsapAllow = !0));
  }
  function xc(e, t, r, n) {
    return k.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (n = n && wc),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function onEnable() {
        return r && wb(Xe, k.eventTypes[0], se, !1, !0);
      },
      onDisable: function onDisable() {
        return xb(Xe, k.eventTypes[0], se, !0);
      },
    });
  }
  function Bc(e) {
    function zq() {
      return (o = !1);
    }
    function Cq() {
      (i = Qa(p, Fe)), (S = Ue(E ? 1 : 0, i)), f && (T = Ue(0, Qa(p, Ye))), (l = kt);
    }
    function Dq() {
      (v._gsap.y = Ia(parseFloat(v._gsap.y) + b.offset) + "px"),
        (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)"),
        (b.offset = b.cacheID = 0);
    }
    function Jq() {
      Cq(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i));
    }
    Va(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n,
      i,
      l,
      o,
      a,
      c,
      u,
      s,
      f = e.normalizeScrollX,
      t = e.momentum,
      r = e.allowNestedScroll,
      d = e.onRelease,
      p = J(e.target) || Je,
      g = He.core.globals().ScrollSmoother,
      h = g && g.get(),
      v = E && ((e.content && J(e.content)) || (h && !1 !== e.content && !h.smooth() && h.content())),
      b = K(p, Fe),
      m = K(p, Ye),
      y = 1,
      x =
        (k.isTouch && Ne.visualViewport ? Ne.visualViewport.scale * Ne.visualViewport.width : Ne.outerWidth) /
        Ne.innerWidth,
      w = 0,
      _ = Ta(t)
        ? function () {
            return t(n);
          }
        : function () {
            return t || 2.8;
          },
      C = xc(p, e.type, !0, r),
      T = Ha,
      S = Ha;
    return (
      v && He.set(v, { y: "+=0" }),
      (e.ignoreCheck = function (e) {
        return (
          (E &&
            "touchmove" === e.type &&
            (function ignoreDrag() {
              if (o) {
                requestAnimationFrame(zq);
                var e = Ia(n.deltaY / 2),
                  t = S(b.v - e);
                if (v && t !== b.v + b.offset) {
                  b.offset = t - b.v;
                  var r = Ia((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)"),
                    (v._gsap.y = r + "px"),
                    (b.cacheID = Ie.cache),
                    Z();
                }
                return !0;
              }
              b.offset && Dq(), (o = !0);
            })()) ||
          (1.05 < y && "touchstart" !== e.type) ||
          n.isGesturing ||
          (e.touches && 1 < e.touches.length)
        );
      }),
      (e.onPress = function () {
        o = !1;
        var e = y;
        (y = Ia(((Ne.visualViewport && Ne.visualViewport.scale) || 1) / x)),
          a.pause(),
          e !== y && uc(p, 1.01 < y || (!f && "x")),
          (c = m()),
          (u = b()),
          Cq(),
          (l = kt);
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((b.offset && Dq(), t)) {
            Ie.cache++;
            var r,
              n,
              o = _();
            f &&
              ((n = (r = m()) + (0.05 * o * -e.velocityX) / 0.227),
              (o *= tc(m, r, n, Qa(p, Ye))),
              (a.vars.scrollX = T(n))),
              (n = (r = b()) + (0.05 * o * -e.velocityY) / 0.227),
              (o *= tc(b, r, n, Qa(p, Fe))),
              (a.vars.scrollY = S(n)),
              a.invalidate().duration(o).play(0.01),
              ((E && a.vars.scrollY >= i) || i - 1 <= r) && He.to({}, { onUpdate: Jq, duration: o });
          } else s.restart(!0);
          d && d(e);
        }),
      (e.onWheel = function () {
        a._ts && a.pause(), 1e3 < at() - w && ((l = 0), (w = at()));
      }),
      (e.onChange = function (e, t, r, n, o) {
        if ((kt !== l && Cq(), t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r)) {
          b.offset && Dq();
          var i = o[2] === r,
            a = i ? u + e.startY - e.y : b() + r - o[1],
            s = S(a);
          i && a !== s && (u += s - a), b(s);
        }
        (r || t) && Z();
      }),
      (e.onEnable = function () {
        uc(p, !f && "x"),
          ne.addEventListener("refresh", Jq),
          wb(Ne, "resize", Jq),
          b.smooth && ((b.target.style.scrollBehavior = "auto"), (b.smooth = m.smooth = !1)),
          C.enable();
      }),
      (e.onDisable = function () {
        uc(p, !0), xb(Ne, "resize", Jq), ne.removeEventListener("refresh", Jq), C.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      ((n = new k(e)).iOS = E) && !b() && b(1),
      E && He.ticker.add(Ha),
      (s = n._dc),
      (a = He.to(n, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: f ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: pc(b, b(), function () {
            return a.pause();
          }),
        },
        onUpdate: Z,
        onComplete: s.vars.onComplete,
      })),
      n
    );
  }
  var oe,
    ie = { auto: 1, scroll: 1 },
    ae = /(input|label|select|textarea)/i,
    se = function _captureInputs(e) {
      var t = ae.test(e.target.tagName);
      (t || oe) && ((e._gsapAllow = !0), (oe = t));
    };
  (ne.sort = function (e) {
    return Tt.sort(
      e ||
        function (e, t) {
          return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
        }
    );
  }),
    (ne.observe = function (e) {
      return new k(e);
    }),
    (ne.normalizeScroll = function (e) {
      if (void 0 === e) return v;
      if (!0 === e && v) return v.enable();
      if (!1 === e) return v && v.kill(), void (v = e);
      var t = e instanceof k ? e : Bc(e);
      return v && v.target === t.target && v.kill(), La(t.target) && (v = t), t;
    }),
    (ne.core = {
      _getVelocityProp: L,
      _inputObserver: xc,
      _scrollers: Ie,
      _proxies: Le,
      bridge: {
        ss: function ss() {
          st || U("scrollStart"), (st = at());
        },
        ref: function ref() {
          return je;
        },
      },
    }),
    Ka() && He.registerPlugin(ne),
    (e.ScrollTrigger = ne),
    (e.default = ne);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});
