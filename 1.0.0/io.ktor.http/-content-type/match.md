---
title: ContentType.match - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">ContentType</a> / <a href="./match.html">match</a></div>

# match

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">match</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$match(io.ktor.http.ContentType)/pattern">pattern</span><span class="symbol">:</span>&nbsp;<a href="index.html"><span class="identifier">ContentType</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">match</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.ContentType$match(kotlin.String)/pattern">pattern</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Checks if <code>this</code> type matches a <a href="match.html#io.ktor.http.ContentType$match(io.ktor.http.ContentType)/pattern">pattern</a> type taking into account placeholder symbols <code>*</code> and parameters.

