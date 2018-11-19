---
title: ponger - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.cio.websocket</a> / <a href="./ponger.html">ponger</a></div>

# ponger

<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">ponger</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</span><span class="symbol">:</span>&nbsp;<a href="-web-socket-session/index.html"><span class="identifier">WebSocketSession</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

**Deprecated:** Use ponger with CoroutineScope receiver

Launch a ponger actor job on the <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.coroutines/coroutine-context.html">coroutineContext</a> for websocket <a href="ponger.html#io.ktor.http.cio.websocket$ponger(io.ktor.http.cio.websocket.WebSocketSession, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/session">session</a>.
It is acting for every client's ping frame and replying with corresponding pong

