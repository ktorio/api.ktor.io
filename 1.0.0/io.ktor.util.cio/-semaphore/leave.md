---
title: Semaphore.leave - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">Semaphore</a> / <a href="./leave.html">leave</a></div>

# leave

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">leave</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Exits the semaphore.

If <a href="limit.html">limit</a> was reached, this will potentially resume
suspended coroutines that invoked the <a href="enter.html">enter</a> method.

