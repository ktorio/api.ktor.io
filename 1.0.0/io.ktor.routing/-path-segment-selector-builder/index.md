---
title: PathSegmentSelectorBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">PathSegmentSelectorBuilder</a></div>

# PathSegmentSelectorBuilder

<div class="signature"><code><span class="keyword">object </span><span class="identifier">PathSegmentSelectorBuilder</span></code></div>

Helper object for building instances of <a href="../-route-selector/index.html">RouteSelector</a> from path segments

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="parse-constant.html">parseConstant</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseConstant</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.PathSegmentSelectorBuilder$parseConstant(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Builds a <a href="../-route-selector/index.html">RouteSelector</a> to match a constant or wildcard segment parameter


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-name.html">parseName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseName</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.PathSegmentSelectorBuilder$parseName(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Parses a name out of segment specification


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-parameter.html">parseParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseParameter</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.PathSegmentSelectorBuilder$parseParameter(kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Builds a <a href="../-route-selector/index.html">RouteSelector</a> to match a path segment parameter with prefix/suffix and a name


</td>
</tr>
</tbody>
</table>
