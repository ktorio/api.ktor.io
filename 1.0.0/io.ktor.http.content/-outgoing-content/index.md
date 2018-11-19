---
title: OutgoingContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">OutgoingContent</a></div>

# OutgoingContent

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">OutgoingContent</span></code></div>

Information about the content to be sent to the peer, recognized by a client or server engine

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-byte-array-content/index.html">ByteArrayContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ByteArrayContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload represented as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-content/index.html">NoContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NoContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> without a payload


</td>
</tr>
<tr>
<td markdown="1">

<a href="-protocol-upgrade/index.html">ProtocolUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ProtocolUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> for upgrading an HTTP connection


</td>
</tr>
<tr>
<td markdown="1">

<a href="-read-channel-content/index.html">ReadChannelContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ReadChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload read from <a href="#">ByteReadChannel</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-write-channel-content/index.html">WriteChannelContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">WriteChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload written to <a href="#">ByteWriteChannel</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Specifies content length in bytes for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Specifies <a href="../../io.ktor.http/-content-type/index.html">ContentType</a> for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Headers to set when sending this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span></code></div>

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

<a href="get-property.html">getProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">getProperty</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.OutgoingContent$getProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.getProperty.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="get-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="get-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Gets an extension property for this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="set-property.html">setProperty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">setProperty</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/key">key</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="set-property.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.OutgoingContent$setProperty(io.ktor.util.AttributeKey((io.ktor.http.content.OutgoingContent.setProperty.T)), io.ktor.http.content.OutgoingContent.setProperty.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="set-property.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets an extension property for this content


</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../caching.html">caching</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="./index.md"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">caching</span><span class="symbol">: </span><a href="../-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span></code></div>

Gets or sets <a href="../../io.ktor.http/-cache-control/index.html">CacheControl</a> instance as an extension property on this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/default-versions.html">defaultVersions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">defaultVersions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Retrieves LastModified and ETag versions from this <a href="./index.md">OutgoingContent</a> headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="../versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="./index.md"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Gets or sets list of <a href="../-version/index.html">Version</a> instances as an extension property on this content


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.utils/wrap-headers.html">wrapHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">wrapHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Generates a new <a href="./index.md">OutgoingContent</a> of the same abstract type
but with <a href="headers.html">OutgoingContent.headers</a> transformed by the specified <a href="../../io.ktor.client.utils/wrap-headers.html#io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-byte-array-content/index.html">ByteArrayContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ByteArrayContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload represented as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html">ByteArray</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-no-content/index.html">NoContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">NoContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> without a payload


</td>
</tr>
<tr>
<td markdown="1">

<a href="-protocol-upgrade/index.html">ProtocolUpgrade</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ProtocolUpgrade</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> for upgrading an HTTP connection


</td>
</tr>
<tr>
<td markdown="1">

<a href="-read-channel-content/index.html">ReadChannelContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ReadChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload read from <a href="#">ByteReadChannel</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-write-channel-content/index.html">WriteChannelContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">WriteChannelContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">OutgoingContent</span></a></code></div>

Variant of a <a href="./index.md">OutgoingContent</a> with payload written to <a href="#">ByteWriteChannel</a>


</td>
</tr>
</tbody>
</table>
