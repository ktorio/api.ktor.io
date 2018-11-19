---
title: CharBufferBuilder - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../index.html">io.ktor.http.cio.internals</a> / <a href="./index.html">CharBufferBuilder</a></div>

# CharBufferBuilder

<div class="signature"><code><span class="keyword">class </span><span class="identifier">CharBufferBuilder</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a></code></div>

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">CharBufferBuilder</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$<init>(kotlinx.io.pool.ObjectPool((java.nio.CharBuffer)))/pool">pool</span><span class="symbol">:</span>&nbsp;<span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/CharBuffer.html"><span class="identifier">CharBuffer</span></a><span class="symbol">&gt;</span>&nbsp;<span class="symbol">=</span>&nbsp;CharBufferPool<span class="symbol">)</span></code></div>

</td>
</tr>
</tbody>
</table>

### Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="length.html">length</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">var </span><span class="identifier">length</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="pool.html">pool</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">pool</span><span class="symbol">: </span><span class="identifier">ObjectPool</span><span class="symbol">&lt;</span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/CharBuffer.html"><span class="identifier">CharBuffer</span></a><span class="symbol">&gt;</span></code></div>

</td>
</tr>
</tbody>
</table>

### Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="append.html">append</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$append(kotlin.Char)/c">c</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char/index.html"><span class="identifier">Char</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$append(kotlin.CharSequence, kotlin.Int, kotlin.Int)/csq">csq</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$append(kotlin.CharSequence, kotlin.Int, kotlin.Int)/start">start</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$append(kotlin.CharSequence, kotlin.Int, kotlin.Int)/end">end</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><br/><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.text/-appendable/index.html"><span class="identifier">Appendable</span></a></code></div>

<div class="signature"><code><span class="keyword">fun </span><span class="identifier">append</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$append(kotlin.CharSequence)/csq">csq</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/lang/Appendable.html"><span class="identifier">Appendable</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="equals.html">equals</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">equals</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$equals(kotlin.Any)/other">other</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html"><span class="identifier">Any</span></a><span class="symbol">?</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="get.html">get</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">get</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$get(kotlin.Int)/index">index</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char/index.html"><span class="identifier">Char</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="hash-code.html">hashCode</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">hashCode</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="release.html">release</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">release</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html"><span class="identifier">Unit</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="sub-sequence.html">subSequence</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">subSequence</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$subSequence(kotlin.Int, kotlin.Int)/startIndex">startIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.internals.CharBufferBuilder$subSequence(kotlin.Int, kotlin.Int)/endIndex">endIndex</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html"><span class="identifier">Int</span></a><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-char-sequence/index.html"><span class="identifier">CharSequence</span></a></code></div>

</td>
</tr>
<tr>
<td markdown="1">

<a href="to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>
