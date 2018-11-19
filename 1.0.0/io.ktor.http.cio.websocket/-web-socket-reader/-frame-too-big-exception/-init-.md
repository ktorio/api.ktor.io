---
title: WebSocketReader.FrameTooBigException.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">WebSocketReader</a> / <a href="index.html">FrameTooBigException</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">FrameTooBigException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.WebSocketReader.FrameTooBigException$<init>(kotlin.Long)/frameSize">frameSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span></code></div>

Raised when the frame is bigger than allowed in a current websocket session

### Parameters

<code>frameSize</code> - size of received or posted frame that is too big