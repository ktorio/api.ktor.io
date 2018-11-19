---
title: HttpRequestBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.request</a> / <a href="./index.html">HttpRequestBuilder</a></div>

# HttpRequestBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpRequestBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a></code></div>

Class for building <a href="../-http-request-data/index.html">HttpRequestData</a>.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HttpRequestBuilder</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Class for building <a href="../-http-request-data/index.html">HttpRequestData</a>.


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="body.html">body</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">body</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

The <a href="body.html">body</a> for this request. Initially <a href="../../io.ktor.client.utils/-empty-content.html">EmptyContent</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="execution-context.html">executionContext</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">executionContext</span><span class="symbol">: </span><span class="identifier">Job</span></code></div>

A deferred used to control the execution of this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a></code></div>

<a href="../../io.ktor.http/-headers-builder/index.html">HeadersBuilder</a> to configure the headers for this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="method.html">method</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">method</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

<a href="../../io.ktor.http/-http-method/index.html">HttpMethod</a> used by this request. <a href="../../io.ktor.http/-http-method/-get.html">HttpMethod.Get</a> by default.


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">url</span><span class="symbol">: </span><a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

<a href="../../io.ktor.http/-u-r-l-builder/index.html">URLBuilder</a> to configure the URL for this request.


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-http-request-data/index.html"><span class="identifier">HttpRequestData</span></a></code></div>

Create immutable <a href="../-http-request-data/index.html">HttpRequestData</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="set-attributes.html">setAttributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">setAttributes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.HttpRequestBuilder$setAttributes(kotlin.Function1((io.ktor.util.Attributes, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-attributes/index.html"><span class="identifier">Attributes</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set request specific attributes specified by <a href="set-attributes.html#io.ktor.client.request.HttpRequestBuilder$setAttributes(kotlin.Function1((io.ktor.util.Attributes, kotlin.Unit)))/block">block</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="take-from.html">takeFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.HttpRequestBuilder$takeFrom(io.ktor.client.request.HttpRequestBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Mutates <a href="#">this</a> copying all the data from another <a href="take-from.html#io.ktor.client.request.HttpRequestBuilder$takeFrom(io.ktor.client.request.HttpRequestBuilder)/builder">builder</a> using it as base.


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request.HttpRequestBuilder$url(kotlin.Function2((io.ktor.http.URLBuilder, , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">host</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Gets the associated URL's host.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">port</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Gets the associated URL's port.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../accept.html">accept</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request$accept(io.ktor.client.request.HttpRequestBuilder, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets the <code>Accept</code> header with a specific <a href="../accept.html#io.ktor.client.request$accept(io.ktor.client.request.HttpRequestBuilder, io.ktor.http.ContentType)/contentType">contentType</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">charset</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$charset(io.ktor.http.HttpMessageBuilder, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">?</span></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Parse charset from <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentLength(io.ktor.http.HttpMessageBuilder, kotlin.Int)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Length</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HttpMessageBuilder, io.ktor.http.ContentType)/type">type</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Type</code> header

<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request$header(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.request$header(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a single header of <a href="../header.html#io.ktor.client.request$header(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/key">key</a> with a specific <a href="../header.html#io.ktor.client.request$header(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/value">value</a> if the value is not null.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">headers</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$headers(io.ktor.client.request.HttpRequestBuilder, kotlin.Function1((io.ktor.http.HeadersBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a></code></div>

Executes a <a href="../headers.html#io.ktor.client.request$headers(io.ktor.client.request.HttpRequestBuilder, kotlin.Function1((io.ktor.http.HeadersBuilder, kotlin.Unit)))/block">block</a> that configures the <a href="../../io.ktor.http/-headers-builder/index.html">HeadersBuilder</a> associated to this request.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/if-modified-since.html">ifModifiedSince</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifModifiedSince</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifModifiedSince(io.ktor.http.HttpMessageBuilder, java.util.Date)/date">date</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-Modified-Since</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/if-none-match.html">ifNoneMatch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifNoneMatch</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifNoneMatch(io.ktor.http.HttpMessageBuilder, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-None-Match</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Last-Modified</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/max-age.html">maxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">maxAge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$maxAge(io.ktor.http.HttpMessageBuilder, kotlin.Int)/seconds">seconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Max-Age</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../parameter.html">parameter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">parameter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$parameter(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/key">key</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$parameter(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a single parameter of <a href="../parameter.html#io.ktor.client.request$parameter(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/key">key</a> with a specific <a href="../parameter.html#io.ktor.client.request$parameter(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.Any)/value">value</a> if the value is not null.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../take-from.html">takeFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$takeFrom(io.ktor.client.request.HttpRequestBuilder, io.ktor.client.request.HttpRequest)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../-http-request/index.html"><span class="identifier">HttpRequest</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Mutates <a href="../take-from/-this-.html">this</a> copying all the data from another <a href="../take-from.html#io.ktor.client.request$takeFrom(io.ktor.client.request.HttpRequestBuilder, io.ktor.client.request.HttpRequest)/request">request</a> using it as base.

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$takeFrom(io.ktor.client.request.HttpRequestBuilder, io.ktor.client.request.HttpRequestData)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../-http-request-data/index.html"><span class="identifier">HttpRequestData</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Sets the <a href="./index.md">HttpRequestBuilder</a> from <a href="../take-from.html#io.ktor.client.request$takeFrom(io.ktor.client.request.HttpRequestBuilder, io.ktor.client.request.HttpRequestData)/request">request</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, java.net.URL)/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets the <a href="url.html">HttpRequestBuilder.url</a> from <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, java.net.URL)/url">url</a>.

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Executes a <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> that configures the <a href="../../io.ktor.http/-u-r-l-builder/index.html">URLBuilder</a> associated to this request.

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/scheme">scheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"http"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"localhost"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;DEFAULT_PORT<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"/"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets the <a href="../url.html">url</a> using the specified <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/scheme">scheme</a>, <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/host">host</a>, <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/port">port</a> and <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/path">path</a>.

<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets the <a href="url.html">HttpRequestBuilder.url</a> from <a href="../url.html#io.ktor.client.request$url(io.ktor.client.request.HttpRequestBuilder, kotlin.String)/urlString">urlString</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/user-agent.html">userAgent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">userAgent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$userAgent(io.ktor.http.HttpMessageBuilder, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>User-Agent</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.http/vary.html">vary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../../io.ktor.http/-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

Parse <code>Vary</code> header value


</td>
</tr>
</tbody>
</table>

### Companion Object Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">HttpRequestBuilder.Companion</span><span class="symbol">.</span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, java.net.URL)/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Constructs a <a href="./index.md">HttpRequestBuilder</a> from <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, java.net.URL)/url">url</a>.

<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">HttpRequestBuilder.Companion</span><span class="symbol">.</span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Executes a <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> that configures the <a href="../../io.ktor.http/-u-r-l-builder/index.html">URLBuilder</a> associated to thisrequest.

<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">HttpRequestBuilder.Companion</span><span class="symbol">.</span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/scheme">scheme</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"http"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"localhost"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/port">port</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;DEFAULT_PORT<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;"/"<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">HttpRequestBuilder</span></a></code></div>

Constructs a <a href="./index.md">HttpRequestBuilder</a> from URL information: <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/scheme">scheme</a>, <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/host">host</a>, <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/port">port</a> and <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/path">path</a>
and optionally further configures it using <a href="../invoke.html#io.ktor.client.request$invoke(io.ktor.client.request.HttpRequestBuilder.Companion, kotlin.String, kotlin.String, kotlin.Int, kotlin.String, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a>.


</td>
</tr>
</tbody>
</table>
