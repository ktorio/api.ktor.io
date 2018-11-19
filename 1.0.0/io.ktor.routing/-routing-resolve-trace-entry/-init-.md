---
title: RoutingResolveTraceEntry.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">RoutingResolveTraceEntry</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">RoutingResolveTraceEntry</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/route">route</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/segmentIndex">segmentIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTraceEntry$<init>(io.ktor.routing.Route, kotlin.Int, io.ktor.routing.RoutingResolveResult)/result">result</span><span class="symbol">:</span>&nbsp;<a href="../-routing-resolve-result/index.html"><span class="identifier">RoutingResolveResult</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Represents a single entry in the <a href="../-routing-resolve-trace/index.html">RoutingResolveTrace</a>.

### Parameters

<code>route</code> - specifies instance of <a href="../-route/index.html">Route</a> for this entry.

<code>segmentIndex</code> - specifies index in <a href="../-routing-resolve-trace/segments.html">RoutingResolveTrace.segments</a> for this entry.

<code>result</code> - specifies resolution result for this entry.