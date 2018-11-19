---
title: WebSocketSession.close - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketSession</a> / <a href="./close.html">close</a></div>

# close

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">close</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketSession$close(kotlin.Throwable)/cause">cause</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Close session with the specified <a href="close.html#io.ktor.http.cio.websocket.WebSocketSession$close(kotlin.Throwable)/cause">cause</a> or with no reason if <code>null</code>

