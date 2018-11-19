---
title: startConnectionPipeline - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="index.html">kotlinx.coroutines.CoroutineScope</a> / <a href="./start-connection-pipeline.html">startConnectionPipeline</a></div>

# startConnectionPipeline

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">startConnectionPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.internals/-weak-timeout-queue/index.html"><span class="identifier">WeakTimeoutQueue</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

Start connection HTTP pipeline invoking <a href="start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request.
Note that <a href="start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> could be invoked multiple times concurrently due to HTTP pipeline nature

### Parameters

<code>input</code> - incoming channel

<code>output</code> - outgoing bytes channel

<code>timeout</code> - number of IDLE seconds after the connection will be closed

<code>handler</code> - to be invoked for every incoming request

**Return**
pipeline job

