---
title: ContentRange.Suffix - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http</a> / <a href="../index.html">ContentRange</a> / <a href="./index.html">Suffix</a></div>

# Suffix

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Suffix</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">ContentRange</span></a></code></div>

Represents a <code>Content-Range</code> bounded by tail size

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Suffix</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentRange.Suffix$<init>(kotlin.Long)/lastCount">lastCount</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span></code></div>

Represents a <code>Content-Range</code> bounded by tail size


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="last-count.html">lastCount</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">lastCount</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

number of tail bytes


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
