---
title: RouteSelectorEvaluation.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">RouteSelectorEvaluation</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">RouteSelectorEvaluation</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/succeeded">succeeded</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/quality">quality</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Parameters.Empty<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RouteSelectorEvaluation$<init>(kotlin.Boolean, kotlin.Double, io.ktor.http.Parameters, kotlin.Int)/segmentIncrement">segmentIncrement</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">)</span></code></div>

Represents a result of a route evaluation against a call

### Parameters

<code>succeeded</code> - indicates if a route matches current <a href="../-routing-resolve-context/index.html">RoutingResolveContext</a>

<code>quality</code> - indicates quality of this route as compared to other sibling routes

<code>parameters</code> - is an instance of <a href="../../io.ktor.http/-parameters/index.html">Parameters</a> with parameters filled by <a href="../-route-selector/index.html">RouteSelector</a>

<code>segmentIncrement</code> - is a value indicating how many path segments has been consumed by a selector