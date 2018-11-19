---
title: WebSocketWriter.outgoing - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketWriter</a> / <a href="./outgoing.html">outgoing</a></div>

# outgoing

<div class="signature"><code><span class="keyword">val </span><span class="identifier">outgoing</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span></code></div>

Channel for sending Websocket's <a href="../-frame/index.html">Frame</a> that will be serialized and written to <a href="../../io.ktor.util.cio/java.io.-file/write-channel.html">writeChannel</a>.

