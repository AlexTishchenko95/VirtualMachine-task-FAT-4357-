!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function(e, t, n) {
    'use strict';
    n.r(t);
    class r {
      exec(e) {
        let t = 1;
        return e.forEach(e => (t *= e)), t;
      }
    }
    class o {
      exec(e) {
        let t = 0;
        return e.forEach(e => (t += e)), t;
      }
    }
    const a = new (class {
      constructor() {
        (this.values = []), (this.operation = '');
      }
      pushValue(e) {
        this.values.push(+e);
      }
      pushOperation(e) {
        this.operation = e;
      }
      clearStack() {
        (this.values = []), (this.operation = ''), console.log('stack is clear!');
      }
      popValue() {
        return this.values;
      }
      popOperation() {
        return this.operation;
      }
    })();
    new (class {
      constructor(e, t, n) {
        (this.renderer = e), (this.stack = t), (this.executor = n);
      }
      init() {
        document.getElementById('addButton').addEventListener('click', () => {
          this.addToStack();
        }),
          document.getElementById('result').addEventListener('click', () => {
            this.calculateResult();
            const e = this.executor.run();
            this.renderer.writeAnswer(e);
          }),
          document.getElementById('show').addEventListener('click', () => {
            this.renderer.showStack();
          }),
          document.getElementById('clear').addEventListener('click', () => {
            this.stack.clearStack();
          });
      }
      addToStack() {
        const e = this.renderer.getOperandValue();
        this.stack.pushValue(e), this.renderer.clearValueField();
      }
      calculateResult() {
        const e = this.renderer.getOperandOperation();
        this.stack.pushOperation(e);
      }
    })(
      new (class {
        constructor(e) {
          this.stack = e;
        }
        getOperandValue() {
          return document.getElementById('inputValue').value;
        }
        getOperandOperation() {
          return document.getElementById('operation').value;
        }
        showStack() {
          console.log('values =', this.stack.values),
            console.log('operation', this.stack.operation);
        }
        clearValueField() {
          document.getElementById('inputValue').value = '';
        }
        writeAnswer(e) {
          document.getElementById('innerText').innerHTML = 'Result = ' + e;
        }
      })(a),
      a,
      new (class {
        constructor(e, t) {
          (this.stack = e), (this.commandfactory = t);
        }
        run() {
          const e = this.stack.popOperation(),
            t = this.stack.popValue(),
            n = this.commandfactory.getCommandByOperation(e);
          return void 0 === n ? 'invalid operation' : n.exec(t);
        }
      })(
        a,
        new (class {
          constructor() {
            this.commands = { add: new o(), mul: new r() };
          }
          getCommandByOperation(e) {
            return this.commands[e];
          }
        })(),
      ),
    ).init();
  },
]);
