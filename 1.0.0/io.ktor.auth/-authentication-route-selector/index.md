---
title: AuthenticationRouteSelector - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.auth</a> / <a href="./index.html">AuthenticationRouteSelector</a></div>

# AuthenticationRouteSelector

<div class="signature"><code><span class="keyword">class </span><span class="identifier">AuthenticationRouteSelector</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.routing/-route-selector/index.html"><span class="identifier">RouteSelector</span></a></code></div>

An authentication route node that is used by <a href="../-authentication/index.html">Authentication</a> feature
and usually created by <a href="../authenticate.html">Route.authenticate</a> DSL function so generally there is no need to instantiate it directly
unless you are writing an extension

### Parameters

<code>names</code> - of authentication providers to be applied to this route

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AuthenticationRouteSelector</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.AuthenticationRouteSelector$<init>(kotlin.collections.List((kotlin.String)))/names">names</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

An authentication route node that is used by <a href="../-authentication/index.html">Authentication</a> feature
and usually created by <a href="../authenticate.html">Route.authenticate</a> DSL function so generally there is no need to instantiate it directly
unless you are writing an extension


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="names.html">names</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">names</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span></code></div>

of authentication providers to be applied to this route


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.routing/-route-selector/quality.html">quality</a>


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">evaluate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.routing/-routing-resolve-context/index.html"><span class="identifier">RoutingResolveContext</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth.AuthenticationRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.routing/-route-selector-evaluation/index.html"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Evaluates this selector against <a href="evaluate.html#io.ktor.auth.AuthenticationRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/context">context</a> and a path segment at <a href="evaluate.html#io.ktor.auth.AuthenticationRouteSelector$evaluate(io.ktor.routing.RoutingResolveContext, kotlin.Int)/segmentIndex">segmentIndex</a>


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
