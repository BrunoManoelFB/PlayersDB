var countriesMapping = (function(){
    var arr = JSON.parse('[[1,{"enName":"Afghanistan"}],[2,{"enName":"Bahrain"}],[3,{"enName":"Bangladesh"}],[4,{"enName":"Bhutan"}],[5,{"enName":"Brunei Darussalam"}],[6,{"enName":"Cambodia"}],[7,{"enName":"China PR"}],[8,{"enName":"Hong Kong"}],[9,{"enName":"India"}],[10,{"enName":"Indonesia"}],[11,{"enName":"IR Iran"}],[12,{"enName":"Iraq"}],[13,{"enName":"Japan"}],[14,{"enName":"Jordan"}],[15,{"enName":"Korea DPR"}],[16,{"enName":"Korea Republic"}],[17,{"enName":"Kuwait"}],[18,{"enName":"Laos"}],[19,{"enName":"Lebanon"}],[20,{"enName":"Macau"}],[21,{"enName":"Malaysia"}],[22,{"enName":"Maldives"}],[23,{"enName":"Mongolia"}],[24,{"enName":"Myanmar"}],[25,{"enName":"Nepal"}],[26,{"enName":"Oman"}],[27,{"enName":"Pakistan"}],[28,{"enName":"Palestine"}],[29,{"enName":"Philippines"}],[30,{"enName":"Qatar"}],[31,{"enName":"Saudi Arabia"}],[32,{"enName":"Singapore"}],[33,{"enName":"Sri Lanka"}],[34,{"enName":"Syria"}],[36,{"enName":"Thailand"}],[37,{"enName":"United Arab Emirates"}],[38,{"enName":"Vietnam"}],[39,{"enName":"Yemen"}],[40,{"enName":"Kyrgyz Republic"}],[41,{"enName":"Tajikistan"}],[42,{"enName":"Turkmenistan"}],[43,{"enName":"Timor-Leste"}],[44,{"enName":"Algeria"}],[45,{"enName":"Angola"}],[46,{"enName":"Benin"}],[47,{"enName":"Botswana"}],[48,{"enName":"Burkina Faso"}],[49,{"enName":"Burundi"}],[50,{"enName":"Cameroon"}],[51,{"enName":"Cape Verde"}],[52,{"enName":"Central African Republic"}],[53,{"enName":"Chad"}],[54,{"enName":"Comoros"}],[55,{"enName":"Congo DR"}],[56,{"enName":"Côte d\'Ivoire"}],[57,{"enName":"Djibouti"}],[58,{"enName":"Egypt"}],[59,{"enName":"Equatorial Guinea"}],[60,{"enName":"Eritrea"}],[61,{"enName":"Ethiopia"}],[62,{"enName":"Gabon"}],[63,{"enName":"Gambia"}],[64,{"enName":"Ghana"}],[65,{"enName":"Guinea"}],[66,{"enName":"Guinea-Bissau"}],[67,{"enName":"Kenya"}],[68,{"enName":"Lesotho"}],[69,{"enName":"Liberia"}],[70,{"enName":"Libya"}],[71,{"enName":"Madagascar"}],[72,{"enName":"Malawi"}],[73,{"enName":"Mali"}],[74,{"enName":"Mauritania"}],[75,{"enName":"Mauritius"}],[76,{"enName":"Morocco"}],[77,{"enName":"Mozambique"}],[78,{"enName":"Namibia"}],[79,{"enName":"Niger"}],[80,{"enName":"Nigeria"}],[81,{"enName":"Rwanda"}],[82,{"enName":"São Tomé and Príncipe"}],[83,{"enName":"Senegal"}],[84,{"enName":"Seychelles"}],[85,{"enName":"Sierra Leone"}],[86,{"enName":"Somalia"}],[87,{"enName":"South Africa"}],[88,{"enName":"Sudan"}],[89,{"enName":"Eswatini"}],[90,{"enName":"Tanzania"}],[91,{"enName":"Togo"}],[92,{"enName":"Tunisia"}],[93,{"enName":"Uganda"}],[94,{"enName":"Zambia"}],[95,{"enName":"Zimbabwe"}],[98,{"enName":"Congo"}],[103,{"enName":"Anguilla"}],[104,{"enName":"Antigua and Barbuda"}],[105,{"enName":"Aruba"}],[106,{"enName":"Bahamas"}],[107,{"enName":"Barbados"}],[108,{"enName":"Belize"}],[109,{"enName":"Bermuda"}],[110,{"enName":"Canada"}],[111,{"enName":"Cayman Islands"}],[112,{"enName":"Costa Rica"}],[113,{"enName":"Cuba"}],[114,{"enName":"Dominica"}],[115,{"enName":"Dominican Republic"}],[116,{"enName":"El Salvador"}],[117,{"enName":"Grenada"}],[119,{"enName":"Guatemala"}],[120,{"enName":"Haiti"}],[121,{"enName":"Honduras"}],[122,{"enName":"Jamaica"}],[124,{"enName":"Mexico"}],[125,{"enName":"Montserrat"}],[127,{"enName":"Nicaragua"}],[128,{"enName":"Panama"}],[129,{"enName":"Puerto Rico"}],[130,{"enName":"Saint Kitts and Nevis"}],[131,{"enName":"Saint Lucia"}],[132,{"enName":"Saint Vincent and the Grenadines"}],[133,{"enName":"Trinidad and Tobago"}],[134,{"enName":"Turks and Caicos Islands"}],[135,{"enName":"USA"}],[136,{"enName":"British Virgin Islands"}],[137,{"enName":"US Virgin Islands"}],[138,{"enName":"French Guiana"}],[139,{"enName":"Suriname"}],[140,{"enName":"Curaçao"}],[144,{"enName":"Argentina"}],[145,{"enName":"Bolivia"}],[146,{"enName":"Brazil"}],[147,{"enName":"Chile"}],[148,{"enName":"Colombia"}],[149,{"enName":"Ecuador"}],[150,{"enName":"Paraguay"}],[151,{"enName":"Peru"}],[152,{"enName":"Uruguay"}],[153,{"enName":"Venezuela"}],[159,{"enName":"Guyana"}],[161,{"enName":"American Samoa"}],[162,{"enName":"Australia"}],[163,{"enName":"Cook Islands"}],[164,{"enName":"Fiji"}],[165,{"enName":"New Caledonia"}],[166,{"enName":"New Zealand"}],[167,{"enName":"Papua New Guinea"}],[168,{"enName":"Samoa"}],[169,{"enName":"Solomon Islands"}],[170,{"enName":"Tahiti"}],[171,{"enName":"Tonga"}],[172,{"enName":"Vanuatu"}],[176,{"enName":"Guam"}],[184,{"enName":"Palau"}],[189,{"enName":"Israel"}],[190,{"enName":"Turkey"}],[191,{"enName":"Albania"}],[192,{"enName":"Andorra"}],[193,{"enName":"Armenia"}],[194,{"enName":"Austria"}],[195,{"enName":"Azerbaijan"}],[196,{"enName":"Belarus"}],[197,{"enName":"Belgium"}],[198,{"enName":"Bosnia and Herzegovina"}],[199,{"enName":"Bulgaria"}],[200,{"enName":"Croatia"}],[201,{"enName":"Cyprus"}],[202,{"enName":"Czech Republic"}],[203,{"enName":"Denmark"}],[204,{"enName":"England"}],[205,{"enName":"Estonia"}],[206,{"enName":"Faroe Islands"}],[207,{"enName":"Finland"}],[208,{"enName":"France"}],[209,{"enName":"Georgia"}],[210,{"enName":"Germany"}],[211,{"enName":"Greece"}],[212,{"enName":"Hungary"}],[213,{"enName":"Iceland"}],[214,{"enName":"Republic of Ireland"}],[215,{"enName":"Italy"}],[216,{"enName":"Kazakhstan"}],[217,{"enName":"Latvia"}],[218,{"enName":"Liechtenstein"}],[219,{"enName":"Lithuania"}],[220,{"enName":"Luxembourg"}],[221,{"enName":"North Macedonia"}],[222,{"enName":"Malta"}],[223,{"enName":"Moldova"}],[224,{"enName":"Netherlands"}],[225,{"enName":"Northern Ireland"}],[226,{"enName":"Norway"}],[227,{"enName":"Poland"}],[228,{"enName":"Portugal"}],[229,{"enName":"Romania"}],[230,{"enName":"Russia"}],[231,{"enName":"San Marino"}],[232,{"enName":"Scotland"}],[234,{"enName":"Slovakia"}],[235,{"enName":"Slovenia"}],[236,{"enName":"Spain"}],[237,{"enName":"Sweden"}],[238,{"enName":"Switzerland"}],[239,{"enName":"Ukraine"}],[240,{"enName":"Uzbekistan"}],[241,{"enName":"Wales"}],[245,{"enName":"Gibraltar"}],[250,{"enName":"Monaco"}],[260,{"enName":"- Others"}],[298,{"enName":"Chinese Taipei"}],[303,{"enName":"Serbia"}],[304,{"enName":"Montenegro"}],[311,{"enName":"Kosovo"}],[312,{"enName":"South Sudan"}]]');
    var mapping = {};
    arr.forEach(function(item) {
      mapping[item[0]] = item[1];
    });
    return mapping;
  })();
  
(this["webpackJsonppes-ted-web"] = this["webpackJsonppes-ted-web"] || []).push([[0], [, , , , , , , , , , , , function(t, e, n) {
    (function(t, n) {
        var a;
        a = function(e) {
            "use strict";
            var a = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {};
            function r(t, e) {
                return t(e = {
                    exports: {}
                }, e.exports),
                e.exports
            }
            var s = r((function(t) {
                !function(e) {
                    var n = {
                        bytesToHex: function(t) {
                            return function(t) {
                                return t.map((function(t) {
                                    return e = t.toString(16),
                                    n = 2,
                                    e.length > n ? e : Array(n - e.length + 1).join("0") + e;
                                    var e, n
                                }
                                )).join("")
                            }(t)
                        },
                        hexToBytes: function(t) {
                            if (t.length % 2 === 1)
                                throw new Error("hexToBytes can't have a string with an odd number of characters.");
                            return 0 === t.indexOf("0x") && (t = t.slice(2)),
                            t.match(/../g).map((function(t) {
                                return parseInt(t, 16)
                            }
                            ))
                        }
                    };
                    t.exports ? t.exports = n : e.convertHex = n
                }(a)
            }
            ))
              , i = r((function(t) {
                !function(e) {
                    var n = {
                        bytesToString: function(t) {
                            return t.map((function(t) {
                                return String.fromCharCode(t)
                            }
                            )).join("")
                        },
                        stringToBytes: function(t) {
                            return t.split("").map((function(t) {
                                return t.charCodeAt(0)
                            }
                            ))
                        }
                    };
                    n.UTF8 = {
                        bytesToString: function(t) {
                            return decodeURIComponent(escape(n.bytesToString(t)))
                        },
                        stringToBytes: function(t) {
                            return n.stringToBytes(unescape(encodeURIComponent(t)))
                        }
                    },
                    t.exports ? t.exports = n : e.convertString = n
                }(a)
            }
            ))
              , c = r((function(t) {
                !function(e) {
                    var n = {};
                    t.exports ? (n.bytesToHex = s.bytesToHex,
                    n.convertString = i,
                    t.exports = o) : (n.bytesToHex = e.convertHex.bytesToHex,
                    n.convertString = e.convertString,
                    e.sha256 = o);
                    var a = [];
                    !function() {
                        function t(t) {
                            for (var e = Math.sqrt(t), n = 2; n <= e; n++)
                                if (!(t % n))
                                    return !1;
                            return !0
                        }
                        function e(t) {
                            return 4294967296 * (t - (0 | t)) | 0
                        }
                        for (var n = 2, r = 0; r < 64; )
                            t(n) && (a[r] = e(Math.pow(n, 1 / 3)),
                            r++),
                            n++
                    }();
                    var r = []
                      , c = function(t, e, n) {
                        for (var s = t[0], i = t[1], c = t[2], o = t[3], l = t[4], y = t[5], u = t[6], g = t[7], B = 0; B < 64; B++) {
                            if (B < 16)
                                r[B] = 0 | e[n + B];
                            else {
                                var h = r[B - 15]
                                  , d = (h << 25 | h >>> 7) ^ (h << 14 | h >>> 18) ^ h >>> 3
                                  , b = r[B - 2]
                                  , m = (b << 15 | b >>> 17) ^ (b << 13 | b >>> 19) ^ b >>> 10;
                                r[B] = d + r[B - 7] + m + r[B - 16]
                            }
                            var k = s & i ^ s & c ^ i & c
                              , O = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22)
                              , I = g + ((l << 26 | l >>> 6) ^ (l << 21 | l >>> 11) ^ (l << 7 | l >>> 25)) + (l & y ^ ~l & u) + a[B] + r[B];
                            g = u,
                            u = y,
                            y = l,
                            l = o + I | 0,
                            o = c,
                            c = i,
                            i = s,
                            s = I + (O + k) | 0
                        }
                        t[0] = t[0] + s | 0,
                        t[1] = t[1] + i | 0,
                        t[2] = t[2] + c | 0,
                        t[3] = t[3] + o | 0,
                        t[4] = t[4] + l | 0,
                        t[5] = t[5] + y | 0,
                        t[6] = t[6] + u | 0,
                        t[7] = t[7] + g | 0
                    };
                    function o(t, e) {
                        t.constructor === String && (t = n.convertString.UTF8.stringToBytes(t));
                        var a = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]
                          , r = function(t) {
                            for (var e = [], n = 0, a = 0; n < t.length; n++,
                            a += 8)
                                e[a >>> 5] |= t[n] << 24 - a % 32;
                            return e
                        }(t)
                          , s = 8 * t.length;
                        r[s >> 5] |= 128 << 24 - s % 32,
                        r[15 + (s + 64 >> 9 << 4)] = s;
                        for (var i = 0; i < r.length; i += 16)
                            c(a, r, i);
                        var o = function(t) {
                            for (var e = [], n = 0; n < 32 * t.length; n += 8)
                                e.push(t[n >>> 5] >>> 24 - n % 32 & 255);
                            return e
                        }(a);
                        return e && e.asBytes ? o : e && e.asString ? n.convertString.bytesToString(o) : n.bytesToHex(o)
                    }
                    o.x2 = function(t, e) {
                        return o(o(t, {
                            asBytes: !0
                        }), e)
                    }
                }(a)
            }
            ));
            function o(t, e) {
                if (function(t) {
                    for (var e = t.length, n = 0; n < e; n++)
                        if (0 !== t.slice(n, n + 1).readUInt8(0))
                            return !1;
                    return !0
                }(n.concat([t.slice(64 + e, 80), t.slice(48, 64 + e)]))) {
                    var a = t.length
                      , r = a - 80
                      , s = t.slice(80, a)
                      , i = c(s)
                      , o = new n(i,"hex")
                      , l = n.concat([o.slice(16 + e, 32), o.slice(0, 16 + e)])
                      , y = l.length
                      , u = n.concat([new n(48), o]);
                    !function(t, e, n, a) {
                        for (var r = 0; r < a; r++) {
                            var s = e.readUInt8(n + r);
                            t.writeUInt8(s, n + r)
                        }
                    }(u, t, 0, 48);
                    for (var g = new n(r), B = 0; B < r; B++) {
                        var h = t.slice(80 + B, 80 + B + 1).readUInt8(0) ^ l.slice(B % y, B % y + 1).readUInt8(0);
                        g.writeUInt8(h, B)
                    }
                    return n.concat([u, g])
                }
                console.log("The input file is not yet decrypted!")
            }
            function l(t, e) {
                void 0 === e && (e = 0);
                var a = n.concat([t.slice(64 + e, 80), t.slice(48, 64 + e)])
                  , r = a.length
                  , s = t.length - 80
                  , i = new n(80);
                !function(t, e, n, a) {
                    for (var r = 0; r < a; r++) {
                        var s = e.readUInt8(n + r);
                        t.writeUInt8(s, n + r)
                    }
                }(i, t, 0, 48),
                function(t, e, n) {
                    for (var a = 0; a < n; a++)
                        t.writeUInt8(0, e + a)
                }(i, 48, 32);
                for (var c = new n(s), o = 0; o < s; o++) {
                    var l = t.slice(80 + o, 80 + o + 1).readUInt8(0) ^ a.slice(o % r, o % r + 1).readUInt8(0);
                    c.writeUInt8(l, o)
                }
                return n.concat([i, c])
            }
            for (var y = [{
                key: "coachId",
                startByte: 0,
                length: 4
            }, {
                key: "countryId",
                startByte: 4,
                length: 2
            }, {
                key: "coachUnknown1",
                startByte: 6,
                length: 2
            }, {
                key: "coachName",
                startByte: 9,
                isString: !0,
                length: 46
            }, {
                key: "imageFileName",
                startByte: 55,
                isString: !0,
                length: 33
            }], u = {
                getter: function(t) {
                    return Boolean(t)
                },
                setter: function(t) {
                    return Boolean(t) ? 1 : 0
                }
            }, g = {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return "C";
                    case 1:
                        return "B";
                    case 2:
                        return "A";
                    default:
                        return "N/A"
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "A":
                        return 2;
                    case "B":
                        return 1;
                    default:
                        return 0
                    }
                }
            }, B = {
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, h = [{
                key: "playerId",
                startByte: 0,
                length: 4
            }, Object.assign({}, {
                key: "unknown1",
                startByte: 4,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "unknown2",
                startByte: 4,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isPhysiqueChanged",
                startByte: 4,
                startBit: 2,
                lengthInBit: 1
            }, u), {
                key: "bootsAndGloveData",
                startByte: 4,
                startBit: 4,
                lengthInBit: 28,
                getter: function(t) {
                    return {
                        bootsId: 16383 & t,
                        gloveId: t >> 14 & 16383
                    }
                },
                setter: function(t) {
                    var e = t.bootsId;
                    return 268419072 & t.gloveId | 16383 & e
                }
            }, {
                key: "playerAppearanceData",
                startByte: 12,
                length: 56,
                subFormat: [{
                    key: "neckLength",
                    startByte: 0,
                    startBit: 0,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "neckSize",
                    startByte: 0,
                    startBit: 4,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "shoulderHeight",
                    startByte: 0,
                    startBit: 8,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "shoulderWidth",
                    startByte: 0,
                    startBit: 12,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "chestMeasurement",
                    startByte: 0,
                    startBit: 16,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "waistSize",
                    startByte: 0,
                    startBit: 20,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "armSize",
                    startByte: 0,
                    startBit: 24,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "armLength",
                    startByte: 0,
                    startBit: 28,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "thighSize",
                    startByte: 4,
                    startBit: 0,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "calfSize",
                    startByte: 4,
                    startBit: 4,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "legLength",
                    startByte: 4,
                    startBit: 8,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headLength",
                    startByte: 4,
                    startBit: 12,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headWidth",
                    startByte: 4,
                    startBit: 16,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headDepth",
                    startByte: 4,
                    startBit: 20,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "skinColor",
                    startByte: 32,
                    startBit: 8,
                    lengthInBit: 4
                }, {
                    key: "faceSize",
                    startByte: 36,
                    startBit: 24,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "faceHeight",
                    startByte: 36,
                    startBit: 28,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }]
            }], d = {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return "00 - No";
                    case 1:
                        return "01 - \u5077\u7375\u8005 (Goal Poacher / \u30e9\u30a4\u30f3\u30d6\u30ec\u30a4\u30ab\u30fc)";
                    case 2:
                        return "02 - \u865b\u5047\u8dd1\u4f4d (Dummy Runner / \u30c7\u30b3\u30a4\u30e9\u30f3)";
                    case 3:
                        return "03 - \u7981\u5340\u4e4b\u72d0 (Fox in the Box / \u30dc\u30c3\u30af\u30b9\u30b9\u30c8\u30e9\u30a4\u30ab\u30fc)";
                    case 4:
                        return "04 - \u76ee\u6a19\u4e2d\u92d2 (Target Man / \u30dd\u30b9\u30c8\u30d7\u30ec\u30a4\u30e4\u30fc)";
                    case 5:
                        return "05 - \u6709\u5275\u610f\u7684\u4e2d\u5834\u6307\u63ee\u5b98 (Creative Playermaker / \u30c1\u30e3\u30f3\u30b9\u30e1\u30a4\u30ab\u30fc)";
                    case 6:
                        return "06 - \u9ad8\u7522\u7ffc\u92d2 (Prolific Winger / \u30a6\u30a4\u30f3\u30b0\u30b9\u30c8\u30e9\u30a4\u30ab\u30fc)";
                    case 7:
                        return "07 - \u81ea\u7531\u5074\u7ffc (Roaming Flank / \u30a4\u30f3\u30b5\u30a4\u30c9\u30ec\u30b7\u30fc\u30d0\u30fc)";
                    case 8:
                        return "08 - \u50b3\u4e2d\u5c08\u5bb6 (Cross Specialist / \u30af\u30ed\u30b5\u30fc)";
                    case 9:
                        return "09 - \u50b3\u7d71\u5341\u865f\u4f4d\u7f6e (Classic No. 10 / \u30ca\u30f3\u30d0\u30fc10)";
                    case 10:
                        return "10 - \u5f71\u5b50\u524d\u92d2 (Hole Player / 2\u5217\u76ee\u304b\u3089\u306e\u98db\u3073\u51fa\u3057)";
                    case 11:
                        return "11 - \u5168\u80fd\u4e2d\u5834 (Box-to-box / \u30dc\u30c3\u30af\u30b9\u30c8\u30a5\u30dc\u30c3\u30af\u30b9)";
                    case 12:
                        return "12 - \u7834\u58de\u578b\u4e2d\u5834 (The Destroyer / \u30cf\u30fc\u30c9\u30d6\u30ec\u30b9)";
                    case 13:
                        return "13 - \u6307\u63ee\u5b98 (Orchestrator / \u30d7\u30ec\u30a4\u30e1\u30a4\u30ab\u30fc)";
                    case 14:
                        return "14 - \u9760\u5c71 (Anchor Man / \u30a2\u30f3\u30ab\u30fc)";
                    case 15:
                        return "15 - \u5efa\u7acb (Build Up / \u30d3\u30eb\u30c9\u30a2\u30c3\u30d7)";
                    case 16:
                        return "16 - \u9032\u653b\u578b\u5f8c\u885b (Offensive Full-back / \u653b\u64ca\u7684\u30b5\u30a4\u30c9\u30d0\u30c3\u30af)";
                    case 17:
                        return "17 - \u758a\u74e6\u5f0f\u9598\u4f4d (Full-back Finisher / \u30a4\u30f3\u30ca\u30fc\u30e9\u30c3\u30d7\u30b5\u30a4\u30c9\u30d0\u30c3\u30af)";
                    case 18:
                        return "18 - \u9632\u5b88\u578b\u5f8c\u885b (Defensive Full-back / \u5b88\u5099\u7684\u30b5\u30a4\u30c9\u30d0\u30c3\u30af)";
                    case 19:
                        return "19 - \u984d\u5916\u524d\u92d2 (Extra Frontman / \u30aa\u30fc\u30d0\u30fc\u30e9\u30c3\u30d7)";
                    case 20:
                        return "20 - \u9032\u653b\u578b\u5b88\u9580\u54e1 (Offensive Goalkeeper / \u653b\u64ca\u7684GK)";
                    case 21:
                        return "21 - \u9632\u5b88\u578b\u5b88\u9580\u54e1 (Defensive Goalkeeper / \u5b88\u5099\u7684GK)";
                    default:
                        return t
                    }
                },
                setter: function(t) {
                    return parseInt(t)
                }
            }, b = [{
                key: "playerId",
                startByte: 0,
                length: 4
            }, {
                key: "playerName",
                startByte: 52,
                length: 46,
                isString: !0
            }, {
                key: "callnameId",
                startByte: 4,
                length: 4
            }, {
                key: "shirtName",
                startByte: 98,
                length: 18,
                isString: !0
            }, Object.assign({}, {
                key: "isPlayerNameChanged",
                startByte: 31,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isBasicSettingChanged",
                startByte: 44,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isRegisteredPositionChanged",
                startByte: 44,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isPositionChanged",
                startByte: 44,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isStatChanged",
                startByte: 44,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isSpecialSkillChanged",
                startByte: 44,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isPlayingStyleChanged",
                startByte: 44,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "is\u96fb\u8166\u6bd4\u8cfd\u98a8\u683cChanged",
                startByte: 44,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "isMotionChanged",
                startByte: 44,
                startBit: 7,
                lengthInBit: 1
            }, u), {
                key: "countryId1",
                startByte: 8,
                length: 2
            }, {
                key: "age",
                startByte: 43,
                startBit: 2,
                lengthInBit: 6
            }, Object.assign({}, {
                key: "isFromLiveUpdate",
                startByte: 45,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "strongerFoot",
                startByte: 45,
                startBit: 1,
                lengthInBit: 1
            }, {
                getter: function(t) {
                    return t ? "L" : "R"
                },
                setter: function(t) {
                    return "L" === t ? 1 : 0
                }
            }), Object.assign({}, {
                key: "registeredPosition",
                startByte: 32,
                startBit: 0,
                lengthInBit: 4
            }, {
                getter: function(t) {
                    return t
                },
                setter: function(t) {
                    return t
                }
            }), Object.assign({}, {
                key: "positionGk",
                startByte: 39,
                startBit: 4,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionCb",
                startByte: 39,
                startBit: 6,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionLb",
                startByte: 40,
                startBit: 0,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionRb",
                startByte: 40,
                startBit: 2,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionDmf",
                startByte: 40,
                startBit: 4,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionCmf",
                startByte: 40,
                startBit: 6,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionLmf",
                startByte: 41,
                startBit: 0,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionRmf",
                startByte: 41,
                startBit: 2,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionAmf",
                startByte: 41,
                startBit: 4,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionLwf",
                startByte: 41,
                startBit: 6,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionRwf",
                startByte: 42,
                startBit: 0,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionSs",
                startByte: 42,
                startBit: 2,
                lengthInBit: 2
            }, g), Object.assign({}, {
                key: "positionCf",
                startByte: 42,
                startBit: 4,
                lengthInBit: 2
            }, g), {
                key: "attackingProwess",
                startByte: 14,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "ballControl",
                startByte: 14,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "dribbling",
                startByte: 38,
                startBit: 1,
                lengthInBit: 7
            }, {
                key: "lowPass",
                startByte: 16,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "loftedPass",
                startByte: 16,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "finishing",
                startByte: 17,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "placeKicking",
                startByte: 18,
                startBit: 5,
                lengthInBit: 7
            }, {
                key: "swerve",
                startByte: 33,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "header",
                startByte: 20,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "defensiveProwess",
                startByte: 20,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "ballWinning",
                startByte: 21,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "kickingPower",
                startByte: 22,
                startBit: 5,
                lengthInBit: 7
            }, {
                key: "speed",
                startByte: 34,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "explosivePower",
                startByte: 24,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "bodyControl",
                startByte: 24,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "physicalContact",
                startByte: 25,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "jump",
                startByte: 26,
                startBit: 5,
                lengthInBit: 7
            }, {
                key: "goalkeeping",
                startByte: 36,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "gkCatch",
                startByte: 28,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "gkClearing",
                startByte: 28,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "gkReflexes",
                startByte: 29,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "gkCoverage",
                startByte: 30,
                startBit: 5,
                lengthInBit: 7
            }, {
                key: "stamina",
                startByte: 36,
                startBit: 0,
                lengthInBit: 7
            }, Object.assign({}, {
                key: "weakFootUsage",
                startByte: 15,
                startBit: 6,
                lengthInBit: 2
            }, B), Object.assign({}, {
                key: "weakFootAccuracy",
                startByte: 39,
                startBit: 0,
                lengthInBit: 2
            }, B), Object.assign({}, {
                key: "form",
                startByte: 31,
                startBit: 4,
                lengthInBit: 3
            }, B), Object.assign({}, {
                key: "injuryResistance",
                startByte: 39,
                startBit: 2,
                lengthInBit: 2
            }, B), Object.assign({}, {
                key: "scissorsFient",
                startByte: 46,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "doubleTouch",
                startByte: 46,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "flipFlap",
                startByte: 46,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "marseilleTurn",
                startByte: 46,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "sombrero",
                startByte: 46,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "crossOverTurn",
                startByte: 46,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "cutBehindAndTurn",
                startByte: 46,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "scotchMove",
                startByte: 47,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "stepOnSkillControl",
                startByte: 47,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "heading",
                startByte: 47,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "longRangeDrive",
                startByte: 47,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "chipShotControl",
                startByte: 47,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "knuckleShot",
                startByte: 47,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "dippingShot",
                startByte: 47,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "risingShot",
                startByte: 47,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "acrobaticFinishing",
                startByte: 48,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "heelTrick",
                startByte: 48,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "firstTimeShot",
                startByte: 48,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "oneTouchPass",
                startByte: 48,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "weightedPass",
                startByte: 48,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "pinpointCrossing",
                startByte: 48,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "outsideCurler",
                startByte: 48,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "rabona",
                startByte: 48,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "noLookPass",
                startByte: 49,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "lowLoftedPass",
                startByte: 49,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "gkLowPunt",
                startByte: 49,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "gkHighPunt",
                startByte: 49,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "longThrow",
                startByte: 49,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "gkLongThrow",
                startByte: 49,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "penaltySpecialist",
                startByte: 49,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "gkPenaltySaver",
                startByte: 49,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "malicia",
                startByte: 50,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "manMarking",
                startByte: 50,
                startBit: 1,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "trackBack",
                startByte: 50,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "interception",
                startByte: 50,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "acrobaticClear",
                startByte: 50,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "captaincy",
                startByte: 50,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "superSub",
                startByte: 50,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "fightingSpirit",
                startByte: 50,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "playingStyle",
                startByte: 32,
                startBit: 5,
                lengthInBit: 5
            }, d), Object.assign({}, {
                key: "trickster",
                startByte: 45,
                startBit: 2,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "mazingRun",
                startByte: 45,
                startBit: 3,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "speedingBullet",
                startByte: 45,
                startBit: 4,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "incisiveRun",
                startByte: 45,
                startBit: 5,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "longBallExpert",
                startByte: 45,
                startBit: 6,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "earlyCross",
                startByte: 45,
                startBit: 7,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "longRanger",
                startByte: 46,
                startBit: 0,
                lengthInBit: 1
            }, u), Object.assign({}, {
                key: "reputation",
                startByte: 35,
                startBit: 5,
                lengthInBit: 3
            }, B), {
                key: "height",
                startByte: 10,
                length: 1
            }, {
                key: "weight",
                startByte: 11,
                length: 1
            }, Object.assign({}, {
                key: "dribHunch",
                startByte: 42,
                startBit: 6,
                lengthInBit: 2
            }, B), Object.assign({}, {
                key: "dribArmMove",
                startByte: 19,
                startBit: 4,
                lengthInBit: 3
            }, B), Object.assign({}, {
                key: "runHunch",
                startByte: 43,
                startBit: 0,
                lengthInBit: 2
            }, B), Object.assign({}, {
                key: "runArmMove",
                startByte: 23,
                startBit: 4,
                lengthInBit: 3
            }, B), Object.assign({}, {
                key: "ckMotion",
                startByte: 27,
                startBit: 4,
                lengthInBit: 3
            }, B), Object.assign({}, {
                key: "fkMotion",
                startByte: 33,
                startBit: 2,
                lengthInBit: 4
            }, B), Object.assign({}, {
                key: "pkMotion",
                startByte: 37,
                startBit: 6,
                lengthInBit: 2
            }, B), {
                key: "goalCelebration1",
                startByte: 12,
                length: 1
            }, {
                key: "goalCelebration2",
                startByte: 13,
                length: 1
            }, {
                key: "playerAppearance",
                startByte: 116,
                length: 72,
                subFormat: h
            }], m = [{
                key: "teamId",
                startByte: 0,
                length: 4
            }, {
                key: "playerIds",
                startByte: 4,
                length: 4,
                isArray: !0,
                arrayLength: 40
            }, {
                key: "shirtNumbers",
                startByte: 164,
                length: 2,
                isArray: !0,
                arrayLength: 40
            }], k = [{
                key: "positions",
                startByte: 0,
                length: 1,
                arrayLength: 11
            }, {
                key: "placements",
                startByte: 11,
                length: 2,
                arrayLength: 11,
                subFormat: [{
                    key: "x",
                    startByte: 0,
                    length: 1
                }, {
                    key: "y",
                    startByte: 1,
                    length: 1
                }]
            }], O = [{
                key: "\u53cd\u653b/\u63a7\u7403\u904a\u6232",
                startByte: 0,
                length: 1
            }, {
                key: "\u9577\u50b3/\u77ed\u50b3",
                startByte: 1,
                length: 1
            }, {
                key: "\u5074\u7ffc/\u4e2d\u592e",
                startByte: 2,
                length: 1
            }, {
                key: "\u4fdd\u6301\u968a\u5f62/\u5f48\u6027",
                startByte: 3,
                length: 1
            }, {
                key: "\u524d\u7dda\u65bd\u58d3/\u5168\u9ad4\u7403\u54e1\u9632\u5b88",
                startByte: 4,
                length: 1
            }, {
                key: "\u9632\u5b88\u4e2d\u592e/\u5074\u7ffc",
                startByte: 5,
                length: 1
            }, {
                key: "\u7a4d\u6975\u6027/\u9632\u5b88",
                startByte: 6,
                length: 1
            }, {
                key: "unk1",
                startByte: 7,
                length: 1
            }, {
                key: "unk2",
                startByte: 8,
                length: 1
            }], I = [{
                key: "advInstruction",
                startByte: 0,
                length: 1
            }, {
                key: "unused1",
                startByte: 1,
                length: 3
            }, {
                key: "playerIndex",
                startByte: 4,
                length: 1
            }, {
                key: "unused2",
                startByte: 5,
                length: 3
            }], j = [{
                key: "\u652f\u63f4",
                startByte: 0,
                length: 1
            }, {
                key: "unk3",
                startByte: 1,
                length: 1
            }, {
                key: "\u9632\u7dda",
                startByte: 2,
                length: 1
            }, {
                key: "\u56b4\u5bc6",
                startByte: 3,
                length: 1
            }, {
                key: "unk4",
                startByte: 4,
                length: 1
            }, {
                key: "unused1",
                startByte: 5,
                length: 3
            }, {
                key: "unused2",
                startByte: 8,
                length: 4
            }], f = [{
                key: "teamId",
                startByte: 0,
                length: 4
            }, {
                key: "teamName",
                startByte: 88,
                length: 70,
                isString: !0
            }, {
                key: "shortName",
                startByte: 158,
                length: 4,
                isString: !0
            }, {
                key: "emblemImageListIndex",
                startByte: 8,
                length: 2
            }, {
                key: "callname",
                startByte: 16,
                length: 2
            }, {
                key: "isAtLeastOneNameEdited",
                startByte: 23,
                startBit: 6,
                lengthInBit: 1
            }, {
                key: "isEmblemImageSet",
                startByte: 23,
                startBit: 7,
                lengthInBit: 1
            }, {
                key: "isStadiumNameEdited",
                startByte: 27,
                startBit: 7,
                lengthInBit: 1
            }, {
                key: "stadiumName",
                startByte: 162,
                length: 120,
                isString: !0
            }, {
                key: "emblemImageFileName",
                startByte: 347,
                length: 32,
                isString: !0
            }, {
                key: "stadiumImageFileName",
                startByte: 380,
                length: 32,
                isString: !0
            }, {
                key: "uniformIds",
                startByte: 32,
                arrayLength: 10,
                length: 4
            }], A = [{
                key: "uniformId",
                startByte: 0,
                length: 4
            }, {
                key: "imageListIndex",
                startByte: 4,
                startBit: 0,
                lengthInBit: 11
            }, {
                key: "isCollarChanged",
                startByte: 23,
                startBit: 0,
                lengthInBit: 1
            }, {
                key: "isMarkingChanged",
                startByte: 31,
                startBit: 6,
                lengthInBit: 1
            }, {
                key: "isImageSet",
                startByte: 31,
                startBit: 7,
                lengthInBit: 1
            }, {
                key: "hasChestNumber",
                startByte: 39,
                startBit: 7,
                lengthInBit: 1
            }, {
                key: "nameR",
                startByte: 57,
                startBit: 4,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "nameG",
                startByte: 58,
                startBit: 2,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "nameB",
                startByte: 59,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "numberR",
                startByte: 62,
                startBit: 2,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "numberG",
                startByte: 63,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "numberB",
                startByte: 64,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "chestNumberR",
                startByte: 67,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "chestNumberG",
                startByte: 68,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "chestNumberB",
                startByte: 68,
                startBit: 6,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortNumberR",
                startByte: 72,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortNumberG",
                startByte: 72,
                startBit: 6,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortNumberB",
                startByte: 73,
                startBit: 4,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "collar",
                startByte: 76,
                startBit: 6,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "namePosition",
                startByte: 79,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "nameSize",
                startByte: 7,
                startBit: 3,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 10
                },
                setter: function(t) {
                    return t + 10
                }
            }, {
                key: "nameFontStyle",
                startByte: 81,
                startBit: 0,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "numberPosition",
                startByte: 81,
                startBit: 5,
                lengthInBit: 5
            }, {
                key: "numberSize",
                startByte: 82,
                startBit: 2,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 14
                },
                setter: function(t) {
                    return t + 14
                }
            }, {
                key: "numberFontStyle",
                startByte: 82,
                startBit: 7,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "nameArcStyle",
                startByte: 83,
                startBit: 4,
                lengthInBit: 2,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "shortNumberVerticalPosition",
                startByte: 85,
                startBit: 2,
                lengthInBit: 5
            }, {
                key: "shortNumberHorizontalPosition",
                startByte: 85,
                startBit: 7,
                lengthInBit: 5
            }, {
                key: "shortNumberSize",
                startByte: 86,
                startBit: 4,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 14
                },
                setter: function(t) {
                    return t + 14
                }
            }, {
                key: "shortNumberSide",
                startByte: 88,
                startBit: 5,
                lengthInBit: 2,
                getter: function(t) {
                    switch (t) {
                    case 0:
                    default:
                        return !1;
                    case 1:
                        return "left";
                    case 2:
                        return "right"
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "left":
                        return 1;
                    case "right":
                        return 2;
                    default:
                        return 0
                    }
                }
            }, {
                key: "isImageSmall",
                startByte: 35,
                startBit: 6,
                lengthInBit: 1
            }, {
                key: "imageFileName",
                startByte: 98,
                length: 32,
                isString: !0
            }, {
                key: "shirtR",
                startByte: 23,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shirtG",
                startByte: 89,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shirtB",
                startByte: 89,
                startBit: 6,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortR",
                startByte: 32,
                startBit: 6,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortG",
                startByte: 33,
                startBit: 4,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "shortB",
                startByte: 34,
                startBit: 2,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "sockR",
                startByte: 41,
                startBit: 4,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "sockG",
                startByte: 42,
                startBit: 2,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }, {
                key: "sockB",
                startByte: 43,
                startBit: 0,
                lengthInBit: 6,
                getter: function(t) {
                    return t << 2
                },
                setter: function(t) {
                    return t >> 2
                }
            }], N = [{
                key: "team",
                startByte: 80,
                length: 416,
                subFormat: f
            }, {
                key: "coach",
                startByte: 496,
                length: 88,
                subFormat: y
            }, {
                key: "playerAssignment",
                startByte: 584,
                length: 244,
                subFormat: m
            }, {
                key: "tactics",
                startByte: 828,
                length: 628,
                subFormat: [{
                    key: "teamId",
                    startByte: 0,
                    length: 4
                }, {
                    key: "preset1Formations",
                    startByte: 4,
                    length: 33,
                    arrayLength: 3,
                    subFormat: k
                }, {
                    key: "preset1Instructions",
                    startByte: 103,
                    length: 9,
                    subFormat: O
                }, {
                    key: "preset1AdvInstruction1",
                    startByte: 112,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset1AdvInstruction2",
                    startByte: 120,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset1AdvInstruction3",
                    startByte: 128,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset1AdvInstruction4",
                    startByte: 136,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset1Settings",
                    startByte: 144,
                    length: 18,
                    subFormat: j
                }, {
                    key: "preset2Formations",
                    startByte: 164,
                    length: 33,
                    arrayLength: 3,
                    subFormat: k
                }, {
                    key: "preset2Instructions",
                    startByte: 263,
                    length: 9,
                    subFormat: O
                }, {
                    key: "preset2AdvInstruction1",
                    startByte: 272,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset2AdvInstruction2",
                    startByte: 280,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset2AdvInstruction3",
                    startByte: 288,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset2AdvInstruction4",
                    startByte: 296,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset2Settings",
                    startByte: 304,
                    length: 18,
                    subFormat: j
                }, {
                    key: "preset3Formations",
                    startByte: 324,
                    length: 33,
                    arrayLength: 3,
                    subFormat: k
                }, {
                    key: "preset3Instructions",
                    startByte: 423,
                    length: 9,
                    subFormat: O
                }, {
                    key: "preset3AdvInstruction1",
                    startByte: 432,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset3AdvInstruction2",
                    startByte: 440,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset3AdvInstruction3",
                    startByte: 448,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset3AdvInstruction4",
                    startByte: 456,
                    length: 8,
                    subFormat: I
                }, {
                    key: "preset3Settings",
                    startByte: 464,
                    length: 18,
                    subFormat: j
                }, {
                    key: "playerOrders",
                    startByte: 484,
                    length: 1,
                    arrayLength: 40
                }, {
                    key: "longFkTaker",
                    startByte: 524,
                    length: 1
                }, {
                    key: "shortFkTaker",
                    startByte: 525,
                    length: 1
                }, {
                    key: "secondFkTaker",
                    startByte: 526,
                    length: 1
                }, {
                    key: "leftCkTaker",
                    startByte: 527,
                    length: 1
                }, {
                    key: "rightCkTaker",
                    startByte: 528,
                    length: 1
                }, {
                    key: "pkTaker",
                    startByte: 529,
                    length: 1
                }, {
                    key: "playerAttacking1",
                    startByte: 530,
                    length: 1
                }, {
                    key: "playerAttacking2",
                    startByte: 531,
                    length: 1
                }, {
                    key: "playerAttacking3",
                    startByte: 532,
                    length: 1
                }, {
                    key: "captain",
                    startByte: 533,
                    length: 1
                }, {
                    key: "autoSub",
                    startByte: 534,
                    length: 1
                }, {
                    key: "autoOffsideTrap",
                    startByte: 535,
                    length: 1
                }, {
                    key: "autoPreset",
                    startByte: 536,
                    length: 1
                }, {
                    key: "switchPreset",
                    startByte: 537,
                    length: 1
                }, {
                    key: "autoAtkLevel",
                    startByte: 538,
                    length: 1
                }, {
                    key: "autoLineup",
                    startByte: 539,
                    length: 1
                }]
            }, {
                key: "uniforms",
                startByte: 1456,
                length: 132,
                arrayLength: 5,
                subFormat: A
            }, {
                key: "players",
                startByte: 2116,
                length: 188,
                arrayLength: 40,
                subFormat: b
            }], p = [], S = 0; S < y.length; S++)
                y[S].key,
                p[S] = y[S];
            for (var E = [], R = 0; R < b.length; R++)
                switch (b[R].key) {
                case "playerName":
                    E[R] = {
                        key: "playerName",
                        startByte: 51,
                        length: 46,
                        isString: !0
                    };
                    break;
                case "shirtName":
                    E[R] = {
                        key: "shirtName",
                        startByte: 97,
                        length: 19,
                        isString: !0
                    };
                    break;
                default:
                    E[R] = b[R]
                }
            var x = [{
                key: "positions",
                startByte: 0,
                length: 1,
                arrayLength: 11
            }, {
                key: "placements",
                startByte: 11,
                length: 2,
                arrayLength: 11,
                subFormat: [{
                    key: "x",
                    startByte: 0,
                    length: 1
                }, {
                    key: "y",
                    startByte: 1,
                    length: 1
                }]
            }]
              , C = [{
                key: "\u53cd\u653b/\u63a7\u7403\u904a\u6232",
                startByte: 0,
                length: 1
            }, {
                key: "\u9577\u50b3/\u77ed\u50b3",
                startByte: 1,
                length: 1
            }, {
                key: "\u5074\u7ffc/\u4e2d\u592e",
                startByte: 2,
                length: 1
            }, {
                key: "\u4fdd\u6301\u968a\u5f62/\u5f48\u6027",
                startByte: 3,
                length: 1
            }, {
                key: "\u524d\u7dda\u65bd\u58d3/\u5168\u9ad4\u7403\u54e1\u9632\u5b88",
                startByte: 4,
                length: 1
            }, {
                key: "\u9632\u5b88\u4e2d\u592e/\u5074\u7ffc",
                startByte: 5,
                length: 1
            }, {
                key: "\u7a4d\u6975\u6027/\u9632\u5b88",
                startByte: 6,
                length: 1
            }, {
                key: "unk1",
                startByte: 7,
                length: 1
            }, {
                key: "unk2",
                startByte: 8,
                length: 1
            }]
              , v = [{
                key: "advInstruction",
                startByte: 0,
                length: 1
            }, {
                key: "playerIndex",
                startByte: 1,
                length: 1
            }, {
                key: "unused",
                startByte: 2,
                length: 2,
                setter: function() {
                    return 0
                }
            }]
              , L = [{
                key: "\u652f\u63f4",
                startByte: 0,
                length: 1
            }, {
                key: "unk3",
                startByte: 1,
                length: 1
            }, {
                key: "\u9632\u7dda",
                startByte: 2,
                length: 1
            }, {
                key: "\u56b4\u5bc6",
                startByte: 3,
                length: 1
            }, {
                key: "unk4",
                startByte: 4,
                length: 1
            }, {
                key: "unused1",
                startByte: 5,
                length: 3
            }, {
                key: "unused2",
                startByte: 8,
                length: 4
            }]
              , T = [{
                key: "team",
                startByte: 80,
                length: 416,
                subFormat: f
            }, {
                key: "coach",
                startByte: 496,
                length: 88,
                subFormat: p
            }, {
                key: "playerAssignment",
                startByte: 584,
                length: 244,
                subFormat: m
            }, {
                key: "tactics",
                startByte: 828,
                length: 628,
                subFormat: [{
                    key: "teamId",
                    startByte: 0,
                    length: 4
                }, {
                    key: "preset1Formations",
                    startByte: 4,
                    length: 33,
                    arrayLength: 3,
                    subFormat: x
                }, {
                    key: "preset1Instructions",
                    startByte: 103,
                    length: 9,
                    subFormat: C
                }, {
                    key: "preset1AdvInstruction1",
                    startByte: 112,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset1AdvInstruction2",
                    startByte: 116,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset1AdvInstruction3",
                    startByte: 120,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset1AdvInstruction4",
                    startByte: 124,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset1Settings",
                    startByte: 128,
                    length: 18,
                    subFormat: L
                }, {
                    key: "preset2Formations",
                    startByte: 148,
                    length: 33,
                    arrayLength: 3,
                    subFormat: x
                }, {
                    key: "preset2Instructions",
                    startByte: 247,
                    length: 9,
                    subFormat: C
                }, {
                    key: "preset2AdvInstruction1",
                    startByte: 256,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset2AdvInstruction2",
                    startByte: 260,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset2AdvInstruction3",
                    startByte: 264,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset2AdvInstruction4",
                    startByte: 268,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset2Settings",
                    startByte: 272,
                    length: 18,
                    subFormat: L
                }, {
                    key: "preset3Formations",
                    startByte: 292,
                    length: 33,
                    arrayLength: 3,
                    subFormat: x
                }, {
                    key: "preset3Instructions",
                    startByte: 391,
                    length: 9,
                    subFormat: C
                }, {
                    key: "preset3AdvInstruction1",
                    startByte: 400,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset3AdvInstruction2",
                    startByte: 404,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset3AdvInstruction3",
                    startByte: 408,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset3AdvInstruction4",
                    startByte: 412,
                    length: 4,
                    subFormat: v
                }, {
                    key: "preset3Settings",
                    startByte: 416,
                    length: 18,
                    subFormat: L
                }, {
                    key: "playerOrders",
                    startByte: 436,
                    length: 1,
                    arrayLength: 40
                }, {
                    key: "longFkTaker",
                    startByte: 476,
                    length: 1
                }, {
                    key: "shortFkTaker",
                    startByte: 477,
                    length: 1
                }, {
                    key: "secondFkTaker",
                    startByte: 478,
                    length: 1
                }, {
                    key: "leftCkTaker",
                    startByte: 479,
                    length: 1
                }, {
                    key: "rightCkTaker",
                    startByte: 480,
                    length: 1
                }, {
                    key: "pkTaker",
                    startByte: 481,
                    length: 1
                }, {
                    key: "playerAttacking1",
                    startByte: 482,
                    length: 1
                }, {
                    key: "playerAttacking2",
                    startByte: 483,
                    length: 1
                }, {
                    key: "playerAttacking3",
                    startByte: 484,
                    length: 1
                }, {
                    key: "captain",
                    startByte: 485,
                    length: 1
                }, {
                    key: "autoSub",
                    startByte: 486,
                    length: 1
                }, {
                    key: "autoOffsideTrap",
                    startByte: 487,
                    length: 1
                }, {
                    key: "autoPreset",
                    startByte: 488,
                    length: 1
                }, {
                    key: "switchPreset",
                    startByte: 489,
                    length: 1
                }, {
                    key: "autoAtkLevel",
                    startByte: 490,
                    length: 1
                }, {
                    key: "autoLineup",
                    startByte: 491,
                    length: 1
                }]
            }, {
                key: "uniforms",
                startByte: 1456,
                length: 132,
                arrayLength: 5,
                subFormat: A
            }, {
                key: "players",
                startByte: 2116,
                length: 188,
                arrayLength: 40,
                subFormat: E
            }]
              , P = Object.freeze({
                __proto__: null,
                recordLength: 9648,
                isFullyCovered: !0,
                format: T
            });
            function F(t) {
                return l(t, 3)
            }
            var w = {
                getter: function(t) {
                    return Boolean(t)
                },
                setter: function(t) {
                    return Boolean(t) ? 1 : 0
                }
            }
              , M = {
                getter: function(t) {
                    return t + 40
                },
                setter: function(t) {
                    return t - 40
                }
            }
              , U = {
                getter: function(t) {
                    return t
                },
                setter: function(t) {
                    switch (t) {
                    case "R":
                        return 0;
                    case "L":
                        return 1;
                    default:
                        return t
                    }
                }
            }
              , K = {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return "C";
                    case 1:
                        return "B";
                    case 2:
                        return "A";
                    case 3:
                        return "B3";
                    default:
                        return "N/A"
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "B3":
                        return 3;
                    case "A":
                        return 2;
                    case "B":
                        return 1;
                    default:
                        return 0
                    }
                }
            }
              , _ = {
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }
              , D = {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return "GK";
                    case 1:
                        return "CB";
                    case 2:
                        return "LB";
                    case 3:
                        return "RB";
                    case 4:
                        return "DMF";
                    case 5:
                        return "CMF";
                    case 6:
                        return "LMF";
                    case 7:
                        return "RMF";
                    case 8:
                        return "AMF";
                    case 9:
                        return "LWF";
                    case 10:
                        return "RWF";
                    case 11:
                        return "SS";
                    case 12:
                        return "CF";
                    default:
                        return t
                    }
                },
                setter: function(t) {
                    switch (t = t && t.toUpperCase && t.toUpperCase() || t) {
                    case "GK":
                    default:
                        return 0;
                    case "CB":
                        return 1;
                    case "LB":
                        return 2;
                    case "RB":
                        return 3;
                    case "DMF":
                        return 4;
                    case "CMF":
                        return 5;
                    case "LMF":
                        return 6;
                    case "RMF":
                        return 7;
                    case "AMF":
                        return 8;
                    case "LWF":
                        return 9;
                    case "RWF":
                        return 10;
                    case "SS":
                        return 11;
                    case "CF":
                        return 12
                    }
                }
            }
              , G = [{
                key: "coachId",
                startByte: 0,
                length: 4
            }, {
                key: "countryId",
                startByte: 4,
                length: 2
            }, {
                key: "imageListIndex",
                startByte: 6,
                length: 2,
                isSigned: !0
            }, Object.assign({}, {
                key: "isCoachNameModified",
                startByte: 8,
                startBit: 0,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isImageSet",
                startByte: 8,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isFromLiveUpdate",
                startByte: 8,
                startBit: 7,
                lengthInBit: 1
            }, w), {
                key: "coachName",
                startByte: 9,
                isString: !0,
                length: 46
            }, {
                key: "imageFileName",
                startByte: 55,
                isString: !0,
                length: 33
            }]
              , H = [{
                key: "dataPackMajorVersion",
                startByte: 0,
                length: 2
            }, {
                key: "dataPackMinorVersion",
                startByte: 2,
                length: 2
            }, {
                key: "dataPackPatchVersion",
                startByte: 4,
                length: 2
            }, {
                key: "unknown1",
                startByte: 6,
                length: 2
            }, Object.assign({}, {
                key: "isLicensedTeam",
                startByte: 8,
                length: 2
            }, w), {
                key: "unknown3",
                startByte: 10,
                length: 2
            }]
              , V = [{
                key: "playerId",
                startByte: 0,
                length: 4
            }, Object.assign({}, {
                key: "unknown1",
                startByte: 4,
                startBit: 0,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "unknown2",
                startByte: 4,
                startBit: 1,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isPhysiqueChanged",
                startByte: 4,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "unsafe_isBootsOrGloveChanged",
                startByte: 4,
                startBit: 3,
                lengthInBit: 1
            }, w), {
                key: "bootsId",
                startByte: 4,
                startBit: 4,
                lengthInBit: 14
            }, {
                key: "gloveId",
                startByte: 4,
                startBit: 18,
                lengthInBit: 14
            }, {
                key: "relinkPlayerId",
                startByte: 8,
                length: 3
            }, {
                key: "playerAppearanceData",
                startByte: 12,
                length: 56,
                subFormat: [{
                    key: "neckLength",
                    startByte: 0,
                    startBit: 0,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "neckSize",
                    startByte: 0,
                    startBit: 4,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "shoulderHeight",
                    startByte: 0,
                    startBit: 8,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "shoulderWidth",
                    startByte: 0,
                    startBit: 12,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "chestMeasurement",
                    startByte: 0,
                    startBit: 16,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "waistSize",
                    startByte: 0,
                    startBit: 20,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "armSize",
                    startByte: 0,
                    startBit: 24,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "armLength",
                    startByte: 0,
                    startBit: 28,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "thighSize",
                    startByte: 4,
                    startBit: 0,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "calfSize",
                    startByte: 4,
                    startBit: 4,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "legLength",
                    startByte: 4,
                    startBit: 8,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headLength",
                    startByte: 4,
                    startBit: 12,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headWidth",
                    startByte: 4,
                    startBit: 16,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "headDepth",
                    startByte: 4,
                    startBit: 20,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "skinColor",
                    startByte: 32,
                    startBit: 8,
                    lengthInBit: 4
                }, {
                    key: "faceSize",
                    startByte: 36,
                    startBit: 24,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }, {
                    key: "faceHeight",
                    startByte: 36,
                    startBit: 28,
                    lengthInBit: 4,
                    getter: function(t) {
                        return t - 7
                    },
                    setter: function(t) {
                        return t + 7
                    }
                }]
            }]
              , W = [{
                key: "playerId",
                startByte: 0,
                length: 4
            }, {
                key: "callnameId",
                startByte: 4,
                length: 4
            }, {
                key: "playerName",
                startByte: 54,
                length: 61,
                isString: !0
            }, {
                key: "clubShirtName",
                startByte: 115,
                length: 61,
                isString: !0
            }, {
                key: "ntShirtName",
                startByte: 176,
                length: 61,
                isString: !0
            }, {
                key: "countryId1",
                startByte: 8,
                length: 2
            }, {
                key: "height",
                startByte: 10,
                length: 1
            }, {
                key: "weight",
                startByte: 11,
                length: 1
            }, {
                key: "goalCelebration1",
                startByte: 12,
                length: 1
            }, {
                key: "goalCelebration2",
                startByte: 13,
                length: 1
            }, {
                key: "age",
                startByte: 32,
                startBit: 7,
                lengthInBit: 6
            }, Object.assign({}, {
                key: "isFromLiveUpdate",
                startByte: 44,
                startBit: 28,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "strongerFoot",
                startByte: 44,
                startBit: 29,
                lengthInBit: 1
            }, U), Object.assign({}, {
                key: "strongerHand",
                startByte: 44,
                startBit: 30,
                lengthInBit: 1
            }, U), Object.assign({}, {
                key: "isPlayerNameChanged",
                startByte: 28,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "unsafe_isDifferenceFromDefault",
                startByte: 44,
                startBit: 22,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "registeredPosition",
                startByte: 32,
                startBit: 13,
                lengthInBit: 4
            }, D), Object.assign({}, {
                key: "positionGk",
                startByte: 40,
                startBit: 13,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionCb",
                startByte: 40,
                startBit: 15,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionLb",
                startByte: 40,
                startBit: 17,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionRb",
                startByte: 40,
                startBit: 19,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionDmf",
                startByte: 40,
                startBit: 21,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionCmf",
                startByte: 40,
                startBit: 23,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionLmf",
                startByte: 40,
                startBit: 25,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionRmf",
                startByte: 40,
                startBit: 27,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionAmf",
                startByte: 40,
                startBit: 29,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionRwf",
                startByte: 44,
                startBit: 0,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionLwf",
                startByte: 44,
                startBit: 20,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionSs",
                startByte: 44,
                startBit: 2,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionCf",
                startByte: 44,
                startBit: 4,
                lengthInBit: 2
            }, K), {
                key: "attackingProwess",
                startByte: 12,
                startBit: 16,
                lengthInBit: 7
            }, {
                key: "ballControl",
                startByte: 12,
                startBit: 23,
                lengthInBit: 7
            }, Object.assign({}, {
                key: "weakFootUsage",
                startByte: 12,
                startBit: 30,
                lengthInBit: 2
            }, _), {
                key: "tightPossession",
                startByte: 16,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "lowPass",
                startByte: 16,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "loftedPass",
                startByte: 16,
                startBit: 14,
                lengthInBit: 7
            }, {
                key: "finishing",
                startByte: 16,
                startBit: 21,
                lengthInBit: 7
            }, {
                key: "placeKicking",
                startByte: 20,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "curl",
                startByte: 20,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "speed",
                startByte: 20,
                startBit: 14,
                lengthInBit: 7
            }, {
                key: "acceleration",
                startByte: 20,
                startBit: 21,
                lengthInBit: 7
            }, {
                key: "jump",
                startByte: 24,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "physicalContact",
                startByte: 24,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "balance",
                startByte: 24,
                startBit: 14,
                lengthInBit: 7
            }, {
                key: "stamina",
                startByte: 24,
                startBit: 21,
                lengthInBit: 7
            }, {
                key: "ballWinning",
                startByte: 28,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "aggression",
                startByte: 28,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "gkAwareness",
                startByte: 28,
                startBit: 14,
                lengthInBit: 7
            }, {
                key: "gkCatching",
                startByte: 28,
                startBit: 21,
                lengthInBit: 7
            }, Object.assign({}, {
                key: "form",
                startByte: 28,
                startBit: 28,
                lengthInBit: 3
            }, _), {
                key: "gkReach",
                startByte: 32,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "defensiveProwess",
                startByte: 36,
                startBit: 0,
                lengthInBit: 7
            }, {
                key: "gkClearing",
                startByte: 36,
                startBit: 7,
                lengthInBit: 7
            }, {
                key: "headingAbility",
                startByte: 36,
                startBit: 14,
                lengthInBit: 7
            }, {
                key: "dribbling",
                startByte: 40,
                startBit: 0,
                lengthInBit: 7
            }, Object.assign({}, {
                key: "injuryResistance",
                startByte: 40,
                startBit: 7,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "attitude",
                startByte: 40,
                startBit: 9,
                lengthInBit: 2
            }, _), {
                key: "gkReflexes",
                startByte: 44,
                startBit: 6,
                lengthInBit: 7
            }, {
                key: "kickingPower",
                startByte: 44,
                startBit: 13,
                lengthInBit: 7
            }, Object.assign({}, {
                key: "weakFootAccuracy",
                startByte: 36,
                startBit: 30,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "scissorsFeint",
                startByte: 48,
                startBit: 6,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "doubleTouch",
                startByte: 48,
                startBit: 7,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "flipFlap",
                startByte: 48,
                startBit: 8,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "marseilleTurn",
                startByte: 48,
                startBit: 9,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "sombrero",
                startByte: 48,
                startBit: 10,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "crossOverTurn",
                startByte: 48,
                startBit: 11,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "cutBehindAndTurn",
                startByte: 48,
                startBit: 12,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "scotchMove",
                startByte: 48,
                startBit: 13,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "stepOnSkillControl",
                startByte: 48,
                startBit: 14,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "headingSkill",
                startByte: 48,
                startBit: 15,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRangeDrive",
                startByte: 48,
                startBit: 16,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "chipShotControl",
                startByte: 48,
                startBit: 17,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRangeShooting",
                startByte: 48,
                startBit: 18,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "knuckleShot",
                startByte: 48,
                startBit: 19,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "dippingShot",
                startByte: 48,
                startBit: 20,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "risingShot",
                startByte: 48,
                startBit: 21,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "acrobaticFinishing",
                startByte: 48,
                startBit: 22,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "heelTrick",
                startByte: 48,
                startBit: 23,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "firstTimeShot",
                startByte: 48,
                startBit: 24,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "oneTouchPass",
                startByte: 48,
                startBit: 25,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "throughPassing",
                startByte: 48,
                startBit: 26,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "weightedPass",
                startByte: 48,
                startBit: 27,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "pinpointCrossing",
                startByte: 48,
                startBit: 28,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "outsideCurler",
                startByte: 48,
                startBit: 29,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "rabona",
                startByte: 48,
                startBit: 30,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "noLookPass",
                startByte: 48,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "lowLoftedPass",
                startByte: 52,
                startBit: 0,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkLowPunt",
                startByte: 52,
                startBit: 1,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkHighPunt",
                startByte: 52,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longThrow",
                startByte: 52,
                startBit: 3,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkLongThrow",
                startByte: 52,
                startBit: 4,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "penaltySpecialist",
                startByte: 52,
                startBit: 5,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkPenaltySaver",
                startByte: 52,
                startBit: 6,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gamesmanship",
                startByte: 52,
                startBit: 7,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "manMarking",
                startByte: 52,
                startBit: 8,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "trackBack",
                startByte: 52,
                startBit: 9,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "interception",
                startByte: 52,
                startBit: 10,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "acrobaticClear",
                startByte: 52,
                startBit: 11,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "captaincy",
                startByte: 52,
                startBit: 12,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "superSub",
                startByte: 52,
                startBit: 13,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "fightingSpirit",
                startByte: 52,
                startBit: 14,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "playingStyle",
                startByte: 32,
                startBit: 18,
                lengthInBit: 5
            }, {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return null;
                    case 1:
                        return "goalPoacher";
                    case 2:
                        return "dummyRunner";
                    case 3:
                        return "foxInTheBox";
                    case 4:
                        return "targetMan";
                    case 5:
                        return "creativePlaymaker";
                    case 6:
                        return "prolificWinger";
                    case 7:
                        return "roamingFlank";
                    case 8:
                        return "crossSpecialist";
                    case 9:
                        return "classicNo10";
                    case 10:
                        return "holePlayer";
                    case 11:
                        return "boxToBox";
                    case 12:
                        return "theDestroyer";
                    case 13:
                        return "orchestrator";
                    case 14:
                        return "anchorMan";
                    case 15:
                        return "offensiveFullBack";
                    case 16:
                        return "fullBackFinisher";
                    case 17:
                        return "defensiveFullBack";
                    case 18:
                        return "buildUp";
                    case 19:
                        return "extraFrontman";
                    case 20:
                        return "offensiveGoalkeeper";
                    case 21:
                        return "defensiveGoalkeeper";
                    default:
                        return t
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "goalPoacher":
                        return 1;
                    case "dummyRunner":
                        return 2;
                    case "foxInTheBox":
                        return 3;
                    case "targetMan":
                        return 4;
                    case "creativePlaymaker":
                        return 5;
                    case "prolificWinger":
                        return 6;
                    case "roamingFlank":
                        return 7;
                    case "crossSpecialist":
                        return 8;
                    case "classicNo10":
                        return 9;
                    case "holePlayer":
                        return 10;
                    case "boxToBox":
                        return 11;
                    case "theDestroyer":
                        return 12;
                    case "orchestrator":
                        return 13;
                    case "anchorMan":
                        return 14;
                    case "offensiveFullBack":
                        return 15;
                    case "fullBackFinisher":
                        return 16;
                    case "defensiveFullBack":
                        return 17;
                    case "buildUp":
                        return 18;
                    case "extraFrontman":
                        return 19;
                    case "offensiveGoalkeeper":
                        return 20;
                    case "defensiveGoalkeeper":
                        return 21;
                    default:
                        return 0
                    }
                }
            }), Object.assign({}, {
                key: "trickster",
                startByte: 44,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "mazingRun",
                startByte: 48,
                startBit: 0,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "speedingBullet",
                startByte: 48,
                startBit: 1,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "incisiveRun",
                startByte: 48,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longBallExpert",
                startByte: 48,
                startBit: 3,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "earlyCross",
                startByte: 48,
                startBit: 4,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRanger",
                startByte: 48,
                startBit: 5,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "reputation",
                startByte: 32,
                startBit: 28,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "dribHunch",
                startByte: 36,
                startBit: 21,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "dribArmMove",
                startByte: 16,
                startBit: 28,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "runHunch",
                startByte: 36,
                startBit: 24,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "runArmMove",
                startByte: 20,
                startBit: 28,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "dribMotion",
                startByte: 40,
                startBit: 11,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "ckMotion",
                startByte: 24,
                startBit: 28,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "fkMotion",
                startByte: 32,
                startBit: 23,
                lengthInBit: 5
            }, _), Object.assign({}, {
                key: "pkMotion",
                startByte: 36,
                startBit: 27,
                lengthInBit: 3
            }, _), {
                key: "playerAppearance",
                startByte: 240,
                length: 72,
                subFormat: V
            }]
              , Y = [{
                key: "teamId",
                startByte: 0,
                length: 4
            }, {
                key: "playerIds",
                startByte: 4,
                length: 4,
                isArray: !0,
                arrayLength: 40
            }, {
                key: "shirtNumbers",
                startByte: 164,
                length: 2,
                isArray: !0,
                arrayLength: 40
            }, Object.assign({}, {
                key: "areTransferred",
                startByte: 244,
                length: 1,
                isArray: !0,
                arrayLength: 40
            }, w)]
              , z = [{
                key: "positions",
                startByte: 0,
                length: 1,
                arrayLength: 11
            }, {
                key: "placements",
                startByte: 11,
                length: 2,
                arrayLength: 11,
                subFormat: [{
                    key: "x",
                    startByte: 0,
                    length: 1
                }, {
                    key: "y",
                    startByte: 1,
                    length: 1
                }]
            }]
              , Z = [{
                key: "\u53cd\u653b/\u63a7\u7403\u904a\u6232",
                startByte: 0,
                length: 1
            }, {
                key: "\u9577\u50b3/\u77ed\u50b3",
                startByte: 1,
                length: 1
            }, {
                key: "\u5074\u7ffc/\u4e2d\u592e",
                startByte: 2,
                length: 1
            }, {
                key: "\u4fdd\u6301\u968a\u5f62/\u5f48\u6027",
                startByte: 3,
                length: 1
            }, {
                key: "\u524d\u7dda\u65bd\u58d3/\u5168\u9ad4\u7403\u54e1\u9632\u5b88",
                startByte: 4,
                length: 1
            }, {
                key: "\u9632\u5b88\u4e2d\u592e/\u5074\u7ffc",
                startByte: 5,
                length: 1
            }, {
                key: "\u7a4d\u6975\u6027/\u9632\u5b88",
                startByte: 6,
                length: 1
            }, {
                key: "unk1",
                startByte: 7,
                length: 1
            }, {
                key: "unk2",
                startByte: 8,
                length: 1
            }]
              , J = [{
                key: "\u652f\u63f4",
                startByte: 0,
                length: 1
            }, {
                key: "unk3",
                startByte: 1,
                length: 1
            }, {
                key: "\u9632\u7dda",
                startByte: 2,
                length: 1
            }, {
                key: "\u56b4\u5bc6",
                startByte: 3,
                length: 1
            }, {
                key: "unk4",
                startByte: 4,
                length: 1
            }, {
                key: "unused1",
                startByte: 5,
                length: 3
            }, {
                key: "unused2",
                startByte: 8,
                length: 4
            }, {
                key: "manMarking1",
                startByte: 12,
                length: 1
            }, {
                key: "manMarking2",
                startByte: 13,
                length: 1
            }, {
                key: "manMarking3",
                startByte: 14,
                length: 1
            }, {
                key: "manMarking4",
                startByte: 15,
                length: 1
            }]
              , Q = [{
                key: "teamId",
                startByte: 0,
                length: 4
            }, {
                key: "preset1Formations",
                startByte: 4,
                length: 33,
                arrayLength: 3,
                subFormat: z
            }, {
                key: "preset1Instructions",
                startByte: 103,
                length: 9,
                subFormat: Z
            }, {
                key: "preset1Settings",
                startByte: 144,
                length: 18,
                subFormat: J
            }, {
                key: "preset2Formations",
                startByte: 164,
                length: 33,
                arrayLength: 3,
                subFormat: z
            }, {
                key: "preset2Instructions",
                startByte: 263,
                length: 9,
                subFormat: Z
            }, {
                key: "preset2Settings",
                startByte: 304,
                length: 18,
                subFormat: J
            }, {
                key: "preset3Formations",
                startByte: 324,
                length: 33,
                arrayLength: 3,
                subFormat: z
            }, {
                key: "preset3Instructions",
                startByte: 423,
                length: 9,
                subFormat: Z
            }, {
                key: "preset3Settings",
                startByte: 464,
                length: 18,
                subFormat: J
            }, {
                key: "playerOrders",
                startByte: 484,
                length: 1,
                arrayLength: 40
            }, {
                key: "longFkTaker",
                startByte: 524,
                length: 1
            }, {
                key: "shortFkTaker",
                startByte: 525,
                length: 1
            }, {
                key: "secondFkTaker",
                startByte: 526,
                length: 1
            }, {
                key: "leftCkTaker",
                startByte: 527,
                length: 1
            }, {
                key: "rightCkTaker",
                startByte: 528,
                length: 1
            }, {
                key: "pkTaker",
                startByte: 529,
                length: 1
            }, {
                key: "playerAttacking1",
                startByte: 530,
                length: 1
            }, {
                key: "playerAttacking2",
                startByte: 531,
                length: 1
            }, {
                key: "playerAttacking3",
                startByte: 532,
                length: 1
            }, {
                key: "captain",
                startByte: 533,
                length: 1
            }]
              , X = [{
                key: "teamId",
                startByte: 0,
                length: 4
            }, {
                key: "coachId",
                startByte: 4,
                length: 4
            }, {
                key: "emblemImageListIndex",
                startByte: 8,
                length: 2,
                isSigned: !0
            }, {
                key: "stadiumId",
                startByte: 10,
                length: 2,
                isSigned: !0
            }, {
                key: "stadiumImageListIndex",
                startByte: 12,
                length: 2,
                isSigned: !0
            }, {
                key: "countryId",
                startByte: 14,
                length: 2
            }, {
                key: "callnameId",
                startByte: 16,
                length: 2,
                isSigned: !0
            }, {
                key: "teamColor1R",
                startByte: 22,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "teamColor1G",
                startByte: 23,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "isAtLeastOneNameEdited",
                startByte: 23,
                startBit: 6,
                lengthInBit: 1,
                booleanFunc: w
            }, {
                key: "isEmblemImageSet",
                startByte: 23,
                startBit: 7,
                lengthInBit: 1,
                booleanFunc: w
            }, {
                key: "teamColor2G",
                startByte: 24,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "teamColor2B",
                startByte: 24,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "backdropColorR",
                startByte: 25,
                startBit: 4,
                lengthInBit: 6
            }, {
                key: "backdropColorG",
                startByte: 26,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "backdropColorB",
                startByte: 27,
                startBit: 0,
                lengthInBit: 6
            }, Object.assign({}, {
                key: "isStadiumNameEdited",
                startByte: 27,
                startBit: 7,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "goalStyle",
                startByte: 28,
                startBit: 0,
                lengthInBit: 2
            }, _), {
                key: "turfPattern",
                startByte: 28,
                startBit: 4,
                lengthInBit: 4
            }, {
                key: "sidelineColor",
                startByte: 29,
                startBit: 0,
                lengthInBit: 4
            }, {
                key: "seatColor",
                startByte: 29,
                startBit: 4,
                lengthInBit: 4
            }, {
                key: "teamColor1B",
                startByte: 30,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "teamColor2R",
                startByte: 30,
                startBit: 6,
                lengthInBit: 6
            }, Object.assign({}, {
                key: "netPattern",
                startByte: 31,
                startBit: 4,
                lengthInBit: 1
            }, _), Object.assign({}, {
                key: "isStadiumImageSet",
                startByte: 32,
                startBit: 6,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isBannerEdited",
                startByte: 33,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isSponsorEdited",
                startByte: 33,
                startBit: 5,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "isBackdropColorSet",
                startByte: 33,
                startBit: 6,
                lengthInBit: 1
            }, w), {
                key: "sponsor1ImageListIndex",
                startByte: 36,
                length: 4
            }, {
                key: "sponsor2ImageListIndex",
                startByte: 40,
                length: 4
            }, {
                key: "sponsor3ImageListIndex",
                startByte: 44,
                length: 4
            }, {
                key: "uniformIds",
                startByte: 48,
                length: 4,
                arrayLength: 10
            }, {
                key: "rivalTeamId1",
                startByte: 88,
                lengthInBit: 18,
                isSinged: !0
            }, {
                key: "rivalTeamId2",
                startByte: 92,
                lengthInBit: 18,
                isSinged: !0
            }, {
                key: "rivalTeamId3",
                startByte: 96,
                lengthInBit: 18,
                isSinged: !0
            }, {
                key: "banner1Pointer",
                startByte: 100,
                length: 1
            }, {
                key: "banner2Pointer",
                startByte: 101,
                length: 1
            }, {
                key: "banner3Pointer",
                startByte: 102,
                length: 1
            }, {
                key: "banner4Pointer",
                startByte: 103,
                length: 1
            }, {
                key: "teamName",
                startByte: 104,
                length: 70,
                isString: !0
            }, {
                key: "shortName",
                startByte: 174,
                length: 4,
                isString: !0
            }, {
                key: "stadiumName",
                startByte: 178,
                length: 120,
                isString: !0
            }, {
                key: "banner1",
                startByte: 299,
                length: 16,
                isString: !0
            }, {
                key: "banner2",
                startByte: 315,
                length: 16,
                isString: !0
            }, {
                key: "banner3",
                startByte: 331,
                length: 16,
                isString: !0
            }, {
                key: "banner4",
                startByte: 347,
                length: 16,
                isString: !0
            }, {
                key: "emblemImageFileName",
                startByte: 363,
                length: 32,
                isString: !0
            }, {
                key: "stadiumImageFileName",
                startByte: 396,
                length: 32,
                isString: !0
            }, {
                key: "sponsor1ImageFileName",
                startByte: 429,
                length: 32,
                isString: !0
            }, {
                key: "sponsor2ImageFileName",
                startByte: 462,
                length: 32,
                isString: !0
            }, {
                key: "sponsor3ImageFileName",
                startByte: 495,
                length: 32,
                isString: !0
            }]
              , q = [{
                key: "uniformId",
                startByte: 0,
                length: 4
            }, {
                key: "imageListIndex",
                startByte: 4,
                startBit: 0,
                lengthInBit: 11,
                isSigned: !0
            }, {
                key: "isCollarModified",
                startByte: 23,
                startBit: 0,
                lengthInBit: 1
            }, {
                key: "isMarkingModified",
                startByte: 31,
                startBit: 6,
                lengthInBit: 1
            }, Object.assign({}, {
                key: "isImageSet",
                startByte: 31,
                startBit: 7,
                lengthInBit: 1
            }, w), {
                key: "hasChestNumber",
                startByte: 39,
                startBit: 7,
                lengthInBit: 1
            }, {
                key: "nameR",
                startByte: 57,
                startBit: 4,
                lengthInBit: 6
            }, {
                key: "nameG",
                startByte: 58,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "nameB",
                startByte: 59,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "numberR",
                startByte: 62,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "numberG",
                startByte: 63,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "numberB",
                startByte: 64,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "chestNumberR",
                startByte: 67,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "chestNumberG",
                startByte: 68,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "chestNumberB",
                startByte: 68,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "shortNumberR",
                startByte: 72,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "shortNumberG",
                startByte: 72,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "shortNumberB",
                startByte: 73,
                startBit: 4,
                lengthInBit: 6
            }, {
                key: "collar",
                startByte: 76,
                startBit: 6,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "namePosition",
                startByte: 79,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "nameSize",
                startByte: 7,
                startBit: 3,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 10
                },
                setter: function(t) {
                    return t + 10
                }
            }, {
                key: "nameFontStyle",
                startByte: 81,
                startBit: 0,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "numberPosition",
                startByte: 81,
                startBit: 5,
                lengthInBit: 5
            }, {
                key: "numberSize",
                startByte: 82,
                startBit: 2,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 14
                },
                setter: function(t) {
                    return t + 14
                }
            }, {
                key: "numberFontStyle",
                startByte: 82,
                startBit: 7,
                lengthInBit: 4,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "nameArcStyle",
                startByte: 83,
                startBit: 4,
                lengthInBit: 2,
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }, {
                key: "shortNumberVPos",
                startByte: 85,
                startBit: 2,
                lengthInBit: 5
            }, {
                key: "shortNumberHPos",
                startByte: 85,
                startBit: 7,
                lengthInBit: 5
            }, {
                key: "shortNumberSize",
                startByte: 86,
                startBit: 4,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 14
                },
                setter: function(t) {
                    return t + 14
                }
            }, {
                key: "shortNumberSide",
                startByte: 88,
                startBit: 5,
                lengthInBit: 2,
                getter: function(t) {
                    switch (t) {
                    case 0:
                    default:
                        return null;
                    case 1:
                        return "L";
                    case 2:
                        return "R"
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "L":
                        return 1;
                    case "R":
                        return 2;
                    default:
                        return 0
                    }
                }
            }, Object.assign({}, {
                key: "isImageSmall",
                startByte: 35,
                startBit: 6,
                lengthInBit: 1
            }, w), {
                key: "imageFileName",
                startByte: 98,
                length: 32,
                isString: !0
            }, {
                key: "shirtR",
                startByte: 23,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "shirtG",
                startByte: 89,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "shirtB",
                startByte: 89,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "shortR",
                startByte: 32,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "shortG",
                startByte: 33,
                startBit: 4,
                lengthInBit: 6
            }, {
                key: "shortB",
                startByte: 34,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "sockR",
                startByte: 41,
                startBit: 4,
                lengthInBit: 6
            }, {
                key: "sockG",
                startByte: 42,
                startBit: 2,
                lengthInBit: 6
            }, {
                key: "sockB",
                startByte: 43,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "shirtDesign1R",
                startByte: 24,
                startBit: 0,
                lengthInBit: 6
            }, {
                key: "shirtDesign1G",
                startByte: 24,
                startBit: 6,
                lengthInBit: 6
            }, {
                key: "shirtDesign1B",
                startByte: 24,
                startBit: 12,
                lengthInBit: 6
            }, {
                key: "hasShirtName",
                startByte: 39,
                startBit: 6,
                lengthInBit: 1
            }, {
                key: "chestNumberHPos",
                startByte: 84,
                startBit: 0,
                lengthInBit: 5
            }, {
                key: "chestNumberSize",
                startByte: 84,
                startBit: 5,
                lengthInBit: 5,
                getter: function(t) {
                    return t - 14
                },
                setter: function(t) {
                    return t + 14
                }
            }, {
                key: "chestNumberVPos",
                startByte: 88,
                startBit: 0,
                lengthInBit: 5
            }]
              , $ = [{
                key: "header",
                startByte: 0,
                length: 48,
                subFormat: [{
                    key: "unknownValue1",
                    startByte: 0,
                    length: 4
                }, {
                    key: "unknownValue2",
                    startByte: 4,
                    length: 4
                }, {
                    key: "unknownValue3",
                    startByte: 8,
                    length: 4
                }, {
                    key: "gameVersion",
                    startByte: 12,
                    length: 4
                }, {
                    key: "dataPackVersion",
                    startByte: 16,
                    length: 4
                }, {
                    key: "dataPackVersion2",
                    startByte: 20,
                    length: 4
                }, {
                    key: "unknownValue4",
                    startByte: 24,
                    length: 4
                }, {
                    key: "unknownValue5",
                    startByte: 28,
                    length: 4
                }, {
                    key: "unknownValue6",
                    startByte: 32,
                    length: 4
                }, {
                    key: "unknownValue7",
                    startByte: 36,
                    length: 4
                }, {
                    key: "unknownValue8",
                    startByte: 40,
                    length: 4
                }, {
                    key: "unknownValue9",
                    startByte: 44,
                    length: 4
                }]
            }, {
                key: "team",
                startByte: 80,
                length: 528,
                subFormat: X
            }, {
                key: "coach",
                startByte: 608,
                length: 88,
                subFormat: G
            }, {
                key: "playerAssignment",
                startByte: 696,
                length: 284,
                subFormat: Y
            }, {
                key: "tactics",
                startByte: 980,
                length: 628,
                subFormat: Q
            }, {
                key: "uniforms",
                startByte: 1608,
                length: 132,
                arrayLength: 5,
                subFormat: q
            }, {
                key: "players",
                startByte: 2268,
                length: 312,
                arrayLength: 40,
                subFormat: W
            }, {
                key: "metadata",
                startByte: 14748,
                length: 12,
                subFormat: H
            }]
              , tt = Object.freeze({
                __proto__: null,
                recordLength: 14760,
                isFullyCovered: !1,
                format: $
            })
              , et = {
                getter: function(t) {
                    switch (t) {
                    case 0:
                        return null;
                    case 1:
                        return "goalPoacher";
                    case 2:
                        return "dummyRunner";
                    case 3:
                        return "foxInTheBox";
                    case 4:
                        return "prolificWinger";
                    case 5:
                        return "classicNo10";
                    case 6:
                        return "holePlayer";
                    case 7:
                        return "boxToBox";
                    case 8:
                        return "anchorMan";
                    case 9:
                        return "theDestroyer";
                    case 10:
                        return "extraFrontman";
                    case 11:
                        return "offensiveFullBack";
                    case 12:
                        return "defensiveFullBack";
                    case 13:
                        return "targetMan";
                    case 14:
                        return "creativePlaymaker";
                    case 15:
                        return "buildUp";
                    case 16:
                        return "offensiveGoalkeeper";
                    case 17:
                        return "defensiveGoalkeeper";
                    case 18:
                        return "roamingFlank";
                    case 19:
                        return "crossSpecialist";
                    case 20:
                        return "orchestrator";
                    case 21:
                        return "fullBackFinisher";
                    default:
                        return console.warn("Unsupported playing style."),
                        t
                    }
                },
                setter: function(t) {
                    switch (t) {
                    case "goalPoacher":
                        return 1;
                    case "dummyRunner":
                        return 2;
                    case "foxInTheBox":
                        return 3;
                    case "targetMan":
                        return 13;
                    case "creativePlaymaker":
                        return 14;
                    case "prolificWinger":
                        return 4;
                    case "roamingFlank":
                        return 18;
                    case "crossSpecialist":
                        return 19;
                    case "classicNo10":
                        return 5;
                    case "holePlayer":
                        return 6;
                    case "boxToBox":
                        return 7;
                    case "theDestroyer":
                        return 9;
                    case "orchestrator":
                        return 20;
                    case "anchorMan":
                        return 8;
                    case "buildUp":
                        return 15;
                    case "offensiveFullBack":
                        return 11;
                    case "fullBackFinisher":
                        return 21;
                    case "defensiveFullBack":
                        return 12;
                    case "extraFrontman":
                        return 10;
                    case "offensiveGoalkeeper":
                        return 16;
                    case "defensiveGoalkeeper":
                        return 17;
                    default:
                        return 0
                    }
                }
            }
              , nt = [{
                key: "careerStartTeamId",
                startByte: 0,
                length: 4
            }, {
                key: "loanFromTeamId",
                startByte: 4,
                length: 4
            }, {
                key: "playerId",
                startByte: 8,
                length: 4
            }, {
                key: "jaPlayerName",
                startByte: 68,
                length: 61,
                isString: !0
            }, {
                key: "clubShirtName",
                startByte: 129,
                length: 61,
                isString: !0
            }, {
                key: "ntShirtName",
                startByte: 190,
                length: 61,
                isString: !0
            }, {
                key: "playerName",
                startByte: 251,
                length: 61,
                isString: !0
            }, {
                key: "contractExpiryDate",
                startByte: 12,
                startBit: 0,
                lengthInBit: 27
            }, Object.assign({}, {
                key: "fkMotion",
                startByte: 12,
                startBit: 27,
                lengthInBit: 5
            }, _), {
                key: "loanExpiryDate",
                startByte: 16,
                startBit: 0,
                lengthInBit: 27
            }, Object.assign({}, {
                key: "playingStyle",
                startByte: 16,
                startBit: 27,
                lengthInBit: 5
            }, et), {
                key: "marketValue",
                startByte: 20,
                startBit: 0,
                lengthInBit: 24
            }, {
                key: "numCaps",
                startByte: 20,
                startBit: 24,
                lengthInBit: 8
            }, {
                key: "unknown1",
                startByte: 24,
                startBit: 0,
                lengthInBit: 24
            }, Object.assign({}, {
                key: "height",
                startByte: 24,
                startBit: 24,
                lengthInBit: 8
            }, {
                getter: function(t) {
                    return t + 100
                },
                setter: function(t) {
                    return t - 100
                }
            }), {
                key: "countryId2",
                startByte: 28,
                startBit: 0,
                lengthInBit: 9
            }, {
                key: "countryId1",
                startByte: 28,
                startBit: 9,
                lengthInBit: 9
            }, {
                key: "goalCelebration1",
                startByte: 28,
                startBit: 18,
                lengthInBit: 8
            }, Object.assign({}, {
                key: "placeKicking",
                startByte: 28,
                startBit: 26,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "weight",
                startByte: 32,
                startBit: 0,
                lengthInBit: 7
            }, {
                getter: function(t) {
                    return t + 30
                },
                setter: function(t) {
                    return t - 30
                }
            }), Object.assign({}, {
                key: "lowPass",
                startByte: 32,
                startBit: 7,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "gkClearing",
                startByte: 32,
                startBit: 13,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "defensiveProwess",
                startByte: 32,
                startBit: 19,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "ballControl",
                startByte: 32,
                startBit: 25,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "crossOverTurn",
                startByte: 32,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "headingAbility",
                startByte: 36,
                startBit: 0,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "jump",
                startByte: 36,
                startBit: 6,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "gkReach",
                startByte: 36,
                startBit: 12,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "speed",
                startByte: 36,
                startBit: 18,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "ballWinning",
                startByte: 36,
                startBit: 24,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "positionLb",
                startByte: 36,
                startBit: 30,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "gkReflexes",
                startByte: 40,
                startBit: 0,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "gkAwareness",
                startByte: 40,
                startBit: 6,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "curl",
                startByte: 40,
                startBit: 12,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "stamina",
                startByte: 40,
                startBit: 18,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "acceleration",
                startByte: 40,
                startBit: 24,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "positionGk",
                startByte: 40,
                startBit: 30,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "dribbling",
                startByte: 44,
                startBit: 0,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "kickingPower",
                startByte: 44,
                startBit: 6,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "gkCatching",
                startByte: 44,
                startBit: 12,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "attackingProwess",
                startByte: 44,
                startBit: 18,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "balance",
                startByte: 44,
                startBit: 24,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "attitude",
                startByte: 44,
                startBit: 30,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "aggression",
                startByte: 48,
                startBit: 0,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "physicalContact",
                startByte: 48,
                startBit: 6,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "finishing",
                startByte: 48,
                startBit: 12,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "loftedPass",
                startByte: 48,
                startBit: 18,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "age",
                startByte: 48,
                startBit: 24,
                lengthInBit: 6
            }, {
                getter: function(t) {
                    return t + 15
                },
                setter: function(t) {
                    return t - 15
                }
            }), Object.assign({}, {
                key: "positionDmf",
                startByte: 48,
                startBit: 30,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "tightPossession",
                startByte: 52,
                startBit: 0,
                lengthInBit: 6
            }, M), Object.assign({}, {
                key: "ckMotion",
                startByte: 52,
                startBit: 6,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "dribArmMove",
                startByte: 52,
                startBit: 10,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "runArmMove",
                startByte: 52,
                startBit: 14,
                lengthInBit: 4
            }, _), Object.assign({}, {
                key: "registeredPosition",
                startByte: 52,
                startBit: 18,
                lengthInBit: 4
            }, D), Object.assign({}, {
                key: "form",
                startByte: 52,
                startBit: 22,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "dribHunch",
                startByte: 52,
                startBit: 25,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "pkMotion",
                startByte: 52,
                startBit: 28,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "earlyCross",
                startByte: 52,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "runHunch",
                startByte: 56,
                startBit: 0,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "reputation",
                startByte: 56,
                startBit: 3,
                lengthInBit: 3
            }, _), Object.assign({}, {
                key: "weakFootUsage",
                startByte: 56,
                startBit: 6,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "positionCmf",
                startByte: 56,
                startBit: 8,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "injuryResistance",
                startByte: 56,
                startBit: 10,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "positionRmf",
                startByte: 56,
                startBit: 12,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "weakFootAccuracy",
                startByte: 56,
                startBit: 14,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "positionAmf",
                startByte: 56,
                startBit: 16,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionLmf",
                startByte: 56,
                startBit: 18,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionCb",
                startByte: 56,
                startBit: 20,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionCf",
                startByte: 56,
                startBit: 22,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionLwf",
                startByte: 56,
                startBit: 24,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionRb",
                startByte: 56,
                startBit: 26,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionRwf",
                startByte: 56,
                startBit: 28,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "positionSs",
                startByte: 56,
                startBit: 30,
                lengthInBit: 2
            }, K), Object.assign({}, {
                key: "dribMotion",
                startByte: 60,
                startBit: 0,
                lengthInBit: 2
            }, _), Object.assign({}, {
                key: "sombrero",
                startByte: 60,
                startBit: 2,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "pinpointCrossing",
                startByte: 60,
                startBit: 3,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "weightedPass",
                startByte: 60,
                startBit: 4,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "flipFlap",
                startByte: 60,
                startBit: 5,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "fightingSpirit",
                startByte: 60,
                startBit: 6,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "throughPassing",
                startByte: 60,
                startBit: 7,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "lowLoftedPass",
                startByte: 60,
                startBit: 8,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "trickster",
                startByte: 60,
                startBit: 9,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkLowPunt",
                startByte: 60,
                startBit: 10,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gamesmanship",
                startByte: 60,
                startBit: 11,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "captaincy",
                startByte: 60,
                startBit: 12,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "outsideCurler",
                startByte: 60,
                startBit: 13,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "dippingShot",
                startByte: 60,
                startBit: 14,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "headingSkill",
                startByte: 60,
                startBit: 15,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkHighPunt",
                startByte: 60,
                startBit: 16,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "marseilleTurn",
                startByte: 60,
                startBit: 17,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "wonBallonDor",
                startByte: 60,
                startBit: 18,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "risingShot",
                startByte: 60,
                startBit: 19,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "stepOnSkillControl",
                startByte: 60,
                startBit: 20,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "penaltySpecialist",
                startByte: 60,
                startBit: 21,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkPenaltySaver",
                startByte: 60,
                startBit: 22,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "interception",
                startByte: 60,
                startBit: 23,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "manMarking",
                startByte: 60,
                startBit: 24,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "heelTrick",
                startByte: 60,
                startBit: 25,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "chipShotControl",
                startByte: 60,
                startBit: 26,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "oneTouchPass",
                startByte: 60,
                startBit: 27,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "legendImagine",
                startByte: 60,
                startBit: 28,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "strongerHand",
                startByte: 60,
                startBit: 29,
                lengthInBit: 1
            }, U), Object.assign({}, {
                key: "incisiveRun",
                startByte: 60,
                startBit: 30,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "firstTimeShot",
                startByte: 60,
                startBit: 31,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "noLookPass",
                startByte: 64,
                startBit: 0,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "knuckleShot",
                startByte: 64,
                startBit: 1,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "strongerFoot",
                startByte: 64,
                startBit: 2,
                lengthInBit: 1
            }, U), Object.assign({}, {
                key: "rabona",
                startByte: 64,
                startBit: 3,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "superSub",
                startByte: 64,
                startBit: 4,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "trackBack",
                startByte: 64,
                startBit: 5,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRangeShooting",
                startByte: 64,
                startBit: 6,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "scissorsFeint",
                startByte: 64,
                startBit: 7,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRanger",
                startByte: 64,
                startBit: 8,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longThrow",
                startByte: 64,
                startBit: 9,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "gkLongThrow",
                startByte: 64,
                startBit: 10,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "doubleTouch",
                startByte: 64,
                startBit: 11,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "acrobaticFinishing",
                startByte: 64,
                startBit: 12,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "scotchMove",
                startByte: 64,
                startBit: 13,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "speedingBullet",
                startByte: 64,
                startBit: 14,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longRangeDrive",
                startByte: 64,
                startBit: 15,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "cutBehindAndTurn",
                startByte: 64,
                startBit: 16,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "longBallExpert",
                startByte: 64,
                startBit: 17,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "acrobaticClear",
                startByte: 64,
                startBit: 18,
                lengthInBit: 1
            }, w), Object.assign({}, {
                key: "mazingRun",
                startByte: 64,
                startBit: 19,
                lengthInBit: 1
            }, w)]
              , at = Object.freeze({
                __proto__: null,
                isFullyCovered: !1,
                playingStyleFunc: et,
                sortFn: function(t, e) {
                    return t.playerId - e.playerId
                },
                recordLength: 312,
                format: nt
            })
              , rt = G
              , st = H
              , it = W
              , ct = Y
              , ot = Q
              , lt = {
                getter: function(t) {
                    return Boolean(t)
                },
                setter: function(t) {
                    return Boolean(t) ? 1 : 0
                }
            }
              , yt = {
                getter: function(t) {
                    return t + 1
                },
                setter: function(t) {
                    return t - 1
                }
            }
              , ut = [{
                key: "header",
                startByte: 0,
                length: 48,
                subFormat: [{
                    key: "unknownValue1",
                    startByte: 0,
                    length: 4
                }, {
                    key: "unknownValue2",
                    startByte: 4,
                    length: 4
                }, {
                    key: "unknownValue3",
                    startByte: 8,
                    length: 4
                }, {
                    key: "gameVersion",
                    startByte: 12,
                    length: 4
                }, {
                    key: "dataPackVersion",
                    startByte: 16,
                    length: 4
                }, {
                    key: "dataPackVersion2",
                    startByte: 20,
                    length: 4
                }, {
                    key: "unknownValue4",
                    startByte: 24,
                    length: 4
                }, {
                    key: "unknownValue5",
                    startByte: 28,
                    length: 4
                }, {
                    key: "unknownValue6",
                    startByte: 32,
                    length: 4
                }, {
                    key: "unknownValue7",
                    startByte: 36,
                    length: 4
                }, {
                    key: "unknownValue8",
                    startByte: 40,
                    length: 4
                }, {
                    key: "unknownValue9",
                    startByte: 44,
                    length: 4
                }]
            }, {
                key: "team",
                startByte: 80,
                length: 588,
                subFormat: [{
                    key: "teamId",
                    startByte: 0,
                    length: 4
                }, {
                    key: "coachId",
                    startByte: 4,
                    length: 4
                }, {
                    key: "emblemImageListIndex",
                    startByte: 8,
                    length: 2,
                    isSigned: !0
                }, {
                    key: "stadiumId",
                    startByte: 10,
                    length: 2,
                    isSigned: !0
                }, {
                    key: "stadiumImageListIndex",
                    startByte: 12,
                    length: 2,
                    isSigned: !0
                }, {
                    key: "countryId",
                    startByte: 14,
                    length: 2
                }, {
                    key: "callnameId",
                    startByte: 16,
                    length: 2,
                    isSigned: !0
                }, {
                    key: "teamColor1R",
                    startByte: 22,
                    startBit: 2,
                    lengthInBit: 6
                }, {
                    key: "teamColor1G",
                    startByte: 23,
                    startBit: 0,
                    lengthInBit: 6
                }, {
                    key: "isAtLeastOneNameEdited",
                    startByte: 23,
                    startBit: 6,
                    lengthInBit: 1,
                    booleanFunc: lt
                }, {
                    key: "isEmblemImageSet",
                    startByte: 23,
                    startBit: 7,
                    lengthInBit: 1,
                    booleanFunc: lt
                }, {
                    key: "teamColor2G",
                    startByte: 24,
                    startBit: 0,
                    lengthInBit: 6
                }, {
                    key: "teamColor2B",
                    startByte: 24,
                    startBit: 6,
                    lengthInBit: 6
                }, {
                    key: "backdropColorR",
                    startByte: 25,
                    startBit: 4,
                    lengthInBit: 6
                }, {
                    key: "backdropColorG",
                    startByte: 26,
                    startBit: 2,
                    lengthInBit: 6
                }, {
                    key: "backdropColorB",
                    startByte: 27,
                    startBit: 0,
                    lengthInBit: 6
                }, Object.assign({}, {
                    key: "isStadiumNameEdited",
                    startByte: 27,
                    startBit: 7,
                    lengthInBit: 1
                }, lt), Object.assign({}, {
                    key: "goalStyle",
                    startByte: 28,
                    startBit: 0,
                    lengthInBit: 2
                }, yt), {
                    key: "turfPattern",
                    startByte: 28,
                    startBit: 4,
                    lengthInBit: 4
                }, {
                    key: "sidelineColor",
                    startByte: 29,
                    startBit: 0,
                    lengthInBit: 4
                }, {
                    key: "seatColor",
                    startByte: 29,
                    startBit: 4,
                    lengthInBit: 4
                }, {
                    key: "teamColor1B",
                    startByte: 30,
                    startBit: 0,
                    lengthInBit: 6
                }, {
                    key: "teamColor2R",
                    startByte: 30,
                    startBit: 6,
                    lengthInBit: 6
                }, Object.assign({}, {
                    key: "netPattern",
                    startByte: 31,
                    startBit: 4,
                    lengthInBit: 1
                }, yt), Object.assign({}, {
                    key: "isStadiumImageSet",
                    startByte: 32,
                    startBit: 6,
                    lengthInBit: 1
                }, lt), Object.assign({}, {
                    key: "isBannerEdited",
                    startByte: 33,
                    startBit: 2,
                    lengthInBit: 1
                }, lt), Object.assign({}, {
                    key: "isSponsorEdited",
                    startByte: 33,
                    startBit: 5,
                    lengthInBit: 1
                }, lt), Object.assign({}, {
                    key: "isBackdropColorSet",
                    startByte: 33,
                    startBit: 6,
                    lengthInBit: 1
                }, lt), {
                    key: "sponsor1ImageListIndex",
                    startByte: 36,
                    length: 4
                }, {
                    key: "sponsor2ImageListIndex",
                    startByte: 40,
                    length: 4
                }, {
                    key: "sponsor3ImageListIndex",
                    startByte: 44,
                    length: 4
                }, {
                    key: "uniformIds",
                    startByte: 48,
                    length: 4,
                    arrayLength: 10
                }, {
                    key: "rivalTeamId1",
                    startByte: 88,
                    lengthInBit: 18,
                    isSinged: !0
                }, {
                    key: "rivalTeamId2",
                    startByte: 92,
                    lengthInBit: 18,
                    isSinged: !0
                }, {
                    key: "rivalTeamId3",
                    startByte: 96,
                    lengthInBit: 18,
                    isSinged: !0
                }, {
                    key: "banner1Pointer",
                    startByte: 100,
                    length: 1
                }, {
                    key: "banner2Pointer",
                    startByte: 101,
                    length: 1
                }, {
                    key: "banner3Pointer",
                    startByte: 102,
                    length: 1
                }, {
                    key: "banner4Pointer",
                    startByte: 103,
                    length: 1
                }, {
                    key: "teamName",
                    startByte: 104,
                    length: 70,
                    isString: !0
                }, {
                    key: "shortName",
                    startByte: 174,
                    length: 4,
                    isString: !0
                }, {
                    key: "stadiumName",
                    startByte: 178,
                    length: 120,
                    isString: !0
                }, {
                    key: "banner1",
                    startByte: 359,
                    length: 16,
                    isString: !0
                }, {
                    key: "banner2",
                    startByte: 375,
                    length: 16,
                    isString: !0
                }, {
                    key: "banner3",
                    startByte: 391,
                    length: 16,
                    isString: !0
                }, {
                    key: "banner4",
                    startByte: 407,
                    length: 16,
                    isString: !0
                }, {
                    key: "emblemImageFileName",
                    startByte: 423,
                    length: 32,
                    isString: !0
                }, {
                    key: "stadiumImageFileName",
                    startByte: 456,
                    length: 32,
                    isString: !0
                }, {
                    key: "sponsor1ImageFileName",
                    startByte: 489,
                    length: 32,
                    isString: !0
                }, {
                    key: "sponsor2ImageFileName",
                    startByte: 522,
                    length: 32,
                    isString: !0
                }, {
                    key: "sponsor3ImageFileName",
                    startByte: 555,
                    length: 32,
                    isString: !0
                }]
            }, {
                key: "coach",
                startByte: 668,
                length: 88,
                subFormat: rt
            }, {
                key: "playerAssignment",
                startByte: 756,
                length: 284,
                subFormat: ct
            }, {
                key: "tactics",
                startByte: 1040,
                length: 628,
                subFormat: ot
            }, {
                key: "uniforms",
                startByte: 1668,
                length: 132,
                arrayLength: 5,
                subFormat: q
            }, {
                key: "players",
                startByte: 2328,
                length: 312,
                arrayLength: 40,
                subFormat: it
            }, {
                key: "metadata",
                startByte: 14808,
                length: 12,
                subFormat: st
            }]
              , gt = Object.freeze({
                __proto__: null,
                recordLength: 14820,
                isFullyCovered: !1,
                format: ut
            })
              , Bt = function(t, e) {
                void 0 === e && (e = !1),
                this._buf = t,
                this._isBigEndian = e,
                this.pages = {};
                var n = []
                  , a = []
                  , r = [];
                if (this._buf) {
                    for (var s = this._readUInt32(0), i = this._readUInt32(4), c = (this._readUInt32(8),
                    0); c < s; c++)
                        n[c] = this._readUInt32(i + 12 * c),
                        a[c] = this._readUInt32(i + 12 * c + 4),
                        r[c] = this._readUInt32(i + 12 * c + 8);
                    for (var o = 0; o < s; o++) {
                        var l = t.slice(n[o], n[o] + a[o])
                          , y = void 0;
                        y = (y = o + 1 < s ? t.slice(r[o], r[o + 1]) : t.slice(r[o], this.contentPointer)).toString().split(/\u0000/g)[0],
                        this.pages[y] = l
                    }
                }
            };
            Bt.prototype._readUInt32 = function(t) {
                return this._isBigEndian ? this._buf.readUInt32BE(t) : this._buf.readUInt32LE(t)
            }
            ,
            Bt.prototype._writeUInt32 = function(t, e) {
                return this._isBigEndian ? this._buf.writeUInt32BE(t, e) : this._buf.writeUInt32LE(t, e)
            }
            ,
            Bt.fromJS = function(t, e) {
                var n = new Bt(null,e);
                return n.pages = t,
                n
            }
            ,
            Bt.prototype.toBuffer = function() {
                var t = Object.keys(this.pages).length
                  , e = 12 * t + 8
                  , a = e
                  , r = n.alloc(a);
                this._buf = r,
                this._writeUInt32(t, 0),
                this._writeUInt32(8, 4);
                for (var s = [], i = [], c = [e], o = [], l = [], y = Object.keys(this.pages).sort(), u = 0; u < t; u++) {
                    var g = y[u]
                      , B = n.from(g + "\0");
                    o.push(B),
                    u + 1 < t && (c[u + 1] = c[u] + B.length)
                }
                var h = n.concat(o)
                  , d = a + h.length
                  , b = 16 * Math.ceil(d / 16)
                  , m = n.alloc(b - d);
                this._writeUInt32(b, 8);
                for (var k = 0; k < t; k++) {
                    var O = y[k]
                      , I = this.pages[O];
                    l[k] = I,
                    i[k] = I.length,
                    s[k] = 0 === k ? b : s[k - 1] + i[k - 1],
                    this._writeUInt32(s[k], 8 + 12 * k),
                    this._writeUInt32(i[k], 8 + 12 * k + 4),
                    this._writeUInt32(c[k], 8 + 12 * k + 8)
                }
                return this._buf = n.concat([r, h, m].concat(l)),
                this._buf
            }
            ,
            Bt.prototype.toJS = function() {
                return this.pages
            }
            ;
            var ht = "ted"
              , dt = {
                mask: function(t) {
                    return o(t, 0)
                },
                unmask: function(t) {
                    return l(t, 0)
                }
            }
              , bt = {
                mask: function(t) {
                    return o(t, 2)
                },
                unmask: function(t) {
                    return l(t, 2)
                }
            }
              , mt = {
                tedFormat: N,
                formatTedPs4: P,
                mask: function(t) {
                    return o(t, 3)
                },
                unmask: F
            }
              , kt = {
                mask: function(t) {
                    return o(t, 4)
                },
                unmask: function(t) {
                    return l(t, 4)
                },
                FormatTed: tt,
                pesdbPlayer: at
            }
              , Ot = {
                mask: function(t) {
                    return o(t, 5)
                },
                unmask: function(t) {
                    return l(t, 5)
                },
                FormatTed: gt
            }
              , It = Bt
              , jt = function(t, e) {
                var n, a, r;
                if (void 0 === e && (e = !1),
                8128 === t.length)
                    r = ht;
                else if (9648 === t.length) {
                    n = "pes2019",
                    r = ht;
                    var s = t;
                    e && (s = F(t)),
                    a = 0 === s.readUInt8(2167) ? "pc" : "ps4"
                } else
                    14760 === t.length ? (n = "pes2020",
                    r = ht,
                    a = "any") : 14820 === t.length && (n = "pes2021",
                    r = ht,
                    a = "ps4");
                return {
                    fileType: r,
                    title: n,
                    platform: a
                }
            };
            e.Pager = It,
            e.guesser = jt,
            e.pes2017 = dt,
            e.pes2018 = bt,
            e.pes2019 = mt,
            e.pes2020 = kt,
            e.pes2021 = Ot,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
        ,
        a(e)
    }
    ).call(this, n(29), n(54).Buffer)
}
, function(t, e, n) {
    t.exports = {
        wrapper: "QuickEditTeamInfo_wrapper__3OVl7",
        teamInfo: "QuickEditTeamInfo_teamInfo__1IWqu",
        managerInfo: "QuickEditTeamInfo_managerInfo__mzOks",
        stripsInfo: "QuickEditTeamInfo_stripsInfo__3uUCX",
        players: "QuickEditTeamInfo_players__2T0FY",
        teamIdField: "QuickEditTeamInfo_teamIdField__3mD3d",
        editedBackgroundColor: "QuickEditTeamInfo_editedBackgroundColor__2qa4l",
        kitsFieldset: "QuickEditTeamInfo_kitsFieldset__3mnNN",
        kits: "QuickEditTeamInfo_kits__38MY9"
    }
}
, , function(t, e, n) {
    t.exports = {
        radio: "QuickEditPlayerList_radio__2jzql",
        input: "QuickEditPlayerList_input__38-2_",
        numericInput: "QuickEditPlayerList_numericInput__2B-eA",
        isInputChanged: "QuickEditPlayerList_isInputChanged__KR4Vg",
        editedColor: "QuickEditPlayerList_editedColor__SpFj7",
        list: "QuickEditPlayerList_list__3M62g",
        row: "QuickEditPlayerList_row__3_5Jn",
        cell: "QuickEditPlayerList_cell__c5RNl"
    }
}
, , , function(t, e, n) {
    t.exports = {
        QuickEditUniform: "QuickEditUniform_QuickEditUniform__3hDk-",
        thumbnailContainer: "QuickEditUniform_thumbnailContainer__1SY0R",
        kitName: "QuickEditUniform_kitName__2PnyS",
        inputBoxes: "QuickEditUniform_inputBoxes__1b08x",
        nameInput: "QuickEditUniform_nameInput__3WsUV",
        editedBackgroundColor: "QuickEditUniform_editedBackgroundColor__2SQwQ"
    }
}
, , , function(t, e, n) {
    t.exports = {
        menu: "PlayerMenu_menu__2QAWf",
        itemContainer: "PlayerMenu_itemContainer__1rSGl",
        item: "PlayerMenu_item__333i_",
        itemNumber: "PlayerMenu_itemNumber__2_2Ls",
        itemPosition: "PlayerMenu_itemPosition__2jSnq",
        itemName: "PlayerMenu_itemName__10kiN"
    }
}
, function(t, e, n) {
    t.exports = {
        wrapper: "Layout_wrapper__1N951",
        middle: "Layout_middle__gEXaO",
        middleInner: "Layout_middleInner__1b9xh",
        aside: "Layout_aside__3KC1t",
        content: "Layout_content__ar-sF",
        contentInner: "Layout_contentInner__m25j0"
    }
}
, function(t, e, n) {
    "use strict";
    (function(t) {
        n.d(e, "b", (function() {
            return y
        }
        )),
        n.d(e, "a", (function() {
            return u
        }
        )),
        n.d(e, "c", (function() {
            return B
        }
        )),
        n.d(e, "d", (function() {
            return d
        }
        ));
        var a = n(2)
          , r = n(24)
          , s = n(14)
          , i = n.n(s)
          , c = n(12)
          , o = n(42)
          , l = n(57)
          , y = "LOAD_FILES"
          , u = "CHANGE_TAB"
          , g = new FileReader
          , B = function(t) {
            return {
                type: u,
                payload: {
                    tab: t
                }
            }
        }
          , h = function(t, e) {
            return console.log("_loadFiles"),
            {
                type: y,
                payload: {
                    fileInfo: t,
                    fileData: e
                }
            }
        }
          , d = function(e) {
            return function() {
                var n = Object(r.a)(i.a.mark((function n(s) {
                    var y, u, B, d, b;
                    return i.a.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return y = e[0],
                                u = y.name.endsWith(".xlsx"),
                                n.next = 4,
                                new Promise((function(e, n) {
                                    g.onload = function() {
                                        var n = Object(r.a)(i.a.mark((function n(r) {
                                            var s, B, h, d, b, m, k, O, I;
                                            return i.a.wrap((function(n) {
                                                for (; ; )
                                                    switch (n.prev = n.next) {
                                                    case 0:
                                                        if (s = t.from(g.result),
                                                        !u) {
                                                            n.next = 14;
                                                            break
                                                        }
                                                        return n.next = 4,
                                                        Object(l.a)(s, {
                                                            titleRowNumber: 1,
                                                            contentStartRowNumber: 2,
                                                            needStyleKeyNames: ["Color 1", "Color 2"]
                                                        });
                                                    case 4:
                                                        return B = n.sent,
                                                        h = B.Main,
                                                        d = B.Coach,
                                                        window._teamXlsx = h,
                                                        window._coachXlsxData = d,
                                                        n.next = 11,
                                                        Object(l.a)(s, {
                                                            titleRowNumber: 1,
                                                            contentStartRowNumber: 2,
                                                            resultMapsKeyColumnNumber: 1
                                                        });
                                                    case 11:
                                                        return b = n.sent,
                                                        window._xlsx = b,
                                                        n.abrupt("return");
                                                    case 14:
                                                        "pes2019" === (m = Object(c.guesser)(s, !0)).title ? (s = c.pes2019.unmask(s),
                                                        "ps4" === m.platform && (k = c.pes2019.formatTedPs4)) : "pes2020" === m.title ? (O = 2020,
                                                        s = c.pes2020.unmask(s),
                                                        k = c.pes2020.FormatTed) : "pes2021" === m.title && (O = 2021,
                                                        s = c.pes2021.unmask(s),
                                                        k = c.pes2021.FormatTed),
                                                        I = o.toJS(s, k.recordLength, k.format, !k.isFullyCovered),
                                                        m = Object(a.a)(Object(a.a)({}, m), {}, {
                                                            edition: O,
                                                            fileName: y.name
                                                        }),
                                                        console.log(I),
                                                        window.JsonTED = I, 
                                                        e({
                                                            fileInfo: m,
                                                            fileData: I
                                                        });
                                                    case 20:
                                                    case "end":
                                                        return n.stop()
                                                    }
                                            }
                                            ), n)
                                        }
                                        )));
                                        return function(t) {
                                            return n.apply(this, arguments)
                                        }
                                    }(),
                                    y && (g.readAsArrayBuffer(y),
                                    window.onbeforeunload = function() {
                                        return ""
                                    }
                                    )
                                }
                                ));
                            case 4:
                                B = n.sent,
                                d = B.fileInfo,
                                b = B.fileData,
                                s(h(d, b));
                            case 8:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(t) {
                    return n.apply(this, arguments)
                }
            }()
        }
    }
    ).call(this, n(54).Buffer)
}
, , function(t, e, n) {
    t.exports = {
        wrapper: "SinglePlayerAbility_wrapper__2tlWu",
        field: "SinglePlayerAbility_field__24cHN",
        input: "SinglePlayerAbility_input__CaBWE",
        barContainer: "SinglePlayerAbility_barContainer__18eR-"
    }
}
, , function(t, e, n) {
    t.exports = {
        attributes: "SinglePlayer_attributes__3ZVSy",
        stats: "SinglePlayer_stats__2qKcV"
    }
}
, , , , function(t, e, n) {
    t.exports = {
        header: "Tab_header__-JSEa",
        title: "Tab_title__3rnIs",
        content: "Tab_content__3n0bI"
    }
}
, , , , , , function(t, e, n) {
    t.exports = {
        Item: "Item_Item__1y1Az",
        isDisabled: "Item_isDisabled__2yLKP",
        isSelected: "Item_isSelected__1fpWU",
        icon: "Item_icon__18pEx"
    }
}
, , , , , function(t, e, n) {
    (function(t) {
        var a, r, s, i, c, o, l = n(115).default;
        !function(e) {
            "use strict";
            function n(t, e, n) {
                return t.slice(e, e + n).toString("utf8").replace(/\0/g, "")
            }
            function y(t, e, n, a) {
                return t.fill(0, e, e + n),
                a += "\0",
                t.write(a, e, n, "utf8")
            }
            function u(t, e, n, a, r) {
                void 0 === r && (r = !1);
                var s = t.readUInt8(e)
                  , i = 8 - n
                  , c = Math.pow(2, Math.min(i, a)) - 1 << n
                  , o = (s & Math.pow(2, 8) - 1 - (Math.pow(2, n) - 1) & c) >> n;
                if (i < a)
                    for (var l = i, y = 0, g = a - l; g > 0; ) {
                        o += u(t, e + (y += 1), 0, Math.min(g, 8)) << l;
                        var B = Math.min(g, 8);
                        g -= B,
                        l += B
                    }
                return r && o > 1 << a - 1 && (o -= 1 << a),
                o
            }
            function g(t, e, n, a, r) {
                var s = Math.pow(2, a) - 1 << n & 255
                  , i = (t.readUInt8(e) | s) ^ s
                  , c = r << n & s;
                t.writeUInt8(i | c, e);
                var o = 8 - n;
                o < a && g(t, e + 1, 0, a - o, r >> o)
            }
            function B(t, e, n, a, r) {
                e += Math.floor(n / 8),
                n %= 8;
                for (var s = Math.ceil((8 * e + n + a) / 8), i = (n + a) % 8 || 8, c = 0, o = e; o < s; o++) {
                    var l = o === e
                      , y = o === s - 1;
                    c <<= 8,
                    c |= t.readUInt8(o),
                    l && (c &= 255 >> n),
                    y && (c >>= 8 - i)
                }
                return c
            }
            function h(t, e, n, a, r) {
                e += Math.floor(n / 8),
                n %= 8;
                for (var s = Math.ceil((8 * e + n + a) / 8), i = (n + a) % 8 || 8, c = e; c < s; c++) {
                    var o = c === s - 1
                      , l = o ? i : 8
                      , y = 255 >> (c === e ? n : 0)
                      , u = 255 >> l
                      , g = r;
                    g >>= o ? 0 : 8 * (s - 1 - c - 1) + i,
                    g <<= 8 - l;
                    var B = t.readUInt8(c) & ~(y ^ u) | (g &= 255);
                    t.writeUInt8(B, c)
                }
            }
            function d(t) {
                if (!Array.isArray(t))
                    throw new Error("`format` is not an array.");
                for (var e = [], n = 0; n < t.length; n++) {
                    var y = t[n]
                      , u = new Set
                      , g = y.key;
                    if (void 0 === g)
                        throw new Error("`key` is missing. (format with index = ".concat(n, ")"));
                    if (u.has(g))
                        throw new Error("`key` value is defined before. (format with index = ".concat(n, ")"));
                    u.add(g);
                    var B = y.subFormat;
                    if (void 0 !== B && !Array.isArray(B))
                        throw new Error("`subFormat` is provided but it is not an array.");
                    var h = y.startByte;
                    if ("number" !== typeof h)
                        throw new Error("Incorrect type of `startByte`. (format with key = ".concat(y.key, ")"));
                    var d = y.arrayLength || 0
                      , b = y.isSigned
                      , m = y.isString || !1
                      , k = y.isStringWithInitialNull || !1
                      , O = y.startBit;
                    if (void 0 !== b && m)
                        throw new Error("`isSigned` is defined when the data is a string. (format with key = ".concat(y.key, ")"));
                    if (void 0 !== O) {
                        if (m)
                            throw new Error("`startBit` is defined when the data is a string. (format with key = ".concat(y.key, ")"));
                        if ("number" !== typeof O)
                            throw new Error("Incorrect type of "(r || (r = l(["startBit"])))(a || (a = l([". (format with key = ", ")"])), y.key));
                        h += Math.floor(O / 8),
                        O %= 8
                    } else
                        O = 0;
                    var I = y.lengthInBit;
                    if (void 0 !== y.length && void 0 !== I)
                        throw new Error(""(o || (o = l(["length"])))(c || (c = l([" and "])))(i || (i = l(["lengthInBit"])))(s || (s = l([" defined at the same time. (format with key = ", ")."])), y.key));
                    void 0 !== y.length && (I = 8 * y.length);
                    var j = y.getter || function(t) {
                        return t
                    }
                      , f = y.setter || function(t) {
                        return t
                    }
                    ;
                    e.push({
                        key: g,
                        arrayLength: d,
                        lengthInBit: I,
                        isSigned: b,
                        isString: m,
                        isStringWithInitialNull: k,
                        startByte: h,
                        startBit: O,
                        subFormat: B,
                        getter: j,
                        setter: f
                    })
                }
                return e
            }
            function b(t, e, a, r, s) {
                void 0 === s && (s = !1);
                for (var i = d(a), c = Math.floor(t.length / e), o = [], l = s ? B : u, y = 0; y < c; y++) {
                    var g = {}
                      , h = t.slice(e * y, e * (y + 1));
                    r && (g.base64 = h.toString("base64"));
                    for (var m = 0; m < i.length; m++) {
                        for (var k = i[m], O = k.key, I = k.arrayLength, j = k.lengthInBit, f = k.isString, A = k.isSigned, N = k.startByte, p = k.startBit, S = k.subFormat, E = k.getter, R = [], x = I || 1, C = 0; C < x; C++) {
                            var v = void 0;
                            if (S) {
                                var L = j / 8;
                                v = b(h.slice(N + L * C, N + L * (C + 1)), L, S, r, s)[0]
                            } else
                                v = f ? n(h, N + C * (j / 8), j / 8) : l(h, Math.trunc((8 * N + (p + C * j)) / 8), (p + C * j) % 8, j, A);
                            R.push(E(v))
                        }
                        g[O] = I ? R : R[0]
                    }
                    o.push(g)
                }
                return o
            }
            function m(e, n, a, r) {
                void 0 === r && (r = !1);
                for (var s = d(a), i = [], c = r ? h : g, o = 0; o < e.length; o++) {
                    var l = e[o]
                      , u = t.alloc(n);
                    if (l.base64) {
                        var B = t.from(l.base64, "base64");
                        B.copy(u, 0, 0, Math.min(n, B.length))
                    }
                    for (var b = 0; b < s.length; b++)
                        for (var k = s[b], O = k.key, I = k.arrayLength, j = k.lengthInBit, f = k.isString, A = k.startByte, N = k.startBit, p = k.subFormat, S = k.setter, E = 0 === I ? [l[O]] : l[O], R = I || 1, x = 0; x < R; x++)
                            if (p) {
                                if (void 0 !== E[x]) {
                                    var C = j / 8;
                                    m([E[x]], C, p, r).copy(u, A + C * x)
                                }
                            } else
                                f ? void 0 !== E[x] && y(u, A + x * (j / 8), j / 8, S(E[x])) : c(u, Math.trunc((8 * A + (N + x * j)) / 8), (N + x * j) % 8, j, S(E[x]));
                    i.push(u)
                }
                return t.concat(i)
            }
            e.fromJS = m,
            e.readBitsBE = B,
            e.readBitsLE = u,
            e.readString = n,
            e.toJS = b,
            e.writeBitsBE = h,
            e.writeBitsLE = g,
            e.writeString = y,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }(e)
    }
    ).call(this, n(54).Buffer)
}
, , , , , , , , , , function(t, e, n) {
    t.exports = {
        MenuBar: "MenuBar_MenuBar__3Fpff",
        fileName: "MenuBar_fileName__e5WSP",
        fileBar: "MenuBar_fileBar__2LxbB"
    }
}
, function(t, e, n) {
    t.exports = {
        contentContainer: "StripsTab_contentContainer__3Ee7W",
        left: "StripsTab_left___8b6l",
        right: "StripsTab_right__2zabf"
    }
}
, , , function(t, e, n) {
    t.exports = {
        footer: "Footer_footer__2PW6G",
        patreon: "Footer_patreon__2blLx",
        patreonIcon: "Footer_patreonIcon__2wgZj",
        version: "Footer_version__3hVhR"
    }
}
, function(t, e, n) {
    "use strict";
    n.d(e, "a", (function() {
        return y
    }
    ));
    var a = n(14)
      , r = n.n(a)
      , s = n(24)
      , i = n(70)
      , c = n.n(i);
    function o(t) {
        var e, n = t.value;
        if ("object" === typeof n) {
            if ("Date" === n.constructor.name)
                e = n;
            else if (n.richText) {
                e = n.richText.map((function(t) {
                    return t.text
                }
                )).join("")
            }
        } else
            e = n;
        return e
    }
    function l(t) {
        var e = t.style
          , n = function(t) {
            var e = parseInt(t, 16);
            return {
                a: (4278190080 & e) >> 24,
                r: (16711680 & e) >> 16,
                g: (65280 & e) >> 8,
                b: 255 & e
            }
        }
          , a = {
            value: o(t)
        };
        return e.font.color && (a.textColor = n(e.font.color.argb)),
        e.fill.bgColor && (a.bgColor = n(e.fill.bgColor.argb)),
        a
    }
    function y(t) {
        return u.apply(this, arguments)
    }
    function u() {
        return u = Object(s.a)(r.a.mark((function t(e) {
            var n, a, s, i, y, u, g, B = arguments;
            return r.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        return n = B.length > 1 && void 0 !== B[1] ? B[1] : {},
                        a = void 0 !== n.titleRowIndex ? n.titleRowIndex + 1 : void 0 !== n.titleRowNumber ? n.titleRowNumber : 1,
                        s = void 0 !== n.contentStartRowIndex ? n.contentStartRowIndex + 1 : void 0 !== n.contentStartRowNumber ? n.contentStartRowNumber : 2,
                        i = n.shouldLog ? console.log : function() {}
                        ,
                        y = new c.a.Workbook,
                        i("Loading spreadsheet..."),
                        t.next = 8,
                        y.xlsx.load(e);
                    case 8:
                        return i("Finished loading spreadsheet."),
                        u = void 0 !== n.resultMapsKeyColumnNumber || void 0 !== n.resultMapsKeyName,
                        g = {},
                        y.eachSheet((function(t) {
                            var e = u ? new Map : []
                              , r = new Map;
                            g[t.name] = e;
                            var i = u && n.resultMapsKeyName || void 0;
                            t.eachRow((function(t, c) {
                                var y = c >= s;
                                if (c === a)
                                    t.eachCell((function(t, e) {
                                        var a = o(t);
                                        r.set(e, a),
                                        u && n.resultMapsKeyColumnNumber === e && (i = a)
                                    }
                                    ));
                                else if (y) {
                                    var g = {};
                                    t.eachCell((function(t, e) {
                                        var a = r.get(e);
                                        a && (n.needStyleKeyNames && -1 !== n.needStyleKeyNames.indexOf(a) ? g[a] = l(t) : g[a] = o(t))
                                    }
                                    )),
                                    u ? e.set(g[i], g) : e.push(g)
                                }
                            }
                            ))
                        }
                        )),
                        t.abrupt("return", g);
                    case 13:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        ))),
        u.apply(this, arguments)
    }
}
, function(t, e, n) {
    t.exports = {
        root: "Button_root__1hOa9",
        button: "Button_button__VpSNn",
        isDisabled: "Button_isDisabled__MGH19"
    }
}
, function(t, e, n) {
    t.exports = {
        isEdited: "CountryDropdown_isEdited__3h80V",
        select: "CountryDropdown_select__2IATa"
    }
}
, function(t, e, n) {
    t.exports = {
        field: "NumberField_field__1M9br",
        isEdited: "NumberField_isEdited__1KxJg"
    }
}
, function(t, e, n) {
    t.exports = {
        PositionLabel: "PositionLabel_PositionLabel__25Vmc",
        gk: "PositionLabel_gk__17837",
        df: "PositionLabel_df__1AUPn",
        mf: "PositionLabel_mf__TFo91",
        fw: "PositionLabel_fw__2H1zV"
    }
}
, function(t, e, n) {
    t.exports = {
        wrapper: "Section_wrapper__AUQ0z",
        title: "Section_title__2Hm62"
    }
}
, function(t, e, n) {
    t.exports = {
        wrapper: "Bar_wrapper__ASwkD",
        bar: "Bar_bar__2p6Wf"
    }
}
, , , , , , , , function(t, e, n) {
    t.exports = {
        input: "FileButton_input__OzRtO",
            id: "btn"
    }
}
, function(t, e, n) {
    t.exports = {
        form: "FileLoader_form__10XrJ"
    }
}
, , function(t, e, n) {
    t.exports = {
        tippy: "Tooltip_tippy__2M8g9"
    }
}
, function(t, e, n) {
    t.exports = {
        NavBar: "Bar_NavBar__35ozJ"
    }
}
, , , , , function(t) {
    t.exports = JSON.parse('[[1,{"enName":"Afghanistan"}],[2,{"enName":"Bahrain"}],[3,{"enName":"Bangladesh"}],[4,{"enName":"Bhutan"}],[5,{"enName":"Brunei Darussalam"}],[6,{"enName":"Cambodia"}],[7,{"enName":"China PR"}],[8,{"enName":"Hong Kong"}],[9,{"enName":"India"}],[10,{"enName":"Indonesia"}],[11,{"enName":"IR Iran"}],[12,{"enName":"Iraq"}],[13,{"enName":"Japan"}],[14,{"enName":"Jordan"}],[15,{"enName":"Korea DPR"}],[16,{"enName":"Korea Republic"}],[17,{"enName":"Kuwait"}],[18,{"enName":"Laos"}],[19,{"enName":"Lebanon"}],[20,{"enName":"Macau"}],[21,{"enName":"Malaysia"}],[22,{"enName":"Maldives"}],[23,{"enName":"Mongolia"}],[24,{"enName":"Myanmar"}],[25,{"enName":"Nepal"}],[26,{"enName":"Oman"}],[27,{"enName":"Pakistan"}],[28,{"enName":"Palestine"}],[29,{"enName":"Philippines"}],[30,{"enName":"Qatar"}],[31,{"enName":"Saudi Arabia"}],[32,{"enName":"Singapore"}],[33,{"enName":"Sri Lanka"}],[34,{"enName":"Syria"}],[36,{"enName":"Thailand"}],[37,{"enName":"United Arab Emirates"}],[38,{"enName":"Vietnam"}],[39,{"enName":"Yemen"}],[40,{"enName":"Kyrgyz Republic"}],[41,{"enName":"Tajikistan"}],[42,{"enName":"Turkmenistan"}],[43,{"enName":"Timor-Leste"}],[44,{"enName":"Algeria"}],[45,{"enName":"Angola"}],[46,{"enName":"Benin"}],[47,{"enName":"Botswana"}],[48,{"enName":"Burkina Faso"}],[49,{"enName":"Burundi"}],[50,{"enName":"Cameroon"}],[51,{"enName":"Cape Verde"}],[52,{"enName":"Central African Republic"}],[53,{"enName":"Chad"}],[54,{"enName":"Comoros"}],[55,{"enName":"Congo DR"}],[56,{"enName":"C\xf4te d\'Ivoire"}],[57,{"enName":"Djibouti"}],[58,{"enName":"Egypt"}],[59,{"enName":"Equatorial Guinea"}],[60,{"enName":"Eritrea"}],[61,{"enName":"Ethiopia"}],[62,{"enName":"Gabon"}],[63,{"enName":"Gambia"}],[64,{"enName":"Ghana"}],[65,{"enName":"Guinea"}],[66,{"enName":"Guinea-Bissau"}],[67,{"enName":"Kenya"}],[68,{"enName":"Lesotho"}],[69,{"enName":"Liberia"}],[70,{"enName":"Libya"}],[71,{"enName":"Madagascar"}],[72,{"enName":"Malawi"}],[73,{"enName":"Mali"}],[74,{"enName":"Mauritania"}],[75,{"enName":"Mauritius"}],[76,{"enName":"Morocco"}],[77,{"enName":"Mozambique"}],[78,{"enName":"Namibia"}],[79,{"enName":"Niger"}],[80,{"enName":"Nigeria"}],[81,{"enName":"Rwanda"}],[82,{"enName":"S\xe3o Tom\xe9 and Pr\xedncipe"}],[83,{"enName":"Senegal"}],[84,{"enName":"Seychelles"}],[85,{"enName":"Sierra Leone"}],[86,{"enName":"Somalia"}],[87,{"enName":"South Africa"}],[88,{"enName":"Sudan"}],[89,{"enName":"Eswatini"}],[90,{"enName":"Tanzania"}],[91,{"enName":"Togo"}],[92,{"enName":"Tunisia"}],[93,{"enName":"Uganda"}],[94,{"enName":"Zambia"}],[95,{"enName":"Zimbabwe"}],[98,{"enName":"Congo"}],[103,{"enName":"Anguilla"}],[104,{"enName":"Antigua and Barbuda"}],[105,{"enName":"Aruba"}],[106,{"enName":"Bahamas"}],[107,{"enName":"Barbados"}],[108,{"enName":"Belize"}],[109,{"enName":"Bermuda"}],[110,{"enName":"Canada"}],[111,{"enName":"Cayman Islands"}],[112,{"enName":"Costa Rica"}],[113,{"enName":"Cuba"}],[114,{"enName":"Dominica"}],[115,{"enName":"Dominican Republic"}],[116,{"enName":"El Salvador"}],[117,{"enName":"Grenada"}],[119,{"enName":"Guatemala"}],[120,{"enName":"Haiti"}],[121,{"enName":"Honduras"}],[122,{"enName":"Jamaica"}],[124,{"enName":"Mexico"}],[125,{"enName":"Montserrat"}],[127,{"enName":"Nicaragua"}],[128,{"enName":"Panama"}],[129,{"enName":"Puerto Rico"}],[130,{"enName":"Saint Kitts and Nevis"}],[131,{"enName":"Saint Lucia"}],[132,{"enName":"Saint Vincent and the Grenadines"}],[133,{"enName":"Trinidad and Tobago"}],[134,{"enName":"Turks and Caicos Islands"}],[135,{"enName":"USA"}],[136,{"enName":"British Virgin Islands"}],[137,{"enName":"US Virgin Islands"}],[138,{"enName":"French Guiana"}],[139,{"enName":"Suriname"}],[140,{"enName":"Cura\xe7ao"}],[144,{"enName":"Argentina"}],[145,{"enName":"Bolivia"}],[146,{"enName":"Brazil"}],[147,{"enName":"Chile"}],[148,{"enName":"Colombia"}],[149,{"enName":"Ecuador"}],[150,{"enName":"Paraguay"}],[151,{"enName":"Peru"}],[152,{"enName":"Uruguay"}],[153,{"enName":"Venezuela"}],[159,{"enName":"Guyana"}],[161,{"enName":"American Samoa"}],[162,{"enName":"Australia"}],[163,{"enName":"Cook Islands"}],[164,{"enName":"Fiji"}],[165,{"enName":"New Caledonia"}],[166,{"enName":"New Zealand"}],[167,{"enName":"Papua New Guinea"}],[168,{"enName":"Samoa"}],[169,{"enName":"Solomon Islands"}],[170,{"enName":"Tahiti"}],[171,{"enName":"Tonga"}],[172,{"enName":"Vanuatu"}],[176,{"enName":"Guam"}],[184,{"enName":"Palau"}],[189,{"enName":"Israel"}],[190,{"enName":"Turkey"}],[191,{"enName":"Albania"}],[192,{"enName":"Andorra"}],[193,{"enName":"Armenia"}],[194,{"enName":"Austria"}],[195,{"enName":"Azerbaijan"}],[196,{"enName":"Belarus"}],[197,{"enName":"Belgium"}],[198,{"enName":"Bosnia and Herzegovina"}],[199,{"enName":"Bulgaria"}],[200,{"enName":"Croatia"}],[201,{"enName":"Cyprus"}],[202,{"enName":"Czech Republic"}],[203,{"enName":"Denmark"}],[204,{"enName":"England"}],[205,{"enName":"Estonia"}],[206,{"enName":"Faroe Islands"}],[207,{"enName":"Finland"}],[208,{"enName":"France"}],[209,{"enName":"Georgia"}],[210,{"enName":"Germany"}],[211,{"enName":"Greece"}],[212,{"enName":"Hungary"}],[213,{"enName":"Iceland"}],[214,{"enName":"Republic of Ireland"}],[215,{"enName":"Italy"}],[216,{"enName":"Kazakhstan"}],[217,{"enName":"Latvia"}],[218,{"enName":"Liechtenstein"}],[219,{"enName":"Lithuania"}],[220,{"enName":"Luxembourg"}],[221,{"enName":"North Macedonia"}],[222,{"enName":"Malta"}],[223,{"enName":"Moldova"}],[224,{"enName":"Netherlands"}],[225,{"enName":"Northern Ireland"}],[226,{"enName":"Norway"}],[227,{"enName":"Poland"}],[228,{"enName":"Portugal"}],[229,{"enName":"Romania"}],[230,{"enName":"Russia"}],[231,{"enName":"San Marino"}],[232,{"enName":"Scotland"}],[234,{"enName":"Slovakia"}],[235,{"enName":"Slovenia"}],[236,{"enName":"Spain"}],[237,{"enName":"Sweden"}],[238,{"enName":"Switzerland"}],[239,{"enName":"Ukraine"}],[240,{"enName":"Uzbekistan"}],[241,{"enName":"Wales"}],[245,{"enName":"Gibraltar"}],[250,{"enName":"Monaco"}],[260,{"enName":"- Others"}],[298,{"enName":"Chinese Taipei"}],[303,{"enName":"Serbia"}],[304,{"enName":"Montenegro"}],[311,{"enName":"Kosovo"}],[312,{"enName":"South Sudan"}]]')
}
, function(t, e, n) {
    t.exports = {
        isEdited: "TextField_isEdited__1_w6t"
    }
}
, function(t) {
    t.exports = JSON.parse('[[1,"IRELAND"],[2,"NORTHERN IRELAND"],[3,"SCOTLAND"],[4,"WALES"],[5,"ENGLAND"],[6,"PORTUGAL"],[7,"SPAIN"],[8,"FRANCE"],[9,"BELGIUM"],[10,"NETHERLANDS"],[11,"SWITZERLAND"],[12,"ITALY"],[13,"CZECH REPUBLIC"],[14,"GERMANY"],[15,"DENMARK"],[16,"NORWAY"],[17,"SWEDEN"],[18,"FINLAND"],[19,"POLAND"],[20,"SLOVAKIA"],[21,"AUSTRIA"],[22,"HUNGARY"],[23,"SLOVENIA"],[24,"CROATIA"],[26,"ROMANIA"],[27,"BULGARIA"],[28,"GREECE"],[29,"TURKEY"],[30,"UKRAINE"],[31,"RUSSIA"],[32,"MOROCCO"],[33,"TUNISIA"],[34,"EGYPT"],[35,"NIGERIA"],[36,"CAMEROON"],[37,"SOUTH AFRICA"],[38,"SENEGAL"],[39,"USA"],[40,"MEXICO"],[41,"JAMAICA"],[42,"COSTA RICA"],[43,"HONDURAS"],[44,"COLOMBIA"],[45,"BRAZIL"],[46,"PERU"],[47,"CHILE"],[48,"PARAGUAY"],[49,"URUGUAY"],[50,"ARGENTINA"],[51,"ECUADOR"],[52,"JAPAN"],[53,"REPUBLIC OF KOREA"],[54,"CHINA"],[55,"IRAN"],[56,"SAUDI ARABIA"],[57,"AUSTRALIA"],[59,"LATVIA"],[100,"MANCHESTER UNITED"],[101,"ARSENAL"],[102,"CHELSEA B"],[103,"LIVERPOOL R"],[104,"LEEDS W"],[105,"WEST HAM RB"],[106,"NEWCASTLE WB"],[107,"ASTON RB"],[108,"FC BARCELONA"],[109,"MADRID CHAMARTIN B"],[110,"VALENCIA BN"],[111,"LA CORU\xd1A AB"],[112,"MONACO"],[113,"OLYMPIQUE MARSEILLE"],[114,"PSG"],[115,"BORDEAUX"],[116,"AJAX"],[117,"FEYENOORD"],[118,"PSV"],[119,"LOMBARDIA NA"],[120,"JUVENTUS"],[121,"MILANO RN"],[122,"LAZIO"],[123,"PARMA"],[124,"FIORENTINA"],[125,"ROMA"],[127,"FC BAYERN M\xdcNCHEN"],[128,"BAYER LEVERKUSEN"],[130,"GALATASARAY"],[131,"CELTIC"],[132,"RANGERS"],[133,"OLYMPIAKOS PIRAEUS"],[134,"DYNAMO KYIV"],[135,"SPARTAK MOSKVA"],[136,"VASCO DA GAMA"],[137,"BARRA FUNDA V"],[138,"RIVER PLATE"],[139,"BOCA JUNIORS"],[140,"ML DEFAULT EUROPE"],[172,"MADRID ROSAS RB"],[173,"MANCHESTER B"],[174,"ANDERLECHT"],[175,"SPARTA PRAHA"],[176,"BLACKBURN BW"],[177,"EVERTON B"],[178,"FULHAM W"],[179,"TOTTENHAM WB"],[180,"AUXERRE"],[181,"OLYMPIQUE LYONNAIS"],[182,"RC LENS"],[184,"SCHALKE 04"],[186,"BOLOGNA"],[187,"BRESCIA BA"],[188,"CHIEVO"],[190,"UDINESE"],[191,"BENFICA"],[192,"PORTO"],[193,"SPORTING CP"],[194,"SEVILLA TRIANA VB"],[195,"VIGO AB"],[196,"VASCO GIPUZKOA AB"],[197,"FENERBAH\xc7E"],[198,"PANATHINAIKOS"],[199,"PES UNITED"],[200,"WE UNITED"],[201,"BIRMINGHAM B"],[203,"CHARLTON RW"],[204,"LEICESTER B"],[205,"MIDDLESBROUGH RW"],[207,"SOUTHAMPTON RW"],[208,"WOLVERHAMPTON YB"],[209,"AJACCIO"],[211,"GUINGAMP"],[213,"LILLE"],[215,"MONTPELLIER"],[216,"NANTES"],[217,"NICE"],[218,"RENNES"],[219,"SOCHAUX"],[221,"TOULOUSE"],[234,"ATALANTA"],[235,"EMPOLI"],[239,"REGGINA"],[240,"SAMPDORIA"],[242,"AZ"],[243,"ADO DEN HAAG"],[244,"GRONINGEN"],[245,"HEERENVEEN"],[250,"TWENTE"],[251,"UTRECHT"],[252,"VITESSE"],[254,"RKC WAALWIJK"],[255,"WILLEM II"],[256,"PEC ZWOLLE"],[258,"BILBAO BR"],[259,"LLOBREGAT AB"],[260,"M\xc1LAGA AB"],[261,"MALLORCA RN"],[263,"PAMPLONA RA"],[264,"SANTANDER VB"],[265,"SEVILLA NERVI\xd3N BR"],[266,"VALLADOLID MB"],[267,"VILLARREAL A"],[268,"ZARAGOZA BA"],[269,"CLUB BRUGGE"],[270,"AEK ATHENS"],[271,"LOKOMOTIV MOSKVA"],[273,"BE\u015e\u0130KTA\u015e"],[274,"CRUZEIRO"],[289,"BEIJING OB"],[295,"BEIJING GUOAN"],[306,"JIANGSU SUNING"],[310,"GUANGZHOU EVERGRANDE"],[317,"ASCOLI"],[320,"CAGLIARI"],[323,"GENOA"],[325,"LIVORNO G"],[327,"NAPOLI"],[328,"PESCARA"],[333,"TORINO"],[336,"HELLAS VERONA"],[337,"LR VICENZA"],[342,"EMMEN"],[345,"FORTUNA SITTARD"],[349,"HERACLES"],[351,"SPARTA ROTTERDAM"],[355,"VVV"],[357,"ALMER\xcdA RB"],[361,"ELCHE BV"],[362,"GETAFE A"],[363,"GIJ\xd3N RB"],[364,"LAS PALMAS AA"],[366,"LEVANTE RA"],[368,"NUMANCIA R"],[370,"VALLECAS BR"],[377,"BRIGHTON WB"],[378,"BURNLEY RB"],[379,"CARDIFF B"],[382,"CRYSTAL PALACE RB"],[383,"DERBY WB"],[387,"MILLWALL BW"],[388,"NORWICH YG"],[389,"NOTTINGHAM RW"],[391,"READING BW"],[394,"SHEFFIELD BW"],[395,"STOKE RW"],[398,"WATFORD BY"],[399,"WEST BROMWICH WB"],[400,"WIGAN BW"],[403,"ANGERS"],[405,"CAEN"],[406,"CH\xc2TEAUROUX"],[407,"CLERMONT"],[413,"LE HAVRE"],[414,"LORIENT"],[415,"NANCY"],[416,"NIORT"],[418,"SAINT-\xc9TIENNE"],[420,"TROYES"],[1010,"IRAQ"],[1011,"JORDAN"],[1012,"KOREA DPR"],[1013,"KUWAIT"],[1015,"LEBANON"],[1022,"OMAN"],[1026,"QATAR"],[1031,"THAILAND"],[1032,"UNITED ARAB EMIRATES"],[1040,"ALGERIA"],[1044,"BURKINA FASO"],[1051,"C\xd4TE D\'IVOIRE"],[1058,"GHANA"],[1059,"GUINEA"],[1067,"MALI"],[1083,"ZAMBIA"],[1113,"PANAMA"],[1128,"BOLIVIA"],[1129,"VENEZUELA"],[1141,"NEW ZEALAND"],[1164,"ISRAEL"],[1165,"ALBANIA"],[1166,"ANDORRA"],[1167,"ARMENIA"],[1168,"AZERBAIJAN"],[1169,"BELARUS"],[1170,"BOSNIA AND HERZEGOVINA"],[1171,"CYPRUS"],[1172,"ESTONIA"],[1173,"FAROE ISLANDS"],[1174,"GEORGIA"],[1175,"ICELAND"],[1176,"KAZAKHSTAN"],[1177,"LIECHTENSTEIN"],[1178,"LITHUANIA"],[1179,"LUXEMBOURG"],[1180,"NORTH MACEDONIA"],[1181,"MALTA"],[1182,"MOLDOVA"],[1183,"SAN MARINO"],[1184,"UZBEKISTAN"],[1195,"GENK"],[1196,"GENT"],[1197,"STANDARD LI\xc8GE"],[1200,"MECHELEN"],[1203,"DINAMO ZAGREB"],[1207,"K\xd8BENHAVN"],[1208,"NORDSJ\xc6LLAND"],[1212,"PAOK"],[1217,"CSKA MOSKVA"],[1218,"ZENIT"],[1219,"ABERDEEN"],[1220,"DUNDEE UNITED"],[1222,"HIBERNIAN"],[1230,"GEN\xc7LERB\u0130RL\u0130\u011e\u0130"],[1232,"SHAKHTAR DONETSK"],[1236,"ARGENTINOS JUNIORS"],[1237,"RACING CLUB"],[1238,"ESTUDIANTES"],[1239,"GIMNASIA LA PLATA"],[1240,"INDEPENDIENTE"],[1241,"NEWELL\'S OLD BOYS"],[1242,"ROSARIO CENTRAL"],[1243,"SAN LORENZO"],[1244,"V\xc9LEZ SARSFIELD"],[1245,"ATL\xc9TICO MINEIRO"],[1246,"BOTAFOGO"],[1247,"CORINTHIANS"],[1248,"FLAMENGO"],[1249,"FLUMINENSE"],[1250,"GR\xcaMIO"],[1251,"GUARANI"],[1252,"INTERNACIONAL"],[1254,"SANTOS"],[1255,"S\xc3O PAULO"],[1256,"COLO COLO"],[1257,"AM\xc9RICA DE CALI"],[1258,"MILLONARIOS"],[1327,"QUEEN\'S PARK BW"],[1328,"DIJON"],[1329,"BREST"],[1330,"STADE DE REIMS"],[1363,"CROTONE"],[1386,"PLEASURE HORN"],[1493,"BURIRAM UNITED"],[1528,"VALENCIENNES"],[1550,"SERBIA"],[1551,"MONTENEGRO"],[1588,"BARNSLEY R"],[1589,"HULL OB"],[1595,"PONFERRADA AB"],[1600,"SPEZIA"],[1706,"BASEL"],[1753,"DINAMO MOSKVA"],[1760,"BRISTOL R"],[1765,"GRANADA RB"],[1804,"VIT\xd3RIA GUIMAR\xc3ES"],[1809,"S\u0130VASSPOR"],[1818,"AAB"],[1832,"BR\xd8NDBY"],[1909,"SWANSEA W"],[1910,"N\xceMES"],[1919,"SASSUOLO"],[1920,"CITTADELLA"],[1921,"ARSENAL"],[1922,"HURAC\xc1N"],[1923,"COL\xd3N"],[1924,"GODOY CRUZ"],[1927,"BANFIELD"],[1929,"LAN\xdaS"],[1930,"ATHLETICO PARANAENSE"],[1931,"CORITIBA"],[1932,"FIGUEIRENSE"],[1933,"GOI\xc1S"],[1935,"N\xc1UTICO"],[1936,"SPORT RECIFE"],[1937,"VIT\xd3RIA"],[1941,"RUBIN KAZAN"],[1944,"MADEIRA BP"],[1945,"TRABZONSPOR"],[1950,"YOUNG BOYS"],[1955,"SION"],[1956,"VADUZ"],[1957,"Z\xdcRICH"],[1958,"SERVETTE"],[1973,"BELENENSES"],[1974,"SPORTING BRAGA"],[1976,"MAR\xcdTIMO"],[1978,"PA\xc7OS DE FERREIRA"],[1979,"RIO AVE"],[1981,"SET\xdaBAL V"],[1985,"KILMARNOCK"],[1986,"MOTHERWELL"],[1987,"ST. MIRREN"],[1989,"ANTALYASPOR"],[1995,"\u0130STANBUL BA\u015eAK\u015eEH\u0130R"],[1996,"KAYSER\u0130SPOR"],[2009,"CERCLE BRUGGE"],[2010,"SPORTING CHARLEROI"],[2013,"KORTRIJK"],[2019,"ZULTE-WAREGEM"],[2066,"HORSENS"],[2067,"AGF"],[2068,"ESBJERG BH"],[2069,"MIDTJYLLAND"],[2070,"OB"],[2071,"RANDERS"],[2187,"GIRONA R"],[2188,"HUESCA RA"],[2191,"UNIVERSIDAD CAT\xd3LICA"],[2192,"AUDAX ITALIANO"],[2193,"ATL\xc9TICO NACIONAL"],[2194,"C\xdaCUTA RN"],[2195,"BOYAC\xc1 CHIC\xd3"],[2208,"EVERTON"],[2209,"UNIVERSIDAD DE CHILE"],[2210,"INDEPENDIENTE MEDELL\xcdN"],[2215,"UNIVERSITARIO"],[2216,"SPORTING CRISTAL"],[2229,"ROSTOV"],[2284,"ONCE CALDAS"],[2285,"JUNIOR"],[2287,"ALIANZA LIMA"],[2293,"ALMCHENDOLF"],[2297,"EHRENHOFSTADT"],[2298,"FINESEEBERG"],[2300,"KRIEDBACH"],[2301,"LENGERBLITZ"],[2344,"XAKOULAGOS"],[2345,"HERISMAKHGIA"],[2346,"MARGUAPARRENA"],[2347,"SERIGNALUCA"],[2348,"CELUVARIS"],[2349,"TEDLOGHEC"],[2350,"WARYAMOSUK"],[2351,"NAKHQACHEV"],[2352,"SAINTRAGLER"],[2353,"BLOOKROWS"],[2354,"MRABSPOR"],[2355,"TRUNECAN"],[2356,"NELAPOLTSK"],[2357,"GHARNETOVA"],[2360,"UNI\xd3N ESPA\xd1OLA"],[2361,"DEPORTES TOLIMA"],[2365,"ST. JOHNSTONE"],[2369,"PORTIMONENSE"],[2382,"AVES V"],[2387,"GIL VICENTE"],[2388,"MOREIRENSE"],[2391,"SANTA CLARA"],[2393,"ALCORC\xd3N AA"],[2398,"KALAQUISONG CITY"],[2399,"HUANGYING QINGSHUN"],[2400,"SUJUNG BADA"],[2401,"CHEONSANG TEAYANG"],[2402,"SAYRAMSKAL"],[2403,"ZANGRHAN"],[2404,"QATOREJAN"],[2405,"YARAYDECCAH"],[2406,"MORATYADI"],[2407,"ALMORFIDA"],[2408,"KHARIMSHARJAH"],[2409,"QAXOQAVOIY"],[2450,"AM\xc9RICA MINEIRO"],[2451,"ATL\xc9TICO GO"],[2452,"AVA\xcd"],[2453,"BAHIA"],[2454,"CEAR\xc1"],[2459,"RED BULL BRAGANTINO"],[2464,"PARAN\xc1"],[2465,"PONTE PRETA"],[2468,"VILA NOVA"],[2469,"ML DEFAULT LATINAMERICA"],[2473,"PUNTIHUERVA"],[2478,"CUNTURIPA"],[2480,"ARUZUTANQUE"],[2481,"QUERTEMOYO"],[2483,"GIBERCHAMPU"],[2484,"ZARQUAGENA"],[2486,"HARMANUCI"],[2488,"BUCHANEVA"],[2490,"HEZTORRIUM"],[2491,"TYHUANZO"],[2493,"GUARCHOMATO"],[2494,"NUERRUJIYO"],[2496,"BIRAQUACHU"],[2497,"QHARITUNBO"],[2498,"HIENTOZARIO"],[2499,"BAMGARRUA"],[2501,"CARIZUPELLO"],[2506,"CRB"],[2514,"MARRIBOHUA"],[2517,"STABIA GB"],[2523,"SABADELL AB"],[2538,"UNI\xd3N"],[2541,"O\'HIGGINS"],[2542,"SANTIAGO WANDERERS"],[2543,"IQUIQUE A"],[2544,"DEPORTES LA SERENA"],[2545,"HUACHIPATO"],[2546,"UNI\xd3N LA CALERA"],[2547,"DEPORTES ANTOFAGASTA"],[2548,"PALESTINO"],[2551,"CONCEPCI\xd3N AA"],[2553,"COBRESAL"],[2610,"HUDDERSFIELD BW"],[2614,"TONDELA"],[2615,"LUGO RB"],[2616,"MIRANDA DE EBRO RN"],[2618,"KRASNODAR"],[2622,"ROSS COUNTY"],[2625,"KASIMPA\u015eA"],[2643,"SCG MUANGTHONG UNITED"],[2650,"DEPORTIVO CALI"],[2651,"DEPORTIVO PASTO"],[2652,"ENVIGADO"],[2653,"RIONEGRO"],[2654,"LA EQUIDAD"],[2655,"PATRIOTAS BOYAC\xc1"],[2657,"SANTA FE"],[2676,"SPORT BOYS"],[2689,"ALTIPLANO BUNAN"],[2690,"CERSIPLA JAKARTA"],[2691,"FONTANA CITY"],[2692,"KRUNGTHEP UNITED"],[2693,"HAIPHONG ATHLETIC"],[2694,"CATERAVAI"],[2695,"TARGUERAL"],[2696,"ML DEFAULT ASIA"],[2697,"BHARSHAPUR"],[2698,"MOUQABARAM"],[2699,"\xd1UBLENSE"],[2703,"EUROPEAN CLASSICS"],[2704,"WORLD CLASSICS"],[2707,"COQUIMBO AN"],[2708,"CURIC\xd3 UNIDO"],[2717,"ALDOSIVI"],[2719,"ATL\xc9TICO TUCUM\xc1N"],[2722,"DEFENSA Y JUSTICIA"],[2729,"PATRONATO"],[2730,"SARMIENTO"],[4000,"COSMOPOLIZIA"],[4001,"TRAPERZO"],[4002,"BENBACAMPO"],[4003,"ESPIONORTE"],[4004,"FLOSKRULE"],[4005,"GUIDRAENIALE"],[4031,"HUERPOJAUZA"],[4032,"DIAZAGRECCIO"],[4033,"XAVRENAGUEL"],[4034,"CHEQUEBERO"],[4035,"DUZAGHALIA"],[4036,"WAHUCHAMATE"],[4037,"QUIMRIGNA"],[4038,"HUATYNCAN"],[4040,"JOBAZAVAR"],[4041,"POQUEHILLO"],[4042,"FOVRAGIZUM"],[4043,"CONTAQUIPURA"],[4044,"ETAMUARANIES"],[4045,"AYATOHUA"],[4046,"ZAGREPAQU"],[4071,"BOURNEMOUTH RB"],[4077,"TRAPANI G"],[4086,"FARENSE"],[4092,"DALIAN PRO"],[4094,"SHANGHAI SIPG"],[4095,"WUHAN ZALL"],[4108,"CHAPECOENSE"],[4110,"OESTE"],[4111,"SAMPAIO CORR\xcaA"],[4123,"METZ"],[4143,"SAMARA ZBS"],[4145,"\xc1LAVA AB"],[4146,"EIBAR AR"],[4147,"TENERIFE AB"],[4168,"SHANDONG LUNENG TAISHAN"],[4175,"CHONBURI"],[4180,"BRENTFORD RW"],[4183,"COVENTRY B"],[4192,"PRESTON WB"],[4193,"ROTHERHAM RW"],[4194,"SHEFFIELD RB"],[4200,"AMIENS"],[4206,"DUNKERQUE"],[4211,"PARIS"],[4213,"STRASBOURG"],[4220,"CREMONESE"],[4225,"REGGIANA"],[4229,"VENEZIA"],[4230,"VIRTUS ENTELLA"],[4232,"BENEVENTO"],[4234,"FROSINONE"],[4237,"LECCE"],[4240,"PERUGIA BR"],[4241,"PISA"],[4244,"SALERNITANA"],[4255,"LOGRO\xd1O RB"],[4260,"OVIEDO A"],[4269,"FUENLABRADA A"],[4272,"LEGAN\xc9S AB"],[4302,"ALBACETE BN"],[4308,"C\xc1DIZ AA"],[4309,"CARTAGENA NB"],[4323,"BOAVISTA"],[4363,"LUTON WO"],[4370,"GRENOBLE FOOT 38"],[4372,"RODEZ"],[4395,"CASTELL\xd3N NB"],[4914,"MONZA"],[4915,"PORDENONE"],[4923,"SPAL"],[4928,"COSENZA"],[4937,"ST. GALLEN"],[4938,"THUN RW"],[4941,"BG PATHUM UNITED"],[4943,"GUANGZHOU R&F"],[4962,"LUZERN"],[4964,"LAUSANNE SPORT"],[4965,"LUGANO"],[4971,"THE OLD BOYS"],[4973,"CHAMBLY"],[4995,"CENTRAL C\xd3RDOBA SDE"],[5028,"FAMALIC\xc3O"],[5046,"TALLERES DE C\xd3RDOBA"],[5047,"BRASIL DE PELOTAS"],[5048,"LONDRINA"],[5096,"WYCOMBE B"],[5099,"PAU"],[5127,"EXTREMADURA AR"],[5129,"WORLD SELECTION"],[5137,"JUVENTUDE"],[5139,"BOTAFOGO SP"],[5140,"CONFIAN\xc7A"],[5141,"CSA"],[5142,"CUIAB\xc1"],[5143,"FORTALEZA"],[5145,"REMO"],[5168,"CHONGQING DANGDAI LIFAN"],[5170,"HEBEI CHINA FORTUNE"],[5171,"HENAN JIANYE"],[5173,"SHANGHAI SHENHUA"],[5174,"TIANJIN BY"],[5175,"TIANJIN TEDA"],[5183,"QINGDAO HUANGHAI"],[5184,"SHENZHEN KAISA"],[5185,"SHIJIAZHUANG EVERBRIGHT"],[5189,"SLAVIA PRAHA"],[5190,"KAS EUPEN"],[5191,"ANTWERP"],[5192,"KV OOSTENDE"],[5193,"ROYAL EXCEL MOUSCRON"],[5194,"SINT-TRUIDEN"],[5195,"WAASLAND-BEVEREN"],[5196,"AKHMAT GROZNY"],[5197,"ARSENAL TULA"],[5200,"UFA"],[5201,"URAL"],[5202,"ALANYASPOR"],[5203,"G\xd6ZTEPE"],[5204,"KONYASPOR"],[5206,"YEN\u0130 MALATYASPOR"],[5207,"ALIANZA PETROLERA"],[5208,"ATL\xc9TICO BUCARAMANGA"],[5210,"JAGUARES DE C\xd3RDOBA"],[5216,"BEERSCHOT"],[5217,"OH LEUVEN"],[5223,"HOBRO GB"],[5224,"LYNGBY"],[5225,"SILKEBORG RH"],[5226,"S\xd8NDERJYSKE"],[5235,"VEJLE"],[5296,"SOCHI"],[5298,"KHIMKI"],[5301,"ORENBURG BS"],[5302,"ROTOR VOLGOGRAD"],[5306,"TAMBOV"],[5312,"HAMILTON ACADEMICAL"],[5319,"LIVINGSTON"],[5346,"NEUCH\xc2TEL RS"],[5353,"BB ERZURUMSPOR"],[5354,"R\u0130ZESPOR"],[5355,"DEN\u0130ZL\u0130SPOR"],[5356,"GAZ\u0130ANTEP FK"],[5360,"ANKARAG\xdcC\xdc"],[5370,"DEPORTIVO PEREIRA"],[5389,"DEPORTES MELIPILLA"],[5394,"TRUE BANGKOK UNITED"],[5395,"CHIANGRAI UNITED"],[5397,"NAKHONRATCHASIMA MAZDA"],[5399,"SAMUT PRAKAN CITY"],[5400,"POLICE TERO"],[5401,"PORT"],[5402,"PT PRACHUAP"],[5403,"RATCHABURI MITRPHOL"],[5404,"SUKHOTHAI"],[5405,"SUPHANBURI"],[5416,"RAYONG FC"],[5420,"TRAT"],[5433,"OPER\xc1RIO PR"],[5439,"GIBRALTAR"],[5440,"KOSOVO"],[5452,"HATAYSPOR"],[5454,"PLATENSE"],[5652,"FAT\u0130H KARAG\xdcMR\xdcK"],[5660,"BRUSQUE"],[65686,"F.C. TOKYO"],[65688,"YOKOHAMA F. MARINOS"],[65694,"VISSEL KOBE"],[65813,"SUWON SAMSUNG BLUEWINGS"],[65815,"JEONBUK HYUNDAI MOTORS"],[65818,"SEOUL"],[65831,"BEIJING FC"],[65846,"GUANGZHOU EVERGRANDE"],[66871,"AL AIN"],[66877,"SEPAHAN"],[66885,"AL AHLI SAUDI"],[66895,"PAKHTAKOR"],[67025,"AL HILAL"],[67112,"ESTEGHLAL"],[67114,"SYDNEY"],[68103,"AL DUHAIL"],[68113,"AL NASSR"],[68116,"AL TAAWOUN"],[69630,"SHANGHAI SIPG"],[69703,"MELBOURNE VICTORY"],[69706,"AL SHORTA"],[69709,"AL SADD"],[69710,"ULSAN HYUNDAI"],[69712,"SHABAB AL AHLI DUBAI"],[70484,"JOHOR DARUL TA\'ZIM"],[70487,"PERSEPOLIS"],[70489,"AL WAHDA"],[70709,"SHANGHAI SHENHUA"],[70931,"CHIANGRAI UNITED"],[71200,"PERTH GLORY"],[71205,"SHAHR KHODROU"],[71212,"SHARJAH"]]')
}
, function(t) {
    t.exports = JSON.parse("[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26,27,28,29,30,31,45,46,47,50,52,59,100,101,108,112,113,114,115,116,117,118,120,122,123,124,125,127,128,130,131,132,133,134,135,136,138,139,174,175,180,181,182,184,186,188,190,191,192,193,197,198,209,211,213,215,216,217,218,219,221,234,235,239,240,242,243,244,245,250,251,252,254,255,256,269,270,271,273,274,295,306,310,317,320,323,327,328,333,336,337,342,345,349,351,355,403,405,406,407,413,414,415,416,418,420,1031,1164,1165,1166,1167,1168,1169,1170,1171,1172,1173,1174,1175,1176,1177,1178,1179,1180,1181,1182,1183,1195,1196,1197,1200,1203,1207,1208,1212,1217,1218,1219,1220,1222,1230,1232,1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,1250,1251,1252,1254,1255,1256,1257,1258,1328,1329,1330,1363,1493,1528,1550,1551,1600,1706,1753,1804,1809,1818,1832,1910,1919,1920,1921,1922,1923,1924,1927,1929,1930,1931,1932,1933,1935,1936,1937,1941,1945,1950,1955,1956,1957,1958,1973,1974,1976,1978,1979,1985,1986,1987,1989,1995,1996,2009,2010,2013,2019,2066,2067,2069,2070,2071,2191,2192,2193,2195,2208,2209,2210,2215,2216,2229,2284,2285,2287,2360,2361,2365,2369,2387,2388,2391,2450,2451,2452,2453,2454,2459,2464,2465,2468,2506,2538,2541,2542,2544,2545,2546,2547,2548,2553,2614,2618,2622,2625,2643,2650,2651,2652,2653,2654,2655,2657,2676,2699,2708,2717,2719,2722,2729,2730,4086,4092,4094,4095,4108,4110,4111,4123,4168,4175,4200,4206,4211,4213,4220,4225,4229,4230,4232,4234,4237,4241,4244,4323,4370,4372,4914,4915,4923,4928,4937,4941,4943,4962,4964,4965,4973,4995,5028,5046,5047,5048,5099,5137,5139,5140,5141,5142,5143,5145,5168,5170,5171,5173,5175,5183,5184,5185,5189,5190,5191,5192,5193,5194,5195,5196,5197,5200,5201,5202,5203,5204,5206,5207,5208,5210,5216,5217,5224,5226,5235,5296,5298,5302,5306,5312,5319,5353,5354,5355,5356,5360,5370,5389,5394,5395,5397,5399,5400,5401,5402,5403,5404,5405,5416,5420,5433,5439,5440,5452,5454,5652,5660,65686,65688,65694,65813,65815,65818,65831,65846,66871,66877,66885,66895,67025,67112,67114,68103,68113,68116,69630,69703,69706,69709,69710,69712,70484,70487,70489,70709,70931,71200,71205,71212]")
}
, function(t, e, n) {
    t.exports = {
        content: "PlayersTab_content__WjbLY"
    }
}
, function(t, e, n) {
    t.exports = {
        welcome: "WelcomeTab_welcome__jnkIu"
    }
}
, function(t) {
    t.exports = JSON.parse('{"playerInfo.countryId1":"FIFA Association","playerInfo.age":"Age","playerInfo.height":"Height (cm)","playerInfo.weight":"Weight (kg)","playerInfo.strongerFoot":"Stronger Foot","playerInfo.strongerHand":"Stronger Hand","ability.attackingProwess":"Offensive Awareness","ability.ballControl":"Ball Control","ability.dribbling":"Dribbling","ability.tightPossession":"Tight Possession","ability.lowPass":"Low Pass","ability.loftedPass":"Lofted Pass","ability.finishing":"Finishing","ability.headingAbility":"Heading","ability.placeKicking":"Place Kicing","ability.curl":"Curl","ability.speed":"Speed","ability.acceleration":"Acceleration","ability.kickingPower":"Kicking Power","ability.jump":"Jump","ability.physicalContact":"Physical Contact","ability.balance":"Balance","ability.stamina":"Stamina","ability.defensiveProwess":"Defensive Awareness","ability.ballWinning":"Ball Winning","ability.aggression":"Aggression","ability.gkAwareness":"GK Awareness","ability.gkCatching":"GK Catching","ability.gkClearing":"GK Clearing","ability.gkReflexes":"GK Reflexes","ability.gkReach":"GK Reach","ability.weakFootUsage":"Weak Foot Usage","ability.weakFootAccuracy":"Weak Foot Accuracy","ability.form":"Conditioning","ability.injuryResistance":"Injury Resistance","skill.scissorsFeint":"Sucissors Feint","skill.doubleTouch":"Double Touch","skill.flipFlap":"Flip Flap","skill.marseilleTurn":"Marseille Turn","skill.sombrero":"Sombrero","skill.crossOverTurn":"Cross Over Turn","skill.cutBehindAndTurn":"Cut Behind & Turn","skill.scotchMove":"Scotch Move","skill.stepOnSkillControl":"Step On Ball Control","skill.headingSkill":"Heading","skill.longRangeDrive":"Long Range Drive","skill.chipShotControl":"Chip Shot Control","skill.longRangeShooting":"Long Range Shooting","skill.knuckleShot":"Knuckle Shot","skill.dippingShot":"Dipping Shot","skill.risingShot":"Rising Shots","skill.acrobaticFinishing":"Acrobatic Finishing","skill.heelTrick":"Heel Trick","skill.firstTimeShot":"First-time Shot","skill.oneTouchPass":"One-touch Pass","skill.throughPassing":"Through Passing","skill.weightedPass":"Weighted Pass","skill.pinpointCrossing":"Pinpoint Crossing","skill.outsideCurler":"Outside Curler","skill.rabona":"Rabona","skill.noLookPass":"No Look Pass","skill.lowLoftedPass":"Low Lofted Pass","skill.gkLowPunt":"GK Low Punt","skill.gkHighPunt":"GK High Punt","skill.longThrow":"Long Throw","skill.gkLongThrow":"GK Long Throw","skill.penaltySpecialist":"Penalty Specialist","skill.gkPenaltySaver":"GK Penalty Saver","skill.gamesmanship":"Gamesmanship","skill.manMarking":"Man Marking","skill.trackBack":"Track Back","skill.interception":"Interception","skill.acrobaticClear":"Acrobatic Clear","skill.captaincy":"Captaincy","skill.superSub":"Super-sub","skill.fightingSpirit":"Fighting Spirit","comPlayingStyle.trickster":"Trickster","comPlayingStyle.mazingRun":"Mazing Run","comPlayingStyle.speedingBullet":"Speeding Bullet","comPlayingStyle.incisiveRun":"Incisive Run","comPlayingStyle.longBallExpert":"Long Ball Expert","comPlayingStyle.earlyCross":"Early Cross","comPlayingStyle.longRanger":"Long Ranger"}')
}
, function(t) {
    t.exports = JSON.parse("[51,52,61,62,63,64,65,66,71,72,73,81,82,83,84,1041,1042,1051,1052,1053,1054,1061,1062,1063,1064,1071,1072,1073,1074,1075,1076,1077,1078,1079,1081,1082,1083,1084,2021,2022,2023,2024,2025,2026,2027,2028,2051,2052,2061,2069,2071,2072,2073,3041,3042,3043,3051,3052,3053,4031,4032,5011,5012,5031,6021,7011,7021,8001]")
}
, function(t) {
    t.exports = JSON.parse("[1,101,211,301,311,501,502,601,701,801,901]")
}
, function(t) {
    t.exports = JSON.parse("[557,729,793,811,815,816,818,822,840,857,865,872,877,879,880,926,963,970,972,983,990,1001,1006,1352,1624,1625,1628,1630,1631,1664,1674,1675,1741,1754,1881,1882,1892,1948,1951,2089,2138,2232,2329,2331,2380,2387,2388,2397,2404,2405,2430,2453,2489,2506,2520,2586,2826,2827,2841,2951,3200,3222,3239,3272,3497,3522,3650,3673,3684,3690,3712,3726,3741,3757,3997,4039,4152,4193,4251,4294,4325,4412,4499,4502,4522,4526,4541,4655,4747,4801,4882,4920,4922,4928,4949,4995,5069,5106,5408,5428,5430,5434,5518,5538,5584,5603,5676,5770,5778,5786,5922,6111,6259,6265,6317,6330,6334,6526,6593,6657,6693,6736,6864,6906,7030,7038,7045,7056,7069,7104,7181,7255,7312,7327,7329,7435,7474,7484,7506,7507,7511,7642,7736,7781,7782,7814,7817,7840,7878,7880,7889,7927,7941,7946,7959,8013,8076,8165,8310,8408,8421,8574,8637,8639,8662,8665,8701,8757,8760,8823,8843,8851,8878,8921,8940,8944,8946,8957,8959,8978,8984,9000,9026,9028,9039,9042,9043,9060,9087,9090,9095,9115,9121,9129,9133,9138,9144,9152,9155,9167,9169,9175,9182,9193,9214,9226,9242,9244,9248,9286,9291,9308,9309,9317,9319,9347,9375,9378,9379,9385,9425,9446,9515,9534,9567,9571,9602,9612,10413,10585,10767,10769,10772,11007,11055,15038,15050,15217,15320,15329,15416,15430,15433,15444,15446,15808,15814,15965,16056,16245,16303,16346,16453,16454,16474,16555,16577,16655,16720,16794,16797,16800,16812,16823,16851,30044,30057,30072,30113,30117,30122,30189,30196,30199,30238,30277,30315,30317,30323,30324,30341,30345,30367,30377,30391,30447,30560,30632,30653,31019,31044,31048,31052,31059,31325,31378,31380,31381,31385,31483,31486,31506,31899,32021,32135,32139,32159,32199,32220,32234,32280,32298,32302,32308,32312,32313,32339,32354,32385,32386,32389,32395,32433,32436,32461,32485,32493,32500,32549,32555,32559,32578,32586,32589,32595,32618,32628,32653,32657,32668,32694,32720,32764,32765,32773,32776,32778,32780,32782,32804,32825,32828,32844,33029,33075,33079,33103,33104,33110,33114,33159,33184,33185,33194,33225,33237,33238,33250,33258,33266,33291,33301,33307,33328,33431,33477,33491,33555,33557,33633,33669,33684,33700,33702,33727,33734,33739,33750,33755,33759,33784,33794,33799,33802,33808,33813,33814,33817,33818,33857,33872,33876,33881,33895,33909,33916,33920,33923,33926,33930,33940,33944,33962,33975,33994,34002,34004,34005,34007,34010,34025,34051,34068,34098,34108,34126,34135,34140,34431,34432,34437,34475,34479,34487,34488,34493,34536,34544,34606,34611,34626,34630,34638,34641,34657,34680,34704,34750,34781,34783,34786,34799,34805,34813,34820,34827,34836,34841,34845,34848,34850,34862,34868,34875,34876,34878,34881,34882,34892,34900,34905,34908,34918,34929,34938,34974,34986,34991,34996,35002,35019,35033,35067,35071,35076,35080,35085,35086,35092,35097,35099,35108,35109,35110,35119,35123,35124,35125,35165,35173,35181,35184,35189,35191,35194,35200,35204,35207,35219,35232,35239,35243,35244,35249,35250,35252,35266,35274,35279,35281,35290,35321,35326,35394,35397,35400,35435,35457,35476,35477,35483,35487,35492,35495,35496,35499,35505,35508,35509,35514,35532,35535,35540,35548,35553,35876,35878,35880,35882,35888,35893,35943,35977,36001,36016,36052,36061,36065,36066,36077,36122,36127,36132,36203,36207,36217,36246,36256,36288,36343,36349,36358,36361,36396,36403,36431,36434,36435,36599,36602,36612,36625,36627,36659,36666,36671,36685,36697,36702,36703,36706,36714,36718,36721,36727,36743,36744,36764,36766,36768,36770,36774,36776,36777,36782,36788,36797,36807,36817,36821,36832,36841,36845,36847,36848,36854,36857,36867,36870,36874,36875,36876,36877,36878,36880,36888,36890,36893,36895,36896,36918,36941,36943,36944,36945,36947,36949,36951,36956,36958,36967,36986,36992,36996,36998,37000,37005,37016,37017,37021,37026,37028,37031,37032,37035,37039,37052,37054,37065,37070,37078,37082,37086,37106,37109,37114,37117,37129,37136,37140,37147,37148,37155,37158,37159,37169,37174,37191,37197,37198,37201,37219,37220,37225,37241,37250,37253,37260,37263,37268,37269,37271,37274,37277,37284,37286,37289,37291,37293,37294,37304,37306,37323,37327,37330,37336,37337,37343,37345,37359,37377,37383,37388,37391,37403,37409,37414,37416,37418,37422,37429,37430,37431,37432,37433,37436,37438,37440,37446,37470,37477,37481,37486,37488,37496,37502,37505,37506,37509,37510,37511,37517,37527,37529,37531,37534,37536,37601,37605,37629,37638,37650,37670,37677,37688,37694,37707,37786,37814,37817,37824,37827,37829,37830,37837,37862,37870,37871,37885,37894,37899,37901,37902,37907,37909,37951,37952,38004,38022,38032,38036,38043,38051,38053,38054,38055,38060,38061,38062,38079,38080,38081,38082,38087,38112,38115,38118,38120,38122,38124,38146,38178,38179,38181,38184,38187,38188,38190,38199,38211,38217,38234,38235,38240,38247,38253,38257,38261,38262,38269,38274,38280,38288,38292,38295,38297,38308,38318,38323,38338,38345,38346,38347,38352,38353,38362,38365,38366,38380,38381,38387,38395,38400,38412,38422,38437,38439,38442,38448,38452,38456,38461,38462,38463,38470,38473,38477,38490,38491,38499,38509,38512,38516,38517,38519,38521,38539,38560,38563,38567,38568,38569,38570,38576,38589,38590,38593,38594,38604,38616,38618,38620,38627,38628,38630,38635,38640,38644,38645,38650,38655,38667,38682,38683,38684,38685,38687,38697,38700,38701,38702,38706,38711,38738,38740,38742,38747,38761,38765,38779,38780,38781,38782,38784,38789,38790,38791,38794,38796,38797,38800,38806,38807,38809,38810,38815,38818,38820,38831,38837,38841,38843,38845,38852,38856,38858,38859,38861,38873,38876,38883,38892,38906,38925,38934,38937,38938,38941,38945,38947,38951,38956,39020,39161,39173,39187,39191,39193,39194,39195,39206,39215,39216,39217,39218,39223,39225,39226,39227,39230,39231,39238,39241,39245,39255,39259,39262,39266,39268,39273,39276,39278,39281,39293,39301,39324,39325,39353,39355,39356,39359,39364,39377,39378,39382,39387,39394,39414,39417,39420,39421,39432,39434,39441,39450,39455,39474,39477,39478,39483,39491,39498,39505,39512,39538,39541,39543,39544,39545,39546,39547,39550,39595,39597,39602,39638,39639,39640,39674,39687,39699,39700,39701,39718,39719,39722,39729,39730,39749,39755,39756,39765,39773,39777,39791,39795,39798,39801,39804,39807,39813,39822,39823,39912,39926,39936,39943,39948,39960,39963,39964,39976,39987,39991,39994,39995,39996,40002,40015,40026,40027,40039,40065,40076,40077,40080,40086,40097,40110,40119,40122,40125,40150,40154,40173,40176,40204,40207,40220,40228,40229,40230,40240,40248,40254,40256,40257,40259,40260,40273,40278,40280,40281,40283,40285,40290,40293,40295,40302,40305,40321,40323,40324,40328,40329,40334,40340,40341,40347,40350,40352,40354,40358,40364,40390,40392,40403,40404,40406,40410,40411,40418,40422,40423,40425,40426,40429,40433,40456,40460,40472,40478,40507,40510,40513,40520,40523,40524,40525,40541,40543,40551,40553,40555,40557,40559,40560,40563,40569,40571,40572,40579,40581,40597,40604,40607,40613,40617,40631,40632,40634,40638,40639,40640,40646,40659,40661,40662,40663,40669,40671,40677,40686,40688,40693,40699,40701,40704,40705,40710,40713,40714,40716,40717,40724,40725,40740,40742,40743,40749,40750,40751,40752,40753,40770,40786,40791,40794,40804,40805,40822,40825,40836,40838,40844,40850,40856,40870,40871,40873,40874,40875,40882,40887,40898,40904,40910,40911,40919,40925,40936,40937,40939,40961,40976,40984,40985,40987,40989,40990,40993,40994,40996,41000,41004,41009,41011,41013,41017,41020,41023,41026,41034,41045,41046,41047,41055,41063,41066,41073,41074,41079,41082,41083,41084,41085,41087,41088,41092,41096,41100,41106,41109,41111,41119,41120,41124,41126,41131,41135,41136,41142,41144,41152,41153,41155,41160,41163,41174,41177,41180,41186,41189,41198,41200,41204,41205,41206,41209,41215,41220,41227,41231,41232,41235,41240,41253,41257,41260,41270,41275,41276,41283,41295,41296,41301,41303,41419,41424,41425,41426,41428,41429,41444,41448,41451,41455,41465,41468,41471,41479,41491,41502,41504,41507,41509,41511,41517,41520,41527,41531,41535,41536,41537,41538,41542,41546,41547,41550,41553,41555,41570,41581,41589,41594,41595,41596,41598,41604,41605,41609,41610,41617,41621,41622,41625,41640,41650,41662,41665,41679,41688,41708,41720,41757,41772,41839,41842,41846,41849,41862,41865,41889,41890,41897,41904,41975,41978,41984,41985,42013,42023,42025,42030,42033,42046,42048,42058,42062,42072,42077,42081,42091,42093,42097,42113,42117,42123,42125,42135,42141,42173,42175,42177,42181,42227,42245,42246,42247,42249,42268,42269,42271,42274,42278,42290,42291,42296,42303,42304,42306,42311,42316,42322,42336,42343,42344,42346,42348,42352,42353,42363,42364,42369,42375,42376,42378,42400,42404,42408,42409,42415,42416,42422,42424,42429,42432,42434,42440,42446,42448,42450,42453,42455,42457,42460,42464,42466,42473,42475,42479,42480,42481,42484,42485,42491,42494,42499,42507,42516,42534,42535,42537,42538,42539,42540,42542,42543,42549,42550,42552,42556,42557,42558,42574,42575,42576,42577,42578,42581,42586,42587,42588,42589,42601,42602,42605,42606,42611,42612,42613,42614,42621,42624,42627,42630,42640,42641,42647,42648,42649,42650,42653,42654,42655,42657,42659,42660,42664,42666,42669,42670,42675,42680,42681,42686,42688,42689,42694,42697,42702,42704,42706,42721,42751,42758,42805,42806,42808,42811,42813,42816,42817,42821,42822,42825,42829,42834,42838,42839,42846,42852,42854,42859,42865,42867,42868,42869,42870,42871,42872,42874,42877,42881,42886,42888,42892,42893,42894,42895,42898,42907,42916,42918,42919,42920,42927,42929,42936,42944,42945,42952,42975,42978,42985,42986,42999,43001,43006,43015,43016,43023,43026,43030,43040,43041,43042,43046,43054,43063,43064,43070,43074,43075,43076,43077,43078,43079,43080,43081,43082,43084,43086,43093,43094,43097,43104,43107,43113,43116,43117,43129,43131,43133,43135,43147,43154,43157,43158,43166,43170,43174,43177,43183,43185,43187,43190,43192,43193,43202,43204,43205,43206,43211,43213,43230,43243,43250,43257,43262,43266,43271,43273,43277,43288,43296,43301,43374,43377,43380,43387,43388,43394,43400,43415,43421,43422,43434,43444,43445,43449,43450,43463,43467,43470,43471,43476,43478,43540,43567,43589,43590,43612,43625,43626,43636,43641,43642,43645,43646,43647,43650,43666,43668,43683,43686,43688,43694,43698,43699,43731,43740,43741,43746,43747,43751,43756,43759,43761,43765,43773,43784,43786,43788,43792,43806,43811,43813,43814,43816,43821,43866,43870,43873,43874,43879,43888,43897,43920,43923,43936,43955,43956,43965,43967,43970,43975,43976,43977,43979,43985,43989,43993,43998,44000,44001,44006,44011,44023,44025,44030,44032,44037,44039,44040,44043,44048,44063,44072,44104,44105,44107,44108,44111,44142,44156,44169,44171,44176,44181,44184,44192,44211,44224,44228,44241,44247,44256,44264,44278,44280,44282,44307,44321,44324,44328,44345,44355,44377,44379,44383,44388,44392,44401,44407,44411,44413,44415,44417,44423,44427,44429,44432,44434,44444,44451,44455,44493,44494,44497,44498,44504,44516,44527,44529,44550,44554,44559,44560,44562,44564,44565,44570,44588,44600,44601,44608,44609,44614,44619,44620,44622,44634,44636,44637,44643,44654,44659,44661,44662,44664,44667,44669,44676,44677,44678,44679,44683,44684,44685,44686,44687,44688,44689,44694,44698,44702,44706,44709,44720,44721,44722,44725,44726,44727,44728,44729,44736,44738,44740,44743,44746,44756,44762,44770,44776,44780,44791,44794,44801,44814,44817,44820,44822,44828,44829,44830,44834,44838,44840,44843,44844,44846,44847,44849,44851,44852,44855,44856,44857,44859,44862,44882,44890,44900,44907,44912,44936,44940,44941,44943,44946,44950,44953,44956,44965,44975,44976,44977,44987,44991,45010,45012,45023,45028,45037,45041,45046,45047,45051,45055,45057,45061,45065,45070,45071,45076,45078,45079,45082,45085,45089,45090,45092,45095,45099,45104,45106,45111,45113,45116,45120,45124,45126,45127,45130,45131,45134,45135,45137,45141,45144,45146,45151,45156,45157,45158,45165,45166,45167,45173,45176,45179,45181,45182,45183,45187,45188,45190,45193,45196,45204,45208,45216,45220,45227,45232,45238,45244,45247,45253,45254,45255,45257,45260,45261,45267,45268,45269,45270,45278,45283,45286,45288,45290,45291,45292,45299,45300,45305,45312,45318,45319,45320,45323,45328,45330,45334,45338,45339,45341,45351,45356,45358,45363,45365,45368,45373,45374,45383,45385,45386,45390,45391,45393,45394,45396,45397,45398,45399,45402,45403,45404,45406,45409,45413,45415,45427,45431,45432,45435,45438,45439,45442,45445,45458,45462,45463,45467,45481,45497,45500,45504,45507,45514,45539,45565,45572,45574,45575,45576,45582,45583,45585,45586,45593,45597,45600,45605,45610,45614,45621,45626,45633,45637,45641,45642,45644,45647,45652,45653,45656,45659,45660,45664,45665,45667,45668,45669,45671,45674,45677,45678,45679,45685,45690,45691,45724,45731,45756,45758,45761,45774,45778,45780,45781,45788,45803,45804,45807,45809,45815,45823,45824,45826,45832,45835,45877,45880,45884,45886,45888,45893,45903,45912,45927,45941,45945,45946,45947,45948,45951,45953,45954,45958,45959,45960,45962,45964,45982,45984,45992,45993,45998,46002,46003,46005,46010,46019,46021,46023,46025,46028,46032,46037,46057,46061,46062,46079,46080,46081,46088,46089,46095,46097,46100,46102,46103,46111,46144,46149,46151,46152,46153,46164,46170,46174,46179,46186,46187,46188,46192,46201,46206,46208,46209,46219,46221,46225,46226,46228,46229,46232,46233,46235,46237,46240,46242,46251,46259,46282,46284,46295,46305,46310,46314,46315,46326,46332,46334,46338,46343,46349,46350,46351,46356,46357,46360,46362,46363,46364,46366,46372,46373,46377,46379,46382,46386,46387,46391,46404,46413,46414,46418,46427,46440,46453,46455,46456,46464,46466,46472,46479,46481,46487,46490,46493,46498,46511,46527,46531,46536,46538,46539,46541,46551,46552,46553,46554,46564,46570,46577,46583,46593,46598,46599,46604,46606,46613,46623,46624,46628,46635,46637,46641,46642,46643,46647,46648,46649,46650,46652,46666,46667,46669,46679,46694,46702,46703,46708,46720,46722,46723,46724,46725,46730,46731,46737,46751,46756,46761,46764,46774,46778,46779,46780,46787,46788,46809,46812,46813,46815,46816,46819,46825,46828,46832,46833,46834,46835,46836,46840,46842,46843,46844,46845,46849,46850,46852,46856,46857,46858,46859,46860,46862,46864,46865,46866,46867,46873,46879,46881,46888,46894,46896,46906,46910,46917,46923,46925,46926,46929,46941,46942,46945,46946,46950,46953,46957,46967,46968,46969,46975,46978,46979,46981,46987,46988,46989,46990,46992,46994,46995,46996,47001,47002,47005,47006,47007,47008,47011,47012,47016,47018,47023,47029,47032,47034,47038,47046,47048,47049,47050,47051,47055,47059,47061,47063,47068,47070,47072,47076,47086,47087,47089,47093,47094,47102,47105,47114,47115,47128,47131,47132,47134,47136,47143,47145,47147,47151,47152,47158,47162,47163,47172,47175,47176,47178,47179,47182,47183,47189,47190,47194,47195,47203,47204,47207,47210,47212,47215,47220,47224,47229,47232,47233,47237,47238,47239,47241,47242,47243,47244,47245,47248,47249,47250,47252,47261,47262,47267,47275,47277,47279,47282,47283,47285,47286,47287,47288,47298,47301,47305,47306,47308,47313,47320,47324,47334,47335,47336,47357,47359,47363,47374,47375,47376,47378,47382,47385,47391,47396,47398,47404,47405,47406,47408,47409,47411,47412,47414,47415,47416,47417,47419,47425,47427,47429,47430,47431,47432,47433,47437,47440,47445,47456,47457,47459,47479,47491,47519,47522,47523,47524,47529,47530,47532,47533,47542,47543,47550,47551,47553,47555,47557,47566,47569,47576,47579,47582,47583,47586,47594,47598,47611,47631,47632,47633,47639,47640,47645,47652,47653,47655,47656,47658,47659,47667,47670,47671,47675,47678,47680,47681,47698,47701,47702,47705,47706,47707,47708,47711,47712,47719,47723,47727,47739,47756,47757,47758,47759,47761,47763,47773,47774,47775,47777,47781,47784,47785,47786,47787,47788,47789,47790,47798,47805,47807,47808,47810,47813,47814,47816,47823,47825,47830,47831,47832,47834,47835,47836,47838,47839,47842,47843,47845,47867,47868,47870,47872,47873,47877,47886,47899,47905,47909,47912,47920,47923,47925,47927,47929,47930,47935,47941,47945,47951,47952,47954,47955,47956,47959,47963,47965,47967,47968,47982,47984,47988,47996,47997,47998,47999,48000,48009,48025,48069,48108,48119,48134,48139,51507,51508,51509,51510,51511,51512,51513,51514,51515,51516,51517,51518,51519,51520,51521,51522,51523,51524,51525,51526,52302,52307,52310,52317,52318,52319,52320,52321,52322,52323,52324,52325,52326,52327,52328,52329,52330,52331,52332,52333,52439,52889,52890,52891,52892,52893,52894,52895,52896,52897,52898,52899,52900,52901,52902,52903,52904,52905,52906,52907,52908,52909,52910,52911,52912,52913,52914,52915,52916,52917,52918,52919,52920,52921,52922,52923,52924,52925,52926,52927,52928,52929,52930,52931,52932,52933,52934,52935,52936,52937,52938,52939,52940,52941,52942,52943,52944,52945,52946,52947,52948,52949,52950,52951,52952,52953,52954,52955,52956,52957,52958,52959,52960,52961,52962,52963,52964,52965,52966,52967,52968,52969,52970,52971,52972,52973,52974,52975,52976,52977,52978,52979,52980,52981,52982,52983,52984,52985,52986,52987,52988,52989,52990,52991,52992,52993,52994,52995,52996,52997,52998,52999,53000,53001,53002,53003,53004,53005,53006,53007,53008,53009,53010,53011,53012,53013,53014,53015,53016,53017,53018,53019,53020,53377,53398,53399,53400,53406,53408,53409,53411,53412,53413,53416,53430,53431,53432,53434,53465,53466,53467,53473,53478,53479,53491,53492,53493,53496,53497,53499,53504,53506,53507,53508,53509,53511,53512,53514,53517,53658,53662,53663,53684,53688,53690,53780,53781,53782,53783,53784,53785,53786,53787,53788,53789,53790,53791,53792,53793,53794,53795,53796,53797,53798,53799,53800,53801,53802,53895,53896,53897,53898,53899,53900,53901,53902,53903,53904,53905,53906,53907,53908,53909,53910,53911,53912,53913,53914,53915,53916,53917,54056,54057,54058,54059,54060,54061,54062,54063,54064,54065,54066,54067,54068,54069,54070,54071,54072,54073,54074,54075,54076,54077,54078,54102,54103,54104,54105,54106,54107,54108,54109,54110,54111,54112,54113,54114,54115,54116,54117,54118,54119,54120,54121,54122,54123,54124,54148,54149,54150,54151,54152,54153,54154,54155,54156,54157,54158,54159,54160,54161,54162,54163,54164,54165,54166,54167,54168,54169,54170,54245,54246,54247,54248,54249,54250,54251,54252,54253,54254,54255,54256,54257,54258,54259,54260,54261,54262,54263,54264,54265,54266,54267,54337,54338,54339,54340,54341,54342,54343,54344,54345,54346,54347,54348,54349,54350,54351,54352,54353,54354,54355,54356,54357,54358,54359,54360,54361,54362,54363,54364,54365,54366,54367,54368,54369,54370,54371,54372,54373,54374,54375,54376,54377,54378,54379,54380,54381,54382,54406,54407,54408,54409,54410,54411,54412,54413,54414,54415,54416,54417,54418,54419,54420,54421,54422,54423,54424,54425,54426,54427,54428,54429,54430,54431,54432,54433,54434,54435,54436,54437,54438,54439,54440,54441,54442,54443,54444,54445,54446,54447,54448,54449,54450,54451,54606,54607,54608,54659,54660,54661,54662,54663,54664,54665,54666,54667,54668,54669,54670,54671,54672,54673,54674,54675,54676,54677,54678,54679,54680,54681,54682,54683,54684,54685,54686,54687,54688,54689,54690,54691,54692,54693,54694,54695,54696,54697,54698,54699,54700,54701,54702,54703,54704,54705,54706,54707,54708,54709,54710,54711,54712,54713,54714,54715,54716,54717,54718,54719,54720,54721,54722,54723,54724,54725,54726,54727,54728,54729,54730,54731,54732,54733,54734,54735,54736,54737,54738,54739,54740,54741,54742,54743,54744,54745,54746,54747,54748,54749,54750,54751,54752,54753,54754,54755,54756,54757,54758,54759,54760,54761,54762,54763,54764,54765,54766,54767,54768,54769,54770,54771,54772,54773,54774,54775,54776,54777,54778,54779,54780,54781,54782,54783,54784,54785,54786,54787,54788,54789,54790,54791,54792,54793,54794,54795,54796,54797,54798,54799,54800,54801,54802,54803,54804,54805,54806,54807,54808,54809,54810,54811,54812,54813,54814,54815,54816,54817,54818,54819,54820,54821,54822,54823,54824,54825,54826,54827,54828,54829,54830,54831,54832,54833,54834,54835,54836,54837,54838,54839,54840,54841,54842,54843,54844,54845,54846,54847,54848,54849,54850,54851,54852,54853,54854,54855,54856,54857,54858,54859,54860,54861,54862,54863,54864,54865,54876,54877,54878,54879,54880,54881,54882,54883,54884,54885,54886,54887,54888,54889,54890,54891,54892,54893,54894,54895,54896,54897,54898,54899,54900,54901,54902,54903,54904,54905,54906,54907,54908,54909,54910,54911,54912,54913,54914,54915,54916,54917,54918,54919,54920,54921,54922,54923,54924,54925,54926,54927,54928,54929,54930,54931,54932,54933,54934,54935,54936,54937,54938,54939,54940,54941,54942,54943,54944,54945,54946,54947,54948,54949,54950,54951,54952,54953,54954,54955,54956,54957,54958,54959,54960,54961,54962,54963,54964,54965,54966,54967,54968,54969,54970,54971,54972,54973,54974,54975,54976,54977,54978,54979,54980,54981,54982,54983,54984,54985,54986,54987,54988,54989,54990,54991,54992,54993,54994,54995,54996,54997,54998,54999,55000,55001,55002,55003,55004,55005,55006,55007,55008,55009,55010,55011,55012,55013,55014,55015,55016,55017,55018,55019,55020,55021,55022,55023,55024,55025,55026,55027,55028,55029,55030,55031,55032,55033,55034,55035,55036,55037,55038,55039,55040,55041,55042,55043,55044,55045,55046,55047,55048,55049,55050,55051,55052,55053,55054,55055,55056,55057,55058,55059,55060,55061,55062,55063,55064,55065,55066,55067,55068,55069,55070,55071,55072,55073,55074,55075,55076,55077,55078,55079,55080,55081,55082,55083,55084,55085,55086,55087,55088,55089,55090,55091,55092,55093,55094,55095,55096,55097,55098,55099,55100,55101,55102,55103,55104,55105,55106,55107,55108,55109,55110,55111,55112,55113,55114,55115,55138,55144,55145,55146,55147,55150,55152,55153,55154,55155,55156,55157,55158,55159,55160,55161,55162,55163,55164,55165,55166,55167,55168,55169,55170,55171,55175,55176,55177,55185,55221,55229,55234,55239,55244,55245,55246,55247,55248,55249,55250,55251,55252,55253,55254,55255,55256,55257,55258,55259,55260,55261,55262,55263,55264,55265,55266,55267,55268,55269,55270,55271,55272,55273,55274,55275,55276,55277,55278,55279,55280,55281,55282,55283,55284,55285,55286,55287,55288,55289,55290,55291,55292,55293,55294,55295,55296,55297,55298,55299,55300,55304,55305,55306,55307,55308,55309,55310,55311,55312,55313,55314,55315,55316,55317,55318,55319,55320,55321,55322,55323,55324,55325,55326,55327,55328,55329,55330,55331,55332,55333,55334,55335,55336,55337,55338,55339,55340,55341,55342,55343,55344,55345,55346,55347,55348,55349,55350,55351,55352,55353,55354,55355,55356,55357,55358,55359,55360,55361,55362,55363,55364,55365,55366,55367,55400,55401,55402,55403,55404,55405,55406,55407,55408,55409,55410,55411,55412,55413,55414,55415,55416,55417,55418,55419,55420,55421,55422,55423,55424,55425,55426,55427,55428,55429,55430,55431,55432,55433,55434,55435,55436,55437,55438,55439,55440,55441,55442,55443,55444,55445,55521,55522,55523,55524,55525,55526,55527,55528,55529,55530,55531,55532,55533,55534,55535,55536,55537,55538,55539,55540,55541,55542,55543,55544,55545,55644,55645,55646,55647,55648,55649,55650,55651,55652,55653,55654,55655,55656,55657,55658,55659,55660,55661,55662,55663,55664,55665,55666,55667,55668,55694,55695,55696,55697,55698,55699,55700,55701,55702,55703,55704,55705,55706,55707,55708,55709,55710,55711,55712,55713,55714,55715,55716,55717,55718,55719,55720,55721,55722,55723,55724,55725,55726,55727,55728,55729,55730,55731,55732,55733,55734,55735,55736,55737,55738,55739,55740,55741,55742,55743,55744,55745,55746,55747,55748,55749,55750,55751,55752,55753,55754,55755,55756,55757,55758,55759,55760,55761,55762,55763,55764,55765,55766,55767,55768,55769,55770,55771,55772,55773,55774,55775,55776,55777,55778,55779,55780,55781,55782,55783,55784,55785,55786,55787,55788,55789,55790,55791,55792,55793,55794,55795,55796,55797,55798,55799,55800,55801,55802,55803,55804,55805,55806,55807,55808,55809,55810,55811,55812,55813,55814,55815,55816,55817,55818,55819,55820,55821,55822,55823,55824,55825,55826,55827,55828,55829,55830,55831,55832,55833,55834,55835,55836,55837,55838,55839,55840,55841,55842,55843,55844,55845,55846,55847,55848,55849,55850,55851,55852,55853,55854,55855,55856,55857,55858,55859,55860,55861,55862,55863,55864,55865,55866,55867,55868,55894,55895,55896,55897,55898,55899,55900,55901,55902,55903,55904,55905,55906,55907,55908,55909,55910,55911,55912,55913,55914,55915,55916,55917,55918,55944,55945,55946,55947,55948,55949,55950,55951,55952,55953,55954,55955,55956,55957,55958,55959,55960,55961,55962,55963,55964,55965,55966,55967,55968,55969,55970,55971,55972,55973,55974,55975,55976,55977,55978,55979,55980,55981,55982,55983,55984,55985,55986,55987,55988,55989,55990,55991,55992,55993,56019,56020,56021,56022,56023,56024,56025,56026,56027,56028,56029,56030,56031,56032,56033,56034,56035,56036,56037,56038,56039,56040,56041,56042,56043,56044,56045,56046,56047,56048,56049,56050,56051,56052,56053,56054,56055,56056,56057,56058,56059,56060,56061,56062,56063,56064,56065,56066,56067,56068,56094,56095,56096,56097,56098,56099,56100,56101,56102,56103,56104,56105,56106,56107,56108,56109,56110,56111,56112,56113,56114,56115,56116,56117,56118,56119,56120,56121,56122,56123,56124,56125,56126,56127,56128,56129,56130,56131,56132,56133,56134,56135,56136,56137,56138,56139,56140,56141,56142,56143,56144,56145,56146,56147,56148,56149,56150,56151,56152,56153,56154,56155,56156,56157,56158,56159,56160,56161,56162,56163,56164,56165,56166,56167,56168,56169,56170,56171,56172,56173,56174,56175,56176,56177,56178,56179,56180,56181,56182,56183,56184,56185,56186,56187,56188,56189,56190,56191,56192,56193,56214,56215,56216,56217,56218,56219,56220,56221,56222,56223,56224,56225,56226,56227,56228,56229,56230,56231,56232,56233,56234,56235,56236,56237,56238,56239,56240,56241,56242,56243,56244,56245,56246,56247,56248,56249,56250,56251,56252,56253,56254,56255,56256,56257,56258,56259,56260,56261,56262,56263,56289,56290,56291,56292,56293,56294,56295,56296,56297,56298,56299,56300,56301,56303,56304,56305,56306,56307,56308,56309,56310,56311,56313,56314,56315,56316,57000,57004,57006,57011,57017,57025,57026,57031,57032,57037,57038,57040,57041,57043,57098,57099,57100,57101,57103,57119,57123,57128,57129,57132,57133,57156,57170,57179,57183,57185,57189,57194,57199,57200,57205,57206,57207,57208,57212,57213,57214,57224,57225,57240,57247,57249,57250,57252,57254,57255,57256,57257,57258,57259,57264,57265,57266,57267,57271,57272,57279,57284,57287,57304,57309,57312,57322,57330,57331,57335,57340,57344,57347,57348,57349,57350,57352,57353,57376,57393,57394,57402,57405,57410,57411,57413,57418,57419,57421,57423,57426,57427,57428,57431,57433,57438,57439,57441,57447,57449,57530,57561,57595,57598,57607,57699,57712,57844,57883,57884,57886,57888,57890,57891,57892,57893,57894,57895,57896,57897,57898,57899,57900,57901,57902,57903,57904,57905,57906,57907,57908,57909,57910,57911,57912,57913,57914,57915,57916,57917,57918,57919,57920,57921,57922,57923,57924,57925,57926,57927,57928,57929,57930,57931,57932,57933,57934,57935,57936,57937,57938,57939,57940,57941,57942,57943,57944,57945,57946,57947,57948,57949,57950,57951,57952,57953,57954,57955,57956,57957,57958,57959,57960,57962,57963,57964,57965,57966,57967,57968,57969,57970,57971,57972,57973,57974,57975,57976,57977,57978,57979,57980,57981,57982,57983,57984,57985,57986,57987,57988,57989,57990,57991,57992,57993,57994,57995,57996,57997,57998,57999,58000,58001,58002,58003,58004,58005,58006,58007,58010,58011,58012,58013,58014,58015,58016,58017,58018,58019,58020,58021,58022,58023,58024,58025,58026,58027,58028,58029,58030,58031,58032,58033,58034,58035,58036,58037,58038,58039,58040,58041,58042,58043,58044,58045,58046,58047,58048,58049,58050,58051,58052,58053,58054,58055,58058,58059,58060,58061,58062,58063,58064,58065,58066,58067,58068,58069,58070,58071,58072,58073,58074,58075,58076,58077,58078,58079,58080,58081,58082,58083,58084,58085,58086,58087,58088,58089,58090,58091,58092,58093,58094,58095,58096,58097,58098,58099,58100,58101,58102,58103,58106,58107,58108,58109,58110,58111,58112,58113,58114,58115,58116,58117,58118,58119,58120,58121,58122,58123,58124,58125,58126,58127,58128,58131,58132,58133,58134,58135,58136,58137,58138,58139,58140,58141,58142,58143,58144,58145,58146,58147,58148,58149,58150,58151,58152,58153,58156,58157,58158,58159,58160,58161,58162,58163,58164,58165,58166,58167,58168,58169,58170,58171,58172,58173,58174,58175,58176,58177,58178,58181,58182,58183,58184,58185,58186,58187,58188,58189,58190,58191,58192,58193,58194,58195,58196,58197,58198,58199,58200,58201,58202,58203,58204,58206,58207,58208,58209,58210,58211,58212,58213,58214,58215,58216,58217,58218,58219,58220,58221,58222,58223,58224,58225,58226,58227,58228,58229,58230,58231,58232,58233,58234,58235,58236,58237,58238,58239,58240,58241,58242,58243,58244,58245,58246,58247,58248,58249,58250,58251,58254,58255,58256,58257,58258,58259,58260,58261,58262,58263,58264,58265,58266,58267,58268,58269,58270,58271,58272,58273,58274,58275,58276,58279,58280,58281,58282,58283,58284,58285,58286,58287,58288,58289,58290,58291,58292,58293,58294,58295,58296,58297,58298,58299,58300,58301,58302,58303,58304,58305,58306,58307,58308,58309,58310,58311,58312,58313,58314,58315,58316,58317,58318,58319,58320,58321,58322,58323,58324,58325,58326,58327,58328,58329,58330,58331,58332,58333,58334,58335,58336,58337,58338,58339,58340,58341,58342,58343,58344,58345,58346,58347,58348,58349,58350,58351,58352,58353,58354,58355,58356,58357,58358,58359,58360,58361,58362,58363,58364,58365,58366,58367,58368,58369,58370,58395,58396,58397,58398,58399,58400,58401,58402,58403,58404,58405,58406,58407,58408,58409,58410,58411,58412,58413,58414,58415,58416,58417,58418,58419,58445,58446,58447,58451,58455,58456,58461,58463,58464,58465,58468,58470,58489,58491,58492,58493,58495,58496,58501,58503,58518,58520,58522,58523,58525,58527,58530,58531,58533,58535,58536,58537,58543,58544,58557,58567,58579,58585,58587,58589,58594,58595,58602,58610,58616,58617,58621,58624,58629,58632,58633,58634,58636,58640,58641,58645,58646,58648,58652,58653,58654,58658,58663,58666,58667,58668,58669,58671,58672,58674,58675,58676,58680,58681,58682,58691,58692,58694,58704,58706,58707,58712,58716,58717,58721,58728,58730,58739,58744,58747,58748,58755,58756,58757,58759,58761,58764,58765,58771,58775,58778,58786,58793,58795,58799,58806,58811,58812,58813,58818,58820,58821,58829,58839,58840,58843,58845,58847,58848,58849,58852,58861,58957,58998,59139,59142,59143,59145,59158,59159,59160,59163,59169,59172,59173,59176,59178,59179,59180,59188,59189,59190,59191,59196,59200,59206,59207,59214,59217,59220,59226,59227,59229,59238,59239,59246,59249,59257,59259,59261,59262,59265,59267,59268,59270,59273,59275,59279,59281,59291,59292,59293,59301,59307,59309,59313,59326,59332,59333,59336,59337,59340,59342,59353,59354,59355,59356,59359,59362,59364,59388,59389,59393,59394,59397,59399,59405,59406,59407,59412,59414,59415,59417,59418,59419,59422,59423,59432,59433,59435,59443,59445,59449,59450,59451,59453,59454,59458,59464,59465,59472,59474,59476,59480,59481,59482,59483,59484,59486,59488,59491,59493,59494,59496,59497,59500,59501,59507,59508,59509,59510,59516,59519,59525,59526,59547,59548,59560,59564,59565,59566,59572,59578,59583,59589,59590,59595,59596,59607,59613,59614,59618,59624,59632,59633,59644,59646,59656,59657,59674,59687,59693,59706,59709,59710,59714,59717,59727,59730,59731,59732,59741,59749,59751,59753,59760,59766,59767,59768,59771,59772,59773,59774,59779,59780,59781,59786,59787,59793,59794,59796,59797,59798,59800,59801,59802,59803,59804,59805,59806,59813,59817,59831,59832,59834,59835,59836,59838,59840,59841,59842,59847,59848,59888,59895,59897,59900,59901,59918,59923,59927,59933,59934,59935,59946,59947,59949,59959,59960,59965,59966,59967,59972,59973,59978,59985,59990,59992,59993,59994,59995,59996,59997,59998,59999,60000,60002,60005,60009,60016,60018,60033,60037,60038,60042,60048,60049,60052,60054,60057,60059,60060,60061,60062,60066,60068,60071,60072,60088,60095,60102,60109,60114,60127,60128,60132,60134,60136,60139,60141,60143,60145,60149,60151,60154,60155,60156,60157,60162,60163,60168,60169,60170,60171,60174,60175,60181,60188,60195,60196,60197,60198,60200,60201,60203,60204,60220,60221,60224,60228,60229,60230,60232,60234,60235,60238,60239,60240,60241,60243,60246,60247,60250,60252,60254,60260,60263,60265,60266,60269,60270,60271,60274,60276,60279,60288,60293,60294,60296,60297,60299,60305,60306,60316,60321,60323,60325,60337,60341,60345,60347,60351,60352,60356,60358,60360,60364,60365,60368,60372,60376,60380,60382,60387,60391,60394,60399,60422,60423,60424,60425,60426,60427,60430,60431,60432,60433,60436,60437,60440,60442,60443,60444,60445,60446,60447,60448,60449,60451,60458,60461,60462,60463,60465,60466,60468,60472,60473,60476,60477,60478,60485,60486,60487,60488,60489,60491,60492,60494,60495,60500,60501,60502,60503,60507,60508,60510,60512,60514,60519,60521,60523,60526,60527,60529,60532,60534,60537,60538,60544,60545,60546,60548,60550,60551,60554,60557,60558,60560,60561,60562,60563,60564,60565,60567,60568,60571,60572,60579,60580,60583,60586,60587,60590,60603,60611,60612,60615,60618,60620,60621,60622,60623,60626,60627,60631,60638,60647,60648,60652,60653,60657,60663,60665,60668,60670,60673,60675,60677,60680,60683,60685,60687,60693,60694,60698,60699,60702,60703,60706,60707,60709,60710,60711,60719,60729,60732,60735,60738,60748,60753,60754,60757,60760,60763,60764,60768,60779,60780,60781,60782,60786,60789,60794,60796,60798,60800,60801,60803,60804,60808,60812,60815,60817,60825,60832,60833,60834,60835,60844,60847,60848,60851,60854,60855,60857,60858,60862,60863,60865,60866,60868,60875,60878,60879,60880,60881,60884,60890,60891,60892,60893,60896,60897,60898,60900,60901,60902,60903,60904,60905,60906,60908,60909,60910,60911,60912,60914,60915,60916,60921,60922,60924,60928,60930,60938,60939,60942,60943,60947,60956,60957,60960,60961,60962,60963,60966,60968,60972,60974,60977,60980,60981,60982,60984,60987,60993,60994,60995,60998,61000,61004,61010,61011,61012,61017,61022,61031,61035,61036,61043,61044,61045,61046,61048,61049,61050,61053,61054,61056,61057,61058,61062,61064,61065,61066,61067,61068,61069,61070,61073,61079,61080,61081,61082,61083,61085,61088,61089,61091,61094,61095,61098,61100,61104,61105,61115,61116,61117,61126,61128,61130,61132,61133,61137,61142,61143,61145,61146,61147,61149,61151,61164,61167,61168,61169,61170,61171,61173,61175,61176,61177,61181,61182,61183,61184,61206,61207,61208,61210,61211,61213,61214,61227,61229,61231,61267,61280,61322,61325,61327,61391,61393,61394,61396,61397,61399,61402,61403,61405,61406,61420,61426,61427,61442,61444,61451,61452,61455,61457,61460,61461,61462,61463,61464,61465,61466,61468,61469,61470,61473,61475,61479,61492,61493,61496,61498,61499,61500,61501,61502,61503,61505,61508,61509,61510,61524,61525,61527,61529,61531,61532,61546,61568,61577,61578,61580,61581,61582,61583,61590,61594,61619,61629,61637,61641,61643,61647,61664,61665,61672,61674,61675,61678,61681,61683,61684,61688,61691,61693,61694,61697,61699,61702,61703,61710,61714,61715,61716,61720,61722,61725,61726,62000,62004,62006,62007,62008,62009,62012,62013,62016,63030,63045,63068,63069,63073,63080,63095,63106,63113,63115,63122,63139,63143,63146,63152,63165,63169,63175,63187,63190,63191,63192,63193,63200,63201,63208,63209,63225,63226,63227,63235,63238,63239,63244,63260,63266,63271,63277,63279,63281,63283,63285,63287,63288,63293,63297,63301,63302,63306,63308,63309,63310,63314,63319,63320,63321,63322,63323,63325,63326,63330,63331,63339,63340,63344,63347,63348,63351,63357,63362,63366,63370,63371,63372,63382,63383,63385,63386,63392,63393,63396,63398,63399,63400,63405,63409,63410,63414,63416,63417,63426,63427,63428,63429,63430,63438,63443,63445,63447,63448,63452,63453,63456,63457,63459,63462,63465,63467,63470,63474,63476,63481,63483,63489,63495,63496,63497,63500,63501,63504,63505,63506,63508,63509,63511,63520,63523,63533,63536,63539,63542,63560,63563,63577,63581,63582,63584,63585,63586,63591,63592,63593,63597,63598,63602,63604,63607,63610,63611,63622,63624,63625,63626,63629,63640,63641,63646,63648,63653,63661,63666,63667,63672,63675,63676,63680,63684,63686,63688,63696,63697,63698,63699,63702,63705,63706,63714,63718,63719,63721,63724,63725,63726,63730,63734,63738,63739,63746,63757,63759,63761,63763,63765,63777,63778,63783,63806,63807,63816,63858,63865,63867,63871,63874,63875,63896,63899,63907,63911,63916,64703,64704,64705,64706,64707,64708,64709,64710,64711,64712,64713,64714,64715,64716,64717,64718,64719,64720,64722,64734,64736,64750,64766,64767,64774,64775,64776,64777,64784,64789,64791,64792,64793,64795,64796,64797,64798,64799,64800,64949,65045,65049,65051,65052,65057,65058,65061,65062,65063,65065,65066,65067,65068,65071,65076,65077,65079,65080,65081,65084,65089,65102,65103,65134,65142,65185,65187,65193,65195,65205,65212,65238,65240,65252,65258,65264,65280,65283,65291,65295,65304,65315,65334,65335,65336,65337,65338,65339,65340,65341,65342,65343,65344,65345,65346,65347,65348,65349,65350,65351,100001,100003,100004,100006,100012,100014,100020,100022,100027,100028,100035,100048,100051,100053,100059,100061,100071,100080,100088,100090,100094,100095,100099,100101,100103,100105,100108,100111,100112,100114,100115,100117,100121,100123,100129,100131,100132,100133,100134,100135,100140,100142,100144,100147,100148,100150,100153,100158,100159,100161,100165,100167,100172,100178,100179,100181,100183,100184,100187,100188,100189,100190,100192,100196,100202,100203,100205,100206,100212,100216,100218,100219,100224,100228,100229,100231,100241,100244,100246,100255,100257,100258,100261,100264,100265,100270,100272,100276,100277,100281,100283,100286,100287,100289,100290,100291,100292,100297,100299,100301,100303,100304,100307,100315,100316,100322,100325,100327,100329,100333,100336,100337,100338,100342,100346,100347,100350,100353,100354,100358,100359,100360,100370,100374,100381,100382,100386,100388,100393,100399,100400,100401,100407,100412,100414,100419,100420,100421,100425,100426,100428,100429,100432,100433,100439,100446,100449,100456,100457,100458,100459,100464,100465,100467,100473,100479,100481,100484,100485,100495,100497,100498,100499,100504,100506,100508,100509,100510,100514,100515,100516,100526,100527,100530,100534,100535,100538,100543,100545,100550,100551,100552,100554,100564,100567,100570,100575,100578,100586,100588,100591,100606,100607,100611,100614,100617,100620,100624,100626,100629,100630,100635,100637,100640,100650,100655,100660,100664,100666,100668,100678,100682,100686,100687,100688,100691,100697,100698,100706,100707,100709,100710,100723,100730,100732,100735,100738,100741,100742,100753,100754,100756,100762,100764,100772,100773,100780,100782,100789,100790,100791,100800,100802,100804,100806,100809,100810,100811,100813,100815,100822,100830,100832,100841,100856,100865,100868,100869,100870,100871,100873,100876,100879,100888,100894,100897,100900,100904,100906,100917,100924,100925,100930,100931,100934,100935,100937,100939,100940,100944,100946,100948,100950,100951,100954,100955,100957,100958,100960,100961,100962,100964,100967,100971,100974,100975,100978,100980,100985,100986,100988,100989,100992,100993,100995,100997,100998,100999,101011,101015,101016,101018,101023,101026,101027,101028,101029,101030,101032,101033,101034,101035,101038,101039,101042,101045,101047,101049,101050,101052,101053,101055,101058,101061,101065,101066,101071,101072,101074,101075,101076,101079,101086,101087,101091,101092,101097,101098,101100,101102,101103,101106,101107,101109,101111,101113,101115,101116,101118,101120,101121,101123,101125,101127,101129,101130,101134,101135,101136,101138,101141,101149,101150,101152,101160,101180,101182,101183,101185,101186,101190,101191,101192,101195,101196,101197,101199,101204,101208,101213,101215,101216,101217,101221,101223,101227,101228,101234,101236,101244,101245,101247,101249,101250,101251,101252,101253,101260,101265,101267,101280,101291,101294,101295,101306,101309,101313,101316,101320,101322,101324,101329,101331,101334,101338,101339,101350,101352,101354,101355,101356,101357,101359,101360,101361,101362,101365,101366,101367,101369,101378,101379,101382,101387,101404,101412,101431,101432,101444,101447,101455,101459,101468,101471,101485,101490,101495,101498,101499,101502,101504,101505,101506,101507,101508,101509,101513,101518,101519,101520,101523,101524,101525,101526,101527,101531,101534,101535,101537,101538,101563,101564,101569,101571,101574,101576,101577,101581,101586,101587,101588,101592,101603,101610,101611,101614,101615,101617,101620,101623,101625,101626,101629,101630,101631,101632,101638,101640,101642,101644,101647,101648,101650,101653,101658,101659,101667,101668,101670,101671,101675,101685,101686,101696,101708,101720,101721,101725,101726,101733,101734,101736,101737,101739,101747,101748,101750,101755,101756,101758,101760,101761,101762,101764,101766,101767,101771,101777,101779,101780,101781,101783,101784,101785,101789,101795,101798,101802,101803,101826,101828,101833,101834,101838,101842,101845,101846,101849,101851,101860,101870,101872,101875,101876,101877,101879,101880,101882,101883,101884,101888,101889,101890,101897,101898,101899,101902,101910,101918,101926,101928,101939,101940,101945,101946,101952,101955,101957,101960,101961,101963,101967,101972,101974,101981,101985,101986,101989,101991,101996,102008,102019,102023,102026,102027,102036,102044,102045,102046,102051,102058,102065,102067,102068,102072,102074,102077,102078,102088,102094,102095,102097,102098,102105,102108,102109,102112,102121,102132,102139,102141,102142,102143,102149,102151,102159,102198,102203,102204,102211,102212,102213,102214,102218,102225,102226,102227,102231,102232,102233,102240,102242,102244,102246,102263,102272,102274,102282,102285,102290,102293,102299,102301,102311,102312,102323,102335,102337,102339,102345,102347,102362,102368,102369,102372,102383,102384,102385,102387,102389,102392,102394,102395,102397,102403,102413,102416,102417,102418,102421,102422,102424,102428,102433,102437,102438,102439,102440,102451,102456,102460,102462,102468,102475,102481,102483,102486,102487,102490,102492,102496,102497,102514,102517,102518,102526,102527,102530,102531,102533,102534,102536,102540,102541,102547,102554,102560,102561,102563,102566,102567,102571,102572,102578,102579,102585,102587,102588,102596,102597,102602,102603,102610,102611,102618,102619,102623,102626,102631,102633,102638,102647,102651,102663,102667,102672,102677,102681,102682,102689,102690,102691,102692,102694,102695,102696,102697,102698,102700,102701,102707,102711,102712,102713,102719,102730,102732,102737,102738,102742,102743,102746,102757,102759,102760,102761,102765,102766,102767,102768,102774,102775,102779,102781,102784,102786,102787,102788,102792,102804,102805,102812,102815,102818,102823,102828,102833,102839,102840,102846,102849,102851,102855,102857,102863,102864,102873,102875,102878,102879,102884,102892,102893,102894,102898,102901,102905,102907,102910,102912,102913,102914,102915,102916,102922,102927,102928,102942,102945,102947,102948,102949,102950,102951,102966,102967,102968,102971,102972,102975,102983,102984,102985,102988,102991,102999,103003,103008,103010,103034,103035,103036,103038,103041,103043,103046,103047,103048,103061,103062,103063,103064,103065,103066,103067,103076,103083,103084,103091,103093,103094,103103,103104,103106,103107,103112,103113,103116,103118,103119,103120,103121,103125,103126,103127,103128,103133,103134,103136,103137,103140,103142,103152,103153,103155,103160,103166,103167,103170,103173,103176,103181,103184,103191,103199,103200,103206,103207,103214,103215,103219,103220,103222,103231,103234,103236,103258,103264,103266,103268,103269,103270,103273,103276,103279,103280,103288,103289,103290,103291,103293,103294,103295,103296,103300,103303,103306,103310,103315,103317,103318,103319,103320,103322,103323,103325,103327,103342,103349,103350,103353,103358,103360,103362,103363,103366,103367,103371,103372,103373,103376,103393,103394,103396,103397,103398,103400,103401,103402,103403,103404,103405,103407,103408,103411,103414,103420,103424,103434,103437,103444,103446,103449,103453,103454,103455,103456,103458,103460,103465,103469,103470,103476,103487,103489,103491,103492,103494,103498,103499,103505,103506,103509,103510,103511,103514,103515,103517,103519,103531,103541,103544,103550,103551,103558,103559,103566,103567,103570,103572,103581,103582,103586,103588,103589,103598,103604,103605,103611,103612,103613,103614,103616,103621,103631,103637,103640,103655,103656,103658,103659,103661,103662,103663,103667,103677,103680,103683,103686,103687,103690,103694,103701,103703,103707,103711,103744,103757,103759,103760,103781,103784,103796,103797,103802,103810,103815,103816,103819,103820,103830,103831,103836,103839,103845,103851,103857,103867,103869,103875,103878,103886,103888,103892,103893,103894,103899,103901,103902,103913,103915,103917,103919,103925,103927,103937,103943,103949,103951,103956,103957,103963,103966,103968,103969,103970,103972,103974,103976,103977,103979,103981,103982,103989,103992,103993,104008,104020,104021,104029,104044,104054,104055,104058,104091,104093,104095,104097,104101,104102,104103,104105,104122,104124,104132,104135,104159,104162,104166,104168,104173,104176,104185,104191,104193,104195,104201,104204,104216,104218,104224,104226,104241,104246,104249,104250,104258,104259,104260,104265,104268,104271,104272,104277,104278,104282,104283,104287,104289,104292,104293,104295,104297,104307,104310,104311,104313,104319,104324,104325,104334,104335,104336,104337,104341,104344,104347,104349,104365,104368,104369,104371,104372,104376,104382,104383,104385,104388,104389,104391,104406,104407,104411,104412,104413,104415,104417,104418,104419,104427,104428,104434,104437,104438,104442,104443,104447,104453,104454,104457,104460,104461,104462,104466,104469,104471,104476,104478,104479,104480,104481,104484,104485,104486,104488,104489,104490,104493,104496,104497,104498,104499,104500,104502,104503,104506,104514,104523,104525,104526,104527,104530,104538,104539,104540,104541,104547,104548,104557,104564,104569,104579,104581,104594,104608,104609,104610,104611,104612,104629,104635,104636,104644,104647,104649,104656,104666,104668,104670,104673,104674,104675,104677,104678,104680,104682,104683,104685,104687,104688,104689,104693,104695,104697,104699,104702,104704,104706,104710,104711,104717,104719,104720,104721,104722,104724,104726,104727,104729,104734,104735,104736,104737,104739,104741,104742,104745,104747,104748,104750,104751,104752,104754,104762,104765,104766,104784,104789,104794,104803,104804,104811,104812,104813,104825,104827,104828,104833,104834,104837,104844,104848,104853,104855,104856,104858,104860,104865,104869,104871,104874,104876,104880,104886,104893,104900,104931,104934,104935,104940,104961,104986,104987,104988,104989,104990,104991,105009,105013,105014,105015,105020,105021,105023,105025,105028,105029,105032,105033,105034,105037,105038,105039,105041,105043,105046,105051,105053,105056,105057,105058,105061,105062,105067,105073,105074,105075,105080,105083,105084,105087,105089,105091,105094,105095,105096,105098,105105,105106,105113,105117,105120,105126,105131,105136,105140,105144,105148,105179,105181,105189,105192,105194,105202,105203,105218,105223,105229,105237,105241,105243,105261,105266,105269,105270,105275,105276,105288,105289,105297,105298,105304,105307,105309,105312,105320,105322,105324,105327,105329,105331,105338,105339,105340,105342,105345,105360,105364,105373,105374,105375,105376,105379,105382,105386,105387,105409,105411,105413,105414,105422,105425,105441,105446,105457,105480,105483,105505,105516,105524,105525,105526,105530,105532,105536,105550,105560,105563,105576,105578,105584,105633,105686,105808,105871,105872,105873,105876,105877,105878,105883,105884,105886,105890,105892,105893,105894,105895,105896,105898,105905,105907,105908,105909,105950,105963,105985,105988,105989,106020,106097,106098,106099,106100,106101,106105,106106,106107,106108,106127,106133,106173,106218,106232,106235,106236,106250,106251,106253,106254,106256,106260,106263,106264,106265,106266,106268,106280,106314,106320,106332,106338,106339,106340,106344,106359,106360,106361,106363,106367,106371,106384,106395,106398,106399,106403,106406,106409,106410,106411,106413,106414,106415,106420,106421,106422,106423,106425,106428,106429,106430,106432,106435,106436,106442,106443,106448,106457,106469,106471,106476,106480,106489,106493,106508,106511,106513,106520,106531,106539,106540,106548,106556,106559,106564,106566,106567,106569,106570,106575,106576,106577,106580,106581,106583,106586,106589,106591,106593,106600,106602,106604,106605,106609,106611,106613,106614,106615,106617,106618,106620,106625,106628,106629,106630,106631,106635,106636,106637,106638,106641,106646,106650,106653,106655,106656,106671,106676,106677,106678,106683,106687,106724,106725,106735,106736,106737,106739,106753,106754,106755,106760,106762,106763,106764,106765,106766,106767,106769,106771,106772,106773,106775,106776,106777,106778,106779,106782,106783,106785,106787,106788,106793,106804,106809,106815,106822,106825,106833,106838,106842,106843,106848,106853,106855,106857,106863,106868,106869,106870,106888,106889,106890,106892,106893,106894,106901,106907,106912,106917,106920,106922,106924,106925,106928,106930,106935,106946,106954,106956,106957,106958,106968,106973,106974,106975,106977,106981,106987,106992,107002,107007,107008,107021,107028,107031,107032,107036,107037,107039,107049,107056,107057,107058,107066,107069,107070,107074,107075,107076,107077,107079,107081,107083,107084,107089,107096,107100,107101,107103,107135,107136,107137,107142,107143,107144,107146,107148,107166,107170,107180,107189,107204,107208,107209,107212,107219,107222,107224,107227,107231,107234,107236,107243,107255,107256,107259,107262,107271,107284,107297,107312,107317,107318,107321,107324,107325,107329,107333,107338,107340,107345,107347,107354,107359,107373,107383,107384,107385,107400,107410,107412,107414,107421,107422,107423,107424,107425,107433,107434,107437,107439,107445,107450,107451,107454,107469,107472,107473,107479,107481,107484,107489,107495,107497,107498,107499,107506,107511,107516,107517,107520,107526,107532,107533,107534,107535,107541,107542,107543,107545,107547,107551,107553,107554,107558,107561,107563,107578,107587,107589,107590,107592,107603,107604,107609,107612,107613,107614,107628,107634,107635,107639,107640,107641,107646,107652,107654,107657,107667,107670,107674,107679,107681,107686,107688,107690,107691,107693,107696,107697,107698,107700,107705,107710,107712,107716,107717,107718,107722,107724,107726,107730,107732,107737,107743,107756,107760,107762,107768,107769,107770,107772,107773,107778,107782,107783,107784,107790,107791,107793,107795,107799,107800,107804,107809,107813,107821,107825,107826,107830,107835,107840,107843,107844,107845,107847,107849,107851,107854,107862,107864,107869,107872,107873,107880,107883,107889,107891,107895,107896,107900,107901,107904,107907,107909,107910,107911,107913,107914,107915,107924,107926,107927,107929,107930,107932,107934,107935,107936,107940,107941,107944,107945,107946,107948,107949,107951,107953,107954,107955,107957,107959,107960,107975,107978,107980,107983,107985,107990,108004,108021,108040,108042,108043,108051,108052,108055,108074,108075,108079,108088,108095,108096,108101,108102,108110,108114,108117,108118,108129,108133,108144,108146,108150,108151,108152,108154,108160,108163,108165,108169,108181,108182,108185,108186,108187,108188,108190,108192,108195,108197,108198,108200,108202,108206,108215,108218,108224,108225,108226,108227,108228,108233,108235,108239,108240,108241,108243,108244,108245,108250,108262,108263,108270,108274,108277,108279,108298,108306,108310,108321,108323,108340,108344,108349,108352,108360,108364,108373,108375,108380,108386,108392,108396,108397,108398,108399,108401,108402,108405,108408,108409,108414,108419,108421,108430,108432,108438,108439,108443,108444,108451,108453,108455,108456,108466,108472,108474,108475,108477,108482,108483,108489,108491,108494,108495,108497,108500,108510,108512,108513,108514,108522,108523,108525,108565,108566,108577,108580,108587,108589,108590,108592,108597,108602,108603,108608,108615,108619,108620,108639,108640,108643,108644,108646,108654,108655,108657,108658,108662,108664,108667,108669,108670,108683,108684,108685,108688,108693,108694,108695,108696,108697,108698,108700,108701,108705,108706,108707,108709,108711,108713,108720,108722,108725,108726,108733,108739,108745,108746,108751,108758,108760,108770,108771,108772,108776,108782,108784,108790,108791,108792,108793,108796,108806,108807,108810,108813,108816,108817,108822,108823,108824,108825,108829,108835,108836,108837,108838,108839,108842,108850,108855,108863,108865,108866,108867,108876,108877,108879,108881,108883,108885,108887,108889,108892,108893,108902,108903,108904,108905,108906,108911,108914,108916,108917,108918,108924,108925,108927,108928,108931,108932,108934,108938,108940,108941,108945,108949,108953,108955,108959,108961,108966,108973,108976,108977,108978,108979,108980,108981,108982,108985,108989,108991,108993,108995,108996,109001,109002,109005,109009,109019,109024,109025,109027,109029,109035,109040,109041,109042,109044,109046,109047,109050,109058,109060,109065,109066,109068,109069,109070,109071,109072,109076,109077,109078,109079,109080,109081,109083,109089,109091,109101,109106,109108,109109,109115,109118,109121,109122,109123,109124,109125,109126,109127,109128,109129,109136,109137,109138,109139,109140,109144,109147,109153,109154,109158,109161,109164,109169,109179,109180,109182,109198,109201,109204,109206,109211,109212,109213,109215,109217,109219,109220,109226,109229,109232,109233,109234,109237,109243,109245,109248,109251,109252,109253,109260,109261,109263,109265,109266,109267,109270,109274,109288,109292,109296,109312,109316,109322,109324,109327,109328,109329,109332,109335,109339,109342,109343,109344,109345,109348,109349,109350,109351,109352,109354,109355,109356,109364,109375,109380,109386,109389,109391,109392,109397,109402,109409,109412,109413,109421,109437,109438,109439,109440,109441,109443,109447,109448,109457,109461,109465,109466,109470,109474,109479,109490,109496,109500,109503,109510,109511,109515,109516,109517,109522,109523,109532,109534,109536,109540,109542,109544,109546,109547,109551,109552,109553,109554,109555,109559,109560,109563,109564,109566,109568,109571,109574,109578,109579,109580,109581,109588,109589,109594,109596,109602,109605,109607,109608,109609,109611,109613,109615,109618,109624,109629,109632,109634,109636,109637,109670,109675,109678,109717,109725,109730,109739,109743,109744,109747,109772,109776,109785,109792,109794,109816,109830,109842,109846,109849,109851,109852,109854,109858,109869,109872,109873,109876,109885,109887,109898,109899,109904,109906,109907,109911,109914,109915,109917,109919,109922,109925,109929,109932,109934,109940,109941,109942,109943,109946,109947,109948,109950,109955,109956,109957,109958,109962,109963,109966,109972,109973,109975,109977,109985,109989,109991,109992,109994,109995,109996,109997,109999,110000,110005,110010,110011,110012,110051,110052,110061,110064,110068,110071,110074,110075,110076,110079,110083,110084,110093,110106,110108,110130,110137,110143,110150,110154,110198,110210,110211,110223,110239,110241,110254,110257,110259,110266,110267,110268,110273,110277,110278,110279,110292,110293,110299,110301,110303,110306,110312,110315,110316,110320,110323,110324,110325,110329,110331,110343,110346,110349,110351,110356,110362,110367,110368,110371,110373,110376,110378,110379,110380,110385,110387,110392,110394,110396,110399,110400,110404,110406,110408,110410,110411,110412,110413,110415,110422,110424,110431,110436,110439,110449,110451,110456,110457,110458,110460,110461,110462,110472,110474,110475,110476,110478,110480,110483,110484,110485,110486,110491,110492,110495,110500,110503,110504,110508,110511,110516,110518,110520,110523,110525,110526,110539,110540,110543,110547,110549,110552,110555,110556,110557,110558,110559,110562,110565,110566,110569,110571,110573,110577,110578,110579,110580,110582,110586,110596,110597,110598,110599,110600,110603,110604,110607,110608,110614,110620,110624,110626,110627,110630,110633,110635,110638,110644,110645,110646,110648,110649,110650,110651,110652,110654,110656,110657,110659,110664,110669,110670,110674,110675,110676,110677,110679,110681,110682,110683,110684,110685,110687,110689,110691,110692,110695,110696,110698,110707,110708,110709,110713,110716,110718,110719,110722,110727,110728,110729,110730,110732,110733,110734,110735,110736,110737,110738,110741,110742,110755,110756,110760,110761,110762,110763,110767,110768,110773,110774,110775,110780,110781,110784,110787,110788,110789,110790,110793,110794,110802,110803,110804,110806,110809,110811,110812,110814,110815,110824,110825,110831,110837,110838,110839,110840,110841,110842,110843,110847,110848,110851,110852,110863,110866,110872,110874,110882,110888,110892,110895,110897,110898,110900,110901,110903,110904,110909,110910,110911,110912,110916,110917,110920,110921,110923,110925,110929,110931,110936,110939,110941,110945,110946,110947,110950,110955,110956,110958,110960,110968,110969,110977,110987,110988,110989,110991,110992,110993,110994,111001,111005,111007,111016,111017,111019,111021,111023,111025,111026,111027,111028,111029,111032,111033,111035,111038,111039,111049,111052,111053,111059,111062,111065,111067,111072,111073,111076,111079,111082,111092,111095,111096,111100,111103,111104,111115,111116,111117,111118,111119,111124,111126,111128,111129,111130,111133,111134,111138,111139,111148,111149,111150,111152,111154,111156,111157,111158,111165,111166,111167,111168,111169,111170,111172,111174,111175,111180,111181,111182,111183,111184,111185,111194,111197,111198,111200,111201,111203,111205,111207,111213,111219,111220,111221,111222,111225,111227,111231,111236,111246,111247,111250,111251,111252,111255,111257,111259,111265,111266,111272,111277,111280,111282,111285,111287,111294,111295,111301,111302,111303,111304,111307,111309,111314,111318,111320,111323,111336,111340,111341,111342,111343,111346,111350,111352,111354,111355,111356,111358,111359,111361,111363,111365,111366,111370,111375,111377,111382,111388,111390,111399,111407,111408,111409,111415,111418,111420,111426,111428,111430,111431,111436,111448,111449,111450,111451,111452,111455,111456,111461,111462,111465,111466,111467,111470,111472,111473,111474,111476,111477,111481,111482,111484,111486,111490,111515,111520,111527,111530,111572,111573,111575,111576,111590,111591,111592,111593,111620,111621,111622,111623,111624,111625,111627,111628,111629,111630,111632,111633,111634,111637,111638,111646,111669,111670,111672,111744,111747,111800,111804,111808,111809,111811,111814,111818,111819,111820,111823,111824,111826,111827,111830,111831,111833,111835,111836,111838,111839,111840,111844,111847,111850,111852,111853,111857,111859,111860,111864,111868,111869,111871,111874,111875,111881,111888,111893,111901,111903,111909,111922,111926,111928,111933,111935,111946,111949,111951,111953,111954,111958,111978,111979,111984,111986,111991,111993,112006,112009,112012,112015,112017,112019,112022,112026,112027,112031,112034,112042,112050,112052,112053,112058,112061,112062,112063,112068,112069,112070,112076,112078,112079,112082,112083,112084,112085,112093,112096,112098,112104,112106,112111,112118,112143,112144,112145,112146,112148,112149,112150,112151,112152,112153,112154,112156,112157,112169,112170,112174,112178,112193,112194,112218,112229,112247,112262,112283,112295,112307,112310,112313,112327,112331,112334,112338,112340,112351,112352,112354,112366,112374,112375,112376,112377,112378,112379,112384,112391,112393,112395,112398,112414,112417,112432,112433,112434,112438,112441,112443,112446,112453,112454,112455,112458,112460,112461,112462,112465,112470,112473,112478,112480,112481,112484,112485,112486,112490,112492,112502,112503,112508,112509,112512,112514,112515,112516,112519,112520,112521,112523,112526,112527,112528,112530,112531,112533,112534,112538,112544,112547,112555,112560,112565,112568,112571,112573,112574,112576,112583,112585,112587,112589,112593,112597,112606,112607,112617,112646,112650,112659,112660,112661,112663,112667,112670,112671,112672,112682,112692,112693,112696,112702,112708,112715,112716,112728,112729,112732,112733,112736,112737,112738,112747,112765,112775,112778,112780,112782,112785,112786,112789,112790,112791,112792,112793,112794,112795,112796,112801,112803,112806,112812,112833,112840,112842,112845,112853,112857,112861,112863,112867,112868,112874,112876,112882,112885,112888,112889,112890,112891,112896,112897,112907,112910,112912,112916,112920,112921,112922,112923,112924,112926,112928,112929,112931,112932,112940,112942,112948,112953,112962,112963,112965,112966,112970,112973,112978,112979,112980,112985,112988,112990,112991,112993,112996,113004,113006,113009,113014,113020,113032,113034,113039,113040,113041,113042,113049,113051,113064,113065,113066,113067,113072,113076,113081,113085,113087,113092,113096,113098,113125,113126,113127,113166,113184,113190,113195,113200,113209,113219,113222,113224,113232,113235,113236,113238,113239,113240,113241,113243,113244,113245,113246,113247,113248,113249,113251,113253,113262,113263,113264,113270,113271,113272,113281,113283,113284,113286,113289,113293,113294,113295,113296,113297,113313,113324,113328,113329,113333,113334,113335,113336,113337,113338,113339,113340,113342,113344,113345,113352,113354,113356,113357,113359,113364,113365,113370,113379,113380,113383,113384,113403,113405,113406,113407,113408,113409,113410,113411,113413,113414,113419,113425,113426,113432,113436,113438,113441,113443,113446,113447,113449,113450,113452,113456,113460,113464,113467,113469,113470,113478,113479,113481,113487,113490,113491,113497,113500,113501,113502,113503,113506,113513,113514,113515,113518,113521,113525,113528,113529,113530,113532,113535,113551,113553,113554,113555,113559,113560,113563,113565,113568,113569,113570,113573,113574,113576,113577,113579,113581,113586,113588,113590,113591,113595,113596,113598,113599,113603,113604,113605,113623,113625,113632,113636,113644,113652,113653,113654,113658,113661,113662,113663,113664,113665,113671,113677,113678,113679,113680,113685,113686,113688,113690,113697,113704,113707,113711,113712,113719,113723,113729,113731,113732,113735,113743,113749,113750,113753,113758,113760,113761,113768,113770,113776,113778,113783,113787,113788,113789,113790,113792,113796,113799,113815,113819,113821,113822,113824,113825,113831,113839,113840,113843,113844,113845,113850,113851,113855,113856,113860,113863,113865,113868,113870,113871,113872,113873,113876,113878,113883,113889,113892,113893,113895,113897,113898,113900,113903,113905,113906,113907,113908,113909,113911,113913,113914,113918,113925,113926,113928,113929,113930,113931,113932,113935,113937,113938,113940,113941,113942,113947,113950,113951,113952,113955,113956,113958,113959,113960,113961,113963,113969,113970,113971,113973,113975,113976,113977,113979,113980,113983,113985,113986,113993,113995,113998,113999,114000,114002,114003,114009,114013,114015,114016,114017,114018,114021,114022,114024,114026,114029,114030,114032,114035,114036,114038,114040,114042,114044,114046,114048,114052,114053,114055,114056,114057,114059,114060,114061,114063,114064,114065,114071,114075,114076,114077,114078,114080,114085,114088,114089,114092,114093,114098,114101,114102,114104,114105,114110,114111,114113,114118,114123,114127,114129,114135,114138,114140,114147,114148,114149,114150,114151,114152,114153,114157,114162,114166,114167,114169,114175,114177,114179,114180,114181,114182,114186,114187,114188,114190,114191,114192,114194,114195,114196,114199,114201,114202,114204,114206,114213,114216,114224,114225,114226,114232,114235,114237,114238,114239,114240,114241,114245,114246,114254,114260,114262,114267,114268,114269,114273,114277,114279,114286,114288,114290,114291,114293,114297,114298,114299,114306,114307,114308,114309,114311,114314,114316,114317,114319,114324,114325,114326,114328,114331,114333,114342,114344,114345,114347,114350,114353,114356,114358,114366,114368,114369,114370,114377,114379,114381,114383,114385,114392,114398,114401,114402,114403,114410,114413,114415,114417,114421,114429,114434,114439,114440,114441,114443,114450,114452,114453,114455,114456,114460,114463,114464,114465,114466,114472,114480,114487,114489,114491,114493,114496,114501,114503,114506,114509,114510,114511,114513,114515,114516,114522,114523,114525,114526,114530,114533,114538,114540,114543,114547,114548,114551,114552,114555,114556,114557,114558,114559,114560,114562,114565,114566,114567,114568,114569,114574,114575,114576,114577,114578,114581,114583,114584,114589,114590,114591,114592,114593,114595,114597,114604,114605,114610,114613,114615,114617,114624,114626,114627,114628,114629,114630,114632,114633,114635,114637,114638,114639,114640,114641,114646,114647,114652,114653,114656,114657,114659,114660,114661,114662,114663,114664,114665,114668,114669,114672,114674,114675,114678,114679,114680,114683,114684,114687,114690,114691,114698,114701,114702,114703,114707,114708,114709,114714,114715,114716,114719,114721,114723,114724,114730,114731,114735,114742,114750,114753,114755,114756,114758,114762,114764,114765,114766,114773,114779,114780,114781,114786,114787,114790,114794,114799,114802,114803,114804,114805,114808,114814,114833,114835,114837,114841,114844,114845,114846,114847,114851,114853,114854,114855,114856,114861,114862,114866,114868,114871,114873,114874,114876,114877,114878,114880,114881,114882,114883,114890,114893,114894,114895,114896,114898,114900,114903,114906,114907,114909,114910,114913,114916,114921,114924,114926,114927,114928,114929,114932,114933,114935,114937,114941,114947,114948,114950,114953,114954,114961,114964,114968,114970,114971,114973,114976,114978,114980,114982,114984,114987,114988,114989,114991,114992,114993,114999,115001,115004,115005,115006,115008,115009,115011,115014,115017,115019,115020,115021,115023,115024,115025,115029,115030,115034,115036,115037,115038,115049,115050,115054,115055,115057,115058,115059,115060,115061,115065,115067,115068,115069,115070,115074,115078,115079,115080,115081,115083,115087,115089,115092,115093,115098,115100,115108,115109,115111,115112,115117,115118,115119,115121,115127,115128,115131,115132,115134,115136,115137,115138,115139,115141,115143,115145,115146,115150,115152,115155,115157,115158,115165,115166,115169,115177,115178,115179,115180,115182,115185,115186,115188,115192,115194,115196,115197,115198,115200,115205,115206,115208,115211,115217,115224,115227,115228,115231,115233,115236,115242,115243,115244,115245,115246,115247,115250,115252,115254,115255,115257,115278,115282,115287,115292,115294,115295,115298,115300,115304,115313,115316,115320,115324,115326,115330,115336,115337,115348,115356,115357,115358,115359,115367,115375,115381,115393,115397,115451,115522,115524,115528,115529,115532,115533,115535,115536,115538,115539,115540,115541,115543,115544,115545,115546,115547,115558,115562,115593,115596,115598,115600,115601,115602,115603,115604,115605,115623,115645,115647,115650,115651,115652,115653,115654,115655,115658,115659,115664,115677,115688,115689,115690,115691,115692,115693,115694,115696,115697,115723,115736,115783,115785,115793,115794,115799,115803,115804,115809,115812,115817,115818,115822,115826,115828,115830,115831,115832,115839,115841,115843,115845,115868,115871,115885,115888,115895,115898,115903,115907,115908,115909,115910,115917,115920,115923,115924,115927,115928,115929,115930,115932,115951,115956,115976,115989,115994,116018,116024,116026,116044,116047,116049,116050,116051,116052,116054,116055,116056,116059,116060,116061,116066,116095,116099,116101,116102,116104,116106,116108,116109,116112,116114,116134,116135,116136,116137,116139,116142,116143,116145,116146,116148,116150,116151,116158,116163,116164,116166,116167,116168,116178,116180,116188,116192,116193,116199,116201,116203,116208,116211,116215,116222,116223,116224,116226,116228,116229,116230,116233,116235,116236,116249,116252,116254,116258,116266,116269,116271,116276,116280,116283,116296,116304,116305,116308,116314,116315,116321,116328,116329,116331,116332,116333,116335,116339,116347,116349,116350,116354,116355,116356,116357,116358,116359,116360,116361,116362,116363,116364,116365,116366,116374,116375,116376,116378,116379,116381,116393,116396,116397,116399,116400,116401,116403,116404,116409,116410,116411,116418,116426,116428,116429,116430,116431,116433,116441,116444,116449,116452,116462,116465,116471,116472,116476,116482,116486,116505,116508,116515,116522,116532,116543,116554,116565,116566,116568,116571,116572,116574,116575,116576,116577,116578,116582,116584,116585,116597,116605,116606,116611,116616,116617,116618,116623,116627,116630,116631,116633,116634,116638,116639,116640,116641,116645,116647,116649,116652,116653,116660,116664,116668,116669,116670,116672,116673,116675,116677,116679,116681,116683,116685,116686,116687,116690,116691,116692,116694,116704,116706,116708,116709,116710,116711,116715,116717,116721,116731,116732,116741,116743,116744,116746,116749,116751,116754,116755,116756,116780,116785,116799,116803,116818,116823,116832,116837,116844,116848,116853,116857,116865,116868,116875,116878,116902,116908,116913,116932,116933,116941,116944,116946,116947,116950,116955,116965,116966,116967,116968,116970,116988,116994,116996,117001,117004,117028,117041,117042,117043,117046,117047,117049,117055,117056,117067,117068,117069,117073,117075,117077,117079,117085,117087,117111,117115,117121,117125,117134,117175,117181,117183,117204,117212,117229,117289,117293,117294,117295,117298,117304,117306,117320,117338,117339,117341,117357,117358,117359,117360,117362,117363,117366,117369,117370,117371,117372,117373,117374,117376,117380,117382,117392,117395,117396,117397,117399,117400,117403,117406,117410,117411,117412,117415,117416,117418,117420,117421,117423,117424,117425,117430,117439,117452,117453,117457,117458,117459,117461,117463,117465,117469,117474,117475,117476,117479,117483,117484,117485,117486,117489,117490,117491,117493,117494,117495,117497,117498,117499,117500,117501,117503,117504,117505,117507,117508,117510,117511,117514,117515,117516,117517,117523,117525,117530,117532,117533,117539,117559,117560,117562,117563,117565,117574,117578,117580,117588,117590,117591,117592,117593,117594,117595,117596,117598,117600,117611,117612,117613,117614,117615,117620,117621,117623,117624,117625,117626,117630,117633,117636,117639,117640,117642,117643,117644,117646,117647,117648,117650,117651,117652,117654,117659,117663,117664,117666,117670,117673,117676,117678,117680,117685,117686,117688,117693,117698,117699,117701,117702,117704,117708,117709,117721,117723,117726,117727,117728,117732,117733,117736,117739,117744,117747,117748,117752,117753,117754,117755,117760,117761,117763,117764,117766,117770,117771,117773,117774,117778,117779,117783,117784,117785,117787,117788,117791,117793,117796,117798,117799,117800,117801,117803,117804,117806,117807,117809,117810,117814,117816,117819,117820,117821,117825,117832,117833,117834,117835,117836,117839,117840,117842,117845,117846,117848,117850,117853,117855,117856,117858,117859,117864,117865,117866,117867,117868,117873,117876,117878,117879,117880,117882,117884,117885,117886,117889,117890,117891,117893,117894,117901,117905,117908,117909,117911,117915,117916,117917,117920,117925,117927,117929,117931,117932,117933,117934,117939,117940,117941,117944,117946,117947,117948,117950,117955,117963,117969,117973,117975,117977,117978,117979,117980,117982,117984,117987,117988,117991,117992,117993,117994,117995,117996,117997,117999,118000,118001,118004,118005,118006,118007,118015,118021,118024,118026,118028,118029,118030,118031,118033,118034,118035,118036,118038,118041,118042,118043,118044,118045,118049,118050,118051,118052,118054,118055,118057,118060,118061,118062,118064,118065,118066,118067,118068,118070,118073,118074,118075,118076,118084,118088,118089,118092,118094,118095,118096,118098,118099,118100,118101,118102,118105,118107,118108,118110,118111,118114,118117,118118,118119,118123,118128,118129,118133,118135,118136,118142,118144,118145,118146,118148,118149,118151,118152,118153,118155,118156,118157,118160,118161,118162,118163,118166,118167,118168,118169,118171,118173,118174,118176,118177,118178,118179,118181,118182,118184,118187,118190,118191,118193,118194,118197,118199,118201,118202,118203,118205,118206,118209,118211,118214,118217,118225,118226,118227,118228,118231,118233,118236,118237,118240,118241,118242,118246,118251,118252,118255,118258,118261,118265,118266,118267,118268,118272,118274,118276,118279,118281,118282,118287,118288,118293,118297,118298,118299,118302,118303,118304,118305,118306,118307,118309,118312,118313,118314,118315,118316,118320,118323,118328,118330,118331,118332,118334,118338,118339,118340,118345,118347,118348,118349,118350,118352,118353,118357,118358,118359,118360,118361,118362,118363,118365,118366,118369,118371,118373,118374,118377,118379,118380,118384,118386,118389,118394,118395,118396,118398,118399,118400,118402,118409,118410,118411,118412,118416,118417,118420,118422,118424,118425,118426,118428,118431,118432,118434,118435,118437,118438,118444,118445,118447,118449,118451,118454,118457,118458,118459,118464,118471,118472,118476,118477,118479,118480,118490,118492,118493,118494,118499,118502,118504,118512,118513,118515,118520,118524,118526,118527,118528,118529,118531,118533,118535,118536,118547,118549,118552,118556,118561,118562,118563,118564,118566,118568,118571,118572,118573,118574,118581,118582,118584,118586,118587,118589,118592,118594,118597,118605,118607,118610,118613,118614,118615,118618,118619,118620,118621,118622,118623,118627,118630,118631,118636,118639,118641,118644,118645,118648,118650,118651,118655,118656,118657,118659,118662,118665,118666,118667,118668,118671,118673,118674,118675,118678,118680,118683,118685,118686,118687,118689,118690,118696,118697,118699,118700,118704,118705,118706,118708,118711,118717,118718,118720,118728,118731,118733,118750,118765,118827,118828,118830,118832,118839,118842,118856,118866,118883,118884,118918,118933,118934,118939,118940,118942,118945,118948,118949,118951,118957,118959,118960,118961,118962,118963,118965,118966,118967,118968,118969,118972,118973,118977,118979,118986,118987,119051,119079,119091,119092,119093,119097,119098,119102,119104,119107,119108,119112,119116,119117,119118,119126,119128,119130,119131,119133,119134,119136,119137,119138,119139,119140,119141,119142,119143,119145,119150,119151,119153,119154,119155,119156,119157,119158,119159,119160,119163,119164,119166,119169,119170,119172,119173,119176,119177,119179,119191,119197,119199,119210,119211,119212,119213,119216,119217,119219,119220,119221,119223,119224,119226,119227,119228,119230,119234,119235,119237,119238,119239,119241,119242,119244,119245,119246,119247,119252,119254,119255,119257,119259,119260,119261,119263,119264,119265,119267,119269,119271,119272,119273,119274,119276,119277,119279,119280,119281,119282,119283,119284,119285,119286,119291,119298,119302,119308,119309,119312,119317,119318,119319,119320,119321,119322,119327,119330,119333,119335,119336,119339,119340,119341,119343,119345,119347,119348,119349,119350,119353,119354,119355,119356,119357,119358,119359,119362,119363,119364,119365,119367,119368,119369,119370,119371,119372,119374,119375,119381,119383,119388,119389,119393,119400,119404,119425,119428,119429,119430,119431,119433,119435,119436,119437,119438,119440,119443,119444,119445,119446,119447,119449,119452,119453,119456,119457,119458,119459,119460,119461,119462,119463,119464,119466,119467,119468,119470,119471,119473,119475,119477,119478,119479,119480,119482,119483,119484,119486,119487,119490,119491,119494,119496,119499,119501,119504,119505,119508,119509,119510,119512,119513,119514,119515,119516,119517,119520,119521,119522,119523,119524,119526,119528,119530,119532,119533,119534,119535,119536,119537,119539,119542,119543,119548,119550,119551,119553,119554,119557,119559,119560,119562,119565,119566,119567,119569,119570,119573,119575,119576,119577,119579,119583,119584,119586,119587,119592,119593,119594,119595,119598,119600,119601,119606,119609,119610,119611,119613,119618,119619,119620,119621,119622,119623,119626,119627,119628,119629,119630,119632,119633,119634,119637,119638,119639,119640,119641,119642,119643,119644,119646,119648,119649,119651,119653,119655,119657,119658,119661,119662,119663,119664,119665,119666,119667,119670,119671,119672,119673,119674,119678,119681,119682,119684,119686,119688,119689,119690,119691,119692,119693,119694,119695,119696,119697,119698,119700,119701,119702,119703,119704,119705,119707,119711,119712,119713,119715,119717,119721,119722,119723,119724,119725,119726,119728,119729,119731,119747,119748,119750,119751,119752,119753,119754,119756,119757,119760,119761,119764,119765,119767,119769,119771,119777,119780,119782,119783,119785,119790,119793,119796,119797,119800,119801,119805,119809,119811,119812,119813,119814,119815,119816,119818,119820,119821,119822,119823,119826,119827,119828,119829,119830,119831,119835,119836,119838,119839,119843,119844,119845,119847,119848,119849,119851,119852,119854,119857,119859,119860,119862,119863,119865,119866,119867,119868,119872,119875,119877,119878,119884,119886,119889,119895,119899,119900,119901,119902,119903,119904,119905,119907,119908,119909,119913,119914,119916,119918,119919,119920,119922,119923,119924,119928,119929,119932,119939,119943,119951,119953,119955,119959,119963,119964,119967,119970,119974,119975,119976,119979,119981,119988,119989,119991,119993,119996,120001,120002,120004,120006,120007,120008,120009,120010,120011,120013,120014,120015,120016,120017,120021,120022,120024,120025,120026,120029,120030,120031,120032,120033,120037,120038,120039,120040,120041,120042,120043,120048,120050,120054,120058,120059,120063,120066,120067,120068,120069,120070,120071,120073,120081,120094,120102,120103,120104,120108,120110,120111,120112,120116,120117,120118,120119,120121,120122,120123,120124,120130,120134,120138,120141,120142,120145,120148,120149,120151,120152,120154,120158,120159,120160,120161,120165,120168,120169,120174,120175,120176,120177,120179,120180,120181,120182,120189,120191,120192,120193,120197,120198,120205,120206,120209,120214,120221,120224,120237,120240,120245,120246,120249,120253,120255,120258,120261,120265,120268,120272,120275,120276,120278,120284,120285,120287,120289,120292,120295,120296,120298,120299,120300,120302,120303,120304,120305,120307,120309,120315,120321,120328,120329,120330,120332,120333,120334,120339,120340,120343,120347,120351,120354,120355,120357,120361,120362,120366,120375,120377,120378,120379,120380,120381,120382,120383,120384,120386,120387,120389,120390,120392,120394,120395,120396,120398,120399,120400,120402,120404,120405,120411,120413,120414,120416,120417,120419,120421,120422,120423,120424,120426,120427,120428,120429,120430,120431,120432,120434,120436,120437,120439,120440,120445,120446,120448,120449,120450,120451,120452,120453,120455,120457,120458,120459,120460,120462,120463,120464,120467,120468,120470,120471,120475,120476,120478,120480,120481,120482,120483,120485,120487,120488,120489,120490,120495,120497,120499,120502,120504,120505,120506,120509,120511,120512,120514,120519,120520,120522,120524,120525,120526,120528,120529,120530,120532,120533,120535,120539,120540,120541,120542,120544,120548,120549,120553,120555,120556,120557,120559,120561,120565,120567,120568,120572,120573,120574,120577,120579,120581,120582,120583,120585,120587,120595,120597,120598,120601,120602,120617,120634,120636,120637,120638,120639,120642,120643,120645,120648,120650,120682,120689,120699,120704,120709,120713,120723,120725,120727,120737,120738,120782,120787,120791,120796,120799,120808,120813,120842,120852,120854,120862,120871,120889,120895,120920,120922,120926,120927,120933,120936,120946,120949,120952,120958,120960,120963,120964,120965,120969,120970,120971,120972,120973,120975,120977,120982,120983,120986,120988,120990,120991,120994,120995,120999,121000,121002,121004,121006,121008,121009,121014,121017,121019,121022,121027,121028,121030,121032,121034,121035,121036,121038,121039,121040,121041,121042,121043,121045,121046,121050,121051,121053,121055,121059,121060,121064,121067,121068,121069,121071,121074,121079,121082,121083,121086,121087,121088,121089,121090,121092,121094,121095,121097,121103,121104,121105,121107,121112,121116,121120,121121,121123,121124,121125,121126,121127,121129,121131,121132,121135,121138,121139,121140,121144,121150,121152,121158,121160,121161,121163,121164,121166,121167,121168,121171,121172,121173,121174,121176,121179,121180,121181,121183,121184,121185,121186,121187,121188,121191,121192,121193,121194,121197,121198,121199,121202,121203,121205,121206,121210,121213,121216,121217,121221,121223,121225,121226,121232,121236,121237,121240,121248,121251,121253,121255,121257,121259,121263,121265,121266,121267,121268,121271,121275,121276,121277,121279,121280,121282,121285,121288,121291,121292,121293,121296,121297,121298,121301,121302,121303,121304,121305,121311,121314,121315,121317,121320,121322,121326,121332,121334,121335,121336,121338,121341,121342,121343,121345,121347,121348,121349,121352,121353,121357,121358,121360,121361,121364,121365,121366,121370,121371,121372,121373,121375,121379,121388,121389,121390,121392,121396,121397,121401,121402,121403,121404,121405,121406,121409,121411,121413,121414,121415,121420,121421,121422,121423,121426,121427,121428,121429,121431,121432,121433,121434,121436,121437,121438,121439,121440,121441,121445,121447,121448,121449,121451,121455,121459,121460,121461,121462,121463,121467,121469,121474,121475,121479,121480,121481,121485,121487,121488,121490,121493,121495,121496,121503,121507,121510,121511,121520,121522,121523,121524,121525,121526,121527,121528,121529,121530,121531,121532,121533,121535,121537,121538,121542,121543,121544,121545,121546,121548,121549,121551,121552,121553,121556,121561,121562,121563,121567,121568,121569,121573,121574,121577,121582,121583,121585,121589,121646,121680,121696,121701,121722,121729,121753,121813,121860,121862,121864,121873,121940,121943,121946,121947,121950,121952,121954,121955,121957,121958,121959,121961,121962,121963,121967,121968,121971,121972,121978,121980,121981,121982,121985,121986,121987,121992,121997,121998,122003,122009,122011,122012,122016,122018,122020,122021,122028,122030,122031,122032,122033,122034,122035,122037,122038,122039,122040,122042,122043,122044,122046,122047,122050,122051,122052,122054,122055,122057,122058,122059,122060,122061,122062,122063,122064,122065,122066,122067,122068,122069,122070,122071,122074,122075,122077,122079,122081,122082,122083,122085,122088,122089,122090,122091,122092,122093,122094,122096,122097,122099,122102,122103,122106,122110,122111,122112,122113,122114,122116,122117,122118,122119,122120,122121,122123,122125,122127,122128,122135,122138,122139,122143,122146,122148,122155,122162,122163,122164,122166,122167,122168,122169,122170,122172,122173,122175,122176,122177,122178,122181,122184,122188,122189,122193,122202,122204,122211,122215,122216,122227,122230,122231,122233,122241,122242,122245,122247,122248,122249,122251,122254,122256,122257,122258,122260,122261,122264,122271,122273,122276,122278,122281,122283,122285,122297,122301,122302,122305,122306,122307,122315,122318,122319,122321,122325,122326,122328,122329,122332,122333,122334,122335,122336,122339,122344,122345,122347,122428,122459,122460,122483,122484,122486,122488,122489,122490,122491,122493,122495,122496,122497,122538,122572,122573,122618,122658,122661,122672,122684,122687,122689,122690,122693,122697,122698,122699,122701,122704,122706,122707,122708,122712,122713,122714,122715,122716,122717,122718,122719,122721,122724,122727,122728,122729,122730,122732,122740,122746,122761,122762,122763,122764,122765,122766,122767,122768,122769,122771,122772,122774,122776,122777,122778,122779,122780,122782,122809,122810,122812,122814,122818,122819,122824,122826,122827,122829,122831,122833,122834,122843,122844,122845,122846,122847,122850,122854,122855,122856,122858,122859,122860,122862,122868,122869,122871,122873,122874,122875,122878,122879,122882,122883,122884,122886,122887,122888,122889,122890,122891,122894,122897,122902,122904,122905,122908,122909,122914,122917,122921,122924,122925,122929,122932,122938,122939,122941,122942,122944,122945,122949,122953,122958,122960,122977,122990,122991,122995,122996,122997,123005,123010,123020,123023,123024,123035,123036,123040,123044,123047,123049,123053,123057,123062,123063,123064,123066,123067,123068,123072,123078,123081,123082,123084,123088,123089,123090,123091,123093,123094,123096,123100,123101,123105,123107,123113,123117,123118,123122,123124,123125,123126,123127,123131,123132,123133,123146,123148,123149,123152,123153,123157,123159,123160,123177,123181,123182,123183,123185,123186,123191,123196,123197,123201,123203,123206,123210,123211,123215,123225,123226,123229,123231,123232,123234,123235,123238,123241,123242,123267,123268,123299,123302,123307,123355,123358,123359,123360,123361,123381,123382,123383,123384,123385,123386,123387,123388,123390,123392,123410,123411,123412,123413,123414,123418,123424,123426,123429,123434,123435,123437,123438,123439,123441,123442,123446,123448,123450,123455,123456,123457,123461,123462,123463,123466,123467,123468,123471,123472,123474,123476,123481,123482,123483,123484,123488,123489,123493,123497,123499,123500,123505,123506,123509,123511,123521,123535,123536,123543,123547,123554,123556,123563,123564,123567,123570,123576,123578,123580,123586,123588,123589,123590,123591,123592,123593,123594,123595,123597,123600,123601,123604,123607,123609,123611,123614,123615,123619,123620,123621,123622,123623,123624,123626,123630,123634,123635,123636,123638,123640,123641,123642,123643,123644,123646,123651,123653,123655,123656,123658,123659,123661,123669,123680,123684,123687,123691,123697,123702,123709,123716,123717,123718,123719,123720,123721,123722,123723,123724,123725,123726,123729,123730,123733,123734,123735,123745,123746,123749,123751,123753,123754,123755,123756,123759,123760,123763,123764,123766,123767,123768,123769,123770,123774,123775,123778,123779,123782,123784,123785,123786,123787,123788,123790,123802,123804,123805,123807,123808,123809,123812,123815,123816,123817,123820,123822,123823,123825,123827,123829,123830,123833,123839,123840,123841,123842,123844,123846,123848,123849,123850,123851,123852,123856,123857,123858,123859,123860,123861,123862,123863,123865,123866,123867,123870,123871,123878,123879,123880,123881,123882,123883,123884,123887,123888,123889,123892,123895,123896,123897,123898,123902,123905,123906,123907,123908,123909,123910,123911,123914,123919,123921,123923,123929,123930,123931,123936,123938,123941,123948,123949,123951,123952,123953,123956,123972,123973,123975,123977,123980,123985,123987,123988,123989,123990,123992,123993,123997,123999,124000,124001,124002,124003,124006,124008,124010,124011,124020,124022,124023,124026,124027,124029,124031,124032,124033,124034,124035,124036,124038,124040,124052,124054,124055,124056,124058,124059,124063,124069,124072,124073,124077,124078,124079,124105,124118,124124,124170,124232,124233,124234,124236,124237,124249,124250,124252,124256,124257,124261,124262,124263,124266,124267,124270,124271,124272,124273,124274,124276,124277,124280,124281,124283,124287,124290,124291,124293,124295,124297,124305,124326,124329,124330,124331,124332,124334,124338,124340,124342,124345,124347,124348,124349,124351,124352,124354,124355,124356,124358,124360,124367,124368,124374,124385,124386,124396,124400,124403,124410,124420,124434,124456,124458,124460,124461,124462,124465,124466,124468,124470,124472,124474,124481,124483,124487,124491,124495,124516,124521,124540,124545,124553,124557,124558,124560,124564,124566,124578,124582,124584,124585,124590,124593,124619,124626,124627,124633,124634,124641,124644,124661,124663,124672,124678,124692,124700,124716,124717,124722,124723,124724,124725,124727,124728,124732,124733,124734,124740,124741,124745,124751,124753,124757,124764,124767,124775,124780,124782,124798,124802,124807,124810,124821,124824,124831,124833,124834,124837,124839,124840,124841,124842,124846,124850,124854,124855,124858,124860,124861,124862,124865,124866,124871,124872,124875,124876,124881,124890,124891,124892,124893,124898,124899,124902,124903,124907,124913,124921,124924,124928,124934,124936,124944,124945,124947,124949,124950,124951,124952,124954,124956,124957,124959,124960,124968,124969,124970,124973,124974,124977,124978,124979,124981,124983,124988,124990,124994,124996,124998,125000,125004,125006,125007,125011,125013,125019,125022,125024,125032,125037,125038,125039,125043,125045,125048,125049,125050,125051,125057,125059,125062,125063,125064,125066,125067,125069,125070,125073,125074,125075,125076,125077,125079,125081,125082,125084,125085,125092,125093,125094,125095,125096,125097,125099,125102,125104,125116,125117,125118,125119,125121,125123,125124,125126,125127,125128,125129,125131,125133,125147,125152,125153,125154,125157,125160,125161,125163,125164,125185,125187,125195,125202,125203,125204,125205,125206,125207,125208,125211,125212,125214,125216,125223,125224,125225,125227,125228,125229,125232,125234,125235,125237,125238,125239,125241,125243,125244,125245,125249,125252,125254,125257,125259,125266,125267,125268,125270,125274,125277,125279,125295,125296,125297,125298,125301,125307,125311,125314,125315,125329,125342,125343,125345,125349,125350,125351,125352,125353,125356,125359,125366,125367,125368,125369,125370,125377,125379,125380,125382,125383,125385,125386,125389,125390,125391,125394,125396,125399,125400,125401,125402,125403,125404,125412,125413,125414,125417,125418,125419,125420,125423,125426,125429,125432,125434,125435,125439,125440,125441,125442,125444,125446,125448,125449,125451,125453,125454,125456,125459,125461,125463,125466,125473,125479,125484,125485,125487,125489,125490,125494,125497,125500,125501,125503,125505,125509,125513,125514,125515,125519,125520,125521,125522,125523,125525,125526,125527,125528,125529,125532,125534,125535,125538,125541,125542,125543,125545,125546,125550,125551,125553,125554,125555,125556,125560,125562,125574,125576,125580,125583,125592,125593,125595,125596,125597,125598,125599,125600,125603,125604,125606,125610,125614,125617,125619,125621,125622,125623,125624,125625,125627,125629,125631,125632,125633,125634,125636,125638,125641,125644,125645,125649,125652,125653,125654,125655,125658,125659,125660,125664,125665,125669,125674,125675,125677,125680,125682,125683,125684,125690,125693,125695,125700,125703,125706,125708,125709,125711,125712,125722,125724,125727,125728,125731,125734,125737,125740,125741,125743,125745,125749,125750,125761,125762,125763,125764,125765,125767,125768,125778,125779,125781,125784,125793,125794,125797,125798,125799,125802,125803,125804,125805,125806,125814,125817,125818,125819,125821,125824,125827,125828,125829,125830,125831,125833,125834,125837,125846,125848,125850,125851,125852,125853,125858,125861,125862,125864,125870,125871,125872,125873,125874,125876,125877,125878,125879,125880,125882,125883,125884,125886,125887,125888,125889,125891,125894,125898,125902,125907,125908,125910,125917,125918,125919,125921,125924,125925,125926,125927,125929,125930,125935,125936,125937,125945,125946,125949,125953,125954,125955,125956,125957,125960,125961,125963,125964,125966,125968,125969,125970,125972,125976,125977,125980,125981,125982,125984,125986,125990,125993,126001,126008,126009,126014,126015,126016,126025,126027,126028,126029,126030,126031,126036,126037,126039,126041,126042,126046,126047,126048,126050,126051,126053,126054,126055,126059,126060,126061,126064,126068,126070,126071,126073,126074,126076,126077,126078,126080,126083,126084,126085,126091,126094,126095,126097,126100,126101,126106,126107,126108,126110,126111,126113,126114,126115,126116,126117,126120,126121,126124,126128,126129,126130,126132,126133,126134,126135,126136,126137,126138,126139,126140,126142,126143,126148,126149,126150,126151,126152,126154,126155,126158,126160,126163,126164,126165,126166,126169,126173,126174,126176,126177,126178,126179,126180,126181,126182,126184,126186,126187,126194,126198,126200,126201,126202,126204,126206,126207,126209,126212,126216,126218,126219,126221,126224,126229,126231,126232,126234,126236,126238,126239,126240,126241,126243,126244,126247,126253,126255,126256,126260,126265,126268,126273,126274,126276,126277,126278,126279,126280,126284,126285,126286,126287,126289,126290,126291,126294,126296,126297,126298,126299,126300,126302,126304,126305,126306,126307,126308,126310,126312,126313,126319,126320,126322,126323,126324,126326,126327,126331,126335,126336,126337,126340,126341,126342,126344,126345,126349,126352,126353,126354,126357,126362,126364,126366,126368,126374,126379,126380,126386,126388,126389,126390,126391,126394,126395,126398,126401,126405,126408,126409,126411,126415,126418,126421,126422,126423,126424,126425,126426,126427,126429,126433,126434,126435,126436,126437,126438,126439,126440,126443,126444,126445,126446,126447,126451,126455,126456,126457,126458,126459,126466,126468,126470,126472,126473,126477,126478,126479,126481,126482,126484,126488,126489,126495,126496,126498,126499,126500,126502,126504,126506,126508,126509,126510,126511,126512,126513,126514,126516,126517,126521,126523,126525,126528,126532,126535,126537,126539,126541,126542,126544,126547,126548,126550,126551,126554,126556,126557,126558,126559,126560,126561,126563,126565,126566,126567,126570,126571,126574,126576,126577,126579,126582,126583,126586,126587,126588,126591,126592,126593,126594,126595,126596,126597,126598,126600,126601,126602,126604,126606,126609,126613,126614,126615,126616,126617,126619,126620,126621,126622,126623,126624,126625,126626,126633,126634,126635,126636,126637,126643,126644,126645,126646,126647,126649,126650,126651,126653,126658,126659,126660,126661,126664,126665,126671,126672,126673,126677,126678,126680,126681,126689,126690,126691,126692,126695,126698,126699,126700,126703,126707,126708,126710,126711,126714,126718,126719,126720,126721,126724,126725,126726,126733,126735,126736,126737,126739,126740,126741,126743,126744,126746,126747,126748,126749,126750,126752,126755,126756,126757,126758,126764,126767,126768,126769,126772,126773,126779,126781,126784,126785,126788,126789,126791,126792,126793,126794,126797,126798,126799,126801,126804,126807,126811,126816,126817,126819,126820,126821,126822,126824,126825,126826,126827,126828,126830,126834,126837,126838,126839,126848,126851,126854,126855,126857,126863,126865,126866,126867,126868,126872,126878,126882,126883,126884,126885,126888,126889,126890,126892,126893,126895,126896,126899,126902,126903,126904,126905,126908,126909,126911,126915,126917,126918,126919,126920,126924,126926,126928,126929,126931,126936,126937,126939,126940,126941,126943,126944,126950,126951,126952,126953,126954,126958,126959,126961,126966,126967,126968,126971,126974,126976,126977,126979,126980,126982,126985,126988,126989,126990,126993,126995,126997,127001,127002,127009,127011,127012,127013,127017,127020,127027,127033,127038,127040,127042,127043,127047,127049,127050,127051,127054,127055,127058,127060,127061,127062,127063,127064,127066,127067,127069,127070,127075,127092,127094,127095,127098,127099,127100,127101,127102,127106,127107,127109,127111,127114,127117,127121,127123,127124,127125,127129,127132,127133,127134,127136,127137,127139,127140,127142,127143,127144,127145,127148,127150,127152,127156,127158,127159,127160,127161,127165,127169,127170,127172,127173,127175,127177,127179,127180,127183,127184,127186,127187,127188,127189,127192,127193,127195,127196,127199,127201,127202,127206,127208,127209,127213,127215,127216,127217,127218,127283,127286,127287,127288,127290,127293,127294,127296,127297,127298,127301,127302,127303,127307,127308,127309,127310,127312,127313,127314,127315,127316,127322,127323,127324,127326,127327,127328,127329,127333,127334,127336,127337,127339,127342,127343,127344,127346,127347,127350,127351,127352,127353,127354,127356,127357,127359,127360,127362,127363,127365,127367,127368,127369,127370,127371,127373,127374,127375,127376,127380,127381,127382,127384,127385,127386,127389,127392,127393,127396,127397,127401,127405,127410,127411,127412,127414,127417,127418,127425,127426,127437,127439,127440,127441,127446,127457,127463,127465,127467,127472,127481,127482,127487,127488,127491,127492,127493,127494,127496,127497,127498,127500,127503,127506,127508,127509,127510,127512,127513,127514,127515,127516,127517,127518,127521,127523,127524,127527,127528,127530,127532,127534,127535,127536,127537,127538,127539,127540,127541,127542,127543,127544,127545,127547,127548,127549,127550,127551,127553,127556,127557,127559,127561,127562,127563,127564,127565,127566,127567,127570,127571,127573,127575,127576,127577,127581,127583,127586,127587,127588,127590,127592,127593,127596,127597,127598,127599,127604,127605,127606,127607,127608,127610,127611,127612,127613,127614,127617,127619,127620,127623,127625,127626,127627,127628,127630,127634,127637,127638,127639,127641,127646,127647,127649,127650,127651,127653,127654,127656,127657,127659,127660,127661,127662,127667,127668,127669,127672,127675,127678,127679,127680,127683,127686,127687,127689,127690,127693,127694,127696,127700,127701,127702,127703,127704,127705,127707,127709,127710,127712,127713,127715,127717,127719,127720,127725,127728,127729,127730,127733,127734,127737,127746,127747,127749,127753,127754,127755,127756,127758,127759,127762,127769,127770,127771,127772,127773,127778,127779,127782,127785,127787,127795,127797,127798,127800,127801,127802,127804,127806,127807,127811,127813,127822,127823,127825,127826,127827,127828,127830,127832,127833,127838,127842,127843,127847,127855,127856,127857,127858,127859,127860,127861,127863,127864,127866,127870,127873,127877,127881,127883,127884,127885,127887,127889,127900,127904,127907,127918,127920,127921,127926,127930,127932,127933,127941,127942,127949,127954,127955,127956,127959,127961,127962,127963,127965,127969,127970,127975,127976,127980,127988,128006,128007,128011,128015,128017,128021,128022,128026,128028,128030,128031,128032,128033,128034,128037,128039,128040,128041,128042,128044,128045,128046,128050,128051,128052,128055,128057,128058,128061,128063,128064,128065,128067,128068,128069,128071,128072,128073,128074,128076,128077,128078,128082,128088,128096,128098,128100,128103,128104,128106,128107,128108,128111,128116,128118,128121,128128,128130,128131,128132,128134,128135,128139,128140,128142,128143,128144,128145,128146,128150,128154,128155,128156,128158,128160,128161,128164,128167,128168,128169,128170,128171,128172,128173,128174,128175,128178,128179,128180,128181,128182,128183,128184,128188,128197,128198,128201,128202,128203,128204,128205,128208,128210,128211,128212,128214,128216,128218,128219,128220,128231,128232,128237,128238,128239,128240,128244,128249,128257,128258,128259,128264,128266,128267,128279,128281,128283,128284,128285,128287,128288,128291,128293,128294,128299,128301,128305,128306,128309,128310,128311,128312,128313,128314,128319,128323,128324,128328,128335,128336,128338,128339,128343,128344,128345,128348,128349,128359,128360,128361,128363,128368,128369,128370,128372,128374,128375,128376,128377,128379,128380,128383,128384,128388,128389,128390,128391,128392,128393,128395,128397,128401,128403,128404,128406,128414,128417,128419,128421,128422,128424,128425,128426,128427,128428,128429,128430,128431,128432,128433,128434,128435,128436,128438,128439,128440,128441,128442,128443,128444,128446,128447,128450,128451,128454,128455,128456,128457,128459,128461,128462,128463,128469,128470,128471,128472,128473,128474,128475,128476,128478,128479,128483,128484,128486,128487,128488,128490,128491,128492,128493,128494,128495,128498,128499,128500,128501,128504,128507,128508,128509,128510,128513,128514,128515,128518,128522,128523,128524,128526,128527,128528,128530,128538,128540,128541,128548,128550,128552,128554,128556,128558,128561,128562,128563,128564,128569,128570,128571,128572,128581,128594,128595,128601,128602,128603,128608,128609,128610,128611,128612,128613,128616,128617,128620,128621,128622,128623,128624,128625,128626,128627,128629,128632,128633,128666,128667,128668,128672,128674,128676,128678,128679,128680,128681,128684,128688,128691,128692,128694,128695,128696,128697,128698,128708,128709,128719,128720,128721,128723,128725,128726,128727,128730,128740,128741,128742,128743,128744,128756,128757,128758,128759,128762,128763,128764,128765,128766,128767,128768,128777,128779,128780,128782,128783,128785,128788,128792,128794,128798,128802,128809,128810,128812,128821,128824,128825,128826,128828,128829,128834,128835,128837,128838,128839,128841,128842,128844,128846,128848,128849,128855,128856,128857,128858,128860,128861,128863,128866,128868,128870,128871,128878,128879,128880,128881,128882,128884,128885,128886,128888,128889,128891,128893,128895,128897,128900,128901,128908,128909,128910,128915,128927,128933,128945,128946,128947,128948,128949,128950,128952,128953,128954,128956,128957,128959,128960,128961,128962,128964,128965,128966,128967,128968,128969,128971,128973,128974,128977,128979,128984,128985,128986,128987,128992,128993,128994,128995,128996,128997,128998,129002,129003,129006,129007,129008,129009,129012,129013,129014,129016,129018,129019,129021,129022,129023,129024,129027,129028,129029,129030,129031,129032,129033,129034,129037,129039,129040,129042,129043,129045,129048,129050,129051,129053,129054,129057,129059,129060,129063,129064,129065,129066,129068,129069,129070,129071,129072,129073,129074,129075,129076,129077,129078,129079,129081,129082,129083,129084,129085,129086,129087,129088,129089,129090,129091,129092,129093,129094,129097,129099,129100,129101,129107,129109,129110,129112,129113,129115,129116,129117,129119,129121,129122,129123,129124,129125,129127,129128,129129,129130,129132,129135,129137,129140,129141,129144,129146,129147,129149,129152,129153,129154,129155,129158,129159,129160,129161,129162,129163,129164,129165,129166,129168,129169,129170,129171,129172,129175,129177,129178,129179,129180,129181,129182,129183,129184,129185,129186,129188,129189,129190,129191,129196,129197,129198,129204,129207,129209,129212,129213,129215,129218,129219,129220,129221,129222,129223,129224,129225,129226,129227,129228,129229,129231,129233,129234,129235,129236,129237,129238,129239,129240,129242,129244,129247,129248,129251,129252,129253,129257,129260,129262,129264,129265,129266,129268,129269,129270,129271,129272,129274,129277,129278,129279,129280,129281,129283,129284,129285,129286,129287,129289,129290,129292,129295,129296,129297,129298,129303,129305,129306,129307,129308,129309,129310,129311,129313,129314,129315,129317,129318,129319,129320,129321,129323,129324,129326,129330,129332,129333,129334,129336,129337,129339,129340,129341,129343,129344,129345,129346,129359,129360,129361,129362,129363,129364,129365,129366,129367,129368,129369,129370,129372,129375,129377,129378,129380,129381,129382,129396,129397,129398,129399,129400,129402,129403,129404,129408,129422,129452,129453,129454,129455,129456,129459,129461,129462,129465,129466,129467,129468,129475,129476,129477,129479,129480,129481,129482,129483,129488,129490,129493,129494,129497,129498,129499,129501,129502,129504,129505,129507,129508,129510,129511,129512,129513,129514,129521,129526,129529,129556,129560,129563,129569,129570,129575,129577,129595,129596,129598,129600,129613,129619,129625,129627,129629,129641,129658,129829,129833,129844,129929,129938,129952,129954,129955,129957,129958,129959,129961,129963,129964,129966,129979,129980,129981,129982,129983,129985,129986,129990,129992,129993,129995,129997,129998,130001,130003,130004,130005,130009,130010,130011,130015,130021,130023,130026,130027,130031,130034,130036,130037,130038,130039,130040,130041,130042,130044,130045,130051,130053,130057,130060,130062,130063,130069,130070,130071,130073,130074,130079,130080,130081,130090,130092,130093,130095,130096,130099,130102,130103,130106,130107,130112,130115,130116,130119,130120,130123,130124,130126,130127,130129,130130,130131,130136,130137,130138,130139,130140,130142,130143,130144,130145,130146,130147,130148,130149,130150,130151,130152,130153,130154,130155,130156,130157,130158,130159,130160,130161,130163,130164,130165,130166,130167,130168,130171,130173,130175,130180,130192,130193,130194,130195,130197,130198,130200,130201,130202,130205,130206,130207,130209,130213,130215,130216,130217,130218,130219,130221,130223,130235,130236,130239,130241,130244,130248,130258,130260,130261,130262,130263,130266,130267,130269,130271,130272,130279,130280,130282,130283,130284,130285,130286,130288,130289,130290,130291,130292,130297,130298,130300,130301,130303,130304,130305,130315,130316,130317,130318,130319,130320,130321,130323,130325,130326,130327,130328,130334,130335,130336,130347,130354,130355,130357,130361,130362,130363,130364,130366,130367,130368,130372,130373,130374,130382,130383,130391,130392,130395,130396,130398,130400,130406,130407,130408,130411,130412,130414,130415,130417,130431,130437,130446,130449,130454,130455,130456,130461,130462,130463,130464,130467,130468,130469,130470,130471,130472,130476,130478,130483,130485,130486,130487,130489,130491,130493,130495,130496,130502,130504,130505,130506,130507,130508,130509,130511,130514,130518,130519,130523,130524,130527,130530,130531,130532,130533,130536,130537,130538,130540,130542,130545,130547,130548,130549,130551,130558,130559,130560,130563,130564,130565,130568,130571,130572,130573,130574,130575,130576,130586,130598,130607,130608,130609,130612,130614,130616,130617,130622,130623,130624,130626,130627,130628,130631,130632,130634,130635,130636,130637,130638,130640,130652,130653,130654,130656,130658,130662,130665,130667,130668,130671,130672,130675,130676,130678,130679,130680,130681,130684,130685,130693,130708,130709,130710,130711,130714,130715,130716,130718,130720,130721,130722,130727,130728,130729,130736,130745,130761,130763,130764,130767,130768,130770,130771,130774,130785,130794,130796,130797,130800,130801,130802,130804,130805,130807,130808,130809,130811,130812,130816,130817,130820,130823,130825,130828,130829,130830,130831,130832,130834,130835,130861,130862,130865,130870,130871,130873,130878,130882,130884,130886,130890,130905,130911,130913,130918,130932,130940,130942,130943,130944,130946,130947,130951,130952,130953,130954,130957,130958,130960,130961,130968,130974,130978,130987,130989,130992,130993,130994,130995,130996,131001,131003,131004,131007,131014,131015,131016,131018,131019,131021,131025,131027,131028,131029,131034,131038,131039,131040,131043,131045,131051,131052,131055,131057,131058,131060,131063,131064,131065,131066,131067,131068,131069,131070,131071,131072,131073,131077,131080,131083,131087,131089,131090,131092,131094,131096,131098,131099,131117,131119,131136,131147,131151,131153,131154,131171,131172,131174,131175,131185,131186,131189,131193,131198,131202,131212,131233,131237,131252,131254,131255,131257,131259,131270,131271,131272,131275,131277,131284,131286,131287,131290,131291,131293,131294,131296,131297,131298,131299,131300,131303,131304,131305,131307,131309,131310,131314,131315,131317,131318,131324,131328,131332,131334,131335,131336,131337,131338,131341,131342,131345,131347,131349,131350,131351,131358,131360,131362,131363,131364,131365,131375,131378,131379,131380,131381,131382,131383,131384,131385,131387,131393,131394,131395,131396,131399,131400,131402,131403,131404,131415,131418,131433,131440,131445,131446,131454,131458,131459,131476,131485,131489,131493,131494,131501,131503,131508,131511,131513,131517,131519,131522,131530,131556,131557,131558,131563,131583,131587,131588,131590,131591,131595,131599,131603,131609,131610,131612,131628,131638,131639,131640,131647,131650,131667,131692,131707,131710,131723,131728,131731,131735,131736,131737,131739,131742,131743,131744,131745,131747,131750,131751,131753,131754,131761,131762,131766,131767,131770,131773,131774,131775,131777,131778,131779,131786,131788,131792,131802,131806,131807,131809,131810,131812,131814,131815,131842,131844,131847,131854,131856,131857,131859,131862,131864,131865,131868,131869,131870,131871,131872,131878,131891,131897,131907,131910,131911,131912,131916,131924,131925,131926,131929,131933,131934,131936,131938,131939,131947,131948,131949,131950,131952,131953,131955,131956,131957,131960,131962,131965,131966,131968,131972,131974,131977,131978,131988,131990,131991,131992,132019,132021,132022,132023,132025,132026,132027,132028,132030,132031,132032,132033,132034,132035,132036,132037,132038,132039,132040,132041,132043,132048,132049,132059,132060,132061,132062,132063,132064,132065,132066,132067,132068,132069,132070,132071,132072,132073,132074,132075,132076,132077,132078,132081,132082,132084,132087,132088,132092,132098,132109,132110,132118,132122,132126,132127,132128,132129,132130,132134,132138,132139,132140,132142,132144,132145,132147,132148,132149,132150,132151,132152,132153,132155,132156,132157,132158,132160,132167,132169,132172,132179,132180,132182,132184,132186,132188,132189,132191,132192,132193,132195,132196,132198,132199,132201,132202,132209,132210,132213,132214,132215,132216,132217,132218,132219,132220,132221,132222,132223,132224,132225,132227,132228,132229,132230,132232,132233,132239,132243,132244,132245,132246,132247,132250,132254,132258,132260,132262,132266,132269,132270,132276,132277,132278,132279,132280,132281,132284,132286,132287,132288,132289,132290,132291,132292,132293,132294,132295,132296,132299,132300,132302,132307,132308,132310,132312,132313,132315,132316,132317,132318,132322,132323,132327,132328,132329,132330,132331,132333,132334,132336,132337,132338,132341,132342,132344,132346,132347,132348,132349,132351,132352,132354,132356,132357,132358,132359,132361,132362,132363,132365,132366,132367,132368,132369,132370,132371,132372,132373,132374,132377,132378,132380,132381,132382,132383,132385,132386,132387,132388,132389,132392,132394,132395,132397,132398,132399,132400,132401,132402,132403,132404,132405,132406,132407,132408,132409,132410,132411,132412,132414,132415,132416,132417,132418,132419,132421,132422,132423,132424,132425,132428,132429,132432,132433,132434,132435,132436,132437,132438,132439,132441,132442,132443,132444,132445,132446,132447,132449,132450,132452,132454,132455,132456,132457,132458,132459,132460,132461,132462,132464,132465,132466,132469,132470,132471,132473,132474,132476,132478,132480,132481,132482,132483,132484,132486,132490,132494,132496,132497,132498,132499,132500,132501,132502,132503,132504,132506,132507,132508,132509,132510,132511,132513,132514,132515,132516,132517,132518,132520,132524,132527,132528,132531,132532,132533,132535,132536,132537,132538,132540,132541,132542,132543,132544,132546,132547,132548,132549,132553,132554,132555,132556,132557,132558,132559,132560,132561,132562,132563,132564,132565,132566,132567,132568,132570,132571,132573,132574,132575,132576,132578,132581,132582,132583,132584,132585,132586,132587,132588,132589,132590,132592,132593,132594,132595,132597,132598,132599,132600,132601,132604,132605,132607,132608,132609,132610,132611,132612,132613,132614,132615,132616,132617,132618,132619,132623,132624,132625,132626,132627,132629,132630,132631,132632,132633,132634,132635,132636,132637,132638,132639,132642,132643,132644,132645,132646,132647,132651,132652,132653,132654,132655,132656,132657,132658,132659,132661,132662,132663,132665,132666,132668,132669,132670,132671,132672,132673,132674,132675,132676,132678,132679,132681,132682,132683,132684,132685,132688,132689,132690,132691,132693,132694,132696,132697,132698,132699,132700,132701,132702,132703,132704,132706,132707,132709,132710,132711,132712,132713,132714,132715,132716,132717,132718,132719,132720,132721,132722,132723,132724,132725,132726,132727,132728,132729,132731,132732,132733,132734,132735,132736,132737,132738,132740,132741,132742,132744,132745,132746,132747,132748,132749,132750,132751,132752,132753,132754,132755,132756,132757,132758,132759,132760,132762,132763,132764,132765,132767,132768,132769,132770,132771,132772,132773,132775,132777,132779,132781,132782,132784,132785,132786,132787,132788,132789,132790,132791,132794,132795,132796,132797,132799,132800,132801,132802,132804,132805,132807,132808,132810,132812,132813,132814,132815,132816,132817,132818,132819,132820,132821,132822,132824,132825,132826,132829,132834,132835,132836,132837,132839,132841,132842,132843,132845,132846,132847,132849,132850,132851,132852,132853,132854,132855,132856,132858,132861,132862,132863,132864,132865,132866,132867,132868,132869,132870,132871,132872,132874,132875,132876,132877,132878,132879,132880,132881,132882,132884,132885,132886,132887,132889,132890,132891,132892,132893,132895,132896,132897,132898,132899,132900,132901,132903,132904,132905,132908,132910,132912,132913,132915,132916,132917,132920,132921,132923,132924,132925,132927,132928,132930,132931,132932,132933,132934,132935,132938,132939,132940,132941,132943,132944,132945,132946,132947,132948,132949,132950,132951,132952,132953,132956,132957,132958,132959,132960,132961,132962,132963,132964,132965,132966,132967,132968,132969,132970,132971,132972,132973,132974,132975,132980,132981,132982,132983,132984,132985,132986,132990,132992,132993,132998,133002,133008,133009,133010,133013,133015,133016,133017,133018,133019,133020,133021,133022,133023,133024,133027,133029,133030,133031,133032,133033,133034,133035,133041,133042,133043,133046,133047,133050,133051,133052,133054,133055,133056,133061,133062,133064,133065,133068,133070,133071,133072,133073,133075,133076,133077,133078,133079,133080,133081,133082,133083,133084,133085,133086,133087,133089,133091,133092,133093,133094,133095,133096,133097,133098,133099,133100,133101,133102,133103,133104,133105,133106,133107,133108,133109,133111,133112,133113,133118,133121,133122,133123,133124,133125,133128,133131,133132,133133,133134,133135,133138,133139,133140,133141,133142,133143,133144,133146,133147,133148,133149,133150,133151,133153,133154,133155,133157,133158,133159,133160,133161,133162,133163,133165,133167,133168,133170,133171,133172,133174,133175,133176,133177,133178,133179,133180,133182,133184,133185,133186,133187,133188,133189,133191,133193,133196,133199,133202,133203,133206,133208,133209,133210,133211,133212,133213,133214,133215,133218,133220,133221,133229,133230,133231,133232,133233,133236,133237,133238,133239,133241,133242,133245,133246,133248,133249,133250,133251,133253,133254,133256,133258,133259,133260,133262,133263,133264,133265,133267,133269,133270,133271,133273,133274,133275,133276,133277,133278,133279,133280,133281,133282,133283,133285,133286,133287,133288,133289,133290,133291,133292,133294,133296,133297,133299,133301,133302,133303,133304,133305,133306,133307,133308,133310,133311,133312,133313,133320,133323,133331,133332,133333,133338,133347,133350,133351,133352,133353,133354,133355,133356,133358,133359,133362,133363,133364,133365,133366,133367,133368,133369,133371,133374,133376,133377,133378,133380,133382,133385,133386,133388,133389,133390,133391,133392,133394,133396,133398,133400,133402,133403,133404,133409,133411,133412,133413,133414,133415,133416,133417,133418,133419,133420,133422,133423,133424,133425,133426,133427,133430,133431,133432,133433,133434,133435,133438,133439,133441,133442,133443,133444,133445,133446,133448,133449,133450,133451,133453,133454,133455,133456,133457,133458,133459,133460,133461,133462,133463,133464,133465,133466,133467,133468,133470,133471,133472,133473,133474,133475,133477,133479,133485,133487,133488,133493,133495,133496,133499,133501,133502,133504,133505,133509,133511,133525,133528,133532,133534,133535,133537,133539,133540,133542,133543,133544,133545,133546,133548,133549,133550,133551,133552,133553,133554,133555,133556,133557,133558,133559,133560,133561,133562,133563,133564,133565,133566,133567,133568,133570,133571,133573,133574,133575,133576,133577,133578,133579,133582,133583,133584,133585,133588,133589,133590,133591,133592,133593,133594,133598,133599,133600,133601,133602,133607,133609,133611,133612,133613,133614,133615,133623,133624,133625,133626,133627,133630,133631,133633,133634,133635,133639,133643,133644,133645,133647,133648,133649,133650,133652,133653,133658,133659,133661,133664,133665,133667,133668,133671,133672,133673,133674,133676,133677,133678,133679,133680,133681,133682,133683,133684,133686,133687,133688,133689,133690,133691,133692,133693,133694,133696,133697,133698,133699,133702,133703,133708,133709,133710,133711,133712,133713,133714,133715,133716,133717,133718,133719,133720,133722,133724,133725,133727,133728,133730,133731,133732,133733,133736,133738,133739,133740,133743,133744,133745,133746,133747,133748,133749,133750,133752,133800,133805,133808,133810,133811,133814,133818,133819,133820,133824,133833,133837,133842,133843,133852,133855,133856,133857,133858,133861,133862,133863,133864,133865,133866,133867,133868,133869,133870,133899,133904,133908,133909,133911,133913,133915,133916,133917,133922,133926,133948,133956,133957,133960,133961,133996,134004,134021,134022,134023,134024,134025,134026,134027,134029,134030,134031,134032,134033,134034,134035,134036,134037,134038,134039,134040,134041,134042,134043,134044,134048,134049,134052,134055,134059,134066,134067,134116,134117,134118,134119,134120,134121,134122,134123,134124,134125,134126,134127,134130,134131,134132,134133,134134,134136,134138,134139,134140,134141,134142,134143,134144,134145,134146,134147,134148,134149,134150,134164,134181,134222,134253,134281,134282,134283,134284,134286,134287,134288,134289,134290,134291,134292,134293,134294,134295,134296,134302,134333,134334,134336,134338,134339,134340,134341,134342,134343,134344,134345,134349,134350,134351,134354,134355,134356,134357,134358,134360,134361,134362,134370,134371,134375,134398,134400,134403,134406,134408,134409,134410,134411,134412,134413,134414,134415,134416,134417,134419,134421,134422,134424,134425,134426,134427,134428,134429,134430,134432,134433,134434,134435,134436,134437,134439,134442,134443,134444,134447,134450,134451,134452,134453,134454,134455,134459,134464,134465,134466,134467,134468,134469,134470,134471,134472,134473,134474,134475,134476,134477,134478,134479,134480,134481,134482,134483,134486,134488,134489,134491,134492,134493,134496,134497,134498,134499,134500,134501,134502,134504,134506,134507,134508,134509,134512,134514,134515,134517,134518,134519,134520,134521,134522,134523,134524,134525,134526,134527,134529,134530,134531,134532,134533,134535,134536,134537,134538,134539,134540,134541,134542,134543,134544,134545,134546,134547,134548,134549,134550,134552,134553,134554,134555,134558,134559,134560,134561,134562,134563,134564,134565,134566,134567,134569,134570,134571,134572,134573,134679,134680,134681,134688,134689,134690,134691,134692,134693,134694,134695,134696,134697,134698,134700,134701,134702,134703,134705,134706,134707,134708,134709,134710,134711,134712,134713,134714,134715,134716,134719,134720,134721,134722,134723,134724,134725,134726,134727,134728,134729,134730,134731,134732,134733,134734,134735,134736,134737,134738,134739,134740,134741,134742,134743,134744,134745,134746,134747,134748,134749,134750,134751,134752,134753,134754,134755,134756,134757,134758,134759,134760,134761,134762,134763,134765,134766,134767,134768,134769,134770,134771,134773,134774,134775,134776,134777,134778,134780,134781,134782,134783,134784,134785,134786,134787,134788,134789,134790,134791,134792,134793,134794,134795,134796,134797,134798,134799,134800,134801,134802,134804,134806,134808,134810,134811,134814,134815,134816,134817,134818,134819,134820,134821,134822,134823,134824,134825,134827,134828,134829,134830,134831,134832,134833,134834,134835,134836,134837,134838,134839,134840,134841,134842,134843,134844,134845,134848,134849,134851,134852,134858,134859,134860,134861,134862,134863,134865,134866,134867,134868,134870,134871,134872,134873,134876,134877,134878,134879,134880,134881,134882,134884,134886,134887,134888,134889,134890,134891,134892,134893,134894,134895,134896,134897,134898,134899,134900,134901,134902,134904,134905,134906,134907,134908,134909,134910,134911,134913,134914,134915,134916,134917,134918,134919,134920,134921,134922,134923,134924,134925,134926,134927,134928,134929,134930,134931,134932,134933,134934,134935,134936,134937,134938,134939,134940,134941,134942,134945,134946,134947,134948,134949,134950,134951,134952,134953,134956,134957,134958,134959,134960,134962,134963,134964,134965,134966,134967,134968,134969,134970,134971,134972,134974,134975,134976,134978,134980,134983,134984,134985,134986,134987,134988,134990,134991,134992,134993,134994,134995,134996,134997,134998,134999,135000,135001,135002,135003,135004,135005,135006,135007,135008,135009,135010,135011,135012,135013,135014,135015,135017,135023,135024,135025,135026,135027,135028,135029,135030,135031,135032,135033,135035,135039,135041,135042,135048,135050,135052,135053,135054,135055,135056,135057,135058,135059,135060,135064,135067,135068,135069,135070,135071,135074,135075,135076,135077,135078,135079,135081,135082,135083,135084,135085,135086,135087,135088,135089,135090,135091,135092,135093,135094,135096,135097,135098,135099,135101,135102,135103,135104,135105,135106,135107,135108,135114,135119,135120,135121,135122,135123,135124,135125,135126,135127,135129,135131,135132,135141,135142,135143,135144,135145,135146,135147,135148,135149,135150,135152,135157,135159,135160,135161,135165,135166,135167,135168,135169,135170,135171,135172,135173,135174,135175,135176,135177,135178,135179,135180,135181,135182,135183,135184,135185,135186,135187,135198,135199,135200,135201,135205,135206,135207,135208,135213,135214,135215,135216,135217,135224,135226,135233,135235,135236,135237,135238,135241,135244,135245,135246,135247,135248,135249,135251,135252,135267,135268,135269,135270,135271,135272,135273,135274,135275,135276,135277,135278,135279,135280,135281,135282,135283,135284,135286,135287,135288,135297,135298,135299,135300,135303,135304,135307,135308,135309,135310,135311,135312,135314,135316,135317,135318,135320,135323,135324,135325,135326,135327,135329,135330,135331,135333,135336,135337,135339,135340,135344,135345,135347,135348,135349,135355,135356,135357,135358,135359,135360,135361,135362,135363,135365,135367,135368,135369,135370,135371,135372,135373,135374,135380,135381,135382,135383,135384,135385,135387,135388,135389,135390,135391,135392,135396,135397,135399,135400,135401,135403,135404,135405,135406,135409,135410,135411,135412,135415,135416,135418,135422,135423,135424,135425,135426,135427,135428,135429,135430,135431,135434,135436,135437,135438,135439,135440,135441,135442,135443,135444,135445,135447,135462,135463,135475,135476,135477,135478,135479,135480,135481,135482,135483,135484,135485,135486,135487,135488,135489,135490,135491,135492,135493,135494,135498,135499,135500,135501,135502,135503,135506,135507,135508,135509,135510,135511,135521,135526,135530,135531,135535,135536,135537,135541,135542,135543,135545,135546,135547,135548,135549,135550,135551,135552,135553,135554,135555,135556,135557,135558,135559,135560,135561,135562,135563,135566,135567,135568,135569,135570,135572,135573,135574,135575,135576,135577,135578,135580,135581,135582,135583,135584,135585,135586,135587,135588,135589,135590,135592,135593,135594,135595,135596,135597,135598,135599,135600,135601,135602,135603,135604,135605,135606,135607,135608,135609,135610,135611,135612,135613,135614,135617,135618,135619,135620,135621,135622,135623,135878,135880,135881,135882,135883,135884,135885,135886,135887,135888,135889,135890,135891,135892,135893,135894,135895,135896,135897,135898,135899,135900,135901,135902,135906,135907,135908,135909,135910,135911,135912,135913,135914,135916,135920,135921,135922,135923,135924,135925,135926,135928,135929,135930,135931,135932,135933,135934,135936,135937,135938,135939,135940,135941,135942,135943,135944,135945,135946,135947,135948,135949,135950,135952,135953,135954,135955,135956,135957,135958,135959,135960,135973,135974,135975,135976,135977,135978,135979,135980,135981,135982,135983,135984,135985,135986,135988,135990,135998,136000,136001,136002,136003,136004,136005,136006,136007,136008,136009,136010,136011,136012,136013,136014,136015,136016,136017,136018,136019,136020,136021,136022,136023,136025,136026,136027,136028,136029,136030,136031,136032,136033,136034,136035,136036,136037,136038,136039,136040,136041,136044,136045,136046,136047,136048,136049,136050,136051,136052,136053,136054,136056,136057,136058,136059,136060,136061,136062,136063,136064,136065,136066,136067,136068,136069,136070,136071,136073,136074,136075,136076,136077,136082,136083,136085,136088,136089,136091,136092,136093,136094,136095,136096,136097,136098,136099,136100,136101,136102,136103,136104,136105,136106,136107,136108,136110,136111,136137,136154,136162,136166,136182,136188,136190,136200,136201,136202,136203,136204,136205,136206,136207,136208,136209,136210,136211,136212,136213,136214,136215,136219,136220,136230,136244,136245,136246,136247,136248,136249,136257,136258,136259,136260,136261,136262,136263,136264,136265,136266,136267,136268,136269,136270,136271,136272,136273,136274,136275,136276,136277,136278,136292,136294,136308,136310,136314,136315,136316,136317,136319,136320,136321,136322,136323,136324,136325,136326,136328,136329,136361,136378,136387,136388,136389,136390,136391,136392,136393,136394,136395,136397,136398,136399,136401,136402,136403,136404,136405,136406,136407,136408,136409,136410,136411,136412,136413,136414,136415,136416,136417,136418,136419,136420,136421,136422,136423,136424,136425,136431,136443,136446,136449,136450,136451,136452,136453,136472,136473,136474,136475,136476,136477,136478,136479,136480,136481,136482,136483,136484,136485,136486,136487,136488,136489,136490,136491,136492,136493,136495,136510,136512,136514,136517,136518,136519,136520,136521,136522,136523,136524,136525,136526,136527,136528,136529,136530,136531,136532,136533,136534,136535,136536,136537,136538,136551,136552,136553,136554,136555,136556,136557,136558,136559,136560,136561,136562,136563,136564,136565,136566,136567,136568,136569,136570,136571,136572,136590,136597,136598,136600,136601,136602,136604,136605,136606,136609,136610,136668,136672,136675,136676,136677,136678,136691,136693,136694,136727,136734,136735,136736,136737,136738,136739,136761,136763,136764,136765,136766,136767,136768,136769,136770,136771,136772,136773,136774,136775,136776,136777,136778,136779,136782,136783,136785,136786,136787,136788,136789,136790,136791,136804,136806,136807,136808,136809,136810,136811,136812,136818,136819,136820,136821,136822,136823,136824,136825,136826,136827,136828,136829,136830,136832,136833,136835,136836,136837,136838,136839,136840,136841,136843,136844,136845,136846,136847,136848,136854,136855,136856,136857,136858,136859,136860,136866,136867,136868,136869,136870,136871,136872,136873,136874,136875,136876,136877,136884,136885,136886,136887,136888,136889,136890,136891,136892,136893,136894,136895,136905,136906,136907,136910,136912,136913,136914,136917,136919,136929,136931,136932,136933,136934,136935,136936,136937,136938,136939,136940,136955,136956,136957,136959,136960,136961,136962,136963,136964,136965,136966,136967,136968,136969,136970,136971,136972,136973,136974,136975,136976,136977,136978,136980,137000,137004,137008,137009,137012,137023,137034,137095,137103,137106,137136,137158,137179,137190,137207,137267,137271,137279,137325,137339,137353,137383,137385,137425,137471,137483,137496,137515,137595,137599,137605,137618,137631,137683,137687,137702,137713,137715,137723,137766,137782,137797,137824,137838,137896,137899,137912,137923,137924,137926,137927,137928,137929,137930,137931,137932,137933,137934,137935,137936,137937,137938,137939,137940,137941,137942,137943,137944,137946,137988,137989,137990,137991,137993,137994,137995,137996,137997,137999,138000,138001,138002,138003,138004,138005,138008,138010,138012,138013,138014,138015,138016,138017,138018,138019,138020,138023,138024,138025,138026,138027,138028,138029,138030,138033,138034,138035,138036,138037,138038,138039,138041,138042,138046,138047,138048,138049,138051,138052,138053,138055,138056,138057,138058,138059,138060,138061,138062,138063,138064,138065,138066,138067,138069,138071,138072,138073,138074,138076,138078,138079,138080,138081,138082,138091,138097,138099,138100,138101,138102,138103,138104,138105,138106,138108,138109,138110,138113,138114,138115,138117,138119,138120,138121,138122,138123,138124,138125,138126,138127,138128,138129,138130,138131,138132,138134,138135,138136,138137,138139,138140,138141,138142,138145,138149,138150,138151,138152,138153,138155,138156,138157,138159,138161,138164,138165,138170,138171,138177,138181,138189,138213,138214,138215,138216,138217,138218,138220,138223,138224,138225,138239,138270,138273,138274,138277,138278,138280,138281,138292,138298,138299,138300,138310,138325,138331,138334,138335,138340,138341,138342,138343,138344,138345,138347,138353,138354,138355,138356,138358,138359,138360,138361,138362,138363,138364,138365,138367,138368,138369,138370,138371,138387,138388,138389,138390,138392,138394,138395,138396,138397,138398,138399,138400,138401,138402,138403,138404,138405,138406,138407,138408,138409,138410,138413,138414,138415,138417,138419,138420,138422,138423,138424,138429,138431,138433,138434,138435,138439,138442,138444,138446,138447,138448,138449,138450,138451,138452,138453,138454,138457,138458,138459,138460,138461,138462,138463,138464,138465,138466,138467,138469,138470,138474,138475,138476,138477,138478,138479,138480,138481,138482,138483,138484,138488,138489,138490,138491,138492,138493,138494,138495,138496,138497,138498,138500,138501,138502,138503,138504,138505,138506,138507,138508,138509,138510,138511,138515,138519,138521,138522,138523,138524,138526,138529,138531,138532,138533,138534,138535,138537,138539,138540,138541,138542,138543,138544,138545,138546,138547,138548,138549,138550,138551,138552,138553,138554,138556,138557,138558,138559,138560,138561,138562,138563,138564,138565,138566,138567,138568,138569,138570,138571,138574,138575,138576,138578,138579,138580,138581,138582,138584,138585,138586,138587,138588,138589,138590,138591,138592,138597,138598,138599,138600,138601,138604,138607,138608,138609,138610,138614,138617,138619,138620,138621,138622,138623,138624,138625,138626,138627,138628,138631,138632,138633,138634,138635,138636,138638,138639,138640,138642,138643,138644,138645,138646,138647,138648,138649,138650,138653,138654,138656,138658,138659,138660,138662,138663,138664,138665,138666,138667,138668,138669,138670,138671,138672,138673,138674,138675,138676,138677,138678,138679,138682,138683,138684,138685,138686,138687,138688,138690,138691,138692,138693,138694,138695,138696,138698,138700,138701,138703,139164,139165,139166,139167,139168,139169,139170,139171,139172,139173,139174,139176,139177,139178,139179,139180,139181,139182,139183,139184,139185,139186,139187,139188,139189,139190,139191,139192,139193,139194,139195,139196,139197,139198,139199,139200,139201,139202,139203,139204,139205,139206,139207,139208,139209,139210,139211,139212,139213,139214,139215,139217,139218,139219,139221,139226,139229,139233,139234,139235,139238,139239,139242,139246,139249,139253,139272,139298,139302,139303,139304,139305,139307,139312,139318,139346,139357,139635,139636,139638,139639,139640,139642,139643,139644,139645,139646,139648,139649,139650,139651,139652,139653,139654,139656,139658,139659,139660,139661,139662,139663,139665,139666,139675,139676,139677,139678,139679,139680,139683,139684,139685,139686,139688,139689,139690,139691,139692,139693,139694,139696,139697,139698,139699,139700,139701,139702,139703,139704,139705,139706,139707,139708,139718,139719,139720,139721,139722,139723,139724,139727,139728,139729,139732,139733,139734,139735,139736,139737,139738,139740,139741,139742,139743,139744,139745,139746,139747,139748,139749,139750,139751,139752,139753,139754,139755,139756,139757,139758,139759,139760,139761,139762,139763,139764,139765,139766,139767,139768,139769,139770,139771,139772,139773,139774,139776,139779,139780,139782,139783,139784,139785,139786,139787,139788,139789,139790,139793,139794,139797,139799,139800,139801,139802,139804,139805,139806,139807,139808,139809,139811,139812,139813,139814,139815,139816,139817,139818,139819,139820,139821,139822,139823,139824,139825,139826,139827,139828,139829,139830,139831,139833,139835,139837,139839,139840,139841,139842,139845,139846,139847,139848,139849,139850,139851,139852,139853,139854,139855,139856,139857,139858,139859,139860,139861,139862,139863,139866,139868,139869,139870,139872,139875,139876,139877,139878,139879,139880,139882,139883,139884,139885,139888,139889,139890,139891,139892,139893,139894,139895,139896,139897,139898,139901,139903,139904,139905,139906,139907,139908,139909,139910,139911,139912,139913,139914,139915,139916,139917,139918,139919,139920,139921,139922,139924,139925,139926,139927,139928,139929,139930,139931,139932,139933,139934,139935,139937,139938,139939,139940,139943,139944,139946,139947,139948,139950,139954,139955,139956,139957,139958,139959,139960,139961,139962,139963,139965,139967,139968,139969,139971,139972,139973,139974,139975,139976,139977,139978,139979,139980,139981,139982,139983,139984,139985,139986,139987,139988,139989,139990,139991,139992,139993,139995,139996,139998,139999,140000,140001,140002,140003,140004,140005,140006,140007,140008,140009,140010,140011,140012,140013,140014,140015,140016,140018,140019,140020,140021,140022,140023,140024,140025,140026,140027,140028,140029,140030,140031,140032,140033,140034,140035,140036,140037,140038,140039,140040,140041,140042,140043,140044,140045,140046,140047,140048,140049,140050,140051,140053,140054,140055,140056,140061,140062,140063,140064,140065,140066,140067,140068,140069,140070,140072,140074,140075,140076,140077,140078,140079,140080,140081,140082,140083,140084,140085,140086,140087,140088,140089,140090,140091,140092,140093,140094,140095,140096,140097,140098,140099,140100,140108,140109,140110,140111,140112,140120,140121,140127,140141,140142,140143,140144,140145,140146,140147,140149,140151,140152,140153,140154,140155,140156,140157,140158,140159,140160,140161,140162,140163,140164,140165,140166,140167,140168,140169,140170,140171,140172,140173,140174,140176,140177,140178,140179,140180,140181,140182,140183,140185,140186,140188,140189,140190,140191,140192,140193,140194,140195,140196,140197,140203,140204,140205,140206,140207,140208,140209,140214,140215,140216,140217,140218,140221,140222,140223,140224,140225,140226,140228,140229,140230,140231,140232,140233,140234,140235,140236,140237,140238,140239,140240,140241,140242,140243,140244,140245,140246,140248,140249,140251,140252,140253,140254,140256,140257,140258,140261,140262,140263,140264,140265,140266,140267,140268,140274,140275,140277,140278,140279,140280,140281,140282,140283,140284,140285,140286,140287,140288,140289,140290,140291,140292,140293,140294,140295,140296,140297,140298,140299,140300,140301,140302,140303,140304,140305,140306,140307,140308,140309,140310,140311,140312,140313,140314,140315,140316,140317,140318,140319,140320,140321,140322,140323,140324,140325,140326,140327,140328,140329,140330,140331,140332,140333,140334,140335,140336,140337,140339,140340,140342,140343,140344,140345,140346,140347,140348,140349,140350,140351,140352,140353,140354,140355,140356,140357,140358,140359,140360,140362,140363,140364,140365,140366,140367,140368,140369,140372,140373,140374,140375,140376,140378,140379,140380,140381,140382,140383,140384,140385,140386,140387,140388,140412,140414,140415,140416,140417,140418,140420,140421,140424,140425,140426,140427,140428,140429,140430,140431,140432,140433,140434,140435,140436,140437,140438,140439,140440,140441,140442,140443,140445,140446,140448,140449,140450,140453,140455,140458,140459,140461,140462,140464,140465,140466,140467,140468,140469,140470,140471,140472,140473,140474,140475,140476,140477,140478,140479,140480,140484,140485,140486,140487,140488,140492,140499,140500,140501,140502,140503,140504,140505,140506,140507,140512,140514,140515,140516,140517,140519,140520,140521,140522,140523,140524,140525,140526,140527,140529,140530,140531,140533,140534,140535,140536,140537,140538,140539,140540,140541,140542,140543,140544,140545,140546,140547,140548,140549,140551,140552,140553,140554,140555,140556,140557,140558,140559,140560,140561,140562,140563,140564,140565,140567,140568,140569,140570,140571,140572,140573,140574,140575,140576,140577,140580,140581,140582,140583,140584,140585,140586,140587,140588,140589,140590,140591,140592,140593,140594,140595,140596,140597,140598,140599,140600,140601,140602,140603,140617,140628,140629,140630,140631,140632,140633,140634,140635,140636,140637,140638,140640,140641,140642,140643,140644,140645,140646,140647,140648,140649,140650,140651,140652,140655,140656,140657,140658,140659,140660,140661,140662,140671,140672,140673,140674,140675,140676,140677,140678,140679,140680,140681,140682,140683,140684,140685,140686,140689,140690,140691,140693,140694,140695,140696,140697,140698,140699,140700,140701,140702,140703,140704,140705,140706,140707,140708,140709,140710,140711,140712,140713,140714,140715,140716,140717,140718,140719,140720,140721,140722,140723,140724,140725,140726,140727,140728,140729,140730,140731,140732,140733,140734,140735,140736,140737,140738,140739,140740,140741,140742,140743,140744,140745,140746,140747,140748,140749,140750,140751,140752,140753,140754,140755,140756,140757,140758,140760,140761,140762,140763,140764,140765,140767,140768,140769,140770,140771,140772,140773,140774,140782,140783,140784,140785,140788,140789,140790,140791,140792,140793,140794,140795,140802,140803,140804,140805,140806,140807,140808,140809,140810,140811,140813,140814,140815,140816,140818,140819,140820,140821,140822,140823,140824,140825,140826,140830,140831,140832,140833,140834,140835,140836,140837,140838,140839,140840,140841,140842,140843,140844,140845,140846,140847,140848,140849,140851,140852,140855,140856,140857,140858,140859,140860,140861,140862,140863,140864,140865,140866,140867,140868,140870,140871,140872,140873,140874,140875,140876,140877,140878,140879,140880,140881,140882,140883,140884,140885,140886,140887,140888,140890,140891,140892,140893,140894,140895,140896,140897,140901,140902,140903,140904,140905,140906,140907,140908,140911,140912,140913,140914,140915,140916,140917,140918,140920,140921,140922,140923,140925,140927,140928,140929,140930,140931,140932,140933,140934,140935,140936,140938,140939,140940,140941,140942,140943,140948,140949,140950,140951,140952,140953,140954,140955,140956,140957,140958,140959,140960,140961,140962,140963,140964,140965,140966,140968,140969,140970,140971,140972,140973,140974,140975,140976,140977,140979,140980,140981,140982,140983,140984,140985,140986,140987,140988,141000,141001,141002,141005,141006,141008,141009,141010,141011,141013,141017,141018,141020,141021,141022,141024,141025,141027,141028,141029,141030,141031,141032,141033,141034,141035,141036,141037,141038,141039,141040,141043,141044,141045,141046,141052,141053,141054,141055,141056,141057,141058,141059,141060,141061,141062,141063,141064,141065,141066,141067,141081,141082,141083,141084,141094,141095,141096,141097,141098,141099,141100,141101,141102,141103,141104,141105,141107,141109,141110,141111,141112,141114,141115,141116,141117,141118,141120,141121,141122,141123,141124,141125,141126,141127,141128,141129,141130,141131,141132,141133,141134,141135,141136,141137,141138,141140,141141,141142,141143,141144,141145,141146,141147,141148,141149,141150,141151,141152,141153,141154,141155,141156,141157,141160,141161,141162,141163,141164,141165,141166,141167,141168,141169,141170,141173,141174,141175,141176,141178,141179,141180,141181,141182,141183,141184,141185,141186,141187,141188,141189,141190,141191,141192,141193,141194,141195,141196,141204,141205,141206,141207,141208,141209,141210,141211,141212,141213,141214,141215,141216,141217,141218,141220,141221,141222,141223,141224,141225,141226,141345,141346,141347,141348,141349,141350,141351,141352,141353,141354,141355,141356,141357,141358,141359,141360,141361,141362,141363,141364,141365,141366,141367,141368,141369,141371,141373,141374,141375,141376,141377,141378,141379,141380,141381,141382,141383,141384,141385,141386,141387,141388,141389,141390,141391,141392,141393,141394,141395,141396,141397,141398,141399,141400,141401,141402,141403,141404,141405,141406,141407,141408,141409,141410,141411,141412,141413,141414,141415,141416,141417,141418,141420,141421,141422,141423,141424,141425,141426,141427,141428,141429,141430,141431,141432,141433,141434,141435,141436,141437,141438,141439,141440,141441,141442,141443,141444,141445,141446,141448,141449,141450,141451,141452,141453,141454,141457,141458,141464,141465,141466,141467,141468,141470,141471,141472,141473,141474,141475,141476,141477,141478,141479,141480,141481,141482,141483,141484,141485,141486,141487,141488,141489,141490,141491,141492,141493,141495,141496,141497,141498,141499,141500,141501,141502,141503,141504,141505,141506,141507,141508,141509,141510,141511,141512,141513,141514,141515,141516,141517,141518,141519,141520,141521,141522,141523,141524,141526,141527,141528,141529,141530,141531,141532,141534,141535,141536,141537,141538,141539,141540,141541,141542,141543,141544,141546,141547,141548,141549,141550,141551,141552,141553,141554,141555,141556,141557,141559,141562,141563,141564,141565,141566,141567,141568,141569,141571,141576,141577,141578,141579,141582,141583,141584,141585,141586,141587,141588,141589,141590,141591,141592,141593,141594,141595,141596,141597,141598,141599,141603,141604,141605,141606,141607,141608,141609,141610,141611,141615,141616,141633,141634,141635,141636,141637,141638,141641,141642,141643,141644,141647,141648,141649,141650,141651,141652,141655,141657,141658,141659,141660,141661,141662,141677,141678,141680,141681,141682,141683,141684,141685,141686,141687,141688,141692,141693,141695,141697,141699,141700,141701,141702,141703,141708,141709,141710,141711,141712,141713,141714,141715,141716,141717,141718,141719,141720,141721,141722,141726,141729,141733,141734,141735,141737,141738,141739,141741,141742,141743,141744,141745,141746,141747,141748,141749,141750,141776,141777,141783,141784,141785,141787,141788,141789,141790,141791,141792,141793,141813,141814,141815,141816,141817,141820,141821,141822,141823,141825,141826,141827,141828,141829,141830,141831,141832,141833,141834,141835,141837,141838,141840,141847,141848,141849,141851,141852,141853,141854,141855,141857,141858,141859,141860,141861,141862,141863,141868,141869,141870,141871,141873,141874,141875,141878,141879,141880,141882,141883,141884,141885,141889,141890,141891,141892,141893,141894,141895,141896,141897,141898,141899,141903,141907,141908,141909,141910,141911,141912,141913,141914,141915,141916,141917,141918,141919,141920,141921,141923,141924,141925,141926,141927,141928,141929,141930,141931,141932,141934,141935,141937,141938,141939,141940,141941,141942,141943,141944,141945,141946,141948,141949,141950,141951,141952,141953,141954,141955,141956,141958,141959,141960,141962,141963,141964,141965,141966,141968,141969,141971,141972,141980,141991,141992,141993,141998,141999,142000,142032,142080,142160,142236,142244,142245,142246,142247,142248,142249,142250,142251,142254,142255,142256,142257,142258,142259,142260,142261,142264,142265,142267,142268,142269,142270,142271,142272,142273,142274,142275,142276,142277,142278,142279,142280,142281,142282,142283,142284,142286,142287,142289,142290,142291,142293,142294,142297,142298,142302,142303,142304,142305,142306,142307,142308,142310,142313,142314,142315,142316,142317,142318,142319,142320,142321,142323,142324,142327,142328,142330,142332,142333,142337,142338,142339,142340,142342,142343,142344,142345,142346,142347,142349,142350,142351,142352,142353,142354,142355,142356,142357,142358,142359,142360,142362,142363,142364,142365,142367,142368,142369,142370,142371,142372,142373,142374,142375,142376,142377,142378,142379,142380,142381,142382,142383,142384,142385,142386,142387,142388,142389,142395,142396,142397,142398,142399,142400,142401,142402,142404,142405,142406,142407,142408,142409,142410,142411,142412,142413,142414,142415,142416,142417,142420,142421,142422,142423,142424,142425,142426,142427,142429,142430,142431,142432,142433,142434,142435,142436,142438,142440,142442,142443,142444,142445,142446,142447,142448,142449,142450,142451,142452,142453,142454,142455,142456,142457,142518,142539,142662,142722,142723,142724,142726,142727,142728,142729,142730,142731,142732,142733,142734,142736,142737,142738,142739,142744,142745,142746,142747,142751,142752,142753,142754,142755,142756,142757,142758,142759,142760,142761,142762,142763,142764,142765,142766,142772,142773,142774,142779,142780,142781,142782,142783,142784,142785,142786,142787,142827,142828,142829,142830,142831,142832,142833,142834,142835,142836,142837,142839,142840,142841,142842,142843,142846,142847,142848,142849,142850,142851,142852,142853,142854,142855,142857,142858,142860,142861,142862,142863,142864,142865,142867,142868,142869,142870,142871,142872,142873,142874,142877,142878,142879,142880,142881,142882,142883,142884,142885,142886,142887,142888,142889,142890,142892,142893,142894,142895,142896,142897,142898,142899,142900,142901,142902,142903,142904,142905,142907,142908,142909,142910,142911,143071,143106,143107,143108,143109,143110,143111,143114,143115,143116,143117,143118,143131,143132,143133,143134,143135,143136,143137,143138,143139,143140,143143,143148,143151,143152,143153,143154,143155,143156,143157,143162,143174,143178,143179,143180,143181,143184,143185,143186,143187,143191,143192,143193,143194,143195,143196,143197,143198,143199,143200,143209,143210,143211,143212,143213,143214,143215,143216,143217,143218,143219,143220,143221,143222,143227,143237,143238,143239,143240,143241,143247,143250,143251,143252,143258,143259,143260,143261,143262,143263,143264,143265,143266,143267,143268,143270,143273,143274,143275,143283,143284,143285,143286,143293,143294,143295,143296,143297,143298,143299,143300,143301,143302,143303,143304,143305,143306,143307,143308,143309,143310,143311,143312,143313,143314,143315,143316,143317,143321,143322,143323,143324,143325,143327,143328,143330,143332,143334,143335,143337,143338,143339,143340,143341,143343,143344,143345,143346,143347,143350,143351,143352,143363,143366,143367,143368,143369,143370,143371,143374,143375,143376,143377,143378,143379,143380,143381,143382,143386,143387,143392,143393,143394,143395,143396,143397,143398,143400,143401,143402,143403,143404,143405,143406,143407,143408,143417,143418,143419,143420,143421,143422,143423,143424,143425,143427,143428,143429,143431,143432,143434,143437,143438,143439,143455,143456,143457,143458,143481,143482,143483,143487,143488,143489,143491,143541,143542,143543,143544,143545,143546,143547,143548,143552,143553,143573,143574,143575,143576,143577,143578,143579,143580,143599,143600,143601,143602,143603,143604,143605,143606,143607,143630,143639,143642,143643,143644,143646,143656,143657,143658,143660,143661,143662,143663,143669,143670,143671,143672,143675,143676,143682,143683,143684,143685,143686,143687,143688,143689,143712,143713,143714,143715,143716,143717,143718,143725,143726,143727,143728,143733,143734,143749,143750,143751,143752,143753,143754,143755,143756,143761,143762,143763,143764,143765,143766,143776,143777,143778,143779,143780,143781,143782,143783,143784,143785,143786,143787,143788,143790,143791,143792,143793,143794,143795,143796,143797,143798,143799,143801,143802,143803,143804,143805,143806,143807,143808,143809,143810,143811,143812,143813,143814,143815,143816,143817,143818,143819,143820,143822,143824,143825,143839,143909,143911,143913,143914,143915,143916,143918,143919,143982,262235,262869,262959,262960,262961,262981,262984,262997,263001,263019,263021,263022,263024,263027,263032,263063,263072,263107,263109,263116,263134,263150,263154,263172,263246,263392,263509,263619,263620,263643,263699,263744,263768,263769,263770,263774,263776,263818,263819,263831,263835,263854,263877,263879,263885,263889,263898,264036,264101,264184,264272,264275,264281,264299,264303,264470,264478,264483,264488,265851,266183,269228,269456,269618,269651,270987,271042,271178,271337,272557,272916,277473,278115,278252,278315,278325,278326,278720,278885,278945,292521,292535,292704,292769,292888,294043,294424,294622,295185,295328,295699,295701,296010,296070,296195,296246,296619,296749,296782,297017,297025,297410,297416,297425,297621,297697,298700,298756,298871,299032,299062,299087,299089,299134,299385,299394,299404,299448,299489,299581,299903,300043,300066,300096,300268,300355,300581,300605,300831,300875,300882,300960,300992,301006,301412,301915,301948,301978,302031,302035,302219,302221,302269,302340,302773,302809,302941,302949,303138,303256,303286,303297,303348,303364,303458,303753,304128,304190,304316,304317,304328,304417,304422,304599,304719,304865,304902,304982,305039,305075,305111,305145,305207,305208,305218,305221,305524,305578,305630,305631,305632,305633,305637,305641,305756,305823,305824,305831,305834,305839,305891,305932,306123,306481,306507,306512,306673,306745,306812,306905,306977,307097,307223,307283,307360,307535,307658,307852,307868,307900,307905,307951,307967,308056,308057,308069,308070,308071,308083,308100,308101,308107,308108,308115,308119,308132,308134,308154,308161,308165,308167,308172,308173,308193,308215,308222,308230,308255,308267,308268,308272,308273,308276,308277,308279,308283,308293,308295,308381,308459,308476,308482,308500,308512,308517,308523,308610,308625,308753,308758,308772,308866,309062,309069,309133,309278,309296,309339,309419,309457,309462,309480,309492,309569,309600,309614,309616,309868,310053,314452,314453,314455,314459,314460,314481,314482,314484,314486,314487,314488,314493,314495,314500,314501,314504,314505,314506,314517,314522,314527,314530,314536,314543,314545,314548,314551,314561,314565,314566,314569,314576,314577,314581,315510,315551,315560,315568,315578,315590,315613,315614,315629,315634,315637,315638,315640,315641,315642,315643,315648,315656,315657,315658,315660,315661,315662,315663,315759,315833,315835,315844,315846,316742,316743,316744,317265,317267,317269,317270,317271,317274,317276,317278,317281,317283,317286,317292,317293,317334,317370,317380,317384,317446,319185,319189,319192,319193,319198,319205,319206,319209,319213,319216,319218,319224,319232,319236,319238,319239,319241,319250,319251,319257,319260,319263,319301,319432,319448,319470,319472,319474,319562,319584,319586,319592,319632,319658,319663,319665,319667,319668,319672,319675,319679,319682,319684,319687,319707,319708,319735,319736,319737,319738,319740,319743,319744,319746,319747,319748,319749,319752,319753,319754,319755,319756,319839,319840,319842,319843,319846,319849,319850,319851,319853,319855,319859,319860,319861,319867,319869,319870,319871,319897,319898,319899,319902,319903,319905,319906,319912,319914,319916,319917,319933,319934,319937,319941,319947,319950,319954,319955,319958,319960,319962,319987,319989,319990,319992,319993,319995,319997,319998,319999,320001,320003,320004,320006,320007,320011,320012,320013,320014,320015,320016,320017,320018,320020,320021,320022,320023,320024,320025,320027,320029,320033,320104,320105,320152,320200,320249,320273,320298,320323,320324,320348,320349,320396,320397,320422,320538,320539,320563,320586,320589,320608,320615,320708,320807,320809,320834,320870,320872,320900,320903,320936,320964,320967,320983,321000,321043,321056,321064,321100,321114,321142,321155,321181,321192,321193,321199,321219,321241,321250,321252,321660,321670,321671,321705,321733,321953,321978,321980,321992,322021,322045,322048,322052,322066,322096,322124,322127,322139,322144,322303,322547,322556,322621,322707,322767,322920,322924,322933,322961,323066,323116,323355,323358,323537,323558,323588,323595,323596,323602,323604,323669,323754,323756,323762,323773,323836,323837,323843,323846,323863,323869,324157,325168,325169,325170,325171,325174,325199,325313,325370,325619,325621,325704,325846,325874,325901,326018,326043,326941,327002,327003,327015,327017,327050,327051,327278,362334,362732,363015,363084,363260,363261,363262,363278,363314,363318,363319,363404,363422,363433,363597,363688,363710,363713,363722,363725,363958,364021,364088,364105,364173,364174,364176,364177,364180,364216,364713,364729,364826,364838,364841,364842,364844,364901,364968,365406,365494,365659,365736,366084,366186,366557,366620,366634,366638,366647,366671,366687,366738,366826,366831,366832,366899,366913,366924,367018,367037,367044,367050,367056,367063,367067,367078,367079,367080,367081,367082,367083,367089,367092,367096,367098,367099,367100,367105,367109,367112,367115,367121,367123,367126,367129,367137,367143,367152,367441,367671,368094,368101,368199,368209,368212,368234,368265,368269,368271,368280,368288,368312,368324,368382,368464,368554,368631,368708,368727,368753,368761,368764,368896,368917,369209,369337,369399,369424,369441,369457,369480,369520,369550,369613,369705,369797,369801,369840,369857,369881,369898,369922,369937,369948,369958,370110,370144,370273,370284,370406,370450,370650,370751,370836,370851,370853,370939,370973,371071,371075,371085,371324,371364,371404,371495,371518,371738,371990,372031,372076,372506,372511,372538,372627,372696,372701,372707,372946,373054,373056,373059,373289,373312,373447,373456,373458,373461,373494,373524,373527,373552,373565,373566,373605,373638,373659,373694,373725,373749,373756,373818,373845,373866,374169,374196,374209,374211,374248,374260,374262,374274,374276,374281,374305,374308,374311,374324,374329,374330,374341,374343,374344,374346,374354,374372,374377,374381,374382,374408,374427,374439,374458,374463,374471,374475,374478,374479,374481,374482,374492,374545,374575,375389,375401,375508,375552,375585,375596,375602,375603,375604,375608,375675,375676,375678,375686,375723,376017,376055,376113,376153,376159,376345,376739,376946,376957,377070,377071,377072,377077,377105,377185,377193,377214,377262,377269,377272,377282,377322,377329,377341,377391,377444,377500,377509,377510,377511,377606,377756,377768,377774,377792,377817,377819,377821,377869,377871,378198,378211,378221,378222,378239,378252,378255,378256,378258,378261,378268,378275,378300,378338,378357,378365,378388,378393,378408,378410,378428,378431,378432,378434,378452,378453,378465,378469,378510,378511,378517,378520,378537,378572,378766,378845,379083,379200,379201,379208,379504,379547,379732,379733,379734,379757,379792,379824,379871,379891,380088,380089,380123,380294,380553,380643,380753,380763,380788,380819,380874,380894,380909,381025,381039,381062,381122,381236,381253,381254,381285,381286,381345,381446,381643,381659,381858,381928,381929,381931,381932,381933,381936,382013,382046,382053,382312,382464,382466,382473,382477,382510,382515,382986,383000,383139,383311,383338,383405,383407,383410,383411,383413,383432,383470,383476,383495,383545,383546,383547,383792,384172,384428,384505,384520,384550,384578,384604,384643,384781,384816,384851,384856,384862,384864,385218,385237,385254,385257,385281,385283,385284,385308,385309,385310,385313,385388,385390,385399,385403,385406,385409,385410,385412,385414,385444,385446,385458,385461,385463,385465,385467,385468,385470,385495,385499,385500,385502,385507,385509,385512,385515,385517,385519,385522,385523,385537,385538,385540,385541,385543,385561,385566,385578,385579,385874,386408,387158,387170,387180,387197,387962,388158,388212,388311,388456,388458,388506,388507,388520,388522,388569,388640,388661,388717,389039,389118,389202,389283,389304,389317,389631,389927,389945,389969,389970,390035,390040,390065,390071,390076,390119,390405,390407,390419,390459,390566,390569,390590,390903,391000,391134,391526,391527,391771,391836,391871,391910,391918,392073,392082,392110,392128,392198,392201,392300,392369,392373,392398,392400,392418,392421,392437,392438,392439,392452,392454,392457,392479,392482,392494,392495,392496,392542,392544,392563,392586,392587,392592,392603,392611,392650,392956,393178,393203,393215,393216,393217,393223,393427,393908,393910,393914,393915,393917,394001,394010,394167,394168,394182,394282,394297,394593,394613,394717,394721,394786,394789,394910,394948,395046,395400,395412,395429,395447,395448,395520,395522,395524,395537,395540,395542,395591,395644,395655,395659,395660,395662,395663,395667,395671,395672,395674,395716,395717,395720,395753,395779,396573,396582,396634,396648,396650,396652,396653,396656,396680,396681,396858,397179,397185,397186,397187,397188,397206,397207,397208,397209,397210,397259,397260,397262,397272,397273,397274,397369,397373,397374,397388,397389,397390,397391,397392,397393,397428,397429,397431,397478,397479,397480,397481,397482,397487,397519,397544,397545,397546,397577,397580,397653,397711,397718,397726,397727,397822,397988,398155,398173,398174,398175,398176,398186,398235,398924,398925,398928,398936,398937,398938,398939,398940,398941,398942,398943,398944,398945,398946,398947,398949,398957,398958,398959,398960,398961,398975,398978,398979,398986,398993,398994,398995,398996,398997,399005,399006,399007,399008,399009,399022,399023,399024,399025,399026,399027,399040,399041,399042,399043,399044,399045,399046,399047,399048,399053,400848,400849,400850,400851,400852,400853,400854,400855,400856,400857,400858,400859,400860,400861,400862,400863,400864,400865,400866,400867,400868,400869,400870,400871,400872,400873,400874,400875,400876,400877,400878,400879,400880,400881,400882,400883,400884,400885,400886,400887,400888,400889,400890,400891,400892,400893,400894,400895,400896,400897,400898,400899,400900,400901,400902,400903,400904,400905,400906,400907,400908,400909,400910,400911,400912,400913,400914,400915,400916,400917,400918,400919,400920,400921,400922,400923,400924,400925,400926,400927,400928,400929,400930,400931,400932,400933,400934,400935,400936,400937,400938,400939,400963,400964,400965,400966,400967,400968,400969,400970,400971,400972,400973,400974,400975,400976,400977,400978,400979,400980,400981,400982,400983,400984,400985,400986,400987,400988,400989,400990,400991,400992,400993,400994,400995,400996,400997,400998,400999,401000,401001,401002,401003,401004,401005,401006,401007,401008,401009,401010,401011,401012,401013,401014,401015,401016,401017,401018,401019,401020,401021,401022,401023,401024,401025,401026,401027,401028,401029,401030,401031,401032,401033,401034,401035,401036,401037,401038,401039,401040,401041,401042,401043,401044,401045,401046,401047,401048,401049,401050,401051,401052,401053,401054,401078,401079,401080,401081,401082,401083,401084,401085,401086,401087,401088,401089,401090,401091,401092,401093,401094,401095,401096,401097,401098,401099,401100,401101,401102,401103,401104,401105,401106,401107,401108,401109,401110,401111,401112,401113,401114,401115,401116,401117,401118,401119,401120,401121,401122,401123,401147,401148,401149,401151,401152,401156,401157,401158,401159,401160,401168,401171,401202,401225,401248,401255,401256,401258,401259,401262,401263,401264,401265,401266,401267,401268,401269,401270,401271,401272,401273,401274,401275,401276,401277,401278,401279,401280,401281,401282,401283,401284,401285,401286,401287,401288,401289,401290,401291,401292,401293,401294,401295,401296,401297,401298,401299,401300,401301,401302,401303,401304,401305,401306,401307,401308,401309,401310,401311,401312,401313,401314,401315,401316,401317,401318,401320,401321,401322,401323,401324,401325,401326,401327,401328,401329,401330,401331,401332,401333,401334,401335,401336,401337,401338,401339,401340,401341,401342,401343,401344,401345,401346,401347,401348,401349,401350,401351,401352,401353,401354,401355,401356,401357,401358,401359,401361,401362,401363,401365,401370,401373,401377,401378,401379,401380,401381,401382,401383,401385,401386,401387,401388,401389,401390,401391,401392,401393,401394,401395,401396,401397,401398,401399,401400,401401,401402,401403,401404,401405,401406,401407,401408,401409,401410,401411,401412,401413,401414,401415,401416,401417,401418,401419,401420,401421,401422,401423,401424,401425,401426,401427,401428,401429,401430,401431,401432,401433,401436,401437,401439,401440,401441,401442,401443,401444,401445,401446,401447,401448,401449,401451,401453,401455,401456,401462,401463,401464,401465,401472,401473,401474,401475,401478,401479,401480,401481,401490,401491,401492,401493,401494,401501,401508,401515,401516,401517,401518,401519,401520,401521,401522,401523,401524,401525,401526,401527,401528,401529,401530,401531,401532,401533,401534,401535,401536,401537,401538,401539,401540,401541,401542,401543,401544,401545,401546,401547,401548,401549,401550,401551,401552,401553,401554,401555,401556,401557,401558,401559,401560,402543,402759,403669,1073743585,1073743656,1073745897,1073746625,1073747731,1073748087,1073748998,1073749127,1073750226,1073750303,1073750531,1073751253,1073752237,1073752409,1073752883,1073752897,1073754203,1073756857,1073756862,1073756986,1073757085,1073757098,1073757615,1073757630,1073757835,1073757878,1073757914,1073757916,1073757924,1073757932,1073757968,1073757985,1073758005,1073758006,1073758008,1073758009,1073758069,1073758110,1073758185,1073758255,1073758277,1073758285,1073758321,1073758337,1073758360,1073758370,1073758400,1073758404,1073758413,1073758616,1073758688,1073772141,1073772292,1073773456,1073773559,1073773661,1073773723,1073775044,1073775403,1073775467,1073775696,1073775724,1073775875,1073776637,1073776909,1073776937,1073777542,1073777697,1073777703,1073778138,1073778139,1073778583,1073778641,1073778668,1073778791,1073778995,1073779583,1073779763,1073780196,1073780305,1073780468,1073780555,1073780682,1073780732,1073780786,1073780840,1073780850,1073780855,1073780860,1073780899,1073781012,1073781039,1073781591,1073781647,1073781704,1073781705,1073781711,1073781737,1073782231,1073782323,1073782576,1073782629,1073782755,1073782848,1073783056,1073783222,1073783857,1073784167,1073784221,1073784499,1073784630,1073784755,1073784888,1073785238,1073785969,1073786038,1073786115,1073786135,1073786178,1073786182,1073786233,1073786441,1073786727,1073786767,1073786805,1073786984,1073786988,1073787170,1073787310,1073787412,1073787750,1073787796,1073787808,1073787820,1073787834,1073787839,1073787843,1073787895,1073787896,1073787903,1073787904,1073787905,1073788255,1073788331,1073788432,1073788556,1073788657,1073789033,1073789139,1073789214,1073798862,1073798866,1073798869,1073798871,1073798878,1073798915,1073798918,1073798919,1073798925,1073798928,1073798929,1073798930,1073798935,1073799169,1073799232,1073800250,1073800251,1073800253,1073800259,1073800263,1073800285,1073800288,1073800289,1073800295,1073800308,1073800315,1073800337,1073800368,1073800377,1073800399,1073800603,1073800648,1073800690,1073800696,1073800698,1073800712,1073800736,1073800744,1073800760,1073800766,1073800774,1073800791,1073800794,1073800804,1073800835,1073800836,1073800849,1073800855,1073800857,1073800861,1073800864,1073800865,1073800872,1073800875,1073800891,1073800895,1073800899,1073800906,1073800909,1073800920,1073800921,1073800930,1073800932,1073800942,1073800946,1073800953,1073801335,1073801359,1073801396,1073801679,1073801701,1073801725,1073801728,1073801732,1073801776,1073801778,1073801796,1073801802,1073802227,1073802236,1073802354,1073802575,1073802585,1073802920,1073802963,1073803084,1073803121,1073803130,1073803145,1073803146,1073803159,1073803207,1073803231,1073803236,1073803268,1073803318,1073803523,1073803540,1073804923,1073804937,1073804944,1073804960,1073804961,1073805026,1073805124,1073805164,1073805217,1073805333,1073805371,1073805394,1073805395,1073805522,1073805583,1073805599,1073805691,1073805697,1073805723,1073806545,1073806546,1073806553,1073806556,1073806560,1073806590,1073806600,1073806601,1073806637,1073806654,1073806671,1073806682,1073806684,1073806685,1073806693,1073806720,1073806730,1073806731,1073806752,1073806757,1073806758,1073806762,1073806770,1073806786,1073806789,1073806791,1073806794,1073806796,1073806802,1073842831,1073842887,1073842905,1073842994,1073843001,1073843351,1073843609,1073843638,1073844196,1073844409,1073844420,1073844524,1073844763,1073845086,1073845169,1073845176,1073846197,1073846305,1073846308,1073846757,1073846760,1073846761,1073846806,1073846817,1073846906,1073847668,1073847670,1073847684,1073847688,1073847696,1073847697,1073847700,1073847722,1073847748,1073847749,1073847755,1073847761,1073847763,1073847765,1073847768,1073847781,1073847787,1073847822,1073847826,1073847828,1073847830,1073847846,1073847848,1073847861,1073847867,1073847869,1073847875,1073847879,1073847882,1073847889,1073847891,1073847892,1073847893,1073847896,1073847902,1073847906,1073847908,1073847909,1073847937,1073847939,1073847945,1073847949,1073847953,1073847968,1073847978,1073847987,1073847992,1073848006,1073848926,1073849111,1073849133,1073849232,1073849265,1073849287,1073849767,1073849974,1073850087,1073850271,1073850293,1073850375,1073850377,1073850379,1073850380,1073850381,1073850503,1073851837,1073852909,1073853079,1073853334,1073853340,1073853355,1073853361,1073853363,1073853374,1073853391,1073853405,1073853406,1073853414,1073853416,1073853417,1073853425,1073853437,1073853443,1073853445,1073853446,1073853447,1073853448,1073853449,1073853452,1073853453,1073853454,1073853456,1073853457,1073853462,1073853473,1073853498,1073853507,1073853514,1073853534,1073853549,1073853550,1073853555,1073853563,1073853568,1073853582,1073853583,1073853590,1073853596,1073853598,1073853599,1073853601,1073853889,1073853891,1073853976,1073854057,1073854143,1073854163,1073854165,1073854166,1073854255,1073854776,1073856359,1073856973,1073857229,1073857231,1073857256,1073857257,1073857269,1073857277,1073857282,1073857283,1073857297,1073857300,1073857301,1073857308,1073857314,1073857324,1073857333,1073857341,1073857343,1073857379,1073857381,1073857403,1073857417,1073857420,1073857422,1073857425,1073857427,1073857444,1073857446,1073857448,1073857453,1073857454,1073857455,1073857457,1073857458,1073857460,1073857462,1073857463,1073857465,1073857466,1073857472,1073857492,1073857494,1073857495,1073857497,1073857498,1073857499,1073857500,1073857504,1073857515,1073857524,1073857535,1073857549,1073857550,1073857551,1073857556,1073857559,1073857561,1073857564,1073858111,1073858114,1073858157,1073858159,1073858253,1073858763,1073859241,1073859813,1073860026,1073861000,1073861003,1073861021,1073861066,1073861068,1073861069,1073861076,1073861079,1073861084,1073861093,1073861109,1073861126,1073861142,1073861169,1073861330,1073861693,1073863429,1073863438,1073863478,1073863496,1073863497,1073863498,1073863503,1073863534,1073863541,1073863574,1073863597,1073863613,1073863619,1073863640,1073863641,1073863691,1073863692,1073863695,1073863696,1073863710,1073864173,1073864175,1073864177,1073864204,1073864205,1073864206,1073864211,1073864216,1073864217,1073864231,1073864253,1073864258,1073864279,1073864284,1073864286,1073864287,1073864290,1073864303,1073864304,1073864323,1073864326,1073864333,1073864334,1073864335,1073864336,1073864340,1073864344,1073864346,1073864357,1073864358,1073864398,1073864399,1073864400,1073864403,1073864404,1073864405,1073864410,1073864412,1073864414,1073864415,1073864416,1073864436,1073864445,1073864450,1073864454,1073864459,1073864461,1073864464,1073864465,1073864466,1073864467,1073864470,1073864472,1073864485,1073864589,1073864959,1073865033,1073865203,1073865204,1073865208,1073865214,1073865217,1073865583,1073865649,1073865936,1073865952,1073865953,1073865965,1073865982,1073865983,1073865984,1073866005,1073866899,1073867115,1073867116,1073867201,1073867344,1073867347,1073867351,1073867352,1073867358,1073867756,1073867963,1073867964,1073868094,1073868685,1073868870,1073869060,1073869270,1073869281,1073869568,1073869569,1073869643,1073869906,1073870099,1073870196,1073870201,1073870364,1073870629,1073870795,1073870827,1073870841,1073870842,1073870843,1073870861,1073870863,1073871160,1073871351,1073871469,1073871470,1073871472,1073871473,1073871483,1073871495,1073871502,1073871503,1073871504,1073871505,1073871506,1073871507,1073871516,1073871520,1073871530,1073871532,1073871537,1073871539,1073871540,1073871541,1073871542,1073871544,1073871545,1073871546,1073871547,1073871548,1073871549,1073871551,1073871589,1073871590,1073871592,1073871594,1073871596,1073871598,1073871603,1073871604,1073871605,1073871606,1073871608,1073871609,1073871610,1073871613,1073871615,1073871616,1073871619,1073871626,1073871630,1073871633,1073871637,1073871642,1073871643,1073871644,1073871645,1073871646,1073871647,1073871648,1073871650,1073871651,1073871652,1073871655,1073871656,1073871659,1073871661,1073871662,1073871663,1073871664,1073871665,1073871666,1073871668,1073871672,1073871678,1073871682,1073871684,1073871685,1073871692,1073871694,1073871697,1073871699,1073871701,1073871733,1073871736,1073871739,1073871743,1073871744,1073871753,1073872046,1073872164,1073872166,1073872169,1073872243,1073872246,1073872250,1073872251,1073872266,1073872283,1073872353,1073872899,1073873882,1073875264,1073875421,1073875772,1073876962,1073877088,1073877327,1073877362,1073877449,1073877450,1073877451,1073877452,1073877453,1073877454,1073877455,1073877456,1073877457,1073877459,1073877460,1073877461,1073877462,1073877463,1073877464,1073877465,1073877466,1073877468,1073877469,1073877470,1073877471,1073877472,1073877473,1073877474,1073877475,1073877476,1073877477,1073877478,1073877479,1073877480,1073877481,1073877482,1073877483,1073877484,1073877485,1073877486,1073877487,1073877488,1073877489,1073877490,1073877491,1073877492,1073877493,1073877494,1073877495,1073877496,1073877497,1073877498,1073877499,1073877500,1073877501,1073877502,1073877503,1073877504,1073877505,1073877506,1073877507,1073877510,1073877511,1073877512,1073877513,1073877514,1073877515,1073877516,1073877517,1073877518,1073877520,1073877521,1073877522,1073877523,1073877524,1073877525,1073877526,1073877527,1073877528,1073877529,1073877530,1073877531,1073877532,1073877533,1073877534,1073877535,1073877536,1073877537,1073877538,1073877539,1073877540,1073877541,1073877542,1073877543,1073877544,1073877545,1073877546,1073877547,1073877548,1073877549,1073877550,1073877551,1073877552,1073877553,1073877554,1073877555,1073877556,1073877557,1073877558,1073877559,1073877560,1073877561,1073877562,1073877563,1073877564,1073877565,1073877566,1073877567,1073877568,1073877569,1073877570,1073877571,1073877572,1073877573,1073877574,1073877575,1073877576,1073877577,1073877578,1073877579,1073877580,1073877581,1073877582,1073877583,1073877584,1073877585,1073877586,1073877587,1073877588,1073877592,1073877593,1073877595,1073877598,1073877599,1073877601,1073877602,1073877603,1073877604,1073877605,1073877606,1073877608,1073877609,1073877610,1073877611,1073877612,1073877613,1073877614,1073877615,1073877617,1073877618,1073877619,1073877620,1073877621,1073877625,1073877626,1073877627,1073877629,1073877630,1073877631,1073877632,1073877633,1073877634,1073877635,1073877636,1073877637,1073877638,1073877639,1073877640,1073877641,1073877642,1073877643,1073877644,1073877645,1073877646,1073877647,1073877648,1073877649,1073877650,1073877651,1073877652,1073877653,1073877654,1073877655,1073877656,1073877657,1073877658,1073877659,1073877660,1073877661,1073877662,1073877663,1073877664,1073877665,1073877666,1073877668,1073877671,1073877674,1073877675,1073877676,1073877678,1073877680,1073877681,1073877682,1073877683,1073877684,1073877685,1073877686,1073877687,1073877688,1073877689,1073877690,1073877691,1073877692,1073877693,1073877694,1073877695,1073877696,1073877697,1073877698,1073877699,1073877700,1073877701,1073878811,1073878812,1073878813,1073878814,1073878815,1073878816,1073878817,1073878818,1073878819,1073878820,1073878821,1073878822,1073878823]")
}
, function(t) {
    t.exports = JSON.parse("[2,3,8,19,23,24,28,30,31,33,37,45,65,81,90,104,105,108,110,111,112,113,119,121,125,130,138,155,159,170,195,207,210,221,226,249,254,266,271,274,283,297,309,311,313,322,325,332,350,354,374,375,379,380,407,412,422,425,431,435,436,445,446,472,478,484,485,488,489,498,505,509,517,535,907,908,1141,1164,1168,1170,1171,1172,1173,1176,1177,1180,1182,1255,1256,1259,1261,2209,2210,100143,100160,100161,100167,100168,100184,100185,100194,100195,100196,100197,100216,100217,100236,100248,100300,100308,100316,100329,100340,100342,100346,100348,100355,100372,100373,100388,100408,100433,100452,100454,100458,100459,100464,100499,100507,100521,100524,100525,100538,100552,100555,100624,100644,100652,100663,100672,100693,100695,100696,100704,100706,100709,100719,100720,100727,100744,100753,100764,100780,100795,100800,100812,100816,100817,100829,100837,100849,100851,100853,100880,100885,100899,100913,100936,100939,100944,100945,100946,100961,100973,101035,101053,101057,101065,101066,101068,101069,101078,101079,101086,101098,101099,101119,101135,101151,101154,101156,101160,101170,101171,101173,101175,101178,101179,101187,101190,101194,101197,101199,101202,101204,101207,101208,101223,101224,101228,101232,101237,101238,101246,101247,101254,101257,101260,101267,101277,101281,101284,101291,101292,101293,101299,101314,101319,101321,101327,101330,101335,101347,101358,101361,101366,101367,101414,101457,101490,101494,101517,101519,101522,101523,101525,101529,101533,101534,101540,101551,101552,101555,101559,101562,101564,101568,101581,101589,101595,101598,101615,101617,101624,101632,101634,101635,101637,101638,101644,101654,101660,101663,101666,101670,101672,101681,101684,101693,101738,101749,101750,101754,101761,101767,101771,101773,101774,101775,101780,101781,101792,101837,101840,101847,101892,101897,101899,101900,101917,101920,101921,101936,101937,101939,101946,101952,101965,101967,101974,101975,101976,101980,101986,101992,101993,101994,101999,102000,102004,102006,102009,102010,102018,102024,102029,102036,102052,102056,102062,102071,102077,102080,102081,102084,102088,102092,102094,102099,102103,102104,102107,102108,102109,102111,102112,102115,102118,102122,102126,102127,102137,102138,102150,102152,102154,102155,102156,102157,102159,102160,102181,102182,102184,102186,102207,102219,102220,102227,102235,102236,102237,102240,102247,102248,102249,102256,102263,102271,102276,102286,102287,102288,102289,102290,102294,102295,102296,102297,102298,102301,102307,102309,102311,102312,102319,102320,102321,102322,102324,102327,102334,102335,102341,102343,102344,102345,102347,102348,102349,102356,102362,102372,102376,102377,102385,102389,102390,102395,102398,102402,102406,102410,102411,102413,102415,102432,102436,102437,102439,102440,102442,131073,131108,131158,131161,131162,131195,131205,131211,131212,131213,131266,131275,131344,131356,131392,131403,131422,131491,131502,131504,131587,231323,231350,231532,231739,231740,231787,231854,231933,232056,232065,232067,232068,232114,232156,232346,232458,232529,232548,232551,232562,232563,232572,232875,232878,232879,232880,232881,232882,232892,232894,232896,232897,232898,232902,232903,232904,232909,232922,232952,232953,232954,232956,232957,233093,233237,233238,233239,233240,233243,233245,233443,233521,233522,233529,233530,233531,233532,233533,233534,233535,262146,262160,262161,262170,262194,262195,262196,262197,262211,262212,262213,262215,262221,262223,262224,262226,262228,262231,262232,262235,262236,262237,262250,262252,262258,262259,262268,262279,262294,262307,262310,262316,262317,262320,262325,262326,262328,262332,262338,262341,262342,262345,262360,262362,262366,262368,262371,262373,262374,262379,262380,262381,262383,262386,262388,262390,262391,262406,262408,262413,262416,262425,262430,262438,262443,262448,262451,262458,262462,262465,262497,262500,262504,262507,262516,262522,262525,262533,262536,262539,262540,262558,262561,262568,262574,262578,262599,262615,262625,262630,262645,262657,262662,262665,263190,263318,263319,263323,263372,263380,263397,263398,263401,263402,264361,264362,264379,264388,264392,264393,264394,264395,264426,264427,264498,264502,264503,264506,264507,264514,264516,264530,264543,264544,264549,264577,264604,266246,362145,362146,362169,362170,362171,362172,362173,362174,362175,362176,362177,362178,362179,362180,362181,362182,362183,362184,362185,362186,362187,362188,362189,362190,362191,362192,362193,362194,362195,362196,362197,362198,362199,362200,362201,362202,362203,362204,362205,362206,362207,362208,362209,362210,362211,362212,362213,362214,362215,362216,362217,362218,362219,362220,362221,362222,362223,362224,362225,362226,362227,362228,362245,362247,362248,362249,362250,362251,362252,362253,362254,362255,362256,362257,362258,362259,362260,362261,362262,362263,362264,362265,362266,362268,362272,362273,362274,362276,362279,362281,362283,362291,362292,362306,362312,362313,362319,362320,362321,362336,362342,362346,362350,362365,362368,362369,362370,362379,362381,362384,362386,362407,362417,362439,362454,362456,362512,362546,362552,362560,362565,362588,362618,362620,362629,362634,362635,362693,362715,362727,362738,362742,362746,362791,362793,362803,362808,362831,362834,362835,362843,362861,362862,362877,362879,362884,362886,362888,362893,362894,362895,362898,362904,362906,362909,362940,362962,362979,362983,363030,363031,363041,363054,363060,363063,363078,363084,363095,363097,363100,363102,363156,363170,363181,363187,363193,363216,363218,363236,363246,363251,363258,363266,363276,363291,363293,363303,363315,363375,363451,363487,363573,363646,363648,363651,363652,363675,363695,363713,363714,363743,363750,363755,363777,363787,363789,363839,363904,363912,363913,363927,363931,363938,363940,363945,363996,364009,364038,364039,364042,364046,364048,364050,364073,364077,364078,364085,364100,364101,364114,364115,364117,364121,364123,364127,364133,364135,364140,364142,364154,364159,364163,364174,364175,364178,364182,364189,364190,364204,364207,364223,364250,364257,364260,364261,364263,364306,364324,364331,364376,364405,364408,364409,364413,364414,364418,364419,364421,364428,364437,364443,364448,364457,364476,364486,364503,364504,364505,364523,364526,364531,364532,364535,364543,364544,364560,364561,364585,364587,393264,393301,393350,393439,393494,393539,393556,393562,393609,393666,393711,493405,493461,493462,493472,493515,493533,493536,493615,493648,493997,494022,494204,494254,494704,494705,494876,494966,495020,495037,495049,495050,495093,495094,495379,495380,495385,495386,495388,495390,495391,495392,495393,495394,495395,1073741862,1073741867,1073742034,1073742126,1073742136,1073742140,1073742327,1073842008,1073842019,1073842060,1073842072,1073842222,1073842242,1073842355,1073842495,1073842568,1073842787,1073842927,1073842992,1073843416,1073843684,1073843688,1073843690,1073843962,1073843964,1073843965,1073843966,1073843967,1073843968,1073843969,1073843970,1073843972]")
}
, function(t) {
    t.exports = JSON.parse("[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,129,130,132,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,399,402,462,464,466,468,470,472,474,476,593,609,710,711,713,714,715,717,729,732,900,901,902,904,905,906,908,910,911,912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928,929,931,932,933,934,935,936,937,938,939,940,941,942,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,1025,1026,1027,1028,1029,1030,1031,1032,1033,1034,1035,1036,1038,1039,1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087,1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103,1105,1106,1107,1108,1109,1110,1111,1112,1113,1114,1115,1116,1118,1119,1168,1169,1548,1563,1567,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,1590,1591,1592,1593,1594,1600,1601,1602,1603,1604,1605,1606,1607,1608,1609,1610,1611,1612,1613,1614,1615,1616,1617,1726,1740,8208,8211,8212,8213,8214,8216,8217,8218,8220,8221,8222,8224,8225,8226,8229,8230,8231,8240,8242,8243,8245,8249,8250,8251,8254,8364,8451,8453,8457,8470,8471,8482,8491,8544,8545,8546,8547,8548,8549,8550,8551,8552,8553,8554,8555,8560,8561,8562,8563,8564,8565,8566,8567,8568,8569,8592,8593,8594,8595,8598,8599,8600,8601,8658,8660,8704,8706,8707,8711,8712,8715,8719,8721,8722,8725,8730,8733,8734,8735,8736,8739,8741,8743,8744,8745,8746,8747,8748,8750,8756,8757,8758,8759,8765,8776,8780,8786,8800,8801,8804,8805,8806,8807,8810,8811,8814,8815,8834,8835,8838,8839,8853,8857,8869,8895,8978,9312,9313,9314,9315,9316,9317,9318,9319,9320,9321,9322,9323,9324,9325,9326,9327,9328,9329,9330,9331,9332,9333,9334,9335,9336,9337,9338,9339,9340,9341,9342,9343,9344,9345,9346,9347,9348,9349,9350,9351,9352,9353,9354,9355,9356,9357,9358,9359,9360,9361,9362,9363,9364,9365,9366,9367,9368,9369,9370,9371,9472,9473,9474,9475,9476,9477,9478,9479,9480,9481,9482,9483,9484,9485,9486,9487,9488,9489,9490,9491,9492,9493,9494,9495,9496,9497,9498,9499,9500,9501,9502,9503,9504,9505,9506,9507,9508,9509,9510,9511,9512,9513,9514,9515,9516,9517,9518,9519,9520,9521,9522,9523,9524,9525,9526,9527,9528,9529,9530,9531,9532,9533,9534,9535,9536,9537,9538,9539,9540,9541,9542,9543,9544,9545,9546,9547,9581,9582,9583,9584,9585,9586,9587,9588,9601,9602,9603,9604,9605,9606,9607,9608,9609,9610,9611,9612,9613,9614,9615,9620,9621,9632,9633,9650,9651,9660,9661,9670,9671,9675,9678,9679,9698,9699,9700,9701,9711,9733,9734,9792,9794,9834,9837,9839,12289,12290,12291,12293,12294,12295,12296,12297,12298,12299,12300,12301,12302,12303,12304,12305,12306,12307,12308,12309,12310,12311,12316,12317,12318,12321,12322,12323,12324,12325,12326,12327,12328,12329,12353,12354,12355,12356,12357,12358,12359,12360,12361,12362,12363,12364,12365,12366,12367,12368,12369,12370,12371,12372,12373,12374,12375,12376,12377,12378,12379,12380,12381,12382,12383,12384,12385,12386,12387,12388,12389,12390,12391,12392,12393,12394,12395,12396,12397,12398,12399,12400,12401,12402,12403,12404,12405,12406,12407,12408,12409,12410,12411,12412,12413,12414,12415,12416,12417,12418,12419,12420,12421,12422,12423,12424,12425,12426,12427,12428,12429,12430,12431,12432,12433,12434,12435,12443,12444,12445,12446,12449,12450,12451,12452,12453,12454,12455,12456,12457,12458,12459,12460,12461,12462,12463,12464,12465,12466,12467,12468,12469,12470,12471,12472,12473,12474,12475,12476,12477,12478,12479,12480,12481,12482,12483,12484,12485,12486,12487,12488,12489,12490,12491,12492,12493,12494,12495,12496,12497,12498,12499,12500,12501,12502,12503,12504,12505,12506,12507,12508,12509,12510,12511,12512,12513,12514,12515,12516,12517,12518,12519,12520,12521,12522,12523,12524,12525,12526,12527,12528,12529,12530,12531,12532,12533,12534,12539,12540,12541,12542,12549,12550,12551,12552,12553,12554,12555,12556,12557,12558,12559,12560,12561,12562,12563,12564,12565,12566,12567,12568,12569,12570,12571,12572,12573,12574,12575,12576,12577,12578,12579,12580,12581,12582,12583,12584,12585,12593,12594,12595,12596,12597,12598,12599,12600,12601,12602,12603,12604,12605,12606,12607,12608,12609,12610,12611,12612,12613,12614,12615,12616,12617,12618,12619,12620,12621,12622,12623,12624,12625,12626,12627,12628,12629,12630,12631,12632,12633,12634,12635,12636,12637,12638,12639,12640,12641,12642,12643,12645,12646,12647,12648,12649,12650,12651,12652,12653,12654,12655,12656,12657,12658,12659,12660,12661,12662,12663,12664,12665,12666,12667,12668,12669,12670,12671,12672,12673,12674,12675,12676,12677,12678,12679,12680,12681,12682,12683,12684,12685,12686,12832,12833,12834,12835,12836,12837,12838,12839,12840,12841,12849,12963,13198,13199,13212,13213,13214,13217,13252,13262,13265,13266,13269,19968,19969,19971,19975,19976,19977,19978,19979,19980,19981,19982,19984,19985,19987,19988,19989,19990,19991,19992,19993,19994,19995,19996,19997,19998,19999,20001,20002,20004,20005,20006,20007,20008,20010,20011,20012,20013,20016,20017,20018,20020,20022,20024,20025,20026,20027,20028,20029,20030,20031,20034,20035,20037,20039,20040,20041,20043,20044,20045,20046,20047,20048,20050,20051,20052,20053,20054,20055,20056,20057,20060,20061,20062,20063,20064,20065,20066,20070,20073,20080,20081,20083,20094,20096,20098,20101,20102,20104,20105,20106,20107,20108,20109,20110,20111,20113,20114,20115,20116,20117,20120,20121,20122,20123,20124,20126,20127,20128,20129,20130,20132,20133,20134,20135,20136,20137,20139,20140,20141,20142,20144,20146,20147,20149,20150,20154,20155,20159,20160,20161,20162,20163,20164,20165,20166,20167,20169,20170,20171,20173,20174,20175,20177,20179,20180,20181,20182,20183,20184,20185,20189,20190,20191,20193,20195,20196,20197,20200,20202,20203,20204,20205,20206,20208,20210,20211,20213,20214,20215,20219,20221,20223,20225,20233,20234,20235,20237,20238,20239,20240,20241,20245,20247,20248,20249,20250,20251,20252,20253,20254,20255,20256,20258,20260,20261,20262,20263,20266,20267,20271,20272,20274,20276,20278,20280,20282,20284,20285,20291,20294,20295,20296,20301,20302,20303,20304,20305,20307,20308,20309,20311,20312,20313,20314,20315,20316,20317,20318,20319,20320,20323,20324,20325,20327,20329,20332,20335,20336,20339,20340,20341,20342,20346,20347,20348,20350,20351,20355,20356,20358,20360,20361,20363,20365,20367,20369,20372,20374,20375,20376,20379,20381,20384,20385,20387,20389,20390,20391,20392,20393,20394,20395,20396,20397,20398,20399,20405,20406,20407,20415,20418,20419,20420,20421,20425,20426,20430,20431,20432,20433,20436,20439,20440,20442,20443,20444,20445,20446,20447,20448,20449,20451,20452,20453,20454,20456,20457,20458,20461,20462,20463,20465,20467,20469,20470,20472,20474,20478,20480,20485,20486,20489,20491,20492,20493,20495,20497,20498,20500,20502,20504,20505,20506,20508,20511,20513,20515,20516,20517,20518,20520,20521,20522,20523,20524,20525,20526,20534,20537,20538,20540,20542,20547,20551,20552,20553,20556,20558,20559,20560,20565,20566,20570,20572,20581,20588,20589,20591,20594,20596,20597,20598,20599,20600,20602,20603,20605,20606,20607,20608,20613,20616,20621,20625,20630,20632,20633,20634,20642,20643,20645,20647,20648,20649,20652,20653,20655,20658,20659,20660,20661,20663,20666,20667,20670,20674,20677,20679,20681,20682,20685,20686,20687,20689,20693,20694,20698,20702,20707,20709,20710,20711,20713,20716,20717,20718,20721,20723,20725,20729,20731,20736,20737,20738,20740,20741,20742,20743,20744,20745,20747,20752,20754,20756,20757,20758,20760,20762,20767,20769,20778,20786,20787,20791,20792,20794,20795,20796,20799,20800,20801,20803,20804,20805,20806,20807,20808,20809,20811,20812,20813,20814,20816,20817,20818,20820,20821,20822,20823,20825,20826,20827,20828,20829,20830,20833,20834,20835,20837,20839,20840,20841,20842,20843,20844,20845,20846,20848,20849,20851,20852,20853,20854,20855,20856,20857,20859,20860,20861,20864,20865,20866,20869,20870,20872,20873,20874,20876,20877,20879,20880,20881,20882,20883,20885,20886,20887,20889,20891,20892,20896,20898,20900,20901,20902,20904,20905,20906,20907,20908,20911,20912,20913,20914,20915,20916,20917,20918,20919,20923,20924,20925,20928,20932,20933,20934,20935,20937,20939,20940,20941,20943,20945,20950,20955,20956,20957,20960,20961,20964,20966,20967,20969,20970,20971,20973,20975,20976,20977,20979,20981,20982,20984,20985,20986,20987,20988,20989,20990,20991,20992,20993,20994,20995,20996,20998,20999,21000,21002,21003,21005,21006,21009,21010,21012,21014,21015,21016,21017,21018,21019,21021,21024,21028,21029,21031,21032,21033,21034,21035,21037,21038,21040,21043,21046,21047,21048,21049,21050,21051,21053,21055,21056,21057,21058,21059,21060,21063,21066,21067,21068,21069,21070,21071,21072,21073,21076,21078,21083,21084,21085,21086,21089,21091,21092,21093,21095,21097,21098,21103,21104,21105,21106,21107,21108,21109,21111,21117,21119,21121,21122,21123,21127,21128,21129,21130,21133,21136,21137,21138,21139,21140,21147,21149,21150,21151,21152,21153,21154,21155,21160,21161,21162,21163,21164,21165,21169,21170,21171,21172,21173,21177,21179,21180,21182,21183,21185,21187,21189,21191,21193,21195,21197,21200,21202,21205,21206,21207,21208,21209,21211,21213,21214,21215,21216,21218,21219,21220,21222,21223,21232,21234,21235,21237,21240,21241,21242,21243,21246,21247,21248,21249,21250,21253,21254,21256,21261,21263,21264,21269,21270,21271,21273,21274,21277,21280,21281,21283,21286,21290,21294,21295,21297,21299,21304,21305,21306,21307,21310,21311,21312,21313,21315,21316,21317,21318,21319,21320,21321,21322,21325,21326,21327,21329,21330,21331,21332,21333,21334,21335,21336,21338,21340,21342,21343,21344,21345,21346,21347,21348,21350,21351,21353,21355,21358,21359,21360,21361,21363,21364,21365,21367,21368,21369,21370,21371,21375,21378,21380,21381,21382,21385,21387,21388,21389,21397,21398,21400,21402,21405,21407,21408,21410,21411,21413,21414,21416,21417,21421,21422,21424,21426,21427,21430,21435,21439,21441,21442,21443,21448,21449,21450,21451,21452,21453,21454,21457,21460,21462,21463,21464,21465,21467,21471,21472,21473,21474,21475,21476,21477,21478,21480,21481,21482,21483,21484,21485,21486,21487,21488,21489,21490,21491,21493,21494,21495,21496,21497,21498,21499,21500,21501,21505,21507,21508,21510,21512,21513,21514,21515,21516,21517,21518,21519,21520,21521,21522,21523,21525,21526,21527,21531,21533,21534,21535,21536,21537,21539,21542,21543,21544,21545,21547,21548,21549,21550,21551,21553,21554,21555,21556,21557,21558,21560,21561,21563,21564,21565,21566,21568,21570,21571,21574,21576,21577,21578,21579,21582,21584,21585,21586,21587,21588,21589,21590,21591,21592,21593,21595,21596,21599,21602,21604,21606,21608,21610,21616,21617,21618,21619,21621,21622,21623,21624,21627,21628,21629,21632,21634,21636,21638,21643,21644,21646,21647,21648,21650,21652,21653,21654,21657,21658,21659,21661,21666,21667,21668,21669,21670,21671,21672,21673,21674,21675,21676,21677,21679,21681,21682,21683,21684,21688,21691,21692,21693,21694,21695,21696,21697,21698,21700,21702,21703,21704,21705,21708,21709,21710,21711,21712,21713,21714,21715,21716,21717,21719,21720,21721,21722,21724,21725,21726,21727,21729,21730,21733,21734,21735,21736,21737,21738,21741,21742,21746,21747,21754,21756,21757,21759,21761,21764,21766,21767,21769,21775,21776,21777,21780,21782,21787,21792,21794,21795,21796,21799,21802,21804,21806,21807,21808,21809,21811,21815,21816,21817,21820,21822,21823,21824,21825,21827,21828,21829,21830,21833,21834,21836,21839,21840,21843,21845,21846,21847,21852,21853,21854,21855,21857,21859,21860,21861,21862,21863,21866,21868,21869,21870,21877,21878,21879,21880,21883,21884,21886,21888,21889,21890,21891,21892,21895,21896,21897,21898,21899,21903,21905,21908,21912,21913,21914,21916,21917,21918,21919,21927,21928,21929,21930,21931,21932,21934,21936,21937,21938,21939,21941,21942,21943,21945,21947,21949,21950,21956,21957,21958,21959,21961,21964,21965,21966,21969,21970,21971,21972,21974,21978,21980,21981,21983,21985,21987,21988,21989,21990,21991,21992,21994,21995,21996,21999,22002,22003,22005,22006,22007,22009,22013,22014,22016,22017,22022,22024,22025,22028,22029,22030,22031,22032,22036,22038,22039,22040,22043,22046,22047,22051,22052,22055,22057,22060,22061,22062,22063,22064,22065,22066,22068,22070,22072,22073,22075,22079,22082,22092,22093,22094,22096,22099,22100,22103,22104,22105,22107,22108,22114,22116,22117,22120,22121,22122,22123,22124,22127,22129,22132,22134,22136,22137,22138,22139,22140,22144,22149,22150,22151,22154,22158,22159,22160,22163,22164,22165,22176,22178,22179,22181,22184,22190,22191,22196,22198,22199,22204,22208,22209,22210,22211,22216,22217,22218,22220,22222,22225,22227,22228,22231,22232,22234,22235,22237,22238,22239,22240,22241,22242,22243,22244,22250,22251,22253,22254,22256,22257,22258,22259,22260,22261,22265,22266,22269,22270,22271,22272,22275,22276,22278,22280,22281,22282,22283,22285,22287,22290,22291,22294,22296,22300,22303,22307,22310,22311,22312,22313,22314,22316,22317,22318,22319,22320,22323,22327,22328,22329,22330,22331,22334,22336,22338,22343,22346,22348,22349,22350,22351,22352,22353,22359,22362,22363,22364,22365,22366,22367,22368,22369,22372,22374,22376,22377,22378,22379,22381,22383,22387,22390,22391,22395,22396,22399,22402,22403,22404,22405,22406,22408,22409,22411,22412,22418,22419,22427,22432,22433,22434,22435,22436,22438,22439,22441,22442,22443,22445,22446,22448,22450,22451,22452,22456,22464,22466,22467,22470,22475,22478,22479,22482,22483,22484,22485,22486,22488,22489,22490,22492,22493,22495,22496,22499,22500,22509,22511,22516,22519,22520,22521,22522,22524,22525,22528,22530,22533,22534,22535,22537,22538,22539,22541,22545,22549,22553,22557,22558,22560,22561,22564,22570,22575,22576,22577,22580,22581,22586,22589,22592,22593,22596,22602,22603,22604,22605,22609,22610,22612,22615,22616,22617,22618,22622,22626,22629,22633,22635,22636,22637,22640,22642,22645,22649,22653,22654,22656,22657,22659,22661,22665,22666,22674,22675,22679,22681,22682,22684,22686,22687,22694,22696,22697,22699,22702,22707,22712,22713,22714,22715,22716,22718,22721,22725,22727,22730,22732,22734,22737,22739,22741,22743,22744,22745,22748,22750,22751,22754,22756,22757,22761,22763,22764,22766,22767,22768,22769,22770,22771,22774,22775,22777,22778,22779,22780,22781,22786,22788,22791,22793,22794,22797,22799,22800,22804,22805,22806,22808,22809,22810,22811,22812,22815,22816,22818,22820,22821,22823,22825,22826,22827,22828,22829,22830,22831,22833,22834,22836,22839,22840,22841,22842,22844,22846,22849,22850,22852,22855,22856,22857,22859,22862,22863,22864,22865,22868,22869,22870,22871,22872,22874,22880,22882,22885,22887,22888,22889,22890,22892,22893,22894,22899,22900,22902,22904,22905,22909,22913,22914,22915,22916,22918,22919,22920,22922,22925,22930,22931,22934,22935,22937,22939,22941,22942,22947,22948,22949,22952,22953,22954,22955,22956,22958,22959,22962,22963,22969,22971,22974,22981,22982,22985,22986,22987,22989,22992,22993,22994,22995,22996,22999,23000,23001,23002,23004,23005,23011,23013,23014,23016,23018,23019,23020,23030,23033,23035,23039,23041,23043,23044,23045,23046,23047,23048,23049,23052,23057,23059,23064,23066,23067,23068,23071,23072,23075,23077,23081,23087,23089,23090,23092,23093,23094,23100,23104,23105,23110,23113,23114,23125,23130,23138,23142,23143,23146,23148,23156,23157,23158,23159,23162,23167,23186,23194,23195,23207,23210,23218,23219,23221,23224,23228,23229,23230,23233,23234,23241,23243,23244,23248,23250,23252,23254,23255,23256,23260,23264,23265,23267,23270,23273,23275,23281,23285,23290,23291,23304,23305,23307,23308,23318,23319,23325,23330,23332,23338,23340,23344,23346,23348,23350,23351,23352,23358,23360,23363,23365,23376,23377,23379,23380,23381,23383,23384,23385,23386,23387,23388,23389,23391,23394,23395,23396,23397,23398,23401,23402,23403,23404,23408,23409,23411,23413,23416,23418,23421,23423,23424,23425,23427,23428,23429,23431,23432,23433,23435,23436,23437,23439,23443,23445,23447,23448,23449,23450,23451,23452,23453,23454,23455,23456,23457,23458,23459,23460,23461,23462,23466,23467,23470,23472,23475,23476,23477,23478,23480,23481,23485,23486,23487,23490,23491,23492,23493,23494,23495,23497,23500,23504,23506,23507,23508,23515,23517,23518,23519,23521,23522,23524,23525,23526,23527,23528,23529,23531,23532,23534,23536,23539,23541,23542,23544,23545,23546,23547,23548,23550,23551,23553,23554,23556,23557,23558,23559,23560,23561,23562,23563,23565,23566,23567,23569,23571,23572,23573,23574,23576,23578,23580,23581,23584,23586,23588,23589,23591,23592,23596,23597,23601,23604,23607,23608,23609,23610,23611,23612,23613,23614,23615,23616,23617,23618,23621,23622,23624,23625,23626,23627,23629,23630,23631,23632,23633,23635,23637,23640,23641,23644,23645,23646,23648,23649,23650,23651,23652,23653,23654,23656,23660,23662,23663,23665,23670,23673,23674,23679,23681,23682,23688,23692,23693,23696,23697,23700,23702,23703,23704,23705,23706,23707,23708,23713,23714,23715,23720,23721,23723,23724,23725,23729,23731,23733,23734,23735,23736,23739,23740,23741,23742,23743,23745,23748,23749,23751,23755,23762,23769,23776,23777,23780,23781,23782,23784,23785,23786,23789,23791,23792,23796,23798,23802,23803,23805,23809,23810,23811,23814,23815,23819,23822,23825,23828,23829,23830,23831,23832,23833,23834,23835,23838,23839,23842,23844,23846,23847,23849,23853,23854,23860,23869,23870,23879,23882,23883,23884,23886,23888,23890,23896,23899,23900,23901,23913,23915,23916,23919,23923,23924,23926,23938,23940,23943,23947,23948,23952,23956,23961,23965,23970,23980,23982,23991,23992,23994,23996,23997,24005,24009,24012,24013,24018,24019,24020,24022,24027,24029,24030,24033,24034,24035,24037,24038,24039,24040,24041,24043,24046,24047,24049,24050,24051,24052,24053,24055,24059,24061,24062,24065,24066,24067,24069,24070,24072,24075,24076,24079,24080,24081,24084,24085,24086,24088,24089,24090,24091,24092,24093,24095,24101,24102,24103,24107,24109,24110,24111,24112,24113,24115,24118,24119,24120,24123,24124,24125,24128,24130,24131,24132,24133,24135,24140,24142,24148,24149,24151,24155,24158,24159,24161,24162,24163,24164,24171,24178,24179,24180,24181,24182,24184,24185,24186,24187,24188,24189,24190,24191,24192,24193,24195,24196,24198,24199,24202,24203,24207,24208,24209,24211,24212,24213,24214,24215,24217,24218,24220,24222,24223,24224,24229,24230,24231,24235,24237,24243,24245,24246,24247,24248,24249,24254,24257,24258,24259,24260,24264,24265,24266,24271,24272,24273,24274,24275,24278,24282,24283,24285,24287,24288,24289,24290,24291,24296,24297,24298,24300,24304,24305,24307,24308,24310,24311,24312,24314,24315,24316,24318,24319,24320,24321,24322,24323,24324,24328,24329,24330,24331,24332,24333,24335,24336,24337,24338,24339,24340,24341,24342,24343,24344,24347,24351,24352,24357,24358,24359,24361,24362,24365,24367,24369,24373,24375,24376,24377,24378,24380,24382,24384,24385,24390,24392,24394,24396,24398,24400,24401,24402,24403,24405,24406,24407,24408,24409,24412,24413,24417,24418,24420,24421,24422,24425,24426,24427,24428,24429,24432,24433,24435,24439,24441,24443,24444,24447,24448,24449,24450,24451,24452,24453,24455,24456,24457,24458,24459,24460,24464,24465,24466,24467,24469,24471,24472,24473,24476,24478,24480,24481,24488,24489,24490,24492,24493,24494,24499,24500,24501,24503,24505,24508,24509,24515,24516,24517,24518,24521,24524,24525,24527,24528,24529,24530,24534,24535,24536,24537,24540,24541,24544,24545,24548,24551,24554,24555,24557,24558,24560,24561,24565,24568,24571,24573,24574,24575,24576,24577,24578,24579,24580,24581,24582,24586,24589,24590,24591,24592,24594,24596,24597,24598,24601,24603,24604,24605,24608,24609,24613,24614,24615,24616,24617,24618,24619,24623,24625,24629,24634,24635,24636,24639,24641,24642,24643,24646,24650,24651,24653,24656,24658,24661,24665,24666,24669,24671,24672,24674,24675,24676,24677,24679,24680,24681,24682,24683,24684,24685,24687,24688,24691,24693,24694,24695,24696,24697,24698,24699,24700,24701,24703,24705,24707,24708,24709,24713,24715,24716,24717,24722,24724,24726,24727,24730,24731,24733,24735,24736,24739,24742,24743,24744,24745,24746,24747,24748,24749,24751,24753,24754,24755,24756,24757,24758,24760,24763,24764,24765,24773,24774,24775,24778,24779,24785,24787,24789,24792,24794,24796,24797,24799,24800,24801,24803,24806,24807,24808,24809,24811,24812,24813,24814,24815,24816,24817,24819,24820,24822,24823,24825,24826,24827,24832,24833,24835,24838,24840,24841,24845,24846,24847,24850,24853,24858,24859,24860,24863,24864,24865,24867,24868,24870,24871,24872,24875,24876,24884,24887,24892,24893,24894,24895,24898,24900,24903,24904,24906,24907,24908,24909,24910,24913,24915,24917,24920,24921,24922,24925,24927,24930,24931,24933,24935,24936,24939,24942,24943,24944,24945,24947,24948,24949,24950,24951,24956,24958,24962,24967,24970,24971,24974,24976,24977,24980,24982,24985,24986,24989,24996,24999,25000,25001,25003,25004,25006,25010,25014,25015,25018,25022,25026,25027,25030,25031,25032,25033,25034,25035,25036,25037,25040,25041,25042,25044,25059,25062,25074,25076,25077,25078,25079,25080,25082,25084,25085,25086,25087,25088,25094,25096,25097,25098,25099,25100,25101,25102,25103,25104,25105,25106,25108,25109,25110,25111,25112,25114,25115,25117,25118,25119,25121,25122,25124,25125,25126,25130,25132,25134,25135,25136,25138,25139,25140,25142,25143,25144,25147,25149,25150,25151,25152,25153,25155,25159,25160,25161,25163,25164,25165,25166,25169,25170,25171,25172,25173,25176,25179,25182,25184,25187,25190,25191,25192,25193,25194,25195,25196,25197,25198,25199,25200,25201,25203,25206,25209,25212,25214,25215,25216,25218,25219,25220,25222,25225,25226,25233,25234,25235,25236,25237,25238,25239,25240,25242,25243,25244,25246,25247,25248,25249,25250,25252,25253,25256,25259,25260,25265,25269,25273,25275,25276,25277,25279,25282,25284,25285,25286,25287,25288,25289,25290,25291,25292,25293,25294,25295,25296,25297,25298,25299,25300,25302,25303,25304,25305,25306,25307,25308,25309,25311,25312,25313,25314,25315,25317,25318,25319,25320,25321,25324,25325,25326,25327,25329,25331,25332,25333,25334,25335,25340,25341,25342,25343,25345,25346,25351,25352,25353,25356,25358,25361,25366,25369,25370,25371,25373,25374,25375,25376,25377,25378,25379,25380,25381,25383,25384,25386,25387,25391,25394,25401,25402,25405,25406,25407,25410,25411,25413,25414,25417,25419,25420,25421,25422,25423,25424,25429,25431,25436,25438,25439,25441,25442,25443,25447,25448,25449,25451,25453,25454,25457,25458,25462,25463,25466,25467,25472,25474,25475,25476,25479,25480,25481,25482,25484,25486,25487,25488,25490,25494,25496,25497,25499,25503,25504,25505,25506,25507,25509,25511,25512,25513,25514,25515,25516,25517,25518,25520,25522,25523,25524,25525,25527,25528,25530,25531,25532,25534,25536,25539,25540,25542,25545,25549,25550,25551,25552,25554,25558,25562,25563,25566,25568,25569,25571,25577,25578,25581,25582,25586,25588,25590,25592,25593,25594,25597,25599,25600,25601,25602,25605,25606,25611,25612,25613,25615,25616,25619,25620,25622,25623,25627,25628,25630,25632,25633,25638,25640,25642,25644,25645,25652,25654,25658,25661,25662,25663,25665,25666,25668,25669,25670,25671,25672,25674,25678,25681,25682,25684,25688,25694,25695,25703,25705,25709,25711,25718,25720,25721,25722,25723,25730,25731,25732,25733,25735,25736,25744,25745,25746,25747,25749,25750,25753,25754,25758,25762,25764,25765,25769,25771,25772,25773,25774,25776,25778,25779,25781,25783,25784,25785,25786,25787,25788,25790,25791,25792,25793,25794,25796,25797,25799,25802,25803,25805,25806,25808,25810,25812,25815,25816,25818,25822,25824,25825,25826,25827,25828,25830,25831,25836,25837,25839,25840,25841,25842,25844,25846,25847,25850,25851,25853,25854,25856,25861,25862,25865,25871,25874,25876,25880,25881,25884,25885,25891,25892,25893,25898,25899,25900,25902,25903,25908,25909,25910,25911,25912,25913,25915,25918,25919,25925,25928,25929,25932,25933,25935,25937,25940,25941,25942,25943,25944,25945,25947,25949,25950,25954,25955,25958,25963,25964,25968,25970,25972,25973,25975,25976,25986,25987,25991,25992,25993,25995,25996,25998,26000,26001,26003,26005,26007,26009,26011,26012,26015,26017,26020,26021,26023,26025,26027,26028,26029,26031,26032,26039,26041,26044,26045,26049,26051,26052,26053,26054,26059,26060,26062,26063,26066,26070,26071,26073,26075,26080,26081,26082,26085,26086,26087,26088,26089,26092,26093,26094,26095,26096,26097,26102,26103,26106,26107,26112,26114,26115,26118,26119,26122,26124,26126,26127,26131,26132,26133,26137,26140,26141,26143,26144,26148,26149,26151,26152,26157,26159,26161,26164,26165,26166,26172,26174,26175,26177,26178,26179,26180,26181,26185,26187,26188,26191,26194,26195,26196,26197,26198,26199,26202,26205,26206,26207,26209,26210,26212,26214,26215,26216,26217,26222,26223,26224,26228,26230,26231,26234,26238,26241,26242,26243,26244,26247,26248,26249,26252,26253,26254,26257,26262,26263,26264,26269,26274,26278,26279,26280,26283,26286,26289,26292,26296,26297,26300,26302,26305,26308,26310,26311,26313,26326,26329,26330,26331,26332,26333,26336,26342,26345,26348,26352,26354,26355,26356,26357,26359,26360,26361,26362,26364,26365,26366,26367,26368,26371,26376,26377,26378,26379,26381,26383,26384,26388,26389,26390,26391,26395,26397,26398,26399,26406,26407,26408,26410,26411,26412,26413,26414,26415,26417,26420,26421,26422,26423,26424,26426,26429,26431,26432,26433,26434,26435,26438,26440,26441,26444,26446,26447,26448,26449,26451,26454,26455,26457,26460,26462,26463,26464,26465,26466,26467,26468,26469,26472,26473,26474,26477,26479,26480,26481,26482,26483,26485,26487,26492,26494,26495,26497,26500,26501,26503,26505,26507,26508,26512,26515,26517,26519,26520,26522,26524,26525,26526,26528,26529,26530,26531,26533,26534,26535,26536,26537,26538,26539,26541,26543,26544,26547,26548,26549,26550,26551,26552,26553,26561,26563,26564,26566,26570,26574,26575,26576,26577,26578,26579,26580,26584,26585,26586,26588,26589,26590,26592,26594,26596,26597,26599,26601,26604,26606,26607,26608,26609,26611,26612,26613,26619,26621,26622,26623,26624,26626,26627,26628,26629,26631,26632,26633,26634,26635,26636,26638,26639,26641,26643,26646,26647,26648,26653,26654,26657,26658,26665,26666,26667,26674,26675,26676,26679,26680,26681,26684,26685,26686,26688,26689,26690,26691,26692,26693,26694,26696,26697,26698,26700,26701,26702,26704,26705,26706,26707,26708,26709,26713,26716,26717,26719,26720,26721,26722,26723,26724,26725,26726,26727,26728,26729,26731,26740,26742,26743,26750,26751,26753,26754,26755,26757,26758,26765,26767,26771,26772,26775,26779,26781,26783,26784,26785,26786,26790,26791,26792,26797,26799,26800,26801,26803,26805,26806,26809,26810,26812,26816,26818,26820,26822,26825,26826,26827,26829,26834,26836,26837,26839,26840,26842,26847,26848,26849,26851,26855,26862,26863,26864,26865,26866,26869,26873,26874,26875,26876,26880,26881,26884,26885,26888,26891,26892,26893,26894,26895,26896,26898,26905,26906,26907,26908,26911,26912,26913,26914,26915,26916,26917,26918,26920,26922,26925,26928,26932,26934,26937,26941,26943,26946,26954,26963,26964,26965,26967,26969,26970,26971,26972,26973,26974,26976,26977,26978,26979,26982,26984,26986,26987,26989,26990,26991,26993,26995,26996,26997,26999,27000,27001,27004,27005,27006,27008,27009,27010,27012,27014,27015,27016,27017,27018,27021,27022,27025,27028,27029,27032,27035,27036,27040,27043,27046,27047,27048,27051,27053,27054,27057,27058,27060,27063,27067,27070,27071,27073,27075,27079,27082,27083,27084,27085,27086,27088,27091,27092,27096,27097,27099,27101,27102,27103,27104,27111,27112,27115,27117,27122,27123,27129,27131,27133,27135,27137,27138,27141,27146,27147,27148,27153,27154,27155,27156,27159,27160,27161,27163,27166,27167,27169,27170,27171,27176,27177,27178,27179,27182,27183,27185,27189,27190,27192,27193,27194,27197,27198,27204,27207,27208,27211,27216,27224,27225,27227,27231,27233,27234,27237,27238,27243,27249,27250,27256,27257,27260,27262,27263,27264,27268,27277,27278,27280,27281,27284,27287,27292,27296,27298,27299,27305,27306,27307,27308,27310,27311,27315,27320,27323,27329,27330,27331,27345,27347,27354,27355,27357,27358,27359,27365,27368,27370,27372,27386,27387,27396,27397,27402,27408,27410,27414,27421,27423,27424,27425,27426,27427,27428,27431,27442,27447,27448,27449,27450,27453,27454,27459,27462,27463,27465,27468,27470,27472,27475,27476,27481,27483,27484,27487,27489,27490,27491,27492,27493,27494,27495,27497,27498,27503,27506,27507,27508,27511,27512,27513,27515,27516,27519,27520,27521,27522,27523,27524,27526,27527,27529,27530,27531,27533,27538,27539,27541,27542,27544,27546,27547,27550,27553,27556,27562,27563,27566,27567,27569,27570,27571,27572,27573,27575,27578,27579,27580,27583,27584,27585,27586,27589,27590,27595,27597,27598,27599,27602,27603,27604,27605,27606,27607,27608,27609,27610,27611,27615,27617,27626,27627,27628,27631,27635,27637,27641,27645,27653,27654,27655,27656,27661,27663,27664,27665,27667,27668,27669,27670,27671,27672,27673,27674,27675,27679,27681,27682,27683,27684,27686,27687,27688,27689,27690,27691,27692,27694,27695,27696,27698,27699,27700,27701,27703,27704,27709,27710,27712,27713,27714,27718,27719,27721,27722,27725,27726,27728,27732,27733,27735,27737,27738,27739,27740,27741,27742,27743,27744,27745,27746,27748,27752,27753,27754,27760,27761,27762,27763,27764,27766,27769,27770,27773,27774,27777,27778,27779,27781,27782,27784,27785,27788,27789,27791,27792,27794,27795,27796,27798,27800,27801,27802,27803,27807,27809,27810,27811,27812,27813,27814,27815,27817,27818,27819,27820,27821,27822,27825,27826,27827,27832,27833,27834,27835,27836,27837,27838,27839,27841,27844,27845,27849,27850,27852,27856,27859,27860,27861,27862,27863,27865,27867,27868,27869,27870,27872,27873,27874,27875,27877,27880,27882,27883,27886,27887,27888,27889,27891,27893,27894,27895,27896,27898,27899,27900,27901,27902,27905,27908,27911,27915,27916,27918,27922,27927,27929,27930,27931,27934,27935,27941,27943,27945,27946,27947,27950,27953,27954,27955,27957,27958,27960,27961,27963,27964,27965,27966,27969,27971,27972,27973,27974,27975,27976,27978,27979,27981,27982,27983,27985,27986,27987,27988,27993,27994,27996,27998,28000,28003,28004,28005,28006,28009,28010,28012,28014,28015,28020,28023,28024,28025,28028,28034,28037,28039,28040,28041,28042,28044,28046,28049,28051,28052,28053,28057,28059,28060,28061,28062,28063,28064,28065,28067,28068,28070,28071,28072,28073,28074,28075,28078,28079,28082,28085,28088,28092,28095,28096,28100,28101,28102,28103,28107,28108,28113,28114,28117,28118,28120,28121,28122,28125,28126,28128,28129,28132,28134,28136,28138,28139,28140,28142,28145,28147,28149,28151,28153,28154,28155,28156,28165,28167,28168,28169,28170,28171,28172,28173,28174,28176,28177,28179,28180,28181,28182,28183,28185,28186,28187,28189,28191,28192,28193,28195,28196,28197,28198,28201,28203,28204,28205,28206,28207,28210,28212,28216,28218,28222,28227,28228,28234,28237,28238,28243,28244,28246,28248,28251,28255,28259,28263,28265,28267,28270,28271,28274,28278,28286,28287,28288,28290,28291,28293,28294,28297,28300,28303,28304,28310,28312,28316,28317,28319,28322,28325,28327,28330,28331,28335,28337,28338,28340,28342,28343,28346,28347,28348,28349,28353,28354,28356,28357,28359,28361,28363,28364,28367,28369,28371,28372,28373,28375,28378,28381,28382,28383,28384,28385,28386,28388,28389,28390,28392,28393,28396,28399,28402,28404,28407,28408,28409,28414,28415,28417,28418,28422,28425,28431,28433,28435,28436,28437,28448,28450,28451,28452,28457,28458,28459,28460,28461,28463,28465,28466,28467,28470,28472,28478,28479,28481,28485,28486,28487,28491,28493,28497,28500,28504,28507,28508,28510,28511,28512,28514,28516,28518,28525,28526,28527,28528,28530,28532,28536,28538,28540,28544,28545,28546,28548,28550,28552,28553,28556,28557,28558,28561,28567,28572,28576,28577,28579,28580,28582,28583,28586,28593,28595,28596,28598,28601,28608,28609,28610,28611,28614,28617,28625,28626,28628,28629,28632,28635,28638,28639,28640,28641,28644,28649,28651,28652,28654,28655,28656,28657,28659,28661,28662,28666,28670,28673,28678,28681,28683,28687,28689,28693,28696,28698,28699,28701,28702,28703,28707,28710,28711,28712,28716,28720,28722,28725,28729,28734,28748,28751,28753,28760,28766,28771,28772,28779,28780,28781,28783,28784,28789,28790,28792,28796,28797,28798,28799,28800,28805,28809,28810,28814,28818,28820,28821,28822,28825,28828,28829,28836,28843,28844,28845,28846,28847,28849,28851,28855,28856,28857,28858,28859,28860,28861,28864,28865,28866,28867,28872,28874,28875,28879,28888,28889,28891,28893,28895,28900,28902,28903,28904,28905,28907,28908,28909,28911,28913,28919,28921,28925,28937,28938,28944,28947,28948,28949,28950,28952,28953,28954,28956,28961,28966,28975,28976,28977,28982,28988,28997,28998,29001,29002,29004,29006,29013,29014,29017,29020,29022,29026,29028,29029,29030,29031,29032,29033,29036,29038,29042,29043,29048,29050,29053,29060,29064,29066,29071,29074,29076,29077,29080,29081,29087,29088,29096,29100,29105,29107,29109,29113,29118,29123,29124,29128,29129,29134,29136,29138,29140,29141,29143,29145,29148,29151,29152,29157,29158,29159,29164,29165,29166,29172,29173,29176,29177,29179,29180,29182,29183,29190,29197,29200,29211,29213,29224,29226,29228,29229,29232,29233,29234,29237,29238,29239,29240,29241,29242,29243,29244,29245,29246,29247,29248,29254,29255,29256,29259,29260,29261,29266,29270,29272,29273,29275,29277,29279,29280,29281,29282,29286,29287,29289,29294,29295,29298,29300,29301,29305,29306,29309,29310,29311,29312,29313,29314,29316,29319,29322,29323,29325,29327,29330,29334,29339,29343,29344,29346,29351,29356,29357,29359,29360,29362,29364,29366,29367,29368,29369,29376,29377,29378,29379,29380,29382,29384,29389,29390,29392,29394,29399,29401,29403,29406,29408,29409,29410,29416,29417,29420,29421,29422,29423,29424,29425,29426,29427,29428,29431,29432,29433,29434,29435,29436,29437,29441,29443,29450,29454,29459,29461,29462,29463,29465,29467,29468,29469,29470,29471,29473,29474,29477,29481,29482,29483,29484,29486,29487,29489,29492,29494,29495,29496,29497,29502,29503,29508,29509,29517,29518,29519,29520,29522,29527,29536,29539,29544,29546,29548,29549,29551,29552,29554,29557,29559,29560,29562,29563,29566,29568,29572,29574,29575,29577,29579,29582,29585,29590,29595,29599,29602,29605,29608,29609,29611,29614,29615,29616,29618,29619,29623,29626,29627,29632,29634,29640,29641,29642,29645,29646,29647,29648,29649,29657,29662,29664,29669,29671,29673,29674,29677,29678,29681,29682,29688,29694,29699,29701,29702,29705,29706,29709,29711,29712,29722,29723,29730,29733,29734,29736,29738,29740,29742,29743,29744,29746,29747,29748,29749,29750,29754,29756,29759,29761,29781,29783,29785,29786,29787,29788,29790,29791,29792,29795,29796,29801,29802,29805,29807,29808,29811,29814,29815,29822,29824,29825,29827,29831,29835,29838,29840,29848,29852,29854,29855,29858,29859,29862,29863,29864,29865,29872,29882,29885,29887,29898,29903,29906,29908,29910,29914,29916,29918,29920,29922,29923,29924,29926,29927,29929,29934,29935,29936,29937,29938,29940,29942,29943,29944,29951,29955,29956,29957,29964,29965,29966,29967,29969,29971,29973,29976,29977,29978,29980,29982,29983,29986,29987,29989,29990,29992,29993,29995,29996,29997,29999,30000,30001,30002,30003,30005,30007,30008,30010,30011,30012,30013,30014,30016,30020,30021,30022,30024,30025,30026,30027,30028,30029,30030,30031,30033,30036,30041,30042,30043,30044,30045,30048,30050,30052,30053,30054,30055,30057,30058,30059,30061,30064,30066,30067,30068,30070,30071,30072,30073,30079,30082,30083,30086,30087,30089,30090,30091,30094,30095,30097,30098,30100,30102,30103,30105,30106,30109,30111,30112,30113,30114,30115,30116,30117,30123,30124,30126,30127,30128,30129,30130,30131,30132,30133,30136,30137,30140,30141,30142,30146,30147,30148,30149,30151,30152,30153,30154,30157,30162,30164,30165,30166,30168,30169,30171,30174,30176,30178,30179,30180,30182,30183,30184,30185,30186,30187,30192,30193,30194,30195,30196,30201,30202,30204,30206,30207,30208,30209,30211,30213,30217,30218,30219,30220,30221,30224,30227,30229,30231,30232,30233,30235,30239,30240,30241,30242,30244,30245,30246,30247,30249,30250,30251,30253,30256,30259,30260,30261,30264,30266,30267,30268,30270,30271,30272,30274,30275,30278,30279,30280,30284,30285,30290,30292,30294,30296,30300,30302,30303,30305,30306,30307,30309,30311,30312,30313,30314,30315,30316,30318,30319,30320,30321,30322,30326,30328,30330,30331,30332,30333,30334,30336,30338,30339,30340,30342,30343,30344,30347,30350,30352,30353,30355,30358,30361,30362,30372,30382,30384,30385,30386,30388,30391,30392,30393,30394,30399,30402,30403,30405,30406,30408,30410,30413,30414,30415,30416,30417,30418,30420,30422,30423,30424,30427,30428,30430,30431,30433,30435,30436,30437,30439,30442,30446,30447,30449,30450,30452,30456,30457,30459,30460,30462,30465,30468,30471,30472,30473,30475,30476,30477,30489,30490,30491,30494,30495,30496,30498,30500,30501,30502,30504,30505,30509,30511,30517,30518,30519,30520,30522,30524,30526,30528,30529,30531,30535,30543,30544,30545,30554,30555,30556,30558,30561,30562,30563,30565,30566,30568,30570,30571,30572,30585,30589,30590,30591,30592,30596,30597,30599,30603,30604,30605,30606,30609,30610,30622,30623,30624,30626,30629,30631,30633,30634,30636,30637,30640,30643,30645,30646,30649,30651,30652,30653,30655,30663,30669,30675,30679,30682,30683,30684,30690,30691,30693,30695,30697,30699,30700,30701,30702,30703,30707,30710,30712,30716,30717,30718,30719,30720,30721,30722,30729,30732,30733,30737,30738,30740,30741,30742,30743,30744,30746,30748,30749,30751,30752,30755,30757,30758,30759,30761,30764,30765,30768,30770,30772,30775,30776,30777,30778,30779,30780,30782,30783,30784,30787,30789,30791,30796,30798,30800,30802,30805,30806,30807,30813,30826,30827,30828,30829,30830,30831,30834,30836,30839,30844,30847,30849,30854,30855,30857,30860,30861,30862,30865,30867,30869,30871,30872,30874,30875,30876,30879,30881,30883,30885,30887,30889,30890,30895,30896,30897,30898,30899,30900,30901,30905,30906,30908,30910,30913,30917,30918,30921,30922,30923,30928,30929,30932,30933,30937,30938,30951,30952,30956,30959,30962,30964,30967,30970,30973,30977,30981,30983,30990,30993,30994,30995,31001,31006,31012,31014,31018,31019,31020,31028,31034,31035,31036,31038,31040,31041,31046,31047,31048,31049,31056,31059,31061,31062,31063,31066,31067,31068,31069,31070,31071,31072,31074,31077,31079,31080,31085,31087,31095,31096,31098,31103,31104,31105,31108,31109,31114,31117,31118,31119,31130,31133,31142,31143,31146,31150,31152,31153,31155,31161,31162,31163,31165,31166,31167,31168,31169,31171,31174,31176,31177,31179,31181,31185,31186,31189,31192,31199,31201,31203,31204,31206,31207,31209,31211,31212,31213,31215,31216,31224,31227,31229,31232,31234,31235,31237,31238,31240,31243,31245,31246,31252,31255,31256,31257,31258,31260,31262,31263,31264,31267,31278,31281,31282,31283,31287,31289,31291,31292,31293,31294,31295,31296,31298,31299,31302,31305,31307,31308,31309,31310,31311,31312,31313,31319,31328,31329,31330,31331,31337,31339,31344,31348,31350,31351,31352,31353,31354,31357,31359,31360,31361,31363,31364,31366,31368,31373,31377,31378,31379,31381,31382,31383,31384,31388,31389,31391,31392,31397,31398,31400,31401,31402,31404,31405,31406,31407,31408,31411,31414,31418,31423,31427,31428,31429,31431,31432,31434,31435,31437,31439,31442,31443,31445,31446,31449,31450,31452,31453,31454,31455,31456,31457,31458,31459,31461,31462,31466,31469,31471,31472,31478,31480,31481,31482,31485,31487,31490,31491,31492,31494,31496,31498,31499,31503,31505,31508,31509,31512,31513,31515,31518,31520,31524,31525,31526,31528,31530,31531,31532,31534,31537,31539,31541,31542,31544,31545,31546,31548,31550,31557,31558,31559,31560,31561,31563,31564,31565,31567,31568,31569,31570,31572,31574,31576,31578,31579,31581,31584,31586,31589,31591,31596,31598,31600,31601,31602,31604,31605,31607,31609,31610,31611,31614,31616,31620,31621,31622,31623,31627,31629,31631,31632,31634,31636,31637,31639,31640,31641,31642,31644,31645,31647,31648,31649,31650,31654,31655,31656,31657,31658,31659,31660,31661,31665,31668,31672,31680,31681,31684,31686,31687,31689,31691,31692,31695,31697,31699,31705,31706,31707,31709,31712,31713,31716,31717,31718,31721,31722,31725,31726,31729,31731,31734,31735,31740,31742,31744,31751,31755,31756,31757,31759,31761,31762,31763,31764,31766,31767,31774,31775,31777,31779,31782,31783,31786,31787,31799,31800,31805,31806,31807,31808,31809,31811,31820,31821,31823,31824,31828,31830,31832,31839,31840,31843,31844,31845,31852,31854,31858,31859,31860,31861,31867,31868,31869,31870,31873,31874,31875,31881,31883,31885,31888,31889,31890,31893,31895,31896,31899,31900,31901,31902,31903,31905,31906,31908,31909,31911,31912,31914,31915,31917,31918,31921,31922,31923,31925,31929,31932,31933,31934,31936,31937,31938,31941,31943,31944,31946,31948,31949,31950,31954,31957,31958,31959,31960,31961,31964,31965,31966,31967,31968,31970,31975,31976,31983,31984,31986,31988,31990,31992,31994,31995,31998,32000,32002,32004,32005,32006,32007,32009,32010,32011,32013,32016,32020,32021,32023,32024,32025,32026,32027,32028,32032,32033,32034,32039,32043,32044,32046,32047,32048,32049,32050,32051,32053,32057,32058,32060,32063,32064,32066,32067,32068,32069,32070,32075,32076,32078,32079,32080,32085,32086,32091,32094,32097,32098,32099,32102,32104,32110,32112,32113,32114,32115,32117,32118,32119,32121,32125,32129,32137,32143,32145,32147,32153,32154,32155,32156,32158,32159,32160,32162,32163,32166,32171,32172,32173,32174,32175,32176,32177,32178,32180,32181,32184,32186,32187,32189,32190,32191,32199,32202,32203,32207,32209,32210,32213,32216,32217,32218,32220,32221,32222,32224,32225,32227,32228,32232,32233,32236,32239,32242,32244,32249,32251,32257,32260,32261,32264,32265,32266,32267,32272,32273,32274,32283,32285,32286,32287,32289,32290,32291,32294,32299,32302,32303,32305,32306,32308,32309,32311,32313,32314,32315,32317,32318,32319,32321,32323,32325,32326,32327,32328,32330,32331,32333,32338,32340,32341,32342,32345,32346,32349,32350,32353,32358,32359,32361,32362,32363,32365,32368,32371,32377,32379,32380,32381,32383,32386,32387,32392,32393,32396,32398,32399,32400,32402,32403,32404,32406,32411,32412,32415,32416,32417,32418,32419,32420,32421,32422,32423,32424,32425,32426,32427,32428,32429,32431,32432,32433,32434,32435,32437,32438,32439,32440,32441,32442,32445,32446,32447,32448,32449,32450,32451,32452,32453,32454,32455,32456,32457,32458,32459,32460,32461,32462,32463,32464,32465,32466,32467,32468,32469,32471,32472,32473,32474,32475,32476,32477,32478,32479,32480,32481,32482,32483,32485,32486,32487,32488,32489,32490,32491,32493,32494,32495,32496,32497,32498,32499,32500,32501,32502,32503,32504,32506,32507,32508,32509,32510,32511,32512,32513,32514,32515,32516,32517,32518,32519,32520,32521,32523,32524,32525,32526,32527,32529,32530,32531,32532,32533,32534,32535,32536,32537,32538,32539,32540,32541,32543,32544,32545,32546,32547,32548,32549,32550,32551,32552,32553,32554,32555,32556,32557,32558,32559,32560,32561,32562,32563,32564,32565,32566,32568,32570,32573,32578,32580,32581,32584,32588,32589,32590,32592,32593,32596,32597,32599,32600,32602,32607,32608,32609,32610,32615,32616,32617,32618,32619,32622,32624,32625,32626,32628,32629,32631,32632,32633,32638,32641,32642,32643,32645,32646,32647,32648,32650,32651,32652,32654,32660,32666,32669,32670,32671,32673,32675,32676,32679,32680,32681,32686,32687,32688,32690,32694,32696,32697,32700,32701,32703,32705,32709,32710,32714,32716,32718,32722,32724,32725,32728,32735,32736,32737,32741,32742,32745,32747,32750,32752,32753,32755,32761,32763,32764,32768,32769,32771,32772,32773,32774,32779,32780,32781,32784,32785,32786,32788,32789,32790,32791,32792,32793,32796,32800,32801,32802,32805,32806,32807,32808,32809,32810,32817,32819,32821,32822,32823,32824,32827,32829,32831,32834,32835,32838,32842,32843,32844,32845,32850,32852,32854,32856,32858,32862,32863,32865,32866,32872,32873,32874,32879,32880,32881,32882,32883,32884,32886,32887,32889,32893,32894,32895,32896,32899,32900,32901,32902,32903,32905,32907,32908,32915,32918,32920,32922,32923,32924,32925,32927,32928,32929,32930,32932,32933,32937,32938,32939,32940,32941,32942,32943,32945,32946,32948,32951,32954,32956,32957,32958,32959,32960,32961,32962,32963,32964,32966,32972,32973,32974,32982,32983,32985,32986,32987,32988,32989,32990,32993,32996,32997,32999,33000,33001,33002,33003,33004,33005,33007,33008,33009,33010,33011,33012,33014,33016,33018,33020,33021,33026,33029,33030,33031,33032,33033,33034,33037,33038,33039,33040,33041,33042,33043,33044,33046,33048,33050,33051,33054,33059,33060,33065,33067,33068,33071,33072,33073,33074,33075,33078,33080,33081,33086,33094,33096,33098,33099,33100,33102,33104,33105,33107,33108,33109,33113,33114,33119,33120,33125,33126,33127,33129,33131,33133,33134,33136,33137,33139,33140,33144,33145,33146,33147,33148,33149,33150,33151,33152,33154,33155,33160,33162,33167,33169,33171,33173,33176,33178,33179,33180,33181,33184,33187,33188,33190,33192,33193,33194,33200,33203,33205,33208,33210,33211,33213,33214,33215,33216,33217,33218,33219,33222,33224,33225,33226,33228,33229,33231,33233,33235,33240,33241,33242,33247,33248,33250,33251,33253,33255,33256,33258,33260,33261,33267,33268,33274,33275,33276,33278,33280,33281,33282,33284,33285,33286,33287,33288,33289,33290,33292,33293,33294,33296,33298,33300,33302,33303,33304,33307,33308,33310,33311,33313,33314,33315,33320,33321,33322,33323,33324,33325,33326,33327,33328,33329,33331,33332,33333,33334,33335,33336,33337,33339,33342,33344,33348,33351,33353,33355,33359,33368,33369,33370,33373,33375,33378,33380,33382,33384,33386,33387,33390,33391,33392,33393,33394,33395,33396,33398,33399,33400,33401,33402,33405,33406,33407,33410,33412,33416,33418,33419,33421,33422,33423,33425,33426,33431,33432,33433,33436,33437,33439,33441,33443,33444,33445,33446,33448,33449,33450,33451,33452,33453,33454,33455,33456,33457,33459,33460,33463,33464,33465,33467,33469,33470,33473,33476,33477,33479,33480,33482,33483,33484,33485,33486,33487,33489,33490,33491,33492,33493,33495,33496,33497,33499,33500,33502,33503,33504,33505,33507,33508,33509,33510,33511,33515,33519,33521,33523,33524,33527,33529,33530,33531,33537,33538,33539,33540,33541,33542,33543,33544,33545,33548,33550,33551,33553,33556,33557,33558,33559,33560,33562,33563,33564,33571,33575,33576,33579,33580,33581,33583,33585,33586,33587,33588,33589,33590,33592,33593,33594,33596,33600,33603,33605,33606,33607,33609,33610,33615,33616,33617,33618,33620,33624,33626,33627,33628,33630,33631,33632,33633,33635,33636,33637,33638,33639,33640,33641,33642,33643,33644,33645,33646,33647,33651,33653,33655,33656,33659,33660,33661,33669,33670,33671,33673,33674,33678,33682,33683,33686,33688,33690,33691,33692,33694,33695,33696,33698,33703,33704,33705,33706,33707,33712,33713,33714,33715,33716,33717,33718,33719,33720,33721,33722,33724,33725,33728,33729,33733,33735,33738,33740,33742,33743,33747,33748,33750,33752,33756,33757,33759,33760,33761,33765,33769,33770,33771,33775,33776,33777,33778,33780,33783,33784,33785,33787,33789,33793,33795,33796,33798,33799,33802,33803,33804,33805,33806,33807,33809,33811,33816,33820,33821,33824,33826,33828,33829,33830,33831,33832,33833,33834,33836,33841,33845,33848,33852,33853,33862,33865,33870,33873,33879,33881,33882,33883,33884,33889,33890,33891,33894,33897,33899,33900,33901,33902,33903,33905,33907,33909,33910,33911,33912,33913,33914,33922,33924,33927,33928,33929,33931,33932,33934,33936,33940,33943,33945,33948,33950,33951,33953,33965,33967,33970,33972,33976,33977,33978,33979,33980,33981,33983,33984,33985,33988,33990,33993,33994,33995,33997,34000,34001,34003,34006,34009,34010,34013,34015,34016,34019,34021,34022,34028,34030,34032,34036,34044,34047,34048,34054,34060,34065,34067,34068,34069,34071,34072,34074,34079,34081,34083,34085,34086,34091,34092,34093,34101,34103,34104,34105,34106,34107,34108,34109,34112,34113,34115,34120,34121,34122,34123,34126,34133,34134,34135,34136,34137,34138,34142,34147,34148,34152,34153,34154,34157,34162,34164,34167,34169,34170,34171,34174,34176,34180,34181,34183,34184,34186,34191,34192,34193,34196,34199,34201,34203,34204,34212,34214,34216,34217,34218,34219,34220,34222,34223,34224,34231,34233,34234,34241,34249,34253,34255,34256,34259,34261,34268,34269,34276,34277,34281,34282,34295,34297,34298,34299,34302,34303,34306,34309,34310,34311,34314,34315,34321,34323,34326,34327,34330,34338,34343,34345,34349,34351,34352,34360,34364,34367,34381,34382,34383,34384,34385,34388,34389,34394,34395,34396,34398,34399,34402,34407,34411,34412,34414,34417,34425,34426,34427,34428,34429,34430,34431,34432,34433,34434,34442,34443,34444,34445,34451,34453,34460,34461,34467,34468,34471,34472,34473,34474,34475,34476,34479,34480,34481,34484,34485,34486,34490,34496,34500,34502,34503,34505,34506,34507,34509,34510,34511,34512,34513,34516,34520,34521,34523,34526,34527,34532,34537,34540,34541,34542,34543,34544,34545,34546,34547,34548,34552,34553,34555,34558,34560,34562,34563,34566,34567,34568,34569,34570,34573,34577,34578,34579,34581,34583,34584,34586,34588,34590,34593,34594,34595,34597,34601,34606,34609,34612,34615,34619,34622,34623,34631,34632,34633,34635,34636,34638,34643,34645,34647,34649,34655,34656,34659,34660,34661,34662,34664,34666,34670,34672,34676,34678,34680,34683,34684,34685,34686,34687,34690,34691,34693,34696,34699,34701,34707,34711,34718,34719,34722,34728,34731,34732,34733,34735,34739,34741,34746,34747,34749,34752,34756,34758,34759,34760,34762,34763,34768,34769,34770,34771,34779,34784,34789,34794,34796,34798,34799,34802,34806,34807,34809,34811,34814,34819,34821,34826,34829,34830,34831,34833,34835,34836,34837,34838,34843,34847,34849,34850,34851,34855,34865,34866,34870,34873,34875,34876,34880,34882,34884,34885,34886,34892,34893,34898,34899,34900,34903,34905,34907,34909,34910,34913,34914,34915,34916,34917,34920,34921,34923,34924,34926,34928,34930,34933,34935,34937,34941,34942,34943,34945,34946,34948,34949,34952,34955,34957,34962,34966,34967,34969,34972,34974,34978,34980,34987,34989,34990,34992,34993,34996,34997,34999,35004,35007,35009,35010,35011,35012,35013,35014,35017,35018,35022,35023,35026,35028,35029,35032,35033,35036,35037,35039,35041,35042,35043,35044,35045,35048,35055,35056,35057,35058,35059,35060,35064,35065,35068,35069,35070,35074,35076,35079,35082,35084,35088,35090,35091,35093,35097,35098,35099,35101,35102,35105,35109,35114,35115,35120,35122,35124,35126,35128,35131,35133,35137,35139,35140,35148,35149,35158,35166,35167,35168,35172,35174,35178,35180,35181,35183,35186,35188,35191,35195,35198,35199,35201,35203,35206,35207,35208,35210,35211,35215,35219,35222,35223,35224,35226,35228,35233,35238,35239,35241,35242,35244,35247,35250,35251,35258,35261,35263,35264,35265,35266,35268,35269,35270,35271,35272,35273,35274,35275,35276,35278,35279,35280,35281,35282,35284,35286,35290,35292,35293,35294,35299,35301,35302,35303,35307,35311,35315,35316,35320,35324,35328,35330,35331,35335,35336,35338,35340,35342,35343,35344,35345,35347,35349,35350,35351,35352,35355,35357,35359,35362,35363,35365,35370,35373,35377,35379,35380,35382,35386,35387,35388,35390,35393,35398,35400,35408,35409,35410,35412,35413,35414,35419,35422,35424,35426,35427,35430,35432,35433,35435,35436,35437,35438,35440,35441,35442,35443,35449,35451,35452,35458,35460,35461,35463,35465,35466,35468,35469,35473,35475,35477,35480,35482,35486,35488,35489,35491,35492,35493,35494,35495,35496,35498,35500,35501,35504,35506,35510,35513,35516,35519,35522,35524,35527,35529,35531,35532,35533,35535,35538,35542,35546,35547,35548,35550,35552,35553,35554,35556,35558,35559,35563,35565,35566,35569,35571,35574,35575,35576,35578,35580,35582,35584,35585,35586,35588,35591,35594,35596,35598,35600,35604,35606,35607,35609,35610,35611,35613,35616,35617,35622,35624,35627,35628,35635,35641,35646,35649,35654,35657,35660,35662,35663,35670,35672,35673,35674,35675,35676,35679,35686,35691,35692,35693,35695,35696,35697,35698,35700,35703,35709,35712,35715,35722,35724,35726,35728,35730,35731,35734,35737,35738,35740,35744,35745,35746,35747,35748,35749,35750,35751,35752,35753,35754,35755,35757,35758,35759,35760,35762,35763,35764,35765,35766,35767,35768,35769,35770,35772,35773,35774,35775,35776,35777,35778,35779,35780,35781,35782,35784,35785,35786,35787,35788,35789,35790,35791,35793,35794,35795,35796,35797,35798,35799,35800,35801,35802,35803,35804,35805,35806,35807,35808,35809,35810,35811,35812,35813,35814,35815,35816,35817,35819,35820,35821,35822,35823,35824,35825,35826,35827,35828,35829,35830,35831,35832,35833,35834,35835,35836,35837,35838,35839,35840,35841,35842,35843,35844,35845,35846,35847,35848,35850,35851,35852,35853,35854,35855,35856,35857,35858,35859,35860,35861,35862,35863,35864,35865,35866,35867,35868,35869,35871,35872,35873,35874,35875,35876,35877,35878,35879,35880,35881,35882,35883,35884,35885,35886,35887,35888,35889,35890,35891,35892,35893,35894,35895,35898,35903,35905,35910,35911,35912,35913,35914,35916,35918,35920,35924,35925,35930,35937,35938,35946,35947,35948,35949,35955,35960,35961,35962,35964,35970,35973,35977,35978,35980,35981,35982,35987,35988,35992,35997,35998,36000,36001,36002,36007,36008,36009,36010,36011,36012,36013,36014,36015,36016,36018,36019,36020,36022,36023,36024,36027,36028,36029,36031,36032,36033,36034,36035,36036,36037,36039,36040,36042,36045,36046,36049,36050,36051,36058,36059,36060,36062,36064,36065,36066,36067,36068,36070,36074,36076,36077,36084,36088,36090,36091,36092,36093,36100,36101,36103,36104,36106,36107,36109,36111,36112,36115,36116,36118,36119,36123,36125,36126,36127,36129,36130,36131,36132,36133,36134,36135,36136,36137,36138,36139,36140,36141,36142,36143,36144,36145,36146,36147,36148,36149,36150,36151,36152,36153,36154,36155,36156,36157,36158,36159,36160,36161,36162,36163,36164,36165,36166,36167,36168,36169,36170,36171,36172,36173,36174,36175,36176,36179,36180,36181,36182,36184,36185,36186,36187,36188,36189,36190,36192,36193,36194,36195,36196,36198,36199,36203,36205,36208,36209,36211,36212,36213,36214,36215,36225,36228,36229,36234,36235,36241,36244,36245,36249,36255,36259,36264,36273,36275,36276,36277,36280,36282,36284,36286,36287,36290,36291,36292,36294,36299,36300,36302,36303,36305,36310,36311,36314,36315,36317,36318,36319,36321,36323,36324,36326,36328,36330,36331,36332,36335,36339,36341,36343,36344,36345,36346,36347,36348,36349,36351,36357,36360,36361,36362,36364,36367,36368,36372,36381,36382,36383,36385,36386,36387,36393,36394,36395,36396,36398,36399,36400,36401,36404,36405,36409,36410,36412,36413,36416,36417,36418,36420,36423,36424,36425,36426,36427,36428,36432,36433,36434,36437,36441,36447,36448,36451,36452,36454,36457,36460,36461,36463,36464,36466,36468,36470,36474,36476,36479,36481,36482,36484,36485,36487,36489,36490,36491,36493,36495,36496,36497,36499,36500,36505,36508,36510,36513,36522,36523,36524,36527,36528,36529,36530,36538,36542,36544,36549,36550,36552,36554,36555,36556,36557,36558,36559,36562,36564,36571,36575,36578,36579,36587,36600,36603,36604,36605,36606,36611,36613,36617,36618,36620,36626,36627,36628,36629,36633,36635,36636,36637,36638,36639,36645,36646,36649,36650,36655,36659,36664,36665,36667,36670,36671,36674,36676,36677,36678,36681,36684,36685,36686,36692,36695,36700,36703,36705,36706,36707,36708,36710,36711,36712,36713,36715,36716,36717,36718,36719,36720,36721,36722,36723,36724,36725,36726,36727,36728,36729,36730,36731,36732,36733,36734,36735,36737,36738,36739,36740,36741,36742,36743,36744,36745,36746,36747,36749,36750,36751,36752,36753,36755,36756,36757,36758,36759,36760,36761,36762,36763,36764,36766,36767,36771,36774,36775,36776,36777,36779,36781,36782,36783,36784,36785,36786,36790,36791,36793,36794,36795,36796,36797,36798,36799,36801,36802,36804,36805,36806,36807,36808,36814,36816,36817,36819,36820,36821,36824,36825,36826,36827,36828,36829,36830,36831,36834,36836,36837,36838,36840,36841,36842,36843,36845,36846,36847,36848,36851,36852,36855,36856,36857,36858,36861,36864,36865,36866,36867,36868,36869,36870,36873,36874,36875,36877,36878,36879,36880,36881,36882,36883,36884,36885,36886,36887,36889,36890,36891,36893,36894,36895,36896,36897,36898,36899,36902,36903,36909,36910,36911,36913,36914,36917,36918,36920,36921,36923,36924,36926,36929,36930,36932,36933,36935,36937,36938,36939,36941,36942,36943,36944,36945,36946,36947,36948,36949,36950,36951,36952,36953,36955,36956,36957,36958,36960,36961,36962,36963,36965,36968,36969,36973,36974,36975,36978,36980,36981,36982,36983,36984,36986,36988,36989,36991,36992,36993,36994,36995,36996,36999,37000,37001,37002,37003,37007,37008,37009,37011,37013,37015,37017,37019,37021,37025,37026,37027,37030,37032,37034,37036,37038,37039,37040,37041,37043,37044,37045,37046,37048,37049,37050,37051,37054,37057,37059,37060,37061,37063,37066,37070,37071,37072,37073,37075,37079,37083,37084,37085,37089,37090,37092,37094,37095,37096,37099,37101,37103,37108,37109,37111,37112,37117,37118,37122,37124,37129,37138,37143,37144,37145,37150,37154,37155,37159,37165,37167,37168,37169,37170,37172,37177,37187,37190,37192,37193,37194,37195,37196,37197,37198,37199,37200,37202,37204,37206,37207,37208,37210,37213,37214,37217,37218,37219,37220,37221,37225,37226,37228,37230,37231,37232,37233,37234,37235,37236,37237,37238,37239,37240,37241,37245,37246,37247,37250,37251,37253,37255,37257,37259,37260,37261,37264,37265,37266,37271,37274,37275,37276,37278,37282,37283,37284,37290,37291,37292,37293,37294,37295,37297,37300,37301,37304,37306,37312,37313,37317,37318,37319,37320,37321,37322,37323,37324,37325,37326,37327,37328,37329,37334,37335,37336,37337,37339,37340,37341,37343,37345,37347,37350,37351,37353,37357,37365,37366,37372,37375,37383,37385,37389,37390,37392,37393,37396,37397,37406,37411,37417,37420,37428,37431,37432,37433,37437,37438,37439,37440,37444,37445,37448,37449,37451,37453,37456,37457,37463,37466,37467,37470,37474,37476,37478,37489,37492,37496,37499,37500,37502,37504,37507,37509,37518,37521,37523,37525,37526,37528,37530,37531,37532,37544,37548,37549,37550,37554,37555,37559,37561,37563,37564,37569,37573,37575,37576,37583,37586,37604,37609,37610,37613,37616,37618,37619,37624,37626,37628,37636,37638,37647,37648,37653,37656,37657,37658,37664,37665,37666,37667,37670,37672,37675,37676,37678,37679,37682,37683,37685,37686,37690,37691,37694,37700,37706,37707,37709,37716,37718,37722,37723,37724,37728,37733,37738,37740,37742,37744,37749,37756,37758,37762,37770,37772,37775,37780,37782,37783,37784,37786,37794,37799,37804,37805,37806,37808,37811,37817,37827,37832,37834,37837,37840,37841,37846,37847,37848,37852,37853,37855,37857,37858,37860,37861,37864,37885,37891,37895,37904,37907,37908,37912,37913,37914,37921,37931,37934,37938,37939,37941,37942,37944,37946,37950,37953,37956,37969,37970,37971,37978,37979,37982,37984,37986,37987,37988,37994,37995,38000,38002,38005,38007,38012,38013,38014,38015,38017,38021,38022,38023,38024,38025,38026,38027,38028,38029,38030,38031,38032,38034,38035,38036,38037,38039,38041,38042,38043,38044,38045,38046,38047,38048,38049,38050,38051,38052,38053,38054,38055,38056,38057,38058,38059,38060,38061,38062,38063,38064,38065,38066,38067,38068,38069,38070,38071,38072,38073,38074,38075,38076,38077,38078,38079,38080,38081,38082,38083,38084,38085,38086,38088,38089,38090,38091,38092,38093,38094,38096,38097,38098,38101,38102,38103,38104,38105,38107,38108,38109,38110,38111,38112,38113,38114,38115,38116,38117,38119,38120,38121,38122,38123,38124,38125,38126,38127,38128,38129,38130,38131,38132,38133,38134,38135,38136,38137,38138,38140,38141,38142,38143,38144,38145,38146,38147,38148,38149,38150,38151,38152,38153,38154,38155,38156,38157,38158,38159,38160,38161,38162,38163,38164,38165,38166,38167,38168,38169,38170,38171,38173,38174,38175,38177,38178,38179,38180,38181,38182,38184,38185,38186,38187,38188,38189,38190,38191,38192,38193,38194,38196,38197,38198,38199,38200,38201,38202,38203,38204,38206,38207,38208,38209,38210,38212,38213,38214,38215,38217,38218,38220,38221,38222,38223,38224,38225,38226,38227,38228,38230,38231,38232,38233,38235,38236,38237,38238,38239,38241,38242,38243,38244,38245,38246,38247,38248,38249,38250,38251,38252,38253,38255,38256,38257,38258,38259,38262,38263,38271,38272,38274,38275,38279,38281,38282,38283,38286,38287,38289,38290,38291,38292,38294,38296,38297,38304,38305,38306,38307,38308,38309,38311,38312,38313,38317,38321,38322,38329,38331,38332,38334,38339,38342,38343,38344,38346,38347,38348,38349,38352,38356,38357,38358,38360,38364,38369,38370,38373,38376,38377,38378,38379,38381,38382,38383,38384,38385,38386,38387,38388,38389,38390,38391,38392,38393,38394,38395,38396,38397,38398,38400,38401,38402,38403,38404,38405,38406,38408,38409,38410,38411,38412,38413,38414,38415,38416,38417,38418,38420,38421,38422,38423,38425,38426,38428,38429,38431,38433,38434,38440,38442,38444,38446,38447,38449,38450,38451,38452,38453,38454,38459,38460,38461,38463,38464,38466,38468,38469,38470,38471,38472,38473,38475,38476,38477,38479,38480,38484,38485,38488,38491,38492,38493,38494,38495,38497,38498,38499,38500,38501,38502,38503,38504,38505,38506,38508,38512,38514,38515,38516,38517,38518,38519,38520,38522,38525,38532,38533,38534,38536,38538,38539,38541,38542,38543,38544,38548,38549,38551,38552,38553,38555,38556,38560,38563,38567,38568,38570,38576,38577,38578,38579,38580,38582,38583,38584,38585,38587,38588,38589,38590,38592,38593,38596,38597,38598,38599,38601,38602,38603,38604,38605,38606,38607,38609,38610,38613,38614,38617,38619,38620,38622,38624,38626,38627,38632,38633,38634,38635,38639,38640,38642,38643,38646,38647,38649,38651,38654,38656,38657,38660,38662,38663,38664,38665,38666,38669,38670,38671,38673,38675,38678,38681,38684,38686,38692,38695,38698,38701,38704,38706,38712,38713,38717,38718,38722,38724,38726,38728,38729,38738,38739,38742,38745,38746,38747,38748,38750,38752,38753,38754,38756,38757,38758,38760,38761,38763,38765,38769,38771,38772,38774,38777,38778,38780,38785,38788,38789,38790,38795,38797,38799,38800,38801,38802,38804,38808,38812,38816,38819,38822,38824,38827,38829,38831,38834,38835,38836,38849,38851,38854,38856,38857,38859,38860,38867,38876,38886,38887,38889,38890,38891,38892,38893,38894,38898,38899,38901,38902,38905,38907,38911,38913,38914,38915,38917,38918,38920,38922,38924,38927,38928,38929,38930,38931,38935,38936,38938,38940,38945,38948,38955,38956,38957,38960,38964,38967,38968,38969,38971,38972,38973,38982,38987,38988,38989,38990,38991,38995,38996,38997,39000,39003,39006,39013,39015,39019,39023,39024,39025,39027,39028,39029,39030,39031,39032,39033,39034,39035,39036,39037,39038,39039,39040,39041,39042,39043,39044,39045,39046,39047,39048,39049,39050,39052,39053,39055,39056,39057,39059,39060,39062,39063,39064,39066,39067,39068,39069,39070,39071,39072,39073,39074,39076,39077,39078,39079,39080,39082,39087,39089,39091,39094,39098,39100,39107,39108,39110,39118,39121,39122,39123,39125,39128,39129,39130,39131,39132,39134,39135,39138,39143,39144,39145,39146,39147,39149,39150,39151,39154,39156,39164,39165,39166,39171,39173,39177,39178,39180,39181,39184,39186,39187,39188,39192,39194,39195,39197,39198,39200,39201,39204,39208,39212,39214,39221,39229,39230,39231,39234,39237,39241,39243,39244,39248,39249,39250,39252,39253,39255,39260,39262,39267,39269,39271,39272,39273,39274,39275,39276,39277,39278,39279,39280,39281,39282,39284,39285,39286,39287,39290,39292,39293,39295,39296,39297,39300,39301,39302,39303,39304,39306,39307,39309,39311,39312,39313,39314,39315,39316,39317,39318,39319,39320,39321,39333,39336,39340,39341,39342,39345,39347,39348,39356,39361,39364,39365,39366,39368,39376,39377,39378,39381,39384,39385,39387,39389,39391,39394,39405,39406,39409,39410,39416,39419,39423,39425,39429,39438,39439,39442,39443,39446,39449,39464,39467,39472,39477,39479,39486,39488,39490,39491,39493,39501,39509,39511,39514,39515,39519,39522,39524,39525,39529,39530,39531,39532,39533,39534,39535,39536,39537,39539,39540,39541,39542,39543,39544,39545,39546,39547,39548,39549,39550,39551,39552,39553,39554,39556,39557,39558,39559,39560,39562,39563,39564,39567,39568,39569,39570,39571,39574,39575,39576,39578,39579,39580,39581,39582,39583,39584,39585,39586,39587,39588,39589,39591,39592,39597,39599,39600,39601,39606,39607,39608,39610,39612,39616,39617,39618,39620,39621,39627,39628,39631,39633,39634,39635,39636,39638,39640,39641,39646,39647,39649,39650,39651,39654,39658,39659,39661,39662,39663,39665,39668,39671,39673,39675,39683,39686,39688,39693,39695,39699,39704,39706,39711,39714,39715,39717,39719,39720,39721,39722,39726,39727,39729,39730,39739,39740,39745,39746,39747,39748,39749,39751,39752,39753,39757,39758,39759,39761,39764,39768,39770,39791,39796,39799,39811,39822,39825,39826,39827,39830,39831,39839,39840,39848,39850,39851,39853,39854,39860,39865,39872,39878,39880,39881,39882,39887,39889,39890,39892,39894,39899,39905,39906,39907,39908,39911,39912,39920,39921,39922,39925,39933,39940,39942,39944,39945,39946,39948,39949,39952,39954,39955,39956,39957,39963,39969,39972,39973,39981,39982,39983,39984,39985,39986,39993,39994,39995,39998,40006,40007,40008,40009,40018,40020,40022,40023,40026,40031,40032,40039,40054,40055,40056,40060,40063,40065,40066,40069,40070,40071,40072,40075,40077,40078,40080,40081,40082,40084,40085,40090,40091,40092,40094,40095,40096,40097,40098,40099,40100,40101,40102,40103,40104,40105,40107,40109,40110,40112,40113,40114,40115,40116,40117,40118,40119,40120,40122,40123,40124,40125,40131,40132,40133,40134,40135,40138,40139,40140,40141,40142,40143,40144,40147,40148,40149,40150,40151,40152,40153,40156,40157,40158,40159,40162,40165,40167,40169,40171,40172,40176,40179,40180,40182,40195,40198,40199,40200,40201,40206,40210,40213,40219,40223,40227,40230,40232,40234,40235,40236,40251,40254,40255,40257,40260,40262,40264,40272,40273,40281,40284,40285,40286,40288,40289,40292,40298,40300,40303,40306,40314,40327,40329,40335,40346,40356,40361,40363,40367,40370,40372,40376,40378,40379,40385,40386,40388,40390,40399,40403,40407,40409,40421,40422,40429,40431,40434,40440,40441,40442,40445,40474,40475,40478,40479,40480,40481,40482,40483,40485,40486,40488,40489,40490,40491,40492,40493,40495,40497,40498,40499,40501,40502,40503,40504,40505,40506,40509,40510,40511,40513,40514,40515,40516,40517,40518,40519,40520,40521,40522,40523,40524,40526,40527,40529,40533,40535,40536,40538,40539,40540,40542,40547,40548,40550,40551,40552,40553,40554,40555,40556,40557,40560,40561,40563,40565,40568,40569,40572,40573,40574,40575,40577,40578,40583,40584,40587,40588,40593,40594,40595,40597,40599,40605,40607,40613,40614,40617,40618,40621,40628,40629,40632,40633,40634,40635,40636,40637,40638,40639,40643,40644,40649,40652,40653,40654,40655,40656,40657,40658,40660,40664,40665,40667,40668,40669,40670,40671,40672,40674,40677,40679,40680,40681,40682,40687,40692,40694,40695,40697,40699,40700,40701,40702,40711,40712,40715,40717,40718,40720,40723,40725,40727,40729,40736,40737,40738,40748,40751,40756,40759,40761,40763,40765,40766,40772,40778,40779,40782,40783,40784,40785,40786,40788,40796,40799,40800,40801,40802,40803,40806,40807,40810,40812,40818,40822,40823,40831,40832,40835,40836,40837,40838,40839,40840,40841,40842,40843,40844,40845,40848,40852,40853,40857,40858,40859,40860,40861,40863,40864,44032,44033,44036,44039,44040,44041,44042,44048,44049,44050,44051,44052,44053,44054,44055,44057,44058,44059,44060,44061,44064,44068,44076,44077,44079,44080,44081,44088,44089,44092,44096,44107,44109,44116,44120,44124,44144,44145,44148,44151,44152,44154,44160,44161,44163,44164,44165,44166,44169,44170,44171,44172,44176,44180,44188,44189,44191,44192,44193,44200,44201,44202,44204,44207,44208,44216,44217,44219,44220,44221,44225,44228,44232,44236,44245,44247,44256,44257,44260,44263,44264,44266,44268,44271,44272,44273,44275,44277,44278,44284,44285,44288,44292,44294,44300,44301,44303,44305,44312,44316,44320,44329,44332,44333,44340,44341,44344,44348,44356,44357,44359,44361,44368,44372,44376,44385,44387,44396,44397,44400,44403,44404,44405,44406,44411,44412,44413,44415,44417,44418,44424,44425,44428,44432,44444,44445,44452,44471,44480,44481,44484,44488,44496,44497,44499,44508,44512,44516,44536,44537,44540,44543,44544,44545,44552,44553,44555,44557,44564,44592,44593,44596,44599,44600,44602,44608,44609,44611,44613,44614,44618,44620,44621,44622,44624,44628,44630,44636,44637,44639,44640,44641,44645,44648,44649,44652,44656,44664,44665,44667,44668,44669,44676,44677,44684,44732,44733,44734,44736,44740,44748,44749,44751,44752,44753,44760,44761,44764,44776,44779,44781,44788,44792,44796,44807,44808,44813,44816,44844,44845,44848,44850,44852,44860,44861,44863,44865,44866,44867,44872,44873,44880,44892,44893,44900,44901,44921,44928,44932,44936,44944,44945,44949,44956,44984,44985,44988,44992,44999,45000,45001,45003,45005,45006,45012,45020,45032,45033,45040,45041,45044,45048,45056,45057,45060,45068,45072,45076,45084,45085,45096,45124,45125,45128,45130,45132,45134,45139,45140,45141,45143,45145,45149,45180,45181,45184,45188,45196,45197,45199,45201,45208,45209,45210,45212,45215,45216,45217,45218,45224,45225,45227,45228,45229,45230,45231,45233,45235,45236,45237,45240,45244,45252,45253,45255,45256,45257,45264,45265,45268,45272,45280,45285,45320,45321,45323,45324,45328,45330,45331,45336,45337,45339,45340,45341,45347,45348,45349,45352,45356,45364,45365,45367,45368,45369,45376,45377,45380,45384,45392,45393,45396,45397,45400,45404,45408,45432,45433,45436,45440,45442,45448,45449,45451,45453,45458,45459,45460,45464,45468,45480,45516,45520,45524,45532,45533,45535,45544,45545,45548,45552,45561,45563,45565,45572,45573,45576,45579,45580,45588,45589,45591,45593,45600,45620,45628,45656,45660,45664,45672,45673,45684,45685,45692,45700,45701,45705,45712,45713,45716,45720,45721,45722,45728,45729,45731,45733,45734,45738,45740,45744,45748,45768,45769,45772,45776,45778,45784,45785,45787,45789,45794,45796,45797,45798,45800,45803,45804,45805,45806,45807,45811,45812,45813,45815,45816,45817,45818,45819,45823,45824,45825,45828,45832,45840,45841,45843,45844,45845,45852,45908,45909,45910,45912,45915,45916,45918,45919,45924,45925,45927,45929,45931,45934,45936,45937,45940,45944,45952,45953,45955,45956,45957,45964,45968,45972,45984,45985,45992,45996,46020,46021,46024,46027,46028,46030,46032,46036,46037,46039,46041,46043,46045,46048,46052,46056,46076,46096,46104,46108,46112,46120,46121,46123,46132,46160,46161,46164,46168,46176,46177,46179,46181,46188,46208,46216,46237,46244,46248,46252,46261,46263,46265,46272,46276,46280,46288,46293,46300,46301,46304,46307,46308,46310,46316,46317,46319,46321,46328,46356,46357,46360,46363,46364,46372,46373,46375,46376,46377,46378,46384,46385,46388,46392,46400,46401,46403,46404,46405,46411,46412,46413,46416,46420,46428,46429,46431,46432,46433,46496,46497,46500,46504,46506,46507,46512,46513,46515,46516,46517,46523,46524,46525,46528,46532,46540,46541,46543,46544,46545,46552,46572,46608,46609,46612,46616,46629,46636,46644,46664,46692,46696,46748,46749,46752,46756,46763,46764,46769,46804,46832,46836,46840,46848,46849,46853,46888,46889,46892,46895,46896,46904,46905,46907,46916,46920,46924,46932,46933,46944,46948,46952,46960,46961,46963,46965,46972,46973,46976,46980,46988,46989,46991,46992,46993,46994,46998,46999,47000,47001,47004,47008,47016,47017,47019,47020,47021,47028,47029,47032,47047,47049,47084,47085,47088,47092,47100,47101,47103,47104,47105,47111,47112,47113,47116,47120,47128,47129,47131,47133,47140,47141,47144,47148,47156,47157,47159,47160,47161,47168,47172,47185,47187,47196,47197,47200,47204,47212,47213,47215,47217,47224,47228,47245,47272,47280,47284,47288,47296,47297,47299,47301,47308,47312,47316,47325,47327,47329,47336,47337,47340,47344,47352,47353,47355,47357,47364,47384,47392,47420,47421,47424,47428,47436,47439,47441,47448,47449,47452,47456,47464,47465,47467,47469,47476,47477,47480,47484,47492,47493,47495,47497,47498,47501,47502,47532,47533,47536,47540,47548,47549,47551,47553,47560,47561,47564,47566,47567,47568,47569,47570,47576,47577,47579,47581,47582,47585,47587,47588,47589,47592,47596,47604,47605,47607,47608,47609,47610,47616,47617,47624,47637,47672,47673,47676,47680,47682,47688,47689,47691,47693,47694,47699,47700,47701,47704,47708,47716,47717,47719,47720,47721,47728,47729,47732,47736,47747,47748,47749,47751,47756,47784,47785,47787,47788,47792,47794,47800,47801,47803,47805,47812,47816,47832,47833,47868,47872,47876,47885,47887,47889,47896,47900,47904,47913,47915,47924,47925,47926,47928,47931,47932,47933,47934,47940,47941,47943,47945,47949,47951,47952,47956,47960,47969,47971,47980,48008,48012,48016,48036,48040,48044,48052,48055,48064,48068,48072,48080,48083,48120,48121,48124,48127,48128,48130,48136,48137,48139,48140,48141,48143,48145,48148,48149,48150,48151,48152,48155,48156,48157,48158,48159,48164,48165,48167,48169,48173,48176,48177,48180,48184,48192,48193,48195,48196,48197,48201,48204,48205,48208,48221,48260,48261,48264,48267,48268,48270,48276,48277,48279,48281,48282,48288,48289,48292,48295,48296,48304,48305,48307,48308,48309,48316,48317,48320,48324,48333,48335,48336,48337,48341,48344,48348,48372,48373,48374,48376,48380,48388,48389,48391,48393,48400,48404,48420,48428,48448,48456,48457,48460,48464,48472,48473,48484,48488,48512,48513,48516,48519,48520,48521,48522,48528,48529,48531,48533,48537,48538,48540,48548,48560,48568,48596,48597,48600,48604,48617,48624,48628,48632,48640,48643,48645,48652,48653,48656,48660,48668,48669,48671,48708,48709,48712,48716,48718,48724,48725,48727,48729,48730,48731,48736,48737,48740,48744,48746,48752,48753,48755,48756,48757,48763,48764,48765,48768,48772,48780,48781,48783,48784,48785,48792,48793,48808,48848,48849,48852,48855,48856,48864,48867,48868,48869,48876,48897,48904,48905,48920,48921,48923,48924,48925,48960,48961,48964,48968,48976,48977,48981,49044,49072,49093,49100,49101,49104,49108,49116,49119,49121,49212,49233,49240,49244,49248,49256,49257,49296,49297,49300,49304,49312,49313,49315,49317,49324,49325,49327,49328,49331,49332,49333,49334,49340,49341,49343,49344,49345,49349,49352,49353,49356,49360,49368,49369,49371,49372,49373,49380,49381,49384,49388,49396,49397,49399,49401,49408,49412,49416,49424,49429,49436,49437,49438,49439,49440,49443,49444,49446,49447,49452,49453,49455,49456,49457,49462,49464,49465,49468,49472,49480,49481,49483,49484,49485,49492,49493,49496,49500,49508,49509,49511,49512,49513,49520,49524,49528,49541,49548,49549,49550,49552,49556,49558,49564,49565,49567,49569,49573,49576,49577,49580,49584,49597,49604,49608,49612,49620,49623,49624,49632,49636,49640,49648,49649,49651,49660,49661,49664,49668,49676,49677,49679,49681,49688,49689,49692,49695,49696,49704,49705,49707,49709,49711,49713,49714,49716,49736,49744,49745,49748,49752,49760,49765,49772,49773,49776,49780,49788,49789,49791,49793,49800,49801,49808,49816,49819,49821,49828,49829,49832,49836,49837,49844,49845,49847,49849,49884,49885,49888,49891,49892,49899,49900,49901,49903,49905,49910,49912,49913,49915,49916,49920,49928,49929,49932,49933,49939,49940,49941,49944,49948,49956,49957,49960,49961,49989,50024,50025,50028,50032,50034,50040,50041,50044,50045,50052,50056,50060,50112,50136,50137,50140,50143,50144,50146,50152,50153,50157,50164,50165,50168,50184,50192,50212,50220,50224,50228,50236,50237,50248,50276,50277,50280,50284,50292,50293,50297,50304,50324,50332,50360,50364,50409,50416,50417,50420,50424,50426,50431,50432,50433,50444,50448,50452,50460,50472,50473,50476,50480,50488,50489,50491,50493,50500,50501,50504,50505,50506,50508,50509,50510,50515,50516,50517,50519,50520,50521,50525,50526,50528,50529,50532,50536,50544,50545,50547,50548,50549,50556,50557,50560,50564,50567,50572,50573,50575,50577,50581,50583,50584,50588,50592,50601,50612,50613,50616,50617,50619,50620,50621,50622,50628,50629,50630,50631,50632,50633,50634,50636,50638,50640,50641,50644,50648,50656,50657,50659,50661,50668,50669,50670,50672,50676,50678,50679,50684,50685,50686,50687,50688,50689,50693,50694,50695,50696,50700,50704,50712,50713,50715,50716,50724,50725,50728,50732,50733,50734,50736,50739,50740,50741,50743,50745,50747,50752,50753,50756,50760,50768,50769,50771,50772,50773,50780,50781,50784,50796,50799,50801,50808,50809,50812,50816,50824,50825,50827,50829,50836,50837,50840,50844,50852,50853,50855,50857,50864,50865,50868,50872,50873,50874,50880,50881,50883,50885,50892,50893,50896,50900,50908,50909,50912,50913,50920,50921,50924,50928,50936,50937,50941,50948,50949,50952,50956,50964,50965,50967,50969,50976,50977,50980,50984,50992,50993,50995,50997,50999,51004,51005,51008,51012,51018,51020,51021,51023,51025,51026,51027,51028,51029,51030,51031,51032,51036,51040,51048,51051,51060,51061,51064,51068,51069,51070,51075,51076,51077,51079,51080,51081,51082,51086,51088,51089,51092,51094,51095,51096,51098,51104,51105,51107,51108,51109,51110,51116,51117,51120,51124,51132,51133,51135,51136,51137,51144,51145,51148,51150,51152,51160,51165,51172,51176,51180,51200,51201,51204,51208,51210,51216,51217,51219,51221,51222,51228,51229,51232,51236,51244,51245,51247,51249,51256,51260,51264,51272,51273,51276,51277,51284,51312,51313,51316,51320,51322,51328,51329,51331,51333,51334,51335,51339,51340,51341,51348,51357,51359,51361,51368,51388,51389,51396,51400,51404,51412,51413,51415,51417,51424,51425,51428,51445,51452,51453,51456,51460,51461,51462,51468,51469,51471,51473,51480,51500,51508,51536,51537,51540,51544,51552,51553,51555,51564,51568,51572,51580,51592,51593,51596,51600,51608,51609,51611,51613,51648,51649,51652,51655,51656,51658,51664,51665,51667,51669,51670,51673,51674,51676,51677,51680,51682,51684,51687,51692,51693,51695,51696,51697,51704,51705,51708,51712,51720,51721,51723,51724,51725,51732,51736,51753,51788,51789,51792,51796,51804,51805,51807,51808,51809,51816,51837,51844,51864,51900,51901,51904,51908,51916,51917,51919,51921,51923,51928,51929,51936,51948,51956,51976,51984,51988,51992,52000,52001,52033,52040,52041,52044,52048,52056,52057,52061,52068,52088,52089,52124,52152,52180,52196,52199,52201,52236,52237,52240,52244,52252,52253,52257,52258,52263,52264,52265,52268,52270,52272,52280,52281,52283,52284,52285,52286,52292,52293,52296,52300,52308,52309,52311,52312,52313,52320,52324,52326,52328,52336,52341,52376,52377,52380,52384,52392,52393,52395,52396,52397,52404,52405,52408,52412,52420,52421,52423,52425,52432,52436,52452,52460,52464,52481,52488,52489,52492,52496,52504,52505,52507,52509,52516,52520,52524,52537,52572,52576,52580,52588,52589,52591,52593,52600,52616,52628,52629,52632,52636,52644,52645,52647,52649,52656,52676,52684,52688,52712,52716,52720,52728,52729,52731,52733,52740,52744,52748,52756,52761,52768,52769,52772,52776,52784,52785,52787,52789,52824,52825,52828,52831,52832,52833,52840,52841,52843,52845,52852,52853,52856,52860,52868,52869,52871,52873,52880,52881,52884,52888,52896,52897,52899,52900,52901,52908,52909,52929,52964,52965,52968,52971,52972,52980,52981,52983,52984,52985,52992,52993,52996,53000,53008,53009,53011,53013,53020,53024,53028,53036,53037,53039,53040,53041,53048,53076,53077,53080,53084,53092,53093,53095,53097,53104,53105,53108,53112,53120,53125,53132,53153,53160,53168,53188,53216,53217,53220,53224,53232,53233,53235,53237,53244,53248,53252,53265,53272,53293,53300,53301,53304,53308,53316,53317,53319,53321,53328,53332,53336,53344,53356,53357,53360,53364,53372,53373,53377,53412,53413,53416,53420,53428,53429,53431,53433,53440,53441,53444,53448,53449,53456,53457,53459,53460,53461,53468,53469,53472,53476,53484,53485,53487,53488,53489,53496,53517,53552,53553,53556,53560,53562,53568,53569,53571,53572,53573,53580,53581,53584,53588,53596,53597,53599,53601,53608,53612,53628,53636,53640,53664,53665,53668,53672,53680,53681,53683,53685,53690,53692,53696,53720,53748,53752,53767,53769,53776,53804,53805,53808,53812,53820,53821,53823,53825,53832,53852,53860,53888,53889,53892,53896,53904,53905,53909,53916,53920,53924,53932,53937,53944,53945,53948,53951,53952,53954,53960,53961,53963,53972,53976,53980,53988,53989,54000,54001,54004,54008,54016,54017,54019,54021,54028,54029,54030,54032,54036,54038,54044,54045,54047,54048,54049,54053,54056,54057,54060,54064,54072,54073,54075,54076,54077,54084,54085,54140,54141,54144,54148,54156,54157,54159,54160,54161,54168,54169,54172,54176,54184,54185,54187,54189,54196,54200,54204,54212,54213,54216,54217,54224,54232,54241,54243,54252,54253,54256,54260,54268,54269,54271,54273,54280,54301,54336,54340,54364,54368,54372,54381,54383,54392,54393,54396,54399,54400,54402,54408,54409,54411,54413,54420,54441,54476,54480,54484,54492,54495,54504,54508,54512,54520,54523,54525,54532,54536,54540,54548,54549,54551,54588,54589,54592,54596,54604,54605,54607,54609,54616,54617,54620,54624,54629,54632,54633,54635,54637,54644,54645,54648,54652,54660,54661,54663,54664,54665,54672,54693,54728,54729,54732,54736,54738,54744,54745,54747,54749,54756,54757,54760,54764,54772,54773,54775,54777,54784,54785,54788,54792,54800,54801,54803,54804,54805,54812,54816,54820,54829,54840,54841,54844,54848,54853,54856,54857,54859,54861,54865,54868,54869,54872,54876,54887,54889,54896,54897,54900,54915,54917,54924,54925,54928,54932,54941,54943,54945,54952,54956,54960,54969,54971,54980,54981,54984,54988,54993,54996,54999,55001,55008,55012,55016,55024,55029,55036,55037,55040,55044,55057,55064,55065,55068,55072,55080,55081,55083,55085,55092,55093,55096,55100,55108,55111,55113,55120,55121,55124,55126,55127,55128,55129,55136,55137,55139,55141,55145,55148,55152,55156,55164,55165,55169,55176,55177,55180,55184,55192,55193,55195,55197,58129,58130,58131,58132,58133,58134,58135,58136,58137,58138,58139,58140,58141,58142,58143,58144,58145,58146,58147,58148,58149,58150,58151,58152,58153,58154,58155,58156,58157,58158,58159,58175,58176,58177,58178,58179,58180,58181,58182,58183,58184,58185,58186,58187,58191,58192,58193,58194,58195,58196,58197,58198,58199,58200,58201,58202,58203,58204,58205,58206,58207,58208,58209,58210,58211,58212,58213,58214,58215,58216,58217,58218,58219,58220,58221,58222,58223,58224,58225,58226,58227,58228,58229,58230,58231,58232,58233,58234,58235,58236,58237,58238,58239,58240,58241,58242,58243,58244,58245,58246,58247,58248,58249,58250,58251,58252,58253,58254,58255,58256,58284,58285,58286,58287,58288,58289,58290,58291,58292,58293,58294,58295,58296,58297,58298,58299,58300,58301,58302,58303,58304,58305,58306,58307,58308,58309,58310,58311,58312,58313,58314,58315,58316,58317,58318,58319,58320,58321,58322,58323,58324,58325,58326,58327,58328,58329,58330,58331,58332,58333,58334,58335,58336,58337,58338,58339,58340,58341,58342,58343,58344,58345,58346,58347,58348,58349,58350,58351,58352,58353,58354,58355,58356,58357,58358,58359,58360,58361,58362,58363,58364,58365,58366,58367,58368,58369,58370,58371,58372,58373,58374,58375,58376,58377,58378,58379,58380,58381,58382,58383,58384,58385,58386,58387,58388,58389,58390,58391,58392,58393,58394,58395,58396,58397,58398,58399,58400,58401,58402,58403,58404,58405,58406,58407,58408,58409,58410,58411,58412,58413,58414,58415,58416,58417,58418,58419,58420,58421,58422,58423,58424,58425,58426,58427,58428,58429,58430,58431,58432,58433,58434,58435,58436,58437,58438,58439,58440,58441,58442,58443,58444,58445,58446,58447,58448,58449,58450,58451,58452,58453,58454,58455,58456,58457,58458,58459,58460,58461,58462,58463,58464,58465,58466,58467,58468,58469,58470,58471,58472,58473,58474,58475,58476,58477,58478,58479,58480,58481,58482,58483,58484,58485,58486,58487,58488,58489,58490,58491,58492,58493,58494,58495,58496,58497,58498,58499,58500,58501,58502,58503,58504,58505,58506,58507,58508,58509,58510,58511,58512,58513,58514,58515,58516,58517,58518,58519,58520,58521,58522,58523,58524,58525,58526,58527,58528,58529,58530,58531,58532,58533,58534,58535,58536,58537,58538,58539,58540,58541,58542,58543,58544,58545,58546,58547,58548,58549,58550,58551,58552,58553,58554,58555,58556,58557,58558,58559,58560,58561,58562,58563,58564,58565,58566,58567,58568,58569,58570,58571,58572,58573,58574,58575,58576,58577,58578,58579,58580,58581,58582,58583,58584,58585,58586,58587,58588,58589,58590,58591,58592,58593,58594,58595,58596,58597,58669,58674,58684,58685,58687,58691,58694,58695,58699,58704,58711,58714,58718,58720,58726,58732,58734,58736,58737,58739,58740,58742,58743,58745,58754,58764,58765,58766,58767,58772,58773,58775,58777,58779,58787,58790,58799,58800,58801,58802,58803,58804,58805,58806,58807,58808,58817,58819,58827,58829,58830,58832,58834,58885,58888,58889,58901,58902,58906,58925,58926,58933,58937,58938,58943,58944,58953,58954,58955,58956,58957,58967,58968,58969,58970,58971,58972,58973,58974,58975,58976,58977,58978,58979,58980,58981,58982,58983,58984,58985,58986,58987,58988,58989,58990,58991,58992,58993,58994,58995,58996,58997,58998,58999,59000,59001,59002,59003,59004,59005,59006,59007,59008,59009,59010,59011,59012,59013,59014,59015,59016,59017,59018,59019,59020,59021,59022,59023,59024,59025,59026,59244,59277,59278,59279,59280,59281,59282,59283,59284,59285,59286,59335,59336,59442,59443,59444,59445,59446,59447,59448,63834,64017,65072,65073,65075,65076,65077,65078,65079,65080,65081,65082,65083,65084,65085,65086,65087,65088,65089,65090,65091,65092,65097,65098,65099,65100,65101,65102,65103,65104,65105,65106,65108,65109,65110,65111,65113,65114,65115,65116,65117,65118,65119,65120,65121,65122,65123,65124,65125,65126,65128,65129,65130,65131,65154,65156,65158,65160,65162,65163,65164,65166,65168,65169,65170,65172,65174,65175,65176,65178,65179,65180,65182,65183,65184,65186,65187,65188,65190,65191,65192,65194,65196,65198,65200,65202,65203,65204,65206,65207,65208,65210,65211,65212,65214,65215,65216,65218,65219,65220,65222,65223,65224,65226,65227,65228,65230,65231,65232,65234,65235,65236,65238,65239,65240,65242,65243,65244,65246,65247,65248,65250,65251,65252,65254,65255,65256,65258,65259,65260,65262,65264,65266,65267,65268,65269,65270,65271,65272,65273,65274,65275,65276,65281,65282,65283,65284,65285,65286,65287,65288,65289,65290,65291,65292,65293,65294,65295,65296,65297,65298,65299,65300,65301,65302,65303,65304,65305,65306,65307,65308,65309,65310,65311,65312,65313,65314,65315,65316,65317,65318,65319,65320,65321,65322,65323,65324,65325,65326,65327,65328,65329,65330,65331,65332,65333,65334,65335,65336,65337,65338,65339,65340,65341,65342,65343,65344,65345,65346,65347,65348,65349,65350,65351,65352,65353,65354,65355,65356,65357,65358,65359,65360,65361,65362,65363,65364,65365,65366,65367,65368,65369,65370,65371,65372,65373,65374,65377,65378,65379,65380,65381,65382,65383,65384,65385,65386,65387,65388,65389,65390,65391,65392,65393,65394,65395,65396,65397,65398,65399,65400,65401,65402,65403,65404,65405,65406,65407,65408,65409,65410,65411,65412,65413,65414,65415,65416,65417,65418,65419,65420,65421,65422,65423,65424,65425,65426,65427,65428,65429,65430,65431,65432,65433,65434,65435,65436,65437,65438,65439,65504,65505,65507,65509]")
}
, , , , , , , , , , , , , , , , , , function(t, e, n) {}
, , , , , , , , , , , , , , , , , function(t, e, n) {}
, function(t, e, n) {
    
    "use strict";
    n.r(e);
    var a = n(1)
      , r = n.n(a)
      , s = n(19)
      , i = n.n(s)
      , c = n(4)
      , o = n(146)
      , l = n(36)
      , y = n(69)
      , u = (n(109),
    n(22))
      , g = n.n(u)
      , B = n(0)
      , h = function(t) {
        var e = t.header
          , n = t.aside
          , a = t.footer
          , r = t.children;
        return Object(B.jsxs)("div", {
            className: g.a.wrapper,
            children: [Object(B.jsx)("div", {
                className: g.a.header,
                children: e
            }), Object(B.jsx)("div", {
                className: g.a.middle,
                children: Object(B.jsxs)("div", {
                    className: g.a.middleInner,
                    children: [Object(B.jsx)("div", {
                        className: g.a.aside,
                        children: n
                    }), Object(B.jsx)("div", {
                        className: g.a.content,
                        children: r
                    })]
                })
            }), Object(B.jsx)("div", {
                className: g.a.footer,
                children: a
            })]
        })
    }
      , d = n(56)
      , b = n.n(d)
      , m = function() {
        return Object(B.jsxs)("div", {
            className: b.a.footer,
            children: [Object(B.jsxs)("span", {
                children: ["See ", Object(B.jsx)("a", {
                    href: "https://evoweb.uk/threads/teditor-web-based-ted-editor.83942/",
                    children: "the thread on Evo Web"
                }), " for more details."]
            }), Object(B.jsx)("div", {
                className: b.a.version,
                children: "experimental-20250223-modified"
            })]
        })
    }
      , k = n(23)
      , O = n(2)
      , I = n(7)
      , j = n(10)
      , f = n(5)
      , A = n(58)
      , N = n.n(A)
      , p = ["as", "children", "disabled"]
      , S = r.a.forwardRef((function(t, e) {
        var n = t.as
          , a = t.children
          , r = t.disabled
          , s = Object(j.a)(t, p)
          , i = Object(f.a)(N.a.button, Object(I.a)({}, N.a.isDisabled, r));
        return Object(B.jsx)(n, Object(O.a)(Object(O.a)({
            ref: e,
            className: i,
            disabled: r
        }, s), {}, {
            children: a
        }))
    }
    ));
    S.defaultProps = {
        as: "button"
    };
    var E = S
      , R = n(71)
      , x = n.n(R)
      , C = r.a.forwardRef((function(t, e) {
        var n = t.children
          , r = t.onChange
          , s = Object(a.useRef)();
        return Object(B.jsxs)("span", {
            ref: e,
            children: [Object(B.jsx)("input", {
                ref: s,
                className: x.a.input,
                type: "file",
                onChange: r
            }), Object(B.jsx)(E, {
                as: "span",
                role: "button",
                tabIndex: 0,
                onClick: function() {
                    s.current.click()
                },
                onKeyDown: function(t) {
                    switch (t.key) {
                    case "Enter":
                    case " ":
                        s.current.click()
                    }
                },
                children: n
            })]
        })
    }
    ))
      , v = n(72)
      , L = n.n(v)
      , T = function(t) {
        var e = Object(a.useRef)();
        return Object(B.jsx)("form", {
            className: L.a.form,
            ref: e,
            children: Object(B.jsx)(C, {
                onChange: function(n) {
                    (0,
                    t.onLoad)(n, n.nativeEvent.target.files),
                    e.current && e.current.reset()
                },
                children: "Open"
            })
        })
    }
      , P = n(35)
      , F = n(43)
      , w = n(44)
      , M = n(51)
      , U = n(49)
      , K = n(12)
      , _ = n(42)
      , D = n(73)
      , G = n(92)
      , H = (n(116),
    n(74))
      , V = n.n(H)
      , W = function(t) {
        return Object(B.jsx)(G.a, Object(O.a)(Object(O.a)({}, t), {}, {
            className: Object(f.a)(t.className, V.a.tippy)
        }))
    };
    function Y(t) {
        return {
            uniformSubId: 127 & t,
            isUniformForGk: (128 & t) >> 7,
            teamId: (4294950912 & t) >> 14,
            unknown: (16128 & t) >> 8
        }
    }
    
    function z(t) {
        var e = t.uniformSubId
          , n = t.isUniformForGk;
        return (262143 & t.teamId) << 14 | (n ? 128 : 0) | 127 & e | (63 & t.unknown) << 8
    }

    var Z = function(t) {
        Object(M.a)(n, t);
        var e = Object(U.a)(n);
        function n() {
          var t;
          Object(F.a)(this, n);
          for (var a = arguments.length, r = new Array(a), s = 0; s < a; s++) {
            r[s] = arguments[s];
          }
          t = e.call.apply(e, [this].concat(r));
          t._handle2020MaskedSave = function() {
            t._saveAs(K.pes2020, true);
          };
          t._handle2020UnmaskedSave = function() {
            t._saveAs(K.pes2020, false);
          };
          t._handle2021MaskedSave = function() {
            t._saveAs(K.pes2021, true);
          };
          t._handle2021UnmaskedSave = function() {
            t._saveAs(K.pes2021, false);
          };
          t._handleJsonSave = function() {
            var jsonString = JSON.stringify(JsonTED, null, 2);
            var blob = new Blob([jsonString], { type: "application/json" });
            saveAs(blob, window.nombreEquipo + "_data.json");
          };
          t._handlePlayersCSV = t._handlePlayersCSV.bind(t);
          return t;
        }
        return Object(w.a)(n, [
          {
            key: "_saveAs",
            value: function(t, e) {
              var n = this.props,
                  a = n.data,
                  r = n.editedData,
                  s = n.info,
                  i = t.FormatTed,
                  c = Object(O.a)({}, r);
              if (
                t === K.pes2021
                  ? (c.header = Object(O.a)({}, c.header),
                    (c.header.dataPackVersion = 100),
                    (c.header.dataPackVersion2 = 100),
                    (c.header.gameVersion = 10100),
                    (c.header.unknownValue2 = 80),
                    (c.header.unknownValue3 = 14740),
                    (c.header.unknownValue6 = 25))
                  : t === K.pes2020 &&
                    (c.header = Object(O.a)({}, c.header),
                    (c.header.unknownValue3 = 14680),
                    (c.header.unknownValue6 = 23)),
                (c.playerAssignment = Object(O.a)(
                  Object(O.a)({}, c.playerAssignment),
                  {},
                  { playerIds: c.players.map(function(t) { return t.playerId; }) }
                )),
                (c.team = Object(O.a)({}, c.team)),
                a.coach.coachId !== r.coach.coachId && (c.team.coachId = c.coach.coachId),
                a.team.teamId !== r.team.teamId
              ) {
                var o = r.team.teamId;
                c.playerAssignment = Object(O.a)(
                  Object(O.a)({}, c.playerAssignment),
                  {},
                  { teamId: o }
                );
                c.tactics = Object(O.a)(
                  Object(O.a)({}, c.tactics),
                  {},
                  { teamId: o }
                );
                c.team.uniformIds = Object(P.a)(c.team.uniformIds);
                c.uniforms = Object(P.a)(c.uniforms);
                for (var l = 0; l < 5; l++) {
                  if (c.uniforms[l].uniformId) {
                    var y = Y(c.uniforms[l].uniformId);
                    y.teamId = o;
                    var u = z(y);
                    c.uniforms[l] = Object(O.a)(
                      Object(O.a)({}, c.uniforms[l]),
                      {},
                      { uniformId: u }
                    );
                    c.team.uniformIds[l] = u;
                  }
                }
              }
              var g = _.fromJS([c], i.recordLength, i.format);
              e && (g = t.mask(g));
              var B = s.fileName.replace(/.ted/g, "_nuevo.ted");
              Object(D.saveAs)(new Blob([g.buffer]), e ? B : "".concat(B.replace(/.ted/g, "_unmasked.ted")));
            }
          },
          {
            key: "_handlePlayersCSV",
            value: function() {
              // Cria um input para seleção de pasta
              var input = document.createElement("input");
              input.type = "file";
              input.setAttribute("webkitdirectory", "");
              var self = this;
              input.addEventListener("change", function(event) {
                var files = event.target.files;
                var allPlayersData = [];
                var index = 0;
                // Função para processar um arquivo de cada vez
                function processNextFile() {
                  if (index >= files.length) {
                    self.exportToCSV(allPlayersData);
                    return;
                  }
                  var file = files[index];
                  index++;
                  // Processa apenas arquivos .ted
                  if (!file.name.toLowerCase().endsWith(".ted")) {
                    processNextFile();
                    return;
                  }
                  // Seleciona o input de upload do TED já existente na página
                  var tedInput = document.querySelector("input.FileButton_input__OzRtO");
                  if (!tedInput) {
                    console.error("Input de TED não encontrado.");
                    processNextFile();
                    return;
                  }
                  // Cria um DataTransfer para simular o upload do arquivo
                  var dt = new DataTransfer();
                  dt.items.add(file);
                  try {
                    tedInput.files = dt.files;
                  } catch (e) {
                    console.error("Não foi possível setar o file input:", e);
                  }
                  // Dispara o evento change para que o webapp processe o arquivo
                  var changeEvent = new Event("change", { bubbles: true });
                  tedInput.dispatchEvent(changeEvent);
                  // Aguarda um tempo para que o TED seja processado e os dados sejam inseridos na página
                  setTimeout(function() {
                    // Realiza o scraping dos dados inseridos na página
                    var data = self.extractPlayerDataFromPage();
                    if (data && data.players && data.players.length > 0) {
                      data.players.forEach(function(player) {
                        allPlayersData.push(
                          Object.assign(
                            {
                              fileName: file.name,
                              teamName: data.team
                            },
                            player
                          )
                        );
                      });
                    } else {
                      console.warn("Nenhum dado de jogador foi encontrado para o arquivo:", file.name);
                    }
                    // Opcional: aqui você pode resetar o estado da página se necessário antes do próximo arquivo
                    processNextFile();
                  }, 50); // Ajuste o tempo se o processamento demorar mais ou menos
                }
                processNextFile();
              });
              input.click();
            }
          },
          {
            key: "extractPlayerDataFromPage",
            value: function() {
              // Agora os dados do TED já foram carregados na página
              var fileNameElem = document.querySelector(".MenuBar_fileName__e5WSP");
              var fileName = fileNameElem ? fileNameElem.textContent.trim() : "";
              var teamInput = document.getElementById("teamName");
              var teamName = teamInput ? teamInput.value : "";
              var rows = document.querySelectorAll(".QuickEditPlayerList_row__3_5Jn");
              var players = [];
              rows.forEach(function(row) {
                var cells = row.querySelectorAll(".QuickEditPlayerList_cell__c5RNl");
                if (cells.length < 12) return;
                var player = {};
                // Célula 2: Número da camisa
                var shirtInput = cells[1] ? cells[1].querySelector("input#playerShirtNumber") : null;
                player.shirtNumber = shirtInput ? shirtInput.value : "";
                // Célula 3: ID do jogador
                var idInput = cells[2] ? cells[2].querySelector("input#playerId") : null;
                player.playerId = idInput ? idInput.value : "";
                // Célula 5: Posição do jogador (span)
                var posSpan = cells[4] ? cells[4].querySelector("span") : null;
                player.position = posSpan ? posSpan.textContent.trim() : "";
                // Célula 6: Nome do jogador e nome da camisa
                var nameInputs = cells[5] ? cells[5].querySelectorAll("input") : [];
                player.playerName = nameInputs[1] ? nameInputs[1].value : "";
                player.playerShirtName = nameInputs[2] ? nameInputs[2].value : "";
                // Célula 7: Idade
                var ageInput = cells[6] ? cells[6].querySelector("input#playerAge") : null;
                player.age = ageInput ? ageInput.value : "";
                // Célula 8: ID das chuteiras
                var bootsInput = cells[7] ? cells[7].querySelector("input#playerBootsId") : null;
                player.bootsId = bootsInput ? bootsInput.value : "";
                // Célula 9: ID das luvas
                var gloveInput = cells[8] ? cells[8].querySelector("input#playerGloveId") : null;
                player.gloveId = gloveInput ? gloveInput.value : "";
                // Célula 10: FaceId
                var faceInput = cells[9] ? cells[9].querySelector("input#faceId") : null;
                player.faceId = faceInput ? faceInput.value : "";
                // Célula 11: Reputação
                var repInput = cells[10] ? cells[10].querySelector("input#playerReputation") : null;
                player.reputation = repInput ? repInput.value : "";
                // Célula 12: Atitude
                var attInput = cells[11] ? cells[11].querySelector("input#playerAttitude") : null;
                player.attitude = attInput ? attInput.value : "";
                players.push(player);
              });
              return {
                fileName: fileName,
                team: teamName,
                players: players
              };
            }
          },
          {
            key: "exportToCSV",
            value: function(data) {
              if (!data.length) {
                alert("Nenhum dado de jogador foi encontrado.");
                return;
              }
              var headers = ["fileName", "teamName", "playerId", "position", "playerName", "age"];
              // Se o Excel da sua região espera ponto-e-vírgula, altere o separador:
              var separator = ";"; // ou ";" se preferir
              // Adiciona BOM no início para garantir a codificação UTF-8
              var csvContent = "\ufeff" + headers.join(separator) + "\n";
              data.forEach(function(row) {
                var values = headers.map(function(header) {
                  // Se precisar tratar valores que contenham o separador, você pode envolver em aspas
                  return row[header];
                });
                csvContent += values.join(separator) + "\n";
              });
              var blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
              saveAs(blob, "players_data.csv");
            }
          }
          ,
          {
            key: "render",
            value: function() {
              var t = this.props.data;
              return Object(B.jsxs)(B.Fragment, {
                children: [
                  Object(B.jsx)(W, {
                    content: "Open folder to extract players data to CSV",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      disabled: t,
                      onClick: this._handlePlayersCSV,
                      children: "Open Folder (to CSV)"
                    })
                  }),
                  Object(B.jsx)(W, {
                    content: "Use this button to save if it is going to be imported in the Edit Mode in PES 2021.",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      disabled: !t,
                      onClick: this._handle2021MaskedSave,
                      children: "Save as PES2021 (in-game)"
                    })
                  }),
                  Object(B.jsx)(W, {
                    content: "Use this button to save if you are going to do further editions in WebTedEditor (by ﾉおん).",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      display: "none",
                      disabled: !t,
                      onClick: this._handle2021UnmaskedSave,
                      children: "Save as PES2021 (unmasked, for WebTedEditor)"
                    })
                  }),
                  Object(B.jsx)(W, {
                    content: "Use this button to save if it is going to be imported in the Edit Mode in PES 2020.",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      display: "none",
                      disabled: !t,
                      onClick: this._handle2020MaskedSave,
                      children: "Save as PES2020 (in-game)"
                    })
                  }),
                  Object(B.jsx)(W, {
                    content: "Use this button to save if you are going to do further editions in .TED Editor (by SMcCutcheon).",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      display: "none",
                      disabled: !t,
                      onClick: this._handle2020UnmaskedSave,
                      children: "Save as PES2020 (unmasked, for .TED Editor)"
                    })
                  })/*,
                  Object(B.jsx)(W, {
                    content: "Use this button to save if you are Bruno or Hau.",
                    children: Object(B.jsx)(E, {
                      type: "button",
                      display: "none",
                      disabled: !t,
                      onClick: this._handleJsonSave,
                      children: "Save as JSON"
                    })
                  })*/
                ]
              });
            }
          }
        ]);
        return n;
      }(r.a.PureComponent)      

      , J = n(52)
      , Q = n.n(J);
    function X(t) {
        var e = t.edition;
        return 2021 === e ? "PES 2021" : 2020 === e ? "PES 2020" : "Unknown"
    }
    var q, $, tt = function(t) {
        return Object(B.jsxs)("div", {
            className: Q.a.MenuBar,
            children: [Object(B.jsxs)("div", {
                className: Q.a.fileName,
                children: [t.fileA && t.fileA.info && t.fileA.info.fileName, " ", t.fileA && t.fileA.info && "(".concat(X(t.fileA.info), ") | "), "TEditor - Modified"]
            }), Object(B.jsx)("div", {
                className: Q.a.fileBar,
                children: Object(B.jsxs)("div", {
                    children: [Object(B.jsx)(T, {
                        onLoad: t.onLoad
                    }), Object(B.jsx)(Z, {
                        info: t.fileA && t.fileA.info,
                        data: t.data,
                        editedData: t.editedData
                    })]
                })
            })]
        })
    }, et = Object(c.b)((function(t) {
        return {
            fileA: t.app.fileA,
            data: t.app.data,
            editedData: t.app.editedData
        }
    }
    ), (function(t) {
        return {
            onLoad: function(e, n) {
                return t(Object(k.d)(n))
            }
        }
    }
    ))(tt), nt = n(76), at = n.n(nt), rt = n(77), st = n.n(rt), it = n(78), ct = n.n(it), ot = n(79), lt = n.n(ot), yt = "QUICK_EDIT", ut = "PLAYERS", gt = "STIRPS", Bt = "WELCOME", ht = n(75), dt = n.n(ht), bt = function(t) {
        var e = t.children;
        return Object(B.jsx)("div", {
            className: dt.a.NavBar,
            children: e
        })
    }, mt = n(37), kt = n.n(mt), Ot = ["icon", "isDisabled", "isSelected"], It = bt, jt = function(t) {
        var e, n = t.icon, a = t.isDisabled, r = t.isSelected, s = Object(j.a)(t, Ot), i = Object(f.a)(kt.a.Item, (e = {},
        Object(I.a)(e, kt.a.isSelected, r),
        Object(I.a)(e, kt.a.isDisabled, a),
        e));
        return Object(B.jsx)("button", Object(O.a)(Object(O.a)({
            className: i
        }, s), {}, {
            children: Object(B.jsx)("span", {
                className: kt.a.icon,
                children: n && Object(B.jsx)(n, {})
            })
        }))
    }, ft = function(t) {
        var e = t.openedTab
          , n = t.onTabChange;
        return Object(B.jsxs)(It, {
            children: [Object(B.jsx)(jt, {
                icon: at.a,
                label: "Quick Edit",
                isSelected: e === yt,
                onClick: function(t) {
                    return n(t, yt)
                }
            }), Object(B.jsx)(jt, {
                icon: st.a,
                label: "Players",
                onClick: function(t) {
                    return n(t, ut)
                }
            }), Object(B.jsx)(jt, {
                icon: ct.a,
                label: "Game Plan",
                isDisabled: !0,
                onClick: function(t) {
                    return n(t, "GAME_PLAN")
                }
            }), Object(B.jsx)(jt, {
                icon: lt.a,
                label: "Strips",
                isSelected: e === gt,
                onClick: function(t) {
                    return n(t, gt)
                }
            })]
        })
    }, At = function() {
        var t = Object(c.c)()
          , e = Object(c.d)((function(t) {
            return t.app.openedTab
        }
        ));
        return Object(B.jsx)(ft, {
            openedTab: e,
            onTabChange: function(e, n) {
                t(Object(k.c)(n))
            }
        })
    }, Nt = "CHANGE_COACH_DATA", pt = "CHANGE_METADATA_DATA", St = "CHANGE_MULTIPLE_DATA", Et = "CHANGE_LAST_FOCUSED_COLOR_FIELD_COLOR", Rt = "CHANGE_PLAYER_DATA", xt = "CHANGE_TEAM_DATA", Ct = "CHANGE_ALL_PLAYER_AGE", vt = "FIX_DATA", Lt = "FOCUS_COLOR_FIELD", Tt = function(t, e, n) {
        return {
            type: Rt,
            payload: {
                playerIndex: t,
                keyName: e,
                value: n
            }
        }
    }, Pt = function(t) {
        return {
            type: Ct,
            payload: {
                delta: t
            }
        }
    }, Ft = function(t, e) {
        return {
            type: Nt,
            payload: {
                keyName: t,
                value: e
            }
        }
    }, wt = function(t) {
        return {
            type: St,
            payload: {
                fieldKeyValueArray: t
            }
        }
    }, Mt = function(t, e) {
        return {
            type: xt,
            payload: {
                keyName: t,
                value: e
            }
        }
    }, Ut = function() {
        return {
            type: vt
        }
    }, Kt = "SORT_PLAYERS";
    !function(t) {
        t.Association = "association",
        t.Boolean = "boolean",
        t.Integer = "integer",
        t.String = "string"
    }(q || (q = {})),
    function(t) {
        t.Ability = "ability",
        t.ComPlayingStyle = "comPlayingStyle",
        t.Skill = "skill"
    }($ || ($ = {}));
    var _t = {
        type: q.Integer,
        subtype: $.Ability,
        min: 40,
        max: 99
    }
      , Dt = {
        type: q.Integer,
        min: 0,
        max: 63
    }
      , Gt = {
        type: q.Boolean,
        subtype: $.Skill
    }
      , Ht = {
        type: q.Boolean,
        subtype: $.ComPlayingStyle
    }
      , Vt = {
        team: {
            teamId: {
                type: q.Integer,
                min: 1,
                max: 262143
            },
            countryId: {
                type: q.Association
            },
            teamName: {
                type: q.String
            },
            isAtLeastOneNameEdited: {
                type: q.Boolean
            },
            banner1: {
                type: q.String,
                length: 15
            },
            banner2: {
                type: q.String,
                length: 15
            },
            banner3: {
                type: q.String,
                length: 15
            },
            banner4: {
                type: q.String,
                length: 15
            }
        },
        coach: {
            coachId: {
                type: q.Integer,
                min: 1
            },
            countryId: {
                type: q.Association
            },
            isImageSet: {
                type: q.Boolean
            }
        },
        uniforms: {
            $element: {
                collar: {
                    type: q.Integer,
                    min: 1,
                    max: 13
                },
                chestNumberR: Dt,
                chestNumberG: Dt,
                chestNumberB: Dt,
                shirtR: Dt,
                shirtG: Dt,
                shirtB: Dt,
                shirtDesign1R: Dt,
                shirtDesign1G: Dt,
                shirtDesign1B: Dt,
                shortR: Dt,
                shortG: Dt,
                shortB: Dt,
                sockR: Dt,
                sockG: Dt,
                sockB: Dt,
                nameR: Dt,
                nameG: Dt,
                nameB: Dt,
                numberR: Dt,
                numberG: Dt,
                numberB: Dt,
                shortNumberR: Dt,
                shortNumberG: Dt,
                shortNumberB: Dt,
                shortNumberSize: {
                    type: q.Integer
                },
                shortNumberHPos: {
                    type: q.Integer
                },
                shortNumberVPos: {
                    type: q.Integer
                },
                chestNumberSize: {
                    type: q.Integer
                },
                chestNumberHPos: {
                    type: q.Integer
                },
                chestNumberVPos: {
                    type: q.Integer
                },
                hasChestNumber: {
                    type: q.Boolean
                },
                hasShirtName: {
                    type: q.Boolean
                },
                nameFontStyle: {
                    type: q.Integer
                },
                namePosition: {
                    type: q.Integer
                },
                nameSize: {
                    type: q.Integer
                },
                numberFontStyle: {
                    type: q.Integer
                },
                numberPosition: {
                    type: q.Integer
                },
                numberSize: {
                    type: q.Integer
                }
            }
        },
        playerAssignment: {
            shirtNumbers: {
                $element: {
                    type: q.Integer,
                    min: 1,
                    max: 999,
                    ultimateMin: 0,
                    ultimateMax: 1023
                }
            }
        },
        players: {
            $element: {
                playerId: {
                    type: q.Integer,
                    min: 1
                },
                isPlayerNameChanged: {
                    type: q.Boolean
                },
                isFromLiveUpdate: {
                    type: q.Boolean
                },
                age: {
                    type: q.Integer,
                    min: 15,
                    max: 50
                },
                height: {
                    type: q.Integer,
                    min: 155,
                    max: 210
                },
                weight: {
                    type: q.Integer,
                    min: 30,
                    max: 129
                },
                countryId1: {
                    type: q.Association
                },
                attitude: {
                    type: q.Integer,
                    min: 1,
                    max: 8
                },
                reputation: {
                    type: q.Integer,
                    min: 1,
                    max: 8
                },
                attackingProwess: _t,
                ballControl: _t,
                dribbling: _t,
                tightPossession: _t,
                lowPass: _t,
                loftedPass: _t,
                finishing: _t,
                headingAbility: _t,
                placeKicking: _t,
                curl: _t,
                speed: _t,
                acceleration: _t,
                kickingPower: _t,
                jump: _t,
                physicalContact: _t,
                balance: _t,
                stamina: _t,
                defensiveProwess: _t,
                ballWinning: _t,
                aggression: _t,
                gkAwareness: _t,
                gkCatching: _t,
                gkClearing: _t,
                gkReflexes: _t,
                gkReach: _t,
                weakFootUsage: Object(O.a)(Object(O.a)({}, _t), {}, {
                    min: 1,
                    max: 4
                }),
                weakFootAccuracy: Object(O.a)(Object(O.a)({}, _t), {}, {
                    min: 1,
                    max: 4
                }),
                form: Object(O.a)(Object(O.a)({}, _t), {}, {
                    min: 1,
                    max: 8
                }),
                injuryResistance: Object(O.a)(Object(O.a)({}, _t), {}, {
                    min: 1,
                    max: 3
                }),
                scissorsFeint: Gt,
                doubleTouch: Gt,
                flipFlap: Gt,
                marseilleTurn: Gt,
                sombrero: Gt,
                crossOverTurn: Gt,
                cutBehindAndTurn: Gt,
                scotchMove: Gt,
                stepOnSkillControl: Gt,
                headingSkill: Gt,
                longRangeDrive: Gt,
                chipShotControl: Gt,
                longRangeShooting: Gt,
                knuckleShot: Gt,
                dippingShot: Gt,
                risingShot: Gt,
                acrobaticFinishing: Gt,
                heelTrick: Gt,
                firstTimeShot: Gt,
                oneTouchPass: Gt,
                throughPassing: Gt,
                weightedPass: Gt,
                pinpointCrossing: Gt,
                outsideCurler: Gt,
                rabona: Gt,
                noLookPass: Gt,
                lowLoftedPass: Gt,
                gkLowPunt: Gt,
                gkHighPunt: Gt,
                longThrow: Gt,
                gkLongThrow: Gt,
                penaltySpecialist: Gt,
                gkPenaltySaver: Gt,
                gamesmanship: Gt,
                manMarking: Gt,
                trackBack: Gt,
                interception: Gt,
                acrobaticClear: Gt,
                captaincy: Gt,
                superSub: Gt,
                fightingSpirit: Gt,
                trickster: Ht,
                mazingRun: Ht,
                speedingBullet: Ht,
                incisiveRun: Ht,
                longBallExpert: Ht,
                earlyCross: Ht,
                longRanger: Ht,
                playerAppearance: {
                    relinkPlayerId: {
                        type: q.Integer
                    }
                }
            }
        }
    };
    function Wt(t, e) {
        for (var n = t, a = e.split("."), r = 0; r < a.length; r++) {
            if (void 0 === n)
                return;
            var s;
            if (Array.isArray(n))
                n = null === (s = n) || void 0 === s ? void 0 : s[parseInt(a[r], 10)];
            else if (n.$element)
                n = n.$element;
            else {
                var i;
                n = null === (i = n) || void 0 === i ? void 0 : i[a[r]]
            }
        }
        return n
    }
    var Yt = function(t) {
        var e = Object(c.c)();
        return Object(a.useCallback)((function(n, a) {
            var r = t.split(".");
            switch (r[0]) {
            case "coach":
                return void e(Ft(r[1], a));
            case "team":
                return void e(Mt(r[1], a));
            default:
                e(wt([[t, a]]))
            }
        }
        ), [t, e])
    }
      , zt = ["onChange", "value"]
      , Zt = Object(a.forwardRef)((function(t, e) {
        var n = t.onChange
          , r = t.value
          , s = Object(j.a)(t, zt)
          , i = Object(a.useCallback)((function(t) {
            var e = t.target.checked;
            n(t, e)
        }
        ), [n]);
        return Object(B.jsx)("input", Object(O.a)({
            ref: e,
            type: "checkbox",
            checked: Boolean(r),
            value: "true",
            onChange: i
        }, s))
    }
    ))
      , Jt = n(8)
      , Qt = n(80)
      , Xt = n(59)
      , qt = n.n(Xt)
      , $t = ["value", "isEdited", "onChange"]
      , te = function(t) {
        var e = t.value
          , n = t.isEdited
          , r = t.onChange
          , s = Object(j.a)(t, $t)
          , i = Object(a.useMemo)((function() {
            var t = Qt.slice();
            return t.sort((function(t, e) {
                return t[1].enName.localeCompare(e[1].enName)
            }
            )),
            t.map((function(t) {
                var e = Object(Jt.a)(t, 2)
                  , n = e[0]
                  , a = e[1];
                return Object(B.jsx)("option", {
                    value: n,
                    children: a.enName
                }, n)
            }
            ))
        }
        ), [])
          , c = Object(a.useCallback)((function(t) {
            var e = parseInt(t.target.value, 10);
            r(t, e)
        }
        ), [r])
          , o = Object(f.a)(Object(I.a)({}, qt.a.isEdited, n));
        return Object(B.jsx)("span", {
            className: o,
            children: Object(B.jsx)("select", Object(O.a)(Object(O.a)({
                className: qt.a.select,
                value: e,
                onChange: c
            }, s), {}, {
                children: i
            }))
        })
    }
      , ee = n(60)
      , ne = n.n(ee)
      , ae = ["isEdited", "onChange"]
      , re = Object(a.forwardRef)((function(t, e) {
        var n = t.isEdited
          , r = t.onChange
          , s = Object(j.a)(t, ae)
          , i = Object(a.useCallback)((function(t) {
            var e = parseInt(t.target.value, 10);
            r(t, e)
        }
        ), [r])
          , c = Object(f.a)(ne.a.field, Object(I.a)({}, ne.a.isEdited, n));
        return Object(B.jsx)("input", Object(O.a)({
            className: c,
            ref: e,
            type: "number",
            onChange: i
        }, s))
    }
    ))
      , se = n(81)
      , ie = n.n(se)
      , ce = ["isEdited", "onChange"]
      , oe = Object(a.forwardRef)((function(t, e) {
        var n = t.isEdited
          , r = t.onChange
          , s = Object(j.a)(t, ce)
          , i = Object(a.useCallback)((function(t) {
            var e = t.target.value;
            r(t, e)
        }
        ), [r])
          , c = Object(f.a)(Object(I.a)({}, ie.a.isEdited, n));
        return Object(B.jsx)("input", Object(O.a)({
            ref: e,
            className: c,
            type: "text",
            onChange: i
        }, s))
    }
    ))
      , le = ["fieldKey"]
      , ye = Object(a.forwardRef)((function(t, e) {
        var n = t.fieldKey
          , a = Object(j.a)(t, le)
          , r = Object(c.c)()
          , s = Object(c.d)((function(t) {
            return Wt(t.app.data, n)
        }
        ))
          , i = Object(c.d)((function(t) {
            return Wt(t.app.editedData, n)
        }
        ))
          , o = Wt(Vt, n)
          , l = null === o || void 0 === o ? void 0 : o.type
          , y = s !== i
          , u = Yt(n)
          , g = function() {
            if (l === q.Integer) {
                var t = o.min
                  , e = o.max
                  , a = i;
                void 0 !== t && (a = Math.max(t, a)),
                void 0 !== e && (a = Math.min(e, a)),
                r(wt([[n, a]]))
            }
            if (l === q.String) {
                var s = o.length
                  , c = i;
                void 0 !== s && (c = Array.from(i).slice(0, s).join("")),
                r(wt([[n, c]]))
            }
        };
        switch (l) {
        case q.Association:
            return Object(B.jsx)(te, Object(O.a)(Object(O.a)({}, a), {}, {
                ref: e,
                isEdited: y,
                value: i,
                onChange: u
            }));
        case q.Boolean:
            return Object(B.jsx)(Zt, Object(O.a)(Object(O.a)({}, a), {}, {
                ref: e,
                isEdited: y,
                value: i,
                onChange: u
            }));
        case q.Integer:
            return Object(B.jsx)(re, Object(O.a)(Object(O.a)({}, a), {}, {
                ref: e,
                isEdited: y,
                min: o.min,
                max: o.max,
                value: i,
                onBlur: g,
                onChange: u
            }));
        default:
            return Object(B.jsx)(oe, Object(O.a)(Object(O.a)({}, a), {}, {
                ref: e,
                isEdited: y,
                value: i,
                onBlur: g,
                onChange: u
            }))
        }
    }
    ))
      , ue = n(61)
      , ge = n.n(ue)
      , Be = function(t) {
        var e, n = t.position;
        switch (n) {
        case "GK":
            e = "gk";
            break;
        case "LB":
        case "CB":
        case "RB":
            e = "df";
            break;
        case "DMF":
        case "RMF":
        case "CMF":
        case "LMF":
        case "AMF":
            e = "mf";
            break;
        case "SS":
        case "RWF":
        case "CF":
        case "LWF":
            e = "fw"
        }
        return Object(B.jsx)("span", {
            className: Object(f.a)([ge.a.PositionLabel], Object(I.a)({}, ge.a[e], Boolean(e))),
            children: n
        })
    }
      , he = n(15)
      , de = n.n(he)
      , be = function(t) {
        return Object(B.jsx)("div", Object(O.a)(Object(O.a)({}, t), {}, {
            className: Object(f.a)([de.a.cell, t.className])
        }))
    }
      , me = function(t) {
        return Object(B.jsx)("div", Object(O.a)(Object(O.a)({}, t), {}, {
            className: Object(f.a)([de.a.list, t.className])
        }))
    }
      , ke = function(t) {
        return Object(B.jsx)("div", Object(O.a)(Object(O.a)({}, t), {}, {
            className: Object(f.a)([de.a.row, t.className])
        }))
    }
      , Oe = function(t) {
        Object(M.a)(n, t);
        var e = Object(U.a)(n);
        function n() {
            return Object(F.a)(this, n),
            e.apply(this, arguments)
        }
        return Object(w.a)(n, [{
            key: "_renderPlayer",
            value: function(t) {
                var e = this.props.editedData.players[t];
                return Object(B.jsxs)(B.Fragment, {
                    children: [Object(B.jsx)(be, {
                        children: t + 1
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "playerAssignment.shirtNumbers.".concat(t),
                            id: "playerShirtNumber",
                            style: {
                                width: 40
                            }
                        })
                    }), Object(B.jsx)("div", {
                        className: "QuickEditPlayerList_cell__c5RNl",
                        bis_skin_checked: "1",
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".playerId"),
                            id: "playerId",
                            style: { width: 100 }
                          }),
                          Object(B.jsx)("button", {
                            type: "button",
                            onClick: function() {
                              // Obtém o país e o nome do jogador do objeto "e"
                              const countryId = e.countryId1; // ajuste conforme o campo correto
                              const nationality =
                                window.countriesMapping && window.countriesMapping[countryId]
                                  ? window.countriesMapping[countryId].enName
                                  : "";
                              const playerName = e.playerName;
                              const query = encodeURIComponent("site:pesmaster.com " + nationality + " " + playerName);
                              window.open("https://www.google.com/search?q=" + query, "_blank");
                            },
                            style: {
                              width: 40,
                              cursor: "pointer",
                              border: "none",
                              background: "transparent",
                              marginLeft: "4px"
                            },
                            title: "Search in pesmaster.com",
                            children: Object(B.jsx)("i", { className: "fas fa-search fa-fw fa-xl" })
                          })
                        ]
                      }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(W, {
                            content: "Live Update flag",
                            children: Object(B.jsx)(ye, {
                                fieldKey: "players.".concat(t, ".isFromLiveUpdate")
                            })
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(Be, {
                            position: e.registeredPosition
                        })
                    }), Object(B.jsxs)(be, {
                        children: [Object(B.jsx)(W, {
                            content: "Name Edited flag",
                            children: Object(B.jsx)(ye, {
                                fieldKey: "players.".concat(t, ".isPlayerNameChanged")
                            })
                        }), Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".playerName"),
                            id: "playerName"
                        }), Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".clubShirtName"),
                            id: "playerShirtName"
                        })]
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".age"),
                            id: "playerAge",
                            style: {
                                width: 40
                            }
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".playerAppearance.bootsId"),
                            id: "playerBootsId",
                            isDisabled: !0,
                            style: {
                                width: 60
                            }
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".playerAppearance.gloveId"),
                            id: "playerGloveId",
                            isDisabled: !0,
                            style: {
                                width: 60
                            }
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".playerAppearance.relinkPlayerId"),
                            id: "faceId",
                            style: {
                                width: 80
                            }
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".reputation"),
                            id: "playerReputation",
                            style: {
                                width: 40
                            }
                        })
                    }), Object(B.jsx)(be, {
                        children: Object(B.jsx)(ye, {
                            fieldKey: "players.".concat(t, ".attitude"),
                            id: "playerAttitude",
                            style: {
                                width: 40
                            }
                        })
                    })]
                })
            }
        }, {
            key: "render",
            value: function() {
                var t = this.props
                  , e = t.data
                  , n = t.playerSortBy
                  , a = t.isPlayerAscendingSort
                  , r = t.onPlayerSort
                  , s = e.playerAssignment
                  , i = e.players
                  , c = []
                  , o = i.map((function(t, e) {
                    return e
                }
                ));
                o.sort((function(t, e) {
                    var r, c, o = a ? 1 / 0 : -1 / 0;
                    if ("playerIndex" === n)
                        r = i[t].playerId && t + 1 || o,
                        c = i[e].playerId && e + 1 || o;
                    else if ("shirtNumber" === n)
                        r = i[t].playerId && s.shirtNumbers[t] || o,
                        c = i[e].playerId && s.shirtNumbers[e] || o;
                    else if ("registeredPosition" === n) {
                        var l = ["GK", "RB", "CB", "LB", "DMF", "RMF", "CMF", "LMF", "AMF", "SS", "RWF", "CF", "LWF"];
                        r = i[t].playerId && l.indexOf(i[t].registeredPosition) + 1 || o,
                        c = i[e].playerId && l.indexOf(i[e].registeredPosition) + 1 || o
                    }
                    return a ? r - c : c - r
                }
                ));
                for (var l = 0; l < 40; l++) {
                    var y = o[l]
                      , u = i[y];
                    l >= i.length || !u.playerId || c.push(Object(B.jsx)(ke, {
                        className: de.a.item,
                        children: this._renderPlayer(y)
                    }, y))
                }
                return Object(B.jsx)(B.Fragment, {
                    children: Object(B.jsxs)(me, {
                        className: de.a.list,
                        children: [Object(B.jsxs)("header", {
                            className: Object(f.a)(de.a.title, de.a.player),
                            children: [Object(B.jsx)(be, {
                                children: Object(B.jsx)(W, {
                                    content: "Sort by in-game order",
                                    children: Object(B.jsx)("button", {
                                        className: de.a.linkLikeButton,
                                        onClick: function() {
                                            return r("playerIndex")
                                        },
                                        children: "IG#"
                                    })
                                })
                            }), Object(B.jsx)(be, {
                                children: Object(B.jsx)(W, {
                                    content: "Sort by shirt number",
                                    children: Object(B.jsx)("button", {
                                        className: de.a.linkLikeButton,
                                        onClick: function() {
                                            return r("shirtNumber")
                                        },
                                        children: "No."
                                    })
                                })
                            }), Object(B.jsx)(be, {
                                children: "Player ID"
                            }), Object(B.jsx)(be, {
                                children: "From Live."
                            }), Object(B.jsx)(be, {
                                children: Object(B.jsx)(W, {
                                    content: "Sort by registered position",
                                    children: Object(B.jsx)("button", {
                                        className: de.a.linkLikeButton,
                                        onClick: function() {
                                            return r("registeredPosition")
                                        },
                                        children: "Pos."
                                    })
                                })
                            }), Object(B.jsx)(be, {
                                children: "Player Name | Shirt Name"
                            }), Object(B.jsx)(be, {
                                children: "Age"
                            }), Object(B.jsx)(be, {
                                children: "Boots"
                            }), Object(B.jsx)(be, {
                                children: "Gloves"
                            }), Object(B.jsx)(be, {
                                children: "Face"
                            }), Object(B.jsx)(be, {
                                children: "Reputation"
                            }), Object(B.jsx)(be, {
                                children: "Attitude"
                            })]
                        }), c]
                    })
                })
            }
        }]),
        n
    }(r.a.Component)
      , Ie = r.a.forwardRef((function(t, e) {
        var n = t.data
          , r = t.isChecked
          , s = t.onChange
          , i = Object(a.useCallback)((function(t) {
            s && s(t, !r, n)
        }
        ), [n, r, s]);
        return Object(B.jsx)("input", {
            ref: e,
            type: "checkbox",
            checked: r,
            onChange: i
        })
    }
    ))
      , je = n(62)
      , fe = n.n(je)
      , Ae = function(t) {
        var e = t.children
          , n = t.className
          , a = t.title;
        return Object(B.jsxs)("div", {
            className: Object(f.a)(fe.a.wrapper, n),
            children: [Object(B.jsx)("div", {
                className: fe.a.title,
                children: a
            }), e]
        })
    }
      , Ne = Ae
      , pe = n(13)
      , Se = n.n(pe)
      , Ee = n(82)
      , Re = new Map(Ee);
    var xe = n(83)
      , Ce = new Set(xe);
    function ve(t) {
        return Ce.has(t)
    }
    var Le = function(t) {
        return Object(B.jsxs)("svg", Object(O.a)(Object(O.a)({
            viewBox: "0 0 256 256",
            width: 16,
            height: 16
        }, t), {}, {
            children: [Object(B.jsx)("path", {
                fill: "#000000",
                d: "M17.2,231.6h221.5c7.6,0,13.6-3.6,16.1-9.7c2.3-5.6,1.1-11.8-3.3-16.9L144,31.7l-1.1-1.1c-4-4-9.3-6.2-15-6.2 c-5.7,0-11,2.2-15,6.2l-1.1,1.1L4.4,204.9c-4.4,5.1-5.6,11.3-3.3,16.9C3.7,228,9.7,231.6,17.2,231.6z"
            }), Object(B.jsx)("polygon", {
                fill: "#ffff00",
                points: "128,55.2 221.3,205.6 34.7,205.6"
            }), Object(B.jsx)("path", {
                fill: "#000000",
                d: "M128,84.1c-7.3,0-13.3,6-13.3,13.3v57c0,7.3,6,13.3,13.3,13.3s13.3-6,13.3-13.3v-57 C141.3,90,135.3,84.1,128,84.1z"
            }), Object(B.jsx)("circle", {
                fill: "#000000",
                cx: "127.9",
                cy: "187.4",
                r: "13.2"
            })]
        }))
    }
      , Te = function(t) {
        var e = t.title
          , n = t.children;
        return Object(B.jsxs)("div", {
            children: ["".concat(e, ":"), n]
        })
    }
      , Pe = function(t) {
        var e = t.defaultTeamName
          , n = t.isIsFileLicensedTeamDifferent
          , a = t.isTeamLicensedInGame
          , r = t.isFileLicensedTeam
          , s = t.onIsFileLicensedTeamChange;
        return Object(B.jsxs)(Ne, {
            title: "Team Information",
            children: [Object(B.jsxs)(Te, {
                title: "Team ID",
                children: [Object(B.jsx)(W, {
                    content: Object(B.jsxs)(B.Fragment, {
                        children: ["Team license flag", Object(B.jsx)("br", {}), "(If it does not match the value in the game, the file will not be imported.)"]
                    }),
                    children: Object(B.jsx)("span", {
                        className: Object(f.a)([Se.a.teamIdField], Object(I.a)({}, Se.a.editedBackgroundColor, n)),
                        children: Object(B.jsx)(Ie, {
                            isChecked: r,
                            onChange: s
                        })
                    })
                }), Object(B.jsx)("span", {
                    children: Object(B.jsx)(ye, {
                        fieldKey: "team.teamId",
                        id: "teamId" // Add "id" attribute 
                    })
                }), " (", e ? a !== r ? Object(B.jsxs)(B.Fragment, {
                    children: [Object(B.jsx)(Le, {}), Object(B.jsxs)("span", {
                        style: {
                            color: "red"
                        },
                        children: ["replacing ", e, " in the game, but the license flag does not match."]
                    })]
                }) : "replacing ".concat(e, " in the game") : Object(B.jsxs)(B.Fragment, {
                    children: [Object(B.jsx)(Le, {}), Object(B.jsx)("span", {
                        style: {
                            color: "red"
                        },
                        children: "This team ID does not exist in PES 2021 as of Data Pack 6"
                    })]
                }), ")"]
            }), Object(B.jsxs)(Te, {
                title: "Team name",
                children: [Object(B.jsx)(ye, {
                    fieldKey: "team.isAtLeastOneNameEdited"
                }), Object(B.jsx)(ye, {
                    fieldKey: "team.teamName",
                    id: "teamName" // Add "id" attribute 
                })]
            }), 
            Object(B.jsx)(Te, {
                title: "Team emblem image file name",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.emblemImageFileName",
                    id: "teamEmblemImage" // Add "id" attribute 
                })
            }), Object(B.jsx)(Te, {
                title: "Team country",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.countryId",
                    id: "teamCountry" // Add "id" attribute 
                })
            }), Object(B.jsx)(Te, {
                title: "Team banner 1",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.banner1",
                    id: "teamBanner1" // Add "id" attribute 
                })
            }), Object(B.jsx)(Te, {
                title: "Team banner 2",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.banner2",
                    id: "teamBanner2" // Add "id" attribute
                })
            }), Object(B.jsx)(Te, {
                title: "Team banner 3",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.banner3",
                    id: "teamBanner3" // Add "id" attribute
                })
            }), Object(B.jsx)(Te, {
                title: "Team banner 4",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.banner4",
                    id: "teamBanner4" // Add "id" attribute

                })
            }), Object(B.jsx)(Te, {
                title: "Stadium name",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.stadiumName",
                    id: "stadiumName" // Add "id" attribute
                })
            }), Object(B.jsx)(Te, {
                title: "Stadium image",
                children: Object(B.jsx)(ye, {
                    fieldKey: "team.stadiumImageFileName",
                    id: "stadiumImage" // Add "id" attribute
                })
            }), Object(B.jsxs)(Te, {
                title: "Stadium details",
                children: [Object(B.jsx)(ye, {
                    fieldKey: "team.turfPattern",
                    id: "stadiumTurfPattern" // Add "id" attribute
                }), Object(B.jsx)(ye, {
                    fieldKey: "team.sidelineColor",
                    id: "stadiumSidelineColor" // Add "id" attribute
                }), Object(B.jsx)(ye, {
                    fieldKey: "team.seatColor",
                    id: "stadiumSeatColor" // Add "id" attribute
                }), Object(B.jsx)(ye, {
                    fieldKey: "team.goalStyle",
                    id: "stadiumGoalStyle" // Add "id" attribute
                }), Object(B.jsx)(ye, {
                    fieldKey: "team.netPattern",
                    id: "stadiumNetPattern" // Add "id" attribute
                })]
            })]
        })
    }
      , Fe = function(t) {
        var e = Object(c.d)((function(t) {
            return t.app
        }
        ))
          , n = e.data
          , a = e.editedData
          , r = Object(c.c)()
          , s = a.team
          , i = s.teamId
          , o = s.teamName
          , l = s.countryId
          , y = function(t) {
            return Re.get(t)
        }(i)
          , u = ve(i)
          , g = a.metadata.isLicensedTeam
          , h = n.team.teamId !== a.team.teamId
          , d = n.metadata.isLicensedTeam !== a.metadata.isLicensedTeam;
        return n && a ? Object(B.jsx)(Pe, Object(O.a)(Object(O.a)({}, t), {}, {
            defaultTeamName: y,
            isIsFileLicensedTeamDifferent: d,
            isTeamLicensedInGame: u,
            isFileLicensedTeam: g,
            isTeamIdDifferent: h,
            teamId: i,
            teamName: o,
            countryId: l,
            onIsFileLicensedTeamChange: function(t) {
                r({
                    type: pt,
                    payload: {
                        keyName: "isLicensedTeam",
                        value: !g
                    }
                })
            },
            onTeamIdChange: function(t) {
                r(Mt("teamId", parseInt(t.target.value)))
            }
        })) : null
    }
      , we = "CHANGE_UNIFORM_DATA"
      , Me = function(t, e, n) {
        return {
            type: we,
            payload: {
                uniformIndex: t,
                keyName: e,
                value: n
            }
        }
    }
      , Ue = function(t) {
        var e = t.shirtColor
          , n = t.shirtSecondaryColor
          , a = t.shortColor
          , r = t.sockColor;
        return Object(B.jsxs)("svg", {
            viewBox: "0 0 80 128",
            width: 80,
            height: 128,
            children: [Object(B.jsx)("polygon", {
                fill: r,
                points: "34.5,126 34.5,95.5 19.5,95.5 21.3,126 "
            }), Object(B.jsx)("polygon", {
                fill: r,
                points: "58.7,126 60.5,95.5 45.5,95.5 45.5,126 "
            }), Object(B.jsx)("path", {
                fill: a,
                d: "M59.5,54.5L64,90.3H44l-4-13l-4,13H16l4.5-35.8H59.5z"
            }), Object(B.jsx)("path", {
                fill: e,
                d: "M31,2c9,4,9,4,18,0h10h0.5L78,20.5l-13,13L59.5,28v26.5h-39V28L15,33.5l-13-13L20.5,2H21H31z"
            }), Object(B.jsx)("path", {
                fill: n,
                d: "M58,20.5H22v-1h36V20.5z M58,23.5H22v1h36V23.5z M58,27.5H22v1h36V27.5z M58,31.5H22v1h36V31.5z M58,34.5H22v1 h36V34.5z M58,37.5H22v1h36V37.5z M58,40.5H22v1h36V40.5z M58,43.5H22v1h36V43.5z M58,46.5H22v1h36V46.5z M58,49.5H22v1h36V49.5z M58,52.5H22v1h36V52.5z"
            }), Object(B.jsxs)("g", {
                children: [Object(B.jsx)("polyline", {
                    fill: "none",
                    stroke: "#000000",
                    points: "34.5,126 34.5,95.5 19.5,95.5 21.3,126 \t"
                }), Object(B.jsx)("polyline", {
                    fill: "none",
                    stroke: "#000000",
                    points: "58.7,126 60.5,95.5 45.5,95.5 45.5,126 \t"
                }), Object(B.jsx)("path", {
                    fill: "none",
                    stroke: "#000000",
                    d: "M59.5,54.5L64,90.3H44l-4-13l-4,13H16l4.5-35.8H59.5z"
                }), Object(B.jsx)("path", {
                    fill: "none",
                    stroke: "#000000",
                    d: "M31,2c9,4,9,4,18,0h10h0.5L78,20.5l-13,13L59.5,28v26.5h-39V28L15,33.5l-13-13L20.5,2H21H31z"
                })]
            })]
        })
    }
      , Ke = n(18)
      , _e = n.n(Ke);
    function De(t) {
        var e = Object(Jt.a)(t, 3)
          , n = e[0]
          , a = e[1]
          , r = e[2]
          , s = a << 2 | a >> 4
          , i = r << 2 | r >> 4;
        return "rgb(".concat(n << 2 | n >> 4, ", ").concat(s, ", ").concat(i, ")")
    }
    function Ge(t) {
        var e = Y(t)
          , n = e.uniformSubId;
        if (e.isUniformForGk)
            return "GK";
        switch (n) {
        case 0:
            return "Home";
        case 1:
            return "Away";
        case 2:
            return "3rd";
        case 3:
            return "4th";
        default:
            return "Unknown"
        }
    }
    var He = function(t) {
        var e = t.index
          , n = Object(c.d)((function(t) {
            return t.app.data.uniforms[e]
        }
        ))
          , r = Object(c.d)((function(t) {
            return t.app.editedData.uniforms[e]
        }
        ))
          , s = Object(c.c)()
          , i = Boolean(r.uniformId)
          , o = n.isImageSet && -1 !== n.imageListIndex
          , l = r.isImageSet && -1 !== r.imageListIndex
          , y = o !== l
          , u = Object(a.useCallback)((function() {
            s(Me(e, "isImageSet", !l))
        }
        ), [s, e, l])
          , g = Object(a.useCallback)((function() {
            s(Me(e, "isImageSmall", !0))
        }
        ), [s, e])
          , h = Object(a.useCallback)((function() {
            s(Me(e, "isImageSmall", !1))
        }
        ), [s, e]);
        if (!i)
            return null;
        var d = [r.shirtR, r.shirtG, r.shirtB]
          , b = [r.shirtDesign1R, r.shirtDesign1G, r.shirtDesign1B]
          , m = [r.shortR, r.shortG, r.shortB]
          , k = [r.sockR, r.sockG, r.sockB];
        return Object(B.jsxs)("div", {
            className: _e.a.QuickEditUniform,
            children: [Object(B.jsx)("div", {
                className: _e.a.thumbnailContainer,
                children: Object(B.jsx)(Ue, {
                    shirtColor: De(d),
                    shirtSecondaryColor: De(b),
                    shortColor: De(m),
                    sockColor: De(k)
                })
            }), Object(B.jsx)("div", {
                className: _e.a.kitName,
                children: Ge(r.uniformId)
            }), Object(B.jsxs)("div", {
                className: _e.a.inputBoxes,
                children: [Object(B.jsx)(W, {
                    content: "Use image for the kit",
                    children: Object(B.jsx)("span", {
                        className: Object(f.a)([], Object(I.a)({}, _e.a.editedBackgroundColor, y)),
                        children: Object(B.jsx)(Ie, {
                            isChecked: l,
                            onChange: u
                        })
                    })
                }), Object(B.jsx)(W, {
                    content: "Small image size (1024x1024)",
                    children: Object(B.jsxs)("label", {
                        className: Object(f.a)([], Object(I.a)({}, _e.a.editedBackgroundColor, !n.isImageSmall && n.isImageSmall !== r.isImageSmall)),
                        children: [Object(B.jsx)("input", {
                            type: "radio",
                            checked: r.isImageSmall,
                            onChange: g
                        }), "S"]
                    })
                }), Object(B.jsx)(W, {
                    content: "Large image size (2048x2048)",
                    children: Object(B.jsxs)("label", {
                        className: Object(f.a)([], Object(I.a)({}, _e.a.editedBackgroundColor, n.isImageSmall && n.isImageSmall !== r.isImageSmall)),
                        children: [Object(B.jsx)("input", {
                            type: "radio",
                            checked: !r.isImageSmall,
                            onChange: h
                        }), "L"]
                    })
                })]
            }), Object(B.jsxs)("div", {
                children: ["File name:", Object(B.jsx)("br", {}), Object(B.jsx)("input", {
                    className: Object(f.a)([_e.a.nameInput], Object(I.a)({}, _e.a.editedBackgroundColor, n.imageFileName !== r.imageFileName)),
                    type: "text",
                    value: r.imageFileName,
                    onChange: function(t) {
                        s(Me(e, "imageFileName", t.target.value))
                    }
                })]
            })]
        })
    }
      , Ve = function(t) {
        var e = t.title
          , n = t.children;
        return Object(B.jsxs)("div", {
            children: ["".concat(e, ":"), n]
        })
    }
      , We = function(t) {
        var e = t.children
          , n = Object(c.d)((function(t) {
            return t.app
        }
        ))
          , a = n.data
          , r = n.editedData
          , s = Object(c.c)()
          , i = r.coach.isCoachNameModified
          , o = r.coach.isFromLiveUpdate
          , l = a.coach.isCoachNameModified !== r.coach.isCoachNameModified
          , y = a.coach.isFromLiveUpdate !== r.coach.isFromLiveUpdate;
        return a && r ? Object(B.jsxs)("div", {
            className: Se.a.wrapper,
            children: [Object(B.jsx)(Fe, {
                className: Se.a.teamInfo
            }), Object(B.jsxs)(Ne, {
                className: Se.a.managerInfo,
                title: "Manager Information",
                children: [Object(B.jsx)(Ve, {
                    title: "Manager ID",
                    children: Object(B.jsx)(ye, {
                        fieldKey: "coach.coachId",
                        id: "coachId",
                    })
                }), Object(B.jsx)(Ve, {
                    title: "Manager association",
                    children: Object(B.jsx)(W, {
                        content: 'It\'s equivalent to the "Country/Region" of the manager.',
                        children: Object(B.jsx)(ye, {
                            fieldKey: "coach.countryId",
                            id: "coachCountryId"
                        })
                    })
                }), Object(B.jsxs)(Ve, {
                    title: "Manager name",
                    children: [Object(B.jsx)(W, {
                        content: "Name Edited flag",
                        children: Object(B.jsx)("span", {
                            className: Object(f.a)([], Object(I.a)({}, Se.a.editedBackgroundColor, l)),
                            children: Object(B.jsx)(Ie, {
                                isChecked: i,
                                onChange: function(t, e) {
                                    s(Ft("isCoachNameModified", e))
                                }
                            })
                        })
                    }), Object(B.jsx)(ye, {
                        fieldKey: "coach.coachName",
                        id: "coachName"
                    })]
                }), Object(B.jsx)(Ve, {
                    title: "Manager live update flag",
                    children: Object(B.jsx)("span", {
                        className: Object(f.a)([], Object(I.a)({}, Se.a.editedBackgroundColor, y)),
                        children: Object(B.jsx)(Ie, {
                            isChecked: o,
                            onChange: function(t, e) {
                                s(Ft("isFromLiveUpdate", e))
                            }
                        })
                    })
                }), Object(B.jsxs)(Ve, {
                    title: "Manager image",
                    children: [Object(B.jsx)(ye, {
                        fieldKey: "coach.isImageSet"
                    }), Object(B.jsx)(ye, {
                        fieldKey: "coach.imageFileName",
                        id: "coachImage"
                    })]
                })]
            }), Object(B.jsx)(Ne, {
                className: Se.a.stripsInfo,
                title: "Kits information",
                children: Object(B.jsxs)("div", {
                    className: Se.a.kits,
                    children: [Object(B.jsx)(He, {
                        index: 0
                    }), Object(B.jsx)(He, {
                        index: 1
                    }), Object(B.jsx)(He, {
                        index: 2
                    }), Object(B.jsx)(He, {
                        index: 3
                    }), Object(B.jsx)(He, {
                        index: 4
                    })]
                })
            }), e]
        }) : null
    }
    , Ye = function(t) {
        var e = t.onAutoFix,
            n = t.onAllAgeMinusOne,
            a = t.onAllAgePlusOne,
            convertIds = function() {
                var inputs = document.querySelectorAll('input#playerId');
            
                inputs.forEach(function(input) {
                    var original = Number(input.value);
                    var converted;
            
                    if (original > 1074003968) {
                        converted = original - 1074003968;
                    } else if (original > 1073741824) {
                        converted = original - 1073741824;
                    } else if (original > 67108864) {
                        converted = original - 67108864;
                    } else if (original > 50331648) {
                        converted = original - 50331648;
                    } else if (original > 25165824) {
                        converted = original - 25165824;
                    } else if (original > 16777216) {
                        converted = original - 16777216;
                    } else if (original > 8388608) {
                        converted = original - 8388608;
                    } else {
                        converted = original;
                    }
            
                    if (converted !== original) {
                        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                        nativeInputValueSetter.call(input, String(converted));
                        input.dispatchEvent(new Event("input", { bubbles: true }));
                        input.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                });
            },
            
            convertAfcIds = function() {
                var inputs = document.querySelectorAll('input#playerId');
            
                inputs.forEach(function(input) {
                    var original = Number(input.value);
                    var converted;
            
                    if (original > 1074003968) {
                        converted = original - 1074003968;
                    } else if (original > 1073741824) {
                        converted = original - 1073741824;
                    } else if (original > 67108864) {
                        converted = original - 67108864;
                    } else if (original > 50331648) {
                        converted = original - 50331648;
                    } else if (original > 25165824) {
                        converted = original - 25165824;
                    } else if (original > 16777216) {
                        converted = original - 16777216;
                    } else if (original > 8388608) {
                        converted = original - 8388608;
                    } else {
                        converted = original;
                    }
            
                    // Se o ID convertido ainda for maior que 200000, mantemos o original
                    if (converted > 200000) {
                        converted = original;
                    } else {
                        converted = converted + 1073741824;
                    }
            
                    if (converted !== original) {
                        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
                        nativeInputValueSetter.call(input, String(converted));
                        input.dispatchEvent(new Event("input", { bubbles: true }));
                        input.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                });
            };
            
            
            
              
        return Object(B.jsxs)("div", {
          children: [
            Object(B.jsx)(W, {
              content: "Auto correct live-update flags for the manager and players, replace unusable boots and gloves.",
              children: Object(B.jsx)("button", {
                onClick: e,
                children: "Auto fix"
              })
            }),
            " ",
            Object(B.jsx)("button", {
              onClick: n,
              children: "All players' age -1"
            }),
            " ",
            Object(B.jsx)("button", {
              onClick: a,
              children: "All players' age +1"
            }),
            " ",
            // Novo botão para aplicar a conversão usando a lógica informada
            Object(B.jsx)("button", {
              onClick: convertIds,
              children: "Convert IDs to Base"
            }),
            " ",
            // Novo botão para aplicar a conversão usando a lógica informada
            Object(B.jsx)("button", {
              onClick: convertAfcIds,
              children: "Convert IDs to AFC"
            })
          ]
        });
      }
      
      
      , ze = Object(c.b)((function() {
        return {}
    }
    ), (function(t) {
        return {
            onAllAgeMinusOne: function() {
              t(Pt(-1))
            },
            onAllAgePlusOne: function() {
              t(Pt(1))
            },
            onAutoFix: function() {
              t(Ut())
            },
            correctIdstoBase: function() {
              t(Wt())
            },
            correctIdstoBase: function() {
              t(Wt())
            }
        }
    }
    ))(Ye)
      , Ze = function(t) {
        return Object(B.jsx)("div", Object(O.a)({}, t))
    }
      , Je = n(31)
      , Qe = n.n(Je)
      , Xe = function(t) {
        var e = t.className
          , n = t.children;
        return Object(B.jsx)("div", {
            className: Object(f.a)(e, Qe.a.content),
            children: n
        })
    }
      , qe = Ze
      , $e = function(t) {
        var e = t.title
          , n = t.afterContent;
        return Object(B.jsxs)("div", {
            className: Qe.a.header,
            children: [Object(B.jsx)("div", {
                className: Qe.a.title,
                children: e
            }), Object(B.jsx)("div", {
                className: Qe.a.afterContent,
                children: n
            })]
        })
    }
      , tn = function(t) {
        var e = t.loadCount
          , n = t.data
          , a = t.editedData
          , r = t.playerSortBy
          , s = t.isPlayerAscendingSort
          , i = t.onPlayerChange
          , c = t.onPlayerLiveUpdateChange
          , o = t.onPlayerNameFlagChange
          , l = t.onPlayerSort
          , y = function(t) {
            return function(e, n, a) {
                i(e, n, t, a)
            }
        };
        return Object(B.jsxs)(qe, {
            children: [Object(B.jsx)($e, {
                title: a && a.team.teamName,
                afterContent: Object(B.jsx)(ze, {})
            }), n && Object(B.jsx)(Xe, {
                children: Object(B.jsx)(We, {
                    children: Object(B.jsx)(Ne, {
                        className: Se.a.players,
                        title: "Players",
                        children: Object(B.jsx)(Oe, {
                            loadCount: e,
                            data: n,
                            editedData: a,
                            playerSortBy: r,
                            isPlayerAscendingSort: s,
                            onLiveUpdateChange: c,
                            onPlayerIdChange: y("playerId"),
                            onPlayerNameChange: y("clubShirtName"),
                            onPlayerNameFlagChange: o,
                            onPlayerSort: l,
                            onAgeChange: y("age"),
                            onReputationChange: y("reputation"),
                            onAttitudeChange: y("attitude")
                        })
                    })
                })
            })]
        })
    }
      , en = Object(c.b)((function(t) {
        return {
            loadCount: t.app.loadCount,
            data: t.app.data,
            editedData: t.app.editedData,
            playerSortBy: t.quickEdit.playerSortBy,
            isPlayerAscendingSort: t.quickEdit.isPlayerAscendingSort
        }
    }
    ), (function(t) {
        return {
            onPlayerChange: function(e, n, a, r) {
                t(Tt(n, a, r))
            },
            onPlayerLiveUpdateChange: function(e, n, a) {
                t(Tt(a.playerIndex, "isFromLiveUpdate", n))
            },
            onPlayerNameFlagChange: function(e, n, a) {
                t(Tt(a.playerIndex, "isPlayerNameChanged", n))
            },
            onAutoFix: function() {
                t(Ut())
            },
            onPlayerSort: function(e) {
                t(function(t) {
                    return {
                        type: Kt,
                        payload: {
                            sortBy: t
                        }
                    }
                }(e))
            }
        }
    }
    ))(tn)
      , nn = "PLAYERS_TAB_SELECT_PLAYER";
    function an() {
        return Object(c.d)((function(t) {
            var e = t.app.editedData
              , n = t.playersTab.selectedPlayerIndex;
            return [e.players[n], n]
        }
        ))
    }
    var rn = n(21)
      , sn = n.n(rn)
      , cn = function(t) {
        return Object(B.jsx)("ul", Object(O.a)({
            className: sn.a.menu
        }, t))
    }
      , on = ["number", "position", "name"]
      , ln = cn
      , yn = function(t) {
        var e = t.number
          , n = t.position
          , a = t.name
          , r = Object(j.a)(t, on);
        return Object(B.jsx)("li", {
            className: sn.a.itemContainer,
            children: Object(B.jsxs)("span", Object(O.a)(Object(O.a)({
                className: sn.a.item
            }, r), {}, {
                children: [Object(B.jsx)("span", {
                    className: sn.a.itemNumber,
                    children: e
                }), Object(B.jsx)("span", {
                    className: sn.a.itemPosition,
                    children: n
                }), Object(B.jsx)("span", {
                    className: sn.a.itemName,
                    children: a
                })]
            }))
        })
    }
      , un = n(145)
      , gn = n(63)
      , Bn = n.n(gn)
      , hn = Object(a.memo)((function(t) {
        var e = t.className
          , n = t.min
          , a = t.max
          , r = (t.value - n) / (a - n);
        return Object(B.jsx)("div", {
            className: Object(f.a)(e, Bn.a.wrapper),
            children: Object(B.jsx)("div", {
                className: Bn.a.bar,
                style: {
                    width: "".concat(100 * r, "%")
                }
            })
        })
    }
    ))
      , dn = n(25)
      , bn = n.n(dn)
      , mn = function(t) {
        var e = t.value
          , n = t.title
          , r = t.min
          , s = t.max
          , i = t.isEdited
          , c = t.onChange
          , o = Object(a.useCallback)((function(t) {
            c(t, parseInt(t.target.value, 10))
        }
        ), [c])
          , l = Object(un.a)();
        return Object(B.jsxs)("div", {
            className: bn.a.wrapper,
            children: [Object(B.jsxs)("div", {
                className: bn.a.field,
                children: [Object(B.jsx)("div", {
                    children: l.formatMessage({
                        id: "ability.".concat(n)
                    })
                }), Object(B.jsx)(re, {
                    value: e,
                    isEdited: i,
                    onChange: o,
                    min: r,
                    max: s,
                    style: {
                        width: 40
                    }
                })]
            }), Object(B.jsx)("div", {
                className: bn.a.barContainer,
                children: Object(B.jsx)(hn, {
                    min: r,
                    max: s,
                    value: e
                })
            })]
        })
    }
      , kn = function(t) {
        var e = t.fieldKey
          , n = t.subtype
          , a = t.isEdited
          , r = t.value
          , s = t.onChange
          , i = Object(un.a)();
        return Object(B.jsx)("div", {
            className: bn.a.wrapper,
            children: Object(B.jsxs)("label", {
                className: bn.a.field,
                children: [Object(B.jsx)("div", {
                    children: i.formatMessage({
                        id: "".concat(n, ".").concat(e)
                    })
                }), Object(B.jsx)(Zt, {
                    isEdited: a,
                    value: r,
                    onChange: s
                })]
            })
        })
    }
      , On = function(t) {
        var e = t.value
          , n = t.title;
        return Object(B.jsxs)("div", {
            children: [Object(B.jsx)("div", {
                children: n.toUpperCase()
            }), Object(B.jsx)("input", {
                value: e
            })]
        })
    }
      , In = ["fieldKey"]
      , jn = function(t) {
        var e = t.fieldKey
          , n = Object(j.a)(t, In)
          , a = an()
          , r = Object(Jt.a)(a, 2)
          , s = r[0]
          , i = r[1]
          , c = "players.".concat(i, ".").concat(e)
          , o = Yt(c)
          , l = Wt(Vt, c)
          , y = null === l || void 0 === l ? void 0 : l.type
          , u = null === l || void 0 === l ? void 0 : l.subtype;
        switch (y) {
        case q.Association:
            return Object(B.jsx)(te, {
                value: s[e]
            });
        case q.Integer:
            return u === $.Ability ? Object(B.jsx)(mn, Object(O.a)({
                title: e,
                min: null === l || void 0 === l ? void 0 : l.min,
                max: null === l || void 0 === l ? void 0 : l.max,
                value: s[e],
                onChange: o
            }, n)) : Object(B.jsx)(On, Object(O.a)({
                title: e,
                value: s[e]
            }, n));
        case q.Boolean:
            return Object(B.jsx)(kn, {
                fieldKey: e,
                subtype: u,
                value: s[e],
                onChange: o
            });
        default:
            return Object(B.jsx)(On, Object(O.a)({
                title: e,
                value: s[e]
            }, n))
        }
    }
      , fn = n(27)
      , An = n.n(fn)
      , Nn = function() {
        return Object(B.jsxs)("div", {
            className: An.a.attributes,
            children: [Object(B.jsxs)(Ae, {
                title: "Info",
                className: An.a.stats,
                children: [Object(B.jsx)(jn, {
                    fieldKey: "playerId",
                    id: "indPlayerId"
                }), Object(B.jsx)(jn, {
                    fieldKey: "playerName",
                    id: "indPlayerName"
                }), Object(B.jsx)(jn, {
                    fieldKey: "countryId1",
                    id: "indCountryId"
                }), Object(B.jsx)(jn, {
                    fieldKey: "clubShirtName",
                    id: "indClubShirtName"
                }), Object(B.jsx)(jn, {
                    fieldKey: "ntShirtName",
                    id: "indNtShirtName"
                }), Object(B.jsx)(jn, {
                    fieldKey: "age",
                    id: "indAge"
                }), Object(B.jsx)(jn, {
                    fieldKey: "height",
                    id: "indHeight"
                }), Object(B.jsx)(jn, {
                    fieldKey: "weight",
                    id: "indWeight"
                }), Object(B.jsx)(jn, {
                    fieldKey: "playingStyle",
                    id: "indPlayingStyle"
                }), Object(B.jsx)(jn, {
                    fieldKey: "strongerFoot",
                    id: "indStrongerFoot"
                }), Object(B.jsx)(jn, {
                    fieldKey: "strongerHand",
                    id: "indStrongerHand"
                }), Object(B.jsx)(jn, {
                    fieldKey: "attitude",
                    id: "indAttitude"
                }), Object(B.jsx)(jn, {
                    fieldKey: "reputation",
                    id: "indReputation"
                }), Object(B.jsx)(jn, {
                    fieldKey: "ckMotion",
                    id: "indCkMotion"
                }), Object(B.jsx)(jn, {
                    fieldKey: "runHunch",
                    id: "indRunHunch"
                }), Object(B.jsx)(jn, {
                    fieldKey: "dribArmMove",
                    id: "indDribArmMove"
                })]
            }), Object(B.jsxs)(Ae, {
                title: "Position",
                className: An.a.stats,
                children: [Object(B.jsx)(jn, {
                    fieldKey: "registeredPosition"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionGk",
                    id: "indPositionGk"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionCb",
                    id: "indPositionCb"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionRb",
                    id: "indPositionRb"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionLb",
                    id: "indPositionLb"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionDmf",
                    id: "indPositionDmf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionCmf",
                    id: "indPositionCmf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionRmf",
                    id: "indPositionRmf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionLmf", id: "indPositionLmf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionAmf",
                    id: "indPositionAmf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionRwf",
                    id: "indPositionRwf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionLwf",
                    id: "indPositionLwf"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionSs",
                    id: "indPositionSs"
                }), Object(B.jsx)(jn, {
                    fieldKey: "positionCf",
                    id: "indPositionCf"
                })]
            }), Object(B.jsxs)(Ae, {
                title: "Ability",
                className: An.a.stats,
                children: [ // Changes: add "id" attribute on fields
                    Object(B.jsx)(jn, { fieldKey: "attackingProwess", id: "statAttackingProwess" }),
                    Object(B.jsx)(jn, { fieldKey: "ballControl", id: "statBallControl" }),
                    Object(B.jsx)(jn, { fieldKey: "dribbling", id: "statDribbling" }),
                    Object(B.jsx)(jn, { fieldKey: "tightPossession", id: "statTightPossession" }),
                    Object(B.jsx)(jn, { fieldKey: "lowPass", id: "statLowPass" }),
                    Object(B.jsx)(jn, { fieldKey: "loftedPass", id: "statLoftedPass" }),
                    Object(B.jsx)(jn, { fieldKey: "finishing", id: "statFinishing" }),
                    Object(B.jsx)(jn, { fieldKey: "headingAbility", id: "statHeadingAbility" }),
                    Object(B.jsx)(jn, { fieldKey: "placeKicking", id: "statPlaceKicking" }),
                    Object(B.jsx)(jn, { fieldKey: "curl", id: "statCurl" }),
                    Object(B.jsx)(jn, { fieldKey: "speed", id: "statSpeed" }),
                    Object(B.jsx)(jn, { fieldKey: "acceleration", id: "statAcceleration" }),
                    Object(B.jsx)(jn, { fieldKey: "kickingPower", id: "statKickingPower" }),
                    Object(B.jsx)(jn, { fieldKey: "jump", id: "statJump" }),
                    Object(B.jsx)(jn, { fieldKey: "physicalContact", id: "statPhysicalContact" }),
                    Object(B.jsx)(jn, { fieldKey: "balance", id: "statBalance" }),
                    Object(B.jsx)(jn, { fieldKey: "stamina", id: "statStamina" }),
                    Object(B.jsx)(jn, { fieldKey: "defensiveProwess", id: "statDefensiveProwess" }),
                    Object(B.jsx)(jn, { fieldKey: "ballWinning", id: "statBallWinning" }),
                    Object(B.jsx)(jn, { fieldKey: "aggression", id: "statAggression" }),
                    Object(B.jsx)(jn, { fieldKey: "gkAwareness", id: "statGkAwareness" }),
                    Object(B.jsx)(jn, { fieldKey: "gkCatching", id: "statGkCatching" }),
                    Object(B.jsx)(jn, { fieldKey: "gkClearing", id: "statGkClearing" }),
                    Object(B.jsx)(jn, { fieldKey: "gkReflexes", id: "statGkReflexes" }),
                    Object(B.jsx)(jn, { fieldKey: "gkReach", id: "statGkReach" }),
                    Object(B.jsx)(jn, { fieldKey: "weakFootUsage", id: "statWeakFootUsage" }),
                    Object(B.jsx)(jn, { fieldKey: "weakFootAccuracy", id: "statWeakFootAccuracy" }),
                    Object(B.jsx)(jn, { fieldKey: "form", id: "statForm" }),
                    Object(B.jsx)(jn, { fieldKey: "injuryResistance", id: "statInjuryResistance" })
                ]
            }), Object(B.jsxs)(Ae, {
                title: "Player Skills",
                className: An.a.stats,
                children: [
                    Object(B.jsx)(jn, { fieldKey: "scissorsFeint", id: "skillScissorsFeint" }),
                    Object(B.jsx)(jn, { fieldKey: "doubleTouch", id: "skillDoubleTouch" }),
                    Object(B.jsx)(jn, { fieldKey: "flipFlap", id: "skillFlipFlap" }),
                    Object(B.jsx)(jn, { fieldKey: "marseilleTurn", id: "skillMarseilleTurn" }),
                    Object(B.jsx)(jn, { fieldKey: "sombrero", id: "skillSombrero" }),
                    Object(B.jsx)(jn, { fieldKey: "crossOverTurn", id: "skillCrossOverTurn" }),
                    Object(B.jsx)(jn, { fieldKey: "cutBehindAndTurn", id: "skillCutBehindAndTurn" }),
                    Object(B.jsx)(jn, { fieldKey: "scotchMove", id: "skillScotchMove" }),
                    Object(B.jsx)(jn, { fieldKey: "stepOnSkillControl", id: "skillStepOnSkillControl" }),
                    Object(B.jsx)(jn, { fieldKey: "headingSkill", id: "skillHeadingSkill" }),
                    Object(B.jsx)(jn, { fieldKey: "longRangeDrive", id: "skillLongRangeDrive" }),
                    Object(B.jsx)(jn, { fieldKey: "chipShotControl", id: "skillChipShotControl" }),
                    Object(B.jsx)(jn, { fieldKey: "longRangeShooting", id: "skillLongRangeShooting" }),
                    Object(B.jsx)(jn, { fieldKey: "knuckleShot", id: "skillKnuckleShot" }),
                    Object(B.jsx)(jn, { fieldKey: "dippingShot", id: "skillDippingShot" }),
                    Object(B.jsx)(jn, { fieldKey: "risingShot", id: "skillRisingShot" }),
                    Object(B.jsx)(jn, { fieldKey: "acrobaticFinishing", id: "skillAcrobaticFinishing" }),
                    Object(B.jsx)(jn, { fieldKey: "heelTrick", id: "skillHeelTrick" }),
                    Object(B.jsx)(jn, { fieldKey: "firstTimeShot", id: "skillFirstTimeShot" }),
                    Object(B.jsx)(jn, { fieldKey: "oneTouchPass", id: "skillOneTouchPass" }),
                    Object(B.jsx)(jn, { fieldKey: "throughPassing", id: "skillThroughPassing" }),
                    Object(B.jsx)(jn, { fieldKey: "weightedPass", id: "skillWeightedPass" }),
                    Object(B.jsx)(jn, { fieldKey: "pinpointCrossing", id: "skillPinpointCrossing" }),
                    Object(B.jsx)(jn, { fieldKey: "outsideCurler", id: "skillOutsideCurler" }),
                    Object(B.jsx)(jn, { fieldKey: "rabona", id: "skillRabona" }),
                    Object(B.jsx)(jn, { fieldKey: "noLookPass", id: "skillNoLookPass" }),
                    Object(B.jsx)(jn, { fieldKey: "lowLoftedPass", id: "skillLowLoftedPass" }),
                    Object(B.jsx)(jn, { fieldKey: "gkLowPunt", id: "skillGkLowPunt" }),
                    Object(B.jsx)(jn, { fieldKey: "gkHighPunt", id: "skillGkHighPunt" }),
                    Object(B.jsx)(jn, { fieldKey: "longThrow", id: "skillLongThrow" }),
                    Object(B.jsx)(jn, { fieldKey: "gkLongThrow", id: "skillGkLongThrow" }),
                    Object(B.jsx)(jn, { fieldKey: "penaltySpecialist", id: "skillPenaltySpecialist" }),
                    Object(B.jsx)(jn, { fieldKey: "gkPenaltySaver", id: "skillGkPenaltySaver" }),
                    Object(B.jsx)(jn, { fieldKey: "gamesmanship", id: "skillGamesmanship" }),
                    Object(B.jsx)(jn, { fieldKey: "manMarking", id: "skillManMarking" }),
                    Object(B.jsx)(jn, { fieldKey: "trackBack", id: "skillTrackBack" }),
                    Object(B.jsx)(jn, { fieldKey: "interception", id: "skillInterception" }),
                    Object(B.jsx)(jn, { fieldKey: "acrobaticClear", id: "skillAcrobaticClear" }),
                    Object(B.jsx)(jn, { fieldKey: "captaincy", id: "skillCaptaincy" }),
                    Object(B.jsx)(jn, { fieldKey: "superSub", id: "skillSuperSub" }),
                    Object(B.jsx)(jn, { fieldKey: "fightingSpirit", id: "skillFightingSpirit" })
                ]
            }), 
            
            Object(B.jsxs)(Ae, {
                title: "COM Playing Styles",
                className: An.a.stats,
                children: [
                    Object(B.jsx)(jn, { fieldKey: "trickster", id: "styleTrickster" }),
                    Object(B.jsx)(jn, { fieldKey: "mazingRun", id: "styleMazingRun" }),
                    Object(B.jsx)(jn, { fieldKey: "speedingBullet", id: "styleSpeedingBullet" }),
                    Object(B.jsx)(jn, { fieldKey: "incisiveRun", id: "styleIncisiveRun" }),
                    Object(B.jsx)(jn, { fieldKey: "longBallExpert", id: "styleLongBallExpert" }),
                    Object(B.jsx)(jn, { fieldKey: "earlyCross", id: "styleEarlyCross" }),
                    Object(B.jsx)(jn, { fieldKey: "longRanger", id: "styleLongRanger" })
                ]
            })]
        })
    }
      , pn = n(84)
      , Sn = n.n(pn)
      , En = function(props) {
        var playerSelectList = props.playerSelectList,
            onPlayerSelect = props.onPlayerSelect;
      
        // Funções de evento iniciais para os botões
        var handleImportXLSX = function() {
          console.log("Import *.xlsx clicado");
          // Aqui você pode iniciar a lógica de importação do arquivo XLSX
        };
      
        var handleExportXLSX = function() {
          console.log("Export *.xlsx clicado");
          // Aqui você pode iniciar a lógica de exportação para XLSX
        };
      
        var handleScrapePESDB = function() {
          console.log("Importar do PESDB clicado");
          // Aqui você fará a chamada ou scraping para obter dados do PESDB
        };
      
        var handleScrapeSoFIFA = function() {
          console.log("Importar do SoFIFA clicado");
          // Aqui você fará a chamada ou scraping para obter dados do SoFIFA
        };
      
        var handleAddPlayer = function() {
          console.log("Adicionar Jogador clicado");
          // Aqui você pode adicionar um novo jogador ao array, respeitando o limite de 40
        };
      
        return Object(B.jsxs)(qe, {
          children: [
            Object(B.jsx)($e, {
              title: "Players",
              // Agora, após o título, adicionamos os botões com os novos handlers
              afterContent: Object(B.jsxs)(B.Fragment, {
                children: [
                  Object(B.jsx)("button", {
                    type: "button",
                    onClick: handleImportXLSX,
                    disabled: !0,
                    children: "Import *.xlsx"
                  }),
                  " ",
                  Object(B.jsx)("button", {
                    type: "button",
                    onClick: handleExportXLSX,
                    disabled: !0,
                    children: "Export *.xlsx"
                  }),
                  " ",
                  Object(B.jsx)("button", {
                    type: "button",
                    disabled: !0,
                    onClick: handleScrapePESDB,
                    children: "Import from PESDB"
                  }),
                  " ",
                  Object(B.jsx)("button", {
                    type: "button",
                    onClick: handleScrapeSoFIFA,
                    disabled: !0,
                    children: "Import from SoFIFA"
                  }),
                  " ",
                  Object(B.jsx)("button", {
                    type: "button",
                    onClick: handleAddPlayer,
                    disabled: !0,
                    children: "Add Player"
                  })
                ]
              })
            }),
            Object(B.jsxs)(Xe, {
              className: Sn.a.content,
              children: [
                Object(B.jsx)("div", {
                  children: Object(B.jsx)(ln, {
                    children: playerSelectList.map(function(player, index) {
                      return Object(B.jsx)(yn, {
                        index: index,
                        number: player.shirtNumber,
                        position: player.displayPosition,
                        name: player.playerName,
                        onClick: function(evt) {
                          return onPlayerSelect(evt, index);
                        }
                      }, index);
                    })
                  })
                }),
                Object(B.jsx)("div", {
                  children: Object(B.jsx)(Nn, {})
                })
              ]
            })
          ]
        });
      }
      , Rn = function() {
        var t = Object(c.c)()
          , e = Object(c.d)((function(t) {
            for (var e = t.app.editedData, n = e.playerAssignment, a = e.players, r = n.shirtNumbers, s = [], i = 0; i < a.length; i++) {
                var c = a[i];
                c.playerId && (s[i] = {
                    shirtNumber: r[i],
                    displayPosition: c.registeredPosition,
                    displayCountry: c.countryId1,
                    playerName: c.playerName
                })
            }
            return s
        }
        ))
          , n = an();
        return Object(B.jsx)(En, {
            player: n,
            playerSelectList: e,
            onPlayerSelect: function(e, n) {
                t(function(t) {
                    return {
                        type: nn,
                        payload: {
                            playerIndex: t
                        }
                    }
                }(n))
            }
        })
    }
      , xn = n(50);
    function Cn(t) {
        var e = Object(Jt.a)(t, 3)
          , n = e[0]
          , a = e[1]
          , r = e[2]
          , s = a << 2 | a >> 4
          , i = r << 2 | r >> 4
          , c = (n << 2 | n >> 4).toString(16)
          , o = s.toString(16)
          , l = i.toString(16);
        return "#".concat(c.length < 2 ? "0".concat(c) : c).concat(o.length < 2 ? "0".concat(o) : o).concat(l.length < 2 ? "0".concat(l) : l)
    }
    var vn = function(t) {
        var e = t.r
          , n = t.g
          , a = t.b
          , r = t.bitDepthPerChannel
          , s = t.onChange
          , i = void 0 === s ? function() {}
        : s;
        return Object(B.jsx)("input", {
            type: "color",
            value: Cn([e, n, a]),
            onChange: function(t) {
                var e = t.target.value.match(/([0-9a-fA-F]{2})/g).map((function(t) {
                    return parseInt(t, 16) >> 8 - r
                }
                ))
                  , n = Object(Jt.a)(e, 3)
                  , a = n[0]
                  , s = n[1]
                  , c = n[2];
                i(t, [a, s, c])
            }
        })
    }
      , Ln = function(t) {
        var e = t.fieldKeyR
          , n = t.fieldKeyG
          , a = t.fieldKeyB
          , r = t.bitLength
          , s = void 0 === r ? 6 : r
          , i = Object(c.c)()
          , o = Object(c.d)((function(t) {
            var r = t.app.editedData;
            return {
                r: Wt(r, e),
                g: Wt(r, n),
                b: Wt(r, a)
            }
        }
        ));
        return Object(B.jsx)(vn, {
            r: o.r,
            g: o.g,
            b: o.b,
            bitDepthPerChannel: s,
            onChange: function(t, r) {
                var s = Object(Jt.a)(r, 3)
                  , c = s[0]
                  , o = s[1]
                  , l = s[2];
                i(wt([[e, c], [n, o], [a, l]]))
            }
        })
    }
      , Tn = function(t) {
        var e = t.fieldKeyR
          , n = t.fieldKeyG
          , a = t.fieldKeyB
          , r = t.title
          , s = Object(c.c)();
        return Object(B.jsxs)("div", {
            onFocus: function() {
                s(function(t, e, n) {
                    return {
                        type: Lt,
                        payload: {
                            fieldKeyR: t,
                            fieldKeyG: e,
                            fieldKeyB: n
                        }
                    }
                }(e, n, a))
            },
            children: ["".concat(r, ": "), Object(B.jsx)(Ln, {
                fieldKeyR: e,
                fieldKeyG: n,
                fieldKeyB: a
            }), Object(B.jsx)(ye, {
                fieldKey: e
            }), Object(B.jsx)(ye, {
                fieldKey: n
            }), Object(B.jsx)(ye, {
                fieldKey: a
            })]
        })
    }
      , Pn = function(t) {
        var e = t.index
          , n = t.title
          , a = "uniforms.".concat(e);
        return Object(B.jsxs)(Ne, {
            title: n,
            children: [Object(B.jsxs)("div", {
                children: ["Collar ", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".collar")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Has chest name?", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".hasChestNumber")
                }), "Has shirt name?", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".hasShirtName")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Name font style", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".nameFontStyle")
                }), "Number font style", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".numberFontStyle")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Name position", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".namePosition")
                }), "Name size", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".nameSize")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Number position", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".numberPosition")
                }), "Number size", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".numberSize")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Short number side (L / R)", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".shortNumberSide")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Short number vert.", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".shortNumberVPos")
                }), "Short number hori.", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".shortNumberHPos")
                }), "Short number size", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".shortNumberSize")
                })]
            }), Object(B.jsxs)("div", {
                children: ["Chest number vert.", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".chestNumberVPos")
                }), "Chest number hori.", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".chestNumberHPos")
                }), "Chest number size", Object(B.jsx)(ye, {
                    fieldKey: "".concat(a, ".chestNumberSize")
                })]
            }), Object(B.jsx)(Tn, {
                title: "Chest number",
                fieldKeyR: "".concat(a, ".chestNumberR"),
                fieldKeyG: "".concat(a, ".chestNumberG"),
                fieldKeyB: "".concat(a, ".chestNumberB")
            }), Object(B.jsx)(Tn, {
                title: "Shirt primary color",
                fieldKeyR: "".concat(a, ".shirtR"),
                fieldKeyG: "".concat(a, ".shirtG"),
                fieldKeyB: "".concat(a, ".shirtB")
            }), Object(B.jsx)(Tn, {
                title: "Shirt second color",
                fieldKeyR: "".concat(a, ".shirtDesign1R"),
                fieldKeyG: "".concat(a, ".shirtDesign1G"),
                fieldKeyB: "".concat(a, ".shirtDesign1B")
            }), Object(B.jsx)(Tn, {
                title: "Short color",
                fieldKeyR: "".concat(a, ".shortR"),
                fieldKeyG: "".concat(a, ".shortG"),
                fieldKeyB: "".concat(a, ".shortB")
            }), Object(B.jsx)(Tn, {
                title: "Sock color",
                fieldKeyR: "".concat(a, ".sockR"),
                fieldKeyG: "".concat(a, ".sockG"),
                fieldKeyB: "".concat(a, ".sockB")
            }), Object(B.jsx)(Tn, {
                title: "Name",
                fieldKeyR: "".concat(a, ".nameR"),
                fieldKeyG: "".concat(a, ".nameG"),
                fieldKeyB: "".concat(a, ".nameB")
            }), Object(B.jsx)(Tn, {
                title: "Number",
                fieldKeyR: "".concat(a, ".numberR"),
                fieldKeyG: "".concat(a, ".numberG"),
                fieldKeyB: "".concat(a, ".numberB")
            }), Object(B.jsx)(Tn, {
                title: "Short Number",
                fieldKeyR: "".concat(a, ".shortNumberR"),
                fieldKeyG: "".concat(a, ".shortNumberG"),
                fieldKeyB: "".concat(a, ".shortNumberB")
            })]
        })
    }
      , Fn = n(53)
      , wn = n.n(Fn)
      , Mn = new FileReader
      , Un = function(t) {
        var e = t.image
          , n = Object(a.useRef)()
          , r = Object(a.useRef)()
          , s = Object(c.c)();
        Object(a.useEffect)((function() {
            if (r.current) {
                var t = n.current.getContext("2d")
                  , e = r.current;
                console.log(e.width, e.height),
                t.save(),
                t.scale(.5, .5),
                t.drawImage(e, 0, 0),
                t.restore()
            }
        }
        ), [e]);
        return Object(B.jsxs)(B.Fragment, {
            children: [Object(B.jsx)("canvas", {
                onMouseDown: function(t) {
                    var e, a, r, i = n.current, c = i.getContext("2d"), o = i.getBoundingClientRect(), l = (t.clientX - o.x) / o.width * 1024, y = (t.clientY - o.y) / o.height * 1024, u = c.getImageData(Math.floor(l), Math.floor(y), 1, 1).data;
                    s((e = u[0] >> 2,
                    a = u[1] >> 2,
                    r = u[2] >> 2,
                    {
                        type: Et,
                        payload: {
                            r: e,
                            g: a,
                            b: r
                        }
                    }))
                },
                width: 1024,
                height: 1024,
                ref: n
            }), Object(B.jsx)("img", {
                style: {
                    opacity: 0
                },
                ref: r,
                alt: "Color picking",
                src: e
            })]
        })
    }
      , Kn = function(t) {
        var e = Object(a.useState)(null)
          , n = Object(xn.a)(e, 2)
          , r = n[0]
          , s = n[1];
        return Object(B.jsxs)(qe, {
            onClick: function() {
                console.log("click")
            },
            onDragOver: function(t) {
                return t.preventDefault()
            },
            onDrop: function(t) {
                t.preventDefault();
                var e = t.dataTransfer.files[0];
                Mn.onload = function() {
                    s(Mn.result)
                }
                ,
                e && Mn.readAsDataURL(e)
            },
            children: [Object(B.jsx)($e, {
                title: "Strips"
            }), Object(B.jsx)(Xe, {
                children: Object(B.jsxs)("div", {
                    className: wn.a.contentContainer,
                    children: [Object(B.jsxs)("div", {
                        className: wn.a.left,
                        children: [Object(B.jsx)(Pn, {
                            index: 0,
                            title: "Home"
                        }), Object(B.jsx)(Pn, {
                            index: 1,
                            title: "Away"
                        }), Object(B.jsx)(Pn, {
                            index: 2,
                            title: "GK"
                        }), Object(B.jsx)(Pn, {
                            index: 3,
                            title: "Third"
                        }), Object(B.jsx)(Pn, {
                            index: 4,
                            title: "Fourth"
                        })]
                    }), Object(B.jsx)("div", {
                        className: wn.a.right,
                        children: Object(B.jsx)(Un, {
                            image: r
                        })
                    })]
                })
            })]
        })
    }
      , _n = n(85)
      , Dn = n.n(_n)
      , Gn = function() {
        return Object(B.jsx)("div", {
            className: Dn.a.welcome,
            children: 'Please open a *.ted file by clicking the "Open" button on top-left hand corner.'
        })
    }
      , Hn = function() {
        switch (Object(c.d)((function(t) {
            return t.app.openedTab
        }
        ))) {
        case yt:
            return Object(B.jsx)(en, {});
        case ut:
            return Object(B.jsx)(Rn, {});
        case gt:
            return Object(B.jsx)(Kn, {});
        default:
            return Object(B.jsx)(Gn, {})
        }
    }
      , Vn = (n(126),
    function() {
        return Object(B.jsx)(h, {
            header: Object(B.jsx)(et, {}),
            aside: Object(B.jsx)(At, {}),
            footer: Object(B.jsx)(m, {}),
            children: Object(B.jsx)(Hn, {})
        })
    }
    );
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    var Wn = n(86)
      , Yn = n(48);
    function zn(t, e, n) {
        for (var a = e.split("."), r = t, s = 0; s < a.length; s++) {
            var i = a[s];
            Array.isArray(r) && (i = parseInt(i, 10)),
            s < a.length - 1 ? r = r[i] : r[i] = n
        }
    }
    var Zn = n(87)
      , Jn = new Set(Zn);
    function Qn(t) {
        if (t) {
            if (Jn.has(t))
                return t;
            for (var e = t - t % 10, n = 1; n <= 9; n++)
                if (Jn.has(e + n))
                    return e + n;
            for (var a = t - t % 1e3, r = 1; r <= 999; r++)
                if (Jn.has(a + r))
                    return a + r
        }
    }
    var Xn = n(88)
      , qn = new Set(Xn);
    function $n(t) {
        if (t) {
            if (qn.has(t))
                return t;
            for (var e = t - t % 10, n = 1; n <= 9; n++)
                if (qn.has(e + n))
                    return e + n;
            for (var a = t - t % 100, r = 1; r <= 99; r++)
                if (qn.has(a + r))
                    return a + r
        }
    }
    var ta = n(89)
      , ea = new Set(ta);
    var na = n(90)
      , aa = new Set(na);
    var ra = n(47);
    function sa(t) {
        switch (t = t.trim()) {
        case "Player ID":
            return "playerId";
        case "callnameId":
            return "callnameId";
        case "isPlayerDefined":
            return "isPlayerDefined";
        case "shouldKeep":
            return "shouldKeep";
        case "shouldOverrideDefault":
            return "shouldOverrideDefault";
        case "shouldOverrideNames":
            return "shouldOverrideNames";
        case "shouldOverrideCountries":
            return "shouldOverrideCountries";
        case "\u865f\u78bc":
            return "shirtNumber";
        case "\u524d\u534a\u5b63\u865f\u78bc":
            return "shirtNumberPart1";
        case "\u5f8c\u534a\u5b63\u865f\u78bc":
            return "shirtNumberPart2";
        case "\u5fa9\u8cfd\u5f8c\u865f\u78bc":
            return "shirtNumberPart3";
        case "\u5408\u7d04\u5230\u671f\u65e5":
            return "contractExpiryDate";
        case "\u79df\u501f\u5230\u671f\u65e5":
            return "loanExpiryDate";
        case "\u79df\u501f\u81ea":
            return "loanFromTeamId";
        case "\u5e02\u5834\u50f9\u503c":
            return "marketValue";
        case "\u9752\u8a13":
            return "careerStartTeamId";
        case "\u540d\u7a31":
            return "yuePlayerName";
        case "\u65e5\u6587":
            return "jaPlayerName";
        case "\u6f22\u5b57":
            return "kanjiPlayerName";
        case "\u82f1\u6587":
            return "playerName";
        case "\u5168\u540d":
            return "fullName";
        case "\u7403\u6703\u5370\u540d":
            return "clubShirtName";
        case "\u570b\u5bb6\u968a\u5370\u540d":
            return "ntShirtName";
        case "\u51fa\u751f\u65e5\u671f":
            return "dob";
        case "\u5e74\u9f61":
            return "age";
        case "\u5e74\u9f61\u5e74\u4efd":
            return "ageYear";
        case "\u570b\u7c4d":
            return "country";
        case "\u7b2c\u4e8c\u570b\u7c4d":
            return "country2";
        case "\u570b\u5bb6\u968a\u4e0a\u9663\u6b21\u6578":
            return "ntCaps";
        case "\u8a3b\u518a\u4f4d\u7f6e":
            return "registeredPosition";
        case "\u5176\u4ed6\u4f4d\u7f6e(A)":
            return "otherPositionsAText";
        case "\u5176\u4ed6\u4f4d\u7f6e(B)":
            return "otherPositionsBText";
        case "\u6163\u7528\u8173":
            return "strongerFoot";
        case "\u8eab\u9ad8":
            return "height";
        case "\u9ad4\u91cd":
            return "weight";
        case "\u9032\u653b\u610f\u8b58":
            return "attackingProwess";
        case "\u63a7\u7403":
            return "ballControl";
        case "\u76e4\u7403":
            return "dribbling";
        case "\u7dca\u5bc6\u63a7\u7403":
            return "tightPossession";
        case "\u5730\u9762\u50b3\u7403":
            return "lowPass";
        case "\u9ad8\u540a\u50b3\u7403":
            return "loftedPass";
        case "\u5c04\u9580":
            return "finishing";
        case "\u982d\u7403":
            return "headingAbility";
        case "\u5b9a\u4f4d\u7403":
            return "placeKicking";
        case "\u66f2\u7403":
            return "curl";
        case "\u901f\u5ea6":
            return "speed";
        case "\u52a0\u901f":
            return "acceleration";
        case "\u8173\u4e0b\u529b\u91cf":
            return "kickingPower";
        case "\u8df3\u8e8d":
            return "jump";
        case "\u8eab\u9ad4\u78b0\u649e":
            return "physicalContact";
        case "\u5e73\u8861":
            return "balance";
        case "\u9ad4\u529b":
            return "stamina";
        case "\u9632\u5b88\u610f\u8b58":
            return "defensiveProwess";
        case "\u6436\u7403":
            return "ballWinning";
        case "\u7a4d\u6975\u6027":
            return "aggression";
        case "\u5b88\u9580\u610f\u8b58":
            return "gkAwareness";
        case "\u5b88\u9580\u63a5\u7403":
            return "gkCatching";
        case "\u5b88\u9580\u89e3\u570d":
            return "gkClearing";
        case "\u5b88\u9580\u64b2\u6551\u53cd\u61c9":
            return "gkReflexes";
        case "\u5b88\u9580\u81c2\u5c55":
            return "gkReach";
        case "\u9006\u8db3\u983b\u5ea6":
            return "weakFootUsage";
        case "\u9006\u8db3\u7cbe\u5ea6":
            return "weakFootAccuracy";
        case "\u72c0\u614b\u6301\u7e8c\u6027":
            return "form";
        case "\u6297\u53d7\u50b7\u7a0b\u5ea6":
            return "injuryResistance";
        case "\u96fb\u8166\u6bd4\u8cfd\u98a8\u683c":
            return "comPlayingStylesText";
        case "\u6bd4\u8cfd\u98a8\u683c":
            return "playingStyleText";
        case "\u7403\u54e1\u6280\u5de7":
            return "playerSkillsText";
        case "\u76e4\u7403\u80cc\u90e8":
            return "dribHunch";
        case "\u76e4\u7403\u624b\u90e8":
            return "dribArmMove";
        case "\u5954\u8dd1\u80cc\u90e8":
            return "runHunch";
        case "\u5954\u8dd1\u624b\u90e8":
            return "runArmMove";
        case "\u89d2\u7403\u52d5\u4f5c":
            return "ckMotion";
        case "\u7f70\u7403\u52d5\u4f5c":
            return "fkMotion";
        case "\u5341\u4e8c\u78bc\u52d5\u4f5c":
            return "pkMotion";
        case "\u5165\u7403\u6176\u795d\u52d5\u4f5c":
            return "goalCelebration1";
        case "Boots":
            return "bootsId";
        case "Gloves":
            return "gloveId";
        case "Body Type":
            return "bodyType";
        case "Overall":
        case "\u610f\u898b":
        case "\u6548\u529b\u7403\u6703":
        case "2018\u5e7411\u6708\u6771\u4e9e\u76c3\u7b2c\u4e8c\u5708":
        case "2019\u5e746\u6708 vs \u4e2d\u83ef\u53f0\u5317":
        case "2019\u5e749\u6708\u5916\u570d\u8cfd":
        case "2019\u5e7410\u6708\u5916\u570d\u8cfd":
        case "2019\u5e7411\u6708\u5916\u570d\u8cfd":
        case "2019\u5e74\u6771\u4e9e\u76c3":
        case "2021\u5e746\u6708\u5916\u570d\u8cfd":
            return;
        default:
            console.log("[getColumnKey] Unsupported column title: ".concat(t))
        }
    }
    function ia(t, e) {
        !function(t, e) {
            var n, a = function(e) {
                if (e = e.trim(),
                t.Main.has(e)) {
                    if (t.Main.get(e).shouldInGame)
                        return t.Main.get(e).teamId
                } else
                    console.log("[Warning] Unassigned worksheet name: ".concat(e))
            }, r = Object(ra.a)(t.Main);
            try {
                for (r.s(); !(n = r.n()).done; ) {
                    var s = Object(Jt.a)(n.value, 2)
                      , i = s[0]
                      , c = s[1];
                    c.isPlayerOnlySheet && e(t[i], null, c)
                }
            } catch (u) {
                r.e(u)
            } finally {
                r.f()
            }
            for (var o in t) {
                var l = t.Main.get(o)
                  , y = a(o);
                y && (l && l.isPlayerOnlySheet || e(t[o], y, l))
            }
        }(t, (function(t, n, a) {
            !function(t, e) {
                var n, a = Object(ra.a)(t);
                try {
                    for (a.s(); !(n = a.n()).done; ) {
                        var r = Object(Jt.a)(n.value, 2)
                          , s = r[0]
                          , i = r[1];
                        if (s) {
                            var c = {};
                            for (var o in i)
                                c[sa(o)] = i[o];
                            e(c, s)
                        }
                    }
                } catch (l) {
                    a.e(l)
                } finally {
                    a.f()
                }
            }(t, (function(t, r) {
                (t.registeredPosition || t.height || t.weight || t.attackingProwess && t.defensiveProwess && t.gkAwareness || t.isPlayerDefined) && e(n, a, t, r)
            }
            ))
        }
        ))
    }
    var ca = n(14)
      , oa = n.n(ca)
      , la = n(24);
    function ya(t) {
        switch (t = t.trim()) {
        case "backdropColor":
        case "banner1":
        case "banner2":
        case "banner3":
        case "banner4":
        case "callnameId":
        case "competitionTeamOrder":
        case "expenses2016":
        case "expenses2017":
        case "expenses2018":
        case "expenses2019":
        case "goalStyle":
        case "isAssignmentOnlySheet":
        case "isPlayerOnlySheet":
        case "maxTransferFee":
        case "netPattern":
        case "rank1990":
        case "rank1991":
        case "rank1992":
        case "rank1993":
        case "rank1994":
        case "rank1995":
        case "rank1996":
        case "rank1997":
        case "rank1998":
        case "rank1999":
        case "rank2000":
        case "rank2001":
        case "rank2002":
        case "rank2003":
        case "rank2004":
        case "rank2005":
        case "rank2006":
        case "rank2007":
        case "rank2008":
        case "rank2009":
        case "rank2010":
        case "rank2011":
        case "rank2012":
        case "rank2013":
        case "rank2014":
        case "rank2015":
        case "rank2016":
        case "rank2017":
        case "rank2018":
        case "rank2019":
        case "rank2020":
        case "scoutingCountry1":
        case "scoutingCountry2":
        case "scoutingCountry3":
        case "seatColor":
        case "sidelineColor":
        case "shouldInGame":
        case "spreadsheetName":
        case "stadiumImageFileName":
        case "tedFileName":
        case "teamId":
        case "turfPattern":
            return t;
        case "Coach ID":
            return "coachId";
        case "Country":
            return "teamCountry";
        case "League":
            return "leagueCode";
        case "Name":
            return "enTeamName";
        case "\u540d\u524d":
            return "jaTeamName";
        case "\u7403\u968a\u540d\u7a31":
            return "yueTeamName";
        case "ABB":
            return "teamCode";
        case "\u6f22\u7e2e\u5beb":
            return "kanjiTeamCode";
        case "Stadium ID":
            return "stadiumId";
        case "ted Stadium Name":
            return "enStadiumName";
        case "ted\u4e3b\u5834\u540d\u7a31":
            return "yueStadiumName";
        case "\u662f\u4ee3\u8868\u968a":
            return "isNationalTeam";
        case "\u4e0a\u5b63\u6392\u540d":
            return "lastSeasonRank";
        case "\u63a1\u7528\u9663\u5bb9":
            return "usedSeasonPart";
        case "Color 1":
            return "teamColor1";
        case "Color 2":
            return "teamColor2";
        case "Other Coach Country 1":
            return "otherCoachCountry1";
        case "Other Coach Country 2":
            return "otherCoachCountry2";
        default:
            console.warn("[getTeamColumnKey] Unsupported column title: ".concat(t))
        }
    }
    function ua() {
        return (ua = Object(la.a)(oa.a.mark((function t(e, n) {
            return oa.a.wrap((function(t) {
                for (; ; )
                    switch (t.prev = t.next) {
                    case 0:
                        e.forEach((function(t) {
                            for (var e = Object.keys(t), a = e.length, r = {}, s = 0; s < a; s++) {
                                var i = e[s];
                                r[ya(i)] = t[i]
                            }
                            n(r)
                        }
                        ));
                    case 1:
                    case "end":
                        return t.stop()
                    }
            }
            ), t)
        }
        )))).apply(this, arguments)
    }
    var ga = n(91)
      , Ba = new Set(ga);
    function ha(t, e) {
        return Array.from(t).map((function(t) {
            return Ba.has(t.codePointAt(0)) ? t : function(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , n = function(t) {
                    return e ? "(".concat(t, ")") : t
                };
                switch (t) {
                case "\u57d7":
                    return n("\u6b65");
                case "\u5803":
                    return n("\u5764");
                case "\u5826":
                    return n("\u7686");
                case "\u6690":
                case "\u6e4b":
                case "\u7152":
                case "\u744b":
                    return n("\u97cb");
                case "\u66bf":
                    return n("\u563b");
                case "\u6cc2":
                    return n("\u6c35\u518f");
                case "\u6f94":
                    return n("\u7693");
                case "\u6ffc":
                    return n("\u6c35\u6a02");
                case "\u705d":
                    return "\u704f";
                case "\u70c6":
                    return n("\u884c");
                case "\u71c1":
                case "\u93f5":
                case "\u9a4a":
                    return n("\u83ef");
                case "\u71ca":
                    return n("\u85aa");
                case "\u741d":
                    return n("\u65fb");
                case "\u7d13":
                    return n("\u8212");
                case "\u9114":
                    return n("\u70cf\u961d");
                case "\u913a":
                    return n("\u5ee3\u961d");
                case "\u9376":
                    return "\u9536";
                case "\u93bd":
                    return n("\u5cef");
                default:
                    return t
                }
            }(t, e)
        }
        )).join("")
    }
    function da(t) {
        Array.from(t).forEach((function(t) {
            var e = t.codePointAt(0);
            Ba.has(e) || console.error('Character "'.concat(t, '" (U+').concat(e.toString(16), ") does not exist in the font."))
        }
        ))
    }
    var ba = new Map;
    ba.set(4946, 200),
    ba.set(8011, 2698),
    ba.set(8001, 2409),
    ba.set(8008, 2690),
    ba.set(8006, 2692),
    ba.set(8015, 2405),
    ba.set(8003, 2406),
    ba.set(5133, 2697),
    ba.set(8004, 2404),
    ba.set(8005, 2403),
    ba.set(8007, 2407),
    ba.set(4116, 2402),
    ba.set(8017, 2398),
    ba.set(8016, 2691),
    ba.set(8013, 2400),
    ba.set(8020, 2689),
    ba.set(8014, 2693),
    ba.set(8010, 2401),
    ba.set(8012, 5174),
    ba.set(8018, 289),
    ba.set(8019, 2408),
    ba.set(8021, 2399);
    var ma = new Map;
    function ka(t) {
        ve(t.team.teamId) !== t.metadata.isLicensedTeam && (t.metadata.isLicensedTeam = ve(t.team.teamId));
        var e, n = t.coach.coachId;
        t.coach.isFromLiveUpdate = (e = n,
        !aa.has(e));
        var a, r = new Map, s = new Map, i = new Map, c = new Map;
        if (window._xlsx) {
            var o = new Map;
            !function(t, e) {
                ua.apply(this, arguments)
            }(window._teamXlsx, (function(e) {
                var n = e.teamId
                  , a = ba.get(n);
                a === t.team.teamId && ma.get(n),
                a && o.set(a, e)
            }
            ));
            var l = o.get(t.team.teamId);
            console.log(l);
            var y, u, g = new Map;
            window._coachXlsxData.forEach((function(t) {
                var e = t.coachId;
                g.set(e, t)
            }
            )),
            y = l.yueTeamName || l.enTeamName || l.jaTeamName,
            u = l.yueStadiumName || l.enStadiumName || l.jaStadiumName,
            t.team.teamName = y,
            console.log(g.get(t.coach.coachId)),
            t.coach.coachName = ha(g.get(t.coach.coachId).yueCoachName),
            da(t.coach.coachName),
            t.team.stadiumId = l.stadiumId,
            u && (t.team.isStadiumNameEdited = !0,
            t.team.stadiumName = ha(u),
            da(t.team.stadiumName)),
            t.team.stadiumImageFileName = l.stadiumImageFileName,
            t.team.turfPattern = l.turfPattern,
            t.team.sidelineColor = function(t) {
                switch (t) {
                case "\u7070":
                default:
                    return 1;
                case "\u6dfa\u5561":
                    return 2;
                case "\u7d05":
                    return 3;
                case "\u6df1\u5561":
                    return 4;
                case "\u6dfa\u7da0":
                    return 5;
                case "\u6df1\u7da0":
                    return 6;
                case "\u6dfa\u85cd":
                    return 7;
                case "\u6df1\u85cd":
                    return 8
                }
            }(l.sidelineColor),
            t.team.seatColor = function(t) {
                switch (t) {
                case "\u767d":
                default:
                    return 1;
                case "\u9ec3":
                    return 2;
                case "\u6a59":
                    return 3;
                case "\u7d05":
                    return 4;
                case "\u7da0":
                    return 5;
                case "\u6dfa\u85cd":
                    return 6;
                case "\u85cd":
                    return 7;
                case "\u6df1\u85cd":
                    return 8
                }
            }(l.seatColor),
            t.team.goalStyle = l.goalStyle,
            t.team.netPattern = l.netPattern;
            var B = !1;
            if (l.backdropColor && l.backdropColor.bgColor) {
                var h = l.backdropColor.bgColor;
                t.team.backdropColorR = h.r >> 2,
                t.team.backdropColorG = h.g >> 2,
                t.team.backdropColorB = h.b >> 2,
                B = !0
            }
            if (l.teamColor1 && l.teamColor1.bgColor) {
                var d = l.teamColor1.bgColor;
                t.team.teamColor1R = d.r >> 2,
                t.team.teamColor1G = d.g >> 2,
                t.team.teamColor1B = d.b >> 2,
                B || (t.team.backdropColorR = d.r >> 2,
                t.team.backdropColorG = d.g >> 2,
                t.team.backdropColorB = d.b >> 2,
                B = !0)
            }
            if (l.teamColor2 && l.teamColor2.bgColor) {
                var b = l.teamColor2.bgColor;
                t.team.teamColor2R = b.r >> 2,
                t.team.teamColor2G = b.g >> 2,
                t.team.teamColor2B = b.b >> 2
            }
            B && (t.team.isBackdropColorSet = !0),
            (l.banner1 || l.banner2 || l.banner3 || l.banner4) && (t.team.isBannerEdited = !0,
            l.banner1 && (t.team.banner1 = l.banner1),
            l.banner2 && (t.team.banner2Pointer = 1,
            t.team.banner2 = l.banner2),
            l.banner3 && (t.team.banner3Pointer = 2,
            t.team.banner3 = l.banner3),
            l.banner4 && (t.team.banner4Pointer = 3,
            t.team.banner4 = l.banner4)),
            t.team.isAtLeastOneNameEdited = 1,
            t.team.isEmblemImageSet = 1,
            t.team.emblemImageListIndex = 0,
            t.coach.isImageSet = !0,
            t.coach.imageFileName = "coach_".concat(t.coach.coachId, ".png"),
            ia(window._xlsx, (function(t, e, n, a) {
                c.has(a) && console.log(c.get(a), "record dropped"),
                c.set(a, {
                    playerName: n.playerName,
                    yuePlayerName: n.yuePlayerName,
                    clubShirtName: n.clubShirtName,
                    ntShirtName: n.ntShirtName
                }),
                n.callnameId && r.set(a, n.callnameId),
                n.bootsId && s.set(a, n.bootsId),
                n.gloveId && i.set(a, n.gloveId)
            }
            )),
            36 === t.team.countryId && (t.team.countryId = 8),
            36 === t.coach.countryId && (t.coach.countryId = 8)
        }
        for (var m = 0; m < 40; m++) {
            var k = t.players[m];
            if (Boolean(t.playerAssignment.playerIds[m])) {
                if (window._xlsx) {
                    var O = "HONG KONG" === t.team.teamName
                      , I = k.playerId % (1 << 28);
                    36 === k.countryId1 && (k.countryId1 = 8),
                    k.playerName = ha(c.get(I).yuePlayerName) || k.playerName,
                    da(k.playerName),
                    r.has(I) && (k.callnameId = r.get(I)),
                    s.has(I) && (k.playerAppearance.bootsId = s.get(I)),
                    i.has(I) && (k.playerAppearance.gloveId = i.get(I)),
                    O && (t.playerAssignment.playerIds[m] = I + (4 << 28),
                    k.playerId = I + (4 << 28),
                    k.playerAppearance.playerId = I + (4 << 28))
                }
                var j = k.playerId;
                k.isFromLiveUpdate = j > 0 && (a = j,
                !ea.has(a)),
                k.age = Math.max(15, Math.min(k.age, 50)),
                k.playerAppearance.bootsId = Qn(k.playerAppearance.bootsId) || 0,
                k.playerAppearance.gloveId = $n(k.playerAppearance.gloveId) || 0
            }
        }
        console.log(JSON.parse(JSON.stringify(t)));
    }
    ma.set(8016, [2, 2, 6]),
    ma.set(8017, [2, 2, 2]),
    ma.set(5133, [2, 2, 6]),
    ma.set(8013, [11, 11, 1, 11]),
    ma.set(8007, [6, 2, 6]),
    ma.set(8011, [2, 1, 6]),
    ma.set(8021, [1, 1, 1]),
    ma.set(8008, [2, 2, 2]),
    ma.set(8010, [2, 2, 2]),
    ma.set(4946, [8, 8, 1]),
    ma.set(8006, [6, 6, 1]),
    ma.set(8019, [9, 9, 9]),
    ma.set(8020, [2, 2, 2]),
    ma.set(8004, [2, 2, 6]),
    ma.set(8015, [2, 2, 2]),
    ma.set(8014, [8, 8, 8]),
    ma.set(4116, [1, 1, 1]),
    ma.set(8003, [11, 11, 11]),
    ma.set(8001, [6, 2, 1]),
    ma.set(8012, [1, 1, 1, 6]),
    ma.set(8005, [1, 1, 1]),
    ma.set(8018, [2, 2, 2]);
    var Oa = {
        loadCount: 0,
        data: null,
        fileA: null,
        editedData: null,
        selectedPlayerIndex: null,
        openedTab: Bt,
        lastFocusedColorFieldKeyR: null,
        lastFocusedColorFieldKeyG: null,
        lastFocusedColorFieldKeyB: null
    }
      , Ia = Object(Yn.a)((function(t, e) {
        switch (e.type) {
        case k.a:
            var n = e.payload.tab;
            return void (t.openedTab = n);
        case k.b:
            console.log("LOAD_FILES");
            var a = e.payload
              , r = a.fileInfo
              , s = a.fileData;
            if (!s || !s[0])
                return;
            return s[0].metadata || (s[0].metadata = {}),
            window.onbeforeunload = function() {
                return ""
            }
            ,
            t.openedTab = yt,
            t.loadCount = t.loadCount + 1,
            t.fileA = {
                info: r
            },
            t.data = s[0],
            void (t.editedData = s[0]);
        case pt:
            var i = e.payload
              , c = i.keyName
              , o = i.value;
            return void (t.editedData.metadata[c] = o);
        case xt:
            var l = e.payload
              , y = l.keyName
              , u = l.value;
            return void (t.editedData.team[y] = u);
        case Nt:
            var g = e.payload
              , B = g.keyName
              , h = g.value;
            return void (t.editedData.coach[B] = h);
        case Ct:
            var d = e.payload.delta;
            return t.loadCount = t.loadCount + 1,
            void function(t, e) {
                t.players.forEach((function(t) {
                    t.age = Math.min(Math.max(t.age + e, 15), 50)
                }
                ))
            }(t.editedData, d);
        case St:
            return void e.payload.fieldKeyValueArray.forEach((function(e) {
                var n = Object(Jt.a)(e, 2)
                  , a = n[0]
                  , r = n[1];
                zn(t.editedData, a, r)
            }
            ));
        case Lt:
            var b = e.payload
              , m = b.fieldKeyR
              , O = b.fieldKeyG
              , I = b.fieldKeyB;
            return t.lastFocusedColorFieldKeyR = m,
            t.lastFocusedColorFieldKeyG = O,
            void (t.lastFocusedColorFieldKeyB = I);
        case Et:
            var j = e.payload
              , f = j.r
              , A = j.g
              , N = j.b;
            return t.lastFocusedColorFieldKeyR && zn(t.editedData, t.lastFocusedColorFieldKeyR, f),
            t.lastFocusedColorFieldKeyG && zn(t.editedData, t.lastFocusedColorFieldKeyG, A),
            void (t.lastFocusedColorFieldKeyB && zn(t.editedData, t.lastFocusedColorFieldKeyB, N));
        case Rt:
            var p = e.payload
              , S = p.playerIndex
              , E = p.keyName
              , R = p.value;
            return void (t.editedData.players[S][E] = R);
        case we:
            var x = e.payload
              , C = x.uniformIndex
              , v = x.keyName
              , L = x.value;
            return t.editedData.uniforms[C][v] = L,
            void ("isImageSet" === v && !0 === L && -1 === t.editedData.uniforms[C].imageListIndex && (t.editedData.uniforms[C].imageListIndex = 0));
        case vt:
            return void ka(t.editedData);
        default:
            return
        }
    }
    ), Oa)
      , ja = Object(Yn.a)((function(t, e) {
        if (e.type !== nn)
            ;
        else {
            var n = e.payload.playerIndex;
            t.selectedPlayerIndex = n
        }
    }
    ), {
        selectedPlayerIndex: 0
    })
      , fa = {
        playerSortBy: "playerIndex",
        isPlayerAscendingSort: !0
    }
      , Aa = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fa
          , e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type === Kt) {
            var n = e.payload.sortBy;
            return n === t.playerSortBy ? Object(O.a)(Object(O.a)({}, t), {}, {
                isPlayerAscendingSort: !t.isPlayerAscendingSort
            }) : Object(O.a)(Object(O.a)({}, t), {}, {
                playerSortBy: n,
                isPlayerAscendingSort: !0
            })
        }
        return t
    }
      , Na = Object(l.b)({
        app: Ia,
        playersTab: ja,
        quickEdit: Aa
    });
    i.a.createRoot(document.getElementById("root")).render(Object(B.jsx)(r.a.StrictMode, {
        children: Object(B.jsx)(c.a, {
            store: Object(l.c)(Na, Object(l.a)(y.a)),
            children: Object(B.jsx)(o.a, {
                messages: Wn,
                children: Object(B.jsx)(Vn, {})
            })
        })
    })),
    "serviceWorker"in navigator && navigator.serviceWorker.ready.then((function(t) {
        t.unregister()
    }
    ))
}
], [[127, 1, 2]]]);
