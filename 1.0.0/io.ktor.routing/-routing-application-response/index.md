---
title: RoutingApplicationResponse - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.routing</a> / <a href="./index.html">RoutingApplicationResponse</a></div>

# RoutingApplicationResponse

<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a></code></div>

Represents an application response being handled by <a href="../-routing/index.html">Routing</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RoutingApplicationResponse</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationResponse$<init>(io.ktor.routing.RoutingApplicationCall, io.ktor.response.ApplicationSendPipeline, io.ktor.response.ApplicationResponse)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationResponse$<init>(io.ktor.routing.RoutingApplicationCall, io.ktor.response.ApplicationSendPipeline, io.ktor.response.ApplicationResponse)/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.routing.RoutingApplicationResponse$<init>(io.ktor.routing.RoutingApplicationCall, io.ktor.response.ApplicationSendPipeline, io.ktor.response.ApplicationResponse)/response">response</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">)</span></code></div>

Represents an application response being handled by <a href="../-routing/index.html">Routing</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../-routing-application-call/index.html"><span class="identifier">RoutingApplicationCall</span></a></code></div>

<a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> instance this ApplicationResponse is attached to


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../../io.ktor.response/-application-send-pipeline/index.html"><span class="identifier">ApplicationSendPipeline</span></a></code></div>

Pipeline for sending content


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cache-control/index.html"><span class="identifier">CacheControl</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Cache-Control</code> HTTP header <a href="../../io.ktor.response/cache-control.html#io.ktor.response$cacheControl(io.ktor.response.ApplicationResponse, io.ktor.http.CacheControl)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentLength(io.ktor.response.ApplicationResponse, kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-range.html">contentRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-range-units/index.html"><span class="identifier">RangeUnits</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">contentRange</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Content-Range</code> header with specified <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</a> and <a href="../../io.ktor.response/content-range.html#io.ktor.response$contentRange(io.ktor.response.ApplicationResponse, kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, io.ktor.http.ContentType)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$contentType(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>E-Tag</code> HTTP header <a href="../../io.ktor.response/etag.html#io.ktor.response$etag(io.ktor.response.ApplicationResponse, kotlin.String)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Expires</code> HTTP header <a href="../../io.ktor.response/expires.html#io.ktor.response$expires(io.ktor.response.ApplicationResponse, java.time.LocalDateTime)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with string <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.String)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with integer numeric <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Int)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with long integer numeric <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Long)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</span><span class="symbol">:</span>&nbsp;<span class="identifier">Temporal</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header with temporal <a href="../../io.ktor.response/header.html#io.ktor.response$header(io.ktor.response.ApplicationResponse, kotlin.String, java.time.temporal.Temporal)/date">date</a> (date, time and so on)


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.response/last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append response <code>Last-Modified</code> HTTP header value from <a href="../../io.ktor.response/last-modified.html#io.ktor.response$lastModified(io.ktor.response.ApplicationResponse, java.time.ZonedDateTime)/dateTime">dateTime</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/link.html">link</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, io.ktor.http.LinkHeader)/header">header</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-link-header/index.html"><span class="identifier">LinkHeader</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response with specified <a href="../../io.ktor.http/link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</a> and <a href="../../io.ktor.http/link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</a>


</td>
</tr>
</tbody>
</table>
