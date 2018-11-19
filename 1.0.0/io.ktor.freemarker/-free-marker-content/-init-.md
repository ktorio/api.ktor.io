---
title: FreeMarkerContent.<init> - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.freemarker</a> / <a href="index.html">FreeMarkerContent</a> / <a href="./-init-.html">&lt;init&gt;</a></div>

# &lt;init&gt;

<div class="signature"><code><span class="identifier">FreeMarkerContent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker.FreeMarkerContent$<init>(kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<span class="symbol">)</span></code></div>

Represents a content handled by <a href="../-free-marker/index.html">FreeMarker</a> feature.

### Parameters

<code>template</code> - name that is resolved by freemarker

<code>model</code> - to be passed during template rendering

<code>etag</code> - value for <code>E-Tag</code> header (optional)

<code>contentType</code> - of response (optional, <code>text/html</code> with UTF-8 character encoding by default)