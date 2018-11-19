---
title: DelegatingConversionService.decode - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="index.html">DelegatingConversionService</a> / <a href="./decode.html">decode</a></div>

# decode

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">decode</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DelegatingConversionService$decode(kotlin.Function2((kotlin.collections.List((kotlin.String)), java.lang.reflect.Type, kotlin.Any)))/converter">converter</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">,</span>&nbsp;<span class="parameterName">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure decoder function. Only one decoder could be supplied

### Exceptions

<code>IllegalStateException</code> - 