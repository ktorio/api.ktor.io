---
title: LastModifiedVersion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">LastModifiedVersion</a></div>

# LastModifiedVersion

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">LastModifiedVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-version/index.html"><span class="identifier">Version</span></a></code></div>

This version passes the given <a href="last-modified.html">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since.

Notice the second precision so it may work wrong if there were few changes during the same second.

For better behaviour use etag instead

See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28 and
https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25

### Parameters

<code>lastModified</code> - of the current content, for example file's last modified date

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.nio.file.attribute.FileTime)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<span class="identifier">FileTime</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.util.Date)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.time.ZonedDateTime)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><span class="symbol">)</span></code></div>

This version passes the given <a href="-init-.html#io.ktor.http.content.LastModifiedVersion$<init>(java.time.ZonedDateTime)/lastModified">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">lastModified</span><span class="symbol">: </span><span class="identifier">ZonedDateTime</span></code></div>

of the current content, for example file's last modified date


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append-headers-to.html">appendHeadersTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendHeadersTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$appendHeadersTo(io.ktor.http.HeadersBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends relevant headers to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="check.html">check</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">check</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-version-check-result/index.html"><span class="identifier">VersionCheckResult</span></a></code></div>

</td>
</tr>
</tbody>
</table>
