---
title: NettyApplicationEngine.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.server.netty</a> / <a href="../index.html">NettyApplicationEngine</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.server.engine/-base-application-engine/-configuration/index.html"><span class="identifier">Configuration</span></a></code></div>

Configuration for the <a href="../index.html">NettyApplicationEngine</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration for the <a href="../index.html">NettyApplicationEngine</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="configure-bootstrap.html">configureBootstrap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">configureBootstrap</span><span class="symbol">: </span><span class="identifier">ServerBootstrap</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

User-provided function to configure Netty's <a href="#">ServerBootstrap</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="http-server-codec.html">httpServerCodec</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">httpServerCodec</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">HttpServerCodec</span></code></div>

User-provided function to configure Netty's <a href="#">HttpServerCodec</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="request-queue-limit.html">requestQueueLimit</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">requestQueueLimit</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Size of the queue to store <a href="../../../io.ktor.application/-application-call/index.html">ApplicationCall</a> instances that cannot be immediately processed


</td>
</tr>
<tr>
<td markdown="1">

<a href="response-write-timeout-seconds.html">responseWriteTimeoutSeconds</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">responseWriteTimeoutSeconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Timeout in seconds for sending responses to client


</td>
</tr>
<tr>
<td markdown="1">

<a href="running-limit.html">runningLimit</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">runningLimit</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Number of concurrently running requests from the same http pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="share-work-group.html">shareWorkGroup</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">shareWorkGroup</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Do not create separate call event group and reuse worker group for processing calls


</td>
</tr>
</tbody>
</table>
