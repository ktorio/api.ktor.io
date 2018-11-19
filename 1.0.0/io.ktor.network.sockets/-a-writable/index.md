---
title: AWritable - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">AWritable</a></div>

# AWritable

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AWritable</span></code></div>

Represents a writable socket

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="attach-for-writing.html">attachForWriting</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">attachForWriting</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteChannel</span><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ReaderJob</span></code></div>

Attach <a href="attach-for-writing.html#io.ktor.network.sockets.AWritable$attachForWriting(kotlinx.coroutines.io.ByteChannel)/channel">channel</a> for writing so bytes written to the attached channel will be transmitted
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
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">AWritable</span></a><span class="symbol">.</span><span class="identifier">openWriteChannel</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets$openWriteChannel(io.ktor.network.sockets.AWritable, kotlin.Boolean)/autoFlush">autoFlush</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteWriteChannel</span></code></div>

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

<a href="../-a-connected-socket/index.html">AConnectedSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AConnectedSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">AWritable</span></a></code></div>

Represent a connected socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-read-write-socket.html">ReadWriteSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ReadWriteSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><a href="../-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><a href="./index.md"><span class="identifier">AWritable</span></a></code></div>

Represents both readable and writable socket


</td>
</tr>
</tbody>
</table>
