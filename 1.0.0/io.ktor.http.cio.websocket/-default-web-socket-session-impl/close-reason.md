---
title: DefaultWebSocketSessionImpl.closeReason - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">DefaultWebSocketSessionImpl</a> / <a href="./close-reason.html">closeReason</a></div>

# closeReason

<div class="signature"><code><span class="keyword">val </span><span class="identifier">closeReason</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="../-close-reason/index.html"><span class="identifier">CloseReason</span></a><span class="symbol">?</span><span class="symbol">&gt;</span></code></div>

Overrides <a href="../-default-web-socket-session/close-reason.html">DefaultWebSocketSession.closeReason</a>

A close reason for this session. It could be <code>null</code> if a session is terminated with no close reason
(for example due to connection failure).

