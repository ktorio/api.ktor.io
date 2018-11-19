---
title: SessionSerializer - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">SessionSerializer</a></div>

# SessionSerializer

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">SessionSerializer</span></code></div>

Serializes session from and to <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="deserialize.html">deserialize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">deserialize</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionSerializer$deserialize(kotlin.String)/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a></code></div>

Deserializes a complex arbitrary object from a <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.


</td>
</tr>
<tr>
<td markdown="1">

<a href="serialize.html">serialize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">fun </span><span class="identifier">serialize</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.SessionSerializer$serialize(kotlin.Any)/session">session</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Serializes a complex arbitrary object into a <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a>.


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-session-serializer-reflection/index.html">SessionSerializerReflection</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">SessionSerializerReflection</span><span class="symbol">&lt;</span><span class="identifier">T</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="./index.md"><span class="identifier">SessionSerializer</span></a></code></div>

Default reflection-based session serializer that does it via reflection.
Serialized format is textual and optimized for size as it is could be transferred via HTTP headers or cookies


</td>
</tr>
</tbody>
</table>
