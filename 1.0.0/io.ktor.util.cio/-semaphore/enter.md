---
title: Semaphore.enter - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util.cio</a> / <a href="index.html">Semaphore</a> / <a href="./enter.html">enter</a></div>

# enter

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">enter</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Enters the semaphore.

If the number of visitors didn't reach <a href="limit.html">limit</a>, this function will return immediately.
If the limit is reached, it will wait until <a href="leave.html">leave</a> is call from other coroutine.

