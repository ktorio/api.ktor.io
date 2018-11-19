---
title: TomcatApplicationEngine - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.tomcat</a> / <a href="./index.html">TomcatApplicationEngine</a></div>

# TomcatApplicationEngine

<div class="signature"><code><span class="keyword">class </span><span class="identifier">TomcatApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-base-application-engine/index.html"><span class="identifier">BaseApplicationEngine</span></a></code></div>

Tomcat application engine that runs it in embedded mode

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-base-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a></code></div>

Tomcat engine specific configuration builder


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
<div class="signature"><code><span class="identifier">TomcatApplicationEngine</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.tomcat.TomcatApplicationEngine.Configuration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$<init>(io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.tomcat.TomcatApplicationEngine.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span></code></div>

Tomcat application engine that runs it in embedded mode


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-engine/application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">application</span><span class="symbol">: </span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Currently running application instance


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-engine/environment.html">environment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">environment</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

instance of <a href="../../io.ktor.server.engine/-application-engine-environment/index.html">ApplicationEngineEnvironment</a> for this engine


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-engine/pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a></code></div>

pipeline to use with this engine


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">start</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$start(kotlin.Boolean)/wait">wait</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">TomcatApplicationEngine</span></a></code></div>

Starts this <a href="../../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="stop.html">stop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/gracePeriod">gracePeriod</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.tomcat.TomcatApplicationEngine$stop(kotlin.Long, kotlin.Long, java.util.concurrent.TimeUnit)/timeUnit">timeUnit</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/TimeUnit.html"><span class="identifier">TimeUnit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Stops this <a href="../../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/stop-server-on-cancellation.html">stopServerOnCancellation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">stopServerOnCancellation</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Stop server on job cancellation. The returned deferred need to be completed or cancelled.


</td>
</tr>
</tbody>
</table>
