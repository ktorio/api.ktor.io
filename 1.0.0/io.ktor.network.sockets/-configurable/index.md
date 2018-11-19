---
title: Configurable - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">Configurable</a></div>

# Configurable

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Configurable</span><span class="symbol">&lt;</span><span class="keyword">out</span>&nbsp;<span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Represent configurable socket

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="options.html">options</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">var </span><span class="identifier">options</span><span class="symbol">: </span><a href="../-socket-options/index.html"><span class="identifier">SocketOptions</span></a></code></div>

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

<a href="configure.html">configure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">configure</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.Configurable$configure(kotlin.Function1((io.ktor.network.sockets.SocketOptions, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../-socket-options/index.html"><span class="identifier">SocketOptions</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#T"><span class="identifier">T</span></a></code></div>

Configure socket options in <a href="configure.html#io.ktor.network.sockets.Configurable$configure(kotlin.Function1((io.ktor.network.sockets.SocketOptions, kotlin.Unit)))/block">block</a> function


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../tcp-no-delay.html">tcpNoDelay</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="../tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="../tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="identifier">tcpNoDelay</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../tcp-no-delay.html#T"><span class="identifier">T</span></a></code></div>

Set TCP_NODELAY socket option to disable the Nagle algorithm.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-socket-builder/index.html">SocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="../-socket-builder/index.html"><span class="identifier">SocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

Socket builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-tcp-socket-builder/index.html">TcpSocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TcpSocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="../-tcp-socket-builder/index.html"><span class="identifier">TcpSocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

TCP socket builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-u-d-p-socket-builder/index.html">UDPSocketBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UDPSocketBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="../-u-d-p-socket-builder/index.html"><span class="identifier">UDPSocketBuilder</span></a><span class="symbol">&gt;</span></code></div>

UDP socket builder


</td>
</tr>
</tbody>
</table>
