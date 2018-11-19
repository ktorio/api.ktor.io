---
title: ResponseHeaders.append - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.response</a> / <a href="index.html">ResponseHeaders</a> / <a href="./append.html">append</a></div>

# append

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseHeaders$append(kotlin.String, kotlin.String, kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseHeaders$append(kotlin.String, kotlin.String, kotlin.Boolean)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.response.ResponseHeaders$append(kotlin.String, kotlin.String, kotlin.Boolean)/safeOnly">safeOnly</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;true<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append HTTP response header

### Parameters

<code>safeOnly</code> - <code>true</code> by default, prevents from setting unsafe headers