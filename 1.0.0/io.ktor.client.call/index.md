---
title: io.ktor.client.call - 
layout: api
---



## Package io.ktor.client.call

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http-client-call/index.html">HttpClientCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpClientCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span><span class="symbol">, </span><span class="identifier">Closeable</span></code></div>

A class that represents a single pair of <a href="-http-client-call/request.html">request</a> and <a href="-http-client-call/response.html">response</a> for a specific <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-engine-call/index.html">HttpEngineCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpEngineCall</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-type/index.html">Type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">expect</span> <span class="keyword">interface </span><span class="identifier">Type</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-type-info/index.html">TypeInfo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TypeInfo</span></code></div>

Ktor type information.
<a href="-type-info/type.html">type</a>: source KClass&lt;*&gt;
<a href="-type-info/reified-type.html">reifiedType</a>: type with substituted generics


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-double-receive-exception/index.html">DoubleReceiveException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DoubleReceiveException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Exception representing that the response payload has already been received.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-transformation-found-exception/index.html">NoTransformationFoundException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NoTransformationFoundException</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unsupported-operation-exception/index.html"><span class="identifier">UnsupportedOperationException</span></a></code></div>

Exception representing the no transformation was found.
It includes the received type and the expected type as part of the message.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-receive-pipeline-exception/index.html">ReceivePipelineException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ReceivePipelineException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Exception representing fail of the response pipeline
<a href="-receive-pipeline-exception/cause.html">cause</a> contains origin pipeline exception


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsupported-content-type-exception/index.html">UnsupportedContentTypeException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsupportedContentTypeException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Type Aliases

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-no-transformation-found.html">NoTransformationFound</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">typealias </span><s><span class="identifier">NoTransformationFound</span></s>&nbsp;<span class="symbol">=</span>&nbsp;<a href="-no-transformation-found-exception/index.html"><span class="identifier">NoTransformationFoundException</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-type/index.html">Type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">typealias </span><span class="identifier">Type</span>&nbsp;<span class="symbol">=</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.String, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.String, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>,
an <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/url">url</a> and an optional <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, java.net.URL, kotlin.Function1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a> configuring a <a href="../io.ktor.client.request/-http-request-builder/index.html">HttpRequestBuilder</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> and with the specified <a href="../io.ktor.client.request/-http-request-builder/index.html">HttpRequestBuilder</a>
configured inside the <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, kotlin.SuspendFunction1((io.ktor.client.request.HttpRequestBuilder, kotlin.Unit)))/block">block</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">call</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.call$call(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request-builder/index.html"><span class="identifier">HttpRequestBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

Constructs a <a href="-http-client-call/index.html">HttpClientCall</a> from this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a> and
with the specified HTTP request <a href="call.html#io.ktor.client.call$call(io.ktor.client.HttpClient, io.ktor.client.request.HttpRequestBuilder)/builder">builder</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

Tries to receive the payload of the <a href="#">response</a> as an specific type <a href="receive.html#T">T</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="type-info.html">typeInfo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">typeInfo</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-type-info/index.html"><span class="identifier">TypeInfo</span></a></code></div>

</td>
</tr>
</tbody>
</table>
