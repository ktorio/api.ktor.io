---
title: OutgoingContent.ReadChannelContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">OutgoingContent</a> / <a href="./index.html">ReadChannelContent</a></div>

# ReadChannelContent

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ReadChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload read from <a href="#">ByteReadChannel</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ReadChannelContent</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Variant of a <a href="../index.html">OutgoingContent</a> with payload read from <a href="#">ByteReadChannel</a>


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

<a href="read-from.html">readFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">readFrom</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Provides <a href="#">ByteReadChannel</a> for the content

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">readFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent.ReadChannelContent$readFrom(kotlin.ranges.LongRange)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Provides <a href="#">ByteReadChannel</a> for the given range of the content


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

<a href="../../-jar-file-content/index.html">JarFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">JarFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ReadChannelContent</span></a></code></div>

Represents an <a href="../index.html">OutgoingContent</a> for a resource inside a Jar file


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-local-file-content/index.html">LocalFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LocalFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ReadChannelContent</span></a></code></div>

OutgoingContent representing a local <a href="../../-local-file-content/file.html">file</a> with a specified <a href="../../-local-file-content/content-type.html">contentType</a>, <a href="../../../io.ktor.http/expires.html">expires</a> date and <a href="../../caching.html">caching</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../-u-r-i-file-content/index.html">URIFileContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">URIFileContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ReadChannelContent</span></a></code></div>

Represents a content that is served from the specified <a href="../../-u-r-i-file-content/uri.html">uri</a>


</td>
</tr>
</tbody>
</table>
