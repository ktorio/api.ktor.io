---
title: HtmlContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.html</a> / <a href="./index.html">HtmlContent</a></div>

# HtmlContent

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HtmlContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http.content/-outgoing-content/-write-channel-content/index.html"><span class="identifier">WriteChannelContent</span></a></code></div>

Represents an <a href="../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> using <code>kotlinx.html</code> builder.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HtmlContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.HtmlContent$<init>(io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.HtmlContent$<init>(io.ktor.http.HttpStatusCode, kotlin.Function1((kotlinx.html.HTML, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<span class="identifier">HTML</span><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span></code></div>

Represents an <a href="../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> using <code>kotlinx.html</code> builder.


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Specifies <a href="../../io.ktor.http/-content-type/index.html">ContentType</a> for this resource.


</td>
</tr>
<tr>
<td markdown="1">

<a href="status.html">status</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">status</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span></code></div>

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
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">writeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.html.HtmlContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteWriteChannel</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Receives <a href="write-to.html#io.ktor.html.HtmlContent$writeTo(kotlinx.coroutines.io.ByteWriteChannel)/channel">channel</a> provided by the engine and writes all data to it


</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/caching.html">caching</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">caching</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span></code></div>

Gets or sets <a href="../../io.ktor.http/-cache-control/index.html">CacheControl</a> instance as an extension property on this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/default-versions.html">defaultVersions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">defaultVersions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Retrieves LastModified and ETag versions from this <a href="../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.content/versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Gets or sets list of <a href="../../io.ktor.http.content/-version/index.html">Version</a> instances as an extension property on this content


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
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">wrapHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Generates a new <a href="../../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> of the same abstract type
but with <a href="../../io.ktor.http.content/-outgoing-content/headers.html">OutgoingContent.headers</a> transformed by the specified <a href="../../io.ktor.client.utils/wrap-headers.html#io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</a>.


</td>
</tr>
</tbody>
</table>
