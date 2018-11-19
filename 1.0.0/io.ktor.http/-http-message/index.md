---
title: HttpMessage - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">HttpMessage</a></div>

# HttpMessage

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpMessage</span></code></div>

A message either from the client or the server,
that has <a href="headers.html">headers</a> associated.

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="headers.html">headers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">headers</span><span class="symbol">: </span><a href="../-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Message <a href="../-headers/index.html">Headers</a>


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
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">charset</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><span class="identifier">Charset</span><span class="symbol">?</span></code></div>

Parse charset from <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-length.html">contentLength</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentLength</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Length</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../content-type.html">contentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">contentType</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../-content-type/index.html"><span class="identifier">ContentType</span></a><span class="symbol">?</span></code></div>

Parse <code>Content-Type</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../etag.html">etag</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">etag</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Parse <code>E-Tag</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">expires</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Expires</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../last-modified.html">lastModified</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">lastModified</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Date.html"><span class="identifier">Date</span></a><span class="symbol">?</span></code></div>

Parse <code>Last-Modified</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="../set-cookie.html">setCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">setCookie</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Parse <code>Set-Cookie</code> header value


</td>
</tr>
<tr>
<td markdown="1">

<a href="../vary.html">vary</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">.</span><span class="identifier">vary</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">?</span></code></div>

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

<a href="../../io.ktor.client.request/-http-request/index.html">HttpRequest</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpRequest</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">, </span><span class="identifier">CoroutineScope</span></code></div>

A request for <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a>, first part of <a href="../../io.ktor.client.call/-http-client-call/index.html">HttpClientCall</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.client.response/-http-response/index.html">HttpResponse</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">HttpResponse</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">HttpMessage</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">CoroutineScope</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="identifier">Closeable</span></code></div>

A response for <a href="../../io.ktor.client/-http-client/index.html">HttpClient</a>, second part of <a href="../../io.ktor.client.call/-http-client-call/index.html">HttpClientCall</a>.


</td>
</tr>
</tbody>
</table>
