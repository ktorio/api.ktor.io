---
title: StringValues.build - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="index.html">StringValues</a> / <a href="./build.html">build</a></div>

# build

<div class="signature"><code><span class="keyword">inline</span> <span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValues.Companion$build(kotlin.Boolean, kotlin.Function1((io.ktor.util.StringValuesBuilder, kotlin.Unit)))/caseInsensitiveName">caseInsensitiveName</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.StringValues.Companion$build(kotlin.Boolean, kotlin.Function1((io.ktor.util.StringValuesBuilder, kotlin.Unit)))/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="../-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="index.html"><span class="identifier">StringValues</span></a></code></div>

Builds a <a href="index.html">StringValues</a> instance with the given <a href="build.html#io.ktor.util.StringValues.Companion$build(kotlin.Boolean, kotlin.Function1((io.ktor.util.StringValuesBuilder, kotlin.Unit)))/builder">builder</a> function

### Parameters

<code>caseInsensitiveName</code> - specifies if map should have case-sensitive or case-insensitive names

<code>builder</code> - specifies a function to build a map