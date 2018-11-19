---
title: HoconApplicationConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.config</a> / <a href="./index.html">HoconApplicationConfig</a></div>

# HoconApplicationConfig

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">HoconApplicationConfig</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Implements <a href="../-application-config/index.html">ApplicationConfig</a> by loading configuration from HOCON data structures

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">HoconApplicationConfig</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.config.HoconApplicationConfig$<init>(com.typesafe.config.Config)/config">config</span><span class="symbol">:</span>&nbsp;<span class="identifier">Config</span><span class="symbol">)</span></code></div>

Implements <a href="../-application-config/index.html">ApplicationConfig</a> by loading configuration from HOCON data structures


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="config.html">config</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">config</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.config.HoconApplicationConfig$config(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-application-config/index.html"><span class="identifier">ApplicationConfig</span></a></code></div>

Get config child node or fail


</td>
</tr>
<tr>
<td markdown="1">

<a href="config-list.html">configList</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">configList</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.config.HoconApplicationConfig$configList(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-application-config/index.html"><span class="identifier">ApplicationConfig</span></a><span class="symbol">&gt;</span></code></div>

Get a list of child nodes for <a href="config-list.html#io.ktor.config.HoconApplicationConfig$configList(kotlin.String)/path">path</a> or fail


</td>
</tr>
<tr>
<td markdown="1">

<a href="property.html">property</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">property</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.config.HoconApplicationConfig$property(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="../-application-config-value/index.html"><span class="identifier">ApplicationConfigValue</span></a></code></div>

Get config property with <a href="property.html#io.ktor.config.HoconApplicationConfig$property(kotlin.String)/path">path</a> or fail


</td>
</tr>
<tr>
<td markdown="1">

<a href="property-or-null.html">propertyOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">propertyOrNull</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.config.HoconApplicationConfig$propertyOrNull(kotlin.String)/path">path</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../-application-config-value/index.html"><span class="identifier">ApplicationConfigValue</span></a><span class="symbol">?</span></code></div>

Get config property value for <a href="property-or-null.html#io.ktor.config.HoconApplicationConfig$propertyOrNull(kotlin.String)/path">path</a> or return <code>null</code>


</td>
</tr>
</tbody>
</table>
