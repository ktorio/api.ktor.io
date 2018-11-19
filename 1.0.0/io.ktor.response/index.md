---
title: io.ktor.response - 
layout: api
---



## Package io.ktor.response

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-response/index.html">ApplicationResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationResponse</span></code></div>

Represents server's response


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-send-pipeline/index.html">ApplicationSendPipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationSendPipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Server response send pipeline


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-response-push-builder/index.html">DefaultResponsePushBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DefaultResponsePushBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a></code></div>

HTTP/2 push builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="-response-cookies/index.html">ResponseCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ResponseCookies</span></code></div>

Server's response cookies


</td>
</tr>
<tr>
<td markdown="1">

<a href="-response-headers/index.html">ResponseHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ResponseHeaders</span></code></div>

Server's response headers


</td>
</tr>
<tr>
<td markdown="1">

<a href="-response-push-builder/index.html">ResponsePushBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ResponsePushBuilder</span></code></div>

HTTP/2 push builder interface


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Cache-Control</code> HTTP header <a href="cache-control.html#io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$cacheControl(io.ktor.http.HeadersBuilder, io.ktor.http.CacheControl)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Cache-Control</code> HTTP header <a href="cache-control.html#io.ktor.response$cacheControl(io.ktor.http.HeadersBuilder, io.ktor.http.CacheControl)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentLength(io.ktor.response.ApplicationResponse, kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="content-range.html">contentRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append 'Content-Range` header with specified <a href="content-range.html#io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</a> and <a href="content-range.html#io.ktor.response$contentRange(io.ktor.http.HeadersBuilder, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-range-units/index.html"><span class="identifier">RangeUnits</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Content-Range</code> header with specified <a href="content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</a> and <a href="content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, io.ktor.http.ContentType)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="default-text-content-type.html">defaultTextContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">defaultTextContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Creates a default <a href="../io.ktor.http/-content-type/index.html">ContentType</a> based on the given <a href="default-text-content-type.html#io.ktor.response$defaultTextContentType(io.ktor.application.ApplicationCall, io.ktor.http.ContentType)/contentType">contentType</a> and current call


</td>
</tr>
<tr>
<td markdown="1">

<a href="etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>E-Tag</code> HTTP header <a href="etag.html#io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Expires</code> HTTP header <a href="expires.html#io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with string <a href="header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with integer numeric <a href="header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with long integer numeric <a href="header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</span><span class="symbol">:</span>&nbsp;<span class="identifier">Temporal</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with temporal <a href="header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</a> (date, time and so on)


</td>
</tr>
<tr>
<td markdown="1">

<a href="last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Last-Modified</code> HTTP header value from <a href="last-modified.html#io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond.html">respond</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sends a <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, kotlin.Any)/message">message</a> as a response

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respond</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/status">status</a> and sends a <a href="respond.html#io.ktor.response$respond(io.ktor.application.ApplicationCall, io.ktor.http.HttpStatusCode, kotlin.Any)/message">message</a> as a response


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-bytes.html">respondBytes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.ByteArray)))/provider">provider</a> to build a byte array

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondBytes</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a raw bytes response, using specified <a href="respond-bytes.html#io.ktor.response$respondBytes(io.ktor.application.ApplicationCall, kotlin.ByteArray, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/bytes">bytes</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-file.html">respondFile</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/baseDir">baseDir</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/fileName">fileName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a contents of a file with the name <a href="respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/fileName">fileName</a> in the <a href="respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.String, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/baseDir">baseDir</a> folder

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/file">file</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a contents of a <a href="respond-file.html#io.ktor.response$respondFile(io.ktor.application.ApplicationCall, java.io.File, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/file">file</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-output-stream.html">respondOutputStream</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondOutputStream</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondOutputStream(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.OutputStream, kotlin.Unit)))/producer">producer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/OutputStream.html"><span class="identifier">OutputStream</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with binary content producer.


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-redirect.html">respondRedirect</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/url">url</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.String, kotlin.Boolean)/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondRedirect</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/permanent">permanent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a <code>301 Moved Permanently</code> or <code>302 Found</code> redirect.
Unlike the other <a href="respond-redirect.html">respondRedirect</a> it provides a way to build URL based on current call using <a href="respond-redirect.html#io.ktor.response$respondRedirect(io.ktor.application.ApplicationCall, kotlin.Boolean, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-text.html">respondText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.Function1((io.ktor.http.content.OutgoingContent, kotlin.Unit)))/text">text</a>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondText</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Responds to a client with a plain text response, using specified <a href="respond-text.html#io.ktor.response$respondText(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction0((kotlin.String)))/provider">provider</a> to build a text


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-text-writer.html">respondTextWriter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">respondTextWriter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondTextWriter(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/writer">writer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Respond with text content writer.


</td>
</tr>
<tr>
<td markdown="1">

<a href="respond-write.html">respondWrite</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><s><span class="identifier">respondWrite</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/status">status</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$respondWrite(io.ktor.application.ApplicationCall, io.ktor.http.ContentType, io.ktor.http.HttpStatusCode, kotlin.SuspendFunction1((java.io.Writer, kotlin.Unit)))/writer">writer</span><span class="symbol">:</span>&nbsp;<span class="keyword">suspend </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/Writer.html"><span class="identifier">Writer</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
