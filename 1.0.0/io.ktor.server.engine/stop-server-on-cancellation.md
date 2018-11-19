---
title: stopServerOnCancellation - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.server.engine</a> / <a href="./stop-server-on-cancellation.html">stopServerOnCancellation</a></div>

# stopServerOnCancellation

<div class="signature"><code><span class="keyword">fun </span><a href="-application-engine/index.html"><span class="identifier">ApplicationEngine</span></a><span class="symbol">.</span><span class="identifier">stopServerOnCancellation</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Stop server on job cancellation. The returned deferred need to be completed or cancelled.

