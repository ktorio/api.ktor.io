---
title: io.ktor.http.cio.websocket.kotlinx.coroutines.CoroutineScope - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.websocket</a> / <a href="./index.html">kotlinx.coroutines.CoroutineScope</a></div>

### Extensions for kotlinx.coroutines.CoroutineScope

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="pinger.html">pinger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">pinger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/index.html"><span class="identifier">Frame</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</span><span class="symbol">:</span>&nbsp;<span class="identifier">Duration</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span></code></div>

Launch pinger coroutine on <a href="#">CoroutineScope</a> that is sending ping every specified <a href="pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/period">period</a> to <a href="pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel,
waiting for and verifying client's pong frames. It is also handling <a href="pinger.html#io.ktor.http.cio.websocket$pinger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame)), java.time.Duration, java.time.Duration, kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/timeout">timeout</a> and sending timeout close frame


</td>
</tr>
<tr>
<td markdown="1">

<a href="ponger.html">ponger</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">ponger</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</span><span class="symbol">:</span>&nbsp;<span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/-pong/index.html"><span class="identifier">Pong</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;KtorDefaultPool<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-frame/-ping/index.html"><span class="identifier">Ping</span></a><span class="symbol">&gt;</span></code></div>

Launch a ponger actor job on the <a href="#">CoroutineScope</a> sending pongs to <a href="ponger.html#io.ktor.http.cio.websocket$ponger(kotlinx.coroutines.CoroutineScope, kotlinx.coroutines.channels.SendChannel((io.ktor.http.cio.websocket.Frame.Pong)), kotlinx.io.pool.ObjectPool((java.nio.ByteBuffer)))/outgoing">outgoing</a> channel.
It is acting for every client's ping frame and replying with corresponding pong


</td>
</tr>
</tbody>
</table>
