---
title: PartData - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.content</a> / <a href="./index.html">PartData</a></div>

# PartData

<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">PartData</span></code></div>

Represents a multipart/form-data entry. Could be a <a href="-form-item/index.html">FormItem</a> or <a href="-file-item/index.html">FileItem</a>

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-binary-item/index.html">BinaryItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BinaryItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a binary item


</td>
</tr>
<tr>
<td markdown="1">

<a href="-file-item/index.html">FileItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FileItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a file item


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-item/index.html">FormItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a multipart form item


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-disposition.html">contentDisposition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentDisposition</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-disposition/index.html"><span class="identifier">ContentDisposition</span></a><span class="symbol">?</span></code></div>

Parsed <code>Content-Disposition</code> header or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parsed <code>Content-Type</code> header or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="dispose.html">dispose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">dispose</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

to be invoked when this part is no longed needed


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

of this part, could be inaccurate on some engines


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Optional part name based on <code>Content-Disposition</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="part-headers.html">partHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">partHeaders</span></s><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="part-name.html">partName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">partName</span></s><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-binary-item/index.html">BinaryItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BinaryItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a binary item


</td>
</tr>
<tr>
<td markdown="1">

<a href="-file-item/index.html">FileItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FileItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a file item


</td>
</tr>
<tr>
<td markdown="1">

<a href="-form-item/index.html">FormItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FormItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">PartData</span></a></code></div>

Represents a multipart form item


</td>
</tr>
</tbody>
</table>
