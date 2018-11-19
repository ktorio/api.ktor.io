---
title: LocalFileContent.contentLength - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">LocalFileContent</a> / <a href="./content-length.html">contentLength</a></div>

# contentLength

<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

Overrides <a href="../-outgoing-content/content-length.html">OutgoingContent.contentLength</a>

Specifies content length in bytes for this resource.

If null, the resources will be sent as <code>Transfer-Encoding: chunked</code>

