---
title: io.ktor.http.cio.websocket - 
layout: api
---



## Package io.ktor.http.cio.websocket

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-close-reason/index.html">CloseReason</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CloseReason</span></code></div>

Websocket close reason


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-web-socket-session/index.html">DefaultWebSocketSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DefaultWebSocketSession</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a></code></div>

Default websocket session with ping-pong and timeout processing and built-in <a href="-default-web-socket-session/close-reason.html">closeReason</a> population


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-web-socket-session-impl/index.html">DefaultWebSocketSessionImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultWebSocketSessionImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a></code></div>

Default web socket session implementation that handles ping-pongs, close sequence and frame fragmentation


</td>
</tr>
<tr>
<td markdown="1">

<a href="-frame/index.html">Frame</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">Frame</span></code></div>

A frame received or ready to be sent. It is not reusable and not thread-safe


</td>
</tr>
<tr>
<td markdown="1">

<a href="-frame-parser/index.html">FrameParser</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FrameParser</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-frame-type/index.html">FrameType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">FrameType</span></code></div>

Frame types enum


</td>
</tr>
<tr>
<td markdown="1">

<a href="-raw-web-socket/index.html">RawWebSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RawWebSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a></code></div>

Represents a RAW web socket session


</td>
</tr>
<tr>
<td markdown="1">

<a href="-serializer/index.html">Serializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Serializer</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-simple-frame-collector/index.html">SimpleFrameCollector</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SimpleFrameCollector</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-socket-reader/index.html">WebSocketReader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WebSocketReader</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Class that continuously reads a <a href="#">byteChannel</a> and
converts into Websocket <a href="-frame/index.html">Frame</a> exposing them in <a href="-web-socket-reader/incoming.html">incoming</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-socket-session/index.html">WebSocketSession</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">WebSocketSession</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Represents a web socket session between two peers


</td>
</tr>
<tr>
<td markdown="1">

<a href="-web-socket-writer/index.html">WebSocketWriter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WebSocketWriter</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineScope</span></code></div>

Class that processes written <a href="-web-socket-writer/outgoing.html">outgoing</a> Websocket <a href="-frame/index.html">Frame</a>,
serializes them and writes the bits into the <a href="#">writeChannel</a>.


</td>
</tr>
</tbody>
</table>

### Annotations

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-web-socket-internal-a-p-i/index.html">WebSocketInternalAPI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">WebSocketInternalAPI</span></code></div>

API marked with this annotation is internal and not intended to be used outside of ktor
It is not recommended to use it as it may be changed in the future without notice or
it may be too low-level so could damage your data.


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.-coroutine-scope/index.html">kotlinx.coroutines.CoroutineScope</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="close.html">close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</span><span class="symbol">:</span>&nbsp;<a href="-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Send a close frame with the specified <a href="close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a>. May suspend if outgoing channel is full or
may throw an exception if it is already closed. The specified <a href="close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a> could be ignored if there was already
close frame sent (for example in reply to a peer close frame).


</td>
</tr>
<tr>
<td markdown="1">

<a href="pinger.html">pinger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">pinger</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</span><span class="symbol">:</span>&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/out">out</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span></code></div>

Launch pinger coroutine on <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/coroutine-context.html">coroutineContext</a> websocket for <a href="pinger.html#io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</a> that is sending ping every specified <a href="pinger.html#io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</a>,
waiting for and verifying client's pong frames. It is also handling <a href="pinger.html#io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</a> and sending timeout close frame
to the dedicated <a href="pinger.html#io.ktor.http.cio.websocket$pinger(io.ktor.http.cio.websocket.WebSocketSession, java.time.Duration, java.time.Duration, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/out">out</a> channel in case of failure


</td>
</tr>
<tr>
<td markdown="1">

<a href="ponger.html">ponger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">ponger</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</span><span class="symbol">:</span>&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

Launch a ponger actor job on the <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/coroutine-context.html">coroutineContext</a> for websocket <a href="ponger.html#io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</a>.
It is acting for every client's ping frame and replying with corresponding pong


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-bytes.html">readBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">.</span><span class="identifier">readBytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Read binary content from a frame. For fragmented frames only returns this fragment.


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-reason.html">readReason</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-frame/-close/index.html"><span class="identifier">Close</span></a><span class="symbol">.</span><span class="identifier">readReason</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">?</span></code></div>

Read close reason from close frame or null if no close reason provided


</td>
</tr>
<tr>
<td markdown="1">

<a href="read-text.html">readText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-frame/-text/index.html"><span class="identifier">Text</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read text content from text frame. Shouldn't be used for fragmented frames: such frames need to be reassembled first


</td>
</tr>
<tr>
<td markdown="1">

<a href="run.html">run</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">.</span><span class="identifier">run</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$run(io.ktor.http.cio.websocket.DefaultWebSocketSession, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.DefaultWebSocketSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-default-web-socket-session/index.html"><span class="identifier">DefaultWebSocketSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="send.html">send</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a text frame for sending with the specified <a href="send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a final binary frame for sending with the specified <a href="send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="start.html">start</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-raw-web-socket/index.html"><span class="identifier">RawWebSocket</span></a><span class="symbol">.</span><span class="identifier">start</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$start(io.ktor.http.cio.websocket.RawWebSocket, kotlin.SuspendFunction1((io.ktor.http.cio.websocket.WebSocketSession, kotlin.Unit)))/handler">handler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
