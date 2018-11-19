---
title: io.ktor.http.cio.internals - 
layout: api
---



## Package io.ktor.http.cio.internals

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-char-buffer-builder/index.html">CharBufferBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CharBufferBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-mutable-range/index.html">MutableRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MutableRange</span></code></div>

Represents a text range with mutable bounds


</td>
</tr>
<tr>
<td markdown="1">

<a href="-weak-timeout-queue/index.html">WeakTimeoutQueue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WeakTimeoutQueue</span></code></div>

It provides ability to cancel jobs and schedule coroutine with timeout. Unlike regular withTimeout
this implementation is never scheduling timer tasks but only checks for current time. This makes timeout measurement
much cheaper and doesn't require any watchdog thread.


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-timeout-cancellation-exception/index.html">TimeoutCancellationException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TimeoutCancellationException</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CancellationException</span></code></div>

Thrown when a timeout elapsed


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-c-h-a-r_-b-u-f-f-e-r_-b-y-t-e-s.html">CHAR_BUFFER_BYTES</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">CHAR_BUFFER_BYTES</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Char buffer size in bytes used in internal buffer pool


</td>
</tr>
<tr>
<td markdown="1">

<a href="-c-h-a-r_-b-u-f-f-e-r_-l-e-n-g-t-h.html">CHAR_BUFFER_LENGTH</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">CHAR_BUFFER_LENGTH</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Number of characters that a buffer from the pool can store


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-byte-buffer-pool.html">DefaultByteBufferPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">DefaultByteBufferPool</span><span class="symbol">: </span><span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>
