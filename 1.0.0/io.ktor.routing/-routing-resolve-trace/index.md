---
title: RoutingResolveTrace - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingResolveTrace</a></div>

# RoutingResolveTrace

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingResolveTrace</span></code></div>

Represents the trace of routing resolution process for diagnostics.

### Parameters

<code>call</code> - instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> for which this trace was created.

<code>segments</code> - list of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>s for each path segment supplied for the routing resolution.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingResolveTrace</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$<init>(io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.String)))/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$<init>(io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.String)))/segments">segments</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents the trace of routing resolution process for diagnostics.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> for which this trace was created.


</td>
</tr>
<tr>
<td markdown="1">

<a href="segments.html">segments</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">segments</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

list of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>s for each path segment supplied for the routing resolution.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="begin.html">begin</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">begin</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$begin(io.ktor.routing.Route, kotlin.Int)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$begin(io.ktor.routing.Route, kotlin.Int)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Begins processing a <a href="begin.html#io.ktor.routing.RoutingResolveTrace$begin(io.ktor.routing.Route, kotlin.Int)/route">route</a> at segment with <a href="begin.html#io.ktor.routing.RoutingResolveTrace$begin(io.ktor.routing.Route, kotlin.Int)/segmentIndex">segmentIndex</a> in <a href="segments.html">segments</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="build-text.html">buildText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">buildText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Builds detailed text description for this trace, including all entries.


</td>
</tr>
<tr>
<td markdown="1">

<a href="finish.html">finish</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">finish</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Finishes processing a <a href="finish.html#io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</a> at segment with <a href="finish.html#io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</a> in <a href="segments.html">segments</a> with the given <a href="finish.html#io.ktor.routing.RoutingResolveTrace$finish(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="skip.html">skip</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">skip</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Begins and finishes processing a <a href="skip.html#io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</a> at segment with <a href="skip.html#io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</a> in <a href="segments.html">segments</a> with the given <a href="skip.html#io.ktor.routing.RoutingResolveTrace$skip(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</a>.


</td>
</tr>
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
