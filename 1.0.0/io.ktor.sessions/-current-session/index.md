---
title: CurrentSession - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">CurrentSession</a></div>

# CurrentSession

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">CurrentSession</span></code></div>

Represents a container for all session instances

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">clear</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$clear(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session instance for <a href="clear.html#io.ktor.sessions.CurrentSession$clear(kotlin.String)/name">name</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="find-name.html">findName</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">findName</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$findName(kotlin.reflect.KClass((kotlin.Any)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Find session name for the specified <a href="find-name.html#io.ktor.sessions.CurrentSession$findName(kotlin.reflect.KClass((kotlin.Any)))/type">type</a> or fail if not found


</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$get(kotlin.String)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span></code></div>

Get session instance for <a href="get.html#io.ktor.sessions.CurrentSession$get(kotlin.String)/name">name</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="set.html">set</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set new session instance with <a href="set.html#io.ktor.sessions.CurrentSession$set(kotlin.String, kotlin.Any)/name">name</a>


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../clear.html">clear</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">clear</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Clear session instance with type <a href="../clear.html#T">T</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">get</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../get.html#T"><span class="identifier">T</span></a><span class="symbol">?</span></code></div>

Get session instance with type <a href="../get.html#T">T</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="../get-or-set.html">getOrSet</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">getOrSet</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a>&nbsp;<span class="symbol">=</span>&nbsp;findName(T::class)<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="../get-or-set.html#T"><span class="identifier">T</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../get-or-set.html#T"><span class="identifier">T</span></a></code></div>

Get or generate a new session instance using <a href="../get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/generator">generator</a> with type <a href="../get-or-set.html#T">T</a> (or <a href="../get-or-set.html#io.ktor.sessions$getOrSet(io.ktor.sessions.CurrentSession, kotlin.String, kotlin.Function0((io.ktor.sessions.getOrSet.T)))/name">name</a> if specified)


</td>
</tr>
<tr>
<td markdown="1">

<a href="../set.html">set</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span> <a href="./index.md"><span class="identifier">CurrentSession</span></a><span class="symbol">.</span><span class="identifier">set</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions$set(io.ktor.sessions.CurrentSession, io.ktor.sessions.set.T)/value">value</span><span class="symbol">:</span>&nbsp;<a href="../set.html#T"><span class="identifier">T</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Set session instance with type <a href="../set.html#T">T</a>


</td>
</tr>
</tbody>
</table>
