(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption{display:none}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image{display:none}.image-tool--empty .image-tool__caption,.image-tool--uploading .image-tool__caption{display:none!important}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--uploading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--uploading .image-tool__image-picture,.image-tool--uploading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}.image-tool--caption .image-tool__caption{display:block}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function M(C, o = null, r = {}) {
  const s = document.createElement(C);
  Array.isArray(o) ? s.classList.add(...o) : o !== null && s.classList.add(o);
  for (const l in r)
    r.hasOwnProperty(l) && (s[l] = r[l]);
  return s;
}
var P = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(P || {});
class x {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: o, config: r, onSelectFile: s, readOnly: l }) {
    this.api = o, this.config = r, this.onSelectFile = s, this.readOnly = l, this.nodes = {
      wrapper: M("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: M("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: M("div", this.CSS.imagePreloader),
      caption: M("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(o, r) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${o}`, r);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(o) {
    return o.file === void 0 || Object.keys(o.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(o) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${o})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(o) {
    const r = /\.mp4$/.test(o) ? "VIDEO" : "IMG", s = {
      src: o
    };
    let l = "load";
    r === "VIDEO" && (s.autoplay = !0, s.loop = !0, s.muted = !0, s.playsinline = !0, l = "loadeddata"), this.nodes.imageEl = M(r, this.CSS.imageEl, s), this.nodes.imageEl.addEventListener(l, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(o) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = o);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const o = M("div", [this.CSS.button]);
    return o.innerHTML = this.config.buttonContent ?? `${L} ${this.api.i18n.t("Select an Image")}`, o.addEventListener("click", () => {
      this.onSelectFile();
    }), o;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(o) {
    if (!(o == "filled" && this.nodes.wrapper.classList.contains(`${this.CSS.wrapper}--${o}`)))
      for (const r in P)
        Object.prototype.hasOwnProperty.call(P, r) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${P[r]}`, o === P[r]);
  }
}
function q(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var H = { exports: {} };
(function(C, o) {
  (function(r, s) {
    C.exports = s();
  })(self, () => {
    return r = { 954: (l, d, h) => {
      function m(t) {
        return m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
          return typeof n;
        } : function(n) {
          return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
        }, m(t);
      }
      h(141);
      var u, v, E, g, i, y, w, c = h(347), e = (v = function(t) {
        return new Promise(function(n, a) {
          t = g(t), (t = i(t)).beforeSend && t.beforeSend();
          var p = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          p.open(t.method, t.url), p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(f) {
            var k = t.headers[f];
            p.setRequestHeader(f, k);
          });
          var S = t.ratio;
          p.upload.addEventListener("progress", function(f) {
            var k = Math.round(f.loaded / f.total * 100), b = Math.ceil(k * S / 100);
            t.progress(Math.min(b, 100));
          }, !1), p.addEventListener("progress", function(f) {
            var k = Math.round(f.loaded / f.total * 100), b = Math.ceil(k * (100 - S) / 100) + S;
            t.progress(Math.min(b, 100));
          }, !1), p.onreadystatechange = function() {
            if (p.readyState === 4) {
              var f = p.response;
              try {
                f = JSON.parse(f);
              } catch {
              }
              var k = c.parseHeaders(p.getAllResponseHeaders()), b = { body: f, code: p.status, headers: k };
              w(p.status) ? n(b) : a(b);
            }
          }, p.send(t.data);
        });
      }, E = function(t) {
        return t.method = "POST", v(t);
      }, g = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && m(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(u).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(n) {
        }, t.beforeSend = t.beforeSend || function(n) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, i = function(t) {
        switch (t.method) {
          case "GET":
            var n = y(t.data, u.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + n : t.url + "?" + n;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var a = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || u.JSON;
            }(t);
            (c.isFormData(t.data) || c.isFormElement(t.data)) && (a = u.FORM), t.data = y(t.data, a), a !== e.contentType.FORM && (t.headers["content-type"] = a);
        }
        return t;
      }, y = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case u.URLENCODED:
            return c.urlEncode(t);
          case u.JSON:
            return c.jsonEncode(t);
          case u.FORM:
            return c.formEncode(t);
          default:
            return t;
        }
      }, w = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: u = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: v, get: function(t) {
        return t.method = "GET", v(t);
      }, post: E, transport: function(t) {
        return t = g(t), c.selectFiles(t).then(function(n) {
          for (var a = new FormData(), p = 0; p < n.length; p++) a.append(t.fieldName, n[p], n[p].name);
          c.isObject(t.data) && Object.keys(t.data).forEach(function(f) {
            var k = t.data[f];
            a.append(f, k);
          });
          var S = t.beforeSend;
          return t.beforeSend = function() {
            return S(n);
          }, t.data = a, E(t);
        });
      }, selectFiles: function(t) {
        return delete (t = g(t)).beforeSend, c.selectFiles(t);
      } });
      l.exports = e;
    }, 141: () => {
      function l(e, t) {
        this.name = "AggregateError", this.errors = e, this.message = t || "";
      }
      l.prototype = Error.prototype;
      var d = setTimeout;
      function h(e) {
        return !!(e && e.length !== void 0);
      }
      function m() {
      }
      function u(e) {
        if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
        if (typeof e != "function") throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], w(e, this);
      }
      function v(e, t) {
        for (; e._state === 3; ) e = e._value;
        e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
          var n = e._state === 1 ? t.onFulfilled : t.onRejected;
          if (n !== null) {
            var a;
            try {
              a = n(e._value);
            } catch (p) {
              return void g(t.promise, p);
            }
            E(t.promise, a);
          } else (e._state === 1 ? E : g)(t.promise, e._value);
        })) : e._deferreds.push(t);
      }
      function E(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && (typeof t == "object" || typeof t == "function")) {
            var n = t.then;
            if (t instanceof u) return e._state = 3, e._value = t, void i(e);
            if (typeof n == "function") return void w((a = n, p = t, function() {
              a.apply(p, arguments);
            }), e);
          }
          e._state = 1, e._value = t, i(e);
        } catch (S) {
          g(e, S);
        }
        var a, p;
      }
      function g(e, t) {
        e._state = 2, e._value = t, i(e);
      }
      function i(e) {
        e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
          e._handled || u._unhandledRejectionFn(e._value);
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) v(e, e._deferreds[t]);
        e._deferreds = null;
      }
      function y(e, t, n) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.promise = n;
      }
      function w(e, t) {
        var n = !1;
        try {
          e(function(a) {
            n || (n = !0, E(t, a));
          }, function(a) {
            n || (n = !0, g(t, a));
          });
        } catch (a) {
          if (n) return;
          n = !0, g(t, a);
        }
      }
      u.prototype.catch = function(e) {
        return this.then(null, e);
      }, u.prototype.then = function(e, t) {
        var n = new this.constructor(m);
        return v(this, new y(e, t, n)), n;
      }, u.prototype.finally = function(e) {
        var t = this.constructor;
        return this.then(function(n) {
          return t.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return t.resolve(e()).then(function() {
            return t.reject(n);
          });
        });
      }, u.all = function(e) {
        return new u(function(t, n) {
          if (!h(e)) return n(new TypeError("Promise.all accepts an array"));
          var a = Array.prototype.slice.call(e);
          if (a.length === 0) return t([]);
          var p = a.length;
          function S(k, b) {
            try {
              if (b && (typeof b == "object" || typeof b == "function")) {
                var F = b.then;
                if (typeof F == "function") return void F.call(b, function(j) {
                  S(k, j);
                }, n);
              }
              a[k] = b, --p == 0 && t(a);
            } catch (j) {
              n(j);
            }
          }
          for (var f = 0; f < a.length; f++) S(f, a[f]);
        });
      }, u.any = function(e) {
        var t = this;
        return new t(function(n, a) {
          if (!e || e.length === void 0) return a(new TypeError("Promise.any accepts an array"));
          var p = Array.prototype.slice.call(e);
          if (p.length === 0) return a();
          for (var S = [], f = 0; f < p.length; f++) try {
            t.resolve(p[f]).then(n).catch(function(k) {
              S.push(k), S.length === p.length && a(new l(S, "All promises were rejected"));
            });
          } catch (k) {
            a(k);
          }
        });
      }, u.allSettled = function(e) {
        return new this(function(t, n) {
          if (!e || e.length === void 0) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
          var a = Array.prototype.slice.call(e);
          if (a.length === 0) return t([]);
          var p = a.length;
          function S(k, b) {
            if (b && (typeof b == "object" || typeof b == "function")) {
              var F = b.then;
              if (typeof F == "function") return void F.call(b, function(j) {
                S(k, j);
              }, function(j) {
                a[k] = { status: "rejected", reason: j }, --p == 0 && t(a);
              });
            }
            a[k] = { status: "fulfilled", value: b }, --p == 0 && t(a);
          }
          for (var f = 0; f < a.length; f++) S(f, a[f]);
        });
      }, u.resolve = function(e) {
        return e && typeof e == "object" && e.constructor === u ? e : new u(function(t) {
          t(e);
        });
      }, u.reject = function(e) {
        return new u(function(t, n) {
          n(e);
        });
      }, u.race = function(e) {
        return new u(function(t, n) {
          if (!h(e)) return n(new TypeError("Promise.race accepts an array"));
          for (var a = 0, p = e.length; a < p; a++) u.resolve(e[a]).then(t, n);
        });
      }, u._immediateFn = typeof setImmediate == "function" && function(e) {
        setImmediate(e);
      } || function(e) {
        d(e, 0);
      }, u._unhandledRejectionFn = function(e) {
        typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
      };
      const c = u;
      window.Promise = window.Promise || c;
    }, 347: (l, d, h) => {
      function m(v, E) {
        for (var g = 0; g < E.length; g++) {
          var i = E[g];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(v, i.key, i);
        }
      }
      var u = h(989);
      l.exports = function() {
        function v() {
          (function(i, y) {
            if (!(i instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, v);
        }
        var E, g;
        return E = v, g = [{ key: "urlEncode", value: function(i) {
          return u(i);
        } }, { key: "jsonEncode", value: function(i) {
          return JSON.stringify(i);
        } }, { key: "formEncode", value: function(i) {
          if (this.isFormData(i)) return i;
          if (this.isFormElement(i)) return new FormData(i);
          if (this.isObject(i)) {
            var y = new FormData();
            return Object.keys(i).forEach(function(w) {
              var c = i[w];
              y.append(w, c);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(i) {
          return Object.prototype.toString.call(i) === "[object Object]";
        } }, { key: "isFormData", value: function(i) {
          return i instanceof FormData;
        } }, { key: "isFormElement", value: function(i) {
          return i instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var c = document.createElement("INPUT");
            c.type = "file", i.multiple && c.setAttribute("multiple", "multiple"), i.accept && c.setAttribute("accept", i.accept), c.style.display = "none", document.body.appendChild(c), c.addEventListener("change", function(e) {
              var t = e.target.files;
              y(t), document.body.removeChild(c);
            }, !1), c.addEventListener("cancel", function(e) {
              w(), document.body.removeChild(c);
            }, !1), c.click();
          });
        } }, { key: "parseHeaders", value: function(i) {
          var y = i.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(c) {
            var e = c.split(": "), t = e.shift(), n = e.join(": ");
            t && (w[t] = n);
          }), w;
        } }], g && m(E, g), v;
      }();
    }, 989: (l) => {
      var d = function(m) {
        return encodeURIComponent(m).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, h = function(m, u, v, E) {
        return u = u || null, v = v || "&", E = E || null, m ? function(g) {
          for (var i = new Array(), y = 0; y < g.length; y++) g[y] && i.push(g[y]);
          return i;
        }(Object.keys(m).map(function(g) {
          var i, y, w = g;
          if (E && (w = E + "[" + w + "]"), typeof m[g] == "object" && m[g] !== null) i = h(m[g], null, v, w);
          else {
            u && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? u + Number(w) : w);
            var c = m[g];
            c = (c = (c = (c = c === !0 ? "1" : c) === !1 ? "0" : c) === 0 ? "0" : c) || "", i = d(w) + "=" + d(c);
          }
          return i;
        })).join(v).replace(/[!'()*]/g, "") : "";
      };
      l.exports = h;
    } }, s = {}, function l(d) {
      var h = s[d];
      if (h !== void 0) return h.exports;
      var m = s[d] = { exports: {} };
      return r[d](m, m.exports, l), m.exports;
    }(954);
    var r, s;
  });
})(H);
var A = H.exports;
const _ = /* @__PURE__ */ q(A);
function O(C) {
  return C !== void 0 && typeof C.then == "function";
}
class N {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: o, onUpload: r, onError: s }) {
    this.config = o, this.onUpload = r, this.onError = s;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: o }) {
    const r = function(l) {
      const d = new FileReader();
      d.readAsDataURL(l), d.onload = (h) => {
        o(h.target.result);
      };
    };
    let s;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const l = this.config.uploader.uploadByFile;
      s = _.selectFiles({ accept: this.config.types ?? "image/*" }).then((d) => {
        r(d[0]);
        const h = l(d[0]);
        return O(h) || console.warn("Custom uploader method uploadByFile should return a Promise"), h;
      });
    } else
      s = _.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (l) => {
          r(l[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((l) => l.body);
    s.then((l) => {
      this.onUpload(l);
    }).catch((l) => {
      this.onError(l);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(o) {
    let r;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (r = this.config.uploader.uploadByUrl(o), O(r) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : r = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: o
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((s) => s.body), r.then((s) => {
      this.onUpload(s);
    }).catch((s) => {
      this.onError(s);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(o, { onPreview: r }) {
    const s = new FileReader();
    s.readAsDataURL(o), s.onload = (d) => {
      r(d.target.result);
    };
    let l;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      l = this.config.uploader.uploadByFile(o), O(l) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const d = new FormData();
      d.append(this.config.field ?? "image", o), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([h, m]) => {
        d.append(h, m);
      }), l = _.post({
        url: this.config.endpoints.byFile,
        data: d,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((h) => h.body);
    }
    l.then((d) => {
      this.onUpload(d);
    }).catch((d) => {
      this.onError(d);
    });
  }
}
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class T {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: o, config: r, api: s, readOnly: l, block: d }) {
    this.api = s, this.block = d, this.config = {
      endpoints: r.endpoints,
      additionalRequestData: r.additionalRequestData,
      additionalRequestHeaders: r.additionalRequestHeaders,
      field: r.field,
      types: r.types,
      captionPlaceholder: this.api.i18n.t(r.captionPlaceholder ?? "Caption"),
      buttonContent: r.buttonContent,
      uploader: r.uploader,
      actions: r.actions,
      features: r.features || {}
    }, this.uploader = new N({
      config: this.config,
      onUpload: (h) => this.onUpload(h),
      onError: (h) => this.uploadingFailed(h)
    }), this.ui = new x({
      api: s,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (h) => {
            this.ui.showPreloader(h);
          }
        });
      },
      readOnly: l
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = o;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: B,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: U,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: R,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    var o, r, s;
    return (((o = this.config.features) == null ? void 0 : o.caption) === !0 || ((r = this.config.features) == null ? void 0 : r.caption) === void 0 || ((s = this.config.features) == null ? void 0 : s.caption) === "optional" && this.data.caption) && this.ui.applyTune("caption", !0), this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(o) {
    return !!o.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const o = this.ui.nodes.caption;
    return this._data.caption = o.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    var l;
    const o = T.tunes.concat(this.config.actions || []), r = {
      border: "withBorder",
      background: "withBackground",
      stretch: "stretched",
      caption: "caption"
    };
    return ((l = this.config.features) == null ? void 0 : l.caption) === "optional" && o.push({
      name: "caption",
      icon: D,
      title: "With caption",
      toggle: !0
    }), o.filter((d) => {
      var m, u;
      const h = Object.keys(r).find((v) => r[v] === d.name);
      return h === "caption" ? ((m = this.config.features) == null ? void 0 : m.caption) !== !1 : h == null || ((u = this.config.features) == null ? void 0 : u[h]) !== !1;
    }).map((d) => ({
      icon: d.icon,
      label: this.api.i18n.t(d.title),
      name: d.name,
      toggle: d.toggle,
      isActive: this.data[d.name],
      onActivate: () => {
        if (typeof d.action == "function") {
          d.action(d.name);
          return;
        }
        this.tuneToggled(d.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(o) {
    switch (o.type) {
      case "tag": {
        const r = o.detail.data;
        if (/^blob:/.test(r.src)) {
          const l = await (await fetch(r.src)).blob();
          this.uploadFile(l);
          break;
        }
        this.uploadUrl(r.src);
        break;
      }
      case "pattern": {
        const r = o.detail.data;
        this.uploadUrl(r);
        break;
      }
      case "file": {
        const r = o.detail.file;
        this.uploadFile(r);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(o) {
    this.image = o.file, this._data.caption = o.caption || "", this.ui.fillCaption(this._data.caption), T.tunes.forEach(({ name: r }) => {
      const s = typeof o[r] < "u" ? o[r] === !0 || o[r] === "true" : !1;
      this.setTune(r, s);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(o) {
    this._data.file = o || { url: "" }, o && o.url && this.ui.fillImage(o.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(o) {
    o.success && o.file ? this.image = o.file : this.uploadingFailed("incorrect response: " + JSON.stringify(o));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(o) {
    console.log("Image Tool: uploading failed because of", o), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(o) {
    this.setTune(o, !this._data[o]), o === "caption" && !this._data[o] && (this._data.caption = "", this.ui.fillCaption(""));
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(o, r) {
    this._data[o] = r, this.ui.applyTune(o, r), o === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = r;
    }).catch((s) => {
      console.error(s);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(o) {
    this.uploader.uploadByFile(o, {
      onPreview: (r) => {
        this.ui.showPreloader(r);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(o) {
    this.ui.showPreloader(o), this.uploader.uploadByUrl(o);
  }
}
export {
  T as default
};
