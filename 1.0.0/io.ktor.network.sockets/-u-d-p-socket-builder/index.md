---
title: UDPSocketBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">UDPSocketBuilder</a></div>

# UDPSocketBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">UDPSocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">UDPSocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

UDP socket builder

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">options</span><span class="symbol">: </span><a href="../-socket-options/index.html"><span class="identifier">SocketOptions</span></a></code></div>

Current socket options


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="bind.html">bind</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">bind</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.UDPSocketBuilder$bind(java.net.SocketAddress)/localAddress">localAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-bound-datagram-socket.html"><span class="identifier">BoundDatagramSocket</span></a></code></div>

Bind server socket to listen to <a href="bind.html#io.ktor.network.sockets.UDPSocketBuilder$bind(java.net.SocketAddress)/localAddress">localAddress</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="connect.html">connect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">connect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/remoteAddress">remoteAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/localAddress">localAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-connected-datagram-socket.html"><span class="identifier">ConnectedDatagramSocket</span></a></code></div>

Create a datagram socket to listen datagrams at <a href="connect.html#io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/localAddress">localAddress</a> and set to <a href="connect.html#io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/remoteAddress">remoteAddress</a>


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-configurable/configure.html">configure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">configure</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.Configurable$configure(kotlin.Function1((io.ktor.network.sockets.SocketOptions, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-socket-options/index.html"><span class="identifier">SocketOptions</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-configurable/index.html#T"><span class="identifier">T</span></a></code></div>

Configure socket options in <a href="../-configurable/configure.html#io.ktor.network.sockets.Configurable$configure(kotlin.Function1((io.ktor.network.sockets.SocketOptions, kotlin.Unit)))/block">block</a> function


</td>
</tr>
</tbody>
</table>
