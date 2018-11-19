---
title: io.ktor.network.sockets - 
layout: api
---



## Package io.ktor.network.sockets

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-a-bound-socket/index.html">ABoundSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ABoundSocket</span></code></div>

Represents a bound socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-connected-socket/index.html">AConnectedSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AConnectedSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represent a connected socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-readable/index.html">AReadable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AReadable</span></code></div>

Represent a readable socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-socket/index.html">ASocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ASocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">DisposableHandle</span></code></div>

Base type for all async sockets


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-writable/index.html">AWritable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">AWritable</span></code></div>

Represents a writable socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-acceptable/index.html">Acceptable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Acceptable</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a></code></div>

Represents a socket source, for example server socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-bound-datagram-socket.html">BoundDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">BoundDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a bound datagram socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-configurable/index.html">Configurable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Configurable</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="-configurable/index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Represent configurable socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-connected-datagram-socket.html">ConnectedDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConnectedDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a connected datagram socket.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-datagram/index.html">Datagram</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Datagram</span></code></div>

UDP datagram with <a href="-datagram/packet.html">packet</a> content targeted to <a href="-datagram/address.html">address</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-datagram-read-channel/index.html">DatagramReadChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramReadChannel</span></code></div>

A channel for receiving datagrams


</td>
</tr>
<tr>
<td markdown="1">

<a href="-datagram-read-write-channel.html">DatagramReadWriteChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramReadWriteChannel</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-datagram-read-channel/index.html"><span class="identifier">DatagramReadChannel</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-datagram-write-channel/index.html"><span class="identifier">DatagramWriteChannel</span></a></code></div>

A channel for sending and receiving datagrams


</td>
</tr>
<tr>
<td markdown="1">

<a href="-datagram-write-channel/index.html">DatagramWriteChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">DatagramWriteChannel</span></code></div>

A channel for sending datagrams


</td>
</tr>
<tr>
<td markdown="1">

<a href="-read-write-socket.html">ReadWriteSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ReadWriteSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><a href="-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><a href="-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represents both readable and writable socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-server-socket.html">ServerSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ServerSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-acceptable/index.html"><span class="identifier">Acceptable</span></a><span class="symbol">&lt;</span><a href="-socket.html"><span class="identifier">Socket</span></a><span class="symbol">&gt;</span></code></div>

Represents a server bound socket ready for accepting connections


</td>
</tr>
<tr>
<td markdown="1">

<a href="-socket.html">Socket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Socket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a></code></div>

Represents a connected socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="-socket-builder/index.html">SocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="-socket-builder/index.html"><span class="identifier">SocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

Socket builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-socket-options/index.html">SocketOptions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SocketOptions</span></code></div>

Socket options builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-tcp-socket-builder/index.html">TcpSocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TcpSocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="-tcp-socket-builder/index.html"><span class="identifier">TcpSocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

TCP socket builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-d-p-socket-builder/index.html">UDPSocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UDPSocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="-u-d-p-socket-builder/index.html"><span class="identifier">UDPSocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

UDP socket builder


</td>
</tr>
</tbody>
</table>

### Properties

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

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="a-socket.html">aSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">aSocket</span></s><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-socket-builder/index.html"><span class="identifier">SocketBuilder</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">aSocket</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets$aSocket(io.ktor.network.selector.SelectorManager)/selector">selector</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.network.selector/-selector-manager/index.html"><span class="identifier">SelectorManager</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-socket-builder/index.html"><span class="identifier">SocketBuilder</span></a></code></div>

Start building a socket


</td>
</tr>
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
<tr>
<td markdown="1">

<a href="tcp-no-delay.html">tcpNoDelay</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="identifier">tcpNoDelay</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="tcp-no-delay.html#T"><span class="identifier">T</span></a></code></div>

Set TCP_NODELAY socket option to disable the Nagle algorithm.


</td>
</tr>
</tbody>
</table>
