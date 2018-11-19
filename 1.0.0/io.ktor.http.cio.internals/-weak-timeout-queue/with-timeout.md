---
title: WeakTimeoutQueue.withTimeout - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.internals</a> / <a href="index.html">WeakTimeoutQueue</a> / <a href="./with-timeout.html">withTimeout</a></div>

# withTimeout

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">withTimeout</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$withTimeout(kotlin.SuspendFunction1((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.internals.WeakTimeoutQueue.withTimeout.T)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-timeout.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-timeout.html#T"><span class="identifier">T</span></a></code></div>

Execute <a href="with-timeout.html#io.ktor.http.cio.internals.WeakTimeoutQueue$withTimeout(kotlin.SuspendFunction1((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.internals.WeakTimeoutQueue.withTimeout.T)))/block">block</a> and cancel if doesn't complete it time.

