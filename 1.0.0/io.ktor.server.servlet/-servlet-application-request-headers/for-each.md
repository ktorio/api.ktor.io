---
title: ServletApplicationRequestHeaders.forEach - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.server.servlet</a> / <a href="index.html">ServletApplicationRequestHeaders</a> / <a href="./for-each.html">forEach</a></div>

# forEach

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">forEach</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.server.servlet.ServletApplicationRequestHeaders$forEach(kotlin.Function2((kotlin.String, kotlin.collections.List(()), kotlin.Unit)))/body">body</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Overrides <a href="../../io.ktor.util/-string-values/for-each.html">StringValues.forEach</a>

Iterates over all entries in this map and calls <a href="for-each.html#io.ktor.server.servlet.ServletApplicationRequestHeaders$forEach(kotlin.Function2((kotlin.String, kotlin.collections.List(()), kotlin.Unit)))/body">body</a> for each pair

Can be optimized in implementations

