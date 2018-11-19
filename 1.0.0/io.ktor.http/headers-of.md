---
title: headersOf - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.http</a> / <a href="./headers-of.html">headersOf</a></div>

# headersOf

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns empty headers

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.String)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance containing only one header with the specified <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.String)/name">name</a> and <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.String)/value">value</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance containing only one header with the specified <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/name">name</a> and <a href="headers-of.html#io.ktor.http$headersOf(kotlin.String, kotlin.collections.List((kotlin.String)))/values">values</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">headersOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.http$headersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-headers/index.html"><span class="identifier">Headers</span></a></code></div>

Returns <a href="-headers/index.html">Headers</a> instance from <a href="headers-of.html#io.ktor.http$headersOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))))/pairs">pairs</a>

</div>
