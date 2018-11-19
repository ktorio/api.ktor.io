---
title: ServletApplicationRequestCookies.fetchCookies - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="index.html">ServletApplicationRequestCookies</a> / <a href="./fetch-cookies.html">fetchCookies</a></div>

# fetchCookies

<div class="signature"><code><span class="keyword">protected</span> <span class="keyword">fun </span><span class="identifier">fetchCookies</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Overrides <a href="../../io.ktor.request/-request-cookies/fetch-cookies.html">RequestCookies.fetchCookies</a>

Fetch cookies from <a href="../../io.ktor.request/-request-cookies/request.html">request</a>. Could access cookies using engine's native API.

