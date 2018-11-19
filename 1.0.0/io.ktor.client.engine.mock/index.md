---
title: io.ktor.client.engine.mock - 
layout: api
---



## Package io.ktor.client.engine.mock

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-mock-engine/index.html">MockEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MockEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine/index.html"><span class="identifier">HttpClientEngine</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-mock-engine-config/index.html">MockEngineConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MockEngineConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.engine/-http-client-engine-config/index.html"><span class="identifier">HttpClientEngineConfig</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-mock-http-request/index.html">MockHttpRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MockHttpRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.request/-http-request/index.html"><span class="identifier">HttpRequest</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-mock-http-response/index.html">MockHttpResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MockHttpResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.response/-http-response/index.html"><span class="identifier">HttpResponse</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="identifier">response</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.String, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.String, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.String, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;headersOf()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="identifier">response</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.ByteArray, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.ByteArray, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlin.ByteArray, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;headersOf()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="identifier">response</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/content">content</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a>&nbsp;<span class="symbol">=</span>&nbsp;HttpStatusCode.OK<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$response(io.ktor.client.engine.mock.MockHttpRequest, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.HttpStatusCode, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;headersOf()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response-error.html">responseError</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="identifier">responseError</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$responseError(io.ktor.client.engine.mock.MockHttpRequest, io.ktor.http.HttpStatusCode, kotlin.String, io.ktor.http.Headers)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$responseError(io.ktor.client.engine.mock.MockHttpRequest, io.ktor.http.HttpStatusCode, kotlin.String, io.ktor.http.Headers)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;status.description<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$responseError(io.ktor.client.engine.mock.MockHttpRequest, io.ktor.http.HttpStatusCode, kotlin.String, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;headersOf()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response-ok.html">responseOk</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a><span class="symbol">.</span><span class="identifier">responseOk</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$responseOk(io.ktor.client.engine.mock.MockHttpRequest, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;""<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-response/index.html"><span class="identifier">MockHttpResponse</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="to-request.html">toRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.client.request/-http-request-data/index.html"><span class="identifier">HttpRequestData</span></a><span class="symbol">.</span><span class="identifier">toRequest</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.engine.mock$toRequest(io.ktor.client.request.HttpRequestData, io.ktor.client.call.HttpClientCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-mock-http-request/index.html"><span class="identifier">MockHttpRequest</span></a></code></div>

Convert <a href="../io.ktor.client.request/-http-request-data/index.html">HttpRequestData</a> to <a href="-mock-http-request/index.html">MockHttpRequest</a>


</td>
</tr>
</tbody>
</table>
