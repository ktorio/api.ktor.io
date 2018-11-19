---
title: io.ktor.client.response - 
layout: api
---



## Package io.ktor.client.response

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-http-receive-pipeline/index.html">HttpReceivePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpReceivePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">&gt;</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for receiving <a href="-http-response/index.html">HttpResponse</a> without any processing.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-response/index.html">HttpResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.http/-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">Closeable</span></code></div>

A response for <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>, second part of <a href="../io.ktor.client.call/-http-client-call/index.html">HttpClientCall</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-response-config/index.html">HttpResponseConfig</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HttpResponseConfig</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-response-container/index.html">HttpResponseContainer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpResponseContainer</span></code></div>

Class representing a typed <a href="-http-response-container/response.html">response</a> with an attached <a href="-http-response-container/expected-type.html">expectedType</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-response-pipeline/index.html">HttpResponsePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpResponsePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="-http-response-container/index.html"><span class="identifier">HttpResponseContainer</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">&gt;</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> Pipeline used for executing <a href="-http-response/index.html">HttpResponse</a>.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="discard-remaining.html">discardRemaining</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">discardRemaining</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Efficiently discards the remaining bytes of <a href="-http-response/content.html">HttpResponse.content</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-bytes.html">readBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Exactly reads <a href="read-bytes.html#io.ktor.client.response$readBytes(io.ktor.client.response.HttpResponse, kotlin.Int)/count">count</a> bytes of the <a href="-http-response/content.html">HttpResponse.content</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Reads the whole <a href="-http-response/content.html">HttpResponse.content</a> if Content-Length was specified.
Otherwise it just reads one byte.


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-text.html">readText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-http-response/index.html"><span class="identifier">HttpResponse</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read the <a href="-http-response/content.html">HttpResponse.content</a> as a String. You can pass an optional <a href="read-text.html#io.ktor.client.response$readText(io.ktor.client.response.HttpResponse, java.nio.charset.Charset)/charset">charset</a>
to specify a charset in the case no one is specified as part of the Content-Type response.
If no charset specified either as parameter or as part of the response,
<a href="-http-response-config/default-charset.html">HttpResponseConfig.defaultCharset</a> will be used.


</td>
</tr>
</tbody>
</table>
