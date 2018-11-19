---
title: Compression.Configuration - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.features</a> / <a href="../index.html">Compression</a> / <a href="./index.html">Configuration</a></div>

# Configuration

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../../-conditions-holder-builder/index.html"><span class="identifier">ConditionsHolderBuilder</span></a></code></div>

Configuration builder for Compression feature

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Configuration</span><span class="symbol">(</span><span class="symbol">)</span></code></div>

Configuration builder for Compression feature


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
<div class="signature"><code><span class="keyword">val </span><span class="identifier">conditions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Preconditions applied to every response object to check if it should be compressed


</td>
</tr>
<tr>
<td markdown="1">

<a href="encoders.html">encoders</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">encoders</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="../../-compression-encoder-builder/index.html"><span class="identifier">CompressionEncoderBuilder</span></a><span class="symbol">&gt;</span></code></div>

Encoders map by names


</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../../-compression-options/index.html"><span class="identifier">CompressionOptions</span></a></code></div>

Builds <code>CompressionOptions</code>


</td>
</tr>
<tr>
<td markdown="1">

<a href="default.html">default</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">default</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends default configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="encoder.html">encoder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">encoder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.Compression.Configuration$encoder(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.Compression.Configuration$encoder(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/encoder">encoder</span><span class="symbol">:</span>&nbsp;<a href="../../-compression-encoder/index.html"><span class="identifier">CompressionEncoder</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features.Compression.Configuration$encoder(kotlin.String, io.ktor.features.CompressionEncoder, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-compression-encoder-builder/index.html"><span class="identifier">CompressionEncoderBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends an encoder to the configuration


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../deflate.html">deflate</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">deflate</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$deflate(io.ktor.features.Compression.Configuration, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-compression-encoder-builder/index.html"><span class="identifier">CompressionEncoderBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends <code>deflate</code> encoder with default priority of 0.9


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../gzip.html">gzip</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">gzip</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$gzip(io.ktor.features.Compression.Configuration, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-compression-encoder-builder/index.html"><span class="identifier">CompressionEncoderBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends <code>gzip</code> encoder


</td>
</tr>
<tr>
<td markdown="1">

<a href="../../identity.html">identity</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Configuration</span></a><span class="symbol">.</span><span class="identifier">identity</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$identity(io.ktor.features.Compression.Configuration, kotlin.Function1((io.ktor.features.CompressionEncoderBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../../-compression-encoder-builder/index.html"><span class="identifier">CompressionEncoderBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends <code>identity</code> encoder


</td>
</tr>
</tbody>
</table>
