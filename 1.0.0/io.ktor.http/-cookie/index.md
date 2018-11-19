---
title: Cookie - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="./index.html">Cookie</a></div>

# Cookie

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">Cookie</span></code></div>

Represents a cooke value

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Cookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/encoding">encoding</span><span class="symbol">:</span>&nbsp;<a href="../-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a>&nbsp;<span class="symbol">=</span>&nbsp;CookieEncoding.URI_ENCODING<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/maxAge">maxAge</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/expires">expires</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/domain">domain</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span>&nbsp;<span class="symbol">=</span>&nbsp;null<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/secure">secure</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/httpOnly">httpOnly</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.Cookie$<init>(kotlin.String, kotlin.String, io.ktor.http.CookieEncoding, kotlin.Int, io.ktor.util.date.GMTDate, kotlin.String, kotlin.String, kotlin.Boolean, kotlin.Boolean, kotlin.collections.Map((kotlin.String, kotlin.String)))/extensions">extensions</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;emptyMap()<span class="symbol">)</span></code></div>

Represents a cooke value


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="domain.html">domain</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">domain</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

for which it is set


</td>
</tr>
<tr>
<td markdown="1">

<a href="encoding.html">encoding</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">encoding</span><span class="symbol">: </span><a href="../-cookie-encoding/index.html"><span class="identifier">CookieEncoding</span></a></code></div>
* cookie encoding type

</td>
</tr>
<tr>
<td markdown="1">

<a href="expires.html">expires</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">expires</span><span class="symbol">: </span><a href="../../io.ktor.util.date/-g-m-t-date/index.html"><span class="identifier">GMTDate</span></a><span class="symbol">?</span></code></div>

date when it expires


</td>
</tr>
<tr>
<td markdown="1">

<a href="extensions.html">extensions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">extensions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span><span class="symbol">&gt;</span></code></div>

additional cookie extensions


</td>
</tr>
<tr>
<td markdown="1">

<a href="http-only.html">httpOnly</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">httpOnly</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

only transfer cookie over HTTP, no access from JavaScript


</td>
</tr>
<tr>
<td markdown="1">

<a href="max-age.html">maxAge</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">maxAge</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

number of seconds to keep cookie


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="path.html">path</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">path</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">?</span></code></div>

for which it is set


</td>
</tr>
<tr>
<td markdown="1">

<a href="secure.html">secure</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">secure</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

send it via secure connection only


</td>
</tr>
<tr>
<td markdown="1">

<a href="value.html">value</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">value</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
