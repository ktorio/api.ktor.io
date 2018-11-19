---
title: MultiPartData.readPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="index.html">MultiPartData</a> / <a href="./read-part.html">readPart</a></div>

# readPart

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">readPart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">?</span></code></div>

Reads next part data or <code>null</code> if end of multipart stream encountered

