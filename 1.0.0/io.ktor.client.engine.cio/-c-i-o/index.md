---
title: CIO - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.cio</a> / <a href="./index.html">CIO</a></div>

# CIO

<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIO</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../-c-i-o-engine-config/index.html"><span class="identifier">CIOEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

<a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html">HttpClientEngineFactory</a> using a Coroutine based I/O implementation without additional dependencies
with the the associated configuration <a href="../../io.ktor.client.engine/-http-client-engine-config/index.html">HttpClientEngineConfig</a>.

Just supports HTTP/1.x requests.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create.html">create</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.cio.CIO$create(kotlin.Function1((io.ktor.client.engine.cio.CIOEngineConfig, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-c-i-o-engine-config/index.html"><span class="identifier">CIOEngineConfig</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

Creates a new <a href="../../io.ktor.client.engine/-http-client-engine/index.html">HttpClientEngine</a> optionally specifying a <a href="create.html#io.ktor.client.engine.cio.CIO$create(kotlin.Function1((io.ktor.client.engine.cio.CIOEngineConfig, kotlin.Unit)))/block">block</a> configuring <a href="#">T</a>.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine/config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine/config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">config</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/config.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine/config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates a new <a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html">HttpClientEngineFactory</a> based on this one
with further configurations from the <a href="../../io.ktor.client.engine/config.html#io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</a> block.


</td>
</tr>
</tbody>
</table>
