---
title: FormDataContent.contentLength - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request.forms</a> / <a href="index.html">FormDataContent</a> / <a href="./content-length.html">contentLength</a></div>

# contentLength

<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentLength</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a></code></div>

Overrides <a href="../../io.ktor.http.content/-outgoing-content/content-length.html">OutgoingContent.contentLength</a>

Specifies content length in bytes for this resource.

If null, the resources will be sent as <code>Transfer-Encoding: chunked</code>

