---
title: RouteSelectorEvaluation - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RouteSelectorEvaluation</a></div>

# RouteSelectorEvaluation

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RouteSelectorEvaluation</span></code></div>

Represents a result of a route evaluation against a call

### Parameters

<code>succeeded</code> - indicates if a route matches current <a href="../-routing-resolve-context/index.html">RoutingResolveContext</a>

<code>quality</code> - indicates quality of this route as compared to other sibling routes

<code>parameters</code> - is an instance of <a href="../../io.ktor.http/-parameters/index.html">Parameters</a> with parameters filled by <a href="../-route-selector/index.html">RouteSelector</a>

<code>segmentIncrement</code> - is a value indicating how many path segments has been consumed by a selector

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RouteSelectorEvaluation</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/succeeded">succeeded</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/quality">quality</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/segmentIncrement">segmentIncrement</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">)</span></code></div>

Represents a result of a route evaluation against a call


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parameters</span><span class="symbol">: </span><a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

is an instance of <a href="../../io.ktor.http/-parameters/index.html">Parameters</a> with parameters filled by <a href="../-route-selector/index.html">RouteSelector</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality.html">quality</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">quality</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

indicates quality of this route as compared to other sibling routes


</td>
</tr>
<tr>
<td markdown="1">

<a href="segment-increment.html">segmentIncrement</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">segmentIncrement</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

is a value indicating how many path segments has been consumed by a selector


</td>
</tr>
<tr>
<td markdown="1">

<a href="succeeded.html">succeeded</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">succeeded</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

indicates if a route matches current <a href="../-routing-resolve-context/index.html">RoutingResolveContext</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-constant.html">Constant</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Constant</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Route evaluation succeeded for a constant value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-constant-path.html">ConstantPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">ConstantPath</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Route evaluation succeeded for a single path segment with a constant value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-failed.html">Failed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Failed</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Route evaluation failed to succeed, route doesn't match a context


</td>
</tr>
<tr>
<td markdown="1">

<a href="-missing.html">Missing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Missing</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Route evaluation succeeded for a missing optional value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-wildcard-path.html">WildcardPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">WildcardPath</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">RouteSelectorEvaluation</span></a></code></div>

Route evaluation succeeded for a wildcard path segment


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality-constant.html">qualityConstant</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">qualityConstant</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Quality of <a href="./index.md">RouteSelectorEvaluation</a> when a constant value has matched


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality-missing.html">qualityMissing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">qualityMissing</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Quality of <a href="./index.md">RouteSelectorEvaluation</a> when an optional parameter was missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality-parameter.html">qualityParameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">qualityParameter</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Quality of <a href="./index.md">RouteSelectorEvaluation</a> when a parameter has matched


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality-tailcard.html">qualityTailcard</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">qualityTailcard</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Quality of <a href="./index.md">RouteSelectorEvaluation</a> when a tailcard match has occurred


</td>
</tr>
<tr>
<td markdown="1">

<a href="quality-wildcard.html">qualityWildcard</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">qualityWildcard</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Quality of <a href="./index.md">RouteSelectorEvaluation</a> when a wildcard has matched


</td>
</tr>
</tbody>
</table>
