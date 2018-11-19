---
title: RouteSelector - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RouteSelector</a></div>

# RouteSelector

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">RouteSelector</span></code></div>

Base type for all routing selectors

### Parameters

<code>quality</code> - indicates how good this selector is compared to siblings

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RouteSelector</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.routing.RouteSelector$<init>(kotlin.Double)/quality">quality</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a><span class="symbol">)</span></code></div>

Base type for all routing selectors


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="quality.html">quality</a>


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
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">evaluate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-context/index.html"><span class="identifier">RoutingResolveContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-route-selector-evaluation/index.html"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Evaluates this selector against <a href="evaluate.html#io.ktor.routing.RouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</a> and a path segment at <a href="evaluate.html#io.ktor.routing.RouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</a>


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-and-route-selector/index.html">AndRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">AndRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route as a result of the AND operation using two other selectors


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/-authentication-route-selector/index.html">AuthenticationRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

An authentication route node that is used by <a href="../../io.ktor.auth/-authentication/index.html">Authentication</a> feature
and usually created by <a href="../../io.ktor.auth/authenticate.html">Route.authenticate</a> DSL function so generally there is no need to instantiate it directly
unless you are writing an extension


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-constant-parameter-route-selector/index.html">ConstantParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ConstantParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a constant query parameter value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-accept-route-selector/index.html">HttpAcceptRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpAcceptRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a content-type in the <a href="../../io.ktor.http/-http-headers/-accept.html">HttpHeaders.Accept</a> header in the request


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-header-route-selector/index.html">HttpHeaderRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpHeaderRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a header in the request


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-http-method-route-selector/index.html">HttpMethodRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpMethodRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an <a href="../../io.ktor.http/-http-method/index.html">HttpMethod</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-optional-parameter-route-selector/index.html">OptionalParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OptionalParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an optional query parameter value and captures its value, if found


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-or-route-selector/index.html">OrRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">OrRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route as a result of the OR operation using two other selectors


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-parameter-route-selector/index.html">ParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a query parameter value and captures its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-path-segment-constant-route-selector/index.html">PathSegmentConstantRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentConstantRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a constant path segment


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-path-segment-optional-parameter-route-selector/index.html">PathSegmentOptionalParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentOptionalParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against an optional parameter path segment and captures its value, if any


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-path-segment-parameter-route-selector/index.html">PathSegmentParameterRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentParameterRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against a parameter path segment and captures its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-path-segment-tailcard-route-selector/index.html">PathSegmentTailcardRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">PathSegmentTailcardRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against any number of trailing path segments, and captures their values


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-path-segment-wildcard-route-selector/index.html">PathSegmentWildcardRouteSelector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">PathSegmentWildcardRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RouteSelector</span></a></code></div>

Evaluates a route against any single path segment


</td>
</tr>
</tbody>
</table>
