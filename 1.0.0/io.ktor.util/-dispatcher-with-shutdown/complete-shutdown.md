---
title: DispatcherWithShutdown.completeShutdown - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">DispatcherWithShutdown</a> / <a href="./complete-shutdown.html">completeShutdown</a></div>

# completeShutdown

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">completeShutdown</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Complete shutdown. Any further attempts to dispatch anything will fail with <a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/RejectedExecutionException.html">RejectedExecutionException</a>

