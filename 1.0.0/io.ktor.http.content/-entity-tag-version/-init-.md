---
title: EntityTagVersion.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">EntityTagVersion</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">EntityTagVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.EntityTagVersion$<init>(kotlin.String)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

This version checks <a href="-init-.html#io.ktor.http.content.EntityTagVersion$<init>(kotlin.String)/etag">etag</a> value and pass it through conditions supplied by the remote client. Depending on conditions it
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

