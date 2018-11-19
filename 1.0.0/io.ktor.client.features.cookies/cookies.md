---
title: cookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.client.features.cookies</a> / <a href="./cookies.html">cookies</a></div>

# cookies

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, io.ktor.http.Url)/url">url</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Gets all the cookies for the specified <a href="cookies.html#io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, io.ktor.http.Url)/url">url</a> for this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><a href="../io.ktor.client/-http-client/index.html"><span class="identifier">HttpClient</span></a><span class="symbol">.</span><span class="identifier">cookies</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, kotlin.String)/urlString">urlString</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Gets all the cookies for the specified <a href="cookies.html#io.ktor.client.features.cookies$cookies(io.ktor.client.HttpClient, kotlin.String)/urlString">urlString</a> for this <a href="../io.ktor.client/-http-client/index.html">HttpClient</a>.

</div>
