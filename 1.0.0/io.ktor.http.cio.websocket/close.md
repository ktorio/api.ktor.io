---
title: close - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio.websocket</a> / <a href="./close.html">close</a></div>

# close

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">.</span><span class="identifier">close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</span><span class="symbol">:</span>&nbsp;<a href="-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Send a close frame with the specified <a href="close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a>. May suspend if outgoing channel is full or
may throw an exception if it is already closed. The specified <a href="close.html#io.ktor.http.cio.websocket$close(io.ktor.http.cio.websocket.WebSocketSession, io.ktor.http.cio.websocket.CloseReason)/reason">reason</a> could be ignored if there was already
close frame sent (for example in reply to a peer close frame).

