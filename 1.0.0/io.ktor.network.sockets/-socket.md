---
title: Socket - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.network.sockets</a> / <a href="./-socket.html">Socket</a></div>

# Socket

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Socket</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-read-write-socket.html"><span class="identifier">ReadWriteSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-bound-socket/index.html"><span class="identifier">ABoundSocket</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-a-connected-socket/index.html"><span class="identifier">AConnectedSocket</span></a></code></div>

Represents a connected socket

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

<a href="-a-connected-socket/remote-address.html">remoteAddress</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">remoteAddress</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketAddress.html"><span class="identifier">SocketAddress</span></a></code></div>

Remote socket address. Could throw an exception if the peer is not yet connected or already disconnected.


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

<a href="../io.ktor.network.tls/tls.html">tls</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./-socket.md"><span class="identifier">Socket</span></a><span class="symbol">.</span><span class="identifier">tls</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/coroutineContext">coroutineContext</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/trustManager">trustManager</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/javax/net/ssl/X509TrustManager.html"><span class="identifier">X509TrustManager</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/randomAlgorithm">randomAlgorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"NativePRNGNonBlocking"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/cipherSuites">cipherSuites</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.network.tls/-cipher-suite/index.html"><span class="identifier">CipherSuite</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;CIOCipherSuites.SupportedSuites<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.tls$tls(io.ktor.network.sockets.Socket, , javax.net.ssl.X509TrustManager, kotlin.String, kotlin.collections.List((io.ktor.network.tls.CipherSuite)), kotlin.String)/serverName">serverName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="./-socket.md"><span class="identifier">Socket</span></a></code></div>

Make <a href="./-socket.md">Socket</a> connection secure with TLS.


</td>
</tr>
</tbody>
</table>
