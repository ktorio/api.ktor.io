---
title: RequestCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="./index.html">RequestCookies</a></div>

# RequestCookies

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">RequestCookies</span></code></div>

Server request's cookies

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">RequestCookies</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.request.RequestCookies$<init>(io.ktor.request.ApplicationRequest)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">)</span></code></div>

Server request's cookies


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="raw-cookies.html">rawCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">rawCookies</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

RAW cookie values, not decoded so could have percent encoded values, quotes, escape characters and so on.
It is recommended to use <a href="get.html">get</a> instead


</td>
</tr>
<tr>
<td markdown="1">

<a href="request.html">request</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">request</span><span class="symbol">: </span><a href="../-application-request/index.html"><span class="identifier">ApplicationRequest</span></a></code></div>

application request to fetch cookies from


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="fetch-cookies.html">fetchCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">fetchCookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Fetch cookies from <a href="request.html">request</a>. Could access cookies using engine's native API.


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CookieEncoding.URI_ENCODING<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Get cookie <a href="get.html#io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/name">name</a> value decoding cookies using <a href="get.html#io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</a> strategy


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.server.servlet/-servlet-application-request-cookies/index.html">ServletApplicationRequestCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ServletApplicationRequestCookies</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">RequestCookies</span></a></code></div>

</td>
</tr>
</tbody>
</table>
