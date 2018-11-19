---
title: ASocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">ASocket</a></div>

# ASocket

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ASocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/Closeable.html"><span class="identifier">Closeable</span></a><span class="symbol">, </span><span class="identifier">DisposableHandle</span></code></div>

Base type for all async sockets

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="socket-context.html">socketContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">socketContext</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Represents a socket lifetime, completes at socket closure


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="dispose.html">dispose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">dispose</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../is-closed.html">isClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">isClosed</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the socket is closed


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../await-closed.html">awaitClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">awaitClosed</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Await until socket close


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-acceptable/index.html">Acceptable</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Acceptable</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a></code></div>

Represents a socket source, for example server socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-bound-datagram-socket.html">BoundDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">BoundDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a bound datagram socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-connected-datagram-socket.html">ConnectedDatagramSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConnectedDatagramSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-datagram-read-write-channel.html"><span class="identifier">DatagramReadWriteChannel</span></a></code></div>

Represents a connected datagram socket.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-read-write-socket.html">ReadWriteSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ReadWriteSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">, </span><a href="../-a-readable/index.html"><span class="identifier">AReadable</span></a><span class="symbol">, </span><a href="../-a-writable/index.html"><span class="identifier">AWritable</span></a></code></div>

Represents both readable and writable socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-server-socket.html">ServerSocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ServerSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-acceptable/index.html"><span class="identifier">Acceptable</span></a><span class="symbol">&lt;</span><a href="../-socket.html"><span class="identifier">Socket</span></a><span class="symbol">&gt;</span></code></div>

Represents a server bound socket ready for accepting connections


</td>
</tr>
</tbody>
</table>
