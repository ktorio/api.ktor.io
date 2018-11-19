---
title: WeakTimeoutQueue - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.internals</a> / <a href="./index.html">WeakTimeoutQueue</a></div>

# WeakTimeoutQueue

<div class="signature"><code><span class="keyword">class </span><span class="identifier">WeakTimeoutQueue</span></code></div>

It provides ability to cancel jobs and schedule coroutine with timeout. Unlike regular withTimeout
this implementation is never scheduling timer tasks but only checks for current time. This makes timeout measurement
much cheaper and doesn't require any watchdog thread.

There are two limitations:

* timeout period is fixed
* job cancellation is not guaranteed if no new jobs scheduled

The last one limitation is generally unacceptable
however in the particular use-case (closing IDLE connection) it is just fine
as we really don't care about stalling IDLE connections if there are no more incoming

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-registration/index.html">Registration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Registration</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CompletionHandler</span><span class="symbol">, </span><span class="identifier">DisposableHandle</span></code></div>

<a href="register.html">register</a> function result


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">WeakTimeoutQueue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/timeoutMillis">timeoutMillis</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/clock">clock</span><span class="symbol">:</span>&nbsp;<span class="identifier">Clock</span>&nbsp;<span class="symbol">=</span>&nbsp;Clock.systemUTC()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$<init>(kotlin.Long, java.time.Clock, kotlin.Function0((java.lang.Exception)))/exceptionFactory">exceptionFactory</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{ TimeoutCancellationException(timeoutMillis) }<span class="symbol">)</span></code></div>

It provides ability to cancel jobs and schedule coroutine with timeout. Unlike regular withTimeout
this implementation is never scheduling timer tasks but only checks for current time. This makes timeout measurement
much cheaper and doesn't require any watchdog thread.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cancel.html">cancel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">cancel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Cancel all registered timeouts


</td>
</tr>
<tr>
<td markdown="1">

<a href="process.html">process</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">process</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Process and cancel all jobs that are timed out


</td>
</tr>
<tr>
<td markdown="1">

<a href="register.html">register</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">register</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$register(kotlinx.coroutines.Job)/job">job</span><span class="symbol">:</span>&nbsp;<span class="identifier">Job</span><span class="symbol">)</span><span class="symbol">: </span><a href="-registration/index.html"><span class="identifier">Registration</span></a></code></div>

Register <a href="register.html#io.ktor.http.cio.internals.WeakTimeoutQueue$register(kotlinx.coroutines.Job)/job">job</a> in this queue. It will be cancelled if doesn't complete in time.


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-timeout.html">withTimeout</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <span class="identifier">withTimeout</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.WeakTimeoutQueue$withTimeout(kotlin.SuspendFunction1((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.internals.WeakTimeoutQueue.withTimeout.T)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="with-timeout.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="with-timeout.html#T"><span class="identifier">T</span></a></code></div>

Execute <a href="with-timeout.html#io.ktor.http.cio.internals.WeakTimeoutQueue$withTimeout(kotlin.SuspendFunction1((kotlinx.coroutines.CoroutineScope, io.ktor.http.cio.internals.WeakTimeoutQueue.withTimeout.T)))/block">block</a> and cancel if doesn't complete it time.


</td>
</tr>
</tbody>
</table>
