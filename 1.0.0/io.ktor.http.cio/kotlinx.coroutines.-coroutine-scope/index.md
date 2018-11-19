---
title: io.ktor.http.cio.kotlinx.coroutines.CoroutineScope - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="./index.html">kotlinx.coroutines.CoroutineScope</a></div>

### Extensions for kotlinx.coroutines.CoroutineScope

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="decode-chunked.html">decodeChunked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">decodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$decodeChunked(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-decoder-job.html"><span class="identifier">DecoderJob</span></a></code></div>

Start a chunked stream decoder coroutine


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-multipart.html">parseMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentLength">contentLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/boundaryPrefixed">boundaryPrefixed</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/totalLength">totalLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

Starts a multipart parser coroutine producing multipart events


</td>
</tr>
<tr>
<td markdown="1">

<a href="start-connection-pipeline.html">startConnectionPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">startConnectionPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.internals/-weak-timeout-queue/index.html"><span class="identifier">WeakTimeoutQueue</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

Start connection HTTP pipeline invoking <a href="start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request.
Note that <a href="start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> could be invoked multiple times concurrently due to HTTP pipeline nature


</td>
</tr>
</tbody>
</table>
