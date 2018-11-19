---
title: Frame.Pong.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">Frame</a> / <a href="index.html">Pong</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Pong</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Pong$<init>(java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Pong</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Pong$<init>(kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">Pong</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Pong$<init>(java.nio.ByteBuffer, kotlinx.coroutines.DisposableHandle)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Pong$<init>(java.nio.ByteBuffer, kotlinx.coroutines.DisposableHandle)/disposableHandle">disposableHandle</span><span class="symbol">:</span>&nbsp;<span class="identifier">DisposableHandle</span><span class="symbol">)</span></code></div>

Represents a low-level pong frame. Should be sent in reply to a <a href="../-ping/index.html">Ping</a> frame.
Usually there is no need to send/handle it unless you have a RAW web socket session.

</div>
