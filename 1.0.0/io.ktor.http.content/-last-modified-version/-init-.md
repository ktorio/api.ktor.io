---
title: LastModifiedVersion.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">LastModifiedVersion</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.nio.file.attribute.FileTime)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<span class="identifier">FileTime</span><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.util.Date)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">)</span></code></div>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="identifier">LastModifiedVersion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.content.LastModifiedVersion$<init>(java.time.ZonedDateTime)/lastModified">lastModified</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><span class="symbol">)</span></code></div>

This version passes the given <a href="-init-.html#io.ktor.http.content.LastModifiedVersion$<init>(java.time.ZonedDateTime)/lastModified">lastModified</a> date through the client provided
http conditional headers If-Modified-Since and If-Unmodified-Since.

Notice the second precision so it may work wrong if there were few changes during the same second.

For better behaviour use etag instead

See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.28 and
https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.25

### Parameters

<code>lastModified</code> - of the current content, for example file's last modified date

</div>
