---
title: parseUrlEncodedParameters - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">kotlin.String</a> / <a href="./parse-url-encoded-parameters.html">parseUrlEncodedParameters</a></div>

# parseUrlEncodedParameters

<div class="signature"><code><span class="keyword">fun </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">.</span><span class="identifier">parseUrlEncodedParameters</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseUrlEncodedParameters(kotlin.String, java.nio.charset.Charset, kotlin.Int)/defaultEncoding">defaultEncoding</span><span class="symbol">:</span>&nbsp;<span class="identifier">Charset</span>&nbsp;<span class="symbol">=</span>&nbsp;Charsets.UTF_8<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http$parseUrlEncodedParameters(kotlin.String, java.nio.charset.Charset, kotlin.Int)/limit">limit</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a>&nbsp;<span class="symbol">=</span>&nbsp;1000<br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-parameters/index.html"><span class="identifier">Parameters</span></a></code></div>

Parse URL query parameters. Shouldn't be used for urlencoded forms because of <code>+</code> character.

