---
title: Lock - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">Lock</a></div>

# Lock

<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">class </span><span class="identifier">Lock</span></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Lock</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="lock.html">lock</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">lock</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="unlock.html">unlock</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">unlock</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../use.html">use</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">Lock</span></a><span class="symbol">.</span><span class="identifier">use</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$use(io.ktor.util.Lock, kotlin.Function0((io.ktor.util.use.R)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../use.html#R"><span class="identifier">R</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../use.html#R"><span class="identifier">R</span></a></code></div>

</td>
</tr>
</tbody>
</table>
