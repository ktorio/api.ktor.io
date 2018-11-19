---
title: HashAlgorithm - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.extensions</a> / <a href="./index.html">HashAlgorithm</a></div>

# HashAlgorithm

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">HashAlgorithm</span></code></div>

Hash algorithms

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-n-o-n-e.html">NONE</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-m-d5.html">MD5</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-h-a1.html">SHA1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-h-a224.html">SHA224</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-h-a256.html">SHA256</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-h-a384.html">SHA384</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-s-h-a512.html">SHA512</a>


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

numeric hash algorithm code


</td>
</tr>
<tr>
<td markdown="1">

<a href="open-s-s-l-name.html">openSSLName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">openSSLName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

is a name used in openssl for this algorithm


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.extensions.HashAlgorithm.Companion$byCode(kotlin.Byte)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HashAlgorithm</span></a></code></div>

Find hash algorithm instance by it's numeric <a href="by-code.html#io.ktor.network.tls.extensions.HashAlgorithm.Companion$byCode(kotlin.Byte)/code">code</a>


</td>
</tr>
</tbody>
</table>
