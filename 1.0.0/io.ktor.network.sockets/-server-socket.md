---
title: ServerSocket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.network.sockets</a> / <a href="./-server-socket.html">ServerSocket</a></div>

# ServerSocket

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ServerSocket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-acceptable/index.html"><span class="identifier">Acceptable</span></a><span class="symbol">&lt;</span><a href="-socket.html"><span class="identifier">Socket</span></a><span class="symbol">&gt;</span></code></div>

Represents a server bound socket ready for accepting connections

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-a-bound-socket/local-address.html">localAddress</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">localAddress</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a></code></div>

Local socket address. Could throw an exception if no address bound yet.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-socket/socket-context.html">socketContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">socketContext</span><span class="symbol">: </span><span class="identifier">Deferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Represents a socket lifetime, completes at socket closure


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-acceptable/accept.html">accept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">accept</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-acceptable/index.html#S"><span class="identifier">S</span></a></code></div>

accepts socket connection or suspends if none yet available.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-a-socket/dispose.html">dispose</a>


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

<a href="is-closed.html">isClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">isClosed</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

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

<a href="await-closed.html">awaitClosed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-a-socket/index.html"><span class="identifier">ASocket</span></a><span class="symbol">.</span><span class="identifier">awaitClosed</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Await until socket close


</td>
</tr>
</tbody>
</table>
