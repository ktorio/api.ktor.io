---
title: RawWebSocket.flush - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">RawWebSocket</a> / <a href="./flush.html">flush</a></div>

# flush

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">flush</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../-web-socket-session/flush.html">WebSocketSession.flush</a>

Flush all outstanding messages and suspend until all earlier sent messages will be written. Could be called
at any time even after close. May return immediately if the connection is already terminated.
However it may also fail with an exception (or cancellation) at any point due to session failure.
Please note that <a href="./flush.md">flush</a> doesn't guarantee that frames were actually delivered.

