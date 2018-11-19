---
title: parseQueryString - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./parse-query-string.html">parseQueryString</a></div>

# parseQueryString

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">parseQueryString</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/query">query</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/startIndex">startIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;0<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;1000<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parse query string withing starting at the specified <a href="parse-query-string.html#io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/startIndex">startIndex</a> but up to <a href="parse-query-string.html#io.ktor.http$parseQueryString(kotlin.String, kotlin.Int, kotlin.Int)/limit">limit</a> pairs

