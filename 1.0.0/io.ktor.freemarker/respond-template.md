---
title: respondTemplate - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.freemarker</a> / <a href="./respond-template.html">respondTemplate</a></div>

# respondTemplate

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with the specified <a href="respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/template">template</a> passing <a href="respond-template.html#io.ktor.freemarker$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Any, kotlin.String, io.ktor.http.ContentType)/model">model</a>

**See Also**

<a href="-free-marker-content/index.html">FreeMarkerContent</a>

