---
title: RoutingResolveTrace.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">RoutingResolveTrace</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">RoutingResolveTrace</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$<init>(io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.String)))/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveTrace$<init>(io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.String)))/segments">segments</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents the trace of routing resolution process for diagnostics.

### Parameters

<code>call</code> - instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> for which this trace was created.

<code>segments</code> - list of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>s for each path segment supplied for the routing resolution.