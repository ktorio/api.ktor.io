---
title: ContentTransformationException - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="./index.html">ContentTransformationException</a></div>

# ContentTransformationException

<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ContentTransformationException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Thrown when content cannot be transformed to the desired type.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ContentTransformationException</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.request.ContentTransformationException$<init>(kotlin.String)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

Thrown when content cannot be transformed to the desired type.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-unsupported-media-type-exception/index.html">UnsupportedMediaTypeException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsupportedMediaTypeException</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">ContentTransformationException</span></a></code></div>

Thrown when there is no conversion for a content type configured


</td>
</tr>
</tbody>
</table>
