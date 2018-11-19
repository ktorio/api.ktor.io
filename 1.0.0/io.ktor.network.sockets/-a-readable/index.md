---
title: AReadable - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">AReadable</a></div>

# AReadable

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AReadable</span></code></div>

Represent a readable socket

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="attach-for-reading.html">attachForReading</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForReading</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">WriterJob</span></code></div>

Attach <a href="attach-for-reading.html#io.ktor.network.sockets.AReadable$attachForReading(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for reading so incoming bytes appears in the attached channel.
Only one channel could be attached


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../open-read-channel.html">openReadChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">AReadable</span></a><span class="symbol">.</span><span class="identifier">openReadChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Open a read channel, could be done only once


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-bound-datagram-socket.html">BoundDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">BoundDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">AReadable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a bound datagram socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-read-write-socket.html">ReadWriteSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ReadWriteSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><a href="./index.md"><span class="identifier">AReadable</span></a><span class="symbol">, </span><a href="../-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represents both readable and writable socket


</td>
</tr>
</tbody>
</table>
