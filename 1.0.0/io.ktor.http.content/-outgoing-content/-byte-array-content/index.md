---
title: OutgoingContent.ByteArrayContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="./index.html">ByteArrayContent</a></div>

# ByteArrayContent

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ByteArrayContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload represented as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ByteArrayContent</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload represented as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a>


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Specifies content length in bytes for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Specifies <a href="../../../io.ktor.http/-content-type/index.html">ContentType</a> for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Headers to set when sending this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="../../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span></code></div>

Status code to set when sending this content


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="bytes.html">bytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">bytes</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Provides <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a> which engine will send to peer


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../get-property.html">getProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">getProperty</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent$getProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.getProperty.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../get-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="../get-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Gets an extension property for this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../set-property.html">setProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">setProperty</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="../set-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../set-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets an extension property for this content


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../-byte-array-content/index.html">ByteArrayContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ByteArrayContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ByteArrayContent</span></a></code></div>

Implementation of the <a href="./index.md">OutgoingContent.ByteArrayContent</a> for sending array of bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.client.request.forms/-form-data-content/index.html">FormDataContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormDataContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ByteArrayContent</span></a></code></div>

<a href="../index.html">OutgoingContent</a> with <a href="../../../io.ktor.client.request.forms/-form-data-content/form-data.html">formData</a> for application/x-www-form-urlencoded formatted request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-text-content/index.html">TextContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">TextContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ByteArrayContent</span></a></code></div>

Represents a text content that could be sent


</td>
</tr>
</tbody>
</table>
