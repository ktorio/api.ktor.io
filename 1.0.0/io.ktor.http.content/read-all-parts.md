---
title: readAllParts - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http.content</a> / <a href="./read-all-parts.html">readAllParts</a></div>

# readAllParts

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">readAllParts</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Parse multipart data stream and put all parts into a list

**Return**
a list of part data

