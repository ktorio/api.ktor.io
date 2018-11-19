---
title: send - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio.websocket</a> / <a href="./send.html">send</a></div>

# send

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a text frame for sending with the specified <a href="send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.String)/content">content</a>.

May suspend if the outgoing queue is full, and throw an exception if the channel is already closed.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueues a final binary frame for sending with the specified <a href="send.html#io.ktor.http.cio.websocket$send(io.ktor.http.cio.websocket.WebSocketSession, kotlin.ByteArray)/content">content</a>.

May suspend if the outgoing queue is full, and throw an exception if the channel is already closed.

</div>
