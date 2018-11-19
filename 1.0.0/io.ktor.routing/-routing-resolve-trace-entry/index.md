---
title: RoutingResolveTraceEntry - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingResolveTraceEntry</a></div>

# RoutingResolveTraceEntry

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">RoutingResolveTraceEntry</span></code></div>

Represents a single entry in the <a href="../-routing-resolve-trace/index.html">RoutingResolveTrace</a>.

### Parameters

<code>route</code> - specifies instance of <a href="../-route/index.html">Route</a> for this entry.

<code>segmentIndex</code> - specifies index in <a href="../-routing-resolve-trace/segments.html">RoutingResolveTrace.segments</a> for this entry.

<code>result</code> - specifies resolution result for this entry.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingResolveTraceEntry</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Represents a single entry in the <a href="../-routing-resolve-trace/index.html">RoutingResolveTrace</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="result.html">result</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">result</span><span class="symbol">: </span><a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a><span class="symbol">?</span></code></div>

specifies resolution result for this entry.


</td>
</tr>
<tr>
<td markdown="1">

<a href="route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">route</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

specifies instance of <a href="../-route/index.html">Route</a> for this entry.


</td>
</tr>
<tr>
<td markdown="1">

<a href="segment-index.html">segmentIndex</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">segmentIndex</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

specifies index in <a href="../-routing-resolve-trace/segments.html">RoutingResolveTrace.segments</a> for this entry.


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$append(io.ktor.routing.RoutingResolveTraceEntry)/item">item</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RoutingResolveTraceEntry</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a child to this entry


</td>
</tr>
<tr>
<td markdown="1">

<a href="build-text.html">buildText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">buildText</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$buildText(java.lang.StringBuilder, kotlin.Int)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-string-builder/index.html"><span class="identifier">StringBuilder</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$buildText(java.lang.StringBuilder, kotlin.Int)/indent">indent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Builds detailed text description for this trace entry, including children.


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
