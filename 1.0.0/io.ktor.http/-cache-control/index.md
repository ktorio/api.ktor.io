---
title: CacheControl - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">CacheControl</a></div>

# CacheControl

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">CacheControl</span></code></div>

Represents a value for a <code>Cache-Control</code> header

### Parameters

<code>visibility</code> - specifies an optional visibility such as private or public

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-max-age/index.html">MaxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MaxAge</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a cache control value with the specified max ages and re-validation strategies


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-cache/index.html">NoCache</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NoCache</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a no-cache cache control value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-store/index.html">NoStore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NoStore</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a no-store cache control value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-visibility/index.html">Visibility</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">Visibility</span></code></div>

Controls caching by proxies


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="visibility.html">visibility</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">visibility</span><span class="symbol">: </span><a href="-visibility/index.html"><span class="identifier">Visibility</span></a><span class="symbol">?</span></code></div>

specifies an optional visibility such as private or public


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-max-age/index.html">MaxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MaxAge</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a cache control value with the specified max ages and re-validation strategies


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-cache/index.html">NoCache</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NoCache</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a no-cache cache control value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-store/index.html">NoStore</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">NoStore</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CacheControl</span></a></code></div>

Represents a no-store cache control value


</td>
</tr>
</tbody>
</table>
