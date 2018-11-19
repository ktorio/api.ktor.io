---
title: HttpClientEngineConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine</a> / <a href="./index.html">HttpClientEngineConfig</a></div>

# HttpClientEngineConfig

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HttpClientEngineConfig</span></code></div>

Base configuration for <a href="../-http-client-engine/index.html">HttpClientEngine</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpClientEngineConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Base configuration for <a href="../-http-client-engine/index.html">HttpClientEngine</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="dispatcher.html">dispatcher</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><s><span class="identifier">dispatcher</span></s><span class="symbol">: </span><span class="identifier">CoroutineDispatcher</span><span class="symbol">?</span></code></div>

The <a href="#">CoroutineDispatcher</a> that will be used for the client requests.


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipelining.html">pipelining</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">pipelining</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Enable http pipelining


</td>
</tr>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><a href="../../io.ktor.client.response/-http-response-config/index.html"><span class="identifier">HttpResponseConfig</span></a></code></div>

Configuration for http response.


</td>
</tr>
<tr>
<td markdown="1">

<a href="threads-count.html">threadsCount</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">threadsCount</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Network threads count


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.android/-android-engine-config/index.html">AndroidEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AndroidEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.apache/-apache-engine-config/index.html">ApacheEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApacheEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

Configuration for <a href="../../io.ktor.client.engine.apache/-apache/index.html">Apache</a> implementation of <a href="../-http-client-engine-factory/index.html">HttpClientEngineFactory</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.cio/-c-i-o-engine-config/index.html">CIOEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.jetty/-jetty-engine-config/index.html">JettyEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JettyEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

Configuration for <a href="../../io.ktor.client.engine.jetty/-jetty/index.html">Jetty</a> implementation of <a href="../-http-client-engine-factory/index.html">HttpClientEngineFactory</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.mock/-mock-engine-config/index.html">MockEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MockEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine.okhttp/-ok-http-config/index.html">OkHttpConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OkHttpConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.testing.client/-test-http-client-config/index.html">TestHttpClientConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestHttpClientConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
</tbody>
</table>
