---
title: TcpSocketBuilder.bind - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="index.html">TcpSocketBuilder</a> / <a href="./bind.html">bind</a></div>

# bind

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">bind</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.TcpSocketBuilder$bind(kotlin.String, kotlin.Int)/hostname">hostname</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"0.0.0.0"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.sockets.TcpSocketBuilder$bind(kotlin.String, kotlin.Int)/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-server-socket.html"><span class="identifier">ServerSocket</span></a></code></div>

Bind server socket at <a href="bind.html#io.ktor.network.sockets.TcpSocketBuilder$bind(kotlin.String, kotlin.Int)/port">port</a> to listen to <a href="bind.html#io.ktor.network.sockets.TcpSocketBuilder$bind(kotlin.String, kotlin.Int)/hostname">hostname</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">bind</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.TcpSocketBuilder$bind(java.net.SocketAddress)/localAddress">localAddress</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span><span class="symbol">: </span><a href="../-server-socket.html"><span class="identifier">ServerSocket</span></a></code></div>

Bind server socket to listen to <a href="bind.html#io.ktor.network.sockets.TcpSocketBuilder$bind(java.net.SocketAddress)/localAddress">localAddress</a>

</div>
