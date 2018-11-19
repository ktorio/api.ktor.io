---
title: PathSegmentOptionalParameterRouteSelector - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">PathSegmentOptionalParameterRouteSelector</a></div>

# PathSegmentOptionalParameterRouteSelector

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentOptionalParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an optional parameter path segment and captures its value, if any

### Parameters

<code>name</code> - is the name of the parameter to capture values to

<code>prefix</code> - is an optional suffix

<code>suffix</code> - is an optional prefix

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">PathSegmentOptionalParameterRouteSelector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/prefix">prefix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$<init>(kotlin.String, kotlin.String, kotlin.String)/suffix">suffix</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Evaluates a route against an optional parameter path segment and captures its value, if any


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is the name of the parameter to capture values to


</td>
</tr>
<tr>
<td markdown="1">

<a href="prefix.html">prefix</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">prefix</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

is an optional suffix


</td>
</tr>
<tr>
<td markdown="1">

<a href="suffix.html">suffix</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">suffix</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

is an optional prefix


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-route-selector/quality.html">quality</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">quality</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

indicates how good this selector is compared to siblings


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="evaluate.html">evaluate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">evaluate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-context/index.html"><span class="identifier">RoutingResolveContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.PathSegmentOptionalParameterRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route-selector-evaluation/index.html"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Evaluates this selector against <a href="evaluate.html#io.ktor.routing.PathSegmentOptionalParameterRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</a> and a path segment at <a href="evaluate.html#io.ktor.routing.PathSegmentOptionalParameterRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</a>


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
