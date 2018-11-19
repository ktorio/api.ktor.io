---
title: RoutingResolveResult.Failure - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.routing</a> / <a href="../index.html">RoutingResolveResult</a> / <a href="./index.html">Failure</a></div>

# Failure

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Failure</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">RoutingResolveResult</span></a></code></div>

Represents a failed result

### Parameters

<code>reason</code> - provides information on reason of a failure

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Failure</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingResolveResult.Failure$<init>(io.ktor.routing.Route, kotlin.String)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.routing.RoutingResolveResult.Failure$<init>(io.ktor.routing.Route, kotlin.String)/reason">reason</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Represents a failed result


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-nothing/index.html"><span class="identifier">Nothing</span></a></code></div>

Provides all captured values for this result.


</td>
</tr>
<tr>
<td markdown="1">

<a href="reason.html">reason</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">reason</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

provides information on reason of a failure


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
