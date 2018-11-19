---
title: Cache - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">Cache</a></div>

# Cache

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Cache</span><span class="symbol">&lt;</span><span class="keyword">in</span>&nbsp;<span class="identifier">K</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">, </span><span class="identifier">V</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="get-or-compute.html">getOrCompute</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">getOrCompute</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.Cache$getOrCompute(io.ktor.sessions.Cache.K)/key">key</span><span class="symbol">:</span>&nbsp;<a href="index.html#K"><span class="identifier">K</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#V"><span class="identifier">V</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="invalidate.html">invalidate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">invalidate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.Cache$invalidate(io.ktor.sessions.Cache.K)/key">key</span><span class="symbol">:</span>&nbsp;<a href="index.html#K"><span class="identifier">K</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#V"><span class="identifier">V</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">invalidate</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.Cache$invalidate(io.ktor.sessions.Cache.K, io.ktor.sessions.Cache.V)/key">key</span><span class="symbol">:</span>&nbsp;<a href="index.html#K"><span class="identifier">K</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.Cache$invalidate(io.ktor.sessions.Cache.K, io.ktor.sessions.Cache.V)/value">value</span><span class="symbol">:</span>&nbsp;<a href="index.html#V"><span class="identifier">V</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="invalidate-all.html">invalidateAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">invalidateAll</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="peek.html">peek</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">peek</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.Cache$peek(io.ktor.sessions.Cache.K)/key">key</span><span class="symbol">:</span>&nbsp;<a href="index.html#K"><span class="identifier">K</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="index.html#V"><span class="identifier">V</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
</tbody>
</table>
