---
title: RoutingResolveResult - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingResolveResult</a></div>

# RoutingResolveResult

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">RoutingResolveResult</span></code></div>

Represents a result of routing resolution.

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-failure/index.html">Failure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Failure</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RoutingResolveResult</span></a></code></div>

Represents a failed result


</td>
</tr>
<tr>
<td markdown="1">

<a href="-success/index.html">Success</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Success</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RoutingResolveResult</span></a></code></div>

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
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Provides all captured values for this result.


</td>
</tr>
<tr>
<td markdown="1">

<a href="route.html">route</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">route</span><span class="symbol">: </span><a href="../-route/index.html"><span class="identifier">Route</span></a></code></div>

specifies a routing node for successful resolution, or nearest one for failed.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-failure/index.html">Failure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Failure</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RoutingResolveResult</span></a></code></div>

Represents a failed result


</td>
</tr>
<tr>
<td markdown="1">

<a href="-success/index.html">Success</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Success</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RoutingResolveResult</span></a></code></div>

Represents a successful result


</td>
</tr>
</tbody>
</table>
