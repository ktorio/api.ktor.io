---
title: HeadersBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HeadersBuilder</a></div>

# HeadersBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeadersBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HeadersBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.HeadersBuilder$<init>(kotlin.Int)/size">size</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;8<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/built.html">built</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">built</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/case-insensitive-name.html">caseInsensitiveName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">caseInsensitiveName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/values.html">values</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">values</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$append(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$append(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/append-all.html">appendAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(io.ktor.util.StringValues)/stringValues">stringValues</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/append-missing.html">appendMissing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendMissing</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(io.ktor.util.StringValues)/stringValues">stringValues</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendMissing</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/contains.html">contains</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">contains</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">contains</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/entries.html">entries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">entries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html"><span class="identifier">Set</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/-entry/index.html"><span class="identifier">Entry</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$get(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/get-all.html">getAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">getAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$getAll(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/is-empty.html">isEmpty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isEmpty</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/names.html">names</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">names</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html"><span class="identifier">MutableSet</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/remove.html">remove</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">remove</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">remove</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/remove-keys-with-no-entries.html">removeKeysWithNoEntries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">removeKeysWithNoEntries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-builder/set.html">set</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$set(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$set(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append formatted header value to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/append-all.html">appendAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendAll</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a></code></div>

Append all values from the specified <a href="../../io.ktor.util/append-all.html#io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/append-filtered.html">appendFiltered</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendFiltered</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append values from <a href="../../io.ktor.util/append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</a> filtering values by the specified <a href="../../io.ktor.util/append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$cacheControl(io.ktor.http.HeadersBuilder, io.ktor.http.CacheControl)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../-cache-control/index.html"><span class="identifier">CacheControl</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Cache-Control</code> HTTP header <a href="../../io.ktor.response/cache-control.html#io.ktor.response$cacheControl(io.ktor.http.HeadersBuilder, io.ktor.http.CacheControl)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentLength(io.ktor.http.HeadersBuilder, kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Length</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-range.html">contentRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append 'Content-Range` header with specified <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</a> and <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HeadersBuilder, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../-content-type/index.html"><span class="identifier">ContentType</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Type</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$etag(io.ktor.http.HeadersBuilder, kotlin.String)/entityTag">entityTag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>E-Tag</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set 'Expires` header value from <a href="../expires.html#io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$lastModified(io.ktor.http.HeadersBuilder, java.time.ZonedDateTime)/dateTime">dateTime</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set 'Last-Modified` header value from <a href="../last-modified.html#io.ktor.http$lastModified(io.ktor.http.HeadersBuilder, java.time.ZonedDateTime)/dateTime">dateTime</a>


</td>
</tr>
</tbody>
</table>
