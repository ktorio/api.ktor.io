---
title: encodeURLQueryComponent - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">kotlin.String</a> / <a href="./encode-u-r-l-query-component.html">encodeURLQueryComponent</a></div>

# encodeURLQueryComponent

<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">encodeURLQueryComponent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/encodeFull">encodeFull</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/spaceToPlus">spaceToPlus</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$encodeURLQueryComponent(kotlin.String, kotlin.Boolean, kotlin.Boolean, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode url part as specified in
https://tools.ietf.org/html/rfc3986#section-2

