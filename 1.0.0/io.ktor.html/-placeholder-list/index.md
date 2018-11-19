---
title: PlaceholderList - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.html</a> / <a href="./index.html">PlaceholderList</a></div>

# PlaceholderList

<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">PlaceholderList</span><span class="symbol">&lt;</span><span class="identifier">TOuter</span><span class="symbol">, </span><span class="identifier">TInner</span><span class="symbol">&gt;</span></code></div>

Placeholder that can appear multiple times

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">PlaceholderList</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Placeholder that can appear multiple times


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">apply</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderList$apply(io.ktor.html.PlaceholderList.TOuter, kotlin.Function2((io.ktor.html.PlaceholderList.TOuter, io.ktor.html.PlaceholderItem((io.ktor.html.PlaceholderList.TInner)), kotlin.Unit)))/destination">destination</span><span class="symbol">:</span>&nbsp;<a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderList$apply(io.ktor.html.PlaceholderList.TOuter, kotlin.Function2((io.ktor.html.PlaceholderList.TOuter, io.ktor.html.PlaceholderItem((io.ktor.html.PlaceholderList.TInner)), kotlin.Unit)))/render">render</span><span class="symbol">:</span>&nbsp;<a href="index.html#TOuter"><span class="identifier">TOuter</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-placeholder-item/index.html"><span class="identifier">PlaceholderItem</span></a><span class="symbol">&lt;</span><a href="index.html#TInner"><span class="identifier">TInner</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="invoke.html">invoke</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">invoke</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderList$invoke(kotlin.String, kotlin.Function2((io.ktor.html.PlaceholderList.TInner, io.ktor.html.Placeholder(()), kotlin.Unit)))/meta">meta</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;""<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.html.PlaceholderList$invoke(kotlin.String, kotlin.Function2((io.ktor.html.PlaceholderList.TInner, io.ktor.html.Placeholder(()), kotlin.Unit)))/content">content</span><span class="symbol">:</span>&nbsp;<a href="index.html#TInner"><span class="identifier">TInner</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../-placeholder/index.html"><span class="identifier">Placeholder</span></a><span class="symbol">&lt;</span><a href="index.html#TInner"><span class="identifier">TInner</span></a><span class="symbol">&gt;</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="is-empty.html">isEmpty</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">isEmpty</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
</tbody>
</table>
