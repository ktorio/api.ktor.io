---
title: RoutingResolveContext - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingResolveContext</a></div>

# RoutingResolveContext

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingResolveContext</span></code></div>

Represents a context in which routing resolution is being performed

### Parameters

<code>routing</code> - root node for resolution to start at

<code>call</code> - instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> to use during resolution

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingResolveContext</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/routing">routing</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/tracers">tracers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><span class="symbol">(</span><a href="../-routing-resolve-trace/index.html"><span class="identifier">RoutingResolveTrace</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents a context in which routing resolution is being performed


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

instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> to use during resolution


</td>
</tr>
<tr>
<td markdown="1">

<a href="routing.html">routing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">routing</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

root node for resolution to start at


</td>
</tr>
<tr>
<td markdown="1">

<a href="segments.html">segments</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">segments</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

List of path segments parsed out of a <a href="call.html">call</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="resolve.html">resolve</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">resolve</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a></code></div>

Executes resolution procedure in this context and returns <a href="../-routing-resolve-result/index.html">RoutingResolveResult</a>


</td>
</tr>
</tbody>
</table>
