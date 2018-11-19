---
title: RoutingPathSegment - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingPathSegment</a></div>

# RoutingPathSegment

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RoutingPathSegment</span></code></div>

Represent a single routing path segment

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingPathSegment</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingPathSegment$<init>(kotlin.String, io.ktor.routing.RoutingPathSegmentKind)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingPathSegment$<init>(kotlin.String, io.ktor.routing.RoutingPathSegmentKind)/kind">kind</span><span class="symbol">:</span>&nbsp;<a href="../-routing-path-segment-kind/index.html"><span class="identifier">RoutingPathSegmentKind</span></a><span class="symbol">)</span></code></div>

Represent a single routing path segment


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kind.html">kind</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">kind</span><span class="symbol">: </span><a href="../-routing-path-segment-kind/index.html"><span class="identifier">RoutingPathSegmentKind</span></a></code></div>
* segment kind (constant or parameter)

</td>
</tr>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>
* segment text value

</td>
</tr>
</tbody>
</table>
