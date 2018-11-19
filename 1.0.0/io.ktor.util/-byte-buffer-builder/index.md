---
title: ByteBufferBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.util</a> / <a href="./index.html">ByteBufferBuilder</a></div>

# ByteBufferBuilder

<div class="signature"><code><span class="keyword">class </span><s><span class="identifier">ByteBufferBuilder</span></s></code></div>

**Deprecated:** Use BytePacketBuilder instead

Helper class for building <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> with the specific content

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">ByteBufferBuilder</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$<init>(java.nio.ByteOrder)/order">order</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteOrder.html"><span class="identifier">ByteOrder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ByteOrder.BIG_ENDIAN<span class="symbol">)</span></code></div>

Helper class for building <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> with the specific content


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
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">build</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

Builds a <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">ByteBuffer</a> from the accumulated data


</td>
</tr>
<tr>
<td markdown="1">

<a href="put.html">put</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">put</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$put(java.nio.ByteBuffer)/other">other</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Puts bytes from <a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html">other</a> into this builder

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">put</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$put(kotlin.Byte)/byte">byte</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-byte/index.html"><span class="identifier">Byte</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Puts <a href="put.html#io.ktor.util.ByteBufferBuilder$put(kotlin.Byte)/byte">byte</a> value into this builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="put-int.html">putInt</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">putInt</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$putInt(kotlin.Int)/integer">integer</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Puts <a href="put-int.html#io.ktor.util.ByteBufferBuilder$putInt(kotlin.Int)/integer">integer</a> value into this builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="put-short.html">putShort</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">putShort</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$putShort(kotlin.Short)/short">short</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-short/index.html"><span class="identifier">Short</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Puts <a href="put-short.html#io.ktor.util.ByteBufferBuilder$putShort(kotlin.Short)/short">short</a> value into this builder


</td>
</tr>
<tr>
<td markdown="1">

<a href="put-string.html">putString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">putString</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$putString(kotlin.String, java.nio.charset.Charset)/string">string</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.util.ByteBufferBuilder$putString(kotlin.String, java.nio.charset.Charset)/charset">charset</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/charset/Charset.html"><span class="identifier">Charset</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

Puts <a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html">String</a> value into this builder using specified <a href="put-string.html#io.ktor.util.ByteBufferBuilder$putString(kotlin.String, java.nio.charset.Charset)/charset">charset</a>


</td>
</tr>
</tbody>
</table>

### Companion Object Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="build.html">build</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><s><span class="identifier">build</span></s><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ByteBufferBuilder.Companion$build(java.nio.ByteOrder, kotlin.Function1((io.ktor.util.ByteBufferBuilder, kotlin.Unit)))/order">order</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteOrder.html"><span class="identifier">ByteOrder</span></a>&nbsp;<span class="symbol">=</span>&nbsp;ByteOrder.BIG_ENDIAN<span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.util.ByteBufferBuilder.Companion$build(java.nio.ByteOrder, kotlin.Function1((io.ktor.util.ByteBufferBuilder, kotlin.Unit)))/block">block</span><span class="symbol">:</span>&nbsp;<a href="./index.md"><span class="identifier">ByteBufferBuilder</span></a><span class="symbol">.</span><span class="symbol">(</span><span class="symbol">)</span>&nbsp;<span class="symbol">-&gt;</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>

</td>
</tr>
</tbody>
</table>
