---
title: DefaultConversionService - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">DefaultConversionService</a></div>

# DefaultConversionService

<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultConversionService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

The default conversion service that supports only basic types and enums

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-values.html">fromValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.DefaultConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.DefaultConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

Deserialize <a href="from-values.html#io.ktor.util.DefaultConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</a> to an instance of <a href="from-values.html#io.ktor.util.DefaultConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-values.html">toValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.DefaultConversionService$toValues(kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Serialize a <a href="to-values.html#io.ktor.util.DefaultConversionService$toValues(kotlin.Any)/value">value</a> to values list


</td>
</tr>
</tbody>
</table>
