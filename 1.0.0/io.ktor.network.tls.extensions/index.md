---
title: io.ktor.network.tls.extensions - 
layout: api
---



## Package io.ktor.network.tls.extensions

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-hash-algorithm/index.html">HashAlgorithm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">HashAlgorithm</span></code></div>

Hash algorithms


</td>
</tr>
<tr>
<td markdown="1">

<a href="-hash-and-sign/index.html">HashAndSign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HashAndSign</span></code></div>

Hash and signature algorithm pair


</td>
</tr>
<tr>
<td markdown="1">

<a href="-named-curve/index.html">NamedCurve</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">NamedCurve</span></code></div>

Named curves for Elliptic Curves.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-point-format/index.html">PointFormat</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">PointFormat</span></code></div>

Elliptic curve point format


</td>
</tr>
<tr>
<td markdown="1">

<a href="-signature-algorithm/index.html">SignatureAlgorithm</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">SignatureAlgorithm</span></code></div>

Signature algorithms


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-supported-named-curves.html">SupportedNamedCurves</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SupportedNamedCurves</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-named-curve/index.html"><span class="identifier">NamedCurve</span></a><span class="symbol">&gt;</span></code></div>

List of supported named curves


</td>
</tr>
<tr>
<td markdown="1">

<a href="-supported-point-formats.html">SupportedPointFormats</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SupportedPointFormats</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-point-format/index.html"><span class="identifier">PointFormat</span></a><span class="symbol">&gt;</span></code></div>

List of supported curve point formats


</td>
</tr>
<tr>
<td markdown="1">

<a href="-supported-signature-algorithms.html">SupportedSignatureAlgorithms</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">SupportedSignatureAlgorithms</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-hash-and-sign/index.html"><span class="identifier">HashAndSign</span></a><span class="symbol">&gt;</span></code></div>

List of supported combinations of hash and signature algorithms


</td>
</tr>
</tbody>
</table>
