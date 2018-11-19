---
title: io.ktor.velocity - 
layout: api
---



## Package io.ktor.velocity

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-velocity/index.html">Velocity</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Velocity</span></code></div>

Velocity ktor feature. Provides ability to respond with <a href="-velocity-content/index.html">VelocityContent</a> and <a href="respond-template.html">respondTemplate</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-velocity-content/index.html">VelocityContent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">VelocityContent</span></code></div>

Represents a response content that could be used to respond with <code>call.respond(VelocityContent(...))</code>


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
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTemplate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/template">template</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/model">model</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/etag">etag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ContentType.Text.Html.withCharset(Charsets.UTF_8)<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with <a href="respond-template.html#io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/template">template</a> applying <a href="respond-template.html#io.ktor.velocity$respondTemplate(io.ktor.application.ApplicationCall, kotlin.String, kotlin.collections.Map((kotlin.String, kotlin.Any)), kotlin.String, io.ktor.http.ContentType)/model">model</a>


</td>
</tr>
</tbody>
</table>
