---
title: io.ktor.network.util - 
layout: api
---



## Package io.ktor.network.util

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-i-o-coroutine-dispatcher/index.html">IOCoroutineDispatcher</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">IOCoroutineDispatcher</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><span class="identifier">Closeable</span></code></div>

Default ktor fixed size dispatcher for doing non-blocking I/O operations and selection


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-default-datagram-byte-buffer-pool.html">DefaultDatagramByteBufferPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">DefaultDatagramByteBufferPool</span><span class="symbol">: </span><span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

Byte buffer pool for UDP datagrams


</td>
</tr>
<tr>
<td markdown="1">

<a href="io-coroutine-dispatcher.html">ioCoroutineDispatcher</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">ioCoroutineDispatcher</span></s><span class="symbol">: </span><span class="identifier">CoroutineDispatcher</span></code></div>

The default I/O coroutine dispatcher


</td>
</tr>
<tr>
<td markdown="1">

<a href="io-thread-group.html">ioThreadGroup</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">ioThreadGroup</span></s><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/ThreadGroup.html"><span class="identifier">ThreadGroup</span></a></code></div>

</td>
</tr>
</tbody>
</table>
