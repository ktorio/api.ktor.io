---
title: CookiesStorage - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.cookies</a> / <a href="./index.html">CookiesStorage</a></div>

# CookiesStorage

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">CookiesStorage</span></code></div>

Storage for <a href="../../io.ktor.http/-cookie/index.html">Cookie</a>.

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="add-cookie.html">addCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">addCookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies.CookiesStorage$addCookie(io.ktor.http.Url, io.ktor.http.Cookie)/requestUrl">requestUrl</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies.CookiesStorage$addCookie(io.ktor.http.Url, io.ktor.http.Cookie)/cookie">cookie</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Sets a <a href="add-cookie.html#io.ktor.client.features.cookies.CookiesStorage$addCookie(io.ktor.http.Url, io.ktor.http.Cookie)/cookie">cookie</a> for the specified <a href="#">host</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.CookiesStorage$get(io.ktor.http.Url)/requestUrl">requestUrl</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Gets a map of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> to <a href="../../io.ktor.http/-cookie/index.html">Cookie</a> for a specific <a href="#">host</a>.


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../add-cookie.html">addCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="./index.md"><span class="identifier">CookiesStorage</span></a><span class="symbol">.</span><span class="identifier">addCookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$addCookie(io.ktor.client.features.cookies.CookiesStorage, kotlin.String, io.ktor.http.Cookie)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$addCookie(io.ktor.client.features.cookies.CookiesStorage, kotlin.String, io.ktor.http.Cookie)/cookie">cookie</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-accept-all-cookies-storage/index.html">AcceptAllCookiesStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AcceptAllCookiesStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CookiesStorage</span></a></code></div>

<a href="./index.md">CookiesStorage</a> that stores all the cookies in an in-memory map.


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-constant-cookies-storage/index.html">ConstantCookiesStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ConstantCookiesStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">CookiesStorage</span></a></code></div>

<a href="./index.md">CookiesStorage</a> that ignores <a href="../-constant-cookies-storage/add-cookie.html">addCookie</a> and returns a list of specified <a href="../cookies.html">cookies</a> when constructed.


</td>
</tr>
</tbody>
</table>
