---
title: CookieIdSessionBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.sessions</a> / <a href="./index.html">CookieIdSessionBuilder</a></div>

# CookieIdSessionBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CookieIdSessionBuilder</span><span class="symbol">&lt;</span><span class="identifier">S</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;<a href="../-cookie-session-builder/index.html"><span class="identifier">CookieSessionBuilder</span></a><span class="symbol">&lt;</span><a href="index.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span></code></div>

Cookie session configuration builder

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CookieIdSessionBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CookieIdSessionBuilder$<init>(kotlin.reflect.KClass((io.ktor.sessions.CookieIdSessionBuilder.S)))/type">type</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="index.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span><span class="symbol">)</span></code></div>

Cookie session configuration builder


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="session-id-provider.html">sessionIdProvider</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">sessionIdProvider</span><span class="symbol">: </span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Current session ID provider function


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-cookie-session-builder/cookie.html">cookie</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">cookie</span><span class="symbol">: </span><a href="../-cookie-configuration/index.html"><span class="identifier">CookieConfiguration</span></a></code></div>

Cookie header configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-cookie-session-builder/serializer.html">serializer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">serializer</span><span class="symbol">: </span><a href="../-session-serializer/index.html"><span class="identifier">SessionSerializer</span></a></code></div>

Session instance serializer


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-cookie-session-builder/transformers.html">transformers</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">transformers</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">&gt;</span></code></div>

Registered session transformers


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-cookie-session-builder/type.html">type</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">type</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-class/index.html"><span class="identifier">KClass</span></a><span class="symbol">&lt;</span><a href="../-cookie-session-builder/index.html#S"><span class="identifier">S</span></a><span class="symbol">&gt;</span></code></div>
* session instance type

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="identity.html">identity</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">identity</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CookieIdSessionBuilder$identity(kotlin.Function0((kotlin.String)))/f">f</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register session ID generation function


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-cookie-session-builder/transform.html">transform</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">transform</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.sessions.CookieSessionBuilder$transform(io.ktor.sessions.SessionTransportTransformer)/transformer">transformer</span><span class="symbol">:</span>&nbsp;<a href="../-session-transport-transformer/index.html"><span class="identifier">SessionTransportTransformer</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Register a session <a href="../-cookie-session-builder/transform.html#io.ktor.sessions.CookieSessionBuilder$transform(io.ktor.sessions.SessionTransportTransformer)/transformer">transformer</a>. Useful for encryption, signing and so on


</td>
</tr>
</tbody>
</table>
