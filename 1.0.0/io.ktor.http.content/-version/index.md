---
title: Version - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">Version</a></div>

# Version

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Version</span></code></div>

Represents content version

An example of version is <a href="../-entity-tag-version/index.html">EntityTagVersion</a> or <a href="../-last-modified-version/index.html">LastModifiedVersion</a>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append-headers-to.html">appendHeadersTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">appendHeadersTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.Version$appendHeadersTo(io.ktor.http.HeadersBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends relevant headers to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="check.html">check</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">check</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.Version$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-version-check-result/index.html"><span class="identifier">VersionCheckResult</span></a></code></div>

Checks <a href="check.html#io.ktor.http.content.Version$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</a> against this version and returns <a href="../-version-check-result/index.html">VersionCheckResult</a>


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-entity-tag-version/index.html">EntityTagVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">EntityTagVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Version</span></a></code></div>

This version checks <a href="../-entity-tag-version/etag.html">etag</a> value and pass it through conditions supplied by the remote client. Depending on conditions it
produces return value of enum type <a href="../-version-check-result/index.html">VersionCheckResult</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-last-modified-version/index.html">LastModifiedVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">LastModifiedVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Version</span></a></code></div>

This version passes the given <a href="../-last-modified-version/last-modified.html">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since.


</td>
</tr>
</tbody>
</table>
