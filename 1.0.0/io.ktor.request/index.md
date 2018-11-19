---
title: io.ktor.request - 
layout: api
---



## Package io.ktor.request

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-application-receive-pipeline/index.html">ApplicationReceivePipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">ApplicationReceivePipeline</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util.pipeline/-pipeline/index.html"><span class="identifier">Pipeline</span></a><span class="symbol">&lt;</span><a href="-application-receive-request/index.html"><span class="identifier">ApplicationReceiveRequest</span></a><span class="symbol">,</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">&gt;</span></code></div>

Pipeline for processing incoming content


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-receive-request/index.html">ApplicationReceiveRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ApplicationReceiveRequest</span></code></div>

Represents a subject for <a href="-application-receive-pipeline/index.html">ApplicationReceivePipeline</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-application-request/index.html">ApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationRequest</span></code></div>

Represents client's request


</td>
</tr>
<tr>
<td markdown="1">

<a href="-request-cookies/index.html">RequestCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">RequestCookies</span></code></div>

Server request's cookies


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-content-transformation-exception/index.html">ContentTransformationException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">ContentTransformationException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Thrown when content cannot be transformed to the desired type.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="http-method.html">httpMethod</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">httpMethod</span><span class="symbol">: </span><a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

Returns request HTTP method possibly overridden via header X-Http-Method-Override


</td>
</tr>
<tr>
<td markdown="1">

<a href="http-version.html">httpVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">httpVersion</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's HTTP version


</td>
</tr>
<tr>
<td markdown="1">

<a href="uri.html">uri</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">uri</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's URI (including query string)


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="accept.html">accept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-charset.html">acceptCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptCharset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Charset</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-charset-items.html">acceptCharsetItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptCharsetItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Charset</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-encoding.html">acceptEncoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptEncoding</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Encoding</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-encoding-items.html">acceptEncodingItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptEncodingItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Encoding</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-items.html">acceptItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed request's <code>Accept</code> header and sorted according to quality


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-language.html">acceptLanguage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptLanguage</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Language</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="accept-language-items.html">acceptLanguageItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptLanguageItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Language</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="authorization.html">authorization</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">authorization</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request authorization header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Cache-Control</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-charset.html">contentCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">contentCharset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Request's charset


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Request's content type or <code>ContentType.Any</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="document.html">document</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">document</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's document name (substring after the last slash but before query string)


</td>
</tr>
<tr>
<td markdown="1">

<a href="header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.request$header(io.ktor.request.ApplicationRequest, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

First header value for header with <a href="header.html#io.ktor.request$header(io.ktor.request.ApplicationRequest, kotlin.String)/name">name</a> or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">host</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's host without port


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-chunked.html">isChunked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">isChunked</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if request's body is chunk-encoded


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-multipart.html">isMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">isMultipart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if request body is multipart-encoded


</td>
</tr>
<tr>
<td markdown="1">

<a href="location.html">location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Location</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">path</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's path without query string


</td>
</tr>
<tr>
<td markdown="1">

<a href="port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">port</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Request's port extracted from <code>Host</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="query-string.html">queryString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">queryString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's query string or empty string if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="ranges.html">ranges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">ranges</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-ranges-specifier/index.html"><span class="identifier">RangesSpecifier</span></a><span class="symbol">?</span></code></div>

Parsed request's <code>Range</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive.html">receive</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receive</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request$receive(io.ktor.application.ApplicationCall, kotlin.reflect.KClass((io.ktor.request.receive.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="receive.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="receive.html#T"><span class="identifier">T</span></a></code></div>

Receives content for this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-channel.html">receiveChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Receives channel content for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-multipart.html">receiveMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveMultipart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http.content/-multi-part-data/index.html"><span class="identifier">MultiPartData</span></a></code></div>

Receives multipart data for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-or-null.html">receiveOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request$receiveOrNull(io.ktor.application.ApplicationCall, kotlin.reflect.KClass((io.ktor.request.receiveOrNull.T)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="receive-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Receives content for this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-parameters.html">receiveParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveParameters</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Receives form parameters for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-stream.html">receiveStream</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveStream</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/io/InputStream.html"><span class="identifier">InputStream</span></a></code></div>

Receives stream content for this call.


</td>
</tr>
<tr>
<td markdown="1">

<a href="receive-text.html">receiveText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">receiveText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Receives incoming content for this call as <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="user-agent.html">userAgent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">userAgent</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>User-Agent</code> header value


</td>
</tr>
</tbody>
</table>
