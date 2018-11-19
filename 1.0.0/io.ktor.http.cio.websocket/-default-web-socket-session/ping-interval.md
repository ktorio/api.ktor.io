---
title: DefaultWebSocketSession.pingInterval - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">DefaultWebSocketSession</a> / <a href="./ping-interval.html">pingInterval</a></div>

# pingInterval

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">var </span><span class="identifier">pingInterval</span><span class="symbol">: </span><span class="identifier">Duration</span><span class="symbol">?</span></code></div>

Ping interval or <code>null</code> to disable pinger. Please note that pongs will be handled despite of this setting.

