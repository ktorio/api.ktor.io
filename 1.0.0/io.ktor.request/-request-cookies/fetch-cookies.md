---
title: RequestCookies.fetchCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.request</a> / <a href="index.html">RequestCookies</a> / <a href="./fetch-cookies.html">fetchCookies</a></div>

# fetchCookies

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">fetchCookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Fetch cookies from <a href="request.html">request</a>. Could access cookies using engine's native API.

