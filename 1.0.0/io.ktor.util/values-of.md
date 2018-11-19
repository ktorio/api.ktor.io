---
title: valuesOf - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="index.html">io.ktor.util</a> / <a href="./values-of.html">valuesOf</a></div>

# valuesOf

<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.util$valuesOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))), kotlin.Boolean)/pairs">pairs</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from a vararg list of pairs

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from a single pair

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> with a single <a href="values-of.html#io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/name">name</a> and multiple <a href="values-of.html#io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/values">values</a>

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an empty <a href="-string-values/index.html">StringValues</a> instance.

</div>
<div class="overload-group" markdown="1">

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/map">map</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from the specified <a href="values-of.html#io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/map">map</a>

</div>
