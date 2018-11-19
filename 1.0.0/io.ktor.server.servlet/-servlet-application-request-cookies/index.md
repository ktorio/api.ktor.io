---
title: ServletApplicationRequestCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="./index.html">ServletApplicationRequestCookies</a></div>

# ServletApplicationRequestCookies

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ServletApplicationRequestCookies</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.request/-request-cookies/index.html"><span class="identifier">RequestCookies</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ServletApplicationRequestCookies</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletApplicationRequestCookies$<init>(javax.servlet.http.HttpServletRequest, io.ktor.request.ApplicationRequest)/servletRequest">servletRequest</span><span class="symbol">:</span>&nbsp;<span class="identifier">HttpServletRequest</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.server.servlet.ServletApplicationRequestCookies$<init>(javax.servlet.http.HttpServletRequest, io.ktor.request.ApplicationRequest)/request">request</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a><span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/-request-cookies/raw-cookies.html">rawCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">rawCookies</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

RAW cookie values, not decoded so could have percent encoded values, quotes, escape characters and so on.
It is recommended to use <a href="../../io.ktor.request/-request-cookies/get.html">get</a> instead


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/-request-cookies/request.html">request</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">request</span><span class="symbol">: </span><a href="../../io.ktor.request/-application-request/index.html"><span class="identifier">ApplicationRequest</span></a></code></div>

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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fetchCookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Fetch cookies from <a href="../../io.ktor.request/-request-cookies/request.html">request</a>. Could access cookies using engine's native API.


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.request/-request-cookies/get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CookieEncoding.URI_ENCODING<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

Get cookie <a href="../../io.ktor.request/-request-cookies/get.html#io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/name">name</a> value decoding cookies using <a href="../../io.ktor.request/-request-cookies/get.html#io.ktor.request.RequestCookies$get(kotlin.String, io.ktor.http.CookieEncoding)/encoding">encoding</a> strategy


</td>
</tr>
</tbody>
</table>
