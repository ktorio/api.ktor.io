---
title: HttpResponseContainer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.response</a> / <a href="./index.html">HttpResponseContainer</a></div>

# HttpResponseContainer

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpResponseContainer</span></code></div>

Class representing a typed <a href="response.html">response</a> with an attached <a href="expected-type.html">expectedType</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpResponseContainer</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.response.HttpResponseContainer$<init>(io.ktor.client.call.TypeInfo, kotlin.Any)/expectedType">expectedType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.client.call/-type-info/index.html"><span class="identifier">TypeInfo</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.response.HttpResponseContainer$<init>(io.ktor.client.call.TypeInfo, kotlin.Any)/response">response</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span></code></div>

Class representing a typed <a href="-init-.html#io.ktor.client.response.HttpResponseContainer$<init>(io.ktor.client.call.TypeInfo, kotlin.Any)/response">response</a> with an attached <a href="-init-.html#io.ktor.client.response.HttpResponseContainer$<init>(io.ktor.client.call.TypeInfo, kotlin.Any)/expectedType">expectedType</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="expected-type.html">expectedType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">expectedType</span><span class="symbol">: </span><a href="../../io.ktor.client.call/-type-info/index.html"><span class="identifier">TypeInfo</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="response.html">response</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">response</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

</td>
</tr>
</tbody>
</table>
