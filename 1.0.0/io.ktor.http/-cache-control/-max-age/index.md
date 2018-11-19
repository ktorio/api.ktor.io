---
title: CacheControl.MaxAge - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http</a> / <a href="../index.html">CacheControl</a> / <a href="./index.html">MaxAge</a></div>

# MaxAge

<div class="signature"><code><span class="keyword">class </span><span class="identifier">MaxAge</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">CacheControl</span></a></code></div>

Represents a cache control value with the specified max ages and re-validation strategies

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">MaxAge</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.CacheControl.MaxAge$<init>(kotlin.Int, kotlin.Int, kotlin.Boolean, kotlin.Boolean, io.ktor.http.CacheControl.Visibility)/maxAgeSeconds">maxAgeSeconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.CacheControl.MaxAge$<init>(kotlin.Int, kotlin.Int, kotlin.Boolean, kotlin.Boolean, io.ktor.http.CacheControl.Visibility)/proxyMaxAgeSeconds">proxyMaxAgeSeconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.CacheControl.MaxAge$<init>(kotlin.Int, kotlin.Int, kotlin.Boolean, kotlin.Boolean, io.ktor.http.CacheControl.Visibility)/mustRevalidate">mustRevalidate</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.CacheControl.MaxAge$<init>(kotlin.Int, kotlin.Int, kotlin.Boolean, kotlin.Boolean, io.ktor.http.CacheControl.Visibility)/proxyRevalidate">proxyRevalidate</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.CacheControl.MaxAge$<init>(kotlin.Int, kotlin.Int, kotlin.Boolean, kotlin.Boolean, io.ktor.http.CacheControl.Visibility)/visibility">visibility</span><span class="symbol">:</span>&nbsp;<a href="../-visibility/index.html"><span class="identifier">Visibility</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">)</span></code></div>

Represents a cache control value with the specified max ages and re-validation strategies


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="max-age-seconds.html">maxAgeSeconds</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">maxAgeSeconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

max-age in seconds


</td>
</tr>
<tr>
<td markdown="1">

<a href="must-revalidate.html">mustRevalidate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">mustRevalidate</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<code>true</code> if a client must validate in spite of age


</td>
</tr>
<tr>
<td markdown="1">

<a href="proxy-max-age-seconds.html">proxyMaxAgeSeconds</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">proxyMaxAgeSeconds</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">?</span></code></div>

max-age in seconds for caching proxies


</td>
</tr>
<tr>
<td markdown="1">

<a href="proxy-revalidate.html">proxyRevalidate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">proxyRevalidate</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<code>true</code> if a caching proxy must revalidate in spite of age


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../visibility.html">visibility</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">visibility</span><span class="symbol">: </span><a href="../-visibility/index.html"><span class="identifier">Visibility</span></a><span class="symbol">?</span></code></div>

specifies an optional visibility such as private or public


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
