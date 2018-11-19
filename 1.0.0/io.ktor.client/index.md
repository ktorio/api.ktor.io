---
title: io.ktor.client - 
layout: api
---



## Package io.ktor.client

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http-client/index.html">HttpClient</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpClient</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span><span class="symbol">, </span><span class="identifier">Closeable</span></code></div>

Asynchronous client to perform HTTP requests.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-config/index.html">HttpClientConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpClientConfig</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

Mutable configuration used by <a href="-http-client/index.html">HttpClient</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-engine-container/index.html">HttpClientEngineContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientEngineContainer</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http-client.html">HttpClient</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">HttpClient</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client$HttpClient(kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client/index.html"><span class="identifier">HttpClient</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <span class="identifier">HttpClient</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.HttpClient.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.HttpClient.T)), kotlin.Unit)))/engineFactory">engineFactory</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="-http-client.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.HttpClient.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.HttpClient.T)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><a href="-http-client.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client/index.html"><span class="identifier">HttpClient</span></a></code></div>

Constructs an asynchronous <a href="-http-client/index.html">HttpClient</a> using the specified <a href="-http-client.html#io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.HttpClient.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.HttpClient.T)), kotlin.Unit)))/engineFactory">engineFactory</a>
and an optional <a href="-http-client.html#io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.HttpClient.T)), kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.HttpClient.T)), kotlin.Unit)))/block">block</a> for configuring this client.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">HttpClient</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngine, kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/engine">engine</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngine, kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client/index.html"><span class="identifier">HttpClient</span></a></code></div>

Constructs an asynchronous <a href="-http-client/index.html">HttpClient</a> using the specified <a href="-http-client.html#io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngine, kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/engine">engine</a>
and a <a href="-http-client.html#io.ktor.client$HttpClient(io.ktor.client.engine.HttpClientEngine, kotlin.Function1((io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Unit)))/block">block</a> for configuring this client.


</td>
</tr>
</tbody>
</table>
