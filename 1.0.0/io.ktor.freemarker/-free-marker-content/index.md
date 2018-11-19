---
title: FreeMarkerContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.freemarker</a> / <a href="./index.html">FreeMarkerContent</a></div>

# FreeMarkerContent

<div class="signature"><code><span class="keyword">class </span><span class="identifier">FreeMarkerContent</span></code></div>

Represents a content handled by <a href="../-free-marker/index.html">FreeMarker</a> feature.

### Parameters

<code>template</code> - name that is resolved by freemarker

<code>model</code> - to be passed during template rendering

<code>etag</code> - value for <code>E-Tag</code> header (optional)

<code>contentType</code> - of response (optional, <code>text/html</code> with UTF-8 character encoding by default)

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">FreeMarkerContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<span class="symbol">)</span></code></div>

Represents a content handled by <a href="../-free-marker/index.html">FreeMarker</a> feature.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">contentType</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

of response (optional, <code>text/html</code> with UTF-8 character encoding by default)


</td>
</tr>
<tr>
<td markdown="1">

<a href="etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">etag</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

value for <code>E-Tag</code> header (optional)


</td>
</tr>
<tr>
<td markdown="1">

<a href="model.html">model</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">model</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

to be passed during template rendering


</td>
</tr>
<tr>
<td markdown="1">

<a href="template.html">template</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">template</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

name that is resolved by freemarker


</td>
</tr>
</tbody>
</table>
