---
title: io.ktor.freemarker - 
layout: api
---



## Package io.ktor.freemarker

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-free-marker/index.html">FreeMarker</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FreeMarker</span></code></div>

Freemarker support feature. Provides ability to respond with <a href="-free-marker-content/index.html">FreeMarkerContent</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-free-marker-content/index.html">FreeMarkerContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">FreeMarkerContent</span></code></div>

Represents a content handled by <a href="-free-marker/index.html">FreeMarker</a> feature.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="respond-template.html">respondTemplate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with the specified <a href="respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</a> passing <a href="respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</a>


</td>
</tr>
</tbody>
</table>
