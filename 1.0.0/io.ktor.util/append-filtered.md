---
title: appendFiltered - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util</a> / <a href="./append-filtered.html">appendFiltered</a></div>

# appendFiltered

<div class="signature"><code><span class="keyword">fun </span><a href="-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendFiltered</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</span><span class="symbol">:</span>&nbsp;<a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append values from <a href="append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</a> filtering values by the specified <a href="append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>

### Parameters

<code>keepEmpty</code> - when <code>true</code> will keep empty lists otherwise keys with no values will be discarded