---
title: ApplicationRequest - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="./index.html">ApplicationRequest</a></div>

# ApplicationRequest

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ApplicationRequest</span></code></div>

Represents client's request

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="call.html">call</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">call</span><span class="symbol">: </span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a></code></div>

<a href="../../io.ktor.application/-application-call/index.html">ApplicationCall</a> instance this ApplicationRequest is attached to


</td>
</tr>
<tr>
<td markdown="1">

<a href="cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">cookies</span><span class="symbol">: </span><a href="../-request-cookies/index.html"><span class="identifier">RequestCookies</span></a></code></div>

Cookies for this request


</td>
</tr>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../../io.ktor.http/-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Headers for this request


</td>
</tr>
<tr>
<td markdown="1">

<a href="local.html">local</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">local</span><span class="symbol">: </span><a href="../../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a></code></div>

Contains http request and connection details such as a host name used to connect, port, scheme and so on.
No proxy headers could affect it. Use <a href="#">ApplicationRequest.origin</a> if you need override headers support


</td>
</tr>
<tr>
<td markdown="1">

<a href="pipeline.html">pipeline</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">pipeline</span><span class="symbol">: </span><a href="../-application-receive-pipeline/index.html"><span class="identifier">ApplicationReceivePipeline</span></a></code></div>

Pipeline for receiving content


</td>
</tr>
<tr>
<td markdown="1">

<a href="query-parameters.html">queryParameters</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">queryParameters</span><span class="symbol">: </span><a href="../../io.ktor.http/-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parameters provided in an URL


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="receive-channel.html">receiveChannel</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">receiveChannel</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">ByteReadChannel</span></code></div>

Request's body channel (for content only)


</td>
</tr>
</tbody>
</table>

### Extension Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../http-method.html">httpMethod</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">httpMethod</span><span class="symbol">: </span><a href="../../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a></code></div>

Returns request HTTP method possibly overridden via header X-Http-Method-Override


</td>
</tr>
<tr>
<td markdown="1">

<a href="../http-version.html">httpVersion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">httpVersion</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's HTTP version


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.servlet/java-security-principal.html">javaSecurityPrincipal</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">javaSecurityPrincipal</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/security/Principal.html"><span class="identifier">Principal</span></a><span class="symbol">?</span></code></div>

Returns Java's JAAS Principal


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/origin.html">origin</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">origin</span><span class="symbol">: </span><a href="../../io.ktor.http/-request-connection-point/index.html"><span class="identifier">RequestConnectionPoint</span></a></code></div>

Represents request and connection parameters possibly overridden via https headers.
By default it fallbacks to <a href="local.html">ApplicationRequest.local</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../uri.html">uri</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">uri</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's URI (including query string)


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
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">accept</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-charset.html">acceptCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptCharset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Charset</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-charset-items.html">acceptCharsetItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptCharsetItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Charset</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-encoding.html">acceptEncoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptEncoding</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Encoding</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-encoding-items.html">acceptEncodingItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptEncodingItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Encoding</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-items.html">acceptItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed request's <code>Accept</code> header and sorted according to quality


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-language.html">acceptLanguage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptLanguage</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Accept-Language</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../accept-language-items.html">acceptLanguageItems</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">acceptLanguageItems</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-header-value/index.html"><span class="identifier">HeaderValue</span></a><span class="symbol">&gt;</span></code></div>

Parsed and sorted request's <code>Accept-Language</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../authorization.html">authorization</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">authorization</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request authorization header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/basic-authentication-credentials.html">basicAuthenticationCredentials</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">basicAuthenticationCredentials</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$basicAuthenticationCredentials(io.ktor.request.ApplicationRequest, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.auth/-user-password-credential/index.html"><span class="identifier">UserPasswordCredential</span></a><span class="symbol">?</span></code></div>

Retrieves Basic authentication credentials for this <a href="./index.md">ApplicationRequest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../cache-control.html">cacheControl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">cacheControl</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Cache-Control</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-charset.html">contentCharset</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">contentCharset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Request's charset


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a></code></div>

Request's content type or <code>ContentType.Any</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../document.html">document</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">document</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's document name (substring after the last slash but before query string)


</td>
</tr>
<tr>
<td markdown="1">

<a href="../header.html">header</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">header</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.request$header(io.ktor.request.ApplicationRequest, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

First header value for header with <a href="../header.html#io.ktor.request$header(io.ktor.request.ApplicationRequest, kotlin.String)/name">name</a> or <code>null</code> if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="../host.html">host</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">host</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's host without port


</td>
</tr>
<tr>
<td markdown="1">

<a href="../is-chunked.html">isChunked</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">isChunked</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if request's body is chunk-encoded


</td>
</tr>
<tr>
<td markdown="1">

<a href="../is-multipart.html">isMultipart</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">isMultipart</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Check if request body is multipart-encoded


</td>
</tr>
<tr>
<td markdown="1">

<a href="../location.html">location</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">location</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>Location</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.auth/parse-authorization-header.html">parseAuthorizationHeader</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">parseAuthorizationHeader</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.auth/-http-auth-header/index.html"><span class="identifier">HttpAuthHeader</span></a><span class="symbol">?</span></code></div>

Parses an authorization header from a <a href="./index.md">ApplicationRequest</a> returning a <a href="../../io.ktor.auth/-http-auth-header/index.html">HttpAuthHeader</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">path</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's path without query string


</td>
</tr>
<tr>
<td markdown="1">

<a href="../port.html">port</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">port</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

Request's port extracted from <code>Host</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../query-string.html">queryString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">queryString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Request's query string or empty string if missing


</td>
</tr>
<tr>
<td markdown="1">

<a href="../ranges.html">ranges</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">ranges</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-ranges-specifier/index.html"><span class="identifier">RangesSpecifier</span></a><span class="symbol">?</span></code></div>

Parsed request's <code>Range</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/to-log-string.html">toLogString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">toLogString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Generates a string representing this <a href="./index.md">ApplicationRequest</a> suitable for logging


</td>
</tr>
<tr>
<td markdown="1">

<a href="../user-agent.html">userAgent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ApplicationRequest</span></a><span class="symbol">.</span><span class="identifier">userAgent</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Request's <code>User-Agent</code> header value


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.engine/-base-application-request/index.html">BaseApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">class </span><span class="identifier">BaseApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationRequest</span></a></code></div>

Base class for implementing <a href="./index.md">ApplicationRequest</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.routing/-routing-application-request/index.html">RoutingApplicationRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">RoutingApplicationRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ApplicationRequest</span></a></code></div>

Represents an application request being handled by <a href="../../io.ktor.routing/-routing/index.html">Routing</a>


</td>
</tr>
</tbody>
</table>
