---
title: CIOMultipartDataBase.readPart - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio</a> / <a href="index.html">CIOMultipartDataBase</a> / <a href="./read-part.html">readPart</a></div>

# readPart

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">readPart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http.content/-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">?</span></code></div>

Overrides <a href="../../io.ktor.http.content/-multi-part-data/read-part.html">MultiPartData.readPart</a>

Reads next part data or <code>null</code> if end of multipart stream encountered

