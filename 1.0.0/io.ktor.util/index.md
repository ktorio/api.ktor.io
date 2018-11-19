---
title: io.ktor.util - 
layout: api
---



## Package io.ktor.util

### Types

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-attribute-key/index.html">AttributeKey</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">AttributeKey</span><span class="symbol">&lt;</span><span class="identifier">T</span><span class="symbol">&gt;</span></code></div>

Specifies a key for an attribute in <a href="-attributes/index.html">Attributes</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="-attributes/index.html">Attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">Attributes</span></code></div>

Map of attributes accessible by <a href="-attribute-key/index.html">AttributeKey</a> in a typed manner


</td>
</tr>
<tr>
<td markdown="1">

<a href="-byte-buffer-builder/index.html">ByteBufferBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">ByteBufferBuilder</span></s></code></div>

Helper class for building <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> with the specific content


</td>
</tr>
<tr>
<td markdown="1">

<a href="-case-insensitive-map/index.html">CaseInsensitiveMap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">CaseInsensitiveMap</span><span class="symbol">&lt;</span><span class="identifier">Value</span><span class="symbol">&gt;</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="-case-insensitive-map/index.html#Value"><span class="identifier">Value</span></a><span class="symbol">&gt;</span></code></div>

A map with case insensitive <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> keys


</td>
</tr>
<tr>
<td markdown="1">

<a href="-conversion-service/index.html">ConversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">ConversionService</span></code></div>

Data conversion service that does serialization and deserialization to/from list of strings


</td>
</tr>
<tr>
<td markdown="1">

<a href="-default-conversion-service/index.html">DefaultConversionService</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">object </span><span class="identifier">DefaultConversionService</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-conversion-service/index.html"><span class="identifier">ConversionService</span></a></code></div>

The default conversion service that supports only basic types and enums


</td>
</tr>
<tr>
<td markdown="1">

<a href="-dispatcher-with-shutdown/index.html">DispatcherWithShutdown</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DispatcherWithShutdown</span>&nbsp;<span class="symbol">:</span>&nbsp;<span class="identifier">CoroutineDispatcher</span></code></div>

Specialized dispatcher useful for graceful shutdown


</td>
</tr>
<tr>
<td markdown="1">

<a href="-lock/index.html">Lock</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">class </span><span class="identifier">Lock</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-string-values/index.html">StringValues</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">interface </span><span class="identifier">StringValues</span></code></div>

Provides data structure for associating a <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> with a <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html">List</a> of Strings


</td>
</tr>
<tr>
<td markdown="1">

<a href="-string-values-builder/index.html">StringValuesBuilder</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">StringValuesBuilder</span></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-string-values-impl/index.html">StringValuesImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">StringValuesImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="-string-values-single-impl/index.html">StringValuesSingleImpl</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">class </span><span class="identifier">StringValuesSingleImpl</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Annotations

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-internal-a-p-i/index.html">InternalAPI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">InternalAPI</span></code></div>

API marked with this annotation is ktor internal and it is not intended to be used outside.
It could be modified or removed without any notice. Using it outside of ktor could cause undefined behaviour and/or
any strange effects.


</td>
</tr>
<tr>
<td markdown="1">

<a href="-ktor-experimental-a-p-i/index.html">KtorExperimentalAPI</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">annotation</span> <span class="keyword">class </span><span class="identifier">KtorExperimentalAPI</span></code></div>

API marked with this annotation is experimental and is not guaranteed to be stable.


</td>
</tr>
</tbody>
</table>

### Exceptions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-data-conversion-exception/index.html">DataConversionException</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">class </span><span class="identifier">DataConversionException</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-exception/index.html"><span class="identifier">Exception</span></a></code></div>

Thrown when failed to convert value


</td>
</tr>
</tbody>
</table>

### Extensions for External Classes

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="java.io.-file/index.html">java.io.File</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.lang.-class/index.html">java.lang.Class</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.nio.-byte-buffer/index.html">java.nio.ByteBuffer</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.nio.channels.-readable-byte-channel/index.html">java.nio.channels.ReadableByteChannel</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.nio.channels.-writable-byte-channel/index.html">java.nio.channels.WritableByteChannel</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.nio.file.-path/index.html">java.nio.file.Path</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="java.util.-date/index.html">java.util.Date</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.-char/index.html">kotlin.Char</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.-string/index.html">kotlin.String</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.collections.-set/index.html">kotlin.collections.Set</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlin.ranges.-long-range/index.html">kotlin.ranges.LongRange</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.io.-byte-read-channel/index.html">kotlinx.coroutines.io.ByteReadChannel</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.coroutines.io.-byte-write-channel/index.html">kotlinx.coroutines.io.ByteWriteChannel</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.io.core.-byte-read-packet/index.html">kotlinx.io.core.ByteReadPacket</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="kotlinx.io.core.-input/index.html">kotlinx.io.core.Input</a>


</td>
<td markdown="1">

</td>
</tr>
<tr>
<td markdown="1">

<a href="org.slf4j.-logger/index.html">org.slf4j.Logger</a>


</td>
<td markdown="1">

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-greenwich-mean-time.html">GreenwichMeanTime</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">GreenwichMeanTime</span><span class="symbol">: </span><span class="identifier">ZoneId</span></code></div>

<a href="#">ZoneId</a> for GMT


</td>
</tr>
<tr>
<td markdown="1">

<a href="nonce-random.html">nonceRandom</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><s><span class="identifier">nonceRandom</span></s><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/util/Random.html"><span class="identifier">Random</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-attributes.html">Attributes</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">actual</span> <span class="keyword">fun </span><span class="identifier">Attributes</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$Attributes(kotlin.Boolean)/concurrent">concurrent</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="-attributes/index.html"><span class="identifier">Attributes</span></a></code></div>

Create JVM specific attributes instance


</td>
</tr>
<tr>
<td markdown="1">

<a href="append-all.html">appendAll</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendAll</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</span><span class="symbol">:</span>&nbsp;<a href="-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a></code></div>

Append all values from the specified <a href="append-all.html#io.ktor.util$appendAll(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValuesBuilder)/builder">builder</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="append-filtered.html">appendFiltered</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values-builder/index.html"><span class="identifier">StringValuesBuilder</span></a><span class="symbol">.</span><span class="identifier">appendFiltered</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</span><span class="symbol">:</span>&nbsp;<a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Append values from <a href="append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/source">source</a> filtering values by the specified <a href="append-filtered.html#io.ktor.util$appendFiltered(io.ktor.util.StringValuesBuilder, io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="case-insensitive-map.html">caseInsensitiveMap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">Value</span><span class="symbol">&gt;</span> <span class="identifier">caseInsensitiveMap</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-mutable-map/index.html"><span class="identifier">MutableMap</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="case-insensitive-map.html#Value"><span class="identifier">Value</span></a><span class="symbol">&gt;</span></code></div>

Create an instance of case insensitive mutable map. For internal use only.


</td>
</tr>
<tr>
<td markdown="1">

<a href="decode-base64.html">decodeBase64</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">decodeBase64</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$decodeBase64(kotlin.String)/s">s</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Decode bytes from a BASE64 string <a href="decode-base64.html#io.ktor.util$decodeBase64(kotlin.String)/s">s</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="encode-base64.html">encodeBase64</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">encodeBase64</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$encodeBase64(kotlin.ByteArray)/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode <a href="encode-base64.html#io.ktor.util$encodeBase64(kotlin.ByteArray)/bytes">bytes</a> as a BASE64 string


</td>
</tr>
<tr>
<td markdown="1">

<a href="filter.html">filter</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">filter</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/keepEmpty">keepEmpty</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Create a new instance of <a href="-string-values/index.html">StringValues</a> filtered by the specified <a href="filter.html#io.ktor.util$filter(io.ktor.util.StringValues, kotlin.Boolean, kotlin.Function2((kotlin.String, , kotlin.Boolean)))/predicate">predicate</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="flatten-entries.html">flattenEntries</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">flattenEntries</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Copy values to a list of pairs


</td>
</tr>
<tr>
<td markdown="1">

<a href="flatten-for-each.html">flattenForEach</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">flattenForEach</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$flattenForEach(io.ktor.util.StringValues, kotlin.Function2((kotlin.String, , kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Invoke <a href="flatten-for-each.html#io.ktor.util$flattenForEach(io.ktor.util.StringValues, kotlin.Function2((kotlin.String, , kotlin.Unit)))/block">block</a> function for every value pair


</td>
</tr>
<tr>
<td markdown="1">

<a href="generate-nonce.html">generateNonce</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">generateNonce</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Generates a nonce string 16 characters long. Could block if the system's entropy source is empty


</td>
</tr>
<tr>
<td markdown="1">

<a href="get-digest-function.html">getDigestFunction</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">getDigestFunction</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$getDigestFunction(kotlin.String, kotlin.String)/algorithm">algorithm</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$getDigestFunction(kotlin.String, kotlin.String)/salt">salt</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><span class="symbol">(</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Create a digest function with the specified <a href="get-digest-function.html#io.ktor.util$getDigestFunction(kotlin.String, kotlin.String)/algorithm">algorithm</a> and <a href="get-digest-function.html#io.ktor.util$getDigestFunction(kotlin.String, kotlin.String)/salt">salt</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="hex.html">hex</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hex</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$hex(kotlin.String)/s">s</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Decode bytes from HEX string. It should be no spaces and <code>0x</code> prefixes.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hex</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$hex(kotlin.ByteArray)/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Encode <a href="hex.html#io.ktor.util$hex(kotlin.ByteArray)/bytes">bytes</a> as a HEX string with no spaces, newlines and <code>0x</code> prefixes.


</td>
</tr>
<tr>
<td markdown="1">

<a href="next-nonce.html">nextNonce</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">nextNonce</span></s><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Generates a nonce string 16 characters long. Could block if the system's entropy source is empty


</td>
</tr>
<tr>
<td markdown="1">

<a href="raw.html">raw</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">raw</span></s><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$raw(kotlin.String)/s">s</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Encode string as UTF-8 bytes


</td>
</tr>
<tr>
<td markdown="1">

<a href="sha1.html">sha1</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">sha1</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$sha1(kotlin.ByteArray)/bytes">bytes</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte-array/index.html"><span class="identifier">ByteArray</span></a></code></div>

Compute SHA-1 hash for the specified <a href="sha1.html#io.ktor.util$sha1(kotlin.ByteArray)/bytes">bytes</a>


</td>
</tr>
<tr>
<td markdown="1">

<a href="to-map.html">toMap</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a><span class="symbol">.</span><span class="identifier">toMap</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span></code></div>

Copy values to a new independent map


</td>
</tr>
<tr>
<td markdown="1">

<a href="url.html">url</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">url</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$url(kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Construct a URL

<div class="signature"><code><span class="keyword">fun </span><a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><span class="symbol">.</span><span class="identifier">url</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a>&nbsp;<span class="symbol">=</span>&nbsp;{}<br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Creates an url using current call's schema, path and parameters as initial
and then invokes <a href="url.html#io.ktor.util$url(io.ktor.application.ApplicationCall, kotlin.Function1((io.ktor.http.URLBuilder, kotlin.Unit)))/block">block</a> function on the url builder so amend parameters


</td>
</tr>
<tr>
<td markdown="1">

<a href="use.html">use</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="symbol">&lt;</span><span class="identifier">R</span><span class="symbol">&gt;</span> <a href="-lock/index.html"><span class="identifier">Lock</span></a><span class="symbol">.</span><span class="identifier">use</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util$use(io.ktor.util.Lock, kotlin.Function0((io.ktor.util.use.R)))/block">block</span><span class="symbol">:</span>&nbsp;<span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="use.html#R"><span class="identifier">R</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="use.html#R"><span class="identifier">R</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="values-of.html">valuesOf</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">vararg</span> <span class="parameterName" id="io.ktor.util$valuesOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))), kotlin.Boolean)/pairs">pairs</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-pair/index.html"><span class="identifier">Pair</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.Array((kotlin.Pair((kotlin.String, kotlin.collections.List(()))))), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from a vararg list of pairs

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/value">value</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.String, kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from a single pair

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/name">name</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/values">values</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"><span class="identifier">List</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> with a single <a href="values-of.html#io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/name">name</a> and multiple <a href="values-of.html#io.ktor.util$valuesOf(kotlin.String, kotlin.collections.List((kotlin.String)), kotlin.Boolean)/values">values</a>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an empty <a href="-string-values/index.html">StringValues</a> instance.

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">valuesOf</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/map">map</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-map/index.html"><span class="identifier">Map</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">,</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-iterable/index.html"><span class="identifier">Iterable</span></a><span class="symbol">&lt;</span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">&gt;</span><span class="symbol">&gt;</span><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/caseInsensitiveKey">caseInsensitiveKey</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a>&nbsp;<span class="symbol">=</span>&nbsp;false<br/><span class="symbol">)</span><span class="symbol">: </span><a href="-string-values/index.html"><span class="identifier">StringValues</span></a></code></div>

Build an instance of <a href="-string-values/index.html">StringValues</a> from the specified <a href="values-of.html#io.ktor.util$valuesOf(kotlin.collections.Map((kotlin.String, kotlin.collections.Iterable(()))), kotlin.Boolean)/map">map</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="create-from-call.html">createFromCall</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">URLBuilder.Companion</span><span class="symbol">.</span><span class="identifier">createFromCall</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util$createFromCall(io.ktor.http.URLBuilder.Companion, io.ktor.application.ApplicationCall)/call">call</span><span class="symbol">:</span>&nbsp;<a href="../io.ktor.application/-application-call/index.html"><span class="identifier">ApplicationCall</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="../io.ktor.http/-u-r-l-builder/index.html"><span class="identifier">URLBuilder</span></a></code></div>

Creates an url using current call's schema, path and parameters as initial


</td>
</tr>
</tbody>
</table>
