---
title: ApplicationEngine - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ApplicationEngine</a></div>

# ApplicationEngine

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngine</span></code></div>

Engine which runs an application

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Configuration for the <a href="./index.md">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="environment.html">environment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">environment</span><span class="symbol">: </span><a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Environment with which this engine is running


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="start.html">start</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">start</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$start(kotlin.Boolean)/wait">wait</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">ApplicationEngine</span></a></code></div>

Starts this <a href="./index.md">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="stop.html">stop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/gracePeriod">gracePeriod</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeUnit">timeUnit</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html"><span class="identifier">TimeUnit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Stops this <a href="./index.md">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../stop-server-on-cancellation.html">stopServerOnCancellation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">stopServerOnCancellation</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Stop server on job cancellation. The returned deferred need to be completed or cancelled.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-base-application-engine/index.html">BaseApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngine</span></a></code></div>

Base class for implementing <a href="./index.md">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>
