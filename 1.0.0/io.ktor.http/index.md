---
title: io.ktor.http - 
layout: api
---



## Package io.ktor.http

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-cache-control/index.html">CacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">CacheControl</span></code></div>

Represents a value for a <code>Cache-Control</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="-content-disposition/index.html">ContentDisposition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentDisposition</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents <code>Content-Disposition</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-content-range/index.html">ContentRange</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">sealed</span> <span class="keyword">class </span><span class="identifier">ContentRange</span></code></div>

Represents a <code>Range</code> header's particular range


</td>
</tr>
<tr>
<td markdown="1">

<a href="-content-type/index.html">ContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ContentType</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a value for a <code>Content-Type</code> header.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookie/index.html">Cookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Cookie</span></code></div>

Represents a cooke value


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookie-encoding/index.html">CookieEncoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">CookieEncoding</span></code></div>

Cooke encoding strategy


</td>
</tr>
<tr>
<td markdown="1">

<a href="-empty-headers/index.html">EmptyHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><s><span class="identifier">EmptyHeaders</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-empty-parameters/index.html">EmptyParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><s><span class="identifier">EmptyParameters</span></s>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-value/index.html">HeaderValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HeaderValue</span></code></div>

Represents a header value. Similar to <a href="-header-value-with-parameters/index.html">HeaderValueWithParameters</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-value-param/index.html">HeaderValueParam</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HeaderValueParam</span></code></div>

Represents a single value parameter


</td>
</tr>
<tr>
<td markdown="1">

<a href="-header-value-with-parameters/index.html">HeaderValueWithParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">HeaderValueWithParameters</span></code></div>

Represents a header value that consist of <a href="-header-value-with-parameters/content.html">content</a> followed by <a href="-header-value-with-parameters/parameters.html">parameters</a>.
Useful for headers such as <code>Content-Type</code>, <code>Content-Disposition</code> and so on.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-headers/index.html">Headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Headers</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Represents HTTP headers as a map from case-insensitive names to collection of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> values


</td>
</tr>
<tr>
<td markdown="1">

<a href="-headers-builder/index.html">HeadersBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeadersBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-headers-impl/index.html">HeadersImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeadersImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">, </span><a href="../io.ktor.util/-string-values-impl/index.html"><span class="identifier">StringValuesImpl</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-headers-single-impl/index.html">HeadersSingleImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HeadersSingleImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-headers/index.html"><span class="identifier">Headers</span></a><span class="symbol">, </span><a href="../io.ktor.util/-string-values-single-impl/index.html"><span class="identifier">StringValuesSingleImpl</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-headers/index.html">HttpHeaders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">HttpHeaders</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-message/index.html">HttpMessage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpMessage</span></code></div>

A message either from the client or the server,
that has <a href="-http-message/headers.html">headers</a> associated.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-message-builder/index.html">HttpMessageBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpMessageBuilder</span></code></div>

A builder message either for the client or the server,
that has a <a href="-http-message-builder/headers.html">headers</a> builder associated.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-method/index.html">HttpMethod</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpMethod</span></code></div>

Represents an HTTP method (verb)


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-protocol-version/index.html">HttpProtocolVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpProtocolVersion</span></code></div>

Represents an HTTP protocol version.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-status-code/index.html">HttpStatusCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">HttpStatusCode</span></code></div>

Represents an HTTP status code and description.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-link-header/index.html">LinkHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">LinkHeader</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a></code></div>

Represents a <code>Link</code> header value as per RFC 5988


</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameters/index.html">Parameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Parameters</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util/-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Represents HTTP parameters as a map from case-insensitive names to collection of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> values


</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameters-builder/index.html">ParametersBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ParametersBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameters-impl/index.html">ParametersImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ParametersImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">, </span><a href="../io.ktor.util/-string-values-impl/index.html"><span class="identifier">StringValuesImpl</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-parameters-single-impl/index.html">ParametersSingleImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ParametersSingleImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../io.ktor.util/-string-values-single-impl/index.html"><span class="identifier">StringValuesSingleImpl</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-range-units/index.html">RangeUnits</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">enum</span> <span class="keyword">class </span><span class="identifier">RangeUnits</span></code></div>

Possible content range units: bytes and none


</td>
</tr>
<tr>
<td markdown="1">

<a href="-ranges-specifier/index.html">RangesSpecifier</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">RangesSpecifier</span></code></div>

Range specifier for partial content requests (RFC 2616 sec 14.35.1)


</td>
</tr>
<tr>
<td markdown="1">

<a href="-request-connection-point/index.html">RequestConnectionPoint</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">RequestConnectionPoint</span></code></div>

Represents request address information is used to make a call.
There are at least two possible instances: "local" is how we see request at the server application and
"actual" is what we can recover from proxy provided headers.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-l-builder/index.html">URLBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">URLBuilder</span></code></div>

A URL builder with all mutable components


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-l-protocol/index.html">URLProtocol</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">URLProtocol</span></code></div>

Represents URL protocol


</td>
</tr>
<tr>
<td markdown="1">

<a href="-url/index.html">Url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Url</span></code></div>

Represents an immutable URL


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-bad-content-type-format-exception/index.html">BadContentTypeFormatException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">BadContentTypeFormatException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Exception thrown when a content type string is malformed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-l-decode-exception/index.html">URLDecodeException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">URLDecodeException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

URL decoder exception


</td>
</tr>
<tr>
<td markdown="1">

<a href="-u-r-l-parser-exception/index.html">URLParserException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">URLParserException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-state-exception/index.html"><span class="identifier">IllegalStateException</span></a></code></div>

Thrown when failed to parse URL


</td>
</tr>
<tr>
<td markdown="1">

<a href="-unsafe-header-exception/index.html">UnsafeHeaderException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">UnsafeHeaderException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-illegal-argument-exception/index.html"><span class="identifier">IllegalArgumentException</span></a></code></div>

Thrown when an attempt to set unsafe header detected. A header is unsafe if listed in <a href="-http-headers/-unsafe-headers.html">HttpHeaders.UnsafeHeaders</a>.


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java.time.temporal.-temporal/index.html">java.time.temporal.Temporal</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.-long/index.html">kotlin.Long</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.-string/index.html">kotlin.String</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.collections.-iterable/index.html">kotlin.collections.Iterable</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.collections.-list/index.html">kotlin.collections.List</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-d-e-f-a-u-l-t_-p-o-r-t.html">DEFAULT_PORT</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">const</span> <span class="keyword">val </span><span class="identifier">DEFAULT_PORT</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Select default port value from protocol.


</td>
</tr>
<tr>
<td markdown="1">

<a href="full-path.html">fullPath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-url/index.html"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">fullPath</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Full encoded path with query string but without domain, port and schema


</td>
</tr>
<tr>
<td markdown="1">

<a href="host-with-port.html">hostWithPort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="-url/index.html"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">hostWithPort</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Host:port pair, not normalized so port is always specified even if the port is schema's default


</td>
</tr>
<tr>
<td markdown="1">

<a href="http-date-format.html">httpDateFormat</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">httpDateFormat</span><span class="symbol">: </span><span class="identifier">DateTimeFormatter</span></code></div>

Default HTTP date format


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-u-r-l-builder.html">URLBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">URLBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$URLBuilder(kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Construct <a href="-u-r-l-builder/index.html">URLBuilder</a> from <a href="-u-r-l-builder.html#io.ktor.http$URLBuilder(kotlin.String)/urlString">urlString</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-url.html">Url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">Url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$Url(kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-url/index.html"><span class="identifier">Url</span></a></code></div>

Construct <a href="-url/index.html">Url</a> from <a href="-url.html#io.ktor.http$Url(kotlin.String)/urlString">urlString</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.util/-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$append(io.ktor.util.StringValuesBuilder, kotlin.String, io.ktor.http.HeaderValueWithParameters)/value">value</span><span class="symbol">:</span>&nbsp;<a href="-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append formatted header value to the builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="charset.html">charset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-header-value-with-parameters/index.html"><span class="identifier">HeaderValueWithParameters</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Extracts a <a href="#">Charset</a> value from the given <code>Content-Type</code>, <code>Content-Disposition</code> or similar header value.

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">charset</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$charset(io.ktor.http.HttpMessageBuilder, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">?</span></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Parse charset from <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="clone.html">clone</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">clone</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Create a copy of this builder. Modifications in a copy is not reflected in the original instance and vise-versa.


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentLength(io.ktor.http.HeadersBuilder, kotlin.Long)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Length</code> header

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentLength</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentLength(io.ktor.http.HttpMessageBuilder, kotlin.Int)/length">length</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Length</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-range-header-value.html">contentRangeHeaderValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">contentRangeHeaderValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, io.ktor.http.RangeUnits)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="-range-units/index.html"><span class="identifier">RangeUnits</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">contentRangeHeaderValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/range">range</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.ranges/-long-range/index.html"><span class="identifier">LongRange</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/fullLength">fullLength</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentRangeHeaderValue(kotlin.ranges.LongRange, kotlin.Long, kotlin.String)/unit">unit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;RangeUnits.Bytes.unitToken<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Format <code>Content-Range</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><s><span class="identifier">contentType</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HeadersBuilder, io.ktor.http.ContentType)/contentType">contentType</span><span class="symbol">:</span>&nbsp;<a href="-content-type/index.html"><span class="identifier">ContentType</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$contentType(io.ktor.http.HttpMessageBuilder, io.ktor.http.ContentType)/type">type</span><span class="symbol">:</span>&nbsp;<a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>Content-Type</code> header

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="decode-cookie-value.html">decodeCookieValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">decodeCookieValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/encodedValue">encodedValue</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$decodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Decode cookie value using the specified <a href="decode-cookie-value.html#io.ktor.http$decodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-cookie-value.html">encodeCookieValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">encodeCookieValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode cookie value using the specified <a href="encode-cookie-value.html#io.ktor.http$encodeCookieValue(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$etag(io.ktor.http.HeadersBuilder, kotlin.String)/entityTag">entityTag</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>E-Tag</code> header

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</span><span class="symbol">:</span>&nbsp;<span class="identifier">LocalDateTime</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set 'Expires` header value from <a href="expires.html#io.ktor.http$expires(io.ktor.http.HeadersBuilder, java.time.LocalDateTime)/expires">expires</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="file-extensions.html">fileExtensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">.</span><span class="identifier">fileExtensions</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Recommended file name extensions for this content type


</td>
</tr>
<tr>
<td markdown="1">

<a href="form-url-encode.html">formUrlEncode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">formUrlEncode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode form parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="form-url-encode-to.html">formUrlEncodeTo</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">formUrlEncodeTo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$formUrlEncodeTo(io.ktor.http.Parameters, java.lang.Appendable)/out">out</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Encode form parameters to the specified <a href="form-url-encode-to.html#io.ktor.http$formUrlEncodeTo(io.ktor.http.Parameters, java.lang.Appendable)/out">out</a> appendable


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers-of.html">headersOf</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns empty headers

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance containing only one header with the specified <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.String)/name">name</a> and <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.String)/value">value</a>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance containing only one header with the specified <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</a> and <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</a>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$headersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance from <a href="headers-of.html#io.ktor.http$headersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="host-is-ip.html">hostIsIp</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hostIsIp</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$hostIsIp(kotlin.String)/host">host</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if <a href="host-is-ip.html#io.ktor.http$hostIsIp(kotlin.String)/host">host</a> is IPv4 or IPv6 address.


</td>
</tr>
<tr>
<td markdown="1">

<a href="if-modified-since.html">ifModifiedSince</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifModifiedSince</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifModifiedSince(io.ktor.http.HttpMessageBuilder, java.util.Date)/date">date</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-Modified-Since</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="if-none-match.html">ifNoneMatch</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">ifNoneMatch</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$ifNoneMatch(io.ktor.http.HttpMessageBuilder, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>If-None-Match</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-secure.html">isSecure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a><span class="symbol">.</span><span class="identifier">isSecure</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the protocol is secure


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-success.html">isSuccess</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a><span class="symbol">.</span><span class="identifier">isSuccess</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Checks if a given status code is a success code according to HTTP standards.


</td>
</tr>
<tr>
<td markdown="1">

<a href="is-websocket.html">isWebsocket</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-protocol/index.html"><span class="identifier">URLProtocol</span></a><span class="symbol">.</span><span class="identifier">isWebsocket</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if the protocol is websocket


</td>
</tr>
<tr>
<td markdown="1">

<a href="last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-headers-builder/index.html"><span class="identifier">HeadersBuilder</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$lastModified(io.ktor.http.HeadersBuilder, java.time.ZonedDateTime)/dateTime">dateTime</span><span class="symbol">:</span>&nbsp;<span class="identifier">ZonedDateTime</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set 'Last-Modified` header value from <a href="last-modified.html#io.ktor.http$lastModified(io.ktor.http.HeadersBuilder, java.time.ZonedDateTime)/dateTime">dateTime</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Last-Modified</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="link.html">link</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, io.ktor.http.LinkHeader)/header">header</span><span class="symbol">:</span>&nbsp;<a href="-link-header/index.html"><span class="identifier">LinkHeader</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.response/-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">.</span><span class="identifier">link</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Link</code> header to HTTP response with specified <a href="link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/uri">uri</a> and <a href="link.html#io.ktor.http$link(io.ktor.response.ApplicationResponse, kotlin.String, kotlin.Array((kotlin.String)))/rel">rel</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="max-age.html">maxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">maxAge</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$maxAge(io.ktor.http.HttpMessageBuilder, kotlin.Int)/seconds">seconds</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append <code>Max-Age</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="parameters-of.html">parametersOf</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parametersOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Returns an empty parameters instance

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parametersOf</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$parametersOf(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http$parametersOf(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Creates a parameters instance containing only single pair

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parametersOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parametersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parametersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Creates a parameters instance containing only single pair of <a href="parameters-of.html#io.ktor.http$parametersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</a> with multiple <a href="parameters-of.html#io.ktor.http$parametersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</a>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parametersOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$parametersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Creates a parameters instance from the specified <a href="parameters-of.html#io.ktor.http$parametersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-and-sort-content-type-header.html">parseAndSortContentTypeHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseAndSortContentTypeHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseAndSortContentTypeHeader(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Content-Type</code> header values and sort them by quality and asterisks quantity


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-and-sort-header.html">parseAndSortHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseAndSortHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$parseAndSortHeader(kotlin.String)/header">header</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parse header value and sort multiple values according to qualities


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-client-cookies-header.html">parseClientCookiesHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseClientCookiesHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseClientCookiesHeader(kotlin.String, kotlin.Boolean)/cookiesHeader">cookiesHeader</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseClientCookiesHeader(kotlin.String, kotlin.Boolean)/skipEscaped">skipEscaped</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Parse client's <code>Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-header-value.html">parseHeaderValue</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseHeaderValue</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$parseHeaderValue(kotlin.String)/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseHeaderValue</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseHeaderValue(kotlin.String, kotlin.Boolean)/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseHeaderValue(kotlin.String, kotlin.Boolean)/parametersOnly">parametersOnly</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parse header value respecting multi-values


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-query-string.html">parseQueryString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseQueryString</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/query">query</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/startIndex">startIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;1000<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parse query string withing starting at the specified <a href="parse-query-string.html#io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/startIndex">startIndex</a> but up to <a href="parse-query-string.html#io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/limit">limit</a> pairs


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-ranges-specifier.html">parseRangesSpecifier</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseRangesSpecifier</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$parseRangesSpecifier(kotlin.String)/rangeSpec">rangeSpec</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-ranges-specifier/index.html"><span class="identifier">RangesSpecifier</span></a><span class="symbol">?</span></code></div>

Parse <code>Range</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="parse-server-set-cookie-header.html">parseServerSetCookieHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseServerSetCookieHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$parseServerSetCookieHeader(kotlin.String)/cookiesHeader">cookiesHeader</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-cookie/index.html"><span class="identifier">Cookie</span></a></code></div>

Parse server's <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="plus.html">plus</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">.</span><span class="identifier">plus</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$plus(io.ktor.http.Parameters, io.ktor.http.Parameters)/other">other</span><span class="symbol">:</span>&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Plus operator function that creates a new parameters instance from the original one concatenating with <a href="plus.html#io.ktor.http$plus(io.ktor.http.Parameters, io.ktor.http.Parameters)/other">other</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="push.html">push</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String)/pathAndQuery">pathAndQuery</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/encodedPath">encodedPath</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.String, io.ktor.http.Parameters)/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="-parameters/index.html"><span class="identifier">Parameters</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing.
Exact behaviour is up to engine implementation.

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">push</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.response/-response-push-builder/index.html"><span class="identifier">ResponsePushBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Produces HTTP/2 push from server to client or sets HTTP/1.x hint header
or does nothing (may call or not call <a href="push.html#io.ktor.http$push(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.response.ResponsePushBuilder, kotlin.Unit)))/block">block</a>).
Exact behaviour is up to engine implementation.


</td>
</tr>
<tr>
<td markdown="1">

<a href="render-cookie-header.html">renderCookieHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">renderCookieHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$renderCookieHeader(io.ktor.http.Cookie)/cookie">cookie</span><span class="symbol">:</span>&nbsp;<a href="-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Format <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="render-set-cookie-header.html">renderSetCookieHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">renderSetCookieHeader</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$renderSetCookieHeader(io.ktor.http.Cookie)/cookie">cookie</span><span class="symbol">:</span>&nbsp;<a href="-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">renderSetCookieHeader</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CookieEncoding.URI_ENCODING<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/maxAge">maxAge</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/expires">expires</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/domain">domain</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/secure">secure</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/httpOnly">httpOnly</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/extensions">extensions</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$renderSetCookieHeader(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)), kotlin.Boolean)/includeEncoding">includeEncoding</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Format <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="set-cookie.html">setCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">setCookie</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="take-from.html">takeFrom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URI)/uri">uri</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html"><span class="identifier">URI</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Take URI components from <a href="take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URI)/uri">uri</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URL)/url">url</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/net/URL.html"><span class="identifier">URL</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Take URI components from <a href="take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, java.net.URL)/url">url</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Take url parts from <a href="take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, kotlin.String)/urlString">urlString</a>
throws <a href="-u-r-l-parser-exception/index.html">URLParserException</a>

<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.URLBuilder)/url">url</span><span class="symbol">:</span>&nbsp;<a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Take components from another <a href="take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.URLBuilder)/url">url</a> builder

<div class="signature"><code><span class="keyword">fun </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="identifier">takeFrom</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.Url)/url">url</span><span class="symbol">:</span>&nbsp;<a href="-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Take components from another <a href="take-from.html#io.ktor.http$takeFrom(io.ktor.http.URLBuilder, io.ktor.http.Url)/url">url</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-http-date.html">toHttpDate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">.</span><span class="identifier">toHttpDate</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Convert <a href="../io.ktor.util.date/-g-m-t-date/index.html">GMTDate</a> to valid http date <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-u-r-i.html">toURI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-url/index.html"><span class="identifier">Url</span></a><span class="symbol">.</span><span class="identifier">toURI</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html"><span class="identifier">URI</span></a></code></div>

Convert <a href="-url/index.html">Url</a> to <a href="http://docs.oracle.com/javase/6/docs/api/java/net/URI.html">URI</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="user-agent.html">userAgent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">userAgent</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$userAgent(io.ktor.http.HttpMessageBuilder, kotlin.String)/content">content</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set <code>User-Agent</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="vary.html">vary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-http-message-builder/index.html"><span class="identifier">HttpMessageBuilder</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

<div class="signature"><code><span class="keyword">fun </span><a href="-http-message/index.html"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

Parse <code>Vary</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="with-charset.html">withCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">.</span><span class="identifier">withCharset</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$withCharset(io.ktor.http.ContentType, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Creates a copy of <code>this</code> type with the added charset parameter with <a href="with-charset.html#io.ktor.http$withCharset(io.ktor.http.ContentType, java.nio.charset.Charset)/charset">charset</a> value.


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-exception-failed.html">ExceptionFailed</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">HttpStatusCode.Companion</span><span class="symbol">.</span><s><span class="identifier">ExceptionFailed</span></s><span class="symbol">: </span><a href="-http-status-code/index.html"><span class="identifier">HttpStatusCode</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="default-for-file.html">defaultForFile</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFile(io.ktor.http.ContentType.Companion, java.io.File)/file">file</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/io/File.html"><span class="identifier">File</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFile</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFile(io.ktor.http.ContentType.Companion, java.nio.file.Path)/file">file</span><span class="symbol">:</span>&nbsp;<span class="identifier">Path</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="default-for-file-extension.html">defaultForFileExtension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFileExtension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/extension">extension</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Default <a href="-content-type/index.html">ContentType</a> for <a href="default-for-file-extension.html#io.ktor.http$defaultForFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/extension">extension</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="default-for-file-path.html">defaultForFilePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">defaultForFilePath</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$defaultForFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Default <a href="-content-type/index.html">ContentType</a> for file <a href="default-for-file-path.html#io.ktor.http$defaultForFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="from-file-extension.html">fromFileExtension</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">fromFileExtension</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$fromFileExtension(io.ktor.http.ContentType.Companion, kotlin.String)/ext">ext</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">&gt;</span></code></div>

Recommended content type by file name extension


</td>
</tr>
<tr>
<td markdown="1">

<a href="from-file-path.html">fromFilePath</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">ContentType.Companion</span><span class="symbol">.</span><span class="identifier">fromFilePath</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$fromFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">&gt;</span></code></div>

Recommended content types by file <a href="from-file-path.html#io.ktor.http$fromFilePath(io.ktor.http.ContentType.Companion, kotlin.String)/path">path</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">Url.Companion</span><span class="symbol">.</span><span class="identifier">invoke</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$invoke(io.ktor.http.Url.Companion, kotlin.String)/fullUrl">fullUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-url/index.html"><span class="identifier">Url</span></a></code></div>

Construct <a href="-url/index.html">Url</a> from <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>


</td>
</tr>
</tbody>
</table>
