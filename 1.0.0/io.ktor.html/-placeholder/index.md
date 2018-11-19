---
title: Placeholder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.html</a> / <a href="./index.html">Placeholder</a></div>

# Placeholder

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">Placeholder</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span></code></div>

A placeholder that is inserted inside <a href="index.html#TOuter">TOuter</a>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Placeholder</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

A placeholder that is inserted inside <a href="index.html#TOuter">TOuter</a>


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="meta.html">meta</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">meta</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="apply.html">apply</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">apply</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.html.Placeholder$apply(io.ktor.html.Placeholder.TOuter)/destination">destination</span><span class="symbol">:</span>&nbsp;<a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.Placeholder$invoke(kotlin.String, kotlin.Function2((io.ktor.html.Placeholder.TOuter, io.ktor.html.Placeholder(()), kotlin.Unit)))/meta">meta</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;""<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.Placeholder$invoke(kotlin.String, kotlin.Function2((io.ktor.html.Placeholder.TOuter, io.ktor.html.Placeholder(()), kotlin.Unit)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="./index.md"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-placeholder-item/index.html">PlaceholderItem</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">PlaceholderItem</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="../-placeholder-item/index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span></code></div>

Item of a placeholder list when it is expanded


</td>
</tr>
</tbody>
</table>
