(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'api-viewer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'api-viewer'.");
    }
    root['api-viewer'] = factory(typeof this['api-viewer'] === 'undefined' ? {} : this['api-viewer'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var equals = Kotlin.equals;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Math_0 = Math;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var joinTo = Kotlin.kotlin.collections.joinTo_gcc71v$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var HTMLElement_0 = HTMLElement;
  var HTMLAnchorElement_0 = HTMLAnchorElement;
  var Pair = Kotlin.kotlin.Pair;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareBy = Kotlin.kotlin.comparisons.compareBy_bvgy4j$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  Entry$Kind.prototype = Object.create(Enum.prototype);
  Entry$Kind.prototype.constructor = Entry$Kind;
  function ApiList(packageNames, entries) {
    ApiList$Companion_getInstance();
    this.packageNames = packageNames;
    this.entries = entries;
    this.cached_0 = Kotlin.newArray(this.entries.size, null);
  }
  ApiList.prototype.get_za3lpa$ = function (index) {
    var tmp$, tmp$_0, tmp$_1;
    if ((tmp$ = this.cached_0[index]) != null) {
      return tmp$;
    }
    var entryLine = this.entries.get_za3lpa$(index);
    var components = split(entryLine, Kotlin.charArrayOf(44));
    var packageIndex = toInt(components.get_za3lpa$(0));
    var name = components.get_za3lpa$(1);
    var kind = components.get_za3lpa$(2);
    var url = components.get_za3lpa$(3);
    var path = 4 >= 0 && 4 <= get_lastIndex(components) ? components.get_za3lpa$(4) : '';
    var deprecated = equals(getOrNull(components, 5), 'd');
    tmp$_0 = this.packageNames.get_za3lpa$(packageIndex);
    switch (kind.charCodeAt(0)) {
      case 84:
        tmp$_1 = Entry$Kind$TYPE_getInstance();
        break;
      case 80:
        tmp$_1 = Entry$Kind$PROPERTY_getInstance();
        break;
      case 70:
        tmp$_1 = Entry$Kind$FUNCTION_getInstance();
        break;
      default:throw IllegalArgumentException_init('Illegal kind ' + kind);
    }
    var entry = new Entry(tmp$_0, name, path, tmp$_1, url, deprecated);
    this.cached_0[index] = entry;
    return entry;
  };
  function ApiList$Companion() {
    ApiList$Companion_instance = this;
  }
  ApiList$Companion.prototype.parse_mhpeer$ = function (lines) {
    var tmp$;
    var packageNames = ArrayList_init();
    var entryLines = ArrayList_init();
    var state = '';
    tmp$ = lines.iterator();
    while (tmp$.hasNext()) {
      var line = tmp$.next();
      switch (state) {
        case '':
          var tmp$_0;
          if (equals(trim(Kotlin.isCharSequence(tmp$_0 = line) ? tmp$_0 : throwCCE()).toString(), '[packages]')) {
            state = 'packages';
          }

          break;
        case 'packages':
          if (equals(line, '[entries]')) {
            state = 'entries';
          }
           else {
            if (line.length > 0) {
              packageNames.add_11rb$(line);
            }
          }

          break;
        case 'entries':
          if (line.length > 0) {
            entryLines.add_11rb$(line);
          }

          break;
      }
    }
    return new ApiList(packageNames, entryLines);
  };
  ApiList$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var ApiList$Companion_instance = null;
  function ApiList$Companion_getInstance() {
    if (ApiList$Companion_instance === null) {
      new ApiList$Companion();
    }
    return ApiList$Companion_instance;
  }
  ApiList.$metadata$ = {kind: Kind_CLASS, simpleName: 'ApiList', interfaces: []};
  function search(trie, term, limit) {
    if (limit === void 0)
      limit = 100;
    var tmp$;
    var parts = tokenize(term);
    if (parts.isEmpty())
      return emptyList();
    var results = subSearch(trie, parts.get_za3lpa$(0), Kotlin.imul(limit, limit));
    tmp$ = parts.size;
    for (var partIndex = 1; partIndex < tmp$; partIndex++) {
      if (results.isEmpty())
        break;
      var subResult = subSearch(trie, parts.get_za3lpa$(partIndex), Kotlin.imul(limit, limit));
      results.retainAll_brywnq$(subResult);
    }
    return toList(take(results, limit));
  }
  function SearchData(trie) {
    this.trie = trie;
    this.firstSet = new SmallIntSet(this.trie.indexBreadth);
    this.secondSet = new SmallIntSet(this.trie.indexBreadth);
    this.first = new Int32Array(this.trie.indexBreadth);
    this.second = new Int32Array(this.trie.indexBreadth);
  }
  SearchData.$metadata$ = {kind: Kind_CLASS, simpleName: 'SearchData', interfaces: []};
  function subSearchImpl$lambda(this$subSearchImpl, closure$result, closure$limit) {
    return function (dataStart, dataEnd) {
      var tmp$, tmp$_0;
      var found = this$subSearchImpl.trie.index.substring(dataStart, dataEnd);
      tmp$ = split_0(found, [',']).iterator();
      while (tmp$.hasNext()) {
        var entry = tmp$.next();
        tmp$_0 = toIntOrNull(entry);
        if (tmp$_0 == null) {
          continue;
        }
        var foundIndex = tmp$_0;
        closure$result.add_11rb$(foundIndex);
        if (closure$result.size === closure$limit)
          break;
      }
      return closure$result.size < closure$limit;
    };
  }
  function subSearchImpl($receiver, atom, limit) {
    var result = HashSet_init(Math_0.min(limit, 100));
    search_1($receiver.trie, atom, $receiver.firstSet, $receiver.secondSet, $receiver.first, $receiver.second, subSearchImpl$lambda($receiver, result, limit));
    return result;
  }
  function subSearch($receiver, atom, limit) {
    var result = subSearchImpl($receiver, atom, limit);
    if (result.isEmpty()) {
      return subSearchSlow($receiver, atom, limit);
    }
    return result;
  }
  function subSearchSlow($receiver, atom, limit) {
    var start = 0;
    var result = HashSet_init(Math_0.min(limit, 100));
    while (start < atom.length) {
      var found = false;
      for (var length = atom.length - start | 0; length >= 1; length--) {
        var startIndex = start;
        var endIndex = start + length | 0;
        var $receiver_0 = atom.substring(startIndex, endIndex);
        var tmp$;
        var subAtom = trim(Kotlin.isCharSequence(tmp$ = $receiver_0) ? tmp$ : throwCCE()).toString();
        var subResults = subSearchImpl($receiver, subAtom, limit);
        if (!subResults.isEmpty()) {
          found = true;
          start = start + length | 0;
          if (result.isEmpty()) {
            result.addAll_brywnq$(subResults);
          }
           else {
            result.retainAll_brywnq$(subResults);
            if (result.isEmpty())
              return result;
          }
          break;
        }
      }
      if (result.isEmpty() || !found)
        return result;
    }
    return result;
  }
  function Entry(packageName, name, path, kind, url, deprecated) {
    this.packageName = packageName;
    this.name = name;
    this.path = path;
    this.kind = kind;
    this.url = url;
    this.deprecated = deprecated;
  }
  function Entry$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Entry$Kind_initFields() {
    Entry$Kind_initFields = function () {
    };
    Entry$Kind$TYPE_instance = new Entry$Kind('TYPE', 0);
    Entry$Kind$PROPERTY_instance = new Entry$Kind('PROPERTY', 1);
    Entry$Kind$FUNCTION_instance = new Entry$Kind('FUNCTION', 2);
    Entry$Kind$Companion_getInstance();
  }
  var Entry$Kind$TYPE_instance;
  function Entry$Kind$TYPE_getInstance() {
    Entry$Kind_initFields();
    return Entry$Kind$TYPE_instance;
  }
  var Entry$Kind$PROPERTY_instance;
  function Entry$Kind$PROPERTY_getInstance() {
    Entry$Kind_initFields();
    return Entry$Kind$PROPERTY_instance;
  }
  var Entry$Kind$FUNCTION_instance;
  function Entry$Kind$FUNCTION_getInstance() {
    Entry$Kind_initFields();
    return Entry$Kind$FUNCTION_instance;
  }
  function Entry$Kind$Companion() {
    Entry$Kind$Companion_instance = this;
    this.AllowedKinds = setOf(['fun', 'class', 'interface', 'object', 'val', 'var', 'typealias']);
  }
  Entry$Kind$Companion.prototype.fromString_61zpoe$ = function (s) {
    switch (s) {
      case 'fun':
        return Entry$Kind$FUNCTION_getInstance();
      case 'class':
      case 'interface':
      case 'object':
      case 'typealias':
        return Entry$Kind$TYPE_getInstance();
      case 'var':
      case 'val':
        return Entry$Kind$PROPERTY_getInstance();
      default:throw IllegalArgumentException_init('Unknown kind ' + s);
    }
  };
  Entry$Kind$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Entry$Kind$Companion_instance = null;
  function Entry$Kind$Companion_getInstance() {
    Entry$Kind_initFields();
    if (Entry$Kind$Companion_instance === null) {
      new Entry$Kind$Companion();
    }
    return Entry$Kind$Companion_instance;
  }
  Entry$Kind.$metadata$ = {kind: Kind_CLASS, simpleName: 'Kind', interfaces: [Enum]};
  function Entry$Kind$values() {
    return [Entry$Kind$TYPE_getInstance(), Entry$Kind$PROPERTY_getInstance(), Entry$Kind$FUNCTION_getInstance()];
  }
  Entry$Kind.values = Entry$Kind$values;
  function Entry$Kind$valueOf(name) {
    switch (name) {
      case 'TYPE':
        return Entry$Kind$TYPE_getInstance();
      case 'PROPERTY':
        return Entry$Kind$PROPERTY_getInstance();
      case 'FUNCTION':
        return Entry$Kind$FUNCTION_getInstance();
      default:throwISE('No enum constant org.jetbrains.kotlinx.docview.Entry.Kind.' + name);
    }
  }
  Entry$Kind.valueOf_61zpoe$ = Entry$Kind$valueOf;
  Entry.$metadata$ = {kind: Kind_CLASS, simpleName: 'Entry', interfaces: []};
  Entry.prototype.component1 = function () {
    return this.packageName;
  };
  Entry.prototype.component2 = function () {
    return this.name;
  };
  Entry.prototype.component3 = function () {
    return this.path;
  };
  Entry.prototype.component4 = function () {
    return this.kind;
  };
  Entry.prototype.component5 = function () {
    return this.url;
  };
  Entry.prototype.component6 = function () {
    return this.deprecated;
  };
  Entry.prototype.copy_fzka6p$ = function (packageName, name, path, kind, url, deprecated) {
    return new Entry(packageName === void 0 ? this.packageName : packageName, name === void 0 ? this.name : name, path === void 0 ? this.path : path, kind === void 0 ? this.kind : kind, url === void 0 ? this.url : url, deprecated === void 0 ? this.deprecated : deprecated);
  };
  Entry.prototype.toString = function () {
    return 'Entry(packageName=' + Kotlin.toString(this.packageName) + (', name=' + Kotlin.toString(this.name)) + (', path=' + Kotlin.toString(this.path)) + (', kind=' + Kotlin.toString(this.kind)) + (', url=' + Kotlin.toString(this.url)) + (', deprecated=' + Kotlin.toString(this.deprecated)) + ')';
  };
  Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.packageName) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    result = result * 31 + Kotlin.hashCode(this.deprecated) | 0;
    return result;
  };
  Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.packageName, other.packageName) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.url, other.url) && Kotlin.equals(this.deprecated, other.deprecated)))));
  };
  function tokenize($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = ArrayList_init();
    var start = 0;
    var digits = 0;
    tmp$ = get_indices($receiver);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
      var ch = $receiver.charCodeAt(index);
      if (isSeparator(ch) || isUpperCase(ch)) {
        if (index !== start) {
          var startIndex = start;
          result.add_11rb$($receiver.substring(startIndex, index).toLowerCase());
        }
        if (isSeparator(ch)) {
          start = index + 1 | 0;
        }
         else {
          start = index;
        }
        digits = 0;
      }
       else if (digits > 0 && !isDigit(ch)) {
        var startIndex_0 = start;
        result.add_11rb$($receiver.substring(startIndex_0, index).toLowerCase());
        start = index;
        digits = 0;
      }
       else if (isDigit(ch)) {
        digits = digits + 1 | 0;
      }
    }
    if (start < $receiver.length) {
      var startIndex_1 = start;
      result.add_11rb$($receiver.substring(startIndex_1).toLowerCase());
    }
    return result;
  }
  function isUpperCase($receiver) {
    return (new CharRange(65, 90)).contains_mef7kx$($receiver);
  }
  function isDigit($receiver) {
    return (new CharRange(48, 57)).contains_mef7kx$($receiver);
  }
  function isSeparator($receiver) {
    return $receiver === 95 || $receiver === 32 || $receiver === 46 || $receiver === 44;
  }
  function Trie(index, indexBreadth) {
    this.index = index;
    this.indexBreadth = indexBreadth;
  }
  Trie.$metadata$ = {kind: Kind_CLASS, simpleName: 'Trie', interfaces: []};
  function parseDat(text) {
    var colonIndex = indexOf(text, 58);
    var $receiver = text.substring(0, colonIndex);
    var tmp$;
    var breadth = toInt(removeSuffix(removePrefix(trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString(), '['), ']'));
    return new Trie(text.substring(colonIndex), breadth);
  }
  function search_1($receiver, atom, firstSet, secondSet, first, second, consumer) {
    if (firstSet === void 0)
      firstSet = new SmallIntSet($receiver.indexBreadth);
    if (secondSet === void 0)
      secondSet = new SmallIntSet($receiver.indexBreadth);
    if (first === void 0)
      first = new Int32Array($receiver.indexBreadth);
    if (second === void 0)
      second = new Int32Array($receiver.indexBreadth);
    var tmp$;
    var current = 0;
    var index = $receiver.index;
    var nodeCount = 1;
    var wordIndices = {v: first};
    var wordIndicesNext = {v: second};
    var allowed = {v: firstSet};
    var allowedNext = {v: secondSet};
    allowed.v.clear();
    allowed.v.add_za3lpa$(0);
    tmp$ = wordIndices.v;
    for (var i = 0; i !== tmp$.length; ++i) {
      wordIndices.v[i] = 0;
    }
    loop_label: while (current < index.length) {
      var start = current;
      var count = nodeCount;
      var parseNodes$result;
      parseNodes$break: do {
        var current_0 = {v: start};
        for (var index_0 = 0; index_0 < count; index_0++) {
          if (current_0.v >= index.length) {
            parseNodes$result = current_0.v;
            break parseNodes$break;
          }
          var length = {v: null};
          var tmp$_0;
          var current_1 = current_0.v;
          var value = 0;
          while (current_1 < index.length) {
            var ch = index.charCodeAt((tmp$_0 = current_1, current_1 = tmp$_0 + 1 | 0, tmp$_0));
            if (ch === 58) {
              break;
            }
             else if (ch === 32 || ch === 13 || ch === 10) {
              continue;
            }
            value = (value * 10 | 0) + (ch - 48) | 0;
          }
          length.v = value;
          current_0.v = current_1;
          var dataStart = current_0.v;
          var dataEnd = current_0.v + length.v | 0;
          if (dataEnd > dataStart && allowed.v.contains_za3lpa$(index_0) && wordIndices.v[index_0] === atom.length) {
            if (!consumer(dataStart, dataEnd)) {
              return;
            }
          }
          current_0.v = current_0.v + length.v | 0;
        }
        parseNodes$result = current_0.v;
      }
       while (false);
      current = parseNodes$result;
      allowedNext.v.clear();
      var newNodeCount = {v: 0};
      var current_2 = current;
      var nodeIndex = 0;
      while (current_2 < index.length) {
        var separator = index.charCodeAt(current_2);
        if (separator === 62) {
          current_2 = current_2 + 1 | 0;
          break;
        }
         else if (separator === 124) {
          current_2 = current_2 + 1 | 0;
          nodeIndex = nodeIndex + 1 | 0;
        }
        var length_0 = {v: null};
        var tmp$_1;
        var current_3 = current_2;
        var value_0 = 0;
        while (current_3 < index.length) {
          var ch_0 = index.charCodeAt((tmp$_1 = current_3, current_3 = tmp$_1 + 1 | 0, tmp$_1));
          if (ch_0 === 58) {
            break;
          }
           else if (ch_0 === 32 || ch_0 === 13 || ch_0 === 10) {
            continue;
          }
          value_0 = (value_0 * 10 | 0) + (ch_0 - 48) | 0;
        }
        length_0.v = value_0;
        current_2 = current_3;
        var nodeIndex_0 = nodeIndex;
        var edgeStart = current_2;
        var tmp$_2, tmp$_3;
        var edgeLength = (current_2 + length_0.v | 0) - edgeStart | 0;
        var wordIndex = wordIndices.v[nodeIndex_0];
        if (wordIndex === -1)
          tmp$_2 = -1;
        else if (!allowed.v.contains_za3lpa$(nodeIndex_0))
          tmp$_2 = -1;
        else {
          var b = atom.length - wordIndex | 0;
          if (compare(index, edgeStart, atom, wordIndex, Math_0.min(edgeLength, b))) {
            allowedNext.v.add_za3lpa$(newNodeCount.v);
            var b_0 = atom.length - wordIndex | 0;
            tmp$_2 = wordIndex + Math_0.min(edgeLength, b_0) | 0;
          }
           else
            tmp$_2 = -1;
        }
        var wordIndexNext = tmp$_2;
        wordIndicesNext.v[tmp$_3 = newNodeCount.v, newNodeCount.v = tmp$_3 + 1 | 0, tmp$_3] = wordIndexNext;
        current_2 = current_2 + length_0.v | 0;
      }
      current = current_2;
      if (newNodeCount.v === 0 || !allowedNext.v.hasAtLeastOne_za3lpa$(newNodeCount.v - 1 | 0)) {
        break loop_label;
      }
      nodeCount = newNodeCount.v;
      var tmp = wordIndices.v;
      wordIndices.v = wordIndicesNext.v;
      wordIndicesNext.v = tmp;
      var tmpSet = allowed.v;
      allowed.v = allowedNext.v;
      allowedNext.v = tmpSet;
    }
  }
  function compare(a, aOffset, b, bOffset, length) {
    for (var index = 0; index < length; index++) {
      if (a.charCodeAt(aOffset + index | 0) !== b.charCodeAt(bOffset + index | 0)) {
        return false;
      }
    }
    return true;
  }
  function SmallIntSet(size) {
    this.size = size;
    this.content_0 = Kotlin.booleanArray(this.size);
  }
  SmallIntSet.prototype.clear = function () {
    var tmp$;
    tmp$ = this.content_0;
    for (var i = 0; i !== tmp$.length; ++i) {
      this.content_0[i] = false;
    }
  };
  SmallIntSet.prototype.add_za3lpa$ = function (value) {
    this.content_0[value] = true;
  };
  SmallIntSet.prototype.contains_za3lpa$ = function (value) {
    return this.content_0[value];
  };
  SmallIntSet.prototype.hasAtLeastOne_za3lpa$ = function (max) {
    var content = this.content_0;
    for (var index = 0; index <= max; index++) {
      if (content[index]) {
        return true;
      }
    }
    return false;
  };
  SmallIntSet.prototype.toString = function () {
    var content = this.content_0;
    for (var index = 0; index !== content.length; ++index) {
      if (content[index]) {
        return this.toString2_0(index);
      }
    }
    return '[]';
  };
  SmallIntSet.prototype.toString2_0 = function (start) {
    var $receiver = StringBuilder_init_0();
    $receiver.append_s8itvh$(91);
    $receiver.append_s8jyv4$(start);
    var content = this.content_0;
    for (var index = start + 1 | 0; index < content.length; index++) {
      if (content[index]) {
        $receiver.append_s8itvh$(44);
        $receiver.append_s8itvh$(32);
        $receiver.append_s8jyv4$(index);
      }
    }
    $receiver.append_s8itvh$(93);
    return $receiver.toString();
  };
  SmallIntSet.$metadata$ = {kind: Kind_CLASS, simpleName: 'SmallIntSet', interfaces: []};
  function LocationHashTermStore() {
    LocationHashTermStore_instance = this;
  }
  Object.defineProperty(LocationHashTermStore.prototype, 'searchTerms', {get: function () {
    return decodeURIComponent(removePrefix(window.location.hash, '#'));
  }, set: function (value) {
    window.location.hash = '#' + encodeURIComponent(value);
  }});
  LocationHashTermStore.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LocationHashTermStore', interfaces: [SearchTermStore]};
  var LocationHashTermStore_instance = null;
  function LocationHashTermStore_getInstance() {
    if (LocationHashTermStore_instance === null) {
      new LocationHashTermStore();
    }
    return LocationHashTermStore_instance;
  }
  function main$lambda(closure$versions, closure$latest) {
    return function (it) {
      mainAfterLoaded(ensureNotNull(document.body), closure$versions, closure$latest);
      return Unit;
    };
  }
  function main() {
    var tmp$;
    var versions_0 = (tmp$ = versions != null ? toList_0(versions) : null) != null ? tmp$ : emptyList();
    var latest = latestVersion != null ? latestVersion : lastOrNull(versions_0);
    if (latest == null) {
      console.error('No versions/latestVersion specified. Check for versions.js');
      return;
    }
    apiList(address(), latest);
    index(address(), latest);
    var body = document.body;
    if (body == null) {
      document.addEventListener('DOMContentLoaded', main$lambda(versions_0, latest));
    }
     else {
      mainAfterLoaded(body, versions_0, latest);
    }
  }
  function mainAfterLoaded$lambda(closure$currentSearchEngine) {
    return function () {
      return toSearchFunction(closure$currentSearchEngine.v);
    };
  }
  function mainAfterLoaded$lambda_0(newTerms) {
    LocationHashTermStore_getInstance().searchTerms = newTerms;
    return Unit;
  }
  function mainAfterLoaded$lambda_1(closure$currentSearchEngineVersion) {
    return function (entry) {
      var url = entry.url;
      var tmp$;
      if (url.length === 0)
        tmp$ = '';
      else {
        var $receiver = StringBuilder_init_0();
        var closure$currentSearchEngineVersion_0 = closure$currentSearchEngineVersion;
        $receiver.append_s8itvh$(47);
        $receiver.append_gw00v9$(closure$currentSearchEngineVersion_0.v);
        if (url.charCodeAt(0) !== 47) {
          $receiver.append_s8itvh$(47);
        }
        $receiver.append_gw00v9$(url);
        tmp$ = $receiver.toString();
      }
      return tmp$;
    };
  }
  function mainAfterLoaded$refreshPackageList$lambda(closure$currentSearchEngineVersion, closure$version, closure$packagesListView) {
    return function (f) {
      var apiList = f.component2();
      if (equals(closure$currentSearchEngineVersion.v, closure$version)) {
        closure$packagesListView.packageNames = apiList.packageNames;
      }
      return Unit;
    };
  }
  function mainAfterLoaded$refreshPackageList$lambda_0(closure$currentSearchEngineVersion, closure$version, closure$packagesListView) {
    return function (it) {
      if (equals(closure$currentSearchEngineVersion.v, closure$version)) {
        closure$packagesListView.packageNames = emptyList();
      }
      return Unit;
    };
  }
  function mainAfterLoaded$refreshPackageList(closure$packagesListView, closure$currentSearchEngine, closure$currentSearchEngineVersion) {
    return function (version) {
      closure$packagesListView.urlPrefix = address() + '/' + version;
      closure$currentSearchEngine.v.then(mainAfterLoaded$refreshPackageList$lambda(closure$currentSearchEngineVersion, version, closure$packagesListView)).catch(mainAfterLoaded$refreshPackageList$lambda_0(closure$currentSearchEngineVersion, version, closure$packagesListView));
    };
  }
  function mainAfterLoaded$lambda_2(closure$currentSearchEngineVersion, closure$currentSearchEngine, closure$versionsView, closure$searchPresenter, closure$refreshPackageList) {
    return function (version) {
      if (!equals(closure$currentSearchEngineVersion.v, version)) {
        closure$currentSearchEngineVersion.v = version;
        closure$currentSearchEngine.v = searchEngineProvider(version);
        closure$versionsView.selectedVersion = version;
        closure$searchPresenter.refresh();
        closure$refreshPackageList(version);
      }
      return Unit;
    };
  }
  function mainAfterLoaded$lambda$lambda(closure$view) {
    return function () {
      closure$view.searchTerms = LocationHashTermStore_getInstance().searchTerms;
      return Unit;
    };
  }
  function mainAfterLoaded$lambda_3(closure$view) {
    return function (it) {
      window.setTimeout(mainAfterLoaded$lambda$lambda(closure$view), 10);
      return Unit;
    };
  }
  function mainAfterLoaded(body, versions, latestVersion) {
    var tmp$, tmp$_0;
    var root = {v: null};
    var tmp$_1;
    if ((tmp$ = document.getElementById('version-placeholder')) != null)
      tmp$_1 = tmp$;
    else {
      throw IllegalStateException_init('versionsDiv not found'.toString());
    }
    var versionsDiv = tmp$_1;
    var tmp$_2;
    var $receiver = Kotlin.isType(tmp$_2 = document.createElement('main'), HTMLElement_0) ? tmp$_2 : throwCCE();
    var tmp$_3;
    var $receiver_0 = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLElement_0) ? tmp$_3 : throwCCE();
    $receiver_0.id = 'packages-list';
    $receiver.appendChild($receiver_0);
    var tmp$_4;
    var $receiver_1 = Kotlin.isType(tmp$_4 = document.createElement('div'), HTMLElement_0) ? tmp$_4 : throwCCE();
    $receiver_1.className = '';
    root.v = $receiver_1;
    $receiver.appendChild($receiver_1);
    body.appendChild($receiver);
    var tmp$_5;
    if ((tmp$_0 = document.getElementById('packages-list')) != null)
      tmp$_5 = tmp$_0;
    else {
      throw IllegalStateException_init('package-list div is missing'.toString());
    }
    var packagesListDiv = tmp$_5;
    var view = new SearchViewImpl(ensureNotNull(root.v));
    var versionsView = new PageHeaderVersionsView(versionsDiv);
    var packagesListView = new PackagesListView(packagesListDiv);
    var currentSearchEngine = {v: searchEngineProvider(latestVersion)};
    var currentSearchEngineVersion = {v: latestVersion};
    var searchPresenter = new SearchPresenter(view, mainAfterLoaded$lambda(currentSearchEngine));
    searchPresenter.searchTermsChangeListener = mainAfterLoaded$lambda_0;
    view.urlProvider = mainAfterLoaded$lambda_1(currentSearchEngineVersion);
    var refreshPackageList = mainAfterLoaded$refreshPackageList(packagesListView, currentSearchEngine, currentSearchEngineVersion);
    versionsView.selectionListener = mainAfterLoaded$lambda_2(currentSearchEngineVersion, currentSearchEngine, versionsView, searchPresenter, refreshPackageList);
    versionsView.versions = versions;
    versionsView.selectedVersion = latestVersion;
    refreshPackageList(latestVersion);
    searchPresenter.search_61zpoe$(LocationHashTermStore_getInstance().searchTerms);
    searchPresenter.refresh();
    searchPresenter.focus();
    window.addEventListener('hashchange', mainAfterLoaded$lambda_3(view));
  }
  function PackagesListView(parent) {
    this.parent_0 = parent;
    this.items_0 = ArrayList_init();
    this.anchors_0 = ArrayList_init();
    this.urlPrefix_oxxsbx$_0 = '';
    this.packageNames_jcz1he$_0 = emptyList();
  }
  Object.defineProperty(PackagesListView.prototype, 'urlPrefix', {get: function () {
    return this.urlPrefix_oxxsbx$_0;
  }, set: function (newPrefix) {
    if (!equals(this.urlPrefix_oxxsbx$_0, newPrefix)) {
      this.urlPrefix_oxxsbx$_0 = newPrefix;
      var tmp$;
      tmp$ = this.anchors_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        element.href = this.hrefFor_0((tmp$_0 = element.textContent) != null ? tmp$_0 : '');
      }
    }
  }});
  Object.defineProperty(PackagesListView.prototype, 'packageNames', {get: function () {
    return this.packageNames_jcz1he$_0;
  }, set: function (newNames) {
    var tmp$;
    tmp$ = this.items_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      (tmp$_0 = element.parentElement) != null ? tmp$_0.removeChild(element) : null;
    }
    this.items_0.clear();
    this.anchors_0.clear();
    var $receiver = this.parent_0;
    var tmp$_1;
    var $receiver_0 = Kotlin.isType(tmp$_1 = document.createElement('p'), HTMLElement_0) ? tmp$_1 : throwCCE();
    $receiver_0.textContent = 'Packages:';
    this.items_0.add_11rb$($receiver_0);
    $receiver.appendChild($receiver_0);
    var tmp$_2;
    tmp$_2 = newNames.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      this.addPackageElement_0(element_0);
    }
    this.packageNames_jcz1he$_0 = newNames;
  }});
  PackagesListView.prototype.addPackageElement_0 = function (name) {
    var $receiver = this.parent_0;
    var tmp$;
    var $receiver_0 = Kotlin.isType(tmp$ = document.createElement('p'), HTMLElement_0) ? tmp$ : throwCCE();
    var tmp$_0;
    var $receiver_1 = Kotlin.isType(tmp$_0 = document.createElement('a'), HTMLAnchorElement_0) ? tmp$_0 : throwCCE();
    $receiver_1.href = this.hrefFor_0(name);
    $receiver_1.textContent = name;
    this.anchors_0.add_11rb$($receiver_1);
    $receiver_0.appendChild($receiver_1);
    this.items_0.add_11rb$($receiver_0);
    $receiver.appendChild($receiver_0);
  };
  PackagesListView.prototype.hrefFor_0 = function (name) {
    return this.urlPrefix + '/' + encodeURIComponent(name);
  };
  PackagesListView.$metadata$ = {kind: Kind_CLASS, simpleName: 'PackagesListView', interfaces: []};
  function address() {
    var $receiver = StringBuilder_init_0();
    var $receiver_0 = window.location;
    $receiver.append_gw00v9$($receiver_0.protocol);
    $receiver.append_gw00v9$('//');
    $receiver.append_gw00v9$($receiver_0.host);
    return $receiver.toString();
  }
  function apiList(address, version) {
    return window.fetch(address + '/' + version + '/api-list.list');
  }
  function index(address, version) {
    return window.fetch(address + '/' + version + '/search-index.dat');
  }
  function searchEngineProvider$lambda$lambda(text) {
    return lines2(text);
  }
  function searchEngineProvider$lambda(response) {
    return response.text().then(searchEngineProvider$lambda$lambda);
  }
  function searchEngineProvider$lambda_0(lines) {
    return ApiList$Companion_getInstance().parse_mhpeer$(lines);
  }
  function searchEngineProvider$lambda$lambda_0(text) {
    return parseDat(text);
  }
  function searchEngineProvider$lambda_1(response) {
    return response.text().then(searchEngineProvider$lambda$lambda_0);
  }
  function searchEngineProvider$lambda_2(text) {
    return text;
  }
  function searchEngineProvider$lambda_3(results) {
    var tmp$, tmp$_0;
    var apiList = Kotlin.isType(tmp$ = results[0], ApiList) ? tmp$ : throwCCE();
    var trie = Kotlin.isType(tmp$_0 = results[1], Trie) ? tmp$_0 : throwCCE();
    var searchData = new SearchData(trie);
    return new Pair(searchData, apiList);
  }
  function searchEngineProvider(version) {
    var address_0 = address();
    var apiListPromise = apiList(address_0, version).then(searchEngineProvider$lambda).then(searchEngineProvider$lambda_0);
    var triePromise = index(address_0, version).then(searchEngineProvider$lambda_1).then(searchEngineProvider$lambda_2);
    return Promise.all([apiListPromise, triePromise]).then(searchEngineProvider$lambda_3);
  }
  function toSearchFunction$lambda$lambda(closure$searchData, closure$apiList) {
    return function (terms) {
      var $receiver = search(closure$searchData, terms);
      var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(closure$apiList.get_za3lpa$(item));
      }
      return destination;
    };
  }
  function toSearchFunction$lambda(f) {
    var searchData = f.component1(), apiList = f.component2();
    var result = toSearchFunction$lambda$lambda(searchData, apiList);
    return result;
  }
  function toSearchFunction($receiver) {
    return $receiver.then(toSearchFunction$lambda);
  }
  function lines2($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = ArrayList_init_1(8192);
    var start = 0;
    tmp$ = get_indices($receiver);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var index = tmp$_0; index <= tmp$_1; index += tmp$_2) {
      if ($receiver.charCodeAt(index) === 10) {
        var startIndex = start;
        result.add_11rb$($receiver.substring(startIndex, index));
        start = index + 1 | 0;
      }
    }
    if (start < $receiver.length) {
      var startIndex_0 = start;
      result.add_11rb$($receiver.substring(startIndex_0));
    }
    return result;
  }
  function SearchTermStore() {
  }
  SearchTermStore.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SearchTermStore', interfaces: []};
  function SearchPresenter(view, engineProvider) {
    SearchPresenter$Companion_getInstance();
    this.view_0 = view;
    this.engineProvider_0 = engineProvider;
    this.searchTerms_0 = '';
    this.currentRequest_0 = 0;
    this.view_0.searchTermsChangedListener = SearchPresenter_init$lambda(this);
    this.searchTermsChangeListener = SearchPresenter$searchTermsChangeListener$lambda;
  }
  SearchPresenter.prototype.search_61zpoe$ = function (terms) {
    this.view_0.searchTerms = terms;
    this.searchTerms_0 = terms;
  };
  SearchPresenter.prototype.refresh = function () {
    this.search_0();
  };
  SearchPresenter.prototype.focus = function () {
    this.view_0.focus();
  };
  SearchPresenter.prototype.searchTermsChanged_0 = function () {
    var $receiver = this.view_0.searchTerms;
    var tmp$;
    var searchTerms = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    if (equals(this.searchTerms_0, searchTerms))
      return;
    this.searchTerms_0 = searchTerms;
    this.searchTermsChangeListener(searchTerms);
    this.search_0();
  };
  function SearchPresenter$search$lambda(closure$request, this$SearchPresenter, closure$searchTerms) {
    return function (search) {
      if (closure$request === this$SearchPresenter.currentRequest_0) {
        this$SearchPresenter.view_0.searchResults = take(sortedWith(search(closure$searchTerms), SearchPresenter$Companion_getInstance().EntryComparator_0), 20);
      }
      return Unit;
    };
  }
  function SearchPresenter$search$lambda_0(closure$request, this$SearchPresenter) {
    return function (it) {
      if (closure$request === this$SearchPresenter.currentRequest_0) {
        this$SearchPresenter.view_0.searchResults = emptyList();
      }
      return Unit;
    };
  }
  SearchPresenter.prototype.search_0 = function () {
    var searchTerms = this.searchTerms_0;
    var request = (this.currentRequest_0 = this.currentRequest_0 + 1 | 0, this.currentRequest_0);
    this.engineProvider_0().then(SearchPresenter$search$lambda(request, this, searchTerms)).catch(SearchPresenter$search$lambda_0(request, this));
  };
  function SearchPresenter$Companion() {
    SearchPresenter$Companion_instance = this;
    this.EntryComparator_0 = compareBy([SearchPresenter$Companion$EntryComparator$lambda, SearchPresenter$Companion$EntryComparator$lambda_0(this), SearchPresenter$Companion$EntryComparator$lambda_1, SearchPresenter$Companion$EntryComparator$lambda_2(this)]);
  }
  SearchPresenter$Companion.prototype.countComponents_0 = function ($receiver) {
    var length = $receiver.length;
    if (length === 0)
      return 0;
    var count = 1;
    for (var index = 0; index < length; index++) {
      if ($receiver.charCodeAt(index) === 46) {
        count = count + 1 | 0;
      }
    }
    return count;
  };
  function SearchPresenter$Companion$EntryComparator$lambda(it) {
    return it.name.length;
  }
  function SearchPresenter$Companion$EntryComparator$lambda_0(this$SearchPresenter$) {
    return function (it) {
      return this$SearchPresenter$.countComponents_0(it.path);
    };
  }
  function SearchPresenter$Companion$EntryComparator$lambda_1(it) {
    return it.deprecated;
  }
  function SearchPresenter$Companion$EntryComparator$lambda_2(this$SearchPresenter$) {
    return function (it) {
      return this$SearchPresenter$.countComponents_0(it.packageName);
    };
  }
  SearchPresenter$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var SearchPresenter$Companion_instance = null;
  function SearchPresenter$Companion_getInstance() {
    if (SearchPresenter$Companion_instance === null) {
      new SearchPresenter$Companion();
    }
    return SearchPresenter$Companion_instance;
  }
  function SearchPresenter_init$lambda(this$SearchPresenter) {
    return function (it) {
      this$SearchPresenter.searchTermsChanged_0();
      return Unit;
    };
  }
  function SearchPresenter$searchTermsChangeListener$lambda(it) {
    return Unit;
  }
  SearchPresenter.$metadata$ = {kind: Kind_CLASS, simpleName: 'SearchPresenter', interfaces: []};
  var ACTIVE_VERSION_CLASS;
  var RESULTS_ELEMENT_CLASS;
  var VERSION_DATA_ATTRIBUTE;
  function SearchView() {
  }
  SearchView.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SearchView', interfaces: []};
  function SearchViewImpl(parent) {
    var tmp$;
    this.root_0 = Kotlin.isType(tmp$ = document.createElement('div'), HTMLElement_0) ? tmp$ : throwCCE();
    var tmp$_0;
    this.searchInput_0 = Kotlin.isType(tmp$_0 = document.createElement('input'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var tmp$_1;
    var $receiver = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement_0) ? tmp$_1 : throwCCE();
    $receiver.className = RESULTS_ELEMENT_CLASS;
    this.resultsElement_0 = $receiver;
    this.root_0.appendChild(this.searchInput_0);
    this.root_0.appendChild(this.resultsElement_0);
    parent.appendChild(this.root_0);
    var event = SearchViewImpl_init$lambda(this);
    var $receiver_0 = this.searchInput_0;
    $receiver_0.type = 'text';
    $receiver_0.placeholder = 'Enter type name or a search term(s)';
    $receiver_0.className = 'search-box';
    $receiver_0.onkeypress = event;
    $receiver_0.onkeydown = event;
    $receiver_0.onchange = event;
    this.searchTermsChangedListener_1dttg$_0 = SearchViewImpl$searchTermsChangedListener$lambda;
    this.urlProvider_urirgp$_0 = SearchViewImpl$urlProvider$lambda;
    this.searchResults_p4r73r$_0 = emptyList();
  }
  Object.defineProperty(SearchViewImpl.prototype, 'searchTermsChangedListener', {get: function () {
    return this.searchTermsChangedListener_1dttg$_0;
  }, set: function (searchTermsChangedListener) {
    this.searchTermsChangedListener_1dttg$_0 = searchTermsChangedListener;
  }});
  Object.defineProperty(SearchViewImpl.prototype, 'urlProvider', {get: function () {
    return this.urlProvider_urirgp$_0;
  }, set: function (urlProvider) {
    this.urlProvider_urirgp$_0 = urlProvider;
  }});
  Object.defineProperty(SearchViewImpl.prototype, 'searchTerms', {get: function () {
    return this.searchInput_0.value;
  }, set: function (newSearchTerms) {
    this.searchInput_0.value = newSearchTerms;
  }});
  Object.defineProperty(SearchViewImpl.prototype, 'searchResults', {get: function () {
    return this.searchResults_p4r73r$_0;
  }, set: function (newResults) {
    var $receiver = this.resultsElement_0;
    clear($receiver);
    var tmp$;
    tmp$ = newResults.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var $receiver_0 = Kotlin.isType(tmp$_0 = document.createElement('p'), HTMLElement_0) ? tmp$_0 : throwCCE();
      if (element.deprecated) {
        $receiver_0.classList.add('deprecated');
      }
      badge($receiver_0, element.kind);
      var tmp$_1;
      var $receiver_1 = Kotlin.isType(tmp$_1 = document.createElement('a'), HTMLAnchorElement_0) ? tmp$_1 : throwCCE();
      $receiver_1.href = this.urlProvider(element);
      var tmp$_2;
      var $receiver_2 = Kotlin.isType(tmp$_2 = document.createElement('span'), HTMLElement_0) ? tmp$_2 : throwCCE();
      var tmp$_3;
      if (element.path.length > 0)
        tmp$_3 = element.packageName + '.' + element.path + '.';
      else
        tmp$_3 = element.packageName + '.';
      $receiver_2.textContent = tmp$_3;
      $receiver_1.appendChild($receiver_2);
      var tmp$_4;
      var $receiver_3 = Kotlin.isType(tmp$_4 = document.createElement('strong'), HTMLElement_0) ? tmp$_4 : throwCCE();
      $receiver_3.textContent = element.name;
      $receiver_1.appendChild($receiver_3);
      $receiver_0.appendChild($receiver_1);
      $receiver.appendChild($receiver_0);
    }
    this.searchResults_p4r73r$_0 = newResults;
  }});
  SearchViewImpl.prototype.focus = function () {
    this.searchInput_0.focus();
  };
  function SearchViewImpl_init$lambda$lambda(this$SearchViewImpl) {
    return function () {
      this$SearchViewImpl.searchTermsChangedListener(this$SearchViewImpl.searchTerms);
      return Unit;
    };
  }
  function SearchViewImpl_init$lambda(this$SearchViewImpl) {
    return function (it) {
      window.setTimeout(SearchViewImpl_init$lambda$lambda(this$SearchViewImpl), 10);
      return Unit;
    };
  }
  function SearchViewImpl$searchTermsChangedListener$lambda(it) {
    return Unit;
  }
  function SearchViewImpl$urlProvider$lambda(it) {
    return it.url;
  }
  SearchViewImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SearchViewImpl', interfaces: [SearchView]};
  function badge($receiver, kind) {
    var tmp$;
    var $receiver_0 = Kotlin.isType(tmp$ = document.createElement('span'), HTMLElement_0) ? tmp$ : throwCCE();
    var tmp$_0, tmp$_1;
    $receiver_0.className = 'badge';
    switch (kind.name) {
      case 'FUNCTION':
        tmp$_0 = 'Function or constructor';
        break;
      case 'PROPERTY':
        tmp$_0 = 'Property or constant';
        break;
      case 'TYPE':
        tmp$_0 = 'Type: class, interface, object or typealias';
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_0.title = tmp$_0;
    switch (kind.name) {
      case 'FUNCTION':
        tmp$_1 = 'f';
        break;
      case 'PROPERTY':
        tmp$_1 = 'p';
        break;
      case 'TYPE':
        tmp$_1 = 't';
        break;
      default:tmp$_1 = Kotlin.noWhenBranchMatched();
        break;
    }
    $receiver_0.textContent = tmp$_1;
    $receiver.appendChild($receiver_0);
  }
  function VersionsView() {
  }
  VersionsView.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'VersionsView', interfaces: []};
  function PageHeaderVersionsView(parent) {
    var tmp$;
    this.ul_0 = Kotlin.isType(tmp$ = document.createElement('ul'), HTMLElement_0) ? tmp$ : throwCCE();
    var tmp$_0;
    var $receiver = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement_0) ? tmp$_0 : throwCCE();
    var tmp$_1;
    var $receiver_0 = Kotlin.isType(tmp$_1 = document.createElement('span'), HTMLElement_0) ? tmp$_1 : throwCCE();
    $receiver_0.textContent = 'Versions: ';
    $receiver.appendChild($receiver_0);
    $receiver.appendChild(this.ul_0);
    parent.appendChild($receiver);
    this.selectionListener_ghprvc$_0 = PageHeaderVersionsView$selectionListener$lambda;
  }
  Object.defineProperty(PageHeaderVersionsView.prototype, 'selectionListener', {get: function () {
    return this.selectionListener_ghprvc$_0;
  }, set: function (selectionListener) {
    this.selectionListener_ghprvc$_0 = selectionListener;
  }});
  Object.defineProperty(PageHeaderVersionsView.prototype, 'selectedVersion', {get: function () {
    var tmp$;
    var $receiver = asList(this.ul_0.children);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.classList.contains(ACTIVE_VERSION_CLASS)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$.getAttribute(VERSION_DATA_ATTRIBUTE) : null;
  }, set: function (newSelection) {
    var tmp$;
    tmp$ = asList(this.ul_0.children).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var active = equals(element.getAttribute(VERSION_DATA_ATTRIBUTE), newSelection);
      var tmp$_0;
      tmp$_0 = asList(element.children).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (equals_0(element_0.tagName, 'a', true)) {
          this.versionActive_0(element_0, active);
        }
      }
    }
  }});
  function PageHeaderVersionsView$set_PageHeaderVersionsView$versions$lambda$lambda$lambda$lambda$lambda(this$, closure$version, this$PageHeaderVersionsView) {
    return function (event) {
      event.preventDefault();
      this$.blur();
      this$PageHeaderVersionsView.versionSelected_0(closure$version);
      return Unit;
    };
  }
  Object.defineProperty(PageHeaderVersionsView.prototype, 'versions', {get: function () {
    var $receiver = asList(this.ul_0.children);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = element.getAttribute(VERSION_DATA_ATTRIBUTE)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return destination;
  }, set: function (newVersions) {
    clear(this.ul_0);
    var $receiver = this.ul_0;
    var tmp$;
    tmp$ = newVersions.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var $receiver_0 = Kotlin.isType(tmp$_0 = document.createElement('li'), HTMLElement_0) ? tmp$_0 : throwCCE();
      $receiver_0.setAttribute(VERSION_DATA_ATTRIBUTE, element);
      var tmp$_1;
      var $receiver_1 = Kotlin.isType(tmp$_1 = document.createElement('a'), HTMLAnchorElement_0) ? tmp$_1 : throwCCE();
      $receiver_1.href = '/' + element;
      $receiver_1.textContent = element;
      $receiver_1.onclick = PageHeaderVersionsView$set_PageHeaderVersionsView$versions$lambda$lambda$lambda$lambda$lambda($receiver_1, element, this);
      $receiver_0.appendChild($receiver_1);
      $receiver.appendChild($receiver_0);
    }
  }});
  PageHeaderVersionsView.prototype.versionSelected_0 = function (version) {
    this.selectionListener(version);
  };
  PageHeaderVersionsView.prototype.versionActive_0 = function ($receiver, active) {
    if (active) {
      $receiver.classList.add(ACTIVE_VERSION_CLASS);
    }
     else {
      $receiver.classList.remove(ACTIVE_VERSION_CLASS);
    }
  };
  function PageHeaderVersionsView$selectionListener$lambda(it) {
    return Unit;
  }
  PageHeaderVersionsView.$metadata$ = {kind: Kind_CLASS, simpleName: 'PageHeaderVersionsView', interfaces: [VersionsView]};
  Object.defineProperty(ApiList, 'Companion', {get: ApiList$Companion_getInstance});
  var package$org = _.org || (_.org = {});
  var package$jetbrains = package$org.jetbrains || (package$org.jetbrains = {});
  var package$kotlinx = package$jetbrains.kotlinx || (package$jetbrains.kotlinx = {});
  var package$docview = package$kotlinx.docview || (package$kotlinx.docview = {});
  package$docview.ApiList = ApiList;
  package$docview.search_tym78g$ = search;
  package$docview.SearchData = SearchData;
  Object.defineProperty(Entry$Kind, 'TYPE', {get: Entry$Kind$TYPE_getInstance});
  Object.defineProperty(Entry$Kind, 'PROPERTY', {get: Entry$Kind$PROPERTY_getInstance});
  Object.defineProperty(Entry$Kind, 'FUNCTION', {get: Entry$Kind$FUNCTION_getInstance});
  Object.defineProperty(Entry$Kind, 'Companion', {get: Entry$Kind$Companion_getInstance});
  Entry.Kind = Entry$Kind;
  package$docview.Entry = Entry;
  package$docview.tokenize_pdl1vz$ = tokenize;
  package$docview.Trie = Trie;
  package$docview.parseDat_61zpoe$ = parseDat;
  package$docview.search_m0gffe$ = search_1;
  package$docview.SmallIntSet = SmallIntSet;
  var package$sample = _.sample || (_.sample = {});
  Object.defineProperty(package$sample, 'LocationHashTermStore', {get: LocationHashTermStore_getInstance});
  package$sample.main = main;
  package$sample.PackagesListView = PackagesListView;
  package$sample.address = address;
  package$sample.apiList_puj7f4$ = apiList;
  package$sample.index_puj7f4$ = index;
  package$sample.searchEngineProvider_61zpoe$ = searchEngineProvider;
  package$sample.toSearchFunction_hemxz4$ = toSearchFunction;
  package$sample.SearchTermStore = SearchTermStore;
  Object.defineProperty(SearchPresenter, 'Companion', {get: SearchPresenter$Companion_getInstance});
  package$sample.SearchPresenter = SearchPresenter;
  package$sample.SearchView = SearchView;
  package$sample.SearchViewImpl = SearchViewImpl;
  package$sample.VersionsView = VersionsView;
  package$sample.PageHeaderVersionsView = PageHeaderVersionsView;
  ACTIVE_VERSION_CLASS = 'active-version';
  RESULTS_ELEMENT_CLASS = 'resultsList';
  VERSION_DATA_ATTRIBUTE = 'data-version';
  main();
  return _;
}));

//# sourceMappingURL=api-viewer.js.map
