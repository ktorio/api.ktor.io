---
title: WebSocketWriter.send - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">WebSocketWriter</a> / <a href="./send.html">send</a></div>

# send

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketWriter$send(io.ktor.http.cio.websocket.Frame)/frame">frame</span><span class="symbol">:</span>&nbsp;<a href="../-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Send a frame and write it and all outstanding frames in the queue

