---
title: io.ktor.util.cio - 
layout: api
---



## Package io.ktor.util.cio

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-byte-buffer-pool/index.html">ByteBufferPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ByteBufferPool</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">DefaultPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-noop-continuation/index.html">NoopContinuation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><s><span class="identifier">NoopContinuation</span></s></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-semaphore/index.html">Semaphore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Semaphore</span></code></div>

Asynchronous Semaphore.


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-channel-i-o-exception/index.html">ChannelIOException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ChannelIOException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/IOException.html"><span class="identifier">IOException</span></a></code></div>

An exception thrown when an IO error occurred during reading or writing to/from the underlying channel.
The typical error is "connection reset" and so on.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-channel-read-exception/index.html">ChannelReadException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ChannelReadException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-channel-i-o-exception/index.html"><span class="identifier">ChannelIOException</span></a></code></div>

An exception that is thrown when an IO error occurred during reading from the request channel.
Usually it happens when a remote client closed the connection.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-channel-write-exception/index.html">ChannelWriteException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ChannelWriteException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-channel-i-o-exception/index.html"><span class="identifier">ChannelIOException</span></a></code></div>

An exception that is thrown when an IO error occurred during writing to the destination channel.
Usually it happens when a remote client closed the connection.


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java.io.-file/index.html">java.io.File</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.nio.file.-path/index.html">java.nio.file.Path</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.io.-byte-read-channel/index.html">kotlinx.coroutines.io.ByteReadChannel</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.io.-byte-write-channel/index.html">kotlinx.coroutines.io.ByteWriteChannel</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-ktor-default-pool.html">KtorDefaultPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">KtorDefaultPool</span><span class="symbol">: </span><span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">&gt;</span></code></div>

The default ktor byte buffer pool


</td>
</tr>
</tbody>
</table>
