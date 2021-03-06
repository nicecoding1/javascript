jQuery(document).ready(function(e) {
    ! function() {
        NodeList.prototype.forEach || (NodeList.prototype.forEach = Array.prototype.forEach);
        var o = PIANO_TRANSLATION.buttonNames;
        e(".mark").text(o.markNotes), e(".playAll").text(o.playNotes), e(".btn-reset").text(o.reset), e(".hideNotes").text(o.showHideNotes.hide);
        var n = !1,
            t = PIANO_TRANSLATION.noteNames;
        e("[data-note]").each(function() {
            var o = e(this)[0].dataset.note.slice(1);
            e(this).find("i").html(t[o]), e(this).find(".piano-accidental").css("font-family", "Arial Unicode MS, Lucida Sans Unicode")
        });
        var l, i, a = {
                "1c": new Howl({
                    src: ["/lydfiler/piano/28.mp3"]
                }),
                "1cis": new Howl({
                    src: ["/lydfiler/piano/29.mp3"]
                }),
                "1d": new Howl({
                    src: ["/lydfiler/piano/30.mp3"]
                }),
                "1dis": new Howl({
                    src: ["/lydfiler/piano/31.mp3"]
                }),
                "1e": new Howl({
                    src: ["/lydfiler/piano/32.mp3"]
                }),
                "1f": new Howl({
                    src: ["/lydfiler/piano/33.mp3"]
                }),
                "1fis": new Howl({
                    src: ["/lydfiler/piano/34.mp3"]
                }),
                "1g": new Howl({
                    src: ["/lydfiler/piano/35.mp3"]
                }),
                "1gis": new Howl({
                    src: ["/lydfiler/piano/36.mp3"]
                }),
                "2a": new Howl({
                    src: ["/lydfiler/piano/37.mp3"]
                }),
                "2ais": new Howl({
                    src: ["/lydfiler/piano/38.mp3"]
                }),
                "2b": new Howl({
                    src: ["/lydfiler/piano/39.mp3"]
                }),
                "2c": new Howl({
                    src: ["/lydfiler/piano/40.mp3"]
                }),
                "2cis": new Howl({
                    src: ["/lydfiler/piano/41.mp3"]
                }),
                "2d": new Howl({
                    src: ["/lydfiler/piano/42.mp3"]
                }),
                "2dis": new Howl({
                    src: ["/lydfiler/piano/43.mp3"]
                }),
                "2e": new Howl({
                    src: ["/lydfiler/piano/44.mp3"]
                }),
                "2f": new Howl({
                    src: ["/lydfiler/piano/45.mp3"]
                }),
                "2fis": new Howl({
                    src: ["/lydfiler/piano/46.mp3"]
                }),
                "2g": new Howl({
                    src: ["/lydfiler/piano/47.mp3"]
                }),
                "2gis": new Howl({
                    src: ["/lydfiler/piano/48.mp3"]
                }),
                "3a": new Howl({
                    src: ["/lydfiler/piano/49.mp3"]
                }),
                "3ais": new Howl({
                    src: ["/lydfiler/piano/50.mp3"]
                }),
                "3b": new Howl({
                    src: ["/lydfiler/piano/51.mp3"]
                }),
                "3c": new Howl({
                    src: ["/lydfiler/piano/52.mp3"]
                }),
                "3cis": new Howl({
                    src: ["/lydfiler/piano/53.mp3"]
                }),
                "3d": new Howl({
                    src: ["/lydfiler/piano/54.mp3"]
                }),
                "3dis": new Howl({
                    src: ["/lydfiler/piano/55.mp3"]
                }),
                "3e": new Howl({
                    src: ["/lydfiler/piano/56.mp3"]
                }),
                "3f": new Howl({
                    src: ["/lydfiler/piano/57.mp3"]
                }),
                "3fis": new Howl({
                    src: ["/lydfiler/piano/58.mp3"]
                }),
                "3g": new Howl({
                    src: ["/lydfiler/piano/59.mp3"]
                }),
                "3gis": new Howl({
                    src: ["/lydfiler/piano/60.mp3"]
                }),
                "4a": new Howl({
                    src: ["/lydfiler/piano/61.mp3"]
                }),
                "4ais": new Howl({
                    src: ["/lydfiler/piano/62.mp3"]
                }),
                "4b": new Howl({
                    src: ["/lydfiler/piano/63.mp3"]
                })
            },
            r = {};

        function s() {
            m[0] && (Object.values(m[0]).length >= 1 ? (e(".btn-reset").removeClass("hidden"), e(".playAll").removeClass("hidden")) : (e(".btn-reset").addClass("hidden"), e(".playAll").addClass("hidden")))
        }

        function c(o) {
            if (!h) {
                var n = o.attr("data-note");
                r[n] || o.find("i").toggleClass("marked").promise().done(function() {
                    m.length > 0 && (v = m[0]), e(this).hasClass("marked") ? (v[n] = n, m[0] = v, y = Object.values(v)) : (delete m[0][n], y = Object.values(v))
                })
            }
            var t;
            t = y.join("."), e.ajax({
                url: A + t,
                type: "GET",
                success: function(e) {
                    window.history.pushState("", "", this.url + "")
                },
                error: function() {
                    console.log("There was a problem with the request.")
                }
            })
        }
        e(".piano").bind("selectstart dragstart", function(e) {
            return e.preventDefault(), !1
        });
        var d = [],
            p = [];

        function w() {
            if (l) {
                var e = Object.values(r).filter(function(e) {
                    return e
                });
                if (Howler._volume < 1 && 0 === e.length) {
                    var o = 0;
                    d.forEach(function(e, n, t) {
                        e.fade(1, 0, 10, p[n]), ++o === t.length && setTimeout(() => {
                            Howler.volume(1)
                        }, 20)
                    })
                }
                0 === e.length && (d.forEach(function(e, o) {
                    e.fade(1, 0, 10, p[o])
                }), d = [], p = [])
            }
        }
        var f = PIANO_TRANSLATION.keys,
            u = {};
        e.map(f, function(e, o) {
            e.forEach(e => {
                u[e] = o
            })
        }), e(window).bind("keydown keyup", function(o) {
            var n = o.which;
            52 === n && o.preventDefault();
            var t = e('[data-note="' + u[o.which] + '"]'),
                f = a[u[o.which]];
            "keydown" == o.type && f ? (h || c(t), r[n] || (l = f.play(), new Date - i > 100 ? w() : d.length >= 2 && Howler.volume(.8), i = new Date, d.push(f), p.push(l), r[n] = !0, t.addClass("active"), t.parent().addClass("active"))) : "keyup" == o.type && (r[n] = !1, t.removeClass("active"), t.parent().removeClass("active"), s()), "keydown" == o.type && 32 === o.keyCode && (o.preventDefault(), g())
        });
        var h = !0,
            m = [],
            y = [],
            v = {},
            H = !1;

        function g() {
            var o = document.querySelectorAll(".marked"),
                n = [];
            o.length >= 2 ? Howler.volume(.8) : Howler.volume(1), o.forEach(function(o) {
                var t = a[o.parentNode.dataset.note],
                    i = e('[data-note="' + o.parentNode.dataset.note + '"]');
                n.push(i), l = t.play(), i.addClass("active"), H = !0, d.push(t), p.push(l), setTimeout(() => {
                    n.forEach(e => e.removeClass("active")), H = !1
                }, 200)
            })
        }
        var N = document.querySelector(".mark"),
            C = document.querySelector(".clear"),
            k = document.querySelector(".playAll");
        N.addEventListener("click", function() {
            e(this).toggleClass("active"), h = !h
        }), C.addEventListener("click", function() {
            document.querySelectorAll(".marked").forEach(function(e) {
                e.classList.remove("marked")
            }), m = [], y = [], v = {}, e.ajax({
                url: A.substring(0, A.length - 1),
                type: "GET",
                success: function() {
                    window.history.pushState("", "", this.url + "")
                },
                error: function() {
                    console.log("There was a problem with the request.")
                }
            }), e(this).addClass("hidden"), e(".playAll").addClass("hidden")
        }), k.addEventListener("click", g), document.querySelector(".hideNotes").addEventListener("click", function() {
            o.showHideNotes.hide, this.innerText == o.showHideNotes.show ? this.innerText = o.showHideNotes.hide : this.innerText = o.showHideNotes.show, allNotes = document.querySelectorAll(".key i"), allNotes.forEach(function(e) {
                e.classList.toggle("hide-notes")
            })
        }), e(".key > span").on("touchstart", function(e) {
            e.stopPropagation(), n = !1
        }).on("mousedown", function(o) {
            o.stopPropagation();
            var n = e(this),
                t = n.attr("data-note");
            l = a[t].play(), new Date - i > 150 && w(), n.addClass("active"), d.push(a[t]), p.push(l), i = new Date, h || c(n)
        }).on("touchmove", function(e) {
            n = !0
        }).on("touchend", function(o) {
            var t = e(this),
                r = t.attr("data-note");
            n || (l = a[r].play(), new Date - i > 150 && w(), t.addClass("active"), d.push(a[r]), p.push(l), i = new Date, h || c(t)), o.cancelable && o.preventDefault(), setTimeout(() => {
                e(this).removeClass("active"), s()
            }, 100)
        }).on("mouseup", function(o) {
            o.cancelable && o.preventDefault(), setTimeout(() => {
                e(this).removeClass("active"), s()
            }, 100)
        }).mouseout(function() {
            !H && e(this).removeClass("active")
        });
        var A = PIANO_TRANSLATION.url;

        function T(e) {
            var o, n, t, l, i = e.indexOf("?") + 1,
                a = e.indexOf("#") + 1 || e.length + 1,
                r = e.slice(i, a - 1),
                s = r.replace(/\+/g, " ").split("&"),
                c = {},
                d = [];
            if (r !== e && "" !== r) {
                for (o = 0; o < s.length; o++) l = s[o].split("=", 2), n = decodeURIComponent(l[0]), t = decodeURIComponent(l[1]), c.hasOwnProperty(n) || (c[n] = []), c[n].push(2 === l.length ? t : null), d.push(n);
                return d
            }
        }
        window.onload = function() {
            var e, o;
            void 0 !== T(window.location.href) && (e = T(window.location.href)[0].split("."), o = {}, e.length > 0 && "" != e && e.forEach(function(e) {
                var n = document.querySelector("[data-note='" + e + "']"),
                    t = n.dataset.note;
                n.querySelector("i").classList.add("marked"), o[t] = t
            }), m[0] = o, s())
        }, window.addEventListener("popstate", function() {
            window.location.href = document.referrer
        }, !1)
    }()
});
