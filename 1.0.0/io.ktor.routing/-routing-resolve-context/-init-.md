---
title: RoutingResolveContext.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="index.html">RoutingResolveContext</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">RoutingResolveContext</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/routing">routing</span><span class="symbol">:</span>&nbsp;<a href="../-route/index.html"><span class="identifier">Route</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingResolveContext$<init>(io.ktor.routing.Route, io.ktor.application.ApplicationCall, kotlin.collections.List((kotlin.Function1((io.ktor.routing.RoutingResolveTrace, kotlin.Unit)))))/tracers">tracers</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><span class="symbol">(</span><a href="../-routing-resolve-trace/index.html"><span class="identifier">RoutingResolveTrace</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Represents a context in which routing resolution is being performed

### Parameters

<code>routing</code> - root node for resolution to start at

<code>call</code> - instance of <a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> to use during resolution