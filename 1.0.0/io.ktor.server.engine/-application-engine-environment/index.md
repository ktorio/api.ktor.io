---
title: ApplicationEngineEnvironment - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ApplicationEngineEnvironment</a></div>

# ApplicationEngineEnvironment

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngineEnvironment</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-environment/index.html"><span class="identifier">ApplicationEnvironment</span></a></code></div>

Represents an environment in which engine runs

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="application.html">application</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">application</span><span class="symbol">: </span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a></code></div>

Running <a href="../../io.ktor.application/-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="connectors.html">connectors</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">connectors</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a><span class="symbol">&gt;</span></code></div>

Connectors that describers where and how server should listen


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-environment/class-loader.html">classLoader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">classLoader</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a></code></div>

<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html">ClassLoader</a> used to load application.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-environment/config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">config</span><span class="symbol">: </span><a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Configuration for the <a href="../../io.ktor.application/-application/index.html">Application</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-environment/log.html">log</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">log</span><span class="symbol">: </span><span class="identifier">Logger</span></code></div>

Instance of <a href="#">Logger</a> to be used for logging.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-environment/monitor.html">monitor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">monitor</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-events/index.html"><span class="identifier">ApplicationEvents</span></a></code></div>

Provides events on Application lifecycle


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.application/-application-environment/parent-coroutine-context.html">parentCoroutineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">parentCoroutineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

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

<a href="start.html">start</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">start</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Starts <a href="./index.md">ApplicationEngineEnvironment</a> and creates an application


</td>
</tr>
<tr>
<td markdown="1">

<a href="stop.html">stop</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">stop</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Stops <a href="./index.md">ApplicationEngineEnvironment</a> and destroys any running application


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-application-engine-environment-reloading/index.html">ApplicationEngineEnvironmentReloading</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEngineEnvironmentReloading</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Implements <a href="./index.md">ApplicationEngineEnvironment</a> by loading an <a href="../../io.ktor.application/-application/index.html">Application</a> from a folder or jar.


</td>
</tr>
</tbody>
</table>
