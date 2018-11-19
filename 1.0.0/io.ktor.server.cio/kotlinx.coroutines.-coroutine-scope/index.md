---
title: io.ktor.server.cio.kotlinx.coroutines.CoroutineScope - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.cio</a> / <a href="./index.html">kotlinx.coroutines.CoroutineScope</a></div>

### Extensions for kotlinx.coroutines.CoroutineScope

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="http-server.html">httpServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">httpServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="../-http-server-settings/index.html"><span class="identifier">HttpServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-http-server/index.html"><span class="identifier">HttpServer</span></a></code></div>

Start an http server with <a href="http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</a> invoking <a href="http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request


</td>
</tr>
</tbody>
</table>
