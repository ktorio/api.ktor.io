---
title: ContentRange.Bounded - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http</a> / <a href="../index.html">ContentRange</a> / <a href="./index.html">Bounded</a></div>

# Bounded

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Bounded</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded from both sides

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Bounded</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentRange.Bounded$<init>(kotlin.Long, kotlin.Long)/from">from</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.ContentRange.Bounded$<init>(kotlin.Long, kotlin.Long)/to">to</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span></code></div>

Represents a <code>Content-Range</code> bounded from both sides


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from.html">from</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">from</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

index from which the content should begin


</td>
</tr>
<tr>
<td markdown="1">

<a href="to.html">to</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">to</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

the last index the content should end at


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
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
