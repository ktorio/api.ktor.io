---
title: tcpNoDelay - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.network.sockets</a> / <a href="./tcp-no-delay.html">tcpNoDelay</a></div>

# tcpNoDelay

<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-configurable/index.html"><span class="identifier">Configurable</span></a><span class="symbol">&lt;</span><a href="tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span> <a href="tcp-no-delay.html#T"><span class="identifier">T</span></a><span class="symbol">.</span><span class="identifier">tcpNoDelay</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="tcp-no-delay.html#T"><span class="identifier">T</span></a></code></div>

Set TCP_NODELAY socket option to disable the Nagle algorithm.

