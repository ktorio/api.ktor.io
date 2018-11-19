---
title: SignatureAlgorithm - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.extensions</a> / <a href="./index.html">SignatureAlgorithm</a></div>

# SignatureAlgorithm

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">SignatureAlgorithm</span></code></div>

Signature algorithms

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-a-n-o-n.html">ANON</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-r-s-a.html">RSA</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-e-c-d-s-a.html">ECDSA</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="code.html">code</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a></code></div>

numeric algorithm codes


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="by-code.html">byCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.extensions.SignatureAlgorithm.Companion$byCode(kotlin.Byte)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">SignatureAlgorithm</span></a></code></div>

Find signature algorithm instance by it's numeric <a href="by-code.html#io.ktor.network.tls.extensions.SignatureAlgorithm.Companion$byCode(kotlin.Byte)/code">code</a>


</td>
</tr>
</tbody>
</table>
