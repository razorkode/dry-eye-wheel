var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var require_index_001 = __commonJS({
  "assets/index-1ab1826c.js"(exports, module) {
    (function polyfill() {
      const relList = document.createElement("link").relList;
      if (relList && relList.supports && relList.supports("modulepreload")) {
        return;
      }
      for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
      }
      new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type !== "childList") {
            continue;
          }
          for (const node of mutation.addedNodes) {
            if (node.tagName === "LINK" && node.rel === "modulepreload")
              processPreload(node);
          }
        }
      }).observe(document, { childList: true, subtree: true });
      function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
          fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
          fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === "use-credentials")
          fetchOpts.credentials = "include";
        else if (link.crossOrigin === "anonymous")
          fetchOpts.credentials = "omit";
        else
          fetchOpts.credentials = "same-origin";
        return fetchOpts;
      }
      function processPreload(link) {
        if (link.ep)
          return;
        link.ep = true;
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
      }
    })();
    function makeMap(str, expectsLowerCase) {
      const map = /* @__PURE__ */ Object.create(null);
      const list = str.split(",");
      for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
      }
      return expectsLowerCase ? (val2) => !!map[val2.toLowerCase()] : (val2) => !!map[val2];
    }
    function normalizeStyle(value2) {
      if (isArray(value2)) {
        const res = {};
        for (let i = 0; i < value2.length; i++) {
          const item = value2[i];
          const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
          if (normalized) {
            for (const key2 in normalized) {
              res[key2] = normalized[key2];
            }
          }
        }
        return res;
      } else if (isString(value2)) {
        return value2;
      } else if (isObject(value2)) {
        return value2;
      }
    }
    const listDelimiterRE = /;(?![^(]*\))/g;
    const propertyDelimiterRE = /:([^]+)/;
    const styleCommentRE = /\/\*.*?\*\//gs;
    function parseStringStyle(cssText) {
      const ret = {};
      cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
        if (item) {
          const tmp = item.split(propertyDelimiterRE);
          tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
      });
      return ret;
    }
    function normalizeClass(value2) {
      let res = "";
      if (isString(value2)) {
        res = value2;
      } else if (isArray(value2)) {
        for (let i = 0; i < value2.length; i++) {
          const normalized = normalizeClass(value2[i]);
          if (normalized) {
            res += normalized + " ";
          }
        }
      } else if (isObject(value2)) {
        for (const name2 in value2) {
          if (value2[name2]) {
            res += name2 + " ";
          }
        }
      }
      return res.trim();
    }
    const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
    const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
    function includeBooleanAttr(value2) {
      return !!value2 || value2 === "";
    }
    const EMPTY_OBJ = {};
    const EMPTY_ARR = [];
    const NOOP = () => {
    };
    const NO = () => false;
    const onRE = /^on[^a-z]/;
    const isOn = (key2) => onRE.test(key2);
    const isModelListener = (key2) => key2.startsWith("onUpdate:");
    const extend = Object.assign;
    const remove = (arr, el) => {
      const i = arr.indexOf(el);
      if (i > -1) {
        arr.splice(i, 1);
      }
    };
    const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
    const hasOwn = (val2, key2) => hasOwnProperty$1.call(val2, key2);
    const isArray = Array.isArray;
    const isMap = (val2) => toTypeString(val2) === "[object Map]";
    const isSet = (val2) => toTypeString(val2) === "[object Set]";
    const isFunction = (val2) => typeof val2 === "function";
    const isString = (val2) => typeof val2 === "string";
    const isSymbol = (val2) => typeof val2 === "symbol";
    const isObject = (val2) => val2 !== null && typeof val2 === "object";
    const isPromise = (val2) => {
      return isObject(val2) && isFunction(val2.then) && isFunction(val2.catch);
    };
    const objectToString = Object.prototype.toString;
    const toTypeString = (value2) => objectToString.call(value2);
    const toRawType = (value2) => {
      return toTypeString(value2).slice(8, -1);
    };
    const isPlainObject = (val2) => toTypeString(val2) === "[object Object]";
    const isIntegerKey = (key2) => isString(key2) && key2 !== "NaN" && key2[0] !== "-" && "" + parseInt(key2, 10) === key2;
    const isReservedProp = /* @__PURE__ */ makeMap(
      // the leading comma is intentional so empty string "" is also included
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    );
    const cacheStringFunction = (fn) => {
      const cache = /* @__PURE__ */ Object.create(null);
      return (str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
      };
    };
    const camelizeRE = /-(\w)/g;
    const camelize = cacheStringFunction((str) => {
      return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
    });
    const hyphenateRE = /\B([A-Z])/g;
    const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
    const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
    const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
    const hasChanged = (value2, oldValue) => !Object.is(value2, oldValue);
    const invokeArrayFns = (fns, arg) => {
      for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
      }
    };
    const def = (obj, key2, value2) => {
      Object.defineProperty(obj, key2, {
        configurable: true,
        enumerable: false,
        value: value2
      });
    };
    const looseToNumber = (val2) => {
      const n = parseFloat(val2);
      return isNaN(n) ? val2 : n;
    };
    let _globalThis;
    const getGlobalThis = () => {
      return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    };
    let activeEffectScope;
    class EffectScope {
      constructor(detached = false) {
        this.detached = detached;
        this._active = true;
        this.effects = [];
        this.cleanups = [];
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
          this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
      }
      get active() {
        return this._active;
      }
      run(fn) {
        if (this._active) {
          const currentEffectScope = activeEffectScope;
          try {
            activeEffectScope = this;
            return fn();
          } finally {
            activeEffectScope = currentEffectScope;
          }
        }
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      on() {
        activeEffectScope = this;
      }
      /**
       * This should only be called on non-detached scopes
       * @internal
       */
      off() {
        activeEffectScope = this.parent;
      }
      stop(fromParent) {
        if (this._active) {
          let i, l;
          for (i = 0, l = this.effects.length; i < l; i++) {
            this.effects[i].stop();
          }
          for (i = 0, l = this.cleanups.length; i < l; i++) {
            this.cleanups[i]();
          }
          if (this.scopes) {
            for (i = 0, l = this.scopes.length; i < l; i++) {
              this.scopes[i].stop(true);
            }
          }
          if (!this.detached && this.parent && !fromParent) {
            const last = this.parent.scopes.pop();
            if (last && last !== this) {
              this.parent.scopes[this.index] = last;
              last.index = this.index;
            }
          }
          this.parent = void 0;
          this._active = false;
        }
      }
    }
    function recordEffectScope(effect2, scope = activeEffectScope) {
      if (scope && scope.active) {
        scope.effects.push(effect2);
      }
    }
    function getCurrentScope() {
      return activeEffectScope;
    }
    const createDep = (effects) => {
      const dep = new Set(effects);
      dep.w = 0;
      dep.n = 0;
      return dep;
    };
    const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
    const newTracked = (dep) => (dep.n & trackOpBit) > 0;
    const initDepMarkers = ({ deps }) => {
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].w |= trackOpBit;
        }
      }
    };
    const finalizeDepMarkers = (effect2) => {
      const { deps } = effect2;
      if (deps.length) {
        let ptr = 0;
        for (let i = 0; i < deps.length; i++) {
          const dep = deps[i];
          if (wasTracked(dep) && !newTracked(dep)) {
            dep.delete(effect2);
          } else {
            deps[ptr++] = dep;
          }
          dep.w &= ~trackOpBit;
          dep.n &= ~trackOpBit;
        }
        deps.length = ptr;
      }
    };
    const targetMap = /* @__PURE__ */ new WeakMap();
    let effectTrackDepth = 0;
    let trackOpBit = 1;
    const maxMarkerBits = 30;
    let activeEffect;
    const ITERATE_KEY = Symbol("");
    const MAP_KEY_ITERATE_KEY = Symbol("");
    class ReactiveEffect {
      constructor(fn, scheduler = null, scope) {
        this.fn = fn;
        this.scheduler = scheduler;
        this.active = true;
        this.deps = [];
        this.parent = void 0;
        recordEffectScope(this, scope);
      }
      run() {
        if (!this.active) {
          return this.fn();
        }
        let parent2 = activeEffect;
        let lastShouldTrack = shouldTrack;
        while (parent2) {
          if (parent2 === this) {
            return;
          }
          parent2 = parent2.parent;
        }
        try {
          this.parent = activeEffect;
          activeEffect = this;
          shouldTrack = true;
          trackOpBit = 1 << ++effectTrackDepth;
          if (effectTrackDepth <= maxMarkerBits) {
            initDepMarkers(this);
          } else {
            cleanupEffect(this);
          }
          return this.fn();
        } finally {
          if (effectTrackDepth <= maxMarkerBits) {
            finalizeDepMarkers(this);
          }
          trackOpBit = 1 << --effectTrackDepth;
          activeEffect = this.parent;
          shouldTrack = lastShouldTrack;
          this.parent = void 0;
          if (this.deferStop) {
            this.stop();
          }
        }
      }
      stop() {
        if (activeEffect === this) {
          this.deferStop = true;
        } else if (this.active) {
          cleanupEffect(this);
          if (this.onStop) {
            this.onStop();
          }
          this.active = false;
        }
      }
    }
    function cleanupEffect(effect2) {
      const { deps } = effect2;
      if (deps.length) {
        for (let i = 0; i < deps.length; i++) {
          deps[i].delete(effect2);
        }
        deps.length = 0;
      }
    }
    let shouldTrack = true;
    const trackStack = [];
    function pauseTracking() {
      trackStack.push(shouldTrack);
      shouldTrack = false;
    }
    function resetTracking() {
      const last = trackStack.pop();
      shouldTrack = last === void 0 ? true : last;
    }
    function track(target, type, key2) {
      if (shouldTrack && activeEffect) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
          targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        }
        let dep = depsMap.get(key2);
        if (!dep) {
          depsMap.set(key2, dep = createDep());
        }
        trackEffects(dep);
      }
    }
    function trackEffects(dep, debuggerEventExtraInfo) {
      let shouldTrack2 = false;
      if (effectTrackDepth <= maxMarkerBits) {
        if (!newTracked(dep)) {
          dep.n |= trackOpBit;
          shouldTrack2 = !wasTracked(dep);
        }
      } else {
        shouldTrack2 = !dep.has(activeEffect);
      }
      if (shouldTrack2) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
      }
    }
    function trigger(target, type, key2, newValue, oldValue, oldTarget) {
      const depsMap = targetMap.get(target);
      if (!depsMap) {
        return;
      }
      let deps = [];
      if (type === "clear") {
        deps = [...depsMap.values()];
      } else if (key2 === "length" && isArray(target)) {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key3) => {
          if (key3 === "length" || key3 >= newLength) {
            deps.push(dep);
          }
        });
      } else {
        if (key2 !== void 0) {
          deps.push(depsMap.get(key2));
        }
        switch (type) {
          case "add":
            if (!isArray(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isIntegerKey(key2)) {
              deps.push(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!isArray(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              deps.push(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
      if (deps.length === 1) {
        if (deps[0]) {
          {
            triggerEffects(deps[0]);
          }
        }
      } else {
        const effects = [];
        for (const dep of deps) {
          if (dep) {
            effects.push(...dep);
          }
        }
        {
          triggerEffects(createDep(effects));
        }
      }
    }
    function triggerEffects(dep, debuggerEventExtraInfo) {
      const effects = isArray(dep) ? dep : [...dep];
      for (const effect2 of effects) {
        if (effect2.computed) {
          triggerEffect(effect2);
        }
      }
      for (const effect2 of effects) {
        if (!effect2.computed) {
          triggerEffect(effect2);
        }
      }
    }
    function triggerEffect(effect2, debuggerEventExtraInfo) {
      if (effect2 !== activeEffect || effect2.allowRecurse) {
        if (effect2.scheduler) {
          effect2.scheduler();
        } else {
          effect2.run();
        }
      }
    }
    const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
    const builtInSymbols = new Set(
      /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key2) => key2 !== "arguments" && key2 !== "caller").map((key2) => Symbol[key2]).filter(isSymbol)
    );
    const get$1 = /* @__PURE__ */ createGetter();
    const shallowGet = /* @__PURE__ */ createGetter(false, true);
    const readonlyGet = /* @__PURE__ */ createGetter(true);
    const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
    function createArrayInstrumentations() {
      const instrumentations = {};
      ["includes", "indexOf", "lastIndexOf"].forEach((key2) => {
        instrumentations[key2] = function(...args) {
          const arr = toRaw(this);
          for (let i = 0, l = this.length; i < l; i++) {
            track(arr, "get", i + "");
          }
          const res = arr[key2](...args);
          if (res === -1 || res === false) {
            return arr[key2](...args.map(toRaw));
          } else {
            return res;
          }
        };
      });
      ["push", "pop", "shift", "unshift", "splice"].forEach((key2) => {
        instrumentations[key2] = function(...args) {
          pauseTracking();
          const res = toRaw(this)[key2].apply(this, args);
          resetTracking();
          return res;
        };
      });
      return instrumentations;
    }
    function hasOwnProperty(key2) {
      const obj = toRaw(this);
      track(obj, "has", key2);
      return obj.hasOwnProperty(key2);
    }
    function createGetter(isReadonly2 = false, shallow = false) {
      return function get2(target, key2, receiver) {
        if (key2 === "__v_isReactive") {
          return !isReadonly2;
        } else if (key2 === "__v_isReadonly") {
          return isReadonly2;
        } else if (key2 === "__v_isShallow") {
          return shallow;
        } else if (key2 === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
          return target;
        }
        const targetIsArray = isArray(target);
        if (!isReadonly2) {
          if (targetIsArray && hasOwn(arrayInstrumentations, key2)) {
            return Reflect.get(arrayInstrumentations, key2, receiver);
          }
          if (key2 === "hasOwnProperty") {
            return hasOwnProperty;
          }
        }
        const res = Reflect.get(target, key2, receiver);
        if (isSymbol(key2) ? builtInSymbols.has(key2) : isNonTrackableKeys(key2)) {
          return res;
        }
        if (!isReadonly2) {
          track(target, "get", key2);
        }
        if (shallow) {
          return res;
        }
        if (isRef(res)) {
          return targetIsArray && isIntegerKey(key2) ? res : res.value;
        }
        if (isObject(res)) {
          return isReadonly2 ? readonly(res) : reactive(res);
        }
        return res;
      };
    }
    const set$1 = /* @__PURE__ */ createSetter();
    const shallowSet = /* @__PURE__ */ createSetter(true);
    function createSetter(shallow = false) {
      return function set2(target, key2, value2, receiver) {
        let oldValue = target[key2];
        if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value2)) {
          return false;
        }
        if (!shallow) {
          if (!isShallow(value2) && !isReadonly(value2)) {
            oldValue = toRaw(oldValue);
            value2 = toRaw(value2);
          }
          if (!isArray(target) && isRef(oldValue) && !isRef(value2)) {
            oldValue.value = value2;
            return true;
          }
        }
        const hadKey = isArray(target) && isIntegerKey(key2) ? Number(key2) < target.length : hasOwn(target, key2);
        const result = Reflect.set(target, key2, value2, receiver);
        if (target === toRaw(receiver)) {
          if (!hadKey) {
            trigger(target, "add", key2, value2);
          } else if (hasChanged(value2, oldValue)) {
            trigger(target, "set", key2, value2);
          }
        }
        return result;
      };
    }
    function deleteProperty(target, key2) {
      const hadKey = hasOwn(target, key2);
      target[key2];
      const result = Reflect.deleteProperty(target, key2);
      if (result && hadKey) {
        trigger(target, "delete", key2, void 0);
      }
      return result;
    }
    function has$1(target, key2) {
      const result = Reflect.has(target, key2);
      if (!isSymbol(key2) || !builtInSymbols.has(key2)) {
        track(target, "has", key2);
      }
      return result;
    }
    function ownKeys(target) {
      track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
      return Reflect.ownKeys(target);
    }
    const mutableHandlers = {
      get: get$1,
      set: set$1,
      deleteProperty,
      has: has$1,
      ownKeys
    };
    const readonlyHandlers = {
      get: readonlyGet,
      set(target, key2) {
        return true;
      },
      deleteProperty(target, key2) {
        return true;
      }
    };
    const shallowReactiveHandlers = /* @__PURE__ */ extend({}, mutableHandlers, {
      get: shallowGet,
      set: shallowSet
    });
    const toShallow = (value2) => value2;
    const getProto = (v) => Reflect.getPrototypeOf(v);
    function get(target, key2, isReadonly2 = false, isShallow2 = false) {
      target = target[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key2);
      if (!isReadonly2) {
        if (key2 !== rawKey) {
          track(rawTarget, "get", key2);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has: has2 } = getProto(rawTarget);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      if (has2.call(rawTarget, key2)) {
        return wrap(target.get(key2));
      } else if (has2.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key2);
      }
    }
    function has(key2, isReadonly2 = false) {
      const target = this[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      const rawTarget = toRaw(target);
      const rawKey = toRaw(key2);
      if (!isReadonly2) {
        if (key2 !== rawKey) {
          track(rawTarget, "has", key2);
        }
        track(rawTarget, "has", rawKey);
      }
      return key2 === rawKey ? target.has(key2) : target.has(key2) || target.has(rawKey);
    }
    function size(target, isReadonly2 = false) {
      target = target[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
      return Reflect.get(target, "size", target);
    }
    function add(value2) {
      value2 = toRaw(value2);
      const target = toRaw(this);
      const proto = getProto(target);
      const hadKey = proto.has.call(target, value2);
      if (!hadKey) {
        target.add(value2);
        trigger(target, "add", value2, value2);
      }
      return this;
    }
    function set(key2, value2) {
      value2 = toRaw(value2);
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key2);
      if (!hadKey) {
        key2 = toRaw(key2);
        hadKey = has2.call(target, key2);
      }
      const oldValue = get2.call(target, key2);
      target.set(key2, value2);
      if (!hadKey) {
        trigger(target, "add", key2, value2);
      } else if (hasChanged(value2, oldValue)) {
        trigger(target, "set", key2, value2);
      }
      return this;
    }
    function deleteEntry(key2) {
      const target = toRaw(this);
      const { has: has2, get: get2 } = getProto(target);
      let hadKey = has2.call(target, key2);
      if (!hadKey) {
        key2 = toRaw(key2);
        hadKey = has2.call(target, key2);
      }
      get2 ? get2.call(target, key2) : void 0;
      const result = target.delete(key2);
      if (hadKey) {
        trigger(target, "delete", key2, void 0);
      }
      return result;
    }
    function clear() {
      const target = toRaw(this);
      const hadItems = target.size !== 0;
      const result = target.clear();
      if (hadItems) {
        trigger(target, "clear", void 0, void 0);
      }
      return result;
    }
    function createForEach(isReadonly2, isShallow2) {
      return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed[
          "__v_raw"
          /* ReactiveFlags.RAW */
        ];
        const rawTarget = toRaw(target);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value2, key2) => {
          return callback.call(thisArg, wrap(value2), wrap(key2), observed);
        });
      };
    }
    function createIterableMethod(method, isReadonly2, isShallow2) {
      return function(...args) {
        const target = this[
          "__v_raw"
          /* ReactiveFlags.RAW */
        ];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
          // iterator protocol
          next() {
            const { value: value2, done } = innerIterator.next();
            return done ? { value: value2, done } : {
              value: isPair ? [wrap(value2[0]), wrap(value2[1])] : wrap(value2),
              done
            };
          },
          // iterable protocol
          [Symbol.iterator]() {
            return this;
          }
        };
      };
    }
    function createReadonlyMethod(type) {
      return function(...args) {
        return type === "delete" ? false : this;
      };
    }
    function createInstrumentations() {
      const mutableInstrumentations2 = {
        get(key2) {
          return get(this, key2);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
      };
      const shallowInstrumentations2 = {
        get(key2) {
          return get(this, key2, false, true);
        },
        get size() {
          return size(this);
        },
        has,
        add,
        set,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
      };
      const readonlyInstrumentations2 = {
        get(key2) {
          return get(this, key2, true);
        },
        get size() {
          return size(this, true);
        },
        has(key2) {
          return has.call(this, key2, true);
        },
        add: createReadonlyMethod(
          "add"
          /* TriggerOpTypes.ADD */
        ),
        set: createReadonlyMethod(
          "set"
          /* TriggerOpTypes.SET */
        ),
        delete: createReadonlyMethod(
          "delete"
          /* TriggerOpTypes.DELETE */
        ),
        clear: createReadonlyMethod(
          "clear"
          /* TriggerOpTypes.CLEAR */
        ),
        forEach: createForEach(true, false)
      };
      const shallowReadonlyInstrumentations2 = {
        get(key2) {
          return get(this, key2, true, true);
        },
        get size() {
          return size(this, true);
        },
        has(key2) {
          return has.call(this, key2, true);
        },
        add: createReadonlyMethod(
          "add"
          /* TriggerOpTypes.ADD */
        ),
        set: createReadonlyMethod(
          "set"
          /* TriggerOpTypes.SET */
        ),
        delete: createReadonlyMethod(
          "delete"
          /* TriggerOpTypes.DELETE */
        ),
        clear: createReadonlyMethod(
          "clear"
          /* TriggerOpTypes.CLEAR */
        ),
        forEach: createForEach(true, true)
      };
      const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
      iteratorMethods.forEach((method) => {
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
      });
      return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
      ];
    }
    const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
    function createInstrumentationGetter(isReadonly2, shallow) {
      const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
      return (target, key2, receiver) => {
        if (key2 === "__v_isReactive") {
          return !isReadonly2;
        } else if (key2 === "__v_isReadonly") {
          return isReadonly2;
        } else if (key2 === "__v_raw") {
          return target;
        }
        return Reflect.get(hasOwn(instrumentations, key2) && key2 in target ? instrumentations : target, key2, receiver);
      };
    }
    const mutableCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, false)
    };
    const shallowCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(false, true)
    };
    const readonlyCollectionHandlers = {
      get: /* @__PURE__ */ createInstrumentationGetter(true, false)
    };
    const reactiveMap = /* @__PURE__ */ new WeakMap();
    const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
    const readonlyMap = /* @__PURE__ */ new WeakMap();
    const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
    function targetTypeMap(rawType) {
      switch (rawType) {
        case "Object":
        case "Array":
          return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
          return 2;
        default:
          return 0;
      }
    }
    function getTargetType(value2) {
      return value2[
        "__v_skip"
        /* ReactiveFlags.SKIP */
      ] || !Object.isExtensible(value2) ? 0 : targetTypeMap(toRawType(value2));
    }
    function reactive(target) {
      if (isReadonly(target)) {
        return target;
      }
      return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
    }
    function shallowReactive(target) {
      return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
    }
    function readonly(target) {
      return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
    }
    function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
      if (!isObject(target)) {
        return target;
      }
      if (target[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ] && !(isReadonly2 && target[
        "__v_isReactive"
        /* ReactiveFlags.IS_REACTIVE */
      ])) {
        return target;
      }
      const existingProxy = proxyMap.get(target);
      if (existingProxy) {
        return existingProxy;
      }
      const targetType = getTargetType(target);
      if (targetType === 0) {
        return target;
      }
      const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
      proxyMap.set(target, proxy);
      return proxy;
    }
    function isReactive(value2) {
      if (isReadonly(value2)) {
        return isReactive(value2[
          "__v_raw"
          /* ReactiveFlags.RAW */
        ]);
      }
      return !!(value2 && value2[
        "__v_isReactive"
        /* ReactiveFlags.IS_REACTIVE */
      ]);
    }
    function isReadonly(value2) {
      return !!(value2 && value2[
        "__v_isReadonly"
        /* ReactiveFlags.IS_READONLY */
      ]);
    }
    function isShallow(value2) {
      return !!(value2 && value2[
        "__v_isShallow"
        /* ReactiveFlags.IS_SHALLOW */
      ]);
    }
    function isProxy(value2) {
      return isReactive(value2) || isReadonly(value2);
    }
    function toRaw(observed) {
      const raw = observed && observed[
        "__v_raw"
        /* ReactiveFlags.RAW */
      ];
      return raw ? toRaw(raw) : observed;
    }
    function markRaw(value2) {
      def(value2, "__v_skip", true);
      return value2;
    }
    const toReactive = (value2) => isObject(value2) ? reactive(value2) : value2;
    const toReadonly = (value2) => isObject(value2) ? readonly(value2) : value2;
    function trackRefValue(ref) {
      if (shouldTrack && activeEffect) {
        ref = toRaw(ref);
        {
          trackEffects(ref.dep || (ref.dep = createDep()));
        }
      }
    }
    function triggerRefValue(ref, newVal) {
      ref = toRaw(ref);
      const dep = ref.dep;
      if (dep) {
        {
          triggerEffects(dep);
        }
      }
    }
    function isRef(r) {
      return !!(r && r.__v_isRef === true);
    }
    function unref(ref) {
      return isRef(ref) ? ref.value : ref;
    }
    const shallowUnwrapHandlers = {
      get: (target, key2, receiver) => unref(Reflect.get(target, key2, receiver)),
      set: (target, key2, value2, receiver) => {
        const oldValue = target[key2];
        if (isRef(oldValue) && !isRef(value2)) {
          oldValue.value = value2;
          return true;
        } else {
          return Reflect.set(target, key2, value2, receiver);
        }
      }
    };
    function proxyRefs(objectWithRefs) {
      return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
    }
    var _a$1;
    class ComputedRefImpl {
      constructor(getter, _setter, isReadonly2, isSSR) {
        this._setter = _setter;
        this.dep = void 0;
        this.__v_isRef = true;
        this[_a$1] = false;
        this._dirty = true;
        this.effect = new ReactiveEffect(getter, () => {
          if (!this._dirty) {
            this._dirty = true;
            triggerRefValue(this);
          }
        });
        this.effect.computed = this;
        this.effect.active = this._cacheable = !isSSR;
        this[
          "__v_isReadonly"
          /* ReactiveFlags.IS_READONLY */
        ] = isReadonly2;
      }
      get value() {
        const self2 = toRaw(this);
        trackRefValue(self2);
        if (self2._dirty || !self2._cacheable) {
          self2._dirty = false;
          self2._value = self2.effect.run();
        }
        return self2._value;
      }
      set value(newValue) {
        this._setter(newValue);
      }
    }
    _a$1 = "__v_isReadonly";
    function computed$1(getterOrOptions, debugOptions, isSSR = false) {
      let getter;
      let setter;
      const onlyGetter = isFunction(getterOrOptions);
      if (onlyGetter) {
        getter = getterOrOptions;
        setter = NOOP;
      } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
      }
      const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
      return cRef;
    }
    function warn(msg, ...args) {
      return;
    }
    function callWithErrorHandling(fn, instance, type, args) {
      let res;
      try {
        res = args ? fn(...args) : fn();
      } catch (err) {
        handleError(err, instance, type);
      }
      return res;
    }
    function callWithAsyncErrorHandling(fn, instance, type, args) {
      if (isFunction(fn)) {
        const res = callWithErrorHandling(fn, instance, type, args);
        if (res && isPromise(res)) {
          res.catch((err) => {
            handleError(err, instance, type);
          });
        }
        return res;
      }
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    }
    function handleError(err, instance, type, throwInDev = true) {
      const contextVNode = instance ? instance.vnode : null;
      if (instance) {
        let cur = instance.parent;
        const exposedInstance = instance.proxy;
        const errorInfo = type;
        while (cur) {
          const errorCapturedHooks = cur.ec;
          if (errorCapturedHooks) {
            for (let i = 0; i < errorCapturedHooks.length; i++) {
              if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
                return;
              }
            }
          }
          cur = cur.parent;
        }
        const appErrorHandler = instance.appContext.config.errorHandler;
        if (appErrorHandler) {
          callWithErrorHandling(appErrorHandler, null, 10, [err, exposedInstance, errorInfo]);
          return;
        }
      }
      logError(err, type, contextVNode, throwInDev);
    }
    function logError(err, type, contextVNode, throwInDev = true) {
      {
        console.error(err);
      }
    }
    let isFlushing = false;
    let isFlushPending = false;
    const queue = [];
    let flushIndex = 0;
    const pendingPostFlushCbs = [];
    let activePostFlushCbs = null;
    let postFlushIndex = 0;
    const resolvedPromise = /* @__PURE__ */ Promise.resolve();
    let currentFlushPromise = null;
    function nextTick(fn) {
      const p2 = currentFlushPromise || resolvedPromise;
      return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
    }
    function findInsertionIndex(id) {
      let start = flushIndex + 1;
      let end = queue.length;
      while (start < end) {
        const middle = start + end >>> 1;
        const middleJobId = getId(queue[middle]);
        middleJobId < id ? start = middle + 1 : end = middle;
      }
      return start;
    }
    function queueJob(job) {
      if (!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) {
        if (job.id == null) {
          queue.push(job);
        } else {
          queue.splice(findInsertionIndex(job.id), 0, job);
        }
        queueFlush();
      }
    }
    function queueFlush() {
      if (!isFlushing && !isFlushPending) {
        isFlushPending = true;
        currentFlushPromise = resolvedPromise.then(flushJobs);
      }
    }
    function invalidateJob(job) {
      const i = queue.indexOf(job);
      if (i > flushIndex) {
        queue.splice(i, 1);
      }
    }
    function queuePostFlushCb(cb) {
      if (!isArray(cb)) {
        if (!activePostFlushCbs || !activePostFlushCbs.includes(cb, cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex)) {
          pendingPostFlushCbs.push(cb);
        }
      } else {
        pendingPostFlushCbs.push(...cb);
      }
      queueFlush();
    }
    function flushPreFlushCbs(seen, i = isFlushing ? flushIndex + 1 : 0) {
      for (; i < queue.length; i++) {
        const cb = queue[i];
        if (cb && cb.pre) {
          queue.splice(i, 1);
          i--;
          cb();
        }
      }
    }
    function flushPostFlushCbs(seen) {
      if (pendingPostFlushCbs.length) {
        const deduped = [...new Set(pendingPostFlushCbs)];
        pendingPostFlushCbs.length = 0;
        if (activePostFlushCbs) {
          activePostFlushCbs.push(...deduped);
          return;
        }
        activePostFlushCbs = deduped;
        activePostFlushCbs.sort((a, b) => getId(a) - getId(b));
        for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
          activePostFlushCbs[postFlushIndex]();
        }
        activePostFlushCbs = null;
        postFlushIndex = 0;
      }
    }
    const getId = (job) => job.id == null ? Infinity : job.id;
    const comparator = (a, b) => {
      const diff = getId(a) - getId(b);
      if (diff === 0) {
        if (a.pre && !b.pre)
          return -1;
        if (b.pre && !a.pre)
          return 1;
      }
      return diff;
    };
    function flushJobs(seen) {
      isFlushPending = false;
      isFlushing = true;
      queue.sort(comparator);
      const check = NOOP;
      try {
        for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
          const job = queue[flushIndex];
          if (job && job.active !== false) {
            if (false)
              ;
            callWithErrorHandling(
              job,
              null,
              14
              /* ErrorCodes.SCHEDULER */
            );
          }
        }
      } finally {
        flushIndex = 0;
        queue.length = 0;
        flushPostFlushCbs();
        isFlushing = false;
        currentFlushPromise = null;
        if (queue.length || pendingPostFlushCbs.length) {
          flushJobs();
        }
      }
    }
    function emit(instance, event, ...rawArgs) {
      if (instance.isUnmounted)
        return;
      const props2 = instance.vnode.props || EMPTY_OBJ;
      let args = rawArgs;
      const isModelListener2 = event.startsWith("update:");
      const modelArg = isModelListener2 && event.slice(7);
      if (modelArg && modelArg in props2) {
        const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
        const { number, trim } = props2[modifiersKey] || EMPTY_OBJ;
        if (trim) {
          args = rawArgs.map((a) => isString(a) ? a.trim() : a);
        }
        if (number) {
          args = rawArgs.map(looseToNumber);
        }
      }
      let handlerName;
      let handler = props2[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
      props2[handlerName = toHandlerKey(camelize(event))];
      if (!handler && isModelListener2) {
        handler = props2[handlerName = toHandlerKey(hyphenate(event))];
      }
      if (handler) {
        callWithAsyncErrorHandling(handler, instance, 6, args);
      }
      const onceHandler = props2[handlerName + `Once`];
      if (onceHandler) {
        if (!instance.emitted) {
          instance.emitted = {};
        } else if (instance.emitted[handlerName]) {
          return;
        }
        instance.emitted[handlerName] = true;
        callWithAsyncErrorHandling(onceHandler, instance, 6, args);
      }
    }
    function normalizeEmitsOptions(comp2, appContext, asMixin = false) {
      const cache = appContext.emitsCache;
      const cached = cache.get(comp2);
      if (cached !== void 0) {
        return cached;
      }
      const raw = comp2.emits;
      let normalized = {};
      let hasExtends = false;
      if (!isFunction(comp2)) {
        const extendEmits = (raw2) => {
          const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
          if (normalizedFromExtend) {
            hasExtends = true;
            extend(normalized, normalizedFromExtend);
          }
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendEmits);
        }
        if (comp2.extends) {
          extendEmits(comp2.extends);
        }
        if (comp2.mixins) {
          comp2.mixins.forEach(extendEmits);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject(comp2)) {
          cache.set(comp2, null);
        }
        return null;
      }
      if (isArray(raw)) {
        raw.forEach((key2) => normalized[key2] = null);
      } else {
        extend(normalized, raw);
      }
      if (isObject(comp2)) {
        cache.set(comp2, normalized);
      }
      return normalized;
    }
    function isEmitListener(options, key2) {
      if (!options || !isOn(key2)) {
        return false;
      }
      key2 = key2.slice(2).replace(/Once$/, "");
      return hasOwn(options, key2[0].toLowerCase() + key2.slice(1)) || hasOwn(options, hyphenate(key2)) || hasOwn(options, key2);
    }
    let currentRenderingInstance = null;
    let currentScopeId = null;
    function setCurrentRenderingInstance(instance) {
      const prev = currentRenderingInstance;
      currentRenderingInstance = instance;
      currentScopeId = instance && instance.type.__scopeId || null;
      return prev;
    }
    function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
      if (!ctx)
        return fn;
      if (fn._n) {
        return fn;
      }
      const renderFnWithContext = (...args) => {
        if (renderFnWithContext._d) {
          setBlockTracking(-1);
        }
        const prevInstance = setCurrentRenderingInstance(ctx);
        let res;
        try {
          res = fn(...args);
        } finally {
          setCurrentRenderingInstance(prevInstance);
          if (renderFnWithContext._d) {
            setBlockTracking(1);
          }
        }
        return res;
      };
      renderFnWithContext._n = true;
      renderFnWithContext._c = true;
      renderFnWithContext._d = true;
      return renderFnWithContext;
    }
    function markAttrsAccessed() {
    }
    function renderComponentRoot(instance) {
      const { type: Component, vnode, proxy, withProxy, props: props2, propsOptions: [propsOptions], slots, attrs, emit: emit2, render, renderCache, data: data2, setupState, ctx, inheritAttrs } = instance;
      let result;
      let fallthroughAttrs;
      const prev = setCurrentRenderingInstance(instance);
      try {
        if (vnode.shapeFlag & 4) {
          const proxyToUse = withProxy || proxy;
          result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props2, setupState, data2, ctx));
          fallthroughAttrs = attrs;
        } else {
          const render2 = Component;
          if (false)
            ;
          result = normalizeVNode(render2.length > 1 ? render2(props2, false ? {
            get attrs() {
              markAttrsAccessed();
              return attrs;
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }) : render2(
            props2,
            null
            /* we know it doesn't need it */
          ));
          fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
        }
      } catch (err) {
        blockStack.length = 0;
        handleError(
          err,
          instance,
          1
          /* ErrorCodes.RENDER_FUNCTION */
        );
        result = createVNode(Comment);
      }
      let root = result;
      if (fallthroughAttrs && inheritAttrs !== false) {
        const keys = Object.keys(fallthroughAttrs);
        const { shapeFlag } = root;
        if (keys.length) {
          if (shapeFlag & (1 | 6)) {
            if (propsOptions && keys.some(isModelListener)) {
              fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
            }
            root = cloneVNode(root, fallthroughAttrs);
          }
        }
      }
      if (vnode.dirs) {
        root = cloneVNode(root);
        root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
      }
      if (vnode.transition) {
        root.transition = vnode.transition;
      }
      {
        result = root;
      }
      setCurrentRenderingInstance(prev);
      return result;
    }
    const getFunctionalFallthrough = (attrs) => {
      let res;
      for (const key2 in attrs) {
        if (key2 === "class" || key2 === "style" || isOn(key2)) {
          (res || (res = {}))[key2] = attrs[key2];
        }
      }
      return res;
    };
    const filterModelListeners = (attrs, props2) => {
      const res = {};
      for (const key2 in attrs) {
        if (!isModelListener(key2) || !(key2.slice(9) in props2)) {
          res[key2] = attrs[key2];
        }
      }
      return res;
    };
    function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
      const { props: prevProps, children: prevChildren, component } = prevVNode;
      const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
      const emits = component.emitsOptions;
      if (nextVNode.dirs || nextVNode.transition) {
        return true;
      }
      if (optimized && patchFlag >= 0) {
        if (patchFlag & 1024) {
          return true;
        }
        if (patchFlag & 16) {
          if (!prevProps) {
            return !!nextProps;
          }
          return hasPropsChanged(prevProps, nextProps, emits);
        } else if (patchFlag & 8) {
          const dynamicProps = nextVNode.dynamicProps;
          for (let i = 0; i < dynamicProps.length; i++) {
            const key2 = dynamicProps[i];
            if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emits, key2)) {
              return true;
            }
          }
        }
      } else {
        if (prevChildren || nextChildren) {
          if (!nextChildren || !nextChildren.$stable) {
            return true;
          }
        }
        if (prevProps === nextProps) {
          return false;
        }
        if (!prevProps) {
          return !!nextProps;
        }
        if (!nextProps) {
          return true;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      }
      return false;
    }
    function hasPropsChanged(prevProps, nextProps, emitsOptions) {
      const nextKeys = Object.keys(nextProps);
      if (nextKeys.length !== Object.keys(prevProps).length) {
        return true;
      }
      for (let i = 0; i < nextKeys.length; i++) {
        const key2 = nextKeys[i];
        if (nextProps[key2] !== prevProps[key2] && !isEmitListener(emitsOptions, key2)) {
          return true;
        }
      }
      return false;
    }
    function updateHOCHostEl({ vnode, parent: parent2 }, el) {
      while (parent2 && parent2.subTree === vnode) {
        (vnode = parent2.vnode).el = el;
        parent2 = parent2.parent;
      }
    }
    const isSuspense = (type) => type.__isSuspense;
    function queueEffectWithSuspense(fn, suspense) {
      if (suspense && suspense.pendingBranch) {
        if (isArray(fn)) {
          suspense.effects.push(...fn);
        } else {
          suspense.effects.push(fn);
        }
      } else {
        queuePostFlushCb(fn);
      }
    }
    function provide(key2, value2) {
      if (!currentInstance)
        ;
      else {
        let provides = currentInstance.provides;
        const parentProvides = currentInstance.parent && currentInstance.parent.provides;
        if (parentProvides === provides) {
          provides = currentInstance.provides = Object.create(parentProvides);
        }
        provides[key2] = value2;
      }
    }
    function inject(key2, defaultValue, treatDefaultAsFactory = false) {
      const instance = currentInstance || currentRenderingInstance;
      if (instance) {
        const provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;
        if (provides && key2 in provides) {
          return provides[key2];
        } else if (arguments.length > 1) {
          return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
        } else
          ;
      }
    }
    const INITIAL_WATCHER_VALUE = {};
    function watch(source, cb, options) {
      return doWatch(source, cb, options);
    }
    function doWatch(source, cb, { immediate, deep, flush, onTrack, onTrigger } = EMPTY_OBJ) {
      const instance = getCurrentScope() === (currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope) ? currentInstance : null;
      let getter;
      let forceTrigger = false;
      let isMultiSource = false;
      if (isRef(source)) {
        getter = () => source.value;
        forceTrigger = isShallow(source);
      } else if (isReactive(source)) {
        getter = () => source;
        deep = true;
      } else if (isArray(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
        getter = () => source.map((s) => {
          if (isRef(s)) {
            return s.value;
          } else if (isReactive(s)) {
            return traverse(s);
          } else if (isFunction(s)) {
            return callWithErrorHandling(
              s,
              instance,
              2
              /* ErrorCodes.WATCH_GETTER */
            );
          } else
            ;
        });
      } else if (isFunction(source)) {
        if (cb) {
          getter = () => callWithErrorHandling(
            source,
            instance,
            2
            /* ErrorCodes.WATCH_GETTER */
          );
        } else {
          getter = () => {
            if (instance && instance.isUnmounted) {
              return;
            }
            if (cleanup) {
              cleanup();
            }
            return callWithAsyncErrorHandling(source, instance, 3, [onCleanup]);
          };
        }
      } else {
        getter = NOOP;
      }
      if (cb && deep) {
        const baseGetter = getter;
        getter = () => traverse(baseGetter());
      }
      let cleanup;
      let onCleanup = (fn) => {
        cleanup = effect2.onStop = () => {
          callWithErrorHandling(
            fn,
            instance,
            4
            /* ErrorCodes.WATCH_CLEANUP */
          );
        };
      };
      let ssrCleanup;
      if (isInSSRComponentSetup) {
        onCleanup = NOOP;
        if (!cb) {
          getter();
        } else if (immediate) {
          callWithAsyncErrorHandling(cb, instance, 3, [
            getter(),
            isMultiSource ? [] : void 0,
            onCleanup
          ]);
        }
        if (flush === "sync") {
          const ctx = useSSRContext();
          ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
        } else {
          return NOOP;
        }
      }
      let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
      const job = () => {
        if (!effect2.active) {
          return;
        }
        if (cb) {
          const newValue = effect2.run();
          if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
            if (cleanup) {
              cleanup();
            }
            callWithAsyncErrorHandling(cb, instance, 3, [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
              onCleanup
            ]);
            oldValue = newValue;
          }
        } else {
          effect2.run();
        }
      };
      job.allowRecurse = !!cb;
      let scheduler;
      if (flush === "sync") {
        scheduler = job;
      } else if (flush === "post") {
        scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
      } else {
        job.pre = true;
        if (instance)
          job.id = instance.uid;
        scheduler = () => queueJob(job);
      }
      const effect2 = new ReactiveEffect(getter, scheduler);
      if (cb) {
        if (immediate) {
          job();
        } else {
          oldValue = effect2.run();
        }
      } else if (flush === "post") {
        queuePostRenderEffect(effect2.run.bind(effect2), instance && instance.suspense);
      } else {
        effect2.run();
      }
      const unwatch = () => {
        effect2.stop();
        if (instance && instance.scope) {
          remove(instance.scope.effects, effect2);
        }
      };
      if (ssrCleanup)
        ssrCleanup.push(unwatch);
      return unwatch;
    }
    function instanceWatch(source, value2, options) {
      const publicThis = this.proxy;
      const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
      let cb;
      if (isFunction(value2)) {
        cb = value2;
      } else {
        cb = value2.handler;
        options = value2;
      }
      const cur = currentInstance;
      setCurrentInstance(this);
      const res = doWatch(getter, cb.bind(publicThis), options);
      if (cur) {
        setCurrentInstance(cur);
      } else {
        unsetCurrentInstance();
      }
      return res;
    }
    function createPathGetter(ctx, path) {
      const segments = path.split(".");
      return () => {
        let cur = ctx;
        for (let i = 0; i < segments.length && cur; i++) {
          cur = cur[segments[i]];
        }
        return cur;
      };
    }
    function traverse(value2, seen) {
      if (!isObject(value2) || value2[
        "__v_skip"
        /* ReactiveFlags.SKIP */
      ]) {
        return value2;
      }
      seen = seen || /* @__PURE__ */ new Set();
      if (seen.has(value2)) {
        return value2;
      }
      seen.add(value2);
      if (isRef(value2)) {
        traverse(value2.value, seen);
      } else if (isArray(value2)) {
        for (let i = 0; i < value2.length; i++) {
          traverse(value2[i], seen);
        }
      } else if (isSet(value2) || isMap(value2)) {
        value2.forEach((v) => {
          traverse(v, seen);
        });
      } else if (isPlainObject(value2)) {
        for (const key2 in value2) {
          traverse(value2[key2], seen);
        }
      }
      return value2;
    }
    function useTransitionState() {
      const state = {
        isMounted: false,
        isLeaving: false,
        isUnmounting: false,
        leavingVNodes: /* @__PURE__ */ new Map()
      };
      onMounted(() => {
        state.isMounted = true;
      });
      onBeforeUnmount(() => {
        state.isUnmounting = true;
      });
      return state;
    }
    const TransitionHookValidator = [Function, Array];
    const BaseTransitionImpl = {
      name: `BaseTransition`,
      props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        // enter
        onBeforeEnter: TransitionHookValidator,
        onEnter: TransitionHookValidator,
        onAfterEnter: TransitionHookValidator,
        onEnterCancelled: TransitionHookValidator,
        // leave
        onBeforeLeave: TransitionHookValidator,
        onLeave: TransitionHookValidator,
        onAfterLeave: TransitionHookValidator,
        onLeaveCancelled: TransitionHookValidator,
        // appear
        onBeforeAppear: TransitionHookValidator,
        onAppear: TransitionHookValidator,
        onAfterAppear: TransitionHookValidator,
        onAppearCancelled: TransitionHookValidator
      },
      setup(props2, { slots }) {
        const instance = getCurrentInstance();
        const state = useTransitionState();
        let prevTransitionKey;
        return () => {
          const children = slots.default && getTransitionRawChildren(slots.default(), true);
          if (!children || !children.length) {
            return;
          }
          let child = children[0];
          if (children.length > 1) {
            for (const c of children) {
              if (c.type !== Comment) {
                child = c;
                break;
              }
            }
          }
          const rawProps = toRaw(props2);
          const { mode } = rawProps;
          if (state.isLeaving) {
            return emptyPlaceholder(child);
          }
          const innerChild = getKeepAliveChild(child);
          if (!innerChild) {
            return emptyPlaceholder(child);
          }
          const enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
          setTransitionHooks(innerChild, enterHooks);
          const oldChild = instance.subTree;
          const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
          let transitionKeyChanged = false;
          const { getTransitionKey } = innerChild.type;
          if (getTransitionKey) {
            const key2 = getTransitionKey();
            if (prevTransitionKey === void 0) {
              prevTransitionKey = key2;
            } else if (key2 !== prevTransitionKey) {
              prevTransitionKey = key2;
              transitionKeyChanged = true;
            }
          }
          if (oldInnerChild && oldInnerChild.type !== Comment && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
            const leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance);
            setTransitionHooks(oldInnerChild, leavingHooks);
            if (mode === "out-in") {
              state.isLeaving = true;
              leavingHooks.afterLeave = () => {
                state.isLeaving = false;
                if (instance.update.active !== false) {
                  instance.update();
                }
              };
              return emptyPlaceholder(child);
            } else if (mode === "in-out" && innerChild.type !== Comment) {
              leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
                const leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
                leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
                el._leaveCb = () => {
                  earlyRemove();
                  el._leaveCb = void 0;
                  delete enterHooks.delayedLeave;
                };
                enterHooks.delayedLeave = delayedLeave;
              };
            }
          }
          return child;
        };
      }
    };
    const BaseTransition = BaseTransitionImpl;
    function getLeavingNodesForType(state, vnode) {
      const { leavingVNodes } = state;
      let leavingVNodesCache = leavingVNodes.get(vnode.type);
      if (!leavingVNodesCache) {
        leavingVNodesCache = /* @__PURE__ */ Object.create(null);
        leavingVNodes.set(vnode.type, leavingVNodesCache);
      }
      return leavingVNodesCache;
    }
    function resolveTransitionHooks(vnode, props2, state, instance) {
      const { appear, mode, persisted = false, onBeforeEnter, onEnter, onAfterEnter, onEnterCancelled, onBeforeLeave, onLeave, onAfterLeave, onLeaveCancelled, onBeforeAppear, onAppear, onAfterAppear, onAppearCancelled } = props2;
      const key2 = String(vnode.key);
      const leavingVNodesCache = getLeavingNodesForType(state, vnode);
      const callHook2 = (hook, args) => {
        hook && callWithAsyncErrorHandling(hook, instance, 9, args);
      };
      const callAsyncHook = (hook, args) => {
        const done = args[1];
        callHook2(hook, args);
        if (isArray(hook)) {
          if (hook.every((hook2) => hook2.length <= 1))
            done();
        } else if (hook.length <= 1) {
          done();
        }
      };
      const hooks = {
        mode,
        persisted,
        beforeEnter(el) {
          let hook = onBeforeEnter;
          if (!state.isMounted) {
            if (appear) {
              hook = onBeforeAppear || onBeforeEnter;
            } else {
              return;
            }
          }
          if (el._leaveCb) {
            el._leaveCb(
              true
              /* cancelled */
            );
          }
          const leavingVNode = leavingVNodesCache[key2];
          if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
            leavingVNode.el._leaveCb();
          }
          callHook2(hook, [el]);
        },
        enter(el) {
          let hook = onEnter;
          let afterHook = onAfterEnter;
          let cancelHook = onEnterCancelled;
          if (!state.isMounted) {
            if (appear) {
              hook = onAppear || onEnter;
              afterHook = onAfterAppear || onAfterEnter;
              cancelHook = onAppearCancelled || onEnterCancelled;
            } else {
              return;
            }
          }
          let called = false;
          const done = el._enterCb = (cancelled) => {
            if (called)
              return;
            called = true;
            if (cancelled) {
              callHook2(cancelHook, [el]);
            } else {
              callHook2(afterHook, [el]);
            }
            if (hooks.delayedLeave) {
              hooks.delayedLeave();
            }
            el._enterCb = void 0;
          };
          if (hook) {
            callAsyncHook(hook, [el, done]);
          } else {
            done();
          }
        },
        leave(el, remove2) {
          const key3 = String(vnode.key);
          if (el._enterCb) {
            el._enterCb(
              true
              /* cancelled */
            );
          }
          if (state.isUnmounting) {
            return remove2();
          }
          callHook2(onBeforeLeave, [el]);
          let called = false;
          const done = el._leaveCb = (cancelled) => {
            if (called)
              return;
            called = true;
            remove2();
            if (cancelled) {
              callHook2(onLeaveCancelled, [el]);
            } else {
              callHook2(onAfterLeave, [el]);
            }
            el._leaveCb = void 0;
            if (leavingVNodesCache[key3] === vnode) {
              delete leavingVNodesCache[key3];
            }
          };
          leavingVNodesCache[key3] = vnode;
          if (onLeave) {
            callAsyncHook(onLeave, [el, done]);
          } else {
            done();
          }
        },
        clone(vnode2) {
          return resolveTransitionHooks(vnode2, props2, state, instance);
        }
      };
      return hooks;
    }
    function emptyPlaceholder(vnode) {
      if (isKeepAlive(vnode)) {
        vnode = cloneVNode(vnode);
        vnode.children = null;
        return vnode;
      }
    }
    function getKeepAliveChild(vnode) {
      return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : void 0 : vnode;
    }
    function setTransitionHooks(vnode, hooks) {
      if (vnode.shapeFlag & 6 && vnode.component) {
        setTransitionHooks(vnode.component.subTree, hooks);
      } else if (vnode.shapeFlag & 128) {
        vnode.ssContent.transition = hooks.clone(vnode.ssContent);
        vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
      } else {
        vnode.transition = hooks;
      }
    }
    function getTransitionRawChildren(children, keepComment = false, parentKey) {
      let ret = [];
      let keyedFragmentCount = 0;
      for (let i = 0; i < children.length; i++) {
        let child = children[i];
        const key2 = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
        if (child.type === Fragment) {
          if (child.patchFlag & 128)
            keyedFragmentCount++;
          ret = ret.concat(getTransitionRawChildren(child.children, keepComment, key2));
        } else if (keepComment || child.type !== Comment) {
          ret.push(key2 != null ? cloneVNode(child, { key: key2 }) : child);
        }
      }
      if (keyedFragmentCount > 1) {
        for (let i = 0; i < ret.length; i++) {
          ret[i].patchFlag = -2;
        }
      }
      return ret;
    }
    const isAsyncWrapper = (i) => !!i.type.__asyncLoader;
    const isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
    function onActivated(hook, target) {
      registerKeepAliveHook(hook, "a", target);
    }
    function onDeactivated(hook, target) {
      registerKeepAliveHook(hook, "da", target);
    }
    function registerKeepAliveHook(hook, type, target = currentInstance) {
      const wrappedHook = hook.__wdc || (hook.__wdc = () => {
        let current = target;
        while (current) {
          if (current.isDeactivated) {
            return;
          }
          current = current.parent;
        }
        return hook();
      });
      injectHook(type, wrappedHook, target);
      if (target) {
        let current = target.parent;
        while (current && current.parent) {
          if (isKeepAlive(current.parent.vnode)) {
            injectToKeepAliveRoot(wrappedHook, type, target, current);
          }
          current = current.parent;
        }
      }
    }
    function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
      const injected = injectHook(
        type,
        hook,
        keepAliveRoot,
        true
        /* prepend */
      );
      onUnmounted(() => {
        remove(keepAliveRoot[type], injected);
      }, target);
    }
    function injectHook(type, hook, target = currentInstance, prepend = false) {
      if (target) {
        const hooks = target[type] || (target[type] = []);
        const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
          if (target.isUnmounted) {
            return;
          }
          pauseTracking();
          setCurrentInstance(target);
          const res = callWithAsyncErrorHandling(hook, target, type, args);
          unsetCurrentInstance();
          resetTracking();
          return res;
        });
        if (prepend) {
          hooks.unshift(wrappedHook);
        } else {
          hooks.push(wrappedHook);
        }
        return wrappedHook;
      }
    }
    const createHook = (lifecycle) => (hook, target = currentInstance) => (
      // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
    );
    const onBeforeMount = createHook(
      "bm"
      /* LifecycleHooks.BEFORE_MOUNT */
    );
    const onMounted = createHook(
      "m"
      /* LifecycleHooks.MOUNTED */
    );
    const onBeforeUpdate = createHook(
      "bu"
      /* LifecycleHooks.BEFORE_UPDATE */
    );
    const onUpdated = createHook(
      "u"
      /* LifecycleHooks.UPDATED */
    );
    const onBeforeUnmount = createHook(
      "bum"
      /* LifecycleHooks.BEFORE_UNMOUNT */
    );
    const onUnmounted = createHook(
      "um"
      /* LifecycleHooks.UNMOUNTED */
    );
    const onServerPrefetch = createHook(
      "sp"
      /* LifecycleHooks.SERVER_PREFETCH */
    );
    const onRenderTriggered = createHook(
      "rtg"
      /* LifecycleHooks.RENDER_TRIGGERED */
    );
    const onRenderTracked = createHook(
      "rtc"
      /* LifecycleHooks.RENDER_TRACKED */
    );
    function onErrorCaptured(hook, target = currentInstance) {
      injectHook("ec", hook, target);
    }
    function invokeDirectiveHook(vnode, prevVNode, instance, name2) {
      const bindings = vnode.dirs;
      const oldBindings = prevVNode && prevVNode.dirs;
      for (let i = 0; i < bindings.length; i++) {
        const binding = bindings[i];
        if (oldBindings) {
          binding.oldValue = oldBindings[i].value;
        }
        let hook = binding.dir[name2];
        if (hook) {
          pauseTracking();
          callWithAsyncErrorHandling(hook, instance, 8, [
            vnode.el,
            binding,
            vnode,
            prevVNode
          ]);
          resetTracking();
        }
      }
    }
    const NULL_DYNAMIC_COMPONENT = Symbol();
    const getPublicInstance = (i) => {
      if (!i)
        return null;
      if (isStatefulComponent(i))
        return getExposeProxy(i) || i.proxy;
      return getPublicInstance(i.parent);
    };
    const publicPropertiesMap = (
      // Move PURE marker to new line to workaround compiler discarding it
      // due to type annotation
      /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
        $: (i) => i,
        $el: (i) => i.vnode.el,
        $data: (i) => i.data,
        $props: (i) => i.props,
        $attrs: (i) => i.attrs,
        $slots: (i) => i.slots,
        $refs: (i) => i.refs,
        $parent: (i) => getPublicInstance(i.parent),
        $root: (i) => getPublicInstance(i.root),
        $emit: (i) => i.emit,
        $options: (i) => resolveMergedOptions(i),
        $forceUpdate: (i) => i.f || (i.f = () => queueJob(i.update)),
        $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
        $watch: (i) => instanceWatch.bind(i)
      })
    );
    const hasSetupBinding = (state, key2) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key2);
    const PublicInstanceProxyHandlers = {
      get({ _: instance }, key2) {
        const { ctx, setupState, data: data2, props: props2, accessCache, type, appContext } = instance;
        let normalizedProps;
        if (key2[0] !== "$") {
          const n = accessCache[key2];
          if (n !== void 0) {
            switch (n) {
              case 1:
                return setupState[key2];
              case 2:
                return data2[key2];
              case 4:
                return ctx[key2];
              case 3:
                return props2[key2];
            }
          } else if (hasSetupBinding(setupState, key2)) {
            accessCache[key2] = 1;
            return setupState[key2];
          } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key2)) {
            accessCache[key2] = 2;
            return data2[key2];
          } else if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key2)
          ) {
            accessCache[key2] = 3;
            return props2[key2];
          } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
            accessCache[key2] = 4;
            return ctx[key2];
          } else if (shouldCacheAccess) {
            accessCache[key2] = 0;
          }
        }
        const publicGetter = publicPropertiesMap[key2];
        let cssModule, globalProperties;
        if (publicGetter) {
          if (key2 === "$attrs") {
            track(instance, "get", key2);
          }
          return publicGetter(instance);
        } else if (
          // css module (injected by vue-loader)
          (cssModule = type.__cssModules) && (cssModule = cssModule[key2])
        ) {
          return cssModule;
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key2)) {
          accessCache[key2] = 4;
          return ctx[key2];
        } else if (
          // global properties
          globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key2)
        ) {
          {
            return globalProperties[key2];
          }
        } else
          ;
      },
      set({ _: instance }, key2, value2) {
        const { data: data2, setupState, ctx } = instance;
        if (hasSetupBinding(setupState, key2)) {
          setupState[key2] = value2;
          return true;
        } else if (data2 !== EMPTY_OBJ && hasOwn(data2, key2)) {
          data2[key2] = value2;
          return true;
        } else if (hasOwn(instance.props, key2)) {
          return false;
        }
        if (key2[0] === "$" && key2.slice(1) in instance) {
          return false;
        } else {
          {
            ctx[key2] = value2;
          }
        }
        return true;
      },
      has({ _: { data: data2, setupState, accessCache, ctx, appContext, propsOptions } }, key2) {
        let normalizedProps;
        return !!accessCache[key2] || data2 !== EMPTY_OBJ && hasOwn(data2, key2) || hasSetupBinding(setupState, key2) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key2) || hasOwn(ctx, key2) || hasOwn(publicPropertiesMap, key2) || hasOwn(appContext.config.globalProperties, key2);
      },
      defineProperty(target, key2, descriptor) {
        if (descriptor.get != null) {
          target._.accessCache[key2] = 0;
        } else if (hasOwn(descriptor, "value")) {
          this.set(target, key2, descriptor.value, null);
        }
        return Reflect.defineProperty(target, key2, descriptor);
      }
    };
    let shouldCacheAccess = true;
    function applyOptions(instance) {
      const options = resolveMergedOptions(instance);
      const publicThis = instance.proxy;
      const ctx = instance.ctx;
      shouldCacheAccess = false;
      if (options.beforeCreate) {
        callHook(
          options.beforeCreate,
          instance,
          "bc"
          /* LifecycleHooks.BEFORE_CREATE */
        );
      }
      const {
        // state
        data: dataOptions,
        computed: computedOptions,
        methods,
        watch: watchOptions,
        provide: provideOptions,
        inject: injectOptions,
        // lifecycle
        created,
        beforeMount,
        mounted,
        beforeUpdate,
        updated,
        activated,
        deactivated,
        beforeDestroy,
        beforeUnmount,
        destroyed,
        unmounted,
        render,
        renderTracked,
        renderTriggered,
        errorCaptured,
        serverPrefetch,
        // public API
        expose,
        inheritAttrs,
        // assets
        components,
        directives,
        filters
      } = options;
      const checkDuplicateProperties = null;
      if (injectOptions) {
        resolveInjections(injectOptions, ctx, checkDuplicateProperties, instance.appContext.config.unwrapInjectedRef);
      }
      if (methods) {
        for (const key2 in methods) {
          const methodHandler = methods[key2];
          if (isFunction(methodHandler)) {
            {
              ctx[key2] = methodHandler.bind(publicThis);
            }
          }
        }
      }
      if (dataOptions) {
        const data2 = dataOptions.call(publicThis, publicThis);
        if (!isObject(data2))
          ;
        else {
          instance.data = reactive(data2);
        }
      }
      shouldCacheAccess = true;
      if (computedOptions) {
        for (const key2 in computedOptions) {
          const opt = computedOptions[key2];
          const get2 = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
          const set2 = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : NOOP;
          const c = computed({
            get: get2,
            set: set2
          });
          Object.defineProperty(ctx, key2, {
            enumerable: true,
            configurable: true,
            get: () => c.value,
            set: (v) => c.value = v
          });
        }
      }
      if (watchOptions) {
        for (const key2 in watchOptions) {
          createWatcher(watchOptions[key2], ctx, publicThis, key2);
        }
      }
      if (provideOptions) {
        const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
        Reflect.ownKeys(provides).forEach((key2) => {
          provide(key2, provides[key2]);
        });
      }
      if (created) {
        callHook(
          created,
          instance,
          "c"
          /* LifecycleHooks.CREATED */
        );
      }
      function registerLifecycleHook(register, hook) {
        if (isArray(hook)) {
          hook.forEach((_hook) => register(_hook.bind(publicThis)));
        } else if (hook) {
          register(hook.bind(publicThis));
        }
      }
      registerLifecycleHook(onBeforeMount, beforeMount);
      registerLifecycleHook(onMounted, mounted);
      registerLifecycleHook(onBeforeUpdate, beforeUpdate);
      registerLifecycleHook(onUpdated, updated);
      registerLifecycleHook(onActivated, activated);
      registerLifecycleHook(onDeactivated, deactivated);
      registerLifecycleHook(onErrorCaptured, errorCaptured);
      registerLifecycleHook(onRenderTracked, renderTracked);
      registerLifecycleHook(onRenderTriggered, renderTriggered);
      registerLifecycleHook(onBeforeUnmount, beforeUnmount);
      registerLifecycleHook(onUnmounted, unmounted);
      registerLifecycleHook(onServerPrefetch, serverPrefetch);
      if (isArray(expose)) {
        if (expose.length) {
          const exposed = instance.exposed || (instance.exposed = {});
          expose.forEach((key2) => {
            Object.defineProperty(exposed, key2, {
              get: () => publicThis[key2],
              set: (val2) => publicThis[key2] = val2
            });
          });
        } else if (!instance.exposed) {
          instance.exposed = {};
        }
      }
      if (render && instance.render === NOOP) {
        instance.render = render;
      }
      if (inheritAttrs != null) {
        instance.inheritAttrs = inheritAttrs;
      }
      if (components)
        instance.components = components;
      if (directives)
        instance.directives = directives;
    }
    function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP, unwrapRef = false) {
      if (isArray(injectOptions)) {
        injectOptions = normalizeInject(injectOptions);
      }
      for (const key2 in injectOptions) {
        const opt = injectOptions[key2];
        let injected;
        if (isObject(opt)) {
          if ("default" in opt) {
            injected = inject(
              opt.from || key2,
              opt.default,
              true
              /* treat default function as factory */
            );
          } else {
            injected = inject(opt.from || key2);
          }
        } else {
          injected = inject(opt);
        }
        if (isRef(injected)) {
          if (unwrapRef) {
            Object.defineProperty(ctx, key2, {
              enumerable: true,
              configurable: true,
              get: () => injected.value,
              set: (v) => injected.value = v
            });
          } else {
            ctx[key2] = injected;
          }
        } else {
          ctx[key2] = injected;
        }
      }
    }
    function callHook(hook, instance, type) {
      callWithAsyncErrorHandling(isArray(hook) ? hook.map((h) => h.bind(instance.proxy)) : hook.bind(instance.proxy), instance, type);
    }
    function createWatcher(raw, ctx, publicThis, key2) {
      const getter = key2.includes(".") ? createPathGetter(publicThis, key2) : () => publicThis[key2];
      if (isString(raw)) {
        const handler = ctx[raw];
        if (isFunction(handler)) {
          watch(getter, handler);
        }
      } else if (isFunction(raw)) {
        watch(getter, raw.bind(publicThis));
      } else if (isObject(raw)) {
        if (isArray(raw)) {
          raw.forEach((r) => createWatcher(r, ctx, publicThis, key2));
        } else {
          const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
          if (isFunction(handler)) {
            watch(getter, handler, raw);
          }
        }
      } else
        ;
    }
    function resolveMergedOptions(instance) {
      const base = instance.type;
      const { mixins, extends: extendsOptions } = base;
      const { mixins: globalMixins, optionsCache: cache, config: { optionMergeStrategies } } = instance.appContext;
      const cached = cache.get(base);
      let resolved;
      if (cached) {
        resolved = cached;
      } else if (!globalMixins.length && !mixins && !extendsOptions) {
        {
          resolved = base;
        }
      } else {
        resolved = {};
        if (globalMixins.length) {
          globalMixins.forEach((m) => mergeOptions(resolved, m, optionMergeStrategies, true));
        }
        mergeOptions(resolved, base, optionMergeStrategies);
      }
      if (isObject(base)) {
        cache.set(base, resolved);
      }
      return resolved;
    }
    function mergeOptions(to, from, strats, asMixin = false) {
      const { mixins, extends: extendsOptions } = from;
      if (extendsOptions) {
        mergeOptions(to, extendsOptions, strats, true);
      }
      if (mixins) {
        mixins.forEach((m) => mergeOptions(to, m, strats, true));
      }
      for (const key2 in from) {
        if (asMixin && key2 === "expose")
          ;
        else {
          const strat = internalOptionMergeStrats[key2] || strats && strats[key2];
          to[key2] = strat ? strat(to[key2], from[key2]) : from[key2];
        }
      }
      return to;
    }
    const internalOptionMergeStrats = {
      data: mergeDataFn,
      props: mergeObjectOptions,
      emits: mergeObjectOptions,
      // objects
      methods: mergeObjectOptions,
      computed: mergeObjectOptions,
      // lifecycle
      beforeCreate: mergeAsArray,
      created: mergeAsArray,
      beforeMount: mergeAsArray,
      mounted: mergeAsArray,
      beforeUpdate: mergeAsArray,
      updated: mergeAsArray,
      beforeDestroy: mergeAsArray,
      beforeUnmount: mergeAsArray,
      destroyed: mergeAsArray,
      unmounted: mergeAsArray,
      activated: mergeAsArray,
      deactivated: mergeAsArray,
      errorCaptured: mergeAsArray,
      serverPrefetch: mergeAsArray,
      // assets
      components: mergeObjectOptions,
      directives: mergeObjectOptions,
      // watch
      watch: mergeWatchOptions,
      // provide / inject
      provide: mergeDataFn,
      inject: mergeInject
    };
    function mergeDataFn(to, from) {
      if (!from) {
        return to;
      }
      if (!to) {
        return from;
      }
      return function mergedDataFn() {
        return extend(isFunction(to) ? to.call(this, this) : to, isFunction(from) ? from.call(this, this) : from);
      };
    }
    function mergeInject(to, from) {
      return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
    }
    function normalizeInject(raw) {
      if (isArray(raw)) {
        const res = {};
        for (let i = 0; i < raw.length; i++) {
          res[raw[i]] = raw[i];
        }
        return res;
      }
      return raw;
    }
    function mergeAsArray(to, from) {
      return to ? [...new Set([].concat(to, from))] : from;
    }
    function mergeObjectOptions(to, from) {
      return to ? extend(extend(/* @__PURE__ */ Object.create(null), to), from) : from;
    }
    function mergeWatchOptions(to, from) {
      if (!to)
        return from;
      if (!from)
        return to;
      const merged = extend(/* @__PURE__ */ Object.create(null), to);
      for (const key2 in from) {
        merged[key2] = mergeAsArray(to[key2], from[key2]);
      }
      return merged;
    }
    function initProps(instance, rawProps, isStateful, isSSR = false) {
      const props2 = {};
      const attrs = {};
      def(attrs, InternalObjectKey, 1);
      instance.propsDefaults = /* @__PURE__ */ Object.create(null);
      setFullProps(instance, rawProps, props2, attrs);
      for (const key2 in instance.propsOptions[0]) {
        if (!(key2 in props2)) {
          props2[key2] = void 0;
        }
      }
      if (isStateful) {
        instance.props = isSSR ? props2 : shallowReactive(props2);
      } else {
        if (!instance.type.props) {
          instance.props = attrs;
        } else {
          instance.props = props2;
        }
      }
      instance.attrs = attrs;
    }
    function updateProps(instance, rawProps, rawPrevProps, optimized) {
      const { props: props2, attrs, vnode: { patchFlag } } = instance;
      const rawCurrentProps = toRaw(props2);
      const [options] = instance.propsOptions;
      let hasAttrsChanged = false;
      if (
        // always force full diff in dev
        // - #1942 if hmr is enabled with sfc component
        // - vite#872 non-sfc component used by sfc component
        (optimized || patchFlag > 0) && !(patchFlag & 16)
      ) {
        if (patchFlag & 8) {
          const propsToUpdate = instance.vnode.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            let key2 = propsToUpdate[i];
            if (isEmitListener(instance.emitsOptions, key2)) {
              continue;
            }
            const value2 = rawProps[key2];
            if (options) {
              if (hasOwn(attrs, key2)) {
                if (value2 !== attrs[key2]) {
                  attrs[key2] = value2;
                  hasAttrsChanged = true;
                }
              } else {
                const camelizedKey = camelize(key2);
                props2[camelizedKey] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  camelizedKey,
                  value2,
                  instance,
                  false
                  /* isAbsent */
                );
              }
            } else {
              if (value2 !== attrs[key2]) {
                attrs[key2] = value2;
                hasAttrsChanged = true;
              }
            }
          }
        }
      } else {
        if (setFullProps(instance, rawProps, props2, attrs)) {
          hasAttrsChanged = true;
        }
        let kebabKey;
        for (const key2 in rawCurrentProps) {
          if (!rawProps || // for camelCase
          !hasOwn(rawProps, key2) && // it's possible the original props was passed in as kebab-case
          // and converted to camelCase (#955)
          ((kebabKey = hyphenate(key2)) === key2 || !hasOwn(rawProps, kebabKey))) {
            if (options) {
              if (rawPrevProps && // for camelCase
              (rawPrevProps[key2] !== void 0 || // for kebab-case
              rawPrevProps[kebabKey] !== void 0)) {
                props2[key2] = resolvePropValue(
                  options,
                  rawCurrentProps,
                  key2,
                  void 0,
                  instance,
                  true
                  /* isAbsent */
                );
              }
            } else {
              delete props2[key2];
            }
          }
        }
        if (attrs !== rawCurrentProps) {
          for (const key2 in attrs) {
            if (!rawProps || !hasOwn(rawProps, key2) && true) {
              delete attrs[key2];
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (hasAttrsChanged) {
        trigger(instance, "set", "$attrs");
      }
    }
    function setFullProps(instance, rawProps, props2, attrs) {
      const [options, needCastKeys] = instance.propsOptions;
      let hasAttrsChanged = false;
      let rawCastValues;
      if (rawProps) {
        for (let key2 in rawProps) {
          if (isReservedProp(key2)) {
            continue;
          }
          const value2 = rawProps[key2];
          let camelKey;
          if (options && hasOwn(options, camelKey = camelize(key2))) {
            if (!needCastKeys || !needCastKeys.includes(camelKey)) {
              props2[camelKey] = value2;
            } else {
              (rawCastValues || (rawCastValues = {}))[camelKey] = value2;
            }
          } else if (!isEmitListener(instance.emitsOptions, key2)) {
            if (!(key2 in attrs) || value2 !== attrs[key2]) {
              attrs[key2] = value2;
              hasAttrsChanged = true;
            }
          }
        }
      }
      if (needCastKeys) {
        const rawCurrentProps = toRaw(props2);
        const castValues = rawCastValues || EMPTY_OBJ;
        for (let i = 0; i < needCastKeys.length; i++) {
          const key2 = needCastKeys[i];
          props2[key2] = resolvePropValue(options, rawCurrentProps, key2, castValues[key2], instance, !hasOwn(castValues, key2));
        }
      }
      return hasAttrsChanged;
    }
    function resolvePropValue(options, props2, key2, value2, instance, isAbsent) {
      const opt = options[key2];
      if (opt != null) {
        const hasDefault = hasOwn(opt, "default");
        if (hasDefault && value2 === void 0) {
          const defaultValue = opt.default;
          if (opt.type !== Function && isFunction(defaultValue)) {
            const { propsDefaults } = instance;
            if (key2 in propsDefaults) {
              value2 = propsDefaults[key2];
            } else {
              setCurrentInstance(instance);
              value2 = propsDefaults[key2] = defaultValue.call(null, props2);
              unsetCurrentInstance();
            }
          } else {
            value2 = defaultValue;
          }
        }
        if (opt[
          0
          /* BooleanFlags.shouldCast */
        ]) {
          if (isAbsent && !hasDefault) {
            value2 = false;
          } else if (opt[
            1
            /* BooleanFlags.shouldCastTrue */
          ] && (value2 === "" || value2 === hyphenate(key2))) {
            value2 = true;
          }
        }
      }
      return value2;
    }
    function normalizePropsOptions(comp2, appContext, asMixin = false) {
      const cache = appContext.propsCache;
      const cached = cache.get(comp2);
      if (cached) {
        return cached;
      }
      const raw = comp2.props;
      const normalized = {};
      const needCastKeys = [];
      let hasExtends = false;
      if (!isFunction(comp2)) {
        const extendProps = (raw2) => {
          hasExtends = true;
          const [props2, keys] = normalizePropsOptions(raw2, appContext, true);
          extend(normalized, props2);
          if (keys)
            needCastKeys.push(...keys);
        };
        if (!asMixin && appContext.mixins.length) {
          appContext.mixins.forEach(extendProps);
        }
        if (comp2.extends) {
          extendProps(comp2.extends);
        }
        if (comp2.mixins) {
          comp2.mixins.forEach(extendProps);
        }
      }
      if (!raw && !hasExtends) {
        if (isObject(comp2)) {
          cache.set(comp2, EMPTY_ARR);
        }
        return EMPTY_ARR;
      }
      if (isArray(raw)) {
        for (let i = 0; i < raw.length; i++) {
          const normalizedKey = camelize(raw[i]);
          if (validatePropName(normalizedKey)) {
            normalized[normalizedKey] = EMPTY_OBJ;
          }
        }
      } else if (raw) {
        for (const key2 in raw) {
          const normalizedKey = camelize(key2);
          if (validatePropName(normalizedKey)) {
            const opt = raw[key2];
            const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : Object.assign({}, opt);
            if (prop) {
              const booleanIndex = getTypeIndex(Boolean, prop.type);
              const stringIndex = getTypeIndex(String, prop.type);
              prop[
                0
                /* BooleanFlags.shouldCast */
              ] = booleanIndex > -1;
              prop[
                1
                /* BooleanFlags.shouldCastTrue */
              ] = stringIndex < 0 || booleanIndex < stringIndex;
              if (booleanIndex > -1 || hasOwn(prop, "default")) {
                needCastKeys.push(normalizedKey);
              }
            }
          }
        }
      }
      const res = [normalized, needCastKeys];
      if (isObject(comp2)) {
        cache.set(comp2, res);
      }
      return res;
    }
    function validatePropName(key2) {
      if (key2[0] !== "$") {
        return true;
      }
      return false;
    }
    function getType(ctor) {
      const match = ctor && ctor.toString().match(/^\s*(function|class) (\w+)/);
      return match ? match[2] : ctor === null ? "null" : "";
    }
    function isSameType(a, b) {
      return getType(a) === getType(b);
    }
    function getTypeIndex(type, expectedTypes) {
      if (isArray(expectedTypes)) {
        return expectedTypes.findIndex((t) => isSameType(t, type));
      } else if (isFunction(expectedTypes)) {
        return isSameType(expectedTypes, type) ? 0 : -1;
      }
      return -1;
    }
    const isInternalKey = (key2) => key2[0] === "_" || key2 === "$stable";
    const normalizeSlotValue = (value2) => isArray(value2) ? value2.map(normalizeVNode) : [normalizeVNode(value2)];
    const normalizeSlot = (key2, rawSlot, ctx) => {
      if (rawSlot._n) {
        return rawSlot;
      }
      const normalized = withCtx((...args) => {
        if (false)
          ;
        return normalizeSlotValue(rawSlot(...args));
      }, ctx);
      normalized._c = false;
      return normalized;
    };
    const normalizeObjectSlots = (rawSlots, slots, instance) => {
      const ctx = rawSlots._ctx;
      for (const key2 in rawSlots) {
        if (isInternalKey(key2))
          continue;
        const value2 = rawSlots[key2];
        if (isFunction(value2)) {
          slots[key2] = normalizeSlot(key2, value2, ctx);
        } else if (value2 != null) {
          const normalized = normalizeSlotValue(value2);
          slots[key2] = () => normalized;
        }
      }
    };
    const normalizeVNodeSlots = (instance, children) => {
      const normalized = normalizeSlotValue(children);
      instance.slots.default = () => normalized;
    };
    const initSlots = (instance, children) => {
      if (instance.vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
          instance.slots = toRaw(children);
          def(children, "_", type);
        } else {
          normalizeObjectSlots(children, instance.slots = {});
        }
      } else {
        instance.slots = {};
        if (children) {
          normalizeVNodeSlots(instance, children);
        }
      }
      def(instance.slots, InternalObjectKey, 1);
    };
    const updateSlots = (instance, children, optimized) => {
      const { vnode, slots } = instance;
      let needDeletionCheck = true;
      let deletionComparisonTarget = EMPTY_OBJ;
      if (vnode.shapeFlag & 32) {
        const type = children._;
        if (type) {
          if (optimized && type === 1) {
            needDeletionCheck = false;
          } else {
            extend(slots, children);
            if (!optimized && type === 1) {
              delete slots._;
            }
          }
        } else {
          needDeletionCheck = !children.$stable;
          normalizeObjectSlots(children, slots);
        }
        deletionComparisonTarget = children;
      } else if (children) {
        normalizeVNodeSlots(instance, children);
        deletionComparisonTarget = { default: 1 };
      }
      if (needDeletionCheck) {
        for (const key2 in slots) {
          if (!isInternalKey(key2) && !(key2 in deletionComparisonTarget)) {
            delete slots[key2];
          }
        }
      }
    };
    function createAppContext() {
      return {
        app: null,
        config: {
          isNativeTag: NO,
          performance: false,
          globalProperties: {},
          optionMergeStrategies: {},
          errorHandler: void 0,
          warnHandler: void 0,
          compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: /* @__PURE__ */ Object.create(null),
        optionsCache: /* @__PURE__ */ new WeakMap(),
        propsCache: /* @__PURE__ */ new WeakMap(),
        emitsCache: /* @__PURE__ */ new WeakMap()
      };
    }
    let uid$1 = 0;
    function createAppAPI(render, hydrate) {
      return function createApp2(rootComponent, rootProps = null) {
        if (!isFunction(rootComponent)) {
          rootComponent = Object.assign({}, rootComponent);
        }
        if (rootProps != null && !isObject(rootProps)) {
          rootProps = null;
        }
        const context = createAppContext();
        const installedPlugins = /* @__PURE__ */ new Set();
        let isMounted = false;
        const app = context.app = {
          _uid: uid$1++,
          _component: rootComponent,
          _props: rootProps,
          _container: null,
          _context: context,
          _instance: null,
          version,
          get config() {
            return context.config;
          },
          set config(v) {
          },
          use(plugin, ...options) {
            if (installedPlugins.has(plugin))
              ;
            else if (plugin && isFunction(plugin.install)) {
              installedPlugins.add(plugin);
              plugin.install(app, ...options);
            } else if (isFunction(plugin)) {
              installedPlugins.add(plugin);
              plugin(app, ...options);
            } else
              ;
            return app;
          },
          mixin(mixin) {
            {
              if (!context.mixins.includes(mixin)) {
                context.mixins.push(mixin);
              }
            }
            return app;
          },
          component(name2, component) {
            if (!component) {
              return context.components[name2];
            }
            context.components[name2] = component;
            return app;
          },
          directive(name2, directive) {
            if (!directive) {
              return context.directives[name2];
            }
            context.directives[name2] = directive;
            return app;
          },
          mount(rootContainer, isHydrate, isSVG) {
            if (!isMounted) {
              const vnode = createVNode(rootComponent, rootProps);
              vnode.appContext = context;
              if (isHydrate && hydrate) {
                hydrate(vnode, rootContainer);
              } else {
                render(vnode, rootContainer, isSVG);
              }
              isMounted = true;
              app._container = rootContainer;
              rootContainer.__vue_app__ = app;
              return getExposeProxy(vnode.component) || vnode.component.proxy;
            }
          },
          unmount() {
            if (isMounted) {
              render(null, app._container);
              delete app._container.__vue_app__;
            }
          },
          provide(key2, value2) {
            context.provides[key2] = value2;
            return app;
          }
        };
        return app;
      };
    }
    function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
      if (isArray(rawRef)) {
        rawRef.forEach((r, i) => setRef(r, oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount));
        return;
      }
      if (isAsyncWrapper(vnode) && !isUnmount) {
        return;
      }
      const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
      const value2 = isUnmount ? null : refValue;
      const { i: owner, r: ref } = rawRef;
      const oldRef = oldRawRef && oldRawRef.r;
      const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
      const setupState = owner.setupState;
      if (oldRef != null && oldRef !== ref) {
        if (isString(oldRef)) {
          refs[oldRef] = null;
          if (hasOwn(setupState, oldRef)) {
            setupState[oldRef] = null;
          }
        } else if (isRef(oldRef)) {
          oldRef.value = null;
        }
      }
      if (isFunction(ref)) {
        callWithErrorHandling(ref, owner, 12, [value2, refs]);
      } else {
        const _isString = isString(ref);
        const _isRef = isRef(ref);
        if (_isString || _isRef) {
          const doSet = () => {
            if (rawRef.f) {
              const existing = _isString ? hasOwn(setupState, ref) ? setupState[ref] : refs[ref] : ref.value;
              if (isUnmount) {
                isArray(existing) && remove(existing, refValue);
              } else {
                if (!isArray(existing)) {
                  if (_isString) {
                    refs[ref] = [refValue];
                    if (hasOwn(setupState, ref)) {
                      setupState[ref] = refs[ref];
                    }
                  } else {
                    ref.value = [refValue];
                    if (rawRef.k)
                      refs[rawRef.k] = ref.value;
                  }
                } else if (!existing.includes(refValue)) {
                  existing.push(refValue);
                }
              }
            } else if (_isString) {
              refs[ref] = value2;
              if (hasOwn(setupState, ref)) {
                setupState[ref] = value2;
              }
            } else if (_isRef) {
              ref.value = value2;
              if (rawRef.k)
                refs[rawRef.k] = value2;
            } else
              ;
          };
          if (value2) {
            doSet.id = -1;
            queuePostRenderEffect(doSet, parentSuspense);
          } else {
            doSet();
          }
        }
      }
    }
    const queuePostRenderEffect = queueEffectWithSuspense;
    function createRenderer(options) {
      return baseCreateRenderer(options);
    }
    function baseCreateRenderer(options, createHydrationFns) {
      const target = getGlobalThis();
      target.__VUE__ = true;
      const { insert: hostInsert, remove: hostRemove, patchProp: hostPatchProp, createElement: hostCreateElement, createText: hostCreateText, createComment: hostCreateComment, setText: hostSetText, setElementText: hostSetElementText, parentNode: hostParentNode, nextSibling: hostNextSibling, setScopeId: hostSetScopeId = NOOP, insertStaticContent: hostInsertStaticContent } = options;
      const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, isSVG = false, slotScopeIds = null, optimized = !!n2.dynamicChildren) => {
        if (n1 === n2) {
          return;
        }
        if (n1 && !isSameVNodeType(n1, n2)) {
          anchor = getNextHostNode(n1);
          unmount(n1, parentComponent, parentSuspense, true);
          n1 = null;
        }
        if (n2.patchFlag === -2) {
          optimized = false;
          n2.dynamicChildren = null;
        }
        const { type, ref, shapeFlag } = n2;
        switch (type) {
          case Text:
            processText(n1, n2, container, anchor);
            break;
          case Comment:
            processCommentNode(n1, n2, container, anchor);
            break;
          case Static:
            if (n1 == null) {
              mountStaticNode(n2, container, anchor, isSVG);
            }
            break;
          case Fragment:
            processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            break;
          default:
            if (shapeFlag & 1) {
              processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else if (shapeFlag & 6) {
              processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else if (shapeFlag & 64) {
              type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
            } else if (shapeFlag & 128) {
              type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
            } else
              ;
        }
        if (ref != null && parentComponent) {
          setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
        }
      };
      const processText = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
        } else {
          const el = n2.el = n1.el;
          if (n2.children !== n1.children) {
            hostSetText(el, n2.children);
          }
        }
      };
      const processCommentNode = (n1, n2, container, anchor) => {
        if (n1 == null) {
          hostInsert(n2.el = hostCreateComment(n2.children || ""), container, anchor);
        } else {
          n2.el = n1.el;
        }
      };
      const mountStaticNode = (n2, container, anchor, isSVG) => {
        [n2.el, n2.anchor] = hostInsertStaticContent(n2.children, container, anchor, isSVG, n2.el, n2.anchor);
      };
      const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostInsert(el, container, nextSibling);
          el = next;
        }
        hostInsert(anchor, container, nextSibling);
      };
      const removeStaticNode = ({ el, anchor }) => {
        let next;
        while (el && el !== anchor) {
          next = hostNextSibling(el);
          hostRemove(el);
          el = next;
        }
        hostRemove(anchor);
      };
      const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        isSVG = isSVG || n2.type === "svg";
        if (n1 == null) {
          mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let el;
        let vnodeHook;
        const { type, props: props2, shapeFlag, transition, dirs } = vnode;
        el = vnode.el = hostCreateElement(vnode.type, isSVG, props2 && props2.is, props2);
        if (shapeFlag & 8) {
          hostSetElementText(el, vnode.children);
        } else if (shapeFlag & 16) {
          mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== "foreignObject", slotScopeIds, optimized);
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "created");
        }
        setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
        if (props2) {
          for (const key2 in props2) {
            if (key2 !== "value" && !isReservedProp(key2)) {
              hostPatchProp(el, key2, null, props2[key2], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in props2) {
            hostPatchProp(el, "value", null, props2.value);
          }
          if (vnodeHook = props2.onVnodeBeforeMount) {
            invokeVNodeHook(vnodeHook, parentComponent, vnode);
          }
        }
        if (dirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
        }
        const needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
        if (needCallTransitionHooks) {
          transition.beforeEnter(el);
        }
        hostInsert(el, container, anchor);
        if ((vnodeHook = props2 && props2.onVnodeMounted) || needCallTransitionHooks || dirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          }, parentSuspense);
        }
      };
      const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
        if (scopeId) {
          hostSetScopeId(el, scopeId);
        }
        if (slotScopeIds) {
          for (let i = 0; i < slotScopeIds.length; i++) {
            hostSetScopeId(el, slotScopeIds[i]);
          }
        }
        if (parentComponent) {
          let subTree = parentComponent.subTree;
          if (vnode === subTree) {
            const parentVNode = parentComponent.vnode;
            setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
          }
        }
      };
      const mountChildren = (children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, start = 0) => {
        for (let i = start; i < children.length; i++) {
          const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
          patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };
      const patchElement = (n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const el = n2.el = n1.el;
        let { patchFlag, dynamicChildren, dirs } = n2;
        patchFlag |= n1.patchFlag & 16;
        const oldProps = n1.props || EMPTY_OBJ;
        const newProps = n2.props || EMPTY_OBJ;
        let vnodeHook;
        parentComponent && toggleRecurse(parentComponent, false);
        if (vnodeHook = newProps.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        }
        if (dirs) {
          invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
        }
        parentComponent && toggleRecurse(parentComponent, true);
        const areChildrenSVG = isSVG && n2.type !== "foreignObject";
        if (dynamicChildren) {
          patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);
        } else if (!optimized) {
          patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
        }
        if (patchFlag > 0) {
          if (patchFlag & 16) {
            patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
          } else {
            if (patchFlag & 2) {
              if (oldProps.class !== newProps.class) {
                hostPatchProp(el, "class", null, newProps.class, isSVG);
              }
            }
            if (patchFlag & 4) {
              hostPatchProp(el, "style", oldProps.style, newProps.style, isSVG);
            }
            if (patchFlag & 8) {
              const propsToUpdate = n2.dynamicProps;
              for (let i = 0; i < propsToUpdate.length; i++) {
                const key2 = propsToUpdate[i];
                const prev = oldProps[key2];
                const next = newProps[key2];
                if (next !== prev || key2 === "value") {
                  hostPatchProp(el, key2, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
                }
              }
            }
          }
          if (patchFlag & 1) {
            if (n1.children !== n2.children) {
              hostSetElementText(el, n2.children);
            }
          }
        } else if (!optimized && dynamicChildren == null) {
          patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
        }
        if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
            dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
          }, parentSuspense);
        }
      };
      const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) => {
        for (let i = 0; i < newChildren.length; i++) {
          const oldVNode = oldChildren[i];
          const newVNode = newChildren[i];
          const container = (
            // oldVNode may be an errored async setup() component inside Suspense
            // which will not have a mounted element
            oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
            // of the Fragment itself so it can move its children.
            (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
            // which also requires the correct parent container
            !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
            oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
              // In other cases, the parent container is not actually used so we
              // just pass the block element here to avoid a DOM parentNode call.
              fallbackContainer
            )
          );
          patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
        }
      };
      const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) => {
        if (oldProps !== newProps) {
          if (oldProps !== EMPTY_OBJ) {
            for (const key2 in oldProps) {
              if (!isReservedProp(key2) && !(key2 in newProps)) {
                hostPatchProp(el, key2, oldProps[key2], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
              }
            }
          }
          for (const key2 in newProps) {
            if (isReservedProp(key2))
              continue;
            const next = newProps[key2];
            const prev = oldProps[key2];
            if (next !== prev && key2 !== "value") {
              hostPatchProp(el, key2, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
          if ("value" in newProps) {
            hostPatchProp(el, "value", oldProps.value, newProps.value);
          }
        }
      };
      const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
        const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
        let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
        if (fragmentSlotScopeIds) {
          slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
        }
        if (n1 == null) {
          hostInsert(fragmentStartAnchor, container, anchor);
          hostInsert(fragmentEndAnchor, container, anchor);
          mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
          // of renderSlot() with no valid children
          n1.dynamicChildren) {
            patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);
            if (
              // #2080 if the stable fragment has a key, it's a <template v-for> that may
              //  get moved around. Make sure all root level vnodes inherit el.
              // #2134 or if it's a component root, it may also get moved around
              // as the component is being moved.
              n2.key != null || parentComponent && n2 === parentComponent.subTree
            ) {
              traverseStaticChildren(
                n1,
                n2,
                true
                /* shallow */
              );
            }
          } else {
            patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          }
        }
      };
      const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        n2.slotScopeIds = slotScopeIds;
        if (n1 == null) {
          if (n2.shapeFlag & 512) {
            parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
          } else {
            mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
          }
        } else {
          updateComponent(n1, n2, optimized);
        }
      };
      const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) => {
        const instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);
        if (isKeepAlive(initialVNode)) {
          instance.ctx.renderer = internals;
        }
        {
          setupComponent(instance);
        }
        if (instance.asyncDep) {
          parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
          if (!initialVNode.el) {
            const placeholder = instance.subTree = createVNode(Comment);
            processCommentNode(null, placeholder, container, anchor);
          }
          return;
        }
        setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);
      };
      const updateComponent = (n1, n2, optimized) => {
        const instance = n2.component = n1.component;
        if (shouldUpdateComponent(n1, n2, optimized)) {
          if (instance.asyncDep && !instance.asyncResolved) {
            updateComponentPreRender(instance, n2, optimized);
            return;
          } else {
            instance.next = n2;
            invalidateJob(instance.update);
            instance.update();
          }
        } else {
          n2.el = n1.el;
          instance.vnode = n2;
        }
      };
      const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) => {
        const componentUpdateFn = () => {
          if (!instance.isMounted) {
            let vnodeHook;
            const { el, props: props2 } = initialVNode;
            const { bm, m, parent: parent2 } = instance;
            const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
            toggleRecurse(instance, false);
            if (bm) {
              invokeArrayFns(bm);
            }
            if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeBeforeMount)) {
              invokeVNodeHook(vnodeHook, parent2, initialVNode);
            }
            toggleRecurse(instance, true);
            if (el && hydrateNode) {
              const hydrateSubTree = () => {
                instance.subTree = renderComponentRoot(instance);
                hydrateNode(el, instance.subTree, instance, parentSuspense, null);
              };
              if (isAsyncWrapperVNode) {
                initialVNode.type.__asyncLoader().then(
                  // note: we are moving the render call into an async callback,
                  // which means it won't track dependencies - but it's ok because
                  // a server-rendered async wrapper is already in resolved state
                  // and it will never need to change.
                  () => !instance.isUnmounted && hydrateSubTree()
                );
              } else {
                hydrateSubTree();
              }
            } else {
              const subTree = instance.subTree = renderComponentRoot(instance);
              patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);
              initialVNode.el = subTree.el;
            }
            if (m) {
              queuePostRenderEffect(m, parentSuspense);
            }
            if (!isAsyncWrapperVNode && (vnodeHook = props2 && props2.onVnodeMounted)) {
              const scopedInitialVNode = initialVNode;
              queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent2, scopedInitialVNode), parentSuspense);
            }
            if (initialVNode.shapeFlag & 256 || parent2 && isAsyncWrapper(parent2.vnode) && parent2.vnode.shapeFlag & 256) {
              instance.a && queuePostRenderEffect(instance.a, parentSuspense);
            }
            instance.isMounted = true;
            initialVNode = container = anchor = null;
          } else {
            let { next, bu, u, parent: parent2, vnode } = instance;
            let originNext = next;
            let vnodeHook;
            toggleRecurse(instance, false);
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            } else {
              next = vnode;
            }
            if (bu) {
              invokeArrayFns(bu);
            }
            if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
              invokeVNodeHook(vnodeHook, parent2, next, vnode);
            }
            toggleRecurse(instance, true);
            const nextTree = renderComponentRoot(instance);
            const prevTree = instance.subTree;
            instance.subTree = nextTree;
            patch(
              prevTree,
              nextTree,
              // parent may have changed if it's in a teleport
              hostParentNode(prevTree.el),
              // anchor may have changed if it's in a fragment
              getNextHostNode(prevTree),
              instance,
              parentSuspense,
              isSVG
            );
            next.el = nextTree.el;
            if (originNext === null) {
              updateHOCHostEl(instance, nextTree.el);
            }
            if (u) {
              queuePostRenderEffect(u, parentSuspense);
            }
            if (vnodeHook = next.props && next.props.onVnodeUpdated) {
              queuePostRenderEffect(() => invokeVNodeHook(vnodeHook, parent2, next, vnode), parentSuspense);
            }
          }
        };
        const effect2 = instance.effect = new ReactiveEffect(
          componentUpdateFn,
          () => queueJob(update),
          instance.scope
          // track it in component's effect scope
        );
        const update = instance.update = () => effect2.run();
        update.id = instance.uid;
        toggleRecurse(instance, true);
        update();
      };
      const updateComponentPreRender = (instance, nextVNode, optimized) => {
        nextVNode.component = instance;
        const prevProps = instance.vnode.props;
        instance.vnode = nextVNode;
        instance.next = null;
        updateProps(instance, nextVNode.props, prevProps, optimized);
        updateSlots(instance, nextVNode.children, optimized);
        pauseTracking();
        flushPreFlushCbs();
        resetTracking();
      };
      const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized = false) => {
        const c1 = n1 && n1.children;
        const prevShapeFlag = n1 ? n1.shapeFlag : 0;
        const c2 = n2.children;
        const { patchFlag, shapeFlag } = n2;
        if (patchFlag > 0) {
          if (patchFlag & 128) {
            patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            return;
          } else if (patchFlag & 256) {
            patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            return;
          }
        }
        if (shapeFlag & 8) {
          if (prevShapeFlag & 16) {
            unmountChildren(c1, parentComponent, parentSuspense);
          }
          if (c2 !== c1) {
            hostSetElementText(container, c2);
          }
        } else {
          if (prevShapeFlag & 16) {
            if (shapeFlag & 16) {
              patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else {
              unmountChildren(c1, parentComponent, parentSuspense, true);
            }
          } else {
            if (prevShapeFlag & 8) {
              hostSetElementText(container, "");
            }
            if (shapeFlag & 16) {
              mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            }
          }
        }
      };
      const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        c1 = c1 || EMPTY_ARR;
        c2 = c2 || EMPTY_ARR;
        const oldLength = c1.length;
        const newLength = c2.length;
        const commonLength = Math.min(oldLength, newLength);
        let i;
        for (i = 0; i < commonLength; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
        if (oldLength > newLength) {
          unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
        } else {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
        }
      };
      const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) => {
        let i = 0;
        const l2 = c2.length;
        let e1 = c1.length - 1;
        let e2 = l2 - 1;
        while (i <= e1 && i <= e2) {
          const n1 = c1[i];
          const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (isSameVNodeType(n1, n2)) {
            patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            break;
          }
          i++;
        }
        while (i <= e1 && i <= e2) {
          const n1 = c1[e1];
          const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
          if (isSameVNodeType(n1, n2)) {
            patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          } else {
            break;
          }
          e1--;
          e2--;
        }
        if (i > e1) {
          if (i <= e2) {
            const nextPos = e2 + 1;
            const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
            while (i <= e2) {
              patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              i++;
            }
          }
        } else if (i > e2) {
          while (i <= e1) {
            unmount(c1[i], parentComponent, parentSuspense, true);
            i++;
          }
        } else {
          const s1 = i;
          const s2 = i;
          const keyToNewIndexMap = /* @__PURE__ */ new Map();
          for (i = s2; i <= e2; i++) {
            const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
            if (nextChild.key != null) {
              keyToNewIndexMap.set(nextChild.key, i);
            }
          }
          let j;
          let patched = 0;
          const toBePatched = e2 - s2 + 1;
          let moved = false;
          let maxNewIndexSoFar = 0;
          const newIndexToOldIndexMap = new Array(toBePatched);
          for (i = 0; i < toBePatched; i++)
            newIndexToOldIndexMap[i] = 0;
          for (i = s1; i <= e1; i++) {
            const prevChild = c1[i];
            if (patched >= toBePatched) {
              unmount(prevChild, parentComponent, parentSuspense, true);
              continue;
            }
            let newIndex;
            if (prevChild.key != null) {
              newIndex = keyToNewIndexMap.get(prevChild.key);
            } else {
              for (j = s2; j <= e2; j++) {
                if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                  newIndex = j;
                  break;
                }
              }
            }
            if (newIndex === void 0) {
              unmount(prevChild, parentComponent, parentSuspense, true);
            } else {
              newIndexToOldIndexMap[newIndex - s2] = i + 1;
              if (newIndex >= maxNewIndexSoFar) {
                maxNewIndexSoFar = newIndex;
              } else {
                moved = true;
              }
              patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
              patched++;
            }
          }
          const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
          j = increasingNewIndexSequence.length - 1;
          for (i = toBePatched - 1; i >= 0; i--) {
            const nextIndex = s2 + i;
            const nextChild = c2[nextIndex];
            const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
            if (newIndexToOldIndexMap[i] === 0) {
              patch(null, nextChild, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
            } else if (moved) {
              if (j < 0 || i !== increasingNewIndexSequence[j]) {
                move(
                  nextChild,
                  container,
                  anchor,
                  2
                  /* MoveType.REORDER */
                );
              } else {
                j--;
              }
            }
          }
        }
      };
      const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
        const { el, type, transition, children, shapeFlag } = vnode;
        if (shapeFlag & 6) {
          move(vnode.component.subTree, container, anchor, moveType);
          return;
        }
        if (shapeFlag & 128) {
          vnode.suspense.move(container, anchor, moveType);
          return;
        }
        if (shapeFlag & 64) {
          type.move(vnode, container, anchor, internals);
          return;
        }
        if (type === Fragment) {
          hostInsert(el, container, anchor);
          for (let i = 0; i < children.length; i++) {
            move(children[i], container, anchor, moveType);
          }
          hostInsert(vnode.anchor, container, anchor);
          return;
        }
        if (type === Static) {
          moveStaticNode(vnode, container, anchor);
          return;
        }
        const needTransition = moveType !== 2 && shapeFlag & 1 && transition;
        if (needTransition) {
          if (moveType === 0) {
            transition.beforeEnter(el);
            hostInsert(el, container, anchor);
            queuePostRenderEffect(() => transition.enter(el), parentSuspense);
          } else {
            const { leave, delayLeave, afterLeave } = transition;
            const remove3 = () => hostInsert(el, container, anchor);
            const performLeave = () => {
              leave(el, () => {
                remove3();
                afterLeave && afterLeave();
              });
            };
            if (delayLeave) {
              delayLeave(el, remove3, performLeave);
            } else {
              performLeave();
            }
          }
        } else {
          hostInsert(el, container, anchor);
        }
      };
      const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
        const { type, props: props2, ref, children, dynamicChildren, shapeFlag, patchFlag, dirs } = vnode;
        if (ref != null) {
          setRef(ref, null, parentSuspense, vnode, true);
        }
        if (shapeFlag & 256) {
          parentComponent.ctx.deactivate(vnode);
          return;
        }
        const shouldInvokeDirs = shapeFlag & 1 && dirs;
        const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
        let vnodeHook;
        if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeBeforeUnmount)) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
        if (shapeFlag & 6) {
          unmountComponent(vnode.component, parentSuspense, doRemove);
        } else {
          if (shapeFlag & 128) {
            vnode.suspense.unmount(parentSuspense, doRemove);
            return;
          }
          if (shouldInvokeDirs) {
            invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
          }
          if (shapeFlag & 64) {
            vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
          } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
          (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
            unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
          } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
            unmountChildren(children, parentComponent, parentSuspense);
          }
          if (doRemove) {
            remove2(vnode);
          }
        }
        if (shouldInvokeVnodeHook && (vnodeHook = props2 && props2.onVnodeUnmounted) || shouldInvokeDirs) {
          queuePostRenderEffect(() => {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
          }, parentSuspense);
        }
      };
      const remove2 = (vnode) => {
        const { type, el, anchor, transition } = vnode;
        if (type === Fragment) {
          {
            removeFragment(el, anchor);
          }
          return;
        }
        if (type === Static) {
          removeStaticNode(vnode);
          return;
        }
        const performRemove = () => {
          hostRemove(el);
          if (transition && !transition.persisted && transition.afterLeave) {
            transition.afterLeave();
          }
        };
        if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
          const { leave, delayLeave } = transition;
          const performLeave = () => leave(el, performRemove);
          if (delayLeave) {
            delayLeave(vnode.el, performRemove, performLeave);
          } else {
            performLeave();
          }
        } else {
          performRemove();
        }
      };
      const removeFragment = (cur, end) => {
        let next;
        while (cur !== end) {
          next = hostNextSibling(cur);
          hostRemove(cur);
          cur = next;
        }
        hostRemove(end);
      };
      const unmountComponent = (instance, parentSuspense, doRemove) => {
        const { bum, scope, update, subTree, um } = instance;
        if (bum) {
          invokeArrayFns(bum);
        }
        scope.stop();
        if (update) {
          update.active = false;
          unmount(subTree, instance, parentSuspense, doRemove);
        }
        if (um) {
          queuePostRenderEffect(um, parentSuspense);
        }
        queuePostRenderEffect(() => {
          instance.isUnmounted = true;
        }, parentSuspense);
        if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
          parentSuspense.deps--;
          if (parentSuspense.deps === 0) {
            parentSuspense.resolve();
          }
        }
      };
      const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
        for (let i = start; i < children.length; i++) {
          unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
        }
      };
      const getNextHostNode = (vnode) => {
        if (vnode.shapeFlag & 6) {
          return getNextHostNode(vnode.component.subTree);
        }
        if (vnode.shapeFlag & 128) {
          return vnode.suspense.next();
        }
        return hostNextSibling(vnode.anchor || vnode.el);
      };
      const render = (vnode, container, isSVG) => {
        if (vnode == null) {
          if (container._vnode) {
            unmount(container._vnode, null, null, true);
          }
        } else {
          patch(container._vnode || null, vnode, container, null, null, null, isSVG);
        }
        flushPreFlushCbs();
        flushPostFlushCbs();
        container._vnode = vnode;
      };
      const internals = {
        p: patch,
        um: unmount,
        m: move,
        r: remove2,
        mt: mountComponent,
        mc: mountChildren,
        pc: patchChildren,
        pbc: patchBlockChildren,
        n: getNextHostNode,
        o: options
      };
      let hydrate;
      let hydrateNode;
      if (createHydrationFns) {
        [hydrate, hydrateNode] = createHydrationFns(internals);
      }
      return {
        render,
        hydrate,
        createApp: createAppAPI(render, hydrate)
      };
    }
    function toggleRecurse({ effect: effect2, update }, allowed) {
      effect2.allowRecurse = update.allowRecurse = allowed;
    }
    function traverseStaticChildren(n1, n2, shallow = false) {
      const ch1 = n1.children;
      const ch2 = n2.children;
      if (isArray(ch1) && isArray(ch2)) {
        for (let i = 0; i < ch1.length; i++) {
          const c1 = ch1[i];
          let c2 = ch2[i];
          if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
            if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
              c2 = ch2[i] = cloneIfMounted(ch2[i]);
              c2.el = c1.el;
            }
            if (!shallow)
              traverseStaticChildren(c1, c2);
          }
          if (c2.type === Text) {
            c2.el = c1.el;
          }
        }
      }
    }
    function getSequence(arr) {
      const p2 = arr.slice();
      const result = [0];
      let i, j, u, v, c;
      const len = arr.length;
      for (i = 0; i < len; i++) {
        const arrI = arr[i];
        if (arrI !== 0) {
          j = result[result.length - 1];
          if (arr[j] < arrI) {
            p2[i] = j;
            result.push(i);
            continue;
          }
          u = 0;
          v = result.length - 1;
          while (u < v) {
            c = u + v >> 1;
            if (arr[result[c]] < arrI) {
              u = c + 1;
            } else {
              v = c;
            }
          }
          if (arrI < arr[result[u]]) {
            if (u > 0) {
              p2[i] = result[u - 1];
            }
            result[u] = i;
          }
        }
      }
      u = result.length;
      v = result[u - 1];
      while (u-- > 0) {
        result[u] = v;
        v = p2[v];
      }
      return result;
    }
    const isTeleport = (type) => type.__isTeleport;
    const Fragment = Symbol(void 0);
    const Text = Symbol(void 0);
    const Comment = Symbol(void 0);
    const Static = Symbol(void 0);
    const blockStack = [];
    let currentBlock = null;
    function openBlock(disableTracking = false) {
      blockStack.push(currentBlock = disableTracking ? null : []);
    }
    function closeBlock() {
      blockStack.pop();
      currentBlock = blockStack[blockStack.length - 1] || null;
    }
    let isBlockTreeEnabled = 1;
    function setBlockTracking(value2) {
      isBlockTreeEnabled += value2;
    }
    function setupBlock(vnode) {
      vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
      closeBlock();
      if (isBlockTreeEnabled > 0 && currentBlock) {
        currentBlock.push(vnode);
      }
      return vnode;
    }
    function createElementBlock(type, props2, children, patchFlag, dynamicProps, shapeFlag) {
      return setupBlock(createBaseVNode(
        type,
        props2,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
        /* isBlock */
      ));
    }
    function isVNode(value2) {
      return value2 ? value2.__v_isVNode === true : false;
    }
    function isSameVNodeType(n1, n2) {
      return n1.type === n2.type && n1.key === n2.key;
    }
    const InternalObjectKey = `__vInternal`;
    const normalizeKey = ({ key: key2 }) => key2 != null ? key2 : null;
    const normalizeRef = ({ ref, ref_key, ref_for }) => {
      return ref != null ? isString(ref) || isRef(ref) || isFunction(ref) ? { i: currentRenderingInstance, r: ref, k: ref_key, f: !!ref_for } : ref : null;
    };
    function createBaseVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
      const vnode = {
        __v_isVNode: true,
        __v_skip: true,
        type,
        props: props2,
        key: props2 && normalizeKey(props2),
        ref: props2 && normalizeRef(props2),
        scopeId: currentScopeId,
        slotScopeIds: null,
        children,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag,
        patchFlag,
        dynamicProps,
        dynamicChildren: null,
        appContext: null,
        ctx: currentRenderingInstance
      };
      if (needFullChildrenNormalization) {
        normalizeChildren(vnode, children);
        if (shapeFlag & 128) {
          type.normalize(vnode);
        }
      } else if (children) {
        vnode.shapeFlag |= isString(children) ? 8 : 16;
      }
      if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
      !isBlockNode && // has current parent block
      currentBlock && // presence of a patch flag indicates this node needs patching on updates.
      // component nodes also should always be patched, because even if the
      // component doesn't need to update, it needs to persist the instance on to
      // the next vnode so that it can be properly unmounted later.
      (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
      // vnode should not be considered dynamic due to handler caching.
      vnode.patchFlag !== 32) {
        currentBlock.push(vnode);
      }
      return vnode;
    }
    const createVNode = _createVNode;
    function _createVNode(type, props2 = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
      if (!type || type === NULL_DYNAMIC_COMPONENT) {
        type = Comment;
      }
      if (isVNode(type)) {
        const cloned = cloneVNode(
          type,
          props2,
          true
          /* mergeRef: true */
        );
        if (children) {
          normalizeChildren(cloned, children);
        }
        if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
          if (cloned.shapeFlag & 6) {
            currentBlock[currentBlock.indexOf(type)] = cloned;
          } else {
            currentBlock.push(cloned);
          }
        }
        cloned.patchFlag |= -2;
        return cloned;
      }
      if (isClassComponent(type)) {
        type = type.__vccOpts;
      }
      if (props2) {
        props2 = guardReactiveProps(props2);
        let { class: klass, style: style2 } = props2;
        if (klass && !isString(klass)) {
          props2.class = normalizeClass(klass);
        }
        if (isObject(style2)) {
          if (isProxy(style2) && !isArray(style2)) {
            style2 = extend({}, style2);
          }
          props2.style = normalizeStyle(style2);
        }
      }
      const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
      return createBaseVNode(type, props2, children, patchFlag, dynamicProps, shapeFlag, isBlockNode, true);
    }
    function guardReactiveProps(props2) {
      if (!props2)
        return null;
      return isProxy(props2) || InternalObjectKey in props2 ? extend({}, props2) : props2;
    }
    function cloneVNode(vnode, extraProps, mergeRef = false) {
      const { props: props2, ref, patchFlag, children } = vnode;
      const mergedProps = extraProps ? mergeProps(props2 || {}, extraProps) : props2;
      const cloned = {
        __v_isVNode: true,
        __v_skip: true,
        type: vnode.type,
        props: mergedProps,
        key: mergedProps && normalizeKey(mergedProps),
        ref: extraProps && extraProps.ref ? (
          // #2078 in the case of <component :is="vnode" ref="extra"/>
          // if the vnode itself already has a ref, cloneVNode will need to merge
          // the refs so the single vnode can be set on multiple refs
          mergeRef && ref ? isArray(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps)
        ) : ref,
        scopeId: vnode.scopeId,
        slotScopeIds: vnode.slotScopeIds,
        children,
        target: vnode.target,
        targetAnchor: vnode.targetAnchor,
        staticCount: vnode.staticCount,
        shapeFlag: vnode.shapeFlag,
        // if the vnode is cloned with extra props, we can no longer assume its
        // existing patch flag to be reliable and need to add the FULL_PROPS flag.
        // note: preserve flag for fragments since they use the flag for children
        // fast paths only.
        patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
        dynamicProps: vnode.dynamicProps,
        dynamicChildren: vnode.dynamicChildren,
        appContext: vnode.appContext,
        dirs: vnode.dirs,
        transition: vnode.transition,
        // These should technically only be non-null on mounted VNodes. However,
        // they *should* be copied for kept-alive vnodes. So we just always copy
        // them since them being non-null during a mount doesn't affect the logic as
        // they will simply be overwritten.
        component: vnode.component,
        suspense: vnode.suspense,
        ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
        ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
        el: vnode.el,
        anchor: vnode.anchor,
        ctx: vnode.ctx,
        ce: vnode.ce
      };
      return cloned;
    }
    function createTextVNode(text2 = " ", flag = 0) {
      return createVNode(Text, null, text2, flag);
    }
    function normalizeVNode(child) {
      if (child == null || typeof child === "boolean") {
        return createVNode(Comment);
      } else if (isArray(child)) {
        return createVNode(
          Fragment,
          null,
          // #3666, avoid reference pollution when reusing vnode
          child.slice()
        );
      } else if (typeof child === "object") {
        return cloneIfMounted(child);
      } else {
        return createVNode(Text, null, String(child));
      }
    }
    function cloneIfMounted(child) {
      return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
    }
    function normalizeChildren(vnode, children) {
      let type = 0;
      const { shapeFlag } = vnode;
      if (children == null) {
        children = null;
      } else if (isArray(children)) {
        type = 16;
      } else if (typeof children === "object") {
        if (shapeFlag & (1 | 64)) {
          const slot = children.default;
          if (slot) {
            slot._c && (slot._d = false);
            normalizeChildren(vnode, slot());
            slot._c && (slot._d = true);
          }
          return;
        } else {
          type = 32;
          const slotFlag = children._;
          if (!slotFlag && !(InternalObjectKey in children)) {
            children._ctx = currentRenderingInstance;
          } else if (slotFlag === 3 && currentRenderingInstance) {
            if (currentRenderingInstance.slots._ === 1) {
              children._ = 1;
            } else {
              children._ = 2;
              vnode.patchFlag |= 1024;
            }
          }
        }
      } else if (isFunction(children)) {
        children = { default: children, _ctx: currentRenderingInstance };
        type = 32;
      } else {
        children = String(children);
        if (shapeFlag & 64) {
          type = 16;
          children = [createTextVNode(children)];
        } else {
          type = 8;
        }
      }
      vnode.children = children;
      vnode.shapeFlag |= type;
    }
    function mergeProps(...args) {
      const ret = {};
      for (let i = 0; i < args.length; i++) {
        const toMerge = args[i];
        for (const key2 in toMerge) {
          if (key2 === "class") {
            if (ret.class !== toMerge.class) {
              ret.class = normalizeClass([ret.class, toMerge.class]);
            }
          } else if (key2 === "style") {
            ret.style = normalizeStyle([ret.style, toMerge.style]);
          } else if (isOn(key2)) {
            const existing = ret[key2];
            const incoming = toMerge[key2];
            if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
              ret[key2] = existing ? [].concat(existing, incoming) : incoming;
            }
          } else if (key2 !== "") {
            ret[key2] = toMerge[key2];
          }
        }
      }
      return ret;
    }
    function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
      callWithAsyncErrorHandling(hook, instance, 7, [
        vnode,
        prevVNode
      ]);
    }
    const emptyAppContext = createAppContext();
    let uid = 0;
    function createComponentInstance(vnode, parent2, suspense) {
      const type = vnode.type;
      const appContext = (parent2 ? parent2.appContext : vnode.appContext) || emptyAppContext;
      const instance = {
        uid: uid++,
        vnode,
        type,
        parent: parent2,
        appContext,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new EffectScope(
          true
          /* detached */
        ),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: parent2 ? parent2.provides : Object.create(appContext.provides),
        accessCache: null,
        renderCache: [],
        // local resolved assets
        components: null,
        directives: null,
        // resolved props and emits options
        propsOptions: normalizePropsOptions(type, appContext),
        emitsOptions: normalizeEmitsOptions(type, appContext),
        // emit
        emit: null,
        emitted: null,
        // props default value
        propsDefaults: EMPTY_OBJ,
        // inheritAttrs
        inheritAttrs: type.inheritAttrs,
        // state
        ctx: EMPTY_OBJ,
        data: EMPTY_OBJ,
        props: EMPTY_OBJ,
        attrs: EMPTY_OBJ,
        slots: EMPTY_OBJ,
        refs: EMPTY_OBJ,
        setupState: EMPTY_OBJ,
        setupContext: null,
        // suspense related
        suspense,
        suspenseId: suspense ? suspense.pendingId : 0,
        asyncDep: null,
        asyncResolved: false,
        // lifecycle hooks
        // not using enums here because it results in computed properties
        isMounted: false,
        isUnmounted: false,
        isDeactivated: false,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
      };
      {
        instance.ctx = { _: instance };
      }
      instance.root = parent2 ? parent2.root : instance;
      instance.emit = emit.bind(null, instance);
      if (vnode.ce) {
        vnode.ce(instance);
      }
      return instance;
    }
    let currentInstance = null;
    const getCurrentInstance = () => currentInstance || currentRenderingInstance;
    const setCurrentInstance = (instance) => {
      currentInstance = instance;
      instance.scope.on();
    };
    const unsetCurrentInstance = () => {
      currentInstance && currentInstance.scope.off();
      currentInstance = null;
    };
    function isStatefulComponent(instance) {
      return instance.vnode.shapeFlag & 4;
    }
    let isInSSRComponentSetup = false;
    function setupComponent(instance, isSSR = false) {
      isInSSRComponentSetup = isSSR;
      const { props: props2, children } = instance.vnode;
      const isStateful = isStatefulComponent(instance);
      initProps(instance, props2, isStateful, isSSR);
      initSlots(instance, children);
      const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
      isInSSRComponentSetup = false;
      return setupResult;
    }
    function setupStatefulComponent(instance, isSSR) {
      const Component = instance.type;
      instance.accessCache = /* @__PURE__ */ Object.create(null);
      instance.proxy = markRaw(new Proxy(instance.ctx, PublicInstanceProxyHandlers));
      const { setup } = Component;
      if (setup) {
        const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
        setCurrentInstance(instance);
        pauseTracking();
        const setupResult = callWithErrorHandling(setup, instance, 0, [instance.props, setupContext]);
        resetTracking();
        unsetCurrentInstance();
        if (isPromise(setupResult)) {
          setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
          if (isSSR) {
            return setupResult.then((resolvedResult) => {
              handleSetupResult(instance, resolvedResult, isSSR);
            }).catch((e) => {
              handleError(
                e,
                instance,
                0
                /* ErrorCodes.SETUP_FUNCTION */
              );
            });
          } else {
            instance.asyncDep = setupResult;
          }
        } else {
          handleSetupResult(instance, setupResult, isSSR);
        }
      } else {
        finishComponentSetup(instance, isSSR);
      }
    }
    function handleSetupResult(instance, setupResult, isSSR) {
      if (isFunction(setupResult)) {
        if (instance.type.__ssrInlineRender) {
          instance.ssrRender = setupResult;
        } else {
          instance.render = setupResult;
        }
      } else if (isObject(setupResult)) {
        instance.setupState = proxyRefs(setupResult);
      } else
        ;
      finishComponentSetup(instance, isSSR);
    }
    let compile;
    function finishComponentSetup(instance, isSSR, skipOptions) {
      const Component = instance.type;
      if (!instance.render) {
        if (!isSSR && compile && !Component.render) {
          const template = Component.template || resolveMergedOptions(instance).template;
          if (template) {
            const { isCustomElement, compilerOptions } = instance.appContext.config;
            const { delimiters, compilerOptions: componentCompilerOptions } = Component;
            const finalCompilerOptions = extend(extend({
              isCustomElement,
              delimiters
            }, compilerOptions), componentCompilerOptions);
            Component.render = compile(template, finalCompilerOptions);
          }
        }
        instance.render = Component.render || NOOP;
      }
      {
        setCurrentInstance(instance);
        pauseTracking();
        applyOptions(instance);
        resetTracking();
        unsetCurrentInstance();
      }
    }
    function createAttrsProxy(instance) {
      return new Proxy(instance.attrs, {
        get(target, key2) {
          track(instance, "get", "$attrs");
          return target[key2];
        }
      });
    }
    function createSetupContext(instance) {
      const expose = (exposed) => {
        instance.exposed = exposed || {};
      };
      let attrs;
      {
        return {
          get attrs() {
            return attrs || (attrs = createAttrsProxy(instance));
          },
          slots: instance.slots,
          emit: instance.emit,
          expose
        };
      }
    }
    function getExposeProxy(instance) {
      if (instance.exposed) {
        return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
          get(target, key2) {
            if (key2 in target) {
              return target[key2];
            } else if (key2 in publicPropertiesMap) {
              return publicPropertiesMap[key2](instance);
            }
          },
          has(target, key2) {
            return key2 in target || key2 in publicPropertiesMap;
          }
        }));
      }
    }
    function isClassComponent(value2) {
      return isFunction(value2) && "__vccOpts" in value2;
    }
    const computed = (getterOrOptions, debugOptions) => {
      return computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
    };
    const ssrContextKey = Symbol(``);
    const useSSRContext = () => {
      {
        const ctx = inject(ssrContextKey);
        return ctx;
      }
    };
    const version = "3.2.47";
    const svgNS = "http://www.w3.org/2000/svg";
    const doc = typeof document !== "undefined" ? document : null;
    const templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
    const nodeOps = {
      insert: (child, parent2, anchor) => {
        parent2.insertBefore(child, anchor || null);
      },
      remove: (child) => {
        const parent2 = child.parentNode;
        if (parent2) {
          parent2.removeChild(child);
        }
      },
      createElement: (tag, isSVG, is, props2) => {
        const el = isSVG ? doc.createElementNS(svgNS, tag) : doc.createElement(tag, is ? { is } : void 0);
        if (tag === "select" && props2 && props2.multiple != null) {
          el.setAttribute("multiple", props2.multiple);
        }
        return el;
      },
      createText: (text2) => doc.createTextNode(text2),
      createComment: (text2) => doc.createComment(text2),
      setText: (node, text2) => {
        node.nodeValue = text2;
      },
      setElementText: (el, text2) => {
        el.textContent = text2;
      },
      parentNode: (node) => node.parentNode,
      nextSibling: (node) => node.nextSibling,
      querySelector: (selector) => doc.querySelector(selector),
      setScopeId(el, id) {
        el.setAttribute(id, "");
      },
      // __UNSAFE__
      // Reason: innerHTML.
      // Static content here can only come from compiled templates.
      // As long as the user only uses trusted templates, this is safe.
      insertStaticContent(content2, parent2, anchor, isSVG, start, end) {
        const before = anchor ? anchor.previousSibling : parent2.lastChild;
        if (start && (start === end || start.nextSibling)) {
          while (true) {
            parent2.insertBefore(start.cloneNode(true), anchor);
            if (start === end || !(start = start.nextSibling))
              break;
          }
        } else {
          templateContainer.innerHTML = isSVG ? `<svg>${content2}</svg>` : content2;
          const template = templateContainer.content;
          if (isSVG) {
            const wrapper = template.firstChild;
            while (wrapper.firstChild) {
              template.appendChild(wrapper.firstChild);
            }
            template.removeChild(wrapper);
          }
          parent2.insertBefore(template, anchor);
        }
        return [
          // first
          before ? before.nextSibling : parent2.firstChild,
          // last
          anchor ? anchor.previousSibling : parent2.lastChild
        ];
      }
    };
    function patchClass(el, value2, isSVG) {
      const transitionClasses = el._vtc;
      if (transitionClasses) {
        value2 = (value2 ? [value2, ...transitionClasses] : [...transitionClasses]).join(" ");
      }
      if (value2 == null) {
        el.removeAttribute("class");
      } else if (isSVG) {
        el.setAttribute("class", value2);
      } else {
        el.className = value2;
      }
    }
    function patchStyle(el, prev, next) {
      const style2 = el.style;
      const isCssString = isString(next);
      if (next && !isCssString) {
        if (prev && !isString(prev)) {
          for (const key2 in prev) {
            if (next[key2] == null) {
              setStyle(style2, key2, "");
            }
          }
        }
        for (const key2 in next) {
          setStyle(style2, key2, next[key2]);
        }
      } else {
        const currentDisplay = style2.display;
        if (isCssString) {
          if (prev !== next) {
            style2.cssText = next;
          }
        } else if (prev) {
          el.removeAttribute("style");
        }
        if ("_vod" in el) {
          style2.display = currentDisplay;
        }
      }
    }
    const importantRE = /\s*!important$/;
    function setStyle(style2, name2, val2) {
      if (isArray(val2)) {
        val2.forEach((v) => setStyle(style2, name2, v));
      } else {
        if (val2 == null)
          val2 = "";
        if (name2.startsWith("--")) {
          style2.setProperty(name2, val2);
        } else {
          const prefixed = autoPrefix(style2, name2);
          if (importantRE.test(val2)) {
            style2.setProperty(hyphenate(prefixed), val2.replace(importantRE, ""), "important");
          } else {
            style2[prefixed] = val2;
          }
        }
      }
    }
    const prefixes = ["Webkit", "Moz", "ms"];
    const prefixCache = {};
    function autoPrefix(style2, rawName) {
      const cached = prefixCache[rawName];
      if (cached) {
        return cached;
      }
      let name2 = camelize(rawName);
      if (name2 !== "filter" && name2 in style2) {
        return prefixCache[rawName] = name2;
      }
      name2 = capitalize(name2);
      for (let i = 0; i < prefixes.length; i++) {
        const prefixed = prefixes[i] + name2;
        if (prefixed in style2) {
          return prefixCache[rawName] = prefixed;
        }
      }
      return rawName;
    }
    const xlinkNS = "http://www.w3.org/1999/xlink";
    function patchAttr(el, key2, value2, isSVG, instance) {
      if (isSVG && key2.startsWith("xlink:")) {
        if (value2 == null) {
          el.removeAttributeNS(xlinkNS, key2.slice(6, key2.length));
        } else {
          el.setAttributeNS(xlinkNS, key2, value2);
        }
      } else {
        const isBoolean = isSpecialBooleanAttr(key2);
        if (value2 == null || isBoolean && !includeBooleanAttr(value2)) {
          el.removeAttribute(key2);
        } else {
          el.setAttribute(key2, isBoolean ? "" : value2);
        }
      }
    }
    function patchDOMProp(el, key2, value2, prevChildren, parentComponent, parentSuspense, unmountChildren) {
      if (key2 === "innerHTML" || key2 === "textContent") {
        if (prevChildren) {
          unmountChildren(prevChildren, parentComponent, parentSuspense);
        }
        el[key2] = value2 == null ? "" : value2;
        return;
      }
      if (key2 === "value" && el.tagName !== "PROGRESS" && // custom elements may use _value internally
      !el.tagName.includes("-")) {
        el._value = value2;
        const newValue = value2 == null ? "" : value2;
        if (el.value !== newValue || // #4956: always set for OPTION elements because its value falls back to
        // textContent if no value attribute is present. And setting .value for
        // OPTION has no side effect
        el.tagName === "OPTION") {
          el.value = newValue;
        }
        if (value2 == null) {
          el.removeAttribute(key2);
        }
        return;
      }
      let needRemove = false;
      if (value2 === "" || value2 == null) {
        const type = typeof el[key2];
        if (type === "boolean") {
          value2 = includeBooleanAttr(value2);
        } else if (value2 == null && type === "string") {
          value2 = "";
          needRemove = true;
        } else if (type === "number") {
          value2 = 0;
          needRemove = true;
        }
      }
      try {
        el[key2] = value2;
      } catch (e) {
      }
      needRemove && el.removeAttribute(key2);
    }
    function addEventListener(el, event, handler, options) {
      el.addEventListener(event, handler, options);
    }
    function removeEventListener(el, event, handler, options) {
      el.removeEventListener(event, handler, options);
    }
    function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
      const invokers = el._vei || (el._vei = {});
      const existingInvoker = invokers[rawName];
      if (nextValue && existingInvoker) {
        existingInvoker.value = nextValue;
      } else {
        const [name2, options] = parseName(rawName);
        if (nextValue) {
          const invoker = invokers[rawName] = createInvoker(nextValue, instance);
          addEventListener(el, name2, invoker, options);
        } else if (existingInvoker) {
          removeEventListener(el, name2, existingInvoker, options);
          invokers[rawName] = void 0;
        }
      }
    }
    const optionsModifierRE = /(?:Once|Passive|Capture)$/;
    function parseName(name2) {
      let options;
      if (optionsModifierRE.test(name2)) {
        options = {};
        let m;
        while (m = name2.match(optionsModifierRE)) {
          name2 = name2.slice(0, name2.length - m[0].length);
          options[m[0].toLowerCase()] = true;
        }
      }
      const event = name2[2] === ":" ? name2.slice(3) : hyphenate(name2.slice(2));
      return [event, options];
    }
    let cachedNow = 0;
    const p = /* @__PURE__ */ Promise.resolve();
    const getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
    function createInvoker(initialValue, instance) {
      const invoker = (e) => {
        if (!e._vts) {
          e._vts = Date.now();
        } else if (e._vts <= invoker.attached) {
          return;
        }
        callWithAsyncErrorHandling(patchStopImmediatePropagation(e, invoker.value), instance, 5, [e]);
      };
      invoker.value = initialValue;
      invoker.attached = getNow();
      return invoker;
    }
    function patchStopImmediatePropagation(e, value2) {
      if (isArray(value2)) {
        const originalStop = e.stopImmediatePropagation;
        e.stopImmediatePropagation = () => {
          originalStop.call(e);
          e._stopped = true;
        };
        return value2.map((fn) => (e2) => !e2._stopped && fn && fn(e2));
      } else {
        return value2;
      }
    }
    const nativeOnRE = /^on[a-z]/;
    const patchProp = (el, key2, prevValue, nextValue, isSVG = false, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
      if (key2 === "class") {
        patchClass(el, nextValue, isSVG);
      } else if (key2 === "style") {
        patchStyle(el, prevValue, nextValue);
      } else if (isOn(key2)) {
        if (!isModelListener(key2)) {
          patchEvent(el, key2, prevValue, nextValue, parentComponent);
        }
      } else if (key2[0] === "." ? (key2 = key2.slice(1), true) : key2[0] === "^" ? (key2 = key2.slice(1), false) : shouldSetAsProp(el, key2, nextValue, isSVG)) {
        patchDOMProp(el, key2, nextValue, prevChildren, parentComponent, parentSuspense, unmountChildren);
      } else {
        if (key2 === "true-value") {
          el._trueValue = nextValue;
        } else if (key2 === "false-value") {
          el._falseValue = nextValue;
        }
        patchAttr(el, key2, nextValue, isSVG);
      }
    };
    function shouldSetAsProp(el, key2, value2, isSVG) {
      if (isSVG) {
        if (key2 === "innerHTML" || key2 === "textContent") {
          return true;
        }
        if (key2 in el && nativeOnRE.test(key2) && isFunction(value2)) {
          return true;
        }
        return false;
      }
      if (key2 === "spellcheck" || key2 === "draggable" || key2 === "translate") {
        return false;
      }
      if (key2 === "form") {
        return false;
      }
      if (key2 === "list" && el.tagName === "INPUT") {
        return false;
      }
      if (key2 === "type" && el.tagName === "TEXTAREA") {
        return false;
      }
      if (nativeOnRE.test(key2) && isString(value2)) {
        return false;
      }
      return key2 in el;
    }
    const DOMTransitionPropsValidators = {
      name: String,
      type: String,
      css: {
        type: Boolean,
        default: true
      },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String
    };
    /* @__PURE__ */ extend({}, BaseTransition.props, DOMTransitionPropsValidators);
    const rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
    let renderer;
    function ensureRenderer() {
      return renderer || (renderer = createRenderer(rendererOptions));
    }
    const createApp = (...args) => {
      const app = ensureRenderer().createApp(...args);
      const { mount } = app;
      app.mount = (containerOrSelector) => {
        const container = normalizeContainer(containerOrSelector);
        if (!container)
          return;
        const component = app._component;
        if (!isFunction(component) && !component.render && !component.template) {
          component.template = container.innerHTML;
        }
        container.innerHTML = "";
        const proxy = mount(container, false, container instanceof SVGElement);
        if (container instanceof Element) {
          container.removeAttribute("v-cloak");
          container.setAttribute("data-v-app", "");
        }
        return proxy;
      };
      return app;
    };
    function normalizeContainer(container) {
      if (isString(container)) {
        const res = document.querySelector(container);
        return res;
      }
      return container;
    }
    const style = "";
    const _hoisted_1$1 = ["id"];
    const _sfc_main$1 = {
      __name: "SunAnimation",
      props: {
        targetId: {
          type: String,
          default: "sunAnimation"
        }
      },
      setup(__props) {
        const props = __props;
        const startAnimation = () => {
          "undefined" != typeof navigator && function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lottie = e();
          }(this, function() {
            var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = false, initialDefaultFrame = -999999, setWebWorker = function(t) {
              _useWebWorker = !!t;
            }, getWebWorker = function() {
              return _useWebWorker;
            }, setLocationHref = function(t) {
              locationHref = t;
            }, getLocationHref = function() {
              return locationHref;
            };
            function createTag(t) {
              return document.createElement(t);
            }
            function extendPrototype(t, e) {
              var r, i, s = t.length;
              for (r = 0; r < s; r += 1)
                for (var a in i = t[r].prototype)
                  Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a]);
            }
            function getDescriptor(t, e) {
              return Object.getOwnPropertyDescriptor(t, e);
            }
            function createProxyFunction(t) {
              function e() {
              }
              return e.prototype = t, e;
            }
            var audioControllerFactory = function() {
              function t(t2) {
                this.audios = [], this.audioFactory = t2, this._volume = 1, this._isMuted = false;
              }
              return t.prototype = {
                addAudio: function(t2) {
                  this.audios.push(t2);
                },
                pause: function() {
                  var t2, e = this.audios.length;
                  for (t2 = 0; t2 < e; t2 += 1)
                    this.audios[t2].pause();
                },
                resume: function() {
                  var t2, e = this.audios.length;
                  for (t2 = 0; t2 < e; t2 += 1)
                    this.audios[t2].resume();
                },
                setRate: function(t2) {
                  var e, r = this.audios.length;
                  for (e = 0; e < r; e += 1)
                    this.audios[e].setRate(t2);
                },
                createAudio: function(t2) {
                  return this.audioFactory ? this.audioFactory(t2) : window.Howl ? new window.Howl({ src: [t2] }) : {
                    isPlaying: false,
                    play: function() {
                      this.isPlaying = true;
                    },
                    seek: function() {
                      this.isPlaying = false;
                    },
                    playing: function() {
                    },
                    rate: function() {
                    },
                    setVolume: function() {
                    }
                  };
                },
                setAudioFactory: function(t2) {
                  this.audioFactory = t2;
                },
                setVolume: function(t2) {
                  this._volume = t2, this._updateVolume();
                },
                mute: function() {
                  this._isMuted = true, this._updateVolume();
                },
                unmute: function() {
                  this._isMuted = false, this._updateVolume();
                },
                getVolume: function() {
                  return this._volume;
                },
                _updateVolume: function() {
                  var t2, e = this.audios.length;
                  for (t2 = 0; t2 < e; t2 += 1)
                    this.audios[t2].volume(this._volume * (this._isMuted ? 0 : 1));
                }
              }, function() {
                return new t();
              };
            }(), createTypedArray = function() {
              function t(t2, e) {
                var r, i = 0, s = [];
                switch (t2) {
                  case "int16":
                  case "uint8c":
                    r = 1;
                    break;
                  default:
                    r = 1.1;
                }
                for (i = 0; i < e; i += 1)
                  s.push(r);
                return s;
              }
              return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
                return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r);
              } : t;
            }();
            function createSizedArray(t) {
              return Array.apply(null, { length: t });
            }
            function _typeof$6(t) {
              return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$6(t);
            }
            var subframeEnabled = true, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
            !function() {
              var t, e = [
                "abs",
                "acos",
                "acosh",
                "asin",
                "asinh",
                "atan",
                "atanh",
                "atan2",
                "ceil",
                "cbrt",
                "expm1",
                "clz32",
                "cos",
                "cosh",
                "exp",
                "floor",
                "fround",
                "hypot",
                "imul",
                "log",
                "log1p",
                "log2",
                "log10",
                "max",
                "min",
                "pow",
                "random",
                "round",
                "sign",
                "sin",
                "sinh",
                "sqrt",
                "tan",
                "tanh",
                "trunc",
                "E",
                "LN10",
                "LN2",
                "LOG10E",
                "LOG2E",
                "PI",
                "SQRT1_2",
                "SQRT2"
              ], r = e.length;
              for (t = 0; t < r; t += 1)
                BMMath[e[t]] = Math[e[t]];
            }(), BMMath.random = Math.random, BMMath.abs = function(t) {
              if ("object" === _typeof$6(t) && t.length) {
                var e, r = createSizedArray(t.length), i = t.length;
                for (e = 0; e < i; e += 1)
                  r[e] = Math.abs(t[e]);
                return r;
              }
              return Math.abs(t);
            };
            var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
            function styleDiv(t) {
              t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
            }
            function BMEnterFrameEvent(t, e, r, i) {
              this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
            }
            function BMCompleteEvent(t, e) {
              this.type = t, this.direction = e < 0 ? -1 : 1;
            }
            function BMCompleteLoopEvent(t, e, r, i) {
              this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
            }
            function BMSegmentStartEvent(t, e, r) {
              this.type = t, this.firstFrame = e, this.totalFrames = r;
            }
            function BMDestroyEvent(t, e) {
              this.type = t, this.target = e;
            }
            function BMRenderFrameErrorEvent(t, e) {
              this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
            }
            function BMConfigErrorEvent(t) {
              this.type = "configError", this.nativeError = t;
            }
            var createElementID = (_count = 0, function() {
              return idPrefix$1 + "__lottie_element_" + (_count += 1);
            }), _count;
            function HSVtoRGB(t, e, r) {
              var i, s, a, n, o, h, l, p2;
              switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p2 = r * (1 - (1 - o) * e), n % 6) {
                case 0:
                  i = r, s = p2, a = h;
                  break;
                case 1:
                  i = l, s = r, a = h;
                  break;
                case 2:
                  i = h, s = r, a = p2;
                  break;
                case 3:
                  i = h, s = l, a = r;
                  break;
                case 4:
                  i = p2, s = h, a = r;
                  break;
                case 5:
                  i = r, s = h, a = l;
              }
              return [i, s, a];
            }
            function RGBtoHSV(t, e, r) {
              var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
              switch (s) {
                case a:
                  i = 0;
                  break;
                case t:
                  i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
                  break;
                case e:
                  i = r - t + 2 * n, i /= 6 * n;
                  break;
                case r:
                  i = t - e + 4 * n, i /= 6 * n;
              }
              return [i, o, h];
            }
            function addSaturationToRGB(t, e) {
              var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
            }
            function addBrightnessToRGB(t, e) {
              var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
            }
            function addHueToRGB(t, e) {
              var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
              return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
            }
            var rgbToHex = function() {
              var t, e, r = [];
              for (t = 0; t < 256; t += 1)
                e = t.toString(16), r[t] = 1 === e.length ? "0" + e : e;
              return function(t2, e2, i) {
                return t2 < 0 && (t2 = 0), e2 < 0 && (e2 = 0), i < 0 && (i = 0), "#" + r[t2] + r[e2] + r[i];
              };
            }(), setSubframeEnabled = function(t) {
              subframeEnabled = !!t;
            }, getSubframeEnabled = function() {
              return subframeEnabled;
            }, setExpressionsPlugin = function(t) {
              expressionsPlugin = t;
            }, getExpressionsPlugin = function() {
              return expressionsPlugin;
            }, setExpressionInterfaces = function(t) {
              expressionsInterfaces = t;
            }, getExpressionInterfaces = function() {
              return expressionsInterfaces;
            }, setDefaultCurveSegments = function(t) {
              defaultCurveSegments = t;
            }, getDefaultCurveSegments = function() {
              return defaultCurveSegments;
            }, setIdPrefix = function(t) {
              idPrefix$1 = t;
            };
            function createNS(t) {
              return document.createElementNS(svgNS, t);
            }
            function _typeof$5(t) {
              return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$5(t);
            }
            var dataManager = function() {
              var t, e, r = 1, i = [], s = {
                onmessage: function() {
                },
                postMessage: function(e2) {
                  t({ data: e2 });
                }
              }, a = {
                postMessage: function(t2) {
                  s.onmessage({ data: t2 });
                }
              };
              function n() {
                e || (e = function(e2) {
                  if (window.Worker && window.Blob && getWebWorker()) {
                    var r2 = new Blob(["var _workerSelf = self; self.onmessage = ", e2.toString()], {
                      type: "text/javascript"
                    }), i2 = URL.createObjectURL(r2);
                    return new Worker(i2);
                  }
                  return t = e2, s;
                }(function(t2) {
                  if (a.dataManager || (a.dataManager = function() {
                    function t3(s3, a3) {
                      var n3, o3, h2, l2, p3, m2, c = s3.length;
                      for (o3 = 0; o3 < c; o3 += 1)
                        if ("ks" in (n3 = s3[o3]) && !n3.completed) {
                          if (n3.completed = true, n3.hasMask) {
                            var d = n3.masksProperties;
                            for (l2 = d.length, h2 = 0; h2 < l2; h2 += 1)
                              if (d[h2].pt.k.i)
                                i2(d[h2].pt.k);
                              else
                                for (m2 = d[h2].pt.k.length, p3 = 0; p3 < m2; p3 += 1)
                                  d[h2].pt.k[p3].s && i2(d[h2].pt.k[p3].s[0]), d[h2].pt.k[p3].e && i2(d[h2].pt.k[p3].e[0]);
                          }
                          0 === n3.ty ? (n3.layers = e3(n3.refId, a3), t3(n3.layers, a3)) : 4 === n3.ty ? r2(n3.shapes) : 5 === n3.ty && f(n3);
                        }
                    }
                    function e3(t4, e4) {
                      var r3 = function(t5, e5) {
                        for (var r4 = 0, i3 = e5.length; r4 < i3; ) {
                          if (e5[r4].id === t5)
                            return e5[r4];
                          r4 += 1;
                        }
                        return null;
                      }(t4, e4);
                      return r3 ? r3.layers.__used ? JSON.parse(JSON.stringify(r3.layers)) : (r3.layers.__used = true, r3.layers) : null;
                    }
                    function r2(t4) {
                      var e4, s3, a3;
                      for (e4 = t4.length - 1; e4 >= 0; e4 -= 1)
                        if ("sh" === t4[e4].ty)
                          if (t4[e4].ks.k.i)
                            i2(t4[e4].ks.k);
                          else
                            for (a3 = t4[e4].ks.k.length, s3 = 0; s3 < a3; s3 += 1)
                              t4[e4].ks.k[s3].s && i2(t4[e4].ks.k[s3].s[0]), t4[e4].ks.k[s3].e && i2(t4[e4].ks.k[s3].e[0]);
                        else
                          "gr" === t4[e4].ty && r2(t4[e4].it);
                    }
                    function i2(t4) {
                      var e4, r3 = t4.i.length;
                      for (e4 = 0; e4 < r3; e4 += 1)
                        t4.i[e4][0] += t4.v[e4][0], t4.i[e4][1] += t4.v[e4][1], t4.o[e4][0] += t4.v[e4][0], t4.o[e4][1] += t4.v[e4][1];
                    }
                    function s2(t4, e4) {
                      var r3 = e4 ? e4.split(".") : [100, 100, 100];
                      return t4[0] > r3[0] || !(r3[0] > t4[0]) && (t4[1] > r3[1] || !(r3[1] > t4[1]) && (t4[2] > r3[2] || !(r3[2] > t4[2]) && null));
                    }
                    var a2, n2 = function() {
                      var t4 = [4, 4, 14];
                      function e4(t5) {
                        var e5, r3, i3, s3 = t5.length;
                        for (e5 = 0; e5 < s3; e5 += 1)
                          5 === t5[e5].ty && (i3 = void 0, i3 = (r3 = t5[e5]).t.d, r3.t.d = { k: [{ s: i3, t: 0 }] });
                      }
                      return function(r3) {
                        if (s2(t4, r3.v) && (e4(r3.layers), r3.assets)) {
                          var i3, a3 = r3.assets.length;
                          for (i3 = 0; i3 < a3; i3 += 1)
                            r3.assets[i3].layers && e4(r3.assets[i3].layers);
                        }
                      };
                    }(), o2 = (a2 = [4, 7, 99], function(t4) {
                      if (t4.chars && !s2(a2, t4.v)) {
                        var e4, i3 = t4.chars.length;
                        for (e4 = 0; e4 < i3; e4 += 1) {
                          var n3 = t4.chars[e4];
                          n3.data && n3.data.shapes && (r2(n3.data.shapes), n3.data.ip = 0, n3.data.op = 99999, n3.data.st = 0, n3.data.sr = 1, n3.data.ks = {
                            p: { k: [0, 0], a: 0 },
                            s: { k: [100, 100], a: 0 },
                            a: { k: [0, 0], a: 0 },
                            r: { k: 0, a: 0 },
                            o: { k: 100, a: 0 }
                          }, t4.chars[e4].t || (n3.data.shapes.push({ ty: "no" }), n3.data.shapes[0].it.push({
                            p: { k: [0, 0], a: 0 },
                            s: { k: [100, 100], a: 0 },
                            a: { k: [0, 0], a: 0 },
                            r: { k: 0, a: 0 },
                            o: { k: 100, a: 0 },
                            sk: { k: 0, a: 0 },
                            sa: { k: 0, a: 0 },
                            ty: "tr"
                          })));
                        }
                      }
                    }), h = function() {
                      var t4 = [5, 7, 15];
                      function e4(t5) {
                        var e5, r3, i3 = t5.length;
                        for (e5 = 0; e5 < i3; e5 += 1)
                          5 === t5[e5].ty && (r3 = void 0, "number" == typeof (r3 = t5[e5].t.p).a && (r3.a = { a: 0, k: r3.a }), "number" == typeof r3.p && (r3.p = { a: 0, k: r3.p }), "number" == typeof r3.r && (r3.r = { a: 0, k: r3.r }));
                      }
                      return function(r3) {
                        if (s2(t4, r3.v) && (e4(r3.layers), r3.assets)) {
                          var i3, a3 = r3.assets.length;
                          for (i3 = 0; i3 < a3; i3 += 1)
                            r3.assets[i3].layers && e4(r3.assets[i3].layers);
                        }
                      };
                    }(), l = function() {
                      var t4 = [4, 1, 9];
                      function e4(t5) {
                        var r4, i3, s3, a3 = t5.length;
                        for (r4 = 0; r4 < a3; r4 += 1)
                          if ("gr" === t5[r4].ty)
                            e4(t5[r4].it);
                          else if ("fl" === t5[r4].ty || "st" === t5[r4].ty)
                            if (t5[r4].c.k && t5[r4].c.k[0].i)
                              for (s3 = t5[r4].c.k.length, i3 = 0; i3 < s3; i3 += 1)
                                t5[r4].c.k[i3].s && (t5[r4].c.k[i3].s[0] /= 255, t5[r4].c.k[i3].s[1] /= 255, t5[r4].c.k[i3].s[2] /= 255, t5[r4].c.k[i3].s[3] /= 255), t5[r4].c.k[i3].e && (t5[r4].c.k[i3].e[0] /= 255, t5[r4].c.k[i3].e[1] /= 255, t5[r4].c.k[i3].e[2] /= 255, t5[r4].c.k[i3].e[3] /= 255);
                            else
                              t5[r4].c.k[0] /= 255, t5[r4].c.k[1] /= 255, t5[r4].c.k[2] /= 255, t5[r4].c.k[3] /= 255;
                      }
                      function r3(t5) {
                        var r4, i3 = t5.length;
                        for (r4 = 0; r4 < i3; r4 += 1)
                          4 === t5[r4].ty && e4(t5[r4].shapes);
                      }
                      return function(e5) {
                        if (s2(t4, e5.v) && (r3(e5.layers), e5.assets)) {
                          var i3, a3 = e5.assets.length;
                          for (i3 = 0; i3 < a3; i3 += 1)
                            e5.assets[i3].layers && r3(e5.assets[i3].layers);
                        }
                      };
                    }(), p2 = function() {
                      var t4 = [4, 4, 18];
                      function e4(t5) {
                        var r4, i3, s3;
                        for (r4 = t5.length - 1; r4 >= 0; r4 -= 1)
                          if ("sh" === t5[r4].ty)
                            if (t5[r4].ks.k.i)
                              t5[r4].ks.k.c = t5[r4].closed;
                            else
                              for (s3 = t5[r4].ks.k.length, i3 = 0; i3 < s3; i3 += 1)
                                t5[r4].ks.k[i3].s && (t5[r4].ks.k[i3].s[0].c = t5[r4].closed), t5[r4].ks.k[i3].e && (t5[r4].ks.k[i3].e[0].c = t5[r4].closed);
                          else
                            "gr" === t5[r4].ty && e4(t5[r4].it);
                      }
                      function r3(t5) {
                        var r4, i3, s3, a3, n3, o3, h2 = t5.length;
                        for (i3 = 0; i3 < h2; i3 += 1) {
                          if ((r4 = t5[i3]).hasMask) {
                            var l2 = r4.masksProperties;
                            for (a3 = l2.length, s3 = 0; s3 < a3; s3 += 1)
                              if (l2[s3].pt.k.i)
                                l2[s3].pt.k.c = l2[s3].cl;
                              else
                                for (o3 = l2[s3].pt.k.length, n3 = 0; n3 < o3; n3 += 1)
                                  l2[s3].pt.k[n3].s && (l2[s3].pt.k[n3].s[0].c = l2[s3].cl), l2[s3].pt.k[n3].e && (l2[s3].pt.k[n3].e[0].c = l2[s3].cl);
                          }
                          4 === r4.ty && e4(r4.shapes);
                        }
                      }
                      return function(e5) {
                        if (s2(t4, e5.v) && (r3(e5.layers), e5.assets)) {
                          var i3, a3 = e5.assets.length;
                          for (i3 = 0; i3 < a3; i3 += 1)
                            e5.assets[i3].layers && r3(e5.assets[i3].layers);
                        }
                      };
                    }();
                    function f(t4) {
                      0 === t4.t.a.length && t4.t.p;
                    }
                    var m = {
                      completeData: function(r3) {
                        r3.__complete || (l(r3), n2(r3), o2(r3), h(r3), p2(r3), t3(r3.layers, r3.assets), function(r4, i3) {
                          if (r4) {
                            var s3 = 0, a3 = r4.length;
                            for (s3 = 0; s3 < a3; s3 += 1)
                              1 === r4[s3].t && (r4[s3].data.layers = e3(r4[s3].data.refId, i3), t3(r4[s3].data.layers, i3));
                          }
                        }(r3.chars, r3.assets), r3.__complete = true);
                      }
                    };
                    return m.checkColors = l, m.checkChars = o2, m.checkPathProperties = h, m.checkShapes = p2, m.completeLayers = t3, m;
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function t3(t4) {
                      var e3 = t4.getResponseHeader("content-type");
                      return e3 && "json" === t4.responseType && -1 !== e3.indexOf("json") || t4.response && "object" === _typeof$5(t4.response) ? t4.response : t4.response && "string" == typeof t4.response ? JSON.parse(t4.response) : t4.responseText ? JSON.parse(t4.responseText) : null;
                    }
                    return {
                      load: function(e3, r2, i2, s2) {
                        var a2, n2 = new XMLHttpRequest();
                        try {
                          n2.responseType = "json";
                        } catch (t4) {
                        }
                        n2.onreadystatechange = function() {
                          if (4 === n2.readyState)
                            if (200 === n2.status)
                              a2 = t3(n2), i2(a2);
                            else
                              try {
                                a2 = t3(n2), i2(a2);
                              } catch (t4) {
                                s2 && s2(t4);
                              }
                        };
                        try {
                          n2.open(["G", "E", "T"].join(""), e3, true);
                        } catch (t4) {
                          n2.open(["G", "E", "T"].join(""), r2 + "/" + e3, true);
                        }
                        n2.send();
                      }
                    };
                  }()), "loadAnimation" === t2.data.type)
                    a.assetLoader.load(
                      t2.data.path,
                      t2.data.fullPath,
                      function(e3) {
                        a.dataManager.completeData(e3), a.postMessage({ id: t2.data.id, payload: e3, status: "success" });
                      },
                      function() {
                        a.postMessage({ id: t2.data.id, status: "error" });
                      }
                    );
                  else if ("complete" === t2.data.type) {
                    var e2 = t2.data.animation;
                    a.dataManager.completeData(e2), a.postMessage({ id: t2.data.id, payload: e2, status: "success" });
                  } else
                    "loadData" === t2.data.type && a.assetLoader.load(
                      t2.data.path,
                      t2.data.fullPath,
                      function(e3) {
                        a.postMessage({ id: t2.data.id, payload: e3, status: "success" });
                      },
                      function() {
                        a.postMessage({ id: t2.data.id, status: "error" });
                      }
                    );
                }), e.onmessage = function(t2) {
                  var e2 = t2.data, r2 = e2.id, s2 = i[r2];
                  i[r2] = null, "success" === e2.status ? s2.onComplete(e2.payload) : s2.onError && s2.onError();
                });
              }
              function o(t2, e2) {
                var s2 = "processId_" + (r += 1);
                return i[s2] = { onComplete: t2, onError: e2 }, s2;
              }
              return {
                loadAnimation: function(t2, r2, i2) {
                  n();
                  var s2 = o(r2, i2);
                  e.postMessage({
                    type: "loadAnimation",
                    path: t2,
                    fullPath: window.location.origin + window.location.pathname,
                    id: s2
                  });
                },
                loadData: function(t2, r2, i2) {
                  n();
                  var s2 = o(r2, i2);
                  e.postMessage({
                    type: "loadData",
                    path: t2,
                    fullPath: window.location.origin + window.location.pathname,
                    id: s2
                  });
                },
                completeAnimation: function(t2, r2, i2) {
                  n();
                  var s2 = o(r2, i2);
                  e.postMessage({ type: "complete", animation: t2, id: s2 });
                }
              };
            }(), ImagePreloader = function() {
              var t = function() {
                var t2 = createTag("canvas");
                t2.width = 1, t2.height = 1;
                var e2 = t2.getContext("2d");
                return e2.fillStyle = "rgba(0,0,0,0)", e2.fillRect(0, 0, 1, 1), t2;
              }();
              function e() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
              }
              function r() {
                this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
              }
              function i(t2, e2, r2) {
                var i2 = "";
                if (t2.e)
                  i2 = t2.p;
                else if (e2) {
                  var s2 = t2.p;
                  -1 !== s2.indexOf("images/") && (s2 = s2.split("/")[1]), i2 = e2 + s2;
                } else
                  i2 = r2, i2 += t2.u ? t2.u : "", i2 += t2.p;
                return i2;
              }
              function s(t2) {
                var e2 = 0, r2 = setInterval(
                  function() {
                    (t2.getBBox().width || e2 > 500) && (this._imageLoaded(), clearInterval(r2)), e2 += 1;
                  }.bind(this),
                  50
                );
              }
              function a(t2) {
                var e2 = { assetData: t2 }, r2 = i(t2, this.assetsPath, this.path);
                return dataManager.loadData(
                  r2,
                  function(t3) {
                    e2.img = t3, this._footageLoaded();
                  }.bind(this),
                  function() {
                    e2.img = {}, this._footageLoaded();
                  }.bind(this)
                ), e2;
              }
              function n() {
                this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
              }
              return n.prototype = {
                loadAssets: function(t2, e2) {
                  var r2;
                  this.imagesLoadedCb = e2;
                  var i2 = t2.length;
                  for (r2 = 0; r2 < i2; r2 += 1)
                    t2[r2].layers || (t2[r2].t && "seq" !== t2[r2].t ? 3 === t2[r2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t2[r2]))) : (this.totalImages += 1, this.images.push(this._createImageData(t2[r2]))));
                },
                setAssetsPath: function(t2) {
                  this.assetsPath = t2 || "";
                },
                setPath: function(t2) {
                  this.path = t2 || "";
                },
                loadedImages: function() {
                  return this.totalImages === this.loadedAssets;
                },
                loadedFootages: function() {
                  return this.totalFootages === this.loadedFootagesCount;
                },
                destroy: function() {
                  this.imagesLoadedCb = null, this.images.length = 0;
                },
                getAsset: function(t2) {
                  for (var e2 = 0, r2 = this.images.length; e2 < r2; ) {
                    if (this.images[e2].assetData === t2)
                      return this.images[e2].img;
                    e2 += 1;
                  }
                  return null;
                },
                createImgData: function(e2) {
                  var r2 = i(e2, this.assetsPath, this.path), s2 = createTag("img");
                  s2.crossOrigin = "anonymous", s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener(
                    "error",
                    function() {
                      a2.img = t, this._imageLoaded();
                    }.bind(this),
                    false
                  ), s2.src = r2;
                  var a2 = { img: s2, assetData: e2 };
                  return a2;
                },
                createImageData: function(e2) {
                  var r2 = i(e2, this.assetsPath, this.path), s2 = createNS("image");
                  isSafari ? this.testImageLoaded(s2) : s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener(
                    "error",
                    function() {
                      a2.img = t, this._imageLoaded();
                    }.bind(this),
                    false
                  ), s2.setAttributeNS("http://www.w3.org/1999/xlink", "href", r2), this._elementHelper.append ? this._elementHelper.append(s2) : this._elementHelper.appendChild(s2);
                  var a2 = { img: s2, assetData: e2 };
                  return a2;
                },
                imageLoaded: e,
                footageLoaded: r,
                setCacheType: function(t2, e2) {
                  "svg" === t2 ? (this._elementHelper = e2, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
                }
              }, n;
            }();
            function BaseEvent() {
            }
            BaseEvent.prototype = {
              triggerEvent: function(t, e) {
                if (this._cbs[t])
                  for (var r = this._cbs[t], i = 0; i < r.length; i += 1)
                    r[i](e);
              },
              addEventListener: function(t, e) {
                return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), function() {
                  this.removeEventListener(t, e);
                }.bind(this);
              },
              removeEventListener: function(t, e) {
                if (e) {
                  if (this._cbs[t]) {
                    for (var r = 0, i = this._cbs[t].length; r < i; )
                      this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                    this._cbs[t].length || (this._cbs[t] = null);
                  }
                } else
                  this._cbs[t] = null;
              }
            };
            var markerParser = function() {
              function t(t2) {
                for (var e, r = t2.split("\r\n"), i = {}, s = 0, a = 0; a < r.length; a += 1)
                  2 === (e = r[a].split(":")).length && (i[e[0]] = e[1].trim(), s += 1);
                if (0 === s)
                  throw new Error();
                return i;
              }
              return function(e) {
                for (var r = [], i = 0; i < e.length; i += 1) {
                  var s = e[i], a = { time: s.tm, duration: s.dr };
                  try {
                    a.payload = JSON.parse(e[i].cm);
                  } catch (r2) {
                    try {
                      a.payload = t(e[i].cm);
                    } catch (t2) {
                      a.payload = { name: e[i].cm };
                    }
                  }
                  r.push(a);
                }
                return r;
              };
            }(), ProjectInterface = function() {
              function t(t2) {
                this.compositions.push(t2);
              }
              return function() {
                function e(t2) {
                  for (var e2 = 0, r = this.compositions.length; e2 < r; ) {
                    if (this.compositions[e2].data && this.compositions[e2].data.nm === t2)
                      return this.compositions[e2].prepareFrame && this.compositions[e2].data.xt && this.compositions[e2].prepareFrame(this.currentFrame), this.compositions[e2].compInterface;
                    e2 += 1;
                  }
                  return null;
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
              };
            }(), renderers = {}, registerRenderer = function(t, e) {
              renderers[t] = e;
            };
            function getRenderer(t) {
              return renderers[t];
            }
            function _typeof$4(t) {
              return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$4(t);
            }
            var AnimationItem = function() {
              this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0);
            };
            extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
              (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
              var e = "svg";
              t.animType ? e = t.animType : t.renderer && (e = t.renderer);
              var r = getRenderer(e);
              this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || true === t.loop ? this.loop = true : false === t.loop ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
            }, AnimationItem.prototype.onSetupError = function() {
              this.trigger("data_failed");
            }, AnimationItem.prototype.setupAnimation = function(t) {
              dataManager.completeAnimation(t, this.configAnimation);
            }, AnimationItem.prototype.setData = function(t, e) {
              e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
              var r = { wrapper: t, animationData: e }, i = t.attributes;
              r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
              var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
              "false" === s ? r.loop = false : "true" === s ? r.loop = true : "" !== s && (r.loop = parseInt(s, 10));
              var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
              r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = false), this.setParams(r);
            }, AnimationItem.prototype.includeLayers = function(t) {
              t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
              var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
              for (r = 0; r < n; r += 1)
                for (e = 0; e < s; ) {
                  if (i[e].id === a[r].id) {
                    i[e] = a[r];
                    break;
                  }
                  e += 1;
                }
              if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
                for (s = t.assets.length, e = 0; e < s; e += 1)
                  this.animationData.assets.push(t.assets[e]);
              this.animationData.__complete = false, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
            }, AnimationItem.prototype.onSegmentComplete = function(t) {
              this.animationData = t;
              var e = getExpressionsPlugin();
              e && e.initExpressions(this), this.loadNextSegment();
            }, AnimationItem.prototype.loadNextSegment = function() {
              var t = this.animationData.segments;
              if (!t || 0 === t.length || !this.autoloadSegments)
                return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
              var e = t.shift();
              this.timeCompleted = e.time * this.frameRate;
              var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
              this.segmentPos += 1, dataManager.loadData(
                r,
                this.includeLayers.bind(this),
                function() {
                  this.trigger("data_failed");
                }.bind(this)
              );
            }, AnimationItem.prototype.loadSegments = function() {
              this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
            }, AnimationItem.prototype.imagesLoaded = function() {
              this.trigger("loaded_images"), this.checkLoaded();
            }, AnimationItem.prototype.preloadImages = function() {
              this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
            }, AnimationItem.prototype.configAnimation = function(t) {
              if (this.renderer)
                try {
                  this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
                } catch (t2) {
                  this.triggerConfigError(t2);
                }
            }, AnimationItem.prototype.waitForFontsLoaded = function() {
              this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
            }, AnimationItem.prototype.checkLoaded = function() {
              if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
                this.isLoaded = true;
                var t = getExpressionsPlugin();
                t && t.initExpressions(this), this.renderer.initItems(), setTimeout(
                  function() {
                    this.trigger("DOMLoaded");
                  }.bind(this),
                  0
                ), this.gotoFrame(), this.autoplay && this.play();
              }
            }, AnimationItem.prototype.resize = function(t, e) {
              var r = "number" == typeof t ? t : void 0, i = "number" == typeof e ? e : void 0;
              this.renderer.updateContainerSize(r, i);
            }, AnimationItem.prototype.setSubframe = function(t) {
              this.isSubframeEnabled = !!t;
            }, AnimationItem.prototype.gotoFrame = function() {
              this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
            }, AnimationItem.prototype.renderFrame = function() {
              if (false !== this.isLoaded && this.renderer)
                try {
                  this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                } catch (t) {
                  this.triggerRenderFrameError(t);
                }
            }, AnimationItem.prototype.play = function(t) {
              t && this.name !== t || true === this.isPaused && (this.isPaused = false, this.trigger("_pause"), this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
            }, AnimationItem.prototype.pause = function(t) {
              t && this.name !== t || false === this.isPaused && (this.isPaused = true, this.trigger("_play"), this._idle = true, this.trigger("_idle"), this.audioController.pause());
            }, AnimationItem.prototype.togglePause = function(t) {
              t && this.name !== t || (true === this.isPaused ? this.play() : this.pause());
            }, AnimationItem.prototype.stop = function(t) {
              t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
            }, AnimationItem.prototype.getMarkerData = function(t) {
              for (var e, r = 0; r < this.markers.length; r += 1)
                if ((e = this.markers[r]).payload && e.payload.name === t)
                  return e;
              return null;
            }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
              if (!r || this.name === r) {
                var i = Number(t);
                if (isNaN(i)) {
                  var s = this.getMarkerData(t);
                  s && this.goToAndStop(s.time, true);
                } else
                  e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                this.pause();
              }
            }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
              if (!r || this.name === r) {
                var i = Number(t);
                if (isNaN(i)) {
                  var s = this.getMarkerData(t);
                  s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
                } else
                  this.goToAndStop(i, e, r);
                this.play();
              }
            }, AnimationItem.prototype.advanceTime = function(t) {
              if (true !== this.isPaused && false !== this.isLoaded) {
                var e = this.currentRawFrame + t * this.frameModifier, r = false;
                e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && true !== this.loop ? (r = true, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
              }
            }, AnimationItem.prototype.adjustSegment = function(t, e) {
              this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
            }, AnimationItem.prototype.setSegment = function(t, e) {
              var r = -1;
              this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, true);
            }, AnimationItem.prototype.playSegments = function(t, e) {
              if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                  this.segments.push(t[r]);
              } else
                this.segments.push(t);
              this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
            }, AnimationItem.prototype.resetSegments = function(t) {
              this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
            }, AnimationItem.prototype.checkSegments = function(t) {
              return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
            }, AnimationItem.prototype.destroy = function(t) {
              t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
            }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
              this.currentRawFrame = t, this.gotoFrame();
            }, AnimationItem.prototype.setSpeed = function(t) {
              this.playSpeed = t, this.updaFrameModifier();
            }, AnimationItem.prototype.setDirection = function(t) {
              this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
            }, AnimationItem.prototype.setLoop = function(t) {
              this.loop = t;
            }, AnimationItem.prototype.setVolume = function(t, e) {
              e && this.name !== e || this.audioController.setVolume(t);
            }, AnimationItem.prototype.getVolume = function() {
              return this.audioController.getVolume();
            }, AnimationItem.prototype.mute = function(t) {
              t && this.name !== t || this.audioController.mute();
            }, AnimationItem.prototype.unmute = function(t) {
              t && this.name !== t || this.audioController.unmute();
            }, AnimationItem.prototype.updaFrameModifier = function() {
              this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
            }, AnimationItem.prototype.getPath = function() {
              return this.path;
            }, AnimationItem.prototype.getAssetsPath = function(t) {
              var e = "";
              if (t.e)
                e = t.p;
              else if (this.assetsPath) {
                var r = t.p;
                -1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r;
              } else
                e = this.path, e += t.u ? t.u : "", e += t.p;
              return e;
            }, AnimationItem.prototype.getAssetData = function(t) {
              for (var e = 0, r = this.assets.length; e < r; ) {
                if (t === this.assets[e].id)
                  return this.assets[e];
                e += 1;
              }
              return null;
            }, AnimationItem.prototype.hide = function() {
              this.renderer.hide();
            }, AnimationItem.prototype.show = function() {
              this.renderer.show();
            }, AnimationItem.prototype.getDuration = function(t) {
              return t ? this.totalFrames : this.totalFrames / this.frameRate;
            }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
              try {
                this.renderer.getElementByPath(t).updateDocumentData(e, r);
              } catch (t2) {
              }
            }, AnimationItem.prototype.trigger = function(t) {
              if (this._cbs && this._cbs[t])
                switch (t) {
                  case "enterFrame":
                    this.triggerEvent(
                      t,
                      new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier)
                    );
                    break;
                  case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
                    break;
                  case "loopComplete":
                    this.triggerEvent(
                      t,
                      new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)
                    );
                    break;
                  case "complete":
                    this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                    break;
                  case "segmentStart":
                    this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                    break;
                  case "destroy":
                    this.triggerEvent(t, new BMDestroyEvent(t, this));
                    break;
                  default:
                    this.triggerEvent(t);
                }
              "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(
                this,
                new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)
              ), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(
                this,
                new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)
              ), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(
                this,
                new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)
              ), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
            }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
              var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
            }, AnimationItem.prototype.triggerConfigError = function(t) {
              var e = new BMConfigErrorEvent(t, this.currentFrame);
              this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
            };
            var animationManager = function() {
              var t = {}, e = [], r = 0, i = 0, s = 0, a = true, n = false;
              function o(t2) {
                for (var r2 = 0, s2 = t2.target; r2 < i; )
                  e[r2].animation === s2 && (e.splice(r2, 1), r2 -= 1, i -= 1, s2.isPaused || p2()), r2 += 1;
              }
              function h(t2, r2) {
                if (!t2)
                  return null;
                for (var s2 = 0; s2 < i; ) {
                  if (e[s2].elem === t2 && null !== e[s2].elem)
                    return e[s2].animation;
                  s2 += 1;
                }
                var a2 = new AnimationItem();
                return f(a2, t2), a2.setData(t2, r2), a2;
              }
              function l() {
                s += 1, d();
              }
              function p2() {
                s -= 1;
              }
              function f(t2, r2) {
                t2.addEventListener("destroy", o), t2.addEventListener("_active", l), t2.addEventListener("_idle", p2), e.push({ elem: r2, animation: t2 }), i += 1;
              }
              function m(t2) {
                var o2, h2 = t2 - r;
                for (o2 = 0; o2 < i; o2 += 1)
                  e[o2].animation.advanceTime(h2);
                r = t2, s && !n ? window.requestAnimationFrame(m) : a = true;
              }
              function c(t2) {
                r = t2, window.requestAnimationFrame(m);
              }
              function d() {
                !n && s && a && (window.requestAnimationFrame(c), a = false);
              }
              return t.registerAnimation = h, t.loadAnimation = function(t2) {
                var e2 = new AnimationItem();
                return f(e2, null), e2.setParams(t2), e2;
              }, t.setSpeed = function(t2, r2) {
                var s2;
                for (s2 = 0; s2 < i; s2 += 1)
                  e[s2].animation.setSpeed(t2, r2);
              }, t.setDirection = function(t2, r2) {
                var s2;
                for (s2 = 0; s2 < i; s2 += 1)
                  e[s2].animation.setDirection(t2, r2);
              }, t.play = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.play(t2);
              }, t.pause = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.pause(t2);
              }, t.stop = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.stop(t2);
              }, t.togglePause = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.togglePause(t2);
              }, t.searchAnimations = function(t2, e2, r2) {
                var i2, s2 = [].concat(
                  [].slice.call(document.getElementsByClassName("lottie")),
                  [].slice.call(document.getElementsByClassName("bodymovin"))
                ), a2 = s2.length;
                for (i2 = 0; i2 < a2; i2 += 1)
                  r2 && s2[i2].setAttribute("data-bm-type", r2), h(s2[i2], t2);
                if (e2 && 0 === a2) {
                  r2 || (r2 = "svg");
                  var n2 = document.getElementsByTagName("body")[0];
                  n2.innerText = "";
                  var o2 = createTag("div");
                  o2.style.width = "100%", o2.style.height = "100%", o2.setAttribute("data-bm-type", r2), n2.appendChild(o2), h(o2, t2);
                }
              }, t.resize = function() {
                var t2;
                for (t2 = 0; t2 < i; t2 += 1)
                  e[t2].animation.resize();
              }, t.goToAndStop = function(t2, r2, s2) {
                var a2;
                for (a2 = 0; a2 < i; a2 += 1)
                  e[a2].animation.goToAndStop(t2, r2, s2);
              }, t.destroy = function(t2) {
                var r2;
                for (r2 = i - 1; r2 >= 0; r2 -= 1)
                  e[r2].animation.destroy(t2);
              }, t.freeze = function() {
                n = true;
              }, t.unfreeze = function() {
                n = false, d();
              }, t.setVolume = function(t2, r2) {
                var s2;
                for (s2 = 0; s2 < i; s2 += 1)
                  e[s2].animation.setVolume(t2, r2);
              }, t.mute = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.mute(t2);
              }, t.unmute = function(t2) {
                var r2;
                for (r2 = 0; r2 < i; r2 += 1)
                  e[r2].animation.unmute(t2);
              }, t.getRegisteredAnimations = function() {
                var t2, r2 = e.length, i2 = [];
                for (t2 = 0; t2 < r2; t2 += 1)
                  i2.push(e[t2].animation);
                return i2;
              }, t;
            }(), BezierFactory = function() {
              var t = {
                getBezierEasing: function(t2, r2, i2, s2, a2) {
                  var n2 = a2 || ("bez_" + t2 + "_" + r2 + "_" + i2 + "_" + s2).replace(/\./g, "p");
                  if (e[n2])
                    return e[n2];
                  var o2 = new l([t2, r2, i2, s2]);
                  return e[n2] = o2, o2;
                }
              }, e = {};
              var r = 0.1, i = "function" == typeof Float32Array;
              function s(t2, e2) {
                return 1 - 3 * e2 + 3 * t2;
              }
              function a(t2, e2) {
                return 3 * e2 - 6 * t2;
              }
              function n(t2) {
                return 3 * t2;
              }
              function o(t2, e2, r2) {
                return ((s(e2, r2) * t2 + a(e2, r2)) * t2 + n(e2)) * t2;
              }
              function h(t2, e2, r2) {
                return 3 * s(e2, r2) * t2 * t2 + 2 * a(e2, r2) * t2 + n(e2);
              }
              function l(t2) {
                this._p = t2, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = false, this.get = this.get.bind(this);
              }
              return l.prototype = {
                get: function(t2) {
                  var e2 = this._p[0], r2 = this._p[1], i2 = this._p[2], s2 = this._p[3];
                  return this._precomputed || this._precompute(), e2 === r2 && i2 === s2 ? t2 : 0 === t2 ? 0 : 1 === t2 ? 1 : o(this._getTForX(t2), r2, s2);
                },
                _precompute: function() {
                  var t2 = this._p[0], e2 = this._p[1], r2 = this._p[2], i2 = this._p[3];
                  this._precomputed = true, t2 === e2 && r2 === i2 || this._calcSampleValues();
                },
                _calcSampleValues: function() {
                  for (var t2 = this._p[0], e2 = this._p[2], i2 = 0; i2 < 11; ++i2)
                    this._mSampleValues[i2] = o(i2 * r, t2, e2);
                },
                _getTForX: function(t2) {
                  for (var e2 = this._p[0], i2 = this._p[2], s2 = this._mSampleValues, a2 = 0, n2 = 1; 10 !== n2 && s2[n2] <= t2; ++n2)
                    a2 += r;
                  var l2 = a2 + (t2 - s2[--n2]) / (s2[n2 + 1] - s2[n2]) * r, p2 = h(l2, e2, i2);
                  return p2 >= 1e-3 ? function(t3, e3, r2, i3) {
                    for (var s3 = 0; s3 < 4; ++s3) {
                      var a3 = h(e3, r2, i3);
                      if (0 === a3)
                        return e3;
                      e3 -= (o(e3, r2, i3) - t3) / a3;
                    }
                    return e3;
                  }(t2, l2, e2, i2) : 0 === p2 ? l2 : function(t3, e3, r2, i3, s3) {
                    var a3, n3, h2 = 0;
                    do {
                      (a3 = o(n3 = e3 + (r2 - e3) / 2, i3, s3) - t3) > 0 ? r2 = n3 : e3 = n3;
                    } while (Math.abs(a3) > 1e-7 && ++h2 < 10);
                    return n3;
                  }(t2, a2, a2 + r, e2, i2);
                }
              }, t;
            }(), pooling = {
              double: function(t) {
                return t.concat(createSizedArray(t.length));
              }
            }, poolFactory = function(t, e, r) {
              var i = 0, s = t, a = createSizedArray(s);
              return {
                newElement: function() {
                  return i ? a[i -= 1] : e();
                },
                release: function(t2) {
                  i === s && (a = pooling.double(a), s *= 2), r && r(t2), a[i] = t2, i += 1;
                }
              };
            }, bezierLengthPool = poolFactory(8, function() {
              return {
                addedLength: 0,
                percents: createTypedArray("float32", getDefaultCurveSegments()),
                lengths: createTypedArray("float32", getDefaultCurveSegments())
              };
            }), segmentsLengthPool = poolFactory(
              8,
              function() {
                return { lengths: [], totalLength: 0 };
              },
              function(t) {
                var e, r = t.lengths.length;
                for (e = 0; e < r; e += 1)
                  bezierLengthPool.release(t.lengths[e]);
                t.lengths.length = 0;
              }
            );
            function bezFunction() {
              var t = Math;
              function e(t2, e2, r2, i2, s2, a2) {
                var n2 = t2 * i2 + e2 * s2 + r2 * a2 - s2 * i2 - a2 * t2 - r2 * e2;
                return n2 > -1e-3 && n2 < 1e-3;
              }
              var r = function(t2, e2, r2, i2) {
                var s2, a2, n2, o2, h2, l, p2 = getDefaultCurveSegments(), f = 0, m = [], c = [], d = bezierLengthPool.newElement();
                for (n2 = r2.length, s2 = 0; s2 < p2; s2 += 1) {
                  for (h2 = s2 / (p2 - 1), l = 0, a2 = 0; a2 < n2; a2 += 1)
                    o2 = bmPow(1 - h2, 3) * t2[a2] + 3 * bmPow(1 - h2, 2) * h2 * r2[a2] + 3 * (1 - h2) * bmPow(h2, 2) * i2[a2] + bmPow(h2, 3) * e2[a2], m[a2] = o2, null !== c[a2] && (l += bmPow(m[a2] - c[a2], 2)), c[a2] = m[a2];
                  l && (f += l = bmSqrt(l)), d.percents[s2] = h2, d.lengths[s2] = f;
                }
                return d.addedLength = f, d;
              };
              function i(t2) {
                this.segmentLength = 0, this.points = new Array(t2);
              }
              function s(t2, e2) {
                this.partialLength = t2, this.point = e2;
              }
              var a, n = (a = {}, function(t2, r2, n2, o2) {
                var h2 = (t2[0] + "_" + t2[1] + "_" + r2[0] + "_" + r2[1] + "_" + n2[0] + "_" + n2[1] + "_" + o2[0] + "_" + o2[1]).replace(/\./g, "p");
                if (!a[h2]) {
                  var l, p2, f, m, c, d, u, y = getDefaultCurveSegments(), g = 0, v = null;
                  2 === t2.length && (t2[0] !== r2[0] || t2[1] !== r2[1]) && e(t2[0], t2[1], r2[0], r2[1], t2[0] + n2[0], t2[1] + n2[1]) && e(t2[0], t2[1], r2[0], r2[1], r2[0] + o2[0], r2[1] + o2[1]) && (y = 2);
                  var b = new i(y);
                  for (f = n2.length, l = 0; l < y; l += 1) {
                    for (u = createSizedArray(f), c = l / (y - 1), d = 0, p2 = 0; p2 < f; p2 += 1)
                      m = bmPow(1 - c, 3) * t2[p2] + 3 * bmPow(1 - c, 2) * c * (t2[p2] + n2[p2]) + 3 * (1 - c) * bmPow(c, 2) * (r2[p2] + o2[p2]) + bmPow(c, 3) * r2[p2], u[p2] = m, null !== v && (d += bmPow(u[p2] - v[p2], 2));
                    g += d = bmSqrt(d), b.points[l] = new s(d, u), v = u;
                  }
                  b.segmentLength = g, a[h2] = b;
                }
                return a[h2];
              });
              function o(t2, e2) {
                var r2 = e2.percents, i2 = e2.lengths, s2 = r2.length, a2 = bmFloor((s2 - 1) * t2), n2 = t2 * e2.addedLength, o2 = 0;
                if (a2 === s2 - 1 || 0 === a2 || n2 === i2[a2])
                  return r2[a2];
                for (var h2 = i2[a2] > n2 ? -1 : 1, l = true; l; )
                  if (i2[a2] <= n2 && i2[a2 + 1] > n2 ? (o2 = (n2 - i2[a2]) / (i2[a2 + 1] - i2[a2]), l = false) : a2 += h2, a2 < 0 || a2 >= s2 - 1) {
                    if (a2 === s2 - 1)
                      return r2[a2];
                    l = false;
                  }
                return r2[a2] + (r2[a2 + 1] - r2[a2]) * o2;
              }
              var h = createTypedArray("float32", 8);
              return {
                getSegmentsLength: function(t2) {
                  var e2, i2 = segmentsLengthPool.newElement(), s2 = t2.c, a2 = t2.v, n2 = t2.o, o2 = t2.i, h2 = t2._length, l = i2.lengths, p2 = 0;
                  for (e2 = 0; e2 < h2 - 1; e2 += 1)
                    l[e2] = r(a2[e2], a2[e2 + 1], n2[e2], o2[e2 + 1]), p2 += l[e2].addedLength;
                  return s2 && h2 && (l[e2] = r(a2[e2], a2[0], n2[e2], o2[0]), p2 += l[e2].addedLength), i2.totalLength = p2, i2;
                },
                getNewSegment: function(e2, r2, i2, s2, a2, n2, l) {
                  a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1);
                  var p2, f = o(a2, l), m = o(n2 = n2 > 1 ? 1 : n2, l), c = e2.length, d = 1 - f, u = 1 - m, y = d * d * d, g = f * d * d * 3, v = f * f * d * 3, b = f * f * f, P = d * d * u, x = f * d * u + d * f * u + d * d * m, E = f * f * u + d * f * m + f * d * m, S = f * f * m, C = d * u * u, _ = f * u * u + d * m * u + d * u * m, A = f * m * u + d * m * m + f * u * m, T = f * m * m, M = u * u * u, k = m * u * u + u * m * u + u * u * m, D = m * m * u + u * m * m + m * u * m, F = m * m * m;
                  for (p2 = 0; p2 < c; p2 += 1)
                    h[4 * p2] = t.round(1e3 * (y * e2[p2] + g * i2[p2] + v * s2[p2] + b * r2[p2])) / 1e3, h[4 * p2 + 1] = t.round(1e3 * (P * e2[p2] + x * i2[p2] + E * s2[p2] + S * r2[p2])) / 1e3, h[4 * p2 + 2] = t.round(1e3 * (C * e2[p2] + _ * i2[p2] + A * s2[p2] + T * r2[p2])) / 1e3, h[4 * p2 + 3] = t.round(1e3 * (M * e2[p2] + k * i2[p2] + D * s2[p2] + F * r2[p2])) / 1e3;
                  return h;
                },
                getPointInSegment: function(e2, r2, i2, s2, a2, n2) {
                  var h2 = o(a2, n2), l = 1 - h2;
                  return [
                    t.round(
                      1e3 * (l * l * l * e2[0] + (h2 * l * l + l * h2 * l + l * l * h2) * i2[0] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[0] + h2 * h2 * h2 * r2[0])
                    ) / 1e3,
                    t.round(
                      1e3 * (l * l * l * e2[1] + (h2 * l * l + l * h2 * l + l * l * h2) * i2[1] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[1] + h2 * h2 * h2 * r2[1])
                    ) / 1e3
                  ];
                },
                buildBezierData: n,
                pointOnLine2D: e,
                pointOnLine3D: function(r2, i2, s2, a2, n2, o2, h2, l, p2) {
                  if (0 === s2 && 0 === o2 && 0 === p2)
                    return e(r2, i2, a2, n2, h2, l);
                  var f, m = t.sqrt(t.pow(a2 - r2, 2) + t.pow(n2 - i2, 2) + t.pow(o2 - s2, 2)), c = t.sqrt(t.pow(h2 - r2, 2) + t.pow(l - i2, 2) + t.pow(p2 - s2, 2)), d = t.sqrt(t.pow(h2 - a2, 2) + t.pow(l - n2, 2) + t.pow(p2 - o2, 2));
                  return (f = m > c ? m > d ? m - c - d : d - c - m : d > c ? d - c - m : c - m - d) > -1e-4 && f < 1e-4;
                }
              };
            }
            var bez = bezFunction(), PropertyFactory = function() {
              var t = initialDefaultFrame, e = Math.abs;
              function r(t2, e2) {
                var r2, s2 = this.offsetTime;
                "multidimensional" === this.propType && (r2 = createTypedArray("float32", this.pv.length));
                for (var a2, n2, o2, h2, l2, p3, f2, m, c, d = e2.lastIndex, u = d, y = this.keyframes.length - 1, g = true; g; ) {
                  if (a2 = this.keyframes[u], n2 = this.keyframes[u + 1], u === y - 1 && t2 >= n2.t - s2) {
                    a2.h && (a2 = n2), d = 0;
                    break;
                  }
                  if (n2.t - s2 > t2) {
                    d = u;
                    break;
                  }
                  u < y - 1 ? u += 1 : (d = 0, g = false);
                }
                o2 = this.keyframesMetadata[u] || {};
                var v, b, P, x, E, S, C, _, A, T, M = n2.t - s2, k = a2.t - s2;
                if (a2.to) {
                  o2.bezierData || (o2.bezierData = bez.buildBezierData(a2.s, n2.s || a2.e, a2.to, a2.ti));
                  var D = o2.bezierData;
                  if (t2 >= M || t2 < k) {
                    var F = t2 >= M ? D.points.length - 1 : 0;
                    for (l2 = D.points[F].point.length, h2 = 0; h2 < l2; h2 += 1)
                      r2[h2] = D.points[F].point[h2];
                  } else {
                    o2.__fnct ? c = o2.__fnct : (c = BezierFactory.getBezierEasing(a2.o.x, a2.o.y, a2.i.x, a2.i.y, a2.n).get, o2.__fnct = c), p3 = c((t2 - k) / (M - k));
                    var w, I = D.segmentLength * p3, B = e2.lastFrame < t2 && e2._lastKeyframeIndex === u ? e2._lastAddedLength : 0;
                    for (m = e2.lastFrame < t2 && e2._lastKeyframeIndex === u ? e2._lastPoint : 0, g = true, f2 = D.points.length; g; ) {
                      if (B += D.points[m].partialLength, 0 === I || 0 === p3 || m === D.points.length - 1) {
                        for (l2 = D.points[m].point.length, h2 = 0; h2 < l2; h2 += 1)
                          r2[h2] = D.points[m].point[h2];
                        break;
                      }
                      if (I >= B && I < B + D.points[m + 1].partialLength) {
                        for (w = (I - B) / D.points[m + 1].partialLength, l2 = D.points[m].point.length, h2 = 0; h2 < l2; h2 += 1)
                          r2[h2] = D.points[m].point[h2] + (D.points[m + 1].point[h2] - D.points[m].point[h2]) * w;
                        break;
                      }
                      m < f2 - 1 ? m += 1 : g = false;
                    }
                    e2._lastPoint = m, e2._lastAddedLength = B - D.points[m].partialLength, e2._lastKeyframeIndex = u;
                  }
                } else {
                  var V, R, L, z, G;
                  if (y = a2.s.length, v = n2.s || a2.e, this.sh && 1 !== a2.h)
                    if (t2 >= M)
                      r2[0] = v[0], r2[1] = v[1], r2[2] = v[2];
                    else if (t2 <= k)
                      r2[0] = a2.s[0], r2[1] = a2.s[1], r2[2] = a2.s[2];
                    else {
                      var O = i(a2.s), N = i(v);
                      b = r2, P = function(t3, e3, r3) {
                        var i2, s3, a3, n3, o3, h3 = [], l3 = t3[0], p4 = t3[1], f3 = t3[2], m2 = t3[3], c2 = e3[0], d2 = e3[1], u2 = e3[2], y2 = e3[3];
                        return (s3 = l3 * c2 + p4 * d2 + f3 * u2 + m2 * y2) < 0 && (s3 = -s3, c2 = -c2, d2 = -d2, u2 = -u2, y2 = -y2), 1 - s3 > 1e-6 ? (i2 = Math.acos(s3), a3 = Math.sin(i2), n3 = Math.sin((1 - r3) * i2) / a3, o3 = Math.sin(r3 * i2) / a3) : (n3 = 1 - r3, o3 = r3), h3[0] = n3 * l3 + o3 * c2, h3[1] = n3 * p4 + o3 * d2, h3[2] = n3 * f3 + o3 * u2, h3[3] = n3 * m2 + o3 * y2, h3;
                      }(O, N, (t2 - k) / (M - k)), x = P[0], E = P[1], S = P[2], C = P[3], _ = Math.atan2(2 * E * C - 2 * x * S, 1 - 2 * E * E - 2 * S * S), A = Math.asin(2 * x * E + 2 * S * C), T = Math.atan2(2 * x * C - 2 * E * S, 1 - 2 * x * x - 2 * S * S), b[0] = _ / degToRads, b[1] = A / degToRads, b[2] = T / degToRads;
                    }
                  else
                    for (u = 0; u < y; u += 1)
                      1 !== a2.h && (t2 >= M ? p3 = 1 : t2 < k ? p3 = 0 : (a2.o.x.constructor === Array ? (o2.__fnct || (o2.__fnct = []), o2.__fnct[u] ? c = o2.__fnct[u] : (V = void 0 === a2.o.x[u] ? a2.o.x[0] : a2.o.x[u], R = void 0 === a2.o.y[u] ? a2.o.y[0] : a2.o.y[u], L = void 0 === a2.i.x[u] ? a2.i.x[0] : a2.i.x[u], z = void 0 === a2.i.y[u] ? a2.i.y[0] : a2.i.y[u], c = BezierFactory.getBezierEasing(V, R, L, z).get, o2.__fnct[u] = c)) : o2.__fnct ? c = o2.__fnct : (V = a2.o.x, R = a2.o.y, L = a2.i.x, z = a2.i.y, c = BezierFactory.getBezierEasing(V, R, L, z).get, a2.keyframeMetadata = c), p3 = c((t2 - k) / (M - k)))), v = n2.s || a2.e, G = 1 === a2.h ? a2.s[u] : a2.s[u] + (v[u] - a2.s[u]) * p3, "multidimensional" === this.propType ? r2[u] = G : r2 = G;
                }
                return e2.lastIndex = d, r2;
              }
              function i(t2) {
                var e2 = t2[0] * degToRads, r2 = t2[1] * degToRads, i2 = t2[2] * degToRads, s2 = Math.cos(e2 / 2), a2 = Math.cos(r2 / 2), n2 = Math.cos(i2 / 2), o2 = Math.sin(e2 / 2), h2 = Math.sin(r2 / 2), l2 = Math.sin(i2 / 2);
                return [
                  o2 * h2 * n2 + s2 * a2 * l2,
                  o2 * a2 * n2 + s2 * h2 * l2,
                  s2 * h2 * n2 - o2 * a2 * l2,
                  s2 * a2 * n2 - o2 * h2 * l2
                ];
              }
              function s() {
                var e2 = this.comp.renderedFrame - this.offsetTime, r2 = this.keyframes[0].t - this.offsetTime, i2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(e2 === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i2 && e2 >= i2 || this._caching.lastFrame < r2 && e2 < r2))) {
                  this._caching.lastFrame >= e2 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                  var s2 = this.interpolateValue(e2, this._caching);
                  this.pv = s2;
                }
                return this._caching.lastFrame = e2, this.pv;
              }
              function a(t2) {
                var r2;
                if ("unidimensional" === this.propType)
                  r2 = t2 * this.mult, e(this.v - r2) > 1e-5 && (this.v = r2, this._mdf = true);
                else
                  for (var i2 = 0, s2 = this.v.length; i2 < s2; )
                    r2 = t2[i2] * this.mult, e(this.v[i2] - r2) > 1e-5 && (this.v[i2] = r2, this._mdf = true), i2 += 1;
              }
              function n() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                  if (this.lock)
                    this.setVValue(this.pv);
                  else {
                    var t2;
                    this.lock = true, this._mdf = this._isFirstFrame;
                    var e2 = this.effectsSequence.length, r2 = this.kf ? this.pv : this.data.k;
                    for (t2 = 0; t2 < e2; t2 += 1)
                      r2 = this.effectsSequence[t2](r2);
                    this.setVValue(r2), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
                  }
              }
              function o(t2) {
                this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
              }
              function h(t2, e2, r2, i2) {
                this.propType = "unidimensional", this.mult = r2 || 1, this.data = e2, this.v = r2 ? e2.k * r2 : e2.k, this.pv = e2.k, this._mdf = false, this.elem = t2, this.container = i2, this.comp = t2.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = n, this.setVValue = a, this.addEffect = o;
              }
              function l(t2, e2, r2, i2) {
                var s2;
                this.propType = "multidimensional", this.mult = r2 || 1, this.data = e2, this._mdf = false, this.elem = t2, this.container = i2, this.comp = t2.comp, this.k = false, this.kf = false, this.frameId = -1;
                var h2 = e2.k.length;
                for (this.v = createTypedArray("float32", h2), this.pv = createTypedArray("float32", h2), this.vel = createTypedArray("float32", h2), s2 = 0; s2 < h2; s2 += 1)
                  this.v[s2] = e2.k[s2] * this.mult, this.pv[s2] = e2.k[s2];
                this._isFirstFrame = true, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o;
              }
              function p2(e2, i2, h2, l2) {
                this.propType = "unidimensional", this.keyframes = i2.k, this.keyframesMetadata = [], this.offsetTime = e2.data.st, this.frameId = -1, this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = i2, this.mult = h2 || 1, this.elem = e2, this.container = l2, this.comp = e2.comp, this.v = t, this.pv = t, this._isFirstFrame = true, this.getValue = n, this.setVValue = a, this.interpolateValue = r, this.effectsSequence = [s.bind(this)], this.addEffect = o;
              }
              function f(e2, i2, h2, l2) {
                var p3;
                this.propType = "multidimensional";
                var f2, m, c, d, u = i2.k.length;
                for (p3 = 0; p3 < u - 1; p3 += 1)
                  i2.k[p3].to && i2.k[p3].s && i2.k[p3 + 1] && i2.k[p3 + 1].s && (f2 = i2.k[p3].s, m = i2.k[p3 + 1].s, c = i2.k[p3].to, d = i2.k[p3].ti, (2 === f2.length && (f2[0] !== m[0] || f2[1] !== m[1]) && bez.pointOnLine2D(f2[0], f2[1], m[0], m[1], f2[0] + c[0], f2[1] + c[1]) && bez.pointOnLine2D(f2[0], f2[1], m[0], m[1], m[0] + d[0], m[1] + d[1]) || 3 === f2.length && (f2[0] !== m[0] || f2[1] !== m[1] || f2[2] !== m[2]) && bez.pointOnLine3D(
                    f2[0],
                    f2[1],
                    f2[2],
                    m[0],
                    m[1],
                    m[2],
                    f2[0] + c[0],
                    f2[1] + c[1],
                    f2[2] + c[2]
                  ) && bez.pointOnLine3D(
                    f2[0],
                    f2[1],
                    f2[2],
                    m[0],
                    m[1],
                    m[2],
                    m[0] + d[0],
                    m[1] + d[1],
                    m[2] + d[2]
                  )) && (i2.k[p3].to = null, i2.k[p3].ti = null), f2[0] === m[0] && f2[1] === m[1] && 0 === c[0] && 0 === c[1] && 0 === d[0] && 0 === d[1] && (2 === f2.length || f2[2] === m[2] && 0 === c[2] && 0 === d[2]) && (i2.k[p3].to = null, i2.k[p3].ti = null));
                this.effectsSequence = [s.bind(this)], this.data = i2, this.keyframes = i2.k, this.keyframesMetadata = [], this.offsetTime = e2.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = h2 || 1, this.elem = e2, this.container = l2, this.comp = e2.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = r, this.frameId = -1;
                var y = i2.k[0].s.length;
                for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p3 = 0; p3 < y; p3 += 1)
                  this.v[p3] = t, this.pv[p3] = t;
                this._caching = { lastFrame: t, lastIndex: 0, value: createTypedArray("float32", y) }, this.addEffect = o;
              }
              return {
                getProp: function(t2, e2, r2, i2, s2) {
                  var a2;
                  if (e2.k.length)
                    if ("number" == typeof e2.k[0])
                      a2 = new l(t2, e2, i2, s2);
                    else
                      switch (r2) {
                        case 0:
                          a2 = new p2(t2, e2, i2, s2);
                          break;
                        case 1:
                          a2 = new f(t2, e2, i2, s2);
                      }
                  else
                    a2 = new h(t2, e2, i2, s2);
                  return a2.effectsSequence.length && s2.addDynamicProperty(a2), a2;
                }
              };
            }();
            function DynamicPropertyContainer() {
            }
            DynamicPropertyContainer.prototype = {
              addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
              },
              iterateDynamicProperties: function() {
                var t;
                this._mdf = false;
                var e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1)
                  this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
              },
              initDynamicPropertyContainer: function(t) {
                this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
              }
            };
            var pointPool = poolFactory(8, function() {
              return createTypedArray("float32", 2);
            });
            function ShapePath() {
              this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
            }
            ShapePath.prototype.setPathData = function(t, e) {
              this.c = t, this.setLength(e);
              for (var r = 0; r < e; )
                this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
            }, ShapePath.prototype.setLength = function(t) {
              for (; this._maxLength < t; )
                this.doubleArrayLength();
              this._length = t;
            }, ShapePath.prototype.doubleArrayLength = function() {
              this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
            }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
              var a;
              switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
                case "v":
                  a = this.v;
                  break;
                case "i":
                  a = this.i;
                  break;
                case "o":
                  a = this.o;
                  break;
                default:
                  a = [];
              }
              (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e;
            }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
              this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o);
            }, ShapePath.prototype.reverse = function() {
              var t = new ShapePath();
              t.setPathData(this.c, this._length);
              var e = this.v, r = this.o, i = this.i, s = 0;
              this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, false), s = 1);
              var a, n = this._length - 1, o = this._length;
              for (a = s; a < o; a += 1)
                t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, false), n -= 1;
              return t;
            }, ShapePath.prototype.length = function() {
              return this._length;
            };
            var shapePool = (factory = poolFactory(
              4,
              function() {
                return new ShapePath();
              },
              function(t) {
                var e, r = t._length;
                for (e = 0; e < r; e += 1)
                  pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = false;
              }
            ), factory.clone = function(t) {
              var e, r = factory.newElement(), i = void 0 === t._length ? t.v.length : t._length;
              for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1)
                r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
              return r;
            }, factory), factory;
            function ShapeCollection() {
              this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
            }
            ShapeCollection.prototype.addShape = function(t) {
              this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
            }, ShapeCollection.prototype.releaseShapes = function() {
              var t;
              for (t = 0; t < this._length; t += 1)
                shapePool.release(this.shapes[t]);
              this._length = 0;
            };
            var shapeCollectionPool = (ob = {
              newShapeCollection: function() {
                return _length ? pool[_length -= 1] : new ShapeCollection();
              },
              release: function(t) {
                var e, r = t._length;
                for (e = 0; e < r; e += 1)
                  shapePool.release(t.shapes[e]);
                t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;
              }
            }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
              var t = -999999;
              function e(t2, e2, r2) {
                var i2, s2, a2, n2, o2, h2, l2, p3, f2, m2 = r2.lastIndex, c = this.keyframes;
                if (t2 < c[0].t - this.offsetTime)
                  i2 = c[0].s[0], a2 = true, m2 = 0;
                else if (t2 >= c[c.length - 1].t - this.offsetTime)
                  i2 = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a2 = true;
                else {
                  for (var d, u, y, g = m2, v = c.length - 1, b = true; b && (d = c[g], !((u = c[g + 1]).t - this.offsetTime > t2)); )
                    g < v - 1 ? g += 1 : b = false;
                  if (y = this.keyframesMetadata[g] || {}, m2 = g, !(a2 = 1 === d.h)) {
                    if (t2 >= u.t - this.offsetTime)
                      p3 = 1;
                    else if (t2 < d.t - this.offsetTime)
                      p3 = 0;
                    else {
                      var P;
                      y.__fnct ? P = y.__fnct : (P = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, y.__fnct = P), p3 = P(
                        (t2 - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime))
                      );
                    }
                    s2 = u.s ? u.s[0] : d.e[0];
                  }
                  i2 = d.s[0];
                }
                for (h2 = e2._length, l2 = i2.i[0].length, r2.lastIndex = m2, n2 = 0; n2 < h2; n2 += 1)
                  for (o2 = 0; o2 < l2; o2 += 1)
                    f2 = a2 ? i2.i[n2][o2] : i2.i[n2][o2] + (s2.i[n2][o2] - i2.i[n2][o2]) * p3, e2.i[n2][o2] = f2, f2 = a2 ? i2.o[n2][o2] : i2.o[n2][o2] + (s2.o[n2][o2] - i2.o[n2][o2]) * p3, e2.o[n2][o2] = f2, f2 = a2 ? i2.v[n2][o2] : i2.v[n2][o2] + (s2.v[n2][o2] - i2.v[n2][o2]) * p3, e2.v[n2][o2] = f2;
              }
              function r() {
                var e2 = this.comp.renderedFrame - this.offsetTime, r2 = this.keyframes[0].t - this.offsetTime, i2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, s2 = this._caching.lastFrame;
                return s2 !== t && (s2 < r2 && e2 < r2 || s2 > i2 && e2 > i2) || (this._caching.lastIndex = s2 < e2 ? this._caching.lastIndex : 0, this.interpolateShape(e2, this.pv, this._caching)), this._caching.lastFrame = e2, this.pv;
              }
              function i() {
                this.paths = this.localShapeCollection;
              }
              function s(t2) {
                (function(t3, e2) {
                  if (t3._length !== e2._length || t3.c !== e2.c)
                    return false;
                  var r2, i2 = t3._length;
                  for (r2 = 0; r2 < i2; r2 += 1)
                    if (t3.v[r2][0] !== e2.v[r2][0] || t3.v[r2][1] !== e2.v[r2][1] || t3.o[r2][0] !== e2.o[r2][0] || t3.o[r2][1] !== e2.o[r2][1] || t3.i[r2][0] !== e2.i[r2][0] || t3.i[r2][1] !== e2.i[r2][1])
                      return false;
                  return true;
                })(this.v, t2) || (this.v = shapePool.clone(t2), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
              }
              function a() {
                if (this.elem.globalData.frameId !== this.frameId)
                  if (this.effectsSequence.length)
                    if (this.lock)
                      this.setVValue(this.pv);
                    else {
                      var t2, e2;
                      this.lock = true, this._mdf = false, t2 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                      var r2 = this.effectsSequence.length;
                      for (e2 = 0; e2 < r2; e2 += 1)
                        t2 = this.effectsSequence[e2](t2);
                      this.setVValue(t2), this.lock = false, this.frameId = this.elem.globalData.frameId;
                    }
                  else
                    this._mdf = false;
              }
              function n(t2, e2, r2) {
                this.propType = "shape", this.comp = t2.comp, this.container = t2, this.elem = t2, this.data = e2, this.k = false, this.kf = false, this._mdf = false;
                var s2 = 3 === r2 ? e2.pt.k : e2.ks.k;
                this.v = shapePool.clone(s2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
              }
              function o(t2) {
                this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
              }
              function h(e2, s2, a2) {
                this.propType = "shape", this.comp = e2.comp, this.elem = e2, this.container = e2, this.offsetTime = e2.data.st, this.keyframes = 3 === a2 ? s2.pt.k : s2.ks.k, this.keyframesMetadata = [], this.k = true, this.kf = true;
                var n2 = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, n2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = { lastFrame: t, lastIndex: 0 }, this.effectsSequence = [r.bind(this)];
              }
              n.prototype.interpolateShape = e, n.prototype.getValue = a, n.prototype.setVValue = s, n.prototype.addEffect = o, h.prototype.getValue = a, h.prototype.interpolateShape = e, h.prototype.setVValue = s, h.prototype.addEffect = o;
              var l = function() {
                var t2 = roundCorner;
                function e2(t3, e3) {
                  this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e3.d, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e3.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e3.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
                }
                return e2.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                  },
                  convertEllToPath: function() {
                    var e3 = this.p.v[0], r2 = this.p.v[1], i2 = this.s.v[0] / 2, s2 = this.s.v[1] / 2, a2 = 3 !== this.d, n2 = this.v;
                    n2.v[0][0] = e3, n2.v[0][1] = r2 - s2, n2.v[1][0] = a2 ? e3 + i2 : e3 - i2, n2.v[1][1] = r2, n2.v[2][0] = e3, n2.v[2][1] = r2 + s2, n2.v[3][0] = a2 ? e3 - i2 : e3 + i2, n2.v[3][1] = r2, n2.i[0][0] = a2 ? e3 - i2 * t2 : e3 + i2 * t2, n2.i[0][1] = r2 - s2, n2.i[1][0] = a2 ? e3 + i2 : e3 - i2, n2.i[1][1] = r2 - s2 * t2, n2.i[2][0] = a2 ? e3 + i2 * t2 : e3 - i2 * t2, n2.i[2][1] = r2 + s2, n2.i[3][0] = a2 ? e3 - i2 : e3 + i2, n2.i[3][1] = r2 + s2 * t2, n2.o[0][0] = a2 ? e3 + i2 * t2 : e3 - i2 * t2, n2.o[0][1] = r2 - s2, n2.o[1][0] = a2 ? e3 + i2 : e3 - i2, n2.o[1][1] = r2 + s2 * t2, n2.o[2][0] = a2 ? e3 - i2 * t2 : e3 + i2 * t2, n2.o[2][1] = r2 + s2, n2.o[3][0] = a2 ? e3 - i2 : e3 + i2, n2.o[3][1] = r2 - s2 * t2;
                  }
                }, extendPrototype([DynamicPropertyContainer], e2), e2;
              }(), p2 = function() {
                function t2(t3, e2) {
                  this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = t3, this.comp = t3.comp, this.data = e2, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), 1 === e2.sy ? (this.ir = PropertyFactory.getProp(t3, e2.ir, 0, 0, this), this.is = PropertyFactory.getProp(t3, e2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t3, e2.pt, 0, 0, this), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t3, e2.or, 0, 0, this), this.os = PropertyFactory.getProp(t3, e2.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
                }
                return t2.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                  },
                  convertStarToPath: function() {
                    var t3, e2, r2, i2, s2 = 2 * Math.floor(this.pt.v), a2 = 2 * Math.PI / s2, n2 = true, o2 = this.or.v, h2 = this.ir.v, l2 = this.os.v, p3 = this.is.v, f2 = 2 * Math.PI * o2 / (2 * s2), m2 = 2 * Math.PI * h2 / (2 * s2), c = -Math.PI / 2;
                    c += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t3 = 0; t3 < s2; t3 += 1) {
                      r2 = n2 ? l2 : p3, i2 = n2 ? f2 : m2;
                      var u = (e2 = n2 ? o2 : h2) * Math.cos(c), y = e2 * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                      u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(
                        u,
                        y,
                        u - g * i2 * r2 * d,
                        y - v * i2 * r2 * d,
                        u + g * i2 * r2 * d,
                        y + v * i2 * r2 * d,
                        t3,
                        true
                      ), n2 = !n2, c += a2 * d;
                    }
                  },
                  convertPolygonToPath: function() {
                    var t3, e2 = Math.floor(this.pt.v), r2 = 2 * Math.PI / e2, i2 = this.or.v, s2 = this.os.v, a2 = 2 * Math.PI * i2 / (4 * e2), n2 = 0.5 * -Math.PI, o2 = 3 === this.data.d ? -1 : 1;
                    for (n2 += this.r.v, this.v._length = 0, t3 = 0; t3 < e2; t3 += 1) {
                      var h2 = i2 * Math.cos(n2), l2 = i2 * Math.sin(n2), p3 = 0 === h2 && 0 === l2 ? 0 : l2 / Math.sqrt(h2 * h2 + l2 * l2), f2 = 0 === h2 && 0 === l2 ? 0 : -h2 / Math.sqrt(h2 * h2 + l2 * l2);
                      h2 += +this.p.v[0], l2 += +this.p.v[1], this.v.setTripleAt(
                        h2,
                        l2,
                        h2 - p3 * a2 * s2 * o2,
                        l2 - f2 * a2 * s2 * o2,
                        h2 + p3 * a2 * s2 * o2,
                        l2 + f2 * a2 * s2 * o2,
                        t3,
                        true
                      ), n2 += r2 * o2;
                    }
                    this.paths.length = 0, this.paths[0] = this.v;
                  }
                }, extendPrototype([DynamicPropertyContainer], t2), t2;
              }(), f = function() {
                function t2(t3, e2) {
                  this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
                }
                return t2.prototype = {
                  convertRectToPath: function() {
                    var t3 = this.p.v[0], e2 = this.p.v[1], r2 = this.s.v[0] / 2, i2 = this.s.v[1] / 2, s2 = bmMin(r2, i2, this.r.v), a2 = s2 * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(
                      t3 + r2,
                      e2 - i2 + s2,
                      t3 + r2,
                      e2 - i2 + s2,
                      t3 + r2,
                      e2 - i2 + a2,
                      0,
                      true
                    ), this.v.setTripleAt(
                      t3 + r2,
                      e2 + i2 - s2,
                      t3 + r2,
                      e2 + i2 - a2,
                      t3 + r2,
                      e2 + i2 - s2,
                      1,
                      true
                    ), 0 !== s2 ? (this.v.setTripleAt(
                      t3 + r2 - s2,
                      e2 + i2,
                      t3 + r2 - s2,
                      e2 + i2,
                      t3 + r2 - a2,
                      e2 + i2,
                      2,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2 + s2,
                      e2 + i2,
                      t3 - r2 + a2,
                      e2 + i2,
                      t3 - r2 + s2,
                      e2 + i2,
                      3,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 + i2 - s2,
                      t3 - r2,
                      e2 + i2 - s2,
                      t3 - r2,
                      e2 + i2 - a2,
                      4,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 - i2 + s2,
                      t3 - r2,
                      e2 - i2 + a2,
                      t3 - r2,
                      e2 - i2 + s2,
                      5,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2 + s2,
                      e2 - i2,
                      t3 - r2 + s2,
                      e2 - i2,
                      t3 - r2 + a2,
                      e2 - i2,
                      6,
                      true
                    ), this.v.setTripleAt(
                      t3 + r2 - s2,
                      e2 - i2,
                      t3 + r2 - a2,
                      e2 - i2,
                      t3 + r2 - s2,
                      e2 - i2,
                      7,
                      true
                    )) : (this.v.setTripleAt(
                      t3 - r2,
                      e2 + i2,
                      t3 - r2 + a2,
                      e2 + i2,
                      t3 - r2,
                      e2 + i2,
                      2
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 - i2,
                      t3 - r2,
                      e2 - i2 + a2,
                      t3 - r2,
                      e2 - i2,
                      3
                    ))) : (this.v.setTripleAt(
                      t3 + r2,
                      e2 - i2 + s2,
                      t3 + r2,
                      e2 - i2 + a2,
                      t3 + r2,
                      e2 - i2 + s2,
                      0,
                      true
                    ), 0 !== s2 ? (this.v.setTripleAt(
                      t3 + r2 - s2,
                      e2 - i2,
                      t3 + r2 - s2,
                      e2 - i2,
                      t3 + r2 - a2,
                      e2 - i2,
                      1,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2 + s2,
                      e2 - i2,
                      t3 - r2 + a2,
                      e2 - i2,
                      t3 - r2 + s2,
                      e2 - i2,
                      2,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 - i2 + s2,
                      t3 - r2,
                      e2 - i2 + s2,
                      t3 - r2,
                      e2 - i2 + a2,
                      3,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 + i2 - s2,
                      t3 - r2,
                      e2 + i2 - a2,
                      t3 - r2,
                      e2 + i2 - s2,
                      4,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2 + s2,
                      e2 + i2,
                      t3 - r2 + s2,
                      e2 + i2,
                      t3 - r2 + a2,
                      e2 + i2,
                      5,
                      true
                    ), this.v.setTripleAt(
                      t3 + r2 - s2,
                      e2 + i2,
                      t3 + r2 - a2,
                      e2 + i2,
                      t3 + r2 - s2,
                      e2 + i2,
                      6,
                      true
                    ), this.v.setTripleAt(
                      t3 + r2,
                      e2 + i2 - s2,
                      t3 + r2,
                      e2 + i2 - s2,
                      t3 + r2,
                      e2 + i2 - a2,
                      7,
                      true
                    )) : (this.v.setTripleAt(
                      t3 - r2,
                      e2 - i2,
                      t3 - r2 + a2,
                      e2 - i2,
                      t3 - r2,
                      e2 - i2,
                      1,
                      true
                    ), this.v.setTripleAt(
                      t3 - r2,
                      e2 + i2,
                      t3 - r2,
                      e2 + i2 - a2,
                      t3 - r2,
                      e2 + i2,
                      2,
                      true
                    ), this.v.setTripleAt(
                      t3 + r2,
                      e2 + i2,
                      t3 + r2 - a2,
                      e2 + i2,
                      t3 + r2,
                      e2 + i2,
                      3,
                      true
                    )));
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                  },
                  reset: i
                }, extendPrototype([DynamicPropertyContainer], t2), t2;
              }();
              var m = {
                getShapeProp: function(t2, e2, r2) {
                  var i2;
                  return 3 === r2 || 4 === r2 ? i2 = (3 === r2 ? e2.pt : e2.ks).k.length ? new h(t2, e2, r2) : new n(t2, e2, r2) : 5 === r2 ? i2 = new f(t2, e2) : 6 === r2 ? i2 = new l(t2, e2) : 7 === r2 && (i2 = new p2(t2, e2)), i2.k && t2.addDynamicProperty(i2), i2;
                },
                getConstructorFunction: function() {
                  return n;
                },
                getKeyframedConstructorFunction: function() {
                  return h;
                }
              };
              return m;
            }(), Matrix = function() {
              var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
              function s() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
              }
              function a(r2) {
                if (0 === r2)
                  return this;
                var i2 = t(r2), s2 = e(r2);
                return this._t(i2, -s2, 0, 0, s2, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function n(r2) {
                if (0 === r2)
                  return this;
                var i2 = t(r2), s2 = e(r2);
                return this._t(1, 0, 0, 0, 0, i2, -s2, 0, 0, s2, i2, 0, 0, 0, 0, 1);
              }
              function o(r2) {
                if (0 === r2)
                  return this;
                var i2 = t(r2), s2 = e(r2);
                return this._t(i2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, i2, 0, 0, 0, 0, 1);
              }
              function h(r2) {
                if (0 === r2)
                  return this;
                var i2 = t(r2), s2 = e(r2);
                return this._t(i2, -s2, 0, 0, s2, i2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function l(t2, e2) {
                return this._t(1, e2, t2, 1, 0, 0);
              }
              function p2(t2, e2) {
                return this.shear(r(t2), r(e2));
              }
              function f(i2, s2) {
                var a2 = t(s2), n2 = e(s2);
                return this._t(a2, n2, 0, 0, -n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a2, -n2, 0, 0, n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
              }
              function m(t2, e2, r2) {
                return r2 || 0 === r2 || (r2 = 1), 1 === t2 && 1 === e2 && 1 === r2 ? this : this._t(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, r2, 0, 0, 0, 0, 1);
              }
              function c(t2, e2, r2, i2, s2, a2, n2, o2, h2, l2, p3, f2, m2, c2, d2, u2) {
                return this.props[0] = t2, this.props[1] = e2, this.props[2] = r2, this.props[3] = i2, this.props[4] = s2, this.props[5] = a2, this.props[6] = n2, this.props[7] = o2, this.props[8] = h2, this.props[9] = l2, this.props[10] = p3, this.props[11] = f2, this.props[12] = m2, this.props[13] = c2, this.props[14] = d2, this.props[15] = u2, this;
              }
              function d(t2, e2, r2) {
                return r2 = r2 || 0, 0 !== t2 || 0 !== e2 || 0 !== r2 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, r2, 1) : this;
              }
              function u(t2, e2, r2, i2, s2, a2, n2, o2, h2, l2, p3, f2, m2, c2, d2, u2) {
                var y2 = this.props;
                if (1 === t2 && 0 === e2 && 0 === r2 && 0 === i2 && 0 === s2 && 1 === a2 && 0 === n2 && 0 === o2 && 0 === h2 && 0 === l2 && 1 === p3 && 0 === f2)
                  return y2[12] = y2[12] * t2 + y2[15] * m2, y2[13] = y2[13] * a2 + y2[15] * c2, y2[14] = y2[14] * p3 + y2[15] * d2, y2[15] *= u2, this._identityCalculated = false, this;
                var g2 = y2[0], v2 = y2[1], b2 = y2[2], P2 = y2[3], x2 = y2[4], E2 = y2[5], S2 = y2[6], C2 = y2[7], _2 = y2[8], A2 = y2[9], T2 = y2[10], M2 = y2[11], k2 = y2[12], D2 = y2[13], F2 = y2[14], w2 = y2[15];
                return y2[0] = g2 * t2 + v2 * s2 + b2 * h2 + P2 * m2, y2[1] = g2 * e2 + v2 * a2 + b2 * l2 + P2 * c2, y2[2] = g2 * r2 + v2 * n2 + b2 * p3 + P2 * d2, y2[3] = g2 * i2 + v2 * o2 + b2 * f2 + P2 * u2, y2[4] = x2 * t2 + E2 * s2 + S2 * h2 + C2 * m2, y2[5] = x2 * e2 + E2 * a2 + S2 * l2 + C2 * c2, y2[6] = x2 * r2 + E2 * n2 + S2 * p3 + C2 * d2, y2[7] = x2 * i2 + E2 * o2 + S2 * f2 + C2 * u2, y2[8] = _2 * t2 + A2 * s2 + T2 * h2 + M2 * m2, y2[9] = _2 * e2 + A2 * a2 + T2 * l2 + M2 * c2, y2[10] = _2 * r2 + A2 * n2 + T2 * p3 + M2 * d2, y2[11] = _2 * i2 + A2 * o2 + T2 * f2 + M2 * u2, y2[12] = k2 * t2 + D2 * s2 + F2 * h2 + w2 * m2, y2[13] = k2 * e2 + D2 * a2 + F2 * l2 + w2 * c2, y2[14] = k2 * r2 + D2 * n2 + F2 * p3 + w2 * d2, y2[15] = k2 * i2 + D2 * o2 + F2 * f2 + w2 * u2, this._identityCalculated = false, this;
              }
              function y() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = true), this._identity;
              }
              function g(t2) {
                for (var e2 = 0; e2 < 16; ) {
                  if (t2.props[e2] !== this.props[e2])
                    return false;
                  e2 += 1;
                }
                return true;
              }
              function v(t2) {
                var e2;
                for (e2 = 0; e2 < 16; e2 += 1)
                  t2.props[e2] = this.props[e2];
                return t2;
              }
              function b(t2) {
                var e2;
                for (e2 = 0; e2 < 16; e2 += 1)
                  this.props[e2] = t2[e2];
              }
              function P(t2, e2, r2) {
                return {
                  x: t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12],
                  y: t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13],
                  z: t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14]
                };
              }
              function x(t2, e2, r2) {
                return t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12];
              }
              function E(t2, e2, r2) {
                return t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13];
              }
              function S(t2, e2, r2) {
                return t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14];
              }
              function C() {
                var t2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e2 = this.props[5] / t2, r2 = -this.props[1] / t2, i2 = -this.props[4] / t2, s2 = this.props[0] / t2, a2 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t2, n2 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t2, o2 = new Matrix();
                return o2.props[0] = e2, o2.props[1] = r2, o2.props[4] = i2, o2.props[5] = s2, o2.props[12] = a2, o2.props[13] = n2, o2;
              }
              function _(t2) {
                return this.getInverseMatrix().applyToPointArray(t2[0], t2[1], t2[2] || 0);
              }
              function A(t2) {
                var e2, r2 = t2.length, i2 = [];
                for (e2 = 0; e2 < r2; e2 += 1)
                  i2[e2] = _(t2[e2]);
                return i2;
              }
              function T(t2, e2, r2) {
                var i2 = createTypedArray("float32", 6);
                if (this.isIdentity())
                  i2[0] = t2[0], i2[1] = t2[1], i2[2] = e2[0], i2[3] = e2[1], i2[4] = r2[0], i2[5] = r2[1];
                else {
                  var s2 = this.props[0], a2 = this.props[1], n2 = this.props[4], o2 = this.props[5], h2 = this.props[12], l2 = this.props[13];
                  i2[0] = t2[0] * s2 + t2[1] * n2 + h2, i2[1] = t2[0] * a2 + t2[1] * o2 + l2, i2[2] = e2[0] * s2 + e2[1] * n2 + h2, i2[3] = e2[0] * a2 + e2[1] * o2 + l2, i2[4] = r2[0] * s2 + r2[1] * n2 + h2, i2[5] = r2[0] * a2 + r2[1] * o2 + l2;
                }
                return i2;
              }
              function M(t2, e2, r2) {
                return this.isIdentity() ? [t2, e2, r2] : [
                  t2 * this.props[0] + e2 * this.props[4] + r2 * this.props[8] + this.props[12],
                  t2 * this.props[1] + e2 * this.props[5] + r2 * this.props[9] + this.props[13],
                  t2 * this.props[2] + e2 * this.props[6] + r2 * this.props[10] + this.props[14]
                ];
              }
              function k(t2, e2) {
                if (this.isIdentity())
                  return t2 + "," + e2;
                var r2 = this.props;
                return Math.round(100 * (t2 * r2[0] + e2 * r2[4] + r2[12])) / 100 + "," + Math.round(100 * (t2 * r2[1] + e2 * r2[5] + r2[13])) / 100;
              }
              function D() {
                for (var t2 = 0, e2 = this.props, r2 = "matrix3d("; t2 < 16; )
                  r2 += i(1e4 * e2[t2]) / 1e4, r2 += 15 === t2 ? ")" : ",", t2 += 1;
                return r2;
              }
              function F(t2) {
                return t2 < 1e-6 && t2 > 0 || t2 > -1e-6 && t2 < 0 ? i(1e4 * t2) / 1e4 : t2;
              }
              function w() {
                var t2 = this.props;
                return "matrix(" + F(t2[0]) + "," + F(t2[1]) + "," + F(t2[4]) + "," + F(t2[5]) + "," + F(t2[12]) + "," + F(t2[13]) + ")";
              }
              return function() {
                this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p2, this.skewFromAxis = f, this.shear = l, this.scale = m, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = P, this.applyToX = x, this.applyToY = E, this.applyToZ = S, this.applyToPointArray = M, this.applyToTriplePoints = T, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = A, this.inversePoint = _, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = y, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
              };
            }();
            function _typeof$3(t) {
              return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$3(t);
            }
            var lottie = {};
            function setLocation(t) {
              setLocationHref(t);
            }
            function searchAnimations() {
              animationManager.searchAnimations();
            }
            function setSubframeRendering(t) {
              setSubframeEnabled(t);
            }
            function setPrefix(t) {
              setIdPrefix(t);
            }
            function loadAnimation(t) {
              return animationManager.loadAnimation(t);
            }
            function setQuality(t) {
              if ("string" == typeof t)
                switch (t) {
                  case "high":
                    setDefaultCurveSegments(200);
                    break;
                  default:
                  case "medium":
                    setDefaultCurveSegments(50);
                    break;
                  case "low":
                    setDefaultCurveSegments(10);
                }
              else
                !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
            }
            function inBrowser() {
              return "undefined" != typeof navigator;
            }
            function installPlugin(t, e) {
              "expressions" === t && setExpressionsPlugin(e);
            }
            function getFactory(t) {
              switch (t) {
                case "propertyFactory":
                  return PropertyFactory;
                case "shapePropertyFactory":
                  return ShapePropertyFactory;
                case "matrix":
                  return Matrix;
                default:
                  return null;
              }
            }
            function checkReady() {
              "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
            }
            function getQueryVariable(t) {
              for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                var i = e[r].split("=");
                if (decodeURIComponent(i[0]) == t)
                  return decodeURIComponent(i[1]);
              }
              return null;
            }
            lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.10.2";
            var queryString = "";
            {
              var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
              queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            try {
              "object" === ("undefined" == typeof exports ? "undefined" : _typeof$3(exports)) && "undefined" != typeof module || "function" == typeof define && define.amd || (window.bodymovin = lottie);
            } catch (t) {
            }
            var ShapeModifiers = function() {
              var t = {}, e = {};
              return t.registerModifier = function(t2, r) {
                e[t2] || (e[t2] = r);
              }, t.getModifier = function(t2, r, i) {
                return new e[t2](r, i);
              }, t;
            }();
            function ShapeModifier() {
            }
            function TrimModifier() {
            }
            function PuckerAndBloatModifier() {
            }
            ShapeModifier.prototype.initModifierProperties = function() {
            }, ShapeModifier.prototype.addShapeToModifier = function() {
            }, ShapeModifier.prototype.addShape = function(t) {
              if (!this.closed) {
                t.sh.container.addDynamicProperty(t.sh);
                var e = {
                  shape: t.sh,
                  data: t,
                  localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
              }
            }, ShapeModifier.prototype.init = function(t, e) {
              this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
            }, ShapeModifier.prototype.processKeys = function() {
              this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
            }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
              this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
            }, TrimModifier.prototype.addShapeToModifier = function(t) {
              t.pathsData = [];
            }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
              var a = [];
              e <= 1 ? a.push({ s: t, e }) : t >= 1 ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
              var n, o, h = [], l = a.length;
              for (n = 0; n < l; n += 1) {
                var p2, f;
                if (!((o = a[n]).e * s < i || o.s * s > i + r))
                  p2 = o.s * s <= i ? 0 : (o.s * s - i) / r, f = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p2, f]);
              }
              return h.length || h.push([0, 0]), h;
            }, TrimModifier.prototype.releasePathsData = function(t) {
              var e, r = t.length;
              for (e = 0; e < r; e += 1)
                segmentsLengthPool.release(t[e]);
              return t.length = 0, t;
            }, TrimModifier.prototype.processShapes = function(t) {
              var e, r, i, s;
              if (this._mdf || t) {
                var a = this.o.v % 360 / 360;
                if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                  var n = e;
                  e = r, r = n;
                }
                e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r;
              } else
                e = this.sValue, r = this.eValue;
              var o, h, l, p2, f, m = this.shapes.length, c = 0;
              if (r === e)
                for (s = 0; s < m; s += 1)
                  this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = true, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
              else if (1 === r && 0 === e || 0 === r && 1 === e) {
                if (this._mdf)
                  for (s = 0; s < m; s += 1)
                    this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = true;
              } else {
                var d, u, y = [];
                for (s = 0; s < m; s += 1)
                  if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (h = (i = d.shape.paths)._length, f = 0, !d.shape._mdf && d.pathsData.length)
                      f = d.totalShapeLength;
                    else {
                      for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1)
                        p2 = bez.getSegmentsLength(i.shapes[o]), l.push(p2), f += p2.totalLength;
                      d.totalShapeLength = f, d.pathsData = l;
                    }
                    c += f, d.shape._mdf = true;
                  } else
                    d.shape.paths = d.localShapeCollection;
                var g, v = e, b = r, P = 0;
                for (s = m - 1; s >= 0; s -= 1)
                  if ((d = this.shapes[s]).shape._mdf) {
                    for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && m > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, P, c), P += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
                      v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : v >= 1 ? y.push({
                        s: d.totalShapeLength * (v - 1),
                        e: d.totalShapeLength * (b - 1)
                      }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
                      var x = this.addShapes(d, y[0]);
                      if (y[0].s !== y[0].e) {
                        if (y.length > 1)
                          if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                            var E = x.pop();
                            this.addPaths(x, u), x = this.addShapes(d, y[1], E);
                          } else
                            this.addPaths(x, u), x = this.addShapes(d, y[1]);
                        this.addPaths(x, u);
                      }
                    }
                    d.shape.paths = u;
                  }
              }
            }, TrimModifier.prototype.addPaths = function(t, e) {
              var r, i = t.length;
              for (r = 0; r < i; r += 1)
                e.addShape(t[r]);
            }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
              s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
            }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
              e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
            }, TrimModifier.prototype.addShapes = function(t, e, r) {
              var i, s, a, n, o, h, l, p2, f = t.pathsData, m = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = true;
              for (r ? (o = r._length, p2 = r._length) : (r = shapePool.newElement(), o = 0, p2 = 0), u.push(r), i = 0; i < c; i += 1) {
                for (h = f[i].lengths, r.c = m[i].c, a = m[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
                  if (d + (n = h[s - 1]).addedLength < e.s)
                    d += n.addedLength, r.c = false;
                  else {
                    if (d > e.e) {
                      r.c = false;
                      break;
                    }
                    e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(m[i].v[s - 1], m[i].o[s - 1], m[i].i[s], m[i].v[s], r, o, y), y = false) : (l = bez.getNewSegment(
                      m[i].v[s - 1],
                      m[i].v[s],
                      m[i].o[s - 1],
                      m[i].i[s],
                      (e.s - d) / n.addedLength,
                      (e.e - d) / n.addedLength,
                      h[s - 1]
                    ), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false), d += n.addedLength, o += 1;
                  }
                if (m[i].c && h.length) {
                  if (n = h[s - 1], d <= e.e) {
                    var g = h[s - 1].addedLength;
                    e.s <= d && e.e >= d + g ? (this.addSegment(m[i].v[s - 1], m[i].o[s - 1], m[i].i[0], m[i].v[0], r, o, y), y = false) : (l = bez.getNewSegment(
                      m[i].v[s - 1],
                      m[i].v[0],
                      m[i].o[s - 1],
                      m[i].i[0],
                      (e.s - d) / g,
                      (e.e - d) / g,
                      h[s - 1]
                    ), this.addSegmentFromArray(l, r, o, y), y = false, r.c = false);
                  } else
                    r.c = false;
                  d += n.addedLength, o += 1;
                }
                if (r._length && (r.setXYAt(r.v[p2][0], r.v[p2][1], "i", p2), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e)
                  break;
                i < c - 1 && (r = shapePool.newElement(), y = true, u.push(r), o = 0);
              }
              return u;
            }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
            }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
              var r = e / 100, i = [0, 0], s = t._length, a = 0;
              for (a = 0; a < s; a += 1)
                i[0] += t.v[a][0], i[1] += t.v[a][1];
              i[0] /= s, i[1] /= s;
              var n, o, h, l, p2, f, m = shapePool.newElement();
              for (m.c = t.c, a = 0; a < s; a += 1)
                n = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, h = t.o[a][0] + (i[0] - t.o[a][0]) * -r, l = t.o[a][1] + (i[1] - t.o[a][1]) * -r, p2 = t.i[a][0] + (i[0] - t.i[a][0]) * -r, f = t.i[a][1] + (i[1] - t.i[a][1]) * -r, m.setTripleAt(n, o, h, l, p2, f, a);
              return m;
            }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
              var e, r, i, s, a, n, o = this.shapes.length, h = this.amount.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                      n.addShape(this.processPath(e[i], h));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = false);
            };
            var TransformPropertyFactory = function() {
              var t = [0, 0];
              function e(t2, e2, r) {
                if (this.elem = t2, this.frameId = -1, this.propType = "transform", this.data = e2, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t2), e2.p && e2.p.s ? (this.px = PropertyFactory.getProp(t2, e2.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t2, e2.p.y, 0, 0, this), e2.p.z && (this.pz = PropertyFactory.getProp(t2, e2.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t2, e2.p || { k: [0, 0, 0] }, 1, 0, this), e2.rx) {
                  if (this.rx = PropertyFactory.getProp(t2, e2.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t2, e2.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t2, e2.rz, 0, degToRads, this), e2.or.k[0].ti) {
                    var i, s = e2.or.k.length;
                    for (i = 0; i < s; i += 1)
                      e2.or.k[i].to = null, e2.or.k[i].ti = null;
                  }
                  this.or = PropertyFactory.getProp(t2, e2.or, 1, degToRads, this), this.or.sh = true;
                } else
                  this.r = PropertyFactory.getProp(t2, e2.r || { k: 0 }, 0, degToRads, this);
                e2.sk && (this.sk = PropertyFactory.getProp(t2, e2.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t2, e2.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t2, e2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t2, e2.s || { k: [100, 100, 100] }, 1, 0.01, this), e2.o ? this.o = PropertyFactory.getProp(t2, e2.o, 0, 0.01, t2) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
              }
              return e.prototype = {
                applyToMatrix: function(t2) {
                  var e2 = this._mdf;
                  this.iterateDynamicProperties(), this._mdf = this._mdf || e2, this.a && t2.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t2.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t2.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t2.rotate(-this.r.v) : t2.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t2.translate(this.px.v, this.py.v, -this.pz.v) : t2.translate(this.px.v, this.py.v, 0) : t2.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                },
                getValue: function(e2) {
                  if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || e2) {
                      var r;
                      if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                        var i, s;
                        if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                          this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(
                            this.p.keyframes[this.p.keyframes.length - 1].t / r,
                            0
                          ), s = this.p.getValueAtTime(
                            (this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r,
                            0
                          )) : (i = this.p.pv, s = this.p.getValueAtTime(
                            (this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r,
                            this.p.offsetTime
                          ));
                        else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                          i = [], s = [];
                          var a = this.px, n = this.py;
                          a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / r, 0), i[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / r, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(
                            a.keyframes[a.keyframes.length - 1].t / r,
                            0
                          ), i[1] = n.getValueAtTime(
                            n.keyframes[n.keyframes.length - 1].t / r,
                            0
                          ), s[0] = a.getValueAtTime(
                            (a.keyframes[a.keyframes.length - 1].t - 0.01) / r,
                            0
                          ), s[1] = n.getValueAtTime(
                            (n.keyframes[n.keyframes.length - 1].t - 0.01) / r,
                            0
                          )) : (i = [a.pv, n.pv], s[0] = a.getValueAtTime(
                            (a._caching.lastFrame + a.offsetTime - 0.01) / r,
                            a.offsetTime
                          ), s[1] = n.getValueAtTime(
                            (n._caching.lastFrame + n.offsetTime - 0.01) / r,
                            n.offsetTime
                          ));
                        } else
                          i = s = t;
                        this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]));
                      }
                      this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    }
                    this.frameId = this.elem.globalData.frameId;
                  }
                },
                precalculateMatrix: function() {
                  if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                    if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                      if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                        return;
                      this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
                    }
                    this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
                  }
                },
                autoOrient: function() {
                }
              }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t2) {
                this._addDynamicProperty(t2), this.elem.addDynamicProperty(t2), this._isDirty = true;
              }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                getTransformProperty: function(t2, r, i) {
                  return new e(t2, r, i);
                }
              };
            }();
            function RepeaterModifier() {
            }
            function RoundCornersModifier() {
            }
            function floatEqual(t, e) {
              return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
            }
            function floatZero(t) {
              return Math.abs(t) <= 1e-5;
            }
            function lerp(t, e, r) {
              return t * (1 - r) + e * r;
            }
            function lerpPoint(t, e, r) {
              return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
            }
            function quadRoots(t, e, r) {
              if (0 === t)
                return [];
              var i = e * e - 4 * t * r;
              if (i < 0)
                return [];
              var s = -e / (2 * t);
              if (0 === i)
                return [s];
              var a = Math.sqrt(i) / (2 * t);
              return [s - a, s + a];
            }
            function polynomialCoefficients(t, e, r, i) {
              return [3 * e - t - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
            }
            function singlePoint(t) {
              return new PolynomialBezier(t, t, t, t, false);
            }
            function PolynomialBezier(t, e, r, i, s) {
              s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
              var a = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
              this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i];
            }
            function extrema(t, e) {
              var r = t.points[0][e], i = t.points[t.points.length - 1][e];
              if (r > i) {
                var s = i;
                i = r, r = s;
              }
              for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
                if (a[n] > 0 && a[n] < 1) {
                  var o = t.point(a[n])[e];
                  o < r ? r = o : o > i && (i = o);
                }
              return { min: r, max: i };
            }
            function intersectData(t, e, r) {
              var i = t.boundingBox();
              return {
                cx: i.cx,
                cy: i.cy,
                width: i.width,
                height: i.height,
                bez: t,
                t: (e + r) / 2,
                t1: e,
                t2: r
              };
            }
            function splitData(t) {
              var e = t.bez.split(0.5);
              return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
            }
            function boxIntersect(t, e) {
              return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
            }
            function intersectsImpl(t, e, r, i, s, a) {
              if (boxIntersect(t, e))
                if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i)
                  s.push([t.t, e.t]);
                else {
                  var n = splitData(t), o = splitData(e);
                  intersectsImpl(n[0], o[0], r + 1, i, s, a), intersectsImpl(n[0], o[1], r + 1, i, s, a), intersectsImpl(n[1], o[0], r + 1, i, s, a), intersectsImpl(n[1], o[1], r + 1, i, s, a);
                }
            }
            function crossProduct(t, e) {
              return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
            }
            function lineIntersection(t, e, r, i) {
              var s = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [r[0], r[1], 1], o = [i[0], i[1], 1], h = crossProduct(crossProduct(s, a), crossProduct(n, o));
              return floatZero(h[2]) ? null : [h[0] / h[2], h[1] / h[2]];
            }
            function polarOffset(t, e, r) {
              return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
            }
            function pointDistance(t, e) {
              return Math.hypot(t[0] - e[0], t[1] - e[1]);
            }
            function pointEqual(t, e) {
              return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
            }
            function ZigZagModifier() {
            }
            function setPoint(t, e, r, i, s, a, n) {
              var o = r - Math.PI / 2, h = r + Math.PI / 2, l = e[0] + Math.cos(r) * i * s, p2 = e[1] - Math.sin(r) * i * s;
              t.setTripleAt(
                l,
                p2,
                l + Math.cos(o) * a,
                p2 - Math.sin(o) * a,
                l + Math.cos(h) * n,
                p2 - Math.sin(h) * n,
                t.length()
              );
            }
            function getPerpendicularVector(t, e) {
              var r = [e[0] - t[0], e[1] - t[1]], i = 0.5 * -Math.PI;
              return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
            }
            function getProjectingAngle(t, e) {
              var r = 0 === e ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = getPerpendicularVector(t.v[r], t.v[i]);
              return Math.atan2(0, 1) - Math.atan2(s[1], s[0]);
            }
            function zigZagCorner(t, e, r, i, s, a, n) {
              var o = getProjectingAngle(e, r), h = e.v[r % e._length], l = e.v[0 === r ? e._length - 1 : r - 1], p2 = e.v[(r + 1) % e._length], f = 2 === a ? Math.sqrt(Math.pow(h[0] - l[0], 2) + Math.pow(h[1] - l[1], 2)) : 0, m = 2 === a ? Math.sqrt(Math.pow(h[0] - p2[0], 2) + Math.pow(h[1] - p2[1], 2)) : 0;
              setPoint(t, e.v[r % e._length], o, n, i, m / (2 * (s + 1)), f / (2 * (s + 1)));
            }
            function zigZagSegment(t, e, r, i, s, a) {
              for (var n = 0; n < i; n += 1) {
                var o = (n + 1) / (i + 1), h = 2 === s ? Math.sqrt(
                  Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)
                ) : 0, l = e.normalAngle(o);
                setPoint(t, e.point(o), l, a, r, h / (2 * (i + 1)), h / (2 * (i + 1))), a = -a;
              }
              return a;
            }
            function linearOffset(t, e, r) {
              var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
              return [polarOffset(t, i, r), polarOffset(e, i, r)];
            }
            function offsetSegment(t, e) {
              var r, i, s, a, n, o, h;
              r = (h = linearOffset(t.points[0], t.points[1], e))[0], i = h[1], s = (h = linearOffset(t.points[1], t.points[2], e))[0], a = h[1], n = (h = linearOffset(t.points[2], t.points[3], e))[0], o = h[1];
              var l = lineIntersection(r, i, s, a);
              null === l && (l = i);
              var p2 = lineIntersection(n, o, s, a);
              return null === p2 && (p2 = n), new PolynomialBezier(r, l, p2, o);
            }
            function joinLines(t, e, r, i, s) {
              var a = e.points[3], n = r.points[0];
              if (3 === i)
                return a;
              if (pointEqual(a, n))
                return a;
              if (2 === i) {
                var o = -e.tangentAngle(1), h = -r.tangentAngle(0) + Math.PI, l = lineIntersection(
                  a,
                  polarOffset(a, o + Math.PI / 2, 100),
                  n,
                  polarOffset(n, o + Math.PI / 2, 100)
                ), p2 = l ? pointDistance(l, a) : pointDistance(a, n) / 2, f = polarOffset(a, o, 2 * p2 * roundCorner);
                return t.setXYAt(f[0], f[1], "o", t.length() - 1), f = polarOffset(n, h, 2 * p2 * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], f[0], f[1], t.length()), n;
              }
              var m = lineIntersection(
                pointEqual(a, e.points[2]) ? e.points[0] : e.points[2],
                a,
                n,
                pointEqual(n, r.points[1]) ? r.points[3] : r.points[1]
              );
              return m && pointDistance(m, a) < s ? (t.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], t.length()), m) : a;
            }
            function getIntersection(t, e) {
              var r = t.intersections(e);
              return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
            }
            function pruneSegmentIntersection(t, e) {
              var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
              return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i];
            }
            function pruneIntersections(t) {
              for (var e, r = 1; r < t.length; r += 1)
                e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
              return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
            }
            function offsetSegmentSplit(t, e) {
              var r, i, s, a, n = t.inflectionPoints();
              if (0 === n.length)
                return [offsetSegment(t, e)];
              if (1 === n.length || floatEqual(n[1], 1))
                return r = (s = t.split(n[0]))[0], i = s[1], [offsetSegment(r, e), offsetSegment(i, e)];
              r = (s = t.split(n[0]))[0];
              var o = (n[1] - n[0]) / (1 - n[0]);
              return a = (s = s[1].split(o))[0], i = s[1], [offsetSegment(r, e), offsetSegment(a, e), offsetSegment(i, e)];
            }
            function OffsetPathModifier() {
            }
            function getFontProperties(t) {
              for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a = 0; a < s; a += 1)
                switch (e[a].toLowerCase()) {
                  case "italic":
                    i = "italic";
                    break;
                  case "bold":
                    r = "700";
                    break;
                  case "black":
                    r = "900";
                    break;
                  case "medium":
                    r = "500";
                    break;
                  case "regular":
                  case "normal":
                    r = "400";
                    break;
                  case "light":
                  case "thin":
                    r = "200";
                }
              return { style: i, weight: t.fWeight || r };
            }
            extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
            }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
              var n = a ? -1 : 1, o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
              t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
            }, RepeaterModifier.prototype.init = function(t, e, r, i) {
              for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; )
                r -= 1, this._elements.unshift(e[r]);
              this.dynamicProperties.length ? this.k = true : this.getValue(true);
            }, RepeaterModifier.prototype.resetElements = function(t) {
              var e, r = t.length;
              for (e = 0; e < r; e += 1)
                t[e]._processed = false, "gr" === t[e].ty && this.resetElements(t[e].it);
            }, RepeaterModifier.prototype.cloneElements = function(t) {
              var e = JSON.parse(JSON.stringify(t));
              return this.resetElements(e), e;
            }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
              var r, i = t.length;
              for (r = 0; r < i; r += 1)
                t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
            }, RepeaterModifier.prototype.processShapes = function(t) {
              var e, r, i, s, a, n = false;
              if (this._mdf || t) {
                var o, h = Math.ceil(this.c.v);
                if (this._groups.length < h) {
                  for (; this._groups.length < h; ) {
                    var l = { it: this.cloneElements(this._elements), ty: "gr" };
                    l.it.push({
                      a: { a: 0, ix: 1, k: [0, 0] },
                      nm: "Transform",
                      o: { a: 0, ix: 7, k: 100 },
                      p: { a: 0, ix: 2, k: [0, 0] },
                      r: {
                        a: 1,
                        ix: 6,
                        k: [
                          { s: 0, e: 0, t: 0 },
                          { s: 0, e: 0, t: 1 }
                        ]
                      },
                      s: { a: 0, ix: 3, k: [100, 100] },
                      sa: { a: 0, ix: 5, k: 0 },
                      sk: { a: 0, ix: 4, k: 0 },
                      ty: "tr"
                    }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
                  }
                  this.elem.reloadShapes(), n = true;
                }
                for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
                  if (o = a < h, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                    var p2 = this.elemsData[i].it, f = p2[p2.length - 1];
                    0 !== f.transform.op.v ? (f.transform.op._mdf = true, f.transform.op.v = 0) : f.transform.op._mdf = false;
                  }
                  a += 1;
                }
                this._currentCopies = h;
                var m = this.o.v, c = m % 1, d = m > 0 ? Math.floor(m) : Math.ceil(m), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var v, b, P = 0;
                if (m > 0) {
                  for (; P < d; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), P += 1;
                  c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, false), P += c);
                } else if (m < 0) {
                  for (; P > d; )
                    this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), P -= 1;
                  c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, true), P -= c);
                }
                for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a; ) {
                  if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== P) {
                    for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(
                      y[0],
                      y[1],
                      y[2],
                      y[3],
                      y[4],
                      y[5],
                      y[6],
                      y[7],
                      y[8],
                      y[9],
                      y[10],
                      y[11],
                      y[12],
                      y[13],
                      y[14],
                      y[15]
                    ), this.matrix.transform(
                      g[0],
                      g[1],
                      g[2],
                      g[3],
                      g[4],
                      g[5],
                      g[6],
                      g[7],
                      g[8],
                      g[9],
                      g[10],
                      g[11],
                      g[12],
                      g[13],
                      g[14],
                      g[15]
                    ), this.matrix.transform(
                      u[0],
                      u[1],
                      u[2],
                      u[3],
                      u[4],
                      u[5],
                      u[6],
                      u[7],
                      u[8],
                      u[9],
                      u[10],
                      u[11],
                      u[12],
                      u[13],
                      u[14],
                      u[15]
                    ), v = 0; v < b; v += 1)
                      r[v] = this.matrix.props[v];
                    this.matrix.reset();
                  } else
                    for (this.matrix.reset(), v = 0; v < b; v += 1)
                      r[v] = this.matrix.props[v];
                  P += 1, a -= 1, i += s;
                }
              } else
                for (a = this._currentCopies, i = 0, s = 1; a; )
                  r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, a -= 1, i += s;
              return n;
            }, RepeaterModifier.prototype.addShape = function() {
            }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
            }, RoundCornersModifier.prototype.processPath = function(t, e) {
              var r, i = shapePool.newElement();
              i.c = t.c;
              var s, a, n, o, h, l, p2, f, m, c, d, u, y = t._length, g = 0;
              for (r = 0; r < y; r += 1)
                s = t.v[r], n = t.o[r], a = t.i[r], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p2 = d = s[0] + (o[0] - s[0]) * l, f = u = s[1] - (s[1] - o[1]) * l, m = p2 - (p2 - s[0]) * roundCorner, c = f - (f - s[1]) * roundCorner, i.setTripleAt(p2, f, m, c, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p2 = m = s[0] + (o[0] - s[0]) * l, f = c = s[1] + (o[1] - s[1]) * l, d = p2 - (p2 - s[0]) * roundCorner, u = f - (f - s[1]) * roundCorner, i.setTripleAt(p2, f, m, c, d, u, g), g += 1) : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
              return i;
            }, RoundCornersModifier.prototype.processShapes = function(t) {
              var e, r, i, s, a, n, o = this.shapes.length, h = this.rd.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                      n.addShape(this.processPath(e[i], h));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = false);
            }, PolynomialBezier.prototype.point = function(t) {
              return [
                ((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0],
                ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]
              ];
            }, PolynomialBezier.prototype.derivative = function(t) {
              return [
                (3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0],
                (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]
              ];
            }, PolynomialBezier.prototype.tangentAngle = function(t) {
              var e = this.derivative(t);
              return Math.atan2(e[1], e[0]);
            }, PolynomialBezier.prototype.normalAngle = function(t) {
              var e = this.derivative(t);
              return Math.atan2(e[0], e[1]);
            }, PolynomialBezier.prototype.inflectionPoints = function() {
              var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
              if (floatZero(t))
                return [];
              var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
              if (r < 0)
                return [];
              var i = Math.sqrt(r);
              return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(t2) {
                return t2 > 0 && t2 < 1;
              });
            }, PolynomialBezier.prototype.split = function(t) {
              if (t <= 0)
                return [singlePoint(this.points[0]), this];
              if (t >= 1)
                return [this, singlePoint(this.points[this.points.length - 1])];
              var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), a = lerpPoint(r, i, t), n = lerpPoint(s, a, t);
              return [
                new PolynomialBezier(this.points[0], e, s, n, true),
                new PolynomialBezier(n, a, i, this.points[3], true)
              ];
            }, PolynomialBezier.prototype.bounds = function() {
              return { x: extrema(this, 0), y: extrema(this, 1) };
            }, PolynomialBezier.prototype.boundingBox = function() {
              var t = this.bounds();
              return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
              };
            }, PolynomialBezier.prototype.intersections = function(t, e, r) {
              void 0 === e && (e = 2), void 0 === r && (r = 7);
              var i = [];
              return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
            }, PolynomialBezier.shapeSegment = function(t, e) {
              var r = (e + 1) % t.length();
              return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], true);
            }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
              var r = (e + 1) % t.length();
              return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], true);
            }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length;
            }, ZigZagModifier.prototype.processPath = function(t, e, r, i) {
              var s = t._length, a = shapePool.newElement();
              if (a.c = t.c, t.c || (s -= 1), 0 === s)
                return a;
              var n = -1, o = PolynomialBezier.shapeSegment(t, 0);
              zigZagCorner(a, t, 0, e, r, i, n);
              for (var h = 0; h < s; h += 1)
                n = zigZagSegment(a, o, e, r, i, -n), o = h !== s - 1 || t.c ? PolynomialBezier.shapeSegment(t, (h + 1) % s) : null, zigZagCorner(a, t, h + 1, e, r, i, n);
              return a;
            }, ZigZagModifier.prototype.processShapes = function(t) {
              var e, r, i, s, a, n, o = this.shapes.length, h = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), p2 = this.pointsType.v;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                      n.addShape(this.processPath(e[i], h, l, p2));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = false);
            }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
              this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length;
            }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
              var s = shapePool.newElement();
              s.c = t.c;
              var a, n, o, h = t.length();
              t.c || (h -= 1);
              var l = [];
              for (a = 0; a < h; a += 1)
                o = PolynomialBezier.shapeSegment(t, a), l.push(offsetSegmentSplit(o, e));
              if (!t.c)
                for (a = h - 1; a >= 0; a -= 1)
                  o = PolynomialBezier.shapeSegmentInverted(t, a), l.push(offsetSegmentSplit(o, e));
              l = pruneIntersections(l);
              var p2 = null, f = null;
              for (a = 0; a < l.length; a += 1) {
                var m = l[a];
                for (f && (p2 = joinLines(s, f, m[0], r, i)), f = m[m.length - 1], n = 0; n < m.length; n += 1)
                  o = m[n], p2 && pointEqual(o.points[0], p2) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(
                    o.points[0][0],
                    o.points[0][1],
                    o.points[1][0],
                    o.points[1][1],
                    o.points[0][0],
                    o.points[0][1],
                    s.length()
                  ), s.setTripleAt(
                    o.points[3][0],
                    o.points[3][1],
                    o.points[3][0],
                    o.points[3][1],
                    o.points[2][0],
                    o.points[2][1],
                    s.length()
                  ), p2 = o.points[3];
              }
              return l.length && joinLines(s, f, l[0][0], r, i), s;
            }, OffsetPathModifier.prototype.processShapes = function(t) {
              var e, r, i, s, a, n, o = this.shapes.length, h = this.amount.v, l = this.miterLimit.v, p2 = this.lineJoin;
              if (0 !== h)
                for (r = 0; r < o; r += 1) {
                  if (n = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1)
                      n.addShape(this.processPath(e[i], h, p2, l));
                  a.shape.paths = a.localShapeCollection;
                }
              this.dynamicProperties.length || (this._mdf = false);
            };
            var FontManager = function() {
              var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, e = [];
              e = e.concat([
                2304,
                2305,
                2306,
                2307,
                2362,
                2363,
                2364,
                2364,
                2366,
                2367,
                2368,
                2369,
                2370,
                2371,
                2372,
                2373,
                2374,
                2375,
                2376,
                2377,
                2378,
                2379,
                2380,
                2381,
                2382,
                2383,
                2387,
                2388,
                2389,
                2390,
                2391,
                2402,
                2403
              ]);
              var r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], i = [65039, 8205];
              function s(t2, e2) {
                var r2 = createTag("span");
                r2.setAttribute("aria-hidden", true), r2.style.fontFamily = e2;
                var i2 = createTag("span");
                i2.innerText = "giItT1WQy@!-/#", r2.style.position = "absolute", r2.style.left = "-10000px", r2.style.top = "-10000px", r2.style.fontSize = "300px", r2.style.fontVariant = "normal", r2.style.fontStyle = "normal", r2.style.fontWeight = "normal", r2.style.letterSpacing = "0", r2.appendChild(i2), document.body.appendChild(r2);
                var s2 = i2.offsetWidth;
                return i2.style.fontFamily = function(t3) {
                  var e3, r3 = t3.split(","), i3 = r3.length, s3 = [];
                  for (e3 = 0; e3 < i3; e3 += 1)
                    "sans-serif" !== r3[e3] && "monospace" !== r3[e3] && s3.push(r3[e3]);
                  return s3.join(",");
                }(t2) + ", " + e2, { node: i2, w: s2, parent: r2 };
              }
              function a(t2, e2) {
                var r2, i2 = document.body && e2 ? "svg" : "canvas", s2 = getFontProperties(t2);
                if ("svg" === i2) {
                  var a2 = createNS("text");
                  a2.style.fontSize = "100px", a2.setAttribute("font-family", t2.fFamily), a2.setAttribute("font-style", s2.style), a2.setAttribute("font-weight", s2.weight), a2.textContent = "1", t2.fClass ? (a2.style.fontFamily = "inherit", a2.setAttribute("class", t2.fClass)) : a2.style.fontFamily = t2.fFamily, e2.appendChild(a2), r2 = a2;
                } else {
                  var n2 = new OffscreenCanvas(500, 500).getContext("2d");
                  n2.font = s2.style + " " + s2.weight + " 100px " + t2.fFamily, r2 = n2;
                }
                return {
                  measureText: function(t3) {
                    return "svg" === i2 ? (r2.textContent = t3, r2.getComputedTextLength()) : r2.measureText(t3).width;
                  }
                };
              }
              var n = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
              };
              n.isModifier = function(t2, e2) {
                var i2 = t2.toString(16) + e2.toString(16);
                return -1 !== r.indexOf(i2);
              }, n.isZeroWidthJoiner = function(t2, e2) {
                return e2 ? t2 === i[0] && e2 === i[1] : t2 === i[1];
              }, n.isCombinedCharacter = function(t2) {
                return -1 !== e.indexOf(t2);
              };
              var o = {
                addChars: function(t2) {
                  if (t2) {
                    var e2;
                    this.chars || (this.chars = []);
                    var r2, i2, s2 = t2.length, a2 = this.chars.length;
                    for (e2 = 0; e2 < s2; e2 += 1) {
                      for (r2 = 0, i2 = false; r2 < a2; )
                        this.chars[r2].style === t2[e2].style && this.chars[r2].fFamily === t2[e2].fFamily && this.chars[r2].ch === t2[e2].ch && (i2 = true), r2 += 1;
                      i2 || (this.chars.push(t2[e2]), a2 += 1);
                    }
                  }
                },
                addFonts: function(t2, e2) {
                  if (t2) {
                    if (this.chars)
                      return this.isLoaded = true, void (this.fonts = t2.list);
                    if (!document.body)
                      return this.isLoaded = true, t2.list.forEach(function(t3) {
                        t3.helper = a(t3), t3.cache = {};
                      }), void (this.fonts = t2.list);
                    var r2, i2 = t2.list, n2 = i2.length, o2 = n2;
                    for (r2 = 0; r2 < n2; r2 += 1) {
                      var h, l, p2 = true;
                      if (i2[r2].loaded = false, i2[r2].monoCase = s(i2[r2].fFamily, "monospace"), i2[r2].sansCase = s(i2[r2].fFamily, "sans-serif"), i2[r2].fPath) {
                        if ("p" === i2[r2].fOrigin || 3 === i2[r2].origin) {
                          if ((h = document.querySelectorAll(
                            'style[f-forigin="p"][f-family="' + i2[r2].fFamily + '"], style[f-origin="3"][f-family="' + i2[r2].fFamily + '"]'
                          )).length > 0 && (p2 = false), p2) {
                            var f = createTag("style");
                            f.setAttribute("f-forigin", i2[r2].fOrigin), f.setAttribute("f-origin", i2[r2].origin), f.setAttribute("f-family", i2[r2].fFamily), f.type = "text/css", f.innerText = "@font-face {font-family: " + i2[r2].fFamily + "; font-style: normal; src: url('" + i2[r2].fPath + "');}", e2.appendChild(f);
                          }
                        } else if ("g" === i2[r2].fOrigin || 1 === i2[r2].origin) {
                          for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1)
                            -1 !== h[l].href.indexOf(i2[r2].fPath) && (p2 = false);
                          if (p2) {
                            var m = createTag("link");
                            m.setAttribute("f-forigin", i2[r2].fOrigin), m.setAttribute("f-origin", i2[r2].origin), m.type = "text/css", m.rel = "stylesheet", m.href = i2[r2].fPath, document.body.appendChild(m);
                          }
                        } else if ("t" === i2[r2].fOrigin || 2 === i2[r2].origin) {
                          for (h = document.querySelectorAll(
                            'script[f-forigin="t"], script[f-origin="2"]'
                          ), l = 0; l < h.length; l += 1)
                            i2[r2].fPath === h[l].src && (p2 = false);
                          if (p2) {
                            var c = createTag("link");
                            c.setAttribute("f-forigin", i2[r2].fOrigin), c.setAttribute("f-origin", i2[r2].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", i2[r2].fPath), e2.appendChild(c);
                          }
                        }
                      } else
                        i2[r2].loaded = true, o2 -= 1;
                      i2[r2].helper = a(i2[r2], e2), i2[r2].cache = {}, this.fonts.push(i2[r2]);
                    }
                    0 === o2 ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
                  } else
                    this.isLoaded = true;
                },
                getCharData: function(e2, r2, i2) {
                  for (var s2 = 0, a2 = this.chars.length; s2 < a2; ) {
                    if (this.chars[s2].ch === e2 && this.chars[s2].style === r2 && this.chars[s2].fFamily === i2)
                      return this.chars[s2];
                    s2 += 1;
                  }
                  return ("string" == typeof e2 && 13 !== e2.charCodeAt(0) || !e2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", e2, r2, i2)), t;
                },
                getFontByName: function(t2) {
                  for (var e2 = 0, r2 = this.fonts.length; e2 < r2; ) {
                    if (this.fonts[e2].fName === t2)
                      return this.fonts[e2];
                    e2 += 1;
                  }
                  return this.fonts[0];
                },
                measureText: function(t2, e2, r2) {
                  var i2 = this.getFontByName(e2), s2 = t2.charCodeAt(0);
                  if (!i2.cache[s2 + 1]) {
                    var a2 = i2.helper;
                    if (" " === t2) {
                      var n2 = a2.measureText("|" + t2 + "|"), o2 = a2.measureText("||");
                      i2.cache[s2 + 1] = (n2 - o2) / 100;
                    } else
                      i2.cache[s2 + 1] = a2.measureText(t2) / 100;
                  }
                  return i2.cache[s2 + 1] * r2;
                },
                checkLoadedFonts: function() {
                  var t2, e2, r2, i2 = this.fonts.length, s2 = i2;
                  for (t2 = 0; t2 < i2; t2 += 1)
                    this.fonts[t2].loaded ? s2 -= 1 : "n" === this.fonts[t2].fOrigin || 0 === this.fonts[t2].origin ? this.fonts[t2].loaded = true : (e2 = this.fonts[t2].monoCase.node, r2 = this.fonts[t2].monoCase.w, e2.offsetWidth !== r2 ? (s2 -= 1, this.fonts[t2].loaded = true) : (e2 = this.fonts[t2].sansCase.node, r2 = this.fonts[t2].sansCase.w, e2.offsetWidth !== r2 && (s2 -= 1, this.fonts[t2].loaded = true)), this.fonts[t2].loaded && (this.fonts[t2].sansCase.parent.parentNode.removeChild(
                      this.fonts[t2].sansCase.parent
                    ), this.fonts[t2].monoCase.parent.parentNode.removeChild(
                      this.fonts[t2].monoCase.parent
                    )));
                  0 !== s2 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                },
                setIsLoaded: function() {
                  this.isLoaded = true;
                }
              };
              return n.prototype = o, n;
            }();
            function RenderableElement() {
            }
            RenderableElement.prototype = {
              initRenderable: function() {
                this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
              },
              addRenderableComponent: function(t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
              },
              removeRenderableComponent: function(t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
              },
              prepareRenderableFrame: function(t) {
                this.checkLayerLimits(t);
              },
              checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
              },
              checkLayerLimits: function(t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? true !== this.isInRange && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : false !== this.isInRange && (this.globalData._mdf = true, this.isInRange = false, this.hide());
              },
              renderRenderable: function() {
                var t, e = this.renderableComponents.length;
                for (t = 0; t < e; t += 1)
                  this.renderableComponents[t].renderFrame(this._isFirstFrame);
              },
              sourceRectAtTime: function() {
                return { top: 0, left: 0, width: 100, height: 100 };
              },
              getLayerSize: function() {
                return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
              }
            };
            var getBlendMode = (blendModeEnums = {
              0: "source-over",
              1: "multiply",
              2: "screen",
              3: "overlay",
              4: "darken",
              5: "lighten",
              6: "color-dodge",
              7: "color-burn",
              8: "hard-light",
              9: "soft-light",
              10: "difference",
              11: "exclusion",
              12: "hue",
              13: "saturation",
              14: "color",
              15: "luminosity"
            }, function(t) {
              return blendModeEnums[t] || "";
            }), blendModeEnums;
            function SliderEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
            }
            function AngleEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
            }
            function ColorEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
            }
            function PointEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
            }
            function LayerIndexEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
            }
            function MaskIndexEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
            }
            function CheckboxEffect(t, e, r) {
              this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
            }
            function NoValueEffect() {
              this.p = {};
            }
            function EffectsManager(t, e) {
              var r, i = t.ef || [];
              this.effectElements = [];
              var s, a = i.length;
              for (r = 0; r < a; r += 1)
                s = new GroupEffect(i[r], e), this.effectElements.push(s);
            }
            function GroupEffect(t, e) {
              this.init(t, e);
            }
            function BaseElement() {
            }
            function FrameElement() {
            }
            function FootageElement(t, e, r) {
              this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
            }
            function AudioElement(t, e, r) {
              this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = false, this._canPlay = false;
              var i = this.globalData.getAssetsPath(this.assetData);
              this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
            }
            function BaseRenderer() {
            }
            function TransformElement() {
            }
            function MaskElement(t, e, r) {
              this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
              var i, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
              this.viewData = createSizedArray(n), this.solidPath = "";
              var o, h, l, p2, f, m, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
              for (i = 0; i < n; i += 1)
                if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (g = "mask", v = "mask"), "s" !== c[i].mode && "i" !== c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), s = createNS("path"), "n" === c[i].mode)
                  this.viewData[i] = {
                    op: PropertyFactory.getProp(this.element, c[i].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                    elem: s,
                    lastPath: ""
                  }, a.appendChild(s);
                else {
                  var b;
                  if (d += 1, s.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k ? (g = "mask", v = "mask", m = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (p2 = createNS("filter")).setAttribute("id", b), (f = createNS("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p2.appendChild(f), a.appendChild(p2), s.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : (f = null, m = null), this.storedData[i] = {
                    elem: s,
                    x: m,
                    expan: f,
                    lastPath: "",
                    lastOperator: "",
                    filterId: b,
                    lastRadius: 0
                  }, "i" === c[i].mode) {
                    h = u.length;
                    var P = createNS("g");
                    for (o = 0; o < h; o += 1)
                      P.appendChild(u[o]);
                    var x = createNS("mask");
                    x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(s), a.appendChild(x), P.setAttribute("mask", "url(" + getLocationHref() + "#" + y + "_" + d + ")"), u.length = 0, u.push(P);
                  } else
                    u.push(s);
                  c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                    elem: s,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, c[i].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                    invRect: l
                  }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i]);
                }
              for (this.maskElement = createNS(g), n = u.length, i = 0; i < n; i += 1)
                this.maskElement.appendChild(u[i]);
              d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
            }
            extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
              var r;
              this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
              var i, s = this.data.ef.length, a = this.data.ef;
              for (r = 0; r < s; r += 1) {
                switch (i = null, a[r].ty) {
                  case 0:
                    i = new SliderEffect(a[r], e, this);
                    break;
                  case 1:
                    i = new AngleEffect(a[r], e, this);
                    break;
                  case 2:
                    i = new ColorEffect(a[r], e, this);
                    break;
                  case 3:
                    i = new PointEffect(a[r], e, this);
                    break;
                  case 4:
                  case 7:
                    i = new CheckboxEffect(a[r], e, this);
                    break;
                  case 10:
                    i = new LayerIndexEffect(a[r], e, this);
                    break;
                  case 11:
                    i = new MaskIndexEffect(a[r], e, this);
                    break;
                  case 5:
                    i = new EffectsManager(a[r], e);
                    break;
                  default:
                    i = new NoValueEffect(a[r]);
                }
                i && this.effectElements.push(i);
              }
            }, BaseElement.prototype = {
              checkMasks: function() {
                if (!this.data.hasMask)
                  return false;
                for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                  if ("n" !== this.data.masksProperties[t].mode && false !== this.data.masksProperties[t].cl)
                    return true;
                  t += 1;
                }
                return false;
              },
              initExpressions: function() {
                var t = getExpressionInterfaces();
                if (t) {
                  var e = t("layer"), r = t("effects"), i = t("shape"), s = t("text"), a = t("comp");
                  this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                  var n = r.createEffectsInterface(this, this.layerInterface);
                  this.layerInterface.registerEffectsInterface(n), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(
                    this.shapesData,
                    this.itemsData,
                    this.layerInterface
                  ), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = s(this), this.layerInterface.text = this.layerInterface.textInterface);
                }
              },
              setBlendMode: function() {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
              },
              initBaseData: function(t, e, r) {
                this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
              },
              getType: function() {
                return this.type;
              },
              sourceRectAtTime: function() {
              }
            }, FrameElement.prototype = {
              initFrame: function() {
                this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
              },
              prepareProperties: function(t, e) {
                var r, i = this.dynamicProperties.length;
                for (r = 0; r < i; r += 1)
                  (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = true, this._mdf = true));
              },
              addDynamicProperty: function(t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
              }
            }, FootageElement.prototype.prepareFrame = function() {
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
              return null;
            }, FootageElement.prototype.renderFrame = function() {
            }, FootageElement.prototype.destroy = function() {
            }, FootageElement.prototype.initExpressions = function() {
              var t = getExpressionInterfaces();
              if (t) {
                var e = t("footage");
                this.layerInterface = e(this);
              }
            }, FootageElement.prototype.getFootageData = function() {
              return this.footageData;
            }, AudioElement.prototype.prepareFrame = function(t) {
              if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder)
                this._currentTime = t / this.data.sr;
              else {
                var e = this.tm.v;
                this._currentTime = e;
              }
              this._volume = this.lv.v[0];
              var r = this._volume * this._volumeMultiplier;
              this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
            }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
              this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
            }, AudioElement.prototype.show = function() {
            }, AudioElement.prototype.hide = function() {
              this.audio.pause(), this._isPlaying = false;
            }, AudioElement.prototype.pause = function() {
              this.audio.pause(), this._isPlaying = false, this._canPlay = false;
            }, AudioElement.prototype.resume = function() {
              this._canPlay = true;
            }, AudioElement.prototype.setRate = function(t) {
              this.audio.rate(t);
            }, AudioElement.prototype.volume = function(t) {
              this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
            }, AudioElement.prototype.getBaseElement = function() {
              return null;
            }, AudioElement.prototype.destroy = function() {
            }, AudioElement.prototype.sourceRectAtTime = function() {
            }, AudioElement.prototype.initExpressions = function() {
            }, BaseRenderer.prototype.checkLayers = function(t) {
              var e, r, i = this.layers.length;
              for (this.completeLayers = true, e = i - 1; e >= 0; e -= 1)
                this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
              this.checkPendingElements();
            }, BaseRenderer.prototype.createItem = function(t) {
              switch (t.ty) {
                case 2:
                  return this.createImage(t);
                case 0:
                  return this.createComp(t);
                case 1:
                  return this.createSolid(t);
                case 3:
                default:
                  return this.createNull(t);
                case 4:
                  return this.createShape(t);
                case 5:
                  return this.createText(t);
                case 6:
                  return this.createAudio(t);
                case 13:
                  return this.createCamera(t);
                case 15:
                  return this.createFootage(t);
              }
            }, BaseRenderer.prototype.createCamera = function() {
              throw new Error("You're using a 3d camera. Try the html renderer.");
            }, BaseRenderer.prototype.createAudio = function(t) {
              return new AudioElement(t, this.globalData, this);
            }, BaseRenderer.prototype.createFootage = function(t) {
              return new FootageElement(t, this.globalData, this);
            }, BaseRenderer.prototype.buildAllItems = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                this.buildItem(t);
              this.checkPendingElements();
            }, BaseRenderer.prototype.includeLayers = function(t) {
              var e;
              this.completeLayers = false;
              var r, i = t.length, s = this.layers.length;
              for (e = 0; e < i; e += 1)
                for (r = 0; r < s; ) {
                  if (this.layers[r].id === t[e].id) {
                    this.layers[r] = t[e];
                    break;
                  }
                  r += 1;
                }
            }, BaseRenderer.prototype.setProjectInterface = function(t) {
              this.globalData.projectInterface = t;
            }, BaseRenderer.prototype.initItems = function() {
              this.globalData.progressiveLoad || this.buildAllItems();
            }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
              for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
                s[a].ind == e && (i[a] && true !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
            }, BaseRenderer.prototype.addPendingElement = function(t) {
              this.pendingElements.push(t);
            }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
              var e, r = t.length;
              for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                  var i = this.createComp(t[e]);
                  i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
                }
            }, BaseRenderer.prototype.getElementById = function(t) {
              var e, r = this.elements.length;
              for (e = 0; e < r; e += 1)
                if (this.elements[e].data.ind === t)
                  return this.elements[e];
              return null;
            }, BaseRenderer.prototype.getElementByPath = function(t) {
              var e, r = t.shift();
              if ("number" == typeof r)
                e = this.elements[r];
              else {
                var i, s = this.elements.length;
                for (i = 0; i < s; i += 1)
                  if (this.elements[i].data.nm === r) {
                    e = this.elements[i];
                    break;
                  }
              }
              return 0 === t.length ? e : e.getElementByPath(t);
            }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
              this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
            }, TransformElement.prototype = {
              initTransform: function() {
                this.finalTransform = {
                  mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 },
                  _matMdf: false,
                  _opMdf: false,
                  mat: new Matrix()
                }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
              },
              renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                  var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
                  if (!this.finalTransform._matMdf)
                    for (; r < i; ) {
                      if (this.hierarchy[r].finalTransform.mProp._mdf) {
                        this.finalTransform._matMdf = true;
                        break;
                      }
                      r += 1;
                    }
                  if (this.finalTransform._matMdf)
                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1)
                      t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(
                        t[0],
                        t[1],
                        t[2],
                        t[3],
                        t[4],
                        t[5],
                        t[6],
                        t[7],
                        t[8],
                        t[9],
                        t[10],
                        t[11],
                        t[12],
                        t[13],
                        t[14],
                        t[15]
                      );
                }
              },
              globalToLocal: function(t) {
                var e = [];
                e.push(this.finalTransform);
                for (var r, i = true, s = this.comp; i; )
                  s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : i = false;
                var a, n = e.length;
                for (r = 0; r < n; r += 1)
                  a = e[r].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
                return t;
              },
              mHelper: new Matrix()
            }, MaskElement.prototype.getMaskProperty = function(t) {
              return this.viewData[t].prop;
            }, MaskElement.prototype.renderFrame = function(t) {
              var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
              for (e = 0; e < i; e += 1)
                if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                  var s = this.storedData[e].expan;
                  this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute(
                    "filter",
                    "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")"
                  )), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
                }
            }, MaskElement.prototype.getMaskelement = function() {
              return this.maskElement;
            }, MaskElement.prototype.createLayerSolidPath = function() {
              var t = "M0,0 ";
              return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
            }, MaskElement.prototype.drawPath = function(t, e, r) {
              var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
              for (s = e._length, i = 1; i < s; i += 1)
                a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
              if (e.c && s > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
                var n = "";
                r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a;
              }
            }, MaskElement.prototype.destroy = function() {
              this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
            };
            var filtersFactory = function() {
              var t = {};
              return t.createFilter = function(t2, e) {
                var r = createNS("filter");
                r.setAttribute("id", t2), true !== e && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%"));
                return r;
              }, t.createAlphaToLuminanceFilter = function() {
                var t2 = createNS("feColorMatrix");
                return t2.setAttribute("type", "matrix"), t2.setAttribute("color-interpolation-filters", "sRGB"), t2.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t2;
              }, t;
            }(), featureSupport = function() {
              var t = {
                maskType: true,
                svgLumaHidden: true,
                offscreenCanvas: "undefined" != typeof OffscreenCanvas
              };
              return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = false), t;
            }(), registeredEffects = {}, idPrefix = "filter_result_";
            function SVGEffects(t) {
              var e, r, i = "SourceGraphic", s = t.data.ef ? t.data.ef.length : 0, a = createElementID(), n = filtersFactory.createFilter(a, true), o = 0;
              for (this.filters = [], e = 0; e < s; e += 1) {
                r = null;
                var h = t.data.ef[e].ty;
                if (registeredEffects[h])
                  r = new registeredEffects[h].effect(
                    n,
                    t.effectsManager.effectElements[e],
                    t,
                    idPrefix + o,
                    i
                  ), i = idPrefix + o, registeredEffects[h].countsAsEffect && (o += 1);
                r && this.filters.push(r);
              }
              o && (t.globalData.defs.appendChild(n), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this);
            }
            function registerEffect(t, e, r) {
              registeredEffects[t] = { effect: e, countsAsEffect: r };
            }
            function SVGBaseElement() {
            }
            function HierarchyElement() {
            }
            function RenderableDOMElement() {
            }
            function IImageElement(t, e, r) {
              this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
            }
            function ProcessedElement(t, e) {
              this.elem = t, this.pos = e;
            }
            function IShapeElement() {
            }
            SVGEffects.prototype.renderFrame = function(t) {
              var e, r = this.filters.length;
              for (e = 0; e < r; e += 1)
                this.filters[e].renderFrame(t);
            }, SVGBaseElement.prototype = {
              initRendererElement: function() {
                this.layerElement = createNS("g");
              },
              createContainerElements: function() {
                this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
                var t = null;
                if (this.data.td) {
                  this.matteMasks = {};
                  var e = createNS("g");
                  e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
                } else
                  this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                  var r = createNS("clipPath"), i = createNS("path");
                  i.setAttribute(
                    "d",
                    "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"
                  );
                  var s = createElementID();
                  if (r.setAttribute("id", s), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                    var a = createNS("g");
                    a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
                  } else
                    this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")");
                }
                0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
              },
              destroyBaseElement: function() {
                this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
              },
              getBaseElement: function() {
                return this.data.hd ? null : this.baseElement;
              },
              createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
              },
              getMatte: function(t) {
                if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
                  var e, r, i, s, a = this.layerId + "_" + t;
                  if (1 === t || 3 === t) {
                    var n = createNS("mask");
                    n.setAttribute("id", a), n.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId
                    ), n.appendChild(i), this.globalData.defs.appendChild(n), featureSupport.maskType || 1 !== t || (n.setAttribute("mask-type", "luminance"), e = createElementID(), r = filtersFactory.createFilter(e), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (s = createNS("g")).appendChild(i), n.appendChild(s), s.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"));
                  } else if (2 === t) {
                    var o = createNS("mask");
                    o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                    var h = createNS("g");
                    o.appendChild(h), e = createElementID(), r = filtersFactory.createFilter(e);
                    var l = createNS("feComponentTransfer");
                    l.setAttribute("in", "SourceGraphic"), r.appendChild(l);
                    var p2 = createNS("feFuncA");
                    p2.setAttribute("type", "table"), p2.setAttribute("tableValues", "1.0 0.0"), l.appendChild(p2), this.globalData.defs.appendChild(r);
                    var f = createNS("rect");
                    f.setAttribute("width", this.comp.data.w), f.setAttribute("height", this.comp.data.h), f.setAttribute("x", "0"), f.setAttribute("y", "0"), f.setAttribute("fill", "#ffffff"), f.setAttribute("opacity", "0"), h.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), h.appendChild(f), (i = createNS("use")).setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      "href",
                      "#" + this.layerId
                    ), h.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), s = createNS("g"), h.appendChild(f), s.appendChild(this.layerElement), h.appendChild(s)), this.globalData.defs.appendChild(o);
                  }
                  this.matteMasks[t] = a;
                }
                return this.matteMasks[t];
              },
              setMatte: function(t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
              }
            }, HierarchyElement.prototype = {
              initHierarchy: function() {
                this.hierarchy = [], this._isParent = false, this.checkParenting();
              },
              setHierarchy: function(t) {
                this.hierarchy = t;
              },
              setAsParent: function() {
                this._isParent = true;
              },
              checkParenting: function() {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
              }
            }, extendPrototype(
              [
                RenderableElement,
                createProxyFunction({
                  initElement: function(t, e, r) {
                    this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
                  },
                  hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = true);
                  },
                  show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = false, this._isFirstFrame = true);
                  },
                  renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
                  },
                  renderInnerContent: function() {
                  },
                  prepareFrame: function(t) {
                    this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
                  },
                  destroy: function() {
                    this.innerElem = null, this.destroyBaseElement();
                  }
                })
              ],
              RenderableDOMElement
            ), extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
              ],
              IImageElement
            ), IImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData);
              this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute(
                "preserveAspectRatio",
                this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio
              ), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
            }, IImageElement.prototype.sourceRectAtTime = function() {
              return this.sourceRect;
            }, IShapeElement.prototype = {
              addShapeToModifiers: function(t) {
                var e, r = this.shapeModifiers.length;
                for (e = 0; e < r; e += 1)
                  this.shapeModifiers[e].addShape(t);
              },
              isShapeInAnimatedModifiers: function(t) {
                for (var e = this.shapeModifiers.length; 0 < e; )
                  if (this.shapeModifiers[0].isAnimatedWithShape(t))
                    return true;
                return false;
              },
              renderModifiers: function() {
                if (this.shapeModifiers.length) {
                  var t, e = this.shapes.length;
                  for (t = 0; t < e; t += 1)
                    this.shapes[t].sh.reset();
                  for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                    ;
                }
              },
              searchProcessedElement: function(t) {
                for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
                  if (e[r].elem === t)
                    return e[r].pos;
                  r += 1;
                }
                return 0;
              },
              addProcessedElement: function(t, e) {
                for (var r = this.processedElements, i = r.length; i; )
                  if (r[i -= 1].elem === t)
                    return void (r[i].pos = e);
                r.push(new ProcessedElement(t, e));
              },
              prepareFrame: function(t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
              }
            };
            var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
            function SVGShapeData(t, e, r) {
              this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
              for (var i = 0, s = t.length; i < s; ) {
                if (t[i].mProps.dynamicProperties.length) {
                  this._isAnimated = true;
                  break;
                }
                i += 1;
              }
            }
            function SVGStyleData(t, e) {
              this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = true === t.hd, this.pElem = createNS("path"), this.msElem = null;
            }
            function DashProperty(t, e, r, i) {
              var s;
              this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
              var a, n = e.length || 0;
              for (s = 0; s < n; s += 1)
                a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
              this.k || this.getValue(true), this._isAnimated = this.k;
            }
            function SVGStrokeStyleData(t, e, r) {
              this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
            }
            function SVGFillStyleData(t, e, r) {
              this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
            }
            function SVGNoStyleData(t, e, r) {
              this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
            }
            function GradientProperty(t, e, r) {
              this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
              var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
              this.o = createTypedArray("float32", i), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
            }
            function SVGGradientFillStyleData(t, e, r) {
              this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
            }
            function SVGGradientStrokeStyleData(t, e, r) {
              this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
            }
            function ShapeGroupData() {
              this.it = [], this.prevViewData = [], this.gr = createNS("g");
            }
            function SVGTransformData(t, e, r) {
              this.transform = { mProps: t, op: e, container: r }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
            }
            SVGShapeData.prototype.setAsAnimated = function() {
              this._isAnimated = true;
            }, SVGStyleData.prototype.reset = function() {
              this.d = "", this._mdf = false;
            }, DashProperty.prototype.getValue = function(t) {
              if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
                var e = 0, r = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1)
                  "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
              }
            }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
              for (var r = 0, i = this.o.length / 2; r < i; ) {
                if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > 0.01)
                  return false;
                r += 1;
              }
              return true;
            }, GradientProperty.prototype.checkCollapsable = function() {
              if (this.o.length / 2 != this.c.length / 4)
                return false;
              if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e; ) {
                  if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                    return false;
                  t += 1;
                }
              else if (!this.comparePoints(this.data.k.k, this.data.p))
                return false;
              return true;
            }, GradientProperty.prototype.getValue = function(t) {
              if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
                var e, r, i, s = 4 * this.data.p;
                for (e = 0; e < s; e += 1)
                  r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
                if (this.o.length)
                  for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1)
                    r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
                this._mdf = !t;
              }
            }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
              this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
            }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
              var r = createElementID(), i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
              i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
              var s, a, n, o = [];
              for (n = 4 * e.g.p, a = 0; a < n; a += 4)
                s = createNS("stop"), i.appendChild(s), o.push(s);
              t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o;
            }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
              if (this.g._hasOpacity && !this.g._collapsable) {
                var r, i, s, a = createNS("mask"), n = createNS("path");
                a.appendChild(n);
                var o = createElementID(), h = createElementID();
                a.setAttribute("id", h);
                var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                var p2 = this.stops;
                for (i = 4 * t.g.p; i < s; i += 2)
                  (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p2.push(r);
                n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p2, this.maskId = h, e.msElem = n;
              }
            }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var buildShapeString = function(t, e, r, i) {
              if (0 === e)
                return "";
              var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
              for (s = 1; s < e; s += 1)
                h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
              return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
            }, SVGElementsRenderer = function() {
              var t = new Matrix(), e = new Matrix();
              function r(t2, e2, r2) {
                (r2 || e2.transform.op._mdf) && e2.transform.container.setAttribute("opacity", e2.transform.op.v), (r2 || e2.transform.mProps._mdf) && e2.transform.container.setAttribute("transform", e2.transform.mProps.v.to2dCSS());
              }
              function i() {
              }
              function s(r2, i2, s2) {
                var a2, n2, o2, h2, l, p2, f, m, c, d, u, y = i2.styles.length, g = i2.lvl;
                for (p2 = 0; p2 < y; p2 += 1) {
                  if (h2 = i2.sh._mdf || s2, i2.styles[p2].lvl < g) {
                    for (m = e.reset(), d = g - i2.styles[p2].lvl, u = i2.transformers.length - 1; !h2 && d > 0; )
                      h2 = i2.transformers[u].mProps._mdf || h2, d -= 1, u -= 1;
                    if (h2)
                      for (d = g - i2.styles[p2].lvl, u = i2.transformers.length - 1; d > 0; )
                        c = i2.transformers[u].mProps.v.props, m.transform(
                          c[0],
                          c[1],
                          c[2],
                          c[3],
                          c[4],
                          c[5],
                          c[6],
                          c[7],
                          c[8],
                          c[9],
                          c[10],
                          c[11],
                          c[12],
                          c[13],
                          c[14],
                          c[15]
                        ), d -= 1, u -= 1;
                  } else
                    m = t;
                  if (n2 = (f = i2.sh.paths)._length, h2) {
                    for (o2 = "", a2 = 0; a2 < n2; a2 += 1)
                      (l = f.shapes[a2]) && l._length && (o2 += buildShapeString(l, l._length, l.c, m));
                    i2.caches[p2] = o2;
                  } else
                    o2 = i2.caches[p2];
                  i2.styles[p2].d += true === r2.hd ? "" : o2, i2.styles[p2]._mdf = h2 || i2.styles[p2]._mdf;
                }
              }
              function a(t2, e2, r2) {
                var i2 = e2.style;
                (e2.c._mdf || r2) && i2.pElem.setAttribute(
                  "fill",
                  "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"
                ), (e2.o._mdf || r2) && i2.pElem.setAttribute("fill-opacity", e2.o.v);
              }
              function n(t2, e2, r2) {
                o(t2, e2, r2), h(t2, e2, r2);
              }
              function o(t2, e2, r2) {
                var i2, s2, a2, n2, o2, h2 = e2.gf, l = e2.g._hasOpacity, p2 = e2.s.v, f = e2.e.v;
                if (e2.o._mdf || r2) {
                  var m = "gf" === t2.ty ? "fill-opacity" : "stroke-opacity";
                  e2.style.pElem.setAttribute(m, e2.o.v);
                }
                if (e2.s._mdf || r2) {
                  var c = 1 === t2.t ? "x1" : "cx", d = "x1" === c ? "y1" : "cy";
                  h2.setAttribute(c, p2[0]), h2.setAttribute(d, p2[1]), l && !e2.g._collapsable && (e2.of.setAttribute(c, p2[0]), e2.of.setAttribute(d, p2[1]));
                }
                if (e2.g._cmdf || r2) {
                  i2 = e2.cst;
                  var u = e2.g.c;
                  for (a2 = i2.length, s2 = 0; s2 < a2; s2 += 1)
                    (n2 = i2[s2]).setAttribute("offset", u[4 * s2] + "%"), n2.setAttribute(
                      "stop-color",
                      "rgb(" + u[4 * s2 + 1] + "," + u[4 * s2 + 2] + "," + u[4 * s2 + 3] + ")"
                    );
                }
                if (l && (e2.g._omdf || r2)) {
                  var y = e2.g.o;
                  for (a2 = (i2 = e2.g._collapsable ? e2.cst : e2.ost).length, s2 = 0; s2 < a2; s2 += 1)
                    n2 = i2[s2], e2.g._collapsable || n2.setAttribute("offset", y[2 * s2] + "%"), n2.setAttribute("stop-opacity", y[2 * s2 + 1]);
                }
                if (1 === t2.t)
                  (e2.e._mdf || r2) && (h2.setAttribute("x2", f[0]), h2.setAttribute("y2", f[1]), l && !e2.g._collapsable && (e2.of.setAttribute("x2", f[0]), e2.of.setAttribute("y2", f[1])));
                else if ((e2.s._mdf || e2.e._mdf || r2) && (o2 = Math.sqrt(Math.pow(p2[0] - f[0], 2) + Math.pow(p2[1] - f[1], 2)), h2.setAttribute("r", o2), l && !e2.g._collapsable && e2.of.setAttribute("r", o2)), e2.e._mdf || e2.h._mdf || e2.a._mdf || r2) {
                  o2 || (o2 = Math.sqrt(Math.pow(p2[0] - f[0], 2) + Math.pow(p2[1] - f[1], 2)));
                  var g = Math.atan2(f[1] - p2[1], f[0] - p2[0]), v = e2.h.v;
                  v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
                  var b = o2 * v, P = Math.cos(g + e2.a.v) * b + p2[0], x = Math.sin(g + e2.a.v) * b + p2[1];
                  h2.setAttribute("fx", P), h2.setAttribute("fy", x), l && !e2.g._collapsable && (e2.of.setAttribute("fx", P), e2.of.setAttribute("fy", x));
                }
              }
              function h(t2, e2, r2) {
                var i2 = e2.style, s2 = e2.d;
                s2 && (s2._mdf || r2) && s2.dashStr && (i2.pElem.setAttribute("stroke-dasharray", s2.dashStr), i2.pElem.setAttribute("stroke-dashoffset", s2.dashoffset[0])), e2.c && (e2.c._mdf || r2) && i2.pElem.setAttribute(
                  "stroke",
                  "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"
                ), (e2.o._mdf || r2) && i2.pElem.setAttribute("stroke-opacity", e2.o.v), (e2.w._mdf || r2) && (i2.pElem.setAttribute("stroke-width", e2.w.v), i2.msElem && i2.msElem.setAttribute("stroke-width", e2.w.v));
              }
              return {
                createRenderFunction: function(t2) {
                  switch (t2.ty) {
                    case "fl":
                      return a;
                    case "gf":
                      return o;
                    case "gs":
                      return n;
                    case "st":
                      return h;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                      return s;
                    case "tr":
                      return r;
                    case "no":
                      return i;
                    default:
                      return null;
                  }
                }
              };
            }();
            function SVGShapeElement(t, e, r) {
              this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
            }
            function LetterProps(t, e, r, i, s, a) {
              this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = { o: true, sw: !!e, sc: !!r, fc: !!i, m: true, p: true };
            }
            function TextProperty(t, e) {
              this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: false,
                strokeColorAnim: false,
                strokeWidthAnim: false,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: false
              }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
            }
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement
              ],
              SVGShapeElement
            ), SVGShapeElement.prototype.initSecondaryElement = function() {
            }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
            }, SVGShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
            }, SVGShapeElement.prototype.filterUniqueShapes = function() {
              var t, e, r, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = false;
              for (r = 0; r < a; r += 1) {
                for (i = this.stylesList[r], o = false, n.length = 0, t = 0; t < s; t += 1)
                  -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
                n.length > 1 && o && this.setShapesAsAnimated(n);
              }
            }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
              var e, r = t.length;
              for (e = 0; e < r; e += 1)
                t[e].setAsAnimated();
            }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
              var r, i = new SVGStyleData(t, e), s = i.pElem;
              if ("st" === t.ty)
                r = new SVGStrokeStyleData(this, t, i);
              else if ("fl" === t.ty)
                r = new SVGFillStyleData(this, t, i);
              else if ("gf" === t.ty || "gs" === t.ty) {
                r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
              } else
                "no" === t.ty && (r = new SVGNoStyleData(this, t, i));
              return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
            }, SVGShapeElement.prototype.createGroupElement = function(t) {
              var e = new ShapeGroupData();
              return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
            }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
              var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
              return this.addToAnimatedContents(t, i), i;
            }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
              var i = 4;
              "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
              var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
              return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
            }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
              for (var r = 0, i = this.animatedContents.length; r < i; ) {
                if (this.animatedContents[r].element === e)
                  return;
                r += 1;
              }
              this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(t),
                element: e,
                data: t
              });
            }, SVGShapeElement.prototype.setElementStyles = function(t) {
              var e, r = t.styles, i = this.stylesList.length;
              for (e = 0; e < i; e += 1)
                this.stylesList[e].closed || r.push(this.stylesList[e]);
            }, SVGShapeElement.prototype.reloadShapes = function() {
              var t;
              this._isFirstFrame = true;
              var e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.layerElement,
                0,
                [],
                true
              ), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
              this.renderModifiers();
            }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
              var o, h, l, p2, f, m, c = [].concat(a), d = t.length - 1, u = [], y = [];
              for (o = d; o >= 0; o -= 1) {
                if ((m = this.searchProcessedElement(t[o])) ? e[o] = r[m - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty)
                  m ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), u.push(e[o].style);
                else if ("gr" === t[o].ty) {
                  if (m)
                    for (l = e[o].it.length, h = 0; h < l; h += 1)
                      e[o].prevViewData[h] = e[o].it[h];
                  else
                    e[o] = this.createGroupElement(t[o]);
                  this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
                } else
                  "tr" === t[o].ty ? (m || (e[o] = this.createTransformElement(t[o], i)), p2 = e[o].transform, c.push(p2)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (m || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (m ? (f = e[o]).closed = false : ((f = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = f, this.shapeModifiers.push(f)), y.push(f)) : "rp" === t[o].ty && (m ? (f = e[o]).closed = true : (f = ShapeModifiers.getModifier(t[o].ty), e[o] = f, f.init(this, t, o, e), this.shapeModifiers.push(f), n = false), y.push(f));
                this.addProcessedElement(t[o], o + 1);
              }
              for (d = u.length, o = 0; o < d; o += 1)
                u[o].closed = true;
              for (d = y.length, o = 0; o < d; o += 1)
                y[o].closed = true;
            }, SVGShapeElement.prototype.renderInnerContent = function() {
              var t;
              this.renderModifiers();
              var e = this.stylesList.length;
              for (t = 0; t < e; t += 1)
                this.stylesList[t].reset();
              for (this.renderShape(), t = 0; t < e; t += 1)
                (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
            }, SVGShapeElement.prototype.renderShape = function() {
              var t, e, r = this.animatedContents.length;
              for (t = 0; t < r; t += 1)
                e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && true !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
            }, SVGShapeElement.prototype.destroy = function() {
              this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
            }, LetterProps.prototype.update = function(t, e, r, i, s, a) {
              this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
              var n = false;
              return this.o !== t && (this.o = t, this._mdf.o = true, n = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, n = true), this.sc !== r && (this.sc = r, this._mdf.sc = true, n = true), this.fc !== i && (this.fc = i, this._mdf.fc = true, n = true), this.m !== s && (this.m = s, this._mdf.m = true, n = true), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = true, n = true), n;
            }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }, TextProperty.prototype.setCurrentData = function(t) {
              t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
            }, TextProperty.prototype.searchProperty = function() {
              return this.searchKeyframes();
            }, TextProperty.prototype.searchKeyframes = function() {
              return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
            }, TextProperty.prototype.addEffect = function(t) {
              this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.getValue = function(t) {
              if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData, r = this.keysIndex;
                if (this.lock)
                  this.setCurrentData(this.currentData);
                else {
                  var i;
                  this.lock = true, this._mdf = false;
                  var s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
                  for (i = 0; i < s; i += 1)
                    a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                  e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
                }
              }
            }, TextProperty.prototype.getKeyframeValue = function() {
              for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
                r += 1;
              return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
            }, TextProperty.prototype.buildFinalText = function(t) {
              for (var e, r, i = [], s = 0, a = t.length, n = false; s < a; )
                e = t.charCodeAt(s), FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(s + 1)) >= 56320 && r <= 57343 ? (n || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(s, 2), n = false) : i.push(t.substr(s, 2)), s += 1) : i.push(t.charAt(s)) : e > 56319 ? (r = t.charCodeAt(s + 1), FontManager.isZeroWidthJoiner(e, r) ? (n = true, i[i.length - 1] += t.substr(s, 2), s += 1) : i.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(s), n = true) : i.push(t.charAt(s)), s += 1;
              return i;
            }, TextProperty.prototype.completeTextData = function(t) {
              t.__complete = true;
              var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p2 = [], f = 0, m = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), P = 0, x = getFontProperties(b);
              t.fWeight = x.weight, t.fStyle = x.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
              var E, S = t.tr / 1e3 * t.finalSize;
              if (t.sz)
                for (var C, _, A = true, T = t.sz[0], M = t.sz[1]; A; ) {
                  C = 0, g = 0, r = (_ = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
                  var k = -1;
                  for (e = 0; e < r; e += 1)
                    E = _[e].charCodeAt(0), i = false, " " === _[e] ? k = e : 13 !== E && 3 !== E || (g = 0, i = true, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(_[e], b.fStyle, b.fFamily), P = i ? 0 : o.w * t.finalSize / 100) : P = h.measureText(_[e], t.f, t.finalSize), g + P > T && " " !== _[e] ? (-1 === k ? r += 1 : e = k, C += t.finalLineHeight || 1.2 * t.finalSize, _.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += P, g += S);
                  C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && M < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = _, r = t.finalText.length, A = false);
                }
              g = -S, P = 0;
              var D, F = 0;
              for (e = 0; e < r; e += 1)
                if (i = false, 13 === (E = (D = t.finalText[e]).charCodeAt(0)) || 3 === E ? (F = 0, y.push(g), v = g > v ? g : v, g = -2 * S, s = "", i = true, u += 1) : s = D, h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), P = i ? 0 : o.w * t.finalSize / 100) : P = h.measureText(s, t.f, t.finalSize), " " === D ? F += P + S : (g += P + S + F, F = 0), p2.push({
                  l: P,
                  an: P,
                  add: c,
                  n: i,
                  anIndexes: [],
                  val: s,
                  line: u,
                  animatorJustifyOffset: 0
                }), 2 == m) {
                  if (c += P, "" === s || " " === s || e === r - 1) {
                    for ("" !== s && " " !== s || (c -= P); d <= e; )
                      p2[d].an = c, p2[d].ind = f, p2[d].extra = P, d += 1;
                    f += 1, c = 0;
                  }
                } else if (3 == m) {
                  if (c += P, "" === s || e === r - 1) {
                    for ("" === s && (c -= P); d <= e; )
                      p2[d].an = c, p2[d].ind = f, p2[d].extra = P, d += 1;
                    c = 0, f += 1;
                  }
                } else
                  p2[f].ind = f, p2[f].extra = 0, f += 1;
              if (t.l = p2, v = g > v ? g : v, y.push(g), t.sz)
                t.boxWidth = t.sz[0], t.justifyOffset = 0;
              else
                switch (t.boxWidth = v, t.j) {
                  case 1:
                    t.justifyOffset = -t.boxWidth;
                    break;
                  case 2:
                    t.justifyOffset = -t.boxWidth / 2;
                    break;
                  default:
                    t.justifyOffset = 0;
                }
              t.lineWidths = y;
              var w, I, B, V, R = l.a;
              n = R.length;
              var L = [];
              for (a = 0; a < n; a += 1) {
                for ((w = R[a]).a.sc && (t.strokeColorAnim = true), w.a.sw && (t.strokeWidthAnim = true), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = true), V = 0, B = w.s.b, e = 0; e < r; e += 1)
                  (I = p2[e]).anIndexes[a] = V, (1 == B && "" !== I.val || 2 == B && "" !== I.val && " " !== I.val || 3 == B && (I.n || " " == I.val || e == r - 1) || 4 == B && (I.n || e == r - 1)) && (1 === w.s.rn && L.push(V), V += 1);
                l.a[a].s.totalChars = V;
                var z, G = -1;
                if (1 === w.s.rn)
                  for (e = 0; e < r; e += 1)
                    G != (I = p2[e]).anIndexes[a] && (G = I.anIndexes[a], z = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[a] = z;
              }
              t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
            }, TextProperty.prototype.updateDocumentData = function(t, e) {
              e = void 0 === e ? this.keysIndex : e;
              var r = this.copyData({}, this.data.d.k[e].s);
              r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.recalculate = function(t) {
              var e = this.data.d.k[t].s;
              e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
            }, TextProperty.prototype.canResizeFont = function(t) {
              this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            }, TextProperty.prototype.setMinimumFontSize = function(t) {
              this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
            };
            var TextSelectorProp = function() {
              var t = Math.max, e = Math.min, r = Math.floor;
              function i(t2, e2) {
                this._currentTextLength = -1, this.k = false, this.data = e2, this.elem = t2, this.comp = t2.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t2), this.s = PropertyFactory.getProp(t2, e2.s || { k: 0 }, 0, 0, this), this.e = "e" in e2 ? PropertyFactory.getProp(t2, e2.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t2, e2.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t2, e2.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t2, e2.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(t2, e2.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(t2, e2.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
              }
              return i.prototype = {
                getMult: function(i2) {
                  this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                  var s = 0, a = 0, n = 1, o = 1;
                  this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                  var h = BezierFactory.getBezierEasing(s, a, n, o).get, l = 0, p2 = this.finalS, f = this.finalE, m = this.data.sh;
                  if (2 === m)
                    l = h(l = f === p2 ? i2 >= f ? 1 : 0 : t(0, e(0.5 / (f - p2) + (i2 - p2) / (f - p2), 1)));
                  else if (3 === m)
                    l = h(
                      l = f === p2 ? i2 >= f ? 0 : 1 : 1 - t(0, e(0.5 / (f - p2) + (i2 - p2) / (f - p2), 1))
                    );
                  else if (4 === m)
                    f === p2 ? l = 0 : (l = t(0, e(0.5 / (f - p2) + (i2 - p2) / (f - p2), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l);
                  else if (5 === m) {
                    if (f === p2)
                      l = 0;
                    else {
                      var c = f - p2, d = -c / 2 + (i2 = e(t(0, i2 + 0.5 - p2), f - p2)), u = c / 2;
                      l = Math.sqrt(1 - d * d / (u * u));
                    }
                    l = h(l);
                  } else
                    6 === m ? (f === p2 ? l = 0 : (i2 = e(t(0, i2 + 0.5 - p2), f - p2), l = (1 + Math.cos(Math.PI + 2 * Math.PI * i2 / (f - p2))) / 2), l = h(l)) : (i2 >= r(p2) && (l = t(0, e(i2 - p2 < 0 ? e(f, 1) - (p2 - i2) : f - i2, 1))), l = h(l));
                  if (100 !== this.sm.v) {
                    var y = 0.01 * this.sm.v;
                    0 === y && (y = 1e-8);
                    var g = 0.5 - 0.5 * y;
                    l < g ? l = 0 : (l = (l - g) / y) > 1 && (l = 1);
                  }
                  return l * this.a.v;
                },
                getValue: function(t2) {
                  this.iterateDynamicProperties(), this._mdf = t2 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t2 && 2 === this.data.r && (this.e.v = this._currentTextLength);
                  var e2 = 2 === this.data.r ? 1 : 100 / this.data.totalChars, r2 = this.o.v / e2, i2 = this.s.v / e2 + r2, s = this.e.v / e2 + r2;
                  if (i2 > s) {
                    var a = i2;
                    i2 = s, s = a;
                  }
                  this.finalS = i2, this.finalE = s;
                }
              }, extendPrototype([DynamicPropertyContainer], i), {
                getTextSelectorProp: function(t2, e2, r2) {
                  return new i(t2, e2);
                }
              };
            }();
            function TextAnimatorDataProperty(t, e, r) {
              var i = { propType: false }, s = PropertyFactory.getProp, a = e.a;
              this.a = {
                r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                s: a.s ? s(t, a.s, 1, 0.01, r) : i,
                a: a.a ? s(t, a.a, 1, 0, r) : i,
                o: a.o ? s(t, a.o, 0, 0.01, r) : i,
                p: a.p ? s(t, a.p, 1, 0, r) : i,
                sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
                fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
                t: a.t ? s(t, a.t, 0, 0, r) : i
              }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
            }
            function TextAnimatorProperty(t, e, r) {
              this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(r);
            }
            function ITextElement() {
            }
            TextAnimatorProperty.prototype.searchProperties = function() {
              var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
              for (t = 0; t < r; t += 1)
                e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
              this._textData.p && "m" in this._textData.p ? (this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
              }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
            }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
              if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                this._isFirstFrame = false;
                var r, i, s, a, n, o, h, l, p2, f, m, c, d, u, y, g, v, b, P, x = this._moreOptions.alignment.v, E = this._animatorsData, S = this._textData, C = this.mHelper, _ = this._renderType, A = this.renderedLetters.length, T = t.l;
                if (this._hasMaskedPath) {
                  if (P = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                    var M, k = P.v;
                    for (this._pathData.r.v && (k = k.reverse()), n = { tLength: 0, segments: [] }, a = k._length - 1, g = 0, s = 0; s < a; s += 1)
                      M = bez.buildBezierData(
                        k.v[s],
                        k.v[s + 1],
                        [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]],
                        [k.i[s + 1][0] - k.v[s + 1][0], k.i[s + 1][1] - k.v[s + 1][1]]
                      ), n.tLength += M.segmentLength, n.segments.push(M), g += M.segmentLength;
                    s = a, P.v.c && (M = bez.buildBezierData(
                      k.v[s],
                      k.v[0],
                      [k.o[s][0] - k.v[s][0], k.o[s][1] - k.v[s][1]],
                      [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]]
                    ), n.tLength += M.segmentLength, n.segments.push(M), g += M.segmentLength), this._pathData.pi = n;
                  }
                  if (n = this._pathData.pi, o = this._pathData.f.v, m = 0, f = 1, l = 0, p2 = true, u = n.segments, o < 0 && P.v.c)
                    for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), f = (d = u[m = u.length - 1].points).length - 1; o < 0; )
                      o += d[f].partialLength, (f -= 1) < 0 && (f = (d = u[m -= 1].points).length - 1);
                  c = (d = u[m].points)[f - 1], y = (h = d[f]).partialLength;
                }
                a = T.length, r = 0, i = 0;
                var D, F, w, I, B, V = 1.2 * t.finalSize * 0.714, R = true;
                w = E.length;
                var L, z, G, O, N, H, j, q, W, $, Y, X, Z = -1, K = o, J = m, U = f, Q = -1, tt = "", et = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                  var rt = 0, it = 0, st = 2 === t.j ? -0.5 : -1, at = 0, nt = true;
                  for (s = 0; s < a; s += 1)
                    if (T[s].n) {
                      for (rt && (rt += it); at < s; )
                        T[at].animatorJustifyOffset = rt, at += 1;
                      rt = 0, nt = true;
                    } else {
                      for (F = 0; F < w; F += 1)
                        (D = E[F].a).t.propType && (nt && 2 === t.j && (it += D.t.v * st), (B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? rt += D.t.v * B[0] * st : rt += D.t.v * B * st);
                      nt = false;
                    }
                  for (rt && (rt += it); at < s; )
                    T[at].animatorJustifyOffset = rt, at += 1;
                }
                for (s = 0; s < a; s += 1) {
                  if (C.reset(), O = 1, T[s].n)
                    r = 0, i += t.yOffset, i += R ? 1 : 0, o = K, R = false, this._hasMaskedPath && (f = U, c = (d = u[m = J].points)[f - 1], y = (h = d[f]).partialLength, l = 0), tt = "", Y = "", W = "", X = "", et = this.defaultPropsArray;
                  else {
                    if (this._hasMaskedPath) {
                      if (Q !== T[s].line) {
                        switch (t.j) {
                          case 1:
                            o += g - t.lineWidths[T[s].line];
                            break;
                          case 2:
                            o += (g - t.lineWidths[T[s].line]) / 2;
                        }
                        Q = T[s].line;
                      }
                      Z !== T[s].ind && (T[Z] && (o += T[Z].extra), o += T[s].an / 2, Z = T[s].ind), o += x[0] * T[s].an * 5e-3;
                      var ot = 0;
                      for (F = 0; F < w; F += 1)
                        (D = E[F].a).p.propType && ((B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.p.v[0] * B[0] : ot += D.p.v[0] * B), D.a.propType && ((B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += D.a.v[0] * B[0] : ot += D.a.v[0] * B);
                      for (p2 = true, this._pathData.a.v && (o = 0.5 * T[0].an + (g - this._pathData.f.v - 0.5 * T[0].an - 0.5 * T[T.length - 1].an) * Z / (a - 1), o += this._pathData.f.v); p2; )
                        l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, z = c.point[0] + (h.point[0] - c.point[0]) * v, G = c.point[1] + (h.point[1] - c.point[1]) * v, C.translate(-x[0] * T[s].an * 5e-3, -x[1] * V * 0.01), p2 = false) : d && (l += h.partialLength, (f += 1) >= d.length && (f = 0, u[m += 1] ? d = u[m].points : P.v.c ? (f = 0, d = u[m = 0].points) : (l -= h.partialLength, d = null)), d && (c = h, y = (h = d[f]).partialLength));
                      L = T[s].an / 2 - T[s].add, C.translate(-L, 0, 0);
                    } else
                      L = T[s].an / 2 - T[s].add, C.translate(-L, 0, 0), C.translate(-x[0] * T[s].an * 5e-3, -x[1] * V * 0.01, 0);
                    for (F = 0; F < w; F += 1)
                      (D = E[F].a).t.propType && (B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += D.t.v * B[0] : o += D.t.v * B : B.length ? r += D.t.v * B[0] : r += D.t.v * B));
                    for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (N = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < w; F += 1)
                      (D = E[F].a).a.propType && ((B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.translate(-D.a.v[0] * B[0], -D.a.v[1] * B[1], D.a.v[2] * B[2]) : C.translate(-D.a.v[0] * B, -D.a.v[1] * B, D.a.v[2] * B));
                    for (F = 0; F < w; F += 1)
                      (D = E[F].a).s.propType && ((B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.scale(1 + (D.s.v[0] - 1) * B[0], 1 + (D.s.v[1] - 1) * B[1], 1) : C.scale(1 + (D.s.v[0] - 1) * B, 1 + (D.s.v[1] - 1) * B, 1));
                    for (F = 0; F < w; F += 1) {
                      if (D = E[F].a, B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), D.sk.propType && (B.length ? C.skewFromAxis(-D.sk.v * B[0], D.sa.v * B[1]) : C.skewFromAxis(-D.sk.v * B, D.sa.v * B)), D.r.propType && (B.length ? C.rotateZ(-D.r.v * B[2]) : C.rotateZ(-D.r.v * B)), D.ry.propType && (B.length ? C.rotateY(D.ry.v * B[1]) : C.rotateY(D.ry.v * B)), D.rx.propType && (B.length ? C.rotateX(D.rx.v * B[0]) : C.rotateX(D.rx.v * B)), D.o.propType && (B.length ? O += (D.o.v * B[0] - O) * B[0] : O += (D.o.v * B - O) * B), t.strokeWidthAnim && D.sw.propType && (B.length ? H += D.sw.v * B[0] : H += D.sw.v * B), t.strokeColorAnim && D.sc.propType)
                        for (q = 0; q < 3; q += 1)
                          B.length ? N[q] += (D.sc.v[q] - N[q]) * B[0] : N[q] += (D.sc.v[q] - N[q]) * B;
                      if (t.fillColorAnim && t.fc) {
                        if (D.fc.propType)
                          for (q = 0; q < 3; q += 1)
                            B.length ? j[q] += (D.fc.v[q] - j[q]) * B[0] : j[q] += (D.fc.v[q] - j[q]) * B;
                        D.fh.propType && (j = B.length ? addHueToRGB(j, D.fh.v * B[0]) : addHueToRGB(j, D.fh.v * B)), D.fs.propType && (j = B.length ? addSaturationToRGB(j, D.fs.v * B[0]) : addSaturationToRGB(j, D.fs.v * B)), D.fb.propType && (j = B.length ? addBrightnessToRGB(j, D.fb.v * B[0]) : addBrightnessToRGB(j, D.fb.v * B));
                      }
                    }
                    for (F = 0; F < w; F += 1)
                      (D = E[F].a).p.propType && (B = E[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars), this._hasMaskedPath ? B.length ? C.translate(0, D.p.v[1] * B[0], -D.p.v[2] * B[1]) : C.translate(0, D.p.v[1] * B, -D.p.v[2] * B) : B.length ? C.translate(D.p.v[0] * B[0], D.p.v[1] * B[1], -D.p.v[2] * B[2]) : C.translate(D.p.v[0] * B, D.p.v[1] * B, -D.p.v[2] * B));
                    if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && ($ = "rgb(" + Math.round(255 * N[0]) + "," + Math.round(255 * N[1]) + "," + Math.round(255 * N[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                      if (C.translate(0, -t.ls), C.translate(0, x[1] * V * 0.01 + i, 0), this._pathData.p.v) {
                        b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                        var ht = 180 * Math.atan(b) / Math.PI;
                        h.point[0] < c.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180);
                      }
                      C.translate(z, G, 0), o -= x[0] * T[s].an * 5e-3, T[s + 1] && Z !== T[s + 1].ind && (o += T[s].an / 2, o += 1e-3 * t.tr * t.finalSize);
                    } else {
                      switch (C.translate(r, i, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                        case 1:
                          C.translate(
                            T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]),
                            0,
                            0
                          );
                          break;
                        case 2:
                          C.translate(
                            T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2,
                            0,
                            0
                          );
                      }
                      C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(x[0] * T[s].an * 5e-3, x[1] * V * 0.01, 0), r += T[s].l + 1e-3 * t.tr * t.finalSize;
                    }
                    "html" === _ ? tt = C.toCSS() : "svg" === _ ? tt = C.to2dCSS() : et = [
                      C.props[0],
                      C.props[1],
                      C.props[2],
                      C.props[3],
                      C.props[4],
                      C.props[5],
                      C.props[6],
                      C.props[7],
                      C.props[8],
                      C.props[9],
                      C.props[10],
                      C.props[11],
                      C.props[12],
                      C.props[13],
                      C.props[14],
                      C.props[15]
                    ], X = O;
                  }
                  A <= s ? (I = new LetterProps(X, W, $, Y, tt, et), this.renderedLetters.push(I), A += 1, this.lettersChangedFlag = true) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(X, W, $, Y, tt, et) || this.lettersChangedFlag);
                }
              }
            }, TextAnimatorProperty.prototype.getValue = function() {
              this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
            }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, r) {
              this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
            }, ITextElement.prototype.prepareFrame = function(t) {
              this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
            }, ITextElement.prototype.createPathShape = function(t, e) {
              var r, i, s = e.length, a = "";
              for (r = 0; r < s; r += 1)
                "sh" === e[r].ty && (i = e[r].ks.k, a += buildShapeString(i, i.i.length, true, t));
              return a;
            }, ITextElement.prototype.updateDocumentData = function(t, e) {
              this.textProperty.updateDocumentData(t, e);
            }, ITextElement.prototype.canResizeFont = function(t) {
              this.textProperty.canResizeFont(t);
            }, ITextElement.prototype.setMinimumFontSize = function(t) {
              this.textProperty.setMinimumFontSize(t);
            }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
              switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
                case 1:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                  break;
                case 2:
                  e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
              }
              e.translate(i, s, 0);
            }, ITextElement.prototype.buildColor = function(t) {
              return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
            }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
            };
            var emptyShapeData = { shapes: [] };
            function SVGTextLottieElement(t, e, r) {
              this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
            }
            function ISolidElement(t, e, r) {
              this.initElement(t, e, r);
            }
            function NullElement(t, e, r) {
              this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
            }
            function SVGRendererBase() {
            }
            function ICompElement() {
            }
            function SVGCompElement(t, e, r) {
              this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
            }
            function SVGRenderer(t, e) {
              this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
              var r = "";
              if (e && e.title) {
                var i = createNS("title"), s = createElementID();
                i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
              }
              if (e && e.description) {
                var a = createNS("desc"), n = createElementID();
                a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n;
              }
              r && this.svgElement.setAttribute("aria-labelledby", r);
              var o = createNS("defs");
              this.svgElement.appendChild(o);
              var h = createNS("g");
              this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                progressiveLoad: e && e.progressiveLoad || false,
                hideOnTransparent: !(e && false === e.hideOnTransparent),
                viewBoxOnly: e && e.viewBoxOnly || false,
                viewBoxSize: e && e.viewBoxSize || false,
                className: e && e.className || "",
                id: e && e.id || "",
                focusable: e && e.focusable,
                filterSize: {
                  width: e && e.filterSize && e.filterSize.width || "100%",
                  height: e && e.filterSize && e.filterSize.height || "100%",
                  x: e && e.filterSize && e.filterSize.x || "0%",
                  y: e && e.filterSize && e.filterSize.y || "0%"
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
              }, this.globalData = { _mdf: false, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
            }
            function CVContextData() {
              var t;
              this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;
              for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1)
                this.saved[t] = createTypedArray("float32", 16);
              this._length = 15;
            }
            function ShapeTransformManager() {
              this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
            }
            extendPrototype(
              [
                BaseElement,
                TransformElement,
                SVGBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
              ],
              SVGTextLottieElement
            ), SVGTextLottieElement.prototype.createContent = function() {
              this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
            }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
              for (var e = 0, r = t.length, i = [], s = ""; e < r; )
                t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
              return i.push(s), i;
            }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
              if (t.shapes && t.shapes.length) {
                var r = t.shapes[0];
                if (r.it) {
                  var i = r.it[r.it.length - 1];
                  i.s && (i.s.k[0] = e, i.s.k[1] = e);
                }
              }
              return t;
            }, SVGTextLottieElement.prototype.buildNewText = function() {
              var t, e;
              this.addDynamicProperty(this);
              var r = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
              var i = this.globalData.fontManager.getFontByName(r.f);
              if (i.fClass)
                this.layerElement.setAttribute("class", i.fClass);
              else {
                this.layerElement.setAttribute("font-family", i.fFamily);
                var s = r.fWeight, a = r.fStyle;
                this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
              }
              this.layerElement.setAttribute("aria-label", r.t);
              var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
              e = o.length;
              var l = this.mHelper, p2 = this.data.singleShape, f = 0, m = 0, c = true, d = 1e-3 * r.tr * r.finalSize;
              if (!p2 || h || r.sz) {
                var u, y = this.textSpans.length;
                for (t = 0; t < e; t += 1) {
                  if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !h || !p2 || 0 === t) {
                    if (n = y > t ? this.textSpans[t].span : createNS(h ? "g" : "text"), y <= t) {
                      if (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = n, h) {
                        var g = createNS("g");
                        n.appendChild(g), this.textSpans[t].childSpan = g;
                      }
                      this.textSpans[t].span = n, this.layerElement.appendChild(n);
                    }
                    n.style.display = "inherit";
                  }
                  if (l.reset(), p2 && (o[t].n && (f = -d, m += r.yOffset, m += c ? 1 : 0, c = false), this.applyTextPropertiesToMatrix(r, l, o[t].line, f, m), f += o[t].l || 0, f += d), h) {
                    var v;
                    if (1 === (u = this.globalData.fontManager.getCharData(
                      r.finalText[t],
                      i.fStyle,
                      this.globalData.fontManager.getFontByName(r.f).fFamily
                    )).t)
                      v = new SVGCompElement(u.data, this.globalData, this);
                    else {
                      var b = emptyShapeData;
                      u.data && u.data.shapes && (b = this.buildShapeData(u.data, r.finalSize)), v = new SVGShapeElement(b, this.globalData, this);
                    }
                    if (this.textSpans[t].glyph) {
                      var P = this.textSpans[t].glyph;
                      this.textSpans[t].childSpan.removeChild(P.layerElement), P.destroy();
                    }
                    this.textSpans[t].glyph = v, v._debug = true, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), 1 === u.t && this.textSpans[t].childSpan.setAttribute(
                      "transform",
                      "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")"
                    );
                  } else
                    p2 && n.setAttribute("transform", "translate(" + l.props[12] + "," + l.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
                }
                p2 && n && n.setAttribute("d", "");
              } else {
                var x = this.textContainer, E = "start";
                switch (r.j) {
                  case 1:
                    E = "end";
                    break;
                  case 2:
                    E = "middle";
                    break;
                  default:
                    E = "start";
                }
                x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", d);
                var S = this.buildTextContents(r.finalText);
                for (e = S.length, m = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
                  (n = this.textSpans[t].span || createNS("tspan")).textContent = S[t], n.setAttribute("x", 0), n.setAttribute("y", m), n.style.display = "inherit", x.appendChild(n), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = n, m += r.finalLineHeight;
                this.layerElement.appendChild(x);
              }
              for (; t < this.textSpans.length; )
                this.textSpans[t].span.style.display = "none", t += 1;
              this._sizeChanged = true;
            }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
              if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
                this._sizeChanged = false;
                var t = this.layerElement.getBBox();
                this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
              }
              return this.bbox;
            }, SVGTextLottieElement.prototype.getValue = function() {
              var t, e, r = this.textSpans.length;
              for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < r; t += 1)
                (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = true));
            }, SVGTextLottieElement.prototype.renderInnerContent = function() {
              if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                var t, e;
                this._sizeChanged = true;
                var r, i, s, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
                for (e = n.length, t = 0; t < e; t += 1)
                  n[t].n || (r = a[t], i = this.textSpans[t].span, (s = this.textSpans[t].glyph) && s.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc));
              }
            }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
              var t = createNS("rect");
              t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
            }, NullElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, true);
            }, NullElement.prototype.renderFrame = function() {
            }, NullElement.prototype.getBaseElement = function() {
              return null;
            }, NullElement.prototype.destroy = function() {
            }, NullElement.prototype.sourceRectAtTime = function() {
            }, NullElement.prototype.hide = function() {
            }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
              return new NullElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createShape = function(t) {
              return new SVGShapeElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createText = function(t) {
              return new SVGTextLottieElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createImage = function(t) {
              return new IImageElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.createSolid = function(t) {
              return new ISolidElement(t, this.globalData, this);
            }, SVGRendererBase.prototype.configAnimation = function(t) {
              this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
              var e = this.globalData.defs;
              this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
              var r = createNS("clipPath"), i = createNS("rect");
              i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
              var s = createElementID();
              r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
            }, SVGRendererBase.prototype.destroy = function() {
              var t;
              this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
              var e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy();
              this.elements.length = 0, this.destroyed = true, this.animationItem = null;
            }, SVGRendererBase.prototype.updateContainerSize = function() {
            }, SVGRendererBase.prototype.findIndexByInd = function(t) {
              var e = 0, r = this.layers.length;
              for (e = 0; e < r; e += 1)
                if (this.layers[e].ind === t)
                  return e;
              return -1;
            }, SVGRendererBase.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 !== this.layers[t].ty) {
                e[t] = true;
                var r = this.createItem(this.layers[t]);
                if (e[t] = r, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
                  var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
                  if (-1 === i)
                    return;
                  if (this.elements[i] && true !== this.elements[i]) {
                    var s = e[i].getMatte(this.layers[t].tt);
                    r.setMatte(s);
                  } else
                    this.buildItem(i), this.addPendingElement(r);
                }
              }
            }, SVGRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                var t = this.pendingElements.pop();
                if (t.checkParenting(), t.data.tt)
                  for (var e = 0, r = this.elements.length; e < r; ) {
                    if (this.elements[e] === t) {
                      var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i].getMatte(this.layers[e].tt);
                      t.setMatte(s);
                      break;
                    }
                    e += 1;
                  }
              }
            }, SVGRendererBase.prototype.renderFrame = function(t) {
              if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
                var r = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)
                  (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf)
                  for (e = 0; e < r; e += 1)
                    (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
              }
            }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
              var r = t.getBaseElement();
              if (r) {
                for (var i, s = 0; s < e; )
                  this.elements[s] && true !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
                i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r);
              }
            }, SVGRendererBase.prototype.hide = function() {
              this.layerElement.style.display = "none";
            }, SVGRendererBase.prototype.show = function() {
              this.layerElement.style.display = "block";
            }, extendPrototype(
              [BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement],
              ICompElement
            ), ICompElement.prototype.initElement = function(t, e, r) {
              this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
            }, ICompElement.prototype.prepareFrame = function(t) {
              if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
                if (this.tm._placeholder)
                  this.renderedFrame = t / this.data.sr;
                else {
                  var e = this.tm.v;
                  e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
                }
                var r, i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
                  (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = true));
              }
            }, ICompElement.prototype.renderInnerContent = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }, ICompElement.prototype.setElements = function(t) {
              this.elements = t;
            }, ICompElement.prototype.getElements = function() {
              return this.elements;
            }, ICompElement.prototype.destroyElements = function() {
              var t, e = this.layers.length;
              for (t = 0; t < e; t += 1)
                this.elements[t] && this.elements[t].destroy();
            }, ICompElement.prototype.destroy = function() {
              this.destroyElements(), this.destroyBaseElement();
            }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
              return new SVGCompElement(t, this.globalData, this);
            }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
              return new SVGCompElement(t, this.globalData, this);
            }, CVContextData.prototype.duplicate = function() {
              var t = 2 * this._length, e = this.savedOp;
              this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
              var r = 0;
              for (r = this._length; r < t; r += 1)
                this.saved[r] = createTypedArray("float32", 16);
              this._length = t;
            }, CVContextData.prototype.reset = function() {
              this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
            }, CVContextData.prototype.popTransform = function() {
              var t, e = this.saved[this.cArrPos], r = this.cTr.props;
              for (t = 0; t < 16; t += 1)
                r[t] = e[t];
              return e;
            }, CVContextData.prototype.popOpacity = function() {
              var t = this.savedOp[this.cArrPos];
              return this.cO = t, t;
            }, CVContextData.prototype.pop = function() {
              return this.cArrPos -= 1, { transform: this.popTransform(), opacity: this.popOpacity() };
            }, CVContextData.prototype.push = function() {
              var t, e = this.cTr.props;
              this._length <= this.cArrPos && this.duplicate();
              var r = this.saved[this.cArrPos];
              for (t = 0; t < 16; t += 1)
                r[t] = e[t];
              this.savedOp[this.cArrPos] = this.cO, this.cArrPos += 1;
            }, CVContextData.prototype.getTransform = function() {
              return this.cTr;
            }, CVContextData.prototype.getOpacity = function() {
              return this.cO;
            }, CVContextData.prototype.setOpacity = function(t) {
              this.cO = t;
            }, ShapeTransformManager.prototype = {
              addTransformSequence: function(t) {
                var e, r = t.length, i = "_";
                for (e = 0; e < r; e += 1)
                  i += t[e].transform.key + "_";
                var s = this.sequences[i];
                return s || (s = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: false }, this.sequences[i] = s, this.sequenceList.push(s)), s;
              },
              processSequence: function(t, e) {
                for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e; ) {
                  if (t.transforms[i].transform.mProps._mdf) {
                    a = true;
                    break;
                  }
                  i += 1;
                }
                if (a)
                  for (t.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
                    r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(
                      r[0],
                      r[1],
                      r[2],
                      r[3],
                      r[4],
                      r[5],
                      r[6],
                      r[7],
                      r[8],
                      r[9],
                      r[10],
                      r[11],
                      r[12],
                      r[13],
                      r[14],
                      r[15]
                    );
                t._mdf = a;
              },
              processSequences: function(t) {
                var e, r = this.sequenceList.length;
                for (e = 0; e < r; e += 1)
                  this.processSequence(this.sequenceList[e], t);
              },
              getNewKey: function() {
                return this.transform_key_count += 1, "_" + this.transform_key_count;
              }
            };
            var lumaLoader = function() {
              var t = "__lottie_element_luma_buffer", e = null, r = null, i = null;
              function s() {
                var s2, a, n;
                e || (s2 = createNS("svg"), a = createNS("filter"), n = createNS("feColorMatrix"), a.setAttribute("id", t), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute(
                  "values",
                  "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"
                ), a.appendChild(n), s2.appendChild(a), s2.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (s2.style.display = "none"), i = s2, document.body.appendChild(i), e = createTag("canvas"), (r = e.getContext("2d")).filter = "url(#" + t + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1));
              }
              return {
                load: s,
                get: function(i2) {
                  return e || s(), e.width = i2.width, e.height = i2.height, r.filter = "url(#" + t + ")", e;
                }
              };
            };
            function createCanvas(t, e) {
              if (featureSupport.offscreenCanvas)
                return new OffscreenCanvas(t, e);
              var r = createTag("canvas");
              return r.width = t, r.height = e, r;
            }
            var assetLoader = {
              loadLumaCanvas: lumaLoader.load,
              getLumaCanvas: lumaLoader.get,
              createCanvas
            };
            function CVEffects() {
            }
            function CVMaskElement(t, e) {
              var r;
              this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
              var i = this.masksProperties.length, s = false;
              for (r = 0; r < i; r += 1)
                "n" !== this.masksProperties[r].mode && (s = true), this.viewData[r] = ShapePropertyFactory.getShapeProp(
                  this.element,
                  this.masksProperties[r],
                  3
                );
              this.hasMasks = s, s && this.element.addRenderableComponent(this);
            }
            function CVBaseElement() {
            }
            CVEffects.prototype.renderFrame = function() {
            }, CVMaskElement.prototype.renderFrame = function() {
              if (this.hasMasks) {
                var t, e, r, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
                for (a.beginPath(), t = 0; t < n; t += 1)
                  if ("n" !== this.masksProperties[t].mode) {
                    var o;
                    this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                    var h = i._length;
                    for (o = 1; o < h; o += 1)
                      r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                  }
                this.element.globalData.renderer.save(true), a.clip();
              }
            }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
              this.element = null;
            };
            var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
            function CVShapeData(t, e, r, i) {
              this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
              var s, a = 4;
              "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
              var n, o = r.length;
              for (s = 0; s < o; s += 1)
                r[s].closed || (n = { transforms: i.addTransformSequence(r[s].transforms), trNodes: [] }, this.styledShapes.push(n), r[s].elements.push(n));
            }
            function CVShapeElement(t, e, r) {
              this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
            }
            function CVTextElement(t, e, r) {
              this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, r);
            }
            function CVImageElement(t, e, r) {
              this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
            }
            function CVSolidElement(t, e, r) {
              this.initElement(t, e, r);
            }
            function CanvasRendererBase(t, e) {
              this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || false,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || ""
              }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: false,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
              }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas";
            }
            function CVCompElement(t, e, r) {
              this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
            }
            function CanvasRenderer(t, e) {
              this.animationItem = t, this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: e && e.context || null,
                progressiveLoad: e && e.progressiveLoad || false,
                preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: e && e.contentVisibility || "visible",
                className: e && e.className || "",
                id: e && e.id || "",
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
              }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
                frameNum: -1,
                _mdf: false,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
              }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas";
            }
            function HBaseElement() {
            }
            function HSolidElement(t, e, r) {
              this.initElement(t, e, r);
            }
            function HShapeElement(t, e, r) {
              this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
            }
            function HTextElement(t, e, r) {
              this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, r);
            }
            function HCameraElement(t, e, r) {
              this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
              var i = PropertyFactory.getProp;
              if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
                var s, a = t.ks.or.k.length;
                for (s = 0; s < a; s += 1)
                  t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
              }
              this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
            }
            function HImageElement(t, e, r) {
              this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
            }
            function HybridRendererBase(t, e) {
              this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && false === e.hideOnTransparent),
                filterSize: {
                  width: e && e.filterSize && e.filterSize.width || "400%",
                  height: e && e.filterSize && e.filterSize.height || "400%",
                  x: e && e.filterSize && e.filterSize.x || "-100%",
                  y: e && e.filterSize && e.filterSize.y || "-100%"
                }
              }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
            }
            function HCompElement(t, e, r) {
              this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
            }
            function HybridRenderer(t, e) {
              this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
                className: e && e.className || "",
                imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(e && false === e.hideOnTransparent),
                filterSize: {
                  width: e && e.filterSize && e.filterSize.width || "400%",
                  height: e && e.filterSize && e.filterSize.height || "400%",
                  x: e && e.filterSize && e.filterSize.x || "-100%",
                  y: e && e.filterSize && e.filterSize.y || "-100%"
                },
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
              }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
            }
            CVBaseElement.prototype = {
              createElements: function() {
              },
              initRendererElement: function() {
              },
              createContainerElements: function() {
                if (this.data.tt >= 1) {
                  this.buffers = [];
                  var t = this.globalData.canvasContext, e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                  this.buffers.push(e);
                  var r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
                  this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
                }
                this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects();
              },
              createContent: function() {
              },
              setBlendMode: function() {
                var t = this.globalData;
                if (t.blendMode !== this.data.bm) {
                  t.blendMode = this.data.bm;
                  var e = getBlendMode(this.data.bm);
                  t.canvasContext.globalCompositeOperation = e;
                }
              },
              createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data, this);
              },
              hideElement: function() {
                this.hidden || this.isInRange && !this.isTransparent || (this.hidden = true);
              },
              showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
              },
              clearCanvas: function(t) {
                t.clearRect(
                  this.transformCanvas.tx,
                  this.transformCanvas.ty,
                  this.transformCanvas.w * this.transformCanvas.sx,
                  this.transformCanvas.h * this.transformCanvas.sy
                );
              },
              prepareLayer: function() {
                if (this.data.tt >= 1) {
                  var t = this.buffers[0].getContext("2d");
                  this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
                }
              },
              exitLayer: function() {
                if (this.data.tt >= 1) {
                  var t = this.buffers[1], e = t.getContext("2d");
                  if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(true), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                    var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                    r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0);
                  }
                  this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
                }
              },
              renderFrame: function(t) {
                if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
                  this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                  var e = 0 === this.data.ty;
                  this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
                }
              },
              destroy: function() {
                this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
              },
              mHelper: new Matrix()
            }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                IShapeElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              CVShapeElement
            ), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
              this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
            }, CVShapeElement.prototype.createStyleElement = function(t, e) {
              var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: true === t.hd
              }, i = {};
              if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), "st" === t.ty || "gs" === t.ty) {
                if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                  var s = new DashProperty(this, t.d, "canvas", this);
                  i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
                }
              } else
                r.r = 2 === t.r ? "evenodd" : "nonzero";
              return this.stylesList.push(r), i.style = r, i;
            }, CVShapeElement.prototype.createGroupElement = function() {
              return { it: [], prevViewData: [] };
            }, CVShapeElement.prototype.createTransformElement = function(t) {
              return {
                transform: {
                  opacity: 1,
                  _opMdf: false,
                  key: this.transformsManager.getNewKey(),
                  op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                  mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
              };
            }, CVShapeElement.prototype.createShapeElement = function(t) {
              var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
              return this.shapes.push(e), this.addShapeToModifiers(e), e;
            }, CVShapeElement.prototype.reloadShapes = function() {
              var t;
              this._isFirstFrame = true;
              var e = this.itemsData.length;
              for (t = 0; t < e; t += 1)
                this.prevViewData[t] = this.itemsData[t];
              for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
                this.dynamicProperties[t].getValue();
              this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
            }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
              var e, r = this.stylesList.length;
              for (e = 0; e < r; e += 1)
                this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
            }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
              var t, e = this.stylesList.length;
              for (t = 0; t < e; t += 1)
                this.stylesList[t].closed || this.stylesList[t].transforms.pop();
            }, CVShapeElement.prototype.closeStyles = function(t) {
              var e, r = t.length;
              for (e = 0; e < r; e += 1)
                t[e].closed = true;
            }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
              var a, n, o, h, l, p2, f = t.length - 1, m = [], c = [], d = [].concat(s);
              for (a = f; a >= 0; a -= 1) {
                if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
                  h ? e[a].style.closed = false : e[a] = this.createStyleElement(t[a], d), m.push(e[a].style);
                else if ("gr" === t[a].ty) {
                  if (h)
                    for (o = e[a].it.length, n = 0; n < o; n += 1)
                      e[a].prevViewData[n] = e[a].it[n];
                  else
                    e[a] = this.createGroupElement(t[a]);
                  this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d);
                } else
                  "tr" === t[a].ty ? (h || (p2 = this.createTransformElement(t[a]), e[a] = p2), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (h ? (l = e[a]).closed = false : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = true : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), i = false), c.push(l));
                this.addProcessedElement(t[a], a + 1);
              }
              for (this.removeTransformFromStyleList(), this.closeStyles(m), f = c.length, a = 0; a < f; a += 1)
                c[a].closed = true;
            }, CVShapeElement.prototype.renderInnerContent = function() {
              this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
            }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
              (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
            }, CVShapeElement.prototype.drawLayer = function() {
              var t, e, r, i, s, a, n, o, h, l = this.stylesList.length, p2 = this.globalData.renderer, f = this.globalData.canvasContext;
              for (t = 0; t < l; t += 1)
                if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                  for (p2.save(), a = h.elements, "st" === o || "gs" === o ? (f.strokeStyle = "st" === o ? h.co : h.grd, f.lineWidth = h.wi, f.lineCap = h.lc, f.lineJoin = h.lj, f.miterLimit = h.ml || 0) : f.fillStyle = "fl" === o ? h.co : h.grd, p2.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && f.beginPath(), p2.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                    for ("st" !== o && "gs" !== o || (f.beginPath(), h.da && (f.setLineDash(h.da), f.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1)
                      "m" === n[i].t ? f.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? f.bezierCurveTo(
                        n[i].pts[0],
                        n[i].pts[1],
                        n[i].pts[2],
                        n[i].pts[3],
                        n[i].pts[4],
                        n[i].pts[5]
                      ) : f.closePath();
                    "st" !== o && "gs" !== o || (f.stroke(), h.da && f.setLineDash(this.dashResetter));
                  }
                  "st" !== o && "gs" !== o && f.fill(h.r), p2.restore();
                }
            }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
              var s, a;
              for (a = t, s = e.length - 1; s >= 0; s -= 1)
                "tr" === e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
              i && this.drawLayer();
            }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
              if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var r, i, s, a = t.trNodes, n = e.paths, o = n._length;
                a.length = 0;
                var h = t.transforms.finalTransform;
                for (s = 0; s < o; s += 1) {
                  var l = n.shapes[s];
                  if (l && l.v) {
                    for (i = l._length, r = 1; r < i; r += 1)
                      1 === r && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                      });
                    1 === i && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && i && (a.push({
                      t: "c",
                      pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                    }), a.push({ t: "z" }));
                  }
                }
                t.trNodes = a;
              }
            }, CVShapeElement.prototype.renderPath = function(t, e) {
              if (true !== t.hd && t._shouldRender) {
                var r, i = e.styledShapes.length;
                for (r = 0; r < i; r += 1)
                  this.renderStyledShape(e.styledShapes[r], e.sh);
              }
            }, CVShapeElement.prototype.renderFill = function(t, e, r) {
              var i = e.style;
              (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
            }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
              var i, s = e.style;
              if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                var a, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
                if (1 === t.t)
                  i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                else {
                  var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p2 = Math.atan2(h[1] - o[1], h[0] - o[0]), f = e.h.v;
                  f >= 1 ? f = 0.99 : f <= -1 && (f = -0.99);
                  var m = l * f, c = Math.cos(p2 + e.a.v) * m + o[0], d = Math.sin(p2 + e.a.v) * m + o[1];
                  i = n.createRadialGradient(c, d, 0, o[0], o[1], l);
                }
                var u = t.g.p, y = e.g.c, g = 1;
                for (a = 0; a < u; a += 1)
                  e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), i.addColorStop(
                    y[4 * a] / 100,
                    "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")"
                  );
                s.grd = i;
              }
              s.coOp = e.o.v * r.opacity;
            }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
              var i = e.style, s = e.d;
              s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
            }, CVShapeElement.prototype.destroy = function() {
              this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
            }, extendPrototype(
              [
                BaseElement,
                TransformElement,
                CVBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement,
                ITextElement
              ],
              CVTextElement
            ), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = false;
              t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
              var r = false;
              t.sc && (r = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
              var i, s, a, n, o, h, l, p2, f, m, c, d, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
              this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
              var v = this.data.singleShape, b = 1e-3 * t.tr * t.finalSize, P = 0, x = 0, E = true, S = 0;
              for (i = 0; i < s; i += 1) {
                n = (a = this.globalData.fontManager.getCharData(
                  t.finalText[i],
                  u.fStyle,
                  this.globalData.fontManager.getFontByName(t.f).fFamily
                )) && a.data || {}, g.reset(), v && y[i].n && (P = -b, x += t.yOffset, x += E ? 1 : 0, E = false), f = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[i].line, P, x), c = createSizedArray(f - 1);
                var C = 0;
                for (p2 = 0; p2 < f; p2 += 1)
                  if ("sh" === l[p2].ty) {
                    for (h = l[p2].ks.k.i.length, m = l[p2].ks.k, d = [], o = 1; o < h; o += 1)
                      1 === o && d.push(
                        g.applyToX(m.v[0][0], m.v[0][1], 0),
                        g.applyToY(m.v[0][0], m.v[0][1], 0)
                      ), d.push(
                        g.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0),
                        g.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0),
                        g.applyToX(m.i[o][0], m.i[o][1], 0),
                        g.applyToY(m.i[o][0], m.i[o][1], 0),
                        g.applyToX(m.v[o][0], m.v[o][1], 0),
                        g.applyToY(m.v[o][0], m.v[o][1], 0)
                      );
                    d.push(
                      g.applyToX(m.o[o - 1][0], m.o[o - 1][1], 0),
                      g.applyToY(m.o[o - 1][0], m.o[o - 1][1], 0),
                      g.applyToX(m.i[0][0], m.i[0][1], 0),
                      g.applyToY(m.i[0][0], m.i[0][1], 0),
                      g.applyToX(m.v[0][0], m.v[0][1], 0),
                      g.applyToY(m.v[0][0], m.v[0][1], 0)
                    ), c[C] = d, C += 1;
                  }
                v && (P += y[i].l, P += b), this.textSpans[S] ? this.textSpans[S].elem = c : this.textSpans[S] = { elem: c }, S += 1;
              }
            }, CVTextElement.prototype.renderInnerContent = function() {
              var t, e, r, i, s, a, n = this.canvasContext;
              n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
              var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
              e = l.length;
              var p2, f, m = null, c = null, d = null;
              for (t = 0; t < e; t += 1)
                if (!l[t].n) {
                  if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                    for (o && o.fc ? m !== o.fc && (m = o.fc, n.fillStyle = o.fc) : m !== this.values.fill && (m = this.values.fill, n.fillStyle = this.values.fill), i = (p2 = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                      for (a = (f = p2[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < a; s += 6)
                        this.globalData.canvasContext.bezierCurveTo(
                          f[s],
                          f[s + 1],
                          f[s + 2],
                          f[s + 3],
                          f[s + 4],
                          f[s + 5]
                        );
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
                  }
                  if (this.stroke) {
                    for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p2 = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                      for (a = (f = p2[r]).length, this.globalData.canvasContext.moveTo(f[0], f[1]), s = 2; s < a; s += 6)
                        this.globalData.canvasContext.bezierCurveTo(
                          f[s],
                          f[s + 1],
                          f[s + 2],
                          f[s + 3],
                          f[s + 4],
                          f[s + 5]
                        );
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
                  }
                  o && this.globalData.renderer.restore();
                }
            }, extendPrototype(
              [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
              CVImageElement
            ), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
              if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var t = createTag("canvas");
                t.width = this.assetData.w, t.height = this.assetData.h;
                var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(
                  this.img,
                  (s - e) / 2,
                  (a - r) / 2,
                  e,
                  r,
                  0,
                  0,
                  this.assetData.w,
                  this.assetData.h
                ), this.img = t;
              }
            }, CVImageElement.prototype.renderInnerContent = function() {
              this.canvasContext.drawImage(this.img, 0, 0);
            }, CVImageElement.prototype.destroy = function() {
              this.img = null;
            }, extendPrototype(
              [BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement],
              CVSolidElement
            ), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
              var t = this.canvasContext;
              t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
            }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
              return new CVShapeElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createText = function(t) {
              return new CVTextElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createImage = function(t) {
              return new CVImageElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createSolid = function(t) {
              return new CVSolidElement(t, this.globalData, this);
            }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
              if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                if (this.renderConfig.clearCanvas) {
                  this.transformMat.cloneFromProps(t);
                  var e = this.contextData.getTransform(), r = e.props;
                  this.transformMat.transform(
                    r[0],
                    r[1],
                    r[2],
                    r[3],
                    r[4],
                    r[5],
                    r[6],
                    r[7],
                    r[8],
                    r[9],
                    r[10],
                    r[11],
                    r[12],
                    r[13],
                    r[14],
                    r[15]
                  ), e.cloneFromProps(this.transformMat.props);
                  var i = e.props;
                  this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
                } else
                  this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
              var e = this.contextData.getOpacity();
              if (!this.renderConfig.clearCanvas)
                return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = e);
              e *= t < 0 ? 0 : t, this.contextData.setOpacity(e), this.globalData.currentGlobalAlpha !== e && (this.canvasContext.globalAlpha = e, this.globalData.currentGlobalAlpha = e);
            }, CanvasRendererBase.prototype.reset = function() {
              this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
            }, CanvasRendererBase.prototype.save = function(t) {
              this.renderConfig.clearCanvas ? (t && this.canvasContext.save(), this.contextData.push()) : this.canvasContext.save();
            }, CanvasRendererBase.prototype.restore = function(t) {
              if (this.renderConfig.clearCanvas) {
                t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over");
                var e = this.contextData.pop(), r = e.transform, i = e.opacity;
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i);
              } else
                this.canvasContext.restore();
            }, CanvasRendererBase.prototype.configAnimation = function(t) {
              if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var e = this.animationItem.container.style;
                e.width = "100%", e.height = "100%";
                var r = "0px 0px 0px";
                e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
              } else
                this.canvasContext = this.renderConfig.context;
              this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
            }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
              var r, i, s, a;
              if (this.reset(), t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                var n = this.renderConfig.preserveAspectRatio.split(" "), o = n[1] || "meet", h = n[0] || "xMidYMid", l = h.substr(0, 4), p2 = h.substr(4);
                s = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > s && "meet" === o || a < s && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === l && (a < s && "meet" === o || a > s && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === p2 && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === p2 && (a > s && "meet" === o || a < s && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
              } else
                "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
              this.transformCanvas.props = [
                this.transformCanvas.sx,
                0,
                0,
                0,
                0,
                this.transformCanvas.sy,
                0,
                0,
                0,
                0,
                1,
                0,
                this.transformCanvas.tx,
                this.transformCanvas.ty,
                0,
                1
              ], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
            }, CanvasRendererBase.prototype.destroy = function() {
              var t;
              for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
              this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
            }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
              if ((this.renderedFrame !== t || true !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var r;
                this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r += 1)
                  (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                if (this.globalData._mdf) {
                  for (true === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)
                    (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                  true !== this.renderConfig.clearCanvas && this.restore();
                }
              }
            }, CanvasRendererBase.prototype.buildItem = function(t) {
              var e = this.elements;
              if (!e[t] && 99 !== this.layers[t].ty) {
                var r = this.createItem(this.layers[t], this, this.globalData);
                e[t] = r, r.initExpressions();
              }
            }, CanvasRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                this.pendingElements.pop().checkParenting();
              }
            }, CanvasRendererBase.prototype.hide = function() {
              this.animationItem.container.style.display = "none";
            }, CanvasRendererBase.prototype.show = function() {
              this.animationItem.container.style.display = "block";
            }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
              var t, e = this.canvasContext;
              for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
            }, CVCompElement.prototype.destroy = function() {
              var t;
              for (t = this.layers.length - 1; t >= 0; t -= 1)
                this.elements[t] && this.elements[t].destroy();
              this.layers = null, this.elements = null;
            }, CVCompElement.prototype.createComp = function(t) {
              return new CVCompElement(t, this.globalData, this);
            }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
              return new CVCompElement(t, this.globalData, this);
            }, HBaseElement.prototype = {
              checkBlendMode: function() {
              },
              initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
              },
              createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects(), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
              },
              renderElement: function() {
                var t = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                  var e = this.finalTransform.mat.toCSS();
                  t.transform = e, t.webkitTransform = e;
                }
                this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
              },
              renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
              },
              destroy: function() {
                this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
              },
              createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data, this, this.globalData);
              },
              addEffects: function() {
              },
              setMatte: function() {
              }
            }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype(
              [BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement],
              HSolidElement
            ), HSolidElement.prototype.createContent = function() {
              var t;
              this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
            }, extendPrototype(
              [
                BaseElement,
                TransformElement,
                HSolidElement,
                SVGShapeElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              HShapeElement
            ), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
              var t;
              if (this.baseElement.style.fontSize = 0, this.data.hasMask)
                this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
              else {
                t = createNS("svg");
                var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
              }
              this.searchShapes(
                this.shapesData,
                this.itemsData,
                this.prevViewData,
                this.shapesContainer,
                0,
                [],
                true
              ), this.filterUniqueShapes(), this.shapeCont = t;
            }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
              var r, i = t.length;
              for (r = 0; r < i; r += 1)
                e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
              return e;
            }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
              var r, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
              if (!(l <= 1)) {
                for (r = 0; r < l - 1; r += 1)
                  i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e);
                o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e));
              }
            }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
              this.getBoundsOfCurve(t, e, r, i);
              var a = this.shapeBoundingBox;
              s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
            }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = {
              x: 0,
              xMax: 0,
              y: 0,
              yMax: 0,
              width: 0,
              height: 0
            }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
              for (var s, a, n, o, h, l, p2, f = [
                [t[0], i[0]],
                [t[1], i[1]]
              ], m = 0; m < 2; ++m)
                a = 6 * t[m] - 12 * e[m] + 6 * r[m], s = -3 * t[m] + 9 * e[m] - 9 * r[m] + 3 * i[m], n = 3 * e[m] - 3 * t[m], a |= 0, n |= 0, 0 === (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && f[m].push(this.calculateF(o, t, e, r, i, m)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && f[m].push(this.calculateF(l, t, e, r, i, m)), (p2 = (-a - bmSqrt(h)) / (2 * s)) > 0 && p2 < 1 && f[m].push(this.calculateF(p2, t, e, r, i, m))));
              this.shapeBoundingBox.left = bmMin.apply(null, f[0]), this.shapeBoundingBox.top = bmMin.apply(null, f[1]), this.shapeBoundingBox.right = bmMax.apply(null, f[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, f[1]);
            }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
              return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a];
            }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
              var r, i = t.length;
              for (r = 0; r < i; r += 1)
                t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
            }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
              var r = 0;
              if (t.keyframes) {
                for (var i = 0; i < t.keyframes.length; i += 1) {
                  var s = t.keyframes[i].s;
                  s > r && (r = s);
                }
                r *= t.mult;
              } else
                r = t.v * t.mult;
              e.x -= r, e.xMax += r, e.y -= r, e.yMax += r;
            }, HShapeElement.prototype.currentBoxContains = function(t) {
              return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
            }, HShapeElement.prototype.renderInnerContent = function() {
              if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
                var t = this.tempBoundingBox, e = 999999;
                if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
                  return;
                var r = false;
                if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = true), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                  this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute(
                    "viewBox",
                    this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h
                  );
                  var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                  i.transform = s, i.webkitTransform = s;
                }
              }
            }, extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HierarchyElement,
                FrameElement,
                RenderableDOMElement,
                ITextElement
              ],
              HTextElement
            ), HTextElement.prototype.createContent = function() {
              if (this.isMasked = this.checkMasks(), this.isMasked) {
                this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
                var t = createNS("g");
                this.maskedElement.appendChild(t), this.innerElem = t;
              } else
                this.renderType = "html", this.innerElem = this.layerElement;
              this.checkParenting();
            }, HTextElement.prototype.buildNewText = function() {
              var t = this.textProperty.currentData;
              this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
              var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
              e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
              var i, s, a = this.globalData.fontManager.getFontByName(t.f);
              if (!this.globalData.fontManager.chars)
                if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass)
                  this.innerElem.className = a.fClass;
                else {
                  e.fontFamily = a.fFamily;
                  var n = t.fWeight, o = t.fStyle;
                  e.fontStyle = o, e.fontWeight = n;
                }
              var h, l, p2, f = t.l;
              s = f.length;
              var m, c = this.mHelper, d = "", u = 0;
              for (i = 0; i < s; i += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p2 = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p2 = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
                  var y, g = this.globalData.fontManager.getCharData(
                    t.finalText[i],
                    a.fStyle,
                    this.globalData.fontManager.getFontByName(t.f).fFamily
                  );
                  if (y = g ? g.data : null, c.reset(), y && y.shapes && y.shapes.length && (m = y.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(c, m), h.setAttribute("d", d)), this.isMasked)
                    this.innerElem.appendChild(h);
                  else {
                    if (this.innerElem.appendChild(l), y && y.shapes) {
                      document.body.appendChild(p2);
                      var v = p2.getBBox();
                      p2.setAttribute("width", v.width + 2), p2.setAttribute("height", v.height + 2), p2.setAttribute(
                        "viewBox",
                        v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2)
                      );
                      var b = p2.style, P = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                      b.transform = P, b.webkitTransform = P, f[i].yOffset = v.y - 1;
                    } else
                      p2.setAttribute("width", 1), p2.setAttribute("height", 1);
                    l.appendChild(p2);
                  }
                } else if (h.textContent = f[i].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
                  this.innerElem.appendChild(h);
                else {
                  this.innerElem.appendChild(l);
                  var x = h.style, E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                  x.transform = E, x.webkitTransform = E;
                }
                this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1;
              }
              for (; u < this.textSpans.length; )
                this.textSpans[u].style.display = "none", u += 1;
            }, HTextElement.prototype.renderInnerContent = function() {
              var t;
              if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag)
                  return;
                if (this.isMasked && this.finalTransform._matMdf) {
                  this.svgElement.setAttribute(
                    "viewBox",
                    -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH
                  ), t = this.svgElement.style;
                  var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                  t.transform = e, t.webkitTransform = e;
                }
              }
              if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                var r, i, s, a, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                for (i = l.length, r = 0; r < i; r += 1)
                  l[r].n ? o += 1 : (a = this.textSpans[r], n = this.textPaths[r], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                  var p2 = this.innerElem.getBBox();
                  this.currentBBox.w !== p2.width && (this.currentBBox.w = p2.width, this.svgElement.setAttribute("width", p2.width)), this.currentBBox.h !== p2.height && (this.currentBBox.h = p2.height, this.svgElement.setAttribute("height", p2.height));
                  if (this.currentBBox.w !== p2.width + 2 || this.currentBBox.h !== p2.height + 2 || this.currentBBox.x !== p2.x - 1 || this.currentBBox.y !== p2.y - 1) {
                    this.currentBBox.w = p2.width + 2, this.currentBBox.h = p2.height + 2, this.currentBBox.x = p2.x - 1, this.currentBBox.y = p2.y - 1, this.svgElement.setAttribute(
                      "viewBox",
                      this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h
                    ), t = this.svgElement.style;
                    var f = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    t.transform = f, t.webkitTransform = f;
                  }
                }
              }
            }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
              var t, e, r, i, s = this.comp.threeDElements.length;
              for (t = 0; t < s; t += 1)
                if ("3d" === (e = this.comp.threeDElements[t]).type) {
                  r = e.perspectiveElem.style, i = e.container.style;
                  var a = this.pe.v + "px", n = "0px 0px 0px", o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                  r.perspective = a, r.webkitPerspective = a, i.transformOrigin = n, i.mozTransformOrigin = n, i.webkitTransformOrigin = n, r.transform = o, r.webkitTransform = o;
                }
            }, HCameraElement.prototype.createElements = function() {
            }, HCameraElement.prototype.hide = function() {
            }, HCameraElement.prototype.renderFrame = function() {
              var t, e, r = this._isFirstFrame;
              if (this.hierarchy)
                for (e = this.hierarchy.length, t = 0; t < e; t += 1)
                  r = this.hierarchy[t].finalTransform.mProp._mdf || r;
              if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(), this.hierarchy)
                  for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                    var i = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
                  }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                  var s;
                  s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                  var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
                  this.mat.rotateY(l).rotateX(-h);
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
                var p2 = !this._prevMat.equals(this.mat);
                if ((p2 || this.pe._mdf) && this.comp.threeDElements) {
                  var f, m, c;
                  for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                    if ("3d" === (f = this.comp.threeDElements[t]).type) {
                      if (p2) {
                        var d = this.mat.toCSS();
                        (c = f.container.style).transform = d, c.webkitTransform = d;
                      }
                      this.pe._mdf && ((m = f.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px");
                    }
                  this.mat.clone(this._prevMat);
                }
              }
              this._isFirstFrame = false;
            }, HCameraElement.prototype.prepareFrame = function(t) {
              this.prepareProperties(t, true);
            }, HCameraElement.prototype.destroy = function() {
            }, HCameraElement.prototype.getBaseElement = function() {
              return null;
            }, extendPrototype(
              [
                BaseElement,
                TransformElement,
                HBaseElement,
                HSolidElement,
                HierarchyElement,
                FrameElement,
                RenderableElement
              ],
              HImageElement
            ), HImageElement.prototype.createContent = function() {
              var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
              this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
            }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
              for (; this.pendingElements.length; ) {
                this.pendingElements.pop().checkParenting();
              }
            }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
              var r = t.getBaseElement();
              if (r) {
                var i = this.layers[e];
                if (i.ddd && this.supports3d)
                  this.addTo3dContainer(r, e);
                else if (this.threeDElements)
                  this.addTo3dContainer(r, e);
                else {
                  for (var s, a, n = 0; n < e; )
                    this.elements[n] && true !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                  s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r);
                }
              }
            }, HybridRendererBase.prototype.createShape = function(t) {
              return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createText = function(t) {
              return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createCamera = function(t) {
              return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
            }, HybridRendererBase.prototype.createImage = function(t) {
              return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createSolid = function(t) {
              return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
            }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
              for (var e = 0, r = this.threeDElements.length; e < r; ) {
                if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                  return this.threeDElements[e].perspectiveElem;
                e += 1;
              }
              return null;
            }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
              var r, i, s = createTag("div");
              styleDiv(s);
              var a = createTag("div");
              if (styleDiv(a), "3d" === e) {
                (r = s.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
                var n = "50% 50%";
                r.webkitTransformOrigin = n, r.mozTransformOrigin = n, r.transformOrigin = n;
                var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                (i = a.style).transform = o, i.webkitTransform = o;
              }
              s.appendChild(a);
              var h = { container: a, perspectiveElem: s, startPos: t, endPos: t, type: e };
              return this.threeDElements.push(h), h;
            }, HybridRendererBase.prototype.build3dContainers = function() {
              var t, e, r = this.layers.length, i = "";
              for (t = 0; t < r; t += 1)
                this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
              for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
                this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
            }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
              for (var r = 0, i = this.threeDElements.length; r < i; ) {
                if (e <= this.threeDElements[r].endPos) {
                  for (var s, a = this.threeDElements[r].startPos; a < e; )
                    this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                  s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                  break;
                }
                r += 1;
              }
            }, HybridRendererBase.prototype.configAnimation = function(t) {
              var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
              i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
              var s = createNS("svg");
              s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
              var a = createNS("defs");
              s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
            }, HybridRendererBase.prototype.destroy = function() {
              var t;
              this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
              var e = this.layers ? this.layers.length : 0;
              for (t = 0; t < e; t += 1)
                this.elements[t].destroy();
              this.elements.length = 0, this.destroyed = true, this.animationItem = null;
            }, HybridRendererBase.prototype.updateContainerSize = function() {
              var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = s / a;
              this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
              var o = this.resizerElem.style;
              o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform;
            }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
              this.resizerElem.style.display = "none";
            }, HybridRendererBase.prototype.show = function() {
              this.resizerElem.style.display = "block";
            }, HybridRendererBase.prototype.initItems = function() {
              if (this.buildAllItems(), this.camera)
                this.camera.setup();
              else {
                var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
                for (t = 0; t < i; t += 1) {
                  var s = this.threeDElements[t].perspectiveElem.style;
                  s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px", s.perspective = s.webkitPerspective;
                }
              }
            }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
              var e, r = t.length, i = createTag("div");
              for (e = 0; e < r; e += 1)
                if (t[e].xt) {
                  var s = this.createComp(t[e], i, this.globalData.comp, null);
                  s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
                }
            }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
              this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
            }, HCompElement.prototype.addTo3dContainer = function(t, e) {
              for (var r, i = 0; i < e; )
                this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
              r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t);
            }, HCompElement.prototype.createComp = function(t) {
              return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
            }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
              return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
            };
            var CompExpressionInterface = function(t) {
              function e(e2) {
                for (var r = 0, i = t.layers.length; r < i; ) {
                  if (t.layers[r].nm === e2 || t.layers[r].ind === e2)
                    return t.elements[r].layerInterface;
                  r += 1;
                }
                return null;
              }
              return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
            }, Expressions = function() {
              var t = {};
              return t.initExpressions = function(t2) {
                var e = 0, r = [];
                t2.renderer.compInterface = CompExpressionInterface(t2.renderer), t2.renderer.globalData.projectInterface.registerComposition(t2.renderer), t2.renderer.globalData.pushExpression = function() {
                  e += 1;
                }, t2.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t3, e2 = r.length;
                    for (t3 = 0; t3 < e2; t3 += 1)
                      r[t3].release();
                    r.length = 0;
                  }();
                }, t2.renderer.globalData.registerExpressionProperty = function(t3) {
                  -1 === r.indexOf(t3) && r.push(t3);
                };
              }, t;
            }(), MaskManagerInterface = function() {
              function t(t2, e) {
                this._mask = t2, this._data = e;
              }
              Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                }
              });
              return function(e) {
                var r, i = createSizedArray(e.viewData.length), s = e.viewData.length;
                for (r = 0; r < s; r += 1)
                  i[r] = new t(e.viewData[r], e.masksProperties[r]);
                return function(t2) {
                  for (r = 0; r < s; ) {
                    if (e.masksProperties[r].nm === t2)
                      return i[r];
                    r += 1;
                  }
                  return null;
                };
              };
            }(), ExpressionPropertyInterface = function() {
              var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
              function r(t2, e2, r2) {
                Object.defineProperty(t2, "velocity", {
                  get: function() {
                    return e2.getVelocityAtTime(e2.comp.currentFrame);
                  }
                }), t2.numKeys = e2.keyframes ? e2.keyframes.length : 0, t2.key = function(i2) {
                  if (!t2.numKeys)
                    return 0;
                  var s = "";
                  s = "s" in e2.keyframes[i2 - 1] ? e2.keyframes[i2 - 1].s : "e" in e2.keyframes[i2 - 2] ? e2.keyframes[i2 - 2].e : e2.keyframes[i2 - 2].s;
                  var a = "unidimensional" === r2 ? new Number(s) : Object.assign({}, s);
                  return a.time = e2.keyframes[i2 - 1].t / e2.elem.comp.globalData.frameRate, a.value = "unidimensional" === r2 ? s[0] : s, a;
                }, t2.valueAtTime = e2.getValueAtTime, t2.speedAtTime = e2.getSpeedAtTime, t2.velocityAtTime = e2.getVelocityAtTime, t2.propertyGroup = e2.propertyGroup;
              }
              function i() {
                return t;
              }
              return function(s) {
                return s ? "unidimensional" === s.propType ? function(e2) {
                  e2 && "pv" in e2 || (e2 = t);
                  var i2 = 1 / e2.mult, s2 = e2.pv * i2, a = new Number(s2);
                  return a.value = s2, r(a, e2, "unidimensional"), function() {
                    return e2.k && e2.getValue(), s2 = e2.v * i2, a.value !== s2 && ((a = new Number(s2)).value = s2, r(a, e2, "unidimensional")), a;
                  };
                }(s) : function(t2) {
                  t2 && "pv" in t2 || (t2 = e);
                  var i2 = 1 / t2.mult, s2 = t2.data && t2.data.l || t2.pv.length, a = createTypedArray("float32", s2), n = createTypedArray("float32", s2);
                  return a.value = n, r(a, t2, "multidimensional"), function() {
                    t2.k && t2.getValue();
                    for (var e2 = 0; e2 < s2; e2 += 1)
                      n[e2] = t2.v[e2] * i2, a[e2] = n[e2];
                    return a;
                  };
                }(s) : i;
              };
            }(), TransformExpressionInterface = function(t) {
              function e(t2) {
                switch (t2) {
                  case "scale":
                  case "Scale":
                  case "ADBE Scale":
                  case 6:
                    return e.scale;
                  case "rotation":
                  case "Rotation":
                  case "ADBE Rotation":
                  case "ADBE Rotate Z":
                  case 10:
                    return e.rotation;
                  case "ADBE Rotate X":
                    return e.xRotation;
                  case "ADBE Rotate Y":
                    return e.yRotation;
                  case "position":
                  case "Position":
                  case "ADBE Position":
                  case 2:
                    return e.position;
                  case "ADBE Position_0":
                    return e.xPosition;
                  case "ADBE Position_1":
                    return e.yPosition;
                  case "ADBE Position_2":
                    return e.zPosition;
                  case "anchorPoint":
                  case "AnchorPoint":
                  case "Anchor Point":
                  case "ADBE AnchorPoint":
                  case 1:
                    return e.anchorPoint;
                  case "opacity":
                  case "Opacity":
                  case 11:
                    return e.opacity;
                  default:
                    return null;
                }
              }
              var r, i, s, a;
              return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", {
                get: ExpressionPropertyInterface(t.rz || t.r)
              }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
                get: function() {
                  return t.p ? a() : [r(), i(), s ? s() : 0];
                }
              }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
            }, LayerExpressionInterface = function() {
              function t(t2) {
                var e2 = new Matrix();
                void 0 !== t2 ? this._elem.finalTransform.mProp.getValueAtTime(t2).clone(e2) : this._elem.finalTransform.mProp.applyToMatrix(e2);
                return e2;
              }
              function e(t2, e2) {
                var r2 = this.getMatrix(e2);
                return r2.props[12] = 0, r2.props[13] = 0, r2.props[14] = 0, this.applyPoint(r2, t2);
              }
              function r(t2, e2) {
                var r2 = this.getMatrix(e2);
                return this.applyPoint(r2, t2);
              }
              function i(t2, e2) {
                var r2 = this.getMatrix(e2);
                return r2.props[12] = 0, r2.props[13] = 0, r2.props[14] = 0, this.invertPoint(r2, t2);
              }
              function s(t2, e2) {
                var r2 = this.getMatrix(e2);
                return this.invertPoint(r2, t2);
              }
              function a(t2, e2) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                  var r2, i2 = this._elem.hierarchy.length;
                  for (r2 = 0; r2 < i2; r2 += 1)
                    this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(t2);
                }
                return t2.applyToPointArray(e2[0], e2[1], e2[2] || 0);
              }
              function n(t2, e2) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                  var r2, i2 = this._elem.hierarchy.length;
                  for (r2 = 0; r2 < i2; r2 += 1)
                    this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(t2);
                }
                return t2.inversePoint(e2);
              }
              function o(t2) {
                var e2 = new Matrix();
                if (e2.reset(), this._elem.finalTransform.mProp.applyToMatrix(e2), this._elem.hierarchy && this._elem.hierarchy.length) {
                  var r2, i2 = this._elem.hierarchy.length;
                  for (r2 = 0; r2 < i2; r2 += 1)
                    this._elem.hierarchy[r2].finalTransform.mProp.applyToMatrix(e2);
                  return e2.inversePoint(t2);
                }
                return e2.inversePoint(t2);
              }
              function h() {
                return [1, 1, 1, 1];
              }
              return function(l) {
                var p2;
                function f(t2) {
                  switch (t2) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                      return f.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                      return p2;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                      return f.effect;
                    case "ADBE Text Properties":
                      return f.textInterface;
                    default:
                      return null;
                  }
                }
                f.getMatrix = t, f.invertPoint = n, f.applyPoint = a, f.toWorld = r, f.toWorldVec = e, f.fromWorld = s, f.fromWorldVec = i, f.toComp = r, f.fromComp = o, f.sampleImage = h, f.sourceRectAtTime = l.sourceRectAtTime.bind(l), f._elem = l;
                var m = getDescriptor(
                  p2 = TransformExpressionInterface(l.finalTransform.mProp),
                  "anchorPoint"
                );
                return Object.defineProperties(f, {
                  hasParent: {
                    get: function() {
                      return l.hierarchy.length;
                    }
                  },
                  parent: {
                    get: function() {
                      return l.hierarchy[0].layerInterface;
                    }
                  },
                  rotation: getDescriptor(p2, "rotation"),
                  scale: getDescriptor(p2, "scale"),
                  position: getDescriptor(p2, "position"),
                  opacity: getDescriptor(p2, "opacity"),
                  anchorPoint: m,
                  anchor_point: m,
                  transform: {
                    get: function() {
                      return p2;
                    }
                  },
                  active: {
                    get: function() {
                      return l.isInRange;
                    }
                  }
                }), f.startTime = l.data.st, f.index = l.data.ind, f.source = l.data.refId, f.height = 0 === l.data.ty ? l.data.h : 100, f.width = 0 === l.data.ty ? l.data.w : 100, f.inPoint = l.data.ip / l.comp.globalData.frameRate, f.outPoint = l.data.op / l.comp.globalData.frameRate, f._name = l.data.nm, f.registerMaskInterface = function(t2) {
                  f.mask = new MaskManagerInterface(t2, l);
                }, f.registerEffectsInterface = function(t2) {
                  f.effect = t2;
                }, f;
              };
            }(), propertyGroupFactory = function(t, e) {
              return function(r) {
                return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1);
              };
            }, PropertyInterface = function(t, e) {
              var r = { _name: t };
              return function(t2) {
                return (t2 = void 0 === t2 ? 1 : t2) <= 0 ? r : e(t2 - 1);
              };
            }, EffectsExpressionInterface = function() {
              function t(r, i, s, a) {
                function n(t2) {
                  for (var e2 = r.ef, i2 = 0, s2 = e2.length; i2 < s2; ) {
                    if (t2 === e2[i2].nm || t2 === e2[i2].mn || t2 === e2[i2].ix)
                      return 5 === e2[i2].ty ? l[i2] : l[i2]();
                    i2 += 1;
                  }
                  throw new Error();
                }
                var o, h = propertyGroupFactory(n, s), l = [], p2 = r.ef.length;
                for (o = 0; o < p2; o += 1)
                  5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : l.push(e(i.effectElements[o], r.ef[o].ty, a, h));
                return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                  get: function() {
                    return l[0]();
                  }
                }), Object.defineProperties(n, {
                  numProperties: {
                    get: function() {
                      return r.np;
                    }
                  },
                  _name: { value: r.nm },
                  propertyGroup: { value: h }
                }), n.enabled = 0 !== r.en, n.active = n.enabled, n;
              }
              function e(t2, e2, r, i) {
                var s = ExpressionPropertyInterface(t2.p);
                return t2.p.setGroupProperty && t2.p.setGroupProperty(PropertyInterface("", i)), function() {
                  return 10 === e2 ? r.comp.compInterface(t2.p.v) : s();
                };
              }
              return {
                createEffectsInterface: function(e2, r) {
                  if (e2.effectsManager) {
                    var i, s = [], a = e2.data.ef, n = e2.effectsManager.effectElements.length;
                    for (i = 0; i < n; i += 1)
                      s.push(t(a[i], e2.effectsManager.effectElements[i], r, e2));
                    var o = e2.data.ef || [], h = function(t2) {
                      for (i = 0, n = o.length; i < n; ) {
                        if (t2 === o[i].nm || t2 === o[i].mn || t2 === o[i].ix)
                          return s[i];
                        i += 1;
                      }
                      return null;
                    };
                    return Object.defineProperty(h, "numProperties", {
                      get: function() {
                        return o.length;
                      }
                    }), h;
                  }
                  return null;
                }
              };
            }(), ShapePathInterface = function(t, e, r) {
              var i = e.sh;
              function s(t2) {
                return "Shape" === t2 || "shape" === t2 || "Path" === t2 || "path" === t2 || "ADBE Vector Shape" === t2 || 2 === t2 ? s.path : null;
              }
              var a = propertyGroupFactory(s, r);
              return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, {
                path: {
                  get: function() {
                    return i.k && i.getValue(), i;
                  }
                },
                shape: {
                  get: function() {
                    return i.k && i.getValue(), i;
                  }
                },
                _name: { value: t.nm },
                ix: { value: t.ix },
                propertyIndex: { value: t.ix },
                mn: { value: t.mn },
                propertyGroup: { value: r }
              }), s;
            }, ShapeExpressionInterface = function() {
              function t(t2, o2, c) {
                var d, u = [], y = t2 ? t2.length : 0;
                for (d = 0; d < y; d += 1)
                  "gr" === t2[d].ty ? u.push(e(t2[d], o2[d], c)) : "fl" === t2[d].ty ? u.push(r(t2[d], o2[d], c)) : "st" === t2[d].ty ? u.push(a(t2[d], o2[d], c)) : "tm" === t2[d].ty ? u.push(n(t2[d], o2[d], c)) : "tr" === t2[d].ty || ("el" === t2[d].ty ? u.push(h(t2[d], o2[d], c)) : "sr" === t2[d].ty ? u.push(l(t2[d], o2[d], c)) : "sh" === t2[d].ty ? u.push(ShapePathInterface(t2[d], o2[d], c)) : "rc" === t2[d].ty ? u.push(p2(t2[d], o2[d], c)) : "rd" === t2[d].ty ? u.push(f(t2[d], o2[d], c)) : "rp" === t2[d].ty ? u.push(m(t2[d], o2[d], c)) : "gf" === t2[d].ty ? u.push(i(t2[d], o2[d], c)) : u.push(s(t2[d], o2[d])));
                return u;
              }
              function e(e2, r2, i2) {
                var s2 = function(t2) {
                  switch (t2) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                      return s2.content;
                    default:
                      return s2.transform;
                  }
                };
                s2.propertyGroup = propertyGroupFactory(s2, i2);
                var a2 = function(e3, r3, i3) {
                  var s3, a3 = function(t2) {
                    for (var e4 = 0, r4 = s3.length; e4 < r4; ) {
                      if (s3[e4]._name === t2 || s3[e4].mn === t2 || s3[e4].propertyIndex === t2 || s3[e4].ix === t2 || s3[e4].ind === t2)
                        return s3[e4];
                      e4 += 1;
                    }
                    return "number" == typeof t2 ? s3[t2 - 1] : null;
                  };
                  a3.propertyGroup = propertyGroupFactory(a3, i3), s3 = t(e3.it, r3.it, a3.propertyGroup), a3.numProperties = s3.length;
                  var n3 = o(e3.it[e3.it.length - 1], r3.it[r3.it.length - 1], a3.propertyGroup);
                  return a3.transform = n3, a3.propertyIndex = e3.cix, a3._name = e3.nm, a3;
                }(e2, r2, s2.propertyGroup), n2 = o(e2.it[e2.it.length - 1], r2.it[r2.it.length - 1], s2.propertyGroup);
                return s2.content = a2, s2.transform = n2, Object.defineProperty(s2, "_name", {
                  get: function() {
                    return e2.nm;
                  }
                }), s2.numProperties = e2.np, s2.propertyIndex = e2.ix, s2.nm = e2.nm, s2.mn = e2.mn, s2;
              }
              function r(t2, e2, r2) {
                function i2(t3) {
                  return "Color" === t3 || "color" === t3 ? i2.color : "Opacity" === t3 || "opacity" === t3 ? i2.opacity : null;
                }
                return Object.defineProperties(i2, {
                  color: { get: ExpressionPropertyInterface(e2.c) },
                  opacity: { get: ExpressionPropertyInterface(e2.o) },
                  _name: { value: t2.nm },
                  mn: { value: t2.mn }
                }), e2.c.setGroupProperty(PropertyInterface("Color", r2)), e2.o.setGroupProperty(PropertyInterface("Opacity", r2)), i2;
              }
              function i(t2, e2, r2) {
                function i2(t3) {
                  return "Start Point" === t3 || "start point" === t3 ? i2.startPoint : "End Point" === t3 || "end point" === t3 ? i2.endPoint : "Opacity" === t3 || "opacity" === t3 ? i2.opacity : null;
                }
                return Object.defineProperties(i2, {
                  startPoint: { get: ExpressionPropertyInterface(e2.s) },
                  endPoint: { get: ExpressionPropertyInterface(e2.e) },
                  opacity: { get: ExpressionPropertyInterface(e2.o) },
                  type: {
                    get: function() {
                      return "a";
                    }
                  },
                  _name: { value: t2.nm },
                  mn: { value: t2.mn }
                }), e2.s.setGroupProperty(PropertyInterface("Start Point", r2)), e2.e.setGroupProperty(PropertyInterface("End Point", r2)), e2.o.setGroupProperty(PropertyInterface("Opacity", r2)), i2;
              }
              function s() {
                return function() {
                  return null;
                };
              }
              function a(t2, e2, r2) {
                var i2, s2 = propertyGroupFactory(l2, r2), a2 = propertyGroupFactory(h2, s2);
                function n2(r3) {
                  Object.defineProperty(h2, t2.d[r3].nm, {
                    get: ExpressionPropertyInterface(e2.d.dataProps[r3].p)
                  });
                }
                var o2 = t2.d ? t2.d.length : 0, h2 = {};
                for (i2 = 0; i2 < o2; i2 += 1)
                  n2(i2), e2.d.dataProps[i2].p.setGroupProperty(a2);
                function l2(t3) {
                  return "Color" === t3 || "color" === t3 ? l2.color : "Opacity" === t3 || "opacity" === t3 ? l2.opacity : "Stroke Width" === t3 || "stroke width" === t3 ? l2.strokeWidth : null;
                }
                return Object.defineProperties(l2, {
                  color: { get: ExpressionPropertyInterface(e2.c) },
                  opacity: { get: ExpressionPropertyInterface(e2.o) },
                  strokeWidth: { get: ExpressionPropertyInterface(e2.w) },
                  dash: {
                    get: function() {
                      return h2;
                    }
                  },
                  _name: { value: t2.nm },
                  mn: { value: t2.mn }
                }), e2.c.setGroupProperty(PropertyInterface("Color", s2)), e2.o.setGroupProperty(PropertyInterface("Opacity", s2)), e2.w.setGroupProperty(PropertyInterface("Stroke Width", s2)), l2;
              }
              function n(t2, e2, r2) {
                function i2(e3) {
                  return e3 === t2.e.ix || "End" === e3 || "end" === e3 ? i2.end : e3 === t2.s.ix ? i2.start : e3 === t2.o.ix ? i2.offset : null;
                }
                var s2 = propertyGroupFactory(i2, r2);
                return i2.propertyIndex = t2.ix, e2.s.setGroupProperty(PropertyInterface("Start", s2)), e2.e.setGroupProperty(PropertyInterface("End", s2)), e2.o.setGroupProperty(PropertyInterface("Offset", s2)), i2.propertyIndex = t2.ix, i2.propertyGroup = r2, Object.defineProperties(i2, {
                  start: { get: ExpressionPropertyInterface(e2.s) },
                  end: { get: ExpressionPropertyInterface(e2.e) },
                  offset: { get: ExpressionPropertyInterface(e2.o) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              function o(t2, e2, r2) {
                function i2(e3) {
                  return t2.a.ix === e3 || "Anchor Point" === e3 ? i2.anchorPoint : t2.o.ix === e3 || "Opacity" === e3 ? i2.opacity : t2.p.ix === e3 || "Position" === e3 ? i2.position : t2.r.ix === e3 || "Rotation" === e3 || "ADBE Vector Rotation" === e3 ? i2.rotation : t2.s.ix === e3 || "Scale" === e3 ? i2.scale : t2.sk && t2.sk.ix === e3 || "Skew" === e3 ? i2.skew : t2.sa && t2.sa.ix === e3 || "Skew Axis" === e3 ? i2.skewAxis : null;
                }
                var s2 = propertyGroupFactory(i2, r2);
                return e2.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s2)), e2.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s2)), e2.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s2)), e2.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s2)), e2.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s2)), e2.transform.mProps.sk && (e2.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s2)), e2.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s2))), e2.transform.op.setGroupProperty(PropertyInterface("Opacity", s2)), Object.defineProperties(i2, {
                  opacity: { get: ExpressionPropertyInterface(e2.transform.mProps.o) },
                  position: { get: ExpressionPropertyInterface(e2.transform.mProps.p) },
                  anchorPoint: { get: ExpressionPropertyInterface(e2.transform.mProps.a) },
                  scale: { get: ExpressionPropertyInterface(e2.transform.mProps.s) },
                  rotation: { get: ExpressionPropertyInterface(e2.transform.mProps.r) },
                  skew: { get: ExpressionPropertyInterface(e2.transform.mProps.sk) },
                  skewAxis: { get: ExpressionPropertyInterface(e2.transform.mProps.sa) },
                  _name: { value: t2.nm }
                }), i2.ty = "tr", i2.mn = t2.mn, i2.propertyGroup = r2, i2;
              }
              function h(t2, e2, r2) {
                function i2(e3) {
                  return t2.p.ix === e3 ? i2.position : t2.s.ix === e3 ? i2.size : null;
                }
                var s2 = propertyGroupFactory(i2, r2);
                i2.propertyIndex = t2.ix;
                var a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
                return a2.s.setGroupProperty(PropertyInterface("Size", s2)), a2.p.setGroupProperty(PropertyInterface("Position", s2)), Object.defineProperties(i2, {
                  size: { get: ExpressionPropertyInterface(a2.s) },
                  position: { get: ExpressionPropertyInterface(a2.p) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              function l(t2, e2, r2) {
                function i2(e3) {
                  return t2.p.ix === e3 ? i2.position : t2.r.ix === e3 ? i2.rotation : t2.pt.ix === e3 ? i2.points : t2.or.ix === e3 || "ADBE Vector Star Outer Radius" === e3 ? i2.outerRadius : t2.os.ix === e3 ? i2.outerRoundness : !t2.ir || t2.ir.ix !== e3 && "ADBE Vector Star Inner Radius" !== e3 ? t2.is && t2.is.ix === e3 ? i2.innerRoundness : null : i2.innerRadius;
                }
                var s2 = propertyGroupFactory(i2, r2), a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
                return i2.propertyIndex = t2.ix, a2.or.setGroupProperty(PropertyInterface("Outer Radius", s2)), a2.os.setGroupProperty(PropertyInterface("Outer Roundness", s2)), a2.pt.setGroupProperty(PropertyInterface("Points", s2)), a2.p.setGroupProperty(PropertyInterface("Position", s2)), a2.r.setGroupProperty(PropertyInterface("Rotation", s2)), t2.ir && (a2.ir.setGroupProperty(PropertyInterface("Inner Radius", s2)), a2.is.setGroupProperty(PropertyInterface("Inner Roundness", s2))), Object.defineProperties(i2, {
                  position: { get: ExpressionPropertyInterface(a2.p) },
                  rotation: { get: ExpressionPropertyInterface(a2.r) },
                  points: { get: ExpressionPropertyInterface(a2.pt) },
                  outerRadius: { get: ExpressionPropertyInterface(a2.or) },
                  outerRoundness: { get: ExpressionPropertyInterface(a2.os) },
                  innerRadius: { get: ExpressionPropertyInterface(a2.ir) },
                  innerRoundness: { get: ExpressionPropertyInterface(a2.is) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              function p2(t2, e2, r2) {
                function i2(e3) {
                  return t2.p.ix === e3 ? i2.position : t2.r.ix === e3 ? i2.roundness : t2.s.ix === e3 || "Size" === e3 || "ADBE Vector Rect Size" === e3 ? i2.size : null;
                }
                var s2 = propertyGroupFactory(i2, r2), a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
                return i2.propertyIndex = t2.ix, a2.p.setGroupProperty(PropertyInterface("Position", s2)), a2.s.setGroupProperty(PropertyInterface("Size", s2)), a2.r.setGroupProperty(PropertyInterface("Rotation", s2)), Object.defineProperties(i2, {
                  position: { get: ExpressionPropertyInterface(a2.p) },
                  roundness: { get: ExpressionPropertyInterface(a2.r) },
                  size: { get: ExpressionPropertyInterface(a2.s) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              function f(t2, e2, r2) {
                function i2(e3) {
                  return t2.r.ix === e3 || "Round Corners 1" === e3 ? i2.radius : null;
                }
                var s2 = propertyGroupFactory(i2, r2), a2 = e2;
                return i2.propertyIndex = t2.ix, a2.rd.setGroupProperty(PropertyInterface("Radius", s2)), Object.defineProperties(i2, {
                  radius: { get: ExpressionPropertyInterface(a2.rd) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              function m(t2, e2, r2) {
                function i2(e3) {
                  return t2.c.ix === e3 || "Copies" === e3 ? i2.copies : t2.o.ix === e3 || "Offset" === e3 ? i2.offset : null;
                }
                var s2 = propertyGroupFactory(i2, r2), a2 = e2;
                return i2.propertyIndex = t2.ix, a2.c.setGroupProperty(PropertyInterface("Copies", s2)), a2.o.setGroupProperty(PropertyInterface("Offset", s2)), Object.defineProperties(i2, {
                  copies: { get: ExpressionPropertyInterface(a2.c) },
                  offset: { get: ExpressionPropertyInterface(a2.o) },
                  _name: { value: t2.nm }
                }), i2.mn = t2.mn, i2;
              }
              return function(e2, r2, i2) {
                var s2;
                function a2(t2) {
                  if ("number" == typeof t2)
                    return 0 === (t2 = void 0 === t2 ? 1 : t2) ? i2 : s2[t2 - 1];
                  for (var e3 = 0, r3 = s2.length; e3 < r3; ) {
                    if (s2[e3]._name === t2)
                      return s2[e3];
                    e3 += 1;
                  }
                  return null;
                }
                return a2.propertyGroup = propertyGroupFactory(a2, function() {
                  return i2;
                }), s2 = t(e2, r2, a2.propertyGroup), a2.numProperties = s2.length, a2._name = "Contents", a2;
              };
            }(), TextExpressionInterface = function(t) {
              var e, r;
              function i(t2) {
                return "ADBE Text Document" === t2 ? i.sourceText : null;
              }
              return Object.defineProperty(i, "sourceText", {
                get: function() {
                  t.textProperty.getValue();
                  var i2 = t.textProperty.currentData.t;
                  return i2 !== e && (e = t.textProperty.currentData.t, (r = new String(i2)).value = i2 || new String(i2), Object.defineProperty(r, "style", {
                    get: function() {
                      return { fillColor: t.textProperty.currentData.fc };
                    }
                  })), r;
                }
              }), i;
            };
            function _typeof$2(t) {
              return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$2(t);
            }
            var FootageInterface = (dataInterfaceFactory = function(t) {
              function e(t2) {
                return "Outline" === t2 ? e.outlineInterface() : null;
              }
              return e._name = "Outline", e.outlineInterface = function(t2) {
                var e2 = "", r = t2.getFootageData();
                function i(t3) {
                  if (r[t3])
                    return e2 = t3, "object" === _typeof$2(r = r[t3]) ? i : r;
                  var s = t3.indexOf(e2);
                  if (-1 !== s) {
                    var a = parseInt(t3.substr(s + e2.length), 10);
                    return "object" === _typeof$2(r = r[a]) ? i : r;
                  }
                  return "";
                }
                return function() {
                  return e2 = "", r = t2.getFootageData(), i;
                };
              }(t), e;
            }, function(t) {
              function e(t2) {
                return "Data" === t2 ? e.dataInterface : null;
              }
              return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e;
            }), dataInterfaceFactory, interfaces = {
              layer: LayerExpressionInterface,
              effects: EffectsExpressionInterface,
              comp: CompExpressionInterface,
              shape: ShapeExpressionInterface,
              text: TextExpressionInterface,
              footage: FootageInterface
            };
            function getInterface(t) {
              return interfaces[t] || null;
            }
            function _typeof$1(t) {
              return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof$1(t);
            }
            function seedRandom(t, e) {
              var r, i = this, s = 256, a = e.pow(s, 6), n = e.pow(2, 52), o = 2 * n, h = 255;
              function l(t2) {
                var e2, r2 = t2.length, i2 = this, a2 = 0, n2 = i2.i = i2.j = 0, o2 = i2.S = [];
                for (r2 || (t2 = [r2++]); a2 < s; )
                  o2[a2] = a2++;
                for (a2 = 0; a2 < s; a2++)
                  o2[a2] = o2[n2 = h & n2 + t2[a2 % r2] + (e2 = o2[a2])], o2[n2] = e2;
                i2.g = function(t3) {
                  for (var e3, r3 = 0, a3 = i2.i, n3 = i2.j, o3 = i2.S; t3--; )
                    e3 = o3[a3 = h & a3 + 1], r3 = r3 * s + o3[h & (o3[a3] = o3[n3 = h & n3 + e3]) + (o3[n3] = e3)];
                  return i2.i = a3, i2.j = n3, r3;
                };
              }
              function p2(t2, e2) {
                return e2.i = t2.i, e2.j = t2.j, e2.S = t2.S.slice(), e2;
              }
              function f(t2, e2) {
                var r2, i2 = [], s2 = _typeof$1(t2);
                if (e2 && "object" == s2)
                  for (r2 in t2)
                    try {
                      i2.push(f(t2[r2], e2 - 1));
                    } catch (t3) {
                    }
                return i2.length ? i2 : "string" == s2 ? t2 : t2 + "\0";
              }
              function m(t2, e2) {
                for (var r2, i2 = t2 + "", s2 = 0; s2 < i2.length; )
                  e2[h & s2] = h & (r2 ^= 19 * e2[h & s2]) + i2.charCodeAt(s2++);
                return c(e2);
              }
              function c(t2) {
                return String.fromCharCode.apply(0, t2);
              }
              e.seedrandom = function(h2, d, u) {
                var y = [], g = m(
                  f(
                    (d = true === d ? { entropy: true } : d || {}).entropy ? [h2, c(t)] : null === h2 ? function() {
                      try {
                        r;
                        var e2 = new Uint8Array(s);
                        return (i.crypto || i.msCrypto).getRandomValues(e2), c(e2);
                      } catch (e3) {
                        var a2 = i.navigator, n2 = a2 && a2.plugins;
                        return [+/* @__PURE__ */ new Date(), i, n2, i.screen, c(t)];
                      }
                    }() : h2,
                    3
                  ),
                  y
                ), v = new l(y), b = function() {
                  for (var t2 = v.g(6), e2 = a, r2 = 0; t2 < n; )
                    t2 = (t2 + r2) * s, e2 *= s, r2 = v.g(1);
                  for (; t2 >= o; )
                    t2 /= 2, e2 /= 2, r2 >>>= 1;
                  return (t2 + r2) / e2;
                };
                return b.int32 = function() {
                  return 0 | v.g(4);
                }, b.quick = function() {
                  return v.g(4) / 4294967296;
                }, b.double = b, m(c(v.S), t), (d.pass || u || function(t2, r2, i2, s2) {
                  return s2 && (s2.S && p2(s2, v), t2.state = function() {
                    return p2(v, {});
                  }), i2 ? (e.random = t2, r2) : t2;
                })(b, g, "global" in d ? d.global : this == e, d.state);
              }, m(e.random(), t);
            }
            function initialize$2(t) {
              seedRandom([], t);
            }
            var propTypes = { SHAPE: "shape" };
            function _typeof(t) {
              return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
                return typeof t2;
              } : function(t2) {
                return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
              }, _typeof(t);
            }
            var ExpressionManager = function() {
              var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null;
              function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array;
              }
              function isNumerable(t, e) {
                return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
              }
              function $bm_neg(t) {
                var e = _typeof(t);
                if ("number" === e || "boolean" === e || t instanceof Number)
                  return -t;
                if ($bm_isInstanceOfArray(t)) {
                  var r, i = t.length, s = [];
                  for (r = 0; r < i; r += 1)
                    s[r] = -t[r];
                  return s;
                }
                return t.propType ? t.v : -t;
              }
              initialize$2(BMMath);
              var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
              function sum(t, e) {
                var r = _typeof(t), i = _typeof(e);
                if ("string" === r || "string" === i)
                  return t + e;
                if (isNumerable(r, t) && isNumerable(i, e))
                  return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                  return (t = t.slice(0))[0] += e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                  return (e = e.slice(0))[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                    ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                  return o;
                }
                return 0;
              }
              var add = sum;
              function sub(t, e) {
                var r = _typeof(t), i = _typeof(e);
                if (isNumerable(r, t) && isNumerable(i, e))
                  return "string" === r && (t = parseInt(t, 10)), "string" === i && (e = parseInt(e, 10)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                  return (t = t.slice(0))[0] -= e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                  return (e = e.slice(0))[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                  for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                    ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                  return o;
                }
                return 0;
              }
              function mul(t, e) {
                var r, i, s, a = _typeof(t), n = _typeof(e);
                if (isNumerable(a, t) && isNumerable(n, e))
                  return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                    r[i] = t[i] * e;
                  return r;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                    r[i] = t * e[i];
                  return r;
                }
                return 0;
              }
              function div(t, e) {
                var r, i, s, a = _typeof(t), n = _typeof(e);
                if (isNumerable(a, t) && isNumerable(n, e))
                  return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                  for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                    r[i] = t[i] / e;
                  return r;
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                  for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1)
                    r[i] = t / e[i];
                  return r;
                }
                return 0;
              }
              function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
              }
              var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
              function clamp(t, e, r) {
                if (e > r) {
                  var i = r;
                  r = e, e = i;
                }
                return Math.min(Math.max(t, e), r);
              }
              function radiansToDegrees(t) {
                return t / degToRads;
              }
              var radians_to_degrees = radiansToDegrees;
              function degreesToRadians(t) {
                return t * degToRads;
              }
              var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
              function length(t, e) {
                if ("number" == typeof t || t instanceof Number)
                  return e = e || 0, Math.abs(t - e);
                var r;
                e || (e = helperLengthArray);
                var i = Math.min(t.length, e.length), s = 0;
                for (r = 0; r < i; r += 1)
                  s += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(s);
              }
              function normalize(t) {
                return div(t, length(t));
              }
              function rgbToHsl(t) {
                var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
                if (n === o)
                  e = 0, r = 0;
                else {
                  var l = n - o;
                  switch (r = h > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
                    case i:
                      e = (s - a) / l + (s < a ? 6 : 0);
                      break;
                    case s:
                      e = (a - i) / l + 2;
                      break;
                    case a:
                      e = (i - s) / l + 4;
                  }
                  e /= 6;
                }
                return [e, r, h, t[3]];
              }
              function hue2rgb(t, e, r) {
                return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < 0.5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
              }
              function hslToRgb(t) {
                var e, r, i, s = t[0], a = t[1], n = t[2];
                if (0 === a)
                  e = n, i = n, r = n;
                else {
                  var o = n < 0.5 ? n * (1 + a) : n + a - n * a, h = 2 * n - o;
                  e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3);
                }
                return [e, r, i, t[3]];
              }
              function linear(t, e, r, i, s) {
                if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) {
                  var a = r;
                  r = e, e = a;
                }
                if (t <= e)
                  return i;
                if (t >= r)
                  return s;
                var n, o = r === e ? 0 : (t - e) / (r - e);
                if (!i.length)
                  return i + (s - i) * o;
                var h = i.length, l = createTypedArray("float32", h);
                for (n = 0; n < h; n += 1)
                  l[n] = i[n] + (s[n] - i[n]) * o;
                return l;
              }
              function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                  var r, i = e.length;
                  t || (t = createTypedArray("float32", i));
                  var s = createTypedArray("float32", i), a = BMMath.random();
                  for (r = 0; r < i; r += 1)
                    s[r] = t[r] + a * (e[r] - t[r]);
                  return s;
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
              }
              function createPath(t, e, r, i) {
                var s, a = t.length, n = shapePool.newElement();
                n.setPathData(!!i, a);
                var o, h, l = [0, 0];
                for (s = 0; s < a; s += 1)
                  o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(
                    t[s][0],
                    t[s][1],
                    h[0] + t[s][0],
                    h[1] + t[s][1],
                    o[0] + t[s][0],
                    o[1] + t[s][1],
                    s,
                    true
                  );
                return n;
              }
              function initiateExpression(elem, data, property) {
                function noOp(t) {
                  return t;
                }
                if (!elem.globalData.renderConfig.runExpressions)
                  return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                  get: function() {
                    return thisProperty.v;
                  }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval(
                  "[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]"
                )[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || true !== this.data.hd, wiggle = function(t, e) {
                  var r, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s);
                  var n = Math.floor(5 * time);
                  for (r = 0, i = 0; r < n; ) {
                    for (i = 0; i < s; i += 1)
                      a[i] += -e + 2 * e * BMMath.random();
                    r += 1;
                  }
                  var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", s);
                  if (s > 1) {
                    for (i = 0; i < s; i += 1)
                      l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                    return l;
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
                }.bind(this);
                function loopInDuration(t, e) {
                  return loopIn(t, e, true);
                }
                function loopOutDuration(t, e) {
                  return loopOut(t, e, true);
                }
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                function lookAt(t, e) {
                  var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                  return [-Math.atan2(r[1], r[2]) / degToRads, i, 0];
                }
                function easeOut(t, e, r, i, s) {
                  return applyEase(easeOutBez, t, e, r, i, s);
                }
                function easeIn(t, e, r, i, s) {
                  return applyEase(easeInBez, t, e, r, i, s);
                }
                function ease(t, e, r, i, s) {
                  return applyEase(easeInOutBez, t, e, r, i, s);
                }
                function applyEase(t, e, r, i, s, a) {
                  void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
                  var n = t(e);
                  if ($bm_isInstanceOfArray(s)) {
                    var o, h = s.length, l = createTypedArray("float32", h);
                    for (o = 0; o < h; o += 1)
                      l[o] = (a[o] - s[o]) * n + s[o];
                    return l;
                  }
                  return (a - s) * n + s;
                }
                function nearestKey(t) {
                  var e, r, i, s = data.k.length;
                  if (data.k.length && "number" != typeof data.k[0])
                    if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                      r = 1, i = data.k[0].t;
                    else {
                      for (e = 0; e < s - 1; e += 1) {
                        if (t === data.k[e].t) {
                          r = e + 1, i = data.k[e].t;
                          break;
                        }
                        if (t > data.k[e].t && t < data.k[e + 1].t) {
                          t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, i = data.k[e + 1].t) : (r = e + 1, i = data.k[e].t);
                          break;
                        }
                      }
                      -1 === r && (r = e + 1, i = data.k[e].t);
                    }
                  else
                    r = 0, i = 0;
                  var a = {};
                  return a.index = r, a.time = i / elem.comp.globalData.frameRate, a;
                }
                function key(t) {
                  var e, r, i;
                  if (!data.k.length || "number" == typeof data.k[0])
                    throw new Error("The property has no keyframe at index " + t);
                  t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
                  var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                  for (i = s.length, r = 0; r < i; r += 1)
                    e[r] = s[r], e.value[r] = s[r];
                  return e;
                }
                function framesToTime(t, e) {
                  return e || (e = elem.comp.globalData.frameRate), t / e;
                }
                function timeToFrames(t, e) {
                  return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
                }
                function seedRandom(t) {
                  BMMath.seedrandom(randSeed + t);
                }
                function sourceRectAtTime() {
                  return elem.sourceRectAtTime();
                }
                function substring(t, e) {
                  return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
                }
                function substr(t, e) {
                  return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
                }
                function posterizeTime(t) {
                  time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
                }
                var index = elem.data.ind;
                !(!elem.hierarchy || !elem.hierarchy.length);
                var parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                function executeExpression(t) {
                  return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), !(!elem.hierarchy || !elem.hierarchy.length) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
                }
                return executeExpression.__preventDeadCodeRemoval = [
                  $bm_transform,
                  anchorPoint,
                  time,
                  velocity,
                  inPoint,
                  outPoint,
                  width,
                  height,
                  name,
                  loop_in,
                  loop_out,
                  smooth,
                  toComp,
                  fromCompToSurface,
                  toWorld,
                  fromWorld,
                  mask,
                  position,
                  rotation,
                  scale,
                  thisComp,
                  numKeys,
                  active,
                  wiggle,
                  loopInDuration,
                  loopOutDuration,
                  comp,
                  lookAt,
                  easeOut,
                  easeIn,
                  ease,
                  nearestKey,
                  key,
                  text,
                  textIndex,
                  textTotal,
                  selectorValue,
                  framesToTime,
                  timeToFrames,
                  sourceRectAtTime,
                  substring,
                  substr,
                  posterizeTime,
                  index,
                  globalData
                ], executeExpression;
              }
              return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [
                window,
                document,
                XMLHttpRequest,
                fetch,
                frames,
                $bm_neg,
                add,
                $bm_sum,
                $bm_sub,
                $bm_mul,
                $bm_div,
                $bm_mod,
                clamp,
                radians_to_degrees,
                degreesToRadians,
                degrees_to_radians,
                normalize,
                rgbToHsl,
                hslToRgb,
                linear,
                random,
                createPath
              ], ob;
            }(), expressionHelpers = {
              searchExpressions: function(t, e, r) {
                e.x && (r.k = true, r.x = true, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)));
              },
              getSpeedAtTime: function(t) {
                var e = this.getValueAtTime(t), r = this.getValueAtTime(t + -0.01), i = 0;
                if (e.length) {
                  var s;
                  for (s = 0; s < e.length; s += 1)
                    i += Math.pow(r[s] - e[s], 2);
                  i = 100 * Math.sqrt(i);
                } else
                  i = 0;
                return i;
              },
              getVelocityAtTime: function(t) {
                if (void 0 !== this.vel)
                  return this.vel;
                var e, r, i = -1e-3, s = this.getValueAtTime(t), a = this.getValueAtTime(t + i);
                if (s.length)
                  for (e = createTypedArray("float32", s.length), r = 0; r < s.length; r += 1)
                    e[r] = (a[r] - s[r]) / i;
                else
                  e = (a - s) / i;
                return e;
              },
              getValueAtTime: function(t) {
                return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
              },
              getStaticValueAtTime: function() {
                return this.pv;
              },
              setGroupProperty: function(t) {
                this.propertyGroup = t;
              }
            };
            function addPropertyDecorator() {
              function t(t2, e2, r2) {
                if (!this.k || !this.keyframes)
                  return this.pv;
                t2 = t2 ? t2.toLowerCase() : "";
                var i2, s2, a2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p3 = l2[l2.length - 1].t;
                if (h2 <= p3)
                  return this.pv;
                if (r2 ? s2 = p3 - (i2 = e2 ? Math.abs(p3 - this.elem.comp.globalData.frameRate * e2) : Math.max(0, p3 - this.elem.data.ip)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i2 = p3 - (s2 = l2[l2.length - 1 - e2].t)), "pingpong" === t2) {
                  if (Math.floor((h2 - s2) / i2) % 2 != 0)
                    return this.getValueAtTime((i2 - (h2 - s2) % i2 + s2) / this.comp.globalData.frameRate, 0);
                } else {
                  if ("offset" === t2) {
                    var f = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), m = this.getValueAtTime(p3 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(((h2 - s2) % i2 + s2) / this.comp.globalData.frameRate, 0), d = Math.floor((h2 - s2) / i2);
                    if (this.pv.length) {
                      for (n2 = (o2 = new Array(f.length)).length, a2 = 0; a2 < n2; a2 += 1)
                        o2[a2] = (m[a2] - f[a2]) * d + c[a2];
                      return o2;
                    }
                    return (m - f) * d + c;
                  }
                  if ("continue" === t2) {
                    var u = this.getValueAtTime(p3 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p3 - 1e-3) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                      for (n2 = (o2 = new Array(u.length)).length, a2 = 0; a2 < n2; a2 += 1)
                        o2[a2] = u[a2] + (u[a2] - y[a2]) * ((h2 - p3) / this.comp.globalData.frameRate) / 5e-4;
                      return o2;
                    }
                    return u + (h2 - p3) / 1e-3 * (u - y);
                  }
                }
                return this.getValueAtTime(((h2 - s2) % i2 + s2) / this.comp.globalData.frameRate, 0);
              }
              function e(t2, e2, r2) {
                if (!this.k)
                  return this.pv;
                t2 = t2 ? t2.toLowerCase() : "";
                var i2, s2, a2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p3 = l2[0].t;
                if (h2 >= p3)
                  return this.pv;
                if (r2 ? s2 = p3 + (i2 = e2 ? Math.abs(this.elem.comp.globalData.frameRate * e2) : Math.max(0, this.elem.data.op - p3)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), i2 = (s2 = l2[e2].t) - p3), "pingpong" === t2) {
                  if (Math.floor((p3 - h2) / i2) % 2 == 0)
                    return this.getValueAtTime(((p3 - h2) % i2 + p3) / this.comp.globalData.frameRate, 0);
                } else {
                  if ("offset" === t2) {
                    var f = this.getValueAtTime(p3 / this.comp.globalData.frameRate, 0), m = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime((i2 - (p3 - h2) % i2 + p3) / this.comp.globalData.frameRate, 0), d = Math.floor((p3 - h2) / i2) + 1;
                    if (this.pv.length) {
                      for (n2 = (o2 = new Array(f.length)).length, a2 = 0; a2 < n2; a2 += 1)
                        o2[a2] = c[a2] - (m[a2] - f[a2]) * d;
                      return o2;
                    }
                    return c - (m - f) * d;
                  }
                  if ("continue" === t2) {
                    var u = this.getValueAtTime(p3 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p3 + 1e-3) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                      for (n2 = (o2 = new Array(u.length)).length, a2 = 0; a2 < n2; a2 += 1)
                        o2[a2] = u[a2] + (u[a2] - y[a2]) * (p3 - h2) / 1e-3;
                      return o2;
                    }
                    return u + (u - y) * (p3 - h2) / 1e-3;
                  }
                }
                return this.getValueAtTime((i2 - ((p3 - h2) % i2 + p3)) / this.comp.globalData.frameRate, 0);
              }
              function r(t2, e2) {
                if (!this.k)
                  return this.pv;
                if (t2 = 0.5 * (t2 || 0.4), (e2 = Math.floor(e2 || 5)) <= 1)
                  return this.pv;
                var r2, i2, s2 = this.comp.renderedFrame / this.comp.globalData.frameRate, a2 = s2 - t2, n2 = e2 > 1 ? (s2 + t2 - a2) / (e2 - 1) : 1, o2 = 0, h2 = 0;
                for (r2 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o2 < e2; ) {
                  if (i2 = this.getValueAtTime(a2 + o2 * n2), this.pv.length)
                    for (h2 = 0; h2 < this.pv.length; h2 += 1)
                      r2[h2] += i2[h2];
                  else
                    r2 += i2;
                  o2 += 1;
                }
                if (this.pv.length)
                  for (h2 = 0; h2 < this.pv.length; h2 += 1)
                    r2[h2] /= e2;
                else
                  r2 /= e2;
                return r2;
              }
              function i(t2) {
                this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
                var e2 = this._transformCachingAtTime.v;
                if (e2.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
                  var r2 = this.a.getValueAtTime(t2);
                  e2.translate(-r2[0] * this.a.mult, -r2[1] * this.a.mult, r2[2] * this.a.mult);
                }
                if (this.appliedTransformations < 2) {
                  var i2 = this.s.getValueAtTime(t2);
                  e2.scale(i2[0] * this.s.mult, i2[1] * this.s.mult, i2[2] * this.s.mult);
                }
                if (this.sk && this.appliedTransformations < 3) {
                  var s2 = this.sk.getValueAtTime(t2), a2 = this.sa.getValueAtTime(t2);
                  e2.skewFromAxis(-s2 * this.sk.mult, a2 * this.sa.mult);
                }
                if (this.r && this.appliedTransformations < 4) {
                  var n2 = this.r.getValueAtTime(t2);
                  e2.rotate(-n2 * this.r.mult);
                } else if (!this.r && this.appliedTransformations < 4) {
                  var o2 = this.rz.getValueAtTime(t2), h2 = this.ry.getValueAtTime(t2), l2 = this.rx.getValueAtTime(t2), p3 = this.or.getValueAtTime(t2);
                  e2.rotateZ(-o2 * this.rz.mult).rotateY(h2 * this.ry.mult).rotateX(l2 * this.rx.mult).rotateZ(-p3[2] * this.or.mult).rotateY(p3[1] * this.or.mult).rotateX(p3[0] * this.or.mult);
                }
                if (this.data.p && this.data.p.s) {
                  var f = this.px.getValueAtTime(t2), m = this.py.getValueAtTime(t2);
                  if (this.data.p.z) {
                    var c = this.pz.getValueAtTime(t2);
                    e2.translate(f * this.px.mult, m * this.py.mult, -c * this.pz.mult);
                  } else
                    e2.translate(f * this.px.mult, m * this.py.mult, 0);
                } else {
                  var d = this.p.getValueAtTime(t2);
                  e2.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
                }
                return e2;
              }
              function s() {
                return this.v.clone(new Matrix());
              }
              var a = TransformPropertyFactory.getTransformProperty;
              TransformPropertyFactory.getTransformProperty = function(t2, e2, r2) {
                var n2 = a(t2, e2, r2);
                return n2.dynamicProperties.length ? n2.getValueAtTime = i.bind(n2) : n2.getValueAtTime = s.bind(n2), n2.setGroupProperty = expressionHelpers.setGroupProperty, n2;
              };
              var n = PropertyFactory.getProp;
              PropertyFactory.getProp = function(i2, s2, a2, o2, h2) {
                var l2 = n(i2, s2, a2, o2, h2);
                l2.kf ? l2.getValueAtTime = expressionHelpers.getValueAtTime.bind(l2) : l2.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l2), l2.setGroupProperty = expressionHelpers.setGroupProperty, l2.loopOut = t, l2.loopIn = e, l2.smooth = r, l2.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l2), l2.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l2), l2.numKeys = 1 === s2.a ? s2.k.length : 0, l2.propertyIndex = s2.ix;
                var p3 = 0;
                return 0 !== a2 && (p3 = createTypedArray("float32", 1 === s2.a ? s2.k[0].s.length : s2.k.length)), l2._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: p3 }, expressionHelpers.searchExpressions(i2, s2, l2), l2.k && h2.addDynamicProperty(l2), l2;
              };
              var o = ShapePropertyFactory.getConstructorFunction(), h = ShapePropertyFactory.getKeyframedConstructorFunction();
              function l() {
              }
              l.prototype = {
                vertices: function(t2, e2) {
                  this.k && this.getValue();
                  var r2, i2 = this.v;
                  void 0 !== e2 && (i2 = this.getValueAtTime(e2, 0));
                  var s2 = i2._length, a2 = i2[t2], n2 = i2.v, o2 = createSizedArray(s2);
                  for (r2 = 0; r2 < s2; r2 += 1)
                    o2[r2] = "i" === t2 || "o" === t2 ? [a2[r2][0] - n2[r2][0], a2[r2][1] - n2[r2][1]] : [a2[r2][0], a2[r2][1]];
                  return o2;
                },
                points: function(t2) {
                  return this.vertices("v", t2);
                },
                inTangents: function(t2) {
                  return this.vertices("i", t2);
                },
                outTangents: function(t2) {
                  return this.vertices("o", t2);
                },
                isClosed: function() {
                  return this.v.c;
                },
                pointOnPath: function(t2, e2) {
                  var r2 = this.v;
                  void 0 !== e2 && (r2 = this.getValueAtTime(e2, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r2));
                  for (var i2, s2 = this._segmentsLength, a2 = s2.lengths, n2 = s2.totalLength * t2, o2 = 0, h2 = a2.length, l2 = 0; o2 < h2; ) {
                    if (l2 + a2[o2].addedLength > n2) {
                      var p3 = o2, f = r2.c && o2 === h2 - 1 ? 0 : o2 + 1, m = (n2 - l2) / a2[o2].addedLength;
                      i2 = bez.getPointInSegment(r2.v[p3], r2.v[f], r2.o[p3], r2.i[f], m, a2[o2]);
                      break;
                    }
                    l2 += a2[o2].addedLength, o2 += 1;
                  }
                  return i2 || (i2 = r2.c ? [r2.v[0][0], r2.v[0][1]] : [r2.v[r2._length - 1][0], r2.v[r2._length - 1][1]]), i2;
                },
                vectorOnPath: function(t2, e2, r2) {
                  1 == t2 ? t2 = this.v.c : 0 == t2 && (t2 = 0.999);
                  var i2 = this.pointOnPath(t2, e2), s2 = this.pointOnPath(t2 + 1e-3, e2), a2 = s2[0] - i2[0], n2 = s2[1] - i2[1], o2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(n2, 2));
                  return 0 === o2 ? [0, 0] : "tangent" === r2 ? [a2 / o2, n2 / o2] : [-n2 / o2, a2 / o2];
                },
                tangentOnPath: function(t2, e2) {
                  return this.vectorOnPath(t2, e2, "tangent");
                },
                normalOnPath: function(t2, e2) {
                  return this.vectorOnPath(t2, e2, "normal");
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
              }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t2) {
                return this._cachingAtTime || (this._cachingAtTime = {
                  shapeValue: shapePool.clone(this.pv),
                  lastIndex: 0,
                  lastTime: initialDefaultFrame
                }), t2 *= this.elem.globalData.frameRate, (t2 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t2 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t2, this.interpolateShape(t2, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
              }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
              var p2 = ShapePropertyFactory.getShapeProp;
              ShapePropertyFactory.getShapeProp = function(t2, e2, r2, i2, s2) {
                var a2 = p2(t2, e2, r2, i2, s2);
                return a2.propertyIndex = e2.ix, a2.lock = false, 3 === r2 ? expressionHelpers.searchExpressions(t2, e2.pt, a2) : 4 === r2 && expressionHelpers.searchExpressions(t2, e2.ks, a2), a2.k && t2.addDynamicProperty(a2), a2;
              };
            }
            function initialize$1() {
              addPropertyDecorator();
            }
            function addDecorator() {
              TextProperty.prototype.getExpressionValue = function(t, e) {
                var r = this.calculateExpression(e);
                if (t.t !== r) {
                  var i = {};
                  return this.copyData(i, t), i.t = r.toString(), i.__complete = false, i;
                }
                return t;
              }, TextProperty.prototype.searchProperty = function() {
                var t = this.searchKeyframes(), e = this.searchExpressions();
                return this.kf = t || e, this.kf;
              }, TextProperty.prototype.searchExpressions = function() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(
                  this.elem,
                  this.data.d,
                  this
                ), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
              };
            }
            function initialize() {
              addDecorator();
            }
            function SVGComposableEffect() {
            }
            SVGComposableEffect.prototype = {
              createMergeNode: function(t, e) {
                var r, i, s = createNS("feMerge");
                for (s.setAttribute("result", t), i = 0; i < e.length; i += 1)
                  (r = createNS("feMergeNode")).setAttribute("in", e[i]), s.appendChild(r), s.appendChild(r);
                return s;
              }
            };
            var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
            function SVGTintFilter(t, e, r, i, s) {
              this.filterManager = e;
              var a = createNS("feColorMatrix");
              a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
              var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
              t.appendChild(n);
            }
            function SVGFillFilter(t, e, r, i) {
              this.filterManager = e;
              var s = createNS("feColorMatrix");
              s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s;
            }
            function SVGStrokeEffect(t, e, r) {
              this.initialized = false, this.filterManager = e, this.elem = r, this.paths = [];
            }
            function SVGTritoneFilter(t, e, r, i) {
              this.filterManager = e;
              var s = createNS("feColorMatrix");
              s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute(
                "values",
                "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"
              ), t.appendChild(s);
              var a = createNS("feComponentTransfer");
              a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
              var n = createNS("feFuncR");
              n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
              var o = createNS("feFuncG");
              o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
              var h = createNS("feFuncB");
              h.setAttribute("type", "table"), a.appendChild(h), this.feFuncB = h, t.appendChild(a);
            }
            function SVGProLevelsFilter(t, e, r, i) {
              this.filterManager = e;
              var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
              (s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
            }
            function SVGDropShadowEffect(t, e, r, i, s) {
              var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
              t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
              var o = createNS("feGaussianBlur");
              o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
              var h = createNS("feOffset");
              h.setAttribute("dx", "25"), h.setAttribute("dy", "0"), h.setAttribute("in", i + "_drop_shadow_1"), h.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = h, t.appendChild(h);
              var l = createNS("feFlood");
              l.setAttribute("flood-color", "#00ff00"), l.setAttribute("flood-opacity", "1"), l.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = l, t.appendChild(l);
              var p2 = createNS("feComposite");
              p2.setAttribute("in", i + "_drop_shadow_3"), p2.setAttribute("in2", i + "_drop_shadow_2"), p2.setAttribute("operator", "in"), p2.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(p2);
              var f = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
              t.appendChild(f);
            }
            extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute(
                  "values",
                  r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0"
                );
              }
            }, SVGFillFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute(
                  "values",
                  "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0"
                );
              }
            }, SVGStrokeEffect.prototype.initialize = function() {
              var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
              for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)
                t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: r });
              if (3 === this.filterManager.effectElements[10].p.v) {
                var a = createNS("mask"), n = createElementID();
                a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); s[0]; )
                  o.appendChild(s[0]);
                this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
              } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v)
                  for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; )
                    this.elem.layerElement.removeChild(s[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
              }
              this.initialized = true, this.pathMasker = e;
            }, SVGStrokeEffect.prototype.renderFrame = function(t) {
              var e;
              this.initialized || this.initialize();
              var r, i, s = this.paths.length;
              for (e = 0; e < s; e += 1)
                if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                  var a;
                  if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = 0.01 * Math.min(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ), o = 0.01 * Math.max(
                      this.filterManager.effectElements[7].p.v,
                      this.filterManager.effectElements[8].p.v
                    ), h = i.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l, p2 = h * (o - n), f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, m = Math.floor(p2 / f);
                    for (l = 0; l < m; l += 1)
                      a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                    a += "0 " + 10 * h + " 0 0";
                  } else
                    a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                  i.setAttribute("stroke-dasharray", a);
                }
              if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                var c = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute(
                  "stroke",
                  "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")"
                );
              }
            }, SVGTritoneFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
                this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
              }
            }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
              var r = createNS(t);
              return r.setAttribute("type", "table"), e.appendChild(r), r;
            }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
              for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p2 = Array.call(null, { length: 256 }), f = 0, m = s - i, c = e - t; o <= 256; )
                n = (a = o / 256) <= h ? c < 0 ? s : i : a >= l ? c < 0 ? i : s : i + m * Math.pow((a - t) / c, 1 / r), p2[f] = n, f += 1, o += 256 / 255;
              return p2.join(" ");
            }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e, r = this.filterManager.effectElements;
                this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
              }
            }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute(
                  "stdDeviation",
                  this.filterManager.effectElements[4].p.v / 4
                ), t || this.filterManager.effectElements[0].p._mdf) {
                  var e = this.filterManager.effectElements[0].p.v;
                  this.feFlood.setAttribute(
                    "flood-color",
                    rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2]))
                  );
                }
                if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute(
                  "flood-opacity",
                  this.filterManager.effectElements[1].p.v / 255
                ), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                  var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i);
                  this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
                }
              }
            };
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, r) {
              this.initialized = false, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
            }
            function SVGGaussianBlurEffect(t, e, r, i) {
              t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
              var s = createNS("feGaussianBlur");
              s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s;
            }
            return SVGMatte3Effect.prototype.findSymbol = function(t) {
              for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
                if (_svgMatteSymbols[e] === t)
                  return _svgMatteSymbols[e];
                e += 1;
              }
              return null;
            }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
              var r = t.layerElement.parentNode;
              if (r) {
                for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement; )
                  a += 1;
                a <= n - 2 && (i = s[a + 1]);
                var o = createNS("use");
                o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o);
              }
            }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
              if (!this.findSymbol(e)) {
                var r = createElementID(), i = createNS("mask");
                i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
                var s = t.globalData.defs;
                s.appendChild(i);
                var a = createNS("symbol");
                a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
                var n = createNS("use");
                n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = false, e.show();
              }
              t.setMatte(e.layerId);
            }, SVGMatte3Effect.prototype.initialize = function() {
              for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
                e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
              this.initialized = true;
            }, SVGMatte3Effect.prototype.renderFrame = function() {
              this.initialized || this.initialize();
            }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
              if (t || this.filterManager._mdf) {
                var e = 0.3 * this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = 3 == r ? 0 : e, s = 2 == r ? 0 : e;
                this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
                var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", a);
              }
            }, registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect(20, SVGTintFilter, true), registerEffect(21, SVGFillFilter, true), registerEffect(22, SVGStrokeEffect, false), registerEffect(23, SVGTritoneFilter, true), registerEffect(24, SVGProLevelsFilter, true), registerEffect(25, SVGDropShadowEffect, true), registerEffect(28, SVGMatte3Effect, false), registerEffect(29, SVGGaussianBlurEffect, true), lottie;
          });
          var animationData = {
            v: "5.10.2",
            fr: 29.9700012207031,
            ip: 0,
            op: 240.0000097754,
            w: 1920,
            h: 1080,
            nm: "Sun_Icon 2",
            ddd: 0,
            assets: [
              {
                id: "comp_0",
                nm: "Sun_Icon",
                fr: 29.9700012207031,
                layers: [
                  {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Layer 1 Outlines 2",
                    td: 1,
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.091, 552.417, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [64.903, 63.528, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 0,
                            s: [0, 0, 100]
                          },
                          { t: 6.00000024438501, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-0.114, 34.806],
                                  [-35.671, -0.125],
                                  [-0.033, -34.552],
                                  [36.257, 0.14]
                                ],
                                o: [
                                  [0.115, -34.886],
                                  [35.391, 0.124],
                                  [0.034, 35.225],
                                  [-35.317, -0.136]
                                ],
                                v: [
                                  [-64.539, -0.228],
                                  [0.242, -63.152],
                                  [64.619, -0.134],
                                  [-0.701, 63.138]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [64.903, 63.527], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 2,
                    ty: 0,
                    nm: "Rays",
                    parent: 3,
                    tt: 2,
                    tp: 1,
                    refId: "comp_1",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [64.813, 51.109, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 },
                      s: { a: 0, k: [100.013, 100.013, 100], ix: 6, l: 2 }
                    },
                    ao: 0,
                    w: 1920,
                    h: 1080,
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "Layer 1 Outlines",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.091, 552.417, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [64.903, 63.528, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 0,
                            s: [0, 0, 100]
                          },
                          { t: 6.00000024438501, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-27.998, -0.062],
                                  [0.02, 27.392],
                                  [27.801, 0.107],
                                  [0.013, -27.458]
                                ],
                                o: [
                                  [28.127, 0.063],
                                  [-0.019, -27.147],
                                  [-27.977, -0.108],
                                  [-0.013, 27.333]
                                ],
                                v: [
                                  [-0.174, 49.568],
                                  [50.826, -0.022],
                                  [0.153, -49.665],
                                  [-50.742, 0.064]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ind: 1,
                            ty: "sh",
                            ix: 2,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-0.114, 34.806],
                                  [-35.671, -0.125],
                                  [-0.033, -34.552],
                                  [36.257, 0.14]
                                ],
                                o: [
                                  [0.115, -34.886],
                                  [35.391, 0.124],
                                  [0.034, 35.225],
                                  [-35.317, -0.136]
                                ],
                                v: [
                                  [-64.539, -0.228],
                                  [0.242, -63.152],
                                  [64.619, -0.134],
                                  [-0.701, 63.138]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 2",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "mm",
                            mm: 1,
                            nm: "Merge Paths 1",
                            mn: "ADBE Vector Filter - Merge",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [64.903, 63.527], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 1",
                        np: 4,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  }
                ]
              },
              {
                id: "comp_1",
                nm: "Rays",
                fr: 29.9700012207031,
                layers: [
                  {
                    ddd: 0,
                    ind: 1,
                    ty: 4,
                    nm: "Layer 2 Outlines 9",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 22,
                            s: [0, 0, 100]
                          },
                          { t: 28.0000011404634, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-6.645, 0.129],
                                  [-1.177, -1.84],
                                  [-4.224, -7.409],
                                  [3.4, -1.906],
                                  [2.38, 3.894],
                                  [4.175, 7.434]
                                ],
                                o: [
                                  [0.978, 0.726],
                                  [4.598, 7.187],
                                  [2.192, 3.845],
                                  [-3.41, 1.912],
                                  [-4.45, -7.281],
                                  [-2.636, -4.694]
                                ],
                                v: [
                                  [-5.067, -18.576],
                                  [-0.416, -14.978],
                                  [12.668, 7.017],
                                  [10.398, 16.664],
                                  [0.783, 13.611],
                                  [-12.224, -8.432]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [185.68, 219.33], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 3",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 2,
                    ty: 4,
                    nm: "Layer 2 Outlines 4",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 20,
                            s: [0, 0, 100]
                          },
                          { t: 26.0000010590017, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-1.729, 1.739],
                                  [-1.298, -0.72],
                                  [-6.977, -4.067],
                                  [1.981, -3.552],
                                  [4.743, 2.626],
                                  [7.038, 3.969],
                                  [-1.371, 3.226]
                                ],
                                o: [
                                  [2.576, 0.911],
                                  [7.069, 3.915],
                                  [4.52, 2.635],
                                  [-1.995, 3.578],
                                  [-7.07, -3.915],
                                  [-3.174, -1.79],
                                  [0.968, -2.28]
                                ],
                                v: [
                                  [-12.827, -14.018],
                                  [-7.422, -12.067],
                                  [13.674, -0.136],
                                  [17.553, 9.739],
                                  [6.517, 11.391],
                                  [-14.609, -0.498],
                                  [-18.163, -8.396]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [223.837, 181.931], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 8",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 3,
                    ty: 4,
                    nm: "Layer 2 Outlines 2",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 18,
                            s: [0, 0, 100]
                          },
                          { t: 24.00000097754, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [6.036, 0],
                                  [6.033, 0.108],
                                  [0.082, 3.972],
                                  [-4.64, 0.049],
                                  [-12.21, -0.116],
                                  [-0.043, -3.708],
                                  [4.588, -0.092]
                                ],
                                o: [
                                  [-6.036, 0],
                                  [-4.788, -0.086],
                                  [-0.082, -3.958],
                                  [12.21, -0.13],
                                  [4.338, 0.041],
                                  [0.045, 4.009],
                                  [-6.033, 0.122]
                                ],
                                v: [
                                  [0.161, 6.689],
                                  [-17.944, 6.663],
                                  [-25.53, 0.162],
                                  [-18.236, -6.651],
                                  [18.396, -6.646],
                                  [25.567, -0.147],
                                  [18.267, 6.659]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [242.85, 131.311], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 10",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 4,
                    ty: 4,
                    nm: "Layer 2 Outlines 7",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 16,
                            s: [0, 0, 100]
                          },
                          { t: 22.0000008960784, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0.193, -6.465],
                                  [1.926, -1.171],
                                  [7.472, -4.057],
                                  [1.916, 3.343],
                                  [-3.778, 2.247],
                                  [-7.896, 4.141]
                                ],
                                o: [
                                  [-0.822, 0.97],
                                  [-7.256, 4.41],
                                  [-3.987, 2.165],
                                  [-1.905, -3.324],
                                  [7.659, -4.554],
                                  [4.769, -2.502]
                                ],
                                v: [
                                  [18.849, -4.605],
                                  [14.914, -0.129],
                                  [-7.264, 12.452],
                                  [-17.137, 10.238],
                                  [-14.405, 1.068],
                                  [8.865, -12.115]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [223.256, 80.481], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 5",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 5,
                    ty: 4,
                    nm: "Layer 2 Outlines 6",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 14,
                            s: [0, 0, 100]
                          },
                          { t: 20.0000008146167, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-1.602, -1.663],
                                  [0.737, -1.276],
                                  [4.112, -6.851],
                                  [3.553, 1.929],
                                  [-2.658, 4.555],
                                  [-4.28, 7.07],
                                  [-3.225, -1.556]
                                ],
                                o: [
                                  [-1.006, 2.484],
                                  [-3.998, 6.915],
                                  [-2.617, 4.359],
                                  [-3.946, -2.143],
                                  [4.164, -7.137],
                                  [1.893, -3.127],
                                  [2.17, 1.048]
                                ],
                                v: [
                                  [14.393, -12.388],
                                  [12.247, -7.167],
                                  [0.101, 13.493],
                                  [-9.613, 17.205],
                                  [-11.735, 6.584],
                                  [0.904, -14.744],
                                  [9.173, -17.578]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [185.67, 44.077], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 6",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 6,
                    ty: 4,
                    nm: "Layer 2 Outlines",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 12,
                            s: [0, 0, 100]
                          },
                          { t: 18.000000733155, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [0, 0],
                                  [0.085, -5.748],
                                  [3.891, -0.084],
                                  [0.028, 4.497],
                                  [-0.074, 11.634],
                                  [-4.132, 0.019],
                                  [-0.062, -4.835],
                                  [0, -5.886]
                                ],
                                o: [
                                  [0, 5.749],
                                  [-0.065, 4.446],
                                  [-4.017, 0.087],
                                  [-0.072, -11.634],
                                  [0.03, -4.668],
                                  [4.128, -0.019],
                                  [0.076, 5.885],
                                  [0, 0]
                                ],
                                v: [
                                  [6.905, 0.281],
                                  [6.884, 17.527],
                                  [0.229, 24.976],
                                  [-6.893, 17.461],
                                  [-6.895, -17.442],
                                  [0.078, -25.044],
                                  [6.874, -17.376],
                                  [6.892, 0.281]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [134.194, 25.313], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 11",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 7,
                    ty: 4,
                    nm: "Layer 2 Outlines 10",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 10,
                            s: [0, 0, 100]
                          },
                          { t: 16.0000006516934, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-0.242, -0.204],
                                  [2.051, -0.738],
                                  [0.935, 1.399],
                                  [4.8, 8.805],
                                  [-2.909, 1.607],
                                  [-1.716, -2.665],
                                  [-5.145, -8.779],
                                  [-0.064, -0.405]
                                ],
                                o: [
                                  [-1.621, 1.882],
                                  [-2.033, 0.731],
                                  [-5.579, -8.349],
                                  [-1.485, -2.724],
                                  [2.802, -1.548],
                                  [5.508, 8.556],
                                  [0.194, 0.332],
                                  [0.242, 0.204]
                                ],
                                v: [
                                  [14.522, 12.296],
                                  [9.564, 17.69],
                                  [2.477, 16.541],
                                  [-13.037, -9.269],
                                  [-10.068, -16.619],
                                  [-2.017, -15.756],
                                  [13.59, 10.477],
                                  [13.797, 11.684]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [82.485, 43.63], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 2",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 8,
                    ty: 4,
                    nm: "Layer 2 Outlines 11",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 8,
                            s: [0, 0, 100]
                          },
                          { t: 14.0000005702317, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-0.316, -0.229],
                                  [-1.182, -0.661],
                                  [-7.201, -4.21],
                                  [2.112, -3.298],
                                  [3.921, 2.164],
                                  [7.395, 4.162],
                                  [-1.401, 3.097],
                                  [-1.941, 1.835]
                                ],
                                o: [
                                  [1.297, 0.463],
                                  [7.284, 4.073],
                                  [4.05, 2.369],
                                  [-2.036, 3.178],
                                  [-7.429, -4.102],
                                  [-3.294, -1.853],
                                  [1.012, -2.237],
                                  [0.316, 0.229]
                                ],
                                v: [
                                  [-11.449, -13.444],
                                  [-7.574, -12.027],
                                  [14.182, 0.353],
                                  [17.326, 10.076],
                                  [7.307, 11.968],
                                  [-14.852, -0.56],
                                  [-18.037, -8.549],
                                  [-12.397, -14.132]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [45.052, 81.03], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 1",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 9,
                    ty: 4,
                    nm: "Layer 2 Outlines 3",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 6,
                            s: [0, 0, 100]
                          },
                          { t: 12.00000048877, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-5.892, -2e-3],
                                  [-5.891, -0.083],
                                  [0.042, -4.099],
                                  [5.114, -0.029],
                                  [11.784, 0.065],
                                  [-0.021, 4.094],
                                  [-4.927, 0.062]
                                ],
                                o: [
                                  [5.892, 2e-3],
                                  [4.946, 0.071],
                                  [-0.043, 4.153],
                                  [-11.784, 0.069],
                                  [-4.943, -0.027],
                                  [0.021, -4.005],
                                  [5.892, -0.075]
                                ],
                                v: [
                                  [0.061, -6.678],
                                  [17.738, -6.658],
                                  [25.512, 0.085],
                                  [17.617, 6.671],
                                  [-17.736, 6.665],
                                  [-25.533, -0.035],
                                  [-17.616, -6.663]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [25.804, 131.473], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 9",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 10,
                    ty: 4,
                    nm: "Layer 2 Outlines 8",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 4,
                            s: [0, 0, 100]
                          },
                          { t: 10.0000004073083, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [2.091, -0.522],
                                  [1.099, 2.014],
                                  [-2.863, 1.713],
                                  [-8.36, 4.444],
                                  [-1.53, -2.988],
                                  [3.156, -1.914],
                                  [8.275, -4.606]
                                ],
                                o: [
                                  [-1.434, -1.236],
                                  [-1.458, -2.675],
                                  [8.117, -4.858],
                                  [3.239, -1.723],
                                  [1.614, 3.153],
                                  [-8.088, 4.905],
                                  [-0.816, 0.455]
                                ],
                                v: [
                                  [-12.737, 13.975],
                                  [-17.758, 9.435],
                                  [-15.804, 1.743],
                                  [8.904, -12.253],
                                  [17.602, -9.507],
                                  [15.93, -1.065],
                                  [-8.775, 12.953]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [44.975, 181.605], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 4",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  },
                  {
                    ddd: 0,
                    ind: 11,
                    ty: 4,
                    nm: "Layer 2 Outlines 5",
                    sr: 1,
                    ks: {
                      o: { a: 0, k: 100, ix: 11 },
                      r: { a: 0, k: 0, ix: 10 },
                      p: { a: 0, k: [960.131, 552.409, 0], ix: 2, l: 2 },
                      a: { a: 0, k: [134.486, 131.556, 0], ix: 1, l: 2 },
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] },
                            o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 16.667] },
                            t: 2,
                            s: [0, 0, 100]
                          },
                          { t: 8.00000032584668, s: [100, 100, 100] }
                        ],
                        ix: 6,
                        l: 2,
                        x: "var $bm_rt;\nvar amp, freq, decay, n, time_max, n, t, t, v;\namp = 0.1;\nfreq = 2;\ndecay = 4;\nn = 0;\n$bm_rt = time_max = 4;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time) {\n        n--;\n    }\n}\nif (n == 0) {\n    $bm_rt = t = 0;\n} else {\n    $bm_rt = t = $bm_sub(time, key(n).time);\n}\nif (n > 0 && t < time_max) {\n    v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\n    $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\n} else {\n    $bm_rt = value;\n}"
                      }
                    },
                    ao: 0,
                    shapes: [
                      {
                        ty: "gr",
                        it: [
                          {
                            ind: 0,
                            ty: "sh",
                            ix: 1,
                            ks: {
                              a: 0,
                              k: {
                                i: [
                                  [-1.758, -1.676],
                                  [0.674, -1.157],
                                  [4.294, -7.063],
                                  [3.363, 1.991],
                                  [-2.383, 4.127],
                                  [-4.316, 7.209],
                                  [-3.08, -1.376]
                                ],
                                o: [
                                  [-0.887, 2.368],
                                  [-4.155, 7.142],
                                  [-2.458, 4.042],
                                  [-3.541, -2.097],
                                  [4.198, -7.276],
                                  [1.783, -2.978],
                                  [2.331, 1.041]
                                ],
                                v: [
                                  [14.391, -12.456],
                                  [12.524, -7.568],
                                  [-0.104, 13.767],
                                  [-9.987, 17.072],
                                  [-12.008, 7.034],
                                  [0.81, -14.669],
                                  [8.659, -17.688]
                                ],
                                c: true
                              },
                              ix: 2
                            },
                            nm: "Path 1",
                            mn: "ADBE Vector Shape - Group",
                            hd: false
                          },
                          {
                            ty: "fl",
                            c: {
                              a: 0,
                              k: [0.256889073989, 0.248765549005, 0.250532067991, 1],
                              ix: 4
                            },
                            o: { a: 0, k: 100, ix: 5 },
                            r: 1,
                            bm: 0,
                            nm: "Fill 1",
                            mn: "ADBE Vector Graphic - Fill",
                            hd: false
                          },
                          {
                            ty: "tr",
                            p: { a: 0, k: [82.669, 218.981], ix: 2 },
                            a: { a: 0, k: [0, 0], ix: 1 },
                            s: { a: 0, k: [100, 100], ix: 3 },
                            r: { a: 0, k: 0, ix: 6 },
                            o: { a: 0, k: 100, ix: 7 },
                            sk: { a: 0, k: 0, ix: 4 },
                            sa: { a: 0, k: 0, ix: 5 },
                            nm: "Transform"
                          }
                        ],
                        nm: "Group 7",
                        np: 2,
                        cix: 2,
                        bm: 0,
                        ix: 1,
                        mn: "ADBE Vector Group",
                        hd: false
                      }
                    ],
                    ip: 0,
                    op: 1800.0000733155,
                    st: 0,
                    ct: 1,
                    bm: 0
                  }
                ]
              }
            ],
            layers: [
              {
                ddd: 0,
                ind: 1,
                ty: 0,
                nm: "Sun_Icon",
                refId: "comp_0",
                sr: -1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 },
                  a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 },
                  s: { a: 0, k: [400, 400, 100], ix: 6, l: 2 }
                },
                ao: 0,
                w: 1920,
                h: 1080,
                ip: 239.990019774993,
                op: 179.990017331143,
                st: 240.0000097754,
                ct: 1,
                bm: 0
              },
              {
                ddd: 0,
                ind: 2,
                ty: 0,
                nm: "Sun_Icon",
                refId: "comp_0",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 },
                  a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 },
                  s: { a: 0, k: [400, 400, 100], ix: 6, l: 2 }
                },
                ao: 0,
                w: 1920,
                h: 1080,
                ip: 120.0000048877,
                op: 180.00000733155,
                st: 120.0000048877,
                ct: 1,
                bm: 0
              },
              {
                ddd: 0,
                ind: 3,
                ty: 0,
                nm: "Sun_Icon",
                refId: "comp_0",
                sr: -1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 },
                  a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 },
                  s: { a: 0, k: [400, 400, 100], ix: 6, l: 2 }
                },
                ao: 0,
                w: 1920,
                h: 1080,
                ip: 119.990014887293,
                op: 59.9900124434432,
                st: 120.0000048877,
                ct: 1,
                bm: 0
              },
              {
                ddd: 0,
                ind: 4,
                ty: 0,
                nm: "Sun_Icon",
                refId: "comp_0",
                sr: 1,
                ks: {
                  o: { a: 0, k: 100, ix: 11 },
                  r: { a: 0, k: 0, ix: 10 },
                  p: { a: 0, k: [960, 540, 0], ix: 2, l: 2 },
                  a: { a: 0, k: [960, 540, 0], ix: 1, l: 2 },
                  s: { a: 0, k: [400, 400, 100], ix: 6, l: 2 }
                },
                ao: 0,
                w: 1920,
                h: 1080,
                ip: 0,
                op: 60.0000024438501,
                st: 0,
                ct: 1,
                bm: 0
              }
            ],
            markers: []
          };
          var params = {
            container: document.getElementById(props.targetId),
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData
          };
          lottie.loadAnimation(params);
        };
        onMounted(() => {
          startAnimation();
        });
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("div", {
            id: props.targetId,
            style: { "width": "10rem", "height": "10rem", "display": "block", "overflow": "hidden", "transform": "translate3d(0, 0, 0)", "text-align": "center", "opacity": "1" }
          }, null, 8, _hoisted_1$1);
        };
      }
    };
    const _hoisted_1 = { style: { "border": "2px solid red" } };
    const _sfc_main = {
      __name: "App",
      setup(__props2) {
        return (_ctx, _cache) => {
          return openBlock(), createElementBlock("table", _hoisted_1, [
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, [
                createVNode(_sfc_main$1, { targetId: "sunAnim1" })
              ]),
              createBaseVNode("td", null, [
                createVNode(_sfc_main$1, { targetId: "sunAnim2" })
              ])
            ]),
            createBaseVNode("tr", null, [
              createBaseVNode("td", null, [
                createVNode(_sfc_main$1, { targetId: "sunAnim3" })
              ]),
              createBaseVNode("td", null, [
                createVNode(_sfc_main$1, { targetId: "sunAnim4" })
              ])
            ])
          ]);
        };
      }
    };
    createApp(_sfc_main).mount("#app");
  }
});
export default require_index_001();
