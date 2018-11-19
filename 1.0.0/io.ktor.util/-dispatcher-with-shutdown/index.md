---
title: DispatcherWithShutdown - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">DispatcherWithShutdown</a></div>

# DispatcherWithShutdown

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DispatcherWithShutdown</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span></code></div>

Specialized dispatcher useful for graceful shutdown

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DispatcherWithShutdown</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.DispatcherWithShutdown$<init>(kotlinx.coroutines.CoroutineDispatcher)/delegate">delegate</span><span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">)</span></code></div>

Specialized dispatcher useful for graceful shutdown


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="complete-shutdown.html">completeShutdown</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">completeShutdown</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Complete shutdown. Any further attempts to dispatch anything will fail with <a href="http://docs.oracle.com/javase/6/docs/api/java/util/concurrent/RejectedExecutionException.html">RejectedExecutionException</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="dispatch.html">dispatch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">dispatch</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.DispatcherWithShutdown$dispatch(, java.lang.Runnable)/context">context</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.DispatcherWithShutdown$dispatch(, java.lang.Runnable)/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">Runnable</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="is-dispatch-needed.html">isDispatchNeeded</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isDispatchNeeded</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.DispatcherWithShutdown$isDispatchNeeded()/context">context</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="prepare-shutdown.html">prepareShutdown</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">prepareShutdown</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Prepare for shutdown so we will not dispatch on <a href="#">delegate</a> anymore. It is still possible to
dispatch coroutines.


</td>
</tr>
</tbody>
</table>
