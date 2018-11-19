---
title: ApplicationEngineEnvironmentBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">ApplicationEngineEnvironmentBuilder</a></div>

# ApplicationEngineEnvironmentBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationEngineEnvironmentBuilder</span></code></div>

Engine environment configuration builder

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApplicationEngineEnvironmentBuilder</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Engine environment configuration builder


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="class-loader.html">classLoader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">classLoader</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ClassLoader.html"><span class="identifier">ClassLoader</span></a></code></div>

Root class loader


</td>
</tr>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">config</span><span class="symbol">: </span><a href="../../io.ktor.config/-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Application config


</td>
</tr>
<tr>
<td markdown="1">

<a href="connectors.html">connectors</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">connectors</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../-engine-connector-config/index.html"><span class="identifier">EngineConnectorConfig</span></a><span class="symbol">&gt;</span></code></div>

Application connectors list


</td>
</tr>
<tr>
<td markdown="1">

<a href="log.html">log</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">log</span><span class="symbol">: </span><span class="identifier">Logger</span></code></div>

Application logger


</td>
</tr>
<tr>
<td markdown="1">

<a href="modules.html">modules</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">modules</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Application modules


</td>
</tr>
<tr>
<td markdown="1">

<a href="parent-coroutine-context.html">parentCoroutineContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">parentCoroutineContext</span><span class="symbol">: </span><span class="identifier">&lt;ERROR CLASS&gt;</span></code></div>

Parent coroutine context for an application


</td>
</tr>
<tr>
<td markdown="1">

<a href="watch-paths.html">watchPaths</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">watchPaths</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Paths to wait for application reload


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentBuilder$build(kotlin.Function1((io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-application-engine-environment/index.html"><span class="identifier">ApplicationEngineEnvironment</span></a></code></div>

Build an application engine environment


</td>
</tr>
<tr>
<td markdown="1">

<a href="module.html">module</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">module</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.engine.ApplicationEngineEnvironmentBuilder$module(kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install application module


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../connector.html">connector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="identifier">connector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$connector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, kotlin.Function1((io.ktor.server.engine.EngineConnectorBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../-engine-connector-builder/index.html"><span class="identifier">EngineConnectorBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds a non-secure connector to this engine environment


</td>
</tr>
<tr>
<td markdown="1">

<a href="../ssl-connector.html">sslConnector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationEngineEnvironmentBuilder</span></a><span class="symbol">.</span><span class="identifier">sslConnector</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyStore">keyStore</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/security/KeyStore.html"><span class="identifier">KeyStore</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyAlias">keyAlias</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/keyStorePassword">keyStorePassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/privateKeyPassword">privateKeyPassword</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-array/index.html"><span class="identifier">CharArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$sslConnector(io.ktor.server.engine.ApplicationEngineEnvironmentBuilder, java.security.KeyStore, kotlin.String, kotlin.Function0((kotlin.CharArray)), kotlin.Function0((kotlin.CharArray)), kotlin.Function1((io.ktor.server.engine.EngineSSLConnectorBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../-engine-s-s-l-connector-builder/index.html"><span class="identifier">EngineSSLConnectorBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Adds a secure connector to this engine environment


</td>
</tr>
</tbody>
</table>
