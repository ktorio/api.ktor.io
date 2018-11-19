---
title: ponger - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="index.html">kotlinx.coroutines.CoroutineScope</a> / <a href="./ponger.html">ponger</a></div>

# ponger

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">ponger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

Launch a ponger actor job on the <a href="#">CoroutineScope</a> sending pongs to <a href="ponger.html#io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel.
It is acting for every client's ping frame and replying with corresponding pong

