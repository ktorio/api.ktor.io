---
title: MultiPartData.Empty - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">MultiPartData</a> / <a href="./index.html">Empty</a></div>

# Empty

<div class="signature"><code><span class="keyword">object </span><span class="identifier">Empty</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">MultiPartData</span></a></code></div>

An empty multipart data stream

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read-part.html">readPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">readPart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">?</span></code></div>

Reads next part data or <code>null</code> if end of multipart stream encountered


</td>
</tr>
</tbody>
</table>
