---
title: PartData.FileItem - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.content</a> / <a href="../index.html">PartData</a> / <a href="./index.html">FileItem</a></div>

# FileItem

<div class="signature"><code><span class="keyword">class </span><span class="identifier">FileItem</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">PartData</span></a></code></div>

Represents a file item

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">FileItem</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.PartData.FileItem$<init>(kotlin.Function0((kotlinx.io.core.Input)), kotlin.Function0((kotlin.Unit)), io.ktor.http.Headers)/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">Input</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.PartData.FileItem$<init>(kotlin.Function0((kotlinx.io.core.Input)), kotlin.Function0((kotlin.Unit)), io.ktor.http.Headers)/dispose">dispose</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.content.PartData.FileItem$<init>(kotlin.Function0((kotlinx.io.core.Input)), kotlin.Function0((kotlin.Unit)), io.ktor.http.Headers)/partHeaders">partHeaders</span><span class="symbol">:</span>&nbsp;<a href="../../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">)</span></code></div>

Represents a file item


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="original-file-name.html">originalFileName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">originalFileName</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Original file name if present


</td>
</tr>
<tr>
<td markdown="1">

<a href="provider.html">provider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">provider</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<span class="identifier">Input</span></code></div>

of content bytes


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../content-disposition.html">contentDisposition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentDisposition</span><span class="symbol">: </span><a href="../../../io.ktor.http/-content-disposition/index.html"><span class="identifier">ContentDisposition</span></a><span class="symbol">?</span></code></div>

Parsed <code>Content-Disposition</code> header or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parsed <code>Content-Type</code> header or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="../dispose.html">dispose</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">dispose</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

to be invoked when this part is no longed needed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

of this part, could be inaccurate on some engines


</td>
</tr>
<tr>
<td markdown="1">

<a href="../name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Optional part name based on <code>Content-Disposition</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../part-headers.html">partHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">partHeaders</span></s><span class="symbol">: </span><a href="../../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../part-name.html">partName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">partName</span></s><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../stream-provider.html">streamProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">FileItem</span></a><span class="symbol">.</span><span class="identifier">streamProvider</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html"><span class="identifier">InputStream</span></a></code></div>

Provides file item's content as an <a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html">InputStream</a>


</td>
</tr>
</tbody>
</table>
