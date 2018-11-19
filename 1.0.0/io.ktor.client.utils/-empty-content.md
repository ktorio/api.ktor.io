---
title: EmptyContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.utils</a> / <a href="./-empty-content.html">EmptyContent</a></div>

# EmptyContent

<div class="signature"><code><span class="keyword">object </span><span class="identifier">EmptyContent</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/-no-content/index.html"><span class="identifier">NoContent</span></a></code></div>

Concrete <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> without a payload.

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../io.ktor.http.content/caching.html">caching</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">caching</span><span class="symbol">: </span><a href="../io.ktor.http.content/-caching-options/index.html"><span class="identifier">CachingOptions</span></a><span class="symbol">?</span></code></div>

Gets or sets <a href="../io.ktor.http/-cache-control/index.html">CacheControl</a> instance as an extension property on this content


</td>
</tr>
<tr>
<td markdown="1">

<a href="../io.ktor.features/default-versions.html">defaultVersions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">defaultVersions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Retrieves LastModified and ETag versions from this <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="../io.ktor.http.content/versions.html">versions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">versions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http.content/-version/index.html"><span class="identifier">Version</span></a><span class="symbol">&gt;</span></code></div>

Gets or sets list of <a href="../io.ktor.http.content/-version/index.html">Version</a> instances as an extension property on this content


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="wrap-headers.html">wrapHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="identifier">wrapHeaders</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a></code></div>

Generates a new <a href="../io.ktor.http.content/-outgoing-content/index.html">OutgoingContent</a> of the same abstract type
but with <a href="../io.ktor.http.content/-outgoing-content/headers.html">OutgoingContent.headers</a> transformed by the specified <a href="wrap-headers.html#io.ktor.client.utils$wrapHeaders(io.ktor.http.content.OutgoingContent, kotlin.Function1((io.ktor.http.Headers, )))/block">block</a>.


</td>
</tr>
</tbody>
</table>
