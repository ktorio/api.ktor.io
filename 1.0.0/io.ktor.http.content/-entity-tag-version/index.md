---
title: EntityTagVersion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">EntityTagVersion</a></div>

# EntityTagVersion

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">EntityTagVersion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-version/index.html"><span class="identifier">Version</span></a></code></div>

This version checks <a href="etag.html">etag</a> value and pass it through conditions supplied by the remote client. Depending on conditions it
produces return value of enum type <a href="../-version-check-result/index.html">VersionCheckResult</a>

It never handles If-None-Match: *  as it is related to non-etag logic (for example, Last modified checks).
See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.26 for more details

### Parameters

<code>etag</code> -
* entity tag, for example file's content hash

**Return**
<a href="../-version-check-result/-o-k.html">VersionCheckResult.OK</a> if all headers pass or there was no related headers,
<a href="../-version-check-result/-n-o-t_-m-o-d-i-f-i-e-d.html">VersionCheckResult.NOT_MODIFIED</a> for successful If-None-Match,
<a href="../-version-check-result/-p-r-e-c-o-n-d-i-t-i-o-n_-f-a-i-l-e-d.html">VersionCheckResult.PRECONDITION_FAILED</a> for failed If-Match

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">EntityTagVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.EntityTagVersion$<init>(kotlin.String)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

This version checks <a href="-init-.html#io.ktor.http.content.EntityTagVersion$<init>(kotlin.String)/etag">etag</a> value and pass it through conditions supplied by the remote client. Depending on conditions it
produces return value of enum type <a href="../-version-check-result/index.html">VersionCheckResult</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">etag</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>
* entity tag, for example file's content hash

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendHeadersTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.EntityTagVersion$appendHeadersTo(io.ktor.http.HeadersBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends relevant headers to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="check.html">check</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">check</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.EntityTagVersion$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-version-check-result/index.html"><span class="identifier">VersionCheckResult</span></a></code></div>

Checks <a href="check.html#io.ktor.http.content.EntityTagVersion$check(io.ktor.http.Headers)/requestHeaders">requestHeaders</a> against this version and returns <a href="../-version-check-result/index.html">VersionCheckResult</a>


</td>
</tr>
</tbody>
</table>
