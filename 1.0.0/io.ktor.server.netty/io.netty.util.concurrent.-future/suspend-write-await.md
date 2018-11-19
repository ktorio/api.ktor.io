---
title: suspendWriteAwait - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.netty</a> / <a href="index.html">io.netty.util.concurrent.Future</a> / <a href="./suspend-write-await.html">suspendWriteAwait</a></div>

# suspendWriteAwait

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">Future</span><span class="symbol">&lt;</span><a href="suspend-write-await.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="identifier">suspendWriteAwait</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="suspend-write-await.html#T"><span class="identifier">T</span></a></code></div>

Suspend until the future completion.
Wraps futures completion exceptions into <a href="../../io.ktor.util.cio/-channel-write-exception/index.html">ChannelWriteException</a>

