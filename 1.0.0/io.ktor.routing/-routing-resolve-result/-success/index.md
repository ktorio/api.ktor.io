---
title: RoutingResolveResult.Success - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.routing</a> / <a href="../index.html">RoutingResolveResult</a> / <a href="./index.html">Success</a></div>

# Success

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Success</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">RoutingResolveResult</span></a></code></div>

Represents a successful result

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Success</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingResolveResult.Success$<init>(io.ktor.routing.Route, io.ktor.http.Parameters)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing.RoutingResolveResult.Success$<init>(io.ktor.routing.Route, io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">)</span></code></div>

Represents a successful result


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parameters.html">parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Provides all captured values for this result.


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">route</span><span class="symbol">: </span><a href="../../-route/index.html"><span class="identifier">Route</span></a></code></div>

specifies a routing node for successful resolution, or nearest one for failed.


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
