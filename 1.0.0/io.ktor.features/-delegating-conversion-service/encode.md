---
title: DelegatingConversionService.encode - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">DelegatingConversionService</a> / <a href="./encode.html">encode</a></div>

# encode

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">encode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DelegatingConversionService$encode(kotlin.Function1((kotlin.Any, kotlin.collections.List((kotlin.String)))))/converter">converter</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure encoder function. Only one encoder could be supplied

### Exceptions

<code>IllegalStateException</code> - 