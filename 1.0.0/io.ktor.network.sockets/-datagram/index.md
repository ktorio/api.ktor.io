---
title: Datagram - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">Datagram</a></div>

# Datagram

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Datagram</span></code></div>

UDP datagram with <a href="packet.html">packet</a> content targeted to <a href="address.html">address</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Datagram</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.Datagram$<init>(kotlinx.io.core.ByteReadPacket, java.net.SocketAddress)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.sockets.Datagram$<init>(kotlinx.io.core.ByteReadPacket, java.net.SocketAddress)/address">address</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">)</span></code></div>

UDP datagram with <a href="-init-.html#io.ktor.network.sockets.Datagram$<init>(kotlinx.io.core.ByteReadPacket, java.net.SocketAddress)/packet">packet</a> content targeted to <a href="-init-.html#io.ktor.network.sockets.Datagram$<init>(kotlinx.io.core.ByteReadPacket, java.net.SocketAddress)/address">address</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="address.html">address</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">address</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a></code></div>

to send to


</td>
</tr>
<tr>
<td markdown="1">

<a href="packet.html">packet</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">packet</span><span class="symbol">: </span><span class="identifier">ByteReadPacket</span></code></div>

content


</td>
</tr>
</tbody>
</table>
