---
title: HttpMessageBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HttpMessageBuilder</a></div>

# HttpMessageBuilder

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpMessageBuilder</span></code></div>

A builder message either for the client or the server,
that has a <a href="headers.html">headers</a> builder associated.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a></code></div>

MessageBuilder <a href="../-headers-builder/index.html">HeadersBuilder</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">charset</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$charset(io.ktor.http.HttpMessageBuilder, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">?</span></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Parse charset from <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentLength(io.ktor.http.HttpMessageBuilder, kotlin.Int)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Length</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HttpMessageBuilder, io.ktor.http.ContentType)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Type</code> header

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../if-modified-since.html">ifModifiedSince</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifModifiedSince</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifModifiedSince(io.ktor.http.HttpMessageBuilder, java.util.Date)/date">date</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-Modified-Since</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../if-none-match.html">ifNoneMatch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifNoneMatch</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifNoneMatch(io.ktor.http.HttpMessageBuilder, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-None-Match</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Last-Modified</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../max-age.html">maxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">maxAge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$maxAge(io.ktor.http.HttpMessageBuilder, kotlin.Int)/seconds">seconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Max-Age</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../user-agent.html">userAgent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">userAgent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$userAgent(io.ktor.http.HttpMessageBuilder, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>User-Agent</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../vary.html">vary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

Parse <code>Vary</code> header value


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.request/-http-request-builder/index.html">HttpRequestBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpRequestBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpMessageBuilder</span></a></code></div>

Class for building <a href="../../io.ktor.client.request/-http-request-data/index.html">HttpRequestData</a>.


</td>
</tr>
</tbody>
</table>
