---
title: OutgoingContent.WriteChannelContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="./index.html">WriteChannelContent</a></div>

# WriteChannelContent

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">WriteChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload written to <a href="#">ByteWriteChannel</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">WriteChannelContent</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload written to <a href="#">ByteWriteChannel</a>


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

<a href="write-to.html">writeTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">writeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent.WriteChannelContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Receives <a href="write-to.html#io.ktor.http.content.OutgoingContent.WriteChannelContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</a> provided by the engine and writes all data to it


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

<a href="../../../io.ktor.html/-html-content/index.html">HtmlContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HtmlContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriteChannelContent</span></a></code></div>

Represents an <a href="../index.html">OutgoingContent</a> using <code>kotlinx.html</code> builder.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../../io.ktor.client.request.forms/-multi-part-form-data-content/index.html">MultiPartFormDataContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">MultiPartFormDataContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriteChannelContent</span></a></code></div>

<a href="../index.html">OutgoingContent</a> with <a href="#">parts</a> for multipart/form-data formatted request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-output-stream-content/index.html">OutputStreamContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">OutputStreamContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriteChannelContent</span></a></code></div>

<a href="../index.html">OutgoingContent</a> to respond with <a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html">OutputStream</a>.
The stream would be automatically closed after <a href="#">body</a> finish.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-writer-content/index.html">WriterContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">WriterContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">WriteChannelContent</span></a></code></div>

Represents a content that is produced by <a href="#">body</a> function


</td>
</tr>
</tbody>
</table>
