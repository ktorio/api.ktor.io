---
title: HttpClientEngineFactory - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine</a> / <a href="./index.html">HttpClientEngineFactory</a></div>

# HttpClientEngineFactory

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientEngineFactory</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

Factory of <a href="../-http-client-engine/index.html">HttpClientEngine</a> with a specific <a href="index.html#T">T</a> of <a href="../-http-client-engine-config/index.html">HttpClientEngineConfig</a>.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create.html">create</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">create</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.HttpClientEngineFactory$create(kotlin.Function1((io.ktor.client.engine.HttpClientEngineFactory.T, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

Creates a new <a href="../-http-client-engine/index.html">HttpClientEngine</a> optionally specifying a <a href="create.html#io.ktor.client.engine.HttpClientEngineFactory$create(kotlin.Function1((io.ktor.client.engine.HttpClientEngineFactory.T, kotlin.Unit)))/block">block</a> configuring <a href="index.html#T">T</a>.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">config</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</span><span class="symbol">:</span>&nbsp;<a href="../config.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../config.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span></code></div>

Creates a new <a href="./index.md">HttpClientEngineFactory</a> based on this one
with further configurations from the <a href="../config.html#io.ktor.client.engine$config(io.ktor.client.engine.HttpClientEngineFactory((io.ktor.client.engine.config.T)), kotlin.Function1((io.ktor.client.engine.config.T, kotlin.Unit)))/nested">nested</a> block.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.android/-android/index.html">Android</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Android</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.android/-android-engine-config/index.html"><span class="identifier">AndroidEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.apache/-apache/index.html">Apache</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Apache</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.apache/-apache-engine-config/index.html"><span class="identifier">ApacheEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

<a href="./index.md">HttpClientEngineFactory</a> using <code>org.apache.httpcomponents.httpasyncclient</code>
with the the associated configuration <a href="../../io.ktor.client.engine.apache/-apache-engine-config/index.html">ApacheEngineConfig</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.cio/-c-i-o/index.html">CIO</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">CIO</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.cio/-c-i-o-engine-config/index.html"><span class="identifier">CIOEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

<a href="./index.md">HttpClientEngineFactory</a> using a Coroutine based I/O implementation without additional dependencies
with the the associated configuration <a href="../-http-client-engine-config/index.html">HttpClientEngineConfig</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.mock/-mock-engine/-companion/index.html">Companion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.mock/-mock-engine-config/index.html"><span class="identifier">MockEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.testing.client/-test-http-client-engine/-companion/index.html">Companion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Companion</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.testing.client/-test-http-client-config/index.html"><span class="identifier">TestHttpClientConfig</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.jetty/-jetty/index.html">Jetty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Jetty</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.jetty/-jetty-engine-config/index.html"><span class="identifier">JettyEngineConfig</span></a><span class="symbol">&gt;</span></code></div>

<a href="./index.md">HttpClientEngineFactory</a> using <code>org.eclipse.jetty.http2:http2-client</code>
with the the associated configuration <a href="../../io.ktor.client.engine.jetty/-jetty-engine-config/index.html">JettyEngineConfig</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.okhttp/-ok-http/index.html">OkHttp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">OkHttp</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.client.engine.okhttp/-ok-http-config/index.html"><span class="identifier">OkHttpConfig</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>
