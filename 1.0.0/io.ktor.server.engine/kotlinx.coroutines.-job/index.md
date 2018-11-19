---
title: io.ktor.server.engine.kotlinx.coroutines.Job - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.engine</a> / <a href="./index.html">kotlinx.coroutines.Job</a></div>

### Extensions for kotlinx.coroutines.Job

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="launch-on-cancellation.html">launchOnCancellation</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Job</span><span class="symbol">.</span><span class="identifier">launchOnCancellation</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.engine$launchOnCancellation(kotlinx.coroutines.Job, kotlin.SuspendFunction1((kotlin.Throwable, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="parameterName">cause</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-throwable/index.html"><span class="identifier">Throwable</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CompletableDeferred</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span></code></div>

Launch a coroutine with <a href="launch-on-cancellation.html#io.ktor.server.engine$launchOnCancellation(kotlinx.coroutines.Job, kotlin.SuspendFunction1((kotlin.Throwable, kotlin.Unit)))/block">block</a> body when the parent job is cancelled or a returned deferred is cancelled.
It is important to complete or cancel returned deferred
otherwise the parent job will be unable to complete successfully.


</td>
</tr>
</tbody>
</table>
