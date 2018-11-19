---
title: ConditionsHolderBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.features</a> / <a href="./index.html">ConditionsHolderBuilder</a></div>

# ConditionsHolderBuilder

<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConditionsHolderBuilder</span></code></div>

Represents a builder for conditions

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="conditions.html">conditions</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">abstract</span> <span class="keyword">val </span><span class="identifier">conditions</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-list/index.html"><span class="identifier">MutableList</span></a><span class="symbol">&lt;</span><a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">&gt;</span></code></div>

Preconditions applied to every response object to check if it should be compressed


</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../condition.html">condition</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a><span class="symbol">.</span><span class="identifier">condition</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.features$condition(io.ktor.features.ConditionsHolderBuilder, kotlin.Function2((io.ktor.application.ApplicationCall, io.ktor.http.content.OutgoingContent, kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="symbol">(</span><a href="../../io.ktor.http.content/-outgoing-content/index.html"><span class="identifier">OutgoingContent</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a custom condition to the encoder or Compression configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../exclude-content-type.html">excludeContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a><span class="symbol">.</span><span class="identifier">excludeContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.features$excludeContentType(io.ktor.features.ConditionsHolderBuilder, kotlin.Array((io.ktor.http.ContentType)))/mimeTypes">mimeTypes</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a content type exclusion condition to the encoder or Compression configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../match-content-type.html">matchContentType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a><span class="symbol">.</span><span class="identifier">matchContentType</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.features$matchContentType(io.ktor.features.ConditionsHolderBuilder, kotlin.Array((io.ktor.http.ContentType)))/mimeTypes">mimeTypes</span><span class="symbol">:</span>&nbsp;<a href="../../io.ktor.http/-content-type/index.html"><span class="identifier">ContentType</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a content type condition to the encoder or Compression configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../minimum-size.html">minimumSize</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a><span class="symbol">.</span><span class="identifier">minimumSize</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.features$minimumSize(io.ktor.features.ConditionsHolderBuilder, kotlin.Long)/minSize">minSize</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"><span class="identifier">Long</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Appends a minimum size condition to the encoder or Compression configuration


</td>
</tr>
</tbody>
</table>

### Inheritors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../-compression-encoder-builder/index.html">CompressionEncoderBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CompressionEncoderBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a></code></div>

Builder for compression encoder configuration


</td>
</tr>
<tr>
<td markdown="1">

<a href="../-compression/-configuration/index.html">Configuration</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">Configuration</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ConditionsHolderBuilder</span></a></code></div>

Configuration builder for Compression feature


</td>
</tr>
</tbody>
</table>
