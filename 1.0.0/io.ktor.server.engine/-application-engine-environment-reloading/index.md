---
title: ApplicationEngineEnvironmentReloading - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ApplicationEngineEnvironmentReloading</a></div>

# ApplicationEngineEnvironmentReloading

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEngineEnvironmentReloading</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Implements <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> by loading an <a href="../../io.ktor.application/-application/index.html">Application</a> from a folder or jar.

<a href="#">watchPaths</a> specifies substrings to match against class path entries to monitor changes in folder/jar and implements hot reloading

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApplicationEngineEnvironmentReloading</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/classLoader">classLoader</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/log">log</span><span class="symbol">:</span>&nbsp;<span class="identifier">Logger</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/config">config</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/connectors">connectors</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/modules">modules</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/watchPaths">watchPaths</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentReloading$<init>(java.lang.ClassLoader, org.slf4j.Logger, io.ktor.config.ApplicationConfig, kotlin.collections.List((io.ktor.server.engine.EngineConnectorConfig)), kotlin.collections.List((kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))), kotlin.collections.List((kotlin.String)), )/parentCoroutineContext">parentCoroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;EmptyCoroutineContext<span class="symbol">)</span></code></div>

Implements <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> by loading an <a href="../../io.ktor.application/-application/index.html">Application</a> from a folder or jar.


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

Running <a href="../../io.ktor.application/-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="class-loader.html">classLoader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">classLoader</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a></code></div>

<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html">ClassLoader</a> used to load application.


</td>
</tr>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">config</span><span class="symbol">: </span><a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Configuration for the <a href="../../io.ktor.application/-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="connectors.html">connectors</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">connectors</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a><span class="symbol">&gt;</span></code></div>

Connectors that describers where and how server should listen


</td>
</tr>
<tr>
<td markdown="1">

<a href="log.html">log</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">log</span><span class="symbol">: </span><span class="identifier">Logger</span></code></div>

Instance of <a href="#">Logger</a> to be used for logging.


</td>
</tr>
<tr>
<td markdown="1">

<a href="monitor.html">monitor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">monitor</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-events/index.html"><span class="identifier">ApplicationEvents</span></a></code></div>

Provides events on Application lifecycle


</td>
</tr>
<tr>
<td markdown="1">

<a href="parent-coroutine-context.html">parentCoroutineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">parentCoroutineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

Parent coroutine context for an application


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="reload.html">reload</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">reload</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Reload application: destroy it first and then create again


</td>
</tr>
<tr>
<td markdown="1">

<a href="start.html">start</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">start</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Starts <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> and creates an application


</td>
</tr>
<tr>
<td markdown="1">

<a href="stop.html">stop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Stops <a href="../-application-engine-environment/index.html">ApplicationEngineEnvironment</a> and destroys any running application


</td>
</tr>
</tbody>
</table>
