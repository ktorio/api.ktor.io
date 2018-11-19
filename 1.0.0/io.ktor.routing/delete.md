---
title: delete - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.routing</a> / <a href="./delete.html">delete</a></div>

# delete

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests with specified <a href="delete.html#io.ktor.routing$delete(io.ktor.routing.Route, kotlin.String, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/path">path</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><a href="-route/index.html"><span class="identifier">Route</span></a><span class="symbol">.</span><span class="identifier">delete</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing$delete(io.ktor.routing.Route, kotlin.SuspendFunction2((io.ktor.util.pipeline.PipelineContext((kotlin.Unit, io.ktor.application.ApplicationCall)), , )))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline-interceptor.html"><span class="identifier">PipelineInterceptor</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-route/index.html"><span class="identifier">Route</span></a></code></div>

Builds a route to match <code>DELETE</code> requests

</div>
