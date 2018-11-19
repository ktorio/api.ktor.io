---
title: DefaultClientWebSocketSession.masking - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.websocket</a> / <a href="index.html">DefaultClientWebSocketSession</a> / <a href="./masking.html">masking</a></div>

# masking

<div class="signature"><code><span class="keyword">var </span><span class="identifier">masking</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Overrides <a href="../../io.ktor.http.cio.websocket/-web-socket-session/masking.html">WebSocketSession.masking</a>

Enable or disable masking output messages by a random xor mask.
Please note that changing this flag on the fly could be applied to the messages already sent (enqueued earlier)
as the sending pipeline works asynchronously

