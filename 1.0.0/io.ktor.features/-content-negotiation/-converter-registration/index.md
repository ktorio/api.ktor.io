---
title: ContentNegotiation.ConverterRegistration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">ContentNegotiation</a> / <a href="./index.html">ConverterRegistration</a></div>

# ConverterRegistration

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">ConverterRegistration</span></code></div>

Specifies which <a href="converter.html">converter</a> to use for a particular <a href="content-type.html">contentType</a>

### Parameters

<code>contentType</code> - is an instance of <a href="../../../io.ktor.http/-content-type/index.html">ContentType</a> for this registration

<code>converter</code> - is an instance of <a href="../../-content-converter/index.html">ContentConverter</a> for this registration

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ConverterRegistration</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.ConverterRegistration$<init>(io.ktor.http.ContentType, io.ktor.features.ContentConverter)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.ContentNegotiation.ConverterRegistration$<init>(io.ktor.http.ContentType, io.ktor.features.ContentConverter)/converter">converter</span><span class="symbol">:</span>&nbsp;<a href="../../-content-converter/index.html"><span class="identifier">ContentConverter</span></a><span class="symbol">)</span></code></div>

Specifies which <a href="-init-.html#io.ktor.features.ContentNegotiation.ConverterRegistration$<init>(io.ktor.http.ContentType, io.ktor.features.ContentConverter)/converter">converter</a> to use for a particular <a href="-init-.html#io.ktor.features.ContentNegotiation.ConverterRegistration$<init>(io.ktor.http.ContentType, io.ktor.features.ContentConverter)/contentType">contentType</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

is an instance of <a href="../../../io.ktor.http/-content-type/index.html">ContentType</a> for this registration


</td>
</tr>
<tr>
<td markdown="1">

<a href="converter.html">converter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">converter</span><span class="symbol">: </span><a href="../../-content-converter/index.html"><span class="identifier">ContentConverter</span></a></code></div>

is an instance of <a href="../../-content-converter/index.html">ContentConverter</a> for this registration


</td>
</tr>
</tbody>
</table>
