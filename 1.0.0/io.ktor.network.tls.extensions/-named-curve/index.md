---
title: NamedCurve - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls.extensions</a> / <a href="./index.html">NamedCurve</a></div>

# NamedCurve

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">NamedCurve</span></code></div>

Named curves for Elliptic Curves.

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="sect163k1.html">sect163k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect163r1.html">sect163r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect163r2.html">sect163r2</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect193r1.html">sect193r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect193r2.html">sect193r2</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect233k1.html">sect233k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect233r1.html">sect233r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect239k1.html">sect239k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect283k1.html">sect283k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect283r1.html">sect283r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect409k1.html">sect409k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect409r1.html">sect409r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect571k1.html">sect571k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="sect571r1.html">sect571r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp160k1.html">secp160k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp160r1.html">secp160r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp160r2.html">secp160r2</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp192k1.html">secp192k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp192r1.html">secp192r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp224k1.html">secp224k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp224r1.html">secp224r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp256k1.html">secp256k1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp256r1.html">secp256r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp384r1.html">secp384r1</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="secp521r1.html">secp521r1</a>


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a></code></div>

curve numeric code


</td>
</tr>
<tr>
<td markdown="1">

<a href="field-size.html">fieldSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">fieldSize</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

curve size in bits, affects key and signature size, performance and security strength


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-code.html">fromCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.extensions.NamedCurve.Companion$fromCode(kotlin.Short)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">NamedCurve</span></a><span class="symbol">?</span></code></div>

Find named curve by numeric <a href="from-code.html#io.ktor.network.tls.extensions.NamedCurve.Companion$fromCode(kotlin.Short)/code">code</a>


</td>
</tr>
</tbody>
</table>
