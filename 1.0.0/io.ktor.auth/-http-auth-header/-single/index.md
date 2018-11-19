---
title: HttpAuthHeader.Single - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.auth</a> / <a href="../index.html">HttpAuthHeader</a> / <a href="./index.html">Single</a></div>

# Single

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Single</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">HttpAuthHeader</span></a></code></div>

Describes an authentication header that is represented by a single <a href="blob.html">blob</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Single</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Single$<init>(kotlin.String, kotlin.String)/authScheme">authScheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Single$<init>(kotlin.String, kotlin.String)/blob">blob</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Describes an authentication header that is represented by a single <a href="-init-.html#io.ktor.auth.HttpAuthHeader.Single$<init>(kotlin.String, kotlin.String)/blob">blob</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="blob.html">blob</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">blob</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

contains single token 68, should consist from digits, letters and one of the following: <code>-._~+/</code>


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../auth-scheme.html">authScheme</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">authScheme</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

auth scheme, usually one of <a href="../../-auth-scheme/index.html">AuthScheme</a>


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="equals.html">equals</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">equals</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Single$equals(kotlin.Any)/other">other</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="hash-code.html">hashCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hashCode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="render.html">render</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">render</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.auth.HttpAuthHeader.Single$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../-header-value-encoding/index.html"><span class="identifier">HeaderValueEncoding</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with a specified <a href="render.html#io.ktor.auth.HttpAuthHeader.Single$render(io.ktor.auth.HeaderValueEncoding)/encoding">encoding</a>.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encodes the header with the default <a href="../../-header-value-encoding/index.html">HeaderValueEncoding</a> for this header.


</td>
</tr>
</tbody>
</table>
