---
title: WebSocketSession.send - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketSession</a> / <a href="./send.html">send</a></div>

# send

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketSession$send(io.ktor.http.cio.websocket.Frame)/frame">frame</span><span class="symbol">:</span>&nbsp;<a href="../-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enqueue frame, may suspend if outgoing queue is full. May throw an exception if outgoing channel is already
closed so it is impossible to transfer any message. Frames that were sent after close frame could be silently
ignored. Please note that close frame could be sent automatically in reply to a peer close frame unless it is
raw websocket session.

