---
title: WeakTimeoutQueue.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.internals</a> / <a href="index.html">WeakTimeoutQueue</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">WeakTimeoutQueue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/timeoutMillis">timeoutMillis</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/clock">clock</span><span class="symbol">:</span>&nbsp;<span class="identifier">Clock</span>&nbsp;<span class="symbol">=</span>&nbsp;Clock.systemUTC()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/exceptionFactory">exceptionFactory</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ TimeoutCancellationException(timeoutMillis) }<span class="symbol">)</span></code></div>

It provides ability to cancel jobs and schedule coroutine with timeout. Unlike regular withTimeout
this implementation is never scheduling timer tasks but only checks for current time. This makes timeout measurement
much cheaper and doesn't require any watchdog thread.

There are two limitations:

* timeout period is fixed
* job cancellation is not guaranteed if no new jobs scheduled

The last one limitation is generally unacceptable
however in the particular use-case (closing IDLE connection) it is just fine
as we really don't care about stalling IDLE connections if there are no more incoming

