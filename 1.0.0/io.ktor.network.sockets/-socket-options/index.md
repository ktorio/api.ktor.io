---
title: SocketOptions - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.sockets</a> / <a href="./index.html">SocketOptions</a></div>

# SocketOptions

<div class="signature"><code><span class="keyword">class </span><span class="identifier">SocketOptions</span></code></div>

Socket options builder

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="copy.html">copy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">copy</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">SocketOptions</span></a></code></div>

Copy options


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.SocketOptions$get(java.net.SocketOption((io.ktor.network.sockets.SocketOptions.get.T)))/option">option</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketOption.html"><span class="identifier">SocketOption</span></a><span class="symbol">&lt;</span><a href="get.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="get.html#T"><span class="identifier">T</span></a></code></div>

Get particular socket <a href="get.html#io.ktor.network.sockets.SocketOptions$get(java.net.SocketOption((io.ktor.network.sockets.SocketOptions.get.T)))/option">option</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="list.html">list</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">list</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketOption.html"><span class="identifier">SocketOption</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

List all socket option values


</td>
</tr>
<tr>
<td markdown="1">

<a href="set.html">set</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.sockets.SocketOptions$set(java.net.SocketOption((io.ktor.network.sockets.SocketOptions.set.T)), io.ktor.network.sockets.SocketOptions.set.T)/option">option</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/SocketOption.html"><span class="identifier">SocketOption</span></a><span class="symbol">&lt;</span><a href="set.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.sockets.SocketOptions$set(java.net.SocketOption((io.ktor.network.sockets.SocketOptions.set.T)), io.ktor.network.sockets.SocketOptions.set.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="set.html#T"><span class="identifier">T</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set particular socket <a href="set.html#io.ktor.network.sockets.SocketOptions$set(java.net.SocketOption((io.ktor.network.sockets.SocketOptions.set.T)), io.ktor.network.sockets.SocketOptions.set.T)/value">option</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-empty.html">Empty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">Empty</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">SocketOptions</span></a></code></div>

Default socket options


</td>
</tr>
</tbody>
</table>
