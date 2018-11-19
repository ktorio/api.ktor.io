---
title: ParametersImpl - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">ParametersImpl</a></div>

# ParametersImpl

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ParametersImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">, </span><a href="../../io.ktor.util/-string-values-impl/index.html"><span class="identifier">StringValuesImpl</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ParametersImpl</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.ParametersImpl$<init>(kotlin.collections.Map((kotlin.String, kotlin.collections.List(()))))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/-string-values-impl/values.html">values</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">values</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/filter.html">filter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">filter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Create a new instance of <a href="../../io.ktor.util/-string-values/index.html">StringValues</a> filtered by the specified <a href="../../io.ktor.util/filter.html#io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/flatten-entries.html">flattenEntries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">flattenEntries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Copy values to a list of pairs


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/flatten-for-each.html">flattenForEach</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">flattenForEach</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$flattenForEach(io.ktor.util.StringValues, kotlin.Function2((kotlin.String, , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invoke <a href="../../io.ktor.util/flatten-for-each.html#io.ktor.util$flattenForEach(io.ktor.util.StringValues, kotlin.Function2((kotlin.String, , kotlin.Unit)))/block">block</a> function for every value pair


</td>
</tr>
<tr>
<td markdown="1">

<a href="../form-url-encode.html">formUrlEncode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">formUrlEncode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode form parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="../form-url-encode-to.html">formUrlEncodeTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">formUrlEncodeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$formUrlEncodeTo(io.ktor.http.Parameters, java.lang.Appendable)/out">out</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Encode form parameters to the specified <a href="../form-url-encode-to.html#io.ktor.http$formUrlEncodeTo(io.ktor.http.Parameters, java.lang.Appendable)/out">out</a> appendable


</td>
</tr>
<tr>
<td markdown="1">

<a href="../plus.html">plus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">plus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$plus(io.ktor.http.Parameters, io.ktor.http.Parameters)/other">other</span><span class="symbol">:</span>&nbsp;<a href="../-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Plus operator function that creates a new parameters instance from the original one concatenating with <a href="../plus.html#io.ktor.http$plus(io.ktor.http.Parameters, io.ktor.http.Parameters)/other">other</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.util/to-map.html">toMap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">toMap</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Copy values to a new independent map


</td>
</tr>
</tbody>
</table>
