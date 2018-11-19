---
title: io.ktor.server.netty - 
layout: api
---



## Package io.ktor.server.netty

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-development-engine/index.html">DevelopmentEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><s><span class="identifier">DevelopmentEngine</span></s></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-engine-main/index.html">EngineMain</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">EngineMain</span></code></div>

Netty development engine


</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty/index.html">Netty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Netty</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-application-engine-factory/index.html"><span class="identifier">ApplicationEngineFactory</span></a><span class="symbol">&lt;</span><a href="-netty-application-engine/index.html"><span class="identifier">NettyApplicationEngine</span></a><span class="symbol">,</span>&nbsp;<a href="-netty-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">&gt;</span></code></div>

An <a href="../io.ktor.server.engine/-application-engine-factory/index.html">ApplicationEngineFactory</a> providing a Netty-based <a href="../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-application-call/index.html">NettyApplicationCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NettyApplicationCall</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-base-application-call/index.html"><span class="identifier">BaseApplicationCall</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-application-engine/index.html">NettyApplicationEngine</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyApplicationEngine</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.server.engine/-base-application-engine/index.html"><span class="identifier">BaseApplicationEngine</span></a></code></div>

<a href="../io.ktor.server.engine/-application-engine/index.html">ApplicationEngine</a> implementation for running in a standalone Netty


</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-application-request/index.html">NettyApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NettyApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-request/index.html"><span class="identifier">BaseApplicationRequest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-application-request-headers/index.html">NettyApplicationRequestHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyApplicationRequestHeaders</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-application-response/index.html">NettyApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NettyApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.server.engine/-base-application-response/index.html"><span class="identifier">BaseApplicationResponse</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-call-pool/index.html">NettyCallPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyCallPool</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">NioEventLoopGroup</span></code></div>

<a href="#">NioEventLoopGroup</a> for processing <a href="../io.ktor.application/-application-call/index.html">ApplicationCall</a> instances


</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-connection-pool/index.html">NettyConnectionPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyConnectionPool</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">NioEventLoopGroup</span></code></div>

<a href="#">NioEventLoopGroup</a> for accepting connections


</td>
</tr>
<tr>
<td markdown="1">

<a href="-netty-worker-pool/index.html">NettyWorkerPool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NettyWorkerPool</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">NioEventLoopGroup</span></code></div>

<a href="#">NioEventLoopGroup</a> for processing incoming requests and doing engine's internal work


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="io.netty.util.concurrent.-future/index.html">io.netty.util.concurrent.Future</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>
