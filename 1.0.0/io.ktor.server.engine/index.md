---
title: io.ktor.server.engine - 
layout: api
---



## Package io.ktor.server.engine

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-engine/index.html">ApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngine</span></code></div>

Engine which runs an application


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-engine-environment/index.html">ApplicationEngineEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngineEnvironment</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.application/-application-environment/index.html"><span class="identifier">ApplicationEnvironment</span></a></code></div>

Represents an environment in which engine runs


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-engine-environment-builder/index.html">ApplicationEngineEnvironmentBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEngineEnvironmentBuilder</span></code></div>

Engine environment configuration builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-engine-environment-reloading/index.html">ApplicationEngineEnvironmentReloading</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEngineEnvironmentReloading</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Implements <a href="-application-engine-environment/index.html">ApplicationEngineEnvironment</a> by loading an <a href="../io.ktor.application/-application/index.html">Application</a> from a folder or jar.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-engine-factory/index.html">ApplicationEngineFactory</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationEngineFactory</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

Factory interface for creating <a href="-application-engine/index.html">ApplicationEngine</a> instances


</td>
</tr>
<tr>
<td markdown="1">

<a href="-base-application-call/index.html">BaseApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

Base class for implementing an <a href="../io.ktor.application/-application-call/index.html">ApplicationCall</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-base-application-engine/index.html">BaseApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a></code></div>

Base class for implementing <a href="-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-base-application-request/index.html">BaseApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a></code></div>

Base class for implementing <a href="../io.ktor.request/-application-request/index.html">ApplicationRequest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-base-application-response/index.html">BaseApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a></code></div>

Base class for implementing an <a href="../io.ktor.response/-application-response/index.html">ApplicationResponse</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-connector-type/index.html">ConnectorType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ConnectorType</span></code></div>

Represents a type of a connector, e.g HTTP or HTTPS.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-connector-builder/index.html">EngineConnectorBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">EngineConnectorBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a></code></div>

Mutable implementation of EngineConnectorConfig for building connectors programmatically


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-connector-config/index.html">EngineConnectorConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">EngineConnectorConfig</span></code></div>

Represents a connector configuration.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-pipeline/index.html">EnginePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EnginePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Application engine pipeline. One usually don't need to install interceptors here unless your are writing
your own engine implementation


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-s-s-l-connector-builder/index.html">EngineSSLConnectorBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">EngineSSLConnectorBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-engine-connector-builder/index.html"><span class="identifier">EngineConnectorBuilder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-engine-s-s-l-connector-config/index.html"><span class="identifier">EngineSSLConnectorConfig</span></a></code></div>

Mutable implementation of EngineSSLConnectorConfig for building connectors programmatically


</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-s-s-l-connector-config/index.html">EngineSSLConnectorConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">EngineSSLConnectorConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a></code></div>

Represents an SSL connector configuration.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-shut-down-url/index.html">ShutDownUrl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ShutDownUrl</span></code></div>

Shutdown URL feature. It stops application when requested particular url


</td>
</tr>
</tbody>
</table>

### Annotations

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-engine-a-p-i/index.html">EngineAPI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">EngineAPI</span></code></div>

API marked with this annotation is not intended to be used by end users
unless a custom server engine implementation is required


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.-coroutine-scope/index.html">kotlinx.coroutines.CoroutineScope</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.-job/index.html">kotlinx.coroutines.Job</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="application-engine-environment.html">applicationEngineEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">applicationEngineEnvironment</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$applicationEngineEnvironment(kotlin.Function1((io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="-application-engine-environment-builder/index.html"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Creates <a href="-application-engine-environment/index.html">ApplicationEngineEnvironment</a> using <a href="-application-engine-environment-builder/index.html">ApplicationEngineEnvironmentBuilder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="command-line-environment.html">commandLineEnvironment</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">commandLineEnvironment</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$commandLineEnvironment(kotlin.Array((kotlin.String)))/args">args</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html"><span class="identifier">Array</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Creates an <a href="-application-engine-environment/index.html">ApplicationEngineEnvironment</a> instance from command line arguments


</td>
</tr>
<tr>
<td markdown="1">

<a href="connector.html">connector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-engine-environment-builder/index.html"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="identifier">connector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$connector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, kotlin.Function1((io.ktor.server.engine.EngineConnectorBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="-engine-connector-builder/index.html"><span class="identifier">EngineConnectorBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds a non-secure connector to this engine environment


</td>
</tr>
<tr>
<td markdown="1">

<a href="default-engine-pipeline.html">defaultEnginePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">defaultEnginePipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$defaultEnginePipeline(io.ktor.application.ApplicationEnvironment)/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-environment/index.html"><span class="identifier">ApplicationEnvironment</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-engine-pipeline/index.html"><span class="identifier">EnginePipeline</span></a></code></div>

Default engine pipeline for all engines. Use it only if you are writing your own application engine implementation.


</td>
</tr>
<tr>
<td markdown="1">

<a href="embedded-server.html">embeddedServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span> <span class="identifier">embeddedServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="embedded-server.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;80<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"0.0.0.0"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/watchPaths">watchPaths</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/module">module</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="embedded-server.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an embedded server with the given <a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</a>, listening on <a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</a>:<a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</a>

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span> <span class="identifier">embeddedServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="embedded-server.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/environment">environment</span><span class="symbol">:</span>&nbsp;<a href="-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="embedded-server.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an embedded server with the given <a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/factory">factory</a>, <a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/environment">environment</a> and <a href="embedded-server.html#io.ktor.server.engine$embeddedServer(io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), io.ktor.server.engine.ApplicationEngineEnvironment, kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)))/configure">configure</a> script


</td>
</tr>
<tr>
<td markdown="1">

<a href="install-default-transformations.html">installDefaultTransformations</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a><span class="symbol">.</span><span class="identifier">installDefaultTransformations</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Default send transformation

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.request/-application-receive-pipeline/index.html"><span class="identifier">ApplicationReceivePipeline</span></a><span class="symbol">.</span><span class="identifier">installDefaultTransformations</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Default receive transformation


</td>
</tr>
<tr>
<td markdown="1">

<a href="load-common-configuration.html">loadCommonConfiguration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-base-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">loadCommonConfiguration</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$loadCommonConfiguration(io.ktor.server.engine.BaseApplicationEngine.Configuration, io.ktor.config.ApplicationConfig)/deploymentConfig">deploymentConfig</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Load engine's configuration suitable for all engines from <a href="load-common-configuration.html#io.ktor.server.engine$loadCommonConfiguration(io.ktor.server.engine.BaseApplicationEngine.Configuration, io.ktor.config.ApplicationConfig)/deploymentConfig">deploymentConfig</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="ssl-connector.html">sslConnector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-engine-environment-builder/index.html"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="identifier">sslConnector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyStore">keyStore</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyAlias">keyAlias</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyStorePassword">keyStorePassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/privateKeyPassword">privateKeyPassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="-engine-s-s-l-connector-builder/index.html"><span class="identifier">EngineSSLConnectorBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds a secure connector to this engine environment


</td>
</tr>
<tr>
<td markdown="1">

<a href="stop-server-on-cancellation.html">stopServerOnCancellation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">stopServerOnCancellation</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Stop server on job cancellation. The returned deferred need to be completed or cancelled.


</td>
</tr>
</tbody>
</table>
