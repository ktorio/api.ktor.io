---
title: VelocityContent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.velocity</a> / <a href="./index.html">VelocityContent</a></div>

# VelocityContent

<div class="signature"><code><span class="keyword">class </span><span class="identifier">VelocityContent</span></code></div>

Represents a response content that could be used to respond with <code>call.respond(VelocityContent(...))</code>

### Parameters

<code>template</code> - name to be resolved by velocity

<code>model</code> - to be passed to the template

<code>etag</code> - header value (optional)

<code>contentType</code> - (optional, <code>text/html</code> with UTF-8 character encoding by default)

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">VelocityContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.VelocityContent$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.VelocityContent$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.VelocityContent$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity.VelocityContent$<init>(kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<span class="symbol">)</span></code></div>

Represents a response content that could be used to respond with <code>call.respond(VelocityContent(...))</code>


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

(optional, <code>text/html</code> with UTF-8 character encoding by default)


</td>
</tr>
<tr>
<td markdown="1">

<a href="etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">etag</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

header value (optional)


</td>
</tr>
<tr>
<td markdown="1">

<a href="model.html">model</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">model</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span></code></div>

to be passed to the template


</td>
</tr>
<tr>
<td markdown="1">

<a href="template.html">template</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">template</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

name to be resolved by velocity


</td>
</tr>
</tbody>
</table>
