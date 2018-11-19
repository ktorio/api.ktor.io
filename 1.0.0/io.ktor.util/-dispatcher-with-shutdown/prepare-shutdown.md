---
title: DispatcherWithShutdown.prepareShutdown - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">DispatcherWithShutdown</a> / <a href="./prepare-shutdown.html">prepareShutdown</a></div>

# prepareShutdown

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepareShutdown</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Prepare for shutdown so we will not dispatch on <a href="#">delegate</a> anymore. It is still possible to
dispatch coroutines.

