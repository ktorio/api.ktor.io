---
title: receiveMultipart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.request</a> / <a href="./receive-multipart.html">receiveMultipart</a></div>

# receiveMultipart

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveMultipart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http.content/-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a></code></div>

Receives multipart data for this call.

### Exceptions

<code>ContentTransformationException</code> - when content cannot be transformed to the <a href="../io.ktor.http.content/-multi-part-data/index.html">MultiPartData</a>.

**Return**
instance of <a href="../io.ktor.http.content/-multi-part-data/index.html">MultiPartData</a>.

