---
title: Attributes - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">Attributes</a></div>

# Attributes

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Attributes</span></code></div>

Map of attributes accessible by <a href="../-attribute-key/index.html">AttributeKey</a> in a typed manner

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="all-keys.html">allKeys</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">allKeys</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Returns <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a> of all <a href="../-attribute-key/index.html">AttributeKey</a> instances in this map


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="compute-if-absent.html">computeIfAbsent</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">computeIfAbsent</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="compute-if-absent.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="compute-if-absent.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="compute-if-absent.html#T"><span class="identifier">T</span></a></code></div>

Gets a value of the attribute for the specified <a href="compute-if-absent.html#io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/key">key</a>, or calls supplied <a href="compute-if-absent.html#io.ktor.util.Attributes$computeIfAbsent(io.ktor.util.AttributeKey((io.ktor.util.Attributes.computeIfAbsent.T)), kotlin.Function0((io.ktor.util.Attributes.computeIfAbsent.T)))/block">block</a> to compute its value


</td>
</tr>
<tr>
<td markdown="1">

<a href="contains.html">contains</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">operator</span> <span class="keyword">fun </span><span class="identifier">contains</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$contains(io.ktor.util.AttributeKey((kotlin.Any)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

Checks if an attribute with the specified <a href="contains.html#io.ktor.util.Attributes$contains(io.ktor.util.AttributeKey((kotlin.Any)))/key">key</a> exists


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">operator</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$get(io.ktor.util.AttributeKey((io.ktor.util.Attributes.get.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="get.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="get.html#T"><span class="identifier">T</span></a></code></div>

Gets a value of the attribute for the specified <a href="get.html#io.ktor.util.Attributes$get(io.ktor.util.AttributeKey((io.ktor.util.Attributes.get.T)))/key">key</a>, or throws an exception if an attribute doesn't exist


</td>
</tr>
<tr>
<td markdown="1">

<a href="get-or-null.html">getOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">getOrNull</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$getOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.getOrNull.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="get-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="get-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Gets a value of the attribute for the specified <a href="get-or-null.html#io.ktor.util.Attributes$getOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.getOrNull.T)))/key">key</a>, or return <code>null</code> if an attribute doesn't exist


</td>
</tr>
<tr>
<td markdown="1">

<a href="put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">put</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$put(io.ktor.util.AttributeKey((io.ktor.util.Attributes.put.T)), io.ktor.util.Attributes.put.T)/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="put.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.Attributes$put(io.ktor.util.AttributeKey((io.ktor.util.Attributes.put.T)), io.ktor.util.Attributes.put.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="put.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Creates or changes an attribute with the specified <a href="put.html#io.ktor.util.Attributes$put(io.ktor.util.AttributeKey((io.ktor.util.Attributes.put.T)), io.ktor.util.Attributes.put.T)/key">key</a> using <a href="put.html#io.ktor.util.Attributes$put(io.ktor.util.AttributeKey((io.ktor.util.Attributes.put.T)), io.ktor.util.Attributes.put.T)/value">value</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="remove.html">remove</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">remove</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$remove(io.ktor.util.AttributeKey((io.ktor.util.Attributes.remove.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="remove.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Removes an attribute with the specified <a href="remove.html#io.ktor.util.Attributes$remove(io.ktor.util.AttributeKey((io.ktor.util.Attributes.remove.T)))/key">key</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="take.html">take</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">take</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$take(io.ktor.util.AttributeKey((io.ktor.util.Attributes.take.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="take.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="take.html#T"><span class="identifier">T</span></a></code></div>

Removes an attribute with the specified <a href="take.html#io.ktor.util.Attributes$take(io.ktor.util.AttributeKey((io.ktor.util.Attributes.take.T)))/key">key</a> and returns its current value, throws an exception if an attribute doesn't exist


</td>
</tr>
<tr>
<td markdown="1">

<a href="take-or-null.html">takeOrNull</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span> <span class="identifier">takeOrNull</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.Attributes$takeOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.takeOrNull.T)))/key">key</span><span class="symbol">:</span>&nbsp;<a href="../-attribute-key/index.html"><span class="identifier">AttributeKey</span></a><span class="symbol">&lt;</span><a href="take-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="take-or-null.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Removes an attribute with the specified <a href="take-or-null.html#io.ktor.util.Attributes$takeOrNull(io.ktor.util.AttributeKey((io.ktor.util.Attributes.takeOrNull.T)))/key">key</a> and returns its current value, returns <code>null</code> if an attribute doesn't exist


</td>
</tr>
</tbody>
</table>
