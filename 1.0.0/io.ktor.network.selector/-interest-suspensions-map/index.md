---
title: InterestSuspensionsMap - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.selector</a> / <a href="./index.html">InterestSuspensionsMap</a></div>

# InterestSuspensionsMap

<div class="signature"><code><span class="keyword">class </span><span class="identifier">InterestSuspensionsMap</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">InterestSuspensionsMap</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="add-suspension.html">addSuspension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">addSuspension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$addSuspension(io.ktor.network.selector.SelectInterest, kotlinx.coroutines.CancellableContinuation((kotlin.Unit)))/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$addSuspension(io.ktor.network.selector.SelectInterest, kotlinx.coroutines.CancellableContinuation((kotlin.Unit)))/continuation">continuation</span><span class="symbol">:</span>&nbsp;<span class="identifier">CancellableContinuation</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="invoke-for-each-present.html">invokeForEachPresent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">invokeForEachPresent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$invokeForEachPresent(kotlin.Int, kotlin.Function1((kotlinx.coroutines.CancellableContinuation((kotlin.Unit)), )))/readyOps">readyOps</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$invokeForEachPresent(kotlin.Int, kotlin.Function1((kotlinx.coroutines.CancellableContinuation((kotlin.Unit)), )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">CancellableContinuation</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">invokeForEachPresent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$invokeForEachPresent(kotlin.Function2((kotlinx.coroutines.CancellableContinuation((kotlin.Unit)), io.ktor.network.selector.SelectInterest, )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="identifier">CancellableContinuation</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">.</span><span class="symbol">(</span><a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="remove-suspension.html">removeSuspension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">removeSuspension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$removeSuspension(io.ktor.network.selector.SelectInterest)/interest">interest</span><span class="symbol">:</span>&nbsp;<a href="../-select-interest/index.html"><span class="identifier">SelectInterest</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CancellableContinuation</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">removeSuspension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.network.selector.InterestSuspensionsMap$removeSuspension(kotlin.Int)/interestOrdinal">interestOrdinal</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">CancellableContinuation</span><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
