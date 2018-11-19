---
title: AcceptAllCookiesStorage.get - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.features.cookies</a> / <a href="index.html">AcceptAllCookiesStorage</a> / <a href="./get.html">get</a></div>

# get

<div class="signature"><code><span class="keyword">suspend</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.features.cookies.AcceptAllCookiesStorage$get(io.ktor.http.Url)/requestUrl">requestUrl</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-url/index.html"><span class="identifier">Url</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.http/-cookie/index.html"><span class="identifier">Cookie</span></a><span class="symbol">&gt;</span></code></div>

Overrides <a href="../-cookies-storage/get.html">CookiesStorage.get</a>

Gets a map of <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> to <a href="../../io.ktor.http/-cookie/index.html">Cookie</a> for a specific <a href="#">host</a>.

