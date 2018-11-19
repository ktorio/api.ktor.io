---
title: HeaderValueWithParameters.parse - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http</a> / <a href="index.html">HeaderValueWithParameters</a> / <a href="./parse.html">parse</a></div>

# parse

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <span class="identifier">parse</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/init">init</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-header-value-param/index.html"><span class="identifier">HeaderValueParam</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="parse.html#R"><span class="identifier">R</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="parse.html#R"><span class="identifier">R</span></a></code></div>

Parse header with parameter and pass it to <a href="parse.html#io.ktor.http.HeaderValueWithParameters.Companion$parse(kotlin.String, kotlin.Function2((kotlin.String, kotlin.collections.List((io.ktor.http.HeaderValueParam)), io.ktor.http.HeaderValueWithParameters.Companion.parse.R)))/init">init</a> function to instantiate particular type

