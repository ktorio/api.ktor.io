---
title: TypeInfo - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.client.call</a> / <a href="./index.html">TypeInfo</a></div>

# TypeInfo

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">TypeInfo</span></code></div>

Ktor type information.
<a href="type.html">type</a>: source KClass&lt;*&gt;
<a href="reified-type.html">reifiedType</a>: type with substituted generics

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">TypeInfo</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.client.call.TypeInfo$<init>(kotlin.reflect.KClass((kotlin.Any)), java.lang.reflect.Type)/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span><span class="symbol">, </span><span class="parameterName" id="io.ktor.client.call.TypeInfo$<init>(kotlin.reflect.KClass((kotlin.Any)), java.lang.reflect.Type)/reifiedType">reifiedType</span><span class="symbol">:</span>&nbsp;<a href="../-type/index.html"><span class="identifier">Type</span></a><span class="symbol">)</span></code></div>

Ktor type information.
<a href="-init-.html#io.ktor.client.call.TypeInfo$<init>(kotlin.reflect.KClass((kotlin.Any)), java.lang.reflect.Type)/type">type</a>: source KClass&lt;*&gt;
<a href="-init-.html#io.ktor.client.call.TypeInfo$<init>(kotlin.reflect.KClass((kotlin.Any)), java.lang.reflect.Type)/reifiedType">reifiedType</a>: type with substituted generics


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="reified-type.html">reifiedType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">reifiedType</span><span class="symbol">: </span><a href="../-type/index.html"><span class="identifier">Type</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><span class="identifier">*</span><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>
