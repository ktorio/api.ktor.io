---
title: io.ktor.features.kotlinx.coroutines.CoroutineScope - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">kotlinx.coroutines.CoroutineScope</a></div>

### Extensions for kotlinx.coroutines.CoroutineScope

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="write-multiple-ranges.html">writeMultipleRanges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">CoroutineScope</span><span class="symbol">.</span><span class="identifier">writeMultipleRanges</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/channelProducer">channelProducer</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">ByteReadChannel</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/ranges">ranges</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/boundary">boundary</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$writeMultipleRanges(kotlinx.coroutines.CoroutineScope, kotlin.Function1((kotlin.ranges.LongRange, kotlinx.coroutines.io.ByteReadChannel)), kotlin.collections.List((kotlin.ranges.LongRange)), kotlin.Long, kotlin.String, kotlin.String)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Start multirange response writer coroutine


</td>
</tr>
</tbody>
</table>
