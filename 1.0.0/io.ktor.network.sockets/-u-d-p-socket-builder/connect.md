---
title: UDPSocketBuilder.connect - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="index.html">UDPSocketBuilder</a> / <a href="./connect.html">connect</a></div>

# connect

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">connect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/remoteAddress">remoteAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/localAddress">localAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-connected-datagram-socket.html"><span class="identifier">ConnectedDatagramSocket</span></a></code></div>

Create a datagram socket to listen datagrams at <a href="connect.html#io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/localAddress">localAddress</a> and set to <a href="connect.html#io.ktor.network.sockets.UDPSocketBuilder$connect(java.net.SocketAddress, java.net.SocketAddress)/remoteAddress">remoteAddress</a>

