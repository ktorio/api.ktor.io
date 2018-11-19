---
title: ApacheEngineConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.engine.apache</a> / <a href="./index.html">ApacheEngineConfig</a></div>

# ApacheEngineConfig

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApacheEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

Configuration for <a href="../-apache/index.html">Apache</a> implementation of <a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html">HttpClientEngineFactory</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ApacheEngineConfig</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration for <a href="../-apache/index.html">Apache</a> implementation of <a href="../../io.ktor.client.engine/-http-client-engine-factory/index.html">HttpClientEngineFactory</a>.


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
A value of 0 represents infinite, while -1 represents system's default value.


</td>
</tr>
<tr>
<td markdown="1">

<a href="connection-request-timeout.html">connectionRequestTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">connectionRequestTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds for the connection manager to start a request - default 20 seconds.
A value of 0 represents infinite, while -1 represents system's default value.


</td>
</tr>
<tr>
<td markdown="1">

<a href="custom-client.html">customClient</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">customClient</span><span class="symbol">: </span><span class="identifier">HttpAsyncClientBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">HttpAsyncClientBuilder</span></code></div>

Custom processor for <a href="#">HttpAsyncClientBuilder</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="custom-request.html">customRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">customRequest</span><span class="symbol">: </span><span class="identifier">Builder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">Builder</span></code></div>

Custom processor for <a href="#">RequestConfig.Builder</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="follow-redirects.html">followRedirects</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">followRedirects</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Whether or not, it will follow <code>Location</code> headers. <code>false</code> by default.
It uses the default number of redirects defined by Apache's HttpClient that is 50.


</td>
</tr>
<tr>
<td markdown="1">

<a href="socket-timeout.html">socketTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">socketTimeout</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Max milliseconds between TCP packets - default 10 seconds.
A value of 0 represents infinite, while -1 represents system's default value.


</td>
</tr>
<tr>
<td markdown="1">

<a href="ssl-context.html">sslContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">sslContext</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/javax/net/ssl/SSLContext.html"><span class="identifier">SSLContext</span></a><span class="symbol">?</span></code></div>

Optional Java's SSLContext allowing to set custom keys,
trust manager or custom source for secure random data


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

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="customize-client.html">customizeClient</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">customizeClient</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.apache.ApacheEngineConfig$customizeClient(kotlin.Function1((org.apache.http.impl.nio.client.HttpAsyncClientBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpAsyncClientBuilder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Customizes a <a href="#">HttpAsyncClientBuilder</a> in the specified <a href="customize-client.html#io.ktor.client.engine.apache.ApacheEngineConfig$customizeClient(kotlin.Function1((org.apache.http.impl.nio.client.HttpAsyncClientBuilder, kotlin.Unit)))/block">block</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="customize-request.html">customizeRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">customizeRequest</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.engine.apache.ApacheEngineConfig$customizeRequest(kotlin.Function1((org.apache.http.client.config.RequestConfig.Builder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">Builder</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Customizes a <a href="#">RequestConfig.Builder</a> in the specified <a href="customize-request.html#io.ktor.client.engine.apache.ApacheEngineConfig$customizeRequest(kotlin.Function1((org.apache.http.client.config.RequestConfig.Builder, kotlin.Unit)))/block">block</a>.


</td>
</tr>
</tbody>
</table>
