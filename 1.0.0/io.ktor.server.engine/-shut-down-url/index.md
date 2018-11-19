---
title: ShutDownUrl - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ShutDownUrl</a></div>

# ShutDownUrl

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ShutDownUrl</span></code></div>

Shutdown URL feature. It stops application when requested particular url

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-call-feature/index.html">ApplicationCallFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">ApplicationCallFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">ShutDownUrl</span></a><span class="symbol">&gt;</span></code></div>

A feature to install into application call pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Shutdown url configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-feature/index.html">EngineFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EngineFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">ShutDownUrl</span></a><span class="symbol">&gt;</span></code></div>

A feature to install into engine pipeline


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ShutDownUrl</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.ShutDownUrl$<init>(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Int)))/url">url</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.server.engine.ShutDownUrl$<init>(kotlin.String, kotlin.Function1((io.ktor.application.ApplicationCall, kotlin.Int)))/exitCode">exitCode</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span></code></div>

Shutdown URL feature. It stops application when requested particular url


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="exit-code.html">exitCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">exitCode</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

is a function to compute process exit code


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

to handle


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="do-shutdown.html">doShutdown</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">doShutdown</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.ShutDownUrl$doShutdown(io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Does application shutdown using the specified <a href="do-shutdown.html#io.ktor.server.engine.ShutDownUrl$doShutdown(io.ktor.application.ApplicationCall)/call">call</a>


</td>
</tr>
</tbody>
</table>
