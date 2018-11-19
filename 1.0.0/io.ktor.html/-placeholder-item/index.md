---
title: PlaceholderItem - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.html</a> / <a href="./index.html">PlaceholderItem</a></div>

# PlaceholderItem

<div class="signature"><code><span class="keyword">class </span><span class="identifier">PlaceholderItem</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../-placeholder/index.html"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span></code></div>

Item of a placeholder list when it is expanded

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">PlaceholderItem</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderItem$<init>(kotlin.Int, kotlin.collections.List((io.ktor.html.PlaceholderItem((io.ktor.html.PlaceholderItem.TOuter)))))/index">index</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderItem$<init>(kotlin.Int, kotlin.collections.List((io.ktor.html.PlaceholderItem((io.ktor.html.PlaceholderItem.TOuter)))))/collection">collection</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">PlaceholderItem</span></a><span class="symbol">&lt;</span><a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Item of a placeholder list when it is expanded


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="collection.html">collection</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">collection</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="./index.md"><span class="identifier">PlaceholderItem</span></a><span class="symbol">&lt;</span><a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="first.html">first</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">first</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="--index--.html">index</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">index</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="last.html">last</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">last</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-placeholder/meta.html">meta</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">meta</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-placeholder/apply.html">apply</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">apply</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.html.Placeholder$apply(io.ktor.html.Placeholder.TOuter)/destination">destination</span><span class="symbol">:</span>&nbsp;<a href="../-placeholder/index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="../-placeholder/invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.Placeholder$invoke(kotlin.String, kotlin.Function2((io.ktor.html.Placeholder.TOuter, io.ktor.html.Placeholder(()), kotlin.Unit)))/meta">meta</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;""<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.Placeholder$invoke(kotlin.String, kotlin.Function2((io.ktor.html.Placeholder.TOuter, io.ktor.html.Placeholder(()), kotlin.Unit)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="../-placeholder/index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-placeholder/index.html"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="../-placeholder/index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
</tbody>
</table>
