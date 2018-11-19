---
title: StringValuesBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">StringValuesBuilder</a></div>

# StringValuesBuilder

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">StringValuesBuilder</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">StringValuesBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$<init>(kotlin.Boolean, kotlin.Int)/caseInsensitiveName">caseInsensitiveName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$<init>(kotlin.Boolean, kotlin.Int)/size">size</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;8<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="built.html">built</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">built</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="case-insensitive-name.html">caseInsensitiveName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">caseInsensitiveName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="values.html">values</a>


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

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$append(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$append(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="append-all.html">appendAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(io.ktor.util.StringValues)/stringValues">stringValues</span><span class="symbol">:</span>&nbsp;<a href="../-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendAll(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="append-missing.html">appendMissing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendMissing</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(io.ktor.util.StringValues)/stringValues">stringValues</span><span class="symbol">:</span>&nbsp;<a href="../-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendMissing</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValuesBuilder$appendMissing(kotlin.String, kotlin.collections.Iterable((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="contains.html">contains</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">contains</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">contains</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$contains(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="entries.html">entries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">entries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-set/index.html"><span class="identifier">Set</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/-entry/index.html"><span class="identifier">Entry</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$get(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="get-all.html">getAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">getAll</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$getAll(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="is-empty.html">isEmpty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isEmpty</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="names.html">names</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">names</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-set/index.html"><span class="identifier">MutableSet</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="remove.html">remove</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">remove</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">remove</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.StringValuesBuilder$remove(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="remove-keys-with-no-entries.html">removeKeysWithNoEntries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">removeKeysWithNoEntries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="set.html">set</a>


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

<a href="../../io.ktor.http/append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append formatted header value to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="../append-all.html">appendAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendAll</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">StringValuesBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">StringValuesBuilder</span></a></code></div>

Append all values from the specified <a href="../append-all.html#io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../append-filtered.html">appendFiltered</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendFiltered</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</span><span class="symbol">:</span>&nbsp;<a href="../-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append values from <a href="../append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</a> filtering values by the specified <a href="../append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/-headers-builder/index.html">HeadersBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeadersBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">StringValuesBuilder</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/-parameters-builder/index.html">ParametersBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ParametersBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">StringValuesBuilder</span></a></code></div>

</td>
</tr>
</tbody>
</table>
