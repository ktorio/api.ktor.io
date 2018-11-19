---
title: AndroidEngineConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.android</a> / <a href="./index.html">AndroidEngineConfig</a></div>

# AndroidEngineConfig

<div class="signature"><code><span class="keyword">class </span><span class="identifier">AndroidEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">AndroidEngineConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="connect-timeout.html">connectTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds to establish an HTTP connection - default 10 seconds.
A value of 0 represents infinite.


</td>
</tr>
<tr>
<td markdown="1">

<a href="proxy.html">proxy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">proxy</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/Proxy.html"><span class="identifier">Proxy</span></a><span class="symbol">?</span></code></div>

Proxy address to use - default {@link #openConnection java.net.URL:URL.openConnection}


</td>
</tr>
<tr>
<td markdown="1">

<a href="socket-timeout.html">socketTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">socketTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds between TCP packets - default 10 seconds.
A value of 0 represents infinite.


</td>
</tr>
<tr>
<td markdown="1">

<a href="ssl-manager.html">sslManager</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">sslManager</span><span class="symbol">: </span><span class="symbol">(</span><a href="http://docs.oracle.com/javase/6/docs/api/javax/net/ssl/HttpsURLConnection.html"><span class="identifier">HttpsURLConnection</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

https connection manipulator. inherited methods are not permitted.


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
