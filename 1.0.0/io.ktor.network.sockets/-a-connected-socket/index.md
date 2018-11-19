---
title: AConnectedSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">AConnectedSocket</a></div>

# AConnectedSocket

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AConnectedSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represent a connected socket

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="remote-address.html">remoteAddress</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">remoteAddress</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a></code></div>

Remote socket address. Could throw an exception if the peer is not yet connected or already disconnected.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-a-writable/attach-for-writing.html">attachForWriting</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForWriting</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReaderJob</span></code></div>

Attach <a href="../-a-writable/attach-for-writing.html#io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for writing so bytes written to the attached channel will be transmitted
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

<a href="../open-write-channel.html">openWriteChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../-a-writable/index.html"><span class="identifier">AWritable</span></a><span class="symbol">.</span><span class="identifier">openWriteChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets$openWriteChannel(io.ktor.network.sockets.AWritable, kotlin.Boolean)/autoFlush">autoFlush</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

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

<a href="../-connected-datagram-socket.html">ConnectedDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConnectedDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">AConnectedSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a connected datagram socket.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-socket.html">Socket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Socket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">AConnectedSocket</span></a></code></div>

Represents a connected socket


</td>
</tr>
</tbody>
</table>
