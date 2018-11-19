---
title: io.ktor.client.features - 
layout: api
---



## Package io.ktor.client.features

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default-request/index.html">DefaultRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultRequest</span></code></div>

<a href="-default-request/-feature/index.html">Feature</a> is used to set request default parameters.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-expect-success/index.html">ExpectSuccess</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ExpectSuccess</span></code></div>

Terminate response pipeline with fail status code in response.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-client-feature/index.html">HttpClientFeature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpClientFeature</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">TConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">TFeature</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Base interface representing a <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> feature.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-plain-text/index.html">HttpPlainText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpPlainText</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> feature that encodes <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> request bodies to <a href="../io.ktor.http.content/-text-content/index.html">TextContent</a>
using a specific charset defined at <a href="-http-plain-text/default-charset.html">HttpPlainText.defaultCharset</a>.
And also processes the response body as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-redirect/index.html">HttpRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpRedirect</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> feature that handles http redirect


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-send/index.html">HttpSend</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpSend</span></code></div>

This is internal feature that is always installed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-sender/index.html">Sender</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Sender</span></code></div>

This interface represents a request send pipeline interceptor chain


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-bad-response-status-exception/index.html">BadResponseStatusException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BadResponseStatusException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-redirect-exception/index.html">RedirectException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">RedirectException</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-send-count-exceed-exception/index.html">SendCountExceedException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SendCountExceedException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Thrown when too many actual requests were sent during a client call.
It could be caused by infinite or too long redirect sequence.
Maximum number of requests is limited by <a href="-http-send/max-send-count.html">HttpSend.maxSendCount</a>


</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-bad-response-status.html">BadResponseStatus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">BadResponseStatus</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="-bad-response-status-exception/index.html"><span class="identifier">BadResponseStatusException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-send-interceptor.html">HttpSendInterceptor</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><span class="identifier">HttpSendInterceptor</span>&nbsp;<span class="symbol">=</span>&nbsp;<span class="keyword">suspend </span><a href="-sender/index.html"><span class="identifier">Sender</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

HttpSend pipeline interceptor function


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default-request.html">defaultRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.client/-http-client-config/index.html"><span class="identifier">HttpClientConfig</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">defaultRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features$defaultRequest(io.ktor.client.HttpClientConfig((io.ktor.client.engine.HttpClientEngineConfig)), kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set request default parameters.


</td>
</tr>
<tr>
<td markdown="1">

<a href="default-transformers.html">defaultTransformers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">defaultTransformers</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Install default transformers.
Usually installed by default so there is no need to use it
unless you have disabled it via <a href="../io.ktor.client/-http-client-config/use-default-transformers.html">HttpClientConfig.useDefaultTransformers</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="feature.html">feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">B</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">F</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">feature</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features$feature(io.ktor.client.HttpClient, io.ktor.client.features.HttpClientFeature((io.ktor.client.features.feature.B, io.ktor.client.features.feature.F)))/feature">feature</span><span class="symbol">:</span>&nbsp;<a href="-http-client-feature/index.html"><span class="identifier">HttpClientFeature</span></a><span class="symbol">&lt;</span><a href="feature.html#B"><span class="identifier">B</span></a><span class="symbol">,</span>&nbsp;<a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="feature.html#F"><span class="identifier">F</span></a><span class="symbol">?</span></code></div>

Try to get a <a href="feature.html#io.ktor.client.features$feature(io.ktor.client.HttpClient, io.ktor.client.features.HttpClientFeature((io.ktor.client.features.feature.B, io.ktor.client.features.feature.F)))/feature">feature</a> installed in this client. Returns <code>null</code> if the feature was not previously installed.


</td>
</tr>
</tbody>
</table>
