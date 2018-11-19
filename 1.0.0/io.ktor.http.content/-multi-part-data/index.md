---
title: MultiPartData - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">MultiPartData</a></div>

# MultiPartData

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">MultiPartData</span></code></div>

Represents a multipart data stream that could be received from a call

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-empty/index.html">Empty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Empty</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultiPartData</span></a></code></div>

An empty multipart data stream


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="read-part.html">readPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">readPart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">?</span></code></div>

Reads next part data or <code>null</code> if end of multipart stream encountered


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../for-each-part.html">forEachPart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">forEachPart</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><a href="../-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Parse multipart data stream and invoke <a href="../for-each-part.html#io.ktor.http.content$forEachPart(io.ktor.http.content.MultiPartData, kotlin.SuspendFunction1((io.ktor.http.content.PartData, kotlin.Unit)))/partHandler">partHandler</a> for each <a href="../-part-data/index.html">PartData</a> encountered


</td>
</tr>
<tr>
<td markdown="1">

<a href="../read-all-parts.html">readAllParts</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">MultiPartData</span></a><span class="symbol">.</span><span class="identifier">readAllParts</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-part-data/index.html"><span class="identifier">PartData</span></a><span class="symbol">&gt;</span></code></div>

Parse multipart data stream and put all parts into a list


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.http.cio/-c-i-o-multipart-data-base/index.html">CIOMultipartDataBase</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CIOMultipartDataBase</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultiPartData</span></a><span class="symbol">, </span><span class="identifier">CoroutineScope</span></code></div>

Represents a multipart data object that does parse and convert parts to ktor's <a href="../-part-data/index.html">PartData</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-empty/index.html">Empty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">Empty</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">MultiPartData</span></a></code></div>

An empty multipart data stream


</td>
</tr>
</tbody>
</table>
