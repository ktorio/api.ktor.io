---
title: DataConversion - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">DataConversion</a></div>

# DataConversion

<div class="signature"><code><span class="keyword">class </span><span class="identifier">DataConversion</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

Data conversion feature to serialize and deserialize types using <a href="#">converters</a> registry

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span></code></div>

Data conversion service configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="-feature/index.html">Feature</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">companion</span> <span class="keyword">object </span><span class="identifier">Feature</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../io.ktor.application/-application-feature/index.html"><span class="identifier">ApplicationFeature</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">,</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">,</span>&nbsp;<a href="./index.md"><span class="identifier">DataConversion</span></a><span class="symbol">&gt;</span></code></div>

Object for installing feature


</td>
</tr>
</tbody>
</table>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">DataConversion</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DataConversion$<init>(kotlin.collections.Map((java.lang.reflect.Type, io.ktor.util.ConversionService)))/converters">converters</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">,</span>&nbsp;<a href="../../io.ktor.util/-conversion-service/index.html"><span class="identifier">ConversionService</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Data conversion feature to serialize and deserialize types using <a href="-init-.html#io.ktor.features.DataConversion$<init>(kotlin.collections.Map((java.lang.reflect.Type, io.ktor.util.ConversionService)))/converters">converters</a> registry


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="from-values.html">fromValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">fromValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DataConversion$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.features.DataConversion$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/lang/reflect/Type.html"><span class="identifier">Type</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Deserialize <a href="from-values.html#io.ktor.features.DataConversion$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/values">values</a> to an instance of <a href="from-values.html#io.ktor.features.DataConversion$fromValues(kotlin.collections.List((kotlin.String)), java.lang.reflect.Type)/type">type</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-values.html">toValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toValues</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features.DataConversion$toValues(kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span></code></div>

Serialize a <a href="to-values.html#io.ktor.features.DataConversion$toValues(kotlin.Any)/value">value</a> to values list


</td>
</tr>
</tbody>
</table>

### Companion Object Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="key.html">key</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">key</span><span class="symbol">: </span><a href="../../io.ktor.util/-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">DataConversion</span></a><span class="symbol">&gt;</span></code></div>

Unique key that identifies a feature


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="install.html">install</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">install</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.DataConversion.Configuration, kotlin.Unit)))/pipeline">pipeline</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call-pipeline/index.html"><span class="identifier">ApplicationCallPipeline</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.DataConversion.Feature$install(io.ktor.application.ApplicationCallPipeline, kotlin.Function1((io.ktor.features.DataConversion.Configuration, kotlin.Unit)))/configure">configure</span><span class="symbol">:</span>&nbsp;<a href="-configuration/index.html"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="./index.md"><span class="identifier">DataConversion</span></a></code></div>

Feature installation script


</td>
</tr>
</tbody>
</table>
