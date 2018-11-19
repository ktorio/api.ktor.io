---
title: BaseApplicationEngine - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">BaseApplicationEngine</a></div>

# BaseApplicationEngine

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a></code></div>

Base class for implementing <a href="../-application-engine/index.html">ApplicationEngine</a>

It creates default engine pipeline, provides <a href="application.html">application</a> property and installs default transformations
on respond and receive

### Parameters

<code>environment</code> - instance of <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> for this engine

<code>pipeline</code> - pipeline to use with this engine

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a></code></div>

Configuration for the <a href="./index.md">BaseApplicationEngine</a>


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
<div class="signature"><code><span class="identifier">BaseApplicationEngine</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, io.ktor.server.engine.EnginePipeline)/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.BaseApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, io.ktor.server.engine.EnginePipeline)/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a>&nbsp;<span class="symbol">=</span>&nbsp;defaultEnginePipeline(environment)<span class="symbol">)</span></code></div>

Base class for implementing <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">application</span><span class="symbol">: </span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Currently running application instance


</td>
</tr>
<tr>
<td markdown="1">

<a href="environment.html">environment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">environment</span><span class="symbol">: </span><a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

instance of <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> for this engine


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a></code></div>

pipeline to use with this engine


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-application-engine/start.html">start</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">start</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$start(kotlin.Boolean)/wait">wait</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">)</span><span class="symbol">: </span><a href="../-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a></code></div>

Starts this <a href="../-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-application-engine/stop.html">stop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/gracePeriod">gracePeriod</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeUnit">timeUnit</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html"><span class="identifier">TimeUnit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Stops this <a href="../-application-engine/index.html">ApplicationEngine</a>


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
<div class="signature"><code><span class="keyword">fun </span><a href="../-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">stopServerOnCancellation</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

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

<a href="../../io.ktor.server.cio/-c-i-o-application-engine/index.html">CIOApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">BaseApplicationEngine</span></a></code></div>

Engine that based on CIO backend


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.jetty/-jetty-application-engine-base/index.html">JettyApplicationEngineBase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">JettyApplicationEngineBase</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">BaseApplicationEngine</span></a></code></div>

<a href="../-application-engine/index.html">ApplicationEngine</a> base type for running in a standalone Jetty


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.netty/-netty-application-engine/index.html">NettyApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">BaseApplicationEngine</span></a></code></div>

<a href="../-application-engine/index.html">ApplicationEngine</a> implementation for running in a standalone Netty


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.testing/-test-application-engine/index.html">TestApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">BaseApplicationEngine</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

ktor test engine that provides way to simulate application calls to existing application module(s)
without actual HTTP connection


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.tomcat/-tomcat-application-engine/index.html">TomcatApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TomcatApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">BaseApplicationEngine</span></a></code></div>

Tomcat application engine that runs it in embedded mode


</td>
</tr>
</tbody>
</table>
