---
title: DelegatingConversionService - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">DelegatingConversionService</a></div>

# DelegatingConversionService

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DelegatingConversionService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

Custom convertor builder

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="decode.html">decode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">decode</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DelegatingConversionService$decode(kotlin.Function2((kotlin.collections.List((kotlin.String)), java.lang.reflect.Type, kotlin.Any)))/converter">converter</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">,</span>&nbsp;<span class="parameterName">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure decoder function. Only one decoder could be supplied


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode.html">encode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">encode</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DelegatingConversionService$encode(kotlin.Function1((kotlin.Any, kotlin.collections.List((kotlin.String)))))/converter">converter</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="parameterName">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Configure encoder function. Only one encoder could be supplied


</td>
</tr>
<tr>
<td markdown="1">

<a href="from-values.html">fromValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DelegatingConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.features.DelegatingConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Deserialize <a href="from-values.html#io.ktor.features.DelegatingConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</a> to an instance of <a href="from-values.html#io.ktor.features.DelegatingConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-values.html">toValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DelegatingConversionService$toValues(kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Serialize a <a href="to-values.html#io.ktor.features.DelegatingConversionService$toValues(kotlin.Any)/value">value</a> to values list


</td>
</tr>
</tbody>
</table>
