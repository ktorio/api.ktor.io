---
title: FormPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request.forms</a> / <a href="./index.html">FormPart</a></div>

# FormPart

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">FormPart</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

Multipart form item. Use it to build form in client.

### Parameters

<code>key</code> - multipart name

<code>value</code> - content, could be <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>, <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-number/index.html">Number</a> or <a href="#">Input</a>

<code>headers</code> - part headers, note that some servers may fail if an unknown header provided

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">FormPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/value">value</span><span class="symbol">:</span>&nbsp;<a href="index.html#T"><span class="identifier">T</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request.forms.FormPart$<init>(kotlin.String, io.ktor.client.request.forms.FormPart.T, io.ktor.http.Headers)/headers">headers</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a>&nbsp;<span class="symbol">=</span>&nbsp;Headers.Empty<span class="symbol">)</span></code></div>

Multipart form item. Use it to build form in client.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

part headers, note that some servers may fail if an unknown header provided


</td>
</tr>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

multipart name


</td>
</tr>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="index.html#T"><span class="identifier">T</span></a></code></div>

content, could be <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>, <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-number/index.html">Number</a> or <a href="#">Input</a>


</td>
</tr>
</tbody>
</table>
