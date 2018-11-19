---
title: signatureBaseString - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.auth</a> / <a href="./signature-base-string.html">signatureBaseString</a></div>

# signatureBaseString

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">signatureBaseString</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/header">header</span><span class="symbol">:</span>&nbsp;<a href="-http-auth-header/-parameterized/index.html"><span class="identifier">Parameterized</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/method">method</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-http-method/index.html"><span class="identifier">HttpMethod</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/baseUrl">baseUrl</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.auth$signatureBaseString(io.ktor.auth.HttpAuthHeader.Parameterized, io.ktor.http.HttpMethod, kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)))/parameters">parameters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../io.ktor.http/-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Build an OAuth1a signature base string as per RFC

