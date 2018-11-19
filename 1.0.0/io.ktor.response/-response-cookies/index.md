---
title: ResponseCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="./index.html">ResponseCookies</a></div>

# ResponseCookies

<div class="signature"><code><span class="keyword">class </span><span class="identifier">ResponseCookies</span></code></div>

Server's response cookies

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ResponseCookies</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$<init>(io.ktor.response.ApplicationResponse, kotlin.Boolean)/response">response</span><span class="symbol">:</span>&nbsp;<a href="../-application-response/index.html"><span class="identifier">ApplicationResponse</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$<init>(io.ktor.response.ApplicationResponse, kotlin.Boolean)/secureTransport">secureTransport</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span></code></div>

Server's response cookies


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response.ResponseCookies$append(io.ktor.http.Cookie)/item">item</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append cookie <a href="append.html#io.ktor.response.ResponseCookies$append(io.ktor.http.Cookie)/item">item</a> using <code>Set-Cookie</code> HTTP response header

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CookieEncoding.URI_ENCODING<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/maxAge">maxAge</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/expires">expires</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/domain">domain</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/secure">secure</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/httpOnly">httpOnly</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$append(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/extensions">extensions</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append a cookie using <code>Set-Cookie</code> HTTP response header from the specified parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="append-expired.html">appendExpired</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">appendExpired</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$appendExpired(kotlin.String, kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$appendExpired(kotlin.String, kotlin.String, kotlin.String)/domain">domain</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseCookies$appendExpired(kotlin.String, kotlin.String, kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append already expired cookie: useful to remove client cookies


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.response.ResponseCookies$get(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">?</span></code></div>

Get cookie from response HTTP headers (from <code>Set-Cookie</code> header)


</td>
</tr>
</tbody>
</table>
