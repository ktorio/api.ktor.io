---
title: TestHttpClientConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.testing.client</a> / <a href="./index.html">TestHttpClientConfig</a></div>

# TestHttpClientConfig

<div class="signature"><code><span class="keyword">class </span><span class="identifier">TestHttpClientConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TestHttpClientConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="app.html">app</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">lateinit</span> <span class="keyword">var </span><span class="identifier">app</span><span class="symbol">: </span><a href="../../io.ktor.server.testing/-test-application-engine/index.html"><span class="identifier">TestApplicationEngine</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine/-http-client-engine-config/dispatcher.html">dispatcher</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><s><span class="identifier">dispatcher</span></s><span class="symbol">: </span><span class="identifier">CoroutineDispatcher</span><span class="symbol">?</span></code></div>

The <a href="#">CoroutineDispatcher</a> that will be used for the client requests.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine/-http-client-engine-config/pipelining.html">pipelining</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">pipelining</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Enable http pipelining


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine/-http-client-engine-config/response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><a href="../../io.ktor.client.response/-http-response-config/index.html"><span class="identifier">HttpResponseConfig</span></a></code></div>

Configuration for http response.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.engine/-http-client-engine-config/threads-count.html">threadsCount</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">threadsCount</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Network threads count


</td>
</tr>
</tbody>
</table>
