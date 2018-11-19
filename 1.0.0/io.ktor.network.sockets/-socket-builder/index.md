---
title: SocketBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">SocketBuilder</a></div>

# SocketBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">SocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

Socket builder

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

<a href="tcp.html">tcp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">tcp</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-tcp-socket-builder/index.html"><span class="identifier">TcpSocketBuilder</span></a></code></div>

Build TCP socket


</td>
</tr>
<tr>
<td markdown="1">

<a href="udp.html">udp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">udp</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-u-d-p-socket-builder/index.html"><span class="identifier">UDPSocketBuilder</span></a></code></div>

Build UDP socket


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
