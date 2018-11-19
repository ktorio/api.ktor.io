---
title: DatagramWriteChannel - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">DatagramWriteChannel</a></div>

# DatagramWriteChannel

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramWriteChannel</span></code></div>

A channel for sending datagrams

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="outgoing.html">outgoing</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">outgoing</span><span class="symbol">: </span><span class="identifier">SendChannel</span><span class="symbol">&lt;</span><a href="../-datagram/index.html"><span class="identifier">Datagram</span></a><span class="symbol">&gt;</span></code></div>

Datagram outgoing channel


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="send.html">send</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">send</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.DatagramWriteChannel$send(io.ktor.network.sockets.Datagram)/datagram">datagram</span><span class="symbol">:</span>&nbsp;<a href="../-datagram/index.html"><span class="identifier">Datagram</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Send datagram


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
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramReadWriteChannel</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-read-channel/index.html"><span class="identifier">DatagramReadChannel</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">DatagramWriteChannel</span></a></code></div>

A channel for sending and receiving datagrams


</td>
</tr>
</tbody>
</table>
