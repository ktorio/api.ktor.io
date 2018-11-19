---
title: ReadWriteSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.network.sockets</a> / <a href="./-read-write-socket.html">ReadWriteSocket</a></div>

# ReadWriteSocket

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ReadWriteSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><a href="-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><a href="-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represents both readable and writable socket

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-a-socket/socket-context.html">socketContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">socketContext</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Represents a socket lifetime, completes at socket closure


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-a-readable/attach-for-reading.html">attachForReading</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForReading</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">WriterJob</span></code></div>

Attach <a href="-a-readable/attach-for-reading.html#io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for reading so incoming bytes appears in the attached channel.
Only one channel could be attached


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-writable/attach-for-writing.html">attachForWriting</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForWriting</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReaderJob</span></code></div>

Attach <a href="-a-writable/attach-for-writing.html#io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for writing so bytes written to the attached channel will be transmitted
Only one channel could be attached


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-socket/dispose.html">dispose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">dispose</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="is-closed.html">isClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">isClosed</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the socket is closed


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="await-closed.html">awaitClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">awaitClosed</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Await until socket close


</td>
</tr>
<tr>
<td markdown="1">

<a href="open-read-channel.html">openReadChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">.</span><span class="identifier">openReadChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Open a read channel, could be done only once


</td>
</tr>
<tr>
<td markdown="1">

<a href="open-write-channel.html">openWriteChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-a-writable/index.html"><span class="identifier">AWritable</span></a><span class="symbol">.</span><span class="identifier">openWriteChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets$openWriteChannel(io.ktor.network.sockets.AWritable, kotlin.Boolean)/autoFlush">autoFlush</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

Open a write channel, could be opened only once


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-connected-datagram-socket.html">ConnectedDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConnectedDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./-read-write-socket.md"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a connected datagram socket.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-socket.html">Socket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Socket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./-read-write-socket.md"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a></code></div>

Represents a connected socket


</td>
</tr>
</tbody>
</table>
