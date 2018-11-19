---
title: Frame.Text - 
layout: api
---

<div class='api-docs-breadcrumbs'><a href="../../index.html">io.ktor.http.cio.websocket</a> / <a href="../index.html">Frame</a> / <a href="./index.html">Text</a></div>

# Text

<div class="signature"><code><span class="keyword">class </span><span class="identifier">Text</span>&nbsp;<span class="symbol">:</span>&nbsp;<a href="../index.html"><span class="identifier">Frame</span></a></code></div>

Represents an application level text frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="../fin.html">fin</a> = false except the last one).
Please note that a boundary between fragments could be in the middle of multi-byte (unicode) character
so don't apply String constructor to every fragment but use decoder loop instead of concatenate fragments first.
Note that usually there is no need to handle fragments unless you have a RAW web socket session.

### Constructors

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="-init-.html">&lt;init&gt;</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.String)/text">text</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a><span class="symbol">)</span></code></div>

<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, kotlinx.io.core.ByteReadPacket)/packet">packet</span><span class="symbol">:</span>&nbsp;<span class="identifier">ByteReadPacket</span><span class="symbol">)</span></code></div>
<div class="signature"><code><span class="identifier">Text</span><span class="symbol">(</span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</span><span class="symbol">:</span>&nbsp;<a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a><span class="symbol">, </span><span class="parameterName" id="io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/buffer">buffer</span><span class="symbol">:</span>&nbsp;<a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a><span class="symbol">)</span></code></div>

Represents an application level text frame.
In a RAW web socket session a big text frame could be fragmented
(separated into several text frames so they have <a href="-init-.html#io.ktor.http.cio.websocket.Frame.Text$<init>(kotlin.Boolean, java.nio.ByteBuffer)/fin">fin</a> = false except the last one).
Please note that a boundary between fragments could be in the middle of multi-byte (unicode) character
so don't apply String constructor to every fragment but use decoder loop instead of concatenate fragments first.
Note that usually there is no need to handle fragments unless you have a RAW web socket session.


</td>
</tr>
</tbody>
</table>

### Inherited Properties

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../buffer.html">buffer</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">buffer</span><span class="symbol">: </span><a href="http://docs.oracle.com/javase/6/docs/api/java/nio/ByteBuffer.html"><span class="identifier">ByteBuffer</span></a></code></div>
* a frame content or fragment content

</td>
</tr>
<tr>
<td markdown="1">

<a href="../disposable-handle.html">disposableHandle</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">disposableHandle</span><span class="symbol">: </span><span class="identifier">DisposableHandle</span></code></div>

could be invoked when the frame is processed


</td>
</tr>
<tr>
<td markdown="1">

<a href="../fin.html">fin</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">fin</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"><span class="identifier">Boolean</span></a></code></div>

is it final fragment, should be always <code>true</code> for control frames and if no fragmentation is used


</td>
</tr>
<tr>
<td markdown="1">

<a href="../frame-type.html">frameType</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">val </span><span class="identifier">frameType</span><span class="symbol">: </span><a href="../../-frame-type/index.html"><span class="identifier">FrameType</span></a></code></div>

enum value


</td>
</tr>
</tbody>
</table>

### Inherited Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../copy.html">copy</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><span class="identifier">copy</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="../index.html"><span class="identifier">Frame</span></a></code></div>

Creates a frame copy


</td>
</tr>
<tr>
<td markdown="1">

<a href="../to-string.html">toString</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">open</span> <span class="keyword">fun </span><span class="identifier">toString</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

</td>
</tr>
</tbody>
</table>

### Extension Functions

<table class="api-docs-table">
<tbody>
<tr>
<td markdown="1">

<a href="../../read-text.html">readText</a>


</td>
<td markdown="1">
<div class="signature"><code><span class="keyword">fun </span><a href="./index.md"><span class="identifier">Text</span></a><span class="symbol">.</span><span class="identifier">readText</span><span class="symbol">(</span><span class="symbol">)</span><span class="symbol">: </span><a href="https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"><span class="identifier">String</span></a></code></div>

Read text content from text frame. Shouldn't be used for fragmented frames: such frames need to be reassembled first


</td>
</tr>
</tbody>
</table>
