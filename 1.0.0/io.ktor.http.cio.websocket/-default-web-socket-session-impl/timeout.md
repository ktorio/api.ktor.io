---
title: DefaultWebSocketSessionImpl.timeout - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">DefaultWebSocketSessionImpl</a> / <a href="./timeout.html">timeout</a></div>

# timeout

<div class="signature"><code><span class="keyword">var </span><span class="identifier">timeout</span><span class="symbol">: </span><span class="identifier">Duration</span></code></div>

Overrides <a href="../-default-web-socket-session/timeout.html">DefaultWebSocketSession.timeout</a>

A timeout to wait for pong reply to ping otherwise the session will be terminated immediately.
It doesn't have any effect if <a href="ping-interval.html">pingInterval</a> is <code>null</code> (pinger is disabled).

