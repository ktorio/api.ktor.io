---
title: RoutingPath - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingPath</a></div>

# RoutingPath

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingPath</span></code></div>

Represents a parsed routing path. Consist of number of segments <a href="parts.html">parts</a>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parts.html">parts</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parts</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-routing-path-segment/index.html"><span class="identifier">RoutingPathSegment</span></a><span class="symbol">&gt;</span></code></div>

contains parsed routing path segments


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

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="root.html">root</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">root</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RoutingPath</span></a></code></div>

A constant for root routing path


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parse.html">parse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parse</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RoutingPath.Companion$parse(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RoutingPath</span></a></code></div>

Parse the specified <a href="parse.html#io.ktor.routing.RoutingPath.Companion$parse(kotlin.String)/path">path</a> and create and instance of <a href="./index.md">RoutingPath</a>.
It handles wildcards and decodes escape characters properly.


</td>
</tr>
</tbody>
</table>
