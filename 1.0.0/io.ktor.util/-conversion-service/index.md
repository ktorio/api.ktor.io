---
title: ConversionService - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">ConversionService</a></div>

# ConversionService

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConversionService</span></code></div>

Data conversion service that does serialization and deserialization to/from list of strings

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-values.html">fromValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">fromValues</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Deserialize <a href="from-values.html#io.ktor.util.ConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</a> to an instance of <a href="from-values.html#io.ktor.util.ConversionService$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-values.html">toValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">toValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ConversionService$toValues(kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Serialize a <a href="to-values.html#io.ktor.util.ConversionService$toValues(kotlin.Any)/value">value</a> to values list


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-data-conversion/index.html">DataConversion</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DataConversion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ConversionService</span></a></code></div>

Data conversion feature to serialize and deserialize types using <a href="#">converters</a> registry


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-default-conversion-service/index.html">DefaultConversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultConversionService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ConversionService</span></a></code></div>

The default conversion service that supports only basic types and enums


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../io.ktor.features/-delegating-conversion-service/index.html">DelegatingConversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DelegatingConversionService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ConversionService</span></a></code></div>

Custom convertor builder


</td>
</tr>
</tbody>
</table>
