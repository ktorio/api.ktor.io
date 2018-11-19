---
title: io.ktor.client.features.cookies - 
layout: api
---



## Package io.ktor.client.features.cookies

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-accept-all-cookies-storage/index.html">AcceptAllCookiesStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AcceptAllCookiesStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a></code></div>

<a href="-cookies-storage/index.html">CookiesStorage</a> that stores all the cookies in an in-memory map.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-constant-cookies-storage/index.html">ConstantCookiesStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">ConstantCookiesStorage</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a></code></div>

<a href="-cookies-storage/index.html">CookiesStorage</a> that ignores <a href="-constant-cookies-storage/add-cookie.html">addCookie</a> and returns a list of specified <a href="cookies.html">cookies</a> when constructed.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-cookies-storage/index.html">CookiesStorage</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">CookiesStorage</span></code></div>

Storage for <a href="../io.ktor.http/-cookie/index.html">Cookie</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-http-cookies/index.html">HttpCookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">HttpCookies</span></code></div>

<a href="../io.ktor.client/-http-client/index.html">HttpClient</a> feature that handles sent <code>Cookie</code>, and received <code>Set-Cookie</code> headers,
using a specific <a href="#">storage</a> for storing and retrieving cookies.


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="kotlin.collections.-list/index.html">kotlin.collections.List</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="add-cookie.html">addCookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="-cookies-storage/index.html"><span class="identifier">CookiesStorage</span></a><span class="symbol">.</span><span class="identifier">addCookie</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$addCookie(io.ktor.client.features.cookies.CookiesStorage, kotlin.String, io.ktor.http.Cookie)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$addCookie(io.ktor.client.features.cookies.CookiesStorage, kotlin.String, io.ktor.http.Cookie)/cookie">cookie</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="cookies.html">cookies</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, io.ktor.http.Url)/url">url</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Gets all the cookies for the specified <a href="cookies.html#io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, io.ktor.http.Url)/url">url</a> for this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>.

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Gets all the cookies for the specified <a href="cookies.html#io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, kotlin.String)/urlString">urlString</a> for this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>.


</td>
</tr>
</tbody>
</table>
