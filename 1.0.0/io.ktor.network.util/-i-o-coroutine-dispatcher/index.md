---
title: IOCoroutineDispatcher - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.util</a> / <a href="./index.html">IOCoroutineDispatcher</a></div>

# IOCoroutineDispatcher

<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">IOCoroutineDispatcher</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span><span class="symbol">, </span><span class="identifier">Closeable</span></code></div>

**Deprecated:** This is going to be deprecated. Use kotlinx.coroutines dispatchers

Default ktor fixed size dispatcher for doing non-blocking I/O operations and selection

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">IOCoroutineDispatcher</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.util.IOCoroutineDispatcher$<init>(kotlin.Int)/nThreads">nThreads</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span></code></div>

Default ktor fixed size dispatcher for doing non-blocking I/O operations and selection


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="close.html">close</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">close</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Gracefully shutdown dispatcher.


</td>
</tr>
<tr>
<td markdown="1">

<a href="dispatch.html">dispatch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">dispatch</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.util.IOCoroutineDispatcher$dispatch(, java.lang.Runnable)/context">context</span><span class="symbol">:</span>&nbsp;<span class="identifier">&lt;ERROR CLASS&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.util.IOCoroutineDispatcher$dispatch(, java.lang.Runnable)/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">Runnable</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
