---
title: DatagramReadChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">DatagramReadChannel</a></div>

# DatagramReadChannel

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramReadChannel</span></code></div>

A channel for receiving datagrams

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="incoming.html">incoming</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">incoming</span><span class="symbol">: </span><span class="identifier">ReceiveChannel</span><span class="symbol">&lt;</span><a href="../-datagram/index.html"><span class="identifier">Datagram</span></a><span class="symbol">&gt;</span></code></div>

Incoming datagrams channel


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-datagram/index.html"><span class="identifier">Datagram</span></a></code></div>

Receive a datagram


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-datagram-read-write-channel.html">DatagramReadWriteChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramReadWriteChannel</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">DatagramReadChannel</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-write-channel/index.html"><span class="identifier">DatagramWriteChannel</span></a></code></div>

A channel for sending and receiving datagrams


</td>
</tr>
</tbody>
</table>
