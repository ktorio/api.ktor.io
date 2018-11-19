---
title: WebSocketSession.outgoing - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketSession</a> / <a href="./outgoing.html">outgoing</a></div>

# outgoing

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">outgoing</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span></code></div>

Outgoing frames channel. It could have limited capacity so sending too much frames may lead to suspension at
corresponding send invocations. It also may suspend if a peer doesn't read frames for some reason.

