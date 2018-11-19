---
title: DefaultClientWebSocketSession - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.websocket</a> / <a href="./index.html">DefaultClientWebSocketSession</a></div>

# DefaultClientWebSocketSession

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultClientWebSocketSession</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-client-web-socket-session/index.html"><span class="identifier">ClientWebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.http.cio.websocket/-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DefaultClientWebSocketSession</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.websocket.DefaultClientWebSocketSession$<init>(io.ktor.client.call.HttpClientCall, io.ktor.http.cio.websocket.DefaultWebSocketSession)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.websocket.DefaultClientWebSocketSession$<init>(io.ktor.client.call.HttpClientCall, io.ktor.http.cio.websocket.DefaultWebSocketSession)/delegate">delegate</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.websocket/-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.client.call/-http-client-call/index.html"><span class="identifier">HttpClientCall</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="masking.html">masking</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">masking</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Enable or disable masking output messages by a random xor mask.
Please note that changing this flag on the fly could be applied to the messages already sent (enqueued earlier)
as the sending pipeline works asynchronously


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/close.html">close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.http.cio.websocket/-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.websocket/-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Send a close frame with the specified <a href="../../io.ktor.http.cio.websocket/close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a>. May suspend if outgoing channel is full or
may throw an exception if it is already closed. The specified <a href="../../io.ktor.http.cio.websocket/close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a> could be ignored if there was already
close frame sent (for example in reply to a peer close frame).


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/decode-chunked.html">decodeChunked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">decodeChunked</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$decodeChunked(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.cio/-decoder-job.html"><span class="identifier">DecoderJob</span></a></code></div>

Start a chunked stream decoder coroutine


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html">embeddedServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">TEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">, </span><span class="identifier">TConfiguration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span> <span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">embeddedServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TEngine"><span class="identifier">TEngine</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;80<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"0.0.0.0"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/watchPaths">watchPaths</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyList()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/parentCoroutineContext">parentCoroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;EmptyCoroutineContext<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TConfiguration"><span class="identifier">TConfiguration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/module">module</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application/index.html"><span class="identifier">Application</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#TEngine"><span class="identifier">TEngine</span></a></code></div>

Creates an embedded server with the given <a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/factory">factory</a>, listening on <a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/host">host</a>:<a href="../../io.ktor.server.engine/kotlinx.coroutines.-coroutine-scope/embedded-server.html#io.ktor.server.engine$embeddedServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.engine.ApplicationEngineFactory((io.ktor.server.engine.embeddedServer.TEngine, io.ktor.server.engine.embeddedServer.TConfiguration)), kotlin.Int, kotlin.String, kotlin.collections.List((kotlin.String)), , kotlin.Function1((io.ktor.server.engine.embeddedServer.TConfiguration, kotlin.Unit)), kotlin.Function1((io.ktor.application.Application, kotlin.Unit)))/port">port</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html">httpServer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">httpServer</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.server.cio/-http-server-settings/index.html"><span class="identifier">HttpServerSettings</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.server.cio/-http-server/index.html"><span class="identifier">HttpServer</span></a></code></div>

Start an http server with <a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/settings">settings</a> invoking <a href="../../io.ktor.server.cio/kotlinx.coroutines.-coroutine-scope/http-server.html#io.ktor.server.cio$httpServer(kotlinx.coroutines.CoroutineScope, io.ktor.server.cio.HttpServerSettings, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/parse-multipart.html">parseMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, io.ktor.http.cio.HttpHeadersMap)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-headers-map/index.html"><span class="identifier">HttpHeadersMap</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlin.CharSequence, kotlin.Long)/contentLength">contentLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">parseMultipart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/boundaryPrefixed">boundaryPrefixed</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$parseMultipart(kotlinx.coroutines.CoroutineScope, java.nio.ByteBuffer, kotlinx.coroutines.io.ByteReadChannel, kotlin.Long)/totalLength">totalLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio/-multipart-event/index.html"><span class="identifier">MultipartEvent</span></a><span class="symbol">&gt;</span></code></div>

Starts a multipart parser coroutine producing multipart events


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html">pinger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">pinger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span></code></div>

Launch pinger coroutine on <a href="#">CoroutineScope</a> that is sending ping every specified <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</a> to <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel,
waiting for and verifying client's pong frames. It is also handling <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</a> and sending timeout close frame


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/ponger.html">ponger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">ponger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../../io.ktor.http.cio.websocket/-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

Launch a ponger actor job on the <a href="#">CoroutineScope</a> sending pongs to <a href="../../io.ktor.http.cio.websocket/kotlinx.coroutines.-coroutine-scope/ponger.html#io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel.
It is acting for every client's ping frame and replying with corresponding pong


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/run.html">run</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.http.cio.websocket/-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">.</span><span class="identifier">run</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$run(io.ktor.http.cio.websocket.DefaultWebSocketSession, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.DefaultWebSocketSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="../../io.ktor.http.cio.websocket/-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio.websocket/send.html">send</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.http.cio.websocket/-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a text frame for sending with the specified <a href="../../io.ktor.http.cio.websocket/send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../../io.ktor.http.cio.websocket/-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a final binary frame for sending with the specified <a href="../../io.ktor.http.cio.websocket/send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html">startConnectionPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">startConnectionPipeline</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/input">input</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/output">output</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio.internals/-weak-timeout-queue/index.html"><span class="identifier">WeakTimeoutQueue</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.cio/-http-request-handler.html"><span class="identifier">HttpRequestHandler</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

Start connection HTTP pipeline invoking <a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> for every request.
Note that <a href="../../io.ktor.http.cio/kotlinx.coroutines.-coroutine-scope/start-connection-pipeline.html#io.ktor.http.cio$startConnectionPipeline(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, io.ktor.http.cio.internals.WeakTimeoutQueue, kotlin.SuspendFunction5((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.Request, kotlinx.coroutines.io.ByteReadChannel, kotlinx.coroutines.io.ByteWriteChannel, kotlinx.coroutines.CompletableDeferred((kotlin.Boolean)), kotlin.Unit)))/handler">handler</a> could be invoked multiple times concurrently due to HTTP pipeline nature


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/kotlinx.coroutines.-coroutine-scope/write-multiple-ranges.html">writeMultipleRanges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">writeMultipleRanges</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/channelProducer">channelProducer</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/ranges">ranges</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/boundary">boundary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Start multirange response writer coroutine


</td>
</tr>
</tbody>
</table>
