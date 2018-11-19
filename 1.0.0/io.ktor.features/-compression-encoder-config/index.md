---
title: CompressionEncoderConfig - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">CompressionEncoderConfig</a></div>

# CompressionEncoderConfig

<div class="signature"><code><span class="keyword">data</span> <span class="keyword">class </span><span class="identifier">CompressionEncoderConfig</span></code></div>

Configuration for an encoder

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CompressionEncoderConfig</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CompressionEncoderConfig$<init>(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.collections.List((kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))), kotlin.Double)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CompressionEncoderConfig$<init>(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.collections.List((kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))), kotlin.Double)/encoder">encoder</span><span class="symbol">:</span>&nbsp;<a href="../-compression-encoder/index.html"><span class="identifier">CompressionEncoder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CompressionEncoderConfig$<init>(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.collections.List((kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))), kotlin.Double)/conditions">conditions</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.CompressionEncoderConfig$<init>(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.collections.List((kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))), kotlin.Double)/priority">priority</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a><span class="symbol">)</span></code></div>

Configuration for an encoder


</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="conditions.html">conditions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">conditions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Conditions for the encoder


</td>
</tr>
<tr>
<td markdown="1">

<a href="encoder.html">encoder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">encoder</span><span class="symbol">: </span><a href="../-compression-encoder/index.html"><span class="identifier">CompressionEncoder</span></a></code></div>

Encoder implementation


</td>
</tr>
<tr>
<td markdown="1">

<a href="name.html">name</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">name</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Name of the encoder, matched against entry in <code>Accept-Encoding</code> header


</td>
</tr>
<tr>
<td markdown="1">

<a href="priority.html">priority</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">priority</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-double/index.html"><span class="identifier">Double</span></a></code></div>

Priority of the encoder


</td>
</tr>
</tbody>
</table>
