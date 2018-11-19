---
title: HashAndSign - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.extensions</a> / <a href="./index.html">HashAndSign</a></div>

# HashAndSign

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HashAndSign</span></code></div>

Hash and signature algorithm pair

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HashAndSign</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.extensions.HashAndSign$<init>(kotlin.Byte, kotlin.Byte)/hash">hash</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.tls.extensions.HashAndSign$<init>(kotlin.Byte, kotlin.Byte)/sign">sign</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">HashAndSign</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.extensions.HashAndSign$<init>(io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/hash">hash</span><span class="symbol">:</span>&nbsp;<a href="../-hash-algorithm/index.html"><span class="identifier">HashAlgorithm</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.network.tls.extensions.HashAndSign$<init>(io.ktor.network.tls.extensions.HashAlgorithm, io.ktor.network.tls.extensions.SignatureAlgorithm)/sign">sign</span><span class="symbol">:</span>&nbsp;<a href="../-signature-algorithm/index.html"><span class="identifier">SignatureAlgorithm</span></a><span class="symbol">)</span></code></div>

Hash and signature algorithm pair


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="hash.html">hash</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">hash</span><span class="symbol">: </span><a href="../-hash-algorithm/index.html"><span class="identifier">HashAlgorithm</span></a></code></div>

algorithm


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

String representation of this algorithms pair


</td>
</tr>
<tr>
<td markdown="1">

<a href="sign.html">sign</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">sign</span><span class="symbol">: </span><a href="../-signature-algorithm/index.html"><span class="identifier">SignatureAlgorithm</span></a></code></div>

algorithm


</td>
</tr>
</tbody>
</table>
