---
title: TLSRecordType - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.network.tls</a> / <a href="./index.html">TLSRecordType</a></div>

# TLSRecordType

<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">TLSRecordType</span></code></div>

TLS record type with it's numeric <a href="code.html">code</a>

### Enum Values

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-change-cipher-spec.html">ChangeCipherSpec</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-alert.html">Alert</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-handshake.html">Handshake</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-data.html">ApplicationData</a>


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">code</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

numeric record type code


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">byCode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.network.tls.TLSRecordType.Companion$byCode(kotlin.Int)/code">code</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">TLSRecordType</span></a></code></div>

Find an instance of <a href="./index.md">TLSRecordType</a> by it's numeric code or fail


</td>
</tr>
</tbody>
</table>
